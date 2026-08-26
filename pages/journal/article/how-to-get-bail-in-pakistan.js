import Link from "next/link";
import {
  CheckCircle2,
  Scale,
  Clock,
  FileText,
  Gavel,
  HelpCircle,
  AlertTriangle,
} from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site } from "../../../src/data/marketing";
import { cardBase, eyebrow, headingGradient, sectionHeading } from "../../../src/data/theme";

const concepts = [
  { icon: Scale, title: "Bailable vs non-bailable offences", detail: "For a bailable offence, bail is close to a right — the police officer or court is generally bound to grant it. For a non-bailable offence, it's discretionary, decided by a court weighing the specific facts under Sections 497 and 498 CrPC." },
  { icon: FileText, title: "Section 497 CrPC — bail in non-bailable cases", detail: "Sets out when a court may grant bail in a non-bailable offence, and the circumstances (like the severity of the alleged offence or the strength of the evidence) that weigh against it." },
  { icon: Gavel, title: "Section 498 CrPC — the wider power to grant bail", detail: "Gives the High Court, and the Court of Session, a broader power to direct that any person be admitted to bail or that bail already granted be reduced, beyond the specific pre-arrest and post-arrest categories covered elsewhere in the Code." },
  { icon: Clock, title: "Pre-arrest (anticipatory) vs post-arrest bail", detail: "Pre-arrest bail is sought before arrest, typically when someone believes they may be wrongly implicated and wants protection from arrest while the matter is contested. Post-arrest bail is sought after arrest has already occurred. The procedure, forum, and considerations differ between the two." },
];

const steps = [
  "Identify whether the offence is bailable or non-bailable — this determines whether bail is close to automatic or requires a court's discretionary order.",
  "For a non-bailable offence, a bail application is filed before the relevant court (often starting with the Sessions Court, with the High Court as a further option), supported by the facts of the case and the grounds for bail.",
  "The court considers factors including the nature and seriousness of the allegation, the evidence available at that stage, risk of the accused fleeing or tampering with evidence, and any previous criminal record.",
  "If bail is granted, it typically comes with conditions — a surety bond, periodic reporting, or restrictions on movement — that must be complied with, or bail can be cancelled.",
  "If bail is refused at one level, it can be pursued at a higher court, but each application needs fresh grounds or a materially different argument, not a repeat of what was already rejected.",
];

const faqs = [
  {
    question: "How do I get bail in a criminal case in Pakistan?",
    answer:
      "It depends on whether the offence is bailable or non-bailable. For bailable offences, bail is close to a right. For non-bailable offences, a bail application must be filed before the relevant court under Sections 497 or 498 CrPC, and the court decides based on the facts, evidence, and risk factors specific to the case.",
  },
  {
    question: "What's the difference between Section 497 and Section 498 CrPC?",
    answer:
      "Section 497 CrPC specifically governs bail in non-bailable offences, setting out the grounds a court weighs. Section 498 CrPC provides the High Court and Court of Session a wider, more general power to grant or adjust bail beyond those specific circumstances.",
  },
  {
    question: "What is pre-arrest bail?",
    answer:
      "Pre-arrest (anticipatory) bail is sought before arrest, typically by someone who believes they may be wrongly implicated in a case and wants protection from arrest while the underlying dispute is contested through the courts. It follows its own procedure, distinct from post-arrest bail.",
  },
  {
    question: "Can bail be refused even for a first-time accused?",
    answer:
      "Yes — the court's decision depends on the specific facts, the seriousness of the alleged offence, and the strength of the evidence at that stage, not solely on whether the accused has a prior record. Being a first-time accused is a factor courts may consider, but it isn't determinative on its own.",
  },
  {
    question: "Can Wakeel.org help me understand the bail process?",
    answer:
      "Wakeel.org can explain the general bail process, the difference between bailable and non-bailable offences, and help you organize questions and facts for a lawyer, in plain English or Urdu. It cannot file a bail application, represent anyone in court, or predict whether bail will be granted in a specific case — a licensed criminal lawyer should handle the application itself.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Bail in Pakistan: How to Get Bail in a Criminal Case",
    description:
      "How bail actually works in Pakistan under Sections 497 and 498 CrPC — bailable vs non-bailable offences, pre-arrest vs post-arrest bail, and the process for a bail application.",
    author: { "@type": "Organization", name: "Wakeel.org" },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-01-28",
    dateModified: "2026-01-28",
    mainEntityOfPage: `${site.url}/journal/article/how-to-get-bail-in-pakistan`,
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
        name: "Bail in Pakistan: How to Get Bail in a Criminal Case",
        item: `${site.url}/journal/article/how-to-get-bail-in-pakistan`,
      },
    ],
  },
];

const keywords = [
  "how to get bail in pakistan",
  "bail in pakistan",
  "section 497 crpc",
  "section 498 crpc",
  "pre-arrest bail pakistan",
  "bailable vs non-bailable offence pakistan",
].join(", ");

export default function HowToGetBailInPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Bail in Pakistan: How to Get Bail in a Criminal Case"
        description="How bail actually works in Pakistan under Sections 497 and 498 CrPC — bailable vs non-bailable offences, pre-arrest vs post-arrest bail, and the application process."
        path="/journal/article/how-to-get-bail-in-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>
            Legal Help · Published January 28, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Bail in Pakistan: How to Get Bail in a Criminal Case
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            "497 ki zamanat" comes up in almost every criminal case conversation in Pakistan — here's
            what the law actually says about when bail is close to automatic, and when it's a real
            legal battle.
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
                For <strong>bailable offences</strong>, bail is close to a right. For{" "}
                <strong>non-bailable offences</strong>, it's discretionary — a court decides under{" "}
                <strong>Sections 497 and 498 CrPC</strong>, weighing the severity of the allegation,
                the evidence at that stage, and flight or tampering risk. Bail can be sought{" "}
                <strong>pre-arrest</strong> (anticipatory) or <strong>post-arrest</strong>, each with
                its own procedure. A licensed criminal lawyer should file and argue the application.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educate: concepts */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>The framework, piece by piece</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {concepts.map((r) => {
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

      {/* Reveal: process */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>How a bail application actually moves</h2>
          </div>
          <Card className={cardBase}>
            <CardContent className="p-6">
              <ol className="space-y-3">
                {steps.map((step, i) => (
                  <li key={step} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center justify-center h-5 w-5 rounded-full bg-primary/10 text-primary text-xs font-semibold shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
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
                  Explaining the bail process and the difference between bailable and non-bailable
                  offences, in plain English or Urdu, and helping you organize facts and questions
                  for a lawyer.
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
                  It cannot file a bail application, appear in court, or predict whether bail will
                  be granted — this needs a licensed criminal lawyer, ideally engaged immediately.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel to explain the bail process — free
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
              { label: "Code of Criminal Procedure, 1898 — Pakistan Code (Ministry of Law and Justice)", href: "https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apaUY2Npa5lp-sg-jjjjjjjjjjjjj" },
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
            <Link href="/journal/article/arrest-without-warrant-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Arrest Without Warrant in Pakistan: When Is It Legal?</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/false-fir-pakistan-legal-remedies" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">False FIR in Pakistan: Legal Remedies and Consequences</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/criminal-law-in-pakistan-guide" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Criminal Law in Pakistan: Complete Guide</p>
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
          <h2 className={sectionHeading}>Facing a bail situation?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel to explain your options in plain terms — then get a licensed criminal
            lawyer to file and argue your application immediately.
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
