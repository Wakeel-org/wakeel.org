import Link from "next/link";
import {
  CheckCircle2,
  ShieldAlert,
  Gavel,
  Scale,
  HelpCircle,
  AlertTriangle,
} from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site } from "../../../src/data/marketing";
import { cardBase, headingGradient, sectionHeading } from "../../../src/data/theme";

const framework = [
  { icon: ShieldAlert, title: "No standalone 'deepfake law' — existing PECA offences apply", detail: "PECA 2016 predates modern deepfake technology, so cases are prosecuted under existing provisions — chiefly Section 21 (offences against modesty, covering superimposed images and non-consensual sexually explicit material) and Section 20 (offences against dignity, for fabricated content that damages reputation)." },
  { icon: Gavel, title: "Punishment can reach three years and heavy fines", detail: "Deepfake-related conduct prosecuted under these PECA provisions — creating or sharing AI-manipulated videos, images, or audio intended to deceive or blackmail someone — carries imprisonment of up to three years along with substantial fines, with enhanced penalties in aggravated circumstances." },
  { icon: Scale, title: "The NCCIA investigates and can use forensic tools", detail: "Since the 2025 amendment, the NCCIA has exclusive investigative authority and its own forensic capability to analyse manipulated media — its lab reports are directly admissible in court, which matters for a category of crime where the manipulation itself needs technical proof." },
  { icon: ShieldAlert, title: "Being the subject of a deepfake is not your fault, legally", detail: "The offence attaches to the person who creates or knowingly shares the manipulated content — a victim has no legal exposure simply because their likeness was used without consent, and should treat reporting it the same way as any other PECA offence." },
];

const faqs = [
  {
    question: "Is creating a deepfake illegal in Pakistan?",
    answer:
      "Yes — while there's no separate 'deepfake law,' creating or sharing AI-manipulated videos, images, or audio to deceive or harm someone falls under existing PECA provisions, chiefly Section 21 (modesty) and Section 20 (dignity), with punishment of up to three years' imprisonment and significant fines.",
  },
  {
    question: "What should I do if a deepfake of me is circulating online?",
    answer:
      "Preserve evidence (screenshots, URLs, timestamps) immediately, and report it to the NCCIA as you would any PECA offence — you can also apply for removal or blocking of the content. Acting quickly matters, since deepfake content can spread rapidly.",
  },
  {
    question: "Who investigates deepfake cases in Pakistan?",
    answer:
      "The National Cyber Crime Investigation Agency (NCCIA), which since the 2025 PECA amendment has exclusive investigative authority and its own forensic lab capable of analysing manipulated media, with reports admissible in court.",
  },
  {
    question: "Can I be held liable for sharing a deepfake I didn't create?",
    answer:
      "Potentially — knowingly transmitting or sharing manipulated content that violates PECA's dignity or modesty provisions can itself attract liability, separate from whoever originally created it.",
  },
  {
    question: "Can Wakeel.org help if I'm a deepfake victim?",
    answer:
      "Wakeel.org can explain the relevant PECA provisions and help you organize evidence for a report, in plain English or Urdu. It cannot file a complaint or removal request, or represent you — a licensed advocate or the NCCIA directly should handle that.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Deepfakes in Pakistan: Legal Risks and Punishment",
    description:
      "How Pakistani law treats deepfakes — the PECA provisions used to prosecute AI-manipulated content, punishment, and what to do if you're targeted.",
    author: { "@type": "Organization", name: "Wakeel.org" },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-04-11",
    dateModified: "2026-04-11",
    mainEntityOfPage: `${site.url}/journal/article/deepfakes-in-pakistan-legal-risks-punishment`,
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
        name: "Deepfakes in Pakistan: Legal Risks and Punishment",
        item: `${site.url}/journal/article/deepfakes-in-pakistan-legal-risks-punishment`,
      },
    ],
  },
];

const keywords = [
  "deepfakes in pakistan",
  "deepfake law pakistan",
  "ai manipulated video law pakistan",
  "peca section 21 deepfake",
  "deepfake punishment pakistan",
  "nccia deepfake",
].join(", ");

export default function DeepfakesInPakistanLegalRisksPunishment() {
  return (
    <Layout>
      <MarketingSEO
        title="Deepfakes in Pakistan: Legal Risks and Punishment"
        description="How Pakistani law treats deepfakes — the PECA provisions used to prosecute AI-manipulated content, punishment, and what to do if you're targeted."
        path="/journal/article/deepfakes-in-pakistan-legal-risks-punishment"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            AI & the Law · Published April 11, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Deepfakes in Pakistan: Legal Risks and Punishment
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            There's no law with "deepfake" in its title in Pakistan — but that doesn't mean it's
            unregulated. Existing cybercrime provisions already cover it, with real penalties.
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
                Deepfakes are prosecuted under existing{" "}
                <a href="https://www.pakistancode.gov.pk/pdffiles/administrator6a061efe0ed5bd153fa8b79b8eb4cba7.pdf" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
                  PECA
                </a>{" "}
                provisions — mainly <strong>Section 21</strong> (modesty/non-consensual images) and{" "}
                <strong>Section 20</strong> (dignity/defamation) — carrying up to{" "}
                <strong>three years' imprisonment</strong> and significant fines. The{" "}
                <strong>NCCIA</strong> investigates, using its own forensic lab to analyse
                manipulated media. Being targeted by a deepfake carries no legal exposure for the
                victim.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educate: framework */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>How the law actually applies</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {framework.map((r) => {
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

      {/* How Wakeel helps / can't do */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-6">
            <Card className={cardBase}>
              <CardHeader>
                <CheckCircle2 className="h-6 w-6 text-primary" />
                <CardTitle className="text-lg">What Wakeel.org can help with</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Explaining the relevant PECA provisions and helping you organize evidence for a
                  report, in plain English or Urdu.
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
                  It cannot file a complaint or removal request, or represent you — a licensed
                  advocate or the NCCIA directly should handle that.
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
      <section className="bg-background py-16 sm:py-20">
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
      <section className="bg-muted/40 py-14 sm:py-16">
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
            <Link href="/journal/article/cyberbullying-online-harassment-laws-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Cyberbullying and Online Harassment Laws in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/privacy-recording-without-consent-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Privacy and Recording Someone Without Consent in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/peca-act-pakistan-complete-guide-cybercrime-laws" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">PECA Act Pakistan: Complete Guide to Cybercrime Laws</p>
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
          <h2 className={sectionHeading}>Targeted by a deepfake?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel to help you understand your options and preserve evidence — then report it
            promptly to the NCCIA.
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
