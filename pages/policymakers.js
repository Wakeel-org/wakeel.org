import RolePage from "../src/components/RolePage";
import { corePages } from "../src/data/marketing";

export default function PolicymakersPage() {
  return <RolePage page={corePages["/policymakers"]} path="/policymakers" />;
}
