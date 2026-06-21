import MarketingPage from "../src/components/MarketingPage";
import { corePages } from "../src/data/marketing";

export default function LegalSourcesPage() {
  return <MarketingPage page={corePages["/legal-sources"]} path="/legal-sources" />;
}
