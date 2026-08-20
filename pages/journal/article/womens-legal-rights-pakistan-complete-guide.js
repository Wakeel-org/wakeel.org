import Link from "next/link";
import {
  CheckCircle2,
  Scale,
  Heart,
  Landmark,
  ShieldAlert,
  Briefcase,
  HelpCircle,
  AlertTriangle,
} from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site } from "../../../src/data/marketing";
import { cardBase, headingGradient, sectionHeading } from "../../../src/data/theme";

const pillars = [
  { icon: Landmark, title: "Constitutional equality", detail: "Article 25 of the Constitution guarantees equality before law and equal protection of law, and expressly permits special provisions for the protection of women — the constitutional foundation every women-specific statute below builds on." },
  { icon: Heart, title: "Marriage, mehr, and divorce rights", detail: "The Muslim Family Laws Ordinance 1961 secures a wife's haq mehr as an enforceable debt, requires Arbitration Council permission before a second marriage, and sets the notice procedure for talaq — covered in depth in our marriage law guides." },
  { icon: Scale, title: "Inheritance rights", detail: "Wives, mothers, daughters, and sisters are fixed legal heirs under Islamic inheritance law, with Section 498-A of the Pakistan Penal Code specifically criminalising deprivation of a woman's inheritance." },
  { icon: ShieldAlert, title: "Protection from anti-women customs and violence", detail: "The Prevention of Anti-Women Practices Act 2011 criminalises customs like Vani and Swara and forced marriage, while provincial domestic violence and harassment laws add further protection layers." },
  { icon: Briefcase, title: "Workplace and property protection", detail: "The Protection against Harassment of Women at the Workplace Act 2010 and, in Punjab, the Enforcement of Women's Property Rights Act 2021 give women dedicated complaint routes outside the ordinary court system." },
];

const faqs = [
  {
    question: "What are the main legal rights of women in Pakistan?",
    answer:
      "Constitutional equality under Article 25, enforceable haq mehr and marriage protections under the Muslim Family Laws Ordinance 1961, fixed inheritance shares as legal heirs, protection from anti-women customs under the Prevention of Anti-Women Practices Act 2011, and dedicated remedies against workplace harassment and property deprivation.",
  },
  {
    question: "Can a woman be forced into marriage in Pakistan?",
    answer:
      "No — forced marriage, including customs like Vani and Swara used to settle disputes, is a specific criminal offence under Section 310-A of the Pakistan Penal Code, added by the Prevention of Anti-Women Practices Act 2011.",
  },
  {
    question: "What can a woman do if she's harassed at work in Pakistan?",
    answer:
      "The Protection against Harassment of Women at the Workplace Act 2010 requires organisations to have an internal inquiry committee and gives a complainant the right to escalate to an Ombudsperson if the internal process fails or is inadequate.",
  },
  {
    question: "Where can a woman get free legal help in Pakistan?",
    answer:
      "District Legal Empowerment Committees, bar association free-consultation initiatives, and legal aid NGOs are covered in our dedicated guide on free legal advice in Pakistan — worth checking before assuming legal help is financially out of reach.",
  },
  {
    question: "Can Wakeel.org help a woman understand her legal rights?",
    answer:
      "Wakeel.org can explain which law applies to a specific situation — marriage, inheritance, workplace, or violence — in plain English or Urdu, and help organize facts and documents for a lawyer. It cannot file a complaint, represent anyone, or guarantee an outcome — a licensed advocate should handle the actual case.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Women's Legal Rights in Pakistan: Complete Guide",
    description:
      "A foundational guide to women's legal rights in Pakistan — constitutional equality, marriage and inheritance protections, anti-violence laws, and workplace harassment remedies.",
    author: { "@type": "Organization", name: "Wakeel.org" },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-01-07",
    dateModified: "2026-01-07",
    mainEntityOfPage: `${site.url}/journal/article/womens-legal-rights-pakistan-complete-guide`,
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
        name: "Women's Legal Rights in Pakistan: Complete Guide",
        item: `${site.url}/journal/article/womens-legal-rights-pakistan-complete-guide`,
      },
    ],
  },
];

const keywords = [
  "women's legal rights pakistan",
  "women rights law pakistan",
  "prevention of anti-women practices act 2011",
  "harassment workplace women pakistan",
  "women inheritance rights pakistan",
  "women domestic violence law pakistan",
].join(", ");

export default function WomensLegalRightsPakistanCompleteGuide() {
  return (
    <Layout>
      <MarketingSEO
        title="Women's Legal Rights in Pakistan: Complete Guide"
        description="A foundational guide to women's legal rights in Pakistan — constitutional equality, marriage and inheritance protections, anti-violence laws, and workplace harassment remedies."
        path="/journal/article/womens-legal-rights-pakistan-complete-guide"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Legal Help · Published January 7, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Women's Legal Rights in Pakistan: Complete Guide
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From constitutional equality down to a specific workplace complaint route, Pakistani
            law gives women more protection on paper than most people realise. Here's the
            framework — and every dedicated guide on this Journal that builds on it.
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
                Women's legal rights in Pakistan rest on{" "}
                <strong>Article 25 of the Constitution</strong> (equality) and are built out
                through specific statutes: the{" "}
                <a href="http://punjablaws.gov.pk/laws/777a.html" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
                  Muslim Family Laws Ordinance 1961
                </a>{" "}
                for marriage and mehr, fixed Islamic inheritance shares backed by{" "}
                <strong>Section 498-A PPC</strong>, the{" "}
                <a href="https://pcsw.punjab.gov.pk/prevention_of_anti_women_practices" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
                  Prevention of Anti-Women Practices Act 2011
                </a>{" "}
                against forced marriage and customs like Vani, and dedicated workplace and property
                remedies.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educate: pillars */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>The framework, piece by piece</h2>
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

      {/* Reveal: prose with inline sources */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <h2 className={sectionHeading}>Why "knowing the law" and "getting the remedy" are different</h2>
          <p className="text-muted-foreground leading-relaxed">
            Pakistan's legal framework for women is genuinely substantial — the{" "}
            <a href="https://na.gov.pk/uploads/documents/1329729400_262.pdf" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
              Criminal Law (Third Amendment) Act 2011
            </a>{" "}
            alone added specific offences for inheritance deprivation, forced marriage, and marriage
            to the Quran as a punitive custom. But a right that exists in statute only becomes real
            once someone actually uses the forum built for it — an Arbitration Council, a Family
            Court, a workplace inquiry committee, or, in Punjab, the{" "}
            <a href="http://punjablaws.gov.pk/laws/2789.html" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
              Enforcement of Women's Property Rights Act 2021
            </a>{" "}
            Ombudsperson.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            That's why this guide links out to dedicated pieces on marriage, mehr, inheritance, and
            specific anti-women practices — each one covers the actual forum and process, not just
            the underlying right, because that's usually where a woman's case is actually won or
            lost.
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
                  Explaining which law and forum applies to a specific situation, in plain English
                  or Urdu, and helping organize facts and documents before you see a lawyer.
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
                  It cannot file a complaint, represent anyone, or guarantee an outcome — a licensed
                  advocate should handle the actual case.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel about your rights — free
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
              { label: "The Criminal Law (Third Amendment) Act, 2011 — National Assembly of Pakistan", href: "https://na.gov.pk/uploads/documents/1329729400_262.pdf" },
              { label: "Prevention of Anti-Women Practices Act, 2011 — Punjab Commission on the Status of Women", href: "https://pcsw.punjab.gov.pk/prevention_of_anti_women_practices" },
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
            <Link href="/journal/article/womens-rights-wani-swara-cases-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Women's Rights in Wani and Swara Cases</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/inheritance-rights-women-daughters-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Inheritance Rights of Women and Daughters in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/human-rights-pakistan-constitutional-remedies" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Human Rights in Pakistan: Constitutional Rights and Remedies</p>
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
          <h2 className={sectionHeading}>Have a specific rights question?</h2>
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
