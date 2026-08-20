import Link from "next/link";
import { Bot, Scale, CheckCircle2, AlertTriangle, HelpCircle, Clock, Wallet } from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site } from "../../../src/data/marketing";
import { cardBase, headingGradient, sectionHeading } from "../../../src/data/theme";

const goodFitScenarios = [
  {
    title: "You need to understand something, not act on it yet",
    detail:
      "You've received a notice, agreement, or judgment and just want to know what it means before deciding your next step.",
  },
  {
    title: "You're preparing for a lawyer consultation",
    detail:
      "You want to organize your facts, dates, and documents so a lawyer's time (and your money) goes further once you do sit down with one.",
  },
  {
    title: "You're researching the law itself",
    detail:
      "You're a student, journalist, or citizen trying to learn how a law or procedure works in general — not applying it to an active dispute.",
  },
  {
    title: "The stakes are low and reversible",
    detail:
      "A quick question about a routine process — like what documents a rent agreement should include — where being wrong costs you a re-check, not a case.",
  },
  {
    title: "You need an answer outside office hours",
    detail:
      "It's midnight, you're worried about something, and you need a plain-language starting point before you can reach a lawyer in the morning.",
  },
];

const lawyerFirstScenarios = [
  {
    title: "You've received a court summons or legal notice with a deadline",
    detail:
      "Anything with a filing date or response deadline needs a licensed advocate's judgment — not just an explanation of what the words mean.",
  },
  {
    title: "You're about to sign, file, or pay",
    detail:
      "Contracts, settlements, property transfers, and court filings carry legal weight. Get advocate sign-off before you commit.",
  },
  {
    title: "Significant money, property, or liberty is involved",
    detail:
      "The higher the stakes, the more a mistake costs — this is exactly where a professional's judgment and accountability matter most.",
  },
  {
    title: "You need someone to represent you",
    detail:
      "Only a licensed advocate can appear in court on your behalf, negotiate binding terms, or take legal responsibility for advice given.",
  },
  {
    title: "Your facts are unusual or contested",
    detail:
      "If the other side disputes the facts, or your situation doesn't fit a standard pattern, you need a professional who can weigh judgment calls — not a tool that explains general rules.",
  },
];

const decisionChecklist = [
  "Am I trying to understand something, or about to act on it?",
  "Could being wrong here cost me money, property, or a legal deadline?",
  "Does this involve signing, filing, paying, or appearing somewhere?",
  "Am I the only person affected, or could this create a dispute with someone else?",
  "Do I already have a lawyer, and is this something I should just ask them directly?",
];

const faqs = [
  {
    question: "Is it safe to rely on an AI legal assistant for legal questions in Pakistan?",
    answer:
      "It's safe to use one for understanding, learning, and preparing — treat its answers as legal information, not legal advice. For anything with real consequences (deadlines, money, court, contracts), confirm with a licensed advocate before you act.",
  },
  {
    question: "Can an AI legal assistant replace a lawyer for simple matters?",
    answer:
      "For genuinely simple, low-stakes questions — like understanding a term or a routine process — AI can often give you a clear, fast answer. But 'simple' should be judged by what's at stake, not just how the question sounds; even a short question about a court deadline deserves a lawyer's confirmation.",
  },
  {
    question: "How much can I prepare with AI before seeing a lawyer?",
    answer:
      "Quite a lot. You can use AI to summarize documents, understand terminology, build a timeline of facts, and draft a list of questions — all of which make a paid consultation faster and more focused.",
  },
  {
    question: "What happens if I use AI instead of a lawyer for something serious?",
    answer:
      "You risk missing a deadline, misunderstanding a legal obligation, or taking an action that can't be undone — because AI cannot take responsibility for the outcome the way a licensed advocate can. Use AI to prepare, not to substitute for professional judgment on anything consequential.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "When Should You Use an AI Legal Assistant Instead of a Lawyer in Pakistan?",
    description:
      "A practical decision framework for when an AI legal assistant is enough, and when you need a licensed advocate in Pakistan.",
    url: `${site.url}/journal/article/when-to-use-ai-legal-assistant-vs-lawyer-pakistan`,
    datePublished: "2026-06-02",
    dateModified: "2026-06-02",
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
        name: "When to Use an AI Legal Assistant vs a Lawyer",
        item: `${site.url}/journal/article/when-to-use-ai-legal-assistant-vs-lawyer-pakistan`,
      },
    ],
  },
];

const keywords = [
  "when to use ai legal assistant",
  "ai legal assistant vs lawyer pakistan",
  "should i use ai instead of a lawyer",
  "ai legal help pakistan",
  "when do i need a lawyer pakistan",
  "ai lawyer pakistan",
].join(", ");

export default function WhenToUseAiLegalAssistantVsLawyer() {
  return (
    <Layout>
      <MarketingSEO
        title="When to Use an AI Legal Assistant vs a Lawyer"
        description="A practical checklist for when an AI legal assistant is enough for your Pakistani legal question, and when you should see a licensed advocate first."
        path="/journal/article/when-to-use-ai-legal-assistant-vs-lawyer-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            AI &amp; the law
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            When should you use an AI legal assistant instead of a lawyer?
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A practical way to decide — for citizens, students, and small businesses navigating
            Pakistani law day to day.
          </p>
        </div>
      </section>

      {/* Short answer */}
      <section className="bg-background pt-10">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className={`${cardBase} border-primary/30`}>
            <CardContent className="p-6 space-y-3">
              <p className="text-sm font-semibold text-primary">The short answer</p>
              <p className="text-muted-foreground leading-relaxed">
                Use an AI legal assistant when you need to <strong>understand, learn, or prepare</strong> —
                and see a licensed advocate before you <strong>sign, file, pay, or appear</strong> anywhere.
                The dividing line isn't how complicated your question sounds; it's what's actually at
                stake if the answer turns out to be incomplete.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Good fit scenarios */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Bot className="h-7 w-7 text-primary" />
            <h2 className={sectionHeading}>Good times to reach for an AI legal assistant</h2>
          </div>
          <div className="space-y-4">
            {goodFitScenarios.map((s) => (
              <Card key={s.title} className={cardBase}>
                <CardContent className="p-5 flex gap-4">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm sm:text-base">{s.title}</p>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{s.detail}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lawyer-first scenarios */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Scale className="h-7 w-7 text-primary" />
            <h2 className={sectionHeading}>When to see a lawyer first</h2>
          </div>
          <div className="space-y-4">
            {lawyerFirstScenarios.map((s) => (
              <Card key={s.title} className={cardBase}>
                <CardContent className="p-5 flex gap-4">
                  <AlertTriangle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm sm:text-base">{s.title}</p>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{s.detail}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Decision checklist */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className={sectionHeading}>A quick checklist before you decide</h2>
            <p className="mt-3 text-muted-foreground">
              Ask yourself these five questions. If any answer points to real consequences, talk to
              a lawyer before you act.
            </p>
          </div>
          <Card className={cardBase}>
            <CardContent className="p-6">
              <ul className="space-y-4">
                {decisionChecklist.map((item, i) => (
                  <li key={item} className="flex gap-3 text-sm sm:text-base">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-semibold">
                      {i + 1}
                    </span>
                    <span className="text-muted-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Cost/time framing */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 gap-4">
          <Card className={cardBase}>
            <CardHeader>
              <Clock className="h-6 w-6 text-primary mb-2" />
              <CardTitle className="text-lg">Think in terms of time</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                AI gives you an answer in seconds, any hour of the day. That speed is valuable for
                understanding and preparation — it's not a substitute for the time a lawyer takes to
                actually weigh your specific facts.
              </p>
            </CardContent>
          </Card>
          <Card className={cardBase}>
            <CardHeader>
              <Wallet className="h-6 w-6 text-primary mb-2" />
              <CardTitle className="text-lg">Think in terms of cost</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Using AI to prepare — organizing facts, understanding terms, drafting questions —
                makes a paid consultation shorter and more focused, which usually lowers your overall
                legal cost rather than replacing it.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How Wakeel fits + cross-links */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Where Wakeel.org fits</h2>
          <p className="text-muted-foreground leading-relaxed">
            Wakeel.org is built for the "understand and prepare" side of this checklist — ask
            questions in English or Urdu, summarize documents, and research Pakistani law, with
            reminders throughout to verify with a licensed advocate before you act.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">Try Wakeel Free</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/journal/article/can-ai-replace-a-lawyer-pakistan">Can AI replace a lawyer? →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Further reading */}
      <section className="bg-muted/40 py-14 sm:py-16">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-semibold text-foreground mb-4">Keep exploring</h2>
          <div className="space-y-3">
            {[
              { label: "Can AI replace a lawyer for Pakistani legal questions?", href: "/journal/article/can-ai-replace-a-lawyer-pakistan" },
              { label: "AI vs hiring a lawyer: full comparison", href: "/journal/article/ai-vs-lawyer-pakistan" },
              { label: "Free legal advice in Pakistan", href: "/journal/article/free-legal-advice-pakistan" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="flex items-center justify-between rounded-md border border-border px-4 py-3 text-sm text-muted-foreground hover:text-primary hover:bg-background transition-colors"
              >
                {l.label}
              </Link>
            ))}
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
        </div>
      </section>
    </Layout>
  );
}
