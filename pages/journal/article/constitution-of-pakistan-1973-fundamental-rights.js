import Link from "next/link";
import {
  CheckCircle2,
  ShieldCheck,
  Scale,
  Heart,
  GraduationCap,
  Gavel,
  HelpCircle,
  AlertTriangle,
  BookOpen,
} from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site } from "../../../src/data/marketing";
import { cardBase, eyebrow, headingGradient, sectionHeading } from "../../../src/data/theme";

const rights = [
  {
    icon: Heart,
    title: "Article 9 — Security of person",
    detail:
      "No person shall be deprived of life or liberty save in accordance with law. This is the foundation for challenging unlawful detention, and it underpins habeas corpus petitions to the High Courts.",
  },
  {
    icon: ShieldCheck,
    title: "Article 10 & 10-A — Safeguards on arrest and the right to a fair trial",
    detail:
      "Article 10 requires an arrested person be informed of the grounds of arrest and produced before a magistrate within 24 hours. Article 10-A, added by the 18th Amendment (2010), separately guarantees every person a fair trial and due process for the determination of their civil rights and obligations or any criminal charge — a standalone right courts now cite often.",
  },
  {
    icon: Scale,
    title: "Article 25 — Equality of citizens",
    detail:
      "All citizens are equal before law and entitled to equal protection of law, with no discrimination on the basis of sex alone. It permits special provisions for the protection of women and children, which is the constitutional basis for laws like domestic violence and child protection legislation.",
  },
  {
    icon: GraduationCap,
    title: "Article 25-A — Right to education",
    detail:
      "Also added by the 18th Amendment, this makes free and compulsory education a state obligation for all children aged 5 to 16, in the manner determined by law. It's one of the newer, more directly enforceable social rights in the chapter.",
  },
  {
    icon: BookOpen,
    title: "Articles 19 & 20 — Expression, religion, and their limits",
    detail:
      "Article 19 protects freedom of speech and the press, subject to \"reasonable restrictions\" for reasons like the glory of Islam, the security of Pakistan, public order, decency, and morality. Article 20 protects the right to profess, practise, and propagate one's religion, subject to law, public order, and morality. Both rights are real but not absolute — the restrictions are themselves litigated regularly.",
  },
  {
    icon: Gavel,
    title: "Article 8 — Laws inconsistent with fundamental rights are void",
    detail:
      "This is the enforcement backbone of the whole chapter: any law, custom, or usage having the force of law, to the extent it's inconsistent with the Fundamental Rights chapter, is void. It's what makes Articles 9 through 28 more than a statement of principle.",
  },
];

const enforcement = [
  "Article 199 lets you petition the relevant High Court for the enforcement of a fundamental right where no adequate alternate remedy exists — the writ jurisdiction covered in our companion guide.",
  "Article 184(3) gives the Supreme Court original jurisdiction to make an order on a question of \"public importance with reference to the enforcement of any of the Fundamental Rights\" — historically used for high-profile public interest cases, not routine individual disputes.",
  "Article 187 additionally lets the Supreme Court issue directions and orders necessary for doing complete justice in any case pending before it.",
  "In practice, most day-to-day rights disputes still get resolved through the ordinary statute and court system — the constitutional route is powerful but reserved for cases with no other adequate remedy.",
];

const faqs = [
  {
    question: "What are the fundamental rights under the Constitution of Pakistan?",
    answer:
      "They're set out in Articles 8 to 28 of the Constitution (Part II, Chapter 1), and include security of person, safeguards on arrest, the right to a fair trial, freedom of movement, assembly, and association, freedom of speech, freedom of religion, equality before law, the right to property, and the right to education, among others. Article 8 makes any law inconsistent with these rights void.",
  },
  {
    question: "How were fundamental rights expanded by the 18th Amendment?",
    answer:
      "The 18th Amendment (2010) added Article 10-A (the right to a fair trial and due process) and Article 25-A (the right to free and compulsory education for children aged 5–16) — both now among the most frequently cited provisions in constitutional litigation.",
  },
  {
    question: "Are fundamental rights in Pakistan absolute?",
    answer:
      "No. Most are subject to \"reasonable restrictions\" specified in the Constitution itself — for example, Article 19's protection of speech is subject to restrictions relating to the glory of Islam, security of Pakistan, public order, decency, and morality. Whether a specific restriction is genuinely \"reasonable\" is a question courts decide case by case.",
  },
  {
    question: "How do I enforce a fundamental right in Pakistan?",
    answer:
      "Typically by filing a writ petition under Article 199 before the relevant High Court, provided no adequate alternate remedy exists. In cases of genuine public importance, the Supreme Court can also be approached directly under Article 184(3). For most individual disputes, though, the ordinary court and statutory process — not a constitutional petition — is the actual route.",
  },
  {
    question: "Can Wakeel.org explain the Constitution of Pakistan?",
    answer:
      "Wakeel.org can explain specific constitutional articles in plain English or Urdu, help you understand which article is relevant to your situation, and summarize case law concepts at a general level. It cannot tell you how a court will rule on a specific constitutional petition or file one for you — that needs a licensed advocate experienced in constitutional practice.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Constitution of Pakistan 1973: Complete Guide to Fundamental Rights",
    description:
      "A plain-language guide to the Fundamental Rights chapter of Pakistan's 1973 Constitution — what Articles 8 to 28 actually protect, what the 18th Amendment added, and how these rights get enforced.",
    author: { "@type": "Organization", name: "Wakeel.org" },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-03-12",
    dateModified: "2026-03-12",
    mainEntityOfPage: `${site.url}/journal/article/constitution-of-pakistan-1973-fundamental-rights`,
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
        name: "Constitution of Pakistan 1973: Fundamental Rights",
        item: `${site.url}/journal/article/constitution-of-pakistan-1973-fundamental-rights`,
      },
    ],
  },
];

const keywords = [
  "constitution of pakistan 1973",
  "fundamental rights pakistan",
  "article 199 pakistan",
  "article 184(3) pakistan",
  "18th amendment pakistan",
  "article 10a pakistan",
  "article 25a pakistan",
  "fundamental rights chapter pakistan constitution",
].join(", ");

export default function ConstitutionFundamentalRights() {
  return (
    <Layout>
      <MarketingSEO
        title="Constitution of Pakistan 1973: Complete Guide to Fundamental Rights"
        description="What Articles 8 to 28 of Pakistan's 1973 Constitution actually protect, what the 18th Amendment added, and how fundamental rights get enforced through the courts."
        path="/journal/article/constitution-of-pakistan-1973-fundamental-rights"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>
            Law Study & Research · Published March 12, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Constitution of Pakistan 1973: Complete Guide to Fundamental Rights
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            "Fundamental rights" gets invoked constantly in Pakistani public life — but the actual
            chapter that creates them, Articles 8 through 28, is precise about what it protects,
            what it doesn't, and how those protections are meant to be enforced.
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
                Pakistan's Fundamental Rights are set out in <strong>Articles 8–28</strong> of the
                1973 Constitution — covering life and liberty, fair trial, equality, freedom of
                expression and religion, and (since the <strong>18th Amendment, 2010</strong>) the
                right to a fair trial (Article 10-A) and to education (Article 25-A). Under{" "}
                <strong>Article 8</strong>, any law inconsistent with them is void. They're
                enforced mainly through a High Court writ petition under <strong>Article 199</strong>,
                or in matters of genuine public importance, directly before the Supreme Court under{" "}
                <strong>Article 184(3)</strong>.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educate: rights */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>The rights that come up most often</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {rights.map((r) => {
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

      {/* Reveal: enforcement */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className={sectionHeading}>Having a right and enforcing it are two different things</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              A right on paper doesn't act on its own — here's how these actually get enforced in
              practice.
            </p>
          </div>
          <Card className={cardBase}>
            <CardContent className="p-6">
              <ul className="space-y-3">
                {enforcement.map((item) => (
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
                  Explaining a specific constitutional article in plain English or Urdu, helping you
                  identify which right and which enforcement route (Article 199 vs 184(3)) may be
                  relevant, and grounding its answers in the constitutional text itself.
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
                  It cannot draft or file a writ petition, predict how a High Court or the Supreme
                  Court will rule, or replace a licensed advocate's judgment on whether your facts
                  meet the "no adequate alternate remedy" threshold.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel about a specific article — free
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
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`${sectionHeading} text-center mb-8`}>Related reading</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/journal/article/writ-jurisdiction-high-courts-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Writ Jurisdiction of High Courts in Pakistan Explained</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/pakistan-legal-system-guide" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Pakistan Law: Complete Guide to the Legal System</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/legal-issues-pakistan/fir-refused-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">What to Do if Police Refuse to Register an FIR</p>
              <p className="text-xs text-muted-foreground mt-1">Guide · Wakeel Journal</p>
            </Link>
            <Link href="/legal-sources" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Our Approach to Legal Sources</p>
              <p className="text-xs text-muted-foreground mt-1">How Wakeel grounds answers in Pakistani law</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Trying to understand a specific right?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel about a constitutional article, in English or Urdu, and get a plain-language
            explanation grounded in the actual text — then verify next steps with a licensed advocate.
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
