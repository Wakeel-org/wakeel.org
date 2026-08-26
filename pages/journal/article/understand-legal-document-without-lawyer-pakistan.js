import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Languages,
  Search,
  HelpCircle,
  AlertTriangle,
  ListChecks,
  BookOpen,
} from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site } from "../../../src/data/marketing";
import { cardBase, eyebrow, headingGradient, sectionHeading } from "../../../src/data/theme";

const readingApproach = [
  {
    icon: Search,
    title: "Identify the document type first",
    detail:
      "Is it a contract, an agreement, a court notice, an affidavit, a sale deed, or a legal notice? The type tells you what to expect — a rent agreement and a court summons need a completely different reading approach, and misreading the category leads people to panic over routine paperwork or dismiss something serious.",
  },
  {
    icon: ListChecks,
    title: "Find the five load-bearing facts",
    detail:
      "Who are the parties? What is being agreed or alleged? What money or property is involved? What are the dates and deadlines? What happens if either side doesn't comply? Almost every legal document boils down to these five things — find them before worrying about the surrounding legal language.",
  },
  {
    icon: Languages,
    title: "Translate the legalese, not just the words",
    detail:
      "Terms like 'indemnify,' 'without prejudice,' 'force majeure,' or 'muajjal/muwajjal' carry specific legal weight beyond their literal meaning. A word-for-word Urdu translation of an English contract can still leave you confused if the underlying legal concept isn't explained — this is where a plain-language explanation helps more than a dictionary.",
  },
  {
    icon: AlertTriangle,
    title: "Flag anything with a deadline or a penalty",
    detail:
      "Clauses about late payment penalties, automatic renewal, non-refundable deposits, or response deadlines are the ones that actually cost people money or rights when missed. Highlight these separately from the general terms — they deserve extra attention regardless of how the rest of the document reads.",
  },
  {
    icon: BookOpen,
    title: "Cross-check anything that looks one-sided",
    detail:
      "If a clause seems to only protect one party, or gives one side unusually broad power (to terminate, to change terms, to keep a deposit), it's worth double-checking — not necessarily because it's illegal, but because you should understand exactly what you're agreeing to before signing.",
  },
  {
    icon: FileText,
    title: "Know when reading isn't enough",
    detail:
      "Understanding a document and being safe to sign it are two different things. Property sale deeds, business contracts with real money at stake, and anything involving a waiver of your rights are worth a lawyer's review even after you've understood the plain-language summary yourself.",
  },
];

const redFlags = [
  "Blank spaces left for amounts, dates, or names to be filled in later, after you've signed.",
  "A clause requiring you to waive your right to dispute something in court.",
  "Automatic renewal terms with a very short window to cancel (sometimes just a few days).",
  "One-sided termination rights — the other party can end the agreement anytime, but you cannot.",
  "Vague terms like 'reasonable' or 'as determined by the Company' with no defined standard.",
  "A document in a language you don't read fluently, presented for immediate signature without time to review.",
];

const faqs = [
  {
    question: "How can I understand a legal document without hiring a lawyer?",
    answer:
      "Start by identifying the document type, then find the core facts: who's involved, what's being agreed, what money or property is at stake, and what the deadlines and penalties are. Read any deadline or penalty clause twice. For plain-language summaries and explanations of legal terms, a tool like Wakeel.org can help — but for anything you're about to sign with real financial or legal consequences, a lawyer's review is still worth the cost.",
  },
  {
    question: "How do I read a contract in Urdu or understand English legal terms?",
    answer:
      "Contracts often mix formal English legal terms even in Urdu-language documents. Break the contract into sections, and for each unfamiliar term (like 'indemnify' or 'force majeure'), look for a plain-language explanation rather than a literal translation — the legal meaning is usually more specific than the everyday meaning of the word.",
  },
  {
    question: "Can I summarize a legal document myself?",
    answer:
      "Yes, for most everyday documents. Write down, in your own words: the parties, the main obligation, the money involved, the dates, and what happens if someone doesn't comply. This kind of summary is genuinely useful — both for your own understanding and as something to hand a lawyer if you do need one.",
  },
  {
    question: "What are common red flags in legal documents in Pakistan?",
    answer:
      "Blank fields left to be filled in after signing, one-sided termination or renewal clauses, vague standards with no clear definition, and pressure to sign immediately without time to read are all worth pausing over. None of these automatically make a document invalid, but they're exactly the kind of clause worth a second look — ideally from a lawyer — before you sign.",
  },
  {
    question: "Can Wakeel.org read and summarize my legal document?",
    answer:
      "Yes — Wakeel.org can analyze documents (including long ones, 100+ pages) and produce a plain-language summary in English or Urdu, highlighting key dates, obligations, and clauses worth extra attention. It cannot tell you whether a document is legally safe to sign, negotiate terms on your behalf, or replace a lawyer's review for contracts involving significant money, property, or rights.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Understand a Legal Document Without a Lawyer",
    description:
      "A practical method for reading contracts, notices, and agreements in Pakistan without a law degree — what to look for, what red flags mean, and when you actually need a lawyer.",
    author: { "@type": "Organization", name: "Wakeel.org" },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-06-22",
    dateModified: "2026-06-22",
    mainEntityOfPage: `${site.url}/journal/article/understand-legal-document-without-lawyer-pakistan`,
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
        name: "How to Understand a Legal Document Without a Lawyer",
        item: `${site.url}/journal/article/understand-legal-document-without-lawyer-pakistan`,
      },
    ],
  },
];

const keywords = [
  "understand contract urdu",
  "read legal document pakistan",
  "legal document summary pakistan",
  "how to read a contract pakistan",
  "legal terms explained urdu",
  "contract review pakistan",
].join(", ");

export default function UnderstandLegalDocumentWithoutLawyerPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Understand a Legal Document Without a Lawyer"
        description="How to read a contract or legal document in Pakistan without a lawyer — what to look for, red flags to catch, and when you still need one."
        path="/journal/article/understand-legal-document-without-lawyer-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>
            Legal Help · Published June 22, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            How to Understand a Legal Document Without a Lawyer
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Most legal documents aren't actually written to confuse you — they're written by
            people who forgot what it's like not to already know the terms. Here's how to read
            past that, on your own, before deciding whether you need a lawyer too.
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
                You can understand most everyday legal documents yourself by identifying the
                document type, then pulling out five things: the parties, the main obligation, the
                money or property involved, the dates and deadlines, and the consequences of
                non-compliance. Flag one-sided or vague clauses for a second look. For contracts
                involving real money, property, or a waiver of your rights, use your own summary as
                a starting point — then still get a lawyer's review before signing.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>A reading method that actually works</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {readingApproach.map((r) => {
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

      {/* Red flags */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className={sectionHeading}>Red flags worth a second look</h2>
          </div>
          <Card className={cardBase}>
            <CardContent className="p-6">
              <ul className="space-y-3">
                {redFlags.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <AlertTriangle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{f}</span>
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
                  Summarizing long documents (100+ pages) into the parts that matter. Explaining
                  legal terms in plain English or Urdu. Highlighting clauses worth double-checking
                  before you sign, and preparing questions to bring to a lawyer.
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
                  It cannot tell you a document is safe to sign, negotiate terms for you, or
                  replace legal due diligence on contracts involving significant money, property,
                  or a waiver of your rights.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Summarize your document with Wakeel Free
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
            General educational information, not legal advice. For documents involving significant
            money, property, or legal rights, have a licensed advocate review the actual document
            before you sign. See our{" "}
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
              href="/journal/article/understanding-legal-notices-pakistan"
              className={`group ${cardBase} block rounded-lg p-5`}
            >
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                Understanding Legal Notices in Pakistan
              </p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link
              href="/journal/legal-issues-pakistan/legal-document-review-ai-pakistan"
              className={`group ${cardBase} block rounded-lg p-5`}
            >
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                AI Legal Document Review in Pakistan
              </p>
              <p className="text-xs text-muted-foreground mt-1">Guide · Wakeel Journal</p>
            </Link>
            <Link
              href="/journal/legal-issues-pakistan/property-document-check-pakistan"
              className={`group ${cardBase} block rounded-lg p-5`}
            >
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                Property Document Check Support in Pakistan
              </p>
              <p className="text-xs text-muted-foreground mt-1">Guide · Wakeel Journal</p>
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
          <h2 className={sectionHeading}>Have a document you're stuck on?</h2>
          <p className="text-muted-foreground">
            Upload it, ask questions in English or Urdu, and get a clear summary — then take it to
            a lawyer for anything you're about to sign.
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
