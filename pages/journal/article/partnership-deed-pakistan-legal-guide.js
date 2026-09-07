import Link from "next/link";
import {
  CheckCircle2,
  FileText,
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
  { icon: FileText, title: "The deed is what actually defines the partnership", detail: "A partnership deed should cover the firm's name and business, capital contributions, profit and loss sharing ratios, each partner's rights, duties, and management role, accounting procedures, and how disputes will be resolved." },
  { icon: Users, title: "There's a legal cap on how many partners you can have", detail: "Under the Partnership Act 1932, a partnership can have a minimum of two partners, with a maximum of ten for a banking business and twenty for any other kind of business." },
  { icon: Gavel, title: "Registration is optional to form, essential to enforce", detail: "You don't need to register a partnership to start operating, but an unregistered firm loses its ability to sue third parties to enforce contracts or recover debts — registration is what unlocks that legal remedy." },
  { icon: AlertTriangle, title: "Dissolution needs its own clause, not an afterthought", detail: "A well-drafted deed spells out how and when the partnership can be dissolved — voluntarily, by a partner's exit, or otherwise — since disagreements about ending a partnership are exactly where an unclear deed causes the most damage." },
];

const faqs = [
  {
    question: "What should a partnership deed in Pakistan include?",
    answer:
      "The firm's name and nature of business, capital contributions, profit and loss sharing arrangement, partners' rights and duties, management responsibilities, accounting procedures, dispute resolution mechanisms, and the process for dissolving the firm.",
  },
  {
    question: "Is it mandatory to register a partnership in Pakistan?",
    answer:
      "No, registration under the Partnership Act 1932 isn't mandatory to form a partnership. However, an unregistered partnership firm cannot sue a third party to enforce a contract or recover a debt — which is a significant practical reason to register anyway.",
  },
  {
    question: "How many partners can a partnership have in Pakistan?",
    answer:
      "Minimum two, with a maximum of ten partners for a banking business and twenty partners for any other business, under the Partnership Act 1932.",
  },
  {
    question: "What happens if a partnership doesn't have a written deed?",
    answer:
      "The partnership can still exist based on the partners' agreement, but without a written deed, proving the exact terms — profit shares, responsibilities, exit terms — becomes much harder if a dispute arises. A written, ideally registered, deed is your strongest evidence in that case.",
  },
  {
    question: "Can Wakeel.org draft a partnership deed for me?",
    answer:
      "Wakeel.org can explain what a partnership deed generally needs to include and how registration works. It cannot draft the final deed or register your partnership — a licensed advocate or company secretary should handle that.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Partnership Deed in Pakistan: Legal Guide",
    description:
      "What a partnership deed in Pakistan needs to include under the Partnership Act 1932 — essential clauses, the partner limits, and why registration matters even though it's optional.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-07-26",
    dateModified: "2026-07-26",
    mainEntityOfPage: `${site.url}/journal/article/partnership-deed-pakistan-legal-guide`,
    citation: [
      { "@type": "CreativeWork", name: "The Partnership Act, 1932 — Khalid Zafar & Associates", url: "https://khalidzafar.com/laws-of-pakistan/partnership-act-1932/" },
      { "@type": "CreativeWork", name: "How to Draft & Register Partnership Deed in Pakistan — Tenco Consulting", url: "https://tencoconsulting.com/partnership-deed-pakistan/" },
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
        name: "Partnership Deed in Pakistan: Legal Guide",
        item: `${site.url}/journal/article/partnership-deed-pakistan-legal-guide`,
      },
    ],
  },
];

const keywords = [
  "partnership deed pakistan",
  "partnership act 1932 pakistan",
  "how to register partnership firm pakistan",
  "partnership deed clauses pakistan",
  "unregistered partnership pakistan",
  "partnership dissolution pakistan",
].join(", ");

export default function PartnershipDeedPakistanLegalGuide() {
  return (
    <Layout>
      <MarketingSEO
        title="Partnership Deed in Pakistan: Legal Guide"
        description="What a partnership deed in Pakistan needs to include under the Partnership Act 1932 — essential clauses, the partner limits, and why registration matters even though it's optional."
        path="/journal/article/partnership-deed-pakistan-legal-guide"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>Legal Help · Published July 26, 2026</p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Partnership Deed in Pakistan: Legal Guide
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Registration is optional — until you actually need to sue someone. Here's what the
            deed should cover either way.
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
                A partnership deed under the <strong>Partnership Act 1932</strong> should cover
                the firm's name, capital contributions, profit/loss sharing, partners' roles, and
                a clear <strong>dissolution</strong> process. Partnerships can have{" "}
                <strong>2 to 20 partners</strong> (10 for banking). Registration isn't mandatory
                to form a partnership, but an <strong>unregistered</strong> firm can't sue third
                parties to enforce contracts or recover debts — a real practical reason to
                register anyway.
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
          <h2 className={sectionHeading}>Why the dissolution clause matters more than founders usually think</h2>
          <p className="text-muted-foreground leading-relaxed">
            A practical drafting guide from{" "}
            <a href="https://tencoconsulting.com/partnership-deed-pakistan/" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
              Tenco Consulting
            </a>{" "}
            makes a point worth taking seriously: partnerships are usually formed during an
            optimistic, cooperative moment — which is exactly when the founders are least
            motivated to think carefully about how things end badly. But it's precisely the
            dissolution and exit terms that come under the most pressure during an actual dispute,
            when trust has already broken down and everyone is reading the deed adversarially for
            the first time.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            A deed that clearly spells out how a partner can exit, how their share is valued, and
            what happens to ongoing obligations does far more real protective work than most
            founders expect at signing — worth the extra time to get right before you actually
            need it.
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
                  Explaining what a partnership deed generally needs to include and how
                  registration works, in plain English or Urdu.
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
                  It cannot draft or register the deed for you — a licensed advocate or company
                  secretary should handle that.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel about a partnership deed — free
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
              { label: "The Partnership Act, 1932 — Khalid Zafar & Associates", href: "https://khalidzafar.com/laws-of-pakistan/partnership-act-1932/" },
              { label: "How to Draft & Register Partnership Deed in Pakistan — Tenco Consulting", href: "https://tencoconsulting.com/partnership-deed-pakistan/" },
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
            <Link href="/journal/article/sole-proprietorship-vs-partnership-vs-company-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Sole Proprietorship vs Partnership vs Private Limited Company</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/business-partnership-dispute-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Business Partnership Dispute in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/how-to-register-a-company-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to Register a Company in Pakistan</p>
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
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Starting or drafting a partnership?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel what a solid deed should cover — then get a licensed advocate to draft and
            register it.
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
