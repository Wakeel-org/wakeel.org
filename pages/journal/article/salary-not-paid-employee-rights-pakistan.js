import Link from "next/link";
import {
  CheckCircle2,
  Wallet,
  Gavel,
  Users,
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
  { icon: Gavel, title: "Getting paid on time is a legal right, not a favor", detail: "The Payment of Wages Act 1936, alongside the Shops & Establishment Ordinance 1969, legally requires employers to pay wages on time — and to clear all final dues within a set window (commonly 7 to 14 days) after termination or resignation." },
  { icon: Users, title: "There's a specific official who hears wage complaints", detail: "The provincial government appoints an authority — often called the Section 9-A Authority or a Commissioner for Workmen's Compensation — specifically to hear and decide complaints about wage deductions or delayed payment, separate from the regular civil courts." },
  { icon: Wallet, title: "A three-step escalation path exists", detail: "Start with the Labour Inspector for your workplace, then take your claim to the Section 9-A Authority if that doesn't resolve it, and escalate to the Labour Court if the Authority doesn't act — each step is a real, usable option, not just a formality." },
  { icon: AlertTriangle, title: "Non-payment can carry criminal penalties too", detail: "Beyond simply being ordered to pay, an employer who fails to pay minimum wage can face penalties under the Minimum Wages Ordinance 1961 — up to 6 months' imprisonment, a fine, or both, in addition to being made to pay the outstanding amount." },
];

const faqs = [
  {
    question: "What can I do if my employer hasn't paid my salary in Pakistan?",
    answer:
      "Start by raising it formally with your employer in writing. If unpaid, you can complain to the Labour Inspector, then escalate to the Section 9-A Authority (or Commissioner for Workmen's Compensation) under the Payment of Wages Act 1936, and if still unresolved, to the Labour Court.",
  },
  {
    question: "How long does an employer have to pay final dues after I resign or am fired?",
    answer:
      "Under the Payment of Wages Act 1936 and the Shops & Establishment Ordinance 1969, employers are generally required to clear final dues within 7 to 14 days of termination or resignation — the exact window can depend on your specific employment terms.",
  },
  {
    question: "What evidence do I need for a wage non-payment complaint?",
    answer:
      "Payslips, your appointment letter, attendance records, and any dated messages with your employer about the unpaid amount are the kinds of evidence that typically support a wage claim — the more documented and dated, the stronger your case.",
  },
  {
    question: "Can an employer be punished for not paying minimum wage?",
    answer:
      "Yes. Under Section 9(3) of the Minimum Wages Ordinance 1961, an employer who fails to pay minimum wage can face up to 6 months' imprisonment, a fine, or both, in addition to being ordered to pay the arrears owed to the employee.",
  },
  {
    question: "Can Wakeel.org help me get my unpaid salary?",
    answer:
      "Wakeel.org can explain the escalation process and what evidence typically helps a wage claim. It cannot file a complaint with the Labour Inspector or Section 9-A Authority on your behalf, or represent you — a licensed advocate should handle that.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Salary Not Paid: Employee Legal Rights in Pakistan",
    description:
      "What to do if your employer hasn't paid your salary in Pakistan — the Payment of Wages Act 1936, the Section 9-A Authority, and the escalation path to the Labour Court.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-09-03",
    dateModified: "2026-09-03",
    mainEntityOfPage: `${site.url}/journal/article/salary-not-paid-employee-rights-pakistan`,
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
        name: "Salary Not Paid: Employee Legal Rights in Pakistan",
        item: `${site.url}/journal/article/salary-not-paid-employee-rights-pakistan`,
      },
    ],
  },
];

const keywords = [
  "salary not paid pakistan",
  "employer not paying salary legal action",
  "payment of wages act 1936",
  "labour court complaint pakistan",
  "section 9-a authority wages",
  "unpaid salary rights pakistan",
].join(", ");

export default function SalaryNotPaidEmployeeRightsPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Salary Not Paid: Employee Legal Rights in Pakistan"
        description="What to do if your employer hasn't paid your salary in Pakistan — the Payment of Wages Act 1936, the Section 9-A Authority, and the escalation path to the Labour Court."
        path="/journal/article/salary-not-paid-employee-rights-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>Legal Help · Published September 3, 2026</p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Salary Not Paid: Employee Legal Rights in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Not being paid on time isn't just unfair — it's illegal, and there's a specific
            official whose job is to hear this exact complaint.
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
                Under the{" "}
                <a href="http://punjablaws.gov.pk/laws/45a.html" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
                  Payment of Wages Act 1936
                </a>
                , you have a legal right to be paid on time. If your employer doesn't pay, first
                complain to the <strong>Labour Inspector</strong>, then take your claim to the{" "}
                <strong>Section 9-A Authority</strong> (also called the Commissioner for Workmen's
                Compensation), and escalate to the <strong>Labour Court</strong> if that doesn't
                resolve it. Keep payslips, your appointment letter, and attendance records — these
                are exactly what an authority looks for when deciding a wage claim.
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
          <h2 className={sectionHeading}>Why documentation is the whole case, not just supporting material</h2>
          <p className="text-muted-foreground leading-relaxed">
            Wage-recovery guidance in Pakistan consistently comes back to the same point: cases
            are won or lost on paperwork, not arguments. Photographs of pay slips, dated WhatsApp
            or SMS messages where an employer acknowledges owing you money, your appointment
            letter, and attendance records are the evidence that actually decides a wage claim — a
            verbal dispute about what was promised is much harder to win without something written
            behind it.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            One thing worth knowing before you complain: if your employer doesn't respond to a
            wage complaint within around 6 months, the law allows you to appeal directly to the
            higher authority, so a slow or unresponsive employer isn't the end of the road — it's
            just the next escalation step.
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
                  Explaining the escalation process and what evidence typically strengthens a wage
                  claim, in plain English or Urdu.
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
                  It cannot file your complaint with the Labour Inspector or Authority, or
                  represent you — a licensed advocate should handle that.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel about unpaid salary — free
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
              { label: "The Payment of Wages Act, 1936 — Punjab Laws", href: "http://punjablaws.gov.pk/laws/45a.html" },
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
            <Link href="/journal/article/debt-recovery-legal-procedure-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Debt Recovery in Pakistan: Legal Procedure</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/how-to-respond-to-a-legal-notice-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to Respond to a Legal Notice in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/how-to-send-a-legal-notice-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to Send a Legal Notice in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Not getting paid what you're owed?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel how the complaint process generally works — then verify with a licensed
            advocate before you file.
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
