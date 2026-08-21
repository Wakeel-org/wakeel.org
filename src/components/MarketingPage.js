import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import Layout from "./Layout";
import MarketingSEO from "./MarketingSEO";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { PortalStamp } from "./ui/chip";
import { site } from "../data/marketing";
import { cardBase, headingGradient, heroHeading } from "../data/theme";
import { portals } from "../data/designSystem";

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

const MarketingPage = ({ page, path }) => {
  const portal = page.portal ? portals[page.portal] : null;
  const ctaStyle = portal
    ? { backgroundColor: portal.primary, borderColor: portal.primary, color: "#FFFFFF" }
    : undefined;

  return (
  <Layout>
    <MarketingSEO
      title={page.title}
      description={page.description}
      path={path}
      schema={makePageSchema(page, path)}
    />

    {/* Portal identity accent — 3px top rule in the portal's primary color.
        Applied only to this hero band; never tints backgrounds or cards. */}
    <section
      className="bg-background"
      style={portal ? { borderTop: `3px solid ${portal.primary}` } : undefined}
    >
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="space-y-5">
          {portal && <PortalStamp portal={portal} />}
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            {page.eyebrow}
          </p>
          <h1 className={`${heroHeading} ${headingGradient}`}>
            {page.heading}
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            {page.intro}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-1">
            <Button asChild size="lg" className="cta-try-free" style={ctaStyle}>
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
};

export default MarketingPage;
