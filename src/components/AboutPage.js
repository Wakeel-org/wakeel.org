import Link from "next/link";
import { CheckCircle2, Linkedin } from "lucide-react";
import Layout from "./Layout";
import MarketingSEO from "./MarketingSEO";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { site, team } from "../data/marketing";
import { cardBase, headingGradient, heroHeading, sectionHeading, sectionPad } from "../data/theme";

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

const TeamCard = ({ member }) => (
  <div className={`${cardBase} rounded-xl border p-6 flex flex-col items-center text-center gap-4`}>
    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center text-primary font-bold text-2xl tracking-tight select-none">
      {member.initials}
    </div>
    <div className="space-y-0.5">
      <p className="font-semibold text-base leading-tight">{member.name}</p>
      <p className="text-sm text-muted-foreground">{member.role}</p>
    </div>
    <a
      href={member.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
    >
      <Linkedin className="h-3.5 w-3.5" />
      LinkedIn
    </a>
  </div>
);

const AboutPage = ({ page, path }) => (
  <Layout>
    <MarketingSEO
      title={page.title}
      description={page.description}
      path={path}
      schema={makePageSchema(page, path)}
    />

    {/* Hero */}
    <section className="bg-background">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="space-y-5">
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
        </div>
      </div>
    </section>

    {/* Sections grid */}
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

    {/* Team */}
    <section className={`bg-background ${sectionPad}`}>
      <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Team</p>
          <h2 className={`${sectionHeading} ${headingGradient}`}>The people behind Wakeel</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
            Built in Pakistan by a team focused on making legal information more accessible for everyone.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {team.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>

  </Layout>
);

export default AboutPage;
