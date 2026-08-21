import RolePage from "../src/components/RolePage";
import { corePages } from "../src/data/marketing";

export default function LegalInstitutionsPage() {
  return <RolePage page={corePages["/legal-institutions"]} path="/legal-institutions" />;
}
