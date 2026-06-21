import Link from "next/link";
import { useState } from "react";
import { CheckCircle2, HelpCircle, ShieldCheck } from "lucide-react";
import Layout from "../src/components/Layout";
import MarketingSEO from "../src/components/MarketingSEO";
import { Button } from "../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../src/components/ui/card";
import { pricingFaqs, pricingPlans, site } from "../src/data/marketing";
import { cardBase, headingGradient, heroHeading, sectionHeading } from "../src/data/theme";

const comparisonRows = [
  { label: "Basic legal chat", Free: "Included", Student: "Expanded", Professional: "Expanded", Organization: "Team access" },
  { label: "Know Your Rights guidance", Free: "Included", Student: "Included", Professional: "Included", Organization: "Included" },
  { label: "Document understanding", Free: "Basic", Student: "Study PDFs", Professional: "Client documents", Organization: "Shared workflows" },
  { label: "Legal document templates", Free: "-", Student: "Included", Professional: "Included", Organization: "Team templates" },
  { label: "PPC, CrPC, and Constitution study support", Free: "-", Student: "Included", Professional: "Reference use", Organization: "Training use" },
  { label: "Case analysis and research notes", Free: "-", Student: "Included", Professional: "Advanced", Organization: "Shared research" },
  { label: "Drafting assistance", Free: "-", Student: "Learning support", Professional: "Professional workflow", Organization: "Team workflow" },
  { label: "Case management support", Free: "-", Student: "-", Professional: "Included", Organization: "Team workflow" },
  { label: "Client portal or team dashboard", Free: "-", Student: "-", Professional: "Where available", Organization: "Organization setup" },
  { label: "Admin controls and onboarding", Free: "-", Student: "-", Professional: "-", Organization: "Included" },
  { label: "Support", Free: "Community", Student: "Community", Professional: "Priority", Organization: "Response targets" },
];

const planGuidance = [
  {
    title: "For everyday legal questions",
    plan: "Free",
    description:
      "Use Free when you want to understand a legal term, organize facts, or prepare better questions before speaking with an advocate.",
  },
  {
    title: "For law school and exams",
    plan: "Student",
    description:
      "Use Student for PPC, CrPC, Constitution notes, case summaries, templates, PDF chat, and exam-style study support.",
  },
  {
    title: "For legal practice workflows",
    plan: "Professional",
    description:
      "Use Professional for research support, drafting assistance, matter notes, client document review, and case preparation workflows.",
  },
  {
    title: "For teams and institutions",
    plan: "Organization",
    description:
      "Use Organization for shared research, team dashboards, admin controls, onboarding, training, and institution-specific workflows.",
  },
];

const billingNotes = [
  "Published prices can vary by billing channel, promotions, taxes, and app-store rules.",
  "iOS subscriptions are managed through Apple ID settings; Android subscriptions may be managed through Google Play.",
  "Organization access is scoped during onboarding so teams can align permissions, training, and support expectations.",
  "Wakeel.org remains legal information and research support across every plan.",
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Wakeel.org Pricing",
    description:
      "Compare Wakeel.org plans for free legal information, student study support, professional research workflows, and organization access.",
    url: `${site.url}/pricing`,
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pricingFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  },
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <Layout>
      <MarketingSEO
        title="Wakeel.org Pricing"
        description="Compare Wakeel.org plans for free legal information, student study support, professional research workflows, and organization access."
        path="/pricing"
        schema={schema}
      />

      <section className="bg-background">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Pricing
            </p>
            <h1 className={`${heroHeading} ${headingGradient}`}>
              Plans for citizens, students, professionals, and organizations.
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Start free and choose the workflow that fits your role. Confirm current pricing and availability inside the app before subscribing.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {["Free start", "Student study tools", "Professional workflows", "Organization access"].map((item) => (
                <span key={item} className="rounded-full border border-border bg-muted/40 px-3 py-1.5 text-sm text-muted-foreground">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-16 sm:py-20 lg:py-24">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">
                Choose your plan
              </h2>
              <p className="text-sm text-muted-foreground mt-2">
                Yearly labels are shown where published. Confirm current billing in the app before subscribing.
              </p>
            </div>
            <div className="inline-flex w-fit items-center gap-1 rounded-lg bg-background p-1 border border-border">
              <button
                type="button"
                onClick={() => setBillingCycle("monthly")}
                className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                  billingCycle === "monthly"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setBillingCycle("yearly")}
                className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                  billingCycle === "yearly"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Yearly
              </button>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pricingPlans.map((plan) => (
              <Card
                key={plan.name}
                className={`relative ${cardBase} ${plan.name === "Student" ? "border-primary shadow-lg" : ""}`}
              >
                {plan.name === "Student" && (
                  <div className="absolute right-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    Popular
                  </div>
                )}
                <CardHeader>
                  <p className="text-sm font-semibold text-primary">
                    {billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                  </p>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <p className="text-xs text-muted-foreground">{plan.priceNote}</p>
                </CardHeader>
                <CardContent className="space-y-5">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {plan.description}
                  </p>
                  <ul className="space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full" variant={plan.name === "Free" ? "default" : "outline"}>
                    {plan.href.startsWith("http") ? (
                      <a href={plan.href} target="_blank" rel="noopener noreferrer">
                        {plan.cta}
                      </a>
                    ) : (
                      <Link href={plan.href}>{plan.cta}</Link>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">
              Which plan fits your use case?
            </h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Choose based on the workflow you need today. You can start small, then move to a study, professional, or organization workflow when the need is clearer.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {planGuidance.map((item) => (
              <Card key={item.title} className={cardBase}>
                <CardHeader>
                  <p className="text-sm font-semibold text-primary">{item.plan}</p>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`${sectionHeading} mb-8`}>
            Plan comparison
          </h2>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full min-w-[720px] text-sm">
              <thead className="bg-muted/60 text-left">
                <tr>
                  <th className="p-4 font-semibold">Feature</th>
                  {pricingPlans.map((plan) => (
                    <th key={plan.name} className="p-4 font-semibold">
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="border-t border-border">
                    <td className="p-4 text-muted-foreground">{row.label}</td>
                    {pricingPlans.map((plan) => (
                      <td key={plan.name} className="p-4">
                        {row[plan.name] === "-" ? (
                          <span className="text-muted-foreground">-</span>
                        ) : (
                          <span className="inline-flex items-center gap-2 text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                            {row[plan.name]}
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[0.75fr_1.25fr] gap-4">
          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <ShieldCheck className="h-6 w-6 text-primary" />
                Billing and safety notes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Pricing pages should help users choose a workflow, but legal AI still needs careful use. Confirm billing details before subscribing and verify legal outputs before acting.
              </p>
            </CardContent>
          </Card>
          <div className="grid sm:grid-cols-2 gap-4">
            {billingNotes.map((note) => (
              <div key={note} className="rounded-lg border border-border bg-card p-4 text-sm text-muted-foreground leading-relaxed">
                <CheckCircle2 className="h-5 w-5 text-primary mb-3" />
                {note}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-16 sm:py-20 lg:py-24">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`${sectionHeading} mb-8`}>
            Pricing FAQ
          </h2>
          <div className="space-y-4">
            {pricingFaqs.map((faq) => (
              <details key={faq.question} className="rounded-lg border border-border bg-card p-5">
                <summary className="flex cursor-pointer items-center gap-3 text-base font-semibold">
                  <HelpCircle className="h-5 w-5 text-primary" />
                  {faq.question}
                </summary>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
          <Card className="mt-8 border-primary/20 bg-primary/5">
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {site.disclaimer}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
