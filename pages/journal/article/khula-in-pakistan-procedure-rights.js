import Link from "next/link";
import {
  CheckCircle2,
  Scale,
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
  { icon: Scale, title: "Khula is the wife's right — not the husband's permission", detail: "Section 10 of the West Pakistan Family Courts Act 1964 lets a wife seek dissolution of marriage through khula without her husband's consent, if she satisfies the court that the marriage cannot continue \"within the limits of Allah\" (Hudood-e-Allah) — meaning she can no longer fulfil the marriage's obligations in good conscience." },
  { icon: Gavel, title: "The Khurshid Bibi principle still governs today", detail: "The Supreme Court's landmark ruling in the Khurshid Bibi case settled the core standard still applied by Family Courts: if a wife satisfies the court that the spouses cannot live together within the limits ordained by Allah, she is entitled to khula — the court doesn't need the husband's agreement, only its own satisfaction." },
  { icon: Users, title: "Reconciliation comes first, procedurally", detail: "After a khula petition is filed in the Family Court, the court issues notice to the husband and holds reconciliation proceedings. If he doesn't appear or reconciliation fails, the court proceeds — including ex parte, in his absence, if he refuses to participate." },
  { icon: AlertTriangle, title: "Khula usually costs something financially", detail: "Under Section 10(5) of the Family Courts Act 1964, a wife obtaining khula typically has to relinquish her unpaid (deferred) dower and may need to return a portion of dower already received — a real trade-off worth discussing with a lawyer before filing, since the exact amount is decided case by case." },
];

const faqs = [
  {
    question: "Can a wife get khula in Pakistan without her husband's consent?",
    answer:
      "Yes. Under Section 10 of the West Pakistan Family Courts Act 1964, a wife can be granted khula without her husband's consent if she satisfies the court that the marriage cannot continue within the limits ordained by Allah — the husband's agreement is not legally required.",
  },
  {
    question: "What is the difference between khula and talaq?",
    answer:
      "Talaq is dissolution of marriage initiated by the husband. Khula is dissolution initiated by the wife through the Family Court, generally requiring her to relinquish some or all of her dower rights, whereas talaq does not carry that financial trade-off for the husband in the same way.",
  },
  {
    question: "Do I lose my haq mehr if I file for khula?",
    answer:
      "Often, at least partly. Section 10(5) of the Family Courts Act 1964 commonly requires a wife seeking khula to give up her unpaid (deferred) dower and, in some cases, return a portion of the dower she already received — the exact terms are decided by the court based on the facts.",
  },
  {
    question: "How long does a khula case take in Pakistan?",
    answer:
      "It varies by court and whether the husband contests the case, but Family Court proceedings are generally designed to move faster than civil suits, especially where the husband doesn't appear and the case proceeds ex parte after failed reconciliation.",
  },
  {
    question: "Can Wakeel.org help me file for khula?",
    answer:
      "Wakeel.org can explain how the khula process generally works and help you understand your rights and likely financial trade-offs before you see a lawyer. It cannot file the petition, represent you in Family Court, or predict how a specific judge will rule — a licensed family law advocate should handle that.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Khula in Pakistan: Procedure and Rights",
    description:
      "How khula works in Pakistan — the wife's right to dissolve a marriage without her husband's consent under the Family Courts Act 1964, the Khurshid Bibi principle, and the dower trade-off.",
    author: { "@type": "Organization", name: "Wakeel.org" },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-09-03",
    dateModified: "2026-09-03",
    mainEntityOfPage: `${site.url}/journal/article/khula-in-pakistan-procedure-rights`,
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
        name: "Khula in Pakistan: Procedure and Rights",
        item: `${site.url}/journal/article/khula-in-pakistan-procedure-rights`,
      },
    ],
  },
];

const keywords = [
  "khula in pakistan",
  "khula procedure pakistan",
  "khula without husband consent",
  "section 10 family courts act 1964",
  "khurshid bibi case khula",
  "khula haq mehr dower",
].join(", ");

export default function KhulaInPakistanProcedureRights() {
  return (
    <Layout>
      <MarketingSEO
        title="Khula in Pakistan: Procedure and Rights"
        description="How khula works in Pakistan — a wife's right to dissolve a marriage without her husband's consent, the Family Court procedure, and the dower trade-off involved."
        path="/journal/article/khula-in-pakistan-procedure-rights"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>Legal Help · Published September 3, 2026</p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Khula in Pakistan: Procedure and Rights
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A wife's right to end a marriage — without her husband's consent. Here's how the
            Family Court process actually works, and what it typically costs.
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
                A wife can file for khula in the <strong>Family Court</strong> under Section 10 of
                the{" "}
                <a href="http://punjablaws.gov.pk/laws/2219a.html" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
                  West Pakistan Family Courts Act 1964
                </a>{" "}
                without needing her husband's consent, if she satisfies the court the marriage
                cannot continue within the limits of Allah — the standard set by the Supreme Court
                in the landmark <strong>Khurshid Bibi</strong> case. The court attempts
                reconciliation first; if that fails, khula is typically granted, usually with the
                wife relinquishing some or all of her unpaid dower.
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
          <h2 className={sectionHeading}>A landmark decision worth understanding, even outside a courtroom</h2>
          <p className="text-muted-foreground leading-relaxed">
            The reason khula works the way it does today traces back to a single Supreme Court
            decision. Before it, lower courts often treated a wife's request to dissolve her
            marriage as something the husband effectively had to agree to. The Supreme Court's
            ruling in the Khurshid Bibi case reframed the standard entirely: the question isn't
            whether the husband consents, it's whether the wife satisfies the court that continuing
            the marriage would mean living outside the limits ordained by Allah. That single
            reframing is why khula functions, in practice, as a court-supervised right rather than
            a negotiation with the husband.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The financial side is where most disputes actually happen in practice — how much of the
            dower gets relinquished, and whether any already-paid amount has to be returned, is
            decided by the Family Court based on the specific facts under Section 10(5) of the 1964
            Act, which is exactly why it's worth getting a lawyer's estimate before filing rather
            than assuming a fixed outcome.
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
                  Explaining how the khula process generally works, what to expect from
                  reconciliation proceedings, and the likely financial trade-offs, in plain English
                  or Urdu.
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
                  It cannot file your khula petition, represent you in Family Court, or predict how
                  much dower a specific judge will require you to relinquish — a licensed advocate
                  should handle that.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel about khula — free
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
              { label: "The West Pakistan Family Courts Act, 1964 — Punjab Laws", href: "http://punjablaws.gov.pk/laws/2219a.html" },
              { label: "The Muslim Family Laws Ordinance, 1961 — Ministry of Religious Affairs", href: "https://www.mora.gov.pk/SiteImage/Misc/files/MFLO,%201961.pdf" },
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
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Talaq in Pakistan: Legal Procedure</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/divorce-in-pakistan-procedure-rights" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Divorce in Pakistan: Procedure and Rights</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/haq-mehr-rights-before-after-rukhsati-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Haq Mehr: Rights Before and After Rukhsati in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/maintenance-nafaqah-rights-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Maintenance (Nafaqah) Rights in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Considering khula?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel to explain the process and likely trade-offs — then verify with a licensed
            family law advocate before you file.
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
