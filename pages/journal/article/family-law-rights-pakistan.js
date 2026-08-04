import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Heart,
  FileText,
  Scale,
  Clock,
  HelpCircle,
  AlertTriangle,
  Users,
  Landmark,
} from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site } from "../../../src/data/marketing";
import { cardBase, headingGradient, sectionHeading } from "../../../src/data/theme";

const topics = [
  {
    icon: Scale,
    title: "Divorce (Talaq) by the husband",
    detail:
      "Under the Muslim Family Laws Ordinance 1961, a husband who pronounces talaq must give written notice to the Union Council / Arbitration Council chairman. Talaq becomes effective 90 days after that notice (unless revoked earlier), a period meant to allow reconciliation. Skipping this notice doesn't necessarily invalidate the divorce religiously, but it can create real complications for registration, remarriage, and legal recognition later.",
  },
  {
    icon: Heart,
    title: "Khula — a wife's right to dissolve the marriage",
    detail:
      "Khula is the wife's route to end the marriage through the Family Court when she no longer wishes to remain married, even without proving fault by the husband — Pakistani courts have recognized this as her right, following the landmark Khurshid Bibi v. Baboo Khan (PLD 1967 SC 97) case. It's filed as a suit for dissolution of marriage under the Dissolution of Muslim Marriages Act 1939 read with the Family Courts Act 1964, generally on the basis that the marriage cannot continue within the limits prescribed by Allah. Courts commonly require the wife to return the haq mehr (dower) or part of it, though this varies by case.",
  },
  {
    icon: FileText,
    title: "Nikahnama clauses most people never read",
    detail:
      "The nikahnama includes specific boxes — such as whether the wife has been delegated the right of divorce (talaq-e-tafweez) — that materially change what she can do without going to court at all. If you're getting married, or reviewing an old nikahnama during a dispute, these clauses are worth reading line by line, not skimming.",
  },
  {
    icon: Users,
    title: "Child custody (Hizanat)",
    detail:
      "Custody disputes are decided by the Family Court primarily on the welfare of the child, under the Guardians and Wards Act 1890 as applied through Pakistan's Family Courts. Under classical Hanafi practice generally followed in Pakistan, mothers are typically preferred for younger children's custody (hizanat), while the father usually remains the legal guardian — but courts weigh the child's welfare above rigid rules, and outcomes vary by facts.",
  },
  {
    icon: Landmark,
    title: "Maintenance (Nafaqa)",
    detail:
      "A husband is generally obligated to maintain his wife during a valid marriage and, in most interpretations followed in Pakistani courts, during the iddat period after divorce. Child maintenance is a separate, ongoing obligation regardless of who has custody. Maintenance disputes are filed in the Family Court and decided based on the husband's means and the family's reasonable needs.",
  },
  {
    icon: AlertTriangle,
    title: "Haq Mehr (dower) — a legal entitlement, not a formality",
    detail:
      "Haq mehr agreed at the time of nikah is a legal debt the husband owes the wife, and it does not simply disappear because a couple divorces amicably. Prompt (muajjal) mehr is payable on demand; deferred (muwajjal) mehr becomes payable on divorce or death. Unpaid mehr can be pursued as a claim before the Family Court.",
  },
];

const beforeCourt = [
  "Gather the nikahnama, any notices already exchanged, and proof of maintenance paid or received.",
  "Write a clear, dated timeline of key events — this matters as much in family court as it does in any other kind of case.",
  "Understand which specific relief you're seeking: dissolution (khula), custody, maintenance, or recovery of mehr — each is a distinct suit, sometimes filed together.",
  "Consider whether reconciliation through the Union Council's Arbitration Council is worth attempting first — it's a built-in step in the process, not just a formality.",
  "Speak to a family law advocate before filing anything — the drafting of the plaint and the choice of relief genuinely shapes how the case proceeds.",
];

const faqs = [
  {
    question: "What is the khula procedure in Pakistan?",
    answer:
      "Khula is filed as a suit for dissolution of marriage in the Family Court under the Dissolution of Muslim Marriages Act 1939 and the Family Courts Act 1964. The wife does not need to prove fault by the husband — Pakistani courts, following Khurshid Bibi v. Baboo Khan (PLD 1967 SC 97), recognize her right to end a marriage she can no longer continue within the limits prescribed by Allah. The court typically first refers the matter to a reconciliation attempt, and may require the wife to return some or all of her haq mehr as a condition of the decree.",
  },
  {
    question: "What are a wife's divorce rights in Pakistan?",
    answer:
      "A wife can seek dissolution of marriage through khula in the Family Court, or, if her nikahnama grants her talaq-e-tafweez (delegated right of divorce), she may be able to pronounce talaq herself under that delegated authority. She also retains her right to unpaid haq mehr, maintenance during iddat under most interpretations, and to seek custody of young children based on the child's welfare.",
  },
  {
    question: "How is child custody decided in family law cases in Pakistan?",
    answer:
      "Family Courts decide custody primarily based on the welfare of the child, considering age, the child's own preference where old enough, and each parent's capacity to care for them. Mothers are typically preferred for hizanat (physical custody) of younger children under generally followed Hanafi practice, while fathers usually remain legal guardians — but courts can and do depart from this based on the specific facts.",
  },
  {
    question: "Does a divorced wife get maintenance in Pakistan?",
    answer:
      "Maintenance during a valid marriage is a husband's clear obligation. After divorce, most interpretations followed in Pakistani courts recognize maintenance during the iddat period. Beyond iddat, ongoing spousal maintenance is more contested and fact-specific — but child maintenance continues as a separate, ongoing obligation on the father regardless of who has custody.",
  },
  {
    question: "Can Wakeel.org help with a family law matter?",
    answer:
      "Wakeel.org can explain terms like khula, talaq-e-tafweez, hizanat, or nafaqa in plain English or Urdu, help you organize the facts and documents for a family law consultation, and summarize a nikahnama or family court notice. It cannot represent you, decide your case, or predict a court's ruling on custody, maintenance, or mehr — family law is deeply fact-specific, and a licensed family law advocate should review your actual situation.",
  },
  {
    question: "What are a woman's rights in divorce under Pakistani law?",
    answer:
      "A woman can seek khula in the Family Court without proving fault, or exercise talaq-e-tafweez if her nikahnama delegates that right to her. She keeps her claim to unpaid haq mehr regardless of how the marriage ends, is generally entitled to maintenance during the iddat period after divorce under most interpretations followed in Pakistani courts, and can seek custody of young children based on the child's welfare. Each of these is a distinct legal right, not a single bundled outcome — a family law advocate can confirm which apply to your specific nikahnama and situation.",
  },
  {
    question: "How does khula work in Pakistan from start to finish?",
    answer:
      "The wife files a suit for dissolution of marriage in the Family Court under the Dissolution of Muslim Marriages Act 1939, stating that she cannot continue the marriage within the limits prescribed by Allah — she does not need to prove the husband is at fault. The court typically attempts reconciliation first through the Union Council's Arbitration Council. If reconciliation fails, the court grants the khula decree, often on the condition that the wife returns some or all of her haq mehr. The overall timeline varies by court and contested facts, so ask your lawyer for a realistic estimate for your specific case.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Common Family Law Rights in Pakistan",
    description:
      "A clear guide to family law rights in Pakistan — khula, talaq, custody, maintenance, and haq mehr — grounded in the actual statutes and leading case law.",
    author: { "@type": "Organization", name: "Wakeel.org" },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-06-05",
    dateModified: "2026-06-05",
    mainEntityOfPage: `${site.url}/journal/article/family-law-rights-pakistan`,
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
        name: "Common Family Law Rights in Pakistan",
        item: `${site.url}/journal/article/family-law-rights-pakistan`,
      },
    ],
  },
];

const keywords = [
  "khula procedure pakistan",
  "divorce rights pakistan",
  "family law pakistan",
  "talaq procedure pakistan",
  "child custody pakistan",
  "haq mehr pakistan",
  "maintenance nafaqa pakistan",
  "what are a woman's rights in divorce under pakistani law",
  "how does khula work in pakistan",
].join(", ");

export default function FamilyLawRightsPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Common Family Law Rights in Pakistan"
        description="Family law rights in Pakistan explained plainly — khula, talaq, custody, maintenance, and haq mehr — grounded in the actual statutes and case law."
        path="/journal/article/family-law-rights-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Legal Help · Published June 5, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Common Family Law Rights in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Family law questions rarely come with a calm mind attached. Here's what Pakistani law
            actually says about khula, divorce, custody, and maintenance — explained plainly, with
            the real statutes behind it, so you can walk into a lawyer's office already informed.
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
                Family matters in Pakistan run through the <strong>Family Courts Act 1964</strong>,
                the <strong>Muslim Family Laws Ordinance 1961</strong>, and the{" "}
                <strong>Dissolution of Muslim Marriages Act 1939</strong>. A wife can seek{" "}
                <strong>khula</strong> without proving fault; a husband's <strong>talaq</strong> must
                be notified to the Union Council and takes effect after 90 days; custody is decided
                on the child's welfare; and maintenance and haq mehr remain the wife's separate,
                enforceable rights. Every case turns on its specific facts — this is general
                information, not a substitute for a family law advocate.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Topics */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>The core rights and rules</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {topics.map((t) => {
              const Icon = t.icon;
              return (
                <Card key={t.title} className={cardBase}>
                  <CardHeader>
                    <Icon className="h-7 w-7 text-primary" />
                    <CardTitle className="text-lg">{t.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{t.detail}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Before court */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className={sectionHeading}>Before you file anything</h2>
          </div>
          <Card className={cardBase}>
            <CardContent className="p-6">
              <ul className="space-y-3">
                {beforeCourt.map((b) => (
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
                  Explaining khula, talaq, hizanat, or nafaqa in simple English or Urdu.
                  Summarizing your nikahnama or a family court notice. Helping you organize the
                  facts, dates, and documents a family law advocate will need — privately, and at
                  your own pace.
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
                  It cannot decide your case, represent you in Family Court, or predict a
                  custody, maintenance, or mehr outcome. Family law is deeply fact-sensitive —
                  always verify your specific situation with a licensed family law advocate.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Understand your situation with Wakeel Free
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
            General educational information, not legal advice. Family law outcomes depend heavily
            on individual facts — please consult a licensed family law advocate for your specific
            situation. See our{" "}
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
              href="/journal/legal-issues-pakistan/family-law-guidance-pakistan"
              className={`group ${cardBase} block rounded-lg p-5`}
            >
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                Family Law Guidance in Pakistan
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
            <Link href="/disclaimer" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                Disclaimer
              </p>
              <p className="text-xs text-muted-foreground mt-1">What Wakeel is — and isn't</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Facing a family law situation?</h2>
          <p className="text-muted-foreground">
            You don't have to sort through unfamiliar legal terms alone. Ask Wakeel in English or
            Urdu, then take what you've organized to a family law advocate.
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
