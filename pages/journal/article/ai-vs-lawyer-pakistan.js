import Link from "next/link";
import { ArrowRight, Check, X, HelpCircle, Bot, Scale } from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site } from "../../../src/data/marketing";
import { cardBase, headingGradient, sectionHeading } from "../../../src/data/theme";

const aiDoesWell = [
  "Explain legal terms and procedures in plain English or Urdu",
  "Summarize long notices, agreements, and judgments",
  "Help you organize facts, dates, and documents before a consultation",
  "Suggest the right questions to ask a lawyer",
  "Give you a faster starting point for research, any time of day",
];

const onlyLawyerCan = [
  "Give final legal advice for your specific facts and jurisdiction",
  "Represent you and appear in court on your behalf",
  "Sign, file, and certify documents with legal authority",
  "Take responsibility and owe you a professional duty of care",
  "Negotiate and make binding commitments for you",
];

const comparisonRows = [
  { dimension: "Availability", ai: "24/7, instant", lawyer: "By appointment" },
  { dimension: "Cost", ai: "Free or low-cost", lawyer: "Professional fees" },
  { dimension: "Speed of first answer", ai: "Seconds", lawyer: "Days" },
  { dimension: "Final legal advice", ai: false, lawyer: true },
  { dimension: "Court representation", ai: false, lawyer: true },
  { dimension: "Responsibility / duty of care", ai: false, lawyer: true },
  { dimension: "Good for learning & preparing", ai: true, lawyer: "Sometimes" },
  { dimension: "Tailored to your exact case", ai: "Partly", lawyer: true },
];

const useAiWhen = [
  "You want to understand a notice, document, or legal term",
  "You're preparing for a lawyer consultation and want to organize your facts",
  "You're a student or researcher learning the law",
  "You need a quick, plain-language overview before deciding next steps",
];

const useLawyerWhen = [
  "You're about to file a case, sign a contract, or pay money",
  "You've received a court summons or a serious legal notice",
  "Your matter involves significant money, property, or liberty",
  "You need someone to represent you or take legal responsibility",
];

const faqs = [
  {
    question: "Will AI replace lawyers in Pakistan?",
    answer:
      "No. AI is changing how legal work gets done — speeding up research, drafting, and document review — but it cannot give final legal advice, represent you in court, or take professional responsibility for your case. The realistic outcome is that AI assists lawyers and helps citizens prepare, while licensed advocates remain essential.",
  },
  {
    question: "Can I use an AI legal app instead of hiring a lawyer?",
    answer:
      "Use an AI legal app to understand your situation, learn the relevant law, and prepare better questions — but not as a replacement for a lawyer. For anything you intend to file, sign, pay, or argue in court, consult a licensed advocate.",
  },
  {
    question: "Is AI legal advice reliable?",
    answer:
      "AI provides legal information, not final legal advice, and it can be incomplete or wrong. Treat it as a starting point: verify citations against the original law and confirm important steps with a licensed advocate.",
  },
  {
    question: "How can AI help me save on legal costs?",
    answer:
      "By doing the preparation yourself — understanding documents, organizing facts, and arriving at a consultation with clear questions — you can make a lawyer's time more efficient. The goal is to work with a lawyer more effectively, not to avoid one.",
  },
  {
    question: "What can a lawyer do that AI cannot?",
    answer:
      "A licensed advocate can give advice tailored to your exact facts and jurisdiction, represent you in court, sign and file documents with legal authority, and owe you a professional duty of care. AI does none of these.",
  },
  {
    question: "Legal AI vs a human lawyer — what's the actual difference in practice?",
    answer:
      "Legal AI is fast, available any time, and good at explaining concepts, summarizing documents, and organizing your facts — but it has no professional accountability, can't appear in court, and can produce confidently wrong answers if not properly grounded in the relevant law. A human lawyer is slower and costs more per hour, but brings judgment, negotiation skill, and legal accountability for the advice given. The realistic pairing is AI for preparation and understanding, a lawyer for anything that needs representation or final sign-off.",
  },
  {
    question: "How do I know if an AI legal chatbot's answer about Pakistani law is trustworthy?",
    answer:
      "Check whether it cites the actual statute or section it's relying on (so you can verify the text yourself, for example against the Ministry of Law and Justice's official legislation on pakistancode.gov.pk), whether it flags uncertainty instead of answering everything with false confidence, and whether it clearly tells you when to see a licensed advocate. A tool that never admits a limitation is a bigger red flag than one that regularly reminds you to verify with a lawyer — and if you do engage an advocate, you can confirm their enrollment through your Provincial Bar Council.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Will AI Replace Lawyers? AI Legal Help vs Hiring a Lawyer in Pakistan",
    description:
      "A clear look at what AI legal tools can and cannot do compared with a licensed advocate in Pakistan — and how to use each one well.",
    url: `${site.url}/journal/article/ai-vs-lawyer-pakistan`,
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
        name: "AI vs Hiring a Lawyer",
        item: `${site.url}/journal/article/ai-vs-lawyer-pakistan`,
      },
    ],
  },
];

const keywords = [
  "will ai replace lawyers",
  "ai vs lawyer",
  "ai lawyer vs real lawyer",
  "ai legal help vs lawyer",
  "can ai replace lawyers pakistan",
  "ai legal assistant pakistan",
  "legal ai vs human lawyer",
  "is ai legal advice trustworthy pakistan",
  "ai lawyer pakistan",
].join(", ");

const Cell = ({ value }) => {
  if (value === true)
    return <Check className="h-5 w-5 text-primary mx-auto" aria-label="Yes" />;
  if (value === false)
    return <X className="h-5 w-5 text-muted-foreground/60 mx-auto" aria-label="No" />;
  return <span className="text-sm text-muted-foreground">{value}</span>;
};

export default function AIvsLawyerPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="AI vs Hiring a Lawyer in Pakistan"
        description="Will AI replace lawyers in Pakistan? An honest comparison of what AI legal tools do well, what only a licensed advocate can do, and when to use each."
        path="/journal/article/ai-vs-lawyer-pakistan"
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
            Will AI replace lawyers?
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            AI legal help vs hiring a lawyer in Pakistan — what each is genuinely for, and how
            to get the best of both.
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
                <strong>No — AI will not replace lawyers.</strong> AI legal tools are excellent at
                explaining, summarizing, and helping you <em>prepare</em>, but they cannot give
                final legal advice, represent you in court, or take responsibility for your case.
                The smart approach is to use AI to understand your situation and arrive at a
                lawyer better prepared — not to skip the lawyer.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Two columns: AI vs Lawyer strengths */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-4">
            <Card className={cardBase}>
              <CardHeader>
                <Bot className="h-7 w-7 text-primary" />
                <CardTitle className="text-xl">What AI legal tools do well</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {aiDoesWell.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className={cardBase}>
              <CardHeader>
                <Scale className="h-7 w-7 text-primary" />
                <CardTitle className="text-xl">What only a lawyer can do</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {onlyLawyerCan.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className={sectionHeading}>AI legal assistant vs a licensed lawyer</h2>
          </div>
          <Card className={cardBase}>
            <CardContent className="p-0 overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-border">
                    <th className="p-4 text-sm font-semibold"> </th>
                    <th className="p-4 text-sm font-semibold text-center">AI legal assistant</th>
                    <th className="p-4 text-sm font-semibold text-center">Licensed lawyer</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((r) => (
                    <tr key={r.dimension} className="border-b border-border last:border-0">
                      <td className="p-4 text-sm text-muted-foreground">{r.dimension}</td>
                      <td className="p-4 text-center"><Cell value={r.ai} /></td>
                      <td className="p-4 text-center"><Cell value={r.lawyer} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* When to use which */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>When to use which</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <Card className={cardBase}>
              <CardHeader>
                <CardTitle className="text-lg">Reach for an AI tool when…</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {useAiWhen.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                      <Bot className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className={cardBase}>
              <CardHeader>
                <CardTitle className="text-lg">See a lawyer when…</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {useLawyerWhen.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                      <Scale className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How Wakeel fits */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Where Wakeel.org fits</h2>
          <p className="text-muted-foreground leading-relaxed">
            Wakeel.org is built to be the <strong>preparation step</strong> — helping you
            understand your legal situation in English or Urdu, make sense of documents, and walk
            into a lawyer's office (or a courtroom) better informed. It provides legal information
            and research support, not final legal advice, and reminds you to verify with a licensed
            advocate before you act.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">Try Wakeel Free</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/journal/article/best-ai-legal-apps-pakistan">Compare AI legal apps →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Further reading */}
      <section className="bg-background py-14 sm:py-16">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-semibold text-foreground mb-4">Keep exploring</h2>
          <div className="space-y-3">
            {[
              { label: "Can AI replace a lawyer for Pakistani legal questions?", href: "/journal/article/can-ai-replace-a-lawyer-pakistan" },
              { label: "When should you use an AI legal assistant instead of a lawyer?", href: "/journal/article/when-to-use-ai-legal-assistant-vs-lawyer-pakistan" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="flex items-center justify-between rounded-md border border-border px-4 py-3 text-sm text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors"
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
