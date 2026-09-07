import Link from "next/link";
import {
  CheckCircle2,
  Home,
  Wallet,
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

const sections = [
  { icon: Home, title: "Property description and price", detail: "The complete address, area, and survey/khasra numbers, the total sale price, and the payment schedule — the token amount, installment dates, and balance payment date." },
  { icon: Wallet, title: "Earnest money (biana) terms", detail: "How much advance is paid, and the consequence if either party backs out — commonly, the buyer forfeits the earnest money if they withdraw, and the seller returns double the amount received if they default." },
  { icon: ShieldAlert, title: "Title guarantee and possession", detail: "The seller's guarantee that the property is free of mortgages, court stays, and government tax liabilities, plus a specific date for handing over possession." },
  { icon: AlertTriangle, title: "This is not the sale deed — know the difference", detail: "A sale agreement (Iqrar Nama Farokht / Bay-Nama) only creates a personal right to enforce a future sale; it doesn't transfer ownership. Under Section 54 of the Transfer of Property Act 1882, actual ownership transfers only through a registered sale deed." },
];

const faqs = [
  {
    question: "What should a property sale agreement in Pakistan include?",
    answer:
      "The property's exact description and price, the payment schedule (including any earnest money/biana), the seller's guarantee of clear title, the possession handover date, and penalties if either party backs out — with witness signatures from the buyer and seller.",
  },
  {
    question: "Is a sale agreement the same as a sale deed in Pakistan?",
    answer:
      "No. A sale agreement (agreement to sell) only creates a personal right to enforce a future transfer — it doesn't transfer ownership. Ownership only transfers through a registered sale deed, required under Section 54 of the Transfer of Property Act 1882 for property sales above PKR 100.",
  },
  {
    question: "What happens to the earnest money if a property deal falls through?",
    answer:
      "As a standard practice in Pakistan, if the buyer backs out, they typically forfeit the earnest money (biana). If the seller defaults, they're often required to return double the earnest money received — though the exact terms depend on what the agreement itself specifies.",
  },
  {
    question: "What's the biggest mistake buyers make with a sale agreement?",
    answer:
      "Paying the full price under an agreement to sell and never getting the sale deed registered — this leaves the buyer without actual legal ownership, since the agreement to sell alone doesn't transfer title.",
  },
  {
    question: "Can Wakeel.org generate a sale agreement for property in Pakistan?",
    answer:
      "Yes — describe the property, price, and payment terms, and Wakeel can generate a first draft covering the standard sections. Have a licensed advocate review it, verify the seller's title, and ensure the sale deed itself gets properly registered once the sale is finalized.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Sale Agreement for Property in Pakistan",
    description:
      "The standard structure of a property sale agreement in Pakistan — price, earnest money, title guarantee — and how it differs from a sale deed. Plus how to generate a first draft with Wakeel.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-06-17",
    dateModified: "2026-06-17",
    mainEntityOfPage: `${site.url}/journal/article/sale-agreement-for-property-pakistan`,
    citation: [
      { "@type": "CreativeWork", name: "Agreement to Sell vs Sale Deed — LexForm", url: "https://lex-form.com/blog/agreement-to-sell-vs-sale-deed-pakistan.html" },
      { "@type": "CreativeWork", name: "The Transfer of Property Act, 1882 — Punjab Laws", url: "http://punjablaws.gov.pk/laws/8c.html" },
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
        name: "Sale Agreement for Property in Pakistan",
        item: `${site.url}/journal/article/sale-agreement-for-property-pakistan`,
      },
    ],
  },
];

const keywords = [
  "sale agreement for property pakistan",
  "iqrar nama farokht format",
  "bay nama sample pakistan",
  "agreement to sell vs sale deed pakistan",
  "earnest money biana pakistan",
  "property sale agreement generator pakistan",
].join(", ");

export default function SaleAgreementForPropertyPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Sale Agreement for Property in Pakistan"
        description="The standard structure of a property sale agreement in Pakistan — price, earnest money, title guarantee — and how it differs from a sale deed. Plus how to generate a first draft with Wakeel."
        path="/journal/article/sale-agreement-for-property-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>Legal Help · Published June 17, 2026</p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Sale Agreement for Property in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The "Iqrar Nama Farokht" — the document that promises a sale, but doesn't transfer
            ownership on its own.
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
                A property sale agreement (<strong>Iqrar Nama Farokht / Bay-Nama</strong>) should
                cover the property description and price, the{" "}
                <strong>earnest money (biana)</strong> terms, a{" "}
                <strong>title guarantee</strong>, and the possession date. It's a{" "}
                <strong>promise to sell, not the transfer itself</strong> — ownership only passes
                through a registered <strong>sale deed</strong>.{" "}
                <a href={site.appUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Wakeel can generate a first draft
                </a>{" "}
                of the agreement based on your transaction details.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educate: sections */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>The sections, one at a time</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {sections.map((r) => {
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
              <Home className="h-7 w-7 text-primary" />
              <CardTitle className="text-xl">Generate your property sale agreement with Wakeel</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Describe the property, the agreed price, and the payment schedule, and Wakeel can
                generate a first draft of the sale agreement covering the standard sections. Have
                a licensed advocate verify the seller's title and review the agreement before you
                pay any earnest money, and make sure the actual sale deed gets registered once the
                deal is finalized — that's the step that legally transfers ownership.
              </p>
              <div className="text-center">
                <Button asChild size="lg" className="cta-try-free">
                  <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                    Generate a sale agreement draft — free
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
          <h2 className={sectionHeading}>The mistake that leaves buyers without real ownership</h2>
          <p className="text-muted-foreground leading-relaxed">
            A detailed comparison from{" "}
            <a href="https://lex-form.com/blog/agreement-to-sell-vs-sale-deed-pakistan.html" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
              LexForm
            </a>{" "}
            flags a documented, repeated mistake: buyers pay the full price under an agreement to
            sell and never follow through on getting a registered sale deed. Because the agreement
            to sell only creates a personal right to enforce a future transfer — it doesn't itself
            transfer ownership — a buyer in this position can end up having paid in full without
            actually owning the property in the eyes of the law.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The practical lesson: treat the sale agreement as step one, not the finish line —
            budget time and cost for the sale deed's registration under the Transfer of Property
            Act 1882 as a required next step, not an optional formality.
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
                  Generating a first draft of a property sale agreement from the details you
                  describe.
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
                  It cannot verify the seller's title, hold earnest money, or register the sale
                  deed — a licensed advocate and the Sub-Registrar's office should handle that.
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
              { label: "Agreement to Sell vs Sale Deed — LexForm", href: "https://lex-form.com/blog/agreement-to-sell-vs-sale-deed-pakistan.html" },
              { label: "The Transfer of Property Act, 1882 — Punjab Laws", href: "http://punjablaws.gov.pk/laws/8c.html" },
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
            <Link href="/journal/article/how-to-verify-property-before-buying-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to Verify Property Before Buying in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/property-transfer-mutation-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Property Transfer and Mutation Process in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/power-of-attorney-in-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Power of Attorney in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/fard-vs-intiqal-vs-registry-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Fard vs Intiqal vs Registry: The Difference Explained</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Buying or selling property?</h2>
          <p className="text-muted-foreground">
            Describe the deal, and let Wakeel put together a first draft — then get a lawyer to
            verify title and finalize the sale deed.
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
