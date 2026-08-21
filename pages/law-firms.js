import RolePage from "../src/components/RolePage";
import { corePages } from "../src/data/marketing";

export default function LawFirmsPage() {
  return <RolePage page={corePages["/law-firms"]} path="/law-firms" />;
}
