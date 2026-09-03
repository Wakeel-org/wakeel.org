import Link from "next/link";
import {
  CheckCircle2,
  Scale,
  ShieldCheck,
  Clock,
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
  { icon: Scale, title: "Section 375 defines the offence, Section 376 punishes it", detail: "Section 375 PPC sets out what legally constitutes rape; Section 376 PPC prescribes the punishment, which can extend to death or life imprisonment depending on the circumstances, including aggravated categories carrying enhanced punishment." },
  { icon: ShieldCheck, title: "The Anti-Rape (Investigation and Trial) Act 2021 changed how these cases move", detail: "This federal law created special Anti-Rape Crisis Cells, Joint Investigation Teams, and dedicated Special Courts, and introduced strict timelines intended to make investigation and trial in rape and related sexual-abuse cases significantly faster than the ordinary criminal process." },
  { icon: Clock, title: "Time-bound investigation and trial", detail: "Under the 2021 Act, investigation is meant to be completed within a specified short period, and trial before a Special Court is meant to conclude within a defined timeframe — a structural shift from how these cases moved under the ordinary CrPC process before 2021." },
  { icon: Users, title: "Protections for the complainant during the process", detail: "The framework introduced under the 2021 Act includes provisions around medico-legal examination standards, recording of statements, and treatment of the complainant during investigation and trial, intended to reduce re-traumatisation compared to older procedure." },
];

const practicalSteps = [
  "Report to the police or the National Commission on the Status of Women / provincial helplines as soon as possible — medico-legal evidence is time-sensitive, and a licensed medical examination should follow established protocol as early as practical.",
  "An FIR should be registered under Section 154 CrPC without unnecessary delay for a cognizable offence of this nature; if a station refuses, the same escalation routes covered in our FIR guides (Justice of the Peace, private complaint) apply.",
  "Under the Anti-Rape Act 2021 framework, cases are meant to be handled by a Joint Investigation Team and heard by a Special Court, not routed through the ordinary, slower process — ask specifically whether this framework is being applied.",
  "Both complainants and accused persons have specific legal rights and protections at each stage — this is not an area to navigate without a licensed lawyer experienced in these cases, from the earliest possible point.",
];

const faqs = [
  {
    question: "What do Sections 375 and 376 PPC cover?",
    answer:
      "Section 375 of the Pakistan Penal Code defines what legally constitutes rape. Section 376 prescribes the punishment, which varies by the specific circumstances of the offence and can include enhanced punishment for aggravated categories, up to death or life imprisonment.",
  },
  {
    question: "What changed with the Anti-Rape (Investigation and Trial) Act 2021?",
    answer:
      "The 2021 Act created a dedicated structure for these cases — Anti-Rape Crisis Cells, Joint Investigation Teams, and Special Courts — along with defined, shorter timelines for investigation and trial, intended to address delay and improve how complainants are treated through the process, compared to the ordinary criminal procedure that applied before it.",
  },
  {
    question: "How quickly should a case move under the 2021 Act?",
    answer:
      "The Act sets specific target timeframes for investigation and trial that are considerably shorter than typical criminal case timelines in Pakistan. Actual case-by-case timing still depends on facts and court capacity — a lawyer handling the specific case can confirm what applies.",
  },
  {
    question: "Where can someone get support after reporting an offence under these sections?",
    answer:
      "Provincial and national helplines, women's rights organisations, and legal aid services exist specifically for this, alongside the police and Special Court process itself. A licensed lawyer experienced in these cases should be involved as early as possible, alongside any medical and psychological support needed.",
  },
  {
    question: "Can Wakeel.org help with a case under Sections 375/376 PPC?",
    answer:
      "Wakeel.org can explain what these sections and the Anti-Rape Act 2021 framework generally provide for, in plain English or Urdu, and help organize questions for a lawyer. It cannot assess a specific case, provide crisis support, represent anyone, or replace a licensed lawyer experienced in these cases, who should be engaged immediately.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Sections 375 & 376 PPC: Rape Laws and Punishment in Pakistan",
    description:
      "What Sections 375 and 376 of the Pakistan Penal Code cover, and how the Anti-Rape (Investigation and Trial) Act 2021 changed investigation and trial timelines for these cases.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-01-01",
    dateModified: "2026-01-01",
    mainEntityOfPage: `${site.url}/journal/article/sections-375-376-ppc-rape-law-pakistan`,
    citation: [
      { "@type": "CreativeWork", name: "Pakistan Penal Code, 1860 — Pakistan Code (Ministry of Law and Justice)", url: "https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apaUY2Npa5lo-sg-jjjjjjjjjjjjj" },
      { "@type": "CreativeWork", name: "Anti-Rape (Investigation and Trial) Act, 2021 — Pakistan Code (Ministry of Law and Justice)", url: "https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apaUY2Npa5hm-sg-jjjjjjjjjjjjj" },
      { "@type": "CreativeWork", name: "Anti-Rape (Investigation and Trial) Act, 2021 — as passed, National Assembly of Pakistan", url: "https://na.gov.pk/uploads/documents/61aa1d38e9c5d_847.pdf" },
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
        name: "Sections 375 & 376 PPC: Rape Laws and Punishment in Pakistan",
        item: `${site.url}/journal/article/sections-375-376-ppc-rape-law-pakistan`,
      },
    ],
  },
];

const keywords = [
  "section 375 ppc",
  "section 376 ppc",
  "rape law pakistan",
  "anti-rape act 2021 pakistan",
  "rape punishment pakistan",
  "special court rape case pakistan",
].join(", ");

export default function Sections375376PpcRapeLawPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Sections 375 & 376 PPC: Rape Laws and Punishment in Pakistan"
        description="What Sections 375 and 376 PPC cover, and how the Anti-Rape (Investigation and Trial) Act 2021 changed investigation and trial timelines for these cases."
        path="/journal/article/sections-375-376-ppc-rape-law-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>
            Legal Help · Published January 1, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Sections 375 & 376 PPC: Rape Laws and Punishment in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A significant legal reform in 2021 changed how these cases are meant to move through
            the system. Here's what the law defines, and what the Anti-Rape Act actually requires.
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
                <strong>Section 375 PPC</strong> defines rape; <strong>Section 376 PPC</strong>{" "}
                prescribes the punishment, which can include death or life imprisonment for
                aggravated cases. The <strong>Anti-Rape (Investigation and Trial) Act 2021</strong>{" "}
                created dedicated Joint Investigation Teams and Special Courts with defined,
                shorter timelines for these cases. Reporting quickly and engaging a licensed
                lawyer immediately both matter — medico-legal evidence is time-sensitive.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educate: framework */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>The legal framework, piece by piece</h2>
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

      {/* Reveal: practical steps */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className={sectionHeading}>What matters in the first steps</h2>
          </div>
          <Card className={cardBase}>
            <CardContent className="p-6">
              <ul className="space-y-3">
                {practicalSteps.map((item) => (
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
                  Explaining what these sections and the Anti-Rape Act 2021 framework generally
                  provide for, in plain English or Urdu, and helping organize questions for a
                  lawyer.
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
                  It cannot assess a specific case, provide crisis support, or represent anyone —
                  engage a licensed lawyer experienced in these cases, and appropriate support
                  services, immediately.
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
            General educational information, not legal advice. This is a serious matter — consult
            a licensed lawyer and appropriate support services immediately for any specific
            situation. See our{" "}
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
              { label: "Anti-Rape (Investigation and Trial) Act, 2021 — Pakistan Code (Ministry of Law and Justice)", href: "https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apaUY2Npa5hm-sg-jjjjjjjjjjjjj" },
              { label: "Anti-Rape (Investigation and Trial) Act, 2021 — as passed, National Assembly of Pakistan", href: "https://na.gov.pk/uploads/documents/61aa1d38e9c5d_847.pdf" },
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
            <Link href="/journal/article/kidnapping-extortion-sexual-assault-laws-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Kidnapping, Extortion and Sexual Assault Laws in Pakistan</p>
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
          <h2 className={sectionHeading}>Need to understand this legal process?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel to explain the law in plain terms — then get a licensed lawyer and support
            services involved right away.
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
