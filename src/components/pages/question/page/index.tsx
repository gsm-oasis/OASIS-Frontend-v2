import question from "@/network/request/question";
import { QuestionContent, QuestionListContent } from "@/types/question.type";
import React, { useEffect, useState } from "react";
import QuestionDetail from "../ui/detail";
import WriteQuestionComment from "../ui/writeQuestion";

const defaultQuestion: QuestionContent = {
  userName: "",
  coupleName: "",
  answer: "",
  coupleAnswer: "상대방이 아직 답변하지 않았어요!",
};

const Question = ({
  id,
  content,
  noWrite,
}: {
  id: string | undefined;
  content: string | undefined;
  noWrite: string | boolean;
}) => {
  const [questionContent, setQuestionContent] =
    useState<QuestionContent>(defaultQuestion);

  const getComment = async () => {
    try {
      if (id) {
        const response: any = await question.getDiaryComment(parseInt(id));
        setQuestionContent(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getComment();
  }, []);

  return (
    <>
      {noWrite ? (
        <QuestionDetail
          id={id}
          content={content}
          questionContent={questionContent}
          back={true}
        />
      ) : (
        <>
          {questionContent.answer && (
            <QuestionDetail
              id={id}
              content={content}
              questionContent={questionContent}
            />
          )}
          {!questionContent.answer && (
            <WriteQuestionComment
              id={id}
              content={content}
              questionContent={questionContent}
            />
          )}
        </>
      )}
    </>
  );
};

export default Question;

export async function getServerSideProps({
  params,
}: {
  params: {
    id: number;
    content: string;
    noWrite: boolean;
  };
}) {
  const questionData = {
    id: params.id,
    content: params.content,
    noWrite: params.noWrite || false,
  };

  return {
    props: { questionData },
  };
}
