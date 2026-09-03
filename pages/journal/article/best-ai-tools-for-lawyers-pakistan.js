import Link from "next/link";
import {
  CheckCircle2,
  FileSearch,
  ScrollText,
  Users,
  BookOpen,
  HelpCircle,
  AlertTriangle,
} from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site } from "../../../src/data/marketing";
import { cardBase, eyebrow, headingGradient, sectionHeading } from "../../../src/data/theme";

const categories = [
  { icon: BookOpen, title: "Legal research", detail: "Tools that help locate and summarize statutes, case law, and legal commentary faster than manual search — genuinely useful for a first pass, provided every citation is independently verified before it goes into a filing." },
  { icon: ScrollText, title: "Document review and drafting", detail: "AI-assisted review can flag unusual clauses, missing terms, and inconsistencies in contracts far faster than a first manual read, and drafting assistance can produce a solid starting template — both still need a lawyer's judgment applied on top." },
  { icon: Users, title: "Client intake and communication", detail: "Tools that help organize client-provided facts, summarize documents in plain language, and prepare structured case notes before a consultation — reducing time spent on administrative back-and-forth." },
  { icon: FileSearch, title: "Case and practice management", detail: "AI features increasingly sit inside broader practice management software — deadline tracking, document organization, and billing — rather than as standalone tools, which is where much of the practical time savings shows up." },
];

const faqs = [
  {
    question: "What are the best categories of AI tools for lawyers in Pakistan?",
    answer:
      "Legal research (locating statutes and case law faster), document review and drafting (flagging clauses and producing starting drafts), client intake (organizing facts and documents before a consultation), and case management tools with AI features built in.",
  },
  {
    question: "Can AI tools replace legal research done by a lawyer?",
    answer:
      "No — even leading commercial legal AI research tools have measurable hallucination rates, meaning every citation they produce still needs independent verification before it's relied on in a filing or argument.",
  },
  {
    question: "Is AI document review reliable enough for client contracts?",
    answer:
      "It's a strong first pass — catching unusual clauses and inconsistencies faster than manual review — but final judgment on enforceability, strategy, and risk still needs a lawyer's review before anything goes to a client as final advice.",
  },
  {
    question: "What's the biggest risk of using AI tools in legal practice?",
    answer:
      "Treating an AI-generated citation, clause flag, or summary as final without independent verification — this is exactly where fabricated citations and incomplete analysis slip into real filings if unchecked.",
  },
  {
    question: "Can Wakeel.org help lawyers with research or document review?",
    answer:
      "Wakeel.org can help summarize documents and explain relevant Pakistani statutes, in plain English or Urdu, grounded in the actual text it's citing. It cannot replace independent verification, draft final filings, or take professional responsibility for legal work.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best AI Tools for Lawyers in Pakistan",
    description:
      "The categories of AI tools genuinely useful for a Pakistani lawyer's practice — legal research, document review and drafting, client intake, and case management.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-06-12",
    dateModified: "2026-06-12",
    mainEntityOfPage: `${site.url}/journal/article/best-ai-tools-for-lawyers-pakistan`,
    citation: [
      { "@type": "CreativeWork", name: "Hallucination-Free? Assessing the Reliability of Leading AI Legal Research Tools (2025, peer-reviewed) — Journal of Empirical Legal Studies / Stanford RegLab", url: "https://reglab.stanford.edu/publications/hallucination-free-assessing-the-reliability-of-leading-ai-legal-research-tools/" },
      { "@type": "CreativeWork", name: "2026 AI in Professional Services Report — Thomson Reuters Institute", url: "https://www.thomsonreuters.com/en-us/posts/technology/ai-in-professional-services-report-2026/" },
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
        name: "Best AI Tools for Lawyers in Pakistan",
        item: `${site.url}/journal/article/best-ai-tools-for-lawyers-pakistan`,
      },
    ],
  },
];

const keywords = [
  "best ai tools for lawyers pakistan",
  "ai tools legal practice pakistan",
  "ai document review lawyers pakistan",
  "ai case management pakistan lawyers",
  "legal research ai pakistan",
].join(", ");

export default function BestAiToolsForLawyersPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Best AI Tools for Lawyers in Pakistan"
        description="The categories of AI tools genuinely useful for a Pakistani lawyer's practice — legal research, document review and drafting, client intake, and case management."
        path="/journal/article/best-ai-tools-for-lawyers-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>
            AI & the Law · Published June 12, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Best AI Tools for Lawyers in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Rather than one "best" tool, it's four distinct categories — research, drafting,
            intake, and case management — each with its own strengths and its own verification
            requirements.
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
                AI tools genuinely help lawyers across four categories:{" "}
                <strong>legal research</strong> (faster first-pass search),{" "}
                <strong>document review and drafting</strong> (flagging clauses, producing
                templates), <strong>client intake</strong> (organizing facts before a
                consultation), and <strong>case management</strong> with AI features built in. Even
                the best commercial legal research AI tools still{" "}
                <a href="https://reglab.stanford.edu/publications/hallucination-free-assessing-the-reliability-of-leading-ai-legal-research-tools/" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
                  measurably hallucinate
                </a>{" "}
                — verification stays the lawyer's job.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educate: categories */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>The four categories worth evaluating</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {categories.map((r) => {
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

      {/* Reveal: prose with inline sources */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <h2 className={sectionHeading}>Why adoption is accelerating faster than caution</h2>
          <p className="text-muted-foreground leading-relaxed">
            Thomson Reuters'{" "}
            <a href="https://www.thomsonreuters.com/en-us/posts/technology/ai-in-professional-services-report-2026/" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
              2026 AI in Professional Services Report
            </a>{" "}
            found generative AI use among law firms and corporate legal departments jumping to
            41% and 47% respectively — up from 28% and 23% just a year earlier. That pace of
            adoption is genuinely outrunning the accuracy improvements: the same Stanford RegLab
            study that measured 17–43% hallucination rates across leading legal research tools
            found no evidence those rates are dropping meaningfully as adoption rises.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The practical implication for a Pakistani practice is straightforward: build
            verification into the workflow now, rather than treating it as an afterthought once a
            tool is already embedded in daily use.
          </p>
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
                  Summarizing documents and explaining relevant Pakistani statutes, in plain
                  English or Urdu, grounded in the actual text it's citing.
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
                  It cannot replace independent verification, draft final filings, or take
                  professional responsibility for legal work.
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
            <Link href="/journal/article/ai-legal-research-tools-lawyers-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">AI Legal Research Tools for Lawyers in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/ai-hallucinations-legal-research-pakistani-lawyers" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">AI Hallucinations in Legal Research: Risks for Pakistani Lawyers</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/ai-legal-drafting-pakistan-lawyers-citizens" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">AI Legal Drafting in Pakistan</p>
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
          <h2 className={sectionHeading}>Exploring AI tools for your practice?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel to help with research and document review — with sources you can verify.
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
