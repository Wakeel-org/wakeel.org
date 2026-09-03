import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Fingerprint,
  Smartphone,
  Landmark,
  HelpCircle,
  AlertTriangle,
  ListChecks,
  RefreshCw,
} from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site } from "../../../src/data/marketing";
import { cardBase, eyebrow, headingGradient, sectionHeading } from "../../../src/data/theme";

const commonCauses = [
  {
    icon: Fingerprint,
    title: "Worn or changed fingerprints",
    detail:
      "Manual labor, age, skin conditions, or old injuries can genuinely wear down fingerprint ridges over time, causing repeated verification failures even for the legitimate CNIC holder. This is one of the most common, least understood causes — and it isn't a sign of anything wrong with your identity record.",
  },
  {
    icon: RefreshCw,
    title: "Outdated or poor-quality biometric data on file",
    detail:
      "If your original NADRA biometric capture was low quality, or your record hasn't been updated in years, later matching attempts (whether for SIM verification, banking, or other services) can fail even with a genuine finger scan. A fresh re-verification at a NADRA centre often resolves this.",
  },
  {
    icon: Smartphone,
    title: "SIM verification and blocking issues",
    detail:
      "Telecom operators periodically require biometric re-verification tied to your CNIC under regulatory requirements — a failed or missed re-verification is the most common reason a previously working SIM suddenly gets blocked. This is usually resolved by re-verifying biometrics at a NADRA centre or an authorized telecom franchise.",
  },
  {
    icon: Landmark,
    title: "Bank account and financial service verification",
    detail:
      "Banks and other regulated financial services increasingly require biometric verification against NADRA's database for account opening, mobile banking, or periodic re-KYC. A mismatch here can freeze access to your own account until it's resolved — worth acting on quickly rather than assuming it will sort itself out.",
  },
];

const resolutionSteps = [
  "Visit your nearest NADRA Registration Centre in person — most biometric mismatches are resolved fastest through a fresh in-person capture, not remotely.",
  "Bring your original CNIC and, if available, any prior verification slip or reference number from the failed attempt.",
  "If the issue is specifically SIM blocking, ask whether it needs to be resolved through NADRA directly or through your telecom provider's biometric re-verification process — the two are related but not always the same system.",
  "For repeated failures despite correct fingerprints, ask NADRA staff about updating your biometric record entirely rather than just re-attempting the same scan.",
  "Keep any receipt or reference number from your visit — if the issue recurs, this speeds up follow-up significantly.",
];

const faqs = [
  {
    question: "Why does my NADRA biometric verification keep failing?",
    answer:
      "Common causes include worn or changed fingerprints (from manual labor, age, or skin conditions), outdated or low-quality biometric data on file from an older registration, or a mismatch during a specific service's verification process (SIM, banking). A fresh in-person re-capture at a NADRA Registration Centre resolves most of these cases.",
  },
  {
    question: "How do I fix a NADRA biometric verification problem?",
    answer:
      "Visit a NADRA Registration Centre in person with your original CNIC. If repeated fingerprint scans fail, ask staff about updating your full biometric record rather than repeating the same failed scan. For SIM-specific verification failures, your telecom provider's franchise can often also assist, since SIM re-verification and NADRA's core database are related but separately managed processes.",
  },
  {
    question: "Why did my SIM card get blocked due to biometric verification?",
    answer:
      "Telecom regulations require periodic biometric re-verification linked to your CNIC, and a missed or failed re-verification is the most common reason a SIM gets blocked. This is usually resolved by completing biometric verification again at a NADRA centre or authorized telecom franchise — the SIM typically reactivates once verification succeeds.",
  },
  {
    question: "Can a bank block my account over biometric verification issues?",
    answer:
      "Yes — banks and other regulated financial institutions are required to verify customers against NADRA's database for account opening and periodic re-KYC, and a failed match can restrict account access until resolved. If this happens, resolving the underlying biometric mismatch at NADRA is usually the fastest path back to full access, alongside following up with your bank directly.",
  },
  {
    question: "Can Wakeel.org help me with a NADRA or biometric issue?",
    answer:
      "Wakeel.org can explain how biometric verification works and why common failures happen, help you understand a bank or telecom notice referencing verification issues, and prepare a clear list of questions before you visit NADRA. It cannot access, update, or verify anyone's biometric record — that has to be done in person through NADRA's official process.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "NADRA Biometric Verification Issues in Pakistan: What to Do",
    description:
      "Why NADRA biometric verification fails, how it affects SIM cards and bank accounts, and the practical steps to resolve it.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-08-07",
    dateModified: "2026-08-07",
    mainEntityOfPage: `${site.url}/journal/article/nadra-biometric-verification-pakistan`,
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
        name: "NADRA Biometric Verification Issues in Pakistan",
        item: `${site.url}/journal/article/nadra-biometric-verification-pakistan`,
      },
    ],
  },
];

const keywords = [
  "nadra biometric verification",
  "nadra fingerprint verification failed",
  "sim blocked biometric verification pakistan",
  "nadra verification issue pakistan",
  "cnic biometric update pakistan",
].join(", ");

export default function NadraBiometricVerificationPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="NADRA Biometric Verification Issues in Pakistan"
        description="Why NADRA biometric verification fails, how it affects SIM cards and bank accounts in Pakistan, and the practical steps to actually resolve it."
        path="/journal/article/nadra-biometric-verification-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>
            Legal Help · Published August 7, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            NADRA Biometric Verification Issues in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A blocked SIM or a frozen bank account over a failed fingerprint scan feels like a
            personal accusation — it usually isn't. Here's why biometric verification actually
            fails, and the fastest real path to fixing it.
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
                NADRA biometric verification usually fails because of worn or changed
                fingerprints, outdated biometric data on file, or a mismatch during a specific
                service's check (telecom SIM re-verification or bank KYC). The most reliable fix
                is an in-person visit to a <strong>NADRA Registration Centre</strong> with your
                CNIC to re-capture or update your biometric record — this resolves most SIM
                blocking and account access issues.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Common causes */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>Why verification actually fails</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {commonCauses.map((c) => {
              const Icon = c.icon;
              return (
                <Card key={c.title} className={cardBase}>
                  <CardHeader>
                    <Icon className="h-7 w-7 text-primary" />
                    <CardTitle className="text-lg">{c.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{c.detail}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Resolution steps */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className={sectionHeading}>How to actually resolve it</h2>
          </div>
          <Card className={cardBase}>
            <CardContent className="p-6">
              <ol className="space-y-3">
                {resolutionSteps.map((step, i) => (
                  <li key={step} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center justify-center h-5 w-5 rounded-full bg-primary/10 text-primary text-xs font-semibold shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
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
                  Explaining how biometric verification and common failures work, summarizing a
                  bank or telecom notice referencing verification issues, and helping you prepare
                  questions before visiting NADRA.
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
                  It cannot access, verify, or update anyone's biometric record — that must be
                  done in person through NADRA's official process.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Understand your notice with Wakeel Free
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
            General educational information, not legal advice. NADRA, telecom, and banking
            verification procedures can change — confirm current requirements directly with the
            relevant institution. See our{" "}
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
              href="/journal/article/nccia-cyber-crime-complaint-pakistan"
              className={`group ${cardBase} block rounded-lg p-5`}
            >
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                How to File a Cyber Crime Complaint in Pakistan
              </p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link
              href="/journal/legal-issues-pakistan/consumer-rights-pakistan"
              className={`group ${cardBase} block rounded-lg p-5`}
            >
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                Consumer Rights and Complaints in Pakistan
              </p>
              <p className="text-xs text-muted-foreground mt-1">Guide · Wakeel Journal</p>
            </Link>
            <Link
              href="/journal/article/understanding-legal-notices-pakistan"
              className={`group ${cardBase} block rounded-lg p-5`}
            >
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                Understanding Legal Notices in Pakistan
              </p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/citizens" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                Wakeel.org for Citizens
              </p>
              <p className="text-xs text-muted-foreground mt-1">How Wakeel helps everyday legal problems</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Got a verification notice you don't understand?</h2>
          <p className="text-muted-foreground">
            Paste the message from your bank or telecom provider and get a clear explanation
            before you head to a NADRA centre.
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
