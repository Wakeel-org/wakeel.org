import Link from "next/link";
import {
  CheckCircle2,
  Home,
  Users,
  Gift,
  ScrollText,
  Gavel,
  HelpCircle,
  AlertTriangle,
} from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site } from "../../../src/data/marketing";
import { cardBase, headingGradient, sectionHeading } from "../../../src/data/theme";

const ownershipTypes = [
  { icon: Home, title: "Freehold ownership", detail: "The owner holds the property outright, with the right to sell, gift, mortgage, or bequeath it, subject to general law — the most complete form of ownership recognized." },
  { icon: ScrollText, title: "Leasehold ownership", detail: "Common in certain government-allotted or development-authority schemes, where the allottee holds rights for a specified lease period under the terms of the allotment, rather than outright freehold title — the exact rights depend entirely on the lease terms." },
  { icon: Users, title: "Joint or co-ownership", detail: "Where two or more people hold undivided shares in the same property — common among siblings who inherit jointly, or spouses who purchase together. Each co-owner's share can generally be sold or transferred, but practical use of the property often needs the co-owners' agreement or a formal partition." },
];

const transferInstruments = [
  { icon: ScrollText, title: "Sale deed", detail: "The standard instrument for a sale, executed for consideration and registered under the Registration Act 1908, followed by mutation of the revenue record." },
  { icon: Gift, title: "Gift (Hiba)", detail: "A transfer without consideration. Under Islamic law, a valid Hiba generally requires a clear declaration, acceptance, and delivery of possession — registration is still the practical step needed to update official records for immovable property." },
  { icon: ScrollText, title: "Will (Wasiyat)", detail: "A testamentary transfer that takes effect on death. Under Islamic law, a will generally cannot dispose of more than one-third of the estate without the consent of the other legal heirs — a limit that surprises many people drafting a will for the first time." },
  { icon: Gavel, title: "Court decree", detail: "Property can also be transferred by operation of a court judgment — for example, in a partition suit, a specific performance decree, or the resolution of a property dispute — with the decree itself forming the basis for mutation." },
];

const faqs = [
  {
    question: "What types of property ownership exist in Pakistan?",
    answer:
      "The main categories are freehold (outright ownership), leasehold (rights for a specified period, common in some government or development-authority allotments), and joint or co-ownership (undivided shares held by two or more people, common among siblings or spouses).",
  },
  {
    question: "What's the difference between a sale deed, a gift, and a will as transfer methods?",
    answer:
      "A sale deed transfers property for consideration and is registered under the Registration Act 1908. A gift (Hiba) transfers property without consideration, requiring declaration, acceptance, and delivery of possession under Islamic law. A will (Wasiyat) only takes effect on death and, under Islamic law, is generally limited to one-third of the estate without the other heirs' consent.",
  },
  {
    question: "Can a co-owner sell their share of a jointly owned property in Pakistan?",
    answer:
      "Generally yes — a co-owner can transfer their own undivided share. Actually using or physically dividing the property, however, usually requires either the agreement of all co-owners or a formal partition through the revenue authorities or the courts.",
  },
  {
    question: "Is a gift of property valid without registration in Pakistan?",
    answer:
      "The essential elements of a valid Hiba under Islamic law are declaration, acceptance, and delivery of possession. In practice, however, registration is still the step that updates the official revenue and registration records for immovable property, and its absence can create real problems proving the transfer later.",
  },
  {
    question: "Can Wakeel.org explain which type of transfer applies to my situation?",
    answer:
      "Wakeel.org can explain the general legal position for sale, gift, will, or court-decree transfers, and help you understand ownership types like freehold, leasehold, or co-ownership, in plain English or Urdu. It cannot draft a transfer document, calculate exact shares, or represent you — a licensed property lawyer should handle the specifics.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Property Ownership and Transfer Laws in Pakistan",
    description:
      "The types of property ownership in Pakistan — freehold, leasehold, and co-ownership — and the legal instruments used to transfer it: sale, gift, will, and court decree.",
    author: { "@type": "Organization", name: "Wakeel.org" },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-03-09",
    dateModified: "2026-03-09",
    mainEntityOfPage: `${site.url}/journal/article/property-ownership-transfer-laws-pakistan`,
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
        name: "Property Ownership and Transfer Laws in Pakistan",
        item: `${site.url}/journal/article/property-ownership-transfer-laws-pakistan`,
      },
    ],
  },
];

const keywords = [
  "property ownership laws pakistan",
  "property transfer laws pakistan",
  "freehold vs leasehold pakistan",
  "co-ownership property pakistan",
  "hiba gift deed pakistan",
  "wasiyat will pakistan property",
].join(", ");

export default function PropertyOwnershipTransferLawsPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Property Ownership and Transfer Laws in Pakistan"
        description="The types of property ownership in Pakistan — freehold, leasehold, co-ownership — and the legal instruments used to transfer it: sale, gift, will, and court decree."
        path="/journal/article/property-ownership-transfer-laws-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Legal Help · Published March 9, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Property Ownership and Transfer Laws in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            "Ownership" isn't one single thing under Pakistani law, and neither is "transfer" —
            here's how the different forms of each actually work.
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
                Ownership can be <strong>freehold</strong>, <strong>leasehold</strong> (common in
                some allotment schemes), or <strong>joint/co-ownership</strong> (undivided shares
                held by multiple people). Transfer happens through a <strong>sale deed</strong>{" "}
                (for consideration), a <strong>gift (Hiba)</strong> (declaration, acceptance,
                delivery of possession), a <strong>will (Wasiyat)</strong> (limited to one-third of
                the estate under Islamic law without heirs' consent), or a{" "}
                <strong>court decree</strong>.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educate: ownership types */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>Three forms of ownership</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {ownershipTypes.map((r) => {
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

      {/* Reveal: transfer instruments */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>Four ways ownership legally transfers</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {transferInstruments.map((r) => {
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
                  Explaining the general legal position for different ownership types and transfer
                  methods, in plain English or Urdu, and helping you organize questions for a
                  lawyer.
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
                  It cannot draft a transfer document, calculate exact shares, or represent you —
                  a licensed property lawyer should handle the specifics.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel about your transfer — free
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
              { label: "The Muslim Family Laws Ordinance, 1961 — Punjab Laws (official)", href: "http://punjablaws.gov.pk/laws/777a.html" },
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
            <Link href="/journal/article/property-transfer-mutation-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Property Transfer and Mutation Process in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/inheritance-and-property-rights-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Inheritance and Property Rights in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/draft-legal-contract-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to Draft a Legal Contract in Pakistan</p>
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
          <h2 className={sectionHeading}>Transferring or receiving property?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel to explain which transfer method fits your situation — then get a licensed
            property lawyer to draft and register it correctly.
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
