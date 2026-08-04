import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Plane,
  Landmark,
  Scale,
  HelpCircle,
  AlertTriangle,
  ListChecks,
  Search,
} from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site } from "../../../src/data/marketing";
import { cardBase, headingGradient, sectionHeading } from "../../../src/data/theme";

const facts = [
  {
    icon: Landmark,
    title: "What the ECL actually is",
    detail:
      "The Exit Control List (ECL) is a government-maintained list of individuals barred from leaving Pakistan, operated under the Exit from Pakistan (Control) Ordinance 1981. Names are placed on it by the federal government, typically at the request of an investigating agency, court, or ministry, usually in connection with a pending criminal case, financial default, or an ongoing investigation.",
  },
  {
    icon: Scale,
    title: "Who can place a name on the ECL",
    detail:
      "Placement is a federal government decision, but it's usually triggered by a request from an agency like FIA, NAB, or a court in the context of a specific pending case — it isn't something a private individual or company can request directly. Courts have also, in various cases, ordered placement or removal as part of proceedings before them.",
  },
  {
    icon: Search,
    title: "How to check if you're on the ECL",
    detail:
      "The most reliable way to check is to attempt travel and see if you're stopped at immigration, but that's obviously not something to rely on — a better approach is checking with the relevant investigating agency or your lawyer, since ECL status is tied to a specific case file. If you know you're involved in litigation, an investigation, or a loan default matter, ask directly whether an ECL request has been made.",
  },
  {
    icon: ListChecks,
    title: "Getting your name removed",
    detail:
      "Removal typically requires either resolving the underlying matter (case closure, loan settlement, investigation conclusion) or petitioning the relevant High Court for removal, arguing the placement was unwarranted or that circumstances have changed. Courts have removed names from the ECL in various cases where continued placement wasn't justified by the facts — but this is fact-specific and requires proper legal argument.",
  },
  {
    icon: AlertTriangle,
    title: "Why this matters more than people expect",
    detail:
      "Being placed on the ECL without knowing it — discovered only at the airport, often with travel already booked — is a genuinely common and disruptive experience. If you're involved in a significant financial dispute, loan default, or criminal investigation, it's worth proactively checking your status well before you plan to travel.",
  },
];

const faqs = [
  {
    question: "What is the Exit Control List (ECL) in Pakistan?",
    answer:
      "The ECL is a list maintained by the federal government under the Exit from Pakistan (Control) Ordinance 1981 that bars named individuals from leaving the country, usually in connection with a pending criminal case, financial default, or investigation. Placement is a federal decision, typically requested by an investigating agency or ordered in relation to a specific case.",
  },
  {
    question: "How do I check if my name is on the ECL?",
    answer:
      "There's no simple public self-check tool for ECL status. The most reliable approach is to ask the investigating agency or court connected to any case you're involved in, or have a lawyer make inquiries on your behalf, since ECL placement is tied to a specific case file rather than a general database you can search independently.",
  },
  {
    question: "How can I get my name removed from the ECL?",
    answer:
      "Removal usually follows either resolution of the underlying matter — the case closing, a loan being settled, or an investigation concluding — or a petition to the relevant High Court arguing the placement is no longer justified. This requires proper legal representation, since courts weigh the specific facts and the agency's stated reasons for placement.",
  },
  {
    question: "Can I be placed on the ECL without being told?",
    answer:
      "In practice, many people only discover they're on the ECL when stopped at immigration while trying to travel, since there isn't always a direct personal notification at the time of placement. This is exactly why it's worth proactively checking your status through a lawyer if you're involved in any significant pending case, dispute, or investigation before you book travel.",
  },
  {
    question: "Can Wakeel.org help me with an ECL issue?",
    answer:
      "Wakeel.org can explain how ECL placement and removal generally work, help you organize the facts of your case to discuss with a lawyer, and summarize any court order or notice related to your matter in plain English or Urdu. It cannot check your ECL status, place or remove a name, or represent you before a court — that requires direct legal representation.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The Exit Control List (ECL) in Pakistan: What It Means",
    description:
      "What the Exit Control List is under the Exit from Pakistan (Control) Ordinance 1981, who can place a name on it, how to check your status, and the removal process.",
    author: { "@type": "Organization", name: "Wakeel.org" },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-08-04",
    dateModified: "2026-08-04",
    mainEntityOfPage: `${site.url}/journal/article/exit-control-list-ecl-pakistan`,
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
        name: "The Exit Control List (ECL) in Pakistan",
        item: `${site.url}/journal/article/exit-control-list-ecl-pakistan`,
      },
    ],
  },
];

const keywords = [
  "ecl in pakistan",
  "exit control list pakistan",
  "how to check ecl status pakistan",
  "remove name from ecl pakistan",
  "exit from pakistan control ordinance 1981",
].join(", ");

export default function ExitControlListEclPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="The Exit Control List (ECL) in Pakistan"
        description="What the Exit Control List is under the 1981 Ordinance, who can place a name on it, how to check status, and the removal process."
        path="/journal/article/exit-control-list-ecl-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Legal Help · Published August 4, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            The Exit Control List (ECL) in Pakistan: What It Means
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Finding out you're on the ECL at the immigration counter, boarding pass in hand, is
            one of the more stressful ways to learn about a pending legal matter. Here's what the
            list actually is and what you can do about it.
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
                The ECL is maintained under the <strong>Exit from Pakistan (Control) Ordinance
                1981</strong> and bars named individuals from leaving the country, usually
                connected to a pending case, investigation, or financial default. Names are placed
                by the federal government, typically at an investigating agency or court's
                request. There's no simple public self-check — ask your lawyer or the relevant
                agency directly if you're involved in a significant pending matter, and consider
                doing this before you book travel, not after.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Facts */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>What you need to know</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {facts.map((f) => {
              const Icon = f.icon;
              return (
                <Card key={f.title} className={cardBase}>
                  <CardHeader>
                    <Icon className="h-7 w-7 text-primary" />
                    <CardTitle className="text-lg">{f.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.detail}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How Wakeel helps / can't do */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-6">
            <Card className={cardBase}>
              <CardHeader>
                <CheckCircle2 className="h-6 w-6 text-primary" />
                <CardTitle className="text-lg">What Wakeel.org can help with</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Explaining how ECL placement and removal generally work, helping you organize
                  your case facts before a lawyer consultation, and summarizing a related court
                  order or notice in plain English or Urdu.
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
                  It cannot check your ECL status, place or remove a name, or represent you before
                  a court — ECL matters require direct legal representation.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Organize your case facts with Wakeel Free
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background py-16 sm:py-20">
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
            General educational information, not legal advice. ECL placement and removal are
            fact-specific and depend on the agency, court, and case involved — consult a licensed
            advocate directly. See our{" "}
            <Link href="/disclaimer" className="text-primary hover:underline">full disclaimer</Link>.
          </p>
        </div>
      </section>

      {/* Related reading */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`${sectionHeading} text-center mb-8`}>Related reading</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/journal/article/civil-suit-pakistan"
              className={`group ${cardBase} block rounded-lg p-5 bg-card`}
            >
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                How to File a Civil Suit in Pakistan
              </p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link
              href="/journal/article/section-420-ppc-fraud-pakistan"
              className={`group ${cardBase} block rounded-lg p-5 bg-card`}
            >
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                Section 420 PPC: Fraud and Cheating in Pakistan
              </p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link
              href="/journal/legal-issues-pakistan/court-procedures-pakistan"
              className={`group ${cardBase} block rounded-lg p-5 bg-card`}
            >
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                Court Procedures in Pakistan
              </p>
              <p className="text-xs text-muted-foreground mt-1">Guide · Wakeel Journal</p>
            </Link>
            <Link href="/citizens" className={`group ${cardBase} block rounded-lg p-5 bg-card`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                Wakeel.org for Citizens
              </p>
              <p className="text-xs text-muted-foreground mt-1">How Wakeel helps everyday legal problems</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Not sure about your travel status?</h2>
          <p className="text-muted-foreground">
            If you're involved in a pending case or dispute, get organized before you book
            travel — not after you're stopped at the airport.
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
