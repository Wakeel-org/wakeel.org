import MarketingPage from "../src/components/MarketingPage";
import { corePages } from "../src/data/marketing";

export default function PolicymakersPage() {
  return <MarketingPage page={corePages["/policymakers"]} path="/policymakers" />;
}
