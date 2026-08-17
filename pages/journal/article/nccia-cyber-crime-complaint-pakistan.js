import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Shield,
  FileText,
  Phone,
  HelpCircle,
  AlertTriangle,
  Camera,
  Landmark,
} from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site } from "../../../src/data/marketing";
import { cardBase, headingGradient, sectionHeading } from "../../../src/data/theme";

const steps = [
  {
    icon: Landmark,
    title: "1. Know which agency handles it",
    detail:
      "Cybercrime complaints in Pakistan are handled under the Prevention of Electronic Crimes Act (PECA) 2016, which has been amended over time to reshape the investigating authority — historically FIA's Cyber Crime Wing, with the National Cyber Crime Investigation Agency (NCCIA) established to take on this role under later amendments. Naming and structure has shifted more than once, so before you file, confirm the current designated agency and its official complaint channel rather than relying on an old bookmark.",
  },
  {
    icon: Camera,
    title: "2. Preserve evidence before you report",
    detail:
      "Take screenshots of the offending content, message, or transaction — including URLs, timestamps, phone numbers, and account names — before the other party has a chance to delete anything. For financial fraud, save transaction IDs, bank statements, and any payment confirmation. Evidence quality is usually the single biggest factor in how fast a cybercrime complaint moves.",
  },
  {
    icon: FileText,
    title: "3. File through the official complaint channel",
    detail:
      "Complaints are generally filed online through the designated cybercrime complaint portal, or in person at a Cyber Crime Reporting Centre / regional cybercrime circle office (major cities including Lahore, Karachi, Islamabad, and others have dedicated circles). You'll typically need your CNIC, a description of the incident, and your evidence attached or referenced.",
  },
  {
    icon: Phone,
    title: "4. Use the helpline for urgent matters",
    detail:
      "For urgent situations — ongoing harassment, active financial fraud, or child safety concerns — a phone helpline is usually faster than the online form for getting immediate guidance on what to do while your written complaint is processed. Keep a record of the date, time, and reference number of any helpline call.",
  },
  {
    icon: FileText,
    title: "5. Get a complaint or FIR number and track it",
    detail:
      "Once your complaint is registered, you should receive a complaint or case reference number — this is what you'll use to follow up. If the matter is serious enough to warrant an FIR (registered under Section 154 CrPC for a cognizable offence under PECA or the Pakistan Penal Code), ask explicitly whether one has been or will be registered.",
  },
  {
    icon: Shield,
    title: "6. Understand what counts as a cybercrime offence",
    detail:
      "PECA 2016 covers offences including unauthorized access to data or systems, electronic fraud, cyberstalking and harassment, identity theft, and the unlawful distribution of a person's private images — often overlapping with related Pakistan Penal Code provisions. Which specific offence applies affects both which evidence matters most and what remedy is realistic.",
  },
];

const evidenceChecklist = [
  "Screenshots of messages, posts, or the fraudulent listing/page — with visible timestamps and usernames or URLs.",
  "Transaction IDs, bank statements, or payment app records for any financial loss.",
  "The phone number, email, or account handle used to contact or deceive you.",
  "A written, dated timeline of events in your own words, before memory fades.",
  "Copies of any prior communication where you asked the other party to stop or return money.",
];

const faqs = [
  {
    question: "How do I file an FIA cyber crime complaint online in Pakistan?",
    answer:
      "Cybercrime complaints are filed through the official online complaint portal of the agency currently designated under the Prevention of Electronic Crimes Act (PECA) 2016 — historically FIA's Cyber Crime Wing, with the National Cyber Crime Investigation Agency (NCCIA) established under later amendments to take on this role. Because agency names and portals have changed more than once, search for the current official government cybercrime complaint site rather than an older cached link, and have your CNIC and evidence ready before you start the form.",
  },
  {
    question: "What is the NCCIA and how is it different from FIA's Cyber Crime Wing?",
    answer:
      "The National Cyber Crime Investigation Agency (NCCIA) was established under amendments to PECA 2016 to take over cybercrime investigation responsibilities that were previously handled by FIA's Cyber Crime Wing. Both names circulate in public use during this kind of transition, which is exactly why it's worth confirming the current official agency and portal before filing, rather than assuming either name is still accurate.",
  },
  {
    question: "How do I check the status of an FIA or NCCIA cybercrime complaint?",
    answer:
      "Keep the complaint or case reference number you're given when you first file — this is what any status inquiry, whether by phone helpline or online tracking tool, will ask for. If you weren't given a reference number, contact the office where you filed and ask for one; without it, following up is much harder.",
  },
  {
    question: "What evidence do I need for a cyber crime complaint in Pakistan?",
    answer:
      "Screenshots with visible timestamps and usernames or URLs, transaction records for any financial loss, the contact details used by the offending party, and a written timeline of events in your own words. The more specific and dated your evidence is, the faster an investigator can act on it.",
  },
  {
    question: "Can Wakeel.org help me prepare a cyber crime complaint?",
    answer:
      "Wakeel.org can help you organize your evidence into a clear timeline, explain terms like 'electronic fraud' or 'cyberstalking' under PECA in plain English or Urdu, and help you draft a clear written account of what happened before you file. It cannot submit the complaint on your behalf, contact the investigating agency for you, or guarantee any outcome — always file through the official government channel and verify current procedure directly with them.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to File a Cyber Crime Complaint in Pakistan (FIA / NCCIA)",
    description:
      "A practical guide to filing a cybercrime complaint in Pakistan under PECA 2016 — evidence to collect, the FIA Cyber Crime Wing / NCCIA transition, and how to track your complaint.",
    author: { "@type": "Organization", name: "Wakeel.org" },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-07-02",
    dateModified: "2026-07-02",
    mainEntityOfPage: `${site.url}/journal/article/nccia-cyber-crime-complaint-pakistan`,
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to file a cyber crime complaint in Pakistan",
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
        name: "How to File a Cyber Crime Complaint in Pakistan",
        item: `${site.url}/journal/article/nccia-cyber-crime-complaint-pakistan`,
      },
    ],
  },
];

const keywords = [
  "nccia complaint portal",
  "fia complaint online",
  "fia cyber crime complaint",
  "fia cyber crime helpline",
  "nccia helpline number",
  "fia complaint number",
  "peca 2016 pakistan",
  "cyber crime complaint pakistan",
].join(", ");

export default function NcciaCyberCrimeComplaintPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="How to File a Cyber Crime Complaint in Pakistan"
        description="How to file a cybercrime complaint in Pakistan under PECA 2016 — evidence to collect, the FIA / NCCIA agency transition, and how to track your case."
        path="/journal/article/nccia-cyber-crime-complaint-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Legal Help · Published July 2, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            How to File a Cyber Crime Complaint in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Blackmail, fraud, a hacked account, harassment that won't stop — cybercrime in
            Pakistan has a real reporting process behind it, even when the exact agency name
            keeps shifting. Here's how to actually navigate it.
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
                Cybercrime in Pakistan is governed by the{" "}
                <strong>Prevention of Electronic Crimes Act (PECA) 2016</strong>. Investigation
                responsibility has shifted over time from FIA's Cyber Crime Wing toward the{" "}
                <strong>National Cyber Crime Investigation Agency (NCCIA)</strong> under later
                amendments — confirm the current official agency and complaint portal before you
                file. Preserve your evidence (screenshots, transaction records, contact details)
                immediately, file through the official channel with your CNIC, and keep your
                complaint reference number for follow-up.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>The reporting process, step by step</h2>
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

      {/* Evidence checklist */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className={sectionHeading}>Evidence to gather before you file</h2>
          </div>
          <Card className={cardBase}>
            <CardContent className="p-6">
              <ul className="space-y-3">
                {evidenceChecklist.map((e) => (
                  <li key={e} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{e}</span>
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
                  Organizing your evidence into a clear timeline, explaining PECA terms like
                  electronic fraud or cyberstalking in plain English or Urdu, and helping you
                  draft a clear written account before you file.
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
                  It cannot submit the complaint for you, contact the investigating agency, or
                  guarantee any outcome. File and track your case through the official government
                  channel directly.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Organize your evidence with Wakeel Free
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
            General educational information, not legal advice. Cybercrime reporting agencies,
            portals, and procedure in Pakistan have changed more than once — always verify the
            current official channel directly before filing. See our{" "}
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
              href="/journal/legal-issues-pakistan/online-fraud-complaint-pakistan"
              className={`group ${cardBase} block rounded-lg p-5`}
            >
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                Online Fraud Complaint Guidance in Pakistan
              </p>
              <p className="text-xs text-muted-foreground mt-1">Guide · Wakeel Journal</p>
            </Link>
            <Link
              href="/journal/legal-issues-pakistan/cybercrime-online-safety-pakistan"
              className={`group ${cardBase} block rounded-lg p-5`}
            >
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                Cybercrime and Online Safety in Pakistan
              </p>
              <p className="text-xs text-muted-foreground mt-1">Guide · Wakeel Journal</p>
            </Link>
            <Link
              href="/journal/article/how-to-register-fir-pakistan"
              className={`group ${cardBase} block rounded-lg p-5`}
            >
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                How to Register an FIR in Pakistan
              </p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/citizens" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                Wakeel.org for Citizens
              </p>
              <p className="text-xs text-muted-foreground mt-1">How Wakeel helps everyday legal problems</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Dealing with online harassment or fraud?</h2>
          <p className="text-muted-foreground">
            Organize your evidence and get a clear written account ready before you file — in
            English or Urdu.
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
