import Link from "next/link";
import {
  CheckCircle2,
  ShieldAlert,
  Scale,
  Gavel,
  HelpCircle,
  AlertTriangle,
} from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site } from "../../../src/data/marketing";
import { cardBase, eyebrow, headingGradient, sectionHeading } from "../../../src/data/theme";

const framework = [
  { icon: ShieldAlert, title: "Recording and sharing are treated differently", detail: "The act of privately recording something you're directly a part of sits differently in law than sharing it further — Section 21 of PECA specifically targets transmitting, publishing, or distributing sexually explicit or intimate material of a person without consent, or in violation of a reasonable expectation of privacy." },
  { icon: Scale, title: "Article 14's privacy protection is the constitutional backdrop", detail: "The Constitution's Article 14 protects the dignity of man and privacy of home, which courts have extended in interpretation to broader personal privacy interests — the constitutional principle underlying the specific statutory offences." },
  { icon: Gavel, title: "Formal interception of communications needs a warrant", detail: "Where a third party (rather than a participant) wants to intercept or record someone else's private communications for investigative purposes, the Investigation for Fair Trial Act 2013 requires a High Court warrant — unauthorized interception outside this framework carries its own legal risk." },
  { icon: ShieldAlert, title: "Consent, and the context of recording, both matter", detail: "Whether a recording was made with awareness and consent of the parties, in a place with a reasonable expectation of privacy, and what was subsequently done with it, all affect the legal analysis — this is genuinely fact-specific, not a single blanket rule." },
];

const faqs = [
  {
    question: "Is it illegal to record someone without their consent in Pakistan?",
    answer:
      "It depends on the context and what happens next. Recording something you're directly part of is treated differently from covert surveillance of others, and sharing or distributing sexually explicit or intimate material without consent is specifically criminalised under Section 21 of PECA, regardless of how it was originally obtained.",
  },
  {
    question: "Can I be prosecuted for sharing a video or photo of someone without their permission?",
    answer:
      "Potentially yes, particularly if it's intimate or sexually explicit material — Section 21 PECA covers transmitting or distributing such content without consent, with real criminal penalties.",
  },
  {
    question: "What law protects my privacy in Pakistan?",
    answer:
      "Article 14 of the Constitution establishes the underlying privacy principle, with specific statutory protection through PECA (against non-consensual sharing of intimate content) and the Investigation for Fair Trial Act 2013 (governing lawful interception by investigators).",
  },
  {
    question: "Can someone secretly record my phone calls in Pakistan?",
    answer:
      "Unauthorized interception of private communications by a third party carries real legal risk, and formal, lawful interception for investigative purposes requires a High Court warrant under the Investigation for Fair Trial Act 2013 — it isn't something anyone can simply do on their own initiative.",
  },
  {
    question: "Can Wakeel.org explain my privacy rights around recording?",
    answer:
      "Wakeel.org can explain the general legal principles and relevant PECA provisions, in plain English or Urdu. It cannot assess a specific recording's legality or represent you — a licensed advocate should review the exact facts.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Privacy and Recording Someone Without Consent in Pakistan",
    description:
      "The legal framework around recording and sharing someone without consent in Pakistan — Article 14 privacy, PECA Section 21, and the Investigation for Fair Trial Act 2013.",
    author: { "@type": "Organization", name: "Wakeel.org" },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-05-06",
    dateModified: "2026-05-06",
    mainEntityOfPage: `${site.url}/journal/article/privacy-recording-without-consent-pakistan`,
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
        name: "Privacy and Recording Someone Without Consent in Pakistan",
        item: `${site.url}/journal/article/privacy-recording-without-consent-pakistan`,
      },
    ],
  },
];

const keywords = [
  "recording someone without consent pakistan",
  "privacy law pakistan",
  "peca section 21 privacy",
  "investigation for fair trial act 2013",
  "sharing photos without consent pakistan law",
].join(", ");

export default function PrivacyRecordingWithoutConsentPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Privacy and Recording Someone Without Consent in Pakistan"
        description="The legal framework around recording and sharing someone without consent in Pakistan — Article 14 privacy, PECA Section 21, and the Investigation for Fair Trial Act 2013."
        path="/journal/article/privacy-recording-without-consent-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>
            Legal Help · Published May 6, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Privacy and Recording Someone Without Consent in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            "Everyone records everything now" doesn't mean the law treats every recording, or every
            share, the same way. Here's where consent, context, and distribution actually matter.
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
                Privacy rests on <strong>Article 14</strong> of the Constitution. Sharing intimate
                or sexually explicit material without consent is specifically criminalised under{" "}
                <a href="https://www.pakistancode.gov.pk/pdffiles/administrator6a061efe0ed5bd153fa8b79b8eb4cba7.pdf" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
                  PECA Section 21
                </a>
                . A third party formally intercepting someone else's communications for
                investigative purposes needs a{" "}
                <strong>High Court warrant</strong> under the{" "}
                <a href="https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apaUY2FqbZw=-sg-jjjjjjjjjjjjj" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
                  Investigation for Fair Trial Act 2013
                </a>
                . Context and consent both genuinely matter.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educate: framework */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>The framework, piece by piece</h2>
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
                  Explaining the general legal principles and relevant PECA provisions, in plain
                  English or Urdu.
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
                  It cannot assess a specific recording's legality or represent you — a licensed
                  advocate should review the exact facts.
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
              { label: "The Investigation for Fair Trial Act, 2013 — Pakistan Code (Ministry of Law and Justice)", href: "https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apaUY2FqbZw=-sg-jjjjjjjjjjjjj" },
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
            <Link href="/journal/article/can-police-check-mobile-phone-without-permission-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Can Police Check Your Mobile Phone Without Permission?</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/deepfakes-in-pakistan-legal-risks-punishment" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Deepfakes in Pakistan: Legal Risks and Punishment</p>
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
          <h2 className={sectionHeading}>Have a privacy question?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel to explain the general legal position — then get a licensed advocate to
            review your specific facts.
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
