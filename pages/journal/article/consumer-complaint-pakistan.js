import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  ShoppingBag,
  Scale,
  Clock,
  HelpCircle,
  Receipt,
  AlertTriangle,
  Landmark,
} from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site } from "../../../src/data/marketing";
import { cardBase, eyebrow, headingGradient, sectionHeading } from "../../../src/data/theme";

const steps = [
  {
    icon: Receipt,
    title: "1. Collect your proof before anything else",
    detail:
      "Receipt or invoice, warranty card, order confirmation, payment proof, photos of the defect, and any WhatsApp or email exchanges with the seller. Consumer forums in Pakistan decide largely on documents — the strength of your file usually decides the outcome more than the strength of your story.",
  },
  {
    icon: FileText,
    title: "2. Send a written complaint to the seller or company first",
    detail:
      "Before going to court, most people get faster results by sending a clear, dated written complaint (email or a simple letter) to the seller or company, stating what went wrong and what remedy you want — replacement, repair, or refund. This also becomes evidence that you gave them a chance to fix it.",
  },
  {
    icon: Landmark,
    title: "3. Identify the right consumer court for your province",
    detail:
      "Pakistan doesn't have one unified consumer protection law — each province has its own: the Punjab Consumer Protection Act 2005, the Sindh Consumer Protection Act 2014, the Khyber Pakhtunkhwa Consumer Protection Act 1997, and Balochistan's consumer protection framework. Each sets up its own District Consumer Court / Consumer Protection Council. File where you bought the product or where the seller operates — check which applies to you, since procedure and forms differ by province.",
  },
  {
    icon: Scale,
    title: "4. File your complaint — often without a lawyer",
    detail:
      "Consumer courts in Pakistan are designed to be relatively accessible: complaints can usually be filed on plain paper or a simple form, with a modest or no court fee, and the process is meant to be quicker and less formal than regular civil courts. That said, for higher-value claims or a company that's pushing back hard, a lawyer's help with drafting still makes a real difference.",
  },
  {
    icon: Clock,
    title: "5. Expect a hearing-based process, not an instant refund",
    detail:
      "The company or seller will usually be given a chance to respond, and the court may hold one or more hearings before deciding. Consumer courts are faster than ordinary civil suits, but 'faster' in Pakistan's court system can still mean weeks to a few months — bring patience along with your paperwork.",
  },
  {
    icon: AlertTriangle,
    title: "6. Know what remedies are actually available",
    detail:
      "Depending on the provincial law and the facts, a consumer court can typically order replacement, repair, refund, or compensation for loss caused by a defective product or deficient service. It generally cannot order criminal punishment — for fraud or cheating, that's a separate route through the police and Pakistan Penal Code provisions like Section 420.",
  },
];

const whoCanFile = [
  "Someone who bought a defective product — appliance, electronics, vehicle parts, etc.",
  "Someone who paid for a service that wasn't delivered as promised (repairs, courier, event services).",
  "Someone overcharged compared to the price marked or agreed.",
  "Someone denied a warranty repair or replacement without a valid reason.",
  "Someone misled by false advertising about a product's quality or features.",
];

const faqs = [
  {
    question: "What is a consumer court in Pakistan?",
    answer:
      "A consumer court (often called a District Consumer Court or Consumer Protection Council, depending on the province) is a specialized forum set up under provincial consumer protection laws — such as the Punjab Consumer Protection Act 2005 or the Sindh Consumer Protection Act 2014 — to resolve disputes between consumers and sellers or service providers more quickly and informally than regular civil courts.",
  },
  {
    question: "Do I need a lawyer to file a consumer complaint in Pakistan?",
    answer:
      "Not necessarily. Consumer courts are designed so an ordinary person can file a complaint without a lawyer, often on a simple form with a low fee. For straightforward cases (a defective appliance, a denied warranty), many people file themselves. For larger claims or a company contesting hard, a lawyer's drafting and hearing experience is genuinely useful.",
  },
  {
    question: "How do I file a complaint against a company in Pakistan?",
    answer:
      "Start by sending the company a clear, written complaint stating the problem and the remedy you want. If that doesn't resolve it, file a complaint with the relevant provincial consumer court where you bought the product or where the company operates, along with your receipts, warranty documents, and any correspondence. Keep copies of everything you submit.",
  },
  {
    question: "What is the Consumer Protection Act in Pakistan?",
    answer:
      "There isn't a single federal 'Consumer Protection Act' — each province has its own version, including the Punjab Consumer Protection Act 2005, Sindh Consumer Protection Act 2014, and Khyber Pakhtunkhwa Consumer Protection Act 1997. They broadly cover defective goods, deficient services, unfair trade practices, and false advertising, and each sets up its own consumer court structure. Always check the law of the province where you're filing.",
  },
  {
    question: "Can Wakeel.org help me file a consumer complaint?",
    answer:
      "Wakeel.org can help you organize your evidence, draft a clear written complaint, explain which provincial consumer protection law likely applies to your situation, and prepare questions for a lawyer or the consumer court's registrar office. It cannot file the complaint for you, appear in court, or guarantee an outcome — always verify procedure and forms with the specific consumer court or a licensed advocate.",
  },
  {
    question: "How do I file a consumer complaint in Pakistan step by step?",
    answer:
      "Collect your receipt, warranty card, and any correspondence with the seller. Send a written complaint to the seller or company first, stating the problem and remedy you want. If unresolved, file a complaint at the District Consumer Court in the province where you bought the product or where the company operates — usually on plain paper or a simple form, with a low fee, and without needing a lawyer for straightforward cases.",
  },
  {
    question: "What is the process to sue a company in Pakistan?",
    answer:
      "For consumer disputes specifically (defective goods, poor service, overcharging), the consumer court route above is faster and more accessible than a regular civil suit. For other commercial disputes not covered by consumer protection law, you would typically file a civil suit for damages or breach of contract in the ordinary civil courts, which is a longer and more formal process — a business or contract lawyer should assess which route fits your specific claim before you file.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to File a Consumer Complaint in Pakistan",
    description:
      "A practical guide to filing a consumer complaint in Pakistan — provincial consumer protection laws, evidence to collect, and how the consumer court process actually works.",
    author: { "@type": "Organization", name: "Wakeel.org" },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-05-14",
    dateModified: "2026-05-14",
    mainEntityOfPage: `${site.url}/journal/article/consumer-complaint-pakistan`,
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to file a consumer complaint in Pakistan",
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
        name: "How to File a Consumer Complaint in Pakistan",
        item: `${site.url}/journal/article/consumer-complaint-pakistan`,
      },
    ],
  },
];

const keywords = [
  "consumer court pakistan",
  "complaint against company pakistan",
  "consumer protection act pakistan",
  "how to file consumer complaint pakistan",
  "punjab consumer protection act",
  "sindh consumer protection act",
  "defective product complaint pakistan",
  "how do i file a consumer complaint in pakistan",
  "what is the process to sue a company in pakistan",
].join(", ");

export default function ConsumerComplaintPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="How to File a Consumer Complaint in Pakistan"
        description="How to file a consumer complaint in Pakistan — provincial Consumer Protection Acts, evidence to collect, and how to build a complaint that gets a hearing."
        path="/journal/article/consumer-complaint-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>
            Legal Help · Published May 14, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            How to File a Consumer Complaint in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A faulty phone, a courier that lost your parcel, an "under warranty" repair the shop
            keeps refusing — most people don't know Pakistan actually has a dedicated, faster
            court for exactly this. Here's how it works.
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
                Pakistan's consumer protection is handled at the <strong>provincial</strong> level —
                the Punjab Consumer Protection Act 2005, Sindh Consumer Protection Act 2014, and
                Khyber Pakhtunkhwa Consumer Protection Act 1997 each set up their own consumer
                courts. Keep your receipts and correspondence, send the seller a written complaint
                first, then file with the consumer court in your province if it isn't resolved.
                No lawyer is strictly required for most straightforward complaints.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Who can file */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className={sectionHeading}>Does your situation qualify?</h2>
          </div>
          <Card className={cardBase}>
            <CardContent className="p-6">
              <ul className="space-y-3">
                {whoCanFile.map((w) => (
                  <li key={w} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <ShoppingBag className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>Filing a complaint, step by step</h2>
          </div>
          <div className="space-y-4">
            {steps.map((s) => {
              const Icon = s.icon;
              return (
                <Card key={s.title} className={cardBase}>
                  <CardContent className="p-6 flex gap-4">
                    <Icon className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-base mb-1">{s.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{s.detail}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
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
                  Drafting a clear, professional written complaint to a seller. Explaining which
                  provincial consumer protection law likely applies to you. Helping you build an
                  evidence checklist before you file. Summarizing a company's confusing warranty
                  terms in plain English or Urdu.
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
                  It cannot file your complaint with the consumer court, represent you at a
                  hearing, or guarantee a refund, replacement, or compensation. Provincial
                  procedure and forms can change — verify current requirements with the specific
                  consumer court or a licensed advocate before filing.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Draft your complaint with Wakeel Free
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
            General educational information, not legal advice. Consumer protection procedure
            varies by province and can change — confirm current forms and fees with your
            provincial consumer court or a licensed advocate. See our{" "}
            <Link href="/disclaimer" className="text-primary hover:underline">full disclaimer</Link>.
          </p>
        </div>
      </section>

      {/* Related reading */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`${sectionHeading} text-center mb-8`}>Related reading</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/journal/article/understanding-legal-notices-pakistan"
              className={`group ${cardBase} block rounded-lg p-5`}
            >
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                Understanding Legal Notices in Pakistan
              </p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link
              href="/journal/legal-issues-pakistan/online-fraud-complaint-pakistan"
              className={`group ${cardBase} block rounded-lg p-5`}
            >
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                Online Fraud Complaint Guidance in Pakistan
              </p>
              <p className="text-xs text-muted-foreground mt-1">Guide · Wakeel Journal</p>
            </Link>
            <Link href="/citizens" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                Wakeel.org for Citizens
              </p>
              <p className="text-xs text-muted-foreground mt-1">How Wakeel helps everyday legal problems</p>
            </Link>
            <Link href="/legal-sources" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                Our Approach to Legal Sources
              </p>
              <p className="text-xs text-muted-foreground mt-1">How Wakeel grounds answers in Pakistani law</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Don't let a bad purchase just sit there</h2>
          <p className="text-muted-foreground">
            Describe what happened and Wakeel will help you draft a clear complaint and figure out
            which consumer court applies to you — then verify next steps with a lawyer if needed.
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
