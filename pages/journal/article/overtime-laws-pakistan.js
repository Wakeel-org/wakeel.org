import Link from "next/link";
import {
  CheckCircle2,
  Clock,
  Wallet,
  Gavel,
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
  { icon: Clock, title: "The line is 9 hours a day, 48 hours a week", detail: "Under the Factories Act 1934, an adult worker's normal hours are capped at 9 hours a day and 48 hours a week — anything beyond that is overtime, not just extra unpaid effort." },
  { icon: Wallet, title: "Overtime pay is double, not a small bump", detail: "Hours worked beyond the standard limit are owed at double the ordinary rate of pay (200% of the normal wage) — this isn't a discretionary bonus, it's the statutory rate." },
  { icon: Gavel, title: "There's still an overall weekly ceiling", detail: "Total hours, including overtime, can't exceed 60 hours in a week for adult workers under the Factories Act — meaning overtime itself is effectively capped at around 12 extra hours a week, not unlimited." },
  { icon: AlertTriangle, title: "Rest days and holidays count as overtime too", detail: "Work performed on your weekly rest day or a public holiday is treated as overtime and owed at the same double rate — an employer can't simply schedule you on your day off at your normal pay rate." },
];

const faqs = [
  {
    question: "What is the legal overtime rate in Pakistan?",
    answer:
      "Double the ordinary rate of pay (200% of your normal wage) for hours worked beyond 9 hours a day or 48 hours a week under the Factories Act 1934 — this also applies to work performed on a weekly rest day or public holiday.",
  },
  {
    question: "How many hours can I be required to work in a week in Pakistan?",
    answer:
      "Normal working hours are capped at 48 hours a week (9 hours a day), with total hours including overtime not exceeding 60 hours a week for adult workers — meaning overtime is effectively capped at around 12 extra hours weekly.",
  },
  {
    question: "Do I get overtime pay for working on my day off?",
    answer:
      "Yes. Work performed on your designated weekly rest day, or on a public holiday, is treated as overtime under the law and should be paid at the double overtime rate, not your normal wage.",
  },
  {
    question: "Does the Factories Act overtime rule apply to office jobs?",
    answer:
      "The Factories Act 1934 specifically covers factory workers; office and commercial establishment employees are typically covered by the West Pakistan Shops and Establishment Ordinance 1969 instead, which has its own overtime provisions — check which law applies to your specific workplace.",
  },
  {
    question: "Can Wakeel.org calculate my overtime pay?",
    answer:
      "Wakeel.org can explain how the overtime rate and hour limits generally work. It cannot calculate your specific overtime pay or access your employer's records — a licensed labour law advocate or your own pay records can help with that.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Overtime Laws in Pakistan",
    description:
      "How overtime pay works in Pakistan under the Factories Act 1934 — the working hour limits, the double-pay rate, and how rest-day work is treated.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-07-17",
    dateModified: "2026-07-17",
    mainEntityOfPage: `${site.url}/journal/article/overtime-laws-pakistan`,
    citation: [
      { "@type": "CreativeWork", name: "Working Hours and Overtime in Pakistan (2026 Legal Guide) — Commoner Law", url: "https://commoner-law.com/pakistan/workers-rights/working-hours-and-overtime" },
      { "@type": "CreativeWork", name: "Overtime Rules in Pakistan: Double Pay, Hours & the Law — LegalPK", url: "https://legalpk.com/blog-post/overtime-rules-pakistan" },
    ],
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
        name: "Overtime Laws in Pakistan",
        item: `${site.url}/journal/article/overtime-laws-pakistan`,
      },
    ],
  },
];

const keywords = [
  "overtime laws pakistan",
  "overtime pay rate pakistan",
  "factories act 1934 working hours",
  "48 hour work week pakistan",
  "overtime rest day public holiday pakistan",
  "double pay overtime pakistan",
].join(", ");

export default function OvertimeLawsPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Overtime Laws in Pakistan"
        description="How overtime pay works in Pakistan under the Factories Act 1934 — the working hour limits, the double-pay rate, and how rest-day work is treated."
        path="/journal/article/overtime-laws-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>Legal Help · Published July 17, 2026</p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Overtime Laws in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Extra hours aren't just extra effort — the law says they're worth double, with a real
            ceiling on how much can be asked.
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
                Under the <strong>Factories Act 1934</strong>, normal working hours are capped at{" "}
                <strong>9 hours a day / 48 hours a week</strong>. Anything beyond that is overtime,
                owed at <strong>double your ordinary rate</strong>. Total weekly hours (including
                overtime) can't exceed <strong>60</strong>. Work on your weekly rest day or a
                public holiday also counts as overtime and is owed at the same double rate.
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
          <h2 className={sectionHeading}>Why "I'm salaried" doesn't automatically mean no overtime</h2>
          <p className="text-muted-foreground leading-relaxed">
            A common misconception, addressed directly in guidance from{" "}
            <a href="https://legalpk.com/blog-post/overtime-rules-pakistan" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
              LegalPK
            </a>
            , is that a fixed monthly salary automatically excludes overtime obligations. That's
            not accurate under the statutory framework — the hour limits and double-pay rules
            apply based on hours actually worked, not the pay structure alone, for employees
            covered by the Factories Act or the equivalent Shops and Establishment Ordinance
            provisions. Whether a specific role is exempt (some supervisory or managerial
            positions can be) depends on the actual nature of the job, not just how it's labeled.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Keeping your own simple log of actual hours worked — especially on weeks that run
            noticeably long — is the single most useful thing you can do if an overtime dispute
            ever comes up, since employer records aren't always complete or favorable to the
            employee.
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
                  Explaining the overtime hour limits and pay rate rules, in plain English or Urdu.
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
                  It cannot calculate your specific overtime pay or access employer records — a
                  licensed labour law advocate can help with that.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel about overtime pay — free
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
              { label: "Working Hours and Overtime in Pakistan (2026 Legal Guide) — Commoner Law", href: "https://commoner-law.com/pakistan/workers-rights/working-hours-and-overtime" },
              { label: "Overtime Rules in Pakistan: Double Pay, Hours & the Law — LegalPK", href: "https://legalpk.com/blog-post/overtime-rules-pakistan" },
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
            <Link href="/journal/article/annual-sick-leave-laws-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Annual Leave and Sick Leave Laws in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/salary-not-paid-employee-rights-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Salary Not Paid: Employee Legal Rights in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/employment-contract-essentials-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Employment Contract in Pakistan: What Should It Include?</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/notice-period-employment-law-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Notice Period in Pakistan: Employee and Employer Rights</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Not being paid properly for overtime?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel how the rules generally work — then verify with a licensed labour law
            advocate.
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
