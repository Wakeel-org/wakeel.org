import Link from "next/link";
import {
  CheckCircle2,
  Search,
  Smartphone,
  MapPin,
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
  { icon: Smartphone, title: "Every province runs its own portal", detail: "Pakistan doesn't have one single national website for checking an FIR. Punjab, Sindh, Khyber Pakhtunkhwa, and Islamabad each run their own system, so the first thing to figure out is which province registered your FIR." },
  { icon: MapPin, title: "Punjab: the CMS portal and the Punjab Police App", detail: "In Punjab, FIRs can be checked on the Punjab Police CMS portal (cms.punjabpolice.gov.pk) or through the official Punjab Police App, both linked to the Criminal Record Management System (CRMS)." },
  { icon: Search, title: "Sindh: the Complaint Management System", detail: "In Sindh, complaints and FIRs are tracked through the Sindh Police IGP Complaint Management System — you'll need your CNIC and a tracking or complaint number to see the status." },
  { icon: AlertTriangle, title: "What you'll always need: your CNIC number", detail: "Across every provincial system, the CNIC number of the complainant (typed without dashes or spaces) is the key piece of information the portal uses to pull up FIR details — date registered, police station, and current status." },
];

const steps = [
  "Identify which province registered your FIR — Punjab, Sindh, Khyber Pakhtunkhwa, and Islamabad each run separate systems, so there's no single national portal to check.",
  "Go to that province's official portal or app — for example, the Punjab Police CMS portal (cms.punjabpolice.gov.pk) or Punjab Police App, or the Sindh Police IGP Complaint Management System.",
  "Enter your CNIC number, typed without dashes or spaces — this is the key detail every provincial system uses to pull up FIR details.",
  "Review the status shown — date registered, police station, and current stage — but treat it as a first check, not the full picture of what's happening in the investigation.",
  "If progress seems genuinely stalled rather than just slow to update online, follow up directly with the investigating officer or SHO, or call the Police Helpline 15 — that's a different problem with its own remedy, not something the status portal can fix.",
];

const faqs = [
  {
    question: "How can I check my FIR status online in Pakistan?",
    answer:
      "Visit your province's official police portal — for Punjab, cms.punjabpolice.gov.pk or the Punjab Police App; for Sindh, the Sindh Police IGP Complaint Management System. Enter your CNIC number where asked, and the portal will show the FIR's registration date, police station, and current status.",
  },
  {
    question: "What do I need to check an FIR online?",
    answer:
      "Mainly your CNIC number, exactly as it appears on your card but typed without dashes. Some portals may also ask for a case or tracking number, which you'd have received when the FIR was registered.",
  },
  {
    question: "What if I can't find my FIR online?",
    answer:
      "Portals aren't always instantly updated, and coverage can vary by district. If the online system doesn't show your FIR, call the Police Helpline 15, or visit the police station where it was registered and ask directly for the case status.",
  },
  {
    question: "Is there one website for checking FIRs anywhere in Pakistan?",
    answer:
      "No — each province (Punjab, Sindh, Khyber Pakhtunkhwa, Islamabad) runs its own separate FIR/complaint tracking system, so you need to use the portal for the province where the FIR was actually registered.",
  },
  {
    question: "Can Wakeel.org check my FIR status for me?",
    answer:
      "No. Wakeel.org can explain which portal to use and what information you'll need, but it cannot access police databases or check a specific FIR on your behalf — that has to be done directly through the relevant police portal, helpline, or station.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Check FIR Status in Pakistan",
    description:
      "A simple guide to checking your FIR status online in Pakistan — which portal to use for Punjab, Sindh, and other provinces, and what information you need.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-09-03",
    dateModified: "2026-09-03",
    mainEntityOfPage: `${site.url}/journal/article/fir-status-check-pakistan`,
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to check your FIR status online in Pakistan",
    step: steps.map((s, i) => ({ "@type": "HowToStep", name: `Step ${i + 1}`, text: s })),
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
        name: "How to Check FIR Status in Pakistan",
        item: `${site.url}/journal/article/fir-status-check-pakistan`,
      },
    ],
  },
];

const keywords = [
  "check fir status online pakistan",
  "fir status by cnic",
  "punjab police cms fir check",
  "sindh police fir status",
  "track fir online pakistan",
  "fir verification pakistan",
].join(", ");

export default function FirStatusCheckPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="How to Check FIR Status in Pakistan"
        description="A simple guide to checking your FIR status online in Pakistan — which portal to use for Punjab, Sindh, and other provinces, and what information you need."
        path="/journal/article/fir-status-check-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>Legal Help · Published September 3, 2026</p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            How to Check FIR Status in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            You don't need to visit the police station every time. Here's how to check an FIR
            online, in plain steps.
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
                Go to your province's official police portal — in Punjab that's{" "}
                <a href="https://cms.punjabpolice.gov.pk" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
                  cms.punjabpolice.gov.pk
                </a>{" "}
                or the Punjab Police App; in Sindh it's the{" "}
                <strong>IGP Complaint Management System</strong>. Enter your <strong>CNIC
                number</strong> (no dashes) in the FIR-check field, and it will show the
                registration date, police station, and current status. If it doesn't show up
                online, call <strong>Police Helpline 15</strong> or ask at the station directly.
                This is meant as a plain-language guide — always double-check the exact steps on
                the official portal itself, since interfaces occasionally change.
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

      {/* Reveal: procedure steps */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>How to check your FIR status, step by step</h2>
          </div>
          <Card className={cardBase}>
            <CardContent className="p-6">
              <ol className="space-y-3">
                {steps.map((step, i) => (
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

      {/* Reveal: prose with inline sources */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <h2 className={sectionHeading}>Why the status you see online isn't always the full picture</h2>
          <p className="text-muted-foreground leading-relaxed">
            An FIR going through <strong>"under investigation"</strong> on a portal doesn't tell
            you much about what's actually happening behind that status — whether the
            investigating officer has visited the scene, recorded statements, or is simply
            waiting on a forensic report. The online portal is a useful first check, described in
            detail by{" "}
            <a href="https://islamabadpolice.gov.pk/copy_fir.php" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
              Islamabad Police's own FIR copy service
            </a>{" "}
            and similar provincial systems, but it's not a substitute for actually following up
            with the investigating officer or the SHO if progress feels slow.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            If you're the complainant and progress genuinely seems stalled, that's a different
            problem from "I can't find my FIR online" — and it has its own remedy through the
            police complaint escalation process, not the status-check portal.
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
                  Explaining which portal applies to you and what information you'll need, in
                  plain English or Urdu.
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
                  It cannot access police databases or look up your specific FIR — that has to be
                  done through the official portal, helpline, or station.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel about your FIR — free
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
          <p className="text-sm text-muted-foreground mb-4">
            This guide explains the general process in simple terms. For the exact, up-to-date
            steps, always use the official portals below — they're the authentic record, not this
            summary.
          </p>
          <ul className="space-y-2">
            {[
              { label: "Punjab Police — Criminal Record Management System (CMS)", href: "https://cms.punjabpolice.gov.pk" },
              { label: "Islamabad Police — Copy of FIR service", href: "https://islamabadpolice.gov.pk/copy_fir.php" },
              { label: "PITB — Electronic FIR (e-FIR) system", href: "https://pitb.gov.pk/efir" },
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
            <Link href="/journal/article/false-fir-pakistan-legal-remedies" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">False FIR in Pakistan: Legal Remedies</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Trying to track an FIR?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel which portal to use — then confirm the details directly on the official
            police website.
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
