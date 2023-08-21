import { useRouter } from "next/router";
import * as S from "./style";
import * as I from "../../../assets";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { isCoupleAtom, loggedAtom } from "@/atom/container";
import { LoginInterface } from "@/types/auth.type";
import auth from "@/network/request/auth";
import tokenService from "@/utils/tokenService";
import { toast } from "react-toastify";
import { Frame, Setting } from "@/components/common/frame";
import { Input } from "@/components/common/input";
import { GradiantButton } from "@/components/common/button";
import { BottomText } from "@/components/common/bottomText";
import { useForm } from "react-hook-form";
import BigLogo from "@/components/common/bigLogo";
import Loading from "@/components/loading";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInterface>();
  const router = useRouter();
  const [isLoad, setIsLoad] = useState<boolean>(false);
  const [, setLogged] = useRecoilState(loggedAtom);
  const [, setisCouple] = useRecoilState(isCoupleAtom);

  const logged = useRecoilValue(loggedAtom);
  const isCouple = useRecoilValue(isCoupleAtom);

  useEffect(() => {
    if (logged) {
      if (isCouple) {
        router.push("/");
      } else router.push("/linkcouple");
    } else router.push("/login");
  }, [logged]);

  const onValid = async (data: LoginInterface) => {
    try {
      setIsLoad(true);
      const response: any = await auth.login(data);

      tokenService.setUser(response.data);

      setisCouple(response.data.isCouple);
      setIsLoad(false);
      setLogged(true);
    } catch (e: any) {
      setIsLoad(false);
      if (e.response.status === 400) {
        toast.error("잘못된 비밀번호입니다!");
      } else if (e.response.status === 404) {
        toast.error("존재하지 않는 아이디에요!");
      }
    }
  };

  const inValid = (e: any) => {
    console.log(e);
  };

  return (
    <>
      {isLoad && <Loading />}
      <Setting>
        <Frame>
          <BigLogo>
            <I.Logo />
          </BigLogo>
          <S.Title>LOGIN</S.Title>
          <S.Description>
            앱을 사용하기 위해선 로그인이 필요합니다.
          </S.Description>
          <form onSubmit={handleSubmit(onValid, inValid)}>
            <S.InputBox>
              <Input
                placeholder="아이디를 입력해주세요"
                {...register("id", { required: true })}
              ></Input>
              <Input
                type="password"
                placeholder="비밀번호를 입력해주세요"
                {...register("password", { required: true })}
              ></Input>

              <S.StyledLink href="/find">
                비밀번호 또는 아이디를 잊어버리셨나요?
              </S.StyledLink>
              <GradiantButton>Login</GradiantButton>
            </S.InputBox>
          </form>
          <S.BottomTextBox>
            <BottomText color="#959595" weight="400">
              계정이 없으신가요?{" "}
            </BottomText>
            <BottomText
              color="#E4B3B5"
              weight="700"
              onClick={() => router.push("/signup")}
            >
              회원가입
            </BottomText>
          </S.BottomTextBox>
        </Frame>
      </Setting>
    </>
  );
}

export default Login;
