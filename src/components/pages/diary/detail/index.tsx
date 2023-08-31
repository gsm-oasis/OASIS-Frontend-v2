import React from "react";
import { useRecoilValue } from "recoil";
import * as S from "./style";
import { diaryDetail } from "@/types/diary.type";
import { useRouter } from "next/router";
import { EmptyCompo, Title, TitleText } from "@/components/common/title";
import { Back } from "@/assets";
import { Frame, Setting } from "@/components/common/frame";
import { DiaryContentAtom } from "@/atom/container";

function DiaryDetail(): JSX.Element {
  const router = useRouter();
  const diaryContent = useRecoilValue<diaryDetail>(DiaryContentAtom);

  return (
    <>
      <Setting>
        <Frame>
          <Title>
            <div onClick={() => router.back()}>
              <Back />
            </div>
            <TitleText>{diaryContent?.createDate}</TitleText>
            <EmptyCompo />
          </Title>
          <S.ImageFrame>
            <S.ImageWrapper>
              {diaryContent &&
                diaryContent?.imgs.map((image) => (
                  <div key={image.idx}>
                    <S.ImageBox image={image.imageUrl} />
                  </div>
                ))}
            </S.ImageWrapper>
          </S.ImageFrame>

          <S.ContentBox>
            <S.MoodCircle $moodColor={diaryContent.moodColor}>
              {diaryContent?.mood}
            </S.MoodCircle>
            <S.TextBox>
              <S.TitleText>{diaryContent?.title}</S.TitleText>
              <S.Text>{diaryContent?.content}</S.Text>
            </S.TextBox>
          </S.ContentBox>
        </Frame>
      </Setting>
    </>
  );
}

export default DiaryDetail;
