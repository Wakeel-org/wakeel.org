import Link from "next/link";
import {
  CheckCircle2,
  Gavel,
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
  { icon: Gavel, title: "Step 1 — Confirm Article 199 actually applies", detail: "A writ petition is filed under Article 199 of the Constitution to enforce fundamental rights or challenge an action by a public authority — it's not the route for an ordinary private dispute between two citizens, which generally belongs in a civil suit instead." },
  { icon: FileText, title: "Step 2 — Prepare the petition set correctly", detail: "You'll need a vakalatnama (authorizing your advocate, who must be enrolled with the relevant Bar), and typically three complete sets of the petition — one original plus two photocopies — compiled with an index, supporting documents, and a sworn affidavit, following the specific High Court's rules." },
  { icon: Clock, title: "Step 3 — Mind the limitation period", detail: "Under Article 199(3), a writ petition challenging an order generally needs to be filed within three months of that order being communicated to you — though courts can excuse delay for a genuinely sufficient reason, such as late notice of the order." },
  { icon: AlertTriangle, title: "Step 4 — File with the correct court fee", detail: "The petition needs a proper court fee stamp affixed before it's submitted to the High Court's Filing Section — an incomplete or improperly stamped petition can be returned for correction before it's even registered." },
];

const faqs = [
  {
    question: "When can I file a writ petition in Pakistan?",
    answer:
      "A writ petition under Article 199 of the Constitution is used to enforce fundamental rights or challenge an action or order by a public authority, government department, or certain other bodies — it isn't the correct route for a purely private dispute between individuals.",
  },
  {
    question: "What is the time limit to file a writ petition?",
    answer:
      "Generally three months from when the order or action being challenged was communicated to you, under Article 199(3). Courts can sometimes condone a delay for sufficient cause, such as late notice, but this isn't guaranteed.",
  },
  {
    question: "Do I need a lawyer to file a writ petition?",
    answer:
      "You can technically file in person, but a writ petition must otherwise be filed through an advocate enrolled with the relevant High Court Bar, using a vakalatnama. Given the procedural precision required, using a lawyer is strongly recommended.",
  },
  {
    question: "What documents does a writ petition need?",
    answer:
      "Typically the petition itself (in the required number of sets per the specific High Court's rules), a vakalatnama, supporting documents and annexures, a sworn affidavit, and the required court fee stamp.",
  },
  {
    question: "Can Wakeel.org help me file a writ petition?",
    answer:
      "Wakeel.org can explain what a writ petition generally covers and whether your situation sounds like it fits Article 199. It cannot draft or file the petition or represent you in the High Court — a licensed advocate should handle that.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to File a Writ Petition in High Court Pakistan",
    description:
      "The Article 199 writ petition process in Pakistan — when it applies, the limitation period, and the documents a High Court petition actually needs.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-06-23",
    dateModified: "2026-06-23",
    mainEntityOfPage: `${site.url}/journal/article/writ-petition-high-court-pakistan`,
    citation: [
      { "@type": "CreativeWork", name: "Article 199, Constitution of Pakistan — PakistanKanoon.com", url: "https://pakistankanoon.com/statutes/constitution-of-pakistan/article-199/" },
      { "@type": "CreativeWork", name: "Specimen / Step-by-Step Procedure for Writ Petition — Asad & Basim Advocates", url: "https://ablawfirm.org/speciman-draft-formate-of-writ-petition-constitution-petition-before-the-high-court-and-required-documents-step-by-step-procedure/" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to File a Writ Petition in High Court Pakistan",
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
        name: "How to File a Writ Petition in High Court Pakistan",
        item: `${site.url}/journal/article/writ-petition-high-court-pakistan`,
      },
    ],
  },
];

const keywords = [
  "how to file writ petition pakistan",
  "article 199 constitution pakistan",
  "writ petition procedure high court",
  "constitutional petition pakistan",
  "writ petition limitation period",
  "writ petition documents required",
].join(", ");

export default function WritPetitionHighCourtPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="How to File a Writ Petition in High Court Pakistan"
        description="The Article 199 writ petition process in Pakistan — when it applies, the limitation period, and the documents a High Court petition actually needs."
        path="/journal/article/writ-petition-high-court-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>Legal Help · Published June 23, 2026</p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            How to File a Writ Petition in High Court Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The constitutional remedy against government action — and the deadline you can't
            afford to miss.
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
                A writ petition is filed under{" "}
                <strong>Article 199 of the Constitution</strong> to enforce a fundamental right or
                challenge an action by a public authority — generally within{" "}
                <strong>three months</strong> of the order being communicated. It's filed through
                an enrolled advocate with a vakalatnama, in the required number of sets with
                supporting documents and an affidavit, along with the proper court fee stamp.
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
          <h2 className={sectionHeading}>Why "maintainability" is the real first hurdle</h2>
          <p className="text-muted-foreground leading-relaxed">
            Before a High Court even looks at the merits of your case, it asks whether the
            petition is maintainable at all under Article 199 — as detailed in analysis from{" "}
            <a href="https://ablawfirm.org/speciman-draft-formate-of-writ-petition-constitution-petition-before-the-high-court-and-required-documents-step-by-step-procedure/" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
              Asad & Basim Advocates
            </a>
            , grounds like the order being passed without lawful authority (coram non judice) or
            in bad faith (mala fide) are the kinds of things that make a writ maintainable. A
            petition that's really just disagreement with a decision, without one of these
            constitutional grounds, risks being dismissed at the very first hearing regardless of
            how strong the underlying grievance feels.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            This is exactly why framing matters as much as facts — the same set of grievances can
            succeed or fail depending on whether it's presented as a genuine constitutional
            question or simply as an unhappy outcome, which is a big part of what a lawyer's
            drafting actually contributes.
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
                  Explaining what Article 199 generally covers and whether your situation sounds
                  like a writ matter, in plain English or Urdu.
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
                  It cannot draft or file your writ petition or represent you in the High Court —
                  a licensed advocate should handle that.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel about a writ petition — free
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
              { label: "Article 199, Constitution of Pakistan — PakistanKanoon.com", href: "https://pakistankanoon.com/statutes/constitution-of-pakistan/article-199/" },
              { label: "Specimen / Draft / Step-by-Step Procedure for Writ Petition — Asad & Basim Advocates", href: "https://ablawfirm.org/speciman-draft-formate-of-writ-petition-constitution-petition-before-the-high-court-and-required-documents-step-by-step-procedure/" },
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
            <Link href="/journal/article/writ-jurisdiction-high-courts-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Writ Jurisdiction of High Courts in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/constitution-of-pakistan-1973-fundamental-rights" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">The Constitution of Pakistan 1973 and Fundamental Rights</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/human-rights-pakistan-constitutional-remedies" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Human Rights in Pakistan: Constitutional Rights and Remedies</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/how-courts-work-in-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How Courts Work in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Considering a writ petition?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel whether your situation sounds like a writ matter — then verify with a
            licensed advocate before the deadline passes.
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
