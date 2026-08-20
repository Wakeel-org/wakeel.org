import Link from "next/link";
import {
  CheckCircle2,
  Scale,
  Users,
  Gavel,
  AlertTriangle as WarnIcon,
  HelpCircle,
  AlertTriangle,
} from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site } from "../../../src/data/marketing";
import { cardBase, headingGradient, sectionHeading } from "../../../src/data/theme";

const framework = [
  { icon: Scale, title: "Section 6 requires Arbitration Council permission, not the wife's signature", detail: "Section 6 of the Muslim Family Laws Ordinance 1961 requires a man who wants to contract a second marriage, while already married, to apply to the Arbitration Council for permission first. It's a permission process through a formal body, not simply a matter of the existing wife signing a consent form." },
  { icon: Users, title: "The existing wife (or wives) get a say in that process", detail: "The Arbitration Council is required to record the existing wife's consent as one of the grounds it considers before granting permission for a subsequent marriage — her position genuinely factors into the decision, even though the permission itself is formally granted by the Council rather than the wife alone." },
  { icon: Gavel, title: "Marrying without permission has real, specific consequences", detail: "Contracting a second marriage without the Arbitration Council's prior permission is punishable — the husband can face imprisonment and/or a fine under Section 6, and separately, the entire haq mehr owed to the existing wife or wives becomes immediately payable in full, whether it was prompt or deferred." },
  { icon: WarnIcon, title: "The marriage itself isn't automatically invalidated", detail: "Case law has generally treated a second marriage contracted without Arbitration Council permission as still religiously and legally valid as a marriage — the penalty attaches to the husband for bypassing the process, rather than voiding the marriage itself. This surprises many people who assume skipping permission undoes the marriage." },
];

const practicalNotes = [
  "If you're a wife whose husband is seeking, or has entered, a second marriage without going through the Arbitration Council, the immediate, enforceable consequence is that your full haq mehr becomes payable — this is worth raising with a lawyer promptly rather than treating it as unenforceable.",
  "If you're a man considering a second marriage, applying to the Arbitration Council first avoids both the criminal exposure and the immediate mehr consequence for your existing wife.",
  "The Arbitration Council process typically involves your local Union Council — starting there, with proper documentation of your existing marriage, is the correct first step.",
  "This is a fact-specific area where local Union Council practice can vary — a lawyer's confirmation of the current procedure in your specific district is worth getting before you rely on a general summary.",
];

const faqs = [
  {
    question: "Does a man need his wife's permission to remarry in Pakistan?",
    answer:
      "Not exactly — the legal requirement under Section 6 of the Muslim Family Laws Ordinance 1961 is to obtain permission from an Arbitration Council, not a signed consent form from the existing wife. That said, the Council is required to consider the existing wife's position as part of its decision, so her voice genuinely matters in the process.",
  },
  {
    question: "What happens if a man remarries without Arbitration Council permission in Pakistan?",
    answer:
      "Two consequences: he can face imprisonment and/or a fine under Section 6, and separately, the full haq mehr owed to the existing wife (or wives) becomes immediately payable in full, regardless of whether it was originally agreed as prompt or deferred.",
  },
  {
    question: "Is a second marriage without permission legally invalid in Pakistan?",
    answer:
      "Generally no — courts have tended to treat the marriage itself as still valid even without Arbitration Council permission; the legal consequences (criminal penalty, immediate full mehr) attach to the husband for bypassing the process rather than voiding the marriage.",
  },
  {
    question: "How does a man apply for permission for a second marriage in Pakistan?",
    answer:
      "By applying to the Arbitration Council, typically constituted through the local Union Council, which considers the application — including the existing wife's position — before deciding whether to grant permission. Local procedure can vary, so confirming the current process with your Union Council or a lawyer is worthwhile.",
  },
  {
    question: "Can Wakeel.org explain second marriage rules to me?",
    answer:
      "Wakeel.org can explain the general legal framework around second marriage, the permission process, and the consequences of skipping it, in plain English or Urdu. It cannot file an Arbitration Council application, confirm your specific rights or obligations, or represent you — a licensed family lawyer should handle your specific situation.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Second Marriage in Pakistan: Is Wife's Permission Required?",
    description:
      "What Section 6 of the Muslim Family Laws Ordinance 1961 actually requires before a second marriage in Pakistan — the Arbitration Council process, the existing wife's role, and the consequences of skipping it.",
    author: { "@type": "Organization", name: "Wakeel.org" },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-04-03",
    dateModified: "2026-04-03",
    mainEntityOfPage: `${site.url}/journal/article/second-marriage-pakistan-wife-permission`,
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
        name: "Second Marriage in Pakistan: Is Wife's Permission Required?",
        item: `${site.url}/journal/article/second-marriage-pakistan-wife-permission`,
      },
    ],
  },
];

const keywords = [
  "second marriage in pakistan",
  "wife permission second marriage pakistan",
  "section 6 muslim family laws ordinance",
  "arbitration council second marriage",
  "polygamy law pakistan",
  "remarriage without permission pakistan",
].join(", ");

export default function SecondMarriagePakistanWifePermission() {
  return (
    <Layout>
      <MarketingSEO
        title="Second Marriage in Pakistan: Is Wife's Permission Required?"
        description="What Section 6 of the Muslim Family Laws Ordinance 1961 actually requires before a second marriage — the Arbitration Council process, the existing wife's role, and the consequences of skipping it."
        path="/journal/article/second-marriage-pakistan-wife-permission"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Legal Help · Published April 3, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Second Marriage in Pakistan: Is Wife's Permission Required?
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The short version people repeat — "he just needs her permission" — isn't quite how the
            law actually works. Here's what Section 6 genuinely requires, and what happens if it's
            skipped.
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
                A second marriage legally requires <strong>Arbitration Council permission</strong>{" "}
                under Section 6 of the Muslim Family Laws Ordinance 1961 — not simply the existing
                wife's signature, though her position is a factor the Council must consider.
                Marrying without permission doesn't void the marriage, but it exposes the husband
                to <strong>imprisonment and/or a fine</strong>, and makes the existing wife's{" "}
                <strong>full haq mehr immediately payable</strong>.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educate: framework */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>What Section 6 actually requires</h2>
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

      {/* Reveal: practical notes */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className={sectionHeading}>What this means in practice</h2>
          </div>
          <Card className={cardBase}>
            <CardContent className="p-6">
              <ul className="space-y-3">
                {practicalNotes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Scale className="h-5 w-5 text-primary shrink-0 mt-0.5" />
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
                  Explaining the general legal framework around second marriage and the
                  consequences of skipping the Arbitration Council process, in plain English or
                  Urdu.
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
                  It cannot file an Arbitration Council application, confirm your specific rights
                  or obligations, or represent you — a licensed family lawyer should handle your
                  specific situation.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel about second marriage rules — free
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
            <Link href="/journal/article/marriage-laws-pakistan-complete-guide" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Marriage Laws in Pakistan: Complete Guide</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/haq-mehr-rights-before-after-rukhsati-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Haq Mehr in Pakistan: Rights Before and After Rukhsati</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/nikah-nama-rights-clauses-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Nikah Nama in Pakistan: Rights, Clauses and Legal Requirements</p>
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
          <h2 className={sectionHeading}>Facing a second marriage situation?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel to explain your rights and obligations — then get a licensed family lawyer
            to guide you through the Arbitration Council process.
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
