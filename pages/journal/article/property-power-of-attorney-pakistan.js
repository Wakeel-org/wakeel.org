import Link from "next/link";
import {
  CheckCircle2,
  FileText,
  ShieldCheck,
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
  { icon: FileText, title: "Two types, and the difference actually matters", detail: "A General Power of Attorney (GPA) gives broad authority — managing property, signing contracts, operating bank accounts. A Special Power of Attorney (SPA) is limited to one specific act, like selling one named property. The narrower the scope, the less room there is for misuse." },
  { icon: Gavel, title: "Property POAs must be registered", detail: "Under Section 17 of the Registration Act 1908, a power of attorney relating to the sale, purchase, or transfer of immovable property must be registered — an unregistered property POA generally isn't legally recognized as sufficient authority for that transaction." },
  { icon: ShieldCheck, title: "It can be cancelled — and cancellation should be made public", detail: "The person granting a POA (the principal) can revoke it at any time by executing a registered deed of revocation at the Sub-Registrar, and should also give written notice to the attorney and relevant authorities (banks, land offices) — a revocation nobody knows about doesn't protect you." },
  { icon: AlertTriangle, title: "Specific is safer than general, especially for overseas Pakistanis", detail: "Because a General POA can authorise selling property outright, legal guidance consistently recommends using a Special POA limited to the minimum necessary authority wherever possible — particularly relevant for overseas Pakistanis who can't personally oversee a transaction." },
];

const faqs = [
  {
    question: "Do I need to register a power of attorney for property in Pakistan?",
    answer:
      "Yes. Under Section 17 of the Registration Act 1908, a power of attorney authorising the sale, purchase, or transfer of immovable property must be registered to be legally effective for that transaction.",
  },
  {
    question: "What's the difference between a General and Special Power of Attorney?",
    answer:
      "A General Power of Attorney gives broad authority over a wide range of matters, including managing property and signing contracts. A Special Power of Attorney is limited to one specific act or transaction — such as selling one named property — and is generally the safer, more limited option.",
  },
  {
    question: "How do I cancel a power of attorney in Pakistan?",
    answer:
      "Execute a registered deed of revocation at the Sub-Registrar, and separately send written notice of the revocation to the attorney-in-fact and any relevant authorities (banks, land offices) who may still be relying on the original POA — some also publish notice in a newspaper for extra protection.",
  },
  {
    question: "Can someone sell my property using a General Power of Attorney I gave them?",
    answer:
      "Potentially yes, if the GPA's wording authorises property sales — which is exactly why a Special Power of Attorney limited to a specific, named transaction is generally recommended over a broad General POA when property is involved.",
  },
  {
    question: "Can Wakeel.org draft a power of attorney for me?",
    answer:
      "Wakeel.org can explain the difference between GPA and SPA and what registration generally requires. It cannot draft, register, or revoke a power of attorney on your behalf — a licensed advocate should handle that.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Property Power of Attorney in Pakistan",
    description:
      "How power of attorney works for property in Pakistan — General vs Special POA, the Registration Act 1908 requirement, and how to safely revoke one.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-06-29",
    dateModified: "2026-06-29",
    mainEntityOfPage: `${site.url}/journal/article/property-power-of-attorney-pakistan`,
    citation: [
      { "@type": "CreativeWork", name: "Power of Attorney in Pakistan: Types, Registration, and Cancellation — The Lawyers", url: "https://www.thelawyers.pk/power-of-attorney-in-pakistan-types-registration-and-cancellation-a-complete-legal-guide/" },
      { "@type": "CreativeWork", name: "General Power of Attorney vs Special Power of Attorney — Pakistan Legal Services", url: "https://pakistanlegalservices.com/general-power-of-attorney-vs-special-power-of-attorney/" },
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
        name: "Property Power of Attorney in Pakistan",
        item: `${site.url}/journal/article/property-power-of-attorney-pakistan`,
      },
    ],
  },
];

const keywords = [
  "power of attorney property pakistan",
  "general vs special power of attorney",
  "poa registration act 1908",
  "how to revoke power of attorney pakistan",
  "property poa overseas pakistanis",
  "power of attorney fraud pakistan",
].join(", ");

export default function PropertyPowerOfAttorneyPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Property Power of Attorney in Pakistan"
        description="How power of attorney works for property in Pakistan — General vs Special POA, the Registration Act 1908 requirement, and how to safely revoke one."
        path="/journal/article/property-power-of-attorney-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>Legal Help · Published June 29, 2026</p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Property Power of Attorney in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            One legal document can authorise selling your entire property — here's how to use it
            safely, and how to take it back.
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
                A power of attorney for property must be <strong>registered</strong> under Section
                17 of the Registration Act 1908 to be legally effective. Choose a{" "}
                <strong>Special Power of Attorney</strong> — limited to one specific transaction —
                over a broad <strong>General Power of Attorney</strong> wherever possible, since it
                gives far less room for misuse. To cancel a POA, execute a registered revocation
                deed and notify the attorney-in-fact and relevant authorities directly — a
                revocation nobody knows about offers little real protection.
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
          <h2 className={sectionHeading}>Why overseas Pakistanis specifically need to get this right</h2>
          <p className="text-muted-foreground leading-relaxed">
            A power of attorney is often the only practical way an overseas Pakistani can handle a
            property transaction back home — but that same convenience is exactly what makes it a
            common target for fraud, as detailed in guidance from{" "}
            <a href="https://www.thelawyers.pk/power-of-attorney-in-pakistan-types-registration-and-cancellation-a-complete-legal-guide/" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
              The Lawyers
            </a>
            . A broadly worded General POA given to a relative or agent can, in theory, be used to
            sell property the principal never intended to part with. Limiting the document to a
            Special POA for one named transaction — and setting a clear expiry or condition on it —
            closes most of that gap.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            On the buying side, this cuts both ways: if you're purchasing property from someone
            acting under a POA rather than the owner directly, confirming that POA is registered,
            still valid, and hasn't been revoked is one of the most important checks in the entire
            transaction — and one of the most commonly skipped.
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
                  Explaining GPA vs SPA, registration requirements, and revocation, in plain
                  English or Urdu.
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
                  It cannot draft, register, or revoke a power of attorney, or verify a specific
                  POA's validity — a licensed advocate should handle that.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel about a property POA — free
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
              { label: "Power of Attorney in Pakistan: Types, Registration, and Cancellation — The Lawyers", href: "https://www.thelawyers.pk/power-of-attorney-in-pakistan-types-registration-and-cancellation-a-complete-legal-guide/" },
              { label: "General Power of Attorney vs Special Power of Attorney — Pakistan Legal Services", href: "https://pakistanlegalservices.com/general-power-of-attorney-vs-special-power-of-attorney/" },
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
            <Link href="/journal/article/how-to-verify-property-before-buying-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to Verify Property Before Buying in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/property-laws-overseas-pakistanis-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Property Laws for Overseas Pakistanis</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/fard-vs-intiqal-vs-registry-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Fard vs Intiqal vs Registry: The Difference Explained</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/property-dispute-lawyer-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Property Dispute Lawyer in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Setting up or checking a power of attorney?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel how POAs generally work — then get a licensed advocate to draft, register,
            or verify it.
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
