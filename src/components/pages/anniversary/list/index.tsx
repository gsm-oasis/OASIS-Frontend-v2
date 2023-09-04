import React, { useEffect, useState } from "react";
import * as S from "./style";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { AddAnniversaryModalAtom } from "@/atom";
import anniversary from "@/network/request/anniversary";
import { Frame, Setting } from "@/components/common/frame";
import { EmptyCompo, Title, TitleText } from "@/components/common/title";
import * as I from "@/assets";
import AddAnniversaryModal from "../add";

interface anniversaryType {
  idx: number;
  name: string;
  date: string;
}
const AnniversaryList = () => {
  const [anniversaryList, setAnniversaryList] = useState<anniversaryType[]>([]);
  const router = useRouter();
  const [addAnniversaryModal, setAddAnniversaryModal] = useRecoilState(
    AddAnniversaryModalAtom
  );

  const getAnniversary = async () => {
    try {
      const res: any = await anniversary.getAnniversaryList();
      setAnniversaryList(res.data);
    } catch (error) {
      router.push("/");
    }
  };

  useEffect(() => {
    getAnniversary();
  }, []);

  return (
    <>
      {addAnniversaryModal && (
        <AddAnniversaryModal list={anniversaryList.length} />
      )}
      <Setting>
        <Frame>
          <Title>
            <div onClick={() => router.push("/")}>
              <I.Back />
            </div>
            <TitleText>기념일</TitleText>
            <EmptyCompo />
          </Title>
          <S.Layout>
            <>
              <S.Add onClick={() => setAddAnniversaryModal(true)}>
                <I.Plus />
              </S.Add>
              {anniversaryList.length !== 0 ? (
                anniversaryList.map((anniversary: anniversaryType) => (
                  <S.Anniversary key={anniversary.idx}>
                    <h3>{anniversary.name}</h3>
                    <p>
                      {anniversary.date.substring(0, 2)}.
                      {anniversary.date.substring(2, 4)}
                    </p>
                  </S.Anniversary>
                ))
              ) : (
                <p>기념일을 추가해보세요!</p>
              )}
            </>
          </S.Layout>
        </Frame>
      </Setting>
    </>
  );
};

export default AnniversaryList;
