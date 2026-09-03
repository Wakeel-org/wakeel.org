import Link from "next/link";
import {
  CheckCircle2,
  Globe,
  ScrollText,
  Gavel,
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

const framework = [
  { icon: Gavel, title: "Special courts now exist specifically for this", detail: "The Punjab Establishment of Special Courts (Overseas Pakistanis Property) Act 2025 created dedicated courts for adjudicating property disputes involving overseas Pakistanis — a direct response to how difficult it's historically been to pursue a property matter through the ordinary court system while living abroad." },
  { icon: ScrollText, title: "A registered, specific power of attorney is usually essential", detail: "Since most transactions require your physical presence or signature, a registered power of attorney (executed and attested through the Pakistani Embassy or Consulate in your country of residence) lets a trusted person act on your behalf — but it needs to be specific to the transaction and kept current, not an old, broad, or expired document." },
  { icon: ShieldAlert, title: "Benami risk is a real concern for overseas buyers", detail: "Purchasing property in a relative's name 'for convenience' while living abroad can create exactly the kind of arrangement the Benami Transactions (Prohibition) Act 2017 targets — and it also leaves you legally vulnerable if that relative later disputes the arrangement." },
  { icon: Globe, title: "NICOP and CNIC requirements apply to property transactions", detail: "Overseas Pakistanis typically need a valid NICOP (National Identity Card for Overseas Pakistanis) or CNIC to be identified correctly on ownership and transfer documents — using outdated or mismatched identity documents is a common, avoidable source of delay." },
];

const practicalSteps = [
  "Execute any power of attorney at the Pakistani Embassy or Consulate in your country of residence — this gives it proper attestation and makes it usable for registration purposes in Pakistan.",
  "Have a lawyer in Pakistan independently verify the property (fard, encumbrances, seller identity) before you send any money — the distance makes verification harder, not less necessary.",
  "Keep your NICOP or CNIC current and consistent across all property documents to avoid identity-matching problems at the registration or mutation stage.",
  "If your property is illegally occupied or a family member is disputing your ownership, the newer Overseas Pakistanis Property special courts (in Punjab) or the Overseas Pakistanis Foundation's complaint channels may offer a faster route than starting from scratch with an ordinary civil suit.",
  "Route funds for property purchases through proper banking channels — this matters both for your own legal protection and for satisfying documentation requirements later if the source of funds is ever questioned.",
];

const faqs = [
  {
    question: "Can overseas Pakistanis buy and own property in Pakistan?",
    answer:
      "Yes — overseas Pakistanis can buy, own, and sell property in Pakistan under the same general property laws that apply to resident citizens, with a valid NICOP or CNIC used for identification on the relevant documents.",
  },
  {
    question: "How can an overseas Pakistani complete a property transaction without being physically present?",
    answer:
      "Typically through a registered power of attorney, executed and attested at the Pakistani Embassy or Consulate in the country where they live, authorizing a trusted person to act on their behalf for the specific transaction.",
  },
  {
    question: "What legal protection exists for overseas Pakistanis in property disputes?",
    answer:
      "The Punjab Establishment of Special Courts (Overseas Pakistanis Property) Act 2025 created dedicated courts specifically for these disputes in Punjab. The Overseas Pakistanis Foundation also runs complaint and facilitation channels, and general property remedies (civil suits, the Punjab property protection law where applicable) remain available too.",
  },
  {
    question: "Is it safe for an overseas Pakistani to buy property in a relative's name?",
    answer:
      "This carries real risk — it can amount to a benami arrangement under the Benami Transactions (Prohibition) Act 2017, and it also leaves the actual buyer legally vulnerable if the relative later disputes ownership. It's worth discussing with a lawyer before structuring a purchase this way.",
  },
  {
    question: "Can Wakeel.org help an overseas Pakistani with a property matter?",
    answer:
      "Wakeel.org can explain the general framework, the power of attorney process, and what remedies exist, in plain English or Urdu, and help organize documents and questions for a Pakistan-based lawyer. It cannot verify a property, execute a power of attorney, or represent you — that needs a licensed advocate physically able to act in Pakistan.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Property Laws for Overseas Pakistanis",
    description:
      "How overseas Pakistanis can buy, verify, and defend property in Pakistan — power of attorney, NICOP requirements, benami risk, and the new Overseas Pakistanis Property special courts.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-06-16",
    dateModified: "2026-06-16",
    mainEntityOfPage: `${site.url}/journal/article/property-laws-overseas-pakistanis-pakistan`,
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
        name: "Property Laws for Overseas Pakistanis",
        item: `${site.url}/journal/article/property-laws-overseas-pakistanis-pakistan`,
      },
    ],
  },
];

const keywords = [
  "property laws for overseas pakistanis",
  "overseas pakistanis property rights",
  "power of attorney property pakistan overseas",
  "nicop property pakistan",
  "overseas pakistanis property special courts",
  "benami property overseas pakistani",
].join(", ");

export default function PropertyLawsOverseasPakistanisPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Property Laws for Overseas Pakistanis"
        description="How overseas Pakistanis can buy, verify, and defend property in Pakistan — power of attorney, NICOP requirements, benami risk, and the new Overseas Pakistanis Property special courts."
        path="/journal/article/property-laws-overseas-pakistanis-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>
            Legal Help · Published June 16, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Property Laws for Overseas Pakistanis
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Owning property in Pakistan while living abroad brings its own specific risks — and,
            as of 2025, its own specific legal protections. Here's what's changed and what still
            needs care.
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
                Overseas Pakistanis can own property under the same general laws as residents,
                using a <strong>NICOP</strong> or CNIC and a properly attested{" "}
                <strong>power of attorney</strong> for transactions completed from abroad. Punjab's{" "}
                <strong>Establishment of Special Courts (Overseas Pakistanis Property) Act 2025</strong>{" "}
                created dedicated courts for these disputes. Avoid buying in a relative's name (
                <strong>benami risk</strong>), and always get independent verification before
                sending money.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educate: framework */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>What's different about doing this from abroad</h2>
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

      {/* Reveal: practical steps */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>Practical steps that reduce your risk</h2>
          </div>
          <Card className={cardBase}>
            <CardContent className="p-6">
              <ol className="space-y-3">
                {practicalSteps.map((step, i) => (
                  <li key={step} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center justify-center h-5 w-5 rounded-full bg-primary/10 text-primary text-xs font-semibold shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
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
                  Explaining the general framework, the power of attorney process, and what
                  remedies exist, in plain English or Urdu, and helping you organize documents and
                  questions for a Pakistan-based lawyer.
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
                  It cannot verify a property, execute a power of attorney, or represent you —
                  that needs a licensed advocate physically able to act in Pakistan.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel from anywhere — free
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
              { label: "The Punjab Establishment of Special Courts (Overseas Pakistanis Property) Act, 2025 — Punjab Laws (official)", href: "http://punjablaws.gov.pk/laws/2907.html" },
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
            <Link href="/journal/article/punjab-property-protection-law-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Punjab Property Protection Law: Complete Guide</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/how-to-verify-property-before-buying-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to Verify Property Before Buying in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/legal-issues-pakistan/overseas-pakistanis-legal-guide" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Legal Help in Pakistan for Overseas Pakistanis</p>
              <p className="text-xs text-muted-foreground mt-1">Guide · Wakeel Journal</p>
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
          <h2 className={sectionHeading}>Managing property in Pakistan from abroad?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel to explain the process, in English or Urdu — then get a Pakistan-based
            lawyer to verify and act on your behalf.
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
