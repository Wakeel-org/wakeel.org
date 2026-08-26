import Link from "next/link";
import {
  CheckCircle2,
  Heart,
  FileText,
  Landmark,
  ShieldAlert,
  Scale,
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
  { icon: Heart, title: "A valid nikah needs offer, acceptance, and witnesses", detail: "Under Islamic law as applied in Pakistan, a marriage is formed by a clear offer (ijab) and acceptance (qubul) between the parties, in the presence of witnesses — the essential religious requirements the legal system then builds registration and documentation on top of." },
  { icon: FileText, title: "Registration is a separate legal requirement, not optional", detail: "The Muslim Family Laws Ordinance 1961 requires every marriage to be registered by a licensed Nikah Registrar, who records it and reports it to the local Union Council. An unregistered marriage can still be religiously valid, but proving it, and accessing the legal rights that come with it, becomes far harder without a registered nikah nama." },
  { icon: Landmark, title: "The nikah nama is the legal record of the marriage", detail: "This document captures the parties, the haq mehr amount and whether it's prompt or deferred, any special conditions, and whether the wife has been delegated the right of divorce — details covered in depth in our dedicated nikah nama guide." },
  { icon: ShieldAlert, title: "Minimum marriage age is now 18 for both sexes in most of Pakistan", detail: "Sindh (2013), Islamabad Capital Territory (2025), and Punjab (2026 Ordinance) have all set 18 as the minimum marriage age for both males and females. Khyber Pakhtunkhwa and Balochistan still apply the older federal Child Marriage Restraint Act 1929 (18 for males, 16 for females) unless and until they legislate their own reform." },
  { icon: Scale, title: "Second marriage requires Arbitration Council permission", detail: "Section 6 of the Muslim Family Laws Ordinance 1961 requires a man who wants to marry again, while already married, to obtain permission from an Arbitration Council — skipping this step carries real legal and financial consequences, covered in our dedicated guide." },
];

const misconceptions = [
  { title: "\"An unregistered nikah isn't a real marriage.\"", detail: "It can still be religiously and legally valid — but without registration, proving the marriage exists, and exercising rights that depend on it (maintenance, inheritance, custody), becomes significantly harder. Registration is about proof and protection, not validity alone." },
  { title: "\"The nikah nama is just a formality to sign quickly.\"", detail: "Its columns — mehr amount, conditions, and the delegation of divorce — carry real legal weight and are enforceable later. Reading it carefully before signing matters more than most people realise at the time." },
  { title: "\"Marriage age rules are the same across Pakistan.\"", detail: "They're not. Sindh, Islamabad, and Punjab now require 18 for both sexes; Khyber Pakhtunkhwa and Balochistan still apply the older 1929 federal standard (18 male, 16 female) unless a further reform changes that." },
];

const faqs = [
  {
    question: "What makes a marriage legally valid in Pakistan?",
    answer:
      "Religiously, a valid nikah requires offer, acceptance, and witnesses under Islamic law. Legally, the Muslim Family Laws Ordinance 1961 additionally requires the marriage to be registered by a licensed Nikah Registrar and reported to the local Union Council — registration is what makes the marriage easy to prove and enforce rights around later.",
  },
  {
    question: "What is the minimum legal age of marriage in Pakistan?",
    answer:
      "It varies by province. Sindh (2013), Islamabad Capital Territory (2025), and Punjab (2026 Ordinance) set the minimum at 18 for both males and females. Khyber Pakhtunkhwa and Balochistan currently still apply the federal Child Marriage Restraint Act 1929, which sets 18 for males and 16 for females, unless they enact their own reform.",
  },
  {
    question: "Is a marriage valid in Pakistan if it isn't registered?",
    answer:
      "It can still be religiously valid, but an unregistered marriage is much harder to prove and can complicate maintenance, custody, inheritance, and CNIC or passport matters. Registration through a licensed Nikah Registrar is the legal step that protects those rights in practice.",
  },
  {
    question: "Can a man marry a second wife in Pakistan without permission?",
    answer:
      "Not without consequence. Section 6 of the Muslim Family Laws Ordinance 1961 requires permission from an Arbitration Council before contracting a second marriage while already married — proceeding without it carries specific legal and financial consequences, covered in our dedicated guide on second marriage.",
  },
  {
    question: "Can Wakeel.org help with a marriage law question?",
    answer:
      "Wakeel.org can explain marriage registration requirements, nikah nama clauses, age requirements, and second-marriage rules in plain English or Urdu, and help you organize documents and questions for a lawyer. It cannot register a marriage, draft a nikah nama, or represent you — those need a licensed Nikah Registrar or advocate.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Marriage Laws in Pakistan: Complete Guide",
    description:
      "How marriage law actually works in Pakistan — the essentials of a valid nikah, mandatory registration, the nikah nama, provincial minimum age rules, and second marriage requirements.",
    author: { "@type": "Organization", name: "Wakeel.org" },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-01-15",
    dateModified: "2026-01-15",
    mainEntityOfPage: `${site.url}/journal/article/marriage-laws-pakistan-complete-guide`,
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
        name: "Marriage Laws in Pakistan: Complete Guide",
        item: `${site.url}/journal/article/marriage-laws-pakistan-complete-guide`,
      },
    ],
  },
];

const keywords = [
  "marriage laws in pakistan",
  "nikah registration pakistan",
  "muslim family laws ordinance 1961",
  "minimum marriage age pakistan",
  "valid nikah requirements pakistan",
  "marriage certificate pakistan",
].join(", ");

export default function MarriageLawsPakistanCompleteGuide() {
  return (
    <Layout>
      <MarketingSEO
        title="Marriage Laws in Pakistan: Complete Guide"
        description="How marriage law actually works in Pakistan — the essentials of a valid nikah, mandatory registration, the nikah nama, provincial minimum age rules, and second marriage requirements."
        path="/journal/article/marriage-laws-pakistan-complete-guide"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>
            Legal Help · Published January 15, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Marriage Laws in Pakistan: Complete Guide
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Marriage in Pakistan sits at the intersection of Islamic law, federal statute, and
            provincial legislation that's changing faster than most people realise. Start here for
            the framework — every other marriage and family guide on this Journal builds on it.
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
                A valid nikah requires <strong>offer, acceptance, and witnesses</strong> under
                Islamic law, plus <strong>registration</strong> under the Muslim Family Laws
                Ordinance 1961. The <strong>nikah nama</strong> records mehr, conditions, and
                divorce delegation. <strong>Minimum marriage age is 18 for both sexes</strong> in
                Sindh, Islamabad, and (since a 2026 ordinance) Punjab — KP and Balochistan still
                apply the older 1929 standard. A <strong>second marriage</strong> needs Arbitration
                Council permission first.
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

      {/* Reveal: misconceptions */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className={sectionHeading}>Three things people get wrong</h2>
          </div>
          <div className="space-y-4">
            {misconceptions.map((m) => (
              <Card key={m.title} className={cardBase}>
                <CardContent className="p-6">
                  <p className="font-semibold text-sm mb-2">{m.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{m.detail}</p>
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
                  Explaining marriage registration requirements, nikah nama clauses, age rules, and
                  second-marriage requirements, in plain English or Urdu.
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
                  It cannot register a marriage, draft a nikah nama, or represent you — a licensed
                  Nikah Registrar or advocate should handle the specifics.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel about marriage law — free
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
              { label: "Punjab Child Marriage Restraint Ordinance, 2026 — Punjab Code (official)", href: "https://punjabcode.punjab.gov.pk/en/show_article/BjYCNgA2BjZTOg--" },
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
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`${sectionHeading} text-center mb-8`}>Related reading</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/journal/article/nikah-nama-rights-clauses-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Nikah Nama in Pakistan: Rights, Clauses and Legal Requirements</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/divorce-in-pakistan-procedure-rights" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Divorce in Pakistan: Procedure, Rights and Legal Requirements</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/family-law-rights-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Common Family Law Rights in Pakistan</p>
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
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Have a marriage law question?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel in English or Urdu — then verify next steps with a licensed advocate or your
            local Nikah Registrar.
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
