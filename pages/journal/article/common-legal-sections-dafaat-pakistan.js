import Link from "next/link";
import {
  CheckCircle2,
  ShieldAlert,
  HelpCircle,
  AlertTriangle,
} from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site } from "../../../src/data/marketing";
import { cardBase, eyebrow, headingGradient, sectionHeading } from "../../../src/data/theme";

const ppcSections = [
  { code: "302 PPC", title: "Qatl-i-amd (murder)", detail: "Punishment for intentional killing — one of the most serious offences under the Pakistan Penal Code, carrying death or life imprisonment depending on the facts and, in Qisas/Diyat cases, the choices of the victim's legal heirs." },
  { code: "324 PPC", title: "Attempt to commit qatl-i-amd", detail: "Covers an act done with the intention or knowledge to cause death, where death does not actually result. Frequently charged alongside 302 when the outcome of an assault is uncertain or the victim survives." },
  { code: "337 PPC (A–V)", title: "Hurt (Qisas categories)", detail: "A family of subsections defining different degrees and types of bodily hurt under the Qisas and Diyat framework — from simple hurt to hurt causing permanent disability — each with its own punishment and, in some categories, the possibility of Qisas (retribution) or Diyat (compensation)." },
  { code: "354 PPC", title: "Assault or criminal force to woman with intent to outrage her modesty", detail: "Covers physical assault or force against a woman intended or likely to outrage her modesty, short of the more serious offences defined separately." },
  { code: "379 PPC", title: "Theft", detail: "Dishonestly taking movable property out of someone's possession without consent — the baseline theft provision that more specific offences (like 381 for theft by a clerk/servant) build on." },
  { code: "406 PPC", title: "Criminal breach of trust", detail: "Covers dishonest misappropriation of property entrusted to someone — commonly relevant in employer-employee, partner, or agent disputes over money or goods handled on another's behalf." },
  { code: "420 PPC", title: "Cheating and dishonestly inducing delivery of property", detail: "The classic fraud provision — deceiving someone into handing over property or altering a valuable security. Covered in depth in our dedicated guide (linked below)." },
  { code: "489-F PPC", title: "Dishonestly issuing a cheque", detail: "Criminalises issuing a cheque knowing there won't be sufficient funds to honour it, with intent to deceive — a common charge in commercial and rent disputes when a post-dated cheque bounces." },
  { code: "124-A PPC", title: "Sedition", detail: "Covers acts or words intended to bring the government into hatred, contempt, or excite disaffection against it — a section frequently in the news, and one where the boundary with protected speech under Article 19 of the Constitution is actively contested in the courts." },
];

const crpcSections = [
  { code: "154 CrPC", title: "Registration of an FIR", detail: "Requires an officer in charge of a police station to record information disclosing a cognizable offence — the mandatory first step in a criminal case. See our full guide on filing an FIR (linked below)." },
  { code: "161 CrPC", title: "Police examination of witnesses", detail: "Empowers police to orally examine any person acquainted with the facts of a case during investigation and record their statement — these statements are not signed by the witness and generally can't be used as substantive evidence at trial, only to contradict a witness." },
  { code: "164 CrPC", title: "Statement or confession recorded by a Magistrate", detail: "Allows a Magistrate to record a statement or confession during investigation, with specific safeguards (like confirming a confession is voluntary) that make it carry far more evidentiary weight than a police statement under Section 161." },
  { code: "173 CrPC", title: "Police report (challan)", detail: "The report police submit to the Magistrate once investigation is complete, summarising the evidence and stating whether there's sufficient ground to proceed to trial. This is what most people mean when they ask if the \"challan has been submitted.\"" },
  { code: "200 CrPC", title: "Private complaint to a Magistrate", detail: "Lets a person approach a Magistrate directly with a complaint, without going through the police — a route worth knowing about when police refuse to act on a report." },
  { code: "497 & 498 CrPC", title: "Bail", detail: "Section 497 governs bail in non-bailable offences (where it's discretionary, subject to specific grounds); Section 498 covers the wider power of the High Court or Sessions Court to grant bail. These are the two sections behind almost every bail hearing you'll hear about." },
];

const useNotes = [
  "A section number alone tells you the label, not the outcome — the same section can apply very differently depending on the specific facts, any amendments in force, and how the courts in your jurisdiction have interpreted it.",
  "Many PPC sections interact with special laws that override or supplement them — cybercrime under PECA 2016, terrorism-related offences under the Anti-Terrorism Act 1997, or narcotics offences under the Control of Narcotic Substances Act 1997 are tried under different procedures entirely.",
  "\"Dafaat\" (دفعات) is simply the Urdu plural for legal sections — when someone asks \"kis dafa ke tehat case darj hai\" (under which section was the case filed), they're asking exactly this: which PPC or CrPC provision applies to their situation.",
  "Never rely on a section number you've only heard secondhand — verify the actual text against the official Pakistan Code, and confirm with a lawyer how it applies to your specific facts before you act on it.",
];

const faqs = [
  {
    question: "What does \"dafaat\" mean in Pakistani law?",
    answer:
      "Dafaat (دفعات) is the Urdu word for \"sections\" — the numbered provisions of a statute like the Pakistan Penal Code (PPC) or the Code of Criminal Procedure (CrPC). When someone refers to \"Dafa 302\" they mean Section 302 of the PPC (qatl-i-amd/murder).",
  },
  {
    question: "What is Section 302 PPC?",
    answer:
      "Section 302 of the Pakistan Penal Code defines and punishes qatl-i-amd (intentional killing/murder). Depending on the facts and, in Qisas/Diyat cases, the wishes of the victim's legal heirs, punishment can include death, life imprisonment, or in certain circumstances Ta'zir imprisonment — this is genuinely fact-specific and needs a lawyer's read.",
  },
  {
    question: "What is the difference between Section 154 and Section 200 CrPC?",
    answer:
      "Section 154 CrPC is the route through the police — reporting a cognizable offence so an FIR gets registered. Section 200 CrPC is a private complaint filed directly with a Magistrate, useful when you want the court to take cognizance without relying on police registration, though the Magistrate can still direct a police inquiry first.",
  },
  {
    question: "What is Section 420 PPC used for?",
    answer:
      "Section 420 PPC covers cheating and dishonestly inducing someone to deliver property, or to alter or destroy a valuable security, as a result of that deception. It's the standard fraud charge in cases involving fake investment schemes, forged documents used to obtain money, or deceptive business dealings. See our dedicated Section 420 guide for the full breakdown.",
  },
  {
    question: "Can Wakeel.org explain a specific PPC or CrPC section to me?",
    answer:
      "Yes — Wakeel.org can explain what a specific section says, in plain English or Urdu, and how it generally applies. It cannot tell you how a section applies to your exact facts, predict the outcome of a case, or replace a licensed advocate's judgment — verify anything important with a lawyer before you act.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Common Legal Sections (Dafaat) in Pakistan Explained",
    description:
      "Plain-language explanations of the PPC and CrPC sections cited most often in Pakistan — murder, theft, fraud, FIR registration, bail, and more — with what each one actually covers.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-03-21",
    dateModified: "2026-03-21",
    mainEntityOfPage: `${site.url}/journal/article/common-legal-sections-dafaat-pakistan`,
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
        name: "Common Legal Sections (Dafaat) in Pakistan Explained",
        item: `${site.url}/journal/article/common-legal-sections-dafaat-pakistan`,
      },
    ],
  },
];

const keywords = [
  "dafaat pakistan",
  "common legal sections pakistan",
  "ppc sections list",
  "crpc sections list",
  "section 302 ppc",
  "section 420 ppc",
  "section 154 crpc",
  "section 497 crpc bail",
  "pakistan penal code sections explained",
].join(", ");

export default function CommonLegalSectionsDafaatPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Common Legal Sections (Dafaat) in Pakistan Explained"
        description="Plain-language explanations of the PPC and CrPC sections cited most often in Pakistan — murder, theft, fraud, FIR registration, bail, and more."
        path="/journal/article/common-legal-sections-dafaat-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>
            Law Study & Research · Published March 21, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Common Legal Sections (Dafaat) in Pakistan Explained
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            "Dafa 420," "dafa 302," "497 ki zamanat" — Pakistani legal conversation runs on section
            numbers most people have heard but never actually looked up. Here's what the ones that
            come up most often actually say.
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
                <strong>Dafaat (دفعات)</strong> is simply Urdu for "sections." Most everyday legal
                conversation in Pakistan revolves around a small set of provisions from the{" "}
                <strong>Pakistan Penal Code (PPC) 1860</strong> — like 302 (murder), 379 (theft), and
                420 (cheating) — and the <strong>Code of Criminal Procedure (CrPC) 1898</strong> —
                like 154 (FIR registration) and 497/498 (bail). Knowing the label is useful; knowing
                how it applies to your specific facts requires a lawyer.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educate: PPC */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>Pakistan Penal Code (PPC) — the sections people ask about most</h2>
          </div>
          <div className="space-y-4">
            {ppcSections.map((s) => (
              <Card key={s.code} className={cardBase}>
                <CardContent className="p-5 flex flex-col sm:flex-row gap-4 sm:items-start">
                  <span className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1.5 text-sm font-semibold text-primary shrink-0 self-start">
                    {s.code}
                  </span>
                  <div>
                    <p className="font-semibold text-sm">{s.title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-1">{s.detail}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Educate: CrPC */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>Code of Criminal Procedure (CrPC) — the sections that shape how a case moves</h2>
          </div>
          <div className="space-y-4">
            {crpcSections.map((s) => (
              <Card key={s.code} className={cardBase}>
                <CardContent className="p-5 flex flex-col sm:flex-row gap-4 sm:items-start">
                  <span className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1.5 text-sm font-semibold text-primary shrink-0 self-start">
                    {s.code}
                  </span>
                  <div>
                    <p className="font-semibold text-sm">{s.title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-1">{s.detail}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reveal: caveats */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className={sectionHeading}>Why a section number is a starting point, not an answer</h2>
          </div>
          <Card className={cardBase}>
            <CardContent className="p-6">
              <ul className="space-y-3">
                {useNotes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <ShieldAlert className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How Wakeel helps / can't do */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-6">
            <Card className={cardBase}>
              <CardHeader>
                <CheckCircle2 className="h-6 w-6 text-primary" />
                <CardTitle className="text-lg">What Wakeel.org can help with</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Explaining what a specific PPC or CrPC section says, in plain English or Urdu, and
                  how it's generally applied — grounded in the actual statutory text rather than a
                  paraphrase you can't verify.
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
                  It cannot tell you which section(s) a police officer or court should have applied
                  to your specific facts, predict a case outcome, or replace a licensed advocate's
                  advice on strategy or defence.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel about a section number — free
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background py-16 sm:py-20">
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
            General educational information, not legal advice. Section text and applicable
            amendments change over time — verify against the official Pakistan Code and a licensed
            advocate before acting. See our{" "}
            <Link href="/disclaimer" className="text-primary hover:underline">full disclaimer</Link>.
          </p>
        </div>
      </section>

      {/* Sources */}
      <section className="bg-muted/40 py-14 sm:py-16">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-semibold text-foreground mb-4">Sources and further reading</h2>
          <ul className="space-y-2">
            {[
              { label: "Pakistan Penal Code, 1860 — Pakistan Code (Ministry of Law and Justice)", href: "https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apaUY2Npa5lo-sg-jjjjjjjjjjjjj" },
              { label: "Code of Criminal Procedure, 1898 — Pakistan Code (Ministry of Law and Justice)", href: "https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apaUY2Npa5lp-sg-jjjjjjjjjjjjj" },
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
            <Link href="/journal/article/section-420-ppc-fraud-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Section 420 PPC: Fraud and Cheating in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/how-to-register-fir-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to Register an FIR in Pakistan</p>
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
          <h2 className={sectionHeading}>Heard a section number and want to know what it means?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel about any PPC or CrPC section, in English or Urdu, and get a plain-language
            explanation grounded in the actual text — then verify with a licensed advocate.
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
