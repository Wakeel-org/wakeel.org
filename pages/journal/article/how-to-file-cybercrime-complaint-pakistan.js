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
  { title: "1. Preserve your evidence first", detail: "Take screenshots with visible URLs and timestamps, save messages, and note account names or numbers involved — before content can be deleted or an account taken down, since this evidence is central to the complaint." },
  { title: "2. Identify which PECA offence applies", detail: "Hacking or unauthorized access, defamation (Section 20), non-consensual images (Section 21), cyberstalking (Section 24), or another offence — knowing this helps you describe the complaint accurately from the start." },
  { title: "3. File with the NCCIA", detail: "The National Cyber Crime Investigation Agency (NCCIA) holds exclusive investigative authority over PECA offences since the 2025 amendment. Complaints can generally be filed online through the NCCIA's complaint portal, or in person at an NCCIA zonal office." },
  { title: "4. Provide a clear, factual account", detail: "Describe what happened in chronological order, attach your preserved evidence, and avoid speculation about who's responsible unless you have direct evidence — let the investigation establish that." },
  { title: "5. Get a complaint or case reference number", detail: "Confirm you've received a reference number for your complaint before you leave or log off — this is what you'll use to follow up on progress." },
  { title: "6. Follow up and consider parallel remedies", detail: "Track your complaint's progress, and where relevant, consider a parallel request for content removal or a civil claim for damages alongside the criminal complaint." },
];

const faqs = [
  {
    question: "Where do I file a cybercrime complaint in Pakistan?",
    answer:
      "With the National Cyber Crime Investigation Agency (NCCIA), which has exclusive investigative authority over cybercrime under PECA since the 2025 amendment. Complaints can generally be filed through the NCCIA's online complaint portal or in person at a zonal office.",
  },
  {
    question: "What evidence do I need to file a cybercrime complaint?",
    answer:
      "Screenshots with visible URLs and timestamps, saved messages, account details of those involved, and a clear chronological account of what happened. Preserve this evidence as early as possible, since content can be deleted or accounts taken offline.",
  },
  {
    question: "How long does a cybercrime investigation take in Pakistan?",
    answer:
      "There's no fixed timeline — it depends on the complexity of the case, the evidence available, and the NCCIA's caseload. Following up periodically with your complaint reference number is worthwhile rather than assuming no news means no progress.",
  },
  {
    question: "Can I file a cybercrime complaint anonymously in Pakistan?",
    answer:
      "Generally, a formal complaint requires your identification for the investigation to proceed properly, though some reporting channels may allow an initial anonymous tip. For a case you want investigated and prosecuted, expect to provide your identity as the complainant.",
  },
  {
    question: "Can Wakeel.org help me file a cybercrime complaint?",
    answer:
      "Wakeel.org can help you organize your evidence into a clear account and identify which PECA offence likely applies, in plain English or Urdu. It cannot submit the complaint to the NCCIA on your behalf or guarantee an outcome — you or a lawyer should file it directly.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to File a Cybercrime Complaint in Pakistan",
    description:
      "A step-by-step guide to filing a cybercrime complaint with the NCCIA in Pakistan — preserving evidence, identifying the right PECA offence, and following up.",
    author: { "@type": "Organization", name: "Wakeel.org" },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-03-18",
    dateModified: "2026-03-18",
    mainEntityOfPage: `${site.url}/journal/article/how-to-file-cybercrime-complaint-pakistan`,
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to file a cybercrime complaint with the NCCIA in Pakistan",
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
        name: "How to File a Cybercrime Complaint in Pakistan",
        item: `${site.url}/journal/article/how-to-file-cybercrime-complaint-pakistan`,
      },
    ],
  },
];

const keywords = [
  "how to file a cybercrime complaint pakistan",
  "nccia complaint process",
  "cybercrime complaint steps pakistan",
  "peca complaint pakistan",
  "report cybercrime pakistan",
].join(", ");

export default function HowToFileCybercrimeComplaintPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="How to File a Cybercrime Complaint in Pakistan"
        description="A step-by-step guide to filing a cybercrime complaint with the NCCIA in Pakistan — preserving evidence, identifying the right PECA offence, and following up."
        path="/journal/article/how-to-file-cybercrime-complaint-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>
            Legal Help · Published March 18, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            How to File a Cybercrime Complaint in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Six steps, in order, from preserving evidence before it disappears to actually getting
            your complaint filed with the right agency and tracked properly.
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
                Preserve your evidence immediately, identify which{" "}
                <a href="https://www.pakistancode.gov.pk/pdffiles/administrator6a061efe0ed5bd153fa8b79b8eb4cba7.pdf" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
                  PECA
                </a>{" "}
                offence applies, and file with the <strong>NCCIA</strong> — online through its
                complaint portal or in person at a zonal office — since the 2025 amendment gave it{" "}
                <strong>exclusive investigative authority</strong>. Get a complaint reference
                number before you leave, and follow up periodically.
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

      {/* Reveal */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className={sectionHeading}>The mistake that costs people the most</h2>
          </div>
          <Card className={cardBase}>
            <CardContent className="p-6 flex items-start gap-3">
              <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                Waiting to "see if it goes away" before reporting is the single most common way a
                cybercrime complaint gets weaker over time — content gets deleted, accounts get
                closed, and the digital trail that would have supported an investigation
                disappears with it. Report and preserve evidence first; decide on next steps after.
              </p>
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
                  Helping you organize your evidence into a clear account and identify which PECA
                  offence likely applies, in plain English or Urdu.
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
                  It cannot submit the complaint to the NCCIA on your behalf or guarantee an
                  outcome — you or a lawyer should file it directly.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Organize your evidence with Wakeel — free
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
            <Link href="/journal/article/nccia-cyber-crime-complaint-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to File a Cyber Crime Complaint in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/cybercrime-in-pakistan-types-punishments-remedies" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Cybercrime in Pakistan: Types, Punishments and Legal Remedies</p>
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
          <h2 className={sectionHeading}>Ready to file a complaint?</h2>
          <p className="text-muted-foreground">
            Walk Wakeel through what happened and get help organizing a clear account before you
            file with the NCCIA.
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
