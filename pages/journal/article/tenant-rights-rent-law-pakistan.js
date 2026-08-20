import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Home,
  FileText,
  Scale,
  Clock,
  HelpCircle,
  AlertTriangle,
  Key,
  Landmark,
} from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site } from "../../../src/data/marketing";
import { cardBase, headingGradient, sectionHeading } from "../../../src/data/theme";

const rights = [
  {
    icon: FileText,
    title: "A written tenancy agreement, ideally registered",
    detail:
      "Provincial rent laws — such as the Punjab Rented Premises Act 2009 and Sindh Rented Premises Ordinance 1979 — encourage or require written tenancy agreements stating rent, duration, and terms. A written agreement is your strongest evidence in any dispute; a purely verbal arrangement leaves you guessing later.",
  },
  {
    icon: Key,
    title: "Protection from arbitrary eviction",
    detail:
      "A landlord generally cannot evict a tenant simply because the lease term looks convenient to end — eviction under most provincial rent laws must go through the Rent Controller or relevant rent tribunal, on specific legal grounds such as non-payment of rent, personal need (bona fide requirement), or breach of the tenancy terms.",
  },
  {
    icon: Scale,
    title: "The right to contest an eviction notice",
    detail:
      "If you receive an eviction notice, you are entitled to respond and contest it before the Rent Controller before you're actually required to vacate. A notice alone does not evict you — a legal order following due process does.",
  },
  {
    icon: Landmark,
    title: "Rules around rent increases",
    detail:
      "Rent increases are meant to follow the terms agreed in the tenancy agreement or applicable provincial rules, not an arbitrary demand mid-lease. If your agreement is silent, this is exactly the kind of clause worth having a lawyer check before you either pay or refuse.",
  },
  {
    icon: Home,
    title: "Right to a habitable, maintained property",
    detail:
      "Tenants can generally expect the landlord to maintain the structural condition of the property (subject to what the agreement says about repairs). Document any disrepair with photos and dated written requests to the landlord — this record matters if the dispute ever reaches a Rent Controller.",
  },
  {
    icon: AlertTriangle,
    title: "Security deposit protections",
    detail:
      "Security deposits should be returned at the end of a tenancy, minus any lawfully deducted amounts for damage beyond normal wear and tear — not simply withheld. Keep your receipt for the deposit and a move-in condition record (photos, dated) to protect yourself here.",
  },
];

const disputeSteps = [
  "Read your tenancy agreement fully before responding to any notice — the specific clauses matter more than general assumptions about tenant rights.",
  "Put every important communication in writing (WhatsApp or email), even if the initial conversation was verbal — this becomes your evidence trail.",
  "Photograph the property's condition, ideally with timestamps, both at move-in and whenever a dispute arises.",
  "If you receive an eviction notice, don't ignore it and don't panic-vacate — respond and, where needed, file your case with the Rent Controller within your province's applicable timeline.",
  "For disputes over larger sums or serious eviction threats, get a lawyer to review your specific agreement — rent law details differ meaningfully across Punjab, Sindh, KP, and Balochistan.",
];

const faqs = [
  {
    question: "What law governs tenant rights in Pakistan?",
    answer:
      "There's no single national rent law — each province has its own: the Punjab Rented Premises Act 2009, the Sindh Rented Premises Ordinance 1979, and separate rent laws in Khyber Pakhtunkhwa and Balochistan. All broadly cover tenancy agreements, rent, eviction grounds, and dispute resolution through a Rent Controller, but the exact rules and procedure differ by province.",
  },
  {
    question: "Can a landlord evict a tenant without going to court?",
    answer:
      "Generally no. Provincial rent laws require eviction to go through the Rent Controller (or equivalent rent tribunal) on specified legal grounds, such as non-payment of rent or the landlord's bona fide personal need. A landlord simply telling you to leave, or changing the locks, is not a lawful eviction — if that happens, this becomes a legal matter you should raise with a lawyer or the Rent Controller promptly.",
  },
  {
    question: "What can I do about a landlord-tenant dispute in Pakistan?",
    answer:
      "Start by reviewing your written tenancy agreement and gathering evidence — photos, receipts, and written communication. Try to resolve the issue directly and in writing first. If that fails, disputes over rent, eviction, or deposits are typically filed with the Rent Controller in the district where the property is located.",
  },
  {
    question: "Is rent control still in effect in Pakistan?",
    answer:
      "Provincial rent laws (sometimes called rent restriction or rented premises laws) regulate tenancy terms, rent disputes, and eviction procedure rather than freezing rent amounts outright in most cases. The specific rules on rent increases depend on your agreement and the applicable provincial law — this is worth confirming for your specific city and lease, since practice varies.",
  },
  {
    question: "Can Wakeel.org help with a tenancy dispute?",
    answer:
      "Wakeel.org can summarize your tenancy agreement, flag clauses worth double-checking, explain terms like 'bona fide requirement' in plain English or Urdu, and help you prepare a timeline and document checklist for a lawyer or the Rent Controller's office. It cannot represent you, predict how a Rent Controller will decide your case, or confirm the very latest procedural rule for your specific district — always verify with a licensed advocate.",
  },
  {
    question: "What are my rights as a tenant in Pakistan?",
    answer:
      "Broadly: a written tenancy agreement stating your rent and terms, protection from eviction except through the Rent Controller on specific legal grounds, the right to contest an eviction notice before you're actually required to vacate, rules around how and when rent can be increased, a habitable property maintained per your agreement, and return of your security deposit minus lawfully deducted amounts. The exact detail depends on which provincial rent law applies and what your specific agreement says.",
  },
  {
    question: "How do I deal with an illegal eviction in Pakistan?",
    answer:
      "If a landlord tries to remove you, change the locks, or cut off utilities without going through the Rent Controller, this is not a lawful eviction under Pakistani rent law — document everything (photos, dates, witnesses, any written threats) and raise it with a lawyer or the Rent Controller's office immediately. Do not simply vacate under pressure; you generally have the right to contest the matter and remain until a lawful order says otherwise.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Tenant Rights Under Pakistan's Rent Laws",
    description:
      "A practical guide to tenant rights in Pakistan — written agreements, eviction protections, rent increase rules, and how to resolve a landlord-tenant dispute under provincial rent laws.",
    author: { "@type": "Organization", name: "Wakeel.org" },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-05-26",
    dateModified: "2026-05-26",
    mainEntityOfPage: `${site.url}/journal/article/tenant-rights-rent-law-pakistan`,
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
        name: "Tenant Rights Under Pakistan's Rent Laws",
        item: `${site.url}/journal/article/tenant-rights-rent-law-pakistan`,
      },
    ],
  },
];

const keywords = [
  "tenant rights pakistan",
  "landlord tenant dispute pakistan",
  "rent control ordinance pakistan",
  "punjab rented premises act",
  "sindh rented premises ordinance",
  "eviction notice pakistan",
  "rent controller pakistan",
  "what are my rights as a tenant in pakistan",
  "how do i deal with an illegal eviction in pakistan",
].join(", ");

export default function TenantRightsRentLawPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Tenant Rights Under Pakistan's Rent Laws"
        description="Tenant rights under Pakistan's rent laws — written agreements, protection from arbitrary eviction, rent rules, and how disputes get resolved."
        path="/journal/article/tenant-rights-rent-law-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Legal Help · Published May 26, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Tenant Rights Under Pakistan's Rent Laws
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A landlord asking you to leave "by the end of the month" with no real explanation isn't
            the end of the conversation — it's usually the start of one that has legal rules
            attached. Here's what those rules actually say.
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
                Rent law in Pakistan is <strong>provincial</strong> — Punjab, Sindh, KP, and
                Balochistan each have their own rented premises laws. Across all of them, the
                common thread is: tenancy terms should be in writing, eviction must go through a{" "}
                <strong>Rent Controller</strong> on specific legal grounds (not a landlord's say-so),
                and rent increases should follow what's actually agreed. Document everything —
                agreements, payments, and disrepair — as you go, not after a dispute starts.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Rights */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>What tenants are generally entitled to</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Details vary by province and by your specific agreement — but these protections show
              up across Pakistan's rent laws in one form or another.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {rights.map((r) => {
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

      {/* Dispute steps */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className={sectionHeading}>If a dispute is already brewing</h2>
          </div>
          <Card className={cardBase}>
            <CardContent className="p-6">
              <ol className="space-y-3">
                {disputeSteps.map((step, i) => (
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
                  Summarizing a rent agreement and flagging clauses worth verifying. Explaining an
                  eviction notice in plain English or Urdu. Helping you build a timeline of
                  payments, repairs, and communications before you talk to a lawyer or file with
                  the Rent Controller.
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
                  It cannot represent you before a Rent Controller, predict how your specific case
                  will be decided, or confirm the exact current procedure for your district — rent
                  law and local practice differ across Pakistan and change over time.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Review your tenancy agreement with Wakeel Free
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
            General educational information, not legal advice. Rent law is provincial and details
            vary by city and agreement — verify current rules with a licensed advocate or your
            local Rent Controller's office. See our{" "}
            <Link href="/disclaimer" className="text-primary hover:underline">full disclaimer</Link>.
          </p>
        </div>
      </section>

      {/* Related reading */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`${sectionHeading} text-center mb-8`}>Related reading</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/journal/legal-issues-pakistan/tenant-rights-pakistan"
              className={`group ${cardBase} block rounded-lg p-5`}
            >
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                Tenant Rights and Rent Issues in Pakistan
              </p>
              <p className="text-xs text-muted-foreground mt-1">Guide · Wakeel Journal</p>
            </Link>
            <Link
              href="/journal/legal-issues-pakistan/property-document-check-pakistan"
              className={`group ${cardBase} block rounded-lg p-5`}
            >
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                Property Document Check Support in Pakistan
              </p>
              <p className="text-xs text-muted-foreground mt-1">Guide · Wakeel Journal</p>
            </Link>
            <Link
              href="/journal/article/understanding-legal-notices-pakistan"
              className={`group ${cardBase} block rounded-lg p-5`}
            >
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                Understanding Legal Notices in Pakistan
              </p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/citizens" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                Wakeel.org for Citizens
              </p>
              <p className="text-xs text-muted-foreground mt-1">How Wakeel helps everyday legal problems</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Got an eviction notice or a rent dispute?</h2>
          <p className="text-muted-foreground">
            Upload your agreement or notice and Wakeel will help you understand it in plain
            language — then verify next steps with a licensed advocate.
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
