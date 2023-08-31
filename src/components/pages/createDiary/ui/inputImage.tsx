import React from "react";
import { useRecoilState } from "recoil";
import * as I from "../../../../assets";
import * as S from "../style";
import { ImageBox, ImageFrame, ImageWrapper } from "../../diary/detail/style";
import { ImageSrcAtom, ImagesAtom } from "@/atom";

function InputImage() {
  const [imageSrc, setImageSrc] = useRecoilState<File[]>(ImageSrcAtom);
  const [images, setImages] = useRecoilState<string[]>(ImagesAtom);

  const encodeFileToBase64 = async (fileBlob: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);

    reader.onload = () => {
      if (reader.result) {
        setImages([...images, reader.result.toString()]);
      }
    };
  };

  const deleteImg = (index: number) => {
    const imgArr = images.filter((el, idx) => idx !== index);
    setImages([...imgArr]);
  };

  return (
    <div>
      <S.PutImage
        type={"file"}
        onChange={(e) => {
          setImageSrc([...imageSrc, e.target.files![0]]);
          encodeFileToBase64(e.target.files![0]);
        }}
        id={"ImageUpload"}
      ></S.PutImage>

      <ImageFrame>
        <ImageWrapper>
          {images &&
            images?.map((image, index) => {
              return (
                <div key={index}>
                  <ImageBox style={{ width: 120 }} $image={image}>
                    <S.DeleteImage onClick={() => deleteImg(index)}>
                      <I.DeleteButton />
                    </S.DeleteImage>
                  </ImageBox>
                </div>
              );
            })}
        </ImageWrapper>
      </ImageFrame>

      <S.Description>오늘을 대표할 사진을 넣어보세요!</S.Description>

      <S.PutImageLabel htmlFor="ImageUpload">
        <I.BoldPlus />
      </S.PutImageLabel>
    </div>
  );
}

export default InputImage;
