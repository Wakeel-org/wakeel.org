import RolePage from "../src/components/RolePage";
import { corePages } from "../src/data/marketing";

export default function LawyersPage() {
  return <RolePage page={corePages["/lawyers"]} path="/lawyers" />;
}
