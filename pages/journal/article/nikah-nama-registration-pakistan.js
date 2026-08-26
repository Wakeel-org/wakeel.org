import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Heart,
  FileText,
  Landmark,
  HelpCircle,
  AlertTriangle,
  ListChecks,
  Users,
} from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site } from "../../../src/data/marketing";
import { cardBase, eyebrow, headingGradient, sectionHeading } from "../../../src/data/theme";

const essentials = [
  {
    icon: FileText,
    title: "What the nikah nama actually is",
    detail:
      "The nikah nama is the official marriage contract and registration document required under the Muslim Family Laws Ordinance 1961 and related provincial marriage registration rules. It isn't just a religious formality — it's the legal record of the marriage, needed for CNIC updates, passports, custody or maintenance claims, and inheritance purposes.",
  },
  {
    icon: Users,
    title: "Who registers it",
    detail:
      "Registration is carried out by a licensed Nikah Registrar (often connected to the local Union Council), who records the marriage and reports it to the relevant Union Council under provincial marriage registration rules. The registrar's signature and the Union Council's record are what make the marriage officially registered, not just the religious ceremony.",
  },
  {
    icon: ListChecks,
    title: "The columns most people skim past",
    detail:
      "The nikah nama has specific numbered columns covering the haq mehr (dower) amount and whether it's prompt or deferred, any special conditions agreed between the parties, and — critically — column 18, which records whether the husband has delegated the right of divorce (talaq-e-tafweez) to the wife. These columns have real legal consequences and deserve to be read carefully, not signed on trust.",
  },
  {
    icon: Landmark,
    title: "Getting an online or certified copy",
    detail:
      "Once registered with the Union Council, a certified copy or extract of the nikah nama can typically be requested from the relevant Union Council or, in areas with digitized records, through provincial online verification portals. This certified copy is what's usually required for passport applications, visa sponsorships, and legal proceedings — a personal photocopy alone is often not accepted for official purposes.",
  },
  {
    icon: Heart,
    title: "What happens if it was never properly registered",
    detail:
      "An unregistered or informally conducted nikah can create serious complications later — disputes over the marriage's existence, difficulty proving maintenance or inheritance rights, or CNIC and passport complications for a spouse or children. If your nikah wasn't formally registered at the time, it's worth resolving this with a lawyer and the local Union Council rather than leaving it unresolved.",
  },
];

const beforeSigning = [
  "Read every column of the nikah nama before signing, including the mehr amount and payment terms — don't rely on a verbal understanding.",
  "Decide together, before the ceremony, whether talaq-e-tafweez (delegated right of divorce) will be recorded in column 18 — this is a significant legal choice, not a formality.",
  "Confirm the registrar is properly licensed and that the marriage will actually be reported to the Union Council, not just signed informally.",
  "Keep multiple certified copies once registered — you'll need them for CNIC updates, passports, and any future legal matters.",
  "If either party has been married before, make sure any prior divorce or death is properly documented and referenced, to avoid complications later.",
];

const faqs = [
  {
    question: "How do I register a nikah nama in Pakistan?",
    answer:
      "A licensed Nikah Registrar conducts and records the marriage contract at the time of nikah, then reports it to the relevant Union Council under provincial marriage registration rules, consistent with the Muslim Family Laws Ordinance 1961. Once registered, you can request a certified copy or extract from the Union Council — this is the document you'll need for official purposes like passports or CNIC updates.",
  },
  {
    question: "Can I get a nikah nama online in Pakistan?",
    answer:
      "In areas with digitized Union Council records, you may be able to verify or request an extract of an already-registered nikah nama through a provincial online portal. The nikah ceremony and initial registration itself, however, is done in person through a licensed registrar — there isn't a way to conduct or register the marriage entirely online.",
  },
  {
    question: "What is column 18 in the nikah nama?",
    answer:
      "Column 18 is where the husband can delegate the right of divorce (talaq-e-tafweez) to the wife at the time of nikah, giving her the ability to pronounce talaq under that delegated authority without needing to go through the khula process in Family Court. Whether this column is filled in or left blank is a significant decision both parties should discuss and understand before signing.",
  },
  {
    question: "What happens if a marriage in Pakistan was never registered?",
    answer:
      "An unregistered nikah can still be religiously valid, but the absence of a registered nikah nama makes it much harder to prove the marriage for legal purposes — CNIC updates, passport applications, maintenance claims, custody matters, or inheritance. If a marriage was never formally registered, a family law advocate and the local Union Council can advise on how to resolve this.",
  },
  {
    question: "Can Wakeel.org help me understand my nikah nama?",
    answer:
      "Yes — Wakeel.org can explain what each column of a nikah nama means, including mehr terms and talaq-e-tafweez, in plain English or Urdu, and help you prepare questions before your nikah or before a family law consultation. It cannot register a marriage, verify a specific document with the Union Council, or represent you in a family law matter.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Register a Nikah Nama in Pakistan",
    description:
      "What the nikah nama actually records, who registers it, the columns worth reading carefully (including talaq-e-tafweez), and how to get a certified copy.",
    author: { "@type": "Organization", name: "Wakeel.org" },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-07-14",
    dateModified: "2026-07-14",
    mainEntityOfPage: `${site.url}/journal/article/nikah-nama-registration-pakistan`,
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
        name: "How to Register a Nikah Nama in Pakistan",
        item: `${site.url}/journal/article/nikah-nama-registration-pakistan`,
      },
    ],
  },
];

const keywords = [
  "nikah nama in pakistan",
  "nikahnama online",
  "online nikah nama",
  "online nikah registration",
  "pakistani nikah nama",
  "talaq-e-tafweez column 18",
  "muslim family laws ordinance 1961",
].join(", ");

export default function NikahNamaRegistrationPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="How to Register a Nikah Nama in Pakistan"
        description="What the nikah nama actually records, who registers it, the columns worth reading carefully (including talaq-e-tafweez), and how to get a certified copy."
        path="/journal/article/nikah-nama-registration-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>
            Legal Help · Published July 14, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            How to Register a Nikah Nama in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Most couples sign the nikah nama in the middle of a busy wedding day without reading
            past the first page. A few of its columns quietly shape your legal rights for
            decades — here's what to actually pay attention to.
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
                The nikah nama is the official marriage contract under the{" "}
                <strong>Muslim Family Laws Ordinance 1961</strong>, registered by a licensed Nikah
                Registrar and reported to the local Union Council. Read the mehr terms and{" "}
                <strong>column 18 (talaq-e-tafweez)</strong> carefully before signing, and get
                certified copies once registered — you'll need them for CNIC, passport, and any
                future legal matters.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Essentials */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>What the nikah nama covers</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {essentials.map((e) => {
              const Icon = e.icon;
              return (
                <Card key={e.title} className={cardBase}>
                  <CardHeader>
                    <Icon className="h-7 w-7 text-primary" />
                    <CardTitle className="text-lg">{e.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{e.detail}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Before signing */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className={sectionHeading}>Before you sign</h2>
          </div>
          <Card className={cardBase}>
            <CardContent className="p-6">
              <ul className="space-y-3">
                {beforeSigning.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{b}</span>
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
                  Explaining each column of a nikah nama in plain English or Urdu, including mehr
                  terms and talaq-e-tafweez, and helping you prepare questions before your nikah
                  or a family law consultation.
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
                  It cannot register a marriage, verify a specific document with the Union
                  Council, or represent you in a family law matter.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Understand your nikah nama with Wakeel Free
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
            General educational information, not legal advice. Marriage registration rules and
            procedures can vary by province and change over time — verify current requirements
            with your local Union Council or a licensed advocate. See our{" "}
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
              href="/journal/article/family-law-rights-pakistan"
              className={`group ${cardBase} block rounded-lg p-5`}
            >
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                Common Family Law Rights in Pakistan
              </p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link
              href="/journal/legal-issues-pakistan/family-law-guidance-pakistan"
              className={`group ${cardBase} block rounded-lg p-5`}
            >
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                Family Law Guidance in Pakistan
              </p>
              <p className="text-xs text-muted-foreground mt-1">Guide · Wakeel Journal</p>
            </Link>
            <Link
              href="/journal/legal-issues-pakistan/divorce-separation-pakistan"
              className={`group ${cardBase} block rounded-lg p-5`}
            >
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                Divorce and Separation in Pakistan
              </p>
              <p className="text-xs text-muted-foreground mt-1">Guide · Wakeel Journal</p>
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
          <h2 className={sectionHeading}>Planning a nikah, or reviewing an old one?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel to walk you through what each column means before you sign — or to explain
            one you signed years ago.
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
