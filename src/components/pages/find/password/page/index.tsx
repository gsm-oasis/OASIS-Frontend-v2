import React, { useState } from "react";
import * as S from "./style";
import * as I from "@/assets";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import auth from "@/network/request/auth";
import { Frame, Setting } from "@/components/common/frame";
import { EmptyCompo, Title } from "@/components/common/title";
import { Input } from "@/components/common/input";
import { GradiantButton } from "@/components/common/button";
import NewPw from "../ui/newPw";

function FindPw() {
  const router = useRouter();
  const [changePw, setChangePw] = useState<boolean>(false);
  const [emailCheck, setEmailCheck] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [check, setCheck] = useState<string>("");
  const onCheckChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setCheck(e.target.value);
  const onEmailChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setEmail(e.target.value);

  const postEmail = async () => {
    try {
      await auth.sendMail(email);
      setEmailCheck(true);
    } catch (e: any) {
      toast.error("올바르지 않은 이메일입니다!");
    }
  };

  const checkMail = async () => {
    try {
      await auth.mailConfirm(email, check);
      setChangePw(true);
    } catch (e: any) {
      toast.error("올바른 인증번호를 입력해주세요!");
    }
  };

  return (
    <>
      <Setting>
        <Frame>
          <Title>
            <div onClick={() => router.push("/find")}>
              <I.Back />
            </div>
            <I.smallLogo />
            <EmptyCompo />
          </Title>
          {!changePw && (
            <>
              <S.Title>비밀번호 찾기</S.Title>
              {!emailCheck && (
                <>
                  <Input
                    placeholder="이메일을 입력해주세요"
                    onChange={onEmailChange}
                    value={email}
                  ></Input>
                  <S.Empty />
                  <GradiantButton onClick={postEmail}>다음</GradiantButton>
                </>
              )}
              {emailCheck && (
                <>
                  <Input
                    placeholder="인증번호를 입력해주세요"
                    onChange={onCheckChange}
                    value={check}
                  ></Input>
                  <S.Empty />
                  <GradiantButton onClick={checkMail}>인증하기</GradiantButton>
                </>
              )}
            </>
          )}
          {changePw && <NewPw email={email} />}
        </Frame>
      </Setting>
    </>
  );
}

export default FindPw;
