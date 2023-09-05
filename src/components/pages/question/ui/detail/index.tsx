import { useRouter } from "next/router";
import * as S from "./style";
import { Frame, Setting } from "@/components/common/frame";
import { EmptyCompo, Title, TitleText } from "@/components/common/title";
import { Back } from "@/assets";
import Question from "../../../main/ui/question";
import {
  MyCoupleEmptyAnswer,
  QuestionCommentBox,
  UserName,
} from "@/components/common/question";

function QuestionDetail(props: any) {
  const router = useRouter();
  const navi = () => {
    if (props.back) router.push("/questionList");
    else router.push("/");
  };

  return (
    <>
      <Setting>
        <Frame>
          <Title>
            <div onClick={navi}>
              <Back />
            </div>
            <TitleText>질문 상세</TitleText>
            <EmptyCompo />
          </Title>

          <Question questionNum={props.id} content={props.content} />

          {props.questionContent.coupleAnswer === "" ? (
            <QuestionCommentBox>
              <UserName>{props.questionContent.coupleName}의 답변</UserName>
              <MyCoupleEmptyAnswer>
                상대방이 아직 답변을 작성하지 않았어요.
              </MyCoupleEmptyAnswer>
            </QuestionCommentBox>
          ) : (
            <S.CommentBox>
              <S.Name>{props.questionContent.coupleName}의 답변</S.Name>
              <S.Answer>{props.questionContent.coupleAnswer}</S.Answer>
            </S.CommentBox>
          )}

          <S.CommentBox>
            <S.Name>{props.questionContent.userName}의 답변</S.Name>
            <S.Answer>{props.questionContent.answer}</S.Answer>
          </S.CommentBox>
        </Frame>
      </Setting>
    </>
  );
}

export default QuestionDetail;
