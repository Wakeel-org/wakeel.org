import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import Layout from "./Layout";
import MarketingSEO from "./MarketingSEO";
import HeroSafetyNote from "./HeroSafetyNote";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { site } from "../data/marketing";
import { cardBase, headingGradient, heroHeading } from "../data/theme";

const makePageSchema = (page, path) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: page.title,
  description: page.description,
  url: `${site.url}${path}`,
  about: {
    "@type": "SoftwareApplication",
    name: "Wakeel.org",
    applicationCategory: "LegalApplication",
    operatingSystem: "Web, Android",
  },
});

const MarketingPage = ({ page, path }) => (
  <Layout>
    <MarketingSEO
      title={page.title}
      description={page.description}
      path={path}
      schema={makePageSchema(page, path)}
    />

    <section className="bg-background">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-5 lg:gap-6 items-stretch">
          <Card className="border-muted/60 bg-gradient-to-br from-card via-card to-muted/40 shadow-xl">
            <CardContent className="p-5 sm:p-8 lg:p-10 space-y-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                {page.eyebrow}
              </p>
              <h1 className={`${heroHeading} ${headingGradient}`}>
                {page.heading}
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
                {page.intro}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button asChild size="lg" className="cta-try-free">
                  {page.ctaHref?.startsWith("/") ? (
                    <Link href={page.ctaHref}>{page.cta || "Try Wakeel Free"}</Link>
                  ) : (
                    <a href={page.ctaHref || site.appUrl} target="_blank" rel="noopener noreferrer">
                      {page.cta || "Try Wakeel Free"}
                    </a>
                  )}
                </Button>
                <Button asChild variant="outline" size="lg" className="cta-view-legal-sources">
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
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-4">
          {page.sections.map((section) => (
            <Card key={section.title} className={cardBase}>
              <CardHeader>
                <CardTitle className="text-2xl">{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

  </Layout>
);

export default MarketingPage;
