import Link from "next/link";
import {
  CheckCircle2,
  TrendingUp,
  Users,
  ScrollText,
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

const shifts = [
  { icon: TrendingUp, title: "Adoption is accelerating fast, globally and locally", detail: "Generative AI use among law firms and corporate legal departments nearly doubled year-over-year, with adoption becoming mainstream rather than experimental — a trend Pakistani firms and independent lawyers are increasingly part of." },
  { icon: ScrollText, title: "Research and drafting are the entry points", detail: "Most practices adopt AI first for the tasks with the clearest time savings — summarizing case law, drafting first-pass documents — before extending it into client-facing or strategic work." },
  { icon: Users, title: "Client expectations are shifting too", detail: "Citizens increasingly arrive at a consultation having already used an AI tool to understand their situation, which changes what a first meeting with a lawyer actually needs to cover." },
  { icon: Scale, title: "Governance and verification are becoming standard practice", detail: "As adoption grows, so does formal oversight — firms are increasingly building explicit citation-verification steps into their workflow, treating AI output as a draft that needs review, not a finished product." },
];

const faqs = [
  {
    question: "How is AI actually changing legal practice in Pakistan?",
    answer:
      "Primarily by speeding up research and first-draft document work, and by changing what clients expect from an initial consultation, since many now arrive having already used an AI tool to understand their basic situation. Adoption is accelerating quickly, mirroring a global trend.",
  },
  {
    question: "Are Pakistani law firms actually using AI yet?",
    answer:
      "Adoption is growing, following the same global pattern of AI moving from experimental to mainstream use in legal research, drafting, and document review, though the pace and formality of adoption varies significantly across firms and independent practitioners.",
  },
  {
    question: "Does AI adoption mean fewer lawyers will be needed in Pakistan?",
    answer:
      "The pattern globally has been AI augmenting legal work rather than replacing lawyers — automating the more repetitive research and drafting tasks while judgment, negotiation, representation, and professional accountability remain squarely with licensed advocates.",
  },
  {
    question: "What should a lawyer do to responsibly adopt AI tools?",
    answer:
      "Treat AI output as a first draft requiring verification, not a finished product — particularly for citations and case law, given measurable hallucination rates even in leading tools. Building a verification step into the workflow matters more than which specific tool is chosen.",
  },
  {
    question: "Can Wakeel.org show me what AI-assisted legal work looks like?",
    answer:
      "Wakeel.org can demonstrate source-aware research and document summarization in plain English or Urdu. It's built for citizens and students as much as lawyers, and it consistently flags when a question needs a licensed advocate's judgment.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How AI Is Transforming Legal Practice in Pakistan",
    description:
      "The real shifts AI is bringing to legal practice in Pakistan — accelerating adoption, research and drafting as entry points, changing client expectations, and growing verification discipline.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-06-25",
    dateModified: "2026-06-25",
    mainEntityOfPage: `${site.url}/journal/article/how-ai-transforming-legal-practice-pakistan`,
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
        name: "How AI Is Transforming Legal Practice in Pakistan",
        item: `${site.url}/journal/article/how-ai-transforming-legal-practice-pakistan`,
      },
    ],
  },
];

const keywords = [
  "ai transforming legal practice pakistan",
  "ai adoption law firms pakistan",
  "future of law pakistan ai",
  "legal technology pakistan",
  "ai legal industry trends pakistan",
].join(", ");

export default function HowAiTransformingLegalPracticePakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="How AI Is Transforming Legal Practice in Pakistan"
        description="The real shifts AI is bringing to legal practice in Pakistan — accelerating adoption, research and drafting as entry points, and growing verification discipline."
        path="/journal/article/how-ai-transforming-legal-practice-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>
            AI & the Law · Published June 25, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            How AI Is Transforming Legal Practice in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Not a replacement story — an acceleration story. Here's what's actually changing in how
            legal work gets done, and what stays exactly the same.
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
                AI adoption in legal practice is accelerating fast —{" "}
                <a href="https://www.thomsonreuters.com/en-us/posts/technology/ai-in-professional-services-report-2026/" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
                  Thomson Reuters' 2026 report
                </a>{" "}
                found usage nearly doubling year-over-year among law firms and legal departments
                globally. In practice, this shows up first in <strong>research</strong> and{" "}
                <strong>drafting</strong>, shifts <strong>client expectations</strong> going into a
                consultation, and is driving more formal <strong>verification discipline</strong>{" "}
                around AI output — not a replacement of lawyers' judgment.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educate: shifts */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>The four real shifts underway</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {shifts.map((r) => {
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
                  Demonstrating source-aware research and document summarization in plain English
                  or Urdu, for citizens, students, and lawyers alike.
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
                  It cannot replace a lawyer's judgment, representation, or professional
                  responsibility for legal work.
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

      {/* Sources */}
      <section className="bg-muted/40 py-14 sm:py-16">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-semibold text-foreground mb-4">Sources and further reading</h2>
          <ul className="space-y-2">
            {[
              { label: "2026 AI in Professional Services Report — Thomson Reuters Institute", href: "https://www.thomsonreuters.com/en-us/posts/technology/ai-in-professional-services-report-2026/" },
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
            <Link href="/journal/article/best-ai-tools-for-lawyers-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Best AI Tools for Lawyers in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/ai-vs-lawyer-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Will AI Replace Lawyers? AI vs Hiring a Lawyer in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/ai-legal-research-pakistan-benefits-risks-best-practices" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">AI Legal Research in Pakistan: Benefits, Risks and Best Practices</p>
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
          <h2 className={sectionHeading}>See AI-assisted legal work in action</h2>
          <p className="text-muted-foreground">
            Ask Wakeel a question in English or Urdu, sourced and grounded in Pakistani law.
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
