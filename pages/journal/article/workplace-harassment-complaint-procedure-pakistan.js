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

const steps = [
  { icon: Users, title: "Step 1 — Every organization must have an Inquiry Committee", detail: "Under the Protection Against Harassment of Women at the Workplace Act 2010, each organization is required to constitute an Inquiry Committee specifically to receive and examine harassment complaints." },
  { icon: Gavel, title: "Step 2 — File your complaint through any of several channels", detail: "You can make a formal complaint through your supervisor, a CBA (union) nominee, a workers' representative, or directly to any member of the Inquiry Committee — there's more than one entry point into the process." },
  { icon: Scale, title: "Step 3 — The accused gets a formal charge and a chance to respond", detail: "A charge sheet or statement of allegations must be conveyed to the accused within three days, and the inquiry proceeds after their written defense is received — both sides are heard as part of the process." },
  { icon: AlertTriangle, title: "Step 4 — Two levels of appeal exist beyond the Inquiry Committee", detail: "Either party can appeal the Inquiry Committee's decision to the Ombudsperson within 30 days, and if the Ombudsperson decides the case directly, a further representation can go to the Governor within 30 days of that decision — whose ruling is final." },
];

const faqs = [
  {
    question: "How do I file a workplace harassment complaint in Pakistan?",
    answer:
      "Under the Protection Against Harassment of Women at the Workplace Act 2010, you can file a complaint through your supervisor, a union/CBA nominee, a workers' representative, or directly to a member of your organization's Inquiry Committee, which every organization is required to have.",
  },
  {
    question: "What happens after I file a harassment complaint at work?",
    answer:
      "The accused receives a formal charge sheet within three days and submits a written defense, after which the Inquiry Committee conducts its inquiry, hearing both sides before reaching a decision.",
  },
  {
    question: "Can I appeal an Inquiry Committee's harassment decision?",
    answer:
      "Yes. Either the complainant or the accused can appeal to the Ombudsperson within 30 days of the Inquiry Committee's decision, and the Ombudsperson must decide the appeal within 30 days of receiving it.",
  },
  {
    question: "Is there a final level of appeal beyond the Ombudsperson?",
    answer:
      "If the Ombudsperson decides a case directly, either party can make a representation to the Governor within 30 days of that decision — the Governor's decision on that representation is final.",
  },
  {
    question: "Can Wakeel.org help me file a workplace harassment complaint?",
    answer:
      "Wakeel.org can explain how the Inquiry Committee and appeal process generally works and help you organize the facts. It cannot file the complaint on your behalf or represent you before the Committee or the Ombudsperson — a licensed advocate should handle that.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Workplace Harassment Laws in Pakistan: Legal Complaint Procedure",
    description:
      "How the Protection Against Harassment of Women at the Workplace Act 2010 works — filing a complaint, the Inquiry Committee process, and the appeal route through the Ombudsperson.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-07-15",
    dateModified: "2026-07-15",
    mainEntityOfPage: `${site.url}/journal/article/workplace-harassment-complaint-procedure-pakistan`,
    citation: [
      { "@type": "CreativeWork", name: "The Protection Against Harassment of Women at the Workplace Act 2010 — Punjab Laws", url: "http://punjablaws.gov.pk/laws/2426a.html" },
      { "@type": "CreativeWork", name: "Complaint Process / Appeal Process — Office of the Ombudsperson, Punjab", url: "https://ombudsperson.punjab.gov.pk/complaint_process" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to File a Workplace Harassment Complaint in Pakistan",
    step: steps.map((s) => ({ "@type": "HowToStep", name: s.title, text: s.detail })),
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
        name: "Workplace Harassment Laws in Pakistan: Legal Complaint Procedure",
        item: `${site.url}/journal/article/workplace-harassment-complaint-procedure-pakistan`,
      },
    ],
  },
];

const keywords = [
  "workplace harassment laws pakistan",
  "sexual harassment complaint procedure pakistan",
  "protection against harassment act 2010",
  "inquiry committee harassment complaint",
  "ombudsperson harassment appeal pakistan",
  "how to file harassment complaint workplace",
].join(", ");

export default function WorkplaceHarassmentComplaintProcedurePakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Workplace Harassment Laws in Pakistan: Legal Complaint Procedure"
        description="How the Protection Against Harassment of Women at the Workplace Act 2010 works — filing a complaint, the Inquiry Committee process, and the appeal route through the Ombudsperson."
        path="/journal/article/workplace-harassment-complaint-procedure-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>Legal Help · Published July 15, 2026</p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Workplace Harassment Laws in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every organization is legally required to have a way to hear this complaint — here's
            exactly how the process is supposed to work.
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
                <a href="http://punjablaws.gov.pk/laws/2426a.html" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
                  Protection Against Harassment of Women at the Workplace Act 2010
                </a>
                , every organization must have an <strong>Inquiry Committee</strong>. You can file
                a complaint through your supervisor, a union nominee, or directly with the
                Committee. The accused gets a charge sheet within 3 days and a chance to respond,
                and either party can appeal the decision to the{" "}
                <strong>Ombudsperson</strong> within 30 days — with a further, final representation
                to the Governor possible in some cases.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educate: steps */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>Four steps, in order</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {steps.map((r) => {
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
          <h2 className={sectionHeading}>Why "your organization doesn't have a committee" isn't the end of the road</h2>
          <p className="text-muted-foreground leading-relaxed">
            The{" "}
            <a href="https://ombudsperson.punjab.gov.pk/complaint_process" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
              Punjab Ombudsperson's own complaint process page
            </a>{" "}
            makes clear that the Ombudsperson's office exists specifically as a backstop — if an
            organization hasn't properly constituted an Inquiry Committee, or its process fails,
            a complaint can still be escalated to the Ombudsperson directly. This is important
            because smaller organizations sometimes haven't set up a compliant Committee at all,
            which shouldn't be treated as meaning there's nowhere to go.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            It's also worth knowing the process is designed to move relatively quickly — the
            three-day charge sheet requirement and the 30-day appeal windows are meant to keep
            harassment complaints from dragging on indefinitely, which is different from how
            slower civil litigation typically works.
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
                  Explaining the complaint and appeal process, and helping you organize your facts
                  before you file — privately and without judgment.
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
                  It cannot file the complaint or represent you before the Inquiry Committee or
                  Ombudsperson — a licensed advocate should handle that.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel about a harassment complaint — free
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
              { label: "The Protection Against Harassment of Women at the Workplace Act 2010 — Punjab Laws", href: "http://punjablaws.gov.pk/laws/2426a.html" },
              { label: "Complaint Process / Appeal Process — Office of the Ombudsperson, Punjab", href: "https://ombudsperson.punjab.gov.pk/complaint_process" },
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
            <Link href="/journal/article/womens-legal-rights-pakistan-complete-guide" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Women's Legal Rights in Pakistan: Complete Guide</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/wrongful-termination-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Wrongful Termination in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/employment-contract-essentials-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Employment Contract in Pakistan: What Should It Include?</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/domestic-violence-laws-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Domestic Violence Laws in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Facing workplace harassment?</h2>
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
