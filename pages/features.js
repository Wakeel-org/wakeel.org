import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import Layout from "../src/components/Layout";
import MarketingSEO from "../src/components/MarketingSEO";
import { Button } from "../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../src/components/ui/card";
import { featureGroups, site } from "../src/data/marketing";
import { cardBase, eyebrow, headingGradient, heroHeading, sectionHeading } from "../src/data/theme";

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Wakeel.org Features",
  description:
    "Explore Wakeel.org features for AI legal chat, document analysis, legal research, drafting support, study workflows, professional workflows, and institutional support.",
  url: `${site.url}/features`,
};

export default function FeaturesPage() {
  return (
    <Layout>
      <MarketingSEO
        title="Wakeel.org Features"
        description="Explore Wakeel.org features for AI legal chat, document analysis, legal research, drafting support, study workflows, professional workflows, and institutional support."
        path="/features"
        schema={schema}
      />

      <section className="bg-background">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="space-y-5">
            <p className={eyebrow}>
              Product features
            </p>
            <h1 className={`${heroHeading} ${headingGradient}`}>
              Legal information workflows for Pakistan.
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Wakeel helps users ask better legal questions, understand documents, research sources, and organize legal work while keeping human verification central.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <Button asChild size="lg" className="cta-try-free">
                <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                  Try Wakeel Free
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/legal-sources">View Legal Sources</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-16 sm:py-20 lg:py-24">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-4">
          {featureGroups.map((feature) => (
            <Card key={feature.id} id={feature.id} className={`${cardBase} scroll-mt-24`}>
              <CardHeader>
                <CardTitle className="text-2xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div>
                  <p className={`${eyebrow} mb-2`}>
                    What it does
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.does}
                  </p>
                </div>
                <div>
                  <p className={`${eyebrow} mb-2`}>
                    Who it helps
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.helps}
                  </p>
                </div>
                <ul className="space-y-2">
                  {feature.useCases.map((useCase) => (
                    <li key={useCase} className="flex gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      {useCase}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="w-full sm:w-auto">
                  <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                    Try this workflow
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className={sectionHeading}>
            Legal information, not final legal advice.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {site.disclaimer}
          </p>
        </div>
      </section>
    </Layout>
  );
}
