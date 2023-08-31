import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Frame, Setting } from "@/components/common/frame";
import { EmptyCompo, Title, TitleText } from "@/components/common/title";
import { Back } from "@/assets";
import { ScrollBox } from "@/components/common/scrollBox";
import DiaryList from "@/components/common/diary";
import { DiaryContent } from "@/types/main.type";
import diary from "@/network/request/diary";

function SharedDiaryList() {
  const router = useRouter();
  const [diaryList, setDiaryList] = useState<[]>([]);

  const getDiaryList = async () => {
    try {
      const response: any = await diary.getDiaryList();
      setDiaryList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDiaryList();
  }, []);

  return (
    <>
      <Setting>
        <Frame>
          <Title>
            <div onClick={() => router.push("/")}>
              <Back />
            </div>
            <TitleText>공유일기 목록</TitleText>
            <EmptyCompo />
          </Title>

          <ScrollBox>
            {diaryList &&
              diaryList?.map((diary: DiaryContent) => (
                <DiaryList key={diary.diaryId} DiaryProps={diary} />
              ))}
          </ScrollBox>
        </Frame>
      </Setting>
    </>
  );
}

export default SharedDiaryList;
