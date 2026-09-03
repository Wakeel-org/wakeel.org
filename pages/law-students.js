import RolePage from "../src/components/RolePage";
import { corePages } from "../src/data/marketing";

export default function LawStudentsPage() {
  return <RolePage page={corePages["/law-students"]} path="/law-students" />;
}
