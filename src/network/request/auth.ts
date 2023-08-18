import { instance } from "../data/instance";
import { getAuth } from "../data/getUrl";
import { LoginInterface, SignUpInterface } from "@/types/auth.type";

class Auth {
  mailConfirm(email: string, checkNum: string) {
    try {
      return instance({
        method: "GET",
        url: getAuth.mailConfirm(),
        params: {
          email: email,
          code: checkNum,
        },
      });
    } catch (error) {
      return error;
    }
  }

  sendMail(email: string) {
    try {
      return instance({
        method: "POST",
        url: getAuth.sendMail(),
        params: {
          email: email,
        },
      });
    } catch (error) {
      return error;
    }
  }

  login(data: LoginInterface) {
    try {
      return instance({
        method: "POST",
        url: getAuth.login(),
        data: {
          id: data.id,
          password: data.password,
        },
      });
    } catch (error) {
      return error;
    }
  }

  signup(data: SignUpInterface) {
    try {
      return instance({
        method: "POST",
        url: getAuth.signup(),
        data: {
          id: data.id,
          password: data.password,
          email: data.email,
          nickname: data.nickname,
        },
      });
    } catch (error) {
      return error;
    }
  }

  findId(email: string) {
    try {
      return instance({
        method: "POST",
        url: getAuth.findId(),
        data: {
          email: email,
        },
      });
    } catch (error) {
      return error;
    }
  }

  postNewPw(email: string, password: string, checkPw: string) {
    try {
      return instance({
        method: "PATCH",
        url: getAuth.changePw(),
        data: {
          email: email,
          newPassword: password,
          checkPassword: checkPw,
        },
      });
    } catch (error) {
      return error;
    }
  }
}

export default new Auth();
