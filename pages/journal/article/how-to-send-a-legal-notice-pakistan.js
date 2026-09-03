import Link from "next/link";
import {
  CheckCircle2,
  Send,
  FileText,
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
  { icon: FileText, title: "A legal notice is a formal, written warning — with a paper trail", detail: "It lays out your grievance, what you're demanding, and a deadline to respond, sent through a lawyer or registered post so there's a documented, dated record that you gave the other side a chance to resolve things before going to court." },
  { icon: Gavel, title: "Sometimes it's not optional — it's required by law", detail: "In certain cases, a legal notice must be sent before you can even file a suit. Under Section 80 of the Civil Procedure Code 1908, for example, you're required to give the government two months' notice before suing it — skipping this step can get your case dismissed on a technicality alone." },
  { icon: Send, title: "What a properly sent notice actually contains", detail: "The facts of the dispute, the specific relief or action you're demanding, a clear deadline (commonly 7 to 30 days), and a warning that legal proceedings will follow if there's no response — vague or emotional notices carry far less legal weight than a precise, fact-based one." },
  { icon: AlertTriangle, title: "How it's delivered matters as much as what it says", detail: "Notices are typically sent by registered post with acknowledgment due, by courier with tracking, or through email with delivery confirmation — proof of delivery is what lets you later show the court the other side actually received your warning." },
];

const faqs = [
  {
    question: "Do I need a lawyer to send a legal notice in Pakistan?",
    answer:
      "It's strongly recommended, especially for anything involving money, contracts, or property. A lawyer knows how to word the notice so it holds up legally, and in some situations — like suing the government — sending a legally sufficient notice is a mandatory precondition, not just good practice.",
  },
  {
    question: "How long should the deadline be in a legal notice?",
    answer:
      "There's no single fixed rule — 7, 14, or 30 days are all common, depending on the nature of the dispute and any specific legal requirement that applies. Give enough time for a genuine response, while making clear you intend to act if the deadline passes without one.",
  },
  {
    question: "What happens if the other party ignores my legal notice?",
    answer:
      "Generally, you can proceed to file a lawsuit. Having sent a proper notice and given the other side a fair chance to respond also puts you in a stronger position in court, since it shows you tried to resolve the matter before litigating.",
  },
  {
    question: "Is a legal notice always required before filing a case in Pakistan?",
    answer:
      "No — it depends on the type of case. Some situations, like suing a government body under Section 80 CPC, legally require a notice first. In many private disputes, a notice isn't mandatory but is still a strategic step that can resolve things without going to court.",
  },
  {
    question: "Can Wakeel.org draft a legal notice for me?",
    answer:
      "Wakeel.org can help you organize the facts and understand what a strong notice generally needs to include. It cannot draft the final legal document or send it on your behalf — a licensed advocate should draft and review the notice before it's sent.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Send a Legal Notice in Pakistan",
    description:
      "A plain-language guide to sending a legal notice in Pakistan — what it should include, when it's legally required, and how it's properly delivered.",
    author: { "@type": "Organization", name: "Wakeel.org" },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-09-03",
    dateModified: "2026-09-03",
    mainEntityOfPage: `${site.url}/journal/article/how-to-send-a-legal-notice-pakistan`,
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
        name: "How to Send a Legal Notice in Pakistan",
        item: `${site.url}/journal/article/how-to-send-a-legal-notice-pakistan`,
      },
    ],
  },
];

const keywords = [
  "how to send a legal notice pakistan",
  "legal notice format pakistan",
  "draft legal notice pakistan",
  "section 80 cpc notice government",
  "legal notice before filing suit pakistan",
  "legal notice deadline pakistan",
].join(", ");

export default function HowToSendALegalNoticePakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="How to Send a Legal Notice in Pakistan"
        description="A plain-language guide to sending a legal notice in Pakistan — what it should include, when it's legally required, and how it's properly delivered."
        path="/journal/article/how-to-send-a-legal-notice-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>Legal Help · Published December 29, 2026</p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            How to Send a Legal Notice in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Often cheaper and faster than a lawsuit — if it's written and delivered the right way.
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
                A legal notice should clearly state the facts of your dispute, exactly what you're
                demanding, and a firm deadline (commonly 7–30 days) to respond before you take
                further action. Send it by <strong>registered post, courier, or email with
                delivery confirmation</strong>, and keep proof it was received. In some cases —
                like suing a government body — sending a notice first isn't optional; it's a legal
                requirement under <strong>Section 80 of the Civil Procedure Code 1908</strong>.
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
          <h2 className={sectionHeading}>Why vague notices backfire, even when the underlying grievance is real</h2>
          <p className="text-muted-foreground leading-relaxed">
            Practical guidance on drafting notices in Pakistan, including a checklist published by{" "}
            <a href="https://joshandmakinternational.com/your-1-checklist-for-sending-effective-legal-notices-in-pakistan/" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
              Josh and Mak International
            </a>{" "}
            and a step-by-step process from{" "}
            <a href="https://pakistanlegalservices.com/how-to-send-a-legal-notice-in-pakistan/" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
              Pakistan Legal Services
            </a>
            , converges on the same principle: a notice's persuasive power comes from precision,
            not tone. A notice full of general accusations and emotional language is easy for the
            other side to dismiss or ignore. A notice that lays out specific dates, specific
            amounts, and specific documents — and demands a specific, achievable action — is much
            harder to brush aside, and far more useful later if the matter does end up in court.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The other detail people underestimate is proof of delivery. If the matter later goes to
            litigation, being able to show the other party actually received your notice — not
            just that you sent it — can matter a great deal, which is exactly why registered post
            with acknowledgment or a tracked courier is worth the extra step over an ordinary
            letter.
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
                  Explaining what a strong notice typically includes and helping you organize your
                  facts before you draft one.
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
                  It cannot draft, sign, or send the final legal notice — a licensed advocate
                  should draft and review it before it's sent.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel about sending a notice — free
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
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`${sectionHeading} text-center mb-8`}>Related reading</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/journal/article/how-to-respond-to-a-legal-notice-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to Respond to a Legal Notice in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/understanding-legal-notices-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Understanding Legal Notices in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/debt-recovery-legal-procedure-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Debt Recovery in Pakistan: Legal Procedure</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/civil-suit-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to File a Civil Suit in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Need to send a legal notice?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel to help you organize the facts — then get a licensed advocate to draft and
            send it.
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
