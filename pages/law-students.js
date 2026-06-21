import MarketingPage from "../src/components/MarketingPage";
import { corePages } from "../src/data/marketing";

export default function LawStudentsPage() {
  return <MarketingPage page={corePages["/law-students"]} path="/law-students" />;
}
