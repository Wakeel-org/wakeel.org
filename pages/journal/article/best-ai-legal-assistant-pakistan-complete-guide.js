import Link from "next/link";
import {
  CheckCircle2,
  ShieldCheck,
  Languages,
  FileSearch,
  Lock,
  HelpCircle,
  AlertTriangle,
} from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site } from "../../../src/data/marketing";
import { cardBase, eyebrow, headingGradient, sectionHeading } from "../../../src/data/theme";

const criteria = [
  { icon: FileSearch, title: "Source-aware, not just fluent", detail: "The single most important test: does it cite the actual statute or section it's relying on, so you can verify the text yourself, or does it just produce a confident-sounding paragraph you can't check?" },
  { icon: Languages, title: "Genuine bilingual support", detail: "For Pakistan specifically, real Urdu support — not just translation of English legal jargon — matters for actually being usable by the citizens who need it most." },
  { icon: ShieldCheck, title: "Grounded in Pakistani law, not generic training data", detail: "A general-purpose AI model trained mostly on US or UK legal content will confidently misapply foreign concepts to Pakistani questions unless it's specifically built or grounded for this jurisdiction." },
  { icon: Lock, title: "Clear, honest data handling", detail: "Given Pakistan has no fully enacted data protection law yet, check what the tool says about encryption, retention, and whether your documents are used to train models — don't assume, verify." },
];

const redFlags = [
  "It never admits uncertainty or tells you to verify with a lawyer — overconfidence on every answer is a bigger warning sign than occasional hedging.",
  "It can't or won't tell you which specific law or section an answer is based on.",
  "It implies it can replace a lawyer for filing, representation, or final legal advice.",
  "It has no visible information about data handling, encryption, or how long your documents are retained.",
];

const faqs = [
  {
    question: "What makes an AI legal assistant good for Pakistan specifically?",
    answer:
      "Source-aware answers grounded in actual Pakistani statutes (not generic or foreign legal content), genuine bilingual English/Urdu support, and honest data handling given Pakistan's still-developing privacy law framework. A tool that clearly states its limits is more trustworthy than one that answers everything with false confidence.",
  },
  {
    question: "Can an AI legal assistant replace a lawyer in Pakistan?",
    answer:
      "No, and a well-built one should say so directly. It's genuinely useful for understanding documents, learning the law, and preparing for a consultation — but final legal advice, representation, and filing require a licensed advocate.",
  },
  {
    question: "How do I know if an AI legal tool's answers about Pakistani law are accurate?",
    answer:
      "Check whether it cites the actual statute or section it's relying on, so you can verify the text against the official Pakistan Code or another primary source yourself, rather than trusting a paraphrase you can't check.",
  },
  {
    question: "Is it safe to upload legal documents to an AI assistant in Pakistan?",
    answer:
      "It depends on the specific tool's data practices — check its stated encryption and retention policy before uploading anything sensitive, since Pakistan doesn't yet have a fully enacted data protection law to fall back on as a guarantee.",
  },
  {
    question: "How does Wakeel.org fit this criteria?",
    answer:
      "Wakeel.org is built to be source-aware, explain answers in plain English or Urdu, and process documents with encryption — while consistently telling you when a question needs a licensed advocate rather than pretending to cover everything. It provides legal information and research support, not final legal advice.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best AI Legal Assistant for Pakistan: Complete Guide",
    description:
      "The evaluation criteria that actually matter when choosing an AI legal assistant in Pakistan — source-awareness, bilingual support, jurisdiction grounding, and data handling.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-05-31",
    dateModified: "2026-05-31",
    mainEntityOfPage: `${site.url}/journal/article/best-ai-legal-assistant-pakistan-complete-guide`,
    citation: [
      { "@type": "CreativeWork", name: "Hallucination-Free? Assessing the Reliability of Leading AI Legal Research Tools (2025, peer-reviewed) — Journal of Empirical Legal Studies / Stanford RegLab", url: "https://reglab.stanford.edu/publications/hallucination-free-assessing-the-reliability-of-leading-ai-legal-research-tools/" },
      { "@type": "CreativeWork", name: "Final Draft — Personal Data Protection Bill, May 2023 — Ministry of IT & Telecommunication", url: "https://moitt.gov.pk/SiteImage/Misc/files/Final%20Draft%20Personal%20Data%20Protection%20Bill%20May%202023.pdf" },
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
        name: "Best AI Legal Assistant for Pakistan: Complete Guide",
        item: `${site.url}/journal/article/best-ai-legal-assistant-pakistan-complete-guide`,
      },
    ],
  },
];

const keywords = [
  "best ai legal assistant pakistan",
  "ai legal assistant pakistan guide",
  "how to choose ai lawyer pakistan",
  "trustworthy ai legal tool pakistan",
  "ai legal app criteria pakistan",
].join(", ");

export default function BestAiLegalAssistantPakistanCompleteGuide() {
  return (
    <Layout>
      <MarketingSEO
        title="Best AI Legal Assistant for Pakistan: Complete Guide"
        description="The evaluation criteria that actually matter when choosing an AI legal assistant in Pakistan — source-awareness, bilingual support, jurisdiction grounding, and data handling."
        path="/journal/article/best-ai-legal-assistant-pakistan-complete-guide"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>
            AI & the Law · Published May 31, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Best AI Legal Assistant for Pakistan: Complete Guide
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Rather than ranking specific products, here's the actual criteria worth evaluating —
            the questions that separate a genuinely useful tool from one that just sounds
            confident.
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
                The best AI legal assistant for Pakistan is{" "}
                <strong>source-aware</strong> (cites actual statutes), genuinely{" "}
                <strong>bilingual</strong> in English and Urdu, <strong>grounded in Pakistani
                law</strong> rather than generic training data, and transparent about{" "}
                <strong>data handling</strong>. It should tell you plainly when a question needs a
                licensed advocate, rather than answering everything with false confidence.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educate: criteria */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>The four criteria that actually matter</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {criteria.map((r) => {
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

      {/* Reveal: red flags */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className={sectionHeading}>The red flags worth walking away from</h2>
          </div>
          <Card className={cardBase}>
            <CardContent className="p-6">
              <ul className="space-y-3">
                {redFlags.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <AlertTriangle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
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
                  Source-aware answers in English or Urdu, grounded in the actual Pakistani statute
                  it's citing, plus document analysis with encryption.
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
                  It cannot provide final legal advice, represent you, or replace a licensed
                  advocate for anything with real legal consequences.
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
          <h2 className="text-lg font-semibold text-foreground mb-4">Sources and further reading</h2>
          <ul className="space-y-2">
            {[
              { label: "Hallucination-Free? Assessing the Reliability of Leading AI Legal Research Tools (2025, peer-reviewed) — Journal of Empirical Legal Studies / Stanford RegLab", href: "https://reglab.stanford.edu/publications/hallucination-free-assessing-the-reliability-of-leading-ai-legal-research-tools/" },
              { label: "Final Draft — Personal Data Protection Bill, May 2023 — Ministry of IT & Telecommunication", href: "https://moitt.gov.pk/SiteImage/Misc/files/Final%20Draft%20Personal%20Data%20Protection%20Bill%20May%202023.pdf" },
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
            <Link href="/journal/article/best-ai-legal-apps-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Best AI Legal Apps in Pakistan (2026)</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/can-ai-review-legal-document-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Can AI Review a Legal Document in Pakistan?</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/ai-vs-lawyer-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Will AI Replace Lawyers? AI vs Hiring a Lawyer in Pakistan</p>
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
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Ready to try a source-aware AI legal assistant?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel a question in English or Urdu and see the criteria above in action.
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
