import dynamic from "next/dynamic";

const HeartLevel = dynamic(() => import("@/components/pages/heartLevel"), {
  ssr: false,
});

export default function HeartLevelPage() {
  return <HeartLevel></HeartLevel>;
}
