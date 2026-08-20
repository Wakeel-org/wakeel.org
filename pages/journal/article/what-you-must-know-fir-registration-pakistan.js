import Link from "next/link";
import {
  CheckCircle2,
  X,
  HelpCircle,
  AlertTriangle,
  ShieldCheck,
} from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site } from "../../../src/data/marketing";
import { cardBase, headingGradient, sectionHeading } from "../../../src/data/theme";

const myths = [
  { myth: "\"Only a lawyer can help you file an FIR.\"", truth: "Not true — any citizen can walk into a police station and report a cognizable offence themselves. A lawyer becomes useful when the police refuse to register it, or when the matter gets legally complicated afterward." },
  { myth: "\"Police can refuse if they think it's a 'civil matter.'\"", truth: "For a genuinely cognizable offence, that judgment call isn't the officer's to make at the registration stage. Section 154 CrPC makes registration mandatory once the information discloses a cognizable offence — whether it's ultimately proven is a question for investigation and trial, not a reason to refuse recording it." },
  { myth: "\"You need to know the exact PPC section to file an FIR.\"", truth: "You don't. You report what happened in your own words; the police officer is responsible for identifying and recording the applicable section(s) of law based on your account." },
  { myth: "\"An FIR automatically means someone will be arrested immediately.\"", truth: "Registration and arrest are two separate steps. Registration starts investigation; arrest depends on the nature of the offence, the evidence, and whether it's bailable or non-bailable — it isn't an automatic next step." },
  { myth: "\"If police refuse, there's nothing more you can do.\"", truth: "There is: applying to the Ex-Officio Justice of the Peace under Sections 22-A/22-B CrPC to direct registration, or filing a private complaint directly with a Magistrate under Section 200 CrPC." },
  { myth: "\"You have to file at the exact station where the crime happened, no exceptions.\"", truth: "That's the general rule, but in urgent situations any station can register a \"Zero FIR\" and transfer it to the station with jurisdiction, rather than turning you away entirely." },
];

const mustKnowRights = [
  "You're entitled to a free copy of the FIR as registered — this isn't a favour, it's your legal right under Section 154 CrPC.",
  "You have the right to have the written FIR read back to you before you sign or give a thumb impression.",
  "You can escalate a refusal in writing through the Justice of the Peace or a private complaint — you're not stuck if the station says no.",
  "There's no fee for registering an FIR — if anyone at the station suggests otherwise, that's worth reporting to a senior officer.",
];

const faqs = [
  {
    question: "What's the biggest misconception about FIR registration in Pakistan?",
    answer:
      "Probably that police have discretion to refuse a cognizable offence because they consider it a \"civil matter\" or think the complaint is weak. Under Section 154 CrPC, registration is mandatory once the information discloses a cognizable offence — the strength of the case is for investigation and trial to determine, not a reason to withhold registration.",
  },
  {
    question: "Do I need a lawyer to file an FIR?",
    answer:
      "No — any citizen can report a cognizable offence directly to the police. A lawyer becomes genuinely useful if the police refuse to register it, if the matter is legally complex, or once the case moves toward trial.",
  },
  {
    question: "Does registering an FIR mean the accused will be arrested right away?",
    answer:
      "No. Registration begins the investigation process; arrest is a separate decision that depends on the offence, the evidence gathered, and whether it's classified as bailable or non-bailable. The two shouldn't be assumed to happen automatically together.",
  },
  {
    question: "What can I do if police still refuse to register my FIR?",
    answer:
      "Apply to the Ex-Officio Justice of the Peace under Sections 22-A/22-B CrPC, which can direct the police to register it, or file a private complaint directly with a Magistrate under Section 200 CrPC. Both routes exist specifically for this situation.",
  },
  {
    question: "Can Wakeel.org help me understand my rights around FIR registration?",
    answer:
      "Wakeel.org can explain what the law actually requires, correct common misconceptions in plain English or Urdu, and help you understand your options if a station refuses to act. It cannot file anything for you or guarantee an outcome — for escalation, a licensed advocate is the right next step.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What You Must Know About FIR Registration in Pakistan",
    description:
      "Common misconceptions about FIR registration in Pakistan, corrected — plus the rights every citizen actually has under Section 154 CrPC.",
    author: { "@type": "Organization", name: "Wakeel.org" },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-05-29",
    dateModified: "2026-05-29",
    mainEntityOfPage: `${site.url}/journal/article/what-you-must-know-fir-registration-pakistan`,
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
        name: "What You Must Know About FIR Registration in Pakistan",
        item: `${site.url}/journal/article/what-you-must-know-fir-registration-pakistan`,
      },
    ],
  },
];

const keywords = [
  "fir registration myths pakistan",
  "fir rights pakistan",
  "what you must know fir pakistan",
  "fir refusal pakistan",
  "cognizable offence pakistan",
  "section 154 crpc rights",
].join(", ");

export default function WhatYouMustKnowFirRegistrationPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="What You Must Know About FIR Registration in Pakistan"
        description="Common misconceptions about FIR registration in Pakistan, corrected — plus the rights every citizen actually has under Section 154 CrPC."
        path="/journal/article/what-you-must-know-fir-registration-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Legal Help · Published May 29, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            What You Must Know About FIR Registration in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Most of the friction people run into at a police station comes from believing something
            about FIRs that simply isn't true. Here's what's actually a myth, and what the law
            actually guarantees you.
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
                FIR registration for a cognizable offence is <strong>mandatory under Section 154
                CrPC</strong>, not discretionary. You don't need a lawyer, you don't need to know
                the legal section, and arrest isn't automatic once it's filed. You're entitled to a{" "}
                <strong>free copy</strong>, and if the station refuses to register your report, you
                can escalate through the <strong>Justice of the Peace</strong> or a private
                complaint — you're not stuck.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educate: myths */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>Six things people get wrong about FIRs</h2>
          </div>
          <div className="space-y-4">
            {myths.map((m) => (
              <Card key={m.myth} className={cardBase}>
                <CardContent className="p-5 space-y-3">
                  <p className="flex items-start gap-2 text-sm font-semibold">
                    <X className="h-5 w-5 text-muted-foreground/60 shrink-0 mt-0.5" />
                    {m.myth}
                  </p>
                  <p className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    {m.truth}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reveal: rights */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className={sectionHeading}>What you're actually entitled to</h2>
          </div>
          <Card className={cardBase}>
            <CardContent className="p-6">
              <ul className="space-y-3">
                {mustKnowRights.map((item) => (
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
                  Correcting common misconceptions, explaining your rights around FIR registration
                  in plain English or Urdu, and walking you through what to do if a station pushes
                  back.
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
                  It cannot file anything on your behalf, guarantee how a specific station will
                  behave, or replace a licensed advocate once escalation becomes necessary.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel about your FIR rights — free
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
              { label: "Code of Criminal Procedure, 1898 — Pakistan Code (Ministry of Law and Justice)", href: "https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apaUY2Npa5lp-sg-jjjjjjjjjjjjj" },
              { label: "Section 22-A & 22-B CrPC — Punjab Advocate General's Office explainer", href: "https://advocategeneral.punjab.gov.pk/22A_22B" },
              { label: "Mst. Sughran Bibi v. The State, PLD 2018 SC 595 — Supreme Court of Pakistan judgment", href: "https://asadrahim.com/wp-content/uploads/2018/11/pld-2018-sc-595-sughra-bibi-v-the-state.pdf" },
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
            <Link href="/journal/article/fir-registration-step-by-step-guide-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">FIR Registration in Pakistan: A Step-by-Step Guide</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/how-to-complete-fir-registration-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to Complete FIR Registration in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/legal-issues-pakistan/fir-refused-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">What to Do if Police Refuse to Register an FIR</p>
              <p className="text-xs text-muted-foreground mt-1">Guide · Wakeel Journal</p>
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
          <h2 className={sectionHeading}>Been told something about FIRs you're not sure is true?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel and get a plain-language answer grounded in the actual law — then verify
            with a licensed advocate if you need to escalate.
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
