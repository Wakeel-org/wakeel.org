import Link from "next/link";
import { AlertTriangle, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { site } from "../data/marketing";

// Shared right-hand hero panel used across inner-page heroes so every page
// gets the same two-column treatment as the homepage.
const HeroSafetyNote = () => (
  <Card className="border-2 border-primary/20 bg-primary/5 shadow-none">
    <CardHeader>
      <CardTitle className="flex items-center gap-2 text-xl">
        <AlertTriangle className="h-5 w-5 text-primary" />
        Legal safety note
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      <p className="text-sm text-muted-foreground leading-relaxed">
        {site.disclaimer}
      </p>
      <Link
        href="/disclaimer"
        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
      >
        Read the full disclaimer <ArrowRight className="h-4 w-4" />
      </Link>
    </CardContent>
  </Card>
);

export default HeroSafetyNote;
