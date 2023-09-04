import { Back } from "@/assets";
import { Frame, Setting } from "@/components/common/frame";
import { ScrollBox } from "@/components/common/scrollBox";
import { EmptyCompo, Title, TitleText } from "@/components/common/title";
import question from "@/network/request/question";
import { QuestionListContent } from "@/types/question.type";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import QuestionBox from "../ui/questionBox";

function QuestionList() {
  const router = useRouter();
  const [questionList, setQuestionList] = useState<[]>([]);

  const getQuestions = async () => {
    try {
      const response: any = await question.getQuestionList();
      setQuestionList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <>
      <Setting>
        <Frame>
          <Title>
            <div onClick={() => router.push("/")}>
              <Back />
            </div>
            <TitleText>질문 목록</TitleText>
            <EmptyCompo />
          </Title>

          <ScrollBox>
            {questionList &&
              questionList?.map((question: QuestionListContent) => (
                <QuestionBox
                  key={question.questionId}
                  QuestionProps={question}
                />
              ))}
          </ScrollBox>
        </Frame>
      </Setting>
    </>
  );
}

export default QuestionList;
