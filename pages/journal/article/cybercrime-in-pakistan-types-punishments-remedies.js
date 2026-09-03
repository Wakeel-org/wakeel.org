import Link from "next/link";
import {
  CheckCircle2,
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

const offences = [
  { code: "Sections 3–5 PECA", title: "Unauthorized access and data interference", detail: "Covers hacking into a system or data without authorization, and interfering with or damaging data — punishable with imprisonment and fines that scale up sharply where the target is critical infrastructure." },
  { code: "Section 16 PECA", title: "Identity theft", detail: "Covers dishonestly using another person's identity information — including online accounts and digital identifiers — to cause harm or gain an advantage." },
  { code: "Section 20 PECA", title: "Offences against dignity of a person", detail: "Covers making, publishing, or transmitting false or defamatory information about someone through an information system, with the intent to harm their reputation." },
  { code: "Section 21 PECA", title: "Offences against modesty", detail: "Covers superimposing a person's image, or transmitting sexually explicit material of a person, without consent — a provision central to non-consensual image sharing and, in practice, deepfake-related cases." },
  { code: "Section 24 PECA", title: "Cyberstalking", detail: "Covers repeated, unwanted contact or monitoring of a person online with the intent to coerce, intimidate, or harass, despite a clear indication of disinterest." },
  { code: "Section 26-A PECA (2025)", title: "Spreading fear, panic, or disorder online", detail: "Added by the 2025 amendment, this criminalises disseminating information likely to cause a sense of fear, panic, or unrest online — a broad, actively debated new offence." },
];

const remedies = [
  "Reporting to the NCCIA (National Cyber Crime Investigation Agency), which since the 2025 amendment holds exclusive investigative authority over PECA offences.",
  "Requesting content removal or blocking through the process available under PECA where a court or authority orders it — relevant for non-consensual images or defamatory content still online.",
  "A parallel civil claim for defamation or damages, in addition to the criminal complaint, where the harm involves reputational or financial loss.",
  "Preserving evidence — screenshots, URLs, timestamps, and account details — before content can be deleted or an account can go offline, since this evidence is central to both the criminal complaint and any civil claim.",
];

const faqs = [
  {
    question: "What are the main types of cybercrime in Pakistan?",
    answer:
      "Under PECA 2016, they include unauthorized access and hacking, identity theft, offences against a person's dignity (like online defamation), offences against modesty (including non-consensual image sharing), cyberstalking, and, since the 2025 amendment, spreading content likely to cause fear or unrest under Section 26-A.",
  },
  {
    question: "What is the punishment for cybercrime in Pakistan?",
    answer:
      "Punishment varies significantly by offence — from fines and short imprisonment for lesser offences up to several years' imprisonment for serious offences like unauthorized access to critical infrastructure or repeated modesty-related offences. The exact punishment depends on the specific section and facts.",
  },
  {
    question: "What legal remedies exist for a cybercrime victim in Pakistan?",
    answer:
      "A criminal complaint to the NCCIA, a request for content removal or blocking, and, where reputational or financial harm occurred, a parallel civil claim for damages. Preserving evidence quickly matters for all three routes.",
  },
  {
    question: "Is online defamation a crime in Pakistan?",
    answer:
      "Yes — Section 20 of PECA covers making, publishing, or transmitting false information intended to harm a person's reputation through an information system, alongside the possibility of a separate civil defamation claim.",
  },
  {
    question: "Can Wakeel.org help me understand a cybercrime situation?",
    answer:
      "Wakeel.org can explain which PECA offence may apply to a situation, in plain English or Urdu, and help you organize evidence and a timeline before filing a complaint or seeing a lawyer. It cannot file the complaint, assess digital evidence, or represent you — a licensed advocate should handle that.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Cybercrime in Pakistan: Types, Punishments and Legal Remedies",
    description:
      "The main types of cybercrime in Pakistan under PECA 2016 — unauthorized access, dignity and modesty offences, cyberstalking, and the 2025 amendment's new offences — with punishments and remedies.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-03-06",
    dateModified: "2026-03-06",
    mainEntityOfPage: `${site.url}/journal/article/cybercrime-in-pakistan-types-punishments-remedies`,
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
        name: "Cybercrime in Pakistan: Types, Punishments and Legal Remedies",
        item: `${site.url}/journal/article/cybercrime-in-pakistan-types-punishments-remedies`,
      },
    ],
  },
];

const keywords = [
  "cybercrime in pakistan",
  "cybercrime punishment pakistan",
  "cybercrime legal remedies pakistan",
  "peca offences list",
  "types of cybercrime pakistan",
  "cyberstalking law pakistan",
].join(", ");

export default function CybercrimeInPakistanTypesPunishmentsRemedies() {
  return (
    <Layout>
      <MarketingSEO
        title="Cybercrime in Pakistan: Types, Punishments and Legal Remedies"
        description="The main types of cybercrime in Pakistan under PECA 2016 — unauthorized access, dignity and modesty offences, cyberstalking, and remedies available."
        path="/journal/article/cybercrime-in-pakistan-types-punishments-remedies"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>
            Legal Help · Published March 6, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Cybercrime in Pakistan: Types, Punishments and Legal Remedies
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From hacking to harassment, cybercrime in Pakistan covers a wider range of conduct than
            most people expect — and each type has its own section, punishment, and remedy.
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
                Cybercrime in Pakistan spans <strong>unauthorized access</strong>,{" "}
                <strong>identity theft</strong>, <strong>dignity and modesty offences</strong>{" "}
                (defamation, non-consensual images), <strong>cyberstalking</strong>, and the newer{" "}
                <strong>Section 26-A</strong> offence for content causing fear or unrest —
                punishments range from fines to years of imprisonment. Remedies include an{" "}
                <strong>NCCIA complaint</strong>, <strong>content removal</strong>, and a{" "}
                <strong>civil damages claim</strong> where relevant.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educate: offences */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>Six offences, in plain terms</h2>
          </div>
          <div className="space-y-4">
            {offences.map((s) => (
              <Card key={s.code} className={cardBase}>
                <CardContent className="p-5 flex flex-col sm:flex-row gap-4 sm:items-start">
                  <span className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1.5 text-sm font-semibold text-primary shrink-0 self-start">
                    {s.code}
                  </span>
                  <div>
                    <p className="font-semibold text-sm">{s.title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-1">{s.detail}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reveal: remedies */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className={sectionHeading}>The remedies available to a victim</h2>
          </div>
          <Card className={cardBase}>
            <CardContent className="p-6">
              <ul className="space-y-3">
                {remedies.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <ShieldAlert className="h-5 w-5 text-primary shrink-0 mt-0.5" />
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
                  Explaining which PECA offence may apply to a situation, in plain English or Urdu,
                  and helping you organize evidence and a timeline.
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
                  It cannot file the complaint, assess digital evidence, or represent you — a
                  licensed advocate should handle that.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel about your situation — free
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
              { label: "The Prevention of Electronic Crimes Act, 2016 — Pakistan Code (Ministry of Law and Justice)", href: "https://www.pakistancode.gov.pk/pdffiles/administrator6a061efe0ed5bd153fa8b79b8eb4cba7.pdf" },
              { label: "NCHR Report on PECA and the 2025 Amendments Act — National Commission for Human Rights", href: "https://nchr.gov.pk/wp-content/uploads/2026/02/NCHR-Report-on-PECA-and-the-2025-Amendments-Act.pdf" },
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
            <Link href="/journal/article/how-to-file-cybercrime-complaint-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to File a Cybercrime Complaint in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/cyberbullying-online-harassment-laws-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Cyberbullying and Online Harassment Laws in Pakistan</p>
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
          <h2 className={sectionHeading}>Been a victim of cybercrime?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel to help you understand your options and preserve evidence — then act quickly
            with a licensed advocate.
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
