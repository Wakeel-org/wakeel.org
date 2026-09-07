import Link from "next/link";
import {
  CheckCircle2,
  Scale,
  Gavel,
  BookOpen,
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
  { icon: Gavel, title: "Shia personal law now has explicit statutory recognition", detail: "Pakistan enacted legislation so that divorce and inheritance matters for Shia Muslims are decided according to the personal law interpreted by the Shia (largely Ithna Ashari) school of thought, rather than defaulting to Sunni Hanafi rules that had, in practice, often been applied uniformly before." },
  { icon: BookOpen, title: "Inheritance is structured differently, not just distributed differently", detail: "Shia inheritance law recognises only two classes of heirs — Sharers and Residuaries — compared to Sunni law's three classes (Sharers, Residuaries, and Distant Kindreds). That structural difference changes who inherits at all in certain family situations, not just how much each heir receives." },
  { icon: Scale, title: "A childless widow's share is a genuine, well-documented difference", detail: "Under Shia law, a childless widow is generally entitled to one-fourth of her late husband's estate, compared to one-eighth under the framework typically applied where the couple had children — a distinction that has drawn academic and advocacy attention because it materially affects the financial security of widows without children." },
  { icon: AlertTriangle, title: "Marriage law has one notable doctrinal difference: mut'ah", detail: "Shia jurisprudence recognises temporary marriage (mut'ah) under specific conditions, which Sunni authorities do not — a distinction that can affect inheritance and spousal claims if a marriage was contracted under those terms, making it worth confirming the type of marriage contract in any Shia family law matter." },
];

const faqs = [
  {
    question: "Is Shia family law legally recognised in Pakistan?",
    answer:
      "Yes. Pakistan has enacted legislation recognising that matters of divorce and inheritance for Shia Muslims are to be decided according to the personal law of the Shia school of thought, rather than a uniform Sunni-derived standard.",
  },
  {
    question: "How is Shia inheritance different from Sunni inheritance in Pakistan?",
    answer:
      "Shia law recognises only two classes of heirs — Sharers and Residuaries — while Sunni law recognises three, including Distant Kindreds. This structural difference, along with differing shares (such as a childless widow's one-fourth share under Shia law versus one-eighth in comparable Sunni scenarios), can change both who inherits and how much they receive.",
  },
  {
    question: "Does mut'ah (temporary marriage) affect inheritance rights?",
    answer:
      "It can. Mut'ah is recognised in Shia jurisprudence but not under Sunni law, and whether a marriage was a mut'ah contract, with what specific terms, can affect a spouse's inheritance and maintenance claims — this is a fact-specific question worth confirming with a lawyer familiar with Shia personal law.",
  },
  {
    question: "Which court handles Shia family law cases in Pakistan?",
    answer:
      "The same Family Court system that handles other family law matters in Pakistan, applying Shia personal law principles where the parties are Shia and the relevant statute directs it — a lawyer can confirm which rules apply to your specific facts.",
  },
  {
    question: "Can Wakeel.org explain how Shia family law applies to my situation?",
    answer:
      "Wakeel.org can explain the general differences between Shia and Sunni family law on topics like inheritance and marriage. It cannot determine how these rules apply to your specific family situation or represent you — a licensed advocate familiar with Shia personal law should handle that.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Shia Family Law in Pakistan",
    description:
      "How Shia family law works in Pakistan — statutory recognition, how Shia inheritance differs structurally from Sunni inheritance, and the mut'ah marriage distinction.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-08-21",
    dateModified: "2026-08-21",
    mainEntityOfPage: `${site.url}/journal/article/shia-family-law-pakistan`,
    citation: [
      { "@type": "CreativeWork", name: "Revolutionising Inheritance Laws for the Shia Sect: Protection of Childless Widows — LUMS SAHSOL", url: "https://sahsol.lums.edu.pk/sites/default/files/2024-05/Revolutionising%20Inheritance%20Laws%20for%20the%20Shia%20Sect%20A%20Case%20for%20the%20Protection%20of%20Childless%20Widows%20of%20Shia%20Husbands.pdf" },
      { "@type": "CreativeWork", name: "Pakistan — Campaign for Justice in Muslim Family Laws (Musawah)", url: "https://campaignforjustice.musawah.org/repository/pakistan/" },
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
        name: "Shia Family Law in Pakistan",
        item: `${site.url}/journal/article/shia-family-law-pakistan`,
      },
    ],
  },
];

const keywords = [
  "shia family law pakistan",
  "shia inheritance law pakistan",
  "shia personal law divorce",
  "jafaria law pakistan",
  "mut'ah marriage inheritance rights",
  "shia widow inheritance share",
].join(", ");

export default function ShiaFamilyLawPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Shia Family Law in Pakistan"
        description="How Shia family law works in Pakistan — statutory recognition, how Shia inheritance differs structurally from Sunni inheritance, and the mut'ah marriage distinction."
        path="/journal/article/shia-family-law-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>Legal Help · Published August 21, 2026</p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Shia Family Law in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Divorce and inheritance for Shia Muslims in Pakistan follow their own school of
            thought — structurally, not just in minor detail.
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
                Pakistani law recognises that divorce and inheritance matters for Shia Muslims are
                decided under the personal law of the Shia school of thought. The clearest practical
                difference is in <strong>inheritance</strong>: Shia law recognises only Sharers and
                Residuaries (not the third Sunni category of Distant Kindreds), and a{" "}
                <strong>childless widow</strong> generally inherits one-fourth of her husband's
                estate under Shia law, versus one-eighth in the comparable Sunni scenario. Marriage
                law also differs on <strong>mut'ah</strong> (temporary marriage), which Shia
                jurisprudence recognises and Sunni authorities do not.
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
          <h2 className={sectionHeading}>Why the childless-widow gap gets specific attention from researchers</h2>
          <p className="text-muted-foreground leading-relaxed">
            Legal research published through{" "}
            <a href="https://sahsol.lums.edu.pk/sites/default/files/2024-05/Revolutionising%20Inheritance%20Laws%20for%20the%20Shia%20Sect%20A%20Case%20for%20the%20Protection%20of%20Childless%20Widows%20of%20Shia%20Husbands.pdf" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
              LUMS SAHSOL
            </a>{" "}
              specifically examines the protection gap faced by childless Shia widows, arguing that
            while the one-fourth share is a real entitlement under Shia inheritance principles, it
            still often leaves a widow without children in a precarious financial position compared
            to other heirs — particularly where in-laws or other Residuaries take the bulk of the
            remaining estate. This is exactly the kind of structural nuance that gets lost when
            inheritance is explained using only the general Sunni framework most default guides are
            written around.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Both Sunni and Shia systems agree on some fundamentals — a surviving spouse's fixed
            Quranic share, and mahr (dower) as an enforceable debt on the estate if unpaid — but the
            differences in heir classification and specific shares are substantial enough that
            applying the wrong framework to a Shia family can produce a genuinely incorrect
            distribution, not just a slightly different one.
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
                  Explaining the general differences between Shia and Sunni family law on divorce
                  and inheritance, in plain English or Urdu.
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
                  It cannot calculate your specific inheritance share or represent you — a licensed
                  advocate familiar with Shia personal law should handle that.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel about Shia family law — free
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
              { label: "Revolutionising Inheritance Laws for the Shia Sect: Protection of Childless Widows — LUMS SAHSOL", href: "https://sahsol.lums.edu.pk/sites/default/files/2024-05/Revolutionising%20Inheritance%20Laws%20for%20the%20Shia%20Sect%20A%20Case%20for%20the%20Protection%20of%20Childless%20Widows%20of%20Shia%20Husbands.pdf" },
              { label: "Pakistan — Campaign for Justice in Muslim Family Laws (Musawah)", href: "https://campaignforjustice.musawah.org/repository/pakistan/" },
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
            <Link href="/journal/article/inheritance-and-property-rights-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Inheritance and Property Rights in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/daughters-inheritance-rights-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Daughters' Inheritance Rights in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/marriage-laws-pakistan-complete-guide" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Marriage Laws in Pakistan: Complete Guide</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/khula-in-pakistan-procedure-rights" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Khula in Pakistan: Procedure and Rights</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Have a Shia family law question?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel to explain how the rules generally work — then verify with a licensed
            advocate before you act.
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
