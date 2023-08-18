import { Html, Head, Main, NextScript } from "next/document";
import { RecoilRoot } from "recoil";
import { ToastContainer } from "react-toastify";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/OASIS.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="커플들의 관계향상과 즐거움을 주기 위한 웹 서비스입니다"
        />
      </Head>
      <body>
        <RecoilRoot>
          <ToastContainer
            position="top-right"
            closeButton={false}
            autoClose={600}
          />
          <Main />
        </RecoilRoot>
        <NextScript />
      </body>
    </Html>
  );
}
