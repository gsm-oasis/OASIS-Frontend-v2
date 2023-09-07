import React, { useEffect, useState } from "react";
import * as S from "./style";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import {
  ChangeNameModalAtom,
  CutOffCoupleModalAtom,
  WithdrawalModalAtom,
} from "@/atom";
import user from "@/network/request/user";
import { Frame, Setting } from "@/components/common/frame";
import { EmptyCompo, Title, TitleText } from "@/components/common/title";
import { useRouter } from "next/router";
import * as I from "@/assets";
import ChangeNameModal from "../ui/changeNameModal";
import CutOffCoupleModal from "../ui/cutOffCoupleModal";
import WithdrawalModal from "../ui/withDrawalModal";

function Settings() {
  const router = useRouter();
  const [version, setVersion] = useState<string>("");
  const [myCode, setMyCode] = useState<string>("");
  const [withdrawalModal, setWithdrawalModal] =
    useRecoilState(WithdrawalModalAtom);
  const [cutOffCoupleModal, setCutOffCoupleModal] = useRecoilState(
    CutOffCoupleModalAtom
  );
  const [changeNameModal, setChangeNameModal] =
    useRecoilState(ChangeNameModalAtom);
  const getInfo = async () => {
    const { data }: any = await user.getInfo();
    setMyCode(data.myCode);
    setVersion(data.version);
  };

  const copyMyCode = () => {
    navigator.clipboard.writeText(myCode);
    toast.success("복사되었습니다.");
  };

  useEffect(() => {
    getInfo();
  }, []);
  return (
    <>
      {withdrawalModal && <WithdrawalModal />}
      {cutOffCoupleModal && <CutOffCoupleModal />}
      {changeNameModal && <ChangeNameModal />}
      <Setting>
        <Frame>
          <Title>
            <div onClick={() => router.push("/")}>
              <I.Back />
            </div>
            <TitleText>설정</TitleText>
            <EmptyCompo />
          </Title>
          <S.ButtonBox>
            <S.Button onClick={() => router.push("/changePw")}>
              <S.Text>비밀번호 변경</S.Text>
              <I.Next />
            </S.Button>
            <S.Button onClick={() => setChangeNameModal(true)}>
              <S.Text>닉네임 변경</S.Text>
              <I.Next />
            </S.Button>
            <S.Button onClick={copyMyCode}>
              <S.Text>내 코드</S.Text>
              <S.MyCode>{myCode}</S.MyCode>
            </S.Button>
          </S.ButtonBox>

          <S.ColorButton
            color="#D9D9D9"
            onClick={() => setWithdrawalModal(true)}
          >
            회원 탈퇴
          </S.ColorButton>
          <S.ColorButton
            color="#F5CACB"
            onClick={() => setCutOffCoupleModal(true)}
          >
            커플 끊기
          </S.ColorButton>
          <S.Version>v {version}</S.Version>
        </Frame>
      </Setting>
    </>
  );
}

export default Settings;
