import axios from "axios";
import tokenService from "@/utils/tokenService";
import { NEXT_APP_BASE_URL } from "@/shared/config";
import { getAuth } from "./getUrl";

export const instance = axios.create({
  baseURL: NEXT_APP_BASE_URL,
  withCredentials: true,
});

instance.interceptors.request.use(
  (config: any) => {
    const token = tokenService.getLocalAccessToken();
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    const error = err.response;
    if (error.status === 401 && !error.config.__isRetryRequest) {
      return getAuthToken().then((response: any) => {
        console.log("new Token:", response.data);
        tokenService.setUser(response.data);
        error.config.__isRetryRequest = true;
        return instance(error.config);
      });
    }

    return Promise.reject(err);
  }
);

let authTokenRequest: any;

function getAuthToken() {
  if (!authTokenRequest) {
    authTokenRequest = makeActualAuthenticationRequest(); // 재발급요청
    authTokenRequest
      .catch(function () {
        tokenService.removeUser();
        window.location.replace("/login");
      })
      .then(resetAuthTokenRequest, resetAuthTokenRequest); // return하고 초기화
  }

  return authTokenRequest;
}

function makeActualAuthenticationRequest() {
  console.log(tokenService.getLocalRefreshToken());
  return axios({
    method: "PATCH",
    url: getAuth.tokenReissuance(), // 토큰 재발급 경로
    headers: {
      RefreshToken: tokenService.getLocalRefreshToken(), // 요청 형식
    },
  });
}

function resetAuthTokenRequest() {
  authTokenRequest = null;
}
