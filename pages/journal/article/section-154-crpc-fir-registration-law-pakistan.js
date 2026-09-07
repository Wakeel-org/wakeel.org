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
import { site } from "../../../src/data/marketing";
import { cardBase, eyebrow, headingGradient, sectionHeading } from "../../../src/data/theme";

const framework = [
  { icon: FileText, title: "Section 154 is the actual legal basis for every FIR", detail: "It requires the officer in charge of a police station to accurately record, in a prescribed government register, any information given about the commission of a cognizable offence — this single provision is what an FIR legally is." },
  { icon: Gavel, title: "Registration is mandatory, not discretionary", detail: "Courts have repeatedly held that registering an FIR for a cognizable offence is a mandatory duty, not something left to the police officer's personal judgment about whether the complaint sounds credible." },
  { icon: ShieldAlert, title: "Credibility is assessed after registration, not before", detail: "The genuineness of the information is not a precondition for registering the case — it's only relevant once the case has been registered and the investigation actually begins." },
  { icon: AlertTriangle, title: "One real limit: it has to describe a cognizable offence", detail: "The police officer is expected to know the law well enough to assess whether the information describes a cognizable offence at all. If it doesn't, they aren't legally required to register a case — this is the one legitimate basis for refusal, separate from doubting whether the complaint is true." },
];

const faqs = [
  {
    question: "What does Section 154 CrPC actually say?",
    answer:
      "It requires the officer in charge of a police station to accurately record any information about a cognizable offence in a prescribed register — this recorded information is what becomes the FIR (First Information Report).",
  },
  {
    question: "Is it mandatory for police to register an FIR under Section 154?",
    answer:
      "Yes. Courts have consistently held that registering an FIR for a cognizable offence is a mandatory legal duty, not a discretionary choice based on whether the officer personally believes the complaint.",
  },
  {
    question: "Can police refuse to register an FIR because they think the complaint is false?",
    answer:
      "Generally, no. The genuineness or credibility of the information isn't a legal precondition for registration — it only becomes relevant after the FIR is registered and the investigation proceeds. The one legitimate ground for refusal is that the information doesn't describe a cognizable offence at all.",
  },
  {
    question: "What's the difference between Section 154 and Sections 22-A/22-B CrPC?",
    answer:
      "Section 154 is the provision that creates the police's duty to register an FIR in the first place. Sections 22-A and 22-B are the remedy — they let you apply to an Ex-Officio Justice of the Peace to force registration if the police unlawfully refuse to comply with Section 154.",
  },
  {
    question: "Can Wakeel.org tell me if my complaint describes a cognizable offence?",
    answer:
      "Wakeel.org can explain how Section 154 generally works and what \"cognizable\" typically means. It cannot definitively classify your specific facts or guarantee an FIR will be registered — a licensed advocate can assess that.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Section 154 CrPC: FIR Registration Law in Pakistan",
    description:
      "The statutory basis for every FIR in Pakistan — what Section 154 of the CrPC requires, why registration is mandatory, and the one legitimate ground for refusal.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-06-24",
    dateModified: "2026-06-24",
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
        name: "Section 154 CrPC: FIR Registration Law in Pakistan",
        item: `${site.url}/journal/article/section-154-crpc-fir-registration-law-pakistan`,
      },
    ],
  },
];

const keywords = [
  "section 154 crpc pakistan",
  "fir registration law pakistan",
  "is fir registration mandatory pakistan",
  "cognizable offence pakistan fir",
  "section 154 vs 22a 22b crpc",
  "police duty register fir",
].join(", ");

export default function Section154CrpcFirRegistrationLawPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Section 154 CrPC: FIR Registration Law in Pakistan"
        description="The statutory basis for every FIR in Pakistan — what Section 154 of the CrPC requires, why registration is mandatory, and the one legitimate ground for refusal."
        path="/journal/article/section-154-crpc-fir-registration-law-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>Legal Help · Published June 24, 2026</p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Section 154 CrPC: FIR Registration Law in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            One short provision is the entire legal reason an FIR has to be registered at all —
            here's exactly what it requires.
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
                <strong>Section 154 of the CrPC</strong> requires the officer in charge of a police
                station to accurately record information about a{" "}
                <strong>cognizable offence</strong> — this is what makes registering an FIR{" "}
                <strong>mandatory</strong>, not optional. Whether the complaint sounds credible
                isn't a legal reason to refuse; that question is only assessed after registration,
                during investigation. The one legitimate ground for refusal is that the
                information doesn't describe a cognizable offence at all.
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
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`${sectionHeading} text-center mb-8`}>Related reading</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/journal/article/how-to-register-fir-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to Register an FIR in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/police-refuse-fir-what-to-do-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Police Refuse to Register FIR: What Can You Do?</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/section-22a-22b-crpc-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Section 22-A/22-B CrPC: The Justice of Peace Explained</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/police-investigation-procedure-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Police Investigation Procedure in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
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
