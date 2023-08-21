import { SignUpPageAtom, passwordAtom, userIdAtom } from "@/atom/container";
import { GradiantButton } from "@/components/common/button";
import { Input } from "@/components/common/input";
import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

function IDPW() {
  const [userId, setIdAtom] = useRecoilState(userIdAtom);
  const [password, setPwAtom] = useRecoilState(passwordAtom);
  const setNextPage = useSetRecoilState(SignUpPageAtom);

  const IdChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setIdAtom(e.target.value);
  const PwChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setPwAtom(e.target.value);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setNextPage(true);
    }
  };

  return (
    <>
      <Input
        placeholder="아이디를 입력해주세요"
        onChange={IdChange}
        value={userId}
      />
      <Input
        type="password"
        placeholder="비밀번호를 입력해주세요"
        onChange={PwChange}
        value={password}
        onKeyDown={handleKeyPress}
      />
      <GradiantButton onClick={() => setNextPage(true)}>다음</GradiantButton>
    </>
  );
}

export default IDPW;
