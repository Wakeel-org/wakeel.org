import Link from "next/link";
import {
  CheckCircle2,
  Scale,
  BookOpen,
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

const facts = [
  { icon: BookOpen, title: "A colonial-era provision, largely unchanged in text", detail: "Section 377 PPC — titled \"unnatural offences\" — was carried into the Pakistan Penal Code from the pre-partition Indian Penal Code of 1860, and its core wording has remained largely the same since." },
  { icon: Scale, title: "What the section covers", detail: "It punishes whoever voluntarily has carnal intercourse against the order of nature with any man, woman, or animal. The section applies regardless of consent between the parties involved — consent is not a defence under its wording." },
  { icon: Gavel, title: "Punishment", detail: "The section prescribes imprisonment (which can extend to life imprisonment) and a fine. As with any PPC offence, the exact punishment applied in a given case depends on the specific facts and the court's determination." },
  { icon: BookOpen, title: "Cognizable and non-bailable", detail: "Like other serious offences under the PPC, a case under Section 377 is treated as cognizable and non-bailable, meaning police can investigate without prior magisterial order and bail is a matter of judicial discretion rather than an automatic right." },
];

const context = [
  "Provisions worded similarly to Section 377 exist across a number of former British colonies because they share a common 19th-century legislative origin — this is a documented feature of comparative colonial legal history, not unique to Pakistan.",
  "The scope, interpretation, and application of the section in specific cases is a matter for the courts, based on the facts and evidence in each case — this article describes what the statute states, not how any particular case would be decided.",
  "Because the offence and its consequences are serious, and because interpretation can be fact-specific and evolving through case law, anyone dealing with a matter potentially involving this section should get a licensed criminal lawyer involved immediately rather than relying on general information.",
];

const faqs = [
  {
    question: "What does Section 377 of the Pakistan Penal Code cover?",
    answer:
      "Section 377 PPC, titled \"unnatural offences,\" punishes carnal intercourse against the order of nature with any man, woman, or animal. It's a provision inherited from the pre-1947 Indian Penal Code of 1860 and has remained largely unchanged in wording since.",
  },
  {
    question: "Is Section 377 PPC a bailable offence?",
    answer:
      "No — like other serious offences under the PPC, it's treated as cognizable and non-bailable, meaning bail is granted or refused at the court's discretion under Sections 497/498 CrPC, based on the specific facts, rather than being an automatic entitlement.",
  },
  {
    question: "Where did Section 377 PPC come from?",
    answer:
      "It traces back to the Indian Penal Code of 1860, drafted during British colonial rule and inherited by Pakistan's own Penal Code after 1947 with substantially the same wording. Similarly worded provisions exist in the penal codes of a number of other former British colonies for the same historical reason.",
  },
  {
    question: "How is Section 377 PPC applied in practice?",
    answer:
      "As with any criminal provision, application depends on the specific facts of a case, the evidence presented, and the court's interpretation — this is a matter of case law and judicial determination, not something a general explainer can predict for any individual situation.",
  },
  {
    question: "Can Wakeel.org explain a case involving Section 377 PPC?",
    answer:
      "Wakeel.org can explain what the section states and its general legal position, in plain English or Urdu. It cannot advise on a specific case, predict how a court will interpret the facts, or represent anyone — a licensed criminal lawyer should be consulted for any actual matter.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Section 377 PPC: Law Explained in Pakistan",
    description:
      "What Section 377 of the Pakistan Penal Code actually states, its colonial-era origin, and how it fits into Pakistan's criminal procedure — a factual, statute-focused explainer.",
    author: { "@type": "Organization", name: "Wakeel.org" },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-01-18",
    dateModified: "2026-01-18",
    mainEntityOfPage: `${site.url}/journal/article/section-377-ppc-explained-pakistan`,
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
        name: "Section 377 PPC: Law Explained in Pakistan",
        item: `${site.url}/journal/article/section-377-ppc-explained-pakistan`,
      },
    ],
  },
];

const keywords = [
  "section 377 ppc",
  "section 377 pakistan explained",
  "unnatural offences ppc pakistan",
  "section 377 punishment pakistan",
].join(", ");

export default function Section377PpcExplainedPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Section 377 PPC: Law Explained in Pakistan"
        description="What Section 377 of the Pakistan Penal Code actually states, its origin, and how it fits into Pakistan's criminal procedure — a factual, statute-focused explainer."
        path="/journal/article/section-377-ppc-explained-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>
            Legal Help · Published January 18, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Section 377 PPC: Law Explained in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A factual look at what this section of the Pakistan Penal Code actually states, where
            it came from, and how it's procedurally treated — without editorial commentary.
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
                <strong>Section 377 PPC</strong> ("unnatural offences") punishes carnal intercourse
                against the order of nature, and applies regardless of consent under its wording.
                It carries imprisonment (up to life) and a fine, and is treated as a{" "}
                <strong>cognizable, non-bailable</strong> offence. It's a provision inherited from
                the 1860 Indian Penal Code, largely unchanged in text since. Application to any
                specific case depends on facts and evidence, decided by the courts.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educate: facts */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>What the section states</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {facts.map((r) => {
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

      {/* Reveal: context */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className={sectionHeading}>Context worth understanding</h2>
          </div>
          <Card className={cardBase}>
            <CardContent className="p-6">
              <ul className="space-y-3">
                {context.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Scale className="h-5 w-5 text-primary shrink-0 mt-0.5" />
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
                  Explaining what the section states and its general legal position, in plain
                  English or Urdu.
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
                  It cannot advise on a specific case, predict how a court will interpret the
                  facts, or represent anyone — a licensed criminal lawyer should be consulted for
                  any actual matter.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel to explain the law — free
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
              { label: "Pakistan Penal Code, 1860 — Pakistan Code (Ministry of Law and Justice)", href: "https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apaUY2Npa5lo-sg-jjjjjjjjjjjjj" },
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
            <Link href="/journal/article/common-legal-sections-dafaat-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Common Legal Sections (Dafaat) in Pakistan Explained</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/how-to-get-bail-in-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Bail in Pakistan: How to Get Bail in a Criminal Case</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/criminal-law-in-pakistan-guide" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Criminal Law in Pakistan: Complete Guide</p>
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
          <h2 className={sectionHeading}>Need to understand this section?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel to explain the statute in plain terms — then consult a licensed criminal
            lawyer for any specific matter.
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
