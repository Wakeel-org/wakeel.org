import Link from "next/link";
import {
  CheckCircle2,
  Gavel,
  Scale,
  FileText,
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
  { icon: FileText, title: "Section 499 PPC defines it, in plain terms", detail: "Making or publishing an imputation about someone — by words, signs, or visible representation — intending to harm their reputation, or knowing it's likely to, is defamation under Section 499. It applies to spoken statements, writing, and images alike." },
  { icon: Gavel, title: "Section 500 PPC sets the punishment", detail: "Criminal defamation carries up to 2 years' imprisonment, a fine, or both — notably lighter than PECA's online-specific defamation provision (Section 20, up to 3 years and a PKR 1 million fine), which is why the route chosen for an online statement can matter." },
  { icon: Scale, title: "Truth alone isn't automatically a defense", detail: "Section 499's own exceptions state that truth is only a defense if publishing it also serves the public good — a true but purely private, harmful statement doesn't automatically escape liability just because it's accurate." },
  { icon: AlertTriangle, title: "Two ways to start a case: police report or private complaint", detail: "A defamation complaint can be lodged at a police station, or filed as a private complaint directly before a Judicial Magistrate, who can direct police (or the FIA/NCCIA for online-linked matters) to investigate before deciding whether the case proceeds to trial." },
];

const faqs = [
  {
    question: "What is criminal defamation under Pakistani law?",
    answer:
      "Section 499 of the Pakistan Penal Code defines defamation as making or publishing an imputation about someone, intending to harm their reputation or knowing it's likely to. Section 500 sets the punishment at up to 2 years' imprisonment, a fine, or both.",
  },
  {
    question: "Is truth always a defense to a defamation charge in Pakistan?",
    answer:
      "Not automatically. Under the exceptions to Section 499, imputing something true is only a defense if it was also for the public good that it be published — a true statement made purely to harm someone privately doesn't automatically qualify.",
  },
  {
    question: "How do I file a criminal defamation complaint in Pakistan?",
    answer:
      "You can lodge a report at a police station, or file a private complaint directly before a Judicial Magistrate along with evidence (documents, recordings, witness statements) supporting the claim. The Magistrate can direct an investigation before deciding whether to proceed to trial.",
  },
  {
    question: "What's the difference between criminal defamation and online defamation in Pakistan?",
    answer:
      "Criminal defamation under Sections 499/500 PPC is the general, long-standing provision (up to 2 years' imprisonment) and applies regardless of medium. Online statements often instead get charged under Section 20 of PECA 2016 (up to 3 years and a PKR 1 million fine), which was written specifically for electronic communication — the two can sometimes overlap for the same online statement.",
  },
  {
    question: "Can Wakeel.org tell me if a statement counts as criminal defamation?",
    answer:
      "Wakeel.org can explain what Sections 499 and 500 PPC generally require and how the exceptions work. It cannot assess whether a specific statement meets the legal threshold or file a complaint — a licensed advocate should handle that.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Criminal Defamation Law in Pakistan",
    description:
      "How criminal defamation works under Sections 499 and 500 of the Pakistan Penal Code — what has to be proven, the exceptions, the punishment, and how it differs from PECA's online defamation provision.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-08-11",
    dateModified: "2026-08-11",
    mainEntityOfPage: `${site.url}/journal/article/criminal-defamation-law-pakistan`,
    citation: [
      { "@type": "CreativeWork", name: "How to File a Defamation Case in Pakistan (Civil & Criminal) — Kakakhel Law Associates", url: "https://www.kakakhellaw.com/how-to-file-a-defamation-case-in-pakistan-civil-criminal" },
      { "@type": "CreativeWork", name: "Criminal Defamation Laws in Pakistan and Their Use to Silence Victims — LUMS SAHSOL", url: "https://sahsol.lums.edu.pk/node/11446" },
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
        name: "Criminal Defamation Law in Pakistan",
        item: `${site.url}/journal/article/criminal-defamation-law-pakistan`,
      },
    ],
  },
];

const keywords = [
  "criminal defamation pakistan",
  "section 499 500 ppc defamation",
  "how to file defamation case pakistan",
  "defamation punishment pakistan",
  "defamation exceptions truth public good",
  "criminal defamation vs peca section 20",
].join(", ");

export default function CriminalDefamationLawPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Criminal Defamation Law in Pakistan"
        description="How criminal defamation works under Sections 499 and 500 of the Pakistan Penal Code — what has to be proven, the exceptions, the punishment, and how it differs from PECA's online defamation provision."
        path="/journal/article/criminal-defamation-law-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>Legal Help · Published August 11, 2026</p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Criminal Defamation Law in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The general-purpose defamation law behind almost every reputation dispute in
            Pakistan — not just the online cases PECA handles.
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
                <strong>Section 499 of the Pakistan Penal Code</strong> defines defamation as
                making or publishing a harmful imputation about someone, knowing or intending it
                to damage their reputation. <strong>Section 500</strong> punishes it with up to{" "}
                <strong>2 years' imprisonment</strong>, a fine, or both. Truth is a defense only
                where publishing it also serves the public good. You can start a case by reporting
                to police or filing a private complaint before a Judicial Magistrate.
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
          <h2 className={sectionHeading}>A documented pattern worth knowing before you file or respond</h2>
          <p className="text-muted-foreground leading-relaxed">
            Research published by{" "}
            <a href="https://sahsol.lums.edu.pk/node/11446" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
              LUMS SAHSOL
            </a>{" "}
            documents a specific misuse pattern with Sections 499/500: they've been used against
            people who publicly allege sexual harassment or abuse, turning a criminal defamation
            complaint into pressure against the original complainant. This doesn't mean the law is
            illegitimate — genuine defamation causes real harm — but it means the same provision
            can look very different depending on which side of a complaint you're on.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Practically, this is also why the choice of forum matters: guidance from{" "}
            <a href="https://www.kakakhellaw.com/how-to-file-a-defamation-case-in-pakistan-civil-criminal" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
              Kakakhel Law Associates
            </a>{" "}
            notes that a civil suit for damages under the Defamation Ordinance 2002 and a criminal
            complaint under Sections 499/500 PPC aren't mutually exclusive — someone deciding how
            to respond to reputational harm often has to weigh whether they want compensation, a
            criminal record against the other party, or both, and that choice shapes the entire
            strategy from the start.
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
                  Explaining how Sections 499 and 500 PPC generally work, the exceptions, and how
                  this differs from PECA's online defamation provision.
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
                  It cannot judge whether a specific statement meets the legal threshold, file a
                  complaint, or represent you — a licensed advocate should handle that.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel about a defamation issue — free
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
              { label: "How to File a Defamation Case in Pakistan (Civil & Criminal) — Kakakhel Law Associates", href: "https://www.kakakhellaw.com/how-to-file-a-defamation-case-in-pakistan-civil-criminal" },
              { label: "Criminal Defamation Laws in Pakistan and Their Use to Silence Victims — LUMS SAHSOL", href: "https://sahsol.lums.edu.pk/node/11446" },
              { label: "The Defamation Ordinance, 2002 — Punjab Laws", href: "http://punjablaws.gov.pk/laws/2219a.html" },
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
            <Link href="/journal/article/online-defamation-law-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Online Defamation Law in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/common-legal-sections-dafaat-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Common Legal Sections (Dafaat) in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/how-to-file-legal-complaint-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to File a Legal Complaint in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/understanding-legal-notices-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Understanding Legal Notices in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Dealing with a defamation issue?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel to explain your options — then verify with a licensed advocate before you
            file or respond.
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
