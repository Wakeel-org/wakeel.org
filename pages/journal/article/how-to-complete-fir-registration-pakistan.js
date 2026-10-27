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
import { site, reviewerSchema } from "../../../src/data/marketing";
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
  "Bring your CNIC (or the informant's CNIC) and a phone number the police can reach you on.",
  "Bring a written, dated timeline of events, plus a spare copy for yourself.",
  "Bring copies of supporting evidence: photos, screenshots, CCTV clips, receipts, or the IMEI and purchase slip for a stolen phone. Keep the originals.",
  "Bring witness names and phone numbers, and vehicle registration numbers if any vehicle was involved.",
  "For injuries, bring any hospital or medical paperwork you already have.",
  "Before signing, check that names, CNIC, dates, place and the sequence of events match what you said, then confirm the FIR number and collect your free copy."
];

const faqs = [
  {
    "question": "What documents do I need to file an FIR in Pakistan?",
    "answer": "No document is legally required to report a cognizable offence, but bring your CNIC, a written timeline, copies of any evidence (photos, screenshots, receipts, IMEI for a phone), witness contacts and any medical papers. Keep the originals yourself."
  },
  {
    "question": "Can I file an FIR without a CNIC?",
    "answer": "The duty to record information about a cognizable offence doesn't depend on a CNIC. Stations usually record the informant's CNIC, though, so bring it or a copy if you can, and give whatever other identification and contact details you have."
  },
  {
    "question": "Should I attach photos or screenshots to my FIR application?",
    "answer": "Attach copies to your written application and keep the originals and digital files safe. The investigating officer may ask for originals later, and digital evidence may need to be preserved unedited."
  },
  {
    "question": "What should I check on the FIR before signing?",
    "answer": "Check that your name and CNIC are correct, the date, time and place are accurate, events are in the right order, and nothing you reported has been left out or softened. Ask for corrections before you sign. Afterwards, corrections are much harder."
  },
  {
    "question": "What if the FIR records the wrong offence or leaves details out?",
    "answer": "Point it out before signing. If it has already been registered, raise it in writing with a senior officer and give the full account to the investigating officer, who records further statements under Section 161 CrPC. A lawyer can advise on the next step."
  },
  {
    "question": "Can Wakeel.org help me prepare my FIR documents?",
    "answer": "Yes. Wakeel can turn your notes into a clear, dated account and a checklist of evidence to bring, in English or Urdu. It cannot file the FIR or check what the station records."
  }
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "FIR Checklist Pakistan: What to Bring and What to Verify Before You Sign",
    description:
      "A practical FIR checklist for Pakistan: the documents and evidence to bring, what a complete FIR must record, and what to check before you sign.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    reviewedBy: reviewerSchema,
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-01-20",
    dateModified: "2026-10-22",
    mainEntityOfPage: `${site.url}/journal/article/how-to-complete-fir-registration-pakistan`,
    citation: [
      { "@type": "CreativeWork", name: "Code of Criminal Procedure, 1898 — Pakistan Code (Ministry of Law and Justice)", url: "https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apaUY2Npa5lp-sg-jjjjjjjjjjjjj" },
      { "@type": "CreativeWork", name: "Section 22-A & 22-B CrPC — Punjab Advocate General's Office explainer", url: "https://advocategeneral.punjab.gov.pk/22A_22B" },
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
        name: "FIR Checklist Pakistan: What to Bring and What to Verify Before You Sign",
        item: `${site.url}/journal/article/how-to-complete-fir-registration-pakistan`,
      },
    ],
  },
];

const keywords = [
  "fir checklist pakistan",
  "documents required for fir pakistan",
  "what to bring to police station fir",
  "fir contents section 154",
  "check fir before signing",
  "free copy of fir"
].join(", ");

export default function HowToCompleteFirRegistrationPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="FIR Checklist Pakistan: What to Bring and What to Verify Before You Sign"
        description="A practical FIR checklist for Pakistan: the documents and evidence to bring, what a complete FIR must record, and what to check before you sign."
        path="/journal/article/how-to-complete-fir-registration-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>
            Legal Help · Published January 20, 2026 · Updated October 22, 2026 · Reviewed by Legal Team DIGIT</p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            FIR Checklist Pakistan: What to Bring and What to Verify Before You Sign
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
                station, not after. Bring your CNIC, a written timeline and copies of evidence.
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
            <h2 className={sectionHeading}>What to bring, and what to check before you sign</h2>
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
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`${sectionHeading} text-center mb-8`}>Related FIR guides</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/journal/article/how-to-register-fir-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to Register an FIR in Pakistan: Complete Guide</p>
              <p className="text-xs text-muted-foreground mt-1">Start here: the full FIR journey in one page</p>
            </Link>
            <Link href="/journal/article/fir-registration-step-by-step-guide-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">At the Police Station: What Happens When You File an FIR</p>
              <p className="text-xs text-muted-foreground mt-1">The in-person walkthrough, desk to signed copy</p>
            </Link>
            <Link href="/journal/article/what-you-must-know-fir-registration-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">FIR Myths vs Facts in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Misconceptions corrected, rights listed</p>
            </Link>
            <Link href="/journal/article/fir-status-check-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to Check FIR Status Online in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Tracking your case after registration</p>
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
