import Link from "next/link";
import {
  CheckCircle2,
  Bot,
  Scale,
  HelpCircle,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site } from "../../../src/data/marketing";
import { cardBase, eyebrow, headingGradient, sectionHeading } from "../../../src/data/theme";

const workflow = [
  { stage: "1. Understand", who: "AI legal help", detail: "Read the notice, document, or situation and get a plain-language explanation of what's actually being said and why it matters — before you decide anything." },
  { stage: "2. Organize", who: "AI legal help", detail: "Turn scattered facts, dates, and documents into a clear, chronological account — the same account a lawyer would otherwise spend billable time extracting from you." },
  { stage: "3. Prepare questions", who: "AI legal help", detail: "Identify what's actually uncertain or high-stakes about your situation, so your consultation time goes toward decisions, not background explanation." },
  { stage: "4. Verify and decide", who: "A real lawyer", detail: "A licensed advocate reviews your specific facts, applies professional judgment, and tells you what the law actually requires or allows in your case." },
  { stage: "5. Act", who: "A real lawyer", detail: "Sign-off, filing, negotiation, or court representation — the steps that carry legal weight and professional responsibility, and that only an advocate can take on your behalf." },
];

const whyBoth = [
  "Used together in sequence, AI and a lawyer aren't competing options — AI handles the parts that are about volume and speed (reading, organizing, explaining), and the lawyer handles the parts that require judgment and accountability.",
  "This sequencing also protects you from the two most common ways AI legal tools go wrong: hallucinated citations and outdated or generic advice — because nothing from step 1–3 gets acted on without a professional check in step 4.",
  "It protects your lawyer's time too. Consultations that start with an organized timeline and clear questions get through the substance faster than consultations that start with 'let me explain everything from the beginning.'",
];

const faqs = [
  {
    question: "Should I use AI legal help or a real lawyer in Pakistan?",
    answer:
      "For most situations, the useful answer isn't \"either/or\" — it's both, in sequence. Use AI to understand your situation, organize your facts, and prepare questions; then bring that preparation to a licensed advocate for the judgment, sign-off, or representation only they can provide.",
  },
  {
    question: "Is it safe to rely on AI before seeing a lawyer?",
    answer:
      "It's safe for understanding and preparation — reading a document, learning what a term means, organizing a timeline. It's not safe to treat an AI answer as final for anything you're about to sign, file, or act on, since even leading legal AI tools still produce incomplete or incorrect answers often enough that verification matters.",
  },
  {
    question: "Does using AI first make a lawyer consultation more expensive or less useful?",
    answer:
      "Generally the opposite — arriving prepared with an organized account and specific questions tends to make paid consultation time more efficient, since less of it goes to basic fact-gathering the client could have done beforehand.",
  },
  {
    question: "What can go wrong if I skip the 'real lawyer' step entirely?",
    answer:
      "An AI-only path works fine right up until something needs to be signed, filed, negotiated, or argued — at that point, skipping professional review risks an unenforceable document, a missed deadline, or a step taken on incomplete or incorrect information, each of which is typically far costlier to fix afterward.",
  },
  {
    question: "How does Wakeel.org fit into this workflow?",
    answer:
      "Wakeel.org is built specifically for the understand-organize-prepare stage — explaining your situation, summarizing documents, and helping you build a clear timeline and question list, in English or Urdu. It hands off deliberately at the point where judgment, sign-off, or representation is needed, and says so rather than pretending to cover that stage too.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "When to Use AI Legal Help vs a Real Lawyer in Pakistan",
    description:
      "Why AI legal help and a real lawyer work best as a sequence, not a binary choice — a five-stage workflow for using both effectively on the same legal matter in Pakistan.",
    author: { "@type": "Organization", name: "Wakeel.org" },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-07-08",
    dateModified: "2026-07-08",
    mainEntityOfPage: `${site.url}/journal/article/ai-legal-help-vs-real-lawyer-pakistan`,
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
        name: "When to Use AI Legal Help vs a Real Lawyer in Pakistan",
        item: `${site.url}/journal/article/ai-legal-help-vs-real-lawyer-pakistan`,
      },
    ],
  },
];

const keywords = [
  "ai legal help vs real lawyer pakistan",
  "ai legal assistant pakistan",
  "when to use ai vs lawyer pakistan",
  "ai and lawyer workflow pakistan",
  "legal ai pakistan",
].join(", ");

export default function AiLegalHelpVsRealLawyerPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="When to Use AI Legal Help vs a Real Lawyer in Pakistan"
        description="Why AI legal help and a real lawyer work best as a sequence, not a binary choice — a five-stage workflow for using both effectively on the same legal matter."
        path="/journal/article/ai-legal-help-vs-real-lawyer-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>
            AI & the Law · Published July 8, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            When to Use AI Legal Help vs a Real Lawyer in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Most people frame this as a choice between two options. In practice, the two work best
            as a five-stage sequence on the same matter — here's exactly where one hands off to
            the other.
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
                AI legal help and a real lawyer aren't competing choices for the same matter —
                they're sequential. Use AI to <strong>understand</strong>, <strong>organize</strong>,
                and <strong>prepare questions</strong>; bring that preparation to a licensed
                advocate to <strong>verify and decide</strong>, and to <strong>act</strong> —
                signing, filing, negotiating, or representing you. The handoff point is simple:
                once something needs to be signed, filed, or argued, it's the lawyer's stage.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educate: workflow */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>The five-stage workflow</h2>
          </div>
          <div className="space-y-4">
            {workflow.map((w) => (
              <Card key={w.stage} className={cardBase}>
                <CardContent className="p-5 flex flex-col sm:flex-row gap-4 sm:items-center">
                  <span className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1.5 text-sm font-semibold text-primary shrink-0 self-start">
                    {w.stage}
                  </span>
                  <div className="flex-1">
                    <p className="font-semibold text-sm flex items-center gap-2">
                      {w.who === "AI legal help" ? (
                        <Bot className="h-4 w-4 text-primary" />
                      ) : (
                        <Scale className="h-4 w-4 text-primary" />
                      )}
                      {w.who}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-1">{w.detail}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reveal: why sequence beats either/or */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className={sectionHeading}>Why sequencing beats picking one</h2>
          </div>
          <Card className={cardBase}>
            <CardContent className="p-6">
              <ul className="space-y-3">
                {whyBoth.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
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
                  Covering stages 1 through 3 — understanding your situation, organizing your facts
                  and documents, and preparing questions — in plain English or Urdu, so you arrive
                  at a lawyer's office ready.
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
                  It deliberately stops before stages 4 and 5 — it cannot verify your case with
                  professional judgment, sign or file anything, or represent you. That's the
                  licensed advocate's stage by design.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Start stage one with Wakeel — free
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
            <Link href="/journal/article/when-to-use-ai-legal-assistant-vs-lawyer-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">When Should You Use an AI Legal Assistant Instead of a Lawyer?</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/should-i-use-ai-or-hire-a-lawyer-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Should I Use AI or Hire a Lawyer in Pakistan?</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/ai-vs-lawyer-whats-right-for-you-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">AI vs Lawyer in Pakistan: What's Right for You?</p>
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
          <h2 className={sectionHeading}>Ready to start stage one?</h2>
          <p className="text-muted-foreground">
            Describe your situation to Wakeel, in English or Urdu, and get help understanding and
            organizing it before you see a lawyer.
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
