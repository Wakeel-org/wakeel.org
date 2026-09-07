import Link from "next/link";
import {
  CheckCircle2,
  Users,
  Gavel,
  Scale,
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
  { icon: Users, title: "The deed is the first thing that gets examined", detail: "Any dispute — over profit shares, decision-making, or an exit — starts with what the partnership deed actually says. Where the deed is silent or vague, the default rules of the Partnership Act 1932 fill the gap, which often isn't what either partner actually wanted." },
  { icon: Gavel, title: "An unregistered partnership has a real legal handicap", detail: "Under Section 69 of the Partnership Act 1932, an unregistered firm can't sue a third party to enforce a contract — and courts have applied similar reasoning to limit an unregistered firm's ability to sue its own partners in some circumstances, making registration relevant even to internal disputes." },
  { icon: Scale, title: "Dissolution is a distinct legal process, not just walking away", detail: "Ending a partnership — whether by mutual agreement, a partner's exit, or court order — needs to be handled properly, including settling accounts, dividing assets, and formally winding up the firm's affairs, rather than one partner simply stopping participation." },
  { icon: AlertTriangle, title: "Mediation is often faster than litigation for these disputes", detail: "Because business partnership disputes usually involve two parties who need some kind of ongoing commercial relationship (even during a wind-down), mediation or arbitration — if the deed provides for it — frequently resolves things faster and with less damage than a full civil suit." },
];

const faqs = [
  {
    question: "What's the first step in resolving a business partnership dispute in Pakistan?",
    answer:
      "Review the partnership deed carefully — it governs the relationship first. Where the deed is silent on an issue, the default provisions of the Partnership Act 1932 apply, which may not reflect what either partner actually intended.",
  },
  {
    question: "Can an unregistered partnership sue its own partners?",
    answer:
      "This is legally complicated — Section 69 of the Partnership Act 1932 restricts an unregistered firm's ability to sue third parties, and similar limitations have been applied by courts to disputes involving the firm's own partners in some circumstances. Registration status is worth checking early in any dispute.",
  },
  {
    question: "How does a partnership legally dissolve in Pakistan?",
    answer:
      "Dissolution can happen by mutual agreement, a partner's exit or death, or by court order, but it's a formal process involving settling accounts, dividing remaining assets, and properly winding up the firm's affairs — not simply one partner stepping away.",
  },
  {
    question: "Is mediation better than going to court for a partnership dispute?",
    answer:
      "Often, yes, especially where the deed includes a mediation or arbitration clause — partnership disputes usually involve people who need some kind of ongoing commercial relationship even during a wind-down, and mediation tends to resolve things faster with less damage to that relationship than litigation.",
  },
  {
    question: "Can Wakeel.org help resolve my partnership dispute?",
    answer:
      "Wakeel.org can explain how partnership dissolution and dispute resolution generally work, and help you understand your deed's terms. It cannot mediate the dispute, file a suit, or represent you — a licensed advocate should handle that.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Business Partnership Dispute in Pakistan",
    description:
      "How business partnership disputes are resolved in Pakistan under the Partnership Act 1932 — the deed's role, registration's impact, and dissolution and mediation options.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-08-08",
    dateModified: "2026-08-08",
    mainEntityOfPage: `${site.url}/journal/article/business-partnership-dispute-pakistan`,
    citation: [
      { "@type": "CreativeWork", name: "The Partnership Act, 1932 — Nasir Law Site", url: "https://nasirlawsite.com/llb2/partner.htm" },
      { "@type": "CreativeWork", name: "Partnership Act, 1932 — Khalid Zafar & Associates", url: "https://khalidzafar.com/laws-of-pakistan/partnership-act-1932/" },
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
        name: "Business Partnership Dispute in Pakistan",
        item: `${site.url}/journal/article/business-partnership-dispute-pakistan`,
      },
    ],
  },
];

const keywords = [
  "business partnership dispute pakistan",
  "partnership act 1932 dispute",
  "how to dissolve partnership pakistan",
  "unregistered partnership sue partners",
  "partnership mediation pakistan",
  "partner exit dispute pakistan",
].join(", ");

export default function BusinessPartnershipDisputePakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Business Partnership Dispute in Pakistan"
        description="How business partnership disputes are resolved in Pakistan under the Partnership Act 1932 — the deed's role, registration's impact, and dissolution and mediation options."
        path="/journal/article/business-partnership-dispute-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>Legal Help · Published August 8, 2026</p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Business Partnership Dispute in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The deed you signed at the start usually decides how the dispute at the end gets
            resolved.
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
                Start with your <strong>partnership deed</strong> — it governs the dispute first,
                with the <strong>Partnership Act 1932</strong> filling any gaps. An{" "}
                <strong>unregistered</strong> partnership faces real legal limits under Section 69
                of the Act. Ending a partnership properly requires formal{" "}
                <strong>dissolution</strong> — settling accounts and winding up affairs — not
                simply walking away. Where the deed allows it,{" "}
                <strong>mediation or arbitration</strong> is often faster than court.
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
          <h2 className={sectionHeading}>Why the registration question comes up in disputes people don't expect</h2>
          <p className="text-muted-foreground leading-relaxed">
            The registration limitation under{" "}
            <a href="https://nasirlawsite.com/llb2/partner.htm" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
              Section 69 of the Partnership Act 1932
            </a>{" "}
            is most often discussed in the context of suing outside third parties, but its logic
            has also shaped how courts approach disputes between the partners themselves — an
            unregistered firm's legal footing can be weaker across the board, not just for
            external contracts. This is exactly why the first practical question in almost any
            partnership dispute is simply: was this firm ever registered, and if so, is that
            registration current?
          </p>
          <p className="text-muted-foreground leading-relaxed">
            If registration wasn't done at the start, it's sometimes still possible to register
            during an active dispute, though the timing and effect of doing so depends heavily on
            the specific facts — this is exactly the kind of procedural detail worth getting a
            lawyer's read on quickly, rather than assuming it's either fully fixed or a lost cause.
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
                  Explaining how partnership dissolution and dispute resolution generally work,
                  and helping you understand your deed's terms.
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
                  It cannot mediate the dispute, file a suit, or represent you — a licensed
                  advocate should handle that.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel about a partnership dispute — free
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
              { label: "The Partnership Act, 1932 — Nasir Law Site", href: "https://nasirlawsite.com/llb2/partner.htm" },
              { label: "Partnership Act, 1932 — Khalid Zafar & Associates", href: "https://khalidzafar.com/laws-of-pakistan/partnership-act-1932/" },
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
            <Link href="/journal/article/partnership-deed-pakistan-legal-guide" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Partnership Deed in Pakistan: Legal Guide</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/sole-proprietorship-vs-partnership-vs-company-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Sole Proprietorship vs Partnership vs Private Limited Company</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/breach-of-contract-legal-remedies-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Breach of Contract in Pakistan: Legal Remedies</p>
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
          <h2 className={sectionHeading}>In a dispute with a business partner?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel to explain your options — then get a licensed advocate involved before
            things escalate further.
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
