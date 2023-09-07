import { Frame, Setting } from "@/components/common/frame";
import { EmptyCompo, Title } from "@/components/common/title";
import { useRouter } from "next/router";
import React from "react";
import * as I from "@/assets";
import * as S from "./style";

function Find() {
  const router = useRouter();

  return (
    <>
      <Setting>
        <Frame>
          <Title>
            <div onClick={() => router.push("/login")}>
              <I.Back />
            </div>
            <I.smallLogo />
            <EmptyCompo />
          </Title>

          <S.Box>
            <S.SelectBox onClick={() => router.push("/findId")}>
              <S.Text>아이디 찾기</S.Text>
            </S.SelectBox>
            <S.SelectBox onClick={() => router.push("/findPw")}>
              <S.Text>비밀번호 찾기</S.Text>
            </S.SelectBox>
          </S.Box>
        </Frame>
      </Setting>
    </>
  );
}

export default Find;
