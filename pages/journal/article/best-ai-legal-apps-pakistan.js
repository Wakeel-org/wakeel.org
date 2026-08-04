import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Languages,
  FileText,
  ShieldCheck,
  Scale,
  Smartphone,
  Wallet,
  HelpCircle,
} from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site } from "../../../src/data/marketing";
import { cardBase, headingGradient, sectionHeading } from "../../../src/data/theme";

const criteria = [
  {
    icon: Scale,
    title: "Built for Pakistani law",
    detail:
      "General chatbots answer with US or Indian law by default. Look for a tool grounded in Pakistan's statutes, courts, and procedures.",
  },
  {
    icon: Languages,
    title: "English and Urdu",
    detail:
      "Most people are more comfortable describing a legal problem in Urdu. Bilingual support matters more than a polished English-only UI.",
  },
  {
    icon: FileText,
    title: "Document understanding",
    detail:
      "Notices, FIRs, agreements, and judgments are where people get stuck. Check whether the app can read long PDFs, not just chat.",
  },
  {
    icon: ShieldCheck,
    title: "Source-aware & safe",
    detail:
      "A trustworthy tool cites sources, flags uncertainty, and reminds you to verify with a licensed advocate — it never poses as final legal advice.",
  },
  {
    icon: Wallet,
    title: "A real free tier",
    detail:
      "\"Free\" is the most searched modifier. Check whether the free plan is actually usable or just a short trial before a paywall.",
  },
  {
    icon: Smartphone,
    title: "Works on your phone",
    detail:
      "Most users in Pakistan are mobile-first. Android, iOS, and web access beats a desktop-only experience.",
  },
];

const apps = [
  {
    name: "Wakeel.org",
    tag: "Best for Pakistan-specific legal help",
    isUs: true,
    blurb:
      "A Pakistan-focused AI legal assistant for citizens, students, lawyers, and institutions. Ask in English or Urdu, analyze documents up to 100+ pages, and get source-aware guidance grounded in Pakistani law — with built-in reminders to verify with a licensed advocate. Free plan, plus Student, Professional, and Organization tiers. Available on Android, iOS, and web.",
    strengths: [
      "English + Urdu",
      "100+ page document analysis",
      "Source-aware, verify-first",
      "Free plan available",
      "Android, iOS & web",
    ],
  },
  {
    name: "PakistanLawBot",
    tag: "Pakistani law Q&A chatbot",
    blurb:
      "Positioned as an AI chatbot for Pakistani legal questions. Useful for quick Q&A; evaluate its document handling, Urdu support, and how clearly it cites sources.",
  },
  {
    name: "AI Attorney",
    tag: "Pakistan legal AI assistant",
    blurb:
      "Marketed as a legal AI assistant for Pakistani users. Worth comparing on bilingual support, document analysis depth, and pricing.",
  },
  {
    name: "QanoonAI",
    tag: "Case briefs & legal calculators",
    blurb:
      "Positioned around AI-generated case briefs plus specialized tools for areas like Muslim personal law, tax, and property. Compare on Urdu support, document handling, and how it cites sources.",
  },
  {
    name: "DigiLawyer",
    tag: "AI legal drafting",
    blurb:
      "Focused on AI legal drafting — generating pleadings, petitions, contracts, and case summaries. Check the quality of Pakistani-law grounding and whether drafts come with verification prompts.",
  },
  {
    name: "LawGPT.pk",
    tag: "AI for legal practice",
    blurb:
      "A Pakistan-focused legal AI (lawgpt.pk) aimed at legal practice and research. Note that \"LawGPT\" is also used by unrelated global and academic projects, so confirm you're using the Pakistani product.",
  },
  {
    name: "Draftify",
    tag: "AI legal drafting",
    blurb:
      "An AI drafting tool for legal documents. Aimed more at lawyers than everyday citizens; check its Pakistani-law grounding and whether drafts include verification prompts before filing.",
  },
  {
    name: "YourMunshi",
    tag: "Legal & paperwork assistance",
    blurb:
      "A Pakistani legal/paperwork assistance service. Check whether it offers genuine AI document understanding versus human-assisted form filling.",
  },
  {
    name: "Other Pakistani legal-tech tools",
    tag: "Drafting, research, e-signing & practice software",
    blurb:
      "Pakistan's legal-tech space also includes research assistants (e.g., bahaq, QanoonMate), cloud legal/practice-management software (e.g., Eastlaw), and e-signature tools (e.g., Wukla, Paksign). These serve lawyers and firms more than everyday citizens — match the tool to whether you need legal understanding, drafting, or law-firm workflow.",
  },
  {
    name: "General AI (ChatGPT, Claude, Gemini)",
    tag: "Powerful, but not Pakistan-specific",
    blurb:
      "Excellent general assistants, but they are not grounded in Pakistani law and may invent sections or cite the wrong jurisdiction. Use with caution for anything legal, and always verify against the original law.",
  },
];

const comparisonRows = [
  "Grounded in Pakistani law",
  "English & Urdu support",
  "Long document (100+ page) analysis",
  "Cites sources / flags uncertainty",
  "Usable free plan",
  "Android, iOS & web",
];

const faqs = [
  {
    question: "What is the best AI legal app in Pakistan?",
    answer:
      "The best app depends on your need, but for Pakistan-specific legal help the most important factors are: grounding in Pakistani law, English and Urdu support, document analysis, source-aware answers, and a usable free plan. Wakeel.org is built around all of these. General assistants like ChatGPT are powerful but are not grounded in Pakistani law.",
  },
  {
    question: "Is there a free AI legal app in Pakistan?",
    answer:
      "Yes. Wakeel.org offers a free plan for basic legal questions and document understanding. When comparing any 'free' tool, check whether the free tier is genuinely usable or just a short trial before a paywall.",
  },
  {
    question: "Can an AI legal app replace a lawyer?",
    answer:
      "No. AI legal apps provide legal information and research support to help you prepare — they do not provide final legal advice and cannot represent you. For anything you intend to file, sign, pay, or argue in court, consult a licensed advocate.",
  },
  {
    question: "Can these apps answer in Urdu?",
    answer:
      "Some can. Bilingual English and Urdu support is one of the most useful features for users in Pakistan, since most people describe legal problems more naturally in Urdu. Wakeel.org supports both.",
  },
  {
    question: "Are AI legal answers always accurate?",
    answer:
      "No. AI output can be incomplete or wrong, and weaker tools may cite the wrong jurisdiction or invent legal sections. Always check citations against the original law and verify important steps with a licensed advocate before acting.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Best AI Legal Apps in Pakistan (2026)",
    description:
      "An honest comparison of the best AI legal apps available in Pakistan, with the criteria that matter most: Pakistani-law grounding, Urdu support, document analysis, and safety.",
    url: `${site.url}/journal/article/best-ai-legal-apps-pakistan`,
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best AI Legal Apps in Pakistan",
    itemListElement: apps.map((app, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: app.name,
    })),
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
        name: "Best AI Legal Apps in Pakistan",
        item: `${site.url}/journal/article/best-ai-legal-apps-pakistan`,
      },
    ],
  },
];

const keywords = [
  "best ai legal app pakistan",
  "best ai lawyer app",
  "best ai lawyer app free",
  "top legal ai apps",
  "ai legal app free",
  "ai lawyer pakistan",
  "ai legal assistant pakistan",
  "legal ai pakistan",
  "best legal advice ai app",
].join(", ");

export default function BestAILegalAppsPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Best AI Legal Apps in Pakistan (2026)"
        description="An honest comparison of the best AI legal apps in Pakistan, judged on Pakistani-law grounding, Urdu support, document analysis, and free plans."
        path="/journal/article/best-ai-legal-apps-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Comparison · Updated June 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Best AI Legal Apps in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A practical, honest guide to the AI legal tools Pakistani users can try today —
            and the criteria that actually matter when you have a real legal problem.
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
                For <strong>Pakistan-specific</strong> legal help, choose a tool grounded in
                Pakistani law with <strong>English + Urdu</strong> support, real{" "}
                <strong>document analysis</strong>, source-aware answers, and a usable{" "}
                <strong>free plan</strong>. <Link href="/" className="text-primary font-semibold hover:underline">Wakeel.org</Link>{" "}
                is built around all of these. General assistants like ChatGPT are powerful but
                are <em>not</em> grounded in Pakistani law — verify anything legal they tell you.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Criteria */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>What to look for in an AI legal app</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              A slick interface means little if the legal substance is wrong. These six factors
              separate a genuinely useful tool from a risky one.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {criteria.map((c) => {
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

      {/* The apps */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>The AI legal tools to know</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto text-sm">
              Based on publicly available information, which may change over time. This guide is
              meant to help you evaluate tools carefully — not to attack any product. Always
              verify a tool's current features for yourself.
            </p>
          </div>
          <div className="space-y-4">
            {apps.map((app) => (
              <Card key={app.name} className={`${cardBase} ${app.isUs ? "border-primary/40" : ""}`}>
                <CardContent className="p-6">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold">{app.name}</h3>
                    <span className="text-xs font-semibold text-primary bg-primary/10 rounded-full px-3 py-1">
                      {app.tag}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{app.blurb}</p>
                  {app.strengths && (
                    <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                      {app.strengths.map((s) => (
                        <li key={s} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  )}
                  {app.isUs && (
                    <div className="mt-5">
                      <Button asChild className="cta-try-free">
                        <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                          Try Wakeel Free <ArrowRight className="h-4 w-4 ml-1" />
                        </a>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison checklist */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className={sectionHeading}>The checklist that matters</h2>
            <p className="text-muted-foreground mt-3 text-sm">
              Run any AI legal app against these before you rely on it. Here is how Wakeel.org measures up.
            </p>
          </div>
          <Card className={cardBase}>
            <CardContent className="p-2 sm:p-4">
              <ul className="divide-y divide-border">
                {comparisonRows.map((row) => (
                  <li key={row} className="flex items-center justify-between gap-4 px-3 py-3">
                    <span className="text-sm text-muted-foreground">{row}</span>
                    <span className="flex items-center gap-1.5 text-sm font-semibold text-primary shrink-0">
                      <CheckCircle2 className="h-4 w-4" /> Wakeel
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <p className="text-xs text-muted-foreground mt-4 text-center">
            For other tools, confirm each row inside the app before relying on it — features and
            pricing change frequently.
          </p>
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
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Try the Pakistan-focused option free</h2>
          <p className="text-muted-foreground">
            Ask a legal question in English or Urdu, or upload a document to understand it — then
            verify with a licensed advocate before you act.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">Try Wakeel Free</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/journal/article/ai-vs-lawyer-pakistan">AI vs hiring a lawyer →</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
