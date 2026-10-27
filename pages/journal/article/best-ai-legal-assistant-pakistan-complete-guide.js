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
    "question": "How can I test an AI legal assistant before trusting it?",
    "answer": "Ask it a question whose answer you can check, such as what a specific CrPC or PPC section says, and compare its answer with the official text on the Pakistan Code website. Then ask the same question in Urdu, and ask which section it relied on."
  },
  {
    "question": "What questions reveal whether a tool knows Pakistani law?",
    "answer": "Ask about procedures unique to Pakistan, such as Sections 22-A/22-B CrPC or khula under the Family Courts Act, 1964. A tool that answers with Indian, UK or US concepts isn't properly grounded."
  },
  {
    "question": "What should I check in an AI tool's privacy policy?",
    "answer": "Check whether uploads are encrypted, how long documents are kept, whether they're used to train models and whether you can delete them. Pakistan does not yet have a fully enacted general data protection law, so the tool's own policy matters."
  },
  {
    "question": "How do I verify an AI's legal citation?",
    "answer": "Look up the statute and section on pakistancode.gov.pk, and look up any case citation in a law report or court website. Treat a citation you cannot find as unreliable."
  },
  {
    "question": "Does Wakeel.org pass these tests?",
    "answer": "Wakeel.org is built to cite the provisions it relies on, answer in English or Urdu and encrypt documents. Test it against the checklist yourself, as you would any tool."
  }
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Choose an AI Legal Assistant in Pakistan: A Test-It-Yourself Checklist",
    description:
      "How to test and choose an AI legal assistant in Pakistan yourself: four criteria, simple test questions to try, the red flags to walk away from, and how to check its answers against the Pakistan Code.",
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
        name: "How to Choose an AI Legal Assistant in Pakistan: A Test-It-Yourself Checklist",
        item: `${site.url}/journal/article/best-ai-legal-assistant-pakistan-complete-guide`,
      },
    ],
  },
];

const keywords = [
  "how to choose ai legal assistant pakistan",
  "evaluate legal ai tool",
  "ai legal assistant checklist",
  "verify ai legal answer pakistan code",
  "ai legal tool privacy pakistan"
].join(", ");

export default function BestAiLegalAssistantPakistanCompleteGuide() {
  return (
    <Layout>
      <MarketingSEO
        title="How to Choose an AI Legal Assistant in Pakistan: A Test-It-Yourself Checklist"
        description="How to test and choose an AI legal assistant in Pakistan yourself: four criteria, simple test questions to try, the red flags to walk away from, and how to check its answers against the Pakistan Code."
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
            How to Choose an AI Legal Assistant in Pakistan: A Test-It-Yourself Checklist
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't take any ranking on trust, including ours. This guide shows you how to test an AI
            legal assistant yourself in ten minutes before you rely on it.
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
            <h2 className={sectionHeading}>Four criteria to test</h2>
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
          <h2 className={`${sectionHeading} text-center mb-8`}>Related guides</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/journal/article/best-ai-legal-apps-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Best AI Legal Apps in Pakistan (2026)</p>
              <p className="text-xs text-muted-foreground mt-1">Named apps compared side by side</p>
            </Link>
            <Link href="/journal/article/best-ai-lawyer-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Is There an AI Lawyer in Pakistan?</p>
              <p className="text-xs text-muted-foreground mt-1">What 'AI lawyer' can legally mean</p>
            </Link>
            <Link href="/journal/article/ai-vs-lawyer-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">AI vs Hiring a Lawyer: What Each Can and Can't Do</p>
              <p className="text-xs text-muted-foreground mt-1">A capability comparison</p>
            </Link>
            <Link href="/journal/article/best-ai-tools-for-lawyers-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">AI Tools for Lawyers in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">For advocates and law firms</p>
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
