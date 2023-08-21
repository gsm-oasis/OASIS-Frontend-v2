import React from "react";
import * as S from "./style";

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

function BigLogo(props: LogoProps) {
  const { ...rest } = props;
  return <S.BigLogo {...rest}>{props.children}</S.BigLogo>;
}

export default BigLogo;
