import Link from "next/link";
import {
  CheckCircle2,
  Landmark,
  FileText,
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

const steps = [
  { icon: Landmark, title: "Step 1 — Create an eZfile account and reserve a name", detail: "Register on SECP's eZfile portal with your CNIC (or passport for foreigners), then search and reserve your company name on the STARR portal — it needs to be unique and not offensive or misleading." },
  { icon: FileText, title: "Step 2 — Get a Digital Signature Certificate", detail: "Apply for a Digital Signature Certificate (DSC) from an SECP-authorised provider — every director and subscriber generally needs one to digitally sign the incorporation forms, and it can take up to a week to issue, so apply early." },
  { icon: Clock, title: "Step 3 — Prepare the Memorandum and Articles of Association", detail: "Draft the MOA and AOA, and gather CNIC copies of all directors and shareholders — these documents define your company's purpose, structure, and internal rules." },
  { icon: AlertTriangle, title: "Step 4 — Submit and pay the SECP fee", detail: "Submit the incorporation application with all documents through eZfile, pay the government fee, and receive your digital incorporation certificate — the full process typically takes 3–7 working days, sometimes as fast as 1–3 days once documents are in order." },
];

const faqs = [
  {
    question: "How long does it take to register a company in Pakistan?",
    answer:
      "The full SECP registration process typically takes 3 to 7 working days, though incorporation itself can be as fast as 1 to 3 days once your documents are submitted — the Digital Signature Certificate step can add its own separate delay of up to a week if applied for late.",
  },
  {
    question: "What documents do I need to register a company with SECP?",
    answer:
      "CNIC (or passport for foreign nationals) for every director and subscriber, a Digital Signature Certificate for each, a reserved company name from the STARR portal, and a drafted Memorandum and Articles of Association.",
  },
  {
    question: "How much does it cost to register a company in Pakistan?",
    answer:
      "Total costs, including SECP fees, document preparation, FBR NTN registration, and any professional consultant fee, are commonly estimated in the range of PKR 25,000 to 60,000, depending on your capital structure and whether you use outside help.",
  },
  {
    question: "Do I need a lawyer or consultant to register a company?",
    answer:
      "Not strictly — the eZfile portal is designed for self-service registration. That said, drafting a proper Memorandum and Articles of Association, and navigating the DSC process correctly the first time, is often where people use a consultant or lawyer to avoid delays.",
  },
  {
    question: "Can Wakeel.org register my company with SECP?",
    answer:
      "Wakeel.org can explain the registration steps and what documents you'll need. It cannot create your eZfile account, submit your application, or draft your MOA/AOA — that requires the SECP portal directly, or a consultant/advocate for the drafting.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Register a Company in Pakistan",
    description:
      "The SECP company registration process in Pakistan — the eZfile portal, Digital Signature Certificate, MOA/AOA, and typical timeline and cost.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-07-21",
    dateModified: "2026-07-21",
    mainEntityOfPage: `${site.url}/journal/article/how-to-register-a-company-pakistan`,
    citation: [
      { "@type": "CreativeWork", name: "How to Register a Company in Pakistan 2026 — Global Law Experts", url: "https://globallawexperts.com/how-to-register-a-company-in-pakistan-2026/" },
      { "@type": "CreativeWork", name: "SECP Company Registration in Pakistan — Complete Guide 2026", url: "https://pakcec.com/secp-company-registration-pakistan/" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Register a Company in Pakistan",
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
        name: "How to Register a Company in Pakistan",
        item: `${site.url}/journal/article/how-to-register-a-company-pakistan`,
      },
    ],
  },
];

const keywords = [
  "how to register a company pakistan",
  "secp company registration process",
  "secp ezfile portal",
  "digital signature certificate secp",
  "company registration cost pakistan",
  "moa aoa pakistan",
].join(", ");

export default function HowToRegisterACompanyPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="How to Register a Company in Pakistan"
        description="The SECP company registration process in Pakistan — the eZfile portal, Digital Signature Certificate, MOA/AOA, and typical timeline and cost."
        path="/journal/article/how-to-register-a-company-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>Legal Help · Published July 21, 2026</p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            How to Register a Company in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The whole process now runs through one portal — here's the actual sequence, and where
            people lose time unnecessarily.
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
                Company registration in Pakistan runs through <strong>SECP's eZfile portal</strong>:
                create an account, reserve your name on <strong>STARR</strong>, get a{" "}
                <strong>Digital Signature Certificate</strong> for each director, draft your{" "}
                <strong>Memorandum and Articles of Association</strong>, and submit with the
                government fee. The full process typically takes{" "}
                <strong>3–7 working days</strong>, with total costs commonly in the{" "}
                <strong>PKR 25,000–60,000</strong> range.
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
          <h2 className={sectionHeading}>The step people skip, and then wait a week for</h2>
          <p className="text-muted-foreground leading-relaxed">
            Step-by-step registration guides, including{" "}
            <a href="https://globaladvisoryexperts.com/how-to-register-a-company-in-pakistan-2026/" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
              Global Advisory Experts' walkthrough of the eZfile process
            </a>
            , consistently flag the Digital Signature Certificate as the single most
            underestimated step. People often start the eZfile application first, assuming the
            DSC is a quick add-on, then discover it can take up to seven working days to issue —
            turning what should be a same-week registration into a two-week wait. Applying for the
            DSC in parallel with, or even before, the rest of the paperwork is the single easiest
            way to avoid that delay.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            It's also worth deciding your business structure — sole proprietorship, partnership,
            or private limited company — before starting registration, since only the latter goes
            through this SECP process at all; the other two follow entirely different paths.
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
                  Explaining the registration steps and what documents you'll need, in plain
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
                  It cannot create your eZfile account, submit your application, or draft your
                  MOA/AOA — that requires the SECP portal or a consultant/advocate.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel about company registration — free
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
              { label: "How to Register a Company in Pakistan 2026 — Global Advisory Experts", href: "https://globaladvisoryexperts.com/how-to-register-a-company-in-pakistan-2026/" },
              { label: "SECP Company Registration in Pakistan — Complete Guide 2026", href: "https://pakcec.com/secp-company-registration-pakistan/" },
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
            <Link href="/journal/article/partnership-deed-pakistan-legal-guide" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Partnership Deed in Pakistan: Legal Guide</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/non-disclosure-agreement-nda-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Non-Disclosure Agreement (NDA) in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/draft-legal-contract-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to Draft a Legal Contract in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Starting a company in Pakistan?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel to walk you through the registration steps — then confirm the details on
            SECP's own portal.
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
