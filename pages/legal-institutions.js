import MarketingPage from "../src/components/MarketingPage";
import { corePages } from "../src/data/marketing";

export default function LegalInstitutionsPage() {
  return <MarketingPage page={corePages["/legal-institutions"]} path="/legal-institutions" />;
}
