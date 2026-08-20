import Link from "next/link";
import {
  CheckCircle2,
  ShieldAlert,
  MapPin,
  HelpCircle,
  AlertTriangle,
} from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site } from "../../../src/data/marketing";
import { cardBase, headingGradient, sectionHeading } from "../../../src/data/theme";

const byRegion = [
  { icon: MapPin, title: "Punjab — 18 for both, since a 2026 Ordinance", detail: "The Punjab Child Marriage Restraint Ordinance 2026, signed into law in February 2026, replaced the province's older 1929-based rules and set the minimum marriage age at 18 for both males and females, removing the previous gender-based gap. Child marriage under it is a non-bailable offence, and marriage registrars can themselves face penalties for registering one." },
  { icon: MapPin, title: "Sindh — 18 for both, since 2013", detail: "The Sindh Child Marriages Restraint Act 2013 was the first provincial law to break from the federal standard, setting 18 as the minimum age for both sexes and prescribing imprisonment for a male adult who contracts a child marriage, and for parents or guardians who permit or fail to prevent one." },
  { icon: MapPin, title: "Islamabad Capital Territory — 18 for both, since 2025", detail: "The Islamabad Capital Territory Child Marriage Restraint Act 2025 set the federal capital's minimum age at 18 for both sexes, barred Nikah Registrars from registering underage marriages, and set penalties reaching up to seven years for those who facilitate or force a child marriage." },
  { icon: MapPin, title: "Khyber Pakhtunkhwa and Balochistan — still 18 (male) / 16 (female)", detail: "These provinces have not yet replaced the original federal Child Marriage Restraint Act 1929, which sets 18 as the minimum age for males and 16 for females — a gap that has been directly challenged in court in other provinces and may be revisited through future provincial legislation." },
];

const practicalNotes = [
  "Marriage age law in Pakistan is genuinely provincial and actively changing — don't assume a rule you've read applies nationwide, or that it's still current, without checking the specific province and date.",
  "In provinces with the reformed 18-for-both standard, Nikah Registrars themselves face penalties for registering an underage marriage — this is meant to stop the marriage at the registration stage, not just punish it after the fact.",
  "Penalties for contracting, facilitating, or failing to prevent a child marriage generally fall on the adult party, parents or guardians, and anyone who solemnizes or registers it — not on the child.",
  "If you're aware of a planned or occurring child marriage, reporting it promptly to local authorities or a lawyer matters more than trying to resolve it informally within the family.",
];

const faqs = [
  {
    question: "What is the legal marriage age in Pakistan?",
    answer:
      "It depends on the province. Sindh (2013), Islamabad Capital Territory (2025), and Punjab (2026 Ordinance) all set the minimum at 18 for both males and females. Khyber Pakhtunkhwa and Balochistan currently still apply the original federal Child Marriage Restraint Act 1929, which sets 18 for males and 16 for females.",
  },
  {
    question: "What changed with Punjab's 2026 child marriage law?",
    answer:
      "The Punjab Child Marriage Restraint Ordinance 2026, signed in February 2026, replaced the province's 1929-based rules and removed the gender gap by setting 18 as the minimum marriage age for both sexes, made child marriage a non-bailable offence, and penalized marriage registrars who register underage marriages.",
  },
  {
    question: "What happens if someone marries a child in Pakistan?",
    answer:
      "In provinces with the reformed standard, this is a serious criminal offence — penalties can include several years of imprisonment and substantial fines for the adult party, and separate penalties for parents, guardians, or registrars who facilitate or fail to prevent it. In KP and Balochistan, the older 1929 Act's penalties apply, which are generally less severe.",
  },
  {
    question: "Is a child marriage legally valid in Pakistan if it happens anyway?",
    answer:
      "This is a genuinely complex area where the criminal penalty for contracting or facilitating the marriage is distinct from the question of the marriage's underlying validity — and the answer can depend on the specific province and facts. This is worth discussing directly with a lawyer rather than assuming either way.",
  },
  {
    question: "Can Wakeel.org explain child marriage law for my province?",
    answer:
      "Wakeel.org can explain the current minimum age and penalties for a specific province, in plain English or Urdu, and point you toward the right authority if you need to report a situation. It cannot file a report, intervene directly, or represent anyone — for anything urgent, contact local authorities or a lawyer immediately.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Child Marriage Laws in Pakistan and Punjab",
    description:
      "How child marriage law differs by province in Pakistan — Sindh, Islamabad, and Punjab's 2026 reform set 18 for both sexes, while KP and Balochistan still apply the older 1929 standard.",
    author: { "@type": "Organization", name: "Wakeel.org" },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-06-27",
    dateModified: "2026-06-27",
    mainEntityOfPage: `${site.url}/journal/article/child-marriage-laws-pakistan-punjab`,
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
        name: "Child Marriage Laws in Pakistan and Punjab",
        item: `${site.url}/journal/article/child-marriage-laws-pakistan-punjab`,
      },
    ],
  },
];

const keywords = [
  "child marriage laws pakistan",
  "punjab child marriage restraint ordinance 2026",
  "sindh child marriages restraint act 2013",
  "minimum marriage age pakistan",
  "child marriage restraint act 1929",
  "islamabad child marriage law",
].join(", ");

export default function ChildMarriageLawsPakistanPunjab() {
  return (
    <Layout>
      <MarketingSEO
        title="Child Marriage Laws in Pakistan and Punjab"
        description="How child marriage law differs by province in Pakistan — Sindh, Islamabad, and Punjab's 2026 reform set 18 for both sexes, while KP and Balochistan still apply the older 1929 standard."
        path="/journal/article/child-marriage-laws-pakistan-punjab"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Legal Help · Published June 27, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Child Marriage Laws in Pakistan and Punjab
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The minimum legal age to marry in Pakistan depends entirely on which province you're
            in — and Punjab's rules changed significantly in early 2026. Here's the current picture,
            region by region.
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
                <strong>Sindh (2013)</strong>, <strong>Islamabad (2025)</strong>, and{" "}
                <strong>Punjab (2026 Ordinance)</strong> all now set the minimum marriage age at{" "}
                <strong>18 for both sexes</strong>, with serious criminal penalties for adults,
                parents, and marriage registrars who facilitate a child marriage.{" "}
                <strong>Khyber Pakhtunkhwa and Balochistan</strong> still apply the original 1929
                federal standard — 18 for males, 16 for females — unless and until they reform it
                too.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educate: by region */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>The rules, region by region</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {byRegion.map((r) => {
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
            <h2 className={sectionHeading}>What matters in practice</h2>
          </div>
          <Card className={cardBase}>
            <CardContent className="p-6">
              <ul className="space-y-3">
                {practicalNotes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <ShieldAlert className="h-5 w-5 text-primary shrink-0 mt-0.5" />
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
                  Explaining the current minimum age and penalties for a specific province, in
                  plain English or Urdu, and pointing you toward the right authority to raise a
                  concern.
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
                  It cannot file a report, intervene directly, or represent anyone — for anything
                  urgent, contact local authorities or a lawyer immediately.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel about the law in your province — free
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
            General educational information, not legal advice. This is recent, actively evolving
            legislation — verify the current status with a licensed advocate. See our{" "}
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
              { label: "Punjab Child Marriage Restraint Ordinance, 2026 — Punjab Code (official)", href: "https://punjabcode.punjab.gov.pk/en/show_article/BjYCNgA2BjZTOg--" },
              { label: "The Sindh Child Marriages Restraint Act, 2013 — Sindh Laws (official)", href: "https://www.sindhlaws.gov.pk/setup/publications_SindhCode/PUB-15-000083-S.pdf" },
              { label: "Islamabad Capital Territory Child Marriage Restraint Act, 2025 — Pakistan Code (Ministry of Law and Justice)", href: "https://www.pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apaUY2Npa5tlZg==-sg-jjjjjjjjjjjjj" },
              { label: "The Child Marriage Restraint Act, 1929 — Punjab Laws (official)", href: "http://punjablaws.gov.pk/laws/147a.html" },
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
          <h2 className={sectionHeading}>Need to understand the law in your province?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel about the current minimum marriage age rules — then involve local
            authorities or a lawyer immediately for anything urgent.
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
