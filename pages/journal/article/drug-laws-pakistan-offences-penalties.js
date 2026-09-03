import Link from "next/link";
import {
  CheckCircle2,
  Scale,
  ShieldAlert,
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

const framework = [
  { icon: ShieldAlert, title: "The Control of Narcotic Substances Act, 1997", detail: "The primary federal law governing narcotic drugs and psychotropic substances in Pakistan — it consolidates and amends earlier legislation and covers production, possession, trafficking, and financing of drug-related activity." },
  { icon: Scale, title: "Punishment scales with quantity", detail: "The Act generally structures punishment around the quantity of the substance involved — small quantity, commercial quantity or intermediate categories carry meaningfully different punishment ranges, with the most serious quantities carrying the most severe penalties, including the possibility of death in certain trafficking cases." },
  { icon: Gavel, title: "Special courts and procedure", detail: "Cases under the CNSA are tried before courts designated for the purpose, with procedural specifics — evidentiary presumptions, burden-shifting provisions in some circumstances — that differ from an ordinary PPC/CrPC prosecution, which is why generic criminal-law intuition doesn't always transfer directly." },
  { icon: ShieldAlert, title: "Enforcement agencies", detail: "The Anti-Narcotics Force (ANF) is the principal federal agency for narcotics enforcement, working alongside provincial police and customs authorities depending on the nature of the offence — import/export cases in particular often involve multiple agencies." },
];

const bailNotes = [
  "Offences under the CNSA are generally treated as serious and non-bailable, particularly where the quantity involved is significant — bail is a matter for the court's discretion under the Act's own provisions and the general CrPC bail framework.",
  "The specific quantity classification (small, intermediate, or commercial) materially affects both the punishment range and how a court approaches a bail application — this isn't a detail to guess at informally.",
  "Because CNSA cases carry evidentiary and procedural features distinct from ordinary criminal cases, representation by a lawyer experienced specifically in narcotics matters, not just criminal law generally, makes a meaningful difference.",
];

const faqs = [
  {
    question: "What is the main law governing drug offences in Pakistan?",
    answer:
      "The Control of Narcotic Substances Act, 1997 (CNSA) is the primary federal law, covering possession, production, trafficking, and financing of narcotic drugs and psychotropic substances, with punishment generally structured around the quantity involved.",
  },
  {
    question: "Does the quantity of a substance change the punishment under Pakistani drug law?",
    answer:
      "Yes — the CNSA generally distinguishes between small, intermediate, and commercial quantities, with punishment escalating significantly as the quantity increases, up to the most severe penalties (including the possibility of death) for the largest trafficking-scale quantities.",
  },
  {
    question: "Is bail available for drug offences in Pakistan?",
    answer:
      "It depends heavily on the quantity and nature of the offence — many CNSA cases, particularly those involving larger quantities, are treated as non-bailable, with bail granted or refused at the court's discretion based on the specific facts and the Act's own provisions.",
  },
  {
    question: "Which agency enforces drug laws in Pakistan?",
    answer:
      "The Anti-Narcotics Force (ANF) is the principal federal agency, working alongside provincial police and, for import/export cases, customs authorities — which agency is involved can depend on the nature and location of the alleged offence.",
  },
  {
    question: "Can Wakeel.org explain a case under the Control of Narcotic Substances Act?",
    answer:
      "Wakeel.org can explain what the CNSA generally covers and how punishment structures work, in plain English or Urdu, and help organize questions for a lawyer. It cannot assess a specific case, calculate quantity classifications, or represent anyone — a lawyer experienced specifically in narcotics cases should be engaged immediately.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Drug Laws in Pakistan: Offences, Penalties and Bail",
    description:
      "How the Control of Narcotic Substances Act, 1997 structures drug offences in Pakistan — quantity-based punishment, special courts, and how bail is approached.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-03-03",
    dateModified: "2026-03-03",
    mainEntityOfPage: `${site.url}/journal/article/drug-laws-pakistan-offences-penalties`,
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
        name: "Drug Laws in Pakistan: Offences, Penalties and Bail",
        item: `${site.url}/journal/article/drug-laws-pakistan-offences-penalties`,
      },
    ],
  },
];

const keywords = [
  "drug laws pakistan",
  "control of narcotic substances act 1997",
  "narcotics offences pakistan",
  "drug case bail pakistan",
  "anti-narcotics force pakistan",
].join(", ");

export default function DrugLawsPakistanOffencesPenalties() {
  return (
    <Layout>
      <MarketingSEO
        title="Drug Laws in Pakistan: Offences, Penalties and Bail"
        description="How the Control of Narcotic Substances Act, 1997 structures drug offences in Pakistan — quantity-based punishment, special courts, and how bail is approached."
        path="/journal/article/drug-laws-pakistan-offences-penalties"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>
            Legal Help · Published March 3, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Drug Laws in Pakistan: Offences, Penalties and Bail
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The Control of Narcotic Substances Act, 1997 governs a category of offence where
            quantity, not just conduct, drives the punishment. Here's how the framework actually
            works.
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
                The <strong>Control of Narcotic Substances Act, 1997 (CNSA)</strong> is Pakistan's
                primary federal drug law, with punishment structured largely around{" "}
                <strong>quantity</strong> — small, intermediate, and commercial categories carry
                meaningfully different penalty ranges, up to the most severe for large-scale
                trafficking. Cases are handled by <strong>special courts</strong> with distinct
                procedure, enforced mainly by the <strong>Anti-Narcotics Force (ANF)</strong>. Bail
                is generally discretionary and depends heavily on the specific facts.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educate: framework */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>The framework, piece by piece</h2>
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

      {/* Reveal: bail notes */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className={sectionHeading}>Why these cases need specialised representation</h2>
          </div>
          <Card className={cardBase}>
            <CardContent className="p-6">
              <ul className="space-y-3">
                {bailNotes.map((item) => (
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
                  Explaining what the CNSA generally covers and how punishment structures work, in
                  plain English or Urdu, and helping organize questions for a lawyer.
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
                  It cannot assess a specific case, calculate quantity classifications, or
                  represent anyone — a lawyer experienced specifically in narcotics cases should be
                  engaged immediately.
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
              { label: "Control of Narcotic Substances Act, 1997 — Pakistan Code (Ministry of Law and Justice)", href: "https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apaUY2Npaplr-sg-jjjjjjjjjjjjj" },
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
            <Link href="/journal/article/how-to-get-bail-in-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Bail in Pakistan: How to Get Bail in a Criminal Case</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/arrest-without-warrant-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Arrest Without Warrant in Pakistan: When Is It Legal?</p>
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
          <h2 className={sectionHeading}>Dealing with a narcotics case?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel to explain the law in plain terms — then engage a lawyer experienced in CNSA
            cases immediately.
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
