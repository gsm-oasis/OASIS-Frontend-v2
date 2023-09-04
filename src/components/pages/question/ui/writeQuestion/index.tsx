import { Frame, Setting } from "@/components/common/frame";
import {
  MyCoupleEmptyAnswer,
  QuestionCommentBox,
  UserName,
} from "@/components/common/question";
import { EmptyCompo, Title, TitleText } from "@/components/common/title";
import question from "@/network/request/question";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Count, TextArea, TextBox } from "./style";
import { GradiantButton } from "@/components/common/button";
import Question from "../../../main/question";
import { Back } from "@/assets";

function WriteQuestionComment(props: any) {
  const router = useRouter();
  const [myComment, setMyComment] = useState<string>("");
  const [answerCount, setAnswerCount] = useState<number>(0);
  const [isError, setIsError] = useState<boolean>(false);

  const onChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setMyComment(e.target.value);
    setAnswerCount(e.target.value.length);
    if (e.target.value.length > 100) setIsError(true);
    else setIsError(false);
  };

  const postMyComment = async () => {
    try {
      if (!myComment) toast.error("답변을 입력해주세요!");
      else if (isError) toast.error("답변 글자 수를 확인해주세요!");
      else {
        console.log(props.id, myComment);
        const response: any = await question.postMyComment(props.id, myComment);
        if (response.status === 201) router.push("/");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Setting>
        <Frame>
          <Title>
            <div onClick={() => router.push("/")}>
              <Back />
            </div>
            <TitleText>질문 답변 작성</TitleText>
            <EmptyCompo />
          </Title>

          <Question questionNum={props.id} content={props.content} />

          <QuestionCommentBox>
            <UserName>{props.questionContent.coupleName}의 답변</UserName>
            <MyCoupleEmptyAnswer>
              답변을 작성해야 상대방의 답변을 볼 수 있어요!
            </MyCoupleEmptyAnswer>
          </QuestionCommentBox>

          <TextBox>
            <UserName style={{ marginTop: 20 }}>
              {props.questionContent.userName}의 답변
            </UserName>
            <TextArea
              placeholder="답변을 작성해주세요!"
              onChange={onChange}
              value={myComment}
              maxLength={100}
            ></TextArea>
            <Count $isError={isError}>{answerCount} / 100</Count>
          </TextBox>

          <GradiantButton onClick={postMyComment}>답변 저장</GradiantButton>
        </Frame>
      </Setting>
    </>
  );
}

export default WriteQuestionComment;
