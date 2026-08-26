import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Briefcase,
  FileSearch,
  Search,
  Clock,
  HelpCircle,
  AlertTriangle,
  ShieldCheck,
  Scale,
} from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site } from "../../../src/data/marketing";
import { cardBase, eyebrow, headingGradient, sectionHeading } from "../../../src/data/theme";

const useCases = [
  {
    icon: FileSearch,
    title: "First-pass document review",
    detail:
      "Before a paralegal or junior associate spends an afternoon reading a 100-page agreement or case file line by line, an AI first pass can flag key clauses, dates, obligations, and inconsistencies — turning a full read-through into a targeted review of what actually needs a lawyer's judgment.",
  },
  {
    icon: Search,
    title: "Faster orientation on unfamiliar statutes or case law",
    detail:
      "When a matter touches an area outside your usual practice, getting a fast, plain-language orientation on the relevant statute or a summary of a case's holding can save real research time — as a starting point for your own verification, not a replacement for it.",
  },
  {
    icon: Clock,
    title: "Drafting support for routine documents",
    detail:
      "Notices, standard clauses, and first-draft language for routine filings can be generated faster with AI assistance, freeing up billable time for the parts of a matter that actually require legal strategy and judgment.",
  },
  {
    icon: Scale,
    title: "Client-facing plain-language summaries",
    detail:
      "Clients often struggle to understand their own case documents. Producing a clear, accurate summary they can actually read — in English or Urdu — improves client communication without eating into a lawyer's drafting time.",
  },
  {
    icon: ShieldCheck,
    title: "A second pair of eyes on your own drafts",
    detail:
      "Running your own contract or pleading draft past an AI review to catch missing definitions, inconsistent terms, or ambiguous clauses adds a useful check — before it goes out under your signature.",
  },
];

const criteria = [
  {
    title: "Grounded in Pakistani law, not generic Western defaults",
    detail:
      "A tool trained mostly on US or UK legal content will confidently cite the wrong jurisdiction's statutes. For Pakistani practice, verify the tool is actually built around Pakistani statutes, case law, and procedure — not just a general AI model with a local skin.",
  },
  {
    title: "Handles long, real-world documents",
    detail:
      "Case files, contracts, and judgments in practice run long. A tool that chokes on anything past a few pages, or summarizes only the first section, isn't built for actual legal work.",
  },
  {
    title: "Cites sources and flags uncertainty",
    detail:
      "The single biggest risk with AI legal research is confident, plausible-sounding fabrication — invented sections, misattributed cases. A trustworthy tool tells you where it's uncertain and points you back to the primary source, rather than presenting every answer with the same false confidence.",
  },
  {
    title: "Fits how you actually work",
    detail:
      "Bilingual English/Urdu support matters for client communication in Pakistan. Availability on web and mobile matters for lawyers who aren't always at a desktop. Evaluate a tool against your actual daily workflow, not a features list.",
  },
];

const faqs = [
  {
    question: "Can AI replace legal research for lawyers in Pakistan?",
    answer:
      "No — and any tool claiming that should be treated skeptically. AI legal research tools like Wakeel.org can accelerate the first pass of research, document review, and drafting, but the judgment, verification against primary sources, and final legal strategy remain the lawyer's responsibility. Think of it as a faster starting point, not a replacement for professional diligence.",
  },
  {
    question: "What should lawyers look for in AI document review software?",
    answer:
      "Look for grounding in Pakistani law and procedure, the ability to handle genuinely long documents without losing accuracy, transparent sourcing or flagged uncertainty rather than false confidence, and a workflow that fits how you actually practice — bilingual support and mobile access matter more than a flashy interface.",
  },
  {
    question: "Is there a legal research tool built for Pakistani lawyers?",
    answer:
      "Wakeel.org is built specifically around Pakistani statutes, case law, and procedure, with support for long document analysis and both English and Urdu. It's aimed at speeding up research and review work, not replacing a lawyer's final judgment or verification of primary sources.",
  },
  {
    question: "Is it safe to rely on AI for legal research in Pakistan?",
    answer:
      "AI output should always be verified against the actual statute, case report, or primary source before it's relied on in a filing, opinion, or advice to a client. AI can accelerate the search and first-draft process meaningfully, but professional responsibility for accuracy stays with the lawyer, not the tool.",
  },
  {
    question: "Can Wakeel.org be used for client document review?",
    answer:
      "Yes — Wakeel.org can analyze long documents (100+ pages), summarize key clauses and obligations, and produce plain-language summaries for client communication in English or Urdu. It cannot certify a document's legal sufficiency or replace the lawyer's own review and sign-off before it's relied on.",
  },
  {
    question: "Is there a case law search tool for Pakistan?",
    answer:
      "Several platforms index Pakistani case law from the Supreme Court, High Courts, and reported judgments, with varying search quality and coverage. When evaluating any case law search tool, check how current its database is, whether it covers your relevant court, and whether it links back to the original judgment text rather than just a summary — always confirm a case's current status (not overruled or distinguished) against the primary source before relying on it.",
  },
  {
    question: "What legal research tools are available for lawyers in Pakistan?",
    answer:
      "The landscape includes AI legal assistants for research and drafting support (like Wakeel.org), case law search platforms, and cloud-based practice management software for firms. Most lawyers in Pakistan still rely heavily on physical law reports and direct statute reading for anything filed or argued — treat digital tools as an accelerant for the research process, not a replacement for verifying the primary source.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "AI Legal Research Tools for Lawyers in Pakistan",
    description:
      "An honest look at how AI legal research and document review tools fit into a Pakistani lawyer's actual practice — where they save real time, and where professional judgment still has to take over.",
    author: { "@type": "Organization", name: "Wakeel.org" },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-07-19",
    dateModified: "2026-07-19",
    mainEntityOfPage: `${site.url}/journal/article/ai-legal-research-tools-lawyers-pakistan`,
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
        name: "AI Legal Research Tools for Lawyers in Pakistan",
        item: `${site.url}/journal/article/ai-legal-research-tools-lawyers-pakistan`,
      },
    ],
  },
];

const keywords = [
  "document review software pakistan",
  "ai for lawyers pakistan",
  "legal research tool pakistan",
  "ai legal research pakistan",
  "law firm software pakistan",
  "legal document analysis ai pakistan",
  "pakistan case law search",
  "legal research tools pakistan",
].join(", ");

export default function AiLegalResearchToolsLawyersPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="AI Legal Research Tools for Lawyers in Pakistan"
        description="How AI legal research and document review tools actually fit into a Pakistani lawyer's practice — real time savings, genuine risks, what to evaluate."
        path="/journal/article/ai-legal-research-tools-lawyers-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>
            AI &amp; the Law · Published July 19, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            AI Legal Research Tools for Lawyers in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every busy practice has the same bottleneck: too many documents, not enough billable
            hours to read them all closely. Here's a grounded look at what AI research tools
            genuinely change about that — and what they don't.
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
                AI legal research tools speed up the <strong>first pass</strong> — document review,
                orientation on unfamiliar statutes, and routine drafting — so lawyers spend less
                time on mechanical reading and more on judgment. They do not replace verification
                against primary sources or a lawyer's professional responsibility for accuracy.{" "}
                <Link href="/lawyers" className="text-primary font-semibold hover:underline">
                  See how Wakeel.org fits a Pakistani legal practice
                </Link>{" "}
                for the full feature set.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Use cases */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>Where these tools actually save time</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {useCases.map((u) => {
              const Icon = u.icon;
              return (
                <Card key={u.title} className={cardBase}>
                  <CardHeader>
                    <Icon className="h-7 w-7 text-primary" />
                    <CardTitle className="text-lg">{u.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{u.detail}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Criteria */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className={sectionHeading}>What to actually evaluate before adopting one</h2>
          </div>
          <div className="space-y-4">
            {criteria.map((c) => (
              <Card key={c.title} className={cardBase}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-base mb-1">{c.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.detail}</p>
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
                  First-pass review of long case files and contracts. Plain-language client
                  summaries in English or Urdu. Fast orientation on unfamiliar statutes or case
                  law. Drafting support for routine documents.
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
                  It cannot replace verification against primary sources, certify a document's
                  legal sufficiency, or take on the lawyer's professional responsibility for
                  accuracy and strategy in a matter.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Try Wakeel for your practice, free
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
            General educational information, not legal advice, and not a substitute for
            professional diligence. Verify all AI-assisted research against primary legal sources
            before relying on it in practice. See our{" "}
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
              href="/journal/article/best-legal-apps-pakistani-citizens"
              className={`group ${cardBase} block rounded-lg p-5`}
            >
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                Best Legal Apps for Pakistani Citizens
              </p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
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
              href="/journal/legal-issues-pakistan/case-law-research-pakistan"
              className={`group ${cardBase} block rounded-lg p-5`}
            >
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                Case Law Research in Pakistan
              </p>
              <p className="text-xs text-muted-foreground mt-1">Guide · Wakeel Journal</p>
            </Link>
            <Link href="/lawyers" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                Wakeel.org for Lawyers
              </p>
              <p className="text-xs text-muted-foreground mt-1">Full feature overview for legal practice</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Spend less time reading, more time practicing law</h2>
          <p className="text-muted-foreground">
            Try Wakeel on your next long case file or client document and see what it flags in
            minutes instead of an afternoon.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">Try Wakeel Free</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/lawyers">Wakeel for lawyers</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
