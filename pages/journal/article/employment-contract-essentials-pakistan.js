import Link from "next/link";
import {
  CheckCircle2,
  FileText,
  Briefcase,
  ShieldCheck,
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
  { icon: FileText, title: "Written terms aren't optional — they're required", detail: "The Industrial and Commercial Employment (Standing Orders) Ordinance 1968 requires employers to issue an appointment letter specifying employment terms, including the nature of employment (permanent or temporary), job title and duties, and the place of work." },
  { icon: Briefcase, title: "The core terms that actually get disputed later", detail: "Wages and how they're calculated, working hours, leave entitlements, benefits, the probation period and confirmation criteria, and the termination and notice terms are the clauses that come up again and again in employment disputes — vague wording here causes most of the trouble." },
  { icon: ShieldCheck, title: "Beyond the basics: the protective clauses worth having", detail: "Confidentiality, data protection, dispute resolution, and a clear statement that the contract is governed by Pakistani law all add real protection for both sides — and are increasingly standard even in smaller Pakistani employment contracts." },
  { icon: AlertTriangle, title: "Changes to essential terms need to be in writing too", detail: "Once a contract is signed, any change to its essential terms — pay, role, location — should be documented in writing and signed by both parties, not agreed to informally over a conversation or a message." },
];

const faqs = [
  {
    question: "What must an employment contract in Pakistan legally include?",
    answer:
      "At minimum, the nature of employment (permanent or temporary), job title and duties, wages, working hours, and place of work — this is required by the Industrial and Commercial Employment (Standing Orders) Ordinance 1968's appointment letter requirement.",
  },
  {
    question: "Is a verbal job offer legally binding in Pakistan?",
    answer:
      "It can create some obligations, but without a written appointment letter or contract, proving the exact terms agreed becomes much harder if a dispute arises. A written contract, even a simple one, is strongly recommended for both employer and employee.",
  },
  {
    question: "What is a typical probation period in a Pakistani employment contract?",
    answer:
      "Commonly three to six months, though this varies by employer and role. The contract should specify the length of the probation period and the criteria used to decide whether the employee is confirmed as permanent.",
  },
  {
    question: "Can my employer change my contract terms without my agreement?",
    answer:
      "Generally no — changes to essential terms like pay, role, or work location should be documented in writing and signed by both parties. An informal or unilateral change to core terms is on weaker legal footing than the originally signed contract.",
  },
  {
    question: "Can Wakeel.org review my employment contract?",
    answer:
      "Wakeel.org can summarize a contract and flag clauses worth double-checking or negotiating. It cannot draft the final contract or confirm its legal enforceability for your specific situation — a licensed labour law advocate should handle that.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Employment Contract in Pakistan: What Should It Include?",
    description:
      "The essential terms a Pakistani employment contract needs — required clauses under the Standing Orders Ordinance 1968, and the protective terms worth adding.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-07-13",
    dateModified: "2026-07-13",
    mainEntityOfPage: `${site.url}/journal/article/employment-contract-essentials-pakistan`,
    citation: [
      { "@type": "CreativeWork", name: "Employment Contracts in Pakistan: Complete Guide — HR Business Solutions", url: "https://hrbs.com.pk/employment-contracts-in-pakistan/" },
      { "@type": "CreativeWork", name: "In Review: Entering the Employment Relationship in Pakistan — Lexology", url: "https://www.lexology.com/library/detail.aspx?g=03bcd3ac-c464-4bb8-ab0c-31540d942a9f" },
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
        name: "Employment Contract in Pakistan: What Should It Include?",
        item: `${site.url}/journal/article/employment-contract-essentials-pakistan`,
      },
    ],
  },
];

const keywords = [
  "employment contract pakistan requirements",
  "appointment letter pakistan essential clauses",
  "what should employment contract include",
  "probation period pakistan law",
  "employment contract checklist pakistan",
  "standing orders ordinance appointment letter",
].join(", ");

export default function EmploymentContractEssentialsPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Employment Contract in Pakistan: What Should It Include?"
        description="The essential terms a Pakistani employment contract needs — required clauses under the Standing Orders Ordinance 1968, and the protective terms worth adding."
        path="/journal/article/employment-contract-essentials-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>Legal Help · Published July 13, 2026</p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Employment Contract in Pakistan: What Should It Include?
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A vague appointment letter is where most workplace disputes actually start — here's
            what a solid one covers.
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
                At minimum, a Pakistani employment contract or appointment letter should specify
                the <strong>nature of employment</strong>, job title and duties, wages, working
                hours, leave, and place of work — required under the Standing Orders Ordinance
                1968. Beyond that, clear terms on <strong>probation, termination, notice, and
                confidentiality</strong> prevent most of the disputes that come up later. Changes
                to any essential term should be documented in writing and signed by both parties.
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
          <h2 className={sectionHeading}>Why "permanent or temporary" is the clause most worth reading twice</h2>
          <p className="text-muted-foreground leading-relaxed">
            Employment law guidance summarized by{" "}
            <a href="https://paycheck.pk/labour-laws/employment-security/employment-contracts" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
              Paycheck.pk
            </a>{" "}
            flags how much legal weight the "nature of employment" label carries — a role
            classified as temporary or contractual can have meaningfully different notice,
            termination, and benefit entitlements compared to a permanent position, even if the
            day-to-day work looks identical. Employees sometimes discover this distinction only
            when a dispute arises, by which point it's too late to negotiate a different
            classification.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The practical lesson: read the classification and termination clauses of any offer
            just as carefully as the salary figure — a slightly lower salary with a clearly
            permanent, well-documented role can be worth more in real protection than a higher
            offer with vague or unfavorable terms underneath it.
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
                  Summarizing an employment contract and flagging clauses worth double-checking or
                  negotiating.
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
                  It cannot draft the final contract or confirm enforceability for your specific
                  situation — a licensed labour law advocate should handle that.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel to review a contract clause — free
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
              { label: "Employment Contracts in Pakistan: Complete Guide — HR Business Solutions", href: "https://hrbs.com.pk/employment-contracts-in-pakistan/" },
              { label: "Fixed-Term Employment Contracts, Temporary Contract Law in Pakistan — Paycheck.pk", href: "https://paycheck.pk/labour-laws/employment-security/employment-contracts" },
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
            <Link href="/journal/article/notice-period-employment-law-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Notice Period in Pakistan: Employee and Employer Rights</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/wrongful-termination-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Wrongful Termination in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/non-disclosure-agreement-nda-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Non-Disclosure Agreement (NDA) in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/draft-legal-contract-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to Draft a Legal Contract in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Reviewing a job offer or contract?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel to summarize it and flag what to check — then verify with a licensed
            advocate before signing.
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
