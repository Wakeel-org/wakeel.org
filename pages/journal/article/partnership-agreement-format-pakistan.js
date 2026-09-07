import Link from "next/link";
import {
  CheckCircle2,
  Users,
  Scale,
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
  { icon: Users, title: "Firm details and capital contributions", detail: "The firm's name and nature of business, each partner's capital contribution, and the profit and loss sharing ratio — the foundation everything else in the deed builds on." },
  { icon: Scale, title: "Roles, management, and decision-making", detail: "Each partner's rights, duties, and management role, how major decisions are made, and accounting procedures — clarity here is what prevents day-to-day friction." },
  { icon: Send, title: "Dispute resolution and exit terms", detail: "How disagreements between partners are resolved (mediation or arbitration clauses are common), and the process for a partner exiting — including how their share is valued." },
  { icon: AlertTriangle, title: "Dissolution clause", detail: "How and when the partnership can be dissolved — voluntarily, by a partner's exit, or otherwise — since this is exactly where an unclear deed causes the most damage during an actual dispute." },
];

const faqs = [
  {
    question: "What should a partnership agreement format in Pakistan include?",
    answer:
      "The firm's name and business, capital contributions, profit and loss sharing, each partner's rights and duties, management and accounting procedures, dispute resolution terms, and a clear dissolution process — all under the framework of the Partnership Act 1932.",
  },
  {
    question: "Do I need to register a partnership agreement in Pakistan?",
    answer:
      "Registration isn't mandatory to form a partnership, but an unregistered firm can't sue a third party to enforce a contract or recover a debt under Section 69 of the Partnership Act 1932 — a real practical reason to register even though it's technically optional.",
  },
  {
    question: "Can Wakeel.org generate a partnership agreement for me?",
    answer:
      "Yes — describe the partners, capital contributions, and terms you want, and Wakeel can generate a first draft covering the standard sections of a partnership deed. Have a licensed advocate review it before it's signed and, if you choose to register the firm, before submission.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Partnership Agreement Format in Pakistan",
    description:
      "The standard structure of a partnership agreement (deed) in Pakistan under the Partnership Act 1932 — essential clauses, dissolution terms, and how to generate a first draft with Wakeel.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-06-10",
    dateModified: "2026-06-10",
    mainEntityOfPage: `${site.url}/journal/article/partnership-agreement-format-pakistan`,
    citation: [
      { "@type": "CreativeWork", name: "How to Draft & Register Partnership Deed in Pakistan — Tenco Consulting", url: "https://tencoconsulting.com/partnership-deed-pakistan/" },
      { "@type": "CreativeWork", name: "The Partnership Act, 1932 — Khalid Zafar & Associates", url: "https://khalidzafar.com/laws-of-pakistan/partnership-act-1932/" },
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
        name: "Partnership Agreement Format in Pakistan",
        item: `${site.url}/journal/article/partnership-agreement-format-pakistan`,
      },
    ],
  },
];

const keywords = [
  "partnership agreement format pakistan",
  "partnership deed template pakistan",
  "partnership agreement sample pakistan",
  "partnership agreement generator pakistan",
  "partnership act 1932 deed format",
  "business partnership contract pakistan",
].join(", ");

export default function PartnershipAgreementFormatPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Partnership Agreement Format in Pakistan"
        description="The standard structure of a partnership agreement (deed) in Pakistan under the Partnership Act 1932 — essential clauses, dissolution terms, and how to generate a first draft with Wakeel."
        path="/journal/article/partnership-agreement-format-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>Legal Help · Published June 10, 2026</p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Partnership Agreement Format in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The clause founders skip most often — dissolution — is exactly the one that matters
            most when a partnership actually ends.
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
                A partnership agreement under the <strong>Partnership Act 1932</strong> should
                cover <strong>capital contributions and profit sharing</strong>, each partner's{" "}
                <strong>roles and duties</strong>, <strong>dispute resolution</strong>, and a
                clear <strong>dissolution</strong> process. Instead of adapting a generic
                template,{" "}
                <a href={site.appUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Wakeel can generate a first draft
                </a>{" "}
                based on your specific partners and terms.
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
              <CardTitle className="text-xl">Generate your partnership agreement with Wakeel</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Describe the partners, their capital contributions, and how you want to split
                profits and responsibilities, and Wakeel can generate a structured first draft of
                the deed. Have a licensed advocate review it before signing — and if you plan to
                register the firm, before submitting it, so the wording holds up if a dispute
                ever comes up later.
              </p>
              <div className="text-center">
                <Button asChild size="lg" className="cta-try-free">
                  <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                    Generate a partnership agreement draft — free
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
          <h2 className={sectionHeading}>Why the dissolution clause matters more than founders think at signing</h2>
          <p className="text-muted-foreground leading-relaxed">
            Drafting guidance from{" "}
            <a href="https://tencoconsulting.com/partnership-deed-pakistan/" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
              Tenco Consulting
            </a>{" "}
            makes an important point: partnerships are usually formed in an optimistic moment,
            which is exactly when founders are least motivated to plan for how things might end
            badly. The dissolution and exit terms are precisely what come under pressure during a
            real dispute, once trust has already broken down — a deed that spells this out
            clearly, before it's needed, does far more protective work than most founders expect.
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
                  Generating a first draft of a partnership deed from the details you describe, in
                  plain English or Urdu.
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
                  It cannot register the partnership or confirm the deed's enforceability — a
                  licensed advocate should review and, where needed, register it.
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
              { label: "How to Draft & Register Partnership Deed in Pakistan — Tenco Consulting", href: "https://tencoconsulting.com/partnership-deed-pakistan/" },
              { label: "The Partnership Act, 1932 — Khalid Zafar & Associates", href: "https://khalidzafar.com/laws-of-pakistan/partnership-act-1932/" },
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
            <Link href="/journal/article/partnership-deed-pakistan-legal-guide" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Partnership Deed in Pakistan: Legal Guide</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/business-partnership-dispute-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Business Partnership Dispute in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/sole-proprietorship-vs-partnership-vs-company-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Sole Proprietorship vs Partnership vs Private Limited Company</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/nda-format-in-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">NDA Format in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Setting up a partnership?</h2>
          <p className="text-muted-foreground">
            Describe the terms, and let Wakeel put together a first draft of the deed — then get
            a lawyer to finalize it.
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
