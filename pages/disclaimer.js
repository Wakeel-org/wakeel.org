import MarketingPage from "../src/components/MarketingPage";
import { corePages } from "../src/data/marketing";

export default function DisclaimerPage() {
  return <MarketingPage page={corePages["/disclaimer"]} path="/disclaimer" />;
}
