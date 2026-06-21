import MarketingPage from "../src/components/MarketingPage";
import { corePages } from "../src/data/marketing";

export default function LawFirmsPage() {
  return <MarketingPage page={corePages["/law-firms"]} path="/law-firms" />;
}
