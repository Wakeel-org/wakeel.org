import Link from "next/link";
import {
  CheckCircle2,
  Calendar,
  Heart,
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
  { icon: Calendar, title: "Annual leave: 14 days after a year of service", detail: "Under the Factories Act 1934 and the Shops and Establishments Ordinance, employees generally become entitled to 14 consecutive days of paid annual leave after completing 12 months of continuous service." },
  { icon: Heart, title: "Sick leave varies by law and by province", detail: "Under the Factories Act, workers in the federal system, Punjab, and KP generally get 16 days of sick leave at half wages per year; Sindh workers get 16 days at full wages; Balochistan workers get 20 days at full pay. Under the Shops and Establishments Ordinance, the entitlement is typically 8 days per year." },
  { icon: FileText, title: "Casual leave is a separate entitlement again", detail: "On top of annual and sick leave, a regular employee is generally entitled to around 10 days of fully paid casual leave per year — a distinct category from both vacation and medical leave, meant for short, unplanned absences." },
  { icon: AlertTriangle, title: "Which law applies to you actually matters", detail: "Whether you're covered by the Factories Act (typically industrial workers) or the Shops and Establishments Ordinance (typically commercial/office employees) changes your exact entitlements — the two frameworks aren't identical, and neither is guaranteed to be more generous across the board." },
];

const faqs = [
  {
    question: "How many days of annual leave am I entitled to in Pakistan?",
    answer:
      "Generally 14 consecutive days of paid annual leave after completing 12 months of continuous service, under the Factories Act 1934 and the Shops and Establishments Ordinance.",
  },
  {
    question: "How much sick leave am I entitled to in Pakistan?",
    answer:
      "It depends on which law and province applies. Under the Factories Act: 16 days at half wages (federal, Punjab, KP), 16 days at full wages (Sindh), or 20 days at full pay (Balochistan). Under the Shops and Establishments Ordinance, it's typically 8 days per year.",
  },
  {
    question: "What is casual leave and is it separate from sick leave?",
    answer:
      "Yes, it's a separate entitlement — generally around 10 days of fully paid casual leave per year, intended for short, unplanned absences, distinct from both annual (vacation) leave and medical/sick leave.",
  },
  {
    question: "Does my leave entitlement depend on which law covers my job?",
    answer:
      "Yes. Industrial workers are typically covered by the Factories Act 1934, while commercial and office employees usually fall under the Shops and Establishments Ordinance — the specific entitlement numbers differ between the two frameworks, so it's worth confirming which one applies to your role.",
  },
  {
    question: "Can Wakeel.org tell me exactly how much leave I'm owed?",
    answer:
      "Wakeel.org can explain the general leave entitlement framework and which law typically applies to different kinds of jobs. It cannot calculate your specific accrued leave or review your employment records — your HR department or a licensed labour law advocate can confirm that.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Annual Leave and Sick Leave Laws in Pakistan",
    description:
      "How annual, sick, and casual leave entitlements work in Pakistan under the Factories Act 1934 and the Shops and Establishments Ordinance — and how they differ by province and by law.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-07-18",
    dateModified: "2026-07-18",
    mainEntityOfPage: `${site.url}/journal/article/annual-sick-leave-laws-pakistan`,
    citation: [
      { "@type": "CreativeWork", name: "Leave Policy in Pakistan — Skuad", url: "https://www.skuad.io/leave-policy/pakistan" },
      { "@type": "CreativeWork", name: "Leave Entitlement at Work in Pakistan — Pakera", url: "https://pakera.pk/leave-entitlement-work-pakistan/" },
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
        name: "Annual Leave and Sick Leave Laws in Pakistan",
        item: `${site.url}/journal/article/annual-sick-leave-laws-pakistan`,
      },
    ],
  },
];

const keywords = [
  "annual leave law pakistan",
  "sick leave entitlement pakistan",
  "casual leave pakistan",
  "factories act 1934 leave",
  "shops and establishments ordinance leave",
  "how many leave days pakistan employee",
].join(", ");

export default function AnnualSickLeaveLawsPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Annual Leave and Sick Leave Laws in Pakistan"
        description="How annual, sick, and casual leave entitlements work in Pakistan under the Factories Act 1934 and the Shops and Establishments Ordinance — and how they differ by province and by law."
        path="/journal/article/annual-sick-leave-laws-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>Legal Help · Published July 18, 2026</p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Annual Leave and Sick Leave Laws in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three different kinds of leave, and the exact numbers depend on which law — and which
            province — covers your job.
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
                After 12 months of service, expect around{" "}
                <strong>14 days of paid annual leave</strong>. Sick leave ranges from{" "}
                <strong>8 to 20 days</strong> depending on whether the Factories Act or the Shops
                and Establishments Ordinance applies, and which province you're in. On top of
                that, a further <strong>~10 days of casual leave</strong> is typically available
                for short, unplanned absences. Confirm which specific law covers your job to get
                your exact numbers.
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
          <h2 className={sectionHeading}>Why the exact numbers genuinely differ by province</h2>
          <p className="text-muted-foreground leading-relaxed">
            Comparative summaries like{" "}
            <a href="https://pakera.pk/leave-entitlement-work-pakistan/" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
              Pakera's leave entitlement guide
            </a>{" "}
            highlight something people often assume incorrectly — that leave law is uniform across
            Pakistan. It isn't. Sindh's sick leave rules pay full wages for the same 16-day period
            that federal, Punjab, and KP rules pay only half wages for, and Balochistan goes
            further still with 20 days at full pay. This isn't a minor technicality; for a longer
            illness, the difference between half and full pay for 16 days is a meaningful amount
            of money.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The practical step worth taking: confirm which specific law (Factories Act vs. Shops
            and Establishments Ordinance) and which province's rules apply to your employment,
            rather than relying on a generic national figure — your employment contract or HR
            policy should specify this, and it's worth asking directly if it doesn't.
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
                  Explaining how the leave entitlement rules generally differ by law and province,
                  in plain English or Urdu.
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
                  It cannot calculate your specific accrued leave or review your employment
                  records — your HR department or a licensed advocate can confirm that.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel about leave entitlements — free
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
              { label: "Leave Policy in Pakistan — Skuad", href: "https://www.skuad.io/leave-policy/pakistan" },
              { label: "Leave Entitlement at Work in Pakistan — Pakera", href: "https://pakera.pk/leave-entitlement-work-pakistan/" },
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
            <Link href="/journal/article/overtime-laws-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Overtime Laws in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/employment-contract-essentials-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Employment Contract in Pakistan: What Should It Include?</p>
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
          <h2 className={sectionHeading}>Unsure about your leave entitlement?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel how the leave rules generally work — then confirm with HR or a licensed
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
