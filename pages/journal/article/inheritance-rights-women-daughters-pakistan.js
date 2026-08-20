import Link from "next/link";
import {
  CheckCircle2,
  Users,
  ShieldCheck,
  HelpCircle,
  AlertTriangle,
} from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site } from "../../../src/data/marketing";
import { cardBase, headingGradient, sectionHeading } from "../../../src/data/theme";

const heirs = [
  { icon: Users, title: "A wife's share", detail: "A widow is a fixed Quranic heir — generally entitled to one-eighth of her husband's estate if he leaves surviving children, or one-quarter if he doesn't, shared equally among multiple widows where there is more than one." },
  { icon: Users, title: "A daughter's share", detail: "A daughter is a legal heir whose exact share depends on which other relatives survive — the general Quranic principle gives a son twice a daughter's share where they inherit together as sharers and residuaries, but a daughter can also take a larger or different share depending on the full set of heirs. This needs a proper calculation for the actual facts, not a general assumption." },
  { icon: Users, title: "A mother's share", detail: "A mother is generally entitled to one-sixth of her child's estate where the deceased leaves children or two or more siblings, or one-third where they don't — again, subject to the specific combination of surviving relatives." },
  { icon: Users, title: "A sister's share", detail: "A sister can inherit as a Quranic sharer or as a residuary depending on which other relatives survive — her position in the inheritance is meaningfully different depending on whether the deceased left children, a father, or other close relatives." },
];

const enforcement = [
  "Section 498-A of the Pakistan Penal Code — added by the Criminal Law (Third Amendment) Act 2011 — specifically criminalises depriving any woman of her inheritance by deceitful or illegal means, carrying five to ten years' imprisonment or a fine, or both.",
  "The Punjab Enforcement of Women's Property Rights Act 2021 gives a woman deprived of ownership or possession of her property a faster Ombudsperson complaint route, where no court case is already pending on the same property.",
  "A civil suit for declaration, possession, or partition remains available through the ordinary courts where the dispute needs a formal ruling on inheritance shares.",
  "A pressured or informal 'waiver' of an inheritance share is not automatically valid — genuine, informed, free consent is required for a waiver to hold up if it's ever challenged.",
  "Documentation — death certificates, family records, and evidence of exclusion or pressure — strengthens a woman's position whether the matter goes to an Ombudsperson, a Family Court, or a civil court.",
];

const faqs = [
  {
    question: "Do women have inheritance rights in Pakistan?",
    answer:
      "Yes — wives, mothers, daughters, and sisters are all recognized legal heirs under Islamic inheritance law as applied in Pakistan, each with a defined share that depends on the specific combination of relatives who survive the deceased. These are legal entitlements, not something a family can choose to grant or withhold.",
  },
  {
    question: "What share does a wife get from her husband's estate in Pakistan?",
    answer:
      "Generally one-eighth of the estate if her husband leaves surviving children, or one-quarter if he doesn't — shared equally among multiple widows if there is more than one. The exact calculation still depends on the full set of surviving heirs.",
  },
  {
    question: "Can women be denied their inheritance rights in Pakistan?",
    answer:
      "Not legally — every recognized heir is entitled to their share. If a woman is pressured to informally give up her share or excluded from a distribution, this can amount to a criminal offence under Section 498-A PPC and can be challenged through the Ombudsperson (in Punjab) or the courts.",
  },
  {
    question: "How is a woman's inheritance share actually calculated?",
    answer:
      "It depends on the full set of relatives who survive the deceased — a wife, mother, daughter, or sister's exact share can shift significantly depending on who else is entitled to inherit. This calculation (faraid) should be worked out for the actual family situation by a lawyer or qualified scholar, not assumed from a general rule.",
  },
  {
    question: "Can Wakeel.org help a woman understand her inheritance rights?",
    answer:
      "Wakeel.org can explain the general legal framework, the remedies available if rights are being denied, and help organize family and property facts for a lawyer, in plain English or Urdu. It cannot calculate the exact share for a specific family, file a complaint or suit, or represent anyone — a licensed lawyer should handle the actual claim.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Inheritance Rights of Women and Daughters in Pakistan",
    description:
      "The inheritance rights of wives, mothers, daughters, and sisters in Pakistan under Islamic law, and the legal remedies — Section 498-A PPC and the Ombudsperson route — when those rights are denied.",
    author: { "@type": "Organization", name: "Wakeel.org" },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-07-28",
    dateModified: "2026-07-28",
    mainEntityOfPage: `${site.url}/journal/article/inheritance-rights-women-daughters-pakistan`,
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
        name: "Inheritance Rights of Women and Daughters in Pakistan",
        item: `${site.url}/journal/article/inheritance-rights-women-daughters-pakistan`,
      },
    ],
  },
];

const keywords = [
  "inheritance rights of women pakistan",
  "women inheritance law pakistan",
  "wife inheritance share pakistan",
  "mother inheritance share pakistan",
  "section 498-a ppc",
  "women property rights pakistan",
].join(", ");

export default function InheritanceRightsWomenDaughtersPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Inheritance Rights of Women and Daughters in Pakistan"
        description="The inheritance rights of wives, mothers, daughters, and sisters in Pakistan under Islamic law, and the legal remedies when those rights are denied."
        path="/journal/article/inheritance-rights-women-daughters-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Legal Help · Published July 28, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Inheritance Rights of Women and Daughters in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Wives, mothers, daughters, and sisters each hold a distinct, fixed legal right to
            inherit in Pakistan — and the law has real, specific teeth against families who try to
            deny it.
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
                Wives, mothers, daughters, and sisters are all recognized{" "}
                <strong>legal heirs</strong> under Islamic inheritance law, each with a share that
                depends on the full set of surviving relatives. Depriving a woman of her
                inheritance is a specific <strong>criminal offence under Section 498-A PPC</strong>,
                and (in Punjab) the <strong>Enforcement of Women's Property Rights Act 2021</strong>{" "}
                offers a faster Ombudsperson complaint route. A pressured "waiver" is not
                automatically valid.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educate: heirs */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>Four heirs, four different share patterns</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {heirs.map((r) => {
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

      {/* Reveal: enforcement */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className={sectionHeading}>The remedies that actually exist</h2>
          </div>
          <Card className={cardBase}>
            <CardContent className="p-6">
              <ul className="space-y-3">
                {enforcement.map((item) => (
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
                  Explaining the general legal framework and available remedies, in plain English
                  or Urdu, and helping you organize family and property facts for a lawyer.
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
                  It cannot calculate the exact legal share for a specific family, file a
                  complaint or suit, or represent anyone — a licensed lawyer should handle the
                  actual claim.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel about inheritance rights — free
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
              { label: "The Criminal Law (Third Amendment) Act, 2011 (Section 498-A PPC) — National Assembly of Pakistan", href: "https://na.gov.pk/uploads/documents/1329729400_262.pdf" },
              { label: "The Punjab Enforcement of Women's Property Rights Act, 2021 — Punjab Laws (official)", href: "http://punjablaws.gov.pk/laws/2789.html" },
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
            <Link href="/journal/article/daughters-inheritance-rights-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Daughters' Inheritance Rights in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/inheritance-and-property-rights-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Inheritance and Property Rights in Pakistan</p>
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
          <h2 className={sectionHeading}>Being denied an inheritance share?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel to explain your rights and the remedies available — then get a licensed
            lawyer to help you claim what's legally yours.
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
