import MarketingPage from "../src/components/MarketingPage";
import { corePages } from "../src/data/marketing";

export default function JudgesPage() {
  return <MarketingPage page={corePages["/judges"]} path="/judges" />;
}
