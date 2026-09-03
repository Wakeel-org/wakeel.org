import Link from "next/link";
import {
  CheckCircle2,
  ShieldAlert,
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

const framework = [
  { icon: Gavel, title: "The Police Order 2002 built a formal complaint structure", detail: "The Police Order 2002 established a chain of accountability for police misconduct — including Section 155-C, under which a case can be registered against an officer found guilty of misuse of authority, poor investigation, or misconduct, alongside Section 166(2) of the Pakistan Penal Code for faulty investigations specifically." },
  { icon: Users, title: "Escalate up the chain before going outside it", detail: "The standard escalation path starts with the SHO (Station House Officer) directly involved, then moves up to the CCPO or DPO (City/District Police Officer) if the SHO doesn't act — most complaints are meant to be resolved at this internal level before external bodies get involved." },
  { icon: ShieldAlert, title: "Public Safety Commissions exist to check the police", detail: "The Police Order 2002 created District and Provincial Public Safety and Police Complaints Commissions — bodies specifically designed to receive and act on complaints against police officers, separate from the police's own internal chain of command." },
  { icon: AlertTriangle, title: "A frivolous complaint carries its own risk", detail: "The Public Safety Commission framework also allows action against a complainant if a complaint is found frivolous or vexatious — a real consideration when deciding how to document and frame a complaint against a police officer." },
];

const faqs = [
  {
    question: "How do I file a complaint against a police officer in Pakistan?",
    answer:
      "Start with the SHO of the relevant police station. If the SHO fails to act, escalate to the CCPO or DPO. For formal accountability, a complaint can also be filed with the District or Provincial Public Safety and Police Complaints Commission established under the Police Order 2002.",
  },
  {
    question: "What law governs police accountability in Pakistan?",
    answer:
      "The Police Order 2002 is the primary framework, including Section 155-C for registering a case against an officer for misuse of authority or misconduct, alongside Section 166(2) of the Pakistan Penal Code for faulty or biased investigations specifically.",
  },
  {
    question: "What can a Public Safety Commission actually do?",
    answer:
      "It can receive and act on complaints against police officers independently of the police's own chain of command — a check specifically built into the Police Order 2002 to give citizens a route outside the department itself.",
  },
  {
    question: "Can I get in trouble for filing a complaint against the police?",
    answer:
      "If a complaint is found frivolous or vexatious, the Public Safety Commission can direct action against the complainant under the law — which is why a complaint should be backed by genuine facts and documentation rather than filed casually.",
  },
  {
    question: "Can Wakeel.org help me file a complaint against a police officer?",
    answer:
      "Wakeel.org can explain how the escalation path and Public Safety Commission process generally work and help you organize the facts. It cannot file the complaint or represent you before the Commission — a licensed advocate should handle that.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to File a Complaint Against the Police in Pakistan",
    description:
      "How to escalate a complaint against police misconduct in Pakistan — the SHO-to-CCPO chain, Section 155-C of the Police Order 2002, and the Public Safety Commissions.",
    author: { "@type": "Organization", name: "Wakeel.org" },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-09-03",
    dateModified: "2026-09-03",
    mainEntityOfPage: `${site.url}/journal/article/police-complaint-against-police-pakistan`,
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
        name: "How to File a Complaint Against the Police in Pakistan",
        item: `${site.url}/journal/article/police-complaint-against-police-pakistan`,
      },
    ],
  },
];

const keywords = [
  "complaint against police pakistan",
  "police order 2002",
  "section 155-c police order",
  "public safety commission pakistan",
  "police misconduct complaint",
  "sho ccpo complaint procedure",
].join(", ");

export default function PoliceComplaintAgainstPolicePakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="How to File a Complaint Against the Police in Pakistan"
        description="How to escalate a complaint against police misconduct in Pakistan — the SHO-to-CCPO chain, Section 155-C of the Police Order 2002, and the Public Safety Commissions."
        path="/journal/article/police-complaint-against-police-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>Legal Help · Published September 3, 2026</p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            How to File a Complaint Against the Police in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Misconduct, a refused FIR, or a poorly handled investigation — here's the actual
            accountability chain, and where it leads outside the police itself.
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
                Complain to the officer's SHO first; if that fails, escalate to the CCPO or DPO.
                For formal accountability, the{" "}
                <a href="https://archive.cpdi-pakistan.org/wp-content/uploads/2014/12/The-Police-Order-2002_Booklet.pdf" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
                  Police Order 2002
                </a>{" "}
                created <strong>District and Provincial Public Safety and Police Complaints
                Commissions</strong> that can act on complaints independently of the police chain
                of command, and{" "}
                <strong>Section 155-C</strong> allows a case to be registered against an officer
                for misuse of authority, poor investigation, or misconduct. Note: an FIR the police
                refuse to register is a separate issue, handled through Section 22-A/22-B CrPC, not
                this complaint process.
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
          <h2 className={sectionHeading}>Two different problems that get mixed up constantly</h2>
          <p className="text-muted-foreground leading-relaxed">
            "The police won't help me" usually means one of two very different things, and each has
            its own remedy. If the police are <strong>refusing to register an FIR</strong>, that's
            addressed through an application to the Ex-Officio Justice of Peace under Sections 22-A
            and 22-B of the CrPC — a quasi-judicial route, not a misconduct complaint. If the
            problem is <strong>how an officer behaved</strong> — rudeness, abuse of power, a
            deliberately sloppy investigation, demanding a bribe — that's a{" "}
            <a href="https://archive.cpdi-pakistan.org/wp-content/uploads/2014/12/The-Police-Order-2002_Booklet.pdf" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
              Police Order 2002
            </a>{" "}
            misconduct complaint through the SHO-to-CCPO chain or a Public Safety Commission.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Documentation is what actually moves either process forward: names, badge numbers where
            available, dates, and any witnesses. A complaint framed around specific, checkable facts
            is treated very differently from a general grievance — and remember that a complaint
            found frivolous can itself trigger consequences for the complainant under the same
            framework.
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
                  Explaining the escalation chain and Public Safety Commission process, and helping
                  you frame your facts clearly before you file.
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
                  It cannot file the complaint, guarantee an outcome, or represent you before a
                  Public Safety Commission — a licensed advocate should handle that.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel about a police complaint — free
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
              { label: "The Police Order 2002: An Introduction — CPDI Pakistan", href: "https://archive.cpdi-pakistan.org/wp-content/uploads/2014/12/The-Police-Order-2002_Booklet.pdf" },
              { label: "The Police Order, 2002 — full text (National Reconstruction Bureau compilation)", href: "https://khalidzafar.com/wp-content/files_mf/1527157863PoliceOrder2002.pdf" },
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
            <Link href="/journal/article/section-22a-22b-crpc-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Section 22-A/22-B CrPC: The Justice of Peace Explained</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/false-fir-pakistan-legal-remedies" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">False FIR in Pakistan: Legal Remedies</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/how-to-register-fir-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to Register an FIR in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/arrest-without-warrant-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Arrest Without Warrant in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Dealing with police misconduct?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel how the complaint process generally works — then verify with a licensed
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
