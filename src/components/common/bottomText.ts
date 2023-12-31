import styled from "@emotion/styled";

export const BottomText = styled.span<{ color: string; weight: string }>`
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};

  &:nth-child(2) {
    cursor: pointer;
  }
`;
