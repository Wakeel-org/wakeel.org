import Link from "next/link";
import {
  CheckCircle2,
  FileText,
  Users,
  Clock,
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
  { icon: FileText, title: "Section 7 of the Muslim Family Laws Ordinance 1961 makes it mandatory", detail: "Any man who pronounces talaq must, as soon as possible afterward, give the Union Council Chairman written notice of it — and separately supply a copy of that same notice to the wife." },
  { icon: Users, title: "What the notice needs to state", detail: "That talaq has been pronounced, the date it was pronounced, and the names and addresses of both husband and wife — clear enough for the Chairman to act on it and constitute an Arbitration Council." },
  { icon: Clock, title: "It triggers the 90-day process, not the divorce itself", detail: "The Chairman must constitute an Arbitration Council within 30 days of receiving the notice, to attempt reconciliation. Talaq doesn't become legally effective until 90 days after the notice was delivered to the Chairman." },
  { icon: AlertTriangle, title: "Skipping the notice carries a real penalty", detail: "Failing to give the required notice to the Chairman and a copy to the wife is itself punishable — simple imprisonment of up to one year, a fine of up to PKR 5,000, or both, separate from any question about the divorce's validity." },
];

const faqs = [
  {
    question: "What is a divorce notice in Pakistan?",
    answer:
      "It's the written notice a husband must give to the Union Council Chairman after pronouncing talaq, under Section 7 of the Muslim Family Laws Ordinance 1961, along with a copy supplied to the wife — this notice starts the formal reconciliation and 90-day process.",
  },
  {
    question: "What happens if the divorce notice isn't sent?",
    answer:
      "Failing to give the required written notice to the Chairman and a copy to the wife is a punishable offence — simple imprisonment of up to one year, a fine of up to PKR 5,000, or both — separate from any dispute over the underlying divorce itself.",
  },
  {
    question: "When does talaq actually take legal effect?",
    answer:
      "Ninety days after the notice is delivered to the Union Council Chairman, unless revoked earlier — the notice itself doesn't end the marriage immediately; it starts the reconciliation window that must run its course.",
  },
  {
    question: "What information must the divorce notice include?",
    answer:
      "That talaq has been pronounced, the date it happened, and the names and addresses of both spouses — enough detail for the Chairman to act on it and constitute an Arbitration Council for reconciliation.",
  },
  {
    question: "Can Wakeel.org generate a divorce notice for me?",
    answer:
      "Yes — describe the situation and the required details, and Wakeel can generate a first draft in the format the Union Council expects. A licensed family law advocate should review it before it's submitted, since getting this notice right affects the entire subsequent timeline.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Divorce Notice in Pakistan",
    description:
      "How the mandatory divorce (talaq) notice works in Pakistan under Section 7 of the Muslim Family Laws Ordinance 1961 — what it must state, and how to generate a first draft with Wakeel.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-06-19",
    dateModified: "2026-06-19",
    mainEntityOfPage: `${site.url}/journal/article/divorce-notice-in-pakistan`,
    citation: [
      { "@type": "CreativeWork", name: "The Muslim Family Laws Ordinance, 1961 — Punjab Laws", url: "http://punjablaws.gov.pk/laws/777a.html" },
      { "@type": "CreativeWork", name: "Divorce Under the Muhammadan Law and Section 7 of the Muslim Family Laws Ordinance, 1961 — Courting the Law", url: "https://courtingthelaw.com/2015/07/03/commentary/divorce-under-the-muhammadan-law-and-section-7-of-the-muslim-family-laws-ordinance-1961/" },
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
        name: "Divorce Notice in Pakistan",
        item: `${site.url}/journal/article/divorce-notice-in-pakistan`,
      },
    ],
  },
];

const keywords = [
  "divorce notice pakistan",
  "talaq notice format pakistan",
  "section 7 muslim family laws ordinance",
  "divorce notice union council",
  "talaq notice generator pakistan",
  "how to give divorce notice pakistan",
].join(", ");

export default function DivorceNoticeInPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Divorce Notice in Pakistan"
        description="How the mandatory divorce (talaq) notice works in Pakistan under Section 7 of the Muslim Family Laws Ordinance 1961 — what it must state, and how to generate a first draft with Wakeel."
        path="/journal/article/divorce-notice-in-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>Legal Help · Published June 19, 2026</p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Divorce Notice in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            One short written notice starts the entire 90-day process — and skipping it is itself
            a punishable offence.
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
                Under <strong>Section 7 of the Muslim Family Laws Ordinance 1961</strong>, after
                pronouncing talaq, a husband must give written notice to the{" "}
                <strong>Union Council Chairman</strong> and supply a copy to the wife. This
                notice, stating that talaq occurred and when, starts the{" "}
                <strong>90-day reconciliation process</strong> — talaq isn't effective until that
                period passes.{" "}
                <a href={site.appUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Wakeel can generate a first draft
                </a>{" "}
                of the notice in the expected format.
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

      {/* Generate with Wakeel */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className={`${cardBase} border-primary/40`}>
            <CardHeader>
              <FileText className="h-7 w-7 text-primary" />
              <CardTitle className="text-xl">Generate your divorce notice draft with Wakeel</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Describe the situation — the date talaq was pronounced, and both parties' details —
                and Wakeel can generate a first draft of the notice in the format the Union Council
                expects, in English or Urdu. Have a licensed family law advocate review it before
                it's submitted, since getting the notice right on the first attempt keeps the
                90-day timeline running smoothly.
              </p>
              <div className="text-center">
                <Button asChild size="lg" className="cta-try-free">
                  <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                    Generate a divorce notice draft — free
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
          <h2 className={sectionHeading}>Why the notice itself is legally significant, not just paperwork</h2>
          <p className="text-muted-foreground leading-relaxed">
            Legal commentary on Section 7, including analysis from{" "}
            <a href="https://courtingthelaw.com/2015/07/03/commentary/divorce-under-the-muhammadan-law-and-section-7-of-the-muslim-family-laws-ordinance-1961/" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
              Courting the Law
            </a>
            , underscores that the notice requirement isn't a mere administrative formality — it's
            what makes the entire 90-day reconciliation mechanism function, and Pakistani courts
            have treated non-compliance seriously, including through the criminal penalty attached
            to skipping it. This is exactly why the notice needs to be delivered to the correct
            Union Council, with the copy to the wife properly supplied, rather than treated as an
            afterthought following the talaq pronouncement itself.
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
                  Generating a first draft of a divorce notice from the details you describe, in
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
                  It cannot deliver the notice to the Union Council or the wife, or represent you
                  — a licensed family law advocate should handle that.
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
              { label: "The Muslim Family Laws Ordinance, 1961 — Punjab Laws", href: "http://punjablaws.gov.pk/laws/777a.html" },
              { label: "Divorce Under the Muhammadan Law and Section 7 of the Muslim Family Laws Ordinance, 1961 — Courting the Law", href: "https://courtingthelaw.com/2015/07/03/commentary/divorce-under-the-muhammadan-law-and-section-7-of-the-muslim-family-laws-ordinance-1961/" },
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
            <Link href="/journal/article/talaq-in-pakistan-legal-procedure" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Talaq in Pakistan: Legal Procedure</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/how-to-get-divorce-certificate-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to Get a Divorce Certificate in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/khula-in-pakistan-procedure-rights" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Khula in Pakistan: Procedure and Rights</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/wife-maintenance-after-divorce-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Wife Maintenance After Divorce in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Need to send a divorce notice?</h2>
          <p className="text-muted-foreground">
            Describe the situation, and let Wakeel put together a first draft — then get a family
            law advocate to review it.
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
