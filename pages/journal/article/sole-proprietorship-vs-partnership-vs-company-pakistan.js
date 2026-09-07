import Link from "next/link";
import {
  CheckCircle2,
  Users,
  Building,
  Scale,
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
  { icon: Users, title: "Sole proprietorship: you and the business are legally the same", detail: "No SECP registration needed — just an NTN from FBR's IRIS portal. But that simplicity comes at a real cost: the owner has unlimited personal liability, meaning personal assets are at risk if the business runs into debt or is sued." },
  { icon: Building, title: "Partnership: shared ownership, shared exposure", detail: "Governed by the Partnership Act 1932, a partnership is formed under a deed among two or more people (up to 20, or 10 for banking). The partnership/AOP gets its own NTN and pays its own tax, but an unregistered partnership can't sue to enforce its own contracts." },
  { icon: Scale, title: "Private limited company: a separate legal person", detail: "Registered with SECP under the Companies Act 2017, a private limited company has its own legal identity, distinct from its owners, with limited liability protecting personal assets — but it comes with higher setup costs, mandatory audits, and ongoing compliance obligations." },
  { icon: AlertTriangle, title: "The real trade-off is liability versus simplicity", detail: "A sole proprietorship is fastest and cheapest to start but leaves you fully exposed personally. A private limited company is the most protected but the most administratively demanding. A partnership sits in between — shared risk and shared responsibility, without full personal liability protection." },
];

const faqs = [
  {
    question: "Which is easiest to set up: sole proprietorship, partnership, or private limited company?",
    answer:
      "A sole proprietorship is the simplest — you only need an NTN from FBR, no SECP registration required. A partnership requires a partnership deed under the Partnership Act 1932. A private limited company requires full SECP registration under the Companies Act 2017, the most involved process of the three.",
  },
  {
    question: "Which business structure protects my personal assets in Pakistan?",
    answer:
      "Only a private limited company provides limited liability, treating the business as a separate legal person from its owners. Both sole proprietorships and unlimited partnerships expose the owner's or partners' personal assets to business debts and liabilities.",
  },
  {
    question: "How is each business structure taxed in Pakistan?",
    answer:
      "A sole proprietorship is taxed in the owner's personal tax return at individual slab rates. A partnership (AOP) is taxed at its own AOP slab rates, with profit distributed to partners generally exempt in their hands afterward. A private limited company is taxed at the corporate tax rate.",
  },
  {
    question: "Can an unregistered partnership sue to recover a debt in Pakistan?",
    answer:
      "No. Under Section 69 of the Partnership Act 1932, an unregistered partnership firm cannot file a lawsuit to enforce its contractual rights or recover debts — registration, while not mandatory to form a partnership, is required to access this legal remedy.",
  },
  {
    question: "Can Wakeel.org tell me which business structure I should choose?",
    answer:
      "Wakeel.org can explain the differences in liability, tax, and registration requirements between the three structures. It cannot recommend the specific structure for your business or handle the registration — a licensed advocate or company secretary can advise based on your specific plans.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Sole Proprietorship vs Partnership vs Private Limited Company in Pakistan",
    description:
      "How sole proprietorship, partnership, and private limited company structures differ in Pakistan — liability, taxation, and registration requirements compared.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-07-25",
    dateModified: "2026-07-25",
    mainEntityOfPage: `${site.url}/journal/article/sole-proprietorship-vs-partnership-vs-company-pakistan`,
    citation: [
      { "@type": "CreativeWork", name: "Sole Proprietorship vs Private Limited Company Pakistan 2026 — Global Law Experts", url: "https://globallawexperts.com/sole-proprietorship-vs-private-limited-company-pakistan-2026/" },
      { "@type": "CreativeWork", name: "Sole Proprietorship vs AOP vs Private Limited Company Pakistan — HS Advocate", url: "https://hsadvocate.com/sole-proprietorship-vs-aop-vs-private-limited-company-in-pakistan-2026-tax-rates-registration-compliance-compared/" },
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
        name: "Sole Proprietorship vs Partnership vs Private Limited Company in Pakistan",
        item: `${site.url}/journal/article/sole-proprietorship-vs-partnership-vs-company-pakistan`,
      },
    ],
  },
];

const keywords = [
  "sole proprietorship vs partnership vs company pakistan",
  "business structure comparison pakistan",
  "private limited company liability pakistan",
  "aop taxation pakistan",
  "which business structure pakistan",
  "sole proprietorship vs private limited pakistan",
].join(", ");

export default function SoleProprietorshipVsPartnershipVsCompanyPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Sole Proprietorship vs Partnership vs Private Limited Company in Pakistan"
        description="How sole proprietorship, partnership, and private limited company structures differ in Pakistan — liability, taxation, and registration requirements compared."
        path="/journal/article/sole-proprietorship-vs-partnership-vs-company-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>Legal Help · Published July 25, 2026</p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Sole Proprietorship vs Partnership vs Private Limited Company
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three structures, three very different answers to "what happens to my personal
            assets if this goes wrong?"
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
                A <strong>sole proprietorship</strong> is simplest (just an NTN) but leaves you{" "}
                <strong>fully personally liable</strong>. A <strong>partnership</strong>, formed
                under the Partnership Act 1932, shares ownership and liability among partners but
                needs registration to sue on its own contracts. A{" "}
                <strong>private limited company</strong>, registered with SECP, is a separate
                legal person with <strong>limited liability</strong> — the strongest protection,
                but with the highest compliance burden.
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
          <h2 className={sectionHeading}>The registration detail that surprises a lot of new partnerships</h2>
          <p className="text-muted-foreground leading-relaxed">
            A specific gap in the Partnership Act 1932, highlighted in guidance from{" "}
            <a href="https://khalidzafar.com/laws-of-pakistan/partnership-act-1932/" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
              Khalid Zafar & Associates
            </a>
            , catches many new business owners off guard: registering a partnership is legally{" "}
            <strong>optional</strong>, but an unregistered partnership loses the right to sue to
            enforce its own contracts or recover debts from third parties. In practice, this means
            a partnership can operate fine day-to-day without registering — right up until a
            dispute arises and the firm needs to go to court, at which point the lack of
            registration can leave it with no legal remedy at all.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            This is exactly why "we'll register later if we need to" is a risky plan for a
            partnership — by the time a dispute makes registration urgent, it may already be too
            late to use it for that specific claim.
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
                  Explaining the liability, tax, and registration differences between the three
                  structures, in plain English or Urdu.
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
                  It cannot recommend a specific structure for your business or handle
                  registration — a licensed advocate or company secretary can advise on that.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel to compare business structures — free
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
              { label: "Sole Proprietorship vs Private Limited Company Pakistan 2026 — Global Law Experts", href: "https://globallawexperts.com/sole-proprietorship-vs-private-limited-company-pakistan-2026/" },
              { label: "Partnership Act, 1932 — Khalid Zafar & Associates", href: "https://khalidzafar.com/laws-of-pakistan/partnership-act-1932/" },
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
            <Link href="/journal/article/how-to-register-a-company-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to Register a Company in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/partnership-deed-pakistan-legal-guide" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Partnership Deed in Pakistan: Legal Guide</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/business-partnership-dispute-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Business Partnership Dispute in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/breach-of-contract-legal-remedies-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Breach of Contract in Pakistan: Legal Remedies</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Choosing a structure for your business?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel to explain the differences — then get a licensed advocate or company
            secretary to advise on your specific plans.
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
