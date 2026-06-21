import MarketingPage from "../src/components/MarketingPage";
import { corePages } from "../src/data/marketing";

export default function CitizensPage() {
  return <MarketingPage page={corePages["/citizens"]} path="/citizens" />;
}
