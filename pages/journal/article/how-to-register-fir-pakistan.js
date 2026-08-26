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
import { site } from "../../../src/data/marketing";
import { cardBase, eyebrow, headingGradient, sectionHeading } from "../../../src/data/theme";

const steps = [
  {
    icon: FileText,
    title: "1. Write down the facts while they're fresh",
    detail:
      "Date, time, exact location, names or descriptions of people involved, what was said or done, and any witnesses. Memory fades fast under stress — a simple written timeline is the single most useful thing you can bring to a police station.",
  },
  {
    icon: ShieldAlert,
    title: "2. Go to the police station with jurisdiction",
    detail:
      "An FIR is normally registered at the police station covering the area where the offence happened (Section 154, Code of Criminal Procedure, 1898). Under Section 154 CrPC, the officer in charge must record information about a cognizable offence in the prescribed FIR book, in the language the informant understands where practicable, and give the informant a free copy.",
  },
  {
    icon: Gavel,
    title: "3. Know the difference: cognizable vs non-cognizable",
    detail:
      "Police can register an FIR and investigate without a magistrate's order only for cognizable offences (generally the more serious ones, such as theft, assault causing hurt, or fraud under the Pakistan Penal Code, 1860). For non-cognizable offences, police typically need a magistrate's permission — this is often the real reason an officer says 'we can't register this,' and it's worth asking which category applies to your facts.",
  },
  {
    icon: Clock,
    title: "4. Ask for the FIR number and a copy immediately",
    detail:
      "Once recorded, you are entitled to a free copy of the FIR. Note the FIR number, the police station name, and the date/time it was registered — you will need these for any complaint, bail application, or lawyer consultation later.",
  },
  {
    icon: AlertTriangle,
    title: "5. If they refuse, escalate in writing",
    detail:
      "If an officer refuses to register a cognizable offence, Section 154(3) CrPC allows the informant to send the complaint in writing, by post, to the relevant Superintendent of Police (SP), who can direct that the FIR be registered or investigate the matter personally. Keep a copy of what you sent and proof of delivery.",
  },
  {
    icon: BookOpen,
    title: "6. Know your fallback: Section 22-A/22-B applications",
    detail:
      "In practice, many people move directly to a Section 22-A/22-B Cr.P.C. application before a Magistrate (Ex-Officio Justice of the Peace) when police refuse or delay registering an FIR. This is a well-established route in Pakistani criminal procedure, but the paperwork and hearing process are exactly where a licensed advocate earns their fee — get one involved here if you can.",
  },
];

const commonMistakes = [
  "Waiting too long to report — some offences carry limitation concerns, and memory and evidence both degrade with time.",
  "Signing a statement you haven't read carefully, or one written in language you don't fully follow.",
  "Not asking for the FIR number or a copy — without it, you have no formal proof a report was ever made.",
  "Assuming a verbal 'we can't help' from a duty officer is the final word — it usually isn't, and it's rarely explained clearly.",
  "Going alone to escalate a refusal without first writing down exactly what happened and when, in your own words, dated.",
];

const faqs = [
  {
    question: "What is Section 154 CrPC and why does it matter for an FIR?",
    answer:
      "Section 154 of the Code of Criminal Procedure, 1898 is the provision that obliges an officer in charge of a police station to record information relating to a cognizable offence in writing, in the FIR register, and to give the informant a free copy. It's the legal basis for the entire FIR process in Pakistan, and it's also the section people quote when police refuse to register a report.",
  },
  {
    question: "What can I do if police refuse to register an FIR?",
    answer:
      "First, ask clearly and calmly why — it may genuinely be a non-cognizable matter needing a magistrate's order, not a refusal. If it is a cognizable offence and they still refuse, Section 154(3) CrPC lets you send the complaint in writing to the Superintendent of Police. Many people in Pakistan also file a Section 22-A/22-B Cr.P.C. application before a Magistrate, who can direct the police to register the FIR. This is a real legal remedy, not just a suggestion — but a lawyer's help with the drafting and hearing genuinely matters here.",
  },
  {
    question: "Is an FIR the same as a formal criminal charge?",
    answer:
      "No. An FIR is the starting point of a police investigation into an alleged cognizable offence — it is not a conviction, a charge sheet, or proof of guilt. What happens after registration (investigation, challan, trial) is a separate, longer process, and the outcome depends on evidence gathered along the way.",
  },
  {
    question: "Can Wakeel.org help me register an FIR?",
    answer:
      "Wakeel.org cannot file an FIR, contact police on your behalf, or guarantee that a report will be registered — no AI tool can do that, and be cautious of anything that claims otherwise. What it can genuinely help with is organizing your facts into a clear timeline, explaining terms like 'cognizable offence' or 'Section 154' in plain English or Urdu, and preparing questions to bring to a lawyer or the police station. Always verify next steps with a licensed advocate before you act.",
  },
  {
    question: "Do I need a lawyer to register an FIR?",
    answer:
      "Not strictly — registering an FIR itself doesn't legally require a lawyer, and many people do it on their own. But if police are refusing, if the matter is serious, or if you're heading toward a Section 22-A/22-B application, a licensed advocate familiar with the local police station and magistrate's court will usually save you real time and stress.",
  },
  {
    question: "What can I do if police refuse to register my FIR in Pakistan, and it's already been days?",
    answer:
      "Don't wait indefinitely on a verbal refusal. Put your complaint in writing and send it to the Superintendent of Police under Section 154(3) CrPC, with proof of when you first tried to report it. If there's still no movement, a Section 22-A/22-B Cr.P.C. application before a Magistrate (Ex-Officio Justice of the Peace) is the standard next step — a lawyer can usually get this filed and heard faster than repeated visits to the same police station.",
  },
  {
    question: "How do I file a complaint against police in Pakistan for misconduct or inaction?",
    answer:
      "For refusal to register a cognizable offence, use the Section 154(3) written complaint to the SP or a Section 22-A/22-B application to a Magistrate — both are described above. For broader police misconduct (harassment, corruption, abuse), complaints can be filed with the relevant Police Complaints Authority where one exists in your province, or with the SP/DPO's office directly. Keep a written, dated record of the officer's name, station, and what happened — vague complaints are far harder to act on than specific ones.",
  },
  {
    question: "How do I register an FIR in Pakistan step by step?",
    answer:
      "Write down what happened while it's fresh — date, time, location, people involved, witnesses. Go to the police station covering the area where it happened and ask the duty officer to record it under Section 154 CrPC. If it's a cognizable offence, they're required to register it in the FIR book and give you a free copy on request. Note the FIR number before you leave — you'll need it for anything that follows.",
  },
  {
    question: "What happens after an FIR is filed in Pakistan?",
    answer:
      "Once registered, the police begin investigating — collecting evidence, recording statements, and, depending on the offence, potentially making arrests. The investigation typically concludes with a report (challan) submitted to the court, after which the matter proceeds to trial if there's sufficient evidence. This process can take anywhere from weeks to well over a year depending on the case's complexity and the court's caseload — ask the investigating officer or your lawyer for updates rather than assuming no news means no progress.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Register an FIR in Pakistan (2026 Guide)",
    description:
      "A plain-language walkthrough of how FIR registration works under Section 154 CrPC, what to do if police refuse, and how to prepare your facts before you go.",
    author: { "@type": "Organization", name: "Wakeel.org" },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-05-03",
    dateModified: "2026-05-03",
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
        name: "How to Register an FIR in Pakistan",
        item: `${site.url}/journal/article/how-to-register-fir-pakistan`,
      },
    ],
  },
];

const keywords = [
  "fir registration pakistan",
  "police refuse fir",
  "section 154 crpc",
  "how to file fir pakistan",
  "fir process pakistan",
  "22a 22b application pakistan",
  "cognizable offence pakistan",
  "what can i do if police refuse to register my fir in pakistan",
  "how do i file a complaint against police in pakistan",
  "police complaint pakistan",
  "how to register fir",
  "how do i register an fir in pakistan",
  "what happens after an fir is filed in pakistan",
].join(", ");

export default function HowToRegisterFirPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="How to Register an FIR in Pakistan"
        description="How FIR registration works in Pakistan under Section 154 CrPC — what officers must legally do, and what to do if police refuse to register your complaint."
        path="/journal/article/how-to-register-fir-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>
            Legal Help · Published May 3, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            How to Register an FIR in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            If you've ever stood at a police station counter being told, in one form or another,
            "come back later" — you're not imagining the frustration. Here's what the law actually
            says, in plain words, and what to do if the front desk isn't giving you straight answers.
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
                Under <strong>Section 154 of the Code of Criminal Procedure, 1898</strong>, a
                police officer is legally required to record a report of a cognizable offence and
                give you a free copy. If they refuse, you can put your complaint in writing to the
                Superintendent of Police under Section 154(3), or apply to a Magistrate under{" "}
                <strong>Section 22-A/22-B Cr.P.C.</strong> Bring a clear, dated, written account of
                what happened — it is the single biggest thing that speeds this process up.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>The FIR process, step by step</h2>
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
          <h2 className={`${sectionHeading} text-center mb-8`}>Related reading</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/journal/legal-issues-pakistan/fir-refused-pakistan"
              className={`group ${cardBase} block rounded-lg p-5`}
            >
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                What to Do if Police Refuse to Register an FIR
              </p>
              <p className="text-xs text-muted-foreground mt-1">Guide · Wakeel Journal</p>
            </Link>
            <Link
              href="/journal/article/understanding-legal-notices-pakistan"
              className={`group ${cardBase} block rounded-lg p-5`}
            >
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                Understanding Legal Notices in Pakistan
              </p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/citizens" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                Wakeel.org for Citizens
              </p>
              <p className="text-xs text-muted-foreground mt-1">How Wakeel helps everyday legal problems</p>
            </Link>
            <Link href="/legal-sources" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                Our Approach to Legal Sources
              </p>
              <p className="text-xs text-muted-foreground mt-1">How Wakeel grounds answers in Pakistani law</p>
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
