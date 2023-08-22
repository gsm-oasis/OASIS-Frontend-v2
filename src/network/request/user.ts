import { getAnniversary, getUser } from "../data/getUrl";
import { instance } from "../data/instance";

class User {
  linkCouple(coupleCode: string) {
    try {
      return instance({
        method: "POST",
        url: getUser.linkCouple(),
        data: {
          code: coupleCode,
        },
      });
    } catch (error) {
      return error;
    }
  }

  setBirthday(birthday: string) {
    try {
      return instance({
        method: "POST",
        url: getAnniversary.setBirthday(),
        data: {
          anniversaryName: "생일",
          anniversaryDate: birthday,
        },
      });
    } catch (error) {
      return error;
    }
  }

  getInfo() {
    try {
      return instance({
        method: "GET",
        url: getUser.getInfo(),
      });
    } catch (error) {
      return error;
    }
  }

  userWithdrawal() {
    try {
      return instance({
        method: "DELETE",
        url: getUser.userWithdrawal(),
      });
    } catch (error) {
      return error;
    }
  }

  cutOffCouple() {
    try {
      return instance({
        method: "DELETE",
        url: getUser.cutOffCouple(),
      });
    } catch (error) {
      return error;
    }
  }

  changePassword(originalPassword: string, password: string) {
    try {
      return instance({
        method: "PATCH",
        url: getUser.changePassword(),
        data: {
          originalPassword: originalPassword,
          password: password,
        },
      });
    } catch (error) {
      return error;
    }
  }

  changeNickname(nickname: string) {
    try {
      return instance({
        method: "PATCH",
        url: getUser.changeNickname(),
        data: {
          nickname: nickname,
        },
      });
    } catch (error) {
      return error;
    }
  }
}

export default new User();
