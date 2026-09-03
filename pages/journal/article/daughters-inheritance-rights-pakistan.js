import Link from "next/link";
import {
  CheckCircle2,
  ScrollText,
  Scale,
  ShieldCheck,
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

const foundations = [
  { icon: ScrollText, title: "A daughter's share is a fixed legal right, not a family favour", detail: "Under Islamic inheritance law, a daughter is a legal heir with a defined share that depends on which other relatives survive the deceased — she inherits by operation of law, not because her family chooses to include her." },
  { icon: Scale, title: "Her exact share depends on the full set of surviving heirs", detail: "Whether a daughter inherits as a Quranic sharer alongside sons, or in a different proportion where she's the only child, or alongside other relatives, changes the specific fraction — this is a real calculation (faraid) that a lawyer or qualified scholar should work out for the actual family situation, not something to estimate informally." },
  { icon: Gavel, title: "Section 4 of the Muslim Family Laws Ordinance 1961 and grandchildren", detail: "This provision addresses what happens when a daughter (or son) predeceases the parent — her children can, in that specific circumstance, step into her place to inherit her share. It has been the subject of ongoing legal debate, including a Federal Shariat Court ruling under appeal before the Supreme Court, so its current application should be confirmed with a lawyer for any specific case." },
  { icon: ShieldCheck, title: "A daughter cannot lawfully be forced to 'waive' her share", detail: "Informal pressure to sign away an inheritance share — common in practice — does not override her legal entitlement, and such waivers obtained through pressure, deception, or without genuine free consent can be challenged." },
];

const remedies = [
  "Section 498-A of the Pakistan Penal Code — added by the Criminal Law (Third Amendment) Act 2011 — specifically criminalises depriving a woman of her inheritance by deceitful or illegal means, with punishment of five to ten years' imprisonment or a fine, or both.",
  "The Punjab Enforcement of Women's Property Rights Act 2021 lets a woman deprived of ownership or possession of her property file a complaint directly with a dedicated Ombudsperson, offering a faster route than a full civil suit where no court case is already pending on the same property.",
  "A civil suit for declaration and possession, or a partition suit where the property is jointly held, remains available where the dispute needs a court's formal ruling on ownership shares.",
  "Documentation matters from the start: death certificates, family tree/heirship records, and any evidence of pressure or exclusion all strengthen a daughter's position if the matter needs to go before an Ombudsperson or a court.",
];

const faqs = [
  {
    question: "Do daughters have a legal right to inherit property in Pakistan?",
    answer:
      "Yes. Under Islamic inheritance law as applied in Pakistan, a daughter is a legal heir with a fixed share that depends on the full set of surviving relatives — this is a legal entitlement, not something a family can choose to grant or withhold.",
  },
  {
    question: "What is the general Islamic inheritance ratio between sons and daughters?",
    answer:
      "Where a daughter inherits alongside a son as Quranic sharers and residuaries, the general Quranic principle gives a son twice the share of a daughter in that specific relationship — but the exact outcome depends heavily on which other relatives survive the deceased, and a daughter can also be the sole or primary heir in other family configurations. The precise calculation should be worked out for the actual facts by a lawyer or qualified scholar, not assumed from a general rule.",
  },
  {
    question: "What can a daughter do if she's denied her inheritance in Pakistan?",
    answer:
      "She can pursue a criminal complaint under Section 498-A PPC (deprivation of a woman's inheritance by deceitful or illegal means), file a complaint with the Ombudsperson under the Punjab Enforcement of Women's Property Rights Act 2021 (in Punjab, where no court case is already pending on the property), or bring a civil suit for declaration, possession, or partition.",
  },
  {
    question: "Is a daughter's signed 'waiver' of her inheritance share legally valid?",
    answer:
      "Not automatically — a waiver obtained through family pressure, deception, or without the daughter's genuine, informed, free consent can be legally challenged. A signature alone doesn't settle the question of whether it was validly given.",
  },
  {
    question: "Can Wakeel.org help a daughter understand or claim her inheritance rights?",
    answer:
      "Wakeel.org can explain the general legal framework and the remedies available, in plain English or Urdu, and help organize family and property facts for a lawyer. It cannot calculate the exact legal share for a specific family, file a complaint or suit, or represent anyone — a licensed lawyer should handle the actual claim.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Daughters' Inheritance Rights in Pakistan: Islamic and Legal Perspective",
    description:
      "A daughter's inheritance rights in Pakistan — the Islamic legal basis, Section 498-A PPC, and the Punjab Enforcement of Women's Property Rights Act 2021 remedy for deprivation.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-05-08",
    dateModified: "2026-05-08",
    mainEntityOfPage: `${site.url}/journal/article/daughters-inheritance-rights-pakistan`,
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
        name: "Daughters' Inheritance Rights in Pakistan",
        item: `${site.url}/journal/article/daughters-inheritance-rights-pakistan`,
      },
    ],
  },
];

const keywords = [
  "daughters inheritance rights pakistan",
  "women inheritance law pakistan",
  "section 498-a ppc",
  "punjab enforcement of women's property rights act 2021",
  "islamic inheritance daughters pakistan",
  "deprivation of inheritance pakistan",
].join(", ");

export default function DaughtersInheritanceRightsPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Daughters' Inheritance Rights in Pakistan: Islamic and Legal Perspective"
        description="A daughter's inheritance rights in Pakistan — the Islamic legal basis, Section 498-A PPC, and the Punjab Enforcement of Women's Property Rights Act 2021 remedy."
        path="/journal/article/daughters-inheritance-rights-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>
            Legal Help · Published May 8, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Daughters' Inheritance Rights in Pakistan: Islamic and Legal Perspective
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A daughter being pressured to "give her share to her brothers" is a pattern many
            families still treat as normal — Pakistani law has real, specific remedies against it.
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
                Daughters are legal heirs with a fixed inheritance share under Islamic law, not a
                discretionary family allowance — the exact share depends on which other relatives
                survive. Depriving a woman of her inheritance by deceitful or illegal means is a{" "}
                <strong>specific criminal offence under Section 498-A PPC</strong>, and (in Punjab)
                the <strong>Enforcement of Women's Property Rights Act 2021</strong> offers a faster
                Ombudsperson complaint route. A pressured "waiver" is not automatically valid.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educate: foundations */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>The legal basis, understood correctly</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {foundations.map((r) => {
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

      {/* Reveal: remedies */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className={sectionHeading}>The remedies that actually exist</h2>
          </div>
          <Card className={cardBase}>
            <CardContent className="p-6">
              <ul className="space-y-3">
                {remedies.map((item) => (
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
                  or Urdu, and helping organize family and property facts for a lawyer.
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
            <Link href="/journal/article/inheritance-and-property-rights-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Inheritance and Property Rights in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/punjab-property-protection-law-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Punjab Property Protection Law: Complete Guide</p>
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
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Being denied your inheritance share?</h2>
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
