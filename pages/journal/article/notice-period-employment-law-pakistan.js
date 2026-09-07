import Link from "next/link";
import {
  CheckCircle2,
  Clock,
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
  { icon: Clock, title: "One month is the statutory default", detail: "Under Standing Order 12 of the Industrial and Commercial Employment (Standing Orders) Ordinance 1968, either the employer or the employee can end an employment contract by giving one month's notice." },
  { icon: Wallet, title: "No notice? Pay in lieu instead", detail: "If notice isn't given, the party ending the employment owes one month's wages in lieu of notice, calculated based on the average wages earned over the last three months — not just the base salary figure." },
  { icon: FileText, title: "It applies to larger establishments by default", detail: "The Standing Orders Ordinance directly covers industrial and commercial establishments employing 20 or more workers (in the preceding 12 months), though provincial governments can extend it to smaller establishments by notification." },
  { icon: AlertTriangle, title: "A termination still needs a written, reasoned letter", detail: "Beyond the notice period itself, the Ordinance requires a written termination letter that explicitly states the reasons for termination — a verbal dismissal, even with notice given, doesn't fully satisfy the legal requirement." },
];

const faqs = [
  {
    question: "What is the standard notice period for employment termination in Pakistan?",
    answer:
      "Under Standing Order 12 of the Industrial and Commercial Employment (Standing Orders) Ordinance 1968, the standard notice period is one month, applicable to either the employer or the employee ending the contract.",
  },
  {
    question: "Can an employer terminate me without notice in Pakistan?",
    answer:
      "Generally, an employer must give one month's notice or, alternatively, pay one month's wages in lieu of notice (based on your average earnings over the last three months) — termination without either can be a legal violation, subject to specific exceptions like misconduct-based dismissal.",
  },
  {
    question: "Does the notice period law apply to all employers in Pakistan?",
    answer:
      "The Standing Orders Ordinance 1968 directly applies to industrial and commercial establishments with 20 or more workers, though provincial governments can extend coverage to smaller establishments by notification — check your specific employment contract and provincial rules for your situation.",
  },
  {
    question: "Does an employer need to give a reason for termination?",
    answer:
      "Yes. The Standing Orders Ordinance requires a written termination letter that explicitly states the reasons for the termination — an undocumented, unexplained dismissal doesn't fully meet this legal requirement.",
  },
  {
    question: "Can Wakeel.org tell me if my notice period was handled correctly?",
    answer:
      "Wakeel.org can explain how the notice period rules generally work and what a termination letter should include. It cannot review your specific employment contract for compliance or represent you in a dispute — a licensed labour law advocate should handle that.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Notice Period in Pakistan: Employee and Employer Rights",
    description:
      "How the notice period works for ending employment in Pakistan under the Standing Orders Ordinance 1968 — the one-month rule, pay in lieu, and the written termination requirement.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-07-11",
    dateModified: "2026-07-11",
    mainEntityOfPage: `${site.url}/journal/article/notice-period-employment-law-pakistan`,
    citation: [
      { "@type": "CreativeWork", name: "The Industrial and Commercial Employment (Standing Orders) Ordinance, 1968 — Punjab Laws", url: "http://punjablaws.gov.pk/laws/222.html" },
      { "@type": "CreativeWork", name: "Understanding the Notice Period Law in Pakistan — Ali Raza (Medium)", url: "https://medium.com/@aliraza4672/understanding-the-notice-period-law-in-pakistan-rights-obligations-and-legal-compliance-d23ba320bf3f" },
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
        name: "Notice Period in Pakistan: Employee and Employer Rights",
        item: `${site.url}/journal/article/notice-period-employment-law-pakistan`,
      },
    ],
  },
];

const keywords = [
  "notice period pakistan employment",
  "standing orders ordinance 1968 notice",
  "one month notice termination pakistan",
  "pay in lieu of notice pakistan",
  "employer notice period rights pakistan",
  "written termination letter pakistan",
].join(", ");

export default function NoticePeriodEmploymentLawPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Notice Period in Pakistan: Employee and Employer Rights"
        description="How the notice period works for ending employment in Pakistan under the Standing Orders Ordinance 1968 — the one-month rule, pay in lieu, and the written termination requirement."
        path="/journal/article/notice-period-employment-law-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>Legal Help · Published July 11, 2026</p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Notice Period in Pakistan: Employee and Employer Rights
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            One statute sets the default rule for ending most jobs in Pakistan — here's what it
            actually requires from both sides.
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
                Under{" "}
                <a href="http://punjablaws.gov.pk/laws/222.html" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
                  Standing Order 12
                </a>{" "}
                of the Industrial and Commercial Employment (Standing Orders) Ordinance 1968,
                either party can end an employment contract with{" "}
                <strong>one month's notice</strong>, or one month's wages{" "}
                <strong>in lieu of notice</strong> (based on your average pay over the last three
                months) if notice isn't given. This applies directly to establishments with 20+
                workers, and termination requires a{" "}
                <strong>written letter stating the reasons</strong>.
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
          <h2 className={sectionHeading}>Why "average wages" trips up a lot of pay-in-lieu calculations</h2>
          <p className="text-muted-foreground leading-relaxed">
            A detail worth knowing, explained in practical terms by{" "}
            <a href="https://medium.com/@aliraza4672/understanding-the-notice-period-law-in-pakistan-rights-obligations-and-legal-compliance-d23ba320bf3f" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
              this breakdown of the notice period law
            </a>
            , is that pay in lieu of notice is based on <strong>average</strong> wages over the
            last three months — not simply your fixed base salary. If your pay included overtime,
            bonuses, or other variable components during that window, those should factor into
            the calculation, which means a pay-in-lieu settlement based purely on base salary may
            actually be short of what's owed.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            It's also worth noting that this one-month default is a floor, not a ceiling — your
            individual employment contract can specify a longer notice period, and where it does,
            the contract terms generally govern rather than reverting to the statutory minimum.
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
                  Explaining the notice period rules and what a compliant termination generally
                  requires, in plain English or Urdu.
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
                  It cannot review your specific contract or calculate your exact pay-in-lieu
                  entitlement — a licensed labour law advocate should handle that.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel about a notice period issue — free
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
              { label: "The Industrial and Commercial Employment (Standing Orders) Ordinance, 1968 — Punjab Laws", href: "http://punjablaws.gov.pk/laws/222.html" },
              { label: "Understanding the Notice Period Law in Pakistan", href: "https://medium.com/@aliraza4672/understanding-the-notice-period-law-in-pakistan-rights-obligations-and-legal-compliance-d23ba320bf3f" },
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
            <Link href="/journal/article/resignation-vs-termination-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Resignation vs Termination: Legal Differences in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/employment-contract-essentials-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Employment Contract in Pakistan: What Should It Include?</p>
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
          <h2 className={sectionHeading}>Dealing with a notice period dispute?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel how the rules generally work — then verify with a licensed labour law
            advocate.
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
