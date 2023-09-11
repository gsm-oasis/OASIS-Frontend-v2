import { GradiantButton } from "@/components/common/button";
import { Frame, Setting } from "@/components/common/frame";
import { Input } from "@/components/common/input";
import { EmptyCompo, Title } from "@/components/common/title";
import auth from "@/network/request/auth";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast } from "react-toastify";
import * as I from "@/assets";
import * as S from "./style";

function FindId() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setEmail(e.target.value);

  const getId = async () => {
    try {
      if (email) {
        await auth.findId(email);
        toast.success("이메일을 확인해주세요!");
        router.push("/login");
      } else {
        toast.error("이메일을 입력해주세요!");
      }
    } catch (e: any) {
      if (e.response.status === 400) {
        toast.error("잘못된 이메일입니다!");
      } else if (e.response.status === 404) {
        toast.error("존재하지 않는 유저입니다!");
      }
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
            <I.SmallLogo />
            <EmptyCompo />
          </Title>
          <S.Title>아이디 찾기</S.Title>
          <Input
            placeholder="이메일을 입력해주세요"
            onChange={onChange}
            value={email}
          ></Input>
          <S.Empty />
          <GradiantButton onClick={getId}>아이디 받기</GradiantButton>
        </Frame>
      </Setting>
    </>
  );
}

export default FindId;
