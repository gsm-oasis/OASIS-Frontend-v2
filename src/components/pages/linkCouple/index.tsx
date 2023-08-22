import { useRouter } from "next/router";
import { MyCode } from "./style";
import { useRecoilState } from "recoil";
import { loggedAtom } from "@/atom/container";
import { useEffect, useState } from "react";
import user from "@/network/request/user";
import tokenService from "@/utils/tokenService";
import { ContentFrame, Frame, Setting } from "@/components/common/frame";
import { EmptyCompo, Title, TitleText } from "@/components/common/title";
import * as I from "../../../assets";
import {
  Box,
  BoxDescription,
  BoxText,
  Bt,
  InputCode,
} from "@/components/common/input";

function LinkCouple() {
  const router = useRouter();
  const [, setLogged] = useRecoilState(loggedAtom);
  const [coupleCode, setCoupleCode] = useState<string>("");
  const [myCode, setMyCode] = useState<string>("");
  const CoupleCodeChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setCoupleCode(e.target.value);

  const LinkMyCouple = async () => {
    try {
      const response: any = await user.linkCouple(coupleCode);

      if (response.status === 200) {
        router.push("/setdate");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token") || "";

    try {
      const parsedToken = JSON.parse(token);
      if (parsedToken && parsedToken.coupleCode) {
        setMyCode(parsedToken.coupleCode);
      }
    } catch (error) {
      console.error("Error parsing token:", error);
    }
  }, []);

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
                <I.Back />
              </div>
              <TitleText>커플 연결</TitleText>
              <EmptyCompo></EmptyCompo>
            </Title>
            <Box>
              <BoxText>내 코드</BoxText>
              <BoxDescription>
                내 코드를 상대방의 앱에 입력하거나, 상대방의 코드를 앱에
                입력해주세요!
              </BoxDescription>
              <MyCode>{myCode}</MyCode>
            </Box>

            <Box>
              <BoxText>커플 연결을 위해 상대방의 코드를 입력해주세요!</BoxText>
              <BoxDescription>상대방의 코드를 입력해주세요</BoxDescription>
              <InputCode
                onChange={CoupleCodeChange}
                value={coupleCode}
              ></InputCode>
              <Bt onClick={LinkMyCouple}>확인</Bt>
            </Box>
          </ContentFrame>
        </Frame>
      </Setting>
    </>
  );
}

export default LinkCouple;
