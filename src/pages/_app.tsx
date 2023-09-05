import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Global } from "@emotion/react";
import { global } from "@/styles/globals";
import { ThemeProvider } from "@emotion/react";
import theme from "@/styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <ToastContainer
            position="top-right"
            closeButton={false}
            autoClose={600}
          />
          <Global styles={global} />
          <Component {...pageProps} />
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
}
