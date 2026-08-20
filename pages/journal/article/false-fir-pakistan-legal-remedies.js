import Link from "next/link";
import {
  CheckCircle2,
  Scale,
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
import { cardBase, headingGradient, sectionHeading } from "../../../src/data/theme";

const legalRoutes = [
  { icon: FileText, title: "Section 182 PPC — false information to a public servant", detail: "Criminalises knowingly giving false information to a public servant with intent to cause that public servant to act (or refrain from acting) in a way they wouldn't have, had the true facts been known — including to cause an unjustified investigation." },
  { icon: Gavel, title: "Section 211 PPC — false charge with intent to injure", detail: "Criminalises instituting or causing a criminal proceeding against a person, knowing there's no just or lawful ground for it, with the intent to injure them. This is the more serious of the two provisions and requires the falsity to be established through the proper process first." },
  { icon: Scale, title: "Quashing the FIR itself", detail: "A High Court can quash an FIR under Section 561-A CrPC (or, in an appropriate case, on an acquittal application under Section 249-A CrPC) where continuing the proceeding amounts to an abuse of the process of the court — this is a distinct remedy from prosecuting the complainant for falsity." },
  { icon: Clock, title: "Sequencing matters", detail: "Courts have generally held that action under Sections 182 or 211 PPC should follow the direct proceeding (the original case) being judicially found false — not run in parallel with it, and not be used as a pre-emptive counter-move before the original matter is resolved." },
];

const practicalNotes = [
  "\"False FIR\" is a serious legal claim, not a label to apply to any case you disagree with — the falsity has to be established through the proper process (investigation, trial, or a quashing petition), not simply asserted.",
  "If you believe an FIR against you is false or malicious, the priority is usually defending against it properly first — through bail, cooperation with investigation, or a quashing petition — rather than immediately filing a counter-complaint under Section 182/211 PPC.",
  "Cognizance of an offence under Section 182 or 211 PPC is generally taken on a written complaint, not simply because someone alleges falsity informally — the procedural route matters as much as the underlying claim.",
  "Because both false-FIR remedies and defending against a case you believe is false are procedurally specific and time-sensitive, this needs a licensed criminal lawyer's involvement from the outset.",
];

const faqs = [
  {
    question: "What can I do if someone files a false FIR against me in Pakistan?",
    answer:
      "Focus first on properly defending against the case itself — engaging a lawyer, seeking bail if needed, and cooperating with investigation, or pursuing a quashing petition under Section 561-A CrPC if the FIR amounts to an abuse of process. Pursuing the complainant under Sections 182 or 211 PPC for false information is a separate route, generally taken once the original case has been judicially found false.",
  },
  {
    question: "Can I sue someone for filing a false police report in Pakistan?",
    answer:
      "Criminal remedies exist under Sections 182 and 211 PPC for knowingly false information or a false charge made with intent to injure. Courts have generally required that the falsity of the original case be established first through the proper process before proceedings under these sections are pursued.",
  },
  {
    question: "How is an FIR quashed in Pakistan?",
    answer:
      "A High Court can quash an FIR under its inherent powers (Section 561-A CrPC) where continuing the case would be an abuse of the process of the court, or in appropriate cases through an acquittal application under Section 249-A CrPC before the trial court. This is a specific legal proceeding, not an automatic outcome of disputing the allegations.",
  },
  {
    question: "What's the difference between defending an FIR and prosecuting someone for filing a false one?",
    answer:
      "Defending against an FIR (bail, cooperating with investigation, a quashing petition) addresses the immediate case against you. Prosecuting the complainant under Sections 182/211 PPC is a separate step aimed at holding them accountable for the false report, and generally follows rather than replaces defending the original case.",
  },
  {
    question: "Can Wakeel.org help if I'm dealing with a false FIR?",
    answer:
      "Wakeel.org can explain the legal routes available, in plain English or Urdu, and help you organize facts and documents before you see a lawyer. It cannot file a quashing petition, represent you, or determine whether an FIR is legally false — a licensed criminal lawyer should be engaged right away.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "False FIR in Pakistan: Legal Remedies and Consequences",
    description:
      "The legal routes available for a false FIR in Pakistan — quashing under Section 561-A CrPC, and prosecuting false information under Sections 182 and 211 PPC.",
    author: { "@type": "Organization", name: "Wakeel.org" },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-02-15",
    dateModified: "2026-02-15",
    mainEntityOfPage: `${site.url}/journal/article/false-fir-pakistan-legal-remedies`,
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
        name: "False FIR in Pakistan: Legal Remedies and Consequences",
        item: `${site.url}/journal/article/false-fir-pakistan-legal-remedies`,
      },
    ],
  },
];

const keywords = [
  "false fir pakistan",
  "false fir legal remedies pakistan",
  "quashing fir pakistan",
  "section 182 ppc",
  "section 211 ppc",
  "561-a crpc",
].join(", ");

export default function FalseFirPakistanLegalRemedies() {
  return (
    <Layout>
      <MarketingSEO
        title="False FIR in Pakistan: Legal Remedies and Consequences"
        description="The legal routes available for a false FIR in Pakistan — quashing under Section 561-A CrPC, and prosecuting false information under Sections 182 and 211 PPC."
        path="/journal/article/false-fir-pakistan-legal-remedies"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Legal Help · Published February 15, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            False FIR in Pakistan: Legal Remedies and Consequences
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Believing an FIR against you is false is common — proving it, legally, is a specific
            process with its own sequence and forums. Here's how it actually works.
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
                Two distinct legal tracks exist: <strong>quashing the FIR</strong> itself under{" "}
                <strong>Section 561-A CrPC</strong> (or, in an appropriate case, Section 249-A CrPC)
                where it amounts to an abuse of process, and <strong>prosecuting the complainant</strong>{" "}
                under <strong>Sections 182 or 211 PPC</strong> for knowingly false information —
                generally pursued after the original case is judicially found false, not in
                parallel with it. Both require a licensed criminal lawyer from the start.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educate: routes */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>The legal routes, explained</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {legalRoutes.map((r) => {
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

      {/* Reveal: practical notes */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className={sectionHeading}>What actually matters in practice</h2>
          </div>
          <Card className={cardBase}>
            <CardContent className="p-6">
              <ul className="space-y-3">
                {practicalNotes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Scale className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
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
                  Explaining the legal routes available, in plain English or Urdu, and helping you
                  organize facts and documents before you see a lawyer.
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
                  It cannot file a quashing petition, represent you, or determine whether an FIR is
                  legally false — a licensed criminal lawyer should be engaged right away.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel to explain your options — free
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
          <h2 className="text-lg font-semibold text-foreground mb-4">Sources and further reading</h2>
          <ul className="space-y-2">
            {[
              { label: "Pakistan Penal Code, 1860 — Pakistan Code (Ministry of Law and Justice)", href: "https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apaUY2Npa5lo-sg-jjjjjjjjjjjjj" },
              { label: "Code of Criminal Procedure, 1898 — Pakistan Code (Ministry of Law and Justice)", href: "https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apaUY2Npa5lp-sg-jjjjjjjjjjjjj" },
              { label: "Inherent Powers, Quashments, Acquittals — Prosecutor General Punjab", href: "https://pg.punjab.gov.pk/inherent_powers_quashments_acquittals" },
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
            <Link href="/journal/legal-issues-pakistan/fir-refused-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">What to Do if Police Refuse to Register an FIR</p>
              <p className="text-xs text-muted-foreground mt-1">Guide · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/how-to-get-bail-in-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Bail in Pakistan: How to Get Bail in a Criminal Case</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/what-you-must-know-fir-registration-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">What You Must Know About FIR Registration in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/legal-sources" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Our Approach to Legal Sources</p>
              <p className="text-xs text-muted-foreground mt-1">How Wakeel grounds answers in Pakistani law</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Dealing with an FIR you believe is false?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel to explain your options — then get a licensed criminal lawyer involved
            immediately to defend the case properly.
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
