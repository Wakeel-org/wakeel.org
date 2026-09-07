import Link from "next/link";
import {
  CheckCircle2,
  Home,
  Landmark,
  Send,
  HelpCircle,
  AlertTriangle,
} from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site } from "../../../src/data/marketing";
import { cardBase, eyebrow, headingGradient, sectionHeading } from "../../../src/data/theme";

const sections = [
  { icon: Home, title: "Parties and property description", detail: "Full names and contact details of the landlord and tenant, and a precise description of the property — address, size, and any fixtures or furnishings included." },
  { icon: Landmark, title: "Rent, deposit, and duration terms", detail: "The tenancy period, rent amount, due date, payment method, any rent-increase clause, and the security deposit amount and conditions for its return at move-out." },
  { icon: Send, title: "Rights, obligations, and notice period", detail: "Who's responsible for what repairs, whether subletting is allowed, and the notice period required to end the tenancy — the details most informal agreements leave dangerously vague." },
  { icon: AlertTriangle, title: "Stamp duty and registration", detail: "The agreement should note stamp duty (payable under the Stamp Act 1899, based on lease value and duration) and, for longer tenancies, registration under the Registration Act 1908 — skipping this can mean paying a penalty before a Rent Tribunal will hear a dispute." },
];

const faqs = [
  {
    question: "What should a rent agreement format in Pakistan include?",
    answer:
      "Landlord and tenant details, a precise property description, rent amount and payment terms, the security deposit, tenancy duration, repair and subletting terms, the notice period to end the tenancy, and stamp duty/registration details.",
  },
  {
    question: "Do I need to register a rent agreement in Pakistan?",
    answer:
      "It depends on the lease length, but registration under the Registration Act 1908 is strongly recommended for longer tenancies — an unregistered agreement can mean paying a penalty before a Rent Tribunal will accept a dispute.",
  },
  {
    question: "Is a downloaded rent agreement template safe to use as-is?",
    answer:
      "It's a reasonable starting structure, but generic templates often miss province-specific details (Punjab, Sindh, KP, and Balochistan each have their own rent laws) — the specific clauses should be checked against the law that applies to your property's location.",
  },
  {
    question: "Can Wakeel.org generate a rent agreement for me?",
    answer:
      "Yes — describe the property, the rent terms, and the parties involved, and Wakeel can put together a first draft covering the standard sections. Have a lawyer review it before signing, and confirm the stamp duty and registration requirements for your specific province.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Rent Agreement Format in Pakistan",
    description:
      "The standard structure of a rent agreement in Pakistan — parties, terms, notice period, and stamp duty/registration — plus how to generate a first draft with Wakeel.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-06-08",
    dateModified: "2026-06-08",
    mainEntityOfPage: `${site.url}/journal/article/rent-agreement-format-pakistan`,
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
        name: "Rent Agreement Format in Pakistan",
        item: `${site.url}/journal/article/rent-agreement-format-pakistan`,
      },
    ],
  },
];

const keywords = [
  "rent agreement format pakistan",
  "rent agreement template pakistan",
  "tenancy agreement sample pakistan",
  "rent agreement generator pakistan",
  "rent deed format download",
  "rent agreement clauses pakistan",
].join(", ");

export default function RentAgreementFormatPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Rent Agreement Format in Pakistan"
        description="The standard structure of a rent agreement in Pakistan — parties, terms, notice period, and stamp duty/registration — plus how to generate a first draft with Wakeel."
        path="/journal/article/rent-agreement-format-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>Legal Help · Published June 8, 2026</p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Rent Agreement Format in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The clauses that actually protect a landlord or tenant later — and how to get a first
            draft without starting from a blank page.
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
                A rent agreement should cover the <strong>parties and property</strong>, the{" "}
                <strong>rent, deposit, and duration</strong>, the <strong>notice period</strong>{" "}
                and repair responsibilities, and note <strong>stamp duty</strong> and{" "}
                <strong>registration</strong> requirements. If you'd rather not start from a
                template,{" "}
                <a href={site.appUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Wakeel can generate a first draft
                </a>{" "}
                based on the details you provide.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educate: sections */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>The sections, one at a time</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {sections.map((r) => {
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

      {/* Generate with Wakeel */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className={`${cardBase} border-primary/40`}>
            <CardHeader>
              <Send className="h-7 w-7 text-primary" />
              <CardTitle className="text-xl">Generate your rent agreement draft with Wakeel</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Tell Wakeel the property details, the rent and deposit terms, and the parties
                involved, and it can put together a structured first draft covering all the
                sections above — in English or Urdu. Have a lawyer review the draft before
                signing, and confirm the stamp duty and registration rules for your specific
                province, since rent law in Pakistan is provincial and the exact requirements
                differ.
              </p>
              <div className="text-center">
                <Button asChild size="lg" className="cta-try-free">
                  <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                    Generate a rent agreement draft — free
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Reveal: prose with inline sources */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <h2 className={sectionHeading}>The registration penalty most people only discover during a dispute</h2>
          <p className="text-muted-foreground leading-relaxed">
            Guidance from{" "}
            <a href="https://lex.com.pk/blogs/tenancy-registration-in-pakistan/" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
              Lex
            </a>{" "}
            flags a consequence that surprises a lot of landlords and tenants: if the tenancy
            agreement was never registered, filing a dispute with the Rent Tribunal can require
            paying a penalty first — reportedly around 5% of annual rent for a tenant and 10% for
            a landlord — before the case is even heard. Building the stamp duty and registration
            details into the agreement's format from day one avoids discovering this the hard way.
          </p>
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
                  Generating a first draft of your rent agreement from the details you provide,
                  and flagging clauses worth double-checking.
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
                  It cannot handle stamping or registration, or confirm the agreement's
                  enforceability — a licensed advocate should review it before signing.
                </p>
              </CardContent>
            </Card>
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
            General educational information, not legal advice. See our{" "}
            <Link href="/disclaimer" className="text-primary hover:underline">full disclaimer</Link>.
          </p>
        </div>
      </section>

      {/* Sources */}
      <section className="bg-muted/40 py-14 sm:py-16">
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
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`${sectionHeading} text-center mb-8`}>Related reading</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/journal/article/rent-agreement-legal-requirements-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Rent Agreement in Pakistan: Legal Requirements</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/tenant-rights-rent-law-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Tenant Rights Under Pakistan's Rent Laws</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/sale-agreement-for-property-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Sale Agreement for Property in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/property-power-of-attorney-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Property Power of Attorney in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Drafting a rent agreement?</h2>
          <p className="text-muted-foreground">
            Describe the property and terms, and let Wakeel put together a first draft — then get
            a lawyer to finalize it.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">Generate a Draft with Wakeel</a>
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
