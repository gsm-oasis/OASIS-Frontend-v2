import { Back } from "@/assets";
import { loggedAtom } from "@/atom/container";
import { ContentFrame, Frame, Setting } from "@/components/common/frame";
import {
  Box,
  BoxDescription,
  BoxText,
  Bt,
  InputCode,
} from "@/components/common/input";
import { EmptyCompo, Title, TitleText } from "@/components/common/title";
import user from "@/network/request/user";
import tokenService from "@/utils/tokenService";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";

function SetBirthday() {
  const router = useRouter();
  const [, setLogged] = useRecoilState(loggedAtom);
  const [birthday, setBirthday] = useState<string>("");
  const birthdayChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setBirthday(e.target.value);

  const setBirthDay = async () => {
    try {
      await user.setBirthday(birthday);

      router.push("/");
    } catch (e: any) {
      if (e.response.status === 400) {
        toast.error("다시 입력해주세요!");
      }
    }
  };

  return (
    <>
      <Setting>
        <Frame>
          <ContentFrame>
            <Title>
              <div
                onClick={() => {
                  tokenService.removeUser();
                  setLogged(false);
                  router.push("/login");
                }}
              >
                <Back />
              </div>
              <TitleText>생일 입력</TitleText>
              <EmptyCompo />
            </Title>
            <Box>
              <BoxText>기념일 생성을 위해 자신의 생일을 입력해주세요!</BoxText>
              <BoxDescription>자신의 생일을 입력해주세요</BoxDescription>
              <InputCode
                onChange={birthdayChange}
                value={birthday}
                placeholder="ex) 0629"
              ></InputCode>
              <Bt onClick={setBirthDay}>확인</Bt>
            </Box>
          </ContentFrame>
        </Frame>
      </Setting>
    </>
  );
}

export default SetBirthday;
