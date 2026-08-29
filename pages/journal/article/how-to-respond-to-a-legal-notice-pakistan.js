import Link from "next/link";
import {
  CheckCircle2,
  Clock,
  FileText,
  Archive,
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
  { icon: Clock, title: "The deadline is real — and it starts a clock, not a suggestion", detail: "Most legal notices give 7, 14, or 30 days to respond. That deadline should be docketed the moment you receive the notice — silence past the deadline can be treated as acceptance of the sender's version of events, or used against you if the matter reaches court." },
  { icon: Archive, title: "Preserve everything before you draft anything", detail: "Keep the notice itself, the envelope or courier packaging, and any email headers or delivery confirmation intact. Then gather everything relevant to the underlying dispute — contracts, payment records, messages, receipts, and any documentary evidence that supports your position." },
  { icon: FileText, title: "A measured, document-based reply beats a fast denial", detail: "A reply built around specific facts and documents — what happened, when, and what the records show — carries far more weight than a quick, emotional denial. The goal of a response is often to resolve the dispute before it becomes a lawsuit, not just to reject the claim." },
  { icon: AlertTriangle, title: "A notice is frequently the cheapest chance you'll get", detail: "Responding properly, on time, and with a clear position can genuinely avoid litigation — a legal notice is often the sender's last step before filing suit, which makes your response the last low-cost opportunity to resolve the matter directly." },
];

const faqs = [
  {
    question: "How many days do I have to respond to a legal notice in Pakistan?",
    answer:
      "It depends on what the notice states — commonly 7, 14, or 30 days. Always check the specific deadline written in the notice itself rather than assuming a standard period, and treat it as a firm date to act by.",
  },
  {
    question: "What happens if I don't respond to a legal notice?",
    answer:
      "The sender can proceed to file a lawsuit, and your silence can be used against you — it may be treated as an implicit acknowledgment of their version of events. Ignoring a notice generally removes your cheapest opportunity to resolve the matter before litigation.",
  },
  {
    question: "Do I need a lawyer to respond to a legal notice?",
    answer:
      "It's strongly recommended, especially where money, property, or a contractual dispute is involved. A lawyer can help you assess the legal merit of the claim, identify what documents actually support your position, and draft a response that doesn't inadvertently weaken your case.",
  },
  {
    question: "What should I include in a reply to a legal notice?",
    answer:
      "A clear statement of your position, backed by specific facts and dates, and reference to supporting documents (contracts, payment records, correspondence). Avoid vague denials — a reply grounded in verifiable facts is far more persuasive and useful if the matter later goes to court.",
  },
  {
    question: "Can Wakeel.org help me respond to a legal notice?",
    answer:
      "Wakeel.org can help you understand what a legal notice is alleging and organize the facts and documents relevant to your response. It cannot draft the final legal reply or represent you — a licensed advocate should review and finalize your response before it's sent.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Respond to a Legal Notice in Pakistan",
    description:
      "What to do after receiving a legal notice in Pakistan — the deadline, evidence to preserve, and how to prepare a measured, document-based response.",
    author: { "@type": "Organization", name: "Wakeel.org" },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-11-02",
    dateModified: "2026-11-02",
    mainEntityOfPage: `${site.url}/journal/article/how-to-respond-to-a-legal-notice-pakistan`,
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
        name: "How to Respond to a Legal Notice in Pakistan",
        item: `${site.url}/journal/article/how-to-respond-to-a-legal-notice-pakistan`,
      },
    ],
  },
];

const keywords = [
  "how to respond to a legal notice pakistan",
  "reply to legal notice pakistan",
  "legal notice deadline pakistan",
  "what happens if you ignore a legal notice",
  "legal notice response format pakistan",
  "legal notice before filing suit pakistan",
].join(", ");

export default function HowToRespondToALegalNoticePakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="How to Respond to a Legal Notice in Pakistan"
        description="What to do after receiving a legal notice in Pakistan — the deadline, evidence to preserve, and how to prepare a measured, document-based response."
        path="/journal/article/how-to-respond-to-a-legal-notice-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>Legal Help · Published November 2, 2026</p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            How to Respond to a Legal Notice in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A legal notice is usually the sender's last step before court — which makes your
            response the cheapest chance to resolve it directly.
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
                Check the deadline stated in the notice (commonly 7–30 days) and docket it
                immediately. Preserve the notice and all related documents, gather the evidence
                relevant to the underlying dispute, and prepare a clear, fact-based reply — ideally
                with a lawyer's help — rather than a quick denial. Responding on time keeps your
                options open; silence can be used against you and often removes your cheapest
                chance to resolve the matter before it reaches court.
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
          <h2 className={sectionHeading}>The mistake that costs people the most: reacting instead of documenting</h2>
          <p className="text-muted-foreground leading-relaxed">
            Practical guidance from Pakistani legal practices —{" "}
            <a href="https://advocateghalibasghar.com/blog/what-to-do-after-receiving-legal-notice" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
              Chaudhry Ghalib Asghar Law Associates
            </a>{" "}
            and{" "}
            <a href="https://joshandmakinternational.com/legal-notices-and-their-role-in-pakistani-law/" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
              Josh and Mak International
            </a>{" "}
            — converge on the same point: the most common mistake is responding emotionally before
            reviewing what documents actually exist. A notice alleging non-payment, breach of
            contract, or property encroachment should be met first with a records review — the
            agreement itself, payment history, correspondence, and any physical evidence — because
            the strength of your reply depends entirely on what the paper trail actually shows, not
            on how confident you feel about your version of events.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            This is also where a lawyer earns their fee on a notice that might otherwise feel
            straightforward: they know what a court will actually weigh if the matter proceeds, and
            can shape a reply that protects your position rather than accidentally conceding a point
            you didn't mean to concede.
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
                  Explaining what a notice is alleging in plain English or Urdu, and helping you
                  organize the facts and documents relevant to your response.
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
                  It cannot draft your final legal reply or represent you — a licensed advocate
                  should review and finalize any response before it's sent.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel about a legal notice — free
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
              { label: "What to Do After Receiving a Legal Notice — Chaudhry Ghalib Asghar Law Associates", href: "https://advocateghalibasghar.com/blog/what-to-do-after-receiving-legal-notice" },
              { label: "Legal Notices in Pakistan: A Practical Client Guide — Josh and Mak International", href: "https://joshandmakinternational.com/legal-notices-and-their-role-in-pakistani-law/" },
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
            <Link href="/journal/article/understanding-legal-notices-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Understanding Legal Notices in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/civil-suit-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to File a Civil Suit in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/draft-legal-contract-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to Draft a Legal Contract in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/online-defamation-law-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Online Defamation Law in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Just received a legal notice?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel to help you understand it — then verify your response with a licensed
            advocate before you send it.
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
