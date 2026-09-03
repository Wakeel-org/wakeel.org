import Link from "next/link";
import {
  CheckCircle2,
  Wallet,
  Gavel,
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

const framework = [
  { icon: Wallet, title: "Nafaqah is a legal duty, not a favor", detail: "Maintenance — nafaqah — is a husband's legal obligation to financially support his wife during a valid marriage, and a father's obligation to support his children until they reach adulthood, drawn from Islamic law and enforced through Pakistani statute, not something either party can simply opt out of." },
  { icon: Gavel, title: "Two laws work together to enforce it", detail: "The Muslim Family Laws Ordinance 1961 sets out the Arbitration Council route — a wife can apply to the Union Council Chairman, who constitutes an Arbitration Council to determine the maintenance amount if the husband fails to pay adequately. The Family Courts Act 1964 is the litigation route, letting a wife or a child (through a guardian) file a maintenance suit directly in Family Court." },
  { icon: Users, title: "Maintenance can be ordered as an interim measure", detail: "Family Courts can grant interim maintenance while a case is still pending, so a wife or children aren't left without support for the months or years a full case can take — a meaningful protection separate from the final maintenance order." },
  { icon: AlertTriangle, title: "Evasion is the practical problem, not the law itself", detail: "The maintenance process is procedurally simple on paper, but its effectiveness often breaks down when a respondent evades service of the court notice or conceals income — which is why documenting a husband's actual income and assets matters as much as the legal filing itself." },
];

const faqs = [
  {
    question: "What is nafaqah in Pakistani law?",
    answer:
      "Nafaqah is maintenance — the legal obligation of a husband to financially support his wife during a valid marriage, and of a father to support his children until adulthood, recognised in Islamic law and enforced under the Muslim Family Laws Ordinance 1961 and the Family Courts Act 1964.",
  },
  {
    question: "How does a wife claim maintenance in Pakistan?",
    answer:
      "She can apply to the Union Council Chairman under the Muslim Family Laws Ordinance 1961 to constitute an Arbitration Council, or file a maintenance suit directly in the Family Court under the Family Courts Act 1964 — the Family Court route also allows a request for interim maintenance while the case is pending.",
  },
  {
    question: "Can children claim maintenance separately from the mother?",
    answer:
      "Yes. A father's duty to maintain his children is a separate legal obligation from any duty owed to the wife, and a maintenance suit for children can be filed through a guardian in the Family Court under the Family Courts Act 1964.",
  },
  {
    question: "Does maintenance stop after divorce in Pakistan?",
    answer:
      "A husband's maintenance obligation to a wife is generally tied to a subsisting marriage, but obligations toward children continue regardless of the parents' marital status, and a wife may be entitled to maintenance during her iddat period after divorce — the specifics depend on the facts and are worth confirming with a lawyer.",
  },
  {
    question: "Can Wakeel.org tell me how much maintenance I'm entitled to?",
    answer:
      "Wakeel.org can explain how the maintenance process generally works under the Muslim Family Laws Ordinance 1961 and the Family Courts Act 1964. It cannot calculate a specific maintenance amount, file a case, or represent you — a licensed family law advocate should handle that.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Maintenance (Nafaqah) Rights in Pakistan",
    description:
      "How maintenance (nafaqah) works in Pakistan — the Arbitration Council route under the Muslim Family Laws Ordinance 1961, the Family Court route, and interim maintenance.",
    author: { "@type": "Organization", name: "Wakeel.org" },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-09-03",
    dateModified: "2026-09-03",
    mainEntityOfPage: `${site.url}/journal/article/maintenance-nafaqah-rights-pakistan`,
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
        name: "Maintenance (Nafaqah) Rights in Pakistan",
        item: `${site.url}/journal/article/maintenance-nafaqah-rights-pakistan`,
      },
    ],
  },
];

const keywords = [
  "nafaqah pakistan",
  "maintenance rights wife pakistan",
  "muslim family laws ordinance 1961 maintenance",
  "child maintenance pakistan family court",
  "interim maintenance pakistan",
  "arbitration council maintenance",
].join(", ");

export default function MaintenanceNafaqahRightsPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Maintenance (Nafaqah) Rights in Pakistan"
        description="How maintenance (nafaqah) works in Pakistan — the Arbitration Council route under the Muslim Family Laws Ordinance 1961, the Family Court route, and interim maintenance."
        path="/journal/article/maintenance-nafaqah-rights-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>Legal Help · Published October 3, 2026</p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Maintenance (Nafaqah) Rights in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A husband's and father's duty to provide financial support is a legal obligation with
            two enforcement routes — here's how each one actually works.
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
                A wife or a father's minor children can claim maintenance (nafaqah) either through
                an <strong>Arbitration Council</strong> under the{" "}
                <a href="https://www.mora.gov.pk/SiteImage/Misc/files/MFLO,%201961.pdf" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
                  Muslim Family Laws Ordinance 1961
                </a>{" "}
                (via the Union Council Chairman), or by filing a{" "}
                <strong>maintenance suit directly in the Family Court</strong> under the Family
                Courts Act 1964 — which also allows the court to grant{" "}
                <strong>interim maintenance</strong> while the case is still pending, so support
                isn't delayed until final judgment.
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
          <h2 className={sectionHeading}>Where nafaqah cases actually stall — and why documentation matters</h2>
          <p className="text-muted-foreground leading-relaxed">
            Academic analysis of maintenance law in Pakistan, including work published through the{" "}
            <a href="https://sja.gos.pk/wp-content/uploads/2025/11/Article-on-Maintenacne-of-Wife-Children-by-Noor-Kalmati.pdf" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
              Sindh Judicial Academy
            </a>
            , points to a consistent practical gap: the maintenance framework itself is
            procedurally straightforward, but enforcement weakens when a husband evades being
            formally served with notice, or when his real income is hard to verify — especially in
            informal or cash-based employment. This is exactly why maintenance cases move faster
            and settle more favourably when the applicant comes in with concrete evidence of the
            husband's income, assets, or standard of living, rather than relying on the court to
            uncover it.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            It's also why running the Family Court route (with its interim maintenance option) is
            often more practical than the Arbitration Council route alone for a wife or children who
            need support now rather than after a lengthy proceeding concludes.
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
                  Explaining how the Arbitration Council and Family Court maintenance routes
                  generally work, and what evidence tends to strengthen a claim.
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
                  It cannot calculate what maintenance amount you're owed, file a case, or represent
                  you — a licensed family law advocate should handle that.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel about maintenance — free
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
              { label: "The Muslim Family Laws Ordinance, 1961 — Ministry of Religious Affairs", href: "https://www.mora.gov.pk/SiteImage/Misc/files/MFLO,%201961.pdf" },
              { label: "Maintenance (Nafaqah) in Islam and Comparative Study — Sindh Judicial Academy", href: "https://sja.gos.pk/wp-content/uploads/2025/11/Article-on-Maintenacne-of-Wife-Children-by-Noor-Kalmati.pdf" },
              { label: "The West Pakistan Family Courts Act, 1964 — Punjab Laws", href: "http://punjablaws.gov.pk/laws/2219a.html" },
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
            <Link href="/journal/article/child-custody-laws-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Child Custody Laws in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/khula-in-pakistan-procedure-rights" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Khula in Pakistan: Procedure and Rights</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/divorce-in-pakistan-procedure-rights" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Divorce in Pakistan: Procedure and Rights</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/womens-legal-rights-pakistan-complete-guide" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Women's Legal Rights in Pakistan: Complete Guide</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Not receiving maintenance you're owed?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel how the process generally works — then verify with a licensed family law
            advocate before you file.
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
