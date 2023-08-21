import { Background } from "./style";
import Spinner from "../../assets/Spinner.gif";
import Image from "next/image";

export default function Loading() {
  return (
    <Background>
      <div style={{ width: 10 }}>
        <Image src={Spinner} alt="로딩중" />
      </div>
    </Background>
  );
}
