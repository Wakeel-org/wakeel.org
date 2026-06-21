import MarketingPage from "../src/components/MarketingPage";
import { corePages } from "../src/data/marketing";

export default function LawyersPage() {
  return <MarketingPage page={corePages["/lawyers"]} path="/lawyers" />;
}
