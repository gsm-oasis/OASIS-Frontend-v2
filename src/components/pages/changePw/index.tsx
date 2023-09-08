import React, { useRef, useState } from "react";
import * as S from "./style";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import user from "@/network/request/user";
import { Frame, Setting } from "@/components/common/frame";
import { EmptyCompo, Title, TitleText } from "@/components/common/title";
import * as I from "@/assets";

const ChangePassword = () => {
  const router = useRouter();
  const originalPassword = useRef<HTMLInputElement>(null);
  const newPassword = useRef<HTMLInputElement>(null);
  const [isError, setIsError] = useState<boolean>(false);

  const changePassword = async (event: any) => {
    event.preventDefault();
    try {
      if (originalPassword.current && newPassword.current) {
        await user.changePassword(
          originalPassword.current.value,
          newPassword.current.value
        );
      }
      router.push("/setting");
      toast.success("비밀번호를 변경했습니다.");
    } catch (error: any) {
      if (error.response.status === 400) {
        setIsError(true);
        toast.error("현재 비밀번호를 확인해주세요.");
      }
    }
  };

  return (
    <Setting>
      <Frame>
        <Title>
          <div onClick={() => router.push("/setting")}>
            <I.Back />
          </div>
          <TitleText>비밀번호 변경</TitleText>
          <EmptyCompo />
        </Title>
        <S.ChangePasswordForm>
          <label>현재 비밀번호</label>
          <S.Input ref={originalPassword} isError={isError} />
          <label>새 비밀번호</label>
          <S.Input ref={newPassword} />
          <button onClick={changePassword}>변경</button>
        </S.ChangePasswordForm>
      </Frame>
    </Setting>
  );
};

export default ChangePassword;
