import Link from "next/link";
import {
  CheckCircle2,
  Scale,
  Gavel,
  Users,
  HelpCircle,
  AlertTriangle,
  ShieldAlert,
} from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site } from "../../../src/data/marketing";
import { cardBase, eyebrow, headingGradient, sectionHeading } from "../../../src/data/theme";

const concepts = [
  { icon: ShieldAlert, title: "Qatl-i-amd (Section 300 & 302 PPC)", detail: "Qatl-i-amd is intentional killing — causing death with the intention of causing death, or with the intention of causing an injury the offender knows is likely to cause death. Section 302 PPC prescribes the punishment once an act meets this definition." },
  { icon: Scale, title: "Three punishment routes under Section 302", detail: "Depending on the category of the offence and the evidence available, punishment can be Qisas (retribution, if the case qualifies and the victim's legal heirs don't waive or compound it), death, or imprisonment for life as Ta'zir — the discretionary punishment route used where Qisas doesn't apply." },
  { icon: Users, title: "The role of the victim's legal heirs (waris)", detail: "Under the Qisas and Diyat framework — introduced into the PPC by the Criminal Law (Amendment) Act 1997 — the victim's legal heirs have a recognised role: they may seek Qisas, waive it (Afw), or accept Diyat (compensation) instead, subject to the court's oversight and specific procedural safeguards." },
  { icon: Gavel, title: "Distinct from qatl-i-khata and other categories", detail: "Not every killing is qatl-i-amd. The PPC separately defines qatl-i-khata (death by mistake), qatl bis-sabab, and other categories, each carrying different evidentiary requirements and punishments — which category applies is a fact-specific legal determination, not a label anyone can assign informally." },
];

const investigationNotes = [
  "Murder is a cognizable, non-bailable offence — an FIR under Section 302 PPC (read with Section 154 CrPC) triggers mandatory police investigation, and bail is a matter of judicial discretion under strict conditions, not an entitlement.",
  "The prosecution carries the full burden of proving guilt beyond reasonable doubt — motive, eyewitness or forensic evidence, and the chain of events all typically need to be independently established.",
  "Because the punishment and procedural path (Qisas vs Ta'zir) depend heavily on how the case is framed and proven, a Section 302 case is never something to navigate — on either side — without a licensed criminal lawyer from the earliest possible stage.",
];

const faqs = [
  {
    question: "What is Section 302 PPC?",
    answer:
      "Section 302 of the Pakistan Penal Code, 1860 prescribes the punishment for qatl-i-amd (intentional killing/murder), as defined in Section 300 PPC. Depending on the facts and category of the offence, punishment can be Qisas (retribution), death, or life imprisonment as Ta'zir.",
  },
  {
    question: "What is the difference between Qisas and Ta'zir in a murder case?",
    answer:
      "Qisas is retribution available where the offence and evidence meet specific conditions under the Qisas and Diyat framework, and it can be waived (Afw) or compounded for Diyat (compensation) by the victim's legal heirs. Ta'zir is the discretionary punishment (which can include death or life imprisonment) a court applies where Qisas doesn't apply — for example, where the required evidentiary standard for Qisas isn't met but guilt is otherwise established.",
  },
  {
    question: "Can a murder case be settled privately in Pakistan?",
    answer:
      "In qualifying qatl-i-amd cases, the victim's legal heirs can waive Qisas or accept Diyat under the Qisas and Diyat law, and this can affect the punishment outcome — but this is a formal legal process supervised by the court, not an informal private settlement, and it doesn't apply uniformly to every case (for instance, certain categories and Ta'zir punishments are treated differently). This is exactly the kind of question that needs a criminal lawyer's read on your specific case.",
  },
  {
    question: "Is bail available in a Section 302 PPC case?",
    answer:
      "Murder is a non-bailable offence, meaning bail is discretionary rather than a right. Courts weigh factors like the nature of the evidence, the stage of the case, and the specific facts under Sections 497 and 498 CrPC before deciding — this is highly fact-specific and requires legal representation.",
  },
  {
    question: "Can Wakeel.org explain a murder charge or Section 302 case to me?",
    answer:
      "Wakeel.org can explain what Section 302 PPC and the Qisas/Diyat framework generally mean, in plain English or Urdu, and help you organize questions for a lawyer. It cannot assess evidence, advise on defence or prosecution strategy, or predict a court's decision — a case of this seriousness needs a licensed criminal lawyer immediately.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Section 302 PPC: Murder Law and Punishment in Pakistan",
    description:
      "What Section 302 of the Pakistan Penal Code actually covers — qatl-i-amd, the Qisas and Diyat framework, and how punishment and procedure work in a murder case.",
    author: { "@type": "Organization", name: "Wakeel.org" },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-08-17",
    dateModified: "2026-08-17",
    mainEntityOfPage: `${site.url}/journal/article/section-302-ppc-murder-law-pakistan`,
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
        name: "Section 302 PPC: Murder Law and Punishment in Pakistan",
        item: `${site.url}/journal/article/section-302-ppc-murder-law-pakistan`,
      },
    ],
  },
];

const keywords = [
  "section 302 ppc",
  "murder law pakistan",
  "qatl-i-amd pakistan",
  "qisas and diyat pakistan",
  "murder punishment pakistan",
  "section 300 ppc",
].join(", ");

export default function Section302PpcMurderLawPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Section 302 PPC: Murder Law and Punishment in Pakistan"
        description="What Section 302 of the Pakistan Penal Code covers — qatl-i-amd, the Qisas and Diyat framework, and how punishment and procedure actually work in a murder case."
        path="/journal/article/section-302-ppc-murder-law-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>
            Legal Help · Published August 17, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Section 302 PPC: Murder Law and Punishment in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            "Dafa 302" is one of the most invoked — and least understood — sections of the Pakistan
            Penal Code. Here's what it actually defines, and how Qisas and Ta'zir differ in
            practice.
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
                <strong>Section 302 PPC</strong> punishes <strong>qatl-i-amd</strong> (intentional
                killing, as defined in Section 300 PPC), with punishment following either{" "}
                <strong>Qisas</strong> (retribution, subject to conditions and the legal heirs'
                choices under the Qisas and Diyat framework) or <strong>Ta'zir</strong>{" "}
                (discretionary punishment — death or life imprisonment — where Qisas doesn't
                apply). It is a non-bailable offence, and every stage of a case under this section
                needs a licensed criminal lawyer.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educate: concepts */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>The framework, concept by concept</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {concepts.map((r) => {
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

      {/* Reveal: procedure */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className={sectionHeading}>What actually happens once a case is filed</h2>
          </div>
          <Card className={cardBase}>
            <CardContent className="p-6">
              <ul className="space-y-3">
                {investigationNotes.map((item) => (
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
                  Explaining what Section 302 PPC and the Qisas/Diyat framework generally mean, in
                  plain English or Urdu, and helping you prepare questions for a lawyer.
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
                  It cannot assess evidence, advise on legal strategy, or represent anyone — a case
                  under this section requires a licensed criminal lawyer immediately, on either
                  side.
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
            General educational information, not legal advice. This is a serious criminal matter —
            consult a licensed criminal lawyer immediately for any specific case. See our{" "}
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
      <section className="bg-muted/40 py-16 sm:py-20">
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
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Need to understand a Section 302 case?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel to explain the law in plain terms — then get a licensed criminal lawyer
            involved right away.
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
