import Link from "next/link";
import {
  CheckCircle2,
  Gavel,
  FileText,
  ShieldAlert,
  HelpCircle,
  AlertTriangle,
} from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site, reviewerSchema } from "../../../src/data/marketing";
import { cardBase, eyebrow, headingGradient, sectionHeading } from "../../../src/data/theme";

const framework = [
  { icon: FileText, title: "What the text requires", detail: "Information about a cognizable offence given orally to the officer in charge must be reduced to writing, read over to the informant and signed by them. Its substance is then entered in a book kept in the form the Provincial Government prescribes. That entry is the FIR." },
  { icon: Gavel, title: "Registration is a duty, not a discretion", detail: "Pakistan's superior courts have repeatedly held that once information discloses a cognizable offence, recording it is mandatory. Whether it is true is tested during investigation, not at the desk." },
  { icon: ShieldAlert, title: "Section 155 is the counterpart", detail: "For non-cognizable offences, Section 155 CrPC applies instead. The officer enters the substance of the information and refers the informant to a Magistrate, and police cannot investigate without a Magistrate's order." },
  { icon: AlertTriangle, title: "One FIR per occurrence", detail: "In Mst. Sughran Bibi v. The State (PLD 2018 SC 595), the Supreme Court held that there is generally one FIR for an occurrence. Later or different versions are recorded as statements under Section 161 CrPC during the same investigation, not as a fresh FIR." },
];

const faqs = [
  {
    "question": "What does Section 154 CrPC say?",
    "answer": "It provides that information about a cognizable offence given to the officer in charge of a police station must be reduced to writing if given orally, read over to the informant and signed by them. Its substance must be entered in a book in the form prescribed by the Provincial Government. That record is the FIR."
  },
  {
    "question": "What is the difference between Section 154 and Section 155 CrPC?",
    "answer": "Section 154 governs cognizable offences, where police register an FIR and can investigate. Section 155 governs non-cognizable offences: the information is noted and the informant is referred to a Magistrate, and police need a Magistrate's order to investigate."
  },
  {
    "question": "Can a second FIR be registered for the same incident?",
    "answer": "Generally no. Under Mst. Sughran Bibi v. The State (PLD 2018 SC 595), a different version of the same occurrence is recorded as a statement under Section 161 CrPC during investigation rather than as a new FIR."
  },
  {
    "question": "Which law enforces Section 154 if police don't comply?",
    "answer": "Sections 22-A and 22-B CrPC empower the Ex-Officio Justice of the Peace to issue directions to police on non-registration of a criminal case. Section 154 creates the duty, and Section 22-A provides the remedy."
  },
  {
    "question": "Can Wakeel.org explain how Section 154 applies to my facts?",
    "answer": "Wakeel can explain the provision and the cognizable/non-cognizable distinction in plain English or Urdu. Whether your specific facts disclose a cognizable offence is a question for a licensed advocate."
  }
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Section 154 CrPC Explained: The Legal Duty to Register an FIR in Pakistan",
    description:
      "What Section 154 CrPC requires, how it differs from Section 155 for non-cognizable cases, why courts treat registration as mandatory, and what Sughran Bibi (PLD 2018 SC 595) says about second FIRs.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    reviewedBy: reviewerSchema,
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-06-24",
    dateModified: "2026-10-22",
    mainEntityOfPage: `${site.url}/journal/article/section-154-crpc-fir-registration-law-pakistan`,
    citation: [
      { "@type": "CreativeWork", name: "CrPC Section 154 — Information in Cognisable Cases — Rest The Case", url: "https://restthecase.com/knowledge-bank/crpc/section-154" },
      { "@type": "CreativeWork", name: "Is FIR Registration Mandatory? Law under Section 154 CrPC Explained — Jain Law Chambers", url: "https://jainlawchambers.com/is-it-mandatory-for-a-police-officer-to-register-an-fir/" },
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
        name: "Section 154 CrPC Explained: The Legal Duty to Register an FIR in Pakistan",
        item: `${site.url}/journal/article/section-154-crpc-fir-registration-law-pakistan`,
      },
    ],
  },
];

const keywords = [
  "section 154 crpc",
  "section 154 crpc pakistan explained",
  "section 154 vs 155 crpc",
  "second fir pakistan sughran bibi",
  "pld 2018 sc 595",
  "fir legal basis pakistan"
].join(", ");

export default function Section154CrpcFirRegistrationLawPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Section 154 CrPC Explained: The Legal Duty to Register an FIR in Pakistan"
        description="What Section 154 CrPC requires, how it differs from Section 155 for non-cognizable cases, why courts treat registration as mandatory, and what Sughran Bibi (PLD 2018 SC 595) says about second FIRs."
        path="/journal/article/section-154-crpc-fir-registration-law-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>Legal Help · Published June 24, 2026 · Updated October 22, 2026 · Reviewed by Legal Team DIGIT</p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Section 154 CrPC Explained: The Legal Duty to Register an FIR in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The legal side of FIRs: what the provision says, how it sits alongside Sections 155 and
            22-A, and the leading Supreme Court ruling on second FIRs.
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
                <strong>Section 154 CrPC</strong> obliges the officer in charge of a police station to put
                information about a <strong>cognizable offence</strong> in writing, read it back to the
                informant, have it signed and enter it in the prescribed register. Courts treat this as a{" "}
                <strong>mandatory duty</strong>. Non-cognizable matters fall under <strong>Section
                155</strong> and go to a Magistrate, and under <strong>Sughran Bibi (PLD 2018 SC
                595)</strong> there is generally only one FIR per occurrence.
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
          <h2 className={sectionHeading}>Why "I don't believe you" isn't a legal reason to refuse an FIR</h2>
          <p className="text-muted-foreground leading-relaxed">
            Legal analysis of Section 154, including the breakdown from{" "}
            <a href="https://jainlawchambers.com/is-it-mandatory-for-a-police-officer-to-register-an-fir/" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
              Jain Law Chambers
            </a>
            , makes a specific point that's easy to miss: registering the FIR and investigating
            the truth of the complaint are two separate, sequential steps. The officer's job at the
            registration stage is narrow — does this information describe a cognizable offence?
            Whether it's actually true, exaggerated, or one-sided is precisely what the
            investigation exists to figure out afterward, not a gate the complainant has to pass
            through before an FIR even gets registered.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Knowing this distinction is genuinely useful at the counter: if an officer says "I
            don't think this is true" as a reason to refuse registration, that's not a legally
            valid basis under Section 154 — and it's exactly the kind of refusal that Sections 22-A
            and 22-B CrPC exist to override.
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
                  Explaining how Section 154 generally works and what "cognizable offence" means,
                  in plain English or Urdu.
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
                  It cannot classify your specific facts or guarantee an FIR gets registered — a
                  licensed advocate can assess that.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel about FIR registration — free
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
              { label: "CrPC Section 154 — Information in Cognisable Cases — Rest The Case", href: "https://restthecase.com/knowledge-bank/crpc/section-154" },
              { label: "Is FIR Registration Mandatory? Law under Section 154 CrPC Explained — Jain Law Chambers", href: "https://jainlawchambers.com/is-it-mandatory-for-a-police-officer-to-register-an-fir/" },
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
          <h2 className={`${sectionHeading} text-center mb-8`}>Related FIR guides</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/journal/article/how-to-register-fir-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to Register an FIR in Pakistan: Complete Guide</p>
              <p className="text-xs text-muted-foreground mt-1">Start here: the full FIR journey in one page</p>
            </Link>
            <Link href="/journal/article/what-you-must-know-fir-registration-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">FIR Myths vs Facts in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Misconceptions corrected, rights listed</p>
            </Link>
            <Link href="/journal/article/police-refuse-fir-what-to-do-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Police Won't Register Your FIR? The Escalation Path</p>
              <p className="text-xs text-muted-foreground mt-1">SHO → SP/DPO → Justice of the Peace</p>
            </Link>
            <Link href="/journal/article/false-fir-pakistan-legal-remedies" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">False FIR Against You? Legal Remedies</p>
              <p className="text-xs text-muted-foreground mt-1">For the accused: quashing and Sections 182/211 PPC</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Trying to understand your FIR rights?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel how Section 154 generally works — then verify with a licensed advocate
            before you act.
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
