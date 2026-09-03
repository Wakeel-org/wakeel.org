import Link from "next/link";
import {
  CheckCircle2,
  Banknote,
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

const framework = [
  { icon: Banknote, title: "What actually has to be proven", detail: "Section 489-F applies when someone dishonestly issues a cheque toward repaying a loan or fulfilling an obligation, and that cheque bounces. Three things must be shown together: the cheque was issued with dishonest intent, it was for a loan or obligation, and it was actually dishonoured." },
  { icon: Gavel, title: "It's a criminal offence — but a bailable one", detail: "The maximum punishment is up to 3 years' imprisonment, a fine, or both. Because that sentence doesn't fall within the CrPC's list of serious \"non-bailable\" offences, bail — including pre-arrest bail — is generally granted as a matter of course rather than the exception." },
  { icon: Scale, title: "The burden shifts onto the person who issued the cheque", detail: "Once dishonour is shown, the person who wrote the cheque has to prove they'd made proper arrangements with their bank for it to be honoured, and that the bounce was the bank's fault, not theirs — a meaningful legal burden that works in the payee's favor." },
  { icon: AlertTriangle, title: "It's a criminal case about the cheque, not a shortcut to recover money", detail: "Courts have clarified that a 489-F case is about punishing dishonest issuance of a cheque — it isn't itself a mechanism for recovering the underlying money. If getting the money back is your real goal, a separate civil recovery suit generally needs to run alongside the criminal complaint." },
];

const faqs = [
  {
    question: "What is Section 489-F of the Pakistan Penal Code?",
    answer:
      "It criminalises dishonestly issuing a cheque toward repayment of a loan or an obligation, where that cheque is then dishonoured (bounces) on presentation. It requires showing dishonest intent, that the cheque was for a loan or obligation, and that it was actually dishonoured.",
  },
  {
    question: "What is the punishment for cheque dishonour under Section 489-F?",
    answer:
      "Up to 3 years' imprisonment, a fine, or both. It's a bailable offence, so bail — including pre-arrest bail — is typically granted rather than refused.",
  },
  {
    question: "Can I recover my money through a Section 489-F case?",
    answer:
      "Not directly — courts have held that Section 489-F is a criminal provision about punishing dishonest cheque issuance, not a recovery mechanism for the underlying debt. If getting the money back is the goal, a separate civil recovery suit is usually needed alongside the criminal complaint.",
  },
  {
    question: "Who has to prove what in a Section 489-F case?",
    answer:
      "Once the complainant shows the cheque was dishonoured, the burden shifts to the person who issued it to prove they had made proper arrangements with their bank for it to be honoured and that the dishonour wasn't their fault.",
  },
  {
    question: "Can Wakeel.org tell me if I have a Section 489-F case?",
    answer:
      "Wakeel.org can explain what Section 489-F generally requires and how it differs from a civil recovery claim. It cannot assess whether your specific facts meet the legal threshold or file a complaint — a licensed advocate should handle that.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Section 489-F PPC: Cheque Dishonour Explained",
    description:
      "How Section 489-F of the Pakistan Penal Code works when a cheque bounces — what has to be proven, the punishment, and why it's not a substitute for a civil recovery suit.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-09-03",
    dateModified: "2026-09-03",
    mainEntityOfPage: `${site.url}/journal/article/section-489f-ppc-cheque-dishonour-pakistan`,
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
        name: "Section 489-F PPC: Cheque Dishonour Explained",
        item: `${site.url}/journal/article/section-489f-ppc-cheque-dishonour-pakistan`,
      },
    ],
  },
];

const keywords = [
  "section 489-f ppc pakistan",
  "cheque dishonour law pakistan",
  "cheque bounce case pakistan",
  "489-f bail pakistan",
  "dishonestly issuing a cheque punishment",
  "cheque bounce recovery pakistan",
].join(", ");

export default function Section489fPpcChequeDishonourPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Section 489-F PPC: Cheque Dishonour Explained"
        description="How Section 489-F of the Pakistan Penal Code works when a cheque bounces — what has to be proven, the punishment, and why it's not a substitute for a civil recovery suit."
        path="/journal/article/section-489f-ppc-cheque-dishonour-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>Legal Help · Published September 3, 2026</p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Section 489-F PPC: Cheque Dishonour
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A bounced cheque given for a loan or debt is a crime in Pakistan — but it's not a
            shortcut to getting your money back. Here's the real picture.
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
                <strong>Section 489-F of the Pakistan Penal Code</strong> punishes dishonestly
                issuing a cheque toward a loan or obligation that then bounces — up to{" "}
                <strong>3 years' imprisonment</strong>, a fine, or both. It's a{" "}
                <strong>bailable</strong> offence, so bail is usually granted. Importantly, this
                case is about punishing the dishonest cheque, not about getting your money back —
                if recovering the debt is your actual goal, you generally also need a separate{" "}
                <strong>civil recovery suit</strong>.
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
          <h2 className={sectionHeading}>A misunderstanding that leads a lot of people down the wrong path</h2>
          <p className="text-muted-foreground leading-relaxed">
            Many people file a 489-F complaint expecting the criminal process to directly get their
            money back — it's a natural assumption, but it's incorrect. Courts have specifically
            clarified, including in coverage from{" "}
            <a href="https://tribune.com.pk/story/2340901/section-489-f-cant-be-used-for-recovery-of-amount" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
              The Express Tribune
            </a>
            , that Section 489-F cannot be used as a substitute for recovery of the amount owed —
            it's a criminal proceeding focused on punishing the dishonest act of issuing a bad
            cheque, decided by a Magistrate. A detailed practitioner overview of the section's
            object, scope, and trial process is available through{" "}
            <a href="https://courtingthelaw.com/2022/06/26/commentary/guest-columnists/section-489-f-ppc-object-scope-trial/" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
              Courting the Law
            </a>
            .
          </p>
          <p className="text-muted-foreground leading-relaxed">
            In practice, this means the strongest position for someone holding a bounced cheque is
            usually to run both routes together: the criminal complaint under 489-F to hold the
            issuer accountable, and a separate civil suit (often a fast-tracked one under Order 37
            CPC, if the cheque itself qualifies as a negotiable instrument) to actually recover the
            money.
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
                  Explaining what Section 489-F generally covers and how it differs from a civil
                  recovery claim, in plain English or Urdu.
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
                  It cannot assess whether your specific case meets the legal threshold, file a
                  complaint, or represent you — a licensed advocate should handle that.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel about a bounced cheque — free
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
              { label: "Section 489-F PPC: Object, Scope & Trial — Courting the Law", href: "https://courtingthelaw.com/2022/06/26/commentary/guest-columnists/section-489-f-ppc-object-scope-trial/" },
              { label: "Section 489-F Can't Be Used for Recovery of Amount — The Express Tribune", href: "https://tribune.com.pk/story/2340901/section-489-f-cant-be-used-for-recovery-of-amount" },
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
            <Link href="/journal/article/debt-recovery-legal-procedure-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Debt Recovery in Pakistan: Legal Procedure</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/section-420-ppc-fraud-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Section 420 PPC: Fraud and Cheating in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/how-to-get-bail-in-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to Get Bail in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/civil-suit-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to File a Civil Suit in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Dealing with a bounced cheque?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel to explain your options — then verify with a licensed advocate before you
            file.
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
