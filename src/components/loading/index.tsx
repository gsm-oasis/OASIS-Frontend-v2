import { Background } from "./style";
import Spinner from "../../assets/Spinner.gif";
import Image from "next/image";

export default function Loading() {
  return (
    <Background>
      <Image src={Spinner} alt="로딩중" />
    </Background>
  );
}
