import Link from "next/link";
import {
  CheckCircle2,
  FileText,
  Gavel,
  ShieldCheck,
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
  { icon: FileText, title: "Governed by the Powers of Attorney Act 1882", detail: "A power of attorney authorizes someone (the attorney-in-fact) to act on your behalf — signing documents, managing property, operating accounts, or handling specific transactions — within the scope you define." },
  { icon: Gavel, title: "General vs Special — scope is everything", detail: "A General Power of Attorney (GPA) gives broad authority across many matters; a Special Power of Attorney (SPA) is limited to one specific act or transaction. The narrower the scope, the less room there is for misuse." },
  { icon: ShieldCheck, title: "Property-related POAs must be registered", detail: "Under Section 17 of the Registration Act 1908, a power of attorney authorizing the sale, purchase, or transfer of immovable property must be registered to be legally recognized for that purpose." },
  { icon: AlertTriangle, title: "It can be revoked — but revocation should be made public", detail: "The principal can revoke a POA at any time through a registered deed of revocation, plus written notice to the attorney-in-fact and any relevant institutions (banks, land offices) — an unpublicized revocation offers little real protection." },
];

const faqs = [
  {
    question: "What law governs power of attorney in Pakistan?",
    answer:
      "The Powers of Attorney Act 1882 provides the general legal framework, while Section 17 of the Registration Act 1908 requires registration for any power of attorney authorizing the sale, purchase, or transfer of immovable property.",
  },
  {
    question: "What's the difference between General and Special Power of Attorney?",
    answer:
      "A General Power of Attorney grants broad authority over a wide range of matters. A Special Power of Attorney is limited to one specific act or transaction — generally the safer choice since it limits how much the attorney-in-fact can actually do.",
  },
  {
    question: "How do I revoke a power of attorney in Pakistan?",
    answer:
      "Execute a registered deed of revocation at the Sub-Registrar (for property-related POAs), and separately give written notice of the revocation to the attorney-in-fact and any institutions relying on the original document, like banks or land offices.",
  },
  {
    question: "Can Wakeel.org generate a power of attorney for me?",
    answer:
      "Yes — describe what you want the attorney-in-fact to be authorized to do, and Wakeel can generate a first draft, scoped as narrowly or broadly as you specify. Have a licensed advocate review it before signing, and register it where the transaction involves immovable property.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Power of Attorney in Pakistan",
    description:
      "How power of attorney works in Pakistan under the Powers of Attorney Act 1882 — General vs Special POA, registration requirements, and how to generate a first draft with Wakeel.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-06-15",
    dateModified: "2026-06-15",
    mainEntityOfPage: `${site.url}/journal/article/power-of-attorney-in-pakistan`,
    citation: [
      { "@type": "CreativeWork", name: "Power of Attorney in Pakistan: The Powers of Attorney Act 1882, Types, Registration — LexForm", url: "https://lex-form.com/blog/power-of-attorney-pakistan.html" },
      { "@type": "CreativeWork", name: "Power of Attorney in Pakistan: Types, Registration, and Cancellation — The Lawyers", url: "https://www.thelawyers.pk/power-of-attorney-in-pakistan-types-registration-and-cancellation-a-complete-legal-guide/" },
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
        name: "Power of Attorney in Pakistan",
        item: `${site.url}/journal/article/power-of-attorney-in-pakistan`,
      },
    ],
  },
];

const keywords = [
  "power of attorney pakistan",
  "power of attorney format pakistan",
  "power of attorney template pakistan",
  "general vs special power of attorney pakistan",
  "power of attorney generator pakistan",
  "powers of attorney act 1882",
].join(", ");

export default function PowerOfAttorneyInPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Power of Attorney in Pakistan"
        description="How power of attorney works in Pakistan under the Powers of Attorney Act 1882 — General vs Special POA, registration requirements, and how to generate a first draft with Wakeel."
        path="/journal/article/power-of-attorney-in-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>Legal Help · Published June 15, 2026</p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Power of Attorney in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            One document, broad or narrow scope — here's how to get the balance right, and how to
            draft one without starting from scratch.
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
                A power of attorney under the <strong>Powers of Attorney Act 1882</strong> can be{" "}
                <strong>General</strong> (broad authority) or <strong>Special</strong> (limited to
                one act) — narrower is generally safer. Property-related POAs must be{" "}
                <strong>registered</strong> under the Registration Act 1908.{" "}
                <a href={site.appUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Wakeel can generate a first draft
                </a>{" "}
                scoped to exactly what you need authorized.
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
              <CardTitle className="text-xl">Generate your power of attorney draft with Wakeel</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Describe exactly what you want your attorney-in-fact authorized to do — sell a
                specific property, manage a bank account, handle a single transaction — and
                Wakeel can generate a first draft scoped narrowly to that purpose. Have a licensed
                advocate review it before signing, and register it if it involves immovable
                property.
              </p>
              <div className="text-center">
                <Button asChild size="lg" className="cta-try-free">
                  <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                    Generate a power of attorney draft — free
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
          <h2 className={sectionHeading}>Why "as narrow as possible" is the safest default</h2>
          <p className="text-muted-foreground leading-relaxed">
            Legal guidance on POA fraud risk, including from{" "}
            <a href="https://www.thelawyers.pk/power-of-attorney-in-pakistan-types-registration-and-cancellation-a-complete-legal-guide/" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
              The Lawyers
            </a>
            , consistently recommends Special Power of Attorney over General wherever possible —
            limiting the scope to exactly the minimum authority needed. A power of attorney is
            often the only practical way an overseas Pakistani can handle a transaction back home,
            but that convenience is exactly what makes a broadly worded GPA a common target for
            misuse. A narrowly scoped, clearly time-limited SPA closes most of that gap.
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
                  Generating a first draft of a power of attorney scoped to exactly what you
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
                  It cannot register the document or verify a third party's existing POA — a
                  licensed advocate or the Sub-Registrar's office should handle that.
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
              { label: "Power of Attorney in Pakistan: The Powers of Attorney Act 1882, Types, Registration — LexForm", href: "https://lex-form.com/blog/power-of-attorney-pakistan.html" },
              { label: "Power of Attorney in Pakistan: Types, Registration, and Cancellation — The Lawyers", href: "https://www.thelawyers.pk/power-of-attorney-in-pakistan-types-registration-and-cancellation-a-complete-legal-guide/" },
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
            <Link href="/journal/article/property-power-of-attorney-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Property Power of Attorney in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/affidavit-in-pakistan-types-format-legal-requirements" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Affidavit in Pakistan: Types, Format and Legal Requirements</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/property-laws-overseas-pakistanis-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Property Laws for Overseas Pakistanis</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/sale-agreement-for-property-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Sale Agreement for Property in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Need a power of attorney drafted?</h2>
          <p className="text-muted-foreground">
            Describe what you need authorized, and let Wakeel put together a first draft — then
            get a lawyer to finalize it.
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
