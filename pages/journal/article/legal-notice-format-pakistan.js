import Link from "next/link";
import {
  CheckCircle2,
  FileText,
  ListChecks,
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
  { icon: FileText, title: "Header — sender, recipient, date, and reference", detail: "The advocate's (or sender's) name and address, the recipient's full name and address, the date, and often a reference number if it's part of an ongoing matter or filed through a lawyer." },
  { icon: ListChecks, title: "Body — facts, demand, and legal basis", detail: "A clear narrative of what happened and when, the specific relief or amount you're demanding, and a reference to the relevant law or agreement being relied on — this is the section that actually does the legal work." },
  { icon: Send, title: "Deadline and consequence clause", detail: "A stated deadline to respond or comply (commonly 7–30 days), and a clear statement that legal proceedings will follow without a satisfactory response — this is what turns a complaint into a formal notice." },
  { icon: AlertTriangle, title: "Signature, delivery method, and proof", detail: "Signed by the sender or their advocate, and sent by registered post with acknowledgment due, courier with tracking, or email with delivery confirmation — the delivery record is what proves the other side actually received it." },
];

const faqs = [
  {
    question: "What is the standard format of a legal notice in Pakistan?",
    answer:
      "A legal notice generally includes a header (sender and recipient details, date), a body stating the facts and the specific relief demanded with reference to the relevant law, a clear deadline to respond, and a signature — sent by registered post, courier, or email with proof of delivery.",
  },
  {
    question: "Can I write a legal notice myself, or do I need a lawyer?",
    answer:
      "You can draft one yourself for simple matters, but for anything involving money, contracts, or property, a lawyer's involvement is strongly recommended — the wording needs to hold up legally, and in some cases (like suing the government under Section 80 CPC) a properly framed notice is a legal precondition.",
  },
  {
    question: "How long should the deadline in a legal notice be?",
    answer:
      "Commonly 7 to 30 days, depending on the nature of the dispute — enough time for a genuine response while making clear you intend to act if the deadline passes without one.",
  },
  {
    question: "Is a template legal notice format enough to send as-is?",
    answer:
      "A template is a useful starting structure, but the facts, the specific demand, and the legal basis need to be tailored to your actual situation — a generic template sent unmodified carries far less legal weight than one grounded in your specific facts.",
  },
  {
    question: "Can Wakeel.org generate a legal notice draft for me?",
    answer:
      "Yes — describe your situation to Wakeel and it can put together a first draft covering the standard sections: the facts, your demand, the deadline, and the consequence clause. A licensed advocate should still review and finalize it before it's signed and sent, especially for anything involving significant money or a legally mandatory notice requirement.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Legal Notice Format in Pakistan",
    description:
      "The standard structure of a legal notice in Pakistan — header, facts and demand, deadline, and delivery — plus how to generate a first draft with Wakeel.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-06-07",
    dateModified: "2026-06-07",
    mainEntityOfPage: `${site.url}/journal/article/legal-notice-format-pakistan`,
    citation: [
      { "@type": "CreativeWork", name: "Your #1 Checklist for Sending Effective Legal Notices in Pakistan — Josh and Mak International", url: "https://joshandmakinternational.com/your-1-checklist-for-sending-effective-legal-notices-in-pakistan/" },
      { "@type": "CreativeWork", name: "How to Send a Legal Notice in Pakistan — Pakistan Legal Services", url: "https://pakistanlegalservices.com/how-to-send-a-legal-notice-in-pakistan/" },
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
        name: "Legal Notice Format in Pakistan",
        item: `${site.url}/journal/article/legal-notice-format-pakistan`,
      },
    ],
  },
];

const keywords = [
  "legal notice format pakistan",
  "legal notice template pakistan",
  "legal notice sample pakistan",
  "how to write legal notice pakistan",
  "legal notice generator pakistan",
  "draft legal notice online pakistan",
].join(", ");

export default function LegalNoticeFormatPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Legal Notice Format in Pakistan"
        description="The standard structure of a legal notice in Pakistan — header, facts and demand, deadline, and delivery — plus how to generate a first draft with Wakeel."
        path="/journal/article/legal-notice-format-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>Legal Help · Published June 7, 2026</p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Legal Notice Format in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four sections make up almost every legal notice in Pakistan — here's what each one
            needs, and how to get a first draft without starting from a blank page.
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
                A Pakistani legal notice generally has four parts: a{" "}
                <strong>header</strong> (sender, recipient, date), a <strong>body</strong>{" "}
                stating the facts and your specific demand with legal grounds, a{" "}
                <strong>deadline</strong> to respond (commonly 7–30 days), and a{" "}
                <strong>signature and delivery method</strong> that proves it was received. If
                you're not starting from scratch,{" "}
                <a href={site.appUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Wakeel can generate a first draft
                </a>{" "}
                covering all four sections based on the facts you describe.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educate: sections */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>The four sections, one at a time</h2>
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

      {/* Generate with Wakeel — primary CTA block */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className={`${cardBase} border-primary/40`}>
            <CardHeader>
              <Send className="h-7 w-7 text-primary" />
              <CardTitle className="text-xl">Skip the blank page — generate a draft with Wakeel</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                If you're struggling to get the wording right, describe your situation to Wakeel
                in plain English or Urdu — who owes what to whom, what happened, and what you
                want to happen next. Wakeel can put together a structured first draft covering the
                facts, your demand, and a deadline, so you're editing and refining rather than
                staring at a blank document. A licensed advocate should still review the final
                version before you sign and send it, particularly if the notice is a legal
                precondition (like suing a government body) or involves significant money.
              </p>
              <div className="text-center">
                <Button asChild size="lg" className="cta-try-free">
                  <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                    Generate a legal notice draft — free
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
          <h2 className={sectionHeading}>Why a copy-pasted template usually falls flat</h2>
          <p className="text-muted-foreground leading-relaxed">
            Practical drafting guidance, including a checklist from{" "}
            <a href="https://joshandmakinternational.com/your-1-checklist-for-sending-effective-legal-notices-in-pakistan/" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
              Josh and Mak International
            </a>
            , keeps returning to the same theme: the format matters less than precision. A notice
            copied from a generic template but never actually adapted to your specific dates,
            amounts, and facts reads as vague — and vague notices are the ones that get ignored or
            dismissed as bluster. The four-section structure above is a skeleton; the facts you
            fill it with are what actually give it legal weight.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            This is exactly why describing your real situation to a drafting tool, rather than
            filling in blanks on a static template, tends to produce a stronger starting point —
            the draft comes out already shaped around your specific facts instead of needing a
            complete rewrite.
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
                  Generating a first draft of your legal notice from the facts you describe, and
                  explaining what each section should cover.
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
                  It cannot certify the notice is legally sufficient or send it on your behalf — a
                  licensed advocate should review and finalize it before it's sent.
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
              { label: "Your #1 Checklist for Sending Effective Legal Notices in Pakistan — Josh and Mak International", href: "https://joshandmakinternational.com/your-1-checklist-for-sending-effective-legal-notices-in-pakistan/" },
              { label: "How to Send a Legal Notice in Pakistan — Pakistan Legal Services", href: "https://pakistanlegalservices.com/how-to-send-a-legal-notice-in-pakistan/" },
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
            <Link href="/journal/article/how-to-send-a-legal-notice-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to Send a Legal Notice in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/how-to-respond-to-a-legal-notice-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to Respond to a Legal Notice in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/demand-notice-recovery-of-money-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Demand Notice for Recovery of Money in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/understanding-legal-notices-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Understanding Legal Notices in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Need to send a legal notice?</h2>
          <p className="text-muted-foreground">
            Describe your situation and let Wakeel draft a first version — then get a licensed
            advocate to review it.
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
