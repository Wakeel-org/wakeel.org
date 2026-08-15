import Link from "next/link";
import {
  CheckCircle2,
  Landmark,
  Scale,
  Gavel,
  BookOpen,
  Users,
  HelpCircle,
  AlertTriangle,
  Layers,
} from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site } from "../../../src/data/marketing";
import { cardBase, headingGradient, sectionHeading } from "../../../src/data/theme";

const pillars = [
  {
    icon: Landmark,
    title: "The Constitution sits at the top",
    detail:
      "The Constitution of the Islamic Republic of Pakistan, 1973 is the supreme law — Article 8 makes any law inconsistent with fundamental rights void to that extent. Every statute, ordinance, and rule below it has to work within the framework it sets, including the federal-provincial division of powers.",
  },
  {
    icon: Layers,
    title: "A hybrid of common law, codified statutes, and Islamic law",
    detail:
      "Pakistan inherited British common law method — precedent, adversarial trials, the structure of courts — but its substantive law is heavily codified (the Pakistan Penal Code 1860, the CPC 1908, the Contract Act 1872) rather than judge-made. Since the 1970s–80s, mechanisms like the Federal Shariat Court and the Council of Islamic Ideology also review laws for consistency with Islamic injunctions, making the system a genuine hybrid rather than a pure common law transplant.",
  },
  {
    icon: Users,
    title: "Federal and provincial legislatures share the lawmaking power",
    detail:
      "After the 18th Amendment (2010) abolished the Concurrent Legislative List, most subjects — health, education, agriculture, local government — became exclusively provincial. Parliament legislates on the Federal Legislative List (defence, currency, foreign affairs, and more); each provincial assembly legislates for its province on everything else. This is why laws like rent control or consumer protection differ by province.",
  },
  {
    icon: Gavel,
    title: "A dual court structure: superior and subordinate judiciary",
    detail:
      "The superior judiciary — the Supreme Court, the High Courts, and the Federal Shariat Court — has constitutional status and broad appellate and constitutional powers. Below it sits the subordinate (district) judiciary — District & Sessions Judges, Civil Judges, and Judicial Magistrates — which handles the overwhelming majority of cases that actually get filed.",
  },
  {
    icon: Scale,
    title: "Civil and criminal law run on separate procedural codes",
    detail:
      "Civil disputes (property, contracts, family, commercial) proceed under the Code of Civil Procedure 1908. Criminal cases proceed under the Code of Criminal Procedure 1898. The substantive rules differ too: civil law borrows heavily from the Contract Act 1872 and Transfer of Property Act 1882, while criminal law is anchored in the Pakistan Penal Code 1860 plus a growing set of special laws (PECA 2016, the Anti-Terrorism Act 1997, NAB Ordinance 1999).",
  },
  {
    icon: BookOpen,
    title: "Precedent binds — but only in a defined hierarchy",
    detail:
      "Article 189 makes Supreme Court decisions binding on every other court in Pakistan. Article 201 makes a High Court's decisions binding on courts subordinate to it within that province. This is why a legal question can have a settled answer in Lahore and a genuinely open one in Karachi until the Supreme Court rules on it directly.",
  },
];

const misconceptions = [
  {
    title: "\"Pakistani law is basically Sharia law.\"",
    detail:
      "Islam is the state religion and Article 227 requires existing laws to be brought into conformity with Islamic injunctions, with the Federal Shariat Court (Article 203) empowered to examine laws on that basis. But the operating legal system for contracts, property, companies, and most crimes is codified statute law with common law procedure — not a Sharia court system in the way the phrase often implies.",
  },
  {
    title: "\"One national law covers everything.\"",
    detail:
      "Since the 18th Amendment, huge areas of everyday law — tenancy, labour, consumer protection, local taxes — are provincial. A Punjab statute and a Sindh statute on the same topic can differ meaningfully, which is exactly why this Journal's guides on tenant rights or consumer complaints have to speak province by province rather than assume one national rule.",
  },
  {
    title: "\"If it's not in the news, there's no legal process for it.\"",
    detail:
      "Pakistan has specialised forums most citizens never hear about until they need one — Labour Courts, Banking Courts, Consumer Courts, the Federal and Provincial Ombudsman offices, the National Industrial Relations Commission. Knowing the right forum, not just the right law, is often the actual bottleneck in getting a matter resolved.",
  },
];

const faqs = [
  {
    question: "Is Pakistan a common law country?",
    answer:
      "Broadly yes, in method — Pakistan inherited the British common law tradition of precedent, adversarial trials, and court hierarchy. But its law is far more codified than England's, and constitutional mechanisms like the Federal Shariat Court add an Islamic-law review layer that doesn't exist in most common law systems. It's most accurately described as a hybrid system.",
  },
  {
    question: "What is the highest law in Pakistan?",
    answer:
      "The Constitution of the Islamic Republic of Pakistan, 1973. Article 8 makes any law inconsistent with the Fundamental Rights chapter void to the extent of that inconsistency, and Article 6 protects the constitutional order itself from subversion.",
  },
  {
    question: "What is the court hierarchy in Pakistan?",
    answer:
      "From the top: the Supreme Court of Pakistan, then the High Courts (one per province plus the Islamabad High Court) and the Federal Shariat Court, then the subordinate judiciary — District & Sessions Courts, Civil Judges, and Judicial Magistrates — plus specialised tribunals like Labour Courts, Banking Courts, and Anti-Terrorism Courts for specific subject matter.",
  },
  {
    question: "What's the difference between federal and provincial law in Pakistan?",
    answer:
      "Parliament legislates on subjects in the Federal Legislative List (Fourth Schedule to the Constitution) — defence, currency, foreign affairs, and more. Since the 18th Amendment (2010) removed the Concurrent List, everything not on the Federal List is presumptively a provincial subject, legislated separately by each of the four provincial assemblies (plus Gilgit-Baltistan and Azad Jammu & Kashmir under their own arrangements).",
  },
  {
    question: "How can Wakeel.org help me understand Pakistani law?",
    answer:
      "Wakeel.org can explain which law or forum is likely relevant to your situation, summarize statutes and documents in plain English or Urdu, and help you organize facts and questions before you see a lawyer — grounded in the actual statute or article it's citing rather than a generic answer. It cannot tell you how a specific court will rule, represent you, or replace a licensed advocate's judgment on your exact facts.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Pakistan Law: Complete Guide to the Legal System",
    description:
      "A foundational guide to how Pakistan's legal system actually works — the Constitution, the federal-provincial split, the court hierarchy, and how civil and criminal law fit together.",
    author: { "@type": "Organization", name: "Wakeel.org" },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-08-15",
    dateModified: "2026-08-15",
    mainEntityOfPage: `${site.url}/journal/article/pakistan-legal-system-guide`,
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
        name: "Pakistan Law: Complete Guide to the Legal System",
        item: `${site.url}/journal/article/pakistan-legal-system-guide`,
      },
    ],
  },
];

const keywords = [
  "pakistan legal system",
  "pakistan law guide",
  "is pakistan a common law country",
  "court hierarchy in pakistan",
  "federal legislative list pakistan",
  "18th amendment pakistan",
  "constitution of pakistan 1973",
  "sources of law in pakistan",
].join(", ");

export default function PakistanLegalSystemGuide() {
  return (
    <Layout>
      <MarketingSEO
        title="Pakistan Law: Complete Guide to the Legal System"
        description="How Pakistan's legal system actually works — the Constitution, common law method, the federal-provincial split, the court hierarchy, and how civil and criminal law fit together."
        path="/journal/article/pakistan-legal-system-guide"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Law Study & Research · Published August 15, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Pakistan Law: Complete Guide to the Legal System
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Most explanations of "Pakistani law" jump straight to a specific problem — a notice, an
            FIR, a contract — without ever laying out how the system actually fits together. Start
            here first; every other guide on this Journal builds on what's below.
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
                Pakistan runs a <strong>hybrid legal system</strong>: British common law method and
                court structure, heavily <strong>codified</strong> statutes rather than pure
                judge-made law, and an Islamic-law review layer through the Federal Shariat Court.
                The 1973 <strong>Constitution</strong> is supreme; below it, law splits between{" "}
                <strong>federal</strong> and <strong>provincial</strong> legislatures, and cases
                move through a <strong>dual court structure</strong> — superior judiciary (Supreme
                Court, High Courts, Federal Shariat Court) and subordinate (district) judiciary.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educate: pillars */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>The six pieces that make up the system</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pillars.map((r) => {
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

      {/* Reveal: misconceptions */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className={sectionHeading}>Three things people get wrong about it</h2>
          </div>
          <div className="space-y-4">
            {misconceptions.map((m) => (
              <Card key={m.title} className={cardBase}>
                <CardContent className="p-6">
                  <p className="font-semibold text-sm mb-2">{m.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{m.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
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
                  Pointing you to the right law and forum for your situation, explaining
                  constitutional and statutory concepts in plain English or Urdu, and grounding its
                  answers in the actual article or section it's relying on so you can verify it
                  yourself.
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
                  It cannot predict how a specific court will rule, represent you, or substitute
                  for a licensed advocate's judgment once your situation moves from "which law
                  applies" to "what should I actually do."
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel which law applies to you — free
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
              { label: "Pakistan Penal Code, 1860 — Pakistan Code (Ministry of Law and Justice)", href: "https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apaUY2Npa5lo-sg-jjjjjjjjjjjjj" },
              { label: "Code of Civil Procedure, 1908 — Pakistan Code (Ministry of Law and Justice)", href: "https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apeb-sg-jjjjjjjjjjjjj" },
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
            <Link href="/journal/article/pakistani-law-vs-common-law" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Pakistani Law vs Common Law: What's Actually Different</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/constitution-of-pakistan-1973-fundamental-rights" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Constitution of Pakistan 1973: Fundamental Rights</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/how-courts-work-in-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How Courts Work in Pakistan</p>
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
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Have a specific legal question?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel in your own words, in English or Urdu, and get pointed to the actual law
            and forum that applies — then verify next steps with a licensed advocate.
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
