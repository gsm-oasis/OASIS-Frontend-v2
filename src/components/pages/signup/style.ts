import Link from "next/link";
import styled from "@emotion/styled";

export const Title = styled.div`
  font-family: JaldiBold;
  line-height: 51px;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #7b7b7b;
`;

export const Description = styled.div`
  font-family: "Apple SD Gothic Neo";
  font-size: 14px;
  font-weight: 400;
  color: #959595;
`;

export const InputBox = styled.div`
  margin-top: 70px;
  width: 40vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  color: #959595;
  margin-top: 12px;
`;
//signup에만 있는거
export const InputAndButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const BottomTextBox = styled.div`
  margin-top: 100px;
  font-size: 12px;
`;
