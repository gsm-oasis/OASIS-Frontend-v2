import { NEXT_APP_BASE_URL } from "@/shared/config";

export const getAuth = {
  signup: () => {
    return NEXT_APP_BASE_URL + "auth/signup";
  },
  login: () => {
    return NEXT_APP_BASE_URL + "auth/login";
  },
  mailConfirm: () => {
    return NEXT_APP_BASE_URL + "auth/code";
  },
  sendMail: () => {
    return NEXT_APP_BASE_URL + "auth/email";
  },
  findId: () => {
    return NEXT_APP_BASE_URL + "auth/id";
  },
  changePw: () => {
    return NEXT_APP_BASE_URL + "auth/password";
  },

  tokenReissuance: () => {
    return NEXT_APP_BASE_URL + "auth/refresh";
  },
};

export const getUser = {
  linkCouple: () => {
    return NEXT_APP_BASE_URL + "user";
  },

  setBirthday: () => {
    return NEXT_APP_BASE_URL + "user/anniversary";
  },

  getInfo: () => {
    return NEXT_APP_BASE_URL + "user";
  },
  userWithdrawal: () => {
    return NEXT_APP_BASE_URL + "user";
  },
  cutOffCouple: () => {
    return NEXT_APP_BASE_URL + "user/unconnect";
  },
  changePassword: () => {
    return NEXT_APP_BASE_URL + "user/password";
  },
  changeNickname: () => {
    return NEXT_APP_BASE_URL + "user/nickname";
  },
};

export const getMain = {
  submitDate: () => {
    return NEXT_APP_BASE_URL + "couple";
  },
  postMain: () => {
    return NEXT_APP_BASE_URL + "couple";
  },
};

export const getDiary = {
  diary: () => {
    return NEXT_APP_BASE_URL + "diary";
  },

  getList: () => {
    return NEXT_APP_BASE_URL + "diary/list";
  },
};

export const getQuestion = {
  comment: () => {
    return NEXT_APP_BASE_URL + "question/";
  },

  getList: () => {
    return NEXT_APP_BASE_URL + "question/list";
  },
};

export const getHeart = {
  getHeart: () => {
    return NEXT_APP_BASE_URL + "heart";
  },
};

export const getAnniversary = {
  getaAnniversary: () => {
    return NEXT_APP_BASE_URL + "anniversary";
  },
};
