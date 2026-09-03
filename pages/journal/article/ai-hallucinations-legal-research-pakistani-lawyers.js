import Link from "next/link";
import {
  CheckCircle2,
  AlertOctagon,
  FileSearch,
  ShieldCheck,
  Scale,
  HelpCircle,
  AlertTriangle,
} from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site } from "../../../src/data/marketing";
import { cardBase, eyebrow, headingGradient, sectionHeading } from "../../../src/data/theme";

const risks = [
  { icon: AlertOctagon, title: "Fabricated case citations", detail: "The most-cited risk: an AI tool generates a case name, citation, or quote that sounds entirely plausible but doesn't exist, or misattributes a real holding to the wrong case." },
  { icon: FileSearch, title: "Mischaracterized authority", detail: "Even where a citation is real, AI tools can misstate what a case actually held, or cite it for a proposition it doesn't support — a subtler and arguably more dangerous error than outright fabrication, since it's harder to catch." },
  { icon: Scale, title: "Confident wrong answers on Pakistan-specific questions", detail: "General-purpose AI models trained mostly on foreign legal content can confidently misapply US or UK legal concepts to Pakistani law, or cite outdated or repealed provisions as current." },
  { icon: ShieldCheck, title: "The risk doesn't disappear with 'legal-specific' tools", detail: "Specialized legal research tools with retrieval-augmented generation substantially outperform general-purpose models, but still measurably hallucinate — this isn't a problem unique to consumer chatbots." },
];

const safeguards = [
  "Verify every case citation and statutory reference against the original text before it goes into a filing, argument, or client advice — no exceptions, regardless of how confident the AI output sounds.",
  "Treat AI-generated legal research as a first draft or a starting point for your own research, not a finished product ready to cite.",
  "Ask the tool (or check independently) whether a specific provision is still in force and hasn't been amended or repealed — outdated law presented as current is a distinct risk from outright fabrication.",
  "Build verification into your standard workflow rather than relying on memory or good intentions — a checklist step catches what a rushed review misses.",
];

const faqs = [
  {
    question: "How common are AI hallucinations in legal research?",
    answer:
      "Measurably common even in leading tools — a 2025 peer-reviewed Stanford study found hallucination rates of 17% for Lexis+ AI, 33% for Westlaw AI-Assisted Research, and 43% for a general-purpose GPT-4 setup, testing specific legal research queries.",
  },
  {
    question: "Are specialized legal AI tools safer than general chatbots?",
    answer:
      "Meaningfully safer, but not safe from hallucination entirely — legal-specific tools using retrieval-augmented generation substantially outperformed general-purpose models in the same study, but still fabricated or mischaracterized citations at a real, non-trivial rate.",
  },
  {
    question: "What's the biggest risk for Pakistani lawyers specifically?",
    answer:
      "Most commercial legal AI research tools are trained predominantly on US or UK legal content, so they can confidently misapply foreign concepts to Pakistani law, or fail to reflect Pakistan-specific statutory amendments and case law — a risk distinct from general hallucination.",
  },
  {
    question: "How should a lawyer verify AI-generated legal research?",
    answer:
      "Check every citation against the original statute or case text through a primary source, confirm the provision is still in force and hasn't been repealed or amended, and treat AI output as a draft requiring independent confirmation — not a finished, citable product.",
  },
  {
    question: "Can Wakeel.org help without hallucination risk?",
    answer:
      "Wakeel.org is built to be source-aware, citing the actual Pakistani statute or provision it's relying on so you can verify it yourself — but no AI tool, including Wakeel.org, should be treated as immune to error. Independent verification remains essential for anything used professionally.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "AI Hallucinations in Legal Research: Risks for Pakistani Lawyers",
    description:
      "What AI hallucination actually means for legal research, the measured rates even in leading tools, and the specific risks for lawyers researching Pakistani law.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-07-09",
    dateModified: "2026-07-09",
    mainEntityOfPage: `${site.url}/journal/article/ai-hallucinations-legal-research-pakistani-lawyers`,
    citation: [
      { "@type": "CreativeWork", name: "Hallucination-Free? Assessing the Reliability of Leading AI Legal Research Tools (2025, peer-reviewed) — Journal of Empirical Legal Studies / Stanford RegLab", url: "https://reglab.stanford.edu/publications/hallucination-free-assessing-the-reliability-of-leading-ai-legal-research-tools/" },
      { "@type": "CreativeWork", name: "Hallucinating Law: Legal Mistakes with Large Language Models are Pervasive — Stanford Law School", url: "https://law.stanford.edu/2024/01/11/hallucinating-law-legal-mistakes-with-large-language-models-are-pervasive/" },
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
        name: "AI Hallucinations in Legal Research: Risks for Pakistani Lawyers",
        item: `${site.url}/journal/article/ai-hallucinations-legal-research-pakistani-lawyers`,
      },
    ],
  },
];

const keywords = [
  "ai hallucinations legal research pakistan",
  "ai legal research risks pakistan",
  "fabricated case citations ai",
  "legal ai accuracy pakistan",
  "ai research verification lawyers",
].join(", ");

export default function AiHallucinationsLegalResearchPakistaniLawyers() {
  return (
    <Layout>
      <MarketingSEO
        title="AI Hallucinations in Legal Research: Risks for Pakistani Lawyers"
        description="What AI hallucination actually means for legal research, the measured rates even in leading tools, and the specific risks for Pakistani law."
        path="/journal/article/ai-hallucinations-legal-research-pakistani-lawyers"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>
            AI & the Law · Published July 9, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            AI Hallucinations in Legal Research: Risks for Pakistani Lawyers
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            This isn't a theoretical caution — it's measured, and it applies even to the best
            commercial legal research tools. Here's what the actual evidence shows.
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
                A{" "}
                <a href="https://reglab.stanford.edu/publications/hallucination-free-assessing-the-reliability-of-leading-ai-legal-research-tools/" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
                  2025 peer-reviewed Stanford RegLab study
                </a>{" "}
                found hallucination rates of <strong>17%</strong> (Lexis+ AI), <strong>33%</strong>{" "}
                (Westlaw AI-Assisted Research), and <strong>43%</strong> (general-purpose GPT-4) —
                even in tools marketed as "hallucination-free." For Pakistani lawyers, the added
                risk is <strong>foreign-trained models</strong> misapplying US/UK concepts or
                citing outdated Pakistani provisions. Every citation needs{" "}
                <strong>independent verification</strong>.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educate: risks */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>The four specific risks</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {risks.map((r) => {
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

      {/* Reveal: safeguards */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className={sectionHeading}>The safeguards that actually work</h2>
          </div>
          <Card className={cardBase}>
            <CardContent className="p-6">
              <ul className="space-y-3">
                {safeguards.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <ShieldCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
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
                  Source-aware answers citing the actual Pakistani statute it's relying on, so you
                  can verify it yourself.
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
                  It cannot guarantee error-free output — no AI tool can — so independent
                  verification remains essential for anything used professionally.
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
              { label: "Hallucinating Law: Legal Mistakes with Large Language Models are Pervasive — Stanford Law School", href: "https://law.stanford.edu/2024/01/11/hallucinating-law-legal-mistakes-with-large-language-models-are-pervasive/" },
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
            <Link href="/journal/article/ai-legal-research-pakistan-benefits-risks-best-practices" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">AI Legal Research in Pakistan: Benefits, Risks and Best Practices</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/best-ai-tools-for-lawyers-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Best AI Tools for Lawyers in Pakistan</p>
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
          <h2 className={sectionHeading}>Want source-verifiable research?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel a question and check its answer against the actual statute it cites.
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
