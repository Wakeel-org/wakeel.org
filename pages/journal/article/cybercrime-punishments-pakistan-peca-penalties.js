import Link from "next/link";
import {
  CheckCircle2,
  Gavel,
  ScaleIcon,
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

const penalties = [
  { section: "Section 3", offence: "Unauthorized access to a computer/information system", punishment: "Up to 3 months imprisonment, fine up to PKR 50,000, or both" },
  { section: "Section 4", offence: "Unauthorized copying or transmission of data", punishment: "Up to 6 months imprisonment, fine up to PKR 100,000, or both" },
  { section: "Section 5", offence: "Interference with an information system or data", punishment: "Up to 2 years imprisonment, fine up to PKR 500,000, or both" },
  { section: "Sections 6–8", offence: "Unauthorized access to, or interference with, critical infrastructure", punishment: "Up to 7 years imprisonment, fine up to PKR 10 million, or both" },
  { section: "Section 10", offence: "Cyber terrorism (critical-infrastructure offences committed to threaten security or coerce the government)", punishment: "Up to 14 years imprisonment, fine up to PKR 50 million, or both" },
  { section: "Section 13", offence: "Electronic forgery", punishment: "Up to 3 years imprisonment and/or fine up to PKR 250,000 (up to 7 years / PKR 5 million if it involves critical infrastructure)" },
  { section: "Section 14", offence: "Electronic fraud", punishment: "Up to 2 years imprisonment, fine up to PKR 10 million, or both" },
  { section: "Section 16", offence: "Unauthorized use of identity information", punishment: "Up to 3 years imprisonment, fine up to PKR 5 million, or both" },
  { section: "Section 20", offence: "Offences against the dignity of a natural person (includes online defamation)", punishment: "Up to 3 years imprisonment, fine up to PKR 1 million, or both" },
  { section: "Section 21", offence: "Offences against modesty (non-consensual intimate images; higher where a minor is involved)", punishment: "Up to 5 years imprisonment and fine up to PKR 5 million (up to 7 years where a minor is involved)" },
  { section: "Section 22", offence: "Child sexual abuse material", punishment: "14 to 20 years imprisonment, fine not less than PKR 1 million" },
  { section: "Section 24", offence: "Cyberstalking", punishment: "Imprisonment and fine as prescribed, with enhanced punishment where the victim is a minor" },
  { section: "Section 26A", offence: "Spreading false information likely to cause fear, panic, or unrest (added by the 2025 amendment)", punishment: "Up to 3 years imprisonment, fine up to PKR 2 million, or both" },
];

const framework = [
  { icon: ScaleIcon, title: "Punishment scales with what was targeted, not just what was done", detail: "The same underlying act — unauthorized access — carries a very different sentence depending on whether it targeted an ordinary system (Section 3, up to 3 months) or critical infrastructure (Sections 6–8, up to 7 years). Courts and investigators look first at what system was involved." },
  { icon: ShieldAlert, title: "Offences against people carry the heaviest everyday penalties", detail: "Sections 20, 21, and 22 — covering dignity, modesty, and child sexual abuse material — carry some of PECA's most serious penalties, up to 20 years for the most severe child-exploitation offences, reflecting how central these provisions are to actual prosecutions." },
  { icon: Gavel, title: "The 2025 amendment added a new offence with real teeth", detail: "Section 26A, added by the PECA Amendment Act 2025, criminalises spreading false information likely to cause fear, panic, or unrest online — up to 3 years imprisonment and a fine of up to PKR 2 million — and is investigated exclusively by the NCCIA." },
  { icon: AlertTriangle, title: "Fines and prison terms are maximums, not fixed sentences", detail: "Every figure in PECA is an upper limit — \"up to\" — not a mandatory sentence. Actual sentencing depends on the facts, any aggravating factors, and the judge's discretion within that ceiling." },
];

const faqs = [
  {
    question: "What is the maximum punishment under PECA 2016?",
    answer:
      "The most severe penalties are for child sexual abuse material and related child-exploitation offences (Sections 22, 22A–22C), carrying 14 to 20 years' imprisonment. Among the broader cybercrime offences, cyber terrorism (Section 10) carries up to 14 years and a fine of up to PKR 50 million.",
  },
  {
    question: "What is the punishment for hacking someone's account in Pakistan?",
    answer:
      "Basic unauthorized access under Section 3 carries up to 3 months' imprisonment and a fine of up to PKR 50,000. If data was copied or transmitted (Section 4), it rises to up to 6 months, and if the system or data was interfered with or damaged (Section 5), up to 2 years.",
  },
  {
    question: "What is the punishment for online defamation in Pakistan?",
    answer:
      "Section 20 of PECA — offences against the dignity of a natural person, which covers most online defamation cases — carries up to 3 years' imprisonment, a fine of up to PKR 1 million, or both.",
  },
  {
    question: "Are PECA punishments the maximum sentence a judge must give?",
    answer:
      "No. Every PECA penalty is expressed as an upper limit (\"up to\"), not a mandatory minimum. A judge has discretion to impose a lower sentence, a fine only, or the maximum, depending on the facts and any aggravating circumstances.",
  },
  {
    question: "Can Wakeel.org tell me the exact punishment I'm facing?",
    answer:
      "Wakeel.org can explain what a specific PECA section generally provides for and how the penalty ranges work. It cannot predict the sentence a specific court will impose in a specific case — sentencing depends on facts only a licensed advocate reviewing your case can assess.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Cybercrime Punishments in Pakistan: The PECA Penalties Guide",
    description:
      "A section-by-section reference to PECA 2016 punishments — imprisonment terms and fines for hacking, electronic fraud, online defamation, cyberstalking, and more.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-09-03",
    dateModified: "2026-09-03",
    mainEntityOfPage: `${site.url}/journal/article/cybercrime-punishments-pakistan-peca-penalties`,
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
        name: "Cybercrime Punishments in Pakistan: The PECA Penalties Guide",
        item: `${site.url}/journal/article/cybercrime-punishments-pakistan-peca-penalties`,
      },
    ],
  },
];

const keywords = [
  "cybercrime punishment pakistan",
  "peca 2016 penalties table",
  "hacking punishment pakistan",
  "section 20 peca punishment",
  "electronic fraud punishment pakistan",
  "peca section 26a punishment",
].join(", ");

export default function CybercrimePunishmentsPakistanPecaPenalties() {
  return (
    <Layout>
      <MarketingSEO
        title="Cybercrime Punishments in Pakistan: The PECA Penalties Guide"
        description="A section-by-section reference to PECA 2016 punishments — imprisonment terms and fines for hacking, electronic fraud, online defamation, cyberstalking, and more."
        path="/journal/article/cybercrime-punishments-pakistan-peca-penalties"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>Legal Help · Published September 3, 2026</p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Cybercrime Punishments in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A section-by-section reference to what PECA 2016 actually punishes — and how much
            prison time or fine each offence carries.
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
                Under{" "}
                <a href="https://www.pakistancode.gov.pk/pdffiles/administrator6a061efe0ed5bd153fa8b79b8eb4cba7.pdf" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
                  PECA 2016
                </a>
                , punishments range from a fine of PKR 50,000 for basic unauthorized access
                (Section 3) up to 20 years' imprisonment for the most serious child-exploitation
                offences (Section 22). Everyday cases like online defamation (Section 20) top out
                at 3 years and PKR 1 million; electronic fraud (Section 14) at 2 years and PKR 10
                million. All figures below are statutory <strong>maximums</strong> — a judge has
                discretion within that ceiling.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educate: framework */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>The pattern behind the penalties</h2>
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

      {/* Penalties table */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className={sectionHeading}>PECA 2016 penalties, section by section</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              A reference table, not an exhaustive list — always confirm the current wording with a
              lawyer or the official statute, since penalties can be revised by amendment.
            </p>
          </div>
          <div className="overflow-x-auto rounded-lg border-2 border-foreground/15 bg-card">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-foreground/15 bg-muted/60 text-left">
                  <th className="px-4 py-3 font-semibold">Section</th>
                  <th className="px-4 py-3 font-semibold">Offence</th>
                  <th className="px-4 py-3 font-semibold">Punishment (maximum)</th>
                </tr>
              </thead>
              <tbody>
                {penalties.map((p, i) => (
                  <tr key={p.section} className={i % 2 === 0 ? "border-b border-foreground/10" : "border-b border-foreground/10 bg-muted/30"}>
                    <td className="px-4 py-3 font-mono text-xs font-semibold whitespace-nowrap align-top">{p.section}</td>
                    <td className="px-4 py-3 align-top">{p.offence}</td>
                    <td className="px-4 py-3 text-muted-foreground align-top">{p.punishment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Reveal: prose with inline sources */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <h2 className={sectionHeading}>Why the section number matters more than the headline</h2>
          <p className="text-muted-foreground leading-relaxed">
            The same real-world incident can be charged under several different PECA sections
            depending on how it's framed by the complainant and investigated by the{" "}
            <a href="https://www.nccia.gov.pk/" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
              National Cyber Crime Investigation Agency (NCCIA)
            </a>{" "}
            — a hacked account used to send fraudulent messages could touch Section 3
            (unauthorized access), Section 14 (electronic fraud), and Section 16 (identity misuse)
            simultaneously, each with its own penalty ceiling. This is one reason two cases that
            sound similar in the news can end in very different sentences: the charge sheet, not
            just the underlying conduct, drives the maximum exposure.
          </p>
        </div>
      </section>

      {/* How Wakeel helps / can't do */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-6">
            <Card className={cardBase}>
              <CardHeader>
                <CheckCircle2 className="h-6 w-6 text-primary" />
                <CardTitle className="text-lg">What Wakeel.org can help with</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Explaining what a specific PECA section covers and its general penalty range, in
                  plain English or Urdu.
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
                  It cannot predict which sections a court will apply to your specific facts or
                  what sentence you're likely to receive — a licensed advocate should handle that.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel about a PECA section — free
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background py-16 sm:py-20">
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
      <section className="bg-muted/40 py-14 sm:py-16">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-semibold text-foreground mb-4">Sources and further reading</h2>
          <ul className="space-y-2">
            {[
              { label: "The Prevention of Electronic Crimes Act, 2016 — Pakistan Code (Ministry of Law and Justice)", href: "https://www.pakistancode.gov.pk/pdffiles/administrator6a061efe0ed5bd153fa8b79b8eb4cba7.pdf" },
              { label: "National Cyber Crime Investigation Agency (NCCIA) — official site", href: "https://www.nccia.gov.pk/" },
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
            <Link href="/journal/article/peca-act-pakistan-complete-guide-cybercrime-laws" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">PECA Act Pakistan: Complete Guide to Cybercrime Laws</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/cybercrime-in-pakistan-types-punishments-remedies" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Cybercrime in Pakistan: Types, Punishments and Legal Remedies</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/online-defamation-law-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Online Defamation Law in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/online-fraud-scams-legal-remedies-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Online Fraud and Scams: Legal Remedies in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Not sure which PECA section applies to you?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel to explain the relevant section — then verify with a licensed advocate
            before you act.
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
