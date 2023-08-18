import { Inter } from "next/font/google";
import router from "next/router";
import { useRecoilState } from "recoil";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [logged] = useRecoilState(loggedAtom);

  useEffect(() => {
    if (TokenService.getLocalAccessToken() && logged) () => router.push("/");
    else {
      localStorage.removeItem("recoil-persist");
      () => router.push("/login");
    }
  }, [logged]);
  return <></>;
}
