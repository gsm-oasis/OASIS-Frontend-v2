import React, { useEffect, useState } from "react";
import * as S from "./style";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import heart from "@/network/request/heart";
import { Frame, Setting } from "@/components/common/frame";
import { EmptyCompo, Title, TitleText } from "@/components/common/title";
import { Back, Hearts } from "@/assets";

function HeartLevel() {
  const router = useRouter();
  const [heartColor, setHeartColor] = useState<string | undefined>("#F2C0C0");
  const [heartLevel] = useState<number>(
    parseInt(router.query.level as string, 10)
  );
  const [currentBar, setCurrentBar] = useState<number>(0);
  const [maxBar, setMaxBar] = useState<number>(0);
  const [days, setDays] = useState<number>(
    parseInt(router.query.days as string, 10)
  );

  const getHeartColor = (heartLevel: number) => {
    switch (heartLevel) {
      case 1:
        return "#F2C0C0";
      case 2:
        return "#F2D2C0";
      case 3:
        return "#F2E4C0";
      case 4:
        return "#E5F2C0";
    }
  };

  const getHeartLevel = async () => {
    try {
      const response: any = await heart.getHeartLevel();
      setCurrentBar(response.data.levelBar);
      setMaxBar(response.data.max);
    } catch (error) {
      toast.error("404 Not Found");
    }
  };

  useEffect(() => {
    setHeartColor(() => getHeartColor(heartLevel));
    if (days > 100) {
      setDays(days % (100 * heartLevel));
    }
    getHeartLevel();
  }, []);

  return (
    <>
      <Setting>
        <Frame>
          <Title>
            <div onClick={() => router.push("/")}>
              <Back />
            </div>
            <TitleText>하트</TitleText>
            <EmptyCompo />
          </Title>
          <S.Box>
            <S.Text>현재 회원님의 하트 레벨은 {heartLevel}입니다.</S.Text>
            <S.HeartAndProgress>
              <S.Heart>
                <Hearts color={heartColor} len="50px"></Hearts>
                <S.LevelText>Lv.{heartLevel}</S.LevelText>
              </S.Heart>
              <S.HeartProgress
                value={currentBar}
                max={maxBar}
                $valueColor={heartColor!}
              />
            </S.HeartAndProgress>
          </S.Box>
        </Frame>
      </Setting>
    </>
  );
}

export default HeartLevel;
