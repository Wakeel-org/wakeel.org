import Link from "next/link";
import {
  CheckCircle2,
  Gavel,
  FileText,
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
  { icon: Gavel, title: "A 2002 amendment created a new quasi-judicial power", detail: "The Criminal Procedure (Third Amendment) Ordinance 2002 conferred an additional role on ex-officio Justices of the Peace — typically the Sessions Judge and nominated Additional Sessions Judges of a district — to entertain complaints about police inaction and issue binding directions." },
  { icon: FileText, title: "Section 22-A(6) — three specific powers", detail: "The Justice of Peace can (1) direct police to register an FIR where they've refused to, (2) direct the transfer of an investigation from one police officer to another, and (3) take note of neglect, failure, or excess committed by police in the course of their duties." },
  { icon: Scale, title: "It's quasi-judicial, not a rubber stamp", detail: "Courts have held that the Justice of Peace's function under Section 22-A(6) requires genuine application of mind — examining the record and hearing the parties before issuing a direction — not a purely administrative sign-off." },
  { icon: AlertTriangle, title: "This is the remedy for a refused FIR — not for misconduct generally", detail: "A 22-A/22-B application is specifically for getting a criminal case registered or an investigation properly redirected. General police misconduct — abuse of power, rudeness, corruption — is addressed through the Police Order 2002 complaint framework, a separate process." },
];

const faqs = [
  {
    question: "What is Section 22-A/22-B CrPC used for?",
    answer:
      "It's used to apply to an Ex-Officio Justice of the Peace — typically a Sessions Judge — when the police refuse to register an FIR, mishandle an investigation, or neglect their duties. The Justice of Peace can direct the police to register the case or transfer the investigation to a different officer.",
  },
  {
    question: "Who is the 'Justice of Peace' under this provision?",
    answer:
      "An Ex-Officio Justice of the Peace is typically the Sessions Judge, or an Additional Sessions Judge nominated for the role, in the relevant district — a role added by the Criminal Procedure (Third Amendment) Ordinance 2002.",
  },
  {
    question: "When should I file a 22-A/22-B application?",
    answer:
      "After you've tried to have police register an FIR and they've refused, delayed unreasonably, or handled the matter improperly — the application asks the Justice of Peace to direct them to act, or to transfer the investigation to another officer.",
  },
  {
    question: "Is the Justice of Peace's decision automatic or does it require a hearing?",
    answer:
      "Courts have described the function as quasi-judicial — the Justice of Peace examines the record, hears the parties, and applies independent judgment before issuing directions, rather than simply approving every application.",
  },
  {
    question: "Can Wakeel.org help me file a 22-A/22-B application?",
    answer:
      "Wakeel.org can explain how the provision generally works and what it can and can't accomplish. It cannot draft or file the application or represent you before the Justice of Peace — a licensed advocate should handle that.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Section 22-A/22-B CrPC: The Justice of Peace Explained",
    description:
      "How Sections 22-A and 22-B CrPC work in Pakistan — the Ex-Officio Justice of Peace's power to direct FIR registration and investigation transfers when police refuse to act.",
    author: { "@type": "Organization", name: "Wakeel.org" },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-09-03",
    dateModified: "2026-09-03",
    mainEntityOfPage: `${site.url}/journal/article/section-22a-22b-crpc-pakistan`,
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
        name: "Section 22-A/22-B CrPC: The Justice of Peace Explained",
        item: `${site.url}/journal/article/section-22a-22b-crpc-pakistan`,
      },
    ],
  },
];

const keywords = [
  "section 22-a 22-b crpc pakistan",
  "justice of peace fir application",
  "police refuse to register fir",
  "22a 22b application format",
  "ex officio justice of peace pakistan",
  "fir not registered legal remedy",
].join(", ");

export default function Section22a22bCrpcPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Section 22-A/22-B CrPC: The Justice of Peace Explained"
        description="How Sections 22-A and 22-B CrPC work in Pakistan — the Ex-Officio Justice of Peace's power to direct FIR registration and investigation transfers when police refuse to act."
        path="/journal/article/section-22a-22b-crpc-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>Legal Help · Published October 27, 2026</p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Section 22-A/22-B CrPC: The Justice of Peace Explained
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The provision that forces a refused FIR into court — outside the police station
            entirely.
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
                Sections 22-A and 22-B of the CrPC let a citizen apply to an{" "}
                <strong>Ex-Officio Justice of the Peace</strong> — usually the district Sessions
                Judge — when police refuse to register an FIR or mishandle an investigation. Under{" "}
                <a href="https://advocategeneral.punjab.gov.pk/22A_22B" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
                  Section 22-A(6)
                </a>
                , the Justice of Peace can direct the police to register the case, transfer the
                investigation to a different officer, or address neglect or excess by the police —
                after examining the record and hearing both sides.
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
          <h2 className={sectionHeading}>Why this provision exists — and why superior courts keep revisiting it</h2>
          <p className="text-muted-foreground leading-relaxed">
            Pakistan's Supreme Court and High Courts have repeatedly clarified the scope of Section
            22-A(6), because it sits at a sensitive intersection: it gives a judicial officer power
            to direct police action without that officer being the trial judge in the eventual
            case. Case law — including the Supreme Court's guidance summarized in{" "}
            <a href="http://nasirlawsite.com/historic/pld2016.htm" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
              PLD 2016 SC 581
            </a>{" "}
            — has repeatedly emphasized that the Justice of Peace's role is genuinely adjudicatory:
            examining whether the police's refusal to register an FIR was justified, not simply
            ordering registration on request.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            In practice, this means a well-documented application — showing the facts that
            constitute the alleged offence and the specific way police failed to act — moves faster
            and more successfully than a bare complaint that the police "aren't helping." The
            Justice of Peace is examining the merits, not simply intervening because a citizen is
            frustrated with the process.
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
                  Explaining how Sections 22-A and 22-B generally work and what facts a strong
                  application typically includes.
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
                  It cannot draft or file your application or represent you before the Justice of
                  Peace — a licensed advocate should handle that.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel about a refused FIR — free
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
              { label: "22-A & 22-B — Office of the Advocate General, Government of Punjab", href: "https://advocategeneral.punjab.gov.pk/22A_22B" },
              { label: "PLD 2016 Supreme Court 581 — on the scope of Section 22-A CrPC", href: "http://nasirlawsite.com/historic/pld2016.htm" },
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
            <Link href="/journal/article/how-to-register-fir-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to Register an FIR in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/false-fir-pakistan-legal-remedies" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">False FIR in Pakistan: Legal Remedies</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/police-complaint-against-police-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to File a Complaint Against the Police in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/writ-jurisdiction-high-courts-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Writ Jurisdiction of High Courts in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Police refusing to register your FIR?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel how the Justice of Peace process generally works — then verify with a
            licensed advocate before you file.
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
