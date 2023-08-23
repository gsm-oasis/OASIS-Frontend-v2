import { useRecoilState } from "recoil";

import * as S from "./style";
import { useRouter } from "next/router";
import { DiaryContent } from "@/types/main.type";
import { DiaryContentAtom } from "@/atom/container";
import diary from "@/network/request/diary";

interface DiaryProps {
  DiaryProps: DiaryContent;
  nickname?: string;
}

function DiaryList(props: DiaryProps): JSX.Element {
  const router = useRouter();
  const [, setDiaryContent] = useRecoilState(DiaryContentAtom);

  const ClickDiary = async () => {
    try {
      const response: any = await diary.getDiaryContent(
        props.DiaryProps.diaryId
      );
      setDiaryContent(response.data);
      router.push(`/diary/` + props.DiaryProps.diaryId);
    } catch (error) {
      return error;
    }
  };

  return (
    <>
      <S.DiaryBox onClick={ClickDiary}>
        <S.DiaryTextFrame>
          <S.DiaryTitleFrame>
            <S.DiaryTitle>{props.DiaryProps.title}</S.DiaryTitle>
            <S.DiaryDate>{props.DiaryProps.createDate}</S.DiaryDate>
          </S.DiaryTitleFrame>
          <S.DiaryBody>{props.DiaryProps.content}</S.DiaryBody>
          <S.CreatePersonWrapper>
            <S.Circle $isMine={props.nickname === props.DiaryProps.writer} />
            {props.DiaryProps.writer}
          </S.CreatePersonWrapper>
        </S.DiaryTextFrame>
      </S.DiaryBox>
    </>
  );
}

export default DiaryList;
