import Link from "next/link";
import { BookOpen, CheckCircle2, ExternalLink, HelpCircle, ArrowRight } from "lucide-react";
import Layout from "./Layout";
import MarketingSEO from "./MarketingSEO";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { site } from "../data/marketing";
import { cardBase, eyebrow, headingGradient, heroHeading, sectionHeading } from "../data/theme";

// Wakeel.org capabilities are stated as verified facts (our own product).
// Competitor cells are framed as "what to verify" rather than asserted claims,
// because feature sets change and we do not publish unverified claims about
// other products.
const rows = [
  {
    feature: "Built for Pakistani law",
    wakeel: "Yes — grounded in Pakistani statutes, courts, and procedures",
    verify: "Does it cite Pakistani law, or default to another country's legal system?",
  },
  {
    feature: "English & Urdu",
    wakeel: "Yes — ask in either language",
    verify: "Does it understand and answer in Urdu?",
  },
  {
    feature: "Long document analysis",
    wakeel: "Yes — summarizes PDFs up to 100+ pages",
    verify: "Can it read full documents, and what is the page or size limit?",
  },
  {
    feature: "Source-aware & safe",
    wakeel: "Yes — cites sources, flags uncertainty, reminds you to verify",
    verify: "Does it show sources and avoid presenting output as final legal advice?",
  },
  {
    feature: "Usable free plan",
    wakeel: "Yes — free plan for basic use",
    verify: "Is the free tier genuinely usable, or a short trial before a paywall?",
  },
  {
    feature: "Android, iOS & web",
    wakeel: "Yes — all three",
    verify: "Which platforms does it support?",
  },
];

const wakeelStrengths = [
  "Pakistan-specific legal information",
  "English & Urdu",
  "100+ page document analysis",
  "Source-aware, verify-first answers",
  "Free plan available",
  "Android, iOS & web",
];

const makeFaqs = (competitor, positioning) => [
  {
    question: `What is the difference between Wakeel.org and ${competitor}?`,
    answer: `${positioning} Wakeel.org, by contrast, is a Pakistan-focused AI legal assistant offering bilingual (English and Urdu) legal information, document analysis up to 100+ pages, and source-aware answers, with a free plan across Android, iOS, and web. Evaluate ${competitor} on the same criteria — Pakistani-law grounding, Urdu support, document handling, sources, pricing, and platforms — and confirm its current features directly, since products change over time.`,
  },
  {
    question: `Is Wakeel.org or ${competitor} better for Pakistani law?`,
    answer: `"Better" depends on your need. ${positioning} Use the checklist on this page — grounding in Pakistani law, English and Urdu support, document analysis, source-awareness, a usable free plan, and platform availability — to compare ${competitor} against Wakeel.org for yourself rather than taking either product's marketing at face value.`,
  },
  {
    question: `Can I use ${competitor} for free?`,
    answer: `Check ${competitor}'s current pricing directly, and confirm whether any free tier is genuinely usable or just a short trial before a paywall — this is one of the most common gaps between marketing and reality for AI legal tools in Pakistan. Wakeel.org offers a free plan for basic legal questions and document understanding.`,
  },
  {
    question: `Do Wakeel.org and ${competitor} replace a lawyer?`,
    answer: `No. Neither Wakeel.org nor ${competitor}, nor any AI legal tool, should be treated as a replacement for a licensed advocate. AI legal tools provide legal information and research support to help you prepare — they do not give final legal advice or represent you. For anything you intend to file, sign, pay, or argue in court, consult a licensed advocate.`,
  },
];

const makeSchemas = (comparison, path, faqs) => [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: comparison.title,
    description: `${comparison.positioning} A factual comparison of Wakeel.org and ${comparison.competitor} for Pakistani legal help, based on publicly available information.`,
    url: `${site.url}${path}`,
    author: {
      "@type": "Person",
      name: "Majid Hussain Malik",
      jobTitle: "Co-Founder",
      sameAs: ["https://www.linkedin.com/in/majidhussainmalik/"],
    },
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
      { "@type": "ListItem", position: 3, name: "Comparisons", item: `${site.url}/journal/comparisons` },
      { "@type": "ListItem", position: 4, name: comparison.title, item: `${site.url}${path}` },
    ],
  },
];

const ComparisonPage = ({ comparison }) => {
  const path = `/journal/article/${comparison.slug}`;
  const { competitor, positioning } = comparison;
  const faqs = comparison.faqs?.length ? comparison.faqs : makeFaqs(competitor, positioning);
  const keywords = [
    `wakeel vs ${competitor.toLowerCase()}`,
    `${competitor.toLowerCase()} alternative`,
    `${competitor.toLowerCase()} review`,
    "ai legal app pakistan",
    "best ai lawyer app",
  ].join(", ");

  return (
    <Layout>
      <MarketingSEO
        title={comparison.title}
        description={`${positioning} See how Wakeel.org compares on Pakistani-law grounding, English/Urdu support, document analysis, sources, and pricing.`}
        path={path}
        schema={makeSchemas(comparison, path, faqs)}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-background">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="space-y-5">
            <p className={eyebrow}>
              Comparison
            </p>
            <h1 className={`${heroHeading} ${headingGradient}`}>{comparison.title}</h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              {comparison.positioning} This comparison is based on publicly available information,
              which may change over time. It is meant to help you evaluate legal-information tools
              carefully — not to attack any product. Verify current features for yourself.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <Button asChild size="lg" className="cta-try-free">
                <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                  Try Wakeel Free
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/journal/article/best-ai-legal-apps-pakistan">See all AI legal apps</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About the competitor */}
      <section className="bg-muted/40 py-14 sm:py-16">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className={cardBase}>
            <CardHeader>
              <CardTitle>About {competitor}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">{comparison.positioning}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                This page focuses on the criteria that actually matter for Pakistani legal
                help — Pakistani-law grounding, Urdu support, document handling, source
                transparency, pricing, and platform availability — so you can judge {competitor}{" "}
                against Wakeel.org on facts rather than marketing claims from either side.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Wakeel at a glance */}
      <section className="bg-background py-14 sm:py-16">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className={cardBase}>
            <CardHeader>
              <CardTitle>Wakeel.org at a glance</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid sm:grid-cols-2 gap-3">
                {wakeelStrengths.map((s) => (
                  <li key={s} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Side-by-side table */}
      <section className="bg-muted/40 py-14 sm:py-16">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h2 className={sectionHeading}>Side-by-side comparison</h2>
            <p className="text-muted-foreground mt-2 text-sm">
              Wakeel.org's capabilities are listed as facts. For {competitor}, we list the question
              to ask — confirm each point in the product before relying on it.
            </p>
          </div>
          <Card className={cardBase}>
            <CardContent className="p-0 overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="p-4 text-sm font-semibold align-bottom">Capability</th>
                    <th className="p-4 text-sm font-semibold align-bottom text-primary">Wakeel.org</th>
                    <th className="p-4 text-sm font-semibold align-bottom">
                      What to verify in {competitor}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r.feature} className="border-b border-border last:border-0 align-top">
                      <td className="p-4 text-sm font-medium">{r.feature}</td>
                      <td className="p-4 text-sm text-muted-foreground">
                        <span className="flex gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          {r.wakeel}
                        </span>
                      </td>
                      <td className="p-4 text-sm text-muted-foreground">{r.verify}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>
      </section>

      {comparison.body?.length ? (
        <section className="bg-background py-14 sm:py-16">
          <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            {comparison.body.map((block) => (
              <div key={block.heading} className="space-y-3">
                <h2 className={sectionHeading}>{block.heading}</h2>
                {block.paragraphs.map((paragraph, idx) => (
                  <p key={idx} className="text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}

            {comparison.sources?.length ? (
              <Card className={cardBase}>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <CardTitle className="text-xl">Sources and further reading</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {comparison.sources.map((source) => (
                      <li key={source.url}>
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          className="inline-flex items-start gap-2 text-sm text-primary hover:underline"
                        >
                          <ExternalLink className="h-4 w-4 mt-0.5 shrink-0" />
                          <span>{source.label}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ) : null}
          </div>
        </section>
      ) : null}

      {/* How to choose */}
      <section className="bg-background py-14 sm:py-16">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-4">
          <Card className={cardBase}>
            <CardHeader>
              <CardTitle>How to choose responsibly</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                Pick the tool that explains its legal-safety limits, supports source verification,
                handles Pakistani legal context, and never presents AI output as final legal advice.
              </p>
              <p>
                Always verify important legal information against original sources and a licensed
                advocate before acting.
              </p>
            </CardContent>
          </Card>
          <Card className={cardBase}>
            <CardHeader>
              <CardTitle>Keep exploring</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { label: "Best AI legal apps in Pakistan", href: "/journal/article/best-ai-legal-apps-pakistan" },
                { label: "AI vs hiring a lawyer", href: "/journal/article/ai-vs-lawyer-pakistan" },
                { label: "Wakeel trust framework", href: "/legal-sources" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="flex items-center justify-between rounded-md border-2 border-foreground/15 px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                >
                  {l.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/40 py-14 sm:py-16">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className={sectionHeading}>Frequently asked questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-lg border-2 border-foreground/15 bg-card p-5">
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
};

export default ComparisonPage;
