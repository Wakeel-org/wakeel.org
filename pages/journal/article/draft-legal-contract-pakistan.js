import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  PenTool,
  Scale,
  HelpCircle,
  AlertTriangle,
  ListChecks,
  Users,
} from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site } from "../../../src/data/marketing";
import { cardBase, eyebrow, headingGradient, sectionHeading } from "../../../src/data/theme";

const essentials = [
  {
    icon: Users,
    title: "Identify the parties precisely",
    detail:
      "Full legal names, CNIC numbers, and addresses for individuals; registered name, registration number, and authorized signatory for companies. Under the Contract Act 1872, a contract needs parties competent to contract — vague identification creates real enforcement problems later.",
  },
  {
    icon: FileText,
    title: "State the essential elements clearly",
    detail:
      "A valid contract under Section 10 of the Contract Act 1872 needs a lawful offer and acceptance, lawful consideration, and the parties' free consent and competence. Beyond the legal minimum, spell out exactly what each side is promising — vague obligations are the single biggest source of later disputes.",
  },
  {
    icon: Scale,
    title: "Cover payment, timelines, and breach clearly",
    detail:
      "Specify amounts, currency, payment schedule, and what happens if a payment is late. Define delivery or performance deadlines. Include what remedy applies if either side breaches — this is where many informal Pakistani agreements go quiet, leaving both sides guessing if something goes wrong.",
  },
  {
    icon: PenTool,
    title: "Address termination and dispute resolution",
    detail:
      "State how and when either party can end the agreement, and what notice period applies. Decide whether disputes go to arbitration (under the Arbitration Act 1940, or the newer Arbitration Act framework for certain matters) or to civil court, and which city's courts have jurisdiction — deciding this upfront avoids arguing about it during an actual dispute.",
  },
  {
    icon: ListChecks,
    title: "Use stamp paper and registration where required",
    detail:
      "Certain contracts — especially those involving immovable property — require stamping under the Stamp Act 1899 and, in many cases, registration under the Registration Act 1908 to be fully enforceable and admissible in court. Skipping this for property-related agreements is a common, costly mistake.",
  },
  {
    icon: AlertTriangle,
    title: "Get witnesses and signatures right",
    detail:
      "Most contracts benefit from at least two witnesses with their own CNIC details, and every page should be signed or initialed to prevent later disputes about which version was actually agreed. Small formality gaps like this are exactly what a contesting party will try to exploit.",
  },
];

const templateRisks = [
  "Downloaded templates are often written for a different jurisdiction (commonly US or UK) and may reference laws that don't apply in Pakistan.",
  "Generic templates rarely address Pakistan-specific requirements like stamp duty or registration for property-related agreements.",
  "A template that looks complete can still miss the one clause that matters most for your specific deal — templates handle the common 80%, not your particular risk.",
  "Templates don't know your relationship with the other party or your actual leverage — the strongest contracts reflect the real deal, not a generic boilerplate.",
];

const faqs = [
  {
    question: "How do I draft a legal contract in Pakistan?",
    answer:
      "Start by identifying the parties precisely (full names, CNIC or registration numbers), then state the essential terms clearly: what's being exchanged, payment and timelines, what happens on breach, and how the contract can be terminated. Under the Contract Act 1872, you need a lawful offer, acceptance, consideration, and competent, consenting parties. For contracts involving property or significant value, have a lawyer review the draft and check whether stamping or registration is required.",
  },
  {
    question: "Are online contract templates safe to use in Pakistan?",
    answer:
      "They can be a useful starting point for structure, but many templates are written for other jurisdictions and don't reflect Pakistani requirements like stamp duty (Stamp Act 1899) or registration (Registration Act 1908) for property-related agreements. Treat a template as a first draft to be reviewed and adapted, not a finished document to sign as-is.",
  },
  {
    question: "What makes a contract legally valid in Pakistan?",
    answer:
      "Under Section 10 of the Contract Act 1872, a valid contract requires a lawful offer and acceptance, lawful consideration, free consent of the parties, and that the parties are competent to contract (of sound mind, of age, and not disqualified by law). Certain contracts, particularly involving immovable property, additionally require proper stamping and registration to be fully enforceable.",
  },
  {
    question: "Do I need a lawyer to draft a contract in Pakistan?",
    answer:
      "For low-value, low-risk agreements between parties who trust each other, a carefully written document covering the essentials may be enough. For anything involving significant money, property, ongoing obligations, or parties you don't know well, a lawyer's drafting is worth the cost — the clauses that prevent expensive disputes are usually the ones a non-lawyer wouldn't think to include.",
  },
  {
    question: "Can Wakeel.org help me draft or review a contract?",
    answer:
      "Wakeel.org can explain contract clauses and legal terms in plain English or Urdu, help you build a checklist of what your specific agreement should cover, and review a draft to flag missing or one-sided clauses worth a second look. It cannot certify that a contract is legally sound, handle stamping or registration, or replace a lawyer's review before you sign something with real money or property at stake.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Draft a Legal Contract in Pakistan",
    description:
      "The essential elements of a valid, enforceable contract in Pakistan under the Contract Act 1872 — what to include, when stamping and registration matter, and the risks of generic templates.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-08-01",
    dateModified: "2026-08-01",
    mainEntityOfPage: `${site.url}/journal/article/draft-legal-contract-pakistan`,
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
        name: "How to Draft a Legal Contract in Pakistan",
        item: `${site.url}/journal/article/draft-legal-contract-pakistan`,
      },
    ],
  },
];

const keywords = [
  "draft contract pakistan",
  "contract drafting pakistan",
  "legal agreement template pakistan",
  "contract act 1872 pakistan",
  "how to write a contract pakistan",
  "stamp paper agreement pakistan",
].join(", ");

export default function DraftLegalContractPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="How to Draft a Legal Contract in Pakistan"
        description="Essential elements of an enforceable contract in Pakistan under the Contract Act 1872 — what to include, when stamping and registration apply."
        path="/journal/article/draft-legal-contract-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>
            Legal Help · Published August 1, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            How to Draft a Legal Contract in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A handshake and a WhatsApp message aren't a contract — and a downloaded US template
            copy-pasted with find-and-replace isn't a safe one either. Here's what actually makes
            an agreement enforceable in Pakistan.
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
                A valid contract in Pakistan needs a lawful offer and acceptance, lawful
                consideration, and free, competent consent under{" "}
                <strong>Section 10 of the Contract Act 1872</strong>. Beyond that legal minimum,
                clearly identify the parties, spell out payment, timelines, breach consequences,
                and termination, and check whether your agreement needs stamping (
                <strong>Stamp Act 1899</strong>) or registration (
                <strong>Registration Act 1908</strong>) — property-related contracts almost always
                do. Generic downloaded templates are a starting point, not a finished document.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Essentials */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>What a solid contract actually covers</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {essentials.map((e) => {
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

      {/* Template risks */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className={sectionHeading}>Why a generic template can backfire</h2>
          </div>
          <Card className={cardBase}>
            <CardContent className="p-6">
              <ul className="space-y-3">
                {templateRisks.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <AlertTriangle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{t}</span>
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
                  Explaining contract clauses in plain English or Urdu, building a checklist of
                  what your specific agreement should cover, and reviewing a draft to flag missing
                  or one-sided terms before you finalize it.
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
                  It cannot certify a contract is legally sound, handle stamping or registration,
                  or replace a lawyer's review for agreements involving significant money or
                  property.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Build your contract checklist with Wakeel Free
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
            General educational information, not legal advice. Contract requirements vary by
            transaction type and value — have a licensed advocate review anything significant
            before signing. See our{" "}
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
              href="/journal/article/ai-contract-review-pakistan"
              className={`group ${cardBase} block rounded-lg p-5`}
            >
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                Using AI to Review Contracts in Pakistan
              </p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link
              href="/journal/article/understand-legal-document-without-lawyer-pakistan"
              className={`group ${cardBase} block rounded-lg p-5`}
            >
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                How to Understand a Legal Document Without a Lawyer
              </p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link
              href="/journal/legal-issues-pakistan/property-document-check-pakistan"
              className={`group ${cardBase} block rounded-lg p-5`}
            >
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                Property Document Check Support in Pakistan
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
          <h2 className={sectionHeading}>Drafting an agreement?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel to explain a clause or check your draft against a checklist — then have a
            lawyer review anything with real money or property at stake.
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
