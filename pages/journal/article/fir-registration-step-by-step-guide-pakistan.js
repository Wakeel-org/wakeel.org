import Link from "next/link";
import {
  CheckCircle2,
  HelpCircle,
  AlertTriangle,
  Clock,
} from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site } from "../../../src/data/marketing";
import { cardBase, eyebrow, headingGradient, sectionHeading } from "../../../src/data/theme";

const steps = [
  {
    title: "Identify the right police station",
    detail: "An FIR is generally filed at the police station with territorial jurisdiction over where the offence occurred. If you're unsure which station that is, any station should be able to point you to the correct one, or in genuine emergencies, register a \"Zero FIR\" that later transfers to the right jurisdiction.",
  },
  {
    title: "Prepare your account before you go",
    detail: "Write down what happened in the order it occurred — date, time, place, what you saw or experienced, and any names, descriptions, or evidence you have. A clear account speeds up registration and reduces the chance of details being missed.",
  },
  {
    title: "Report to the officer in charge",
    detail: "Give your account to the Station House Officer (SHO) or the duty officer. For a cognizable offence, Section 154 CrPC makes registration mandatory — the officer does not have discretion to refuse simply because they disagree with your account.",
  },
  {
    title: "Have your statement read back and confirmed",
    detail: "The officer must have the written FIR read over to you before you sign it or give a thumb impression. Listen carefully and flag anything that doesn't match what you actually said.",
  },
  {
    title: "Collect your free copy and note the FIR number",
    detail: "You are entitled to a copy of the FIR free of cost. Keep the FIR number, the police station name, and the date — you'll need all three for any follow-up.",
  },
  {
    title: "If registration is refused, escalate in writing",
    detail: "If the police decline to register a cognizable offence, you can apply to the Ex-Officio Justice of the Peace under Sections 22-A/22-B CrPC to direct registration, or file a private complaint directly with a Magistrate under Section 200 CrPC.",
  },
  {
    title: "Track what happens after registration",
    detail: "Once registered, the case moves into investigation — statements under Sections 161 and 164 CrPC, and eventually a police report (challan) under Section 173 CrPC. Ask the investigating officer how to follow up on progress.",
  },
];

const commonMistakes = [
  "Waiting too long to report — delay can weaken a case, even though there's no fixed deadline for reporting most offences.",
  "Giving a vague or disorganized account that leaves out dates, places, or the sequence of events.",
  "Leaving the station without confirming the FIR number or collecting a free copy.",
  "Assuming a verbal complaint or a diary entry (\"roznamcha\") counts as an FIR — it doesn't, until it's formally registered with a number under Section 154.",
];

const faqs = [
  {
    question: "What are the steps to register an FIR in Pakistan?",
    answer:
      "Broadly: identify the right police station, prepare a clear factual account, report it to the officer in charge, have the written FIR read back to you before signing, collect your free copy and the FIR number, and if registration is refused, escalate through the Justice of the Peace (Sections 22-A/22-B CrPC) or a private complaint under Section 200 CrPC.",
  },
  {
    question: "Do I have to go to the police station in person to file an FIR?",
    answer:
      "Traditionally yes, though some provinces have introduced online or helpline reporting for certain categories of complaint. For most cognizable offences, reporting in person at the station with jurisdiction remains the standard route, and it's worth confirming what digital options (if any) your provincial police department currently offers.",
  },
  {
    question: "What is a Zero FIR?",
    answer:
      "A Zero FIR is one registered at a police station that doesn't have territorial jurisdiction over the offence, used in urgent situations so the report is recorded without delay — it's later transferred to the station that does have jurisdiction for investigation.",
  },
  {
    question: "How long does FIR registration itself take?",
    answer:
      "Registration is meant to be immediate once a cognizable offence is reported — Section 154 CrPC doesn't build in a waiting period. Investigation afterward can take considerably longer, but the act of registering the report shouldn't itself be delayed.",
  },
  {
    question: "Can Wakeel.org walk me through the FIR process step by step?",
    answer:
      "Yes — Wakeel.org can explain each step in plain English or Urdu and help you organize your account before you go to the station. It cannot register the FIR for you or guarantee the police follow the process correctly — if they don't, a licensed advocate can help you escalate.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "FIR Registration in Pakistan: A Step-by-Step Guide",
    description:
      "A numbered, practical walkthrough of registering an FIR in Pakistan under Section 154 CrPC — from identifying the right station to what happens after registration.",
    author: { "@type": "Organization", name: "Wakeel.org" },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-03-22",
    dateModified: "2026-03-22",
    mainEntityOfPage: `${site.url}/journal/article/fir-registration-step-by-step-guide-pakistan`,
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Register an FIR in Pakistan",
    step: steps.map((s) => ({ "@type": "HowToStep", name: s.title, text: s.detail })),
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
        name: "FIR Registration in Pakistan: A Step-by-Step Guide",
        item: `${site.url}/journal/article/fir-registration-step-by-step-guide-pakistan`,
      },
    ],
  },
];

const keywords = [
  "fir registration step by step pakistan",
  "how to file fir pakistan",
  "fir process pakistan",
  "zero fir pakistan",
  "section 154 crpc steps",
  "fir registration guide pakistan",
].join(", ");

export default function FirRegistrationStepByStepGuidePakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="FIR Registration in Pakistan: A Step-by-Step Guide"
        description="A numbered, practical walkthrough of registering an FIR in Pakistan under Section 154 CrPC — from identifying the right station to what happens after registration."
        path="/journal/article/fir-registration-step-by-step-guide-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>
            Legal Help · Published March 22, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            FIR Registration in Pakistan: A Step-by-Step Guide
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Seven steps, in order, from deciding which station to go to, through what happens if
            the police push back, to what comes next once your FIR is actually on record.
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
                Report a cognizable offence to the police station with jurisdiction; registration
                under <strong>Section 154 CrPC</strong> is mandatory, not discretionary. Confirm
                your written statement is read back accurately, collect your{" "}
                <strong>free copy</strong> and FIR number, and if the police refuse to register it,
                escalate through the <strong>Justice of the Peace</strong> (Sections 22-A/22-B
                CrPC) or a private complaint under <strong>Section 200 CrPC</strong>.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educate: steps */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>The process, step by step</h2>
          </div>
          <Card className={cardBase}>
            <CardContent className="p-6">
              <ol className="space-y-5">
                {steps.map((s, i) => (
                  <li key={s.title} className="flex gap-4">
                    <span className="flex items-center justify-center h-7 w-7 rounded-full bg-primary/10 text-primary text-sm font-semibold shrink-0">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-sm">{s.title}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed mt-1">{s.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Reveal: common mistakes */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className={sectionHeading}>Mistakes that slow this process down</h2>
          </div>
          <Card className={cardBase}>
            <CardContent className="p-6">
              <ul className="space-y-3">
                {commonMistakes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
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
                  Explaining each step in plain English or Urdu, helping you organize your account
                  before you go, and explaining what to do if a station refuses to register your
                  report.
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
                  It cannot register the FIR for you, appear at the station, or file a Justice of
                  the Peace application — for escalation, a licensed advocate should take over.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Prepare your account with Wakeel — free
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
            <Link href="/journal/article/how-to-complete-fir-registration-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to Complete FIR Registration in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/what-you-must-know-fir-registration-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">What You Must Know About FIR Registration in Pakistan</p>
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
          <h2 className={sectionHeading}>Ready to file, but want to prepare first?</h2>
          <p className="text-muted-foreground">
            Walk Wakeel through what happened and get help organizing a clear account before you go
            to the station.
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
