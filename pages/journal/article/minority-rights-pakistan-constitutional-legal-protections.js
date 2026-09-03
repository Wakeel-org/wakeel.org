import Link from "next/link";
import {
  CheckCircle2,
  Landmark,
  Scale,
  Users,
  ShieldCheck,
  HelpCircle,
  AlertTriangle,
} from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site } from "../../../src/data/marketing";
import { cardBase, eyebrow, headingGradient, sectionHeading } from "../../../src/data/theme";

const protections = [
  { icon: Landmark, title: "Article 20 — freedom of religion", detail: "Guarantees every citizen the right to profess, practise, and propagate their religion, and every religious denomination the right to establish, maintain, and manage its own religious institutions." },
  { icon: Scale, title: "Article 22 — protection in educational institutions", detail: "No person attending an educational institution can be required to receive religious instruction, or take part in a religious ceremony, relating to a religion other than their own — a direct protection for religious minority students." },
  { icon: Users, title: "Article 36 — safeguarding minority interests", detail: "Directs the State to safeguard the legitimate rights and interests of minorities, including their due representation in federal and provincial services — a constitutional policy directive, not merely an aspiration." },
  { icon: ShieldCheck, title: "A dedicated statutory commission", detail: "The National Commission for Minorities Act 2023 established a statutory body to review the legal and administrative framework affecting minorities, investigate complaints, and monitor implementation of minority-related constitutional safeguards — replacing the earlier, non-statutory commission." },
];

const faqs = [
  {
    question: "What constitutional protections do religious minorities have in Pakistan?",
    answer:
      "Article 20 guarantees freedom to profess, practise, and propagate one's religion; Article 22 protects students from being forced into religious instruction or ceremonies of a religion other than their own; and Article 36 directs the State to safeguard minorities' legitimate rights and interests, including representation in services.",
  },
  {
    question: "Is there a government body specifically for minority rights in Pakistan?",
    answer:
      "Yes — the National Commission for Minorities Act 2023 established a statutory National Commission for Minorities, with a mandate to review laws and policies affecting minorities, investigate complaints, and monitor how constitutional safeguards are actually implemented.",
  },
  {
    question: "Can a student be forced to attend religious instruction of a different faith in Pakistan?",
    answer:
      "No — Article 22 of the Constitution specifically protects against this in educational institutions, regardless of whether the institution is public or receives public funding.",
  },
  {
    question: "What can a minority community member do if their rights are being violated?",
    answer:
      "Options include a complaint to the National Commission for Minorities, a High Court writ petition under Article 199 where a public authority has acted unlawfully, or, in matters of genuine public importance, an approach to the Supreme Court under Article 184(3).",
  },
  {
    question: "Can Wakeel.org explain minority rights protections to me?",
    answer:
      "Wakeel.org can explain the relevant constitutional articles and the National Commission for Minorities' role, in plain English or Urdu, and help organize facts for a complaint or a lawyer. It cannot file a complaint or petition, or represent anyone — a licensed advocate should handle that.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Minority Rights in Pakistan: Constitutional and Legal Protections",
    description:
      "The constitutional protections for religious minorities in Pakistan — Articles 20, 22, and 36 — and the National Commission for Minorities Act 2023.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-02-12",
    dateModified: "2026-02-12",
    mainEntityOfPage: `${site.url}/journal/article/minority-rights-pakistan-constitutional-legal-protections`,
    citation: [
      { "@type": "CreativeWork", name: "The National Commission for Minorities Act, 2023 — National Assembly of Pakistan", url: "https://na.gov.pk/uploads/documents/63f4893540676_512.pdf" },
      { "@type": "CreativeWork", name: "The Constitution of the Islamic Republic of Pakistan, 1973 (up to date, official) — National Assembly of Pakistan", url: "https://www.na.gov.pk/uploads/documents/1549886415_632.pdf" },
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
        name: "Minority Rights in Pakistan: Constitutional and Legal Protections",
        item: `${site.url}/journal/article/minority-rights-pakistan-constitutional-legal-protections`,
      },
    ],
  },
];

const keywords = [
  "minority rights pakistan",
  "national commission for minorities act 2023",
  "article 20 constitution pakistan",
  "article 22 constitution pakistan",
  "religious minority protections pakistan",
  "minority rights complaint pakistan",
].join(", ");

export default function MinorityRightsPakistanConstitutionalLegalProtections() {
  return (
    <Layout>
      <MarketingSEO
        title="Minority Rights in Pakistan: Constitutional and Legal Protections"
        description="The constitutional protections for religious minorities in Pakistan — Articles 20, 22, and 36 — and the National Commission for Minorities Act 2023."
        path="/journal/article/minority-rights-pakistan-constitutional-legal-protections"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>
            Legal Help · Published February 12, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Minority Rights in Pakistan: Constitutional and Legal Protections
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Religious minority rights in Pakistan aren't a single statute — they're built from
            specific constitutional articles and a dedicated statutory commission. Here's what each
            actually protects.
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
                Minority rights rest on <strong>Article 20</strong> (freedom of religion),{" "}
                <strong>Article 22</strong> (protection from forced religious instruction in
                education), and <strong>Article 36</strong> (State duty to safeguard minority
                interests and representation). The{" "}
                <a href="https://na.gov.pk/uploads/documents/63f4893540676_512.pdf" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
                  National Commission for Minorities Act 2023
                </a>{" "}
                created a statutory commission to investigate complaints and monitor how these
                protections are actually implemented.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educate: protections */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>The protections, article by article</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {protections.map((r) => {
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
          <h2 className={sectionHeading}>Why a statutory commission mattered</h2>
          <p className="text-muted-foreground leading-relaxed">
            Pakistan had a National Commission for Minorities as an executive body since 2020, but
            it operated without the backing of dedicated legislation — meaning its powers and
            independence rested on administrative decision rather than statute. The{" "}
            <a href="https://na.gov.pk/uploads/documents/63f4893540676_512.pdf" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
              National Commission for Minorities Act 2023
            </a>{" "}
            changed that by giving the Commission a clear legal mandate, passed by Parliament, to
            investigate complaints and review laws and policies affecting minority communities.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            That distinction matters practically: a statutory commission's findings and its right
            to information carry more institutional weight than an executive body operating
            without underlying legislation — and it's harder to quietly wind down or sideline once
            it exists in law rather than by administrative order alone.
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
                  Explaining the relevant constitutional articles and the Commission's role, in
                  plain English or Urdu, and helping organize facts for a complaint or a lawyer.
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
                  It cannot file a complaint or petition, or represent anyone — a licensed advocate
                  should handle that.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel about minority rights — free
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
              { label: "The National Commission for Minorities Act, 2023 — National Assembly of Pakistan", href: "https://na.gov.pk/uploads/documents/63f4893540676_512.pdf" },
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
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`${sectionHeading} text-center mb-8`}>Related reading</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/journal/article/human-rights-pakistan-constitutional-remedies" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Human Rights in Pakistan: Constitutional Rights and Remedies</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/constitution-of-pakistan-1973-fundamental-rights" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Constitution of Pakistan 1973: Fundamental Rights</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/writ-jurisdiction-high-courts-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Writ Jurisdiction of High Courts in Pakistan Explained</p>
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
          <h2 className={sectionHeading}>Have a minority rights question?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel in English or Urdu — then verify next steps with a licensed advocate.
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
