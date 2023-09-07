import React, { useState } from "react";
import * as S from "../page/style";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import auth from "@/network/request/auth";
import { Input } from "@/components/common/input";
import { GradiantButton } from "@/components/common/button";

function NewPw(props: any) {
  const router = useRouter();
  const [pw, setPw] = useState<string>("");
  const [checkPw, setCheckPw] = useState<string>("");
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setPw(e.target.value);
  const onCheckPw: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setCheckPw(e.target.value);

  const checkMail = async () => {
    try {
      if (pw === checkPw) {
        await auth.postNewPw(props.email, pw, checkPw);
        router.push("/login");
      } else toast.error("비밀번호가 일치하지 않아요!");
    } catch (e: any) {
      toast.error("존재하지 않는 유저입니다.");
      router.push("/login");
    }
  };

  return (
    <>
      <S.Title>새로운 비밀번호 설정</S.Title>
      <Input
        placeholder="새로운 비밀번호를 입력해주세요"
        onChange={onChange}
        value={pw}
      ></Input>
      <Input
        style={{ marginTop: 20 }}
        placeholder="비밀번호 확인"
        onChange={onCheckPw}
        value={checkPw}
      ></Input>
      <GradiantButton onClick={checkMail}>인증하기</GradiantButton>
    </>
  );
}

export default NewPw;
