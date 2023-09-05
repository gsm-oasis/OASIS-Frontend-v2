import styled from "@emotion/styled";

export const Input = styled.input`
  border-style: none;
  width: 280px;
  height: 50px;
  background: #ffffff;
  box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.1);
  border-radius: 14px;
  padding: 0px 20px;
  font-size: 12px;
  color: #8d8d8d;
  line-height: 13px;
  outline: none;

  &:nth-child(2) {
    margin-top: 20px;
  }

  &:nth-child(3) {
    margin-top: 20px;
  }
`;

export const Box = styled.div`
  margin-top: 50px;
  width: 375px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 0px 18px rgba(169, 169, 169, 0.25);
  border-radius: 20px;
`;

export const BoxText = styled.div`
  margin-top: 40px;
  font-size: 14px;
  font-weight: 600;
  color: #646464;
`;

export const BoxDescription = styled.div`
  width: 210px;
  margin-top: 10px;
  font-size: 14px;
  color: #959595;
`;

export const Bt = styled.button`
  width: 300px;
  height: 45px;
  border-style: none;
  color: #fff;
  background: #f4cacc;
  border-radius: 10px;
  cursor: pointer;
  font-size: 14px;
  margin-bottom: 30px;
  font-weight: 600;
`;

export const InputCode = styled.input`
  margin-top: 20px;
  margin-bottom: 40px;
  width: 160px;
  height: 40px;
  background: #fafafa;
  border: 0.3px solid #dadada;
  border-radius: 8px;
  text-align: center;
  color: #6f6f6f;
`;
