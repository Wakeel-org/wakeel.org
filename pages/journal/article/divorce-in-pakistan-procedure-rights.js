import Link from "next/link";
import {
  CheckCircle2,
  Scale,
  Gavel,
  ScrollText,
  Users,
  HelpCircle,
  AlertTriangle,
} from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site } from "../../../src/data/marketing";
import { cardBase, eyebrow, headingGradient, sectionHeading } from "../../../src/data/theme";

const routes = [
  { icon: Gavel, title: "Talaq — divorce by the husband", detail: "A husband pronounces talaq and must give written notice to the Union Council Chairman under Section 7 of the Muslim Family Laws Ordinance 1961, with a copy to the wife. It does not take legal effect until 90 days pass, during which an Arbitration Council attempts reconciliation." },
  { icon: Scale, title: "Khula — dissolution at the wife's initiative", detail: "A wife can seek khula by returning her haq mehr (or an agreed amount) in exchange for release from the marriage, generally pursued through a suit in the Family Court where reconciliation efforts have failed. Courts have increasingly recognized khula as available even without the husband's consent, once the marriage is shown to have irretrievably broken down." },
  { icon: ScrollText, title: "Judicial divorce — the Dissolution of Muslim Marriages Act 1939", detail: "A wife can seek a court-ordered dissolution on specific grounds — including the husband's whereabouts being unknown for four years, failure to maintain her for two years, imprisonment for seven years or more, or cruelty — through a Family Court suit." },
  { icon: Users, title: "Talaq-e-tafweez — a wife exercising a delegated right", detail: "If the nikah nama delegated the right of divorce to the wife (recorded in column 18), she can exercise it herself following broadly the same Union Council notice procedure that applies to a husband's talaq." },
];

const procedureSteps = [
  "Written notice of talaq (or the relevant application for khula/judicial divorce) is submitted to the Union Council Chairman with jurisdiction, with a copy delivered to the other spouse.",
  "The Chairman constitutes an Arbitration Council, which is meant to attempt reconciliation between the parties within the process.",
  "For talaq specifically, it does not become legally effective until 90 days from the date notice was delivered to the Chairman, unless it's earlier revoked.",
  "For khula or judicial divorce, the matter proceeds as a suit before the Family Court under the West Pakistan Family Courts Act 1964, which can also decide connected issues like maintenance, custody, and dower in the same proceeding.",
  "Once finalized, the divorce should be formally registered and a certificate obtained — this matters for remarriage, CNIC updates, and any later legal proceedings.",
];

const faqs = [
  {
    question: "How does divorce actually work in Pakistan?",
    answer:
      "It depends on who is initiating it. A husband pronouncing talaq must give written notice to the Union Council under Section 7 of the Muslim Family Laws Ordinance 1961, with a 90-day period before it takes effect. A wife can seek khula (returning her mehr) or a judicial divorce on specific grounds under the Dissolution of Muslim Marriages Act 1939, generally through a Family Court suit.",
  },
  {
    question: "Does a wife need her husband's consent for khula in Pakistan?",
    answer:
      "Not necessarily — Pakistani courts have increasingly granted khula even without the husband's consent, once it's shown the marriage has irretrievably broken down and the wife is willing to forgo her mehr or an agreed amount to be released from it. The exact approach can still depend on the specific facts and forum.",
  },
  {
    question: "How long does a divorce take to become legally effective in Pakistan?",
    answer:
      "For talaq, it does not take legal effect until 90 days after written notice is delivered to the Union Council Chairman, during which reconciliation is attempted. Khula and judicial divorce proceed as Family Court suits, which can take longer depending on the court's caseload and whether the matter is contested.",
  },
  {
    question: "What issues can be decided alongside a divorce in Pakistan?",
    answer:
      "The Family Court can address connected matters in the same or related proceedings — maintenance (nafaqa), unpaid haq mehr, child custody, and the return or division of dowry items — rather than requiring entirely separate cases for each.",
  },
  {
    question: "Can Wakeel.org help me understand the divorce process?",
    answer:
      "Wakeel.org can explain which route (talaq, khula, judicial divorce, or delegated talaq) may apply to your situation, the Union Council and Family Court procedures involved, and help you organize documents and questions, in plain English or Urdu. It cannot file anything, represent you in court, or predict how your case will be decided — a licensed family lawyer should handle that.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Divorce in Pakistan: Procedure, Rights and Legal Requirements",
    description:
      "How divorce actually works in Pakistan — talaq, khula, judicial divorce, and talaq-e-tafweez — the Union Council notice procedure, the 90-day period, and the Family Court process.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-03-08",
    dateModified: "2026-03-08",
    mainEntityOfPage: `${site.url}/journal/article/divorce-in-pakistan-procedure-rights`,
    citation: [
      { "@type": "CreativeWork", name: "The Muslim Family Laws Ordinance, 1961 — Punjab Laws (official)", url: "http://punjablaws.gov.pk/laws/777a.html" },
      { "@type": "CreativeWork", name: "The Dissolution of Muslim Marriages Act, 1939 — Pakistan Code (Ministry of Law and Justice)", url: "https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-cJaW-sg-jjjjjjjjjjjjj" },
      { "@type": "CreativeWork", name: "The West Pakistan Family Courts Act, 1964 — Pakistan Code (Ministry of Law and Justice)", url: "https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apaUY2Npa5lraQ==-sg-jjjjjjjjjjjjj" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How the divorce process moves in Pakistan",
    step: procedureSteps.map((s, i) => ({ "@type": "HowToStep", name: `Step ${i + 1}`, text: s })),
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
        name: "Divorce in Pakistan: Procedure, Rights and Legal Requirements",
        item: `${site.url}/journal/article/divorce-in-pakistan-procedure-rights`,
      },
    ],
  },
];

const keywords = [
  "divorce in pakistan",
  "divorce procedure pakistan",
  "khula procedure pakistan",
  "judicial divorce pakistan",
  "dissolution of muslim marriages act 1939",
  "family court divorce pakistan",
].join(", ");

export default function DivorceInPakistanProcedureRights() {
  return (
    <Layout>
      <MarketingSEO
        title="Divorce in Pakistan: Procedure, Rights and Legal Requirements"
        description="How divorce actually works in Pakistan — talaq, khula, judicial divorce, and talaq-e-tafweez — the Union Council notice procedure, the 90-day period, and the Family Court process."
        path="/journal/article/divorce-in-pakistan-procedure-rights"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>
            Legal Help · Published March 8, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Divorce in Pakistan: Procedure, Rights and Legal Requirements
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            "Divorce" in Pakistan isn't one process — it's four different legal routes, each with
            its own procedure, forum, and timeline. Here's how each actually works.
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
                A husband's <strong>talaq</strong> needs written Union Council notice and takes
                effect after <strong>90 days</strong>. A wife can seek <strong>khula</strong>{" "}
                (returning her mehr) or a <strong>judicial divorce</strong> on specific grounds
                under the Dissolution of Muslim Marriages Act 1939, generally through the{" "}
                <strong>Family Court</strong>. If delegated in the nikah nama, a wife can also
                exercise <strong>talaq-e-tafweez</strong> herself. Maintenance, mehr, and custody
                can often be decided in the same proceeding.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educate: routes */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>The four routes to divorce</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {routes.map((r) => {
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
            <h2 className={sectionHeading}>How the process actually moves</h2>
          </div>
          <Card className={cardBase}>
            <CardContent className="p-6">
              <ol className="space-y-3">
                {procedureSteps.map((step, i) => (
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
                  Explaining which divorce route may apply to your situation, the Union Council and
                  Family Court process involved, and helping you organize documents and questions
                  for a lawyer.
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
                  It cannot file the notice or suit, represent you before the Union Council or
                  Family Court, or predict how your case will be decided — a licensed family
                  lawyer should handle that.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel about your situation — free
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
              { label: "The Dissolution of Muslim Marriages Act, 1939 — Pakistan Code (Ministry of Law and Justice)", href: "https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-cJaW-sg-jjjjjjjjjjjjj" },
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
            <Link href="/journal/article/talaq-in-pakistan-legal-procedure" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Talaq in Pakistan: Legal Procedure and Requirements</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/haq-mehr-rights-before-after-rukhsati-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Haq Mehr in Pakistan: Rights Before and After Rukhsati</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/family-law-rights-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Common Family Law Rights in Pakistan</p>
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
          <h2 className={sectionHeading}>Going through a divorce?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel to explain the process that applies to your situation — then get a licensed
            family lawyer to act on your specific case.
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
