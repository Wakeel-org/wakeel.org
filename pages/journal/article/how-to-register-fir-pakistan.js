import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Phone,
  ShieldAlert,
  Gavel,
  Clock,
  HelpCircle,
  BookOpen,
  AlertTriangle,
} from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site, reviewerSchema } from "../../../src/data/marketing";
import { cardBase, eyebrow, headingGradient, sectionHeading } from "../../../src/data/theme";

const steps = [
  { icon: FileText, title: "1. Record the facts while they're fresh", detail: "Date, time, exact place, who was involved, what was said or done, and who saw it. A short written timeline is the most useful thing you can carry to the station. Our FIR checklist covers exactly what to bring." },
  { icon: Gavel, title: "2. Check whether the offence is cognizable", detail: "Police can register an FIR and investigate without a Magistrate's order only for cognizable offences (theft, robbery, hurt, fraud and other serious offences under the Pakistan Penal Code, 1860). For non-cognizable matters, Section 155 CrPC applies instead: the officer notes the information and refers you to a Magistrate." },
  { icon: ShieldAlert, title: "3. Report it at the station with jurisdiction", detail: "Go to the police station covering the area where the offence happened. You can speak your account or hand in a written application; under Section 154 CrPC the officer must reduce oral information to writing, read it back to you and have you sign it." },
  { icon: Clock, title: "4. Leave with the FIR number and a copy", detail: "Note the FIR number, police station and date of registration, and ask for your free copy. These three details are needed for every later step: tracking, bail matters or seeing a lawyer." },
  { icon: AlertTriangle, title: "5. If the station won't register it, escalate", detail: "A refusal is not the end. The usual route is a written application to senior police officers, then an application to the Ex-Officio Justice of the Peace under Sections 22-A/22-B CrPC. Our escalation guide sets out each step." },
  { icon: BookOpen, title: "6. After registration: investigation begins", detail: "An investigating officer records statements (Section 161 CrPC), collects evidence and eventually submits a report to court under Section 173 CrPC (the challan). You can follow progress through your province's police portal or the station." },
];

const commonMistakes = [
  "Treating a roznamcha (daily diary) entry or an informal note as an FIR. Without a number in the FIR register, nothing has been formally registered.",
  "Reporting a non-cognizable matter and expecting an FIR. Ask the officer which category your facts fall into.",
  "Going to the wrong station and leaving when redirected, instead of asking which station has jurisdiction and going there the same day.",
  "Waiting weeks to report. There is usually no fixed deadline, but unexplained delay is often used to question an FIR later.",
  "Not keeping a dated record of each visit if the station delays. That record is what any escalation relies on."
];

const faqs = [
  {
    "question": "What is an FIR in Pakistan?",
    "answer": "An FIR (First Information Report) is the written record of information about a cognizable offence, entered by the officer in charge of a police station in the register kept under Section 154 of the Code of Criminal Procedure, 1898. It is the formal starting point of a police investigation, not a finding that anyone is guilty."
  },
  {
    "question": "Which offences need an FIR, and which don't?",
    "answer": "FIRs are registered for cognizable offences, which police can investigate and arrest for without a warrant. These are listed in Schedule II of the CrPC and include most serious offences such as theft, robbery, hurt and fraud. For non-cognizable offences, Section 155 CrPC applies: the officer records the substance of the information and refers you to a Magistrate."
  },
  {
    "question": "Is filing an FIR free in Pakistan?",
    "answer": "Yes. There is no fee to register an FIR, and you are entitled to a copy free of cost. If anyone at a station asks for money, note their name and raise it with a senior officer."
  },
  {
    "question": "Is an FIR the same as a criminal charge?",
    "answer": "No. An FIR starts an investigation. Charges are framed later by a court, after police submit their report under Section 173 CrPC, and a conviction requires a trial."
  },
  {
    "question": "Do I need a lawyer to register an FIR?",
    "answer": "No. Any person can report a cognizable offence directly. A lawyer becomes valuable if the police refuse to register it, if you are applying to the Justice of the Peace, or once the case moves toward trial."
  },
  {
    "question": "Can Wakeel.org register an FIR for me?",
    "answer": "No. Wakeel.org cannot file an FIR or contact the police. It can help you turn what happened into a clear, dated account, explain terms like 'cognizable' in plain English or Urdu, and help you prepare questions for a lawyer."
  }
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Register an FIR in Pakistan: Complete Guide (2026 Guide)",
    description:
      "A plain-language walkthrough of how FIR registration works under Section 154 CrPC, what to do if police refuse, and how to prepare your facts before you go.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    reviewedBy: reviewerSchema,
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-05-03",
    dateModified: "2026-10-22",
    mainEntityOfPage: `${site.url}/journal/article/how-to-register-fir-pakistan`,
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to register an FIR in Pakistan",
    step: steps.map((s) => ({
      "@type": "HowToStep",
      name: s.title,
      text: s.detail,
    })),
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
        name: "How to Register an FIR in Pakistan: Complete Guide",
        item: `${site.url}/journal/article/how-to-register-fir-pakistan`,
      },
    ],
  },
];

const keywords = [
  "how to register fir in pakistan",
  "fir registration pakistan",
  "fir process pakistan",
  "what is fir pakistan",
  "cognizable offence pakistan",
  "section 154 crpc",
  "fir guide pakistan"
].join(", ");

export default function HowToRegisterFirPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="How to Register an FIR in Pakistan: Complete Guide"
        description="The complete guide to registering an FIR in Pakistan: what an FIR is, cognizable vs non-cognizable offences, the five stages from incident to investigation, and where to go next."
        path="/journal/article/how-to-register-fir-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>
            Legal Help · Published May 3, 2026 · Updated October 22, 2026 · Reviewed by Legal Team DIGIT</p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            How to Register an FIR in Pakistan: Complete Guide
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about the FIR process in Pakistan, from what counts as a
            reportable offence to what happens after registration, with links to a detailed guide
            for each stage.
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
                To register an FIR in Pakistan, report a <strong>cognizable offence</strong> at the police
                station covering the place where it happened. Under <strong>Section 154 CrPC</strong> the
                officer in charge must write down your information, read it back to you, have you sign
                it and enter it in the FIR register. Leave with the <strong>FIR number</strong> and a
                free copy. Non-cognizable matters go to a Magistrate under <strong>Section 155</strong>,
                and if police refuse a cognizable case you can apply to the <strong>Justice of the
                Peace</strong> under Sections 22-A/22-B CrPC.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>The FIR journey at a glance</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              This isn't a copy-paste of the law — it's what actually helps once you're standing
              in front of a duty officer with a real problem and limited time.
            </p>
          </div>
          <div className="space-y-4">
            {steps.map((s) => {
              const Icon = s.icon;
              return (
                <Card key={s.title} className={cardBase}>
                  <CardContent className="p-6 flex gap-4">
                    <Icon className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-base mb-1">{s.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{s.detail}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Common mistakes */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className={sectionHeading}>Mistakes that cost people time</h2>
          </div>
          <Card className={cardBase}>
            <CardContent className="p-6">
              <ul className="space-y-3">
                {commonMistakes.map((m) => (
                  <li key={m} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <AlertTriangle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{m}</span>
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
                  Turning a stressful, jumbled memory into a clear written timeline. Explaining
                  what "cognizable offence" or "Section 22-A application" actually means in simple
                  English or Urdu. Helping you list the documents and facts a lawyer or SP's office
                  will ask for. Available anytime, in the language you're most comfortable in.
                </p>
              </CardContent>
            </Card>
            <Card className={cardBase}>
              <CardHeader>
                <ShieldAlert className="h-6 w-6 text-primary" />
                <CardTitle className="text-lg">What it cannot do</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  It cannot register an FIR, contact or pressure police on your behalf, guarantee
                  that any report will be filed, or tell you with certainty how an officer,
                  Magistrate, or court will treat your specific facts. For anything you're about to
                  file or argue, verify with a licensed advocate first.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Organize your facts with Wakeel Free
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
            This article explains general legal procedure under Pakistani law for educational
            purposes and is not legal advice. Laws and practice can vary by province and change
            over time — verify current procedure with a licensed advocate or the relevant police
            station / court before acting. See our{" "}
            <Link href="/disclaimer" className="text-primary hover:underline">full disclaimer</Link>.
          </p>
        </div>
      </section>

      {/* Related reading */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`${sectionHeading} text-center mb-8`}>Detailed FIR guides for each situation</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/journal/article/fir-registration-step-by-step-guide-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">At the Police Station: What Happens When You File an FIR</p>
              <p className="text-xs text-muted-foreground mt-1">The in-person walkthrough, desk to signed copy</p>
            </Link>
            <Link href="/journal/article/how-to-complete-fir-registration-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">FIR Checklist: What to Bring and Verify Before You Sign</p>
              <p className="text-xs text-muted-foreground mt-1">Documents to prepare and details to check</p>
            </Link>
            <Link href="/journal/article/what-you-must-know-fir-registration-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">FIR Myths vs Facts in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Misconceptions corrected, rights listed</p>
            </Link>
            <Link href="/journal/article/police-refuse-fir-what-to-do-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Police Won't Register Your FIR? The Escalation Path</p>
              <p className="text-xs text-muted-foreground mt-1">SHO → SP/DPO → Justice of the Peace</p>
            </Link>
            <Link href="/journal/article/section-154-crpc-fir-registration-law-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Section 154 CrPC Explained</p>
              <p className="text-xs text-muted-foreground mt-1">The legal duty to register, and what courts say</p>
            </Link>
            <Link href="/journal/article/fir-status-check-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to Check FIR Status Online in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Tracking your case after registration</p>
            </Link>
            <Link href="/journal/article/false-fir-pakistan-legal-remedies" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">False FIR Against You? Legal Remedies</p>
              <p className="text-xs text-muted-foreground mt-1">For the accused: quashing and Sections 182/211 PPC</p>
            </Link>
            <Link href="/journal/legal-issues-pakistan/fir-registration-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">FIR Registration Help with Wakeel</p>
              <p className="text-xs text-muted-foreground mt-1">Prepare your written statement with Wakeel</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Not sure where your case stands?</h2>
          <p className="text-muted-foreground">
            Describe what happened in your own words, in English or Urdu, and Wakeel will help you
            organize it into something you can confidently bring to the police station or a lawyer.
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
