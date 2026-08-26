import Link from "next/link";
import {
  CheckCircle2,
  FileText,
  Clock,
  HelpCircle,
  AlertTriangle,
} from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site } from "../../../src/data/marketing";
import { cardBase, eyebrow, headingGradient, sectionHeading } from "../../../src/data/theme";

const steps = [
  { title: "1. Pronounce the talaq", detail: "The husband pronounces talaq. Under Islamic law as generally applied, the manner and number of pronouncements can affect how it's characterised, but under Pakistani statute law the legal process below is what actually determines when it takes effect." },
  { title: "2. Give written notice to the Union Council Chairman", detail: "Section 7 of the Muslim Family Laws Ordinance 1961 requires the husband, as soon as possible after pronouncing talaq, to give the Chairman of the relevant Union Council written notice of it, along with a copy delivered to the wife." },
  { title: "3. The Chairman constitutes an Arbitration Council", detail: "On receiving the notice, the Chairman is required to constitute an Arbitration Council for the purpose of bringing about reconciliation between the parties — the process is designed to give the marriage one further formal chance before the talaq becomes final." },
  { title: "4. The 90-day period runs", detail: "The talaq does not take legal effect until the expiration of 90 days from the day notice was delivered to the Chairman — unless it's earlier revoked by the husband. This period exists specifically to allow reconciliation efforts to work." },
  { title: "5. It becomes effective, or is revoked", detail: "If the 90 days pass without revocation, the talaq takes legal effect. If the husband revokes it — including through resumption of conjugal relations during the period, depending on the circumstances — it does not." },
  { title: "6. Registration and certificate", detail: "Once effective, the divorce should be registered and a certificate obtained, which matters for remarriage, updating official records, and any later legal proceedings, including custody or maintenance matters." },
];

const commonIssues = [
  "A talaq pronounced but never formally notified to the Union Council creates real legal uncertainty — without the notice and 90-day process, its legal status and effective date can become genuinely disputed later.",
  "Skipping the notice requirement has been treated by courts as a procedural violation with its own consequences, separate from the underlying religious validity question — this is an area where the technical process matters as much as the substance.",
  "A wife who has been informed of a talaq, or who suspects one has occurred without proper notice, should independently confirm with the Union Council whether notice was actually filed — don't rely solely on being told it happened.",
  "The same notice-and-90-day framework applies when a wife exercises a delegated right of divorce (talaq-e-tafweez) under column 18 of the nikah nama.",
];

const faqs = [
  {
    question: "What is the legal procedure for talaq in Pakistan?",
    answer:
      "Under Section 7 of the Muslim Family Laws Ordinance 1961, the husband must give written notice of the talaq to the Union Council Chairman as soon as possible after pronouncing it, with a copy to the wife. The Chairman constitutes an Arbitration Council to attempt reconciliation, and the talaq does not take legal effect until 90 days pass from the notice date, unless revoked earlier.",
  },
  {
    question: "Is a talaq valid in Pakistan without notifying the Union Council?",
    answer:
      "This is a genuinely contested area — the religious pronouncement and the statutory notice-and-90-day process are treated somewhat separately, and skipping the notice has been treated as a procedural violation with its own legal consequences. Given the uncertainty this creates, always ensure proper notice is filed, or get a lawyer's confirmation of where a specific case stands.",
  },
  {
    question: "How long does a talaq take to become final in Pakistan?",
    answer:
      "90 days from the date written notice is delivered to the Union Council Chairman, provided it isn't revoked during that period. This 90-day window exists specifically to allow the Arbitration Council to attempt reconciliation between the parties.",
  },
  {
    question: "Can a talaq be revoked once notice has been given?",
    answer:
      "Yes, within the 90-day period before it takes legal effect — revocation can occur in various ways depending on the specific facts and circumstances, including resumption of conjugal relations in some situations. Once the 90 days pass without revocation, it becomes effective.",
  },
  {
    question: "Can Wakeel.org explain the talaq process to me?",
    answer:
      "Wakeel.org can explain the Union Council notice procedure, the 90-day period, and what registration involves, in plain English or Urdu, and help you understand where a specific situation stands based on what you describe. It cannot file the notice, confirm whether a specific talaq is legally effective, or represent you — a licensed family lawyer should confirm that.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Talaq in Pakistan: Legal Procedure and Requirements",
    description:
      "The exact statutory procedure for talaq in Pakistan under Section 7 of the Muslim Family Laws Ordinance 1961 — Union Council notice, the Arbitration Council, and the 90-day period.",
    author: { "@type": "Organization", name: "Wakeel.org" },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-05-28",
    dateModified: "2026-05-28",
    mainEntityOfPage: `${site.url}/journal/article/talaq-in-pakistan-legal-procedure`,
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "The legal procedure for talaq in Pakistan under Section 7 MFLO 1961",
    step: steps.map((s) => ({ "@type": "HowToStep", name: s.title, text: s.detail })),
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
        name: "Talaq in Pakistan: Legal Procedure and Requirements",
        item: `${site.url}/journal/article/talaq-in-pakistan-legal-procedure`,
      },
    ],
  },
];

const keywords = [
  "talaq procedure pakistan",
  "talaq legal requirements pakistan",
  "section 7 muslim family laws ordinance",
  "union council talaq notice",
  "90 day talaq pakistan",
  "arbitration council reconciliation pakistan",
].join(", ");

export default function TalaqInPakistanLegalProcedure() {
  return (
    <Layout>
      <MarketingSEO
        title="Talaq in Pakistan: Legal Procedure and Requirements"
        description="The exact statutory procedure for talaq in Pakistan under Section 7 of the Muslim Family Laws Ordinance 1961 — Union Council notice, the Arbitration Council, and the 90-day period."
        path="/journal/article/talaq-in-pakistan-legal-procedure"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>
            Legal Help · Published May 28, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Talaq in Pakistan: Legal Procedure and Requirements
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pronouncing talaq is only the first step — Pakistani law layers a specific notice
            procedure and a 90-day window on top of it that determines when, legally, it actually
            takes effect.
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
                Under <strong>Section 7 of the Muslim Family Laws Ordinance 1961</strong>, a talaq
                requires <strong>written notice to the Union Council Chairman</strong>, with a copy
                to the wife. The Chairman constitutes an <strong>Arbitration Council</strong> to
                attempt reconciliation, and the talaq only takes legal effect after{" "}
                <strong>90 days</strong> from the notice date, unless revoked earlier. The same
                process applies to a wife exercising a delegated talaq-e-tafweez.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educate: steps */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>The procedure, step by step</h2>
          </div>
          <Card className={cardBase}>
            <CardContent className="p-6">
              <ol className="space-y-5">
                {steps.map((s) => (
                  <li key={s.title} className="flex gap-4">
                    <FileText className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-sm">{s.title}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed mt-1">{s.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Reveal: common issues */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className={sectionHeading}>Where this process commonly goes wrong</h2>
          </div>
          <Card className={cardBase}>
            <CardContent className="p-6">
              <ul className="space-y-3">
                {commonIssues.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
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
                  Explaining the Union Council notice procedure and the 90-day period, and helping
                  you understand where a specific situation stands based on what you describe, in
                  plain English or Urdu.
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
                  It cannot file the notice, confirm whether a specific talaq is legally effective,
                  or represent you — a licensed family lawyer should confirm that.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel about your situation — free
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
              { label: "The Muslim Family Laws Ordinance, 1961 — Punjab Laws (official)", href: "http://punjablaws.gov.pk/laws/777a.html" },
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
            <Link href="/journal/article/divorce-in-pakistan-procedure-rights" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Divorce in Pakistan: Procedure, Rights and Legal Requirements</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/nikah-nama-rights-clauses-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Nikah Nama in Pakistan: Rights, Clauses and Legal Requirements</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/haq-mehr-rights-before-after-rukhsati-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Haq Mehr in Pakistan: Rights Before and After Rukhsati</p>
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
          <h2 className={sectionHeading}>Dealing with a talaq situation?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel to explain where things stand — then get a licensed family lawyer to confirm
            the legal status and next steps for your specific case.
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
