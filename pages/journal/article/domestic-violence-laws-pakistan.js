import Link from "next/link";
import {
  CheckCircle2,
  ShieldAlert,
  Home,
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

const framework = [
  { icon: ShieldAlert, title: "Each province has its own dedicated law now", detail: "There's no single national domestic violence statute — Punjab has the Protection of Women Against Violence Act 2016, Sindh the Domestic Violence (Prevention and Protection) Act 2013, Balochistan its 2014 Act, Khyber Pakhtunkhwa its 2021 Act, and Islamabad Capital Territory its 2020 Act." },
  { icon: Home, title: "Four kinds of protective orders exist", detail: "Courts can issue a Protection Order (stopping further violence or contact), a Residence Order (the right to stay in the shared household or safe alternative housing), a Monetary Order (financial support or maintenance), and a Custody Order (temporary custody of children away from an abusive environment)." },
  { icon: Users, title: "You can go straight to court, not just the police", detail: "A victim can approach the designated court directly, or go through a Women Protection Officer, to seek these orders — filing at a police station is one option, but it isn't the only route into the system." },
  { icon: AlertTriangle, title: "Support infrastructure is part of the legal framework, not an afterthought", detail: "The laws mandate 24/7 helplines, counselling centres, medical facilities, and legal aid offices — meaning the intended response to domestic violence is meant to combine legal orders with practical, immediate support." },
];

const faqs = [
  {
    question: "What law covers domestic violence in Pakistan?",
    answer:
      "Domestic violence is addressed through provincial legislation: Punjab's Protection of Women Against Violence Act 2016, Sindh's Domestic Violence (Prevention and Protection) Act 2013, Balochistan's 2014 Act, Khyber Pakhtunkhwa's 2021 Act, and the Islamabad Capital Territory's 2020 Act — the specific law that applies depends on where you are.",
  },
  {
    question: "What kind of protection can a court order in a domestic violence case?",
    answer:
      "A Protection Order (preventing further violence or contact), a Residence Order (the right to stay in the shared home or alternative safe housing), a Monetary Order (financial support), and a Custody Order (temporary child custody) are all available depending on the province and circumstances.",
  },
  {
    question: "How do I report domestic violence in Pakistan?",
    answer:
      "You can file a complaint at the local police station, contact a Women Protection Cell, or approach the designated court directly (in person or with the help of a Women Protection Officer or lawyer) to seek a protective order.",
  },
  {
    question: "Can I stay in my home after reporting domestic violence?",
    answer:
      "A court can issue a Residence Order specifically to secure your right to remain in the shared household, or to arrange alternative safe housing, as part of the protections available under the relevant provincial domestic violence law.",
  },
  {
    question: "Can Wakeel.org help me file a domestic violence complaint?",
    answer:
      "Wakeel.org can explain which provincial law applies and what kinds of protective orders exist. It cannot file a complaint or petition for a protection order on your behalf — that requires the police, a Women Protection Officer, or a licensed advocate, and in an urgent situation, your safety should come first.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Domestic Violence Laws in Pakistan",
    description:
      "How domestic violence protection works in Pakistan — the provincial laws, the four types of protective orders, and how to seek help.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-07-04",
    dateModified: "2026-07-04",
    mainEntityOfPage: `${site.url}/journal/article/domestic-violence-laws-pakistan`,
    citation: [
      { "@type": "CreativeWork", name: "Domestic Violence (Prevention and Protection) Act, 2020 — National Assembly of Pakistan", url: "https://www.na.gov.pk/uploads/documents/1618907639_620.pdf" },
      { "@type": "CreativeWork", name: "Protection for Domestic Violence Victims and Relief Granted — Baker McKenzie Resource Hub", url: "https://resourcehub.bakermckenzie.com/en/resources/fighting-domestic-violence/asia/pakistan/topics/4-protection-for-domestic-violence-victims-and-relief-granted" },
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
        name: "Domestic Violence Laws in Pakistan",
        item: `${site.url}/journal/article/domestic-violence-laws-pakistan`,
      },
    ],
  },
];

const keywords = [
  "domestic violence laws pakistan",
  "protection of women against violence act 2016",
  "domestic violence protection order pakistan",
  "how to report domestic violence pakistan",
  "women protection officer pakistan",
  "residence order domestic violence pakistan",
].join(", ");

export default function DomesticViolenceLawsPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Domestic Violence Laws in Pakistan"
        description="How domestic violence protection works in Pakistan — the provincial laws, the four types of protective orders, and how to seek help."
        path="/journal/article/domestic-violence-laws-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>Legal Help · Published July 4, 2026</p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Domestic Violence Laws in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every province now has its own law and its own set of protective orders — here's how
            they actually work.
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
                Domestic violence protection in Pakistan runs through{" "}
                <strong>provincial laws</strong> — Punjab, Sindh, Balochistan, KP, and ICT each
                have their own act. A court can grant a <strong>Protection Order</strong>, a{" "}
                <strong>Residence Order</strong> (the right to stay in your home), a{" "}
                <strong>Monetary Order</strong>, or a <strong>Custody Order</strong>. You can go to
                the police, a Women Protection Cell, or directly to the designated court, and the
                laws also require 24/7 helplines and legal aid support.
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

      {/* Reveal: prose with inline sources */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <h2 className={sectionHeading}>Why "which province" is the first question, not an afterthought</h2>
          <p className="text-muted-foreground leading-relaxed">
            Because domestic violence law in Pakistan is provincial rather than federal, the exact
            name of the applicable statute, the specific court designated to hear cases, and even
            some procedural details differ depending on where the household is located — a
            distinction detailed in comparative analysis from{" "}
            <a href="https://resourcehub.bakermckenzie.com/en/resources/fighting-domestic-violence/asia/pakistan/topics/4-protection-for-domestic-violence-victims-and-relief-granted" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
              Baker McKenzie's Fighting Domestic Violence resource hub
            </a>
            . Punjab's law, for instance, is framed as the Protection of Women Against Violence Act
            2016 rather than sharing the "Domestic Violence (Prevention and Protection)" naming
            used by Sindh, Balochistan, and KP — a difference in title, but the underlying
            protective mechanisms (protection, residence, monetary, and custody orders) are
            broadly similar in structure across all of them.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The practical takeaway is that a general answer about "Pakistan's domestic violence
            law" isn't quite accurate — the right first step is identifying which provincial act
            governs the household in question, since that determines the court, the officer, and
            the exact procedure that applies.
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
                  Explaining which provincial law and protective orders generally apply, in plain
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
                  It cannot file a complaint or petition for a protective order, or intervene in an
                  urgent safety situation — please contact the police or a Women Protection Officer
                  immediately if you're in danger.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel about domestic violence law — free
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
          <h2 className="text-lg font-semibold text-foreground mb-4">Sources — check these directly to verify</h2>
          <ul className="space-y-2">
            {[
              { label: "The Domestic Violence (Prevention and Protection) Act, 2020 — National Assembly of Pakistan", href: "https://www.na.gov.pk/uploads/documents/1618907639_620.pdf" },
              { label: "Protection for Domestic Violence Victims and Relief Granted — Baker McKenzie Resource Hub", href: "https://resourcehub.bakermckenzie.com/en/resources/fighting-domestic-violence/asia/pakistan/topics/4-protection-for-domestic-violence-victims-and-relief-granted" },
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
            <Link href="/journal/article/womens-legal-rights-pakistan-complete-guide" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Women's Legal Rights in Pakistan: Complete Guide</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/khula-in-pakistan-procedure-rights" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Khula in Pakistan: Procedure and Rights</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/child-custody-laws-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Child Custody Laws in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/dowry-laws-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Dowry Laws in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Need to understand your protection options?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel how the law generally works — and if you're in immediate danger, contact
            the police or a Women Protection Officer right away.
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
