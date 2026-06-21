import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import Layout from "./Layout";
import MarketingSEO from "./MarketingSEO";
import HeroSafetyNote from "./HeroSafetyNote";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { site } from "../data/marketing";
import { cardBase, headingGradient, heroHeading } from "../data/theme";

const focusAreas = [
  "Pakistan-specific legal information positioning",
  "Legal research and document understanding workflows",
  "English and Urdu accessibility",
  "Source-aware guidance and human verification reminders",
  "Clear legal safety boundaries",
];

const ComparisonPage = ({ comparison }) => {
  const path = `/${comparison.slug}`;

  return (
    <Layout>
      <MarketingSEO
        title={comparison.title}
        description={`A professional, factual comparison framework for Wakeel.org and ${comparison.competitor}.`}
        path={path}
        schema={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: comparison.title,
          description: `A professional, factual comparison framework for Wakeel.org and ${comparison.competitor}.`,
          url: `${site.url}${path}`,
        }}
      />

      <section className="bg-background">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-5 lg:gap-6 items-stretch">
            <Card className="border-muted/60 bg-gradient-to-br from-card via-card to-muted/40 shadow-xl">
              <CardContent className="p-5 sm:p-8 lg:p-10 space-y-5">
                <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                  Comparison
                </p>
                <h1 className={`${heroHeading} ${headingGradient}`}>
                  {comparison.title}
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  This comparison is based on publicly available information and may change over time. It is intended to help users evaluate legal-information tools carefully, not to attack any product.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Button asChild size="lg" className="cta-try-free">
                    <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                      Try Wakeel Free
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/legal-sources">View Legal Sources</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <HeroSafetyNote />
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-16 sm:py-20 lg:py-24">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-4">
          <Card className={cardBase}>
            <CardHeader>
              <CardTitle>Wakeel.org focus</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {focusAreas.map((area) => (
                  <li key={area} className="flex gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    {area}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className={cardBase}>
            <CardHeader>
              <CardTitle>How to compare responsibly</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                Check whether a tool explains its legal safety limits, supports source verification, handles Pakistani legal context, and avoids presenting AI output as final legal advice.
              </p>
              <p>
                Always verify important legal information with original sources and a licensed advocate before acting.
              </p>
              <Button asChild className="w-full sm:w-auto">
                <Link href="/legal-sources">View Wakeel trust framework</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default ComparisonPage;
