import RolePage from "../src/components/RolePage";
import { corePages } from "../src/data/marketing";

export default function JudgesPage() {
  return <RolePage page={corePages["/judges"]} path="/judges" />;
}
