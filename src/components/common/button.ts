import styled from "@emotion/styled";

export const GradiantButton = styled.button`
  width: 320px;
  height: 50px;
  border-style: none;
  background: linear-gradient(271.91deg, #f5c8c9 0%, #cce1f4 100%);
  border-radius: 27px;
  margin-top: 100px;
  color: #ffff;
  line-height: 16px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`;

export const CheckButton = styled.button<{
  color: string;
  weight: string;
  height: string;
}>`
  width: ${(props) => props.weight}px; // 60
  height: ${(props) => props.height}px; // 50
  margin-left: 20px;
  border-style: none;
  color: #fff;
  background: #${(props) => props.color}; // f4cacc
  border-radius: 10px;
  cursor: pointer;
  font-size: 14px;
`;
