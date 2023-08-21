import GlobalStyle from "@/styles/globals";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <ToastContainer
          position="top-right"
          closeButton={false}
          autoClose={600}
        />
      </RecoilRoot>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
