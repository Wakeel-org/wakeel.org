import Link from "next/link";
import {
  CheckCircle2,
  Gavel,
  Gift,
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

const framework = [
  { icon: Gift, title: "The law that actually governs this: the 1976 Act", detail: "The Dowry and Bridal Gifts (Restriction) Act 1976 applies across all of Pakistan and restricts dowry and bridal gifts given in connection with a marriage — it's a restriction law, not a ban, and it works alongside ordinary marriage and inheritance law." },
  { icon: Scale, title: "Dowry is legally distinct from Haq Mehr", detail: "The Act defines dowry as property given by the bride's own parents to her in connection with the marriage — it specifically does not include Mehr (the dower owed by the husband), which is a separate legal entitlement governed by its own rules." },
  { icon: Gavel, title: "Breaking the restriction carries real penalties", detail: "Violating the Act's provisions can lead to imprisonment of up to six months, a fine of up to PKR 10,000, or both — and any dowry or gifts given in violation can be forfeited to the government for the marriage of poor girls." },
  { icon: AlertTriangle, title: "Family Courts, not ordinary courts, hear these cases", detail: "An offence under the Dowry and Bridal Gifts (Restriction) Act is triable only by a Family Court established under the West Pakistan Family Courts Act 1964 — the same forum that handles most other family law matters." },
];

const faqs = [
  {
    question: "Is dowry illegal in Pakistan?",
    answer:
      "Dowry isn't banned outright, but it is restricted under the Dowry and Bridal Gifts (Restriction) Act 1976, which limits and regulates dowry and bridal gifts given in connection with a marriage, with penalties for violations.",
  },
  {
    question: "What is the difference between dowry and Haq Mehr in Pakistani law?",
    answer:
      "Dowry, as defined by the 1976 Act, is property given by the bride's own parents to her in connection with the marriage. Haq Mehr is a separate, distinct entitlement — the dower a husband owes his wife under Islamic and Pakistani family law — and is specifically excluded from the Act's definition of dowry.",
  },
  {
    question: "What is the punishment for violating dowry restrictions in Pakistan?",
    answer:
      "Up to six months' imprisonment, a fine of up to PKR 10,000, or both. Any dowry or gifts given in contravention of the Act can also be forfeited to the government, to be used for the marriage of poor girls.",
  },
  {
    question: "Which court handles dowry law violations in Pakistan?",
    answer:
      "Offences under the Dowry and Bridal Gifts (Restriction) Act 1976 are triable only by a Family Court established under the West Pakistan Family Courts Act 1964 — the same court system that handles divorce, khula, and maintenance cases.",
  },
  {
    question: "Can Wakeel.org tell me if a specific gift counts as restricted dowry?",
    answer:
      "Wakeel.org can explain how the Dowry and Bridal Gifts (Restriction) Act 1976 generally works and how it's different from Haq Mehr. It cannot classify a specific gift or transaction for you — a licensed family law advocate should assess that.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Dowry Laws in Pakistan",
    description:
      "How dowry is legally restricted in Pakistan under the Dowry and Bridal Gifts (Restriction) Act 1976 — how it differs from Haq Mehr, and the penalties for violations.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-07-03",
    dateModified: "2026-07-03",
    mainEntityOfPage: `${site.url}/journal/article/dowry-laws-pakistan`,
    citation: [
      { "@type": "CreativeWork", name: "The Dowry and Bridal Gifts (Restriction) Act, 1976 — Pakistan Code", url: "https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-bpuUY2Rp-sg-jjjjjjjjjjjjj" },
      { "@type": "CreativeWork", name: "The Dowry and Bridal Gifts (Restriction) Act, 1976 — Khalid Zafar & Associates", url: "https://khalidzafar.com/laws-of-pakistan/dowry/" },
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
        name: "Dowry Laws in Pakistan",
        item: `${site.url}/journal/article/dowry-laws-pakistan`,
      },
    ],
  },
];

const keywords = [
  "dowry laws pakistan",
  "dowry and bridal gifts restriction act 1976",
  "is dowry illegal in pakistan",
  "dowry vs haq mehr",
  "dowry punishment pakistan",
  "bridal gifts law pakistan",
].join(", ");

export default function DowryLawsPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Dowry Laws in Pakistan"
        description="How dowry is legally restricted in Pakistan under the Dowry and Bridal Gifts (Restriction) Act 1976 — how it differs from Haq Mehr, and the penalties for violations."
        path="/journal/article/dowry-laws-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>Legal Help · Published July 3, 2026</p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Dowry Laws in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dowry isn't banned in Pakistan — it's restricted, and confused with Haq Mehr more
            often than it should be.
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
                The{" "}
                <a href="https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-bpuUY2Rp-sg-jjjjjjjjjjjjj" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
                  Dowry and Bridal Gifts (Restriction) Act 1976
                </a>{" "}
                restricts, rather than bans, dowry given by a bride's parents in connection with
                marriage — and is legally separate from <strong>Haq Mehr</strong>, which the Act
                specifically excludes. Violating the Act's restrictions carries up to{" "}
                <strong>6 months' imprisonment</strong>, a fine up to <strong>PKR 10,000</strong>,
                or both, with any restricted gifts subject to forfeiture. Cases are heard in the{" "}
                <strong>Family Court</strong>.
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
          <h2 className={sectionHeading}>Why the dowry-versus-Mehr confusion matters legally</h2>
          <p className="text-muted-foreground leading-relaxed">
            Legal commentary on the 1976 Act, including analysis from{" "}
            <a href="https://mjflaw.pk/2021/03/17/the-law-regarding-bridal-gifts-and-dowry-articles-in-pakistan/" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
              MJF Law
            </a>
            , is careful to draw a sharp line: dowry under this Act is what a bride's own family
            gives her, while Mehr is what the groom owes his wife as a separate marital
            entitlement. Treating the two as interchangeable in a dispute — for example, trying to
            frame an unpaid Mehr claim as a dowry restriction issue — misapplies the wrong legal
            framework entirely, since Mehr disputes are governed by marriage and family law
            provisions, not the 1976 Act.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Getting this distinction right at the outset matters because it determines which
            statute, and which specific remedy, actually applies to your situation — a genuine
            dowry restriction complaint and a Haq Mehr claim are pursued differently, even though
            both end up in Family Court.
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
                  Explaining how dowry restrictions and Haq Mehr differ, and how the 1976 Act
                  generally works, in plain English or Urdu.
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
                  It cannot classify a specific gift or transaction, or file a complaint — a
                  licensed family law advocate should handle that.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel about dowry law — free
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
              { label: "The Dowry and Bridal Gifts (Restriction) Act, 1976 — Pakistan Code (Ministry of Law and Justice)", href: "https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-bpuUY2Rp-sg-jjjjjjjjjjjjj" },
              { label: "The Dowry and Bridal Gifts (Restriction) Act, 1976 — Khalid Zafar & Associates", href: "https://khalidzafar.com/laws-of-pakistan/dowry/" },
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
            <Link href="/journal/article/haq-mehr-rights-before-after-rukhsati-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Haq Mehr: Rights Before and After Rukhsati in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/marriage-laws-pakistan-complete-guide" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Marriage Laws in Pakistan: Complete Guide</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/domestic-violence-laws-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Domestic Violence Laws in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/womens-legal-rights-pakistan-complete-guide" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Women's Legal Rights in Pakistan: Complete Guide</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Have a dowry or Haq Mehr question?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel to explain the difference — then verify with a licensed family law advocate.
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
