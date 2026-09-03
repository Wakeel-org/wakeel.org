import Link from "next/link";
import {
  ArrowRight,
  MessageSquareText,
  FileText,
  ShieldCheck,
  Languages,
  Scale,
  Landmark,
  Building2,
  Phone,
  GraduationCap,
  HelpCircle,
  CheckCircle2,
} from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site } from "../../../src/data/marketing";
import { cardBase, eyebrow, headingGradient, sectionHeading } from "../../../src/data/theme";

const freeWithWakeel = [
  {
    icon: MessageSquareText,
    title: "Ask in English or Urdu",
    detail:
      "Describe your problem in plain language and get a clear explanation of the law, your options, and likely next steps.",
  },
  {
    icon: FileText,
    title: "Understand any document",
    detail:
      "Upload a notice, FIR, agreement, or court paper and get a plain-language summary of what it means and what to check.",
  },
  {
    icon: Scale,
    title: "Know your rights",
    detail:
      "Learn the rights, deadlines, and procedures that apply to your situation before you decide what to do.",
  },
  {
    icon: ShieldCheck,
    title: "Prepare for a lawyer",
    detail:
      "Organize your facts, dates, and documents and walk into a consultation with the right questions — saving time and money.",
  },
];

const commonIssues = [
  { label: "Police refused my FIR", href: "/journal/legal-issues-pakistan/fir-refused-pakistan" },
  { label: "I received a legal notice", href: "/journal/legal-issues-pakistan/legal-notice-pakistan" },
  { label: "Rent / tenant problem", href: "/journal/legal-issues-pakistan/tenant-rights-pakistan" },
  { label: "Family law & divorce", href: "/journal/legal-issues-pakistan/family-law-guidance-pakistan" },
  { label: "Online fraud / scam", href: "/journal/legal-issues-pakistan/online-fraud-complaint-pakistan" },
  { label: "Property documents", href: "/journal/legal-issues-pakistan/property-document-check-pakistan" },
  { label: "Unpaid salary / job issue", href: "/journal/legal-issues-pakistan/employment-law-pakistan" },
  { label: "Consumer complaint", href: "/journal/legal-issues-pakistan/consumer-rights-pakistan" },
  { label: "Know your basic rights", href: "/journal/legal-issues-pakistan/know-your-rights-pakistan" },
];

const freeHelpSources = [
  {
    icon: MessageSquareText,
    title: "Wakeel.org (free legal information)",
    detail:
      "A free AI legal assistant to understand your situation, read documents, and prepare — in English or Urdu, any time. Provides legal information, not final advice.",
  },
  {
    icon: Landmark,
    title: "Government legal aid committees",
    detail:
      "District and high-court legal aid / legal empowerment committees and government legal aid authorities provide free or subsidised legal assistance to those who qualify.",
  },
  {
    icon: Phone,
    title: "Government helplines",
    detail:
      "Free government helplines — such as the Ministry of Human Rights legal advice helpline (1099) and provincial women's helplines — offer guidance and referrals.",
  },
  {
    icon: Building2,
    title: "Bar associations & legal aid NGOs",
    detail:
      "Provincial bar councils, bar associations, and legal aid societies / NGOs run free legal aid programmes, especially for low-income and vulnerable applicants.",
  },
  {
    icon: GraduationCap,
    title: "University legal aid clinics",
    detail:
      "Several law colleges run legal aid clinics where supervised students help the public with basic legal guidance and document support.",
  },
];

const faqs = [
  {
    question: "Can I get free legal advice in Pakistan?",
    answer:
      "Yes. Free or low-cost legal help is available through government legal aid committees, bar association legal aid programmes, legal aid NGOs, university legal clinics, and government helplines such as the Ministry of Human Rights helpline (1099). For free legal information to understand your situation and prepare, you can also use Wakeel.org in English or Urdu.",
  },
  {
    question: "Is there free online legal advice in Pakistan?",
    answer:
      "You can get free legal information online with Wakeel.org — ask a question or upload a document and get a plain-language explanation any time. Note this is legal information and research support, not final legal advice. For advice on your specific case, consult a licensed advocate or a legal aid programme.",
  },
  {
    question: "Can I chat with a lawyer for free?",
    answer:
      "Some legal aid programmes, bar associations, and helplines offer free initial consultations for those who qualify. Wakeel.org is not a lawyer, but it can help you understand your situation and prepare your questions before you speak to one.",
  },
  {
    question: "Is Wakeel.org really free?",
    answer:
      "Yes. Wakeel.org has a free plan for basic legal questions and document understanding, with paid plans for students, professionals, and organizations who need more.",
  },
  {
    question: "Does free legal information replace a lawyer?",
    answer:
      "No. Free legal information helps you understand and prepare, but it does not replace a licensed advocate. For anything you intend to file, sign, pay, or argue in court, get advice from a qualified lawyer.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Free & Online Legal Advice in Pakistan",
    description:
      "How to get free and online legal help in Pakistan — free legal information with Wakeel.org plus government legal aid, helplines, bar associations, and legal aid NGOs.",
    url: `${site.url}/journal/article/free-legal-advice-pakistan`,
    datePublished: "2026-06-21",
    dateModified: "2026-06-21",
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
        name: "Free Legal Advice in Pakistan",
        item: `${site.url}/journal/article/free-legal-advice-pakistan`,
      },
    ],
  },
];

const keywords = [
  "free legal advice pakistan",
  "online legal advice pakistan",
  "free online legal advice pakistan",
  "online lawyer advice in pakistan",
  "free legal advice online chat pakistan",
  "free legal aid pakistan",
  "legal help pakistan",
  "ai lawyer free",
  "free ai lawyer",
  "best free ai lawyer",
].join(", ");

export default function FreeLegalAdvicePakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Free AI Lawyer & Online Legal Advice in Pakistan"
        description="Free legal advice in Pakistan — free AI legal information in English or Urdu, plus government legal aid, helplines, and bar association programmes."
        path="/journal/article/free-legal-advice-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <p className={eyebrow}>
            Free legal help · Pakistan
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Free &amp; online legal help in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Understand your legal problem, read your documents, and know your rights — for free, in
            English or Urdu. Plus where to find free legal aid when you need a lawyer.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask your question free
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/journal/legal-issues-pakistan">Browse legal topics</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Honest positioning */}
      <section className="bg-background pt-10">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className={`${cardBase} border-primary/30`}>
            <CardContent className="p-6 space-y-3">
              <p className="text-sm font-semibold text-primary flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" /> Read this first
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Wakeel.org gives you <strong>free legal information and research support</strong> to
                understand your situation and prepare. It is <strong>not final legal advice</strong> and
                does not replace a licensed advocate. For advice on your specific case — or to file,
                sign, pay, or appear in court — speak to a qualified lawyer or a legal aid programme.
                This page also lists free legal-aid options below.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What you can do free */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>What you can do for free, right now</h2>
            <p className="text-muted-foreground mt-3 flex items-center justify-center gap-2 text-sm">
              <Languages className="h-4 w-4 text-primary" /> Available in English and Urdu
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {freeWithWakeel.map((f) => {
              const Icon = f.icon;
              return (
                <Card key={f.title} className={cardBase}>
                  <CardHeader>
                    <Icon className="h-7 w-7 text-primary" />
                    <CardTitle className="text-lg">{f.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.detail}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Common issues -> guides (internal linking) */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>What's your legal problem?</h2>
            <p className="text-muted-foreground mt-3 text-sm">
              Get free, plain-language guidance on the most common legal situations in Pakistan.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {commonIssues.map((issue) => (
              <Link
                key={issue.href}
                href={issue.href}
                className={`group ${cardBase} hover:border-primary/50 hover:shadow-md transition-all`}
              >
                <CardContent className="p-4 flex items-center justify-between gap-3">
                  <span className="text-sm font-medium group-hover:text-primary transition-colors">
                    {issue.label}
                  </span>
                  <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                </CardContent>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Where to get free legal help */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>Where to get free legal aid in Pakistan</h2>
            <p className="text-muted-foreground mt-3 text-sm max-w-2xl mx-auto">
              If you need advice or representation, free and low-cost legal aid is available.
              Eligibility and availability vary — contact the programme directly to confirm.
            </p>
          </div>
          <div className="space-y-4">
            {freeHelpSources.map((s) => {
              const Icon = s.icon;
              return (
                <Card key={s.title} className={cardBase}>
                  <CardContent className="p-5 flex gap-4">
                    <div className="h-11 w-11 shrink-0 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{s.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mt-1">{s.detail}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <p className="text-xs text-muted-foreground mt-4 text-center">
            Details such as helpline numbers and eligibility can change — always verify current
            information with the relevant office before relying on it.
          </p>
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
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Start understanding your legal situation — free</h2>
          <p className="text-muted-foreground">
            Ask a question or upload a document in English or Urdu. Then verify with a licensed
            advocate before you act.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">Try Wakeel Free</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/journal/article/ai-vs-lawyer-pakistan">AI vs hiring a lawyer →</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
