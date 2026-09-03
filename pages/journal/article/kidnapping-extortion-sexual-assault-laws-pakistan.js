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
import { cardBase, eyebrow, headingGradient, sectionHeading } from "../../../src/data/theme";

const offences = [
  { code: "Sections 359–362 PPC", title: "Kidnapping", detail: "Defines kidnapping from Pakistan and kidnapping from lawful guardianship as distinct categories — the second is particularly relevant to cases involving minors taken without the consent of a parent or lawful guardian." },
  { code: "Sections 363–365 PPC", title: "Punishment for kidnapping and abduction", detail: "Sets punishment for kidnapping generally, and provides enhanced punishment where kidnapping or abduction is committed for a specific unlawful purpose — such as murder, wrongful confinement, or extortion." },
  { code: "Section 383 PPC", title: "Extortion — the definition", detail: "Extortion is intentionally putting someone in fear of injury and thereby dishonestly inducing them to deliver property or a valuable security. The essential elements are the threat, the fear it creates, and the resulting delivery." },
  { code: "Section 384 PPC", title: "Punishment for extortion", detail: "Prescribes the punishment once conduct meets the Section 383 definition — with enhanced categories under related sections where extortion involves a threat of death or grievous hurt, or is committed by putting someone in fear of an accusation of an offence." },
  { code: "Section 354 & 354-A PPC", title: "Assault or use of criminal force with intent to outrage modesty", detail: "Covers assault or criminal force against a woman intended or likely to outrage her modesty, with an aggravated category under 354-A for specific circumstances involving disrobing." },
];

const practicalNotes = [
  "These are all cognizable offences, and several — kidnapping for ransom or extortion in particular — carry severe punishment given the direct threat to safety and liberty involved.",
  "Bail in most of these categories is discretionary rather than automatic, decided under Sections 497/498 CrPC based on the specific facts and evidence.",
  "Reporting quickly matters: for kidnapping and extortion cases especially, an early, well-documented FIR under Section 154 CrPC materially affects how effectively police can investigate and, where relevant, coordinate a response.",
  "Extortion in particular is increasingly pursued alongside cybercrime provisions (PECA 2016) where threats or demands are made electronically — the two frameworks can apply together depending on how the offence was carried out.",
];

const faqs = [
  {
    question: "What's the legal definition of extortion in Pakistan?",
    answer:
      "Under Section 383 PPC, extortion is intentionally putting a person in fear of injury and thereby dishonestly inducing that person to deliver property or a valuable security. Section 384 PPC prescribes the punishment, with enhanced categories for threats of death or grievous hurt.",
  },
  {
    question: "How does Pakistani law define kidnapping?",
    answer:
      "Sections 359–362 PPC distinguish kidnapping from Pakistan (taking someone beyond the country's boundaries without consent) from kidnapping from lawful guardianship (taking a minor or person of unsound mind from a lawful guardian without consent). Sections 363–365 PPC set the punishment, including enhanced punishment where kidnapping is for an unlawful purpose like murder or extortion.",
  },
  {
    question: "What does Section 354 PPC cover?",
    answer:
      "Section 354 PPC covers assault or use of criminal force against a woman with intent to outrage, or knowledge that it's likely to outrage, her modesty. Section 354-A PPC provides an aggravated category for specific circumstances.",
  },
  {
    question: "Is extortion committed online (like via WhatsApp or social media) still covered by these laws?",
    answer:
      "Yes — extortion carried out electronically can fall under Section 383/384 PPC and, depending on how it was carried out, also engage the Prevention of Electronic Crimes Act (PECA) 2016, which governs cybercrime specifically. Both frameworks can apply together.",
  },
  {
    question: "Can Wakeel.org help with a kidnapping, extortion, or sexual assault case?",
    answer:
      "Wakeel.org can explain what these sections generally cover, in plain English or Urdu, and help organize the facts of an incident before you report it or see a lawyer. It cannot assess evidence, provide crisis support, or represent anyone — for these categories of offence, contact the police and a licensed criminal lawyer immediately.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Kidnapping, Extortion and Sexual Assault Laws in Pakistan",
    description:
      "What the Pakistan Penal Code says about kidnapping, extortion, and assault on modesty — the relevant sections, punishment, and how they're procedurally treated.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-02-23",
    dateModified: "2026-02-23",
    mainEntityOfPage: `${site.url}/journal/article/kidnapping-extortion-sexual-assault-laws-pakistan`,
    citation: [
      { "@type": "CreativeWork", name: "Pakistan Penal Code, 1860 — Pakistan Code (Ministry of Law and Justice)", url: "https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apaUY2Npa5lo-sg-jjjjjjjjjjjjj" },
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
        name: "Kidnapping, Extortion and Sexual Assault Laws in Pakistan",
        item: `${site.url}/journal/article/kidnapping-extortion-sexual-assault-laws-pakistan`,
      },
    ],
  },
];

const keywords = [
  "kidnapping law pakistan",
  "extortion law pakistan",
  "sexual assault law pakistan",
  "section 383 ppc extortion",
  "section 354 ppc",
  "kidnapping punishment pakistan",
].join(", ");

export default function KidnappingExtortionSexualAssaultLawsPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Kidnapping, Extortion and Sexual Assault Laws in Pakistan"
        description="What the Pakistan Penal Code says about kidnapping, extortion, and assault on modesty — the relevant sections, punishment, and how they're procedurally treated."
        path="/journal/article/kidnapping-extortion-sexual-assault-laws-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>
            Legal Help · Published February 23, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Kidnapping, Extortion and Sexual Assault Laws in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three serious categories of offence, each defined precisely under the Pakistan Penal
            Code — here's what the law actually says, and what an early, well-documented report
            can do for how a case unfolds.
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
                <strong>Kidnapping</strong> (Sections 359–365 PPC), <strong>extortion</strong>{" "}
                (Sections 383/384 PPC), and <strong>assault on modesty</strong> (Sections 354/354-A
                PPC) are each separately defined offences with their own elements and punishment
                ranges. All are cognizable, and bail is generally discretionary rather than
                automatic. Reporting promptly and involving a licensed criminal lawyer early both
                matter significantly.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educate: offences */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>The sections, defined</h2>
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
                  Explaining what these sections generally cover, in plain English or Urdu, and
                  helping organize the facts of an incident before you report it or see a lawyer.
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
                  It cannot assess evidence, provide crisis support, or represent anyone — for
                  these categories of offence, contact the police and a licensed criminal lawyer
                  immediately.
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
            <Link href="/journal/article/sections-375-376-ppc-rape-law-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Sections 375 & 376 PPC: Rape Laws and Punishment in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/nccia-cyber-crime-complaint-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to File a Cyber Crime Complaint in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/how-to-register-fir-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to Register an FIR in Pakistan</p>
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
          <h2 className={sectionHeading}>Need to understand a case in one of these categories?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel to explain the law in plain terms — then contact the police and a licensed
            criminal lawyer immediately.
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
