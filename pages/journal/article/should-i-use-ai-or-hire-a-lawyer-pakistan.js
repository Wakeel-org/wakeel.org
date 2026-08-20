import Link from "next/link";
import {
  CheckCircle2,
  Bot,
  Scale,
  HelpCircle,
  AlertTriangle,
  ListChecks,
} from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site } from "../../../src/data/marketing";
import { cardBase, headingGradient, sectionHeading } from "../../../src/data/theme";

const questions = [
  { q: "Is there a deadline attached to what you're dealing with?", ai: "No deadline yet — you're just trying to understand something.", lawyer: "Yes — a court date, a notice response window, or a filing deadline." },
  { q: "Are you about to sign, pay, or file something?", ai: "No — you're still in the research or preparation stage.", lawyer: "Yes — anything you're about to commit to in writing or in money." },
  { q: "What's actually at stake?", ai: "A routine question with a low-cost, reversible outcome if you're wrong.", lawyer: "Significant money, property, employment, liberty, or family rights." },
  { q: "Do you need someone to represent you?", ai: "No — you just need to understand the situation for yourself.", lawyer: "Yes — you need someone to appear, negotiate, or sign on your behalf." },
  { q: "How unusual are your facts?", ai: "Fairly standard — a common situation with a well-established answer.", lawyer: "Unusual, contested, or mixing multiple legal issues together." },
];

const useAiWhen = [
  "You want to understand a document, notice, or legal term before deciding what to do next.",
  "You're preparing for a lawyer consultation and want your facts and questions organized first.",
  "You're a student or researcher, or you're just trying to learn how a law or process works.",
  "It's outside office hours and you need a plain-language starting point right now.",
];

const useLawyerWhen = [
  "You've received a court summons, a legal notice with a deadline, or an arrest is involved.",
  "You're about to sign a contract, pay a settlement, or file anything with a court or authority.",
  "Meaningful money, property, employment, or liberty is genuinely on the line.",
  "You need someone to represent you, negotiate on your behalf, or take responsibility for the advice given.",
];

const faqs = [
  {
    question: "Should I use AI or hire a lawyer for my legal problem in Pakistan?",
    answer:
      "It depends on what stage you're at and what's at stake. If you're trying to understand something — a notice, a contract, a process — and nothing needs to be signed, filed, or argued yet, AI is a genuinely useful starting point. Once there's a deadline, money or liberty at stake, or you need someone to represent you, a licensed advocate is the right call, and AI becomes a preparation tool rather than a substitute.",
  },
  {
    question: "Can AI replace a lawyer for a simple legal question in Pakistan?",
    answer:
      "For understanding what a term means or how a process generally works, yes, AI can be enough on its own. For anything with legal consequences — even a \"simple\" cheque bounce notice or tenancy dispute — you're better off using AI to prepare and then verifying with a lawyer before you act.",
  },
  {
    question: "What's the risk of relying only on AI for a legal decision?",
    answer:
      "AI legal tools can be incomplete, outdated, or simply wrong, and even the best commercial legal AI products still fabricate citations and legal claims often enough that every citation needs independent verification. The risk isn't using AI — it's treating its answer as final without checking it, particularly for anything with real financial or legal consequences.",
  },
  {
    question: "Is it cheaper to use AI instead of a lawyer in Pakistan?",
    answer:
      "AI is typically free or low-cost and a lawyer charges professional fees, so AI is cheaper for the preparation and understanding stage. But \"cheaper\" only holds up if you're not skipping a step that actually needed a lawyer — an AI-only decision that goes wrong on a contract, a filing, or a court matter usually costs far more to fix than the consultation fee it seemed to save.",
  },
  {
    question: "Can Wakeel.org help me decide whether I need a lawyer?",
    answer:
      "Wakeel.org can walk through your situation with you, explain what's involved, and flag when it looks like something needs a licensed advocate rather than just an explanation. It cannot make that judgment call with certainty on your specific facts or take responsibility for the decision — when in doubt, the safer default is to consult a lawyer.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Should I Use AI or Hire a Lawyer in Pakistan?",
    description:
      "A five-question self-check to decide whether an AI legal tool is enough for your situation in Pakistan, or whether it's time to bring in a licensed advocate.",
    author: { "@type": "Organization", name: "Wakeel.org" },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-02-14",
    dateModified: "2026-02-14",
    mainEntityOfPage: `${site.url}/journal/article/should-i-use-ai-or-hire-a-lawyer-pakistan`,
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
        name: "Should I Use AI or Hire a Lawyer in Pakistan?",
        item: `${site.url}/journal/article/should-i-use-ai-or-hire-a-lawyer-pakistan`,
      },
    ],
  },
];

const keywords = [
  "should i use ai or hire a lawyer pakistan",
  "ai lawyer pakistan",
  "when to hire a lawyer pakistan",
  "ai legal assistant pakistan",
  "do i need a lawyer pakistan",
].join(", ");

export default function ShouldIUseAiOrHireALawyerPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Should I Use AI or Hire a Lawyer in Pakistan?"
        description="A five-question self-check to decide whether an AI legal tool is enough for your situation, or whether it's time to bring in a licensed advocate."
        path="/journal/article/should-i-use-ai-or-hire-a-lawyer-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            AI & the Law · Published February 14, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Should I Use AI or Hire a Lawyer in Pakistan?
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Instead of a general rule, answer five direct questions about your specific situation —
            the pattern in your answers will tell you which one you actually need right now.
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
                If there's <strong>no deadline</strong>, nothing to <strong>sign or file</strong>{" "}
                yet, and the stakes are low and reversible — an AI legal tool is a genuinely good
                starting point. If a <strong>deadline</strong>, real <strong>money, property, or
                liberty</strong> is involved, or you need someone to actually{" "}
                <strong>represent</strong> you, go straight to a licensed advocate and use AI only
                to prepare for that conversation, not to replace it.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educate: 5-question self-check */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>The five-question self-check</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Answer each one honestly about your specific situation — most people find their
              answers cluster clearly on one side.
            </p>
          </div>
          <div className="space-y-4">
            {questions.map((item) => (
              <Card key={item.q} className={cardBase}>
                <CardContent className="p-5">
                  <p className="font-semibold text-sm mb-3 flex items-center gap-2">
                    <ListChecks className="h-5 w-5 text-primary shrink-0" />
                    {item.q}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="flex gap-2 rounded-md bg-primary/5 p-3 text-sm text-muted-foreground">
                      <Bot className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">AI is fine if:</strong> {item.ai}</span>
                    </div>
                    <div className="flex gap-2 rounded-md bg-muted p-3 text-sm text-muted-foreground">
                      <Scale className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">See a lawyer if:</strong> {item.lawyer}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reveal: quick reference */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-4">
            <Card className={cardBase}>
              <CardHeader>
                <Bot className="h-7 w-7 text-primary" />
                <CardTitle className="text-xl">Reach for AI when…</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {useAiWhen.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className={cardBase}>
              <CardHeader>
                <Scale className="h-7 w-7 text-primary" />
                <CardTitle className="text-xl">See a lawyer when…</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {useLawyerWhen.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
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
                  Walking through your situation with you, explaining what's involved in plain
                  English or Urdu, and flagging when your answers point toward needing a licensed
                  advocate rather than just an explanation.
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
                  It cannot make the final call with certainty on your specific facts, represent
                  you, or take responsibility for the decision — when in doubt, the safer default
                  is to consult a lawyer.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Walk through your situation with Wakeel — free
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
              { label: "Lawyers' Verification — Islamabad Bar Council", href: "https://www.ibc.org.pk/lawyers-verification/" },
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
            <Link href="/journal/article/ai-vs-lawyer-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Will AI Replace Lawyers? AI vs Hiring a Lawyer in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/ai-vs-lawyer-whats-right-for-you-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">AI vs Lawyer in Pakistan: What's Right for You?</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/when-to-use-ai-legal-assistant-vs-lawyer-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">When Should You Use an AI Legal Assistant Instead of a Lawyer?</p>
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
          <h2 className={sectionHeading}>Still not sure which one you need?</h2>
          <p className="text-muted-foreground">
            Describe your situation to Wakeel, in English or Urdu, and get a plain-language read on
            what's involved — then decide from there.
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
