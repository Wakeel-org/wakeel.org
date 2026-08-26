import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Landmark,
  Home,
  HelpCircle,
  AlertTriangle,
  ListChecks,
  Stamp,
} from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site } from "../../../src/data/marketing";
import { cardBase, eyebrow, headingGradient, sectionHeading } from "../../../src/data/theme";

const steps = [
  {
    icon: FileText,
    title: "1. Understand what 'fard' and 'mutation' actually mean",
    detail:
      "The fard (fard-e-malkiat) is the record-of-rights extract showing current ownership of a specific piece of land, issued from the revenue record. Mutation (intiqal) is the process of updating that revenue record to reflect a change in ownership — through sale, inheritance, gift, or court order. The fard is the snapshot; mutation is the update process that produces a new one.",
  },
  {
    icon: Landmark,
    title: "2. Execute and register the transfer document",
    detail:
      "For a sale, the sale deed must be executed and, under the Registration Act 1908, registered at the Sub-Registrar's office for the area where the property is located — for most transfers of immovable property, registration is what makes the transfer legally recognized, not just the signed agreement.",
  },
  {
    icon: Stamp,
    title: "3. Pay the applicable stamp duty and taxes",
    detail:
      "Property transfers attract stamp duty under the Stamp Act 1899 (rates and any provincial adjustments vary by province and are updated periodically), plus other applicable taxes such as capital value tax or advance tax depending on current provincial and federal rules. Confirm current rates with the registrar's office or a lawyer, since these figures change.",
  },
  {
    icon: ListChecks,
    title: "4. Apply for mutation at the relevant revenue office",
    detail:
      "After registration, apply for mutation at the Patwar Khana / relevant Land Revenue office (or through provincial digital land record systems now available in parts of Pakistan, such as Punjab's Land Records Management Information System) with the registered deed, CNIC copies, and prior ownership documents. The Patwari or relevant revenue official verifies the documents and updates the record.",
  },
  {
    icon: Home,
    title: "5. Get the updated fard after mutation is sanctioned",
    detail:
      "Once mutation is sanctioned (often after a formal verification and, in some processes, a Girdawari or field verification), an updated fard is issued in the new owner's name. This updated fard is your proof of current, recorded ownership — keep the original and copies safely.",
  },
  {
    icon: AlertTriangle,
    title: "6. Watch for common complications",
    detail:
      "Disputed ownership, unclear inheritance shares, unpaid dues on the property, or discrepancies between the sale deed and the existing revenue record can all delay or block mutation. These are exactly the situations where a property lawyer's involvement before you pay, not after, saves real money and time.",
  },
];

const beforeBuying = [
  "Get a current fard before finalizing any purchase — an outdated one can hide liens, disputes, or a different recorded owner than the seller claims.",
  "Confirm there's no pending litigation on the property by checking with the relevant court or asking your lawyer to check.",
  "Verify the seller's CNIC matches the ownership record exactly, and check for any name discrepancies that need resolving first.",
  "Budget for stamp duty, registration fees, and mutation costs upfront — these add a meaningful percentage to the purchase price.",
  "Don't rely on a photocopy of an old fard from the seller — request or independently verify a recent one.",
];

const faqs = [
  {
    question: "What is property mutation in Pakistan?",
    answer:
      "Mutation (intiqal) is the process of updating the government's revenue record to reflect a change in property ownership — following a sale, inheritance, gift, or court order. It's a separate step from registering the transfer deed, and it's what produces an updated fard (record-of-rights) in the new owner's name.",
  },
  {
    question: "What is fard registration and why does it matter?",
    answer:
      "The fard (fard-e-malkiat) is the official extract from the revenue record showing who currently owns a specific piece of land. It matters because it's your practical proof of recorded ownership — buyers should always verify a current fard before purchase, and sellers need mutation completed to have an accurate fard reflecting their ownership.",
  },
  {
    question: "What is the property transfer procedure in Pakistan?",
    answer:
      "Broadly: execute a sale deed, register it at the Sub-Registrar's office under the Registration Act 1908 (paying applicable stamp duty under the Stamp Act 1899), then apply for mutation at the relevant Land Revenue office so the record-of-rights is updated to the new owner. Provincial digital land record systems have streamlined parts of this process in some areas, but the underlying steps are broadly similar across Pakistan.",
  },
  {
    question: "How long does property mutation take in Pakistan?",
    answer:
      "Timelines vary by province, whether records are digitized in that area, and whether there are any complications (disputed ownership, unclear inheritance shares, unpaid dues). It can range from a few weeks in straightforward cases to much longer if verification issues arise — ask the relevant revenue office or your lawyer for a realistic estimate for your specific area.",
  },
  {
    question: "Can Wakeel.org help me understand property transfer or mutation documents?",
    answer:
      "Yes — Wakeel.org can explain terms like fard, mutation, or registration in plain English or Urdu, summarize a sale deed or fard extract, and help you build a checklist of what to verify before a purchase. It cannot verify title, check court records for pending disputes, process a mutation application, or replace a property lawyer's due diligence.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Property Transfer and Mutation Process in Pakistan",
    description:
      "How property transfer and mutation actually work in Pakistan — registration, stamp duty, the Patwar Khana process, and what to verify before you buy.",
    author: { "@type": "Organization", name: "Wakeel.org" },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-08-04",
    dateModified: "2026-08-04",
    mainEntityOfPage: `${site.url}/journal/article/property-transfer-mutation-pakistan`,
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Property transfer and mutation process in Pakistan",
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
        name: "Property Transfer and Mutation Process in Pakistan",
        item: `${site.url}/journal/article/property-transfer-mutation-pakistan`,
      },
    ],
  },
];

const keywords = [
  "fard registration pakistan",
  "property mutation pakistan",
  "property transfer procedure",
  "intiqal process pakistan",
  "land record pakistan",
  "sale deed registration pakistan",
].join(", ");

export default function PropertyTransferMutationPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Property Transfer and Mutation Process in Pakistan"
        description="How property transfer and mutation work in Pakistan — sale deed registration, stamp duty, the Patwar Khana process, and what to verify before buying."
        path="/journal/article/property-transfer-mutation-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>
            Legal Help · Published August 4, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Property Transfer and Mutation Process in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A signed sale deed doesn't automatically make you the recorded owner — mutation is the
            step that actually updates the government's record, and skipping it (or not
            understanding it) is where a lot of property disputes quietly begin.
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
                Transferring property in Pakistan involves executing and registering a sale deed
                under the <strong>Registration Act 1908</strong>, paying stamp duty under the{" "}
                <strong>Stamp Act 1899</strong>, and then applying for <strong>mutation
                (intiqal)</strong> at the relevant Land Revenue office so the government's
                record-of-rights (<strong>fard</strong>) is updated to show you as the owner.
                Verify a current fard and check for disputes before buying — this single step
                prevents most of the common property complications in Pakistan.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>The process, step by step</h2>
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

      {/* Before buying */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className={sectionHeading}>Before you buy or sell</h2>
          </div>
          <Card className={cardBase}>
            <CardContent className="p-6">
              <ul className="space-y-3">
                {beforeBuying.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{b}</span>
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
                  Explaining fard, mutation, and registration in plain English or Urdu,
                  summarizing a sale deed or fard extract, and helping you build a due-diligence
                  checklist before a property transaction.
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
                  It cannot verify title, check court records for pending disputes, submit a
                  mutation application, or replace a property lawyer's due diligence before you
                  commit money.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Understand your property documents with Wakeel Free
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
            General educational information, not legal advice. Property procedures, fees, and
            digitization vary by province and change over time — verify current requirements with
            the relevant registrar or revenue office, or a licensed advocate. See our{" "}
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
              href="/journal/article/property-dispute-lawyer-pakistan"
              className={`group ${cardBase} block rounded-lg p-5`}
            >
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                Finding a Property Dispute Lawyer in Pakistan
              </p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link
              href="/journal/legal-issues-pakistan/property-document-check-pakistan"
              className={`group ${cardBase} block rounded-lg p-5`}
            >
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                Property Document Check Support in Pakistan
              </p>
              <p className="text-xs text-muted-foreground mt-1">Guide · Wakeel Journal</p>
            </Link>
            <Link
              href="/journal/legal-issues-pakistan/property-disputes-pakistan"
              className={`group ${cardBase} block rounded-lg p-5`}
            >
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                Property Disputes in Pakistan
              </p>
              <p className="text-xs text-muted-foreground mt-1">Guide · Wakeel Journal</p>
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
          <h2 className={sectionHeading}>Buying or transferring property?</h2>
          <p className="text-muted-foreground">
            Upload your fard or sale deed and get a plain-language summary before you sign
            anything or hand over payment.
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
