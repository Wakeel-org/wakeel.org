import Link from "next/link";
import {
  CheckCircle2,
  ShieldCheck,
  Scale,
  Landmark,
  Users,
  HelpCircle,
  AlertTriangle,
} from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site } from "../../../src/data/marketing";
import { cardBase, eyebrow, headingGradient, sectionHeading } from "../../../src/data/theme";

const pillars = [
  { icon: Landmark, title: "The Fundamental Rights chapter is the core", detail: "Articles 8 to 28 of the Constitution guarantee life and liberty, fair trial, equality, freedom of expression and religion, and more — covered fully in our dedicated Constitution guide." },
  { icon: Scale, title: "Two constitutional enforcement routes", detail: "A High Court writ petition under Article 199, or, for matters of genuine public importance, the Supreme Court's original jurisdiction under Article 184(3) — both explained in our writ jurisdiction guide." },
  { icon: Users, title: "A dedicated statutory watchdog", detail: "The National Commission for Human Rights, established under the National Commission for Human Rights Act 2012, can investigate human rights violations on its own initiative or on complaint, visit places of detention, and has civil-court-like powers to summon witnesses and evidence." },
  { icon: ShieldCheck, title: "International commitments feed into domestic protection", detail: "Pakistan is party to core UN human rights treaties, and domestic courts and the NCHR increasingly reference these commitments alongside the Constitution when interpreting rights." },
];

const faqs = [
  {
    question: "What are the main human rights protections in Pakistan's Constitution?",
    answer:
      "The Fundamental Rights chapter, Articles 8 to 28, covering life and liberty, fair trial, equality before law, freedom of expression, religion, and association, among others — with Article 8 making any inconsistent law void.",
  },
  {
    question: "How do you enforce a human rights violation in Pakistan?",
    answer:
      "Typically through a writ petition to the relevant High Court under Article 199, or, for genuine matters of public importance, directly to the Supreme Court under Article 184(3). A complaint can also be raised with the National Commission for Human Rights.",
  },
  {
    question: "What does the National Commission for Human Rights do?",
    answer:
      "Established under the National Commission for Human Rights Act 2012, it can investigate rights violations on its own initiative or on complaint, visit detention centres, review Pakistan's legal framework against human rights standards, and exercises civil-court-like powers during its inquiries.",
  },
  {
    question: "Can an ordinary citizen file a complaint with the NCHR?",
    answer:
      "Yes — the Commission accepts complaints from individuals, in addition to acting on its own initiative, as part of its statutory mandate to promote and protect human rights under the 2012 Act.",
  },
  {
    question: "Can Wakeel.org help with a human rights question?",
    answer:
      "Wakeel.org can explain which constitutional article or remedy may apply to a situation, in plain English or Urdu, and help organize facts for a lawyer or a complaint. It cannot file a writ petition or NCHR complaint, or represent anyone — a licensed advocate should handle that.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Human Rights in Pakistan: Constitutional Rights and Remedies",
    description:
      "How human rights are protected in Pakistan — the Fundamental Rights chapter, the writ jurisdiction and Article 184(3) enforcement routes, and the National Commission for Human Rights.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-01-21",
    dateModified: "2026-01-21",
    mainEntityOfPage: `${site.url}/journal/article/human-rights-pakistan-constitutional-remedies`,
    citation: [
      { "@type": "CreativeWork", name: "The National Commission for Human Rights Act, 2012 — Senate of Pakistan (official)", url: "https://senate.gov.pk/uploads/documents/1358919417_548.pdf" },
      { "@type": "CreativeWork", name: "The Constitution of the Islamic Republic of Pakistan, 1973 (up to date, official) — National Assembly of Pakistan", url: "https://www.na.gov.pk/uploads/documents/1549886415_632.pdf" },
    ],
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
        name: "Human Rights in Pakistan: Constitutional Rights and Remedies",
        item: `${site.url}/journal/article/human-rights-pakistan-constitutional-remedies`,
      },
    ],
  },
];

const keywords = [
  "human rights in pakistan",
  "national commission for human rights pakistan",
  "constitutional rights pakistan",
  "human rights remedies pakistan",
  "article 199 human rights pakistan",
  "nchr complaint pakistan",
].join(", ");

export default function HumanRightsPakistanConstitutionalRemedies() {
  return (
    <Layout>
      <MarketingSEO
        title="Human Rights in Pakistan: Constitutional Rights and Remedies"
        description="How human rights are protected in Pakistan — the Fundamental Rights chapter, writ jurisdiction, Article 184(3), and the National Commission for Human Rights."
        path="/journal/article/human-rights-pakistan-constitutional-remedies"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>
            Legal Help · Published January 21, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Human Rights in Pakistan: Constitutional Rights and Remedies
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pakistan's human rights framework runs on two tracks — the Constitution's own
            guarantees, and a dedicated statutory commission built to enforce them. Here's how both
            actually work.
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
                Human rights in Pakistan are anchored in the Constitution's{" "}
                <strong>Fundamental Rights chapter (Articles 8–28)</strong>, enforced through a{" "}
                <strong>High Court writ petition (Article 199)</strong> or, for matters of public
                importance, the <strong>Supreme Court (Article 184(3))</strong>. The{" "}
                <a href="https://senate.gov.pk/uploads/documents/1358919417_548.pdf" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
                  National Commission for Human Rights Act 2012
                </a>{" "}
                created a dedicated statutory body that can investigate violations and accept
                complaints directly from citizens.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educate: pillars */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>The framework, piece by piece</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {pillars.map((r) => {
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

      {/* Reveal: prose with inline sources */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <h2 className={sectionHeading}>Two tracks, used for different situations</h2>
          <p className="text-muted-foreground leading-relaxed">
            A constitutional petition and an NCHR complaint aren't interchangeable. The{" "}
            <a href="https://senate.gov.pk/uploads/documents/1358919417_548.pdf" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
              National Commission for Human Rights Act 2012
            </a>{" "}
            gives the Commission investigative and civil-court-like powers — summoning witnesses,
            visiting detention centres — but it issues findings and recommendations, not binding
            court orders. A High Court writ petition under Article 199 can compel an authority to
            act or undo an unlawful decision directly, but generally requires showing no adequate
            alternate remedy exists.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            In practice, the two can complement each other — an NCHR inquiry can build a public
            record and pressure for systemic change, while a writ petition addresses your
            individual case directly and enforceably.
          </p>
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
                  Explaining which constitutional article or remedy may apply to a situation, in
                  plain English or Urdu, and helping organize facts for a lawyer or a complaint.
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
                  It cannot file a writ petition or NCHR complaint, or represent anyone — a licensed
                  advocate should handle that.
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
              { label: "The National Commission for Human Rights Act, 2012 — Senate of Pakistan (official)", href: "https://senate.gov.pk/uploads/documents/1358919417_548.pdf" },
              { label: "The Constitution of the Islamic Republic of Pakistan, 1973 (up to date, official) — National Assembly of Pakistan", href: "https://www.na.gov.pk/uploads/documents/1549886415_632.pdf" },
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
            <Link href="/journal/article/constitution-of-pakistan-1973-fundamental-rights" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Constitution of Pakistan 1973: Fundamental Rights</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/writ-jurisdiction-high-courts-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Writ Jurisdiction of High Courts in Pakistan Explained</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/minority-rights-pakistan-constitutional-legal-protections" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Minority Rights in Pakistan: Constitutional and Legal Protections</p>
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
          <h2 className={sectionHeading}>Facing a human rights concern?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel to explain your options — then verify next steps with a licensed advocate.
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
