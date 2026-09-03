import Link from "next/link";
import {
  CheckCircle2,
  Home,
  Gavel,
  ShieldAlert,
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
  { icon: ShieldAlert, title: "It has its own dedicated law: the Illegal Dispossession Act 2005", detail: "Passed specifically to protect lawful owners from forcible dispossession by \"qabza groups,\" this law makes illegal possession or dispossession by fraud, intimidation, duress, or assault a criminal offence — punishable with up to 7 years' imprisonment and a fine up to the market value of the property." },
  { icon: Gavel, title: "Criminal trespass is a separate, older route", detail: "Sections 447 and 448 of the Pakistan Penal Code criminalise trespass generally — entering or remaining on someone's property unlawfully — and police can act on a criminal complaint under these sections independently of the 2005 Act." },
  { icon: Home, title: "Civil remedies run alongside the criminal ones", detail: "Under the Specific Relief Act 1877, you can seek an injunction to stop the occupier from selling, transferring, or damaging the property further, and courts can issue an interim stay order to protect it while your case is being decided." },
  { icon: AlertTriangle, title: "Provincial laws add extra tools in some places", detail: "Punjab, for example, has its own additional legislation — the Punjab Protection of Ownership of Immovable Property Act 2025 — specifically targeting organized land-grabbing, alongside these general national remedies." },
];

const steps = [
  "Document the illegal occupation — how possession was taken (fraud, intimidation, duress, or assault), when, and by whom — since this is what both the criminal and civil routes will need.",
  "File a criminal complaint, either under the Illegal Dispossession Act 2005 (written specifically for qabza-group cases) or under Sections 447/448 PPC for criminal trespass, depending on the facts.",
  "In parallel, file a civil suit seeking an injunction under the Specific Relief Act 1877 to stop the occupier from selling, transferring, or further damaging the property.",
  "Ask the court for an interim stay order to freeze the property's status while your case is decided — acting quickly matters more than which law you pursue first.",
  "Check whether provincial legislation adds extra tools — Punjab, for example, has the Punjab Protection of Ownership of Immovable Property Act 2025 for organized land-grabbing specifically.",
];

const faqs = [
  {
    question: "What can I do if my property has been illegally occupied in Pakistan?",
    answer:
      "You have several options that can be pursued together: file a criminal complaint under the Illegal Dispossession Act 2005 or Sections 447/448 PPC (criminal trespass), and separately file a civil suit for an injunction under the Specific Relief Act 1877 to stop the occupier from selling or damaging the property while the case proceeds.",
  },
  {
    question: "Is illegal occupation of property a criminal offence in Pakistan?",
    answer:
      "Yes. Under the Illegal Dispossession Act 2005, illegal possession or forcible dispossession by a person or \"qabza group\" using fraud, intimidation, duress, or assault is punishable with up to 7 years' imprisonment and a fine up to the market value of the property.",
  },
  {
    question: "Can I get an urgent court order to stop someone occupying my property?",
    answer:
      "Yes — courts can issue an interim injunction or stay order under the Specific Relief Act 1877 to prevent the occupier from selling, transferring, or further damaging the property while your case is pending, which is often the fastest way to prevent things from getting worse.",
  },
  {
    question: "Does Punjab have a different law for illegal occupation than other provinces?",
    answer:
      "Yes. Punjab has additional legislation — the Punjab Protection of Ownership of Immovable Property Act 2025 — specifically aimed at organized land-grabbing, on top of the national Illegal Dispossession Act 2005. Other provinces have their own separate approaches, so it's worth confirming what applies in your specific location.",
  },
  {
    question: "Can Wakeel.org help me get my occupied property back?",
    answer:
      "Wakeel.org can explain which laws generally apply to your situation and what your options are. It cannot file a criminal complaint, draft an injunction application, or represent you in court — a licensed advocate should handle that.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Illegal Property Occupation in Pakistan",
    description:
      "A plain-language guide to illegal property occupation (qabza) in Pakistan — the Illegal Dispossession Act 2005, criminal trespass, and the civil injunction route.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-09-03",
    dateModified: "2026-09-03",
    mainEntityOfPage: `${site.url}/journal/article/illegal-property-occupation-pakistan`,
    citation: [
      { "@type": "CreativeWork", name: "Eradication of 'Qabza' Group Activities — Pakistan Law and Justice Commission (Report 19)", url: "https://www.commonlii.org/pk/other/PKLJC/reports/19.html" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "What to do about illegal property occupation in Pakistan",
    step: steps.map((s, i) => ({ "@type": "HowToStep", name: `Step ${i + 1}`, text: s })),
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
        name: "Illegal Property Occupation in Pakistan",
        item: `${site.url}/journal/article/illegal-property-occupation-pakistan`,
      },
    ],
  },
];

const keywords = [
  "illegal property occupation pakistan",
  "qabza law pakistan",
  "illegal dispossession act 2005",
  "section 447 448 ppc trespass",
  "how to remove illegal occupant property",
  "property injunction pakistan",
].join(", ");

export default function IllegalPropertyOccupationPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Illegal Property Occupation in Pakistan"
        description="A plain-language guide to illegal property occupation (qabza) in Pakistan — the Illegal Dispossession Act 2005, criminal trespass, and the civil injunction route."
        path="/journal/article/illegal-property-occupation-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>Legal Help · Published September 3, 2026</p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Illegal Property Occupation in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            "Qabza" isn't something the law leaves unanswered — there's a specific statute for it,
            plus criminal and civil remedies you can use together.
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
                Illegal occupation of property in Pakistan is a criminal offence under the{" "}
                <strong>Illegal Dispossession Act 2005</strong> (up to 7 years' imprisonment) and
                can also be charged as <strong>criminal trespass</strong> under Sections 447/448 of
                the Pakistan Penal Code. Separately, you can file a <strong>civil suit</strong> for
                an injunction under the Specific Relief Act 1877 to legally stop the occupier from
                selling or damaging the property while your case is decided. These routes can be
                pursued together, not one instead of the other.
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

      {/* Reveal: procedure steps */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>What to do about illegal occupation, step by step</h2>
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

      {/* Reveal: prose with inline sources */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <h2 className={sectionHeading}>Why speed matters more than which law you pick first</h2>
          <p className="text-muted-foreground leading-relaxed">
            The <strong>Illegal Dispossession Act 2005</strong> was specifically written to be
            faster than the ordinary civil litigation process, because — as documented in the{" "}
            <a href="https://www.commonlii.org/pk/other/PKLJC/reports/19.html" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
              Pakistan Law and Justice Commission's own report
            </a>{" "}
            on eradicating "qabza" group activities — ordinary civil suits could take years, by
            which time an occupied property might already be sold, altered, or built on. That's
            why acting quickly, and specifically pursuing an interim injunction to freeze the
            situation, matters as much as the underlying case itself.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            In practice, most lawyers use both criminal and civil routes at the same time: the
            criminal complaint creates pressure and a police record, while the civil injunction
            legally locks the property down so it can't be sold or transferred while the dispute is
            resolved. Which combination fits your situation depends on the specific facts — this is
            exactly the kind of decision worth getting a lawyer's input on early, not after the
            occupier has had time to act.
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
                  Explaining which laws generally apply to illegal occupation and what your
                  options look like, in plain English or Urdu.
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
                  It cannot file a criminal complaint, draft an injunction, or represent you in
                  court — a licensed advocate should handle that, urgently.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel about property occupation — free
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
              { label: "Eradication of 'Qabza' Group Activities — Pakistan Law and Justice Commission (Report 19)", href: "https://www.commonlii.org/pk/other/PKLJC/reports/19.html" },
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
            <Link href="/journal/article/punjab-property-protection-law-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">The Punjab Property Protection Law in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/property-dispute-lawyer-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Property Dispute Lawyer in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/fard-vs-intiqal-vs-registry-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Fard vs Intiqal vs Registry: Difference Explained</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/how-to-verify-property-before-buying-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to Verify Property Before Buying in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Dealing with an illegally occupied property?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel to explain your options — then get a licensed advocate involved quickly.
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
