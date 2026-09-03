import Link from "next/link";
import {
  CheckCircle2,
  Landmark,
  FileText,
  Stamp,
  Home,
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

const statutes = [
  { icon: FileText, title: "Transfer of Property Act, 1882", detail: "Sets the substantive rules for how property is legally sold, mortgaged, leased, exchanged, or gifted in Pakistan — the foundation everything else in this cluster builds on." },
  { icon: Landmark, title: "Registration Act, 1908", detail: "For most transfers of immovable property, registration at the Sub-Registrar's office is what actually makes a transfer legally recognized — a signed, unregistered sale agreement alone generally isn't enough." },
  { icon: Stamp, title: "Stamp Act, 1899", detail: "Governs the stamp duty payable on property documents, with rates set and periodically revised at the provincial level — an underpaid or unpaid stamp duty can leave a document legally weak or unusable as evidence." },
  { icon: Home, title: "Land Revenue Act, 1967 and provincial revenue rules", detail: "Governs the revenue record system — the fard, mutation (intiqal), and Patwar Khana process — that tracks who officially owns what, separately from (but tied to) the registered sale deed." },
  { icon: Scale, title: "Benami Transactions (Prohibition) Act, 2017", detail: "Prohibits holding property in someone else's name (benami) to disguise the real owner, and allows such property to be confiscated — relevant to anyone structuring a purchase through a relative's or associate's name." },
];

const transactionTypes = [
  "Sale — the most common transfer, executed by a registered sale deed and completed with mutation of the revenue record.",
  "Gift (Hiba) — a transfer without consideration, valid under Islamic law with immediate delivery of possession, though registration is still generally required for immovable property.",
  "Inheritance — property passing to legal heirs on death, governed by Muslim personal law or the Succession Act 1925 depending on the deceased's religion, with its own mutation process.",
  "Will (Wasiyat) — a testamentary transfer, subject under Islamic law to specific limits (generally up to one-third of the estate without the other heirs' consent).",
  "Exchange and court decree — property can also change hands through a formal exchange deed or as the outcome of a court judgment, each following its own registration and mutation steps.",
];

const faqs = [
  {
    question: "What are the main property laws in Pakistan?",
    answer:
      "The core framework is the Transfer of Property Act 1882 (substantive rules for sale, mortgage, lease, gift), the Registration Act 1908 (making transfers legally recognized), the Stamp Act 1899 (duty on property documents), and provincial land revenue law governing the fard and mutation process. Provincial laws — like Punjab's newer property protection legislation — add further layers on top of this federal base.",
  },
  {
    question: "Is a property sale valid without registration in Pakistan?",
    answer:
      "For most immovable property transactions, no — registration under the Registration Act 1908 at the Sub-Registrar's office is what makes the transfer legally recognized. A signed sale agreement without registration is generally not enough to establish legal ownership on its own.",
  },
  {
    question: "What's the difference between a sale deed and mutation?",
    answer:
      "The sale deed is the registered legal document transferring ownership. Mutation (intiqal) is the separate process of updating the revenue record (the fard) to reflect that new ownership — both steps are generally needed for a complete, legally clean transfer.",
  },
  {
    question: "Can property be legally held in someone else's name in Pakistan?",
    answer:
      "Generally no — the Benami Transactions (Prohibition) Act 2017 prohibits holding property in another person's name to disguise the real (beneficial) owner, and such benami property can be confiscated. If you're considering any arrangement like this, get a lawyer's read on it first.",
  },
  {
    question: "Can Wakeel.org help me understand Pakistani property law?",
    answer:
      "Wakeel.org can explain which law applies to a specific property situation — buying, selling, gifting, or inheriting — in plain English or Urdu, and help you organize documents and questions before you see a lawyer. It cannot verify a specific property's title, complete a transaction, or represent you — that needs a licensed property lawyer.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Property Laws in Pakistan: Complete Guide to Buying, Selling and Ownership",
    description:
      "The core legal framework behind property in Pakistan — the Transfer of Property Act, Registration Act, Stamp Act, and land revenue system — and how buying, selling, and ownership actually work.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-01-08",
    dateModified: "2026-01-08",
    mainEntityOfPage: `${site.url}/journal/article/property-laws-pakistan-complete-guide`,
    citation: [
      { "@type": "CreativeWork", name: "Benami Transactions (Prohibition) Act, 2017 — Pakistan Code (Ministry of Law and Justice)", url: "https://www.pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apaUY2NoaJg=-sg-jjjjjjjjjjjjj" },
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
        name: "Property Laws in Pakistan: Complete Guide",
        item: `${site.url}/journal/article/property-laws-pakistan-complete-guide`,
      },
    ],
  },
];

const keywords = [
  "property laws in pakistan",
  "buying property in pakistan",
  "selling property in pakistan",
  "property ownership pakistan",
  "transfer of property act 1882",
  "registration act 1908 pakistan",
].join(", ");

export default function PropertyLawsPakistanCompleteGuide() {
  return (
    <Layout>
      <MarketingSEO
        title="Property Laws in Pakistan: Complete Guide to Buying, Selling and Ownership"
        description="The core legal framework behind property in Pakistan — the Transfer of Property Act, Registration Act, Stamp Act, and land revenue system — and how buying, selling, and ownership actually work."
        path="/journal/article/property-laws-pakistan-complete-guide"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>
            Legal Help · Published January 8, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Property Laws in Pakistan: Complete Guide to Buying, Selling and Ownership
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Property is where more Pakistanis run into serious legal trouble than almost any other
            area of life. Start here for the framework — every other property guide on this
            Journal builds on what's below.
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
                Property transactions in Pakistan run on a stack of laws: the{" "}
                <strong>Transfer of Property Act 1882</strong> for substantive rules,{" "}
                <strong>registration</strong> under the Registration Act 1908 to make a transfer
                legally recognized, <strong>stamp duty</strong> under the Stamp Act 1899, and{" "}
                <strong>mutation</strong> of the provincial revenue record to update official
                ownership. Ownership can pass by sale, gift, inheritance, will, or court decree —
                each following its own process.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educate: statutes */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>The statutes that govern property</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {statutes.map((r) => {
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

      {/* Reveal: transaction types */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className={sectionHeading}>The five ways ownership actually changes hands</h2>
          </div>
          <Card className={cardBase}>
            <CardContent className="p-6">
              <ul className="space-y-3">
                {transactionTypes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Home className="h-5 w-5 text-primary shrink-0 mt-0.5" />
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
                  Explaining which law applies to your specific property situation, in plain
                  English or Urdu, and helping you organize documents and questions before you see
                  a lawyer.
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
                  It cannot verify a specific property's title, complete a registration or
                  mutation for you, or represent you — that needs a licensed property lawyer.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel which law applies — free
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
              { label: "Benami Transactions (Prohibition) Act, 2017 — Pakistan Code (Ministry of Law and Justice)", href: "https://www.pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apaUY2NoaJg=-sg-jjjjjjjjjjjjj" },
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
            <Link href="/journal/article/inheritance-and-property-rights-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Inheritance and Property Rights in Pakistan</p>
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
          <h2 className={sectionHeading}>Dealing with a property matter?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel to explain which law applies to your situation — then verify with a
            licensed property lawyer before you sign or pay anything.
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
