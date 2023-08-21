import React from "react";
import * as S from "./style";

interface LogoProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

function BigLogo(props: LogoProps) {
  const { ...rest } = props;
  return <S.BottomText {...rest}>{props.children}</S.BottomText>;
}

export default BigLogo;
