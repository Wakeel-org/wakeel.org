import Link from "next/link";
import {
  CheckCircle2,
  FileSearch,
  Clock,
  Gavel,
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
  { icon: FileSearch, title: "An FIR starts the investigation, it doesn't end it", detail: "Once an FIR is registered, the investigating officer is supposed to visit the scene, secure and record evidence, question witnesses, and prepare a site map — the FIR is the trigger, not the outcome." },
  { icon: Clock, title: "There's a real deadline on the investigating officer", detail: "If the investigation isn't complete within 14 days of the FIR being recorded, the officer in charge is required to submit an incomplete report (challan) within 3 days of that deadline passing — investigations aren't meant to drag on indefinitely without any checkpoint." },
  { icon: Gavel, title: "The final output is the Section 173 CrPC police report — the challan", detail: "This report states the parties involved, the witnesses, whether an offence appears to have been committed and by whom, and whether the accused was arrested or released on bail. It's what actually gets the case in front of a Magistrate or Sessions Court." },
  { icon: AlertTriangle, title: "The investigating officer is bound by facts, not by either side's story", detail: "Courts have made clear that an investigating officer's conclusions must be based on the actual facts uncovered during investigation — not simply on the complainant's version, and not on the accused's defense either." },
];

const faqs = [
  {
    question: "What happens after an FIR is registered in Pakistan?",
    answer:
      "The investigating officer is required to visit the crime scene, preserve and collect evidence, record statements from witnesses, and build a case file. This process is meant to conclude with a formal police report under Section 173 CrPC, commonly called a challan.",
  },
  {
    question: "How long does a police investigation take in Pakistan?",
    answer:
      "The law expects investigation to be completed within 14 days of the FIR being recorded. If it isn't, the officer in charge must submit an incomplete challan within 3 days after that 14-day period expires — investigations aren't supposed to continue indefinitely without any report being filed.",
  },
  {
    question: "What is a challan (police report) in Pakistan?",
    answer:
      "The challan is the formal police report filed under Section 173 of the CrPC at the end of an investigation. It records the parties, the witnesses, whether an offence appears to have occurred and by whom, and whether the accused has been arrested or granted bail.",
  },
  {
    question: "What happens if the investigation timeline isn't followed?",
    answer:
      "Courts have treated serious violations of the investigation timeline as a real procedural problem — for example, where an accused remained in custody beyond what the timeline allows without a proper report being filed, courts have found the resulting proceedings affected by that failure.",
  },
  {
    question: "Can Wakeel.org tell me the status of my case's investigation?",
    answer:
      "Wakeel.org can explain how the investigation process and timelines generally work. It cannot access a specific case file or contact the investigating officer on your behalf — for that, you'd follow up directly with the police station or, if there's a court proceeding, through your advocate.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Police Investigation Procedure in Pakistan",
    description:
      "What happens after an FIR is filed in Pakistan — the investigating officer's role, the 14-day timeline, and the Section 173 CrPC police report (challan).",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-09-07",
    dateModified: "2026-09-07",
    mainEntityOfPage: `${site.url}/journal/article/police-investigation-procedure-pakistan`,
    citation: [
      { "@type": "CreativeWork", name: "The Procedure of Police Report on Completion of Investigation under CrPC, 1973 — iPleaders", url: "https://blog.ipleaders.in/procedure-police-report-completion-investigation-crpc-1973/" },
      { "@type": "CreativeWork", name: "Challan, Police Report and Discharge — Prosecutor General Punjab", url: "https://pg.punjab.gov.pk/challan_police_report_and_discharge" },
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
        name: "Police Investigation Procedure in Pakistan",
        item: `${site.url}/journal/article/police-investigation-procedure-pakistan`,
      },
    ],
  },
];

const keywords = [
  "police investigation procedure pakistan",
  "section 173 crpc police report",
  "challan pakistan explained",
  "investigation timeline pakistan fir",
  "what happens after fir pakistan",
  "investigating officer powers pakistan",
].join(", ");

export default function PoliceInvestigationProcedurePakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Police Investigation Procedure in Pakistan"
        description="What happens after an FIR is filed in Pakistan — the investigating officer's role, the 14-day timeline, and the Section 173 CrPC police report (challan)."
        path="/journal/article/police-investigation-procedure-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>Legal Help · Published September 7, 2026</p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Police Investigation Procedure in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Filing an FIR is step one. Here's what's actually supposed to happen between that and
            a case reaching court.
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
                After an FIR is registered, the investigating officer visits the scene, gathers
                evidence, and records statements — with a legal expectation of finishing within{" "}
                <strong>14 days</strong>. The investigation concludes with a formal{" "}
                <strong>police report under Section 173 of the CrPC</strong>, commonly called a{" "}
                <strong>challan</strong>, which states whether an offence appears to have occurred
                and by whom, and is what actually moves the case toward a Magistrate or Sessions
                Court.
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
          <h2 className={sectionHeading}>Why the 14-day rule matters more than most complainants realize</h2>
          <p className="text-muted-foreground leading-relaxed">
            The 14-day investigation window, explained in detail in{" "}
            <a href="https://blog.ipleaders.in/procedure-police-report-completion-investigation-crpc-1973/" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
              iPleaders' breakdown of the Section 173 CrPC procedure
            </a>
            , isn't just a bureaucratic formality — it's specifically designed to prevent
            investigations, and any custody connected to them, from dragging on without oversight.
            Courts have treated a serious failure to follow this timeline as a genuine defect, not
            a technicality, in cases where it affected an accused person's time in custody.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            For a complainant, the practical lesson is similar to the one that applies to a refused
            FIR: silence from the police isn't something you have to simply wait out. If an
            investigation seems to have stalled well past a reasonable point, following up directly
            with the investigating officer or their SHO — and escalating if needed — is a
            legitimate step, not an overreaction.
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
                  Explaining how the investigation process and timelines generally work, in plain
                  English or Urdu.
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
                  It cannot access your specific case file, contact the investigating officer, or
                  represent you — a licensed advocate should handle that.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel about an investigation — free
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
              { label: "The Procedure of Police Report on Completion of Investigation under CrPC, 1973 — iPleaders", href: "https://blog.ipleaders.in/procedure-police-report-completion-investigation-crpc-1973/" },
              { label: "Challan, Police Report and Discharge — Prosecutor General Punjab", href: "https://pg.punjab.gov.pk/challan_police_report_and_discharge" },
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
            <Link href="/journal/article/fir-status-check-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to Check FIR Status in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/how-to-get-bail-in-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to Get Bail in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/police-refuse-fir-what-to-do-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Police Refuse to Register FIR: What Can You Do?</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Trying to understand where your case stands?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel how the investigation process generally works — then follow up directly
            with the police station or your advocate.
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
