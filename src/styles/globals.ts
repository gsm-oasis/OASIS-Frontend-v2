import { css } from "@emotion/react";
import emotionReset from "emotion-reset";

export const global = css`
  ${emotionReset};
  @font-face {
    font-family: "JaldiBold";
    font-style: normal;
    src: url("/font/Jaldi-Bold.woff") format("woff");
  }

  a {
    text-decoration: none;
    color: black;
    font-size: 12px;
    color: #959595;
  }

  html,
  body {
    width: 100%;
    height: 100%;
  }

  #root {
    margin: 0 auto;
  }

  html {
    font-size: 62.5%;
  }

  * {
    box-sizing: border-box;
  }

  body,
  button {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    background-color: transparent;
    -webkit-tap-highlight-color: transparent;
  }
`;
