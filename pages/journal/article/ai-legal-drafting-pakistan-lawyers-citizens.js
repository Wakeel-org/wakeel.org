import Link from "next/link";
import {
  CheckCircle2,
  ScrollText,
  FileText,
  Gavel,
  ShieldCheck,
  HelpCircle,
  AlertTriangle,
} from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site } from "../../../src/data/marketing";
import { cardBase, headingGradient, sectionHeading } from "../../../src/data/theme";

const useCases = [
  { icon: FileText, title: "First drafts of routine contracts", detail: "AI can produce a solid starting draft of a rent agreement, employment contract, or NDA based on the terms you describe — a genuine head start compared to a blank page or a generic template found online." },
  { icon: ScrollText, title: "Legal notices and letters", detail: "For citizens, drafting a clear demand letter or response to a legal notice is exactly the kind of structured, formulaic writing task AI handles well as a starting point, before a lawyer reviews the specifics." },
  { icon: Gavel, title: "Pleadings and filings — for lawyers, with heavy review", detail: "AI can produce a structural first draft of a plaint or petition, but the legal strategy, factual accuracy, and citations require a lawyer's direct, careful review before anything is filed — this is not a category to hand off lightly." },
  { icon: ShieldCheck, title: "What AI drafting cannot safely replace", detail: "Judgment calls on enforceability, jurisdiction-specific requirements like stamp duty and registration, negotiation strategy, and final professional sign-off all still need a licensed advocate — drafting speed doesn't substitute for legal judgment." },
];

const faqs = [
  {
    question: "Can AI draft a legally valid contract in Pakistan?",
    answer:
      "AI can produce a strong first draft covering standard terms, but a legally sound, enforceable contract in Pakistan also needs correct handling of stamp duty, registration where required under the Registration Act 1908, and clauses tailored to your specific situation — a lawyer's review before signing remains important.",
  },
  {
    question: "Is it safe for a citizen to use AI to draft a legal notice?",
    answer:
      "It's a reasonable starting point for organizing your points clearly, but for anything you intend to actually send with legal weight, having a lawyer review the draft — or drafting it directly — reduces the risk of a technical or strategic error.",
  },
  {
    question: "Can lawyers use AI to draft court filings in Pakistan?",
    answer:
      "As a first-draft tool for structure, yes — but legal strategy, factual accuracy, and every citation in a pleading or petition need the lawyer's direct, careful review before filing. This is one of the higher-stakes uses of AI drafting and shouldn't be treated as a shortcut.",
  },
  {
    question: "What can't AI legal drafting replace?",
    answer:
      "Judgment on enforceability, jurisdiction-specific procedural requirements (like stamping and registration), negotiation strategy, and the professional accountability a licensed advocate takes on when they sign off on a document.",
  },
  {
    question: "Can Wakeel.org help draft legal documents?",
    answer:
      "Wakeel.org can help you draft a first version of common documents and explain what to check before finalizing them, in plain English or Urdu. It cannot guarantee legal enforceability, handle registration or stamping, or replace a licensed advocate's final review — especially for anything with real financial or legal consequences.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "AI Legal Drafting in Pakistan: How Lawyers and Citizens Can Use AI",
    description:
      "Where AI drafting genuinely helps in Pakistan — contracts, legal notices, pleadings — and where it cannot substitute for a licensed advocate's judgment and sign-off.",
    author: { "@type": "Organization", name: "Wakeel.org" },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-08-10",
    dateModified: "2026-08-10",
    mainEntityOfPage: `${site.url}/journal/article/ai-legal-drafting-pakistan-lawyers-citizens`,
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
        name: "AI Legal Drafting in Pakistan",
        item: `${site.url}/journal/article/ai-legal-drafting-pakistan-lawyers-citizens`,
      },
    ],
  },
];

const keywords = [
  "ai legal drafting pakistan",
  "ai contract drafting pakistan",
  "ai legal notice drafting pakistan",
  "ai pleadings drafting lawyers",
  "draft legal document with ai pakistan",
].join(", ");

export default function AiLegalDraftingPakistanLawyersCitizens() {
  return (
    <Layout>
      <MarketingSEO
        title="AI Legal Drafting in Pakistan: How Lawyers and Citizens Can Use AI"
        description="Where AI drafting genuinely helps in Pakistan — contracts, legal notices, pleadings — and where it cannot substitute for a licensed advocate's judgment."
        path="/journal/article/ai-legal-drafting-pakistan-lawyers-citizens"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            AI & the Law · Published August 10, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            AI Legal Drafting in Pakistan: How Lawyers and Citizens Can Use AI
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A blank page is the hardest part of most legal drafting — AI is genuinely good at
            solving that. What it draws next to it still needs a professional eye.
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
                AI drafting is genuinely useful for a{" "}
                <strong>first draft</strong> of routine contracts, legal notices, and letters — for
                both citizens and lawyers. For{" "}
                <strong>court filings</strong>, treat AI output as a structural starting point
                requiring heavy review. It cannot handle{" "}
                <strong>stamp duty and registration</strong> requirements, negotiation strategy, or
                the professional accountability a licensed advocate takes on when signing off.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educate: use cases */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>Where it helps, and where it stops</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {useCases.map((r) => {
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
                  Drafting a first version of common documents and explaining what to check before
                  finalizing them, in plain English or Urdu.
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
                  It cannot guarantee legal enforceability, handle registration or stamping, or
                  replace a licensed advocate's final review.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">Try Wakeel Free</a>
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
            General educational information, not legal advice. See our{" "}
            <Link href="/disclaimer" className="text-primary hover:underline">full disclaimer</Link>.
          </p>
        </div>
      </section>

      {/* Related reading */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`${sectionHeading} text-center mb-8`}>Related reading</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/journal/article/draft-legal-contract-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to Draft a Legal Contract in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/ai-contract-review-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Using AI to Review Contracts in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/best-ai-tools-for-lawyers-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Best AI Tools for Lawyers in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/legal-sources" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Our Approach to Legal Sources</p>
              <p className="text-xs text-muted-foreground mt-1">How Wakeel grounds answers in Pakistani law</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Need a first draft of a legal document?</h2>
          <p className="text-muted-foreground">
            Describe what you need and Wakeel will help you draft it — then get a licensed advocate
            to review it before you finalize.
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
