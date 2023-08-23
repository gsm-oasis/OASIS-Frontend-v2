import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const Question = dynamic(() => import("@/components/pages/question/index"), {
  ssr: false,
});

export default function QuestionCommentPage() {
  const router = useRouter();
  const { params } = router.query; // params는 배열 형태로 받아옵니다
  const questionId = params ? params[0] : undefined; // 배열에서 첫 번째 요소가 questionId
  const content = params ? params[1] : undefined;

  return <Question id={questionId} content={content} noWrite={false} />;
}
