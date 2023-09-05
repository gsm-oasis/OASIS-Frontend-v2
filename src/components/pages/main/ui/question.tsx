import React from "react";
import * as S from "../../../common/question";

function Question(props: any): JSX.Element {
  return (
    <>
      <S.Question>
        <S.QuestionNumBox>
          <S.QuestionNum>{props.questionNum}번째 질문</S.QuestionNum>
        </S.QuestionNumBox>
        <S.QuestionText>Q. {props.content}</S.QuestionText>
        <S.QuestionDescription>{props.description}</S.QuestionDescription>
      </S.Question>
    </>
  );
}

export default Question;
