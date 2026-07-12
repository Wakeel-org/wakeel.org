import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { comparisons, site } from "../../../src/data/marketing";

export default function ComparisonsPage() {
  return (
    <Layout>
      <MarketingSEO
        title="Wakeel.org Comparisons"
        description="Professional comparison pages for Wakeel.org and other legal AI tools, based on publicly available information."
        path="/journal/comparisons"
        schema={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Wakeel.org Comparisons",
          description:
            "Professional comparison pages for Wakeel.org and other legal AI tools, based on publicly available information.",
          url: `${site.url}/journal/comparisons`,
        }}
      />

      <section className="bg-background">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
          <div className="max-w-4xl space-y-5">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Comparisons
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Compare legal AI tools responsibly.
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              These pages use a factual, professional framework. Information may change over time, so users should verify current product details directly.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-10 sm:py-12 lg:py-14">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {comparisons.map((comparison) => (
            <Card key={comparison.slug} className="border-muted/60 bg-card/80">
              <CardHeader>
                <CardTitle className="text-xl">{comparison.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Link
                  href={`/journal/article/${comparison.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                >
                  View comparison <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </Layout>
  );
}
