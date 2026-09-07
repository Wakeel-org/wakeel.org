import Link from "next/link";
import {
  CheckCircle2,
  Briefcase,
  ShieldCheck,
  Send,
  HelpCircle,
  AlertTriangle,
} from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site } from "../../../src/data/marketing";
import { cardBase, eyebrow, headingGradient, sectionHeading } from "../../../src/data/theme";

const sections = [
  { icon: Briefcase, title: "Role, nature of employment, and compensation", detail: "Job title and duties, whether the role is permanent or temporary, wages, working hours, and place of work — the core terms required by the Standing Orders Ordinance 1968's appointment-letter requirement." },
  { icon: ShieldCheck, title: "Probation, leave, and benefits", detail: "The probation period and confirmation criteria, leave entitlements, and any retirement benefits (gratuity or provident fund) the employer provides." },
  { icon: Send, title: "Termination and notice terms", detail: "The notice period required to end employment (one month is the statutory default), grounds for termination, and how final dues and any gratuity are settled." },
  { icon: AlertTriangle, title: "Protective clauses worth including", detail: "Confidentiality, data handling, dispute resolution, and a governing-law clause confirming Pakistani law applies — increasingly standard even for smaller employers." },
];

const faqs = [
  {
    question: "What is the standard format of an employment contract in Pakistan?",
    answer:
      "It generally covers the role and nature of employment, compensation and working hours, probation terms, leave and benefits, the notice period and termination terms, and protective clauses like confidentiality and governing law.",
  },
  {
    question: "Is an appointment letter the same as an employment contract?",
    answer:
      "They serve a similar purpose — the Standing Orders Ordinance 1968 requires employers to issue an appointment letter specifying employment terms, and many employers combine this with a fuller employment contract covering additional clauses like confidentiality.",
  },
  {
    question: "Can I use a generic online template for an employment contract in Pakistan?",
    answer:
      "It's a reasonable starting point for structure, but templates built for other countries often miss Pakistan-specific requirements — like the Standing Orders Ordinance's mandatory terms and local notice-period defaults — so any template should be reviewed and adjusted for Pakistani law.",
  },
  {
    question: "Can Wakeel.org generate an employment contract for me?",
    answer:
      "Yes — describe the role, compensation, and terms you want to include, and Wakeel can put together a first draft covering the standard sections. A licensed labour law advocate should review it before it's used, especially for senior roles or anything with non-standard terms.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Employment Contract Format in Pakistan",
    description:
      "The standard structure of an employment contract in Pakistan — role and compensation, probation and benefits, termination terms — plus how to generate a first draft with Wakeel.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-06-09",
    dateModified: "2026-06-09",
    mainEntityOfPage: `${site.url}/journal/article/employment-contract-format-pakistan`,
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
        name: "Employment Contract Format in Pakistan",
        item: `${site.url}/journal/article/employment-contract-format-pakistan`,
      },
    ],
  },
];

const keywords = [
  "employment contract format pakistan",
  "employment contract template pakistan",
  "appointment letter format pakistan",
  "job contract sample pakistan",
  "employment contract generator pakistan",
  "employment agreement download pakistan",
].join(", ");

export default function EmploymentContractFormatPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Employment Contract Format in Pakistan"
        description="The standard structure of an employment contract in Pakistan — role and compensation, probation and benefits, termination terms — plus how to generate a first draft with Wakeel."
        path="/journal/article/employment-contract-format-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>Legal Help · Published June 9, 2026</p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Employment Contract Format in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A vague appointment letter is where most workplace disputes start — here's the
            structure that actually holds up, and how to get a first draft fast.
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
                An employment contract should cover the <strong>role, wages, and hours</strong>,{" "}
                <strong>probation and benefits</strong>, the <strong>notice period and
                termination terms</strong>, and protective clauses like confidentiality and
                governing law. Rather than starting from a static template,{" "}
                <a href={site.appUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Wakeel can generate a first draft
                </a>{" "}
                based on the role and terms you describe.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educate: sections */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>The sections, one at a time</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {sections.map((r) => {
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

      {/* Generate with Wakeel */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className={`${cardBase} border-primary/40`}>
            <CardHeader>
              <Send className="h-7 w-7 text-primary" />
              <CardTitle className="text-xl">Generate your employment contract draft with Wakeel</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Whether you're an employer preparing an offer or an employee wanting to
                understand what a fair contract should include, describe the role, compensation,
                and terms to Wakeel and it can generate a structured first draft covering the
                sections above. Have a labour law advocate review it before it's finalized and
                signed, particularly for senior roles or any non-standard terms.
              </p>
              <div className="text-center">
                <Button asChild size="lg" className="cta-try-free">
                  <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                    Generate an employment contract draft — free
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Reveal: prose with inline sources */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <h2 className={sectionHeading}>Why "permanent or temporary" is the line worth reading twice</h2>
          <p className="text-muted-foreground leading-relaxed">
            Guidance summarized by{" "}
            <a href="https://paycheck.pk/labour-laws/employment-security/employment-contracts" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
              Paycheck.pk
            </a>{" "}
            flags how much weight the nature-of-employment label carries: a role classified as
            temporary or contractual can carry different notice, termination, and benefit
            entitlements than a permanent one, even where the day-to-day work looks identical.
            Getting this classification right — and making sure it's stated clearly, not left
            implied — is one of the most consequential details in the whole document.
          </p>
        </div>
      </section>

      {/* How Wakeel helps / can't do */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-6">
            <Card className={cardBase}>
              <CardHeader>
                <CheckCircle2 className="h-6 w-6 text-primary" />
                <CardTitle className="text-lg">What Wakeel.org can help with</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Generating a first draft of an employment contract from the role and terms you
                  describe, in plain English or Urdu.
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
                  It cannot confirm the contract's legal enforceability or compliance with your
                  specific industry rules — a licensed labour law advocate should review it.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background py-16 sm:py-20">
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
      <section className="bg-muted/40 py-14 sm:py-16">
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
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`${sectionHeading} text-center mb-8`}>Related reading</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/journal/article/employment-contract-essentials-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Employment Contract in Pakistan: What Should It Include?</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/notice-period-employment-law-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Notice Period in Pakistan: Employee and Employer Rights</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/nda-format-in-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">NDA Format in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/wrongful-termination-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Wrongful Termination in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Preparing an employment contract?</h2>
          <p className="text-muted-foreground">
            Describe the role and terms, and let Wakeel put together a first draft — then get a
            labour law advocate to review it.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">Generate a Draft with Wakeel</a>
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
