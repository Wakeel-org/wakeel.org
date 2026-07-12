import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  Building2,
  CheckCircle2,
  Eye,
  FileText,
  Gavel,
  Landmark,
  MessageSquareText,
  Scale,
  ShieldCheck,
  Smartphone,
  Target,
  UsersRound,
} from "lucide-react";
import Layout from "../src/components/Layout";
import MarketingSEO from "../src/components/MarketingSEO";
import AppDownloadButtons from "../src/components/AppDownloadButtons";
import EmailSubscription from "../src/components/EmailSubscription";
import Disclaimer from "../src/components/Disclaimer";
import TrustStrip from "../src/components/TrustStrip";
import WebTrialDemo from "../src/components/WebTrialDemo";
import { Button } from "../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../src/components/ui/card";
import {
  audiences,
  examplePrompts,
  featureCards,
  pricingPlans,
  site,
  trustFramework,
  values,
  visionMission,
} from "../src/data/marketing";
import {
  cardBase,
  headingGradient,
  iconTile,
  sectionHeading,
} from "../src/data/theme";

const homeSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Wakeel.org",
    alternateName: ["Wakeel AI", "AI Wakeel"],
    url: site.url,
    logo: `${site.url}/logo-og.png`,
    sameAs: [
      "https://www.facebook.com/aiwakeel",
      "https://www.instagram.com/wakeel_org",
      "https://www.linkedin.com/company/wakeelai/",
      site.androidUrl,
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: site.contactEmail,
      contactType: "customer support",
      areaServed: "PK",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Wakeel.org",
    alternateName: "Wakeel AI",
    applicationCategory: "LegalApplication",
    operatingSystem: "Web, Android, iOS",
    description: site.description,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "PKR",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Wakeel.org",
    alternateName: "Wakeel AI",
    url: site.url,
    description: site.description,
  },
];

const audienceIcons = {
  Citizens: Smartphone,
  "Law Students": BookOpen,
  Lawyers: Scale,
  "Law Firms": Briefcase,
  Judges: Gavel,
  Policymakers: Landmark,
  "Legal Institutions": Building2,
};

const featureIcons = [
  MessageSquareText,
  FileText,
  ShieldCheck,
  BookOpen,
  Scale,
  CheckCircle2,
  Briefcase,
  UsersRound,
];

// Toggle to bring back the "What you can do" capabilities list in the hero
// instead of the sample-question demo. Kept (not deleted) for later reuse.
const SHOW_HERO_CAPABILITIES = false;
// Toggle to bring back the "Get the app" download-buttons block under the
// hero demo. Kept (not deleted) for later reuse.
const SHOW_HERO_GET_APP = false;

const heroCapabilities = [
  {
    icon: MessageSquareText,
    label: "Ask in English or Urdu",
    detail: "Plain-language answers grounded in Pakistani law.",
  },
  {
    icon: FileText,
    label: "Analyze 100+ page documents",
    detail: "Summaries and clause breakdowns for notices, agreements, and PDFs.",
  },
  {
    icon: Scale,
    label: "Research law & case law",
    detail: "Source-aware from official Pakistani legal repositories.",
  },
  {
    icon: ShieldCheck,
    label: "Source-aware, verify-first",
    detail: "Built-in reminders to confirm with a licensed advocate.",
  },
];

export default function Home() {
  const homeKeywords = [
    "Wakeel AI",
    "AI Wakeel",
    "Wakeel AI app",
    "AI wakeel app Pakistan",
    "AI legal assistant Pakistan",
    "AI lawyer",
    "AI lawyer free",
    "lawyer AI",
    "free AI lawyer",
    "Pakistani law",
    "legal help Pakistan",
    "Wakeel",
    "Wakeel.org",
    "property law Pakistan",
    "family law Pakistan",
    "employment law Pakistan",
    "FIR Pakistan",
    "Pakistan legal information",
    "court procedures Pakistan",
  ].join(", ");

  const homeDescription =
    "Wakeel.org — also known as Wakeel AI — is Pakistan's AI lawyer and legal assistant. Ask legal questions in simple English or Urdu, understand legal documents, explore Pakistani laws, and get source-aware legal guidance on Android, iOS, and web.";

  return (
    <Layout>
      <MarketingSEO
        title="Wakeel AI — Pakistan's AI Lawyer & Legal Assistant | Wakeel.org"
        description={homeDescription}
        path="/"
        schema={homeSchema}
        keywords={homeKeywords}
        region="pk"
      />

      <section className="bg-background">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-5 lg:gap-6 items-stretch">
            <Card className="overflow-hidden border-muted/60 shadow-2xl bg-gradient-to-br from-primary/10 via-card to-muted/40">
              <CardContent className="p-5 sm:p-8 lg:p-10 space-y-6">
                <p className="inline-flex w-fit rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                  Wakeel.org · Mobile-first legal AI for Pakistani People
                </p>
                <div className="space-y-4">
                  <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight ${headingGradient}`}>
                    Your AI lawyer and legal assistant, in your pocket.
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl font-semibold text-foreground/90">
                    For citizens, law students, lawyers, and institutions — ask in English or Urdu.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl">
                    {site.description}
                  </p>
                </div>

                <TrustStrip />

                <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                  <Button asChild size="lg" className="cta-try-free">
                    <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                      Try Wakeel Free
                    </a>
                  </Button>
                  {/* <Button asChild size="lg" variant="outline" className="cta-download-android">
                    <a href={site.androidUrl} target="_blank" rel="noopener noreferrer">
                      Download App
                    </a>
                  </Button> */}
                  <Button asChild size="lg" variant="link" className="cta-view-legal-sources px-0 sm:px-3">
                    <Link href="/legal-sources">View Legal Sources</Link>
                  </Button>
                </div>

                <Disclaimer />
              </CardContent>
            </Card>

            {/* Capabilities panel — real features, no chat */}
            <Card className="flex flex-col overflow-hidden border-primary/20 shadow-2xl bg-gradient-to-br from-primary/5 via-card to-muted/40">
              <CardContent className="flex flex-1 flex-col p-5 sm:p-8 space-y-5">
                {SHOW_HERO_CAPABILITIES && (
                  <>
                    <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                      What you can do
                    </p>
                    <div className="flex flex-1 flex-col gap-3">
                      {heroCapabilities.map((cap) => (
                        <div
                          key={cap.label}
                          className="flex items-start gap-3 rounded-xl border border-border bg-background/70 p-4"
                        >
                          <div className="h-10 w-10 shrink-0 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                            <cap.icon className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-foreground">{cap.label}</p>
                            <p className="text-xs text-muted-foreground leading-relaxed">{cap.detail}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                <WebTrialDemo embedded />

                {SHOW_HERO_GET_APP && (
                  <div className="rounded-lg border border-border bg-muted/30 p-4">
                    <p className="text-sm font-semibold text-foreground mb-3">Get the app</p>
                    <AppDownloadButtons />
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/40">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 text-center">
            {[
              "Built in Pakistan",
              "Official legal sources",
              "Encrypted document processing",
              "Legal info, not a lawyer replacement",
            ].map((item) => (
              <div key={item} className="rounded-lg bg-background/70 border border-border px-3 py-3 text-sm font-medium text-muted-foreground">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="values" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
              Why we exist
            </p>
            <h2 className={`${sectionHeading} ${headingGradient}`}>
              Our vision &amp; mission
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {visionMission.map((item) => {
              const Icon = item.title === "Vision" ? Eye : Target;
              return (
                <Card key={item.title} className="relative overflow-hidden border-primary/20 bg-gradient-to-br from-primary/8 via-card to-card shadow-2xl">
                  <div className="absolute top-0 right-0 w-40 h-40 rounded-bl-full bg-primary/5 pointer-events-none" />
                  <CardContent className="relative p-7 sm:p-10 lg:p-12 space-y-5">
                    <div className="w-16 h-16 rounded-2xl bg-primary/15 flex items-center justify-center text-primary">
                      <Icon className="h-8 w-8" />
                    </div>
                    <p className="text-xs font-bold uppercase tracking-widest text-primary">
                      {item.title}
                    </p>
                    <p className="text-xl sm:text-2xl font-semibold text-foreground leading-snug">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href="/about">Learn more about us</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="solutions" className="py-16 sm:py-20 lg:py-24 bg-muted/40">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 sm:mb-16">
            <h2 className={`${sectionHeading} max-w-2xl`}>
              Built for the people who use Pakistani law every day.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {audiences
              .map((audience) => {
                const Icon = audienceIcons[audience.title] || UsersRound;
                return (
                  <Card key={audience.href} className={cardBase}>
                    <CardHeader className="p-5">
                      <div className={iconTile}>
                        <Icon className="h-7 w-7" />
                      </div>
                      <CardTitle className="text-xl">{audience.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 p-5 pt-0">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {audience.description}
                      </p>
                      <ul className="space-y-1.5">
                        {audience.useCases.map((useCase) => (
                          <li key={useCase} className="text-xs text-muted-foreground flex gap-2">
                            <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                            {useCase}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={audience.href}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                      >
                        Wakeel for {audience.title} <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className={sectionHeading}>
              Core values for responsible legal AI.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {values.slice(0, 6).map((value) => (
              <Card key={value.title} className={cardBase}>
                <CardHeader>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href="/values">View all values</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="features" className="py-16 sm:py-20 lg:py-24 bg-muted/40">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className={sectionHeading}>
              Comprehensive legal information and research workflows.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featureCards.map((feature, index) => {
              const Icon = featureIcons[index] || CheckCircle2;
              return (
                <Card key={feature.title} className={cardBase}>
                  <CardHeader>
                    <div className={iconTile}>
                      <Icon className="h-7 w-7" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href="/features">Explore all features</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[0.8fr_1.2fr] gap-6 items-start">
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Trust and safety
            </p>
            <h2 className={sectionHeading}>
              Designed for careful legal understanding.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Wakeel is useful when it helps people ask better questions, read documents more clearly, and verify sources before acting.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {trustFramework.map((point) => (
              <div key={point} className="rounded-lg border border-border bg-card p-4 text-sm text-muted-foreground leading-relaxed">
                <CheckCircle2 className="h-5 w-5 text-primary mb-3" />
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-muted/40">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-start">
            <div>
              <h2 className={sectionHeading}>
                Example prompts
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Start with a question, a document, or a legal concept you want to understand.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {examplePrompts.map((item) => (
                <div key={`${item.audience}-${item.prompt}`} className="rounded-lg border border-border bg-background p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-2">
                    {item.audience}
                  </p>
                  <p className="text-sm text-muted-foreground">"{item.prompt}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-muted/40">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-4">
              Wakeel Journal
            </p>
            <h2 className={sectionHeading}>
              Explore Pakistani legal issues and get clear guidance.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Browse guides on property law, family law, employment rights, consumer protection, and 80+ other legal topics covering Pakistan, the GCC, and global jurisdictions — all in the Journal.
            </p>
          </div>
          <div className="text-center flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg">
              <Link href="/journal">Visit the Journal</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/journal/legal-issues-pakistan">Browse All Legal Issues</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className={sectionHeading}>
              Plans for learning, practice, and teams.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Start free and choose the workflow that fits your role. Exact paid access may be confirmed inside the app or during organization onboarding.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {pricingPlans.map((plan) => (
              <Card key={plan.name} className={cardBase}>
                <CardHeader>
                  <p className="text-sm font-semibold text-primary">{plan.monthlyPrice}</p>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {plan.description}
                  </p>
                  <ul className="space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className="text-xs text-muted-foreground flex gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant={plan.name === "Free" ? "default" : "outline"} className="w-full">
                    {plan.href.startsWith("http") ? (
                      <a href={plan.href} target="_blank" rel="noopener noreferrer">
                        {plan.cta}
                      </a>
                    ) : (
                      <Link href={plan.href}>{plan.cta}</Link>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="link">
              <Link href="/pricing">Compare plans</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-primary text-primary-foreground">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/70">
            Get started free
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Start understanding Pakistani law with Wakeel.org.
          </h2>
          <p className="text-primary-foreground/75 max-w-xl mx-auto leading-relaxed">
            Ask legal questions in English or Urdu, understand documents up to 100+ pages, and verify sources before taking important legal steps.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
            <Button asChild size="lg" variant="secondary" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Try Wakeel Free
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary cta-download-android">
              <a href={site.androidUrl} target="_blank" rel="noopener noreferrer">
                Download App
              </a>
            </Button>
          </div>
          <div className="mx-auto max-w-md rounded-xl border border-primary-foreground/20 bg-background p-5 text-foreground shadow-md mt-4">
            <p className="text-sm font-semibold text-foreground mb-3">Stay updated — no spam, ever.</p>
            <EmailSubscription />
          </div>
        </div>
      </section>
    </Layout>
  );
}
