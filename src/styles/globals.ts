import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};
  @font-face {
    font-family: 'JaldiBold';
    font-style: normal;
    src: url('/font/Jaldi-Bold.woff') format('woff');
  }


  font-family: 'Apple SD Gothic Neo';
  a {
    text-decoration: none;
  color: black;
  margin-left: 125px;
  font-size: 12px;
  margin-top: 10px;
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

  body, button {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
    Helvetica Neue, sans-serif;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    background-color: transparent;
    -webkit-tap-highlight-color : transparent;
  }
`;

export default GlobalStyle;
