import Link from "next/link";
import {
  CheckCircle2,
  FileText,
  Landmark,
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
  { icon: FileText, title: "It should be in writing — and specific", detail: "A rent agreement should clearly state both parties' names and contact details, a description of the property, the tenancy duration, the rent amount and due date, payment method, any rent-increase clause, and the security deposit amount." },
  { icon: Landmark, title: "Stamp duty and registration are separate steps", disc: "", detail: "The agreement is drafted under the Contract Act 1872, with stamp duty payable under the Stamp Act 1899 based on the lease value and duration, and can be registered under the Registration Act 1908 — for short (11-month) leases, registration is often optional, but it's strongly recommended for longer tenancies." },
  { icon: Scale, title: "Registration status affects your day in court", detail: "If a tenancy agreement isn't registered, the Rent Tribunal generally won't accept a tenancy dispute without the filing party first paying a penalty — reportedly around 5% of annual rent for tenants and 10% for landlords — before the case can even be heard." },
  { icon: AlertTriangle, title: "The clauses people skip are the ones that cause disputes", detail: "Who pays for what repairs, whether subletting is allowed, the exact notice period for ending the tenancy, and what happens to the deposit at move-out are the details most verbal or informal agreements never nail down — and exactly what triggers the worst landlord-tenant disputes later." },
];

const faqs = [
  {
    question: "Does a rent agreement need to be registered in Pakistan?",
    answer:
      "It depends on the lease length and province, but registration under the Registration Act 1908 is strongly recommended, especially for tenancies longer than 11 months. An unregistered agreement can mean the Rent Tribunal won't hear a dispute without a penalty being paid first.",
  },
  {
    question: "What must a rent agreement in Pakistan include?",
    answer:
      "At minimum: both parties' names and contact details, the property's description, tenancy duration, rent amount and due date, payment method, any rent-increase terms, and the security deposit amount and conditions for its return.",
  },
  {
    question: "Who pays stamp duty on a rent agreement?",
    answer:
      "Stamp duty, calculated based on the lease value and duration under the Stamp Act 1899, is usually shared between the landlord and tenant, though this can be negotiated and specified in the agreement itself.",
  },
  {
    question: "What happens if I don't have a written rent agreement?",
    answer:
      "You still have some legal protections under provincial rent laws, but without a written agreement, disputes over rent amount, deposit, or terms become much harder to prove — a written, ideally registered, agreement is your strongest evidence if something goes wrong later.",
  },
  {
    question: "Can Wakeel.org review my rent agreement?",
    answer:
      "Wakeel.org can summarize a rent agreement and flag unusual or one-sided clauses worth verifying. It cannot draft the final agreement, register it, or confirm its legal enforceability — a licensed advocate should handle that.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Rent Agreement in Pakistan: Legal Requirements",
    description:
      "What a legally sound rent agreement in Pakistan actually needs — required clauses, stamp duty, registration, and why unregistered agreements struggle in the Rent Tribunal.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-06-30",
    dateModified: "2026-06-30",
    mainEntityOfPage: `${site.url}/journal/article/rent-agreement-legal-requirements-pakistan`,
    citation: [
      { "@type": "CreativeWork", name: "Tenancy Registration in Pakistan and 8 Essentials of a Rent Agreement — Lex", url: "https://lex.com.pk/blogs/tenancy-registration-in-pakistan/" },
      { "@type": "CreativeWork", name: "How to Register Rent Deed in Pakistan — Hamza and Hamza", url: "https://hamzaandhamza.com/how-to-register-rent-deed-in-pakistan/" },
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
        name: "Rent Agreement in Pakistan: Legal Requirements",
        item: `${site.url}/journal/article/rent-agreement-legal-requirements-pakistan`,
      },
    ],
  },
];

const keywords = [
  "rent agreement pakistan legal requirements",
  "tenancy agreement registration pakistan",
  "stamp duty rent agreement pakistan",
  "rent agreement clauses pakistan",
  "unregistered rent agreement pakistan",
  "rent deed registration pakistan",
].join(", ");

export default function RentAgreementLegalRequirementsPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Rent Agreement in Pakistan: Legal Requirements"
        description="What a legally sound rent agreement in Pakistan actually needs — required clauses, stamp duty, registration, and why unregistered agreements struggle in the Rent Tribunal."
        path="/journal/article/rent-agreement-legal-requirements-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>Legal Help · Published June 30, 2026</p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Rent Agreement in Pakistan: Legal Requirements
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The clauses a rent agreement needs to actually protect you — and why skipping
            registration can come back to bite you later.
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
                A rent agreement should be in writing and cover both parties' details, the
                property description, duration, rent and payment terms, any increase clause, and
                the security deposit. Stamp duty applies under the{" "}
                <strong>Stamp Act 1899</strong>, and registering the agreement under the{" "}
                <strong>Registration Act 1908</strong> is strongly recommended for longer
                tenancies — an unregistered agreement can mean paying a penalty before a Rent
                Tribunal will even hear your dispute.
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
          <h2 className={sectionHeading}>The registration penalty most tenants and landlords don't know about</h2>
          <p className="text-muted-foreground leading-relaxed">
            Guidance from{" "}
            <a href="https://lex.com.pk/blogs/tenancy-registration-in-pakistan/" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
              Lex
            </a>{" "}
            highlights a specific consequence that surprises a lot of people: if your tenancy
            agreement was never registered, filing a rent dispute can require paying a penalty
            first — commonly cited as around 5% of annual rent for a tenant and 10% for a
            landlord — before the Rent Tribunal will even take up the case. That's on top of
            whatever the underlying dispute is actually about.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            For an 11-month lease, many people treat registration as optional and skip it,
            reasoning that a short lease doesn't need the formality. That's often true — but if a
            dispute does arise, that's exactly when the missing registration turns into an
            unexpected cost, which is worth weighing against the (usually modest) expense of
            registering the agreement upfront.
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
                  Summarizing a rent agreement and flagging clauses worth verifying, in plain
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
                  It cannot draft or register your agreement or confirm its legal enforceability —
                  a licensed advocate should handle that.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel about a rent agreement — free
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
              { label: "Tenancy Registration in Pakistan and 8 Essentials of a Rent Agreement — Lex", href: "https://lex.com.pk/blogs/tenancy-registration-in-pakistan/" },
              { label: "How to Register Rent Deed in Pakistan — Hamza and Hamza", href: "https://hamzaandhamza.com/how-to-register-rent-deed-in-pakistan/" },
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
            <Link href="/journal/article/tenant-rights-rent-law-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Tenant Rights Under Pakistan's Rent Laws</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/draft-legal-contract-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to Draft a Legal Contract in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/property-power-of-attorney-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Property Power of Attorney in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/property-dispute-lawyer-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Property Dispute Lawyer in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Drafting or reviewing a rent agreement?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel to help you understand it — then get a licensed advocate to finalize and,
            where needed, register it.
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
