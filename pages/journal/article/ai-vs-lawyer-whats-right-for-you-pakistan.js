import Link from "next/link";
import {
  CheckCircle2,
  Bot,
  Scale,
  Wallet,
  HelpCircle,
  AlertTriangle,
  TrendingUp,
} from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site } from "../../../src/data/marketing";
import { cardBase, eyebrow, headingGradient, sectionHeading } from "../../../src/data/theme";

const costFactors = [
  { title: "AI tools: mostly free or low, flat cost", detail: "Reputable AI legal assistants are typically free or a low flat subscription, with no per-question billing — which is exactly why they suit repeated, low-stakes questions and preparation work." },
  { title: "Lawyer fees: variable, and legitimately so", detail: "A licensed advocate's fees depend on seniority, city, case complexity, and whether it's a one-off consultation or ongoing representation. There's no single published national fee schedule, and legitimate variation is wide — treat any number you hear informally as a rough starting point, not a quote." },
  { title: "The real cost of skipping a lawyer isn't the fee you save", detail: "It's the cost of a missed deadline, a badly drafted contract, or a wrongly filed case — all of which are typically far more expensive to fix than a consultation would have cost in the first place." },
  { title: "Free and subsidised legal help exists too", detail: "District Legal Empowerment Committees, bar association free-consultation days, and legal aid NGOs exist specifically to reduce the cost barrier — worth checking before assuming a lawyer is out of reach financially." },
];

const rightForYouIf = [
  { title: "AI is probably right for you if…", points: ["You're comparing options or trying to understand a situation, not yet acting on it.", "Your budget genuinely doesn't stretch to a consultation right now, and the matter isn't urgent or high-stakes.", "You want to walk into a paid consultation already prepared, to get more value from every billable minute."] },
  { title: "A lawyer is probably right for you if…", points: ["The cost of being wrong is much higher than any consultation fee — property, employment, a court date.", "You need someone to actually sign, file, negotiate, or appear — value AI structurally cannot provide at any price.", "Free or subsidised legal aid is available to you and cost was the only reason you were hesitating."] },
];

const faqs = [
  {
    question: "Is AI legal help actually cheaper than hiring a lawyer in Pakistan?",
    answer:
      "For the preparation and understanding stage, yes — AI tools are typically free or low-cost, while a lawyer charges professional fees that vary by seniority, city, and case complexity. But cost comparisons only make sense stage by stage: AI can't replace what a lawyer does once you need someone to sign, file, negotiate, or represent you, no matter how much cheaper it is.",
  },
  {
    question: "How much does a lawyer consultation cost in Pakistan?",
    answer:
      "There's no single published fee schedule — costs vary by the advocate's seniority, city, and the complexity of the matter. Rather than relying on a number you've heard informally, ask directly when you contact a lawyer's office, and consider that a short initial consultation is often more affordable than people assume.",
  },
  {
    question: "Is there free legal help available in Pakistan if I can't afford a lawyer?",
    answer:
      "Yes — District Legal Empowerment Committees, bar association free-consultation initiatives, and legal aid NGOs exist specifically for this. Our dedicated guide on free legal advice in Pakistan covers these options in detail.",
  },
  {
    question: "What's the actual financial risk of only using AI for a legal matter?",
    answer:
      "The risk isn't the AI's cost — it's that an unverified AI answer, if wrong, can lead to a missed deadline, an unenforceable contract clause, or a wrongly filed case, each of which typically costs far more in time and money to fix than a lawyer's consultation fee would have been upfront.",
  },
  {
    question: "Can Wakeel.org help me get more value out of a paid lawyer consultation?",
    answer:
      "Yes — by helping you organize your facts, documents, and questions in advance, Wakeel.org can help make a lawyer's paid time go further, since less of that time is spent on background explanation. It cannot negotiate the lawyer's fee or replace the consultation itself.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "AI vs Lawyer in Pakistan: What's Right for You?",
    description:
      "A cost-and-value comparison of AI legal tools versus hiring a lawyer in Pakistan — what each actually costs, what free legal aid exists, and how to decide based on your situation.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-04-16",
    dateModified: "2026-04-16",
    mainEntityOfPage: `${site.url}/journal/article/ai-vs-lawyer-whats-right-for-you-pakistan`,
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
        name: "AI vs Lawyer in Pakistan: What's Right for You?",
        item: `${site.url}/journal/article/ai-vs-lawyer-whats-right-for-you-pakistan`,
      },
    ],
  },
];

const keywords = [
  "ai vs lawyer pakistan",
  "legal ai pakistan cost",
  "lawyer fees pakistan",
  "ai lawyer vs advocate pakistan",
  "free legal aid pakistan",
  "cost of hiring a lawyer pakistan",
].join(", ");

export default function AiVsLawyerWhatsRightForYouPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="AI vs Lawyer in Pakistan: What's Right for You?"
        description="A cost-and-value comparison of AI legal tools versus hiring a lawyer in Pakistan — what each actually costs, what free legal aid exists, and how to decide."
        path="/journal/article/ai-vs-lawyer-whats-right-for-you-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>
            AI & the Law · Published April 16, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            AI vs Lawyer in Pakistan: What's Right for You?
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cost is usually the real question underneath "AI or lawyer?" — so let's actually look at
            it: what each genuinely costs, where free help exists, and what skipping a lawyer can
            end up costing you instead.
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
                AI legal tools are typically <strong>free or low-cost</strong> and suit
                understanding and preparation. Lawyer fees genuinely <strong>vary</strong> by
                seniority, city, and complexity — there's no fixed national rate. The real
                financial risk usually isn't the lawyer's fee, it's the cost of a mistake an
                unverified AI answer leads to on something that mattered. <strong>Free legal
                aid</strong> exists in Pakistan too, and is worth checking before cost alone
                rules a lawyer out.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educate: cost factors */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>The real cost picture, factor by factor</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {costFactors.map((r) => (
              <Card key={r.title} className={cardBase}>
                <CardHeader>
                  <Wallet className="h-7 w-7 text-primary" />
                  <CardTitle className="text-lg">{r.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{r.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reveal: right for you */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-4">
            {rightForYouIf.map((block) => (
              <Card key={block.title} className={cardBase}>
                <CardHeader>
                  {block.title.startsWith("AI") ? (
                    <Bot className="h-7 w-7 text-primary" />
                  ) : (
                    <Scale className="h-7 w-7 text-primary" />
                  )}
                  <CardTitle className="text-lg">{block.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {block.points.map((p) => (
                      <li key={p} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                        <TrendingUp className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
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
                  Helping you understand your situation and organize your facts and documents so a
                  paid lawyer consultation, when you need one, goes further — and pointing you
                  toward free legal aid options where relevant.
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
                  It cannot quote or negotiate a lawyer's fee, represent you, or substitute for
                  paid legal advice once real money, property, or liberty is at stake.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Prepare before your consultation with Wakeel — free
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
            General educational information, not legal or financial advice. Fees vary and change
            over time — confirm directly with any advocate before engaging them. See our{" "}
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
              { label: "2026 AI in Professional Services Report — Thomson Reuters Institute", href: "https://www.thomsonreuters.com/en-us/posts/technology/ai-in-professional-services-report-2026/" },
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
            <Link href="/journal/article/should-i-use-ai-or-hire-a-lawyer-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Should I Use AI or Hire a Lawyer in Pakistan?</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/free-legal-advice-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Free & Online Legal Advice in Pakistan</p>
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
          <h2 className={sectionHeading}>Weighing the cost of your options?</h2>
          <p className="text-muted-foreground">
            Describe your situation to Wakeel and get help understanding it — then make an informed
            call on whether and when to bring in a paid lawyer.
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
