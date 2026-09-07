import Link from "next/link";
import {
  CheckCircle2,
  Wallet,
  FileText,
  Send,
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
  { icon: Wallet, title: "The debt, precisely stated", detail: "The exact amount owed, how it arose (a loan, an unpaid invoice, a bounced cheque), and the date it became due — vague amounts weaken a demand notice significantly." },
  { icon: FileText, title: "Reference to supporting documents", detail: "The loan agreement, invoice, promissory note, or cheque details that prove the debt exists — these are also what make a later Order 37 CPC summary suit available if the notice is ignored." },
  { icon: Send, title: "A firm deadline for payment", detail: "A clear date by which payment must be made — commonly 7 to 15 days for a straightforward money demand — after which you state you'll proceed to legal action." },
  { icon: AlertTriangle, title: "The legal consequence, spelled out", detail: "A statement that failure to pay will result in a civil suit for recovery (potentially a faster Order 37 CPC summary suit if the debt is documented), and, where relevant, a criminal complaint under Section 489-F PPC if a cheque bounced." },
];

const faqs = [
  {
    question: "What should a demand notice for recovery of money include in Pakistan?",
    answer:
      "The exact amount owed and how it arose, references to supporting documents (agreement, invoice, cheque), a firm payment deadline, and a clear statement of the legal action that will follow if payment isn't made.",
  },
  {
    question: "Is a demand notice required before filing a debt recovery suit?",
    answer:
      "It's not always legally mandatory, but sending one is standard practice — it gives the debtor a chance to pay without litigation, and shows the court you tried to resolve the matter before suing, which strengthens your position if the case proceeds.",
  },
  {
    question: "Does a demand notice help with a summary suit under Order 37 CPC?",
    answer:
      "Indirectly — a summary suit depends on the debt being clear from documents (a signed agreement, invoice, or cheque), and a demand notice referencing those same documents helps establish the paper trail a court will look for.",
  },
  {
    question: "Can Wakeel.org generate a demand notice for recovery of money?",
    answer:
      "Yes — describe the debt, when it arose, and what documents support it, and Wakeel can generate a first draft with a firm deadline and the standard consequence language. Have a licensed advocate review it before it's sent, especially if you plan to follow up with a summary suit.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Demand Notice for Recovery of Money in Pakistan",
    description:
      "The standard structure of a demand notice for recovering money owed in Pakistan — the debt, supporting documents, deadline, and legal consequence. Plus how to generate a first draft with Wakeel.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-06-18",
    dateModified: "2026-06-18",
    mainEntityOfPage: `${site.url}/journal/article/demand-notice-recovery-of-money-pakistan`,
    citation: [
      { "@type": "CreativeWork", name: "Order 37 CPC, 1908 — iPleaders", url: "https://blog.ipleaders.in/order-37-cpc-1908/" },
      { "@type": "CreativeWork", name: "Your #1 Checklist for Sending Effective Legal Notices in Pakistan — Josh and Mak International", url: "https://joshandmakinternational.com/your-1-checklist-for-sending-effective-legal-notices-in-pakistan/" },
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
        name: "Demand Notice for Recovery of Money in Pakistan",
        item: `${site.url}/journal/article/demand-notice-recovery-of-money-pakistan`,
      },
    ],
  },
];

const keywords = [
  "demand notice recovery of money pakistan",
  "demand notice format pakistan",
  "money recovery notice template pakistan",
  "legal notice for unpaid debt pakistan",
  "demand notice generator pakistan",
  "recovery of loan notice pakistan",
].join(", ");

export default function DemandNoticeRecoveryOfMoneyPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Demand Notice for Recovery of Money in Pakistan"
        description="The standard structure of a demand notice for recovering money owed in Pakistan — the debt, supporting documents, deadline, and legal consequence. Plus how to generate a first draft with Wakeel."
        path="/journal/article/demand-notice-recovery-of-money-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>Legal Help · Published June 18, 2026</p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Demand Notice for Recovery of Money in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Often the cheapest and fastest way to get paid — if the notice is precise and the
            paper trail is solid.
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
                A demand notice for recovering money should state the{" "}
                <strong>exact amount and how it arose</strong>, reference{" "}
                <strong>supporting documents</strong> (agreement, invoice, cheque), give a{" "}
                <strong>firm deadline</strong> to pay, and warn of the{" "}
                <strong>legal consequence</strong> — a civil recovery suit, potentially a faster
                Order 37 CPC summary suit if the debt is documented.{" "}
                <a href={site.appUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Wakeel can generate a first draft
                </a>{" "}
                from the details of your specific debt.
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
              <Send className="h-7 w-7 text-primary" />
              <CardTitle className="text-xl">Generate your demand notice with Wakeel</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Describe who owes you money, how much, since when, and what documents support the
                debt, and Wakeel can generate a structured first draft with a clear deadline and
                consequence language. Have a licensed advocate review it before sending — and if
                the debt is well-documented, ask about following up with a summary suit under
                Order 37 CPC if the notice is ignored.
              </p>
              <div className="text-center">
                <Button asChild size="lg" className="cta-try-free">
                  <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                    Generate a demand notice draft — free
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
          <h2 className={sectionHeading}>Why the documents you cite matter as much as the demand itself</h2>
          <p className="text-muted-foreground leading-relaxed">
            The connection between a demand notice and the{" "}
            <a href="https://blog.ipleaders.in/order-37-cpc-1908/" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
              Order 37 CPC summary suit process
            </a>{" "}
            is worth understanding before you send the notice, not after: a summary suit is only
            available where the debt is clear from documents — a signed agreement, an acknowledged
            invoice, a bounced cheque, or a promissory note. Referencing those exact documents in
            your demand notice does two things at once — it strengthens the notice itself, and it
            lays the groundwork for the faster summary suit route if the debtor still doesn't pay.
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
                  Generating a first draft of your demand notice from the debt details you
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
                  It cannot send the notice or file a recovery suit for you — a licensed advocate
                  should handle that.
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
              { label: "Order 37 CPC, 1908 — iPleaders", href: "https://blog.ipleaders.in/order-37-cpc-1908/" },
              { label: "Your #1 Checklist for Sending Effective Legal Notices in Pakistan — Josh and Mak International", href: "https://joshandmakinternational.com/your-1-checklist-for-sending-effective-legal-notices-in-pakistan/" },
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
            <Link href="/journal/article/debt-recovery-legal-procedure-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Debt Recovery in Pakistan: Legal Procedure</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/section-489f-ppc-cheque-dishonour-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Section 489-F PPC: Cheque Dishonour Explained</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/legal-notice-format-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Legal Notice Format in Pakistan</p>
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
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Someone owes you money?</h2>
          <p className="text-muted-foreground">
            Describe the debt, and let Wakeel put together a first draft of a demand notice —
            then get a lawyer to review it.
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
