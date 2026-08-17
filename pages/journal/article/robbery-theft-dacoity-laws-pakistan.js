import Link from "next/link";
import {
  CheckCircle2,
  ShieldAlert,
  HelpCircle,
  AlertTriangle,
} from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site } from "../../../src/data/marketing";
import { cardBase, headingGradient, sectionHeading } from "../../../src/data/theme";

const offences = [
  { code: "Section 379 PPC", title: "Theft", detail: "Dishonestly taking movable property out of someone's possession without their consent — the baseline offence this whole cluster builds on." },
  { code: "Section 390 PPC", title: "Robbery — the definition", detail: "Theft or extortion becomes robbery when, to commit it or while carrying it away, the offender voluntarily causes or attempts to cause death, hurt, wrongful restraint, or fear of instant death, hurt, or wrongful restraint." },
  { code: "Section 392 PPC", title: "Punishment for robbery", detail: "Prescribes the punishment once conduct meets the Section 390 definition of robbery — meaningfully more severe than simple theft because of the force or fear involved." },
  { code: "Section 395 PPC", title: "Dacoity", detail: "When robbery is committed, or attempted, by five or more persons acting together, it's classified as dacoity — a distinct and more serious offence than robbery by fewer people, reflecting the greater danger of an organised group." },
  { code: "Section 397 PPC", title: "Robbery or dacoity with attempt to cause death or grievous hurt", detail: "An aggravated category carrying enhanced minimum punishment where the offender uses a deadly weapon, or causes or attempts to cause grievous hurt, during the robbery or dacoity." },
  { code: "Section 402 PPC", title: "Belonging to a gang of dacoits", detail: "Criminalises being part of a gang associated for the purpose of habitually committing dacoity, separate from and in addition to punishment for any specific act of dacoity actually committed." },
];

const distinctions = [
  "Theft becomes robbery only when force, injury, or the threat of it is used to take the property or to get away with it — property taken without any such element stays theft, however valuable.",
  "Robbery becomes dacoity purely based on the number of people jointly committing or attempting it (five or more) — not based on how much was taken or how much force was used.",
  "These are all cognizable, non-bailable offences given the potential for violence, meaning police can investigate without a magistrate's prior order, and bail is discretionary rather than automatic.",
  "The specific facts — how many people were involved, whether a weapon was used, whether injury resulted — change which section actually applies and the punishment range, so an accurate legal read of the facts by a lawyer matters more than the label used informally.",
];

const faqs = [
  {
    question: "What's the difference between theft, robbery, and dacoity in Pakistan?",
    answer:
      "Theft (Section 379 PPC) is simply taking someone's movable property dishonestly. It becomes robbery (Sections 390/392 PPC) when force, injury, or the threat of instant death, hurt, or restraint is used to take it or to escape with it. Robbery becomes dacoity (Section 395 PPC) specifically when five or more people jointly commit or attempt it.",
  },
  {
    question: "Is dacoity more serious than robbery under Pakistani law?",
    answer:
      "Yes — dacoity carries more severe punishment than ordinary robbery, reflecting the greater danger and organisation involved when five or more people act together. Certain aggravated forms of both robbery and dacoity — such as those involving a deadly weapon or attempted grievous hurt — carry further enhanced punishment under Section 397 PPC.",
  },
  {
    question: "Is bail available for robbery or dacoity charges in Pakistan?",
    answer:
      "These are non-bailable offences given the element of force or violence involved, meaning bail is a matter of judicial discretion under Sections 497/498 CrPC rather than an automatic right, and courts weigh the specific facts and evidence carefully.",
  },
  {
    question: "What should I do if I've been a victim of robbery or theft in Pakistan?",
    answer:
      "Report it to the police station with jurisdiction as soon as possible so an FIR can be registered under Section 154 CrPC — the sooner it's reported, the better the chances of recovering property and identifying those involved. Document what was taken, when, and any details about how it happened.",
  },
  {
    question: "Can Wakeel.org explain a robbery or theft case to me?",
    answer:
      "Wakeel.org can explain what these sections generally cover and how they differ, in plain English or Urdu, and help you organize the facts of an incident before you report it or see a lawyer. It cannot assess evidence, predict how a specific case will be classified, or represent anyone — a licensed criminal lawyer should review the specific facts.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Sections 392–402 PPC: Robbery, Theft and Dacoity Laws in Pakistan",
    description:
      "What Sections 379 through 402 of the Pakistan Penal Code cover — the legal difference between theft, robbery, and dacoity, and how punishment escalates with each.",
    author: { "@type": "Organization", name: "Wakeel.org" },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-01-10",
    dateModified: "2026-01-10",
    mainEntityOfPage: `${site.url}/journal/article/robbery-theft-dacoity-laws-pakistan`,
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
        name: "Sections 392–402 PPC: Robbery, Theft and Dacoity Laws",
        item: `${site.url}/journal/article/robbery-theft-dacoity-laws-pakistan`,
      },
    ],
  },
];

const keywords = [
  "sections 392-402 ppc",
  "robbery law pakistan",
  "theft law pakistan",
  "dacoity law pakistan",
  "section 395 ppc",
  "section 379 ppc theft",
].join(", ");

export default function RobberyTheftDacoityLawsPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Sections 392–402 PPC: Robbery, Theft and Dacoity Laws"
        description="What Sections 379 through 402 of the Pakistan Penal Code cover — the legal difference between theft, robbery, and dacoity, and how punishment escalates with each."
        path="/journal/article/robbery-theft-dacoity-laws-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Legal Help · Published January 10, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Sections 392–402 PPC: Robbery, Theft and Dacoity Laws
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three words people use almost interchangeably — theft, robbery, dacoity — actually mark
            three distinct offences under the Pakistan Penal Code, each with its own punishment.
            Here's what separates them.
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
                <strong>Theft</strong> (Section 379 PPC) is dishonestly taking property. It becomes{" "}
                <strong>robbery</strong> (Sections 390/392 PPC) when force, injury, or the threat of
                it is used. Robbery becomes <strong>dacoity</strong> (Section 395 PPC) when five or
                more people act together. Aggravated forms involving a weapon or attempted grievous
                hurt (Section 397 PPC) carry enhanced punishment. All are non-bailable offences.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educate: offences */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>The sections, in escalating order</h2>
          </div>
          <div className="space-y-4">
            {offences.map((s) => (
              <Card key={s.code} className={cardBase}>
                <CardContent className="p-5 flex flex-col sm:flex-row gap-4 sm:items-start">
                  <span className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1.5 text-sm font-semibold text-primary shrink-0 self-start">
                    {s.code}
                  </span>
                  <div>
                    <p className="font-semibold text-sm">{s.title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-1">{s.detail}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reveal: distinctions */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className={sectionHeading}>What actually separates these offences</h2>
          </div>
          <Card className={cardBase}>
            <CardContent className="p-6">
              <ul className="space-y-3">
                {distinctions.map((item) => (
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
                  Explaining what these sections generally cover and how they differ, in plain
                  English or Urdu, and helping you organize the facts of an incident before you
                  report it or see a lawyer.
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
                  It cannot assess evidence, predict how a specific case will be classified, or
                  represent anyone — a licensed criminal lawyer should review the specific facts.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel to explain the law — free
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
              { label: "Pakistan Penal Code, 1860 — Pakistan Code (Ministry of Law and Justice)", href: "https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apaUY2Npa5lo-sg-jjjjjjjjjjjjj" },
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
            <Link href="/journal/article/how-to-register-fir-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to Register an FIR in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/how-to-get-bail-in-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Bail in Pakistan: How to Get Bail in a Criminal Case</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/common-legal-sections-dafaat-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Common Legal Sections (Dafaat) in Pakistan Explained</p>
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
          <h2 className={sectionHeading}>Dealing with a theft, robbery, or dacoity case?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel to explain the relevant law and help you organize the facts — then bring it
            to a licensed criminal lawyer.
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
