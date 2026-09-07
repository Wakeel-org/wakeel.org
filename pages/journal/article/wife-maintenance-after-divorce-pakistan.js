import Link from "next/link";
import {
  CheckCircle2,
  Wallet,
  Calendar,
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

const framework = [
  { icon: Calendar, title: "Iddat maintenance is the clearest post-divorce entitlement", detail: "A divorced wife is generally entitled to maintenance during her iddat period — the waiting period after divorce (roughly three menstrual cycles, or until childbirth if pregnant) — regardless of the reason for the divorce, as a matter of Islamic and Pakistani family law." },
  { icon: Wallet, title: "Beyond iddat, entitlement depends on the specific facts", detail: "Whether maintenance continues meaningfully past the iddat period depends on factors like any agreement between the parties, unpaid dower still owed, and — separately — the father's ongoing duty to maintain any children, which continues regardless of the parents' marital status." },
  { icon: Gavel, title: "The claim route is the same Family Court system", detail: "A maintenance claim after divorce, like maintenance during marriage, can be pursued through the Arbitration Council under the Muslim Family Laws Ordinance 1961 or by filing directly in the Family Court under the Family Courts Act 1964." },
  { icon: AlertTriangle, title: "Don't confuse maintenance with Haq Mehr", detail: "Unpaid Mehr (dower) and post-divorce maintenance are two separate legal claims — a wife may be owed both, but they're assessed and pursued differently, and settling one doesn't automatically resolve the other." },
];

const faqs = [
  {
    question: "Can a wife claim maintenance after divorce in Pakistan?",
    answer:
      "Yes, at minimum during her iddat period — the waiting period following divorce — as a matter of Islamic and Pakistani family law. Whether maintenance extends meaningfully beyond iddat depends on the specific facts, including any unresolved Mehr and the terms of the divorce itself.",
  },
  {
    question: "What is iddat and why does it matter for maintenance?",
    answer:
      "Iddat is the waiting period a woman observes after divorce (or her husband's death) — typically around three menstrual cycles, or until childbirth if she's pregnant. A divorced wife is generally entitled to maintenance from her former husband during this period.",
  },
  {
    question: "Does a father still have to pay child maintenance after divorce?",
    answer:
      "Yes. A father's duty to maintain his children is a separate legal obligation from any maintenance owed to the wife, and it continues after divorce regardless of the parents' marital status — this is a distinct claim from post-divorce spousal maintenance.",
  },
  {
    question: "How do I claim maintenance after my divorce in Pakistan?",
    answer:
      "The same two routes used during marriage apply: applying to an Arbitration Council under the Muslim Family Laws Ordinance 1961, or filing a maintenance suit directly in the Family Court under the Family Courts Act 1964, which can also grant interim maintenance while the case is pending.",
  },
  {
    question: "Can Wakeel.org calculate my post-divorce maintenance entitlement?",
    answer:
      "Wakeel.org can explain how iddat maintenance and post-divorce claims generally work. It cannot calculate a specific entitlement amount or file a claim on your behalf — a licensed family law advocate should handle that.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Wife Maintenance After Divorce in Pakistan",
    description:
      "What a divorced wife is entitled to in Pakistan — iddat-period maintenance, how it differs from Haq Mehr, and how to pursue a post-divorce maintenance claim.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-07-06",
    dateModified: "2026-07-06",
    mainEntityOfPage: `${site.url}/journal/article/wife-maintenance-after-divorce-pakistan`,
    citation: [
      { "@type": "CreativeWork", name: "The Muslim Family Laws Ordinance, 1961 — Ministry of Religious Affairs", url: "https://www.mora.gov.pk/SiteImage/Misc/files/MFLO,%201961.pdf" },
      { "@type": "CreativeWork", name: "Maintenance (Nafaqah) in Islam and Comparative Study — Sindh Judicial Academy", url: "https://sja.gos.pk/wp-content/uploads/2025/11/Article-on-Maintenacne-of-Wife-Children-by-Noor-Kalmati.pdf" },
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
        name: "Wife Maintenance After Divorce in Pakistan",
        item: `${site.url}/journal/article/wife-maintenance-after-divorce-pakistan`,
      },
    ],
  },
];

const keywords = [
  "wife maintenance after divorce pakistan",
  "iddat maintenance pakistan",
  "can wife claim maintenance after divorce",
  "post divorce maintenance pakistan",
  "nafaqah after talaq pakistan",
  "maintenance vs haq mehr",
].join(", ");

export default function WifeMaintenanceAfterDivorcePakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Wife Maintenance After Divorce in Pakistan"
        description="What a divorced wife is entitled to in Pakistan — iddat-period maintenance, how it differs from Haq Mehr, and how to pursue a post-divorce maintenance claim."
        path="/journal/article/wife-maintenance-after-divorce-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>Legal Help · Published July 6, 2026</p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Wife Maintenance After Divorce in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Maintenance doesn't automatically stop the day a marriage ends — here's what actually
            continues, and for how long.
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
                A divorced wife is generally entitled to maintenance during her{" "}
                <strong>iddat period</strong> — the waiting period after divorce — regardless of
                why the marriage ended. Beyond that, entitlement depends on the specific facts,
                including any <strong>unpaid Mehr</strong> (a separate claim). A father's duty to
                maintain his <strong>children</strong> continues regardless of the parents'
                marital status. Claims run through the same{" "}
                <strong>Arbitration Council or Family Court</strong> system used during marriage.
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
          <h2 className={sectionHeading}>Why three separate claims often get bundled into one conversation</h2>
          <p className="text-muted-foreground leading-relaxed">
            Comparative research on maintenance published through the{" "}
            <a href="https://sja.gos.pk/wp-content/uploads/2025/11/Article-on-Maintenacne-of-Wife-Children-by-Noor-Kalmati.pdf" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
              Sindh Judicial Academy
            </a>{" "}
            lays out how nafaqah, Mehr, and child maintenance are each grounded in different legal
            reasoning, even though they're often discussed together after a divorce. Iddat
            maintenance is tied to the woman's status during the waiting period specifically; Mehr
            is a contractual entitlement from the marriage itself, unrelated to how or why it
            ended; and child maintenance flows from the parent-child relationship, not the marital
            relationship at all.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Treating these as one lump "maintenance" claim tends to produce weaker outcomes than
            pursuing each on its own legal footing — which is exactly why a lawyer typically
            structures a post-divorce settlement or claim as separate, clearly itemized demands
            rather than a single vague request.
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
                  Explaining how iddat maintenance, Mehr, and child maintenance differ, and how
                  the claim process generally works.
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
                  It cannot calculate what you're specifically owed or file a claim — a licensed
                  family law advocate should handle that.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel about post-divorce maintenance — free
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
              { label: "The Muslim Family Laws Ordinance, 1961 — Ministry of Religious Affairs", href: "https://www.mora.gov.pk/SiteImage/Misc/files/MFLO,%201961.pdf" },
              { label: "Maintenance (Nafaqah) in Islam and Comparative Study — Sindh Judicial Academy", href: "https://sja.gos.pk/wp-content/uploads/2025/11/Article-on-Maintenacne-of-Wife-Children-by-Noor-Kalmati.pdf" },
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
            <Link href="/journal/article/maintenance-nafaqah-rights-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Maintenance (Nafaqah) Rights in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/haq-mehr-rights-before-after-rukhsati-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Haq Mehr: Rights Before and After Rukhsati in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/how-to-get-divorce-certificate-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to Get a Divorce Certificate in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/child-custody-laws-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Child Custody Laws in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Working out what you're owed after divorce?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel to explain the different claims — then verify with a licensed family law
            advocate.
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
