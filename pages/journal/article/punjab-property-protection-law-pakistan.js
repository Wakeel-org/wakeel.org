import Link from "next/link";
import {
  CheckCircle2,
  ShieldAlert,
  Gavel,
  Clock,
  Globe,
  HelpCircle,
  AlertTriangle,
} from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site } from "../../../src/data/marketing";
import { cardBase, headingGradient, sectionHeading } from "../../../src/data/theme";

const keyPoints = [
  { icon: ShieldAlert, title: "Targets illegal occupation ('qabza')", detail: "The Punjab Protection of Ownership of Immovable Property Act 2025 was introduced specifically to address land grabbing — illegal occupation of property by organised groups or individuals, sometimes called 'qabza mafia' in everyday usage — a problem that had long outpaced the ordinary civil litigation process." },
  { icon: Gavel, title: "Distinct legal mechanism from an ordinary civil suit", detail: "The Act creates its own legal mechanism and offences specifically aimed at illegal occupation, running alongside (not replacing) the ordinary civil remedies available under the Transfer of Property Act 1882 and the Specific Relief Act 1877 for property disputes generally." },
  { icon: Clock, title: "An amendment followed quickly in 2026", detail: "The Punjab Protection of Ownership of Immovable Property (Amendment) Act 2026 was introduced to strengthen the original 2025 Act, reflecting how actively this specific problem is being legislated on — worth checking for the current, amended text rather than relying on the original 2025 version alone." },
  { icon: Globe, title: "A related law protects overseas Pakistanis' property specifically", detail: "Punjab also passed the Establishment of Special Courts (Overseas Pakistanis Property) Act 2025 around the same period, creating dedicated courts for property disputes involving overseas Pakistanis — a recognition that this group faces particular difficulty defending property from abroad." },
];

const practicalNotes = [
  "This is Punjab-specific legislation — other provinces address illegal occupation and property protection through their own laws and mechanisms, which may differ meaningfully from Punjab's approach.",
  "Because this is recent and actively being amended, always confirm you're reading the current version of the Act (including the 2026 amendment) rather than an outdated summary, and verify how it's being applied in your specific district.",
  "If your property is illegally occupied in Punjab, a lawyer can assess whether this Act's mechanism, an ordinary civil suit, or both together, best fit your specific facts — the right response is genuinely case-specific.",
  "Acting quickly and documenting everything — ownership proof, dates of occupation, any communication with the occupier — strengthens your position regardless of which legal route you ultimately pursue.",
];

const faqs = [
  {
    question: "What is the Punjab property protection law?",
    answer:
      "It refers to the Punjab Protection of Ownership of Immovable Property Act 2025, later strengthened by the Punjab Protection of Ownership of Immovable Property (Amendment) Act 2026 — legislation specifically aimed at addressing illegal occupation ('qabza') of property in Punjab.",
  },
  {
    question: "How is this different from an ordinary property dispute lawsuit?",
    answer:
      "The Act creates its own specific legal mechanism and offences targeting illegal occupation, intended to work alongside — not replace — the ordinary civil remedies available under general property law. Which route (or combination) fits a specific situation depends on the facts, and a lawyer's assessment matters here.",
  },
  {
    question: "Does this law apply outside Punjab?",
    answer:
      "No — it's Punjab-specific legislation. Other provinces have their own separate laws and mechanisms addressing illegal occupation and property protection, which may work differently.",
  },
  {
    question: "Is there a specific law protecting overseas Pakistanis' property in Punjab?",
    answer:
      "Yes — the Punjab Establishment of Special Courts (Overseas Pakistanis Property) Act 2025 created dedicated courts specifically for property disputes involving overseas Pakistanis, recognizing the particular difficulty of defending property while living abroad.",
  },
  {
    question: "Can Wakeel.org help me understand the Punjab property protection law?",
    answer:
      "Wakeel.org can explain what this legislation generally covers, in plain English or Urdu, and help you organize the facts of a property occupation issue before you see a lawyer. It cannot confirm how the Act applies to your specific property, file anything, or represent you — a licensed Punjab-based property lawyer should assess your case directly.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Punjab Property Protection Law: Complete Guide",
    description:
      "What the Punjab Protection of Ownership of Immovable Property Act 2025 (and its 2026 amendment) actually does — targeting illegal occupation and land grabbing in Punjab.",
    author: { "@type": "Organization", name: "Wakeel.org" },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-07-24",
    dateModified: "2026-07-24",
    mainEntityOfPage: `${site.url}/journal/article/punjab-property-protection-law-pakistan`,
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
        name: "Punjab Property Protection Law: Complete Guide",
        item: `${site.url}/journal/article/punjab-property-protection-law-pakistan`,
      },
    ],
  },
];

const keywords = [
  "punjab property protection law",
  "punjab protection of ownership of immovable property act 2025",
  "land grabbing law punjab",
  "qabza law pakistan",
  "punjab anti-land grabbing law",
].join(", ");

export default function PunjabPropertyProtectionLawPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Punjab Property Protection Law: Complete Guide"
        description="What the Punjab Protection of Ownership of Immovable Property Act 2025 (and its 2026 amendment) actually does — targeting illegal occupation and land grabbing in Punjab."
        path="/journal/article/punjab-property-protection-law-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Legal Help · Published July 24, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Punjab Property Protection Law: Complete Guide
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A new, actively evolving piece of legislation aimed squarely at illegal occupation of
            property in Punjab — here's what it actually does, and how it fits alongside ordinary
            property law.
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
                The <strong>Punjab Protection of Ownership of Immovable Property Act 2025</strong>{" "}
                — strengthened by a <strong>2026 amendment</strong> — specifically targets illegal
                occupation ('qabza') of property in Punjab, with its own legal mechanism running
                alongside ordinary civil property law. A related law, the{" "}
                <strong>Establishment of Special Courts (Overseas Pakistanis Property) Act 2025</strong>,
                created dedicated courts for property disputes involving overseas Pakistanis.
                Both are Punjab-specific.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educate: key points */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>What the law actually does</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {keyPoints.map((r) => {
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

      {/* Reveal: practical notes */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className={sectionHeading}>What to keep in mind before relying on this law</h2>
          </div>
          <Card className={cardBase}>
            <CardContent className="p-6">
              <ul className="space-y-3">
                {practicalNotes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
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
                  Explaining what this legislation generally covers, in plain English or Urdu, and
                  helping you organize the facts of a property occupation issue before you see a
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
                  It cannot confirm how the Act applies to your specific property, file anything,
                  or represent you — a licensed Punjab-based property lawyer should assess your
                  case directly.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel about this law — free
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
            General educational information, not legal advice. This is recent, actively amended
            legislation — verify the current text and application with a licensed advocate. See
            our <Link href="/disclaimer" className="text-primary hover:underline">full disclaimer</Link>.
          </p>
        </div>
      </section>

      {/* Sources */}
      <section className="bg-background py-14 sm:py-16">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-semibold text-foreground mb-4">Sources and further reading</h2>
          <ul className="space-y-2">
            {[
              { label: "The Punjab Protection of Ownership of Immovable Property Act, 2025 — Punjab Code (official)", href: "https://punjablaws.punjab.gov.pk/uploads/articles/the-punjab-protection-of-ownership-of-immovable-property-act-2025-act-ci-of-2025-converted-pdf.pdf" },
              { label: "The Punjab Establishment of Special Courts (Overseas Pakistanis Property) Act, 2025 — Punjab Laws (official)", href: "http://punjablaws.gov.pk/laws/2907.html" },
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
            <Link href="/journal/article/property-laws-overseas-pakistanis-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Property Laws for Overseas Pakistanis</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/property-dispute-lawyer-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Finding a Property Dispute Lawyer in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/property-laws-pakistan-complete-guide" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Property Laws in Pakistan: Complete Guide</p>
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
          <h2 className={sectionHeading}>Dealing with illegal occupation of your property?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel to explain your options — then get a licensed Punjab property lawyer to act
            quickly on your specific case.
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
