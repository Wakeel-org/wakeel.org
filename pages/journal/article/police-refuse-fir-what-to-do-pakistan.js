import Link from "next/link";
import {
  CheckCircle2,
  FileText,
  Gavel,
  Users,
  HelpCircle,
  AlertTriangle,
} from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site } from "../../../src/data/marketing";
import { cardBase, eyebrow, headingGradient, sectionHeading } from "../../../src/data/theme";

const steps = [
  { icon: FileText, title: "Step 1 — Write down what happened, in order", detail: "Before going back to the station, note the date and time you tried to report the offence, who you spoke to, and exactly what they said. If the police wrote anything on paper and returned it to you, keep it — even an informal note helps." },
  { icon: Users, title: "Step 2 — Go over the SHO's head, in writing", detail: "If the duty officer refuses, submit a written application addressed to the SHO (Station House Officer) himself, and keep a signed, dated copy or receipt. If the SHO also refuses or ignores it, the next step is the Superintendent of Police (SP) or DPO for that district — again in writing." },
  { icon: Gavel, title: "Step 3 — Apply to the Justice of Peace (Section 22-A/22-B CrPC)", detail: "If the police still won't register the case, the law gives you a direct route around them: an application to the district's Ex-Officio Justice of the Peace (usually the Sessions Judge), who has the power to order the police to register your FIR." },
  { icon: AlertTriangle, title: "Step 4 — Keep every document you generate", detail: "Copies of your written applications, any receipts, and the eventual court order (if you go the Justice of Peace route) all matter — not just to get the FIR registered, but as your record if the case is questioned later." },
];

const faqs = [
  {
    "question": "What should I do first if the police refuse to register my FIR?",
    "answer": "Ask whether they consider the matter non-cognizable. That is the one lawful reason not to register an FIR, and under Section 155 CrPC it means going to a Magistrate. If the offence is cognizable, submit a written application to the SHO and keep a dated, receipted copy."
  },
  {
    "question": "Who is the Justice of the Peace for FIR matters?",
    "answer": "Under Section 22-A CrPC, Sessions Judges, and Additional Sessions Judges nominated by them, act as Ex-Officio Justices of the Peace for their districts. Under Section 22-A(6) they can issue directions to police on non-registration of a criminal case."
  },
  {
    "question": "Do I need a lawyer for a 22-A/22-B petition?",
    "answer": "It isn't legally required, but it is strongly recommended. The petition has to show clearly that a cognizable offence is disclosed and that the police failed to act. A lawyer also attends the hearing."
  },
  {
    "question": "Is a private complaint under Section 200 CrPC an alternative?",
    "answer": "Yes. Instead of forcing police registration, you can file a complaint directly before a Magistrate, who examines you on oath and decides whether to proceed. A lawyer can advise which route suits your facts."
  },
  {
    "question": "Can police officers face action for refusing a valid FIR?",
    "answer": "Unjustified refusal can be reported to senior officers and may lead to departmental proceedings for misconduct. Keep dated records of every visit and application, because those records support both your escalation and any complaint."
  },
  {
    "question": "Can Wakeel.org help me escalate a refused FIR?",
    "answer": "Wakeel can explain each escalation step and help you organise a dated record of your attempts, in English or Urdu. It cannot draft or file the court petition, or appear before the Justice of the Peace."
  }
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Police Won't Register Your FIR in Pakistan? A 4-Step Escalation Path",
    description:
      "Police refused your FIR? Follow the escalation path in Pakistan: a written application to the SHO, then the SP or DPO, then a Section 22-A/22-B CrPC petition to the Justice of the Peace, or a private complaint.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-08-28",
    dateModified: "2026-08-28",
    mainEntityOfPage: `${site.url}/journal/article/police-refuse-fir-what-to-do-pakistan`,
    citation: [
      { "@type": "CreativeWork", name: "22-A & 22-B — Office of the Advocate General, Government of Punjab", url: "https://advocategeneral.punjab.gov.pk/22A_22B" },
      { "@type": "CreativeWork", name: "The Police Order 2002: An Introduction — CPDI Pakistan", url: "https://archive.cpdi-pakistan.org/wp-content/uploads/2014/12/The-Police-Order-2002_Booklet.pdf" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "What to do when police refuse to register your FIR in Pakistan",
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
        name: "Police Won't Register Your FIR in Pakistan? A 4-Step Escalation Path",
        item: `${site.url}/journal/article/police-refuse-fir-what-to-do-pakistan`,
      },
    ],
  },
];

const keywords = [
  "police refuse to register fir pakistan",
  "fir not registered what to do",
  "22a 22b crpc petition",
  "justice of peace fir application",
  "escalate fir refusal sp dpo",
  "private complaint section 200 crpc"
].join(", ");

export default function PoliceRefuseFirWhatToDoPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Police Won't Register Your FIR in Pakistan? A 4-Step Escalation Path"
        description="Police refused your FIR? Follow the escalation path in Pakistan: a written application to the SHO, then the SP or DPO, then a Section 22-A/22-B CrPC petition to the Justice of the Peace, or a private complaint."
        path="/journal/article/police-refuse-fir-what-to-do-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>Legal Help · Published August 28, 2026</p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Police Won't Register Your FIR in Pakistan? A 4-Step Escalation Path
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A refusal at the front desk is not the end of the road. This guide covers only that
            situation: how to escalate, in order, until your FIR is registered.
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
                First, put your complaint in <strong>writing</strong> and submit it to the SHO,
                keeping a signed copy. If that doesn't work, escalate — again in writing — to the
                <strong> SP or DPO</strong>. If the police still refuse, you can go directly to the
                district's <strong>Ex-Officio Justice of the Peace</strong> under Sections 22-A and
                22-B of the CrPC, who has the legal authority to order the police to register your
                FIR. This is a real, working legal remedy — you are not required to simply accept
                a refusal.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educate: steps */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>Four steps, in order</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {steps.map((r) => {
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

      {/* Reveal: prose with inline sources */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <h2 className={sectionHeading}>Why writing things down matters more than arguing at the counter</h2>
          <p className="text-muted-foreground leading-relaxed">
            A verbal argument at the police station leaves no trail. A written application does —
            and Pakistani courts have repeatedly treated the Justice of Peace process, under{" "}
            <a href="https://advocategeneral.punjab.gov.pk/22A_22B" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
              Sections 22-A and 22-B of the CrPC
            </a>
            , as a genuinely adjudicatory process: the judge examines whether your facts support
            registering the FIR, not whether you were polite enough at the station. A written
            record of your earlier attempts — dates, names, what was said — makes that application
            far stronger.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            One important thing to know going in: the Justice of Peace decides whether the police
            should register a case and investigate — not whether the person you're accusing is
            guilty. That's a separate question decided later, if the case proceeds. This route
            exists to unblock the process, not to fast-track a conviction.
          </p>
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
                  Explaining these escalation steps clearly and helping you organize your facts
                  and dates before you write anything down.
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
                  It cannot draft or file your Justice of Peace application or represent you in
                  court — a licensed advocate should handle that.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel what to do next — free
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
          <h2 className="text-lg font-semibold text-foreground mb-4">Sources — check these directly to verify</h2>
          <ul className="space-y-2">
            {[
              { label: "22-A & 22-B — Office of the Advocate General, Government of Punjab", href: "https://advocategeneral.punjab.gov.pk/22A_22B" },
              { label: "The Police Order 2002: An Introduction — CPDI Pakistan", href: "https://archive.cpdi-pakistan.org/wp-content/uploads/2014/12/The-Police-Order-2002_Booklet.pdf" },
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
            <Link href="/journal/article/what-you-must-know-fir-registration-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">FIR Myths vs Facts in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Misconceptions corrected, rights listed</p>
            </Link>
            <Link href="/journal/legal-issues-pakistan/fir-refused-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">FIR Refused: Prepare Your Next Step</p>
              <p className="text-xs text-muted-foreground mt-1">How Wakeel helps organise a refusal case</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Police won't register your FIR?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel to walk you through the escalation steps — then verify with a licensed
            advocate before you file.
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
