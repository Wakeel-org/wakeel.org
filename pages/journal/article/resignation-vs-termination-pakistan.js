import Link from "next/link";
import {
  CheckCircle2,
  Scale,
  Wallet,
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
  { icon: FileText, title: "Who initiates it changes the legal label, not always the entitlement", detail: "Resignation is the employee ending the employment; termination is the employer ending it. Both are still generally subject to the same one-month notice (or pay in lieu) rule under the Standing Orders Ordinance 1968, unless misconduct is involved." },
  { icon: Wallet, title: "Gratuity generally survives a resignation", detail: "An employee who resigns is still generally entitled to gratuity for completed years of service, just like one who's terminated for reasons other than misconduct — resigning doesn't automatically forfeit this benefit." },
  { icon: Scale, title: "Misconduct-based termination is where entitlements actually change", detail: "Termination specifically for misconduct — following a proper inquiry — is treated differently from an ordinary termination or resignation, and can affect notice pay and gratuity entitlement in ways an ordinary end of employment doesn't." },
  { icon: AlertTriangle, title: "The label on paper isn't always the real story", detail: "An employer sometimes pressures an employee to \"resign\" rather than formally terminating them, precisely to avoid termination-related obligations or scrutiny — if that happened to you, the substance of what occurred can matter more than the word used on the exit paperwork." },
];

const faqs = [
  {
    question: "What's the legal difference between resignation and termination in Pakistan?",
    answer:
      "Resignation is initiated by the employee; termination is initiated by the employer. Both generally require one month's notice (or pay in lieu) under the Standing Orders Ordinance 1968, unless the termination is specifically for proven misconduct, which is treated differently.",
  },
  {
    question: "Do I still get gratuity if I resign instead of being terminated?",
    answer:
      "Generally yes — an employee who resigns is typically still entitled to gratuity for completed years of service, on the same basis as someone terminated for reasons other than misconduct.",
  },
  {
    question: "Can my employer force me to resign instead of firing me?",
    answer:
      "Pressuring someone to resign to avoid termination obligations is a recognized problem — if you were effectively forced out, the substance of what happened (not just the label \"resignation\" on paper) can be relevant to your legal position. This is worth discussing with a lawyer if it happened to you.",
  },
  {
    question: "Does misconduct-based termination affect my final settlement?",
    answer:
      "It can. Termination specifically for proven misconduct, following a proper inquiry, is treated differently from an ordinary end of employment and can affect entitlements like notice pay and gratuity — the specifics depend on your contract and the facts.",
  },
  {
    question: "Can Wakeel.org tell me if my resignation was actually a forced termination?",
    answer:
      "Wakeel.org can explain the general legal differences between resignation and termination. It cannot assess whether your specific situation amounts to constructive or forced termination — a licensed labour law advocate should evaluate that.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Resignation vs Termination: Legal Differences in Pakistan",
    description:
      "How resignation and termination differ legally in Pakistan — notice requirements, gratuity entitlement, and what happens when misconduct is involved.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-07-20",
    dateModified: "2026-07-20",
    mainEntityOfPage: `${site.url}/journal/article/resignation-vs-termination-pakistan`,
    citation: [
      { "@type": "CreativeWork", name: "At a Glance: Termination of Employment in Pakistan — Lexology", url: "https://www.lexology.com/library/detail.aspx?g=9b1f24ba-d521-412e-b79e-20316a05e0ab" },
      { "@type": "CreativeWork", name: "Termination Rules in Pakistan: Notice and Dues — Pakera", url: "https://pakera.pk/job-termination-rules-pakistan/" },
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
        name: "Resignation vs Termination: Legal Differences in Pakistan",
        item: `${site.url}/journal/article/resignation-vs-termination-pakistan`,
      },
    ],
  },
];

const keywords = [
  "resignation vs termination pakistan",
  "difference resignation termination legal",
  "gratuity after resignation pakistan",
  "forced resignation pakistan",
  "termination misconduct pakistan",
  "employee final settlement pakistan",
].join(", ");

export default function ResignationVsTerminationPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Resignation vs Termination: Legal Differences in Pakistan"
        description="How resignation and termination differ legally in Pakistan — notice requirements, gratuity entitlement, and what happens when misconduct is involved."
        path="/journal/article/resignation-vs-termination-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>Legal Help · Published July 20, 2026</p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Resignation vs Termination: Legal Differences in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The word on your exit paperwork matters less than most people think — except when
            misconduct is involved.
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
                Resignation (employee-initiated) and termination (employer-initiated) generally
                both require <strong>one month's notice or pay in lieu</strong>, and{" "}
                <strong>gratuity</strong> usually survives either one. The real legal divide is
                whether termination was for proven <strong>misconduct</strong> — that specifically
                changes notice and gratuity entitlements. If you were pressured into "resigning"
                to avoid a formal termination, the substance of what happened can matter more than
                the label used.
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
          <h2 className={sectionHeading}>Why "just resign and we'll settle up" is worth pausing on</h2>
          <p className="text-muted-foreground leading-relaxed">
            Employment law overviews, including{" "}
            <a href="https://www.lexology.com/library/detail.aspx?g=9b1f24ba-d521-412e-b79e-20316a05e0ab" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
              Lexology's summary of termination law in Pakistan
            </a>
            , note that employers sometimes prefer resignation over termination specifically
            because it avoids the documentation and scrutiny a formal termination invites — even
            where the underlying reason for the employee leaving genuinely originated with the
            employer. This matters because a resignation that was really a forced exit can still
            carry legal weight as a constructive termination in the right circumstances.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            If you're being asked to sign a resignation letter under pressure, it's worth pausing
            to get independent advice before signing — once submitted, a resignation is harder to
            walk back than a proposed termination is to negotiate.
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
                  Explaining how resignation and termination generally differ legally, in plain
                  English or Urdu.
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
                  It cannot assess whether your specific exit was a forced termination or
                  represent you in a dispute — a licensed labour law advocate should handle that.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel about your exit situation — free
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
              { label: "At a Glance: Termination of Employment in Pakistan — Lexology", href: "https://www.lexology.com/library/detail.aspx?g=9b1f24ba-d521-412e-b79e-20316a05e0ab" },
              { label: "Termination Rules in Pakistan: Notice and Dues — Pakera", href: "https://pakera.pk/job-termination-rules-pakistan/" },
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
            <Link href="/journal/article/wrongful-termination-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Wrongful Termination in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/notice-period-employment-law-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Notice Period in Pakistan: Employee and Employer Rights</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/gratuity-provident-fund-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Employee Gratuity and Provident Fund in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/salary-not-paid-employee-rights-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Salary Not Paid: Employee Legal Rights in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Being pushed to resign, or facing termination?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel how the two differ legally — then verify with a licensed labour law
            advocate before you sign anything.
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
