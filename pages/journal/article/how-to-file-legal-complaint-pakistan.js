import Link from "next/link";
import {
  CheckCircle2,
  ShieldAlert,
  Handshake,
  Wifi,
  Briefcase,
  ScrollText,
  Building2,
  HelpCircle,
  AlertTriangle,
} from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site } from "../../../src/data/marketing";
import { cardBase, eyebrow, headingGradient, sectionHeading } from "../../../src/data/theme";

const routes = [
  {
    icon: ShieldAlert,
    title: "A crime happened to you or someone else",
    detail: "Report it to the police station with jurisdiction, so an FIR can be registered under Section 154 CrPC. If they refuse, you can apply to the Ex-Officio Justice of the Peace under Sections 22-A/22-B CrPC, or file a private complaint directly before a Magistrate under Section 200 CrPC.",
    link: { href: "/journal/article/how-to-register-fir-pakistan", label: "How to Register an FIR in Pakistan" },
  },
  {
    icon: Handshake,
    title: "A product, service, or business dealing wronged you",
    detail: "Provincial Consumer Protection Acts give you a dedicated Consumer Court, generally faster and less formal than an ordinary civil suit, for complaints against a seller or service provider.",
    link: { href: "/journal/article/consumer-complaint-pakistan", label: "How to File a Consumer Complaint in Pakistan" },
  },
  {
    icon: Wifi,
    title: "You were defrauded, hacked, or harassed online",
    detail: "Cybercrime — including online fraud, harassment, and hacking — is reported to the National Cyber Crime Investigation Agency (NCCIA, formerly the FIA's Cyber Crime Wing) under the Prevention of Electronic Crimes Act (PECA) 2016.",
    link: { href: "/journal/article/nccia-cyber-crime-complaint-pakistan", label: "How to File a Cyber Crime Complaint in Pakistan" },
  },
  {
    icon: Briefcase,
    title: "Your employer terminated you unfairly or withheld your dues",
    detail: "Raise a written grievance with your employer first; if it's unresolved, the matter can go to the relevant Labour Court or the National Industrial Relations Commission under the Industrial Relations Act 2012 or your province's equivalent.",
    link: { href: "/journal/article/wrongful-termination-pakistan", label: "Wrongful Termination in Pakistan: Know Your Rights" },
  },
  {
    icon: ScrollText,
    title: "You have a civil dispute — property, contract, or money owed",
    detail: "This runs through an ordinary civil suit under the Code of Civil Procedure, 1908, filed in the civil court with the right pecuniary and territorial jurisdiction.",
    link: { href: "/journal/article/civil-suit-pakistan", label: "How to File a Civil Suit in Pakistan" },
  },
  {
    icon: Building2,
    title: "A government department or public official failed you",
    detail: "Complaints against federal government maladministration can go to the Wafaqi Mohtasib (Federal Ombudsman); each province also has its own Ombudsman for provincial departments. For a genuine failure of legal duty, a High Court writ petition under Article 199 is a further option.",
    link: { href: "/journal/article/writ-jurisdiction-high-courts-pakistan", label: "Writ Jurisdiction of High Courts in Pakistan Explained" },
  },
];

const steps = [
  "Identify the right category first — criminal, consumer, cyber, labour, civil, or against a public authority — since each has its own forum and rules, and filing in the wrong one wastes time you may not get back.",
  "Collect and date your evidence before you file: written communications, receipts, screenshots, photos, and a plain factual timeline of what happened and when.",
  "Check whether a mandatory first step applies — a written grievance to an employer, a demand notice, or a report to the police — before you can approach a court or tribunal.",
  "Confirm the applicable deadline. Criminal, civil, labour, and consumer complaints each have their own limitation periods, and some (like a labour grievance) are counted in days, not months.",
  "Where the stakes are meaningful — money, liberty, employment, property — get a licensed advocate to review your facts and draft the actual complaint or petition rather than relying on a template alone.",
];

const faqs = [
  {
    question: "How do I know which forum to file my complaint with in Pakistan?",
    answer:
      "Start with what kind of wrong occurred: a crime goes to the police (FIR) or, if refused, to a Magistrate; a consumer dispute goes to the provincial Consumer Court; a cybercrime goes to the NCCIA under PECA 2016; an employment dispute goes through your employer's grievance process and then the Labour Court; a general civil dispute goes to the civil court under the CPC 1908; and a complaint against a government department can go to the relevant Ombudsman or, in appropriate cases, a High Court writ petition.",
  },
  {
    question: "Is there a general complaint law that covers everything in Pakistan?",
    answer:
      "No — there's no single \"file a complaint\" statute. Each category of dispute (criminal, consumer, cyber, labour, civil, administrative) has its own governing law, forum, and procedure, which is exactly why identifying the right category first matters more than any generic complaint template.",
  },
  {
    question: "What happens if I file my complaint with the wrong authority?",
    answer:
      "At best, you'll be told to refile elsewhere, losing time. At worst, a limitation deadline can pass while your complaint sits with the wrong forum. Some laws do allow transfer or forwarding to the correct authority, but you shouldn't rely on that — verify the right forum before you file.",
  },
  {
    question: "Do I need a lawyer to file a complaint in Pakistan?",
    answer:
      "Not always — consumer complaints and some Ombudsman complaints are designed to be filed without one. But for anything with real financial, employment, or liberty consequences — a civil suit, an FIR-related dispute, a wrongful termination claim, a writ petition — a licensed advocate's review before you file materially improves your chances of it being heard on the merits rather than rejected on a technicality.",
  },
  {
    question: "Can Wakeel.org help me figure out how to file a complaint?",
    answer:
      "Wakeel.org can help you identify the likely category and forum for your situation, explain the general process in plain English or Urdu, and help you organize your facts and evidence before you file or see a lawyer. It cannot file the complaint for you, guarantee it will be accepted, or replace a licensed advocate's judgment on your specific facts.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to File a Legal Complaint in Pakistan: Step-by-Step Guide",
    description:
      "A practical map of where to file a legal complaint in Pakistan depending on what happened — criminal, consumer, cyber, labour, civil, or against a public authority — plus the steps that apply across all of them.",
    author: { "@type": "Organization", name: "Wakeel.org" },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-05-04",
    dateModified: "2026-05-04",
    mainEntityOfPage: `${site.url}/journal/article/how-to-file-legal-complaint-pakistan`,
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
        name: "How to File a Legal Complaint in Pakistan",
        item: `${site.url}/journal/article/how-to-file-legal-complaint-pakistan`,
      },
    ],
  },
];

const keywords = [
  "how to file a legal complaint in pakistan",
  "file a complaint pakistan",
  "consumer complaint pakistan",
  "cyber crime complaint pakistan",
  "labour complaint pakistan",
  "ombudsman complaint pakistan",
  "wafaqi mohtasib complaint",
].join(", ");

export default function HowToFileLegalComplaintPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="How to File a Legal Complaint in Pakistan: Step-by-Step Guide"
        description="Where to file a legal complaint in Pakistan depending on what happened — criminal, consumer, cyber, labour, civil, or against a public authority — plus the steps that apply across all of them."
        path="/journal/article/how-to-file-legal-complaint-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>
            Legal Help · Published May 4, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            How to File a Legal Complaint in Pakistan: Step-by-Step Guide
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            There's no single "file a complaint" button in Pakistani law — the right forum depends
            entirely on what actually happened to you. Here's how to find it, and the steps that
            matter no matter which one applies.
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
                Which forum you use depends on the type of wrong: <strong>crime</strong> → police
                FIR or a Magistrate; <strong>consumer</strong> dispute → provincial Consumer Court;{" "}
                <strong>cybercrime</strong> → NCCIA under PECA 2016; <strong>employment</strong>{" "}
                dispute → employer grievance, then Labour Court; general <strong>civil</strong>{" "}
                dispute → civil court under the CPC 1908; <strong>government/public authority</strong>{" "}
                failure → Ombudsman or a High Court writ petition. Identify the category first,
                collect your evidence, check any mandatory first step and deadline, then file.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educate: routes */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>Find your situation, find your forum</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {routes.map((r) => {
              const Icon = r.icon;
              return (
                <Card key={r.title} className={cardBase}>
                  <CardHeader>
                    <Icon className="h-7 w-7 text-primary" />
                    <CardTitle className="text-lg">{r.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground leading-relaxed">{r.detail}</p>
                    <Link href={r.link.href} className="text-sm font-medium text-primary hover:underline inline-block">
                      {r.link.label} →
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reveal: steps that apply everywhere */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className={sectionHeading}>What matters no matter which forum applies</h2>
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
                  Helping you identify the likely category and forum for your situation, explaining
                  the general process in plain English or Urdu, and helping you organize your facts
                  and evidence before you file or see a lawyer.
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
                  It cannot file the complaint for you, guarantee it will be accepted, or confirm
                  the exact deadline and forum for your specific facts — verify these with a
                  licensed advocate before you file.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel where to file your complaint — free
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

      {/* Related reading */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`${sectionHeading} text-center mb-8`}>Related reading</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/journal/article/how-to-register-fir-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to Register an FIR in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/consumer-complaint-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to File a Consumer Complaint in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/civil-law-in-pakistan-guide" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Civil Law in Pakistan: Complete Guide</p>
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
          <h2 className={sectionHeading}>Not sure where to start?</h2>
          <p className="text-muted-foreground">
            Describe what happened, in English or Urdu, and Wakeel will help you figure out the
            right forum — then confirm the details with a licensed advocate.
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
