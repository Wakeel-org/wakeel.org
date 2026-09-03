import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Landmark,
  Scale,
  BookOpen,
  Gavel,
  HelpCircle,
  Layers,
  Globe,
} from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site } from "../../../src/data/marketing";
import { cardBase, eyebrow, headingGradient, sectionHeading } from "../../../src/data/theme";

const foundations = [
  {
    icon: Landmark,
    title: "Pakistan's legal system is a hybrid, not a pure common law system",
    detail:
      "Pakistan inherited the common law tradition from British India — case law, adversarial procedure, and the doctrine of precedent are all central to how Pakistani courts work. But it layers Islamic law (particularly in family and some criminal matters, via the Federal Shariat Court) and its own written Constitution of 1973 on top of that base. Calling it 'just common law' misses this layered structure.",
  },
  {
    icon: Gavel,
    title: "Precedent still binds, but through a specific hierarchy",
    detail:
      "As in classic common law systems, Pakistani courts follow stare decisis: decisions of the Supreme Court bind all lower courts, and High Court decisions bind subordinate courts within that province. This is a genuine common law feature — but Pakistan's courts also interpret decisions against a written Constitution, which pure historical common law (built mostly on unwritten convention) does not require.",
  },
  {
    icon: BookOpen,
    title: "Codified statutes carry enormous weight",
    detail:
      "Much of Pakistan's substantive law is codified in statutes inherited or adapted from the British colonial period — the Pakistan Penal Code 1860, the Code of Civil Procedure 1908, the Code of Criminal Procedure 1898 (now largely continued under Pakistan's own Cr.P.C. framework), and the Contract Act 1872. This is closer to how civil law systems operate (comprehensive codes) than how pure common law traditionally functioned (judge-made law with statutes filling gaps) — another reason Pakistan is best described as hybrid.",
  },
  {
    icon: Scale,
    title: "The Federal Shariat Court is a distinctly Pakistani institution",
    detail:
      "No historical common law jurisdiction has an equivalent to the Federal Shariat Court, established under the Constitution to examine whether laws are repugnant to the injunctions of Islam. Its judgments can strike down legislation on Islamic law grounds — a check that doesn't exist in England, the US, or India's legal systems in the same form.",
  },
  {
    icon: Layers,
    title: "A written, supreme Constitution shapes everything",
    detail:
      "The Constitution of Pakistan, 1973 is the supreme law — any statute or executive action inconsistent with it can be struck down by the superior courts under their constitutional jurisdiction (Articles 184 and 199, for instance). Classic common law countries like the UK historically lacked a single written constitution altogether; Pakistan's constitutional supremacy is a structural difference worth understanding, not just a technicality.",
  },
  {
    icon: Globe,
    title: "How it compares to India, the UK, and the US",
    detail:
      "Pakistan and India share the same colonial-era legal DNA — both inherited British statutes and the common law method, then diverged constitutionally after 1947. The UK has no single written constitution and (outside devolved arrangements) a different relationship between Parliament and courts. The US has a written Constitution like Pakistan, but no Federal Shariat Court equivalent, and a federal structure with separate state common law traditions. Pakistan's blend of common law method, codified statutes, Islamic law review, and constitutional supremacy is genuinely its own arrangement.",
  },
];

const quickCompare = [
  { row: "Judge-made precedent binds lower courts", pk: true },
  { row: "Comprehensive codified statutes for major areas", pk: true },
  { row: "Written, supreme Constitution", pk: true },
  { row: "Islamic law review body (Federal Shariat Court)", pk: true },
  { row: "Jury trials for most cases", pk: false },
  { row: "Single unified national court system with no provincial law variation", pk: false },
];

const faqs = [
  {
    question: "Is Pakistan a common law country?",
    answer:
      "Pakistan is best described as a hybrid system. It inherited the common law tradition — case law, precedent, adversarial procedure — from British colonial rule, and its courts still follow stare decisis. But it also relies heavily on codified statutes, has a written supreme Constitution, and includes the Federal Shariat Court to review laws against Islamic law. It isn't a pure common law system in the historical English sense, nor a civil law system — it's a distinct blend.",
  },
  {
    question: "What is the Pakistani legal system based on?",
    answer:
      "It's based on several layered sources: British colonial-era statutes and common law method (inherited largely unchanged in areas like contract and civil procedure), the Constitution of Pakistan 1973 as the supreme law, Islamic law principles applied especially in family law and reviewed by the Federal Shariat Court, and an ongoing body of Pakistani case law built by the Supreme Court and High Courts.",
  },
  {
    question: "What is the CrPC in Pakistan and where does it come from?",
    answer:
      "The Code of Criminal Procedure (Cr.P.C.), originally enacted in 1898 under British India, is the primary statute governing criminal procedure in Pakistan — how FIRs are registered (Section 154), how investigations proceed, bail procedure, and trial process. It has been amended repeatedly since independence but its core colonial-era structure remains the backbone of Pakistani criminal procedure.",
  },
  {
    question: "How is Pakistan's legal system different from India's?",
    answer:
      "Both share the same starting point — British colonial law and the common law method — since they were part of the same legal system before 1947. Since then, they've diverged: Pakistan added the Federal Shariat Court and Islamic law review mechanisms not present in India's system, and each country has independently developed its own constitutional jurisprudence, statutes, and case law over more than seven decades.",
  },
  {
    question: "Can Wakeel.org explain Pakistani legal concepts for comparative study?",
    answer:
      "Yes — Wakeel.org can explain how Pakistani legal doctrines work, summarize the historical background of specific statutes, and help structure comparative notes for coursework. It cannot substitute for a comparative law textbook or a professor's guidance on exam-specific analysis, and its explanations should be checked against your course materials and primary legal texts.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Pakistani Law vs Common Law: What's Actually Different",
    description:
      "Pakistan's legal system explained honestly — how it inherited common law, where it diverges through codification, the Constitution, and the Federal Shariat Court.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-07-01",
    dateModified: "2026-07-01",
    mainEntityOfPage: `${site.url}/journal/article/pakistani-law-vs-common-law`,
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
        name: "Pakistani Law vs Common Law",
        item: `${site.url}/journal/article/pakistani-law-vs-common-law`,
      },
    ],
  },
];

const keywords = [
  "crpc pakistan explained",
  "pakistani legal system",
  "common law pakistan",
  "pakistan legal system explained",
  "is pakistan a common law country",
  "federal shariat court pakistan",
].join(", ");

export default function PakistaniLawVsCommonLaw() {
  return (
    <Layout>
      <MarketingSEO
        title="Pakistani Law vs Common Law: What's Different"
        description="Is Pakistan a common law country? How its legal system diverged through codification, the Constitution, and Islamic law review."
        path="/journal/article/pakistani-law-vs-common-law"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>
            Law Study &amp; Research · Published July 1, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Pakistani Law vs Common Law: What's Actually Different
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            "Pakistan is a common law country" is technically half-true and often taught without
            the other half. Here's the fuller picture — useful whether you're studying for an LLB
            paper or just trying to understand why your case doesn't work like it does on American TV.
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
                Pakistan inherited the <strong>common law method</strong> — precedent, adversarial
                procedure, judge-made interpretation — from British colonial rule, and that
                foundation still holds. But it is layered with heavily <strong>codified
                statutes</strong>, a <strong>written supreme Constitution</strong> (1973), and{" "}
                <strong>Islamic law review</strong> through the Federal Shariat Court — features
                that go beyond a pure historical common law system. The honest answer is: hybrid,
                not purely one or the other.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Foundations */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>The structure, piece by piece</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {foundations.map((f) => {
              const Icon = f.icon;
              return (
                <Card key={f.title} className={cardBase}>
                  <CardHeader>
                    <Icon className="h-7 w-7 text-primary" />
                    <CardTitle className="text-lg">{f.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.detail}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick compare */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className={sectionHeading}>Common law features in Pakistan's system</h2>
          </div>
          <Card className={cardBase}>
            <CardContent className="p-2 sm:p-4">
              <ul className="divide-y divide-border">
                {quickCompare.map((row) => (
                  <li key={row.row} className="flex items-center justify-between gap-4 px-3 py-3">
                    <span className="text-sm text-muted-foreground">{row.row}</span>
                    <span
                      className={`text-sm font-semibold shrink-0 ${
                        row.pk ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {row.pk ? "Yes" : "No"}
                    </span>
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
                  Explaining how doctrines like stare decisis, judicial review, or the Federal
                  Shariat Court's role actually work in Pakistan. Building comparative study notes.
                  Answering follow-up questions in plain English or Urdu as you work through course
                  material.
                </p>
              </CardContent>
            </Card>
            <Card className={cardBase}>
              <CardHeader>
                <Scale className="h-6 w-6 text-primary" />
                <CardTitle className="text-lg">What it cannot do</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  It cannot replace your textbook, professor, or primary legal texts, and it
                  cannot guarantee it captures every academic nuance a specific exam expects —
                  always verify against your assigned readings.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Build your study notes with Wakeel Free
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
            General educational information for study purposes, not legal advice. Legal
            classification debates can be nuanced — verify against your course syllabus and
            primary sources. See our{" "}
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
              href="/journal/legal-issues-pakistan/crpc-sections-explained"
              className={`group ${cardBase} block rounded-lg p-5`}
            >
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                CrPC Sections Explained for Pakistan
              </p>
              <p className="text-xs text-muted-foreground mt-1">Guide · Wakeel Journal</p>
            </Link>
            <Link
              href="/journal/legal-issues-pakistan/constitution-of-pakistan-notes"
              className={`group ${cardBase} block rounded-lg p-5`}
            >
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                Constitution of Pakistan Notes
              </p>
              <p className="text-xs text-muted-foreground mt-1">Guide · Wakeel Journal</p>
            </Link>
            <Link
              href="/journal/article/wakeel-ai-for-law-students-pakistan"
              className={`group ${cardBase} block rounded-lg p-5`}
            >
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                Wakeel AI for Law Students in Pakistan
              </p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/law-students" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                Wakeel.org for Law Students
              </p>
              <p className="text-xs text-muted-foreground mt-1">Study support built for LLB students</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Studying Pakistani jurisprudence?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel to explain a doctrine, compare legal systems, or build exam notes — in
            English or Urdu, at your own pace.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">Try Wakeel Free</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/law-students">Wakeel for law students</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
