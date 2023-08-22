import { Back } from "@/assets";
import { Frame, Setting } from "@/components/common/frame";
import {
  Box,
  BoxDescription,
  BoxText,
  Bt,
  InputCode,
} from "@/components/common/input";
import { EmptyCompo, Title, TitleText } from "@/components/common/title";
import main from "@/network/request/main";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast } from "react-toastify";

function SetDate() {
  const router = useRouter();
  const [date, setDate] = useState<string>("");
  const DataChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setDate(e.target.value);

  const SubmitDate = async () => {
    try {
      await main.submitDate(date);
      router.push("/birthday");
    } catch (e: any) {
      if (e.response.status === 400) {
        toast.error("올바른 형식의 날짜를 입력해주세요");
      } else if (e.response.status === 404) {
        toast.error("404 Not Found");
      }
    }
  };
  return (
    <>
      <Setting>
        <Frame>
          <Title>
            <div onClick={() => router.push("/linkcouple")}>
              <Back />
            </div>
            <TitleText>사귄 날짜 입력</TitleText>
            <EmptyCompo />
          </Title>

          <Box>
            <BoxText>사귄 날짜를 표시하기 위해서 시작일이 필요해요!</BoxText>
            <BoxDescription>사귀기 시작한 날짜를 입력해주세요</BoxDescription>
            <InputCode
              placeholder="ex) 20001021"
              onChange={DataChange}
              value={date}
            ></InputCode>
            <Bt onClick={SubmitDate}>확인</Bt>
          </Box>
        </Frame>
      </Setting>
    </>
  );
}

export default SetDate;
