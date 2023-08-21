import {
  SignUpPageAtom,
  emailAtom,
  nickNameAtom,
  passwordAtom,
  userIdAtom,
} from "@/atom/container";
import BigLogo from "@/components/common/bigLogo";
import { Frame, Setting } from "@/components/common/frame";
import auth from "@/network/request/auth";
import { SignUpInterface } from "@/types/auth.type";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { useRecoilValue } from "recoil";
import * as S from "./style";
import * as I from "../../../assets";
import { GradiantButton } from "@/components/common/button";
import { BottomText } from "@/components/common/bottomText";
import IDPW from "./ui/idPw";
import EmailNickName from "./ui/emailNickname";

function SignUp(): JSX.Element {
  const next: boolean = useRecoilValue(SignUpPageAtom);
  const id: string = useRecoilValue(userIdAtom);
  const pw: string = useRecoilValue(passwordAtom);
  const nickname: string = useRecoilValue(nickNameAtom);
  const email: string = useRecoilValue(emailAtom);
  const router = useRouter();

  const user: SignUpInterface = {
    id: id,
    password: pw,
    email: email,
    nickname: nickname,
  };

  const PostSignUp = async (data: SignUpInterface) => {
    try {
      await auth.signup(data);
      toast.success("회원가입 되었습니다!");
      router.push("/login");
    } catch (e: any) {
      if (e.response.status === 409) {
        toast.error("이미 존재하는 아이디에요!");
      }
    }
  };

  return (
    <>
      <Setting>
        <Frame>
          <BigLogo>
            <I.Logo />
          </BigLogo>
          <S.Title>SIGN UP</S.Title>
          <S.Description>
            오아시스에 가입하여 더 깊은 사랑을 나눠보세요.
          </S.Description>
          <S.InputBox>
            {!next && <IDPW />}
            {next && (
              <>
                <EmailNickName />
                <GradiantButton onClick={() => PostSignUp(user)}>
                  회원가입
                </GradiantButton>
              </>
            )}
          </S.InputBox>
          <S.BottomTextBox>
            <BottomText color="#959595" weight="400">
              이미 계정이 있으신가요?{" "}
            </BottomText>
            <BottomText
              color="#E4B3B5"
              weight="700"
              onClick={() => router.push("/login")}
            >
              로그인
            </BottomText>
          </S.BottomTextBox>
        </Frame>
      </Setting>
    </>
  );
}

export default SignUp;
