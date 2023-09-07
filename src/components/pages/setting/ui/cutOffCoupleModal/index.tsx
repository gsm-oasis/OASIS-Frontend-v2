import React from "react";
import { useRecoilState } from "recoil";
import * as S from "./style";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { CutOffCoupleModalAtom, loggedAtom } from "@/atom";
import user from "@/network/request/user";
import tokenService from "@/utils/tokenService";
import ModalBackground from "../modalBackground";
const CutOffCoupleModal = () => {
  const router = useRouter();
  const [, setLogged] = useRecoilState(loggedAtom);
  const [, setCutOffCoupleModal] = useRecoilState(CutOffCoupleModalAtom);
  const cutOffCouple = async () => {
    try {
      await user.cutOffCouple();
      setLogged(false);
      setCutOffCoupleModal(false);
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
        <h3>정말 커플을 끊으시겠습니까?</h3>
        <p>정말 유감입니다. 재회의 마음은 없으신거죠..?</p>
        <button onClick={cutOffCouple}>커플 끊기</button>
      </S.Modal>
    </>
  );
};

export default CutOffCoupleModal;
