import Link from "next/link";
import {
  CheckCircle2,
  FileText,
  Stamp,
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
  { icon: FileText, title: "It's a sworn written statement, governed by the Oaths Act 1873", detail: "An affidavit is a written statement of facts, sworn or affirmed by the person making it (the deponent), typically used to formally place facts before a court or authority without the deponent appearing in person for every purpose." },
  { icon: Stamp, title: "Written on stamp paper, sworn before an oath commissioner", detail: "The affidavit is typed on stamp paper (the value depending on the subject matter), and the deponent signs it before an oath commissioner, notary public, or magistrate authorized under the Oaths Act 1873 to administer the oath and attest the document." },
  { icon: Gavel, title: "Common types you'll actually encounter", detail: "Affidavit of Identity (verifying who you are for government matters), Affidavit of Residence (confirming address for voter registration or school admission), and affidavits supporting court filings, property transactions, or NADRA/passport applications are among the most common." },
  { icon: AlertTriangle, title: "The format is simple, but the content is what matters", detail: "A clear title (\"Affidavit of [Name]\"), a statement that the deponent is affirming voluntarily under oath, the specific facts being sworn to, and the date, place, and attesting officer's signature — false statements in a sworn affidavit carry their own legal consequences." },
];

const faqs = [
  {
    question: "What is the format of an affidavit in Pakistan?",
    answer:
      "An affidavit is typed on stamp paper, with a clear title identifying the deponent, a statement that the facts are being sworn voluntarily under oath, the specific facts, and the date and place — then signed before an oath commissioner, notary public, or magistrate who attests it.",
  },
  {
    question: "Who can attest an affidavit in Pakistan?",
    answer:
      "An oath commissioner, notary public, or magistrate authorized under the Oaths Act 1873 can administer the oath and attest an affidavit — the specific requirement can depend on what the affidavit is being used for.",
  },
  {
    question: "What are the common types of affidavits in Pakistan?",
    answer:
      "Affidavit of Identity (for government-related identity verification), Affidavit of Residence (for voter registration, school admission), and affidavits supporting court cases, property transactions, or official applications are among the most common types.",
  },
  {
    question: "What happens if an affidavit contains false information?",
    answer:
      "Since an affidavit is a sworn statement, knowingly including false information in it carries its own legal consequences — it's treated more seriously than an ordinary unsworn statement precisely because it's made under oath.",
  },
  {
    question: "Can Wakeel.org generate an affidavit for me?",
    answer:
      "Yes — describe what the affidavit needs to state and its purpose, and Wakeel can generate a first draft in the standard format. You'll still need to sign it before an authorized oath commissioner, notary, or magistrate, and a licensed advocate can confirm the specific wording needed for your particular use.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Affidavit in Pakistan: Types, Format and Legal Requirements",
    description:
      "How affidavits work in Pakistan under the Oaths Act 1873 — the standard format, common types, attestation requirements, and how to generate a first draft with Wakeel.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-06-13",
    dateModified: "2026-06-13",
    mainEntityOfPage: `${site.url}/journal/article/affidavit-in-pakistan-types-format-legal-requirements`,
    citation: [
      { "@type": "CreativeWork", name: "The Oaths Act, 1873 — Khalid Zafar & Associates", url: "https://khalidzafar.com/laws-of-pakistan/the-oaths-act-1873/" },
      { "@type": "CreativeWork", name: "Attestation by Oath Commissioner and Notaries in Pakistan — Differences", url: "https://www.linkedin.com/pulse/attestation-affidavit-oath-commissioner-notaries-syeda-saima-shabbir" },
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
        name: "Affidavit in Pakistan: Types, Format and Legal Requirements",
        item: `${site.url}/journal/article/affidavit-in-pakistan-types-format-legal-requirements`,
      },
    ],
  },
];

const keywords = [
  "affidavit format pakistan",
  "affidavit types pakistan",
  "oaths act 1873 pakistan",
  "oath commissioner affidavit pakistan",
  "affidavit template pakistan",
  "affidavit generator pakistan",
].join(", ");

export default function AffidavitInPakistanTypesFormatLegalRequirements() {
  return (
    <Layout>
      <MarketingSEO
        title="Affidavit in Pakistan: Types, Format and Legal Requirements"
        description="How affidavits work in Pakistan under the Oaths Act 1873 — the standard format, common types, attestation requirements, and how to generate a first draft with Wakeel."
        path="/journal/article/affidavit-in-pakistan-types-format-legal-requirements"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>Legal Help · Published June 13, 2026</p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Affidavit in Pakistan: Types, Format and Legal Requirements
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A sworn statement on stamp paper — simple in structure, but the wording and the
            attesting officer both matter.
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
                An affidavit under the <strong>Oaths Act 1873</strong> is typed on{" "}
                <strong>stamp paper</strong>, states the facts the deponent is swearing to, and is
                signed before an <strong>oath commissioner, notary public, or magistrate</strong>{" "}
                who attests it. Common types include Affidavit of Identity and Affidavit of
                Residence.{" "}
                <a href={site.appUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Wakeel can generate a first draft
                </a>{" "}
                based on the facts you need to swear to.
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

      {/* Generate with Wakeel */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className={`${cardBase} border-primary/40`}>
            <CardHeader>
              <FileText className="h-7 w-7 text-primary" />
              <CardTitle className="text-xl">Generate your affidavit draft with Wakeel</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Tell Wakeel what facts the affidavit needs to state and what it's for —
                identity verification, a court filing, a property matter, or an official
                application — and it can generate a first draft in the standard format, in plain
                English or Urdu. You'll still need to sign it in person before an authorized oath
                commissioner, notary, or magistrate, and it's worth having a lawyer confirm the
                exact wording your specific use case requires.
              </p>
              <div className="text-center">
                <Button asChild size="lg" className="cta-try-free">
                  <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                    Generate an affidavit draft — free
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Reveal: prose with inline sources */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <h2 className={sectionHeading}>Oath commissioner or notary — the distinction that actually matters</h2>
          <p className="text-muted-foreground leading-relaxed">
            A common point of confusion, addressed in detail in{" "}
            <a href="https://www.linkedin.com/pulse/attestation-affidavit-oath-commissioner-notaries-syeda-saima-shabbir" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
              this comparison of oath commissioners and notaries in Pakistan
            </a>
            , is that the two roles, while related, aren't always interchangeable for every
            purpose — some authorities or institutions specify which type of attestation they'll
            accept. Before finalizing an affidavit for a specific official purpose (a foreign
            embassy, a particular government department, a court), it's worth confirming which
            attesting authority that recipient actually requires, rather than assuming any
            attestation will do.
          </p>
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
                  Generating a first draft of an affidavit in the standard format, based on the
                  facts you need to state.
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
                  It cannot administer the oath, attest the document, or confirm which attesting
                  authority your specific use requires — that needs an oath commissioner, notary,
                  or magistrate, and possibly a licensed advocate's guidance.
                </p>
              </CardContent>
            </Card>
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
          <h2 className="text-lg font-semibold text-foreground mb-4">Sources — check these directly to verify</h2>
          <ul className="space-y-2">
            {[
              { label: "The Oaths Act, 1873 — Khalid Zafar & Associates", href: "https://khalidzafar.com/laws-of-pakistan/the-oaths-act-1873/" },
              { label: "Attestation by Oath Commissioner and Notaries in Pakistan — Differences", href: "https://www.linkedin.com/pulse/attestation-affidavit-oath-commissioner-notaries-syeda-saima-shabbir" },
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
            <Link href="/journal/article/power-of-attorney-in-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Power of Attorney in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/nadra-biometric-verification-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">NADRA Biometric Verification Issues in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/sale-agreement-for-property-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Sale Agreement for Property in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/how-to-file-legal-complaint-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to File a Legal Complaint in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Need to prepare an affidavit?</h2>
          <p className="text-muted-foreground">
            Describe the facts, and let Wakeel put together a first draft — then sign it before
            an authorized attesting officer.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">Generate a Draft with Wakeel</a>
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
