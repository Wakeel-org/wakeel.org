import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Landmark,
  Scale,
  Clock,
  HelpCircle,
  AlertTriangle,
  ListChecks,
} from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site } from "../../../src/data/marketing";
import { cardBase, eyebrow, headingGradient, sectionHeading } from "../../../src/data/theme";

const steps = [
  {
    icon: FileText,
    title: "1. Confirm you actually need a civil suit",
    detail:
      "Civil suits, governed by the Code of Civil Procedure (CPC) 1908, cover disputes over money, property, contracts, and civil rights — not criminal matters. Some disputes (consumer complaints, certain family matters, small rent disputes) have their own dedicated forums that are faster than an ordinary civil suit — check whether one of those applies before defaulting to the district court.",
  },
  {
    icon: Landmark,
    title: "2. Identify the right court and jurisdiction",
    detail:
      "A civil suit is filed in the civil court with both pecuniary jurisdiction (the money value of your claim) and territorial jurisdiction (usually where the defendant resides or where the cause of action arose) under Sections 15–20 of the CPC. Filing in the wrong court can get your suit returned or delayed — this is one of the most common early mistakes.",
  },
  {
    icon: ListChecks,
    title: "3. Draft the plaint",
    detail:
      "The plaint is your formal written claim — under Order VII of the CPC it must state the facts giving rise to the suit, the cause of action, the relief sought, and the valuation of the claim for court fee purposes. A vague or incomplete plaint is one of the fastest ways to get objections raised before your case is even heard on merits.",
  },
  {
    icon: Scale,
    title: "4. Pay court fees and file supporting documents",
    detail:
      "Civil suits require ad valorem court fees calculated on the value of the claim under the Court Fees Act 1870, plus copies of the plaint, any agreements, receipts, or correspondence that support your claim, and a list of witnesses where relevant. Missing documents at filing stage routinely cause avoidable delays.",
  },
  {
    icon: Clock,
    title: "5. Expect summons, written statement, and framing of issues",
    detail:
      "After filing, the court issues summons to the defendant, who files a written statement (their defense) under Order VIII CPC. The court then frames issues — the specific questions it needs to decide — before moving to evidence and arguments. This structure exists in every civil suit; the length of each stage depends heavily on how contested the facts are.",
  },
  {
    icon: AlertTriangle,
    title: "6. Understand the realistic timeline",
    detail:
      "Civil litigation in Pakistan can take anywhere from several months to multiple years, depending on the court's backlog, how many adjournments are sought, and whether the matter is appealed. This isn't a flaw unique to your case — it's the general reality of civil litigation, and worth factoring into your decision to sue versus settle.",
  },
];

const beforeFiling = [
  "Gather every document related to the dispute — agreements, receipts, messages, photos — before you see a lawyer, not after.",
  "Write a clear, dated timeline of events in your own words; this speeds up your first consultation significantly.",
  "Calculate roughly what you're claiming — this determines both the court's jurisdiction and the court fee you'll pay.",
  "Ask your lawyer whether a legal notice should be sent first — for some claims it's a useful (or required) step before filing.",
  "Consider whether mediation or a direct settlement conversation is worth attempting before committing to a suit that could run for years.",
];

const faqs = [
  {
    question: "How do I file a civil suit in Pakistan?",
    answer:
      "A civil suit starts with drafting a plaint under Order VII of the Code of Civil Procedure 1908, stating your facts, cause of action, and the relief you want, then filing it with supporting documents and the applicable court fee at the civil court with jurisdiction over the matter (usually based on the claim's value and where the defendant resides). Filing itself doesn't require a lawyer, but drafting a solid plaint and navigating procedure well is exactly where legal representation earns its value.",
  },
  {
    question: "How do I file a case in the district court in Pakistan?",
    answer:
      "District courts handle civil suits within their pecuniary and territorial jurisdiction under the CPC. You (or your lawyer) file the plaint at the district court's filing counter along with supporting documents and court fee, after which the court registers the suit, issues summons to the defendant, and proceeds through written statement, framing of issues, evidence, and arguments.",
  },
  {
    question: "What is civil litigation in Pakistan and how long does it take?",
    answer:
      "Civil litigation refers to the court process for resolving non-criminal disputes over money, property, contracts, or civil rights, governed primarily by the CPC 1908. Timelines vary enormously — straightforward, uncontested matters may resolve in months, while contested suits with multiple witnesses and possible appeals can take years. Ask your lawyer for a realistic estimate based on the specific court and the other side's likely conduct.",
  },
  {
    question: "Do I need a lawyer to file a civil suit in Pakistan?",
    answer:
      "It isn't legally mandatory for most civil suits, but in practice the drafting of the plaint, correct valuation for court fees, and navigating procedural objections are technical enough that most people are better served by a lawyer — especially for anything beyond a small, straightforward claim.",
  },
  {
    question: "Can Wakeel.org help me prepare for a civil suit?",
    answer:
      "Wakeel.org can help you organize your facts into a clear timeline, explain CPC terms like 'plaint,' 'written statement,' or 'framing of issues' in plain English or Urdu, and help you build a document checklist before you see a lawyer. It cannot draft or file your plaint, represent you in court, or predict how a judge will decide your case — a licensed advocate should handle the actual litigation.",
  },
  {
    question: "How do I file a civil case in Pakistan if I've never done this before?",
    answer:
      "Start by writing down exactly what you're owed or what relief you want, and gather every supporting document — agreements, receipts, correspondence. Take these to a civil litigation lawyer, who will assess the right court based on your claim's value and location, draft the plaint under Order VII CPC, and calculate the court fee. Filing itself is done at the court's filing counter once the plaint and fee are ready.",
  },
  {
    question: "What is the process to file a lawsuit in Pakistan from start to finish?",
    answer:
      "Broadly: identify the right court by jurisdiction and claim value, draft and file a plaint with supporting documents and court fee, the court issues summons to the defendant, the defendant files a written statement, the court frames the issues to be decided, both sides present evidence, and the court hears arguments before issuing judgment. Either side can typically appeal an unfavorable judgment, which extends the overall timeline further.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to File a Civil Suit in Pakistan",
    description:
      "A practical walkthrough of filing a civil suit in Pakistan under the CPC 1908 — jurisdiction, drafting the plaint, court fees, and a realistic timeline.",
    author: { "@type": "Organization", name: "Wakeel.org" },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-07-31",
    dateModified: "2026-07-31",
    mainEntityOfPage: `${site.url}/journal/article/civil-suit-pakistan`,
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to file a civil suit in Pakistan",
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
        name: "How to File a Civil Suit in Pakistan",
        item: `${site.url}/journal/article/civil-suit-pakistan`,
      },
    ],
  },
];

const keywords = [
  "civil suit pakistan",
  "file case district court",
  "civil litigation pakistan",
  "how to file civil suit pakistan",
  "cpc 1908 pakistan",
  "plaint drafting pakistan",
  "how do i file a civil case in pakistan",
  "what is the process to file a lawsuit in pakistan",
].join(", ");

export default function CivilSuitPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="How to File a Civil Suit in Pakistan"
        description="How civil suits work in Pakistan under the CPC 1908 — jurisdiction, drafting the plaint, court fees, and a realistic timeline from filing to judgment."
        path="/journal/article/civil-suit-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>
            Legal Help · Published July 31, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            How to File a Civil Suit in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            "Just sue them" sounds simple until you're staring at a plaint, a court fee schedule,
            and a filing counter clerk asking which court has jurisdiction. Here's the real
            process, stage by stage.
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
                A civil suit in Pakistan is governed by the <strong>Code of Civil Procedure
                1908</strong>. You (through a lawyer, in most cases) draft a <strong>plaint</strong>{" "}
                stating your facts and the relief sought, file it with court fees at the civil
                court with the right jurisdiction, and the matter proceeds through summons, a
                written statement from the defendant, framed issues, evidence, and arguments.
                Expect months at the fast end and years if the matter is contested and appealed.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>The civil suit process, stage by stage</h2>
          </div>
          <div className="space-y-4">
            {steps.map((s) => {
              const Icon = s.icon;
              return (
                <Card key={s.title} className={cardBase}>
                  <CardContent className="p-6 flex gap-4">
                    <Icon className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-base mb-1">{s.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{s.detail}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Before filing */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className={sectionHeading}>Before you or your lawyer files</h2>
          </div>
          <Card className={cardBase}>
            <CardContent className="p-6">
              <ul className="space-y-3">
                {beforeFiling.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
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
                  Explaining CPC terms like plaint, written statement, or framing of issues in
                  plain English or Urdu. Organizing your facts and documents into a timeline
                  before your first lawyer consultation.
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
                  It cannot draft or file your plaint, represent you in court, calculate your
                  exact court fee, or predict how a judge will rule. Civil litigation strategy
                  needs a licensed advocate.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Organize your case facts with Wakeel Free
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
            General educational information, not legal advice. Civil procedure and timelines vary
            by court and case — consult a licensed advocate before filing. See our{" "}
            <Link href="/disclaimer" className="text-primary hover:underline">full disclaimer</Link>.
          </p>
        </div>
      </section>

      {/* Related reading */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`${sectionHeading} text-center mb-8`}>Related reading</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/journal/legal-issues-pakistan/court-procedures-pakistan"
              className={`group ${cardBase} block rounded-lg p-5`}
            >
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                Court Procedures in Pakistan
              </p>
              <p className="text-xs text-muted-foreground mt-1">Guide · Wakeel Journal</p>
            </Link>
            <Link
              href="/journal/article/consumer-complaint-pakistan"
              className={`group ${cardBase} block rounded-lg p-5`}
            >
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                How to File a Consumer Complaint in Pakistan
              </p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link
              href="/journal/article/property-dispute-lawyer-pakistan"
              className={`group ${cardBase} block rounded-lg p-5`}
            >
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                Finding a Property Dispute Lawyer in Pakistan
              </p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/citizens" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                Wakeel.org for Citizens
              </p>
              <p className="text-xs text-muted-foreground mt-1">How Wakeel helps everyday legal problems</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Thinking about filing a suit?</h2>
          <p className="text-muted-foreground">
            Organize your facts and documents with Wakeel first, then bring a clear summary to a
            civil litigation lawyer.
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
