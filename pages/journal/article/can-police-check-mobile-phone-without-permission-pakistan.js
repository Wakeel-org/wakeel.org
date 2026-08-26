import Link from "next/link";
import {
  CheckCircle2,
  ShieldCheck,
  Scale,
  Gavel,
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
  { icon: ShieldCheck, title: "Article 14 protects the dignity and privacy of the home", detail: "The Constitution's Article 14 guarantees the dignity of man and, subject to law, the privacy of home — courts have generally read this as extending a privacy interest to personal digital devices too, though the exact boundaries are still being worked out case by case." },
  { icon: Scale, title: "Search and seizure generally needs legal authority", detail: "Under the Code of Criminal Procedure 1898, police search and seizure powers are meant to be exercised under specific legal authority — a warrant, or a recognized exception such as a search incident to a lawful arrest — not as a routine, unlimited power to examine any device." },
  { icon: Gavel, title: "You are not required to self-incriminate", detail: "Article 13 of the Constitution protects against being compelled to be a witness against yourself — a principle relevant to being pressured to unlock a device or hand over a password, though how this interacts with specific investigative powers is a genuinely developing area of law." },
  { icon: ShieldCheck, title: "Formal surveillance and interception needs a High Court warrant", detail: "Where investigators want to intercept or access communications data more broadly (not just a one-time device check), the Investigation for Fair Trial Act 2013 requires a warrant issued by a High Court judge, valid for no more than sixty days at a time." },
];

const practicalNotes = [
  "There is no single, comprehensive statute in Pakistan that specifically and exhaustively governs routine police checks of a citizen's phone — the position is built from constitutional principles, general CrPC search powers, and specific laws like the Investigation for Fair Trial Act 2013 for more formal surveillance.",
  "If asked to hand over or unlock your phone, ask on what legal basis — a warrant, an arrest, or another specific power — the request is being made, and note the officer's name and station.",
  "Refusing outright can escalate a situation in the moment, but you're not required to volunteer passwords beyond what's legally compelled — this is exactly the kind of pressured, in-the-moment decision worth having a lawyer's general guidance on in advance, not only after the fact.",
  "If you believe a phone search was conducted unlawfully, this can potentially affect whether evidence obtained from it is later admissible — a question for a lawyer to assess based on the specific facts.",
];

const faqs = [
  {
    question: "Can police search my phone without a warrant in Pakistan?",
    answer:
      "There's no single clear-cut statute answering this in all situations. General principles apply: Article 14's privacy protection, CrPC search and seizure rules requiring legal authority, and — for broader interception — the Investigation for Fair Trial Act 2013's High Court warrant requirement. A search incident to a lawful arrest is a recognized exception in many legal systems including Pakistan's, but the exact scope is genuinely still developing through case law.",
  },
  {
    question: "Do I have to give police my phone password?",
    answer:
      "Article 13 of the Constitution protects against self-incrimination, which is relevant here, but how this principle applies to specific investigative demands for a password is a developing area without one settled, universal answer. If pressured, ask on what legal authority the demand is being made and consult a lawyer promptly.",
  },
  {
    question: "What law governs police access to phone data and communications in Pakistan?",
    answer:
      "For formal interception or broader access to communications data, the Investigation for Fair Trial Act 2013 requires a warrant from a High Court judge, valid for a maximum of sixty days. Routine device searches during an arrest or investigation draw more on general CrPC search-and-seizure principles and constitutional privacy protections.",
  },
  {
    question: "Can evidence from an unlawfully searched phone be used in court?",
    answer:
      "This depends heavily on the specific facts and how the search was conducted — it's a genuine legal question a court would need to assess, not something to assume either way. A lawyer's review of exactly what happened is essential here.",
  },
  {
    question: "Can Wakeel.org tell me if a specific phone search was legal?",
    answer:
      "Wakeel.org can explain the general legal principles involved — privacy, search authority, self-incrimination — in plain English or Urdu. It cannot assess whether your specific search was lawful or represent you — a licensed criminal lawyer should review the exact facts.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Can Police Check Your Mobile Phone Without Permission?",
    description:
      "The constitutional and statutory principles that govern police access to a phone in Pakistan — Article 14 privacy, CrPC search powers, self-incrimination, and the Investigation for Fair Trial Act 2013.",
    author: { "@type": "Organization", name: "Wakeel.org" },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-04-23",
    dateModified: "2026-04-23",
    mainEntityOfPage: `${site.url}/journal/article/can-police-check-mobile-phone-without-permission-pakistan`,
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
        name: "Can Police Check Your Mobile Phone Without Permission?",
        item: `${site.url}/journal/article/can-police-check-mobile-phone-without-permission-pakistan`,
      },
    ],
  },
];

const keywords = [
  "can police check your phone without permission pakistan",
  "phone search law pakistan",
  "article 14 privacy pakistan",
  "investigation for fair trial act 2013",
  "police search seizure pakistan",
].join(", ");

export default function CanPoliceCheckMobilePhoneWithoutPermissionPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Can Police Check Your Mobile Phone Without Permission?"
        description="The constitutional and statutory principles that govern police access to a phone in Pakistan — Article 14 privacy, CrPC search powers, self-incrimination, and the Investigation for Fair Trial Act 2013."
        path="/journal/article/can-police-check-mobile-phone-without-permission-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>
            Legal Help · Published April 23, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Can Police Check Your Mobile Phone Without Permission?
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            There's no single law with a clean yes-or-no answer here — but there are real
            constitutional and statutory principles at play, and knowing them changes how you
            should respond in the moment.
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
                There's no single statute directly answering this. <strong>Article 14</strong>{" "}
                protects privacy and dignity, general <strong>CrPC search powers</strong> require
                legal authority (a warrant or a recognized exception like arrest), and{" "}
                <strong>Article 13</strong> protects against self-incrimination. For formal
                surveillance or interception, the{" "}
                <a href="https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apaUY2FqbZw=-sg-jjjjjjjjjjjjj" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
                  Investigation for Fair Trial Act 2013
                </a>{" "}
                requires a <strong>High Court warrant</strong>, valid for up to sixty days.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educate: framework */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>The principles that actually apply</h2>
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

      {/* Reveal: practical notes */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className={sectionHeading}>What to actually do in the moment</h2>
          </div>
          <Card className={cardBase}>
            <CardContent className="p-6">
              <ul className="space-y-3">
                {practicalNotes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <ShieldCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
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
                  Explaining the general legal principles involved, in plain English or Urdu.
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
                  It cannot assess whether a specific search was lawful or represent you — a
                  licensed criminal lawyer should review the exact facts.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel about your rights — free
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
              { label: "The Investigation for Fair Trial Act, 2013 — Pakistan Code (Ministry of Law and Justice)", href: "https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apaUY2FqbZw=-sg-jjjjjjjjjjjjj" },
              { label: "The Constitution of the Islamic Republic of Pakistan, 1973 (up to date, official) — National Assembly of Pakistan", href: "https://www.na.gov.pk/uploads/documents/1549886415_632.pdf" },
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
            <Link href="/journal/article/privacy-recording-without-consent-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Privacy and Recording Someone Without Consent in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/arrest-without-warrant-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Arrest Without Warrant in Pakistan: When Is It Legal?</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/constitution-of-pakistan-1973-fundamental-rights" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Constitution of Pakistan 1973: Fundamental Rights</p>
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
          <h2 className={sectionHeading}>Facing a phone search question?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel to explain your general rights — then get a licensed criminal lawyer to
            review the specific facts.
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
