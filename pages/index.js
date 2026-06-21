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
    url: site.url,
    logo: `${site.url}/logo-dark.svg`,
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
    applicationCategory: "LegalApplication",
    operatingSystem: "Web, Android",
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
    "AI legal assistant Pakistan",
    "Pakistani law",
    "legal help Pakistan",
    "Wakeel",
    "property law Pakistan",
    "family law Pakistan",
    "employment law Pakistan",
    "consumer rights Pakistan",
    "FIR Pakistan",
    "legal guidance",
    "Pakistan legal information",
    "tenant rights",
    "court procedures Pakistan",
  ].join(", ");

  return (
    <Layout>
      <MarketingSEO
        title="Pakistan's AI Legal Assistant | Wakeel.org"
        description={site.description}
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
                  Mobile-first legal AI for Pakistan
                </p>
                <div className="space-y-4">
                  <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight ${headingGradient}`}>
                    Pakistan's AI legal assistant, in your pocket.
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl font-semibold text-foreground/90">
                    For citizens, law students, lawyers, and institutions — ask in English or Urdu.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl">
                    {site.description}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                  <Button asChild size="lg" className="cta-try-free">
                    <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                      Try Wakeel Free
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="cta-download-android">
                    <a href={site.androidUrl} target="_blank" rel="noopener noreferrer">
                      Download App
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="link" className="cta-view-legal-sources px-0 sm:px-3">
                    <Link href="/legal-sources">View Legal Sources</Link>
                  </Button>
                </div>

                <p className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                  <ShieldCheck className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>
                    Legal information &amp; research support — not a substitute for a licensed advocate.{" "}
                    <Link href="/disclaimer" className="font-semibold text-primary hover:underline whitespace-nowrap">
                      Read disclaimer
                    </Link>
                  </span>
                </p>
              </CardContent>
            </Card>

            {/* Capabilities panel — real features, no chat */}
            <Card className="flex flex-col overflow-hidden border-primary/20 shadow-2xl bg-gradient-to-br from-primary/5 via-card to-muted/40">
              <CardContent className="flex flex-1 flex-col p-5 sm:p-8 space-y-5">
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
                <div className="rounded-lg border border-border bg-muted/30 p-4">
                  <p className="text-sm font-semibold text-foreground mb-3">Get the app</p>
                  <AppDownloadButtons />
                </div>
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

      <section id="values" className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className={sectionHeading}>Our vision &amp; mission</h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Why Wakeel.org exists, and what we are building for Pakistan.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {visionMission.map((item) => {
              const Icon = item.title === "Vision" ? Eye : Target;
              return (
                <Card key={item.title} className={cardBase}>
                  <CardHeader>
                    <div className={iconTile}>
                      <Icon className="h-7 w-7" />
                    </div>
                    <CardTitle className="text-2xl sm:text-3xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section id="solutions" className="py-16 sm:py-20 lg:py-24 bg-muted/40">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <h2 className={sectionHeading}>
              Built for the people who use Pakistani law every day.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {audiences.map((audience) => {
              const Icon = audienceIcons[audience.title] || UsersRound;
              return (
                <Card key={audience.href} className={cardBase}>
                  <CardHeader className="p-5">
                    <div className={iconTile}>
                      <Icon className="h-7 w-7" />
                    </div>
                    <CardTitle className="text-2xl">{audience.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 p-5 pt-0">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {audience.description}
                    </p>
                    <ul className="space-y-2">
                      {audience.useCases.map((useCase) => (
                        <li key={useCase} className="text-xs text-muted-foreground flex gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                          {useCase}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={audience.href}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                    >
                      Learn more <ArrowRight className="h-4 w-4" />
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
            {values.map((value) => (
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
              Legal Guides
            </p>
            <h2 className={sectionHeading}>
              Explore Pakistani legal issues and get clear guidance.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Browse guides on property law, family law, employment rights, consumer protection, and 20+ other legal topics specific to Pakistan.
            </p>
          </div>
          <div className="text-center">
            <Button asChild size="lg">
              <Link href="/legal-issues-pakistan">Browse All Legal Issues</Link>
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-7">
          <h2 className={sectionHeading}>
            Start understanding Pakistani law with Wakeel.org.
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Ask legal questions, understand documents, and verify sources before taking important legal steps.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Button asChild size="lg" variant="secondary" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Try Wakeel Free
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground hover:text-primary cta-download-android">
              <a href={site.androidUrl} target="_blank" rel="noopener noreferrer">
                Download Android App
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a href={site.iosUrl} target="_blank" rel="noopener noreferrer">
                Download iOS App
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link href="/contact">Join Updates</Link>
            </Button>
          </div>
          <div className="mx-auto max-w-xl rounded-lg border border-primary-foreground/20 bg-background p-4 text-foreground shadow-sm">
            <EmailSubscription />
          </div>
          <div className="pt-2">
            <p className="text-sm font-semibold text-primary-foreground/80 mb-3">
              Download our mobile apps
            </p>
            <AppDownloadButtons className="justify-center" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
