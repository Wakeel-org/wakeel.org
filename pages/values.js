import MarketingPage from "../src/components/MarketingPage";
import { corePages } from "../src/data/marketing";

export default function ValuesPage() {
  return <MarketingPage page={corePages["/values"]} path="/values" />;
}
