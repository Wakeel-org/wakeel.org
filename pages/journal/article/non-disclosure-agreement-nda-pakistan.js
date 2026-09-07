import Link from "next/link";
import {
  CheckCircle2,
  FileText,
  ShieldCheck,
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
  { icon: FileText, title: "There's no separate \"NDA law\" — it's an ordinary contract", detail: "NDAs in Pakistan are enforceable under the general Contract Act 1872, which requires offer and acceptance, lawful consideration, free consent, and capacity to contract — the same rules that govern any other agreement." },
  { icon: ShieldCheck, title: "What actually makes an NDA enforceable in practice", detail: "A clear, specific definition of what counts as \"confidential information,\" a reasonable time limit on the confidentiality obligation, and sensible exclusions (information already public, independently developed, or legally required to be disclosed) are what courts look for when assessing whether an NDA is genuinely enforceable." },
  { icon: Scale, title: "Vague or overly broad NDAs get scrutinized, not automatically enforced", detail: "Courts tend to favor fairness and will scrutinize an NDA where it's hard to tell what actually counts as confidential — an NDA that tries to cover literally everything a person learns is weaker than one that defines its scope precisely." },
  { icon: AlertTriangle, title: "Governing law and jurisdiction clauses matter more than people assume", detail: "For NDAs involving foreign parties or remote work, specifying that the agreement is governed by Pakistani law, and which courts have jurisdiction, avoids a messy and expensive argument about which country's law even applies if a dispute arises." },
];

const faqs = [
  {
    question: "Are NDAs legally enforceable in Pakistan?",
    answer:
      "Yes, as ordinary contracts under the Contract Act 1872 — there's no separate NDA-specific law. Enforceability depends on the same general contract requirements: offer and acceptance, lawful consideration, free consent, and capacity, plus clear, reasonable terms.",
  },
  {
    question: "What makes an NDA weak or hard to enforce in Pakistan?",
    answer:
      "Vague or overly broad definitions of \"confidential information,\" an unreasonably long or indefinite confidentiality period, and a lack of standard exclusions (already-public information, independently developed information) are the most common weaknesses courts scrutinize.",
  },
  {
    question: "Do I need a lawyer to draft an NDA for my startup in Pakistan?",
    answer:
      "It's strongly recommended, especially for anything involving significant trade secrets, investor discussions, or foreign parties — a lawyer can ensure the confidentiality definition, duration, and exclusions are specific enough to actually hold up if challenged.",
  },
  {
    question: "Can an NDA cover information shared before it was signed?",
    answer:
      "Only if the NDA is specifically drafted to cover pre-signing disclosures — this isn't automatic, and it's a common gap in generic NDA templates. If prior discussions already happened, make sure the agreement explicitly addresses that information.",
  },
  {
    question: "Can Wakeel.org draft an NDA for me?",
    answer:
      "Wakeel.org can explain what makes an NDA generally enforceable and what to check for. It cannot draft the final agreement or confirm its enforceability for your specific situation — a licensed advocate should handle that.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Non-Disclosure Agreement (NDA) in Pakistan",
    description:
      "How NDAs are enforced in Pakistan under the Contract Act 1872 — what makes one legally solid, and the common weaknesses that get scrutinized.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-07-27",
    dateModified: "2026-07-27",
    mainEntityOfPage: `${site.url}/journal/article/non-disclosure-agreement-nda-pakistan`,
    citation: [
      { "@type": "CreativeWork", name: "Non-Disclosure Agreements for Startups in Pakistan: A Complete Guide — Startup.pk", url: "https://www.startup.pk/non-disclosure-agreements-for-startups-in-pakistan-a-complete-guide/" },
      { "@type": "CreativeWork", name: "Drafting Contracts and Agreements in Pakistan: Legal Guide — Saleem Law Firm", url: "https://saleemlawfirm.com/blog/drafting-contracts-and-agreements-in-pakistan/" },
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
        name: "Non-Disclosure Agreement (NDA) in Pakistan",
        item: `${site.url}/journal/article/non-disclosure-agreement-nda-pakistan`,
      },
    ],
  },
];

const keywords = [
  "nda pakistan enforceability",
  "non disclosure agreement pakistan law",
  "contract act 1872 nda",
  "nda for startups pakistan",
  "confidentiality agreement pakistan",
  "how to draft nda pakistan",
].join(", ");

export default function NonDisclosureAgreementNdaPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Non-Disclosure Agreement (NDA) in Pakistan"
        description="How NDAs are enforced in Pakistan under the Contract Act 1872 — what makes one legally solid, and the common weaknesses that get scrutinized."
        path="/journal/article/non-disclosure-agreement-nda-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>Legal Help · Published July 27, 2026</p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Non-Disclosure Agreement (NDA) in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            There's no special NDA statute in Pakistan — which means a generic, vague template
            can be surprisingly weak in court.
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
                NDAs in Pakistan are enforced as ordinary contracts under the{" "}
                <strong>Contract Act 1872</strong> — there's no dedicated NDA law. Enforceability
                comes down to a <strong>clear, specific definition</strong> of confidential
                information, a <strong>reasonable duration</strong>, and standard exclusions
                (public information, independent development). Vague or overly broad NDAs get{" "}
                <strong>scrutinized</strong> rather than automatically enforced.
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
          <h2 className={sectionHeading}>Why a "cover everything" NDA is often weaker than a narrow one</h2>
          <p className="text-muted-foreground leading-relaxed">
            Startup-focused guidance from{" "}
            <a href="https://www.startup.pk/non-disclosure-agreements-for-startups-in-pakistan-a-complete-guide/" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
              Startup.pk
            </a>{" "}
            makes a counterintuitive but important point: an NDA that tries to define
            "confidential information" as literally everything discussed or shared, without
            limitation, is actually more vulnerable to challenge than a narrower one. Courts favor
            fairness, and an agreement so broad it's hard to say what isn't covered starts to look
            less like a genuine confidentiality protection and more like an unreasonable
            restriction — which works against enforceability, not for it.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The practical lesson for founders and freelancers is to resist the urge to make an
            NDA as sweeping as possible. A precisely scoped definition, tied to the actual
            information genuinely at risk, tends to hold up better than a catch-all clause copied
            from a generic template.
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
                  Explaining what makes an NDA generally enforceable and reviewing clauses you're
                  unsure about, in plain English or Urdu.
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
                  It cannot draft the final NDA or confirm its enforceability for your specific
                  situation — a licensed advocate should handle that.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel about an NDA — free
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
              { label: "Non-Disclosure Agreements for Startups in Pakistan: A Complete Guide — Startup.pk", href: "https://www.startup.pk/non-disclosure-agreements-for-startups-in-pakistan-a-complete-guide/" },
              { label: "Drafting Contracts and Agreements in Pakistan: Legal Guide — Saleem Law Firm", href: "https://saleemlawfirm.com/blog/drafting-contracts-and-agreements-in-pakistan/" },
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
            <Link href="/journal/article/draft-legal-contract-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to Draft a Legal Contract in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/employment-contract-essentials-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Employment Contract in Pakistan: What Should It Include?</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/breach-of-contract-legal-remedies-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Breach of Contract in Pakistan: Legal Remedies</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/website-terms-and-conditions-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Terms and Conditions for Pakistani Websites</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Signing or drafting an NDA?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel what to check for — then get a licensed advocate to finalize the terms.
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
