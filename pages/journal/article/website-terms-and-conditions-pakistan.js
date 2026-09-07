import Link from "next/link";
import {
  CheckCircle2,
  FileText,
  Gavel,
  ShieldCheck,
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
  { icon: Gavel, title: "The legal foundation is the ETO 2002, not a dedicated \"website law\"", detail: "The Electronic Transactions Ordinance 2002 recognises and facilitates electronic documents, records, and transactions — it's the backbone that makes a website's terms and conditions and electronic acceptance legally meaningful in Pakistan, even though it doesn't spell out a mandatory T&C checklist." },
  { icon: FileText, title: "What terms and conditions actually need to establish", detail: "At a minimum: what the website or service does, the rules for using it, payment and refund terms if applicable, limitation of liability, and how disputes will be resolved — the goal is a clear contract between the site and its users, enforceable under the ordinary Contract Act 1872." },
  { icon: ShieldCheck, title: "PECA adds real teeth around data misuse", detail: "Section 38 of PECA 2016 makes it a criminal offence — up to 3 years' imprisonment or a fine up to PKR 1 million — for a service provider to transfer someone's personal or sensitive data without consent, which directly shapes what a website's terms need to say about how user data is handled." },
  { icon: AlertTriangle, title: "There's no comprehensive data protection law yet", detail: "As of this writing, Pakistan doesn't have a dedicated data protection statute — the Personal Data Protection Bill has Cabinet approval but is still awaiting enactment by Parliament. Until it passes, PECA and general contract law are what actually govern most of this territory." },
];

const faqs = [
  {
    question: "What law governs website terms and conditions in Pakistan?",
    answer:
      "There's no dedicated law requiring specific website terms — the Electronic Transactions Ordinance 2002 provides the legal recognition for electronic agreements, and the terms themselves are enforced as an ordinary contract under the Contract Act 1872.",
  },
  {
    question: "Do Pakistani websites legally need terms and conditions?",
    answer:
      "There's no blanket legal mandate requiring every website to publish terms and conditions, but any site that sells goods, collects payments, or processes user data should have clear terms to establish an enforceable agreement with users and to limit liability.",
  },
  {
    question: "What should website terms and conditions cover in Pakistan?",
    answer:
      "What the service does, acceptable use rules, payment and refund terms (if applicable), limitation of liability, and how disputes are resolved — enough to form a clear, enforceable contract between the site and its users.",
  },
  {
    question: "Is there a data protection law for Pakistani websites?",
    answer:
      "Not yet a comprehensive one. The Personal Data Protection Bill has Cabinet approval but hasn't been enacted by Parliament. In the meantime, Section 38 of PECA 2016 criminalises unauthorized transfer of personal or sensitive data by a service provider.",
  },
  {
    question: "Can Wakeel.org draft terms and conditions for my website?",
    answer:
      "Wakeel.org can explain what terms and conditions generally need to cover and how the legal framework currently works. It cannot draft the final document or confirm its enforceability for your specific site — a licensed advocate should handle that.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Terms and Conditions for Pakistani Websites",
    description:
      "The legal framework behind website terms and conditions in Pakistan — the Electronic Transactions Ordinance 2002, PECA's data provisions, and what terms should cover.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-07-30",
    dateModified: "2026-07-30",
    mainEntityOfPage: `${site.url}/journal/article/website-terms-and-conditions-pakistan`,
    citation: [
      { "@type": "CreativeWork", name: "The Electronic Transactions Ordinance, 2002 — Pakistan Code", url: "https://pakistancode.gov.pk/pdffiles/administratordbc98dd49f2df3b1d07bb986dcceb9a3.pdf" },
      { "@type": "CreativeWork", name: "Pakistan Data Privacy Laws: PECA and Personal Data Protection Bill Guide — RecordingLaw", url: "https://www.recordinglaw.com/world-laws/world-data-privacy-laws/pakistan-data-privacy-laws/" },
    ],
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
        name: "Terms and Conditions for Pakistani Websites",
        item: `${site.url}/journal/article/website-terms-and-conditions-pakistan`,
      },
    ],
  },
];

const keywords = [
  "website terms and conditions pakistan",
  "electronic transactions ordinance 2002",
  "does my website need terms and conditions pakistan",
  "peca section 38 data",
  "personal data protection bill pakistan",
  "website legal requirements pakistan",
].join(", ");

export default function WebsiteTermsAndConditionsPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Terms and Conditions for Pakistani Websites"
        description="The legal framework behind website terms and conditions in Pakistan — the Electronic Transactions Ordinance 2002, PECA's data provisions, and what terms should cover."
        path="/journal/article/website-terms-and-conditions-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>Legal Help · Published July 30, 2026</p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Terms and Conditions for Pakistani Websites
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            There's no single "website law" in Pakistan — here's the actual patchwork of laws that
            govern what your terms and conditions need to do.
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
                Website terms and conditions in Pakistan are enforced as an ordinary contract
                under the <strong>Contract Act 1872</strong>, with the{" "}
                <strong>Electronic Transactions Ordinance 2002</strong> giving electronic
                agreements legal recognition. There's no mandatory checklist, but terms should
                cover what your service does, usage rules, payment/refund terms, liability limits,
                and dispute resolution. <strong>PECA Section 38</strong> separately criminalises
                unauthorized transfer of user data — relevant to any privacy language your terms
                include.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educate: framework */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>The framework, layer by layer</h2>
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

      {/* Reveal: prose with inline sources */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <h2 className={sectionHeading}>Why "copy a template" is riskier here than it looks</h2>
          <p className="text-muted-foreground leading-relaxed">
            Because Pakistan's legal framework for websites is genuinely a patchwork — general
            contract law, the ETO 2002, and PECA's data provisions, without a single unified
            "website law" — a terms-and-conditions template built for another country's legal
            system can miss important local details. A U.S.- or EU-style template, for instance,
            might assume a comprehensive data protection law exists that Pakistan doesn't
            currently have, or reference consumer protection mechanisms that don't map cleanly
            onto Pakistan's provincial consumer protection acts.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The safer approach is treating a generic template as a starting structure, then having
            someone familiar with Pakistani contract and cyber law adjust the specifics — the
            liability, data-handling, and dispute-resolution clauses in particular — rather than
            publishing an unmodified template and assuming it's legally sound here.
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
                  Explaining what terms and conditions generally need to cover under Pakistani
                  law, in plain English or Urdu.
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
                  It cannot draft the final terms or confirm legal compliance for your specific
                  website — a licensed advocate should handle that.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel about website terms — free
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
              { label: "The Electronic Transactions Ordinance, 2002 — Pakistan Code (Ministry of Law and Justice)", href: "https://pakistancode.gov.pk/pdffiles/administratordbc98dd49f2df3b1d07bb986dcceb9a3.pdf" },
              { label: "Pakistan Data Privacy Laws: PECA and Personal Data Protection Bill Guide — RecordingLaw", href: "https://www.recordinglaw.com/world-laws/world-data-privacy-laws/pakistan-data-privacy-laws/" },
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
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`${sectionHeading} text-center mb-8`}>Related reading</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/journal/article/privacy-policy-requirements-pakistan-websites" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Privacy Policy Requirements for Pakistani Websites</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/ecommerce-refund-return-laws-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">E-Commerce Refund and Return Laws in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/non-disclosure-agreement-nda-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Non-Disclosure Agreement (NDA) in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/peca-act-pakistan-complete-guide-cybercrime-laws" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">PECA Act Pakistan: Complete Guide to Cybercrime Laws</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Building a website's legal pages?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel what to cover — then get a licensed advocate to finalize the terms.
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
