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

const sections = [
  { icon: FileText, title: "Parties and a precise definition of confidential information", detail: "Who's disclosing and who's receiving, and — critically — a clear, specific definition of what counts as confidential. A vague, all-encompassing definition is actually weaker in court than a narrow, precise one." },
  { icon: ShieldCheck, title: "Obligations, duration, and standard exclusions", detail: "What the receiving party must and must not do with the information, how long the confidentiality obligation lasts, and standard carve-outs — information already public, independently developed, or required to be disclosed by law." },
  { icon: Scale, title: "Governing law and dispute resolution", detail: "A clause confirming the agreement is governed by Pakistani law and specifying which courts have jurisdiction — especially important for NDAs involving foreign parties or remote work." },
  { icon: AlertTriangle, title: "It's enforced as an ordinary contract, not under a special NDA law", detail: "There's no dedicated NDA statute in Pakistan — enforceability comes from the Contract Act 1872's general requirements: offer and acceptance, lawful consideration, free consent, and capacity to contract." },
];

const faqs = [
  {
    question: "What should an NDA format in Pakistan include?",
    answer:
      "Both parties' details, a clear and specific definition of confidential information, the receiving party's obligations, the duration of confidentiality, standard exclusions (public information, independent development), and a governing law/dispute resolution clause.",
  },
  {
    question: "Is a broader NDA definition of confidential information stronger?",
    answer:
      "No — courts tend to scrutinize an NDA that tries to define confidential information so broadly it's hard to tell what isn't covered, which can actually weaken enforceability. A precisely scoped definition tied to the real information at risk holds up better.",
  },
  {
    question: "Can an NDA in Pakistan cover information shared before it was signed?",
    answer:
      "Only if it's specifically drafted to cover pre-signing disclosures — this isn't automatic and is a common gap in generic templates. If earlier discussions already happened, the NDA should explicitly address that information.",
  },
  {
    question: "Can Wakeel.org generate an NDA for me?",
    answer:
      "Yes — describe what information needs protecting and who the parties are, and Wakeel can generate a first draft with a properly scoped confidentiality definition. Have a licensed advocate review it before signing, particularly for anything involving significant trade secrets or foreign parties.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "NDA Format in Pakistan",
    description:
      "The standard structure of a Non-Disclosure Agreement in Pakistan under the Contract Act 1872 — what to include, common weaknesses, and how to generate a first draft with Wakeel.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-06-20",
    dateModified: "2026-06-20",
    mainEntityOfPage: `${site.url}/journal/article/nda-format-in-pakistan`,
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
        name: "NDA Format in Pakistan",
        item: `${site.url}/journal/article/nda-format-in-pakistan`,
      },
    ],
  },
];

const keywords = [
  "nda format pakistan",
  "non disclosure agreement template pakistan",
  "nda sample pakistan",
  "nda generator pakistan",
  "confidentiality agreement format pakistan",
  "nda for startups pakistan",
].join(", ");

export default function NdaFormatInPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="NDA Format in Pakistan"
        description="The standard structure of a Non-Disclosure Agreement in Pakistan under the Contract Act 1872 — what to include, common weaknesses, and how to generate a first draft with Wakeel."
        path="/journal/article/nda-format-in-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>Legal Help · Published June 20, 2026</p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            NDA Format in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A "cover everything" NDA is often weaker than a precise one — here's the format that
            actually holds up.
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
                An NDA in Pakistan, enforced as an ordinary contract under the{" "}
                <strong>Contract Act 1872</strong>, should include a{" "}
                <strong>precise definition</strong> of confidential information, the receiving
                party's obligations, a <strong>reasonable duration</strong>, standard{" "}
                <strong>exclusions</strong>, and a governing-law clause.{" "}
                <a href={site.appUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Wakeel can generate a first draft
                </a>{" "}
                scoped to exactly the information you need to protect.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educate: sections */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>The sections, one at a time</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {sections.map((r) => {
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

      {/* Generate with Wakeel */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className={`${cardBase} border-primary/40`}>
            <CardHeader>
              <FileText className="h-7 w-7 text-primary" />
              <CardTitle className="text-xl">Generate your NDA draft with Wakeel</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Describe what information you need to protect and who the parties are, and Wakeel
                can generate a first draft with a properly scoped confidentiality definition —
                specific enough to hold up, not so broad it invites scrutiny. Have a licensed
                advocate review it before signing, especially for anything involving significant
                trade secrets, investor discussions, or foreign parties.
              </p>
              <div className="text-center">
                <Button asChild size="lg" className="cta-try-free">
                  <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                    Generate an NDA draft — free
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Reveal: prose with inline sources */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <h2 className={sectionHeading}>Why broader isn't better when it comes to confidentiality clauses</h2>
          <p className="text-muted-foreground leading-relaxed">
            Startup-focused guidance from{" "}
            <a href="https://www.startup.pk/non-disclosure-agreements-for-startups-in-pakistan-a-complete-guide/" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
              Startup.pk
            </a>{" "}
            makes a counterintuitive point worth remembering when drafting: an NDA that tries to
            define confidential information as literally everything discussed is more vulnerable
            to challenge than a narrower one. Courts favor fairness, and an agreement so broad it's
            unclear what isn't covered starts to look like an unreasonable restriction rather than
            a genuine confidentiality protection — working against enforceability rather than for
            it.
          </p>
        </div>
      </section>

      {/* How Wakeel helps / can't do */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-6">
            <Card className={cardBase}>
              <CardHeader>
                <CheckCircle2 className="h-6 w-6 text-primary" />
                <CardTitle className="text-lg">What Wakeel.org can help with</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Generating a first draft of an NDA scoped to the information you describe.
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
                  It cannot confirm the NDA's enforceability for your specific situation — a
                  licensed advocate should review it before signing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background py-16 sm:py-20">
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
      <section className="bg-muted/40 py-14 sm:py-16">
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
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`${sectionHeading} text-center mb-8`}>Related reading</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/journal/article/non-disclosure-agreement-nda-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Non-Disclosure Agreement (NDA) in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/employment-contract-format-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Employment Contract Format in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/partnership-agreement-format-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Partnership Agreement Format in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/breach-of-contract-legal-remedies-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Breach of Contract in Pakistan: Legal Remedies</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Need an NDA drafted?</h2>
          <p className="text-muted-foreground">
            Describe what needs protecting, and let Wakeel put together a first draft — then get
            a lawyer to finalize it.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">Generate a Draft with Wakeel</a>
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
