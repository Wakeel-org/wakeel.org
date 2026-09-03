import Link from "next/link";
import {
  CheckCircle2,
  Scale,
  Landmark,
  ShieldCheck,
  ScrollText,
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

const clauses = [
  { icon: Landmark, title: "The haq mehr columns", detail: "Record the agreed dower amount and whether it's prompt (payable on demand) or deferred (payable on a specified event, such as divorce or death). This isn't symbolic — it's a legally enforceable debt the wife can pursue through a Family Court suit if it isn't paid." },
  { icon: Gavel, title: "Column 18 — delegation of divorce (talaq-e-tafweez)", detail: "Records whether the husband has delegated the right to pronounce talaq to the wife. If this column is filled in the wife's favour, she can exercise that delegated right herself, following the same notice procedure to the Union Council that applies to a husband's talaq — a right many wives don't realise they may already hold." },
  { icon: ScrollText, title: "The conditions column", detail: "Lets the couple record specific agreed conditions — for example, restrictions on a second marriage, or conditions about where the couple will reside. Conditions that don't conflict with the fundamentals of a valid marriage under Islamic law are generally enforceable and can matter significantly later." },
  { icon: ShieldCheck, title: "The previous marriage disclosure column", detail: "Records whether either party was previously married, and by extension connects to whether the Section 6 Arbitration Council permission requirement for a second marriage was actually followed — a mismatch here is a real red flag worth raising before signing, not after." },
  { icon: Scale, title: "Maintenance and residence details", detail: "Some nikah namas record agreed maintenance arrangements or residence expectations. These don't override the general legal right to maintenance (nafaqa), but a clear written record reduces disputes about what was actually agreed." },
];

const readingTips = [
  "Read every column before signing — don't rely on a verbal summary from a relative or the registrar of what a column says.",
  "If the delegation of divorce (talaq-e-tafweez) column matters to you, confirm explicitly whether it's being granted, and understand what exercising it later would actually require.",
  "Keep a certified copy, not just a personal photocopy — passport, visa, and legal proceedings generally require the certified version from the Union Council.",
  "If a column looks blank, ambiguous, or altered from what was actually agreed, raise it with the Nikah Registrar immediately — corrections are far easier before the document is finalized than after.",
];

const faqs = [
  {
    question: "What is column 18 in the nikah nama?",
    answer:
      "It records whether the husband has delegated the right of divorce (talaq-e-tafweez) to the wife. If it's filled in her favour, she can pronounce talaq herself under the delegated right, generally following the same Union Council notice procedure that applies when a husband exercises talaq.",
  },
  {
    question: "Is haq mehr recorded in the nikah nama legally enforceable?",
    answer:
      "Yes — the haq mehr recorded in the nikah nama is treated as a legal debt owed by the husband to the wife. If it isn't paid, the wife can pursue it through a suit in the Family Court under the West Pakistan Family Courts Act 1964.",
  },
  {
    question: "Can conditions be added to a nikah nama?",
    answer:
      "Yes — the conditions column allows the couple to record specific agreed terms, such as restrictions on a second marriage or residence arrangements. Conditions that don't conflict with the fundamentals of a valid Islamic marriage are generally treated as enforceable.",
  },
  {
    question: "What should I check in a nikah nama before signing?",
    answer:
      "At minimum: the haq mehr amount and whether it's prompt or deferred, whether talaq-e-tafweez (column 18) is being delegated, any conditions recorded, and the previous-marriage disclosure column. Read every column yourself rather than relying on a verbal summary.",
  },
  {
    question: "Can Wakeel.org explain my nikah nama to me?",
    answer:
      "Wakeel.org can read and summarize a nikah nama in plain English or Urdu, explain what each column generally means, and flag anything worth double-checking before you sign or rely on it. It cannot draft or register the document, confirm what was verbally agreed, or represent you — a licensed Nikah Registrar or advocate should handle that.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Nikah Nama in Pakistan: Rights, Clauses and Legal Requirements",
    description:
      "What each key clause of the nikah nama actually means legally — haq mehr, talaq-e-tafweez (column 18), conditions, and prior-marriage disclosure — and what rights they confer.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-02-09",
    dateModified: "2026-02-09",
    mainEntityOfPage: `${site.url}/journal/article/nikah-nama-rights-clauses-pakistan`,
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
        name: "Nikah Nama in Pakistan: Rights, Clauses and Legal Requirements",
        item: `${site.url}/journal/article/nikah-nama-rights-clauses-pakistan`,
      },
    ],
  },
];

const keywords = [
  "nikah nama clauses pakistan",
  "nikah nama column 18",
  "talaq-e-tafweez pakistan",
  "haq mehr nikah nama",
  "nikah nama rights pakistan",
  "nikah nama conditions column",
].join(", ");

export default function NikahNamaRightsClausesPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Nikah Nama in Pakistan: Rights, Clauses and Legal Requirements"
        description="What each key clause of the nikah nama actually means legally — haq mehr, talaq-e-tafweez (column 18), conditions, and prior-marriage disclosure."
        path="/journal/article/nikah-nama-rights-clauses-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>
            Legal Help · Published February 9, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Nikah Nama in Pakistan: Rights, Clauses and Legal Requirements
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Most people sign a nikah nama at one of the busiest moments of their life, without
            reading it closely. Here's exactly what its key clauses legally mean — and the rights
            they actually confer.
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
                The nikah nama's key legal columns are: <strong>haq mehr</strong> (a legally
                enforceable debt), <strong>column 18</strong> (talaq-e-tafweez — whether the wife
                holds a delegated right of divorce), the <strong>conditions column</strong>{" "}
                (generally enforceable agreed terms), and the{" "}
                <strong>previous-marriage disclosure</strong>. Each carries real legal
                consequences — read every column before signing, and keep a{" "}
                <strong>certified copy</strong>.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educate: clauses */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>The clauses that carry real legal weight</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {clauses.map((r) => {
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

      {/* Reveal: reading tips */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className={sectionHeading}>What to actually do before you sign</h2>
          </div>
          <Card className={cardBase}>
            <CardContent className="p-6">
              <ul className="space-y-3">
                {readingTips.map((item) => (
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
                  Reading and summarizing a nikah nama in plain English or Urdu, explaining what
                  each column generally means, and flagging anything worth double-checking.
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
                  It cannot draft or register the document, confirm what was verbally agreed, or
                  represent you — a licensed Nikah Registrar or advocate should handle that.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Review your nikah nama with Wakeel — free
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
              { label: "The Muslim Family Laws Ordinance, 1961 — Punjab Laws (official)", href: "http://punjablaws.gov.pk/laws/777a.html" },
              { label: "The West Pakistan Family Courts Act, 1964 — Pakistan Code (Ministry of Law and Justice)", href: "https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apaUY2Npa5lraQ==-sg-jjjjjjjjjjjjj" },
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
            <Link href="/journal/article/nikah-nama-registration-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to Register a Nikah Nama in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/haq-mehr-rights-before-after-rukhsati-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Haq Mehr in Pakistan: Rights Before and After Rukhsati</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/talaq-in-pakistan-legal-procedure" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Talaq in Pakistan: Legal Procedure and Requirements</p>
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
          <h2 className={sectionHeading}>About to sign — or already hold — a nikah nama?</h2>
          <p className="text-muted-foreground">
            Upload it and Wakeel will help you understand each clause in plain language — then
            verify anything important with a licensed advocate.
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
