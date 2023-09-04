import React from "react";
import * as S from "./style";
import { QuestionListContent } from "@/types/question.type";
import Link from "next/link";

interface QuestionProps {
  QuestionProps: QuestionListContent;
}

function QuestionBox(props: QuestionProps): JSX.Element {
  return (
    <Link
      href={{
        pathname: "/questionComment/[...questionId]",
        query: {
          params: [
            props.QuestionProps.questionId.toString(),
            props.QuestionProps.content,
            "true",
          ],
        },
      }}
      style={{ textDecoration: "none" }}
    >
      <S.QuestionBox>
        <S.IdCircle>{props.QuestionProps.questionId}</S.IdCircle>
        <S.Text>{props.QuestionProps.content}</S.Text>
      </S.QuestionBox>
    </Link>
  );
}

export default QuestionBox;
