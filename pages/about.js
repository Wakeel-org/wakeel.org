import AboutPage from "../src/components/AboutPage";
import { corePages } from "../src/data/marketing";

export default function About() {
  return <AboutPage page={corePages["/about"]} path="/about" />;
}
