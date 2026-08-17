import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Scale,
  FileText,
  Gavel,
  HelpCircle,
  AlertTriangle,
  ListChecks,
  ShieldAlert,
} from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site } from "../../../src/data/marketing";
import { cardBase, headingGradient, sectionHeading } from "../../../src/data/theme";

const elements = [
  {
    icon: FileText,
    title: "What Section 420 PPC actually says",
    detail:
      "Section 420 of the Pakistan Penal Code, 1860 punishes 'cheating and thereby dishonestly inducing delivery of property' — deceiving someone into handing over property, money, or a valuable security, or into destroying or altering a valuable document, with punishment of imprisonment up to seven years, plus a fine. It's one of the most frequently invoked sections in Pakistani criminal complaints involving fraud.",
  },
  {
    icon: ListChecks,
    title: "The ingredients that must be proven",
    detail:
      "For a 420 case to succeed, the prosecution generally needs to show: deception of the victim, dishonest inducement (the deception caused the victim to act), and that this caused delivery of property or damage/alteration of a valuable document. A simple failed business deal or a genuine dispute over money owed is not automatically 'cheating' — the deceptive intent has to be shown, which is exactly why these cases are often contested.",
  },
  {
    icon: Scale,
    title: "Section 420 vs. a civil recovery suit",
    detail:
      "Not every unpaid debt or broken promise is a criminal matter. If someone genuinely intended to pay but couldn't, that's typically a civil dispute (recoverable through a civil suit for money or breach of contract) rather than criminal cheating. Section 420 applies where deception was present from the outset — this distinction is often the central argument in these cases.",
  },
  {
    icon: Gavel,
    title: "Cognizable offence — how the process starts",
    detail:
      "Cheating under Section 420 is generally treated as a cognizable offence, meaning police can register an FIR and investigate without needing a magistrate's prior order. That FIR process follows the same Section 154 CrPC procedure that applies to other cognizable offences.",
  },
  {
    icon: ShieldAlert,
    title: "What happens if you're accused",
    detail:
      "If you're named in a 420 complaint, take it seriously even if you believe the dispute is genuinely civil in nature — anticipatory bail or regular bail may become relevant depending on how the matter proceeds, and a criminal lawyer's early involvement can materially affect how the case unfolds. Don't wait until an arrest is imminent to seek advice.",
  },
];

const commonScenarios = [
  "Fake property sales — collecting payment for land or a property the seller doesn't actually own or intends never to transfer.",
  "Investment or business fraud — promising returns or a partnership with no genuine intention to deliver.",
  "Fraudulent online sales — taking payment for goods that are never shipped, or misrepresenting what's being sold.",
  "Cheque fraud or forged documents used to induce a payment (which may also engage separate offences alongside Section 420).",
  "Impersonation to obtain money or property under false pretenses.",
];

const faqs = [
  {
    question: "What is Section 420 of the Pakistan Penal Code?",
    answer:
      "Section 420 PPC criminalizes cheating that dishonestly induces someone to deliver property or a valuable security, or to destroy or alter a valuable document, punishable by up to seven years imprisonment plus a fine. It's commonly invoked in fraud cases involving fake sales, investment scams, and deceptive business dealings.",
  },
  {
    question: "How do I file a 420 case in Pakistan?",
    answer:
      "Since cheating under Section 420 is generally a cognizable offence, you can report it to the police to have an FIR registered under Section 154 CrPC, providing evidence of the deception and what was obtained from you as a result. Organize your documents — agreements, payment proof, communications — before you go, since the strength of your evidence heavily affects how the case proceeds.",
  },
  {
    question: "What's the difference between Section 420 and a civil money recovery case?",
    answer:
      "Section 420 requires proof of deceptive intent at the time of the transaction — the person never genuinely intended to fulfill their side. If someone simply failed to repay a debt or complete a deal due to circumstances rather than deception, that's typically a civil matter (a suit for recovery or breach of contract), not a criminal one. Courts examine the facts closely to draw this line, which is often where these cases are won or lost.",
  },
  {
    question: "What is the punishment for a 420 case in Pakistan?",
    answer:
      "Section 420 PPC provides for imprisonment of up to seven years, along with a fine, on conviction. The actual sentence in any specific case depends on the facts, the amount and nature of the fraud, and the court's assessment — this is not an automatic or fixed penalty.",
  },
  {
    question: "Can Wakeel.org help me understand a 420 case?",
    answer:
      "Wakeel.org can explain Section 420 PPC and its ingredients in plain English or Urdu, help you organize evidence and a timeline whether you're the complainant or the accused, and prepare questions for a criminal lawyer. It cannot file a case, represent you, or predict how a court will rule — criminal matters need a licensed advocate's direct involvement.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Section 420 PPC: Fraud and Cheating Charges in Pakistan",
    description:
      "What Section 420 of the Pakistan Penal Code actually covers, the ingredients that must be proven, how it differs from a civil dispute, and what to do if you're involved in a case.",
    author: { "@type": "Organization", name: "Wakeel.org" },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-07-23",
    dateModified: "2026-07-23",
    mainEntityOfPage: `${site.url}/journal/article/section-420-ppc-fraud-pakistan`,
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
        name: "Section 420 PPC: Fraud and Cheating Charges in Pakistan",
        item: `${site.url}/journal/article/section-420-ppc-fraud-pakistan`,
      },
    ],
  },
];

const keywords = [
  "420 case in pakistan",
  "article 420",
  "420 section",
  "420 ppc",
  "section 420 pakistan penal code",
  "cheating case pakistan",
  "fraud case pakistan",
].join(", ");

export default function Section420PpcFraudPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Section 420 PPC: Fraud and Cheating in Pakistan"
        description="What Section 420 PPC actually covers, its legal ingredients, how it differs from a civil dispute, and what to do if you're involved in a case."
        path="/journal/article/section-420-ppc-fraud-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Legal Help · Published July 23, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Section 420 PPC: Fraud and Cheating in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            "420" has become shorthand for a scammer in everyday Pakistani conversation — but the
            actual legal section behind it has specific ingredients that have to be proven, and
            not every broken promise qualifies. Here's what it really covers.
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
                <strong>Section 420 of the Pakistan Penal Code, 1860</strong> punishes cheating
                that dishonestly induces someone to hand over property or a valuable security,
                with up to <strong>seven years imprisonment</strong> plus a fine. It requires
                proving deception and dishonest inducement — a genuine business failure or unpaid
                debt without deceptive intent is usually a civil matter, not a criminal one. It's
                generally a cognizable offence, reportable through an FIR under Section 154 CrPC.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Elements */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>What the law actually requires</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {elements.map((e) => {
              const Icon = e.icon;
              return (
                <Card key={e.title} className={cardBase}>
                  <CardHeader>
                    <Icon className="h-7 w-7 text-primary" />
                    <CardTitle className="text-lg">{e.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{e.detail}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Common scenarios */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className={sectionHeading}>Situations that commonly lead to a 420 complaint</h2>
          </div>
          <Card className={cardBase}>
            <CardContent className="p-6">
              <ul className="space-y-3">
                {commonScenarios.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <AlertTriangle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{s}</span>
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
                  Explaining Section 420 and its legal ingredients in plain English or Urdu,
                  helping you organize evidence and a timeline, and preparing questions for a
                  criminal lawyer — whether you're the complainant or the accused.
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
                  It cannot file a case, represent you, or predict how a court will rule. Criminal
                  matters need a licensed advocate's direct involvement, especially where arrest
                  or bail may be relevant.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Understand your situation with Wakeel Free
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
            General educational information, not legal advice. Whether specific conduct meets the
            legal ingredients of Section 420 depends on the facts of each case — consult a
            licensed advocate. See our{" "}
            <Link href="/disclaimer" className="text-primary hover:underline">full disclaimer</Link>.
          </p>
        </div>
      </section>

      {/* Related reading */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`${sectionHeading} text-center mb-8`}>Related reading</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/journal/article/how-to-register-fir-pakistan"
              className={`group ${cardBase} block rounded-lg p-5`}
            >
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                How to Register an FIR in Pakistan
              </p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link
              href="/journal/article/civil-suit-pakistan"
              className={`group ${cardBase} block rounded-lg p-5`}
            >
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                How to File a Civil Suit in Pakistan
              </p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link
              href="/journal/legal-issues-pakistan/ppc-sections-explained"
              className={`group ${cardBase} block rounded-lg p-5`}
            >
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                PPC Sections Explained in Simple English and Urdu
              </p>
              <p className="text-xs text-muted-foreground mt-1">Guide · Wakeel Journal</p>
            </Link>
            <Link href="/citizens" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                Wakeel.org for Citizens
              </p>
              <p className="text-xs text-muted-foreground mt-1">How Wakeel helps everyday legal problems</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Involved in a fraud dispute?</h2>
          <p className="text-muted-foreground">
            Whether you've been deceived or you're facing an accusation, organize your facts with
            Wakeel before you talk to a criminal lawyer.
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
