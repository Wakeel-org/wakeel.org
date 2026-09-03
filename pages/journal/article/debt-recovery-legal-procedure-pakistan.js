import Link from "next/link";
import {
  CheckCircle2,
  Landmark,
  Gavel,
  Clock,
  HelpCircle,
  AlertTriangle,
} from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site } from "../../../src/data/marketing";
import { cardBase, eyebrow, headingGradient, sectionHeading } from "../../../src/data/theme";

const framework = [
  { icon: Landmark, title: "A regular civil suit works, but it's slow", detail: "You can always sue for recovery of money as an ordinary civil suit, but ordinary suits go through full trial procedure — written statements, evidence, cross-examination — which can take years even where the debt itself isn't seriously disputed." },
  { icon: Clock, title: "Order 37 CPC exists specifically to skip that delay", detail: "Where the debt is a fixed, liquidated amount backed by a written agreement, a bill of exchange, or a promissory note, Order 37 of the Civil Procedure Code allows a summary suit — a much faster process built to stop debtors from dragging out cases where they don't actually have a real defense." },
  { icon: Gavel, title: "The defendant has to actually justify contesting it", detail: "Under Order 37, the person being sued must appear within 10 days and formally apply for \"leave to defend\" — meaning they have to show the court a genuine, substantial defense. If they can't, the court can issue judgment for the plaintiff without a full trial." },
  { icon: AlertTriangle, title: "Written proof of the debt is what makes this route available", detail: "Order 37 depends on the debt being clear from documents — a signed agreement, an acknowledged invoice, a bounced cheque, or a promissory note. Without that kind of paper trail, you're generally looking at an ordinary civil suit instead." },
];

const faqs = [
  {
    question: "What is the fastest legal way to recover a debt in Pakistan?",
    answer:
      "Where the debt is a fixed amount backed by a written agreement, promissory note, or bill of exchange, a summary suit under Order 37 of the Civil Procedure Code 1908 is generally much faster than an ordinary civil suit, because the defendant must justify any defense before the case proceeds to trial.",
  },
  {
    question: "What documents do I need to file a debt recovery suit?",
    answer:
      "Ideally, a signed loan agreement, a promissory note, an acknowledged invoice, or a bounced cheque — anything in writing that clearly shows the debt exists and its exact amount. The stronger and clearer the documentation, the more likely a summary suit under Order 37 CPC is available to you.",
  },
  {
    question: "What happens if the person who owes me money doesn't respond to the suit?",
    answer:
      "Under Order 37 CPC, the defendant must appear within 10 days of being served and apply for \"leave to defend,\" showing a real defense. If they fail to do this, the court can issue a judgment in your favor without a full trial.",
  },
  {
    question: "Is debt recovery a civil or criminal matter in Pakistan?",
    answer:
      "Generally civil — recovering money owed is handled through a civil suit. However, if the debt was tied to a cheque that bounced, a separate criminal complaint under Section 489-F PPC may also be available alongside the civil recovery suit.",
  },
  {
    question: "Can Wakeel.org help me recover a debt someone owes me?",
    answer:
      "Wakeel.org can explain the ordinary suit and summary suit (Order 37) processes and what documentation typically qualifies. It cannot draft or file the suit, or represent you in court — a licensed advocate should handle that.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Debt Recovery in Pakistan: Legal Procedure",
    description:
      "How to legally recover money someone owes you in Pakistan — the ordinary civil suit route versus the faster Order 37 CPC summary suit, and what documents you need.",
    author: { "@type": "Organization", name: "Wakeel.org" },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-09-03",
    dateModified: "2026-09-03",
    mainEntityOfPage: `${site.url}/journal/article/debt-recovery-legal-procedure-pakistan`,
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
        name: "Debt Recovery in Pakistan: Legal Procedure",
        item: `${site.url}/journal/article/debt-recovery-legal-procedure-pakistan`,
      },
    ],
  },
];

const keywords = [
  "debt recovery pakistan legal procedure",
  "order 37 cpc summary suit pakistan",
  "recover money owed pakistan",
  "money recovery suit pakistan",
  "how to sue someone for debt pakistan",
  "summary suit leave to defend",
].join(", ");

export default function DebtRecoveryLegalProcedurePakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Debt Recovery in Pakistan: Legal Procedure"
        description="How to legally recover money someone owes you in Pakistan — the ordinary civil suit route versus the faster Order 37 CPC summary suit, and what documents you need."
        path="/journal/article/debt-recovery-legal-procedure-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>Legal Help · Published September 3, 2026</p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Debt Recovery in Pakistan: Legal Procedure
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            If someone owes you money and won't pay, the law has a fast lane for exactly this
            situation — if you have the paperwork to use it.
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
                If the debt is a fixed amount backed by a written agreement, promissory note, or
                bounced cheque, you can file a <strong>summary suit under Order 37 of the Civil
                Procedure Code 1908</strong> — a fast-tracked process where the defendant has only
                10 days to show a genuine defense, or the court can rule in your favor without a
                full trial. Without that kind of documentation, you'd generally file an{" "}
                <strong>ordinary civil suit</strong>, which takes considerably longer.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educate: framework */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>The framework, layer by layer</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {framework.map((r) => {
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
          <h2 className={sectionHeading}>Why the "10 days" detail actually matters to your outcome</h2>
          <p className="text-muted-foreground leading-relaxed">
            Order 37's entire purpose, as explained in detailed breakdowns of the procedure like{" "}
            <a href="https://blog.ipleaders.in/order-37-cpc-1908/" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
              iPleaders' overview of Order 37 CPC
            </a>
            , is to stop a debtor with no real defense from simply delaying the case for years by
            filing routine denials. Once a summary suit is filed and served, the defendant has a
            short window to appear and formally justify why they should be allowed to defend the
            case at all — not just deny the claim in general terms. Courts scrutinize that
            application; a defendant who can't show a substantial, documented defense loses the
            right to drag the case through a full trial.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The practical takeaway: before you lend money, or before you sue to recover it, having
            something written and signed — even a simple acknowledgment — is what determines
            whether you can use this faster route later. A purely verbal loan, however genuine,
            usually leaves you with the slower ordinary suit as your only option.
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
                  Explaining the difference between an ordinary suit and a summary suit, and what
                  documentation typically qualifies for the faster route.
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
                  It cannot draft or file your suit or represent you in court — a licensed
                  advocate should handle that.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel about recovering a debt — free
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
              { label: "Order 37 CPC, 1908 — iPleaders", href: "https://blog.ipleaders.in/order-37-cpc-1908/" },
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
            <Link href="/journal/article/section-489f-ppc-cheque-dishonour-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Section 489-F PPC: Cheque Dishonour</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/civil-suit-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to File a Civil Suit in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/draft-legal-contract-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to Draft a Legal Contract in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/how-to-send-a-legal-notice-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to Send a Legal Notice in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Trying to recover money someone owes you?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel which route fits your documentation — then verify with a licensed advocate
            before you file.
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
