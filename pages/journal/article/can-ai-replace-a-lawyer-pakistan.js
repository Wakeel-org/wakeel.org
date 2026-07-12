import Link from "next/link";
import { Bot, Scale, ShieldCheck, Gavel, FileWarning, HelpCircle } from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site } from "../../../src/data/marketing";
import { cardBase, headingGradient, sectionHeading } from "../../../src/data/theme";

const whyNotReasons = [
  {
    icon: Gavel,
    title: "Only licensed advocates can represent you",
    detail:
      "Appearing in court, filing on your behalf, and arguing your case in front of a judge legally requires a licensed advocate enrolled with a bar council — not a piece of software.",
  },
  {
    icon: ShieldCheck,
    title: "Lawyers carry professional responsibility",
    detail:
      "A licensed advocate owes you a duty of care and is professionally accountable for the advice they give. AI has no license to lose and no professional liability for being wrong.",
  },
  {
    icon: Scale,
    title: "Real cases need judgment, not just information",
    detail:
      "The law rarely applies itself mechanically. Your specific facts, the judge, precedent, and strategy all require human judgment built on years of practice — not pattern-matching against text.",
  },
  {
    icon: FileWarning,
    title: "AI can be confidently wrong",
    detail:
      "AI models can misstate a law, cite an outdated section, or miss a recent amendment while sounding completely certain. Without verification, that's a real risk for anything consequential.",
  },
];

const whatAiCanDoToday = [
  "Explain legal terms, rights, and procedures in plain English or Urdu",
  "Summarize long notices, agreements, FIRs, or judgments quickly",
  "Point you toward the relevant law, section, or procedure to look into",
  "Help you organize facts, dates, and documents before you see a lawyer",
  "Answer general questions any time of day, at little or no cost",
];

const faqs = [
  {
    question: "Can AI replace a lawyer for Pakistani legal questions?",
    answer:
      "No. AI can answer general legal questions, explain documents, and help you prepare, but it cannot represent you, take legal responsibility, or give advice tailored to your exact facts the way a licensed advocate can. It's a starting point for legal information, not a substitute for one.",
  },
  {
    question: "Why can't AI just give final legal advice directly?",
    answer:
      "Giving final legal advice means applying the law to your specific, verified facts and being professionally accountable for the outcome. AI generates likely answers based on patterns in text — it doesn't verify your facts, hold a law license, or bear responsibility if it's wrong.",
  },
  {
    question: "Is it pointless to use AI for legal questions in Pakistan then?",
    answer:
      "Not at all — used well, AI is a strong first step. It helps you understand your situation, learn relevant law, and prepare clear questions, which makes any lawyer you do consult more useful and often cheaper to work with.",
  },
  {
    question: "What legal questions is AI actually good at answering?",
    answer:
      "General, informational questions: what a legal term means, how a process like FIR registration typically works, what a rent agreement should include, or what a notice is telling you. It's weaker on anything requiring judgment about your specific, disputed, or high-stakes facts.",
  },
  {
    question: "Will this change as AI improves?",
    answer:
      "AI's ability to research and draft will keep improving, but representation, licensing, and professional accountability are legal and regulatory structures, not technical limitations — they aren't something a better model removes on its own.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Can AI Replace a Lawyer for Pakistani Legal Questions?",
    description:
      "A direct, honest answer to whether AI can replace a lawyer in Pakistan — what AI legal tools can do today, and why licensed advocates remain essential.",
    url: `${site.url}/journal/article/can-ai-replace-a-lawyer-pakistan`,
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
        name: "Can AI Replace a Lawyer for Pakistani Legal Questions?",
        item: `${site.url}/journal/article/can-ai-replace-a-lawyer-pakistan`,
      },
    ],
  },
];

const keywords = [
  "can ai replace a lawyer",
  "can ai replace a lawyer pakistan",
  "ai replace lawyers pakistan",
  "can ai give legal advice pakistan",
  "ai legal questions pakistan",
  "ai lawyer pakistan",
].join(", ");

export default function CanAiReplaceALawyerPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Can AI Replace a Lawyer for Pakistani Legal Questions?"
        description="Can AI replace a lawyer in Pakistan? A direct answer: no — here's what AI legal assistants can do well today, and why licensed advocates remain essential for anything consequential."
        path="/journal/article/can-ai-replace-a-lawyer-pakistan"
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
            Can AI replace a lawyer for Pakistani legal questions?
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A direct, honest answer — plus what AI legal assistants are genuinely good for today.
          </p>
        </div>
      </section>

      {/* Direct answer — first thing on the page, for both readers and AI search */}
      <section className="bg-background pt-10">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className={`${cardBase} border-primary/30`}>
            <CardContent className="p-6 space-y-3">
              <p className="text-sm font-semibold text-primary">Direct answer</p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>No, AI cannot replace a lawyer for Pakistani legal questions.</strong> AI
                legal assistants can explain the law, summarize documents, and help you research and
                prepare — but only a licensed advocate can give you final legal advice on your
                specific facts, represent you in court, and take professional responsibility for the
                outcome. Think of AI as a knowledgeable first step, not a substitute for one.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why not — structural reasons */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>Why AI can't replace a lawyer</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              These aren't temporary technical gaps — they're structural reasons rooted in how the
              legal profession and legal responsibility work.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {whyNotReasons.map((r) => {
              const Icon = r.icon;
              return (
                <Card key={r.title} className={cardBase}>
                  <CardHeader>
                    <Icon className="h-6 w-6 text-primary mb-2" />
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

      {/* What AI can do today */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Bot className="h-7 w-7 text-primary" />
            <h2 className={sectionHeading}>What AI legal assistants do well today</h2>
          </div>
          <Card className={cardBase}>
            <CardContent className="p-6">
              <ul className="space-y-3">
                {whatAiCanDoToday.map((item) => (
                  <li key={item} className="flex gap-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                    <Bot className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How Wakeel fits + cross-links */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Where Wakeel.org fits</h2>
          <p className="text-muted-foreground leading-relaxed">
            Wakeel.org is built around this exact distinction — it gives you legal information and
            research support in English or Urdu, and reminds you throughout to verify important
            steps with a licensed advocate before you act.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">Try Wakeel Free</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/journal/article/when-to-use-ai-legal-assistant-vs-lawyer-pakistan">When should you use AI vs a lawyer? →</Link>
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
              { label: "When should you use an AI legal assistant instead of a lawyer?", href: "/journal/article/when-to-use-ai-legal-assistant-vs-lawyer-pakistan" },
              { label: "AI vs hiring a lawyer: full comparison", href: "/journal/article/ai-vs-lawyer-pakistan" },
              { label: "Best AI legal apps in Pakistan", href: "/journal/article/best-ai-legal-apps-pakistan" },
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
