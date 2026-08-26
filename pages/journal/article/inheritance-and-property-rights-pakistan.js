import Link from "next/link";
import {
  CheckCircle2,
  ScrollText,
  Users,
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
  { icon: ScrollText, title: "Muslim personal law governs Muslim succession", detail: "For Muslims, inheritance is governed by Islamic law as applied through the West Pakistan Muslim Personal Law (Shariat) Application Act 1962 and related principles — property passes to legal heirs according to fixed Quranic shares and residuary rules, not purely by a deceased person's preference." },
  { icon: ScrollText, title: "The Succession Act 1925 governs non-Muslim inheritance", detail: "For Christians, Parsis, and other non-Muslim communities, testate and intestate succession is generally governed by the Succession Act 1925, with its own rules on wills, executors, and distribution." },
  { icon: Users, title: "Who typically inherits", detail: "Under Islamic law, the surviving spouse, children, and parents are generally among the primary heirs, with shares that shift depending on which relatives survive the deceased — the exact calculation (faraid) is fact-specific and should be worked out by a lawyer or qualified scholar rather than assumed." },
  { icon: Gavel, title: "Inheritance mutation is a separate step", detail: "Once shares are determined, the revenue record still needs to be updated through inheritance mutation at the relevant Patwar Khana or land record office — this doesn't happen automatically just because someone has died; someone has to apply for it with the required documents." },
];

const practicalSteps = [
  "Obtain the death certificate and, where relevant, a succession certificate or letter of administration from the court — these are often required before banks, revenue offices, or other institutions will recognize a transfer.",
  "Identify all legal heirs accurately before distributing anything — leaving out an heir, even unintentionally, can make the entire distribution legally challengeable later.",
  "Apply for inheritance mutation at the relevant land revenue office with the death certificate, heirship documents, and CNICs of the heirs.",
  "If heirs disagree on shares or one heir is being excluded, this becomes a matter for a Civil Court or, in some situations, the Family Court — informal 'settlements' that pressure an heir to give up their legal share can be challenged later.",
];

const faqs = [
  {
    question: "How does inheritance work in Pakistan?",
    answer:
      "For Muslims, Islamic law as applied through the West Pakistan Muslim Personal Law (Shariat) Application Act 1962 governs succession, with fixed shares for specific relatives depending on who survives the deceased. For non-Muslims, the Succession Act 1925 generally applies. Either way, the revenue record needs a separate inheritance mutation to formally reflect the new ownership.",
  },
  {
    question: "Does a will override Islamic inheritance shares in Pakistan?",
    answer:
      "Not entirely — under Islamic law, a will (Wasiyat) is generally limited to disposing of at most one-third of the estate without the consent of the other legal heirs. The remaining two-thirds (or all of it, if there's no will) passes according to the fixed inheritance shares, not the deceased's informal wishes.",
  },
  {
    question: "What is inheritance mutation and why does it matter?",
    answer:
      "Inheritance mutation is the process of updating the official revenue record (the fard) to reflect a deceased owner's property now belonging to their legal heirs. It doesn't happen automatically — an application with the death certificate, heirship proof, and CNICs needs to be filed at the relevant land revenue office.",
  },
  {
    question: "Can an heir be denied their share of inheritance in Pakistan?",
    answer:
      "Not legally — every recognized legal heir is entitled to their share under the applicable succession law. If an heir is being pressured to informally waive their share, or excluded from a distribution, this can be challenged through the courts, and in some circumstances may also raise criminal liability under Section 498-A of the Pakistan Penal Code.",
  },
  {
    question: "Can Wakeel.org help me understand my inheritance rights?",
    answer:
      "Wakeel.org can explain the general framework governing inheritance, what documents are typically needed, and how the mutation process works, in plain English or Urdu. It cannot calculate your exact legal share, represent you in a succession dispute, or replace a licensed lawyer's review of your specific family situation.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Inheritance and Property Rights in Pakistan",
    description:
      "How inheritance works in Pakistan — the governing law for Muslims and non-Muslims, who typically inherits, and the inheritance mutation process that formally transfers ownership.",
    author: { "@type": "Organization", name: "Wakeel.org" },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-04-06",
    dateModified: "2026-04-06",
    mainEntityOfPage: `${site.url}/journal/article/inheritance-and-property-rights-pakistan`,
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
        name: "Inheritance and Property Rights in Pakistan",
        item: `${site.url}/journal/article/inheritance-and-property-rights-pakistan`,
      },
    ],
  },
];

const keywords = [
  "inheritance law pakistan",
  "property rights inheritance pakistan",
  "muslim personal law inheritance pakistan",
  "succession act 1925 pakistan",
  "inheritance mutation pakistan",
  "legal heirs pakistan",
].join(", ");

export default function InheritanceAndPropertyRightsPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Inheritance and Property Rights in Pakistan"
        description="How inheritance works in Pakistan — the governing law for Muslims and non-Muslims, who typically inherits, and the inheritance mutation process."
        path="/journal/article/inheritance-and-property-rights-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>
            Legal Help · Published April 6, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Inheritance and Property Rights in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Inheritance in Pakistan follows fixed legal rules, not family consensus — and the
            revenue record doesn't update itself. Here's how the process actually works.
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
                For Muslims, inheritance follows <strong>Islamic law</strong> via the West Pakistan
                Muslim Personal Law (Shariat) Application Act 1962, with fixed shares for specific
                relatives. For non-Muslims, the <strong>Succession Act 1925</strong> generally
                applies. A will can dispose of at most <strong>one-third</strong> of the estate
                without other heirs' consent. Property doesn't automatically transfer to heirs —{" "}
                <strong>inheritance mutation</strong> at the land revenue office is a required,
                separate step.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educate: framework */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>The legal framework</h2>
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
            <h2 className={sectionHeading}>What actually needs to happen after a death</h2>
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
                  Explaining the general framework governing inheritance and what documents are
                  typically needed, in plain English or Urdu, and helping you organize questions
                  for a lawyer.
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
                  It cannot calculate your exact legal share, represent you in a succession
                  dispute, or replace a licensed lawyer's review of your specific family situation.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel about inheritance — free
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
              { label: "The Criminal Law (Third Amendment) Act, 2011 (Section 498-A PPC) — National Assembly of Pakistan", href: "https://na.gov.pk/uploads/documents/1329729400_262.pdf" },
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
            <Link href="/journal/article/daughters-inheritance-rights-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Daughters' Inheritance Rights in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/property-ownership-transfer-laws-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Property Ownership and Transfer Laws in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/family-law-rights-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Common Family Law Rights in Pakistan</p>
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
          <h2 className={sectionHeading}>Dealing with an inheritance matter?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel to explain the general framework — then get a licensed lawyer to confirm
            your exact share and handle the mutation process.
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
