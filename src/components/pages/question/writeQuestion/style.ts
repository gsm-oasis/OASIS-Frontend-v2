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

export const Count = styled.p<{ isError: boolean }>`
  position: absolute;
  right: 20px;
  color: ${(props) => (props.isError ? "#e10000" : "#4b4b4b")};
  bottom: 0;
`;
