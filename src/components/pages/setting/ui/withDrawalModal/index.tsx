import React from "react";
import { useRecoilState } from "recoil";
import * as S from "./style";
import { toast } from "react-toastify";
import user from "@/network/request/user";
import { useRouter } from "next/router";
import { WithdrawalModalAtom, loggedAtom } from "@/atom";
import tokenService from "@/utils/tokenService";
import ModalBackground from "../modalBackground";
const WithdrawalModal = () => {
  const router = useRouter();
  const [, setLogged] = useRecoilState(loggedAtom);
  const [, setWithdrawalModal] = useRecoilState(WithdrawalModalAtom);
  const userWithdrawalModal = async () => {
    try {
      await user.userWithdrawal();
      setLogged(false);
      setWithdrawalModal(false);
      tokenService.removeUser();
      router.replace("/login");
    } catch (e: any) {
      if (e.response.status === 404) {
        toast.error("404 Not Found");
      }
    }
  };

  return (
    <>
      <ModalBackground />
      <S.Modal>
        <h3>정말 탈퇴하시겠습니까?</h3>
        <p>탈퇴 시 계정이 삭제되며, 커플 연결이 해제됩니다.</p>
        <button onClick={userWithdrawalModal}>회원 탈퇴</button>
      </S.Modal>
    </>
  );
};

export default WithdrawalModal;
