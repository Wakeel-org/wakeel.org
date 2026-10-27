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
import { site, reviewerSchema } from "../../../src/data/marketing";
import { cardBase, eyebrow, headingGradient, sectionHeading } from "../../../src/data/theme";

const steps = [
  {
    "title": "Ask for the officer who records FIRs",
    "detail": "At the front desk, say you want to report an offence and register an FIR. The statement is usually taken by the duty officer or the moharrir (clerk) under the Station House Officer (SHO), who is the officer in charge."
  },
  {
    "title": "Give your account, spoken or written",
    "detail": "You can tell the officer what happened or hand in a signed written application. Many people bring a typed or handwritten application and keep a stamped copy. Describe events in order and stick to what you saw or experienced."
  },
  {
    "title": "The officer reduces it to writing",
    "detail": "If you speak, Section 154 CrPC requires the officer to write your information down. The officer, not you, identifies the Pakistan Penal Code sections that apply."
  },
  {
    "title": "Listen to it read back, then sign",
    "detail": "The written information must be read over to you before you sign or give a thumb impression. Ask for any mistake or omission to be corrected now, because it is much harder to correct later."
  },
  {
    "title": "Wait for the FIR number and your copy",
    "detail": "The substance is entered in the FIR register and given a number. Ask for your free copy, and note the FIR number, the date and the station name before you leave."
  },
  {
    "title": "Ask what happens next at the station",
    "detail": "Ask who the investigating officer is and how to contact them. In injury cases, police usually issue a letter for a medico-legal examination at a government hospital. Ask for it if you were hurt."
  }
];

const commonMistakes = [
  "Signing before the statement has been read back in full, or signing a version you didn't fully understand.",
  "Adding guesses about motive or legal labels. Facts help the investigation; speculation gives the defence material to attack later.",
  "Leaving without the investigating officer's name or contact details, which makes later follow-up much slower.",
  "Not asking for a medico-legal letter in an injury case, since medical evidence is time-sensitive."
];

const faqs = [
  {
    "question": "Can I submit a written application instead of speaking at the station?",
    "answer": "Yes. Section 154 CrPC covers information given orally or in writing. A written, signed application with a dated copy for your own records is common practice and keeps your wording intact."
  },
  {
    "question": "Who writes the FIR at a police station?",
    "answer": "The officer in charge of the station (the SHO) is responsible. In practice the duty officer or moharrir often writes it under the SHO's direction. Either way, it must be read back to you and signed by you."
  },
  {
    "question": "Can I take someone with me when I file an FIR?",
    "answer": "Yes. You can bring a relative, a witness or a lawyer. A companion can help you remember details and witness what was read back to you."
  },
  {
    "question": "How long does it take to register an FIR at the station?",
    "answer": "Registration is meant to happen when the information is given; Section 154 CrPC sets no waiting period. In practice it can take from under an hour to several hours, depending on how busy the station is."
  },
  {
    "question": "What should I do if I was injured?",
    "answer": "Ask the police for a letter referring you for a medico-legal examination at a government hospital, and keep any medical reports. Injuries are documented best when they are fresh."
  },
  {
    "question": "Can Wakeel.org prepare me for the station visit?",
    "answer": "Yes. Wakeel can help you write a clear, chronological account in English or Urdu before you go. It cannot go with you or register the FIR."
  }
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "At the Police Station: What Happens When You File an FIR in Pakistan",
    description:
      "A step-by-step walkthrough of what happens inside a Pakistani police station when you report a crime: who you speak to, how your statement is written and read back, and what you leave with.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    reviewedBy: reviewerSchema,
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-03-22",
    dateModified: "2026-10-22",
    mainEntityOfPage: `${site.url}/journal/article/fir-registration-step-by-step-guide-pakistan`,
    citation: [
      { "@type": "CreativeWork", name: "Code of Criminal Procedure, 1898 — Pakistan Code (Ministry of Law and Justice)", url: "https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apaUY2Npa5lp-sg-jjjjjjjjjjjjj" },
      { "@type": "CreativeWork", name: "Section 22-A & 22-B CrPC — Punjab Advocate General's Office explainer", url: "https://advocategeneral.punjab.gov.pk/22A_22B" },
      { "@type": "CreativeWork", name: "Mst. Sughran Bibi v. The State, PLD 2018 SC 595 — Supreme Court of Pakistan judgment", url: "https://asadrahim.com/wp-content/uploads/2018/11/pld-2018-sc-595-sughra-bibi-v-the-state.pdf" },
    ],
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
        name: "At the Police Station: What Happens When You File an FIR in Pakistan",
        item: `${site.url}/journal/article/fir-registration-step-by-step-guide-pakistan`,
      },
    ],
  },
];

const keywords = [
  "what happens at police station fir pakistan",
  "fir filing process at police station",
  "how fir is written pakistan",
  "fir read back sign",
  "moharrir fir",
  "file fir in person pakistan"
].join(", ");

export default function FirRegistrationStepByStepGuidePakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="At the Police Station: What Happens When You File an FIR in Pakistan"
        description="A step-by-step walkthrough of what happens inside a Pakistani police station when you report a crime: who you speak to, how your statement is written and read back, and what you leave with."
        path="/journal/article/fir-registration-step-by-step-guide-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>
            Legal Help · Published March 22, 2026 · Updated October 22, 2026 · Reviewed by Legal Team DIGIT</p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            At the Police Station: What Happens When You File an FIR in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            What to expect inside the station, in order: who takes your statement, how it is written
            and read back, and what you should have in hand before you walk out.
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
                At the station you give your account to the duty officer or moharrir, orally or as a written
                application. Under <strong>Section 154 CrPC</strong> it is written down, <strong>read back
                to you</strong> and signed by you, then entered in the FIR register with a number. Before
                you leave, collect your <strong>free copy</strong>, the FIR number and the investigating
                officer's details. Preparing documents beforehand is covered in our FIR checklist, and
                refusals are covered in our escalation guide.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educate: steps */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>Inside the station, step by step</h2>
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
            <h2 className={sectionHeading}>Mistakes people make at the desk</h2>
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
          <h2 className={`${sectionHeading} text-center mb-8`}>Related FIR guides</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/journal/article/how-to-register-fir-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to Register an FIR in Pakistan: Complete Guide</p>
              <p className="text-xs text-muted-foreground mt-1">Start here: the full FIR journey in one page</p>
            </Link>
            <Link href="/journal/article/how-to-complete-fir-registration-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">FIR Checklist: What to Bring and Verify Before You Sign</p>
              <p className="text-xs text-muted-foreground mt-1">Documents to prepare and details to check</p>
            </Link>
            <Link href="/journal/article/police-refuse-fir-what-to-do-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Police Won't Register Your FIR? The Escalation Path</p>
              <p className="text-xs text-muted-foreground mt-1">SHO → SP/DPO → Justice of the Peace</p>
            </Link>
            <Link href="/journal/article/fir-status-check-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to Check FIR Status Online in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Tracking your case after registration</p>
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
