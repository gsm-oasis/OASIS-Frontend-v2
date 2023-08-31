import styled from "styled-components";

export const ImageFrame = styled.div`
  margin-top: 50px;
  width: 375px;
  height: 200px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 375px;
  height: 230px;
  overflow-x: auto;
  white-space: nowrap;
  align-items: center;
`;

// export const Image = styled.img``;

export const ImageBox = styled.div<{ image: string }>`
  background: url(${(props) => props.image});
  width: 140px;
  flex-shrink: 0;
  height: 200px;
  position: relative;
  margin-right: 10px;
  border-radius: 18px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0px 0px 18px rgba(169, 169, 169, 0.25);
`;

export const ContentBox = styled.div`
  margin-top: 45px;
  width: 375px;
  height: auto;
  position: relative;
`;

export const TextBox = styled.div`
  margin-top: 25px;
  width: 375px;
  box-shadow: 0px 0px 18px rgba(169, 169, 169, 0.25);
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const TitleText = styled.div`
  color: #808080;
  font-weight: 700;
  font-size: 14px;
  margin-top: 25px;
  margin-left: 25px;
`;

export const Text = styled.div`
  width: 325px;
  color: #b9b9b9;
  font-weight: 600;
  font-size: 12px;
  margin: 15px 0 25px 25px;
`;

export const MoodCircle = styled.div<{ $moodColor: string }>`
  right: 0;
  position: absolute;
  margin-right: -25px;
  width: 50px;
  height: 50px;
  background: ${(props) => props.$moodColor};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
`;
