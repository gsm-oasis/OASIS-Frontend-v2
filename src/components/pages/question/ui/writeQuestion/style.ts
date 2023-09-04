import styled from "styled-components";

export const TextArea = styled.textarea`
  resize: none;
  width: 325px;
  min-height: 100px;
  color: #555555;
  font-weight: 600;
  font-size: 12px;
  border: none;
  margin: 6px 21px 25px 21px;
  border-radius: 10px;
  padding: 6px;
  &::placeholder {
    color: #b9b9b9;
    font-weight: 600;
    font-size: 12px;
  }
  &:focus {
    background: #eeeeee;
    outline: 0px solid #999999;
  }
`;

export const TextBox = styled.div`
  margin-top: 25px;
  width: 375px;
  box-shadow: 0px 0px 18px rgba(169, 169, 169, 0.25);
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: center;
  padding-bottom: 24px;
  position: relative;
`;

export const Count = styled.p<{ $isError: boolean }>`
  position: absolute;
  right: 20px;
  color: ${(props) => (props.$isError ? "#e10000" : "#4b4b4b")};
  bottom: 0;
  margin: 16px 0px;
  font-size: 16px;
`;
