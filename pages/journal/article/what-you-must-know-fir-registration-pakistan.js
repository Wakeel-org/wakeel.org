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
import { site, reviewerSchema } from "../../../src/data/marketing";
import { cardBase, eyebrow, headingGradient, sectionHeading } from "../../../src/data/theme";

const myths = [
  { myth: "\"Only a lawyer can help you file an FIR.\"", truth: "Not true — any citizen can walk into a police station and report a cognizable offence themselves. A lawyer becomes useful when the police refuse to register it, or when the matter gets legally complicated afterward." },
  { myth: "\"Police can refuse if they think it's a 'civil matter.'\"", truth: "For a genuinely cognizable offence, that judgment call isn't the officer's to make at the registration stage. Section 154 CrPC makes registration mandatory once the information discloses a cognizable offence — whether it's ultimately proven is a question for investigation and trial, not a reason to refuse recording it." },
  { myth: "\"You need to know the exact PPC section to file an FIR.\"", truth: "You don't. You report what happened in your own words; the police officer is responsible for identifying and recording the applicable section(s) of law based on your account." },
  { myth: "\"An FIR automatically means someone will be arrested immediately.\"", truth: "Registration and arrest are two separate steps. Registration starts investigation; arrest depends on the nature of the offence, the evidence, and whether it's bailable or non-bailable — it isn't an automatic next step." },
  { myth: "\"If police refuse, there's nothing more you can do.\"", truth: "There is a defined legal route: written escalation to senior police officers, an application to the Ex-Officio Justice of the Peace under Sections 22-A/22-B CrPC, or a private complaint to a Magistrate under Section 200 CrPC. Our escalation guide covers each step." },
  { myth: "\"Only the victim can file an FIR.\"", truth: "Section 154 CrPC speaks of information given by an informant, not only the victim. A relative, a witness or anyone with knowledge of a cognizable offence can report it." },
];

const mustKnowRights = [
  "You're entitled to a copy of the FIR free of cost. It isn't a favour.",
  "You have the right to have the written FIR read back to you before you sign or give a thumb impression.",
  "You can escalate a refusal in writing through the Justice of the Peace or a private complaint — you're not stuck if the station says no.",
  "There's no fee for registering an FIR — if anyone at the station suggests otherwise, that's worth reporting to a senior officer.",
];

const faqs = [
  {
    "question": "What's the biggest myth about FIRs in Pakistan?",
    "answer": "Probably that police can decline a cognizable complaint because they think it's weak or a 'civil matter'. Under Section 154 CrPC, recording information about a cognizable offence is a duty. Whether it's true is tested in investigation and trial."
  },
  {
    "question": "Can someone other than the victim file an FIR?",
    "answer": "Yes. Any person with information about a cognizable offence can report it, such as a family member or a witness. The informant signs the information they give."
  },
  {
    "question": "Do I have to know which PPC section applies?",
    "answer": "No. Describe what happened in your own words. The officer identifies the applicable sections of the Pakistan Penal Code."
  },
  {
    "question": "Does an FIR mean the accused will be arrested immediately?",
    "answer": "No. Arrest is a separate decision that depends on the offence, the evidence and whether it is bailable. Registration only starts the investigation."
  },
  {
    "question": "Is there any fee for registering an FIR?",
    "answer": "No. Registering an FIR is free, and so is your copy. A request for money is misconduct you can report to a senior officer."
  },
  {
    "question": "Can Wakeel.org check whether something I've heard about FIRs is true?",
    "answer": "Yes. Wakeel can explain what the CrPC actually says in plain English or Urdu. For decisions about your own case, speak to a licensed advocate."
  }
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "FIR Myths vs Facts in Pakistan: What the Law Actually Says",
    description:
      "Six common myths about FIRs in Pakistan, from 'only the victim can file' to 'an FIR means instant arrest', corrected against the CrPC, plus the rights every informant has.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    reviewedBy: reviewerSchema,
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-05-29",
    dateModified: "2026-10-22",
    mainEntityOfPage: `${site.url}/journal/article/what-you-must-know-fir-registration-pakistan`,
    citation: [
      { "@type": "CreativeWork", name: "Code of Criminal Procedure, 1898 — Pakistan Code (Ministry of Law and Justice)", url: "https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apaUY2Npa5lp-sg-jjjjjjjjjjjjj" },
      { "@type": "CreativeWork", name: "Section 22-A & 22-B CrPC — Punjab Advocate General's Office explainer", url: "https://advocategeneral.punjab.gov.pk/22A_22B" },
      { "@type": "CreativeWork", name: "Mst. Sughran Bibi v. The State, PLD 2018 SC 595 — Supreme Court of Pakistan judgment", url: "https://asadrahim.com/wp-content/uploads/2018/11/pld-2018-sc-595-sughra-bibi-v-the-state.pdf" },
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
        name: "FIR Myths vs Facts in Pakistan: What the Law Actually Says",
        item: `${site.url}/journal/article/what-you-must-know-fir-registration-pakistan`,
      },
    ],
  },
];

const keywords = [
  "fir myths pakistan",
  "fir facts pakistan",
  "who can file fir pakistan",
  "fir rights pakistan",
  "is fir free pakistan",
  "fir arrest myth"
].join(", ");

export default function WhatYouMustKnowFirRegistrationPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="FIR Myths vs Facts in Pakistan: What the Law Actually Says"
        description="Six common myths about FIRs in Pakistan, from 'only the victim can file' to 'an FIR means instant arrest', corrected against the CrPC, plus the rights every informant has."
        path="/journal/article/what-you-must-know-fir-registration-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>
            Legal Help · Published May 29, 2026 · Updated October 22, 2026 · Reviewed by Legal Team DIGIT</p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            FIR Myths vs Facts in Pakistan: What the Law Actually Says
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
            <h2 className={sectionHeading}>Myth vs fact: six FIR misconceptions</h2>
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
          <h2 className={`${sectionHeading} text-center mb-8`}>Related FIR guides</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/journal/article/how-to-register-fir-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to Register an FIR in Pakistan: Complete Guide</p>
              <p className="text-xs text-muted-foreground mt-1">Start here: the full FIR journey in one page</p>
            </Link>
            <Link href="/journal/article/section-154-crpc-fir-registration-law-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Section 154 CrPC Explained</p>
              <p className="text-xs text-muted-foreground mt-1">The legal duty to register, and what courts say</p>
            </Link>
            <Link href="/journal/article/police-refuse-fir-what-to-do-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Police Won't Register Your FIR? The Escalation Path</p>
              <p className="text-xs text-muted-foreground mt-1">SHO → SP/DPO → Justice of the Peace</p>
            </Link>
            <Link href="/journal/article/false-fir-pakistan-legal-remedies" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">False FIR Against You? Legal Remedies</p>
              <p className="text-xs text-muted-foreground mt-1">For the accused: quashing and Sections 182/211 PPC</p>
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
