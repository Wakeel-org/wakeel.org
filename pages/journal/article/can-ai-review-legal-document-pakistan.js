import Link from "next/link";
import {
  CheckCircle2,
  FileSearch,
  ShieldCheck,
  Languages,
  ListChecks,
  HelpCircle,
  AlertTriangle,
  Lock,
  Scale,
} from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site } from "../../../src/data/marketing";
import { cardBase, eyebrow, headingGradient, sectionHeading } from "../../../src/data/theme";

const canDo = [
  {
    icon: ListChecks,
    title: "Summarize what a document actually says",
    detail:
      "AI is genuinely good at condensing a 15-page rent agreement, employment contract, or legal notice into the handful of terms that actually matter — parties, duration, payment terms, and obligations — in plain English or Urdu, in seconds rather than an hour of careful reading.",
  },
  {
    icon: FileSearch,
    title: "Flag clauses worth a second look",
    detail:
      "It can point out unusual or one-sided terms — an unlimited indemnity clause, an auto-renewal you might miss, a penalty clause, a jurisdiction clause that sends disputes somewhere inconvenient — so you know exactly what to ask a lawyer about, rather than reading the whole document cold.",
  },
  {
    icon: Languages,
    title: "Bridge the English–Urdu gap",
    detail:
      "A lot of legal and contractual language in Pakistan — from Standing Orders termination clauses to property sale deeds — is written in formal legal English or a legal-Urdu register most people don't use day to day. A Pakistan-aware AI tool can translate and explain terms like 'indemnify', 'bona fide requirement', or 'liquidated damages' in the language you actually think in.",
  },
  {
    icon: ShieldCheck,
    title: "Spot what's missing, not just what's there",
    detail:
      "Good document review also means noticing absence — no notice period specified, no dispute resolution clause, no clear definition of 'cause' for termination. AI tools that are trained to check documents against what a well-drafted version usually includes can catch these gaps faster than a first-time reader would.",
  },
];

const cannotDo = [
  {
    icon: Scale,
    title: "Judge enforceability with certainty",
    detail:
      "Whether a specific clause is actually enforceable in a Pakistani court depends on case law, the facts, and sometimes the specific judge or forum — nuance an AI tool can describe in general terms but shouldn't be trusted to guarantee.",
  },
  {
    icon: AlertTriangle,
    title: "Replace registration, stamping, and filing requirements",
    detail:
      "Many Pakistani documents — sale deeds, some agreements, powers of attorney — have mandatory stamp duty and registration steps under the Stamp Act 1899 and Registration Act 1908. AI review does not substitute for getting these procedural steps right; missing them can make an otherwise sound document legally weak.",
  },
  {
    icon: Scale,
    title: "Represent you, negotiate, or draft you out of a bad deal",
    detail:
      "AI can tell you a clause looks risky. Only a licensed advocate can negotiate it on your behalf, tell you how a specific court or counterparty is likely to react, or accept legal responsibility for the advice given — which is precisely why Pakistan's Legal Practitioners and Bar Councils Act 1973 reserves practice and representation for enrolled advocates.",
  },
];

const checklist = [
  "Confirm the tool tells you what it's reading from — a source-aware summary you can trace back to the actual clause beats a confident paragraph you can't verify.",
  "Check how your document is handled: is it encrypted, is it retained, is it ever used to train a model? Treat any legal document — especially ones with CNIC numbers, financial terms, or family details — as sensitive data.",
  "Use AI review as your first pass, not your last: read the flagged clauses yourself, then take genuinely important documents (property, employment, litigation) to a licensed advocate before you sign or file anything.",
  "For documents needing stamping, registration, or a specific procedural step, verify what's legally required separately — AI review of the text doesn't confirm you've completed the paperwork correctly.",
];

const faqs = [
  {
    question: "Can AI legally review a document in Pakistan?",
    answer:
      "Yes, in the sense that AI tools can read, summarize, and flag clauses in a document — there's no law against using software to help you understand a contract. What AI cannot do is practice law: it cannot represent you, file documents on your behalf, or give the kind of binding professional advice reserved for advocates enrolled under the Legal Practitioners and Bar Councils Act 1973.",
  },
  {
    question: "Is it safe to upload a legal document to an AI tool in Pakistan?",
    answer:
      "It depends entirely on the tool. Pakistan does not yet have a fully enacted data protection law — the Personal Data Protection Bill has been under consideration by the Ministry of IT & Telecommunication since 2023 but hasn't been passed — so there's no single legal backstop guaranteeing how your data is handled. Before uploading anything sensitive (CNIC numbers, financial details, family matters), check the tool's stated encryption and data-retention practices for yourself.",
  },
  {
    question: "What can AI actually catch in a contract that I might miss?",
    answer:
      "Commonly: auto-renewal clauses, one-sided indemnity or penalty terms, missing notice periods, vague or undefined key terms, and jurisdiction/dispute-resolution clauses that send disputes to an inconvenient forum. It's also useful for simply translating dense legal English or formal Urdu into plain language so you actually understand what you're agreeing to.",
  },
  {
    question: "Can AI replace a lawyer for reviewing a contract in Pakistan?",
    answer:
      "No — and a well-built legal AI tool should tell you that directly rather than implying otherwise. AI is well suited to a fast first pass: summarizing, flagging, and explaining. For anything with real financial or legal consequences — property transactions, employment disputes, litigation, business contracts of real value — a licensed advocate's review still matters, particularly for enforceability judgment and procedural steps like stamping and registration.",
  },
  {
    question: "How does Wakeel.org review legal documents?",
    answer:
      "Wakeel.org can analyze documents in English or Urdu — contracts, notices, agreements, and longer filings up to 100+ pages — summarizing key terms, flagging clauses worth verifying, and explaining legal language in plain terms, with source-aware answers grounded in Pakistani law rather than generic templates. It processes documents with encryption and does not represent you or replace a licensed advocate's judgment on enforceability or strategy.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Can AI Review a Legal Document in Pakistan?",
    description:
      "A practical guide to what AI-powered tools can and cannot do when reviewing contracts, agreements, and legal notices in Pakistan — what to check before uploading a document, and when you still need a licensed advocate.",
    author: { "@type": "Organization", name: "Wakeel.org" },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-05-23",
    dateModified: "2026-05-23",
    mainEntityOfPage: `${site.url}/journal/article/can-ai-review-legal-document-pakistan`,
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
        name: "Can AI Review a Legal Document in Pakistan?",
        item: `${site.url}/journal/article/can-ai-review-legal-document-pakistan`,
      },
    ],
  },
];

const keywords = [
  "can ai review a legal document in pakistan",
  "ai document analysis pakistan",
  "contract review tool pakistan",
  "legal document review pakistan",
  "ai legal document analysis pakistan",
  "ai contract review pakistan",
].join(", ");

export default function CanAiReviewLegalDocumentPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Can AI Review a Legal Document in Pakistan?"
        description="What AI-powered tools can genuinely catch in a contract, agreement, or legal notice in Pakistan, what still needs a licensed advocate, and what to check before uploading a document."
        path="/journal/article/can-ai-review-legal-document-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>
            AI & the Law · Published May 23, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Can AI Review a Legal Document in Pakistan?
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A tenancy agreement lands in your inbox, or an employer hands you a contract to sign
            "today." You can't afford a lawyer for every document — but you also can't afford to
            sign blind. Here's what AI review can honestly do, and where it stops.
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
                Yes — AI can read, summarize, and flag risk in a legal document, and do it in
                English or Urdu in seconds. It's a genuinely useful <strong>first pass</strong>:
                catching missing clauses, unusual terms, and unclear language you might otherwise
                skim past. What it can't do is guarantee a clause is enforceable, complete
                mandatory stamping or registration steps, or replace a licensed advocate for
                anything with real financial or legal weight. Treat AI review as the fast read
                before the careful one, not a substitute for it.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Can do */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>What AI document review genuinely does well</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {canDo.map((r) => {
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

      {/* Cannot do */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>Where it stops — and a lawyer's judgment still matters</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {cannotDo.map((r) => {
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

      {/* Checklist */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className={sectionHeading}>Before you upload a document anywhere</h2>
          </div>
          <Card className={cardBase}>
            <CardContent className="p-6">
              <ol className="space-y-3">
                {checklist.map((step, i) => (
                  <li key={step} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center justify-center h-5 w-5 rounded-full bg-primary/10 text-primary text-xs font-semibold shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-5 flex items-start gap-3 rounded-md bg-primary/5 p-4 text-sm text-muted-foreground">
                <Lock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>
                  Pakistan's Personal Data Protection Bill — drafted by the Ministry of IT &
                  Telecommunication — is still not enacted law as of this writing, so there's no
                  single statute guaranteeing how an AI tool must handle your uploaded documents.
                  Check each tool's own privacy practice rather than assuming one applies.
                </span>
              </div>
            </CardContent>
          </Card>
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
                  Reading contracts, tenancy agreements, employment letters, and legal notices —
                  up to 100+ pages — in English or Urdu, summarizing key terms, flagging clauses
                  worth verifying, and grounding its explanations in the actual Pakistani statute
                  or provision it's citing rather than a generic template.
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
                  It cannot guarantee enforceability, complete stamping or registration on your
                  behalf, negotiate terms with a counterparty, or represent you in any proceeding —
                  for documents with real financial or legal stakes, verify with a licensed
                  advocate before you sign or file.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Review a document with Wakeel Free
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
            General educational information, not legal advice. AI document review is a helpful
            first pass, not a substitute for a licensed advocate's judgment on enforceability,
            drafting, or representation. See our{" "}
            <Link href="/disclaimer" className="text-primary hover:underline">full disclaimer</Link>.
          </p>
        </div>
      </section>

      {/* Sources */}
      <section className="bg-muted/40 py-14 sm:py-16">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-semibold text-foreground mb-4">Sources and further reading</h2>
          <ul className="space-y-2">
            {[
              {
                label: "Personal Data Protection Bill, 2023 (final draft) — Ministry of IT & Telecommunication",
                href: "https://moitt.gov.pk/SiteImage/Misc/files/Final%20Draft%20Personal%20Data%20Protection%20Bill%20May%202023.pdf",
              },
              {
                label: "Hallucinating Law: Legal Mistakes with Large Language Models are Pervasive — Stanford Law School",
                href: "https://law.stanford.edu/2024/01/11/hallucinating-law-legal-mistakes-with-large-language-models-are-pervasive/",
              },
            ].map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-sm text-primary hover:underline"
                >
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
            <Link
              href="/journal/article/ai-contract-review-pakistan"
              className={`group ${cardBase} block rounded-lg p-5`}
            >
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                Using AI to Review Contracts in Pakistan
              </p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link
              href="/journal/article/understand-legal-document-without-lawyer-pakistan"
              className={`group ${cardBase} block rounded-lg p-5`}
            >
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                How to Understand a Legal Document Without a Lawyer
              </p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link
              href="/journal/article/ai-vs-lawyer-pakistan"
              className={`group ${cardBase} block rounded-lg p-5`}
            >
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                Will AI Replace Lawyers? AI vs Hiring a Lawyer in Pakistan
              </p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/legal-sources" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                Our Approach to Legal Sources
              </p>
              <p className="text-xs text-muted-foreground mt-1">How Wakeel grounds answers in Pakistani law</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Have a document you need to understand?</h2>
          <p className="text-muted-foreground">
            Upload it and Wakeel will summarize it in plain language, flag what's worth a second
            look, and help you decide when it's time to bring in a licensed advocate.
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
