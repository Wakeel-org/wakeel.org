import Link from "next/link";
import {
  CheckCircle2,
  FileText,
  Clock,
  Users,
  HelpCircle,
  AlertTriangle,
} from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site } from "../../../src/data/marketing";
import { cardBase, eyebrow, headingGradient, sectionHeading } from "../../../src/data/theme";

const steps = [
  { icon: FileText, title: "Step 1 — Submit written notice to the Union Council", detail: "Whether it's talaq, khula, or a court-ordered dissolution, the divorce needs to be formally notified to the relevant Union Council (Arbitration Council) in the area where the marriage was registered or the parties reside." },
  { icon: Users, title: "Step 2 — The Arbitration Council is constituted", detail: "Within 30 days of receiving the notice, the Chairman constitutes an Arbitration Council to attempt reconciliation between the parties, issuing notices to both sides roughly once a month during this process." },
  { icon: Clock, title: "Step 3 — The 90-day period runs its course", detail: "The divorce becomes legally effective 90 days after the notice was received by the Union Council — this waiting period exists specifically to allow time for reconciliation efforts, and it applies regardless of whether reconciliation actually succeeds." },
  { icon: AlertTriangle, title: "Step 4 — The certificate is issued after the 90 days, if reconciliation fails", detail: "Once the 90-day period ends without successful reconciliation, the Union Council formally issues the divorce certificate (sometimes called a Certificate of Dissolution of Marriage) — this document is your official proof the marriage has ended." },
];

const faqs = [
  {
    question: "How long does it take to get a divorce certificate in Pakistan?",
    answer:
      "The divorce certificate is issued after a 90-day period from when the Union Council received the divorce notice — this waiting period allows for reconciliation attempts, and the certificate follows once that period ends without reconciliation.",
  },
  {
    question: "Where do I get a divorce certificate in Pakistan?",
    answer:
      "From the Union Council (through its Arbitration Council) where the divorce notice was filed — typically the Union Council covering the area where the marriage was registered or where the parties reside.",
  },
  {
    question: "Is the divorce certificate the same as the talaq nama or khula order?",
    answer:
      "They're related but distinct: a talaq nama or khula order reflects the underlying declaration or court decision ending the marriage, while the divorce certificate is the Union Council's formal confirmation, issued after the 90-day process, that the divorce is complete and effective.",
  },
  {
    question: "What if reconciliation succeeds during the 90-day period?",
    answer:
      "If the Arbitration Council's reconciliation efforts succeed and both parties agree to remain married, the divorce process doesn't proceed to a certificate — the reconciliation outcome is recorded instead.",
  },
  {
    question: "Can Wakeel.org help me get a divorce certificate?",
    answer:
      "Wakeel.org can explain how the Union Council process and 90-day timeline generally work. It cannot submit your notice, represent you before the Arbitration Council, or issue the certificate — that requires the Union Council and, where needed, a licensed advocate.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Get a Divorce Certificate in Pakistan",
    description:
      "The Union Council process for getting a divorce certificate in Pakistan — the 90-day reconciliation period and when the certificate is actually issued.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-07-05",
    dateModified: "2026-07-05",
    mainEntityOfPage: `${site.url}/journal/article/how-to-get-divorce-certificate-pakistan`,
    citation: [
      { "@type": "CreativeWork", name: "Step by Step Divorce Process at Union Council in Pakistan — PakLegal", url: "https://pklegal.org/blog/step-by-step-divorce-process-at-union-council-in-pakistan/" },
      { "@type": "CreativeWork", name: "Divorce Certificate from Union Council — Step by Step Guide — LegalPoint", url: "https://legalpoint.pk/divorce-certificate-from-union-council/" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Get a Divorce Certificate in Pakistan",
    step: steps.map((s) => ({ "@type": "HowToStep", name: s.title, text: s.detail })),
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Journal", item: `${site.url}/journal` },
      {
        "@type": "ListItem",
        position: 3,
        name: "How to Get a Divorce Certificate in Pakistan",
        item: `${site.url}/journal/article/how-to-get-divorce-certificate-pakistan`,
      },
    ],
  },
];

const keywords = [
  "divorce certificate pakistan",
  "union council divorce process",
  "90 day divorce period pakistan",
  "arbitration council divorce pakistan",
  "how to get divorce certificate union council",
  "certificate of dissolution of marriage pakistan",
].join(", ");

export default function HowToGetDivorceCertificatePakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="How to Get a Divorce Certificate in Pakistan"
        description="The Union Council process for getting a divorce certificate in Pakistan — the 90-day reconciliation period and when the certificate is actually issued."
        path="/journal/article/how-to-get-divorce-certificate-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>Legal Help · Published July 5, 2026</p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            How to Get a Divorce Certificate in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The 90-day period isn't a delay tactic — it's the process itself. Here's how it
            actually plays out.
          </p>
        </div>
      </section>

      {/* TL;DR */}
      <section className="bg-background pt-10">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className={`${cardBase} border-primary/30`}>
            <CardContent className="p-6 space-y-3">
              <p className="text-sm font-semibold text-primary">Quick answer</p>
              <p className="text-muted-foreground leading-relaxed">
                After talaq, khula, or a court divorce, notice goes to the{" "}
                <strong>Union Council</strong>, which constitutes an{" "}
                <strong>Arbitration Council</strong> to attempt reconciliation. The divorce becomes
                effective, and the certificate is issued, <strong>90 days</strong> after the notice
                was received — if reconciliation hasn't succeeded by then. The certificate is your
                official proof the marriage has legally ended.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educate: steps */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>Four steps, in order</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {steps.map((r) => {
              const Icon = r.icon;
              return (
                <Card key={r.title} className={cardBase}>
                  <CardHeader>
                    <Icon className="h-7 w-7 text-primary" />
                    <CardTitle className="text-lg">{r.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{r.detail}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reveal: prose with inline sources */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <h2 className={sectionHeading}>Why the certificate matters even after the divorce feels final</h2>
          <p className="text-muted-foreground leading-relaxed">
            A step-by-step breakdown from{" "}
            <a href="https://pklegal.org/blog/step-by-step-divorce-process-at-union-council-in-pakistan/" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
              PakLegal
            </a>{" "}
            makes a point worth remembering: many people treat the talaq declaration or khula
            court order as the "real" end of the marriage, and only think about the Union Council
            certificate later, if at all. In practice, that certificate is often the document
            actually required for remarriage, updating official records, or resolving disputes
            about marital status — treating it as an afterthought can create real complications
            down the line.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            It's also worth confirming the notice was actually received and logged by the correct
            Union Council at the start of the process — a notice sent to the wrong council, or
            never properly delivered, can quietly stall the 90-day clock without either party
            realizing it.
          </p>
        </div>
      </section>

      {/* How Wakeel helps / can't do */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-6">
            <Card className={cardBase}>
              <CardHeader>
                <CheckCircle2 className="h-6 w-6 text-primary" />
                <CardTitle className="text-lg">What Wakeel.org can help with</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Explaining the Union Council process and timeline, in plain English or Urdu.
                </p>
              </CardContent>
            </Card>
            <Card className={cardBase}>
              <CardHeader>
                <AlertTriangle className="h-6 w-6 text-primary" />
                <CardTitle className="text-lg">What it cannot do</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  It cannot submit your notice, track your case with the Union Council, or
                  represent you — a licensed advocate should handle that.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel about a divorce certificate — free
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className={sectionHeading}>Frequently asked questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-lg border border-border bg-card p-5">
                <summary className="flex cursor-pointer items-center gap-3 text-base font-semibold">
                  <HelpCircle className="h-5 w-5 text-primary shrink-0" />
                  {faq.question}
                </summary>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-6 text-center">
            General educational information, not legal advice. See our{" "}
            <Link href="/disclaimer" className="text-primary hover:underline">full disclaimer</Link>.
          </p>
        </div>
      </section>

      {/* Sources */}
      <section className="bg-background py-14 sm:py-16">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-semibold text-foreground mb-4">Sources — check these directly to verify</h2>
          <ul className="space-y-2">
            {[
              { label: "Step by Step Divorce Process at Union Council in Pakistan — PakLegal", href: "https://pklegal.org/blog/step-by-step-divorce-process-at-union-council-in-pakistan/" },
              { label: "Divorce Certificate from Union Council — Step by Step Guide — LegalPoint", href: "https://legalpoint.pk/divorce-certificate-from-union-council/" },
            ].map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noopener noreferrer nofollow" className="text-sm text-primary hover:underline">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Related reading */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`${sectionHeading} text-center mb-8`}>Related reading</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/journal/article/talaq-in-pakistan-legal-procedure" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Talaq in Pakistan: Legal Procedure</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/khula-in-pakistan-procedure-rights" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Khula in Pakistan: Procedure and Rights</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/divorce-in-pakistan-procedure-rights" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Divorce in Pakistan: Procedure and Rights</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/wife-maintenance-after-divorce-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Wife Maintenance After Divorce in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Waiting on a divorce certificate?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel how the timeline generally works — then confirm your case's status with the
            Union Council or your advocate.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">Try Wakeel Free</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/journal/legal-issues-pakistan">Browse all legal guides</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
