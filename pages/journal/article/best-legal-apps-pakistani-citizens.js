import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Smartphone,
  MessageSquare,
  FileText,
  Search,
  HelpCircle,
  AlertTriangle,
  Star,
  Scale,
} from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site } from "../../../src/data/marketing";
import { cardBase, eyebrow, headingGradient, sectionHeading } from "../../../src/data/theme";

const categories = [
  {
    icon: MessageSquare,
    title: "AI legal assistants",
    detail:
      "Chat-based apps for asking legal questions and understanding documents. This is where Wakeel.org sits — grounded in Pakistani law, bilingual in English and Urdu, with document analysis and a free tier. Good for understanding a situation, preparing for a lawyer, or getting unstuck on a legal term. Not a substitute for representation.",
  },
  {
    icon: FileText,
    title: "Document and drafting apps",
    detail:
      "Tools focused on generating or reviewing legal paperwork — agreements, notices, affidavits. Useful for routine documents, but check how well the templates actually reflect Pakistani law versus generic international templates, and whether they prompt you to verify with a lawyer before relying on the output.",
  },
  {
    icon: Search,
    title: "Case tracking and court information tools",
    detail:
      "Apps and portals (including some provincial e-court initiatives) that let you check case status, hearing dates, or cause lists online instead of calling a clerk or visiting the court in person. Genuinely useful for reducing wasted trips, where available for your court.",
  },
  {
    icon: Scale,
    title: "Lawyer directories and referral apps",
    detail:
      "Platforms for finding and contacting licensed advocates by city or specialization. Useful when you already know you need representation and want to compare options — check bar council registration and reviews where available.",
  },
];

const criteria = [
  "Is it actually grounded in Pakistani law, or a generic international product with a local name?",
  "Does it support Urdu, or only English?",
  "Can it handle a real document — a multi-page contract or FIR copy — not just short text snippets?",
  "Does it tell you when it's uncertain, or does every answer sound equally confident?",
  "Is the free tier genuinely usable, or a teaser before a paywall?",
  "Does it work on the phone you actually use, not just a desktop browser?",
];

const faqs = [
  {
    question: "What is the best legal app for Pakistani citizens?",
    answer:
      "It depends on what you need. For understanding a legal question or document, an AI legal assistant grounded in Pakistani law — like Wakeel.org — is the most useful starting point, especially with bilingual English/Urdu support. For routine paperwork, a dedicated drafting tool may fit better. For finding representation, a lawyer directory is more appropriate. Match the app to the actual task.",
  },
  {
    question: "Is Wakeel AI a good app for legal help in Pakistan?",
    answer:
      "Wakeel.org is built specifically for Pakistani citizens, students, lawyers, and institutions — grounded in Pakistani statutes and case law, bilingual in English and Urdu, with document analysis for long files and a genuinely usable free plan. It's designed to help you understand your situation and prepare questions and documents for a lawyer, not to replace one.",
  },
  {
    question: "Are legal apps in Pakistan free?",
    answer:
      "Many offer a free tier, but the depth of what's actually free varies a lot — some are limited trials before a paywall. Wakeel.org's free plan covers everyday legal questions and document understanding; check the pricing page for what's included at each tier if you need heavier or specialized use.",
  },
  {
    question: "Can a legal app replace hiring a lawyer in Pakistan?",
    answer:
      "No legal app — AI-based or otherwise — can replace a licensed advocate for representation, filing, court appearances, or final legal advice on your specific facts. The genuinely useful role these apps play is helping you understand your situation and prepare, so that when you do see a lawyer, you use that time and money more effectively.",
  },
  {
    question: "How do I know if a legal app is trustworthy?",
    answer:
      "Check whether it's transparent about its limitations (a tool that never says 'verify this with a lawyer' is a red flag, not a strength), whether it cites or references actual Pakistani statutes and cases rather than vague generalities, and whether its claims about pricing and features hold up once you actually use it.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Legal Apps for Pakistani Citizens",
    description:
      "A category-by-category look at the legal apps available to Pakistani citizens — AI assistants, drafting tools, case trackers, and lawyer directories — and how to judge whether one is trustworthy.",
    author: { "@type": "Organization", name: "Wakeel.org" },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-07-29",
    dateModified: "2026-07-29",
    mainEntityOfPage: `${site.url}/journal/article/best-legal-apps-pakistani-citizens`,
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
        name: "Best Legal Apps for Pakistani Citizens",
        item: `${site.url}/journal/article/best-legal-apps-pakistani-citizens`,
      },
    ],
  },
];

const keywords = [
  "ai lawyer pakistan",
  "wakeel ai review",
  "legal app pakistan",
  "best legal app pakistan",
  "legal help app pakistan",
  "citizen legal apps pakistan",
].join(", ");

export default function BestLegalAppsPakistaniCitizens() {
  return (
    <Layout>
      <MarketingSEO
        title="Best Legal Apps for Pakistani Citizens"
        description="Best legal apps for Pakistani citizens, beyond AI chatbots — legal assistants, drafting tools, case trackers, lawyer directories, and how to judge each."
        path="/journal/article/best-legal-apps-pakistani-citizens"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>
            Legal Help · Published July 29, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Best Legal Apps for Pakistani Citizens
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            "Legal app" means very different things depending on what you actually need — an
            answer to a question, a document drafted, a case status checked, or a lawyer found.
            Here's how to think about each, instead of chasing one app to do everything.
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
                There isn't one "best" legal app — there's a best app per task. For understanding a
                legal question or document,{" "}
                <Link href="/" className="text-primary font-semibold hover:underline">Wakeel.org</Link>{" "}
                is built around Pakistani law with bilingual support and a real free tier. For a
                deeper AI-tool-by-AI-tool comparison, see our{" "}
                <Link href="/journal/article/best-ai-legal-apps-pakistan" className="text-primary font-semibold hover:underline">
                  Best AI Legal Apps in Pakistan
                </Link>{" "}
                breakdown. For representation, nothing replaces a licensed advocate.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>The four categories worth knowing</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {categories.map((c) => {
              const Icon = c.icon;
              return (
                <Card key={c.title} className={cardBase}>
                  <CardHeader>
                    <Icon className="h-7 w-7 text-primary" />
                    <CardTitle className="text-lg">{c.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{c.detail}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Criteria */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className={sectionHeading}>How to judge any legal app</h2>
          </div>
          <Card className={cardBase}>
            <CardContent className="p-6">
              <ul className="space-y-3">
                {criteria.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Star className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Wakeel highlight */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className={`${cardBase} border-primary/40`}>
            <CardContent className="p-8 space-y-4">
              <div className="flex items-center gap-3">
                <Smartphone className="h-7 w-7 text-primary" />
                <h3 className="text-xl font-bold">Where Wakeel.org fits</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Wakeel.org is an AI legal assistant built for Pakistan — citizens, students,
                lawyers, and institutions. Ask a question or upload a document (up to 100+ pages)
                in English or Urdu, and get a source-aware explanation with built-in reminders to
                verify with a licensed advocate for anything you're about to act on. Free plan
                available, with Student, Professional, and Organization tiers for heavier use.
              </p>
              <Button asChild className="cta-try-free">
                <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                  Try Wakeel Free <ArrowRight className="h-4 w-4 ml-1" />
                </a>
              </Button>
            </CardContent>
          </Card>
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
            Based on publicly available information about app categories, which may change over
            time — not legal advice. Verify any app's current features and pricing for yourself,
            and confirm important legal steps with a licensed advocate. See our{" "}
            <Link href="/disclaimer" className="text-primary hover:underline">full disclaimer</Link>.
          </p>
        </div>
      </section>

      {/* Related reading */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`${sectionHeading} text-center mb-8`}>Related reading</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/journal/article/best-ai-legal-apps-pakistan"
              className={`group ${cardBase} block rounded-lg p-5`}
            >
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                Best AI Legal Apps in Pakistan (2026)
              </p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link
              href="/journal/article/free-legal-advice-pakistan"
              className={`group ${cardBase} block rounded-lg p-5`}
            >
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                Free &amp; Online Legal Advice in Pakistan
              </p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link
              href="/journal/article/ai-vs-lawyer-pakistan"
              className={`group ${cardBase} block rounded-lg p-5`}
            >
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                Will AI Replace Lawyers? AI vs Hiring a Lawyer
              </p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/citizens" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                Wakeel.org for Citizens
              </p>
              <p className="text-xs text-muted-foreground mt-1">How Wakeel helps everyday legal problems</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Start with the app built for Pakistan</h2>
          <p className="text-muted-foreground">
            Ask a question or upload a document in English or Urdu, and see what Wakeel can help
            you understand today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">Try Wakeel Free</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/pricing">See pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
