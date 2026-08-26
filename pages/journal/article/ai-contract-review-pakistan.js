import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileSearch,
  ShieldCheck,
  Languages,
  HelpCircle,
  AlertTriangle,
  ListChecks,
  Clock,
} from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site } from "../../../src/data/marketing";
import { cardBase, eyebrow, headingGradient, sectionHeading } from "../../../src/data/theme";

const whatItDoes = [
  {
    icon: FileSearch,
    title: "Flags the clauses that actually matter",
    detail:
      "Termination rights, penalty and late-payment clauses, renewal terms, and indemnity language are where real risk hides. AI review can surface these in seconds across a long agreement, instead of you scanning page after page hoping not to miss one.",
  },
  {
    icon: Languages,
    title: "Translates legal language into plain terms",
    detail:
      "Terms like 'indemnify,' 'force majeure,' or 'liquidated damages' carry specific legal weight. A good AI review explains what a clause actually means for you in plain English or Urdu, not just what the words say literally.",
  },
  {
    icon: ListChecks,
    title: "Compares against what a fair contract usually looks like",
    detail:
      "AI review can point out when a clause is unusually one-sided — for example, only one party can terminate at will, or the renewal window is unusually short — so you know what to push back on or ask a lawyer about.",
  },
  {
    icon: Clock,
    title: "Speeds up your first pass dramatically",
    detail:
      "Reading a 40-page vendor agreement line by line can take hours. An AI first pass that highlights the sections needing real attention can cut that down to minutes — leaving your own (or your lawyer's) time for the parts that actually need judgment.",
  },
];

const limits = [
  "AI review cannot confirm a contract is legally valid or enforceable under Pakistani law for your specific situation.",
  "It cannot negotiate terms with the other party or draft your counter-proposal in a way that protects your specific interests.",
  "It cannot catch every risk that depends on context outside the document itself — your business relationship, industry norms, or unwritten understandings.",
  "For contracts involving significant money, property, or long-term obligations, a lawyer's review should still happen before you sign.",
];

const faqs = [
  {
    question: "Can AI review a legal contract in Pakistan?",
    answer:
      "Yes — AI tools can analyze a contract, flag risky or one-sided clauses (termination, penalties, renewal, indemnity), and explain the legal language in plain English or Urdu. This is genuinely useful as a fast first pass, but it isn't a substitute for a lawyer's review, especially for contracts involving significant money, property, or long-term obligations.",
  },
  {
    question: "What does 'legal document analysis' mean and how accurate is it?",
    answer:
      "Legal document analysis (whether AI-based or manual) means systematically reviewing a document to identify its parties, obligations, key dates, and risk clauses. AI-based analysis can be very fast and thorough for long documents, but accuracy depends on the tool being properly grounded in the relevant law and honest about uncertainty — a tool that never flags anything as unclear should be treated with suspicion.",
  },
  {
    question: "Is AI contract review safe to rely on for business agreements in Pakistan?",
    answer:
      "It's safe as a first-pass tool to speed up your own review and understanding — not as a final sign-off. Always verify that a contract meets the legal requirements that matter for your transaction (stamping and registration for property matters, for instance), and have a lawyer review anything with meaningful financial or legal exposure before you sign.",
  },
  {
    question: "How is AI contract review different from a lawyer's review?",
    answer:
      "AI review is fast, consistent, and good at flagging patterns across a long document, but it doesn't understand your specific business relationship, negotiate on your behalf, or take on legal responsibility for missed risks. A lawyer's review is slower but brings judgment, negotiation, and professional accountability that AI cannot replicate.",
  },
  {
    question: "Can Wakeel.org review my contract?",
    answer:
      "Yes — upload a contract to Wakeel.org and it can analyze documents up to 100+ pages, flag key clauses and obligations, and summarize the agreement in plain English or Urdu. It cannot certify the contract's legal validity, negotiate terms, or replace a lawyer's review before you sign something significant.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Using AI to Review Contracts in Pakistan",
    description:
      "What AI contract review can genuinely do for Pakistani businesses and citizens, what it misses, and how to use it as a fast first pass rather than a final sign-off.",
    author: { "@type": "Organization", name: "Wakeel.org" },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-08-03",
    dateModified: "2026-08-03",
    mainEntityOfPage: `${site.url}/journal/article/ai-contract-review-pakistan`,
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
        name: "Using AI to Review Contracts in Pakistan",
        item: `${site.url}/journal/article/ai-contract-review-pakistan`,
      },
    ],
  },
];

const keywords = [
  "review agreement ai",
  "legal document analysis pakistan",
  "ai contract review pakistan",
  "contract analysis tool pakistan",
  "ai document review pakistan",
].join(", ");

export default function AiContractReviewPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Using AI to Review Contracts in Pakistan"
        description="What AI contract review genuinely does for Pakistani businesses — flagging risky clauses, translating legal language — and where it stops being enough."
        path="/journal/article/ai-contract-review-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>
            AI &amp; the Law · Published August 3, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Using AI to Review Contracts in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nobody actually enjoys reading a 30-page vendor agreement clause by clause. Here's what
            AI review genuinely speeds up — and the parts of contract review it should never be
            trusted to finish alone.
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
                AI contract review can flag risky clauses (termination, penalties, renewal,
                indemnity), translate legal language into plain English or Urdu, and cut your
                first-pass reading time dramatically. It cannot certify legal validity, negotiate
                terms, or replace a lawyer's judgment for contracts with real money, property, or
                long-term obligations at stake — treat it as a fast first pass, not a final
                sign-off.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What it does */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>What AI review genuinely does well</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {whatItDoes.map((w) => {
              const Icon = w.icon;
              return (
                <Card key={w.title} className={cardBase}>
                  <CardHeader>
                    <Icon className="h-7 w-7 text-primary" />
                    <CardTitle className="text-lg">{w.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{w.detail}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Limits */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className={sectionHeading}>Where it stops being enough</h2>
          </div>
          <Card className={cardBase}>
            <CardContent className="p-6">
              <ul className="space-y-3">
                {limits.map((l) => (
                  <li key={l} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <AlertTriangle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Try AI contract review with Wakeel Free
              </a>
            </Button>
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
            General educational information, not legal advice. Always verify AI-assisted contract
            review against a lawyer's judgment before relying on it for significant agreements.
            See our{" "}
            <Link href="/disclaimer" className="text-primary hover:underline">full disclaimer</Link>.
          </p>
        </div>
      </section>

      {/* Related reading */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`${sectionHeading} text-center mb-8`}>Related reading</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/journal/article/draft-legal-contract-pakistan"
              className={`group ${cardBase} block rounded-lg p-5 bg-card`}
            >
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                How to Draft a Legal Contract in Pakistan
              </p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link
              href="/journal/article/ai-legal-research-tools-lawyers-pakistan"
              className={`group ${cardBase} block rounded-lg p-5 bg-card`}
            >
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                AI Legal Research Tools for Lawyers in Pakistan
              </p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link
              href="/journal/article/understand-legal-document-without-lawyer-pakistan"
              className={`group ${cardBase} block rounded-lg p-5 bg-card`}
            >
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                How to Understand a Legal Document Without a Lawyer
              </p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/lawyers" className={`group ${cardBase} block rounded-lg p-5 bg-card`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                Wakeel.org for Lawyers
              </p>
              <p className="text-xs text-muted-foreground mt-1">Full feature overview for legal practice</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Have a contract sitting in your inbox?</h2>
          <p className="text-muted-foreground">
            Upload it and get a plain-language breakdown of the clauses that matter — in minutes,
            not hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">Try Wakeel Free</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/pricing">See pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
