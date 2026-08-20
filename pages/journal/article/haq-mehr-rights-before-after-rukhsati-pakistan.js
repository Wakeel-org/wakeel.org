import Link from "next/link";
import {
  CheckCircle2,
  Landmark,
  Clock,
  Gavel,
  ScrollText,
  HelpCircle,
  AlertTriangle,
} from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site } from "../../../src/data/marketing";
import { cardBase, headingGradient, sectionHeading } from "../../../src/data/theme";

const foundations = [
  { icon: Landmark, title: "Haq mehr is the wife's right, not a family transaction", detail: "The dower is a right belonging personally to the wife under Islamic law and, once recorded in the nikah nama, a legally recognized debt owed to her by the husband — it isn't a payment to her family and doesn't belong to anyone else to negotiate away on her behalf." },
  { icon: Clock, title: "Prompt (muajjal) mehr is payable on demand", detail: "If recorded as prompt, the wife is entitled to it essentially on demand after the marriage, independent of rukhsati (the wife moving to the marital home) — rukhsati is a separate social and religious event, not a legal precondition for prompt mehr to become payable." },
  { icon: ScrollText, title: "Deferred (muwajjal) mehr becomes due on a specified event", detail: "If deferred, it typically becomes payable on an event specified in the nikah nama — commonly divorce or the husband's death — though the couple can agree other triggering events. Whether prompt or deferred should be explicit in the nikah nama, not assumed." },
  { icon: Gavel, title: "Unpaid mehr is enforceable as a debt through the Family Court", detail: "If mehr isn't paid when due, the wife can file a suit for its recovery in the Family Court under the West Pakistan Family Courts Act 1964 — this is a straightforward debt-recovery style claim, not something that requires proving fault or wrongdoing." },
];

const commonQuestions = [
  "Rukhsati delay doesn't suspend prompt mehr — if the mehr was recorded as prompt, the wife can generally demand it regardless of whether rukhsati has happened yet.",
  "A wife is not legally required to give up her mehr as a condition of khula — she can offer to return it (or an agreed amount) to secure a khula, but this is a choice within that specific process, not a general rule that mehr disappears whenever a marriage ends.",
  "Informal family pressure to 'forgive' mehr doesn't extinguish the legal right unless the wife genuinely and voluntarily waives it — a waiver obtained through pressure can be challenged.",
  "The amount agreed as mehr at the time of marriage is what's legally owed — it isn't automatically adjusted for inflation or current value unless the nikah nama or a later agreement specifically provides for that.",
];

const faqs = [
  {
    question: "Is haq mehr payable before or after rukhsati in Pakistan?",
    answer:
      "It depends on whether it's recorded as prompt (muajjal) or deferred (muwajjal) in the nikah nama — not on whether rukhsati has happened. Prompt mehr is payable essentially on demand, independent of rukhsati; deferred mehr becomes due on whatever event was specified, commonly divorce or death.",
  },
  {
    question: "Can a husband refuse to pay mehr in Pakistan?",
    answer:
      "Not lawfully, once it's due. If a husband refuses to pay mehr that has become payable, the wife can file a suit for its recovery in the Family Court under the West Pakistan Family Courts Act 1964 — the debt doesn't disappear simply because he refuses.",
  },
  {
    question: "Does a wife lose her mehr if she asks for khula?",
    answer:
      "Not automatically — but khula generally involves the wife offering to return her mehr (or an agreed amount) in exchange for release from the marriage. This is a choice within the khula process specifically, and different from mehr simply being forfeited whenever a marriage ends for any other reason.",
  },
  {
    question: "Can mehr be recovered years after the marriage or divorce?",
    answer:
      "Generally yes, though claims are still subject to the Limitation Act 1908's time limits for filing a suit, so unreasonable delay can weaken a claim procedurally even where the underlying right exists. It's worth pursuing recovery promptly once it's clear the mehr won't be paid voluntarily.",
  },
  {
    question: "Can Wakeel.org help me understand or claim my haq mehr?",
    answer:
      "Wakeel.org can explain whether your mehr appears to be prompt or deferred based on your nikah nama, what that generally means for when it's payable, and how the Family Court recovery process works, in plain English or Urdu. It cannot file a suit, calculate exact amounts owed, or represent you — a licensed family lawyer should handle the actual claim.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Haq Mehr in Pakistan: Rights Before and After Rukhsati",
    description:
      "What haq mehr actually is under Pakistani and Islamic law, the difference between prompt and deferred mehr, and how it's enforced through the Family Court if unpaid.",
    author: { "@type": "Organization", name: "Wakeel.org" },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-04-30",
    dateModified: "2026-04-30",
    mainEntityOfPage: `${site.url}/journal/article/haq-mehr-rights-before-after-rukhsati-pakistan`,
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
        name: "Haq Mehr in Pakistan: Rights Before and After Rukhsati",
        item: `${site.url}/journal/article/haq-mehr-rights-before-after-rukhsati-pakistan`,
      },
    ],
  },
];

const keywords = [
  "haq mehr pakistan",
  "mehr rights before rukhsati",
  "prompt vs deferred mehr pakistan",
  "mehr recovery family court pakistan",
  "haq mehr after divorce pakistan",
  "unpaid mehr pakistan",
].join(", ");

export default function HaqMehrRightsBeforeAfterRukhsatiPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Haq Mehr in Pakistan: Rights Before and After Rukhsati"
        description="What haq mehr actually is under Pakistani and Islamic law, the difference between prompt and deferred mehr, and how it's enforced through the Family Court if unpaid."
        path="/journal/article/haq-mehr-rights-before-after-rukhsati-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Legal Help · Published April 30, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Haq Mehr in Pakistan: Rights Before and After Rukhsati
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            "She'll get her mehr after rukhsati" is one of the most common — and often wrong —
            assumptions about dower in Pakistan. What the nikah nama actually says matters far more
            than the custom.
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
                Haq mehr is the <strong>wife's personal legal right</strong>. Whether it's due
                before or after rukhsati depends on whether the nikah nama records it as{" "}
                <strong>prompt (muajjal)</strong> — payable on demand, regardless of rukhsati — or{" "}
                <strong>deferred (muwajjal)</strong> — payable on a specified later event, commonly
                divorce or death. If unpaid when due, it's recoverable as a{" "}
                <strong>debt through the Family Court</strong>.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educate: foundations */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>The legal foundation</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {foundations.map((r) => {
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

      {/* Reveal: common misunderstandings */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className={sectionHeading}>Where the custom and the law diverge</h2>
          </div>
          <Card className={cardBase}>
            <CardContent className="p-6">
              <ul className="space-y-3">
                {commonQuestions.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
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
                  Explaining whether your mehr appears prompt or deferred based on your nikah nama,
                  what that generally means for when it's payable, and how the recovery process
                  works, in plain English or Urdu.
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
                  It cannot file a suit, calculate exact amounts owed, or represent you — a
                  licensed family lawyer should handle the actual claim.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel about your haq mehr — free
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
            <Link href="/journal/article/nikah-nama-rights-clauses-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Nikah Nama in Pakistan: Rights, Clauses and Legal Requirements</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/divorce-in-pakistan-procedure-rights" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Divorce in Pakistan: Procedure, Rights and Legal Requirements</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/inheritance-rights-women-daughters-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Inheritance Rights of Women and Daughters in Pakistan</p>
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
          <h2 className={sectionHeading}>Unsure about your haq mehr rights?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel to explain your nikah nama's mehr terms — then get a licensed family lawyer
            to help you claim what's legally yours.
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
