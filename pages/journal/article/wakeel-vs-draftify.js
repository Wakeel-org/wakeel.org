import ComparisonPage from "../../../src/components/ComparisonPage";
import { comparisons } from "../../../src/data/marketing";

export default function WakeelVsDraftifyPage() {
  return <ComparisonPage comparison={comparisons.find((item) => item.slug === "wakeel-vs-draftify")} />;
}
