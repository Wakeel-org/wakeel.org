import Link from "next/link";
import {
  CheckCircle2,
  Scale,
  ShieldAlert,
  FileText,
  HelpCircle,
  AlertTriangle,
  BookOpen,
} from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site } from "../../../src/data/marketing";
import { cardBase, eyebrow, headingGradient, sectionHeading } from "../../../src/data/theme";

const statutes = [
  { icon: BookOpen, title: "Pakistan Penal Code, 1860", detail: "The substantive law — what conduct is a crime and what punishment it carries, from theft and cheating to offences against the person." },
  { icon: FileText, title: "Code of Criminal Procedure, 1898", detail: "The procedural rulebook — FIR registration, investigation, arrest, bail, trial, and appeal. This is what actually moves a criminal matter from a complaint to a verdict." },
  { icon: Scale, title: "Qanun-e-Shahadat Order, 1984", detail: "Pakistan's evidence law — what's admissible, how the prosecution's burden of proof works, and the weight given to different types of evidence, including confessions and expert opinion." },
  { icon: ShieldAlert, title: "Special and preventive laws", detail: "Certain categories of offence are tried under their own frameworks rather than ordinary PPC/CrPC procedure — cybercrime under PECA 2016, terrorism-related offences under the Anti-Terrorism Act 1997, narcotics under the Control of Narcotic Substances Act 1997, and corruption under the National Accountability Ordinance 1999." },
];

const distinctions = [
  { title: "Cognizable vs non-cognizable offences", detail: "For a cognizable offence, police can register an FIR and investigate (including arrest) without a magistrate's prior permission. For a non-cognizable offence, they generally need the magistrate's direction first — a distinction the CrPC's First Schedule maps out offence by offence." },
  { title: "Bailable vs non-bailable offences", detail: "Bail is close to a right for bailable offences. For non-bailable offences, it's discretionary — the court weighs factors like the severity of the alleged offence and risk of the accused fleeing or tampering with evidence under Sections 497 and 498 CrPC." },
  { title: "FIR to trial isn't one continuous step", detail: "Registration (Section 154 CrPC) triggers investigation, which produces a police report/challan (Section 173 CrPC) — only after that does the matter actually reach trial before a competent court. Delays or gaps can occur at each stage, and each one is worth understanding on its own." },
  { title: "Burden of proof sits with the prosecution", detail: "In a criminal trial, the prosecution must prove guilt beyond reasonable doubt — the accused doesn't have to prove innocence. This is a fundamentally different starting point from a civil suit, where the standard is the balance of probabilities." },
];

const faqs = [
  {
    question: "What is criminal law in Pakistan based on?",
    answer:
      "Substantively, mainly the Pakistan Penal Code, 1860; procedurally, the Code of Criminal Procedure, 1898; and evidentially, the Qanun-e-Shahadat Order, 1984. On top of this general framework sit special laws for specific categories of offence — cybercrime (PECA 2016), terrorism (Anti-Terrorism Act 1997), narcotics (CNSA 1997), and corruption (NAB Ordinance 1999) — each with its own procedure and, often, its own dedicated courts.",
  },
  {
    question: "What's the difference between a cognizable and non-cognizable offence?",
    answer:
      "For a cognizable offence, police can register an FIR and begin investigating — including making an arrest — without needing a magistrate's prior approval. For a non-cognizable offence, they generally need the magistrate's direction before investigating. The CrPC's First Schedule classifies most offences one way or the other.",
  },
  {
    question: "How does a criminal case move from FIR to trial in Pakistan?",
    answer:
      "Broadly: an FIR is registered under Section 154 CrPC, police investigate and record statements (Sections 161 and 164 CrPC), the police submit a report/challan under Section 173 CrPC stating whether there's sufficient ground to proceed, and if so, the matter goes to trial before the competent court. Bail, at various stages, can be sought under Sections 497 or 498 CrPC.",
  },
  {
    question: "What is the burden of proof in a Pakistani criminal case?",
    answer:
      "The prosecution must prove the accused's guilt beyond reasonable doubt. The accused is not required to prove their innocence — this is a core principle carried over from the common law tradition and reinforced by Article 10-A's fair trial guarantee.",
  },
  {
    question: "Can Wakeel.org help me understand a criminal case?",
    answer:
      "Wakeel.org can explain the stage your case is at, what a specific PPC or CrPC provision means, and what questions to bring to a lawyer. It cannot represent you, file anything on your behalf, or predict how a court will rule — for anything with real consequences, consult a licensed advocate promptly.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Criminal Law in Pakistan: Complete Guide",
    description:
      "How criminal law works in Pakistan — the Pakistan Penal Code, the CrPC's investigation and trial process, cognizable vs non-cognizable offences, and where special laws take over.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-04-08",
    dateModified: "2026-04-08",
    mainEntityOfPage: `${site.url}/journal/article/criminal-law-in-pakistan-guide`,
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
        name: "Criminal Law in Pakistan: Complete Guide",
        item: `${site.url}/journal/article/criminal-law-in-pakistan-guide`,
      },
    ],
  },
];

const keywords = [
  "criminal law in pakistan",
  "pakistan penal code guide",
  "code of criminal procedure pakistan",
  "cognizable vs non-cognizable offence pakistan",
  "bailable vs non-bailable offence",
  "criminal trial process pakistan",
  "fir to trial process pakistan",
].join(", ");

export default function CriminalLawInPakistanGuide() {
  return (
    <Layout>
      <MarketingSEO
        title="Criminal Law in Pakistan: Complete Guide"
        description="How criminal law works in Pakistan — the Pakistan Penal Code, the CrPC's investigation and trial process, cognizable vs non-cognizable offences, and special laws."
        path="/journal/article/criminal-law-in-pakistan-guide"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>
            Law Study & Research · Published April 8, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Criminal Law in Pakistan: Complete Guide
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            An FIR, an arrest, a bail hearing, a trial — each step of a criminal case in Pakistan is
            governed by a specific statute and a specific rule. Here's the framework that ties it
            all together.
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
                Criminal law in Pakistan runs on three layers: the{" "}
                <strong>Pakistan Penal Code, 1860</strong> (what's a crime), the{" "}
                <strong>Code of Criminal Procedure, 1898</strong> (how a case moves — FIR,
                investigation, bail, trial), and the <strong>Qanun-e-Shahadat Order, 1984</strong>{" "}
                (what counts as evidence). Certain offence categories — cybercrime, terrorism,
                narcotics, corruption — are tried under separate special laws with their own courts
                and procedure. The prosecution always carries the burden of proving guilt beyond
                reasonable doubt.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educate: statutes */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>The framework, layer by layer</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {statutes.map((r) => {
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

      {/* Reveal: distinctions */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className={sectionHeading}>Four distinctions that change how a case actually plays out</h2>
          </div>
          <div className="space-y-4">
            {distinctions.map((d) => (
              <Card key={d.title} className={cardBase}>
                <CardContent className="p-6">
                  <p className="font-semibold text-sm mb-2">{d.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
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
                  Explaining what stage a criminal matter is at, what a specific PPC or CrPC
                  provision means, and helping you organize facts and questions before you see a
                  lawyer — in plain English or Urdu.
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
                  It cannot represent you, file a bail application or complaint, or predict how a
                  specific court will rule — for anything involving arrest, charges, or liberty,
                  get a licensed criminal lawyer involved immediately.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel about your case — free
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
              { label: "Code of Criminal Procedure, 1898 — Pakistan Code (Ministry of Law and Justice)", href: "https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apaUY2Npa5lp-sg-jjjjjjjjjjjjj" },
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
            <Link href="/journal/article/how-to-register-fir-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to Register an FIR in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/common-legal-sections-dafaat-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Common Legal Sections (Dafaat) in Pakistan Explained</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/nccia-cyber-crime-complaint-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to File a Cyber Crime Complaint in Pakistan</p>
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
          <h2 className={sectionHeading}>Dealing with a criminal matter?</h2>
          <p className="text-muted-foreground">
            Describe what's happening and Wakeel will help you understand the process and what
            questions to bring to a lawyer — then act quickly with a licensed advocate.
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
