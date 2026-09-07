import Link from "next/link";
import {
  CheckCircle2,
  Scale,
  Gavel,
  FileText,
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
  { icon: Scale, title: "Damages are the default remedy", detail: "Under Section 73 of the Contract Act 1872, the party that broke the contract is generally liable to compensate for loss that naturally arose from the breach, or that both parties could have reasonably anticipated when the contract was made." },
  { icon: FileText, title: "A pre-agreed damages clause is enforceable, within reason", detail: "Section 74 of the Contract Act allows for liquidated damages — a pre-agreed compensation amount written into the contract — to be enforced if the contract is breached, giving both sides more certainty than litigating actual loss from scratch." },
  { icon: Gavel, title: "Specific performance is the exception, not the rule", detail: "The Specific Relief Act 1877 allows a court to order the actual performance of a contract — rather than just damages — but Pakistani courts have consistently held this is available only in limited situations, such as where money simply can't fairly compensate the loss, and generally not for personal service contracts." },
  { icon: AlertTriangle, title: "Courts default to money, not forcing the deal through", detail: "Recent case law has reinforced that damages, not specific performance, remain the primary remedy for breach of contract in Pakistan — a party hoping to force the other side to actually complete a deal should expect that to be the harder, less likely outcome to obtain." },
];

const faqs = [
  {
    question: "What can I claim if someone breaches a contract with me in Pakistan?",
    answer:
      "Primarily damages — compensation for loss that naturally resulted from the breach, or that was reasonably foreseeable when the contract was made, under Section 73 of the Contract Act 1872. If the contract includes a liquidated damages clause, that pre-agreed amount can also be enforced under Section 74.",
  },
  {
    question: "Can I force someone to actually complete a contract instead of just paying damages?",
    answer:
      "Sometimes, through specific performance under the Specific Relief Act 1877 — but courts treat this as an exceptional remedy, generally available only where money can't adequately compensate the loss, and it's usually not granted for personal service contracts.",
  },
  {
    question: "What is a liquidated damages clause and is it enforceable in Pakistan?",
    answer:
      "It's a pre-agreed compensation amount specified in the contract itself for a breach. Under Section 74 of the Contract Act 1872, such a clause is generally enforceable, offering more certainty than proving actual loss after the fact.",
  },
  {
    question: "Is damages or specific performance more likely to succeed in a Pakistani court?",
    answer:
      "Damages. Courts have consistently held that monetary compensation is the primary remedy for breach of contract, with specific performance reserved for limited circumstances — anyone hoping to force actual performance should expect that to be the harder case to win.",
  },
  {
    question: "Can Wakeel.org tell me what remedy I should pursue for a breach of contract?",
    answer:
      "Wakeel.org can explain how damages and specific performance generally work under Pakistani law. It cannot assess which remedy fits your specific contract and facts, or file a suit — a licensed advocate should handle that.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Breach of Contract in Pakistan: Legal Remedies",
    description:
      "The remedies available for breach of contract in Pakistan — damages under the Contract Act 1872, liquidated damages clauses, and when specific performance is actually available.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-08-09",
    dateModified: "2026-08-09",
    mainEntityOfPage: `${site.url}/journal/article/breach-of-contract-legal-remedies-pakistan`,
    citation: [
      { "@type": "CreativeWork", name: "Breach of Contract and Remedies — Pakistan Legal Services", url: "https://pakistanlegalservices.com/breach-of-contract-and-remedies/" },
      { "@type": "CreativeWork", name: "Specific Performance of Contract Under Pakistani Law — Pakistan Legal Services", url: "https://pakistanlegalservices.com/specific-performance-of-contract/" },
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
        name: "Breach of Contract in Pakistan: Legal Remedies",
        item: `${site.url}/journal/article/breach-of-contract-legal-remedies-pakistan`,
      },
    ],
  },
];

const keywords = [
  "breach of contract pakistan remedies",
  "damages contract act 1872 section 73",
  "liquidated damages pakistan section 74",
  "specific performance pakistan law",
  "specific relief act 1877 pakistan",
  "how to sue for breach of contract pakistan",
].join(", ");

export default function BreachOfContractLegalRemediesPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Breach of Contract in Pakistan: Legal Remedies"
        description="The remedies available for breach of contract in Pakistan — damages under the Contract Act 1872, liquidated damages clauses, and when specific performance is actually available."
        path="/journal/article/breach-of-contract-legal-remedies-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>Legal Help · Published August 9, 2026</p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Breach of Contract in Pakistan: Legal Remedies
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Most people who've had a contract broken want the deal completed — the law usually
            hands them a check instead.
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
                Under the <strong>Contract Act 1872</strong>, the default remedy for breach is{" "}
                <strong>damages</strong> — compensation for reasonably foreseeable loss (Section
                73), including any pre-agreed <strong>liquidated damages</strong> clause (Section
                74). <strong>Specific performance</strong>, forcing the actual deal through under
                the Specific Relief Act 1877, is available only in limited situations where money
                genuinely can't compensate the loss — courts treat it as the exception, not the
                default.
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
          <h2 className={sectionHeading}>Why "just make them do the deal" rarely works as a legal strategy</h2>
          <p className="text-muted-foreground leading-relaxed">
            Detailed analysis of specific performance under Pakistani law, including guidance
            from{" "}
            <a href="https://pakistanlegalservices.com/specific-performance-of-contract/" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
              Pakistan Legal Services
            </a>
            , explains the underlying logic courts apply: specific performance is an equitable
            remedy, and courts generally only reach for it when damages genuinely can't fix the
            problem — a unique property, a one-of-a-kind item, something for which no reasonable
            monetary substitute exists. For most commercial contracts — services, standard goods,
            typical business deals — a court can calculate a reasonable dollar figure to make the
            wronged party whole, which is exactly why judges default to damages rather than
            ordering the other side to perform.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The practical implication: if getting the actual deal done matters more to you than
            money, it's worth writing that into the contract itself upfront — a well-drafted
            specific-performance clause, especially around unique goods or property, gives a court
            a much clearer basis to grant that remedy later than trying to argue for it after the
            fact.
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
                  Explaining how damages, liquidated damages, and specific performance generally
                  work, in plain English or Urdu.
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
                  It cannot assess which remedy fits your specific contract or file a suit — a
                  licensed advocate should handle that.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel about a contract breach — free
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
              { label: "Breach of Contract and Remedies — Pakistan Legal Services", href: "https://pakistanlegalservices.com/breach-of-contract-and-remedies/" },
              { label: "Specific Performance of Contract Under Pakistani Law — Pakistan Legal Services", href: "https://pakistanlegalservices.com/specific-performance-of-contract/" },
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
            <Link href="/journal/article/draft-legal-contract-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to Draft a Legal Contract in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/civil-suit-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to File a Civil Suit in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/debt-recovery-legal-procedure-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Debt Recovery in Pakistan: Legal Procedure</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/business-partnership-dispute-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Business Partnership Dispute in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Dealing with a broken contract?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel to explain your remedies — then verify with a licensed advocate before you
            file.
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
