import Link from "next/link";
import {
  CheckCircle2,
  Languages,
  FileSearch,
  ShieldCheck,
  HelpCircle,
  AlertTriangle,
} from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site } from "../../../src/data/marketing";
import { cardBase, eyebrow, headingGradient, sectionHeading } from "../../../src/data/theme";

const framework = [
  { icon: AlertTriangle, title: "No AI tool is actually a lawyer — start here", detail: "None of the AI tools marketed in Pakistan, including Wakeel.org, are licensed to practice law, appear in court, or take on the professional liability a real advocate carries. \"Best AI lawyer\" really means \"best AI legal assistant\" — the honest framing matters because it changes what you should expect from any of these tools." },
  { icon: Languages, title: "Urdu support and Pakistan-specific grounding are the real filters", detail: "A general AI chatbot like ChatGPT or Gemini can discuss law fluently but isn't grounded in Pakistani statutes and can confidently cite the wrong section or wrong country's law. The tools worth comparing are the Pakistan-specific ones — evaluate them on whether they work in Urdu, and whether their answers are actually sourced to Pakistani law rather than generic legal knowledge." },
  { icon: FileSearch, title: "Document handling separates a Q&A bot from a genuine assistant", detail: "Being able to explain a section of the PPC is table stakes. Being able to read a 100-page lease, sale deed, or contract you upload and explain what it actually says is a much bigger practical use case — and far fewer tools genuinely do this well." },
  { icon: ShieldCheck, title: "The best tools build in verification, not overconfidence", detail: "A tool that reminds you to verify with a licensed advocate before acting is more trustworthy than one that answers every question with total confidence — legal AI is prone to hallucinating case citations and sections, and a tool's honesty about its own limits is itself a quality signal." },
];

const criteria = [
  { name: "Pakistani-law grounding", detail: "Does it answer with reference to actual Pakistani statutes and sections, or generic legal knowledge?" },
  { name: "English + Urdu support", detail: "Can you genuinely ask and receive answers in Urdu, not just English with occasional Urdu words?" },
  { name: "Document analysis", detail: "Can it read and explain a real document you upload — a contract, notice, or lease — not just answer typed questions?" },
  { name: "Source transparency", detail: "Does it show which law, section, or source an answer is based on, so you can verify it yourself?" },
  { name: "Verification prompts", detail: "Does it clearly remind you to confirm with a licensed advocate before you rely on an answer for something consequential?" },
  { name: "Free access", detail: "Can you actually use it without paying first, or is meaningful use locked behind a paywall?" },
];

const faqs = [
  {
    question: "Is there a real AI lawyer in Pakistan?",
    answer:
      "No — no AI tool is licensed to practice law in Pakistan or can represent you in court. What exists are AI legal assistants that can explain Pakistani law, analyze documents, and help you prepare before seeing a licensed advocate. \"AI lawyer\" is a common but technically inaccurate way people search for this category.",
  },
  {
    question: "What should I look for in an AI legal assistant in Pakistan?",
    answer:
      "Grounding in actual Pakistani statutes (not generic legal knowledge), genuine English and Urdu support, the ability to analyze uploaded documents, transparency about its sources, and honest reminders to verify important answers with a licensed advocate.",
  },
  {
    question: "Can ChatGPT or Gemini act as an AI lawyer for Pakistan?",
    answer:
      "They can discuss law generally, but they aren't grounded in Pakistani law specifically and can confidently cite the wrong section, the wrong jurisdiction, or an outdated version of a statute. A Pakistan-specific legal AI tool is generally more reliable for Pakistani legal questions.",
  },
  {
    question: "Is Wakeel.org free to use?",
    answer:
      "Wakeel.org has a free plan, alongside paid Student, Professional, and Organization tiers, and is available on Android, iOS, and web.",
  },
  {
    question: "Can an AI legal assistant replace hiring a lawyer in Pakistan?",
    answer:
      "No, not for anything that requires representation, filing, or a binding legal judgment call. An AI legal assistant is best used to understand your situation and prepare before you see a lawyer, not as a substitute for one — see our comparison of AI help versus hiring a real lawyer for a fuller breakdown.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best AI Lawyer in Pakistan (2026 Guide)",
    description:
      "What people actually mean by \"AI lawyer,\" the criteria that separate a genuinely useful Pakistan-specific legal AI assistant from a generic chatbot, and how to evaluate your options.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-08-26",
    dateModified: "2026-08-26",
    mainEntityOfPage: `${site.url}/journal/article/best-ai-lawyer-pakistan`,
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
        name: "Best AI Lawyer in Pakistan (2026 Guide)",
        item: `${site.url}/journal/article/best-ai-lawyer-pakistan`,
      },
    ],
  },
];

const keywords = [
  "best ai lawyer pakistan",
  "ai lawyer pakistan",
  "ai legal assistant pakistan",
  "pakistan legal ai comparison",
  "ai lawyer vs real lawyer pakistan",
  "wakeel ai legal assistant",
].join(", ");

export default function BestAiLawyerPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Best AI Lawyer in Pakistan (2026 Guide)"
        description="What people actually mean by 'AI lawyer,' the criteria that separate a genuinely useful Pakistan-specific legal AI assistant from a generic chatbot, and how to evaluate your options."
        path="/journal/article/best-ai-lawyer-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>AI & the Law · Published August 26, 2026</p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Best AI Lawyer in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No AI tool is actually a lawyer — here's what "AI lawyer" really means, what to look
            for, and how the Pakistan-specific options compare.
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
                Nothing marketed as an "AI lawyer" in Pakistan is a licensed lawyer — what you're
                actually choosing between is <strong>AI legal assistants</strong>. The best ones for
                Pakistan are grounded in actual Pakistani statutes, work in both English and Urdu,
                can analyze real documents you upload, cite their sources, and remind you to verify
                important answers with a licensed advocate. Judge any tool — Wakeel.org included —
                against those criteria rather than marketing claims.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educate: framework */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>The framework, layer by layer</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {framework.map((r) => {
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

      {/* Criteria table */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className={sectionHeading}>Six things worth checking before you trust any of them</h2>
          </div>
          <div className="overflow-x-auto rounded-lg border-2 border-foreground/15 bg-card">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-foreground/15 bg-muted/60 text-left">
                  <th className="px-4 py-3 font-semibold">Criterion</th>
                  <th className="px-4 py-3 font-semibold">What to check</th>
                </tr>
              </thead>
              <tbody>
                {criteria.map((c, i) => (
                  <tr key={c.name} className={i % 2 === 0 ? "border-b border-foreground/10" : "border-b border-foreground/10 bg-muted/30"}>
                    <td className="px-4 py-3 font-semibold whitespace-nowrap align-top">{c.name}</td>
                    <td className="px-4 py-3 text-muted-foreground align-top">{c.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Reveal: honest positioning */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <h2 className={sectionHeading}>Where Wakeel.org fits — and where Pakistan's other AI legal tools fit</h2>
          <p className="text-muted-foreground leading-relaxed">
            Pakistan's legal-tech space now includes several Pakistan-specific options worth
            knowing about: <strong>PakistanLawBot</strong> and <strong>QanoonAI</strong> lean
            toward Q&A and case-brief generation; <strong>DigiLawyer</strong> and{" "}
            <strong>Draftify</strong> focus on AI drafting for lawyers rather than citizen-facing
            explanation; <strong>LawGPT.pk</strong> targets legal practice and research (worth
            distinguishing from unrelated global "LawGPT" projects); and{" "}
            <strong>YourMunshi</strong> combines AI with paperwork assistance. General-purpose AI
            like ChatGPT, Claude, and Gemini are capable but not grounded in Pakistani law
            specifically, which is exactly where hallucinated sections and wrong-jurisdiction
            answers tend to creep in.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Wakeel.org is built around the six criteria above specifically: Pakistani-law grounding,
            genuine English and Urdu support, analysis of documents up to 100+ pages, source-aware
            answers, and built-in reminders to verify with a licensed advocate — with a free plan
            plus Student, Professional, and Organization tiers on Android, iOS, and web. Whichever
            tool you choose, apply the same six-point checklist rather than taking any marketing
            claim, including ours, at face value.
          </p>
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
                  Explaining Pakistani law in English or Urdu, analyzing legal documents you
                  upload, and helping you prepare before you see a lawyer.
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
                  It cannot represent you, appear in court, or replace a licensed advocate's
                  professional judgment on your specific case.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Try Wakeel — free
              </a>
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

      {/* Related reading */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`${sectionHeading} text-center mb-8`}>Related reading</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/journal/article/best-ai-legal-apps-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Best AI Legal Apps in Pakistan (2026)</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/ai-vs-lawyer-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">AI vs. Lawyer: Which Is Right for You in Pakistan?</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/ai-legal-research-tools-lawyers-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">AI Legal Research Tools for Lawyers in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/wakeel-vs-pakistanlawbot" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Wakeel.org vs. PakistanLawBot</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Want to see how a Pakistan-grounded AI assistant works?</h2>
          <p className="text-muted-foreground">
            Try Wakeel free — then verify anything important with a licensed advocate.
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
