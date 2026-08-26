import Link from "next/link";
import {
  CheckCircle2,
  Clock,
  Globe,
  AlertOctagon,
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

const benefits = [
  { icon: Clock, title: "Speed on the first pass", detail: "Locating and summarizing relevant statutes or case law that would take an hour of manual search can happen in seconds — genuinely valuable for narrowing down where to focus deeper reading." },
  { icon: Globe, title: "Access, any time", detail: "Available outside office hours and without needing to travel to a law library — useful for students, self-represented litigants, and anyone starting research late at night before a deadline." },
];

const risks = [
  { icon: AlertOctagon, title: "Hallucinated or mischaracterized citations", detail: "Even leading commercial legal research tools measurably fabricate or misattribute case citations — this is the single biggest risk and the reason verification can't be skipped." },
  { icon: AlertOctagon, title: "Foreign legal concepts applied to Pakistani questions", detail: "Tools trained mostly on US or UK legal content can confidently misapply concepts that don't map onto Pakistani statute or procedure." },
];

const bestPractices = [
  "Use AI research as a starting point to identify relevant statutes and cases, then verify every citation against the primary source — the official Pakistan Code, a court's own judgment repository, or another authoritative text.",
  "Cross-check anything Pakistan-specific against a tool or source you know is grounded in Pakistani law, rather than trusting a general-purpose model's confidence alone.",
  "Note the date of your research and re-verify if time has passed before you rely on it again — laws and their amendments change.",
  "Keep a clear separation in your own notes between what the AI stated and what you've independently confirmed, so you always know what still needs checking.",
];

const faqs = [
  {
    question: "What are the benefits of AI for legal research in Pakistan?",
    answer:
      "Speed on a first pass — locating and summarizing relevant statutes or case law far faster than manual search — and access outside normal hours, which particularly helps students and self-represented litigants working against a deadline.",
  },
  {
    question: "What are the main risks of AI legal research?",
    answer:
      "Hallucinated or mischaracterized citations (a measured, real risk even in leading commercial tools), and the risk of foreign-trained models confidently misapplying non-Pakistani legal concepts to Pakistani questions.",
  },
  {
    question: "What's the single most important best practice for AI legal research?",
    answer:
      "Verify every citation against a primary source before relying on it — treat AI research output as a lead to follow up on, not a finished, citable answer.",
  },
  {
    question: "Is AI legal research reliable enough for academic work?",
    answer:
      "It's a reasonable starting point for locating sources, but citations and case summaries still need independent verification before being used in an assignment, brief, or paper — the same standard that applies to professional use.",
  },
  {
    question: "How does Wakeel.org approach AI legal research?",
    answer:
      "Wakeel.org aims to be source-aware, citing the actual Pakistani statute or provision it's relying on so you can verify it yourself, in plain English or Urdu. It still cannot guarantee error-free output, so independent verification remains your responsibility for anything important.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "AI Legal Research in Pakistan: Benefits, Risks and Best Practices",
    description:
      "The genuine benefits and real risks of using AI for legal research in Pakistan, and the best practices — verification, primary sourcing — that make it safe to use.",
    author: { "@type": "Organization", name: "Wakeel.org" },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-07-22",
    dateModified: "2026-07-22",
    mainEntityOfPage: `${site.url}/journal/article/ai-legal-research-pakistan-benefits-risks-best-practices`,
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
        name: "AI Legal Research in Pakistan: Benefits, Risks and Best Practices",
        item: `${site.url}/journal/article/ai-legal-research-pakistan-benefits-risks-best-practices`,
      },
    ],
  },
];

const keywords = [
  "ai legal research pakistan",
  "benefits of ai legal research",
  "ai research best practices lawyers",
  "ai legal research risks pakistan",
  "legal research tools pakistan",
].join(", ");

export default function AiLegalResearchPakistanBenefitsRisksBestPractices() {
  return (
    <Layout>
      <MarketingSEO
        title="AI Legal Research in Pakistan: Benefits, Risks and Best Practices"
        description="The genuine benefits and real risks of using AI for legal research in Pakistan, and the best practices that make it safe to use."
        path="/journal/article/ai-legal-research-pakistan-benefits-risks-best-practices"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>
            AI & the Law · Published July 22, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            AI Legal Research in Pakistan: Benefits, Risks and Best Practices
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The honest picture isn't "use it" or "don't" — it's what it's genuinely good for, what
            it isn't, and the specific habits that make the difference.
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
                AI legal research is fast and available any time, but{" "}
                <a href="https://reglab.stanford.edu/publications/hallucination-free-assessing-the-reliability-of-leading-ai-legal-research-tools/" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
                  measurably prone to hallucinated citations
                </a>{" "}
                — even in leading commercial tools. Best practice: treat it as a{" "}
                <strong>starting point</strong>, verify every citation against a{" "}
                <strong>primary source</strong>, and be extra cautious with{" "}
                <strong>Pakistan-specific</strong> questions given most tools are trained mostly
                on foreign legal content.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educate: benefits + risks */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-primary" /> Genuine benefits
              </h2>
              <div className="space-y-4">
                {benefits.map((r) => {
                  const Icon = r.icon;
                  return (
                    <Card key={r.title} className={cardBase}>
                      <CardHeader>
                        <Icon className="h-6 w-6 text-primary" />
                        <CardTitle className="text-base">{r.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground leading-relaxed">{r.detail}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <AlertOctagon className="h-5 w-5 text-primary" /> Real risks
              </h2>
              <div className="space-y-4">
                {risks.map((r) => {
                  const Icon = r.icon;
                  return (
                    <Card key={r.title} className={cardBase}>
                      <CardHeader>
                        <Icon className="h-6 w-6 text-primary" />
                        <CardTitle className="text-base">{r.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground leading-relaxed">{r.detail}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reveal: best practices */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className={sectionHeading}>The best practices that make it safe to use</h2>
          </div>
          <Card className={cardBase}>
            <CardContent className="p-6">
              <ul className="space-y-3">
                {bestPractices.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <ShieldCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
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
                  Source-aware research grounded in the actual Pakistani statute it cites, in plain
                  English or Urdu.
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
                  It cannot guarantee error-free output — independent verification remains your
                  responsibility for anything important.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">Try Wakeel Free</a>
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
            <Link href="/journal/article/ai-hallucinations-legal-research-pakistani-lawyers" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">AI Hallucinations in Legal Research: Risks for Pakistani Lawyers</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/ai-legal-research-tools-lawyers-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">AI Legal Research Tools for Lawyers in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/ai-legal-drafting-pakistan-lawyers-citizens" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">AI Legal Drafting in Pakistan</p>
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
          <h2 className={sectionHeading}>Ready to research with a safety net?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel a question and verify the source it cites — the way AI research should work.
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
