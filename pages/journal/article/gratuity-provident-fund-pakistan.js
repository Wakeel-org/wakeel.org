import Link from "next/link";
import {
  CheckCircle2,
  Wallet,
  Landmark,
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
  { icon: Landmark, title: "Employers must offer at least one retirement benefit", detail: "Standing Order 12(6) of the Industrial and Commercial Employment (Standing Orders) Ordinance 1968 requires commercial establishments with 20+ workers, or industrial establishments with 49+ workers, to offer at least a Gratuity, a Provident Fund, or an Approved Pension Fund." },
  { icon: Wallet, title: "Gratuity is a lump-sum, service-based payout", detail: "A worker who resigns or whose service is terminated for any reason other than misconduct is entitled to gratuity equal to twenty days' wages for every completed year of service (or part of a year beyond six months)." },
  { icon: Scale, title: "You generally get one or the other, not both", detail: "Where an employer has established a Provident Fund with employer contributions at least equal to the employee's own contributions, gratuity generally isn't payable for the period that fund existed — the law expects one meaningful retirement benefit, not a stack of them." },
  { icon: AlertTriangle, title: "Check which one your employer actually offers", detail: "Employees don't automatically have a legal right to both gratuity and a provident fund — confirming which benefit (or combination) your specific employer has established, and its exact contribution terms, is the only way to know what you're actually entitled to." },
];

const faqs = [
  {
    question: "Am I entitled to both gratuity and a provident fund in Pakistan?",
    answer:
      "Not automatically. The Standing Orders Ordinance 1968 requires an employer to offer at least one retirement benefit — gratuity, a provident fund, or an approved pension fund. Where an employer runs a provident fund with matching contributions, gratuity generally isn't payable for that period.",
  },
  {
    question: "How is gratuity calculated in Pakistan?",
    answer:
      "Gratuity is generally calculated at twenty days' wages for every completed year of service, including any part of a year exceeding six months, payable when an employee resigns or their service ends for any reason other than misconduct.",
  },
  {
    question: "Which employers are legally required to offer gratuity or provident fund?",
    answer:
      "Under Standing Order 12(6), commercial establishments employing 20 or more workers, or industrial establishments employing 49 or more workers (in the preceding 12 months), are required to offer at least one of these retirement benefits.",
  },
  {
    question: "Do I lose my gratuity if I resign, rather than being terminated?",
    answer:
      "Generally no — the entitlement applies whether service ends by resignation or termination, as long as the termination wasn't for misconduct. The key exclusion is misconduct-based dismissal, not simply who initiated the end of employment.",
  },
  {
    question: "Can Wakeel.org calculate my gratuity or provident fund entitlement?",
    answer:
      "Wakeel.org can explain how gratuity and provident fund rules generally work. It cannot calculate your specific entitlement or verify your employer's fund contributions — a licensed labour law advocate or your employer's HR records can confirm that.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Employee Gratuity and Provident Fund in Pakistan",
    description:
      "How gratuity and provident fund entitlements work in Pakistan under the Standing Orders Ordinance 1968 — the calculation, who's covered, and why you often get one benefit, not both.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-07-16",
    dateModified: "2026-07-16",
    mainEntityOfPage: `${site.url}/journal/article/gratuity-provident-fund-pakistan`,
    citation: [
      { "@type": "CreativeWork", name: "Gratuity Law in Pakistan — WageIndicator", url: "https://wageindicator.org/en-pk/work-in-pakistan/labour-law/social-security/gratuity-law-in-pakistan/" },
      { "@type": "CreativeWork", name: "Gratuity and Provident Fund Rules in Pakistan — Pakera", url: "https://pakera.pk/gratuity-provident-fund-pakistan/" },
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
        name: "Employee Gratuity and Provident Fund in Pakistan",
        item: `${site.url}/journal/article/gratuity-provident-fund-pakistan`,
      },
    ],
  },
];

const keywords = [
  "gratuity law pakistan",
  "provident fund pakistan employee rights",
  "gratuity calculation pakistan",
  "standing order 12 gratuity",
  "gratuity vs provident fund pakistan",
  "retirement benefits employment pakistan",
].join(", ");

export default function GratuityProvidentFundPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Employee Gratuity and Provident Fund in Pakistan"
        description="How gratuity and provident fund entitlements work in Pakistan under the Standing Orders Ordinance 1968 — the calculation, who's covered, and why you often get one benefit, not both."
        path="/journal/article/gratuity-provident-fund-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>Legal Help · Published July 16, 2026</p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Employee Gratuity and Provident Fund in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Two retirement benefits, one legal requirement to offer at least one — here's how to
            tell which one applies to you.
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
                Employers with 20+ (commercial) or 49+ (industrial) workers must offer at least
                one retirement benefit — <strong>gratuity</strong>, a{" "}
                <strong>provident fund</strong>, or an approved pension fund. Gratuity is generally{" "}
                <strong>20 days' wages per completed year</strong> of service, payable unless
                termination was for misconduct. If your employer runs a matching provident fund,
                you typically get that instead of gratuity, not both — check your specific
                employer's arrangement.
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
          <h2 className={sectionHeading}>Why "matching contributions" is the detail worth confirming</h2>
          <p className="text-muted-foreground leading-relaxed">
            Practical guidance from{" "}
            <a href="https://pakera.pk/gratuity-provident-fund-pakistan/" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
              Pakera
            </a>{" "}
            points out that the gratuity-versus-provident-fund question isn't just theoretical —
            the law's exemption from paying gratuity depends specifically on the employer's
            provident fund contributions being <strong>at least equal</strong> to the employee's
            own. If an employer's provident fund contributes less than the employee, that
            condition isn't met, and the gratuity obligation may still apply on top of it.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            This is exactly the kind of detail that's easy to overlook in an offer letter but
            makes a real financial difference over years of employment — worth confirming directly
            with HR, in writing, rather than assuming the standard arrangement applies to your
            specific employer.
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
                  Explaining how gratuity and provident fund rules generally work, in plain
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
                  It cannot calculate your specific entitlement or verify your employer's fund
                  terms — a licensed labour law advocate can help with that.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel about gratuity or PF — free
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
              { label: "Gratuity Law in Pakistan — WageIndicator", href: "https://wageindicator.org/en-pk/work-in-pakistan/labour-law/social-security/gratuity-law-in-pakistan/" },
              { label: "Gratuity and Provident Fund Rules in Pakistan — Pakera", href: "https://pakera.pk/gratuity-provident-fund-pakistan/" },
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
            <Link href="/journal/article/resignation-vs-termination-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Resignation vs Termination: Legal Differences in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/notice-period-employment-law-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Notice Period in Pakistan: Employee and Employer Rights</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/salary-not-paid-employee-rights-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Salary Not Paid: Employee Legal Rights in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/wrongful-termination-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Wrongful Termination in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Unsure about your retirement benefit entitlement?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel how gratuity and provident fund rules generally work — then verify with a
            licensed advocate.
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
