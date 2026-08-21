import RolePage from "../src/components/RolePage";
import { corePages } from "../src/data/marketing";

export default function CitizensPage() {
  return <RolePage page={corePages["/citizens"]} path="/citizens" />;
}
