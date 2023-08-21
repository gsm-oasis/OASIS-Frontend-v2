import router from "next/router";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import tokenService from "@/utils/tokenService";
import { loggedAtom } from "@/atom/container";
import Main from "@/components/pages/main";

export default function Home() {
  //const [logged] = useRecoilState(loggedAtom);

  // useEffect(() => {
  //   if (tokenService.getLocalAccessToken() && logged) () => router.push("/");
  //   else {
  //     localStorage.removeItem("recoil-persist");
  //     () => router.push("/login");
  //   }
  // }, [logged]);
  return <Main></Main>;
}
