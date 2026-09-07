import Link from "next/link";
import {
  CheckCircle2,
  ShoppingCart,
  Gavel,
  ShieldAlert,
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
  { icon: Gavel, title: "Consumer protection law is provincial, and historically offline-focused", detail: "Punjab, Sindh, and Balochistan each have their own consumer protection legislation, but for years these laws weren't written with e-commerce, teleshopping, or online payments specifically in mind." },
  { icon: ShoppingCart, title: "That gap is starting to close", detail: "The Punjab Consumer Protection (Amendment) Act 2025 extended the legal definition of \"consumer\" to explicitly include online transactions, teleshopping, direct selling, and multi-level marketing — a meaningful update that other provinces are expected to follow." },
  { icon: ShieldAlert, title: "There's no standard national refund/return policy requirement", detail: "Unlike some countries with a fixed statutory cooling-off period for online purchases, Pakistan doesn't currently mandate a specific refund window — many online stores set their own terms, which can be vague or one-sided." },
  { icon: AlertTriangle, title: "Fraudulent stores are a cybercrime issue, not just a consumer one", detail: "Where an online seller simply takes payment and disappears, or the store itself is fraudulent, that's beyond ordinary refund disputes and moves into cybercrime territory — several shoppers have recovered funds after reporting fake e-commerce stores through cybercrime channels." },
];

const faqs = [
  {
    question: "Do online stores in Pakistan have to offer refunds or returns?",
    answer:
      "There's no single national law mandating a specific refund or return window for e-commerce. Punjab's 2025 Consumer Protection Amendment now explicitly covers online transactions, but the specific refund policy is still largely set by the individual store's own terms.",
  },
  {
    question: "What can I do if an online store in Pakistan refuses a refund?",
    answer:
      "Check the store's own stated policy first, since that's often what governs the transaction. If the policy itself is unfair or the store is unresponsive, a complaint through your province's consumer protection mechanism, or the relevant cybercrime channel if the store appears fraudulent, are the available routes.",
  },
  {
    question: "What if an online store took my money and never delivered anything?",
    answer:
      "This moves beyond an ordinary refund dispute into potential fraud or cybercrime territory. Reporting to the FIA Cyber Crime Wing or the NCCIA has helped some shoppers recover funds from fake e-commerce stores.",
  },
  {
    question: "Does Pakistani consumer protection law cover online transactions?",
    answer:
      "Increasingly, yes — the Punjab Consumer Protection (Amendment) Act 2025 specifically extended coverage to online transactions, teleshopping, direct selling, and multi-level marketing. Other provinces' laws and federal-level reform are expected to follow a similar path.",
  },
  {
    question: "Can Wakeel.org get my money back from an online store?",
    answer:
      "Wakeel.org can explain what consumer protection and cybercrime remedies generally apply to your situation. It cannot contact the store, file a complaint, or recover funds on your behalf — that requires the relevant consumer protection body, the NCCIA, or a licensed advocate.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "E-Commerce Refund and Return Laws in Pakistan",
    description:
      "How consumer protection applies to online shopping in Pakistan — the provincial consumer protection acts, the 2025 Punjab amendment covering online transactions, and what to do when a store won't refund you.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-08-06",
    dateModified: "2026-08-06",
    mainEntityOfPage: `${site.url}/journal/article/ecommerce-refund-return-laws-pakistan`,
    citation: [
      { "@type": "CreativeWork", name: "A Critical Appraisal of Consumer Protection Laws and E-Commerce in Pakistan — Pakistan Journal of Law, Analysis and Wisdom", url: "https://pjlaw.com.pk/index.php/Journal/article/view/v3i7-131-139" },
      { "@type": "CreativeWork", name: "Refund and Warranty Rights in Pakistan: A Complete Guide — Pakistan Law Bot", url: "https://pakistanlawbot.com/refund-and-warranty-rights-in-pakistan/" },
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
        name: "E-Commerce Refund and Return Laws in Pakistan",
        item: `${site.url}/journal/article/ecommerce-refund-return-laws-pakistan`,
      },
    ],
  },
];

const keywords = [
  "e-commerce refund laws pakistan",
  "online shopping return policy pakistan",
  "punjab consumer protection amendment 2025",
  "online store fraud pakistan refund",
  "consumer rights online shopping pakistan",
  "fake online store complaint pakistan",
].join(", ");

export default function EcommerceRefundReturnLawsPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="E-Commerce Refund and Return Laws in Pakistan"
        description="How consumer protection applies to online shopping in Pakistan — the provincial consumer protection acts, the 2025 Punjab amendment covering online transactions, and what to do when a store won't refund you."
        path="/journal/article/ecommerce-refund-return-laws-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>Legal Help · Published August 6, 2026</p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            E-Commerce Refund and Return Laws in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Consumer protection law is finally catching up to online shopping — but it's not
            uniform yet, and it doesn't cover everything.
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
                There's no single national refund policy mandate for online shopping in Pakistan —{" "}
                <strong>consumer protection is provincial</strong>, and the{" "}
                <strong>Punjab Consumer Protection (Amendment) Act 2025</strong> is a recent step
                that explicitly extends coverage to online transactions. If a store simply won't
                deliver or refund, check its own stated policy first; if it looks{" "}
                <strong>fraudulent</strong>, report it to the <strong>NCCIA</strong> or FIA Cyber
                Crime Wing — some shoppers have recovered funds that way.
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
          <h2 className={sectionHeading}>Why the legal gap left online shoppers exposed for years</h2>
          <p className="text-muted-foreground leading-relaxed">
            Academic analysis published in the{" "}
            <a href="https://pjlaw.com.pk/index.php/Journal/article/view/v3i7-131-139" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
              Pakistan Journal of Law, Analysis and Wisdom
            </a>{" "}
            has specifically documented how Pakistan's federal and provincial consumer protection
            laws, written before e-commerce was widespread, left online shoppers with far weaker
            protections than in-store customers — no return or refund policy on many sites, and no
            dedicated redressal mechanism when a merchant simply ignored a complaint. The Punjab
            2025 amendment is a direct response to that gap, but it's a provincial fix, and it's
            reasonable to expect other provinces and a future federal law to take time catching up.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Until the legal framework is more complete, your practical protection largely comes
            from choosing reputable platforms, paying through methods that offer their own
            dispute-resolution process (like certain digital wallets or cards), and keeping clear
            records of your order and any communication — since the legal remedy alone may still
            be slow or incomplete for a smaller individual purchase.
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
                  Explaining what consumer protection and cybercrime remedies generally apply to
                  an online shopping dispute, in plain English or Urdu.
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
                  It cannot contact the store, file a complaint, or recover funds for you — that
                  requires the relevant consumer body, the NCCIA, or a licensed advocate.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel about an online shopping dispute — free
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
              { label: "A Critical Appraisal of Consumer Protection Laws and E-Commerce in Pakistan — Pakistan Journal of Law, Analysis and Wisdom", href: "https://pjlaw.com.pk/index.php/Journal/article/view/v3i7-131-139" },
              { label: "Refund and Warranty Rights in Pakistan: A Complete Guide — Pakistan Law Bot", href: "https://pakistanlawbot.com/refund-and-warranty-rights-in-pakistan/" },
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
            <Link href="/journal/article/consumer-complaint-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to File a Consumer Complaint in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/online-fraud-scams-legal-remedies-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Online Fraud and Scams: Legal Remedies in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/website-terms-and-conditions-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Terms and Conditions for Pakistani Websites</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/nccia-cyber-crime-complaint-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to File a Cyber Crime Complaint in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Dealing with an online shopping dispute?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel what your options are — then follow up with the right body or a licensed
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
