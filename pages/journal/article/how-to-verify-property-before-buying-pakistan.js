import Link from "next/link";
import {
  CheckCircle2,
  FileSearch,
  Landmark,
  UserCheck,
  Building2,
  ShieldAlert,
  HelpCircle,
  AlertTriangle,
} from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site } from "../../../src/data/marketing";
import { cardBase, headingGradient, sectionHeading } from "../../../src/data/theme";

const checks = [
  { icon: Landmark, title: "Get a current fard, not an old one", detail: "Request a fresh fard (record-of-rights extract) from the Patwar Khana or the provincial digital land record system — an outdated copy can hide a change of owner, a mortgage, or a dispute registered after it was issued." },
  { icon: FileSearch, title: "Check for encumbrances and pending litigation", detail: "Confirm there's no mortgage, lien, or court stay order against the property, and ask the revenue office directly whether any litigation is noted against the record — a clean-looking fard can still sit under an active dispute." },
  { icon: UserCheck, title: "Verify the seller's identity and authority to sell", detail: "Match the seller's CNIC to the name on the fard. If someone is selling on another person's behalf, confirm the power of attorney is registered, still valid, and hasn't been revoked — an unverified or expired power of attorney is one of the most common ways buyers get defrauded." },
  { icon: Building2, title: "Confirm development authority approval for housing schemes", detail: "For plots in private housing schemes, verify the scheme has an approved layout plan and No Objection Certificate (NOC) from the relevant development authority (such as LDA, CDA, or a provincial housing authority) — unapproved schemes carry real risk of the transfer never being formally recognized." },
  { icon: ShieldAlert, title: "Check that the property isn't held benami", detail: "Under the Benami Transactions (Prohibition) Act 2017, property held in someone else's name to disguise the real owner can be confiscated — if anything about the ownership structure looks like it's hiding the actual buyer or seller, that's a red flag worth a lawyer's attention before you pay anything." },
  { icon: FileSearch, title: "Match paper ownership to physical possession", detail: "Visit the property and confirm who's actually occupying or using it matches who the documents say owns it — a mismatch between paper title and physical possession is one of the clearest early warning signs of a dispute waiting to surface." },
];

const timing = [
  "Do every verification step before any money changes hands — a token or advance payment made before due diligence is one of the hardest amounts to recover if the deal later falls apart.",
  "Get a lawyer to review the fard, the sale deed draft, and (if applicable) the power of attorney before you sign anything, not after you've already committed.",
  "Keep dated copies of everything you verify — the fard, NOC, CNIC copies, and any correspondence — since this becomes your evidence trail if a dispute arises later.",
  "Budget time for verification, not just money for the purchase — rushing this stage because a seller says the offer is only available for a day or two is a pressure tactic worth being skeptical of.",
];

const faqs = [
  {
    question: "What documents should I check before buying property in Pakistan?",
    answer:
      "At minimum: a current fard from the Patwar Khana or provincial land record system, confirmation of no pending litigation or encumbrance, the seller's CNIC matched against the fard, and — for housing scheme plots — the scheme's development authority approval and NOC. If a power of attorney is involved, verify it's registered and still valid.",
  },
  {
    question: "How do I check if a property has a dispute or litigation against it?",
    answer:
      "Ask the relevant revenue office (Patwar Khana) directly whether any litigation or stay order is noted against the record, and consider having a lawyer run a broader check, since not every pending case shows up automatically on the fard itself.",
  },
  {
    question: "What is a benami property and why does it matter when buying?",
    answer:
      "A benami property is one held in someone else's name to disguise the real (beneficial) owner. Under the Benami Transactions (Prohibition) Act 2017, such property can be confiscated — buying into an arrangement like this, even unknowingly, carries real risk.",
  },
  {
    question: "Is it safe to buy property through a power of attorney holder?",
    answer:
      "It can be, but it needs verification: confirm the power of attorney is properly registered, is still valid (not expired or revoked), and actually covers the specific transaction you're relying on it for. An unverified power of attorney is a common source of property fraud in Pakistan.",
  },
  {
    question: "Can Wakeel.org help me verify a property before I buy it?",
    answer:
      "Wakeel.org can explain what each verification step means and help you organize the documents you've collected, in plain English or Urdu. It cannot independently confirm a property's title, contact the revenue office on your behalf, or replace a licensed property lawyer's physical and legal verification before you pay.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Verify Property Before Buying in Pakistan",
    description:
      "A practical due-diligence checklist for verifying property in Pakistan before you pay — the fard, encumbrances, seller identity, development authority approval, and benami risk.",
    author: { "@type": "Organization", name: "Wakeel.org" },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-08-17",
    dateModified: "2026-08-17",
    mainEntityOfPage: `${site.url}/journal/article/how-to-verify-property-before-buying-pakistan`,
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
        name: "How to Verify Property Before Buying in Pakistan",
        item: `${site.url}/journal/article/how-to-verify-property-before-buying-pakistan`,
      },
    ],
  },
];

const keywords = [
  "how to verify property before buying pakistan",
  "property verification checklist pakistan",
  "fard verification pakistan",
  "benami property pakistan",
  "power of attorney property fraud pakistan",
  "property due diligence pakistan",
].join(", ");

export default function HowToVerifyPropertyBeforeBuyingPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="How to Verify Property Before Buying in Pakistan"
        description="A practical due-diligence checklist for verifying property in Pakistan before you pay — the fard, encumbrances, seller identity, development authority approval, and benami risk."
        path="/journal/article/how-to-verify-property-before-buying-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Legal Help · Published August 17, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            How to Verify Property Before Buying in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Almost every serious property dispute in Pakistan traces back to a verification step
            someone skipped before paying. Here's the checklist to run through first.
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
                Before paying anything, get a <strong>current fard</strong>, confirm there's no{" "}
                <strong>encumbrance or litigation</strong>, verify the <strong>seller's
                identity</strong> and any <strong>power of attorney</strong> is registered and
                valid, confirm <strong>development authority approval</strong> for housing scheme
                plots, rule out a <strong>benami</strong> arrangement, and match paper ownership to
                actual <strong>physical possession</strong>. Do all of this before any advance
                payment, not after.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educate: checks */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>Six checks to run before you pay</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {checks.map((r) => {
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

      {/* Reveal: timing */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className={sectionHeading}>Why timing matters as much as the checklist itself</h2>
          </div>
          <Card className={cardBase}>
            <CardContent className="p-6">
              <ul className="space-y-3">
                {timing.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <ShieldAlert className="h-5 w-5 text-primary shrink-0 mt-0.5" />
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
                  Explaining what each verification step means and why it matters, in plain
                  English or Urdu, and helping you organize the documents you've collected.
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
                  It cannot independently confirm a property's title, contact the revenue office
                  on your behalf, or replace a licensed property lawyer's physical and legal
                  verification before you pay.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Organize your property documents with Wakeel — free
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
            <Link href="/journal/article/property-laws-pakistan-complete-guide" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Property Laws in Pakistan: Complete Guide</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/property-transfer-mutation-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Property Transfer and Mutation Process in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/property-dispute-lawyer-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Finding a Property Dispute Lawyer in Pakistan</p>
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
          <h2 className={sectionHeading}>About to buy a property?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel to walk through your verification checklist — then get a licensed property
            lawyer to confirm everything before you pay.
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
