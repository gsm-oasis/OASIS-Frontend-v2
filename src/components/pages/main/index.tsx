import { nickNameAtom } from "@/atom/container";
import main from "@/network/request/main";
import { DiaryContent, DiaryProps } from "@/types/main.type";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import * as S from "./style";
import { useRouter } from "next/router";
import * as I from "@/assets";
import { Setting } from "@/components/common/frame";
import Question from "./question";
import DiaryList from "@/components/common/diary";
import tokenService from "@/utils/tokenService";
import { loggedAtom } from "@/atom/container";

const defaultProps: DiaryProps = {
  nickname: "",
  coupleNickname: "",
  heartLevel: 0,
  datingDate: 0,
  severalHundredDays: 0,
  daysLeft: 0,
  anniversaryName: 0,
  questionId: 0,
  content: "",
  diaries: [],
};

function Main() {
  const [mainContent, setContent] = useState<DiaryProps>(defaultProps);
  const [, setName] = useRecoilState(nickNameAtom);
  const [hoverState, setHover] = useState(false);
  const [hoverMail, setHoverMail] = useState(false);
  const [hoverCalender, setHoverCalender] = useState(false);
  const router = useRouter();
  const [logged] = useRecoilState(loggedAtom);

  const getHeartColor = (heartLevel: number) => {
    switch (heartLevel) {
      case 1:
        return "#F2C0C0";
      case 2:
        return "#F2D2C0";
      case 3:
        return "#F2E4C0";
      case 4:
        return "#E5F2C0";
    }
  };

  const PostMain = async () => {
    try {
      const response: any = await main.postMain();

      setContent(response.data);
      setName(response.data.nickname);
    } catch (e: any) {
      if (e.response.status === 403) {
        router.push("/login");
      }
    }
  };

  useEffect(() => {
    PostMain();
  }, []);

  return (
    <>
      <Setting>
        <S.MainFrame>
          <S.Top>
            <S.LeftBox>
              <S.CoupleName>
                <div>{mainContent?.coupleNickname}</div>
                <I.Hearts
                  color={getHeartColor(mainContent?.heartLevel)}
                  len="20px"
                />
                <div>{mainContent?.nickname}</div>
              </S.CoupleName>
              <S.DateDays>{mainContent?.datingDate} DAYS</S.DateDays>
              {mainContent?.severalHundredDays === mainContent.datingDate ? (
                <S.ToAnniversary>
                  오늘은 {mainContent?.severalHundredDays}일째 되는 날이에요!
                </S.ToAnniversary>
              ) : (
                <S.ToAnniversary>
                  {mainContent?.severalHundredDays}일만큼{" "}
                  {mainContent?.severalHundredDays - mainContent.datingDate}일
                  남았어요!
                </S.ToAnniversary>
              )}
              {mainContent?.daysLeft === 0 ? (
                <S.ToAnniversary>
                  오늘은 {mainContent.anniversaryName} 날이에요
                </S.ToAnniversary>
              ) : (
                <S.ToAnniversary>
                  {mainContent?.anniversaryName}까지 {mainContent?.daysLeft}일
                  남았어요!
                </S.ToAnniversary>
              )}
            </S.LeftBox>
            <S.RightBox>
              <S.IconBox
                onMouseOver={() => setHoverCalender(true)}
                onMouseLeave={() => setHoverCalender(false)}
                onClick={() => router.push("/anniversary")}
              >
                {!hoverCalender ? <I.Calender /> : <I.ColorCalender />}
              </S.IconBox>
              <S.IconBox
                onMouseOver={() => setHoverMail(true)}
                onMouseLeave={() => setHoverMail(false)}
                onClick={() => router.push("/questionList")}
              >
                {!hoverMail && <I.Mail />}
                {hoverMail && <I.ColorMail />}
              </S.IconBox>
              <S.IconBox
                onMouseOver={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onClick={() =>
                  router.push("/heartLevel", {
                    query: {
                      level: mainContent?.heartLevel,
                      days: mainContent?.datingDate,
                    },
                  })
                }
              >
                {!hoverState && <I.BlankHeart />}
                {hoverState && <I.RedHeart />}
              </S.IconBox>
              <S.IconBox onClick={() => router.push("/setting")}>
                <I.SettingIcon />
              </S.IconBox>
            </S.RightBox>
          </S.Top>
          <div
            onClick={() =>
              router.push("/questionComment", {
                query: {
                  Id: mainContent?.questionId,
                  content: mainContent?.content,
                },
              })
            }
            style={{ cursor: "pointer" }}
          >
            <Question
              questionNum={mainContent?.questionId}
              content={mainContent?.content}
              description="질문을 클릭해서 답변을 남겨보세요!"
            />
          </div>

          <S.Line />
          <S.DiaryFrame>
            <S.DiaryTitleFrame>
              <S.DTitle onClick={() => router.push("/diaryList")}>
                공유일기
              </S.DTitle>
              <div onClick={() => router.push("/createDiary")}>
                <I.Plus />
              </div>
            </S.DiaryTitleFrame>
            <S.DiaryWrapper>
              {mainContent?.diaries &&
                mainContent.diaries.map((diary: DiaryContent) => (
                  <div key={diary.diaryId} style={{ cursor: "pointer" }}>
                    <DiaryList
                      DiaryProps={diary}
                      nickname={mainContent.nickname}
                    />
                  </div>
                ))}
            </S.DiaryWrapper>
          </S.DiaryFrame>
        </S.MainFrame>
      </Setting>
    </>
  );
}

export default Main;
