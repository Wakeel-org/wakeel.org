import Link from "next/link";
import {
  CheckCircle2,
  FileText,
  ClipboardCheck,
  HelpCircle,
  AlertTriangle,
} from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site } from "../../../src/data/marketing";
import { cardBase, eyebrow, headingGradient, sectionHeading } from "../../../src/data/theme";

const mustHave = [
  { title: "Your full details as complainant", detail: "Name, CNIC number, address, and contact number — recorded accurately. A misspelled name or wrong CNIC digit can cause real problems later when the case moves to court." },
  { title: "The exact date, time, and place of the incident", detail: "Vague timing (\"a few days ago, somewhere near the market\") weakens an FIR. Give the most precise date, time, and location you can, and say clearly if you're estimating." },
  { title: "A clear, factual description of what happened", detail: "Stick to what you directly saw, heard, or experienced, in the order it happened. Avoid guessing at motives or legal conclusions — that's for investigation and trial, not the FIR narrative." },
  { title: "Names or descriptions of the accused, if known", detail: "If you don't know the person's name, a physical description, vehicle number, or any identifying detail still belongs in the FIR — you're not required to already know who did it." },
  { title: "The section(s) of law the officer records", detail: "The Station House Officer (SHO) decides which PPC section(s) apply based on your narrative — you can ask what section was recorded and note it down, but you're not expected to cite the law yourself." },
  { title: "Your signature or thumb impression, and the FIR number", detail: "Confirm the FIR has been assigned a number and book/register reference before you leave — an unnumbered or informally noted report is not a completed FIR." },
];

const beforeYouLeave = [
  "Ask for a free certified copy of the FIR as filed — you are legally entitled to it, and it's your only independent record of exactly what was registered.",
  "Read the narrative back before you sign or give a thumb impression — check it matches what you actually said, not a shortened or altered version.",
  "Note the FIR number, the police station, and the date — you'll need these for any follow-up, including a Justice of the Peace application if things stall.",
  "If the officer records only some of what you reported, or downgrades a serious offence to a lesser one, say so on record and consider raising it with a senior officer or a lawyer promptly.",
];

const faqs = [
  {
    question: "What information is legally required to complete an FIR in Pakistan?",
    answer:
      "Section 154 of the Code of Criminal Procedure, 1898 requires the substance of the information disclosing a cognizable offence to be reduced to writing, read over to the informant, and signed by them. In practice, a properly completed FIR records the complainant's details, the date/time/place of the incident, a factual narrative, details of the accused (if known), the section(s) applied, and an FIR number.",
  },
  {
    question: "How do I know if my FIR was completed correctly?",
    answer:
      "Before leaving the station, confirm it has an assigned FIR number, that the narrative read back to you matches what you reported, and that you've received a free copy. If any of these is missing, the FIR may not be properly completed — raise it immediately rather than assuming it will be fixed later.",
  },
  {
    question: "Am I entitled to a free copy of my FIR?",
    answer:
      "Yes. Under Section 154 CrPC, the informant is entitled to a copy of the FIR free of cost. If a station refuses or asks for payment, that's worth noting and raising with a senior officer or a lawyer.",
  },
  {
    question: "What if the officer records the wrong section or leaves out details I reported?",
    answer:
      "You can point this out on the spot and ask for it to be corrected before you sign. If it's already recorded and you believe it's materially wrong or incomplete, you can approach a senior police officer, or in serious cases, apply to the Ex-Officio Justice of the Peace under Sections 22-A/22-B CrPC — the same route used when police refuse to register an FIR at all.",
  },
  {
    question: "Can Wakeel.org help me prepare before I go file an FIR?",
    answer:
      "Wakeel.org can help you organize the facts of an incident into a clear, chronological narrative, explain what a complete FIR should contain, and translate the process into plain English or Urdu. It cannot file the FIR for you, accompany you to the station, or guarantee the police record it correctly — a licensed advocate can help if the process runs into trouble.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Complete FIR Registration in Pakistan",
    description:
      "What a properly completed FIR in Pakistan must actually contain under Section 154 CrPC, and the checklist to confirm before you leave the police station.",
    author: { "@type": "Organization", name: "Wakeel.org" },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-01-20",
    dateModified: "2026-01-20",
    mainEntityOfPage: `${site.url}/journal/article/how-to-complete-fir-registration-pakistan`,
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
        name: "How to Complete FIR Registration in Pakistan",
        item: `${site.url}/journal/article/how-to-complete-fir-registration-pakistan`,
      },
    ],
  },
];

const keywords = [
  "how to complete fir registration pakistan",
  "fir registration pakistan",
  "fir checklist pakistan",
  "section 154 crpc",
  "free copy of fir pakistan",
  "fir requirements pakistan",
].join(", ");

export default function HowToCompleteFirRegistrationPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="How to Complete FIR Registration in Pakistan"
        description="What a properly completed FIR in Pakistan must actually contain under Section 154 CrPC, and the checklist to confirm before you leave the police station."
        path="/journal/article/how-to-complete-fir-registration-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>
            Legal Help · Published January 20, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            How to Complete FIR Registration in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting an FIR "registered" and getting one properly <em>completed</em> aren't always
            the same thing. Here's exactly what a complete FIR must contain, and how to check yours
            actually is one before you walk out of the station.
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
                Under <strong>Section 154 CrPC</strong>, a completed FIR records your details, the
                exact date/time/place, a clear factual narrative, details of the accused if known,
                the section(s) of law applied, and a formal <strong>FIR number</strong> — plus your
                signature or thumb impression on a narrative you've confirmed is accurate. You are
                entitled to a <strong>free copy</strong>. Confirm all of this before you leave the
                station, not after.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educate: must-have */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>What a complete FIR must actually contain</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {mustHave.map((r) => (
              <Card key={r.title} className={cardBase}>
                <CardHeader>
                  <FileText className="h-7 w-7 text-primary" />
                  <CardTitle className="text-lg">{r.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{r.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reveal: before you leave */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className={sectionHeading}>The four checks to do before you leave the station</h2>
          </div>
          <Card className={cardBase}>
            <CardContent className="p-6">
              <ul className="space-y-3">
                {beforeYouLeave.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <ClipboardCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
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
                  Helping you organize the facts of an incident into a clear, chronological
                  narrative before you go to the station, and explaining what a complete FIR should
                  contain, in plain English or Urdu.
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
                  It cannot accompany you to the station, file the FIR on your behalf, or guarantee
                  the police record it accurately — if the station pushes back, a licensed advocate
                  is the right next step.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Organize your facts with Wakeel — free
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
              { label: "Code of Criminal Procedure, 1898 — Pakistan Code (Ministry of Law and Justice)", href: "https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apaUY2Npa5lp-sg-jjjjjjjjjjjjj" },
              { label: "Section 22-A & 22-B CrPC — Punjab Advocate General's Office explainer", href: "https://advocategeneral.punjab.gov.pk/22A_22B" },
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
            <Link href="/journal/article/fir-registration-step-by-step-guide-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">FIR Registration in Pakistan: A Step-by-Step Guide</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/legal-issues-pakistan/fir-refused-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">What to Do if Police Refuse to Register an FIR</p>
              <p className="text-xs text-muted-foreground mt-1">Guide · Wakeel Journal</p>
            </Link>
            <Link href="/legal-sources" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Our Approach to Legal Sources</p>
              <p className="text-xs text-muted-foreground mt-1">How Wakeel grounds answers in Pakistani law</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>About to file an FIR?</h2>
          <p className="text-muted-foreground">
            Describe what happened and Wakeel will help you organize it into a clear narrative — so
            you walk in prepared and walk out with a properly completed FIR.
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
