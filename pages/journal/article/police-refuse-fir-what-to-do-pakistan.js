import Link from "next/link";
import {
  CheckCircle2,
  FileText,
  Gavel,
  Users,
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
  { icon: FileText, title: "Step 1 — Write down what happened, in order", detail: "Before going back to the station, note the date and time you tried to report the offence, who you spoke to, and exactly what they said. If the police wrote anything on paper and returned it to you, keep it — even an informal note helps." },
  { icon: Users, title: "Step 2 — Go over the SHO's head, in writing", detail: "If the duty officer refuses, submit a written application addressed to the SHO (Station House Officer) himself, and keep a signed, dated copy or receipt. If the SHO also refuses or ignores it, the next step is the Superintendent of Police (SP) or DPO for that district — again in writing." },
  { icon: Gavel, title: "Step 3 — Apply to the Justice of Peace (Section 22-A/22-B CrPC)", detail: "If the police still won't register the case, the law gives you a direct route around them: an application to the district's Ex-Officio Justice of the Peace (usually the Sessions Judge), who has the power to order the police to register your FIR." },
  { icon: AlertTriangle, title: "Step 4 — Keep every document you generate", detail: "Copies of your written applications, any receipts, and the eventual court order (if you go the Justice of Peace route) all matter — not just to get the FIR registered, but as your record if the case is questioned later." },
];

const faqs = [
  {
    question: "What can I do if the police refuse to register my FIR?",
    answer:
      "First put your complaint in writing to the SHO. If that doesn't work, escalate in writing to the SP or DPO. If police still refuse, you can apply to the district's Ex-Officio Justice of the Peace under Sections 22-A and 22-B of the CrPC, who has the legal power to direct the police to register the FIR.",
  },
  {
    question: "Do I need a lawyer to apply to the Justice of Peace?",
    answer:
      "It's strongly recommended. While the law doesn't require you to have a lawyer, an application to the Justice of Peace needs to lay out the facts clearly enough for the judge to be satisfied that an offence has occurred — a lawyer significantly improves the odds it's accepted.",
  },
  {
    question: "How long does it take to get an FIR registered through the Justice of Peace?",
    answer:
      "It varies by court and how contested the matter is, but this route is generally faster than most alternatives specifically because it was designed to force quick police action — courts handling these applications typically move them along without long delays.",
  },
  {
    question: "Can the police be punished for refusing to register an FIR without a good reason?",
    answer:
      "Yes — under the Police Order 2002, a case can be registered against an officer for misconduct, including refusing a legitimate complaint, separately from the Justice of Peace process that gets your own FIR registered.",
  },
  {
    question: "Can Wakeel.org help me if police refuse to register my FIR?",
    answer:
      "Wakeel.org can explain the escalation steps and what a Justice of Peace application generally involves, in plain English or Urdu. It cannot draft or file the application, or represent you in front of a judge — a licensed advocate should handle that.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Police Refuse to Register FIR: What Can You Do?",
    description:
      "A plain-language, step-by-step guide for what to do when police in Pakistan refuse to register your FIR — escalating to the SHO, the SP, and the Justice of Peace.",
    author: { "@type": "Organization", name: "Wakeel.org" },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-11-19",
    dateModified: "2026-11-19",
    mainEntityOfPage: `${site.url}/journal/article/police-refuse-fir-what-to-do-pakistan`,
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
        name: "Police Refuse to Register FIR: What Can You Do?",
        item: `${site.url}/journal/article/police-refuse-fir-what-to-do-pakistan`,
      },
    ],
  },
];

const keywords = [
  "police refuse to register fir pakistan",
  "what to do if fir not registered",
  "fir not lodged police station",
  "justice of peace fir application",
  "how to force police to register fir",
  "22a 22b crpc application",
].join(", ");

export default function PoliceRefuseFirWhatToDoPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Police Refuse to Register FIR: What Can You Do?"
        description="A plain-language, step-by-step guide for what to do when police in Pakistan refuse to register your FIR — escalating to the SHO, the SP, and the Justice of Peace."
        path="/journal/article/police-refuse-fir-what-to-do-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>Legal Help · Published November 19, 2026</p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Police Refuse to Register FIR: What Can You Do?
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The law doesn't leave you stuck if a police station won't file your complaint. Here's
            the exact path around them, step by step.
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
                First, put your complaint in <strong>writing</strong> and submit it to the SHO,
                keeping a signed copy. If that doesn't work, escalate — again in writing — to the
                <strong> SP or DPO</strong>. If the police still refuse, you can go directly to the
                district's <strong>Ex-Officio Justice of the Peace</strong> under Sections 22-A and
                22-B of the CrPC, who has the legal authority to order the police to register your
                FIR. This is a real, working legal remedy — you are not required to simply accept
                a refusal.
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
          <h2 className={sectionHeading}>Why writing things down matters more than arguing at the counter</h2>
          <p className="text-muted-foreground leading-relaxed">
            A verbal argument at the police station leaves no trail. A written application does —
            and Pakistani courts have repeatedly treated the Justice of Peace process, under{" "}
            <a href="https://advocategeneral.punjab.gov.pk/22A_22B" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
              Sections 22-A and 22-B of the CrPC
            </a>
            , as a genuinely adjudicatory process: the judge examines whether your facts support
            registering the FIR, not whether you were polite enough at the station. A written
            record of your earlier attempts — dates, names, what was said — makes that application
            far stronger.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            One important thing to know going in: the Justice of Peace decides whether the police
            should register a case and investigate — not whether the person you're accusing is
            guilty. That's a separate question decided later, if the case proceeds. This route
            exists to unblock the process, not to fast-track a conviction.
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
                  Explaining these escalation steps clearly and helping you organize your facts
                  and dates before you write anything down.
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
                  It cannot draft or file your Justice of Peace application or represent you in
                  court — a licensed advocate should handle that.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel what to do next — free
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
              { label: "22-A & 22-B — Office of the Advocate General, Government of Punjab", href: "https://advocategeneral.punjab.gov.pk/22A_22B" },
              { label: "The Police Order 2002: An Introduction — CPDI Pakistan", href: "https://archive.cpdi-pakistan.org/wp-content/uploads/2014/12/The-Police-Order-2002_Booklet.pdf" },
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
            <Link href="/journal/article/section-22a-22b-crpc-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Section 22-A/22-B CrPC: The Justice of Peace Explained</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/how-to-register-fir-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to Register an FIR in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/fir-status-check-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to Check FIR Status in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/police-complaint-against-police-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to File a Complaint Against the Police in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Police won't register your FIR?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel to walk you through the escalation steps — then verify with a licensed
            advocate before you file.
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
