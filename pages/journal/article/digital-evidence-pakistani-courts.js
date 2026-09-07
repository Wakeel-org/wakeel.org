import Link from "next/link";
import {
  CheckCircle2,
  FileSearch,
  Gavel,
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

const framework = [
  { icon: Gavel, title: "Article 164 — the gateway provision", detail: "Article 164 of the Qanun-e-Shahadat Order 1984 gives courts discretion to allow \"any evidence that may have become available because of modern devices or techniques\" — the provision that lets screenshots, call recordings, CCTV footage, and digital communications into a Pakistani courtroom at all." },
  { icon: FileSearch, title: "Admissibility isn't automatic — authenticity is the test", detail: "Courts don't accept digital evidence just because Article 164 permits it. The evidence still has to pass a test of authenticity — proof of origin (who created it, on what device) and integrity (that it hasn't been altered) — and Pakistani courts have repeatedly noted there's no single fixed technical checklist for this; it's assessed case by case." },
  { icon: ShieldCheck, title: "Article 164 doesn't work alone", detail: "The Supreme Court has held that digital evidence is admissible not just under Article 164 but read together with Articles 46-A and 78-A of the QSO 1984 and the Electronic Transactions Ordinance 2002 — the framework that governs electronic documents and digital signatures generally." },
  { icon: AlertTriangle, title: "In PECA cases specifically, forensic reports carry weight", detail: "For cybercrime prosecutions under PECA 2016, the National Cyber Crime Investigation Agency (NCCIA) now operates its own forensic lab, and the PECA 2025 amendment made its forensic reports directly admissible in court — a significant procedural shortcut compared to relying solely on Article 164 discretion." },
];

const faqs = [
  {
    question: "Is a WhatsApp screenshot admissible as evidence in a Pakistani court?",
    answer:
      "It can be, under Article 164 of the Qanun-e-Shahadat Order 1984 — but it isn't automatic. The court has discretion to admit it, and admission depends on establishing the screenshot's authenticity: where it came from, and that it hasn't been edited or fabricated.",
  },
  {
    question: "What law governs digital evidence in Pakistan?",
    answer:
      "Primarily Article 164 of the Qanun-e-Shahadat Order 1984, read alongside Articles 46-A and 78-A of the same law and the Electronic Transactions Ordinance 2002. For cybercrime cases specifically, PECA 2016 and the NCCIA's forensic procedures also apply.",
  },
  {
    question: "How do courts decide if digital evidence is authentic?",
    answer:
      "There's no single fixed technical checklist in the statute — courts weigh the evidence's origin (who created it and how), whether the chain of custody was preserved, and whether there's any indication of tampering, often relying on forensic analysis or expert testimony where the evidence is disputed.",
  },
  {
    question: "Do I need a forensic report to use digital evidence in a case?",
    answer:
      "Not always — Article 164 gives the court discretion to admit digital evidence on its own. But where authenticity is contested, or in PECA cybercrime prosecutions specifically, a forensic report (including from the NCCIA's own lab) significantly strengthens the evidence's weight and, in PECA cases, is now directly admissible.",
  },
  {
    question: "Can Wakeel.org tell me if my evidence will be admitted in court?",
    answer:
      "Wakeel.org can explain how Article 164 and the related provisions generally work and help you think through how to preserve evidence properly. It cannot predict how a specific judge will rule on a specific piece of evidence or represent you in court — that requires a licensed advocate.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Digital Evidence in Pakistani Courts",
    description:
      "How digital evidence actually gets admitted in Pakistani courts — Article 164 of the Qanun-e-Shahadat Order 1984, the authenticity test, and how NCCIA forensic reports fit in.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-08-13",
    dateModified: "2026-08-13",
    mainEntityOfPage: `${site.url}/journal/article/digital-evidence-pakistani-courts`,
    citation: [
      { "@type": "CreativeWork", name: "The Qanun-e-Shahadat Order, 1984 — Pakistan Code (Ministry of Law and Justice)", url: "https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apaUY2Npa5plaw==-sg-jjjjjjjjjjjjj" },
      { "@type": "CreativeWork", name: "Admissibility and Evidentiary Value of Electronic Evidence — Bahria University Islamabad Law Journal", url: "https://archive.bahria.edu.pk/buic/law/wp-content/uploads/2024/05/Article-2-of-2022.pdf" },
      { "@type": "CreativeWork", name: "The Prevention of Electronic Crimes Act, 2016 — Pakistan Code (Ministry of Law and Justice)", url: "https://www.pakistancode.gov.pk/pdffiles/administrator6a061efe0ed5bd153fa8b79b8eb4cba7.pdf" },
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
        name: "Digital Evidence in Pakistani Courts",
        item: `${site.url}/journal/article/digital-evidence-pakistani-courts`,
      },
    ],
  },
];

const keywords = [
  "digital evidence pakistan",
  "article 164 qanun-e-shahadat order 1984",
  "electronic evidence admissibility pakistan",
  "whatsapp screenshot evidence court pakistan",
  "nccia forensic report admissible",
  "electronic transactions ordinance 2002",
].join(", ");

export default function DigitalEvidencePakistaniCourts() {
  return (
    <Layout>
      <MarketingSEO
        title="Digital Evidence in Pakistani Courts"
        description="How digital evidence gets admitted in Pakistani courts — Article 164 of the Qanun-e-Shahadat Order 1984, the authenticity test, and how NCCIA forensic reports fit in."
        path="/journal/article/digital-evidence-pakistani-courts"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>Legal Help · Published August 13, 2026</p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Digital Evidence in Pakistani Courts
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A screenshot, a call recording, a CCTV clip — none of it walks into court
            automatically. Here's the actual legal test Pakistani judges apply.
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
                Digital evidence — screenshots, recordings, emails, CCTV footage — can be admitted
                in Pakistani courts under{" "}
                <strong>Article 164 of the </strong>
                <a href="https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apaUY2Npa5plaw==-sg-jjjjjjjjjjjjj" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
                  Qanun-e-Shahadat Order 1984
                </a>
                , but it's discretionary, not automatic — the court still has to be satisfied the
                evidence is <strong>authentic</strong>: verifiably from the source claimed, and
                free of tampering. For PECA cybercrime cases, the NCCIA's own forensic lab reports
                are now directly admissible, which significantly strengthens digital evidence in
                those matters specifically.
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
          <h2 className={sectionHeading}>Why "authenticity" is the part that actually gets litigated</h2>
          <p className="text-muted-foreground leading-relaxed">
            Legal scholarship on digital evidence in Pakistan — including analysis published by{" "}
            <a href="https://archive.bahria.edu.pk/buic/law/wp-content/uploads/2024/05/Article-2-of-2022.pdf" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
              Bahria University's Law Journal
            </a>{" "}
            — repeatedly flags the same gap: Article 164 lets modern-device evidence in, but the
            law doesn't lay out a fixed technical checklist for proving it's genuine. In practice,
            that means the real fight in a case involving digital evidence usually isn't whether a
            recording or screenshot can be shown to the court at all — it's whether the other side
            can convince the judge it was fabricated, edited, or taken out of context.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            This is exactly why chain of custody matters in practice, even though the statute
            doesn't spell out a rigid procedure for it: keeping original files (not just
            screenshots of screenshots), noting when and how evidence was captured, and getting a
            forensic opinion where the stakes are high all measurably improve the odds a court
            accepts digital evidence as reliable rather than disputed.
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
                  Explaining how Article 164 and related provisions generally work, and helping you
                  think through how to preserve digital evidence properly before you see a lawyer.
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
                  It cannot predict whether a specific judge will admit specific evidence, perform
                  forensic analysis, or represent you — a licensed advocate should handle that.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel about digital evidence — free
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
              { label: "The Qanun-e-Shahadat Order, 1984 — Pakistan Code (Ministry of Law and Justice)", href: "https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apaUY2Npa5plaw==-sg-jjjjjjjjjjjjj" },
              { label: "Admissibility and Evidentiary Value of Electronic Evidence — Bahria University Islamabad Law Journal", href: "https://archive.bahria.edu.pk/buic/law/wp-content/uploads/2024/05/Article-2-of-2022.pdf" },
              { label: "The Prevention of Electronic Crimes Act, 2016 — Pakistan Code (Ministry of Law and Justice)", href: "https://www.pakistancode.gov.pk/pdffiles/administrator6a061efe0ed5bd153fa8b79b8eb4cba7.pdf" },
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
            <Link href="/journal/article/peca-act-pakistan-complete-guide-cybercrime-laws" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">PECA Act Pakistan: Complete Guide to Cybercrime Laws</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/nccia-cyber-crime-complaint-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to File a Cyber Crime Complaint in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/civil-suit-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to File a Civil Suit in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/how-courts-work-in-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How Courts Work in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Building a case around digital evidence?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel how the admissibility rules generally work — then verify with a licensed
            advocate before you rely on it in court.
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
