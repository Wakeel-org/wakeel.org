import Link from "next/link";
import {
  CheckCircle2,
  ShieldAlert,
  Clock,
  HelpCircle,
  AlertTriangle,
} from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site } from "../../../src/data/marketing";
import { cardBase, headingGradient, sectionHeading } from "../../../src/data/theme";

const grounds = [
  { title: "Involvement in a cognizable offence", detail: "Where a reasonable complaint, credible information, or reasonable suspicion exists that the person has been concerned in a cognizable offence." },
  { title: "Possession of housebreaking implements without lawful excuse", detail: "Possessing tools associated with housebreaking without a lawful explanation — the burden of showing a lawful excuse falls on the person found with them." },
  { title: "Being a proclaimed offender", detail: "Anyone who has already been formally proclaimed an offender under the Code or by government order." },
  { title: "Possession of suspected stolen property", detail: "Where property reasonably suspected to be stolen is found in someone's possession, and they're reasonably suspected of an offence connected to it." },
  { title: "Obstructing a police officer or escaping custody", detail: "Obstructing an officer in the execution of duty, or having escaped or attempting to escape from lawful custody." },
  { title: "Offences committed outside Pakistan", detail: "Involvement in an act committed outside Pakistan which, if committed within Pakistan, would be a punishable offence, and for which the person is liable to be apprehended or detained under Pakistani law." },
];

const safeguards = [
  "The power under Section 54 CrPC is permissive, not mandatory — an officer must still have sufficient, articulable grounds, and courts have repeatedly held that the power cannot be exercised arbitrarily.",
  "Article 10 of the Constitution requires that an arrested person be informed, as soon as possible, of the grounds for arrest — this isn't optional procedure, it's a fundamental right.",
  "The arrested person must be produced before a magistrate within 24 hours of arrest (excluding travel time), also under Article 10 — continued detention beyond that without judicial authorisation is not lawful.",
  "An arrest without a warrant that doesn't meet these grounds or safeguards can be challenged — through a complaint to senior police officers, a habeas corpus petition under Article 199 for unlawful detention, or through the trial process itself.",
];

const faqs = [
  {
    question: "When can police arrest someone without a warrant in Pakistan?",
    answer:
      "Section 54 of the Code of Criminal Procedure, 1898 lists specific grounds — including reasonable suspicion of involvement in a cognizable offence, possession of suspected stolen property or housebreaking implements without lawful excuse, being a proclaimed offender, or obstructing a police officer. The power is discretionary and requires genuine, sufficient grounds, not automatic on any complaint received.",
  },
  {
    question: "What rights does someone have immediately after being arrested without a warrant?",
    answer:
      "Under Article 10 of the Constitution, the arrested person must be informed of the grounds for arrest as soon as possible, and must be produced before a magistrate within 24 hours of arrest (excluding necessary travel time). These are constitutional safeguards, not discretionary courtesies.",
  },
  {
    question: "Can an unlawful arrest be challenged?",
    answer:
      "Yes — through a complaint to senior police officers, a habeas corpus petition to the High Court under Article 199 challenging unlawful detention, or by raising the issue during the criminal proceedings themselves. Which route makes sense depends on the specific facts and timing, which is exactly where a lawyer's judgment matters.",
  },
  {
    question: "Is being arrested without a warrant the same as being found guilty?",
    answer:
      "No. Arrest is the start of the investigation and legal process, not a determination of guilt. Guilt is only established through trial, where the prosecution must prove its case beyond reasonable doubt — arrest itself carries no legal presumption of guilt.",
  },
  {
    question: "Can Wakeel.org help if someone has been arrested without a warrant?",
    answer:
      "Wakeel.org can explain what the law requires around arrest without warrant, in plain English or Urdu, and help organize facts and questions for a lawyer. It cannot secure release, file a habeas corpus petition, or represent anyone — for an actual arrest situation, contact a licensed criminal lawyer immediately.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Arrest Without Warrant in Pakistan: When Is It Legal?",
    description:
      "The specific grounds under Section 54 CrPC that let police arrest without a warrant in Pakistan, and the constitutional safeguards (Article 10) that apply immediately after arrest.",
    author: { "@type": "Organization", name: "Wakeel.org" },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-08-17",
    dateModified: "2026-08-17",
    mainEntityOfPage: `${site.url}/journal/article/arrest-without-warrant-pakistan`,
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
        name: "Arrest Without Warrant in Pakistan: When Is It Legal?",
        item: `${site.url}/journal/article/arrest-without-warrant-pakistan`,
      },
    ],
  },
];

const keywords = [
  "arrest without warrant pakistan",
  "section 54 crpc",
  "when can police arrest without warrant pakistan",
  "rights after arrest pakistan",
  "article 10 constitution of pakistan",
].join(", ");

export default function ArrestWithoutWarrantPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Arrest Without Warrant in Pakistan: When Is It Legal?"
        description="The specific grounds under Section 54 CrPC that let police arrest without a warrant, and the constitutional safeguards (Article 10) that apply immediately after arrest."
        path="/journal/article/arrest-without-warrant-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Legal Help · Published August 17, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Arrest Without Warrant in Pakistan: When Is It Legal?
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Police in Pakistan can arrest without a warrant — but only on specific legal grounds,
            and only with specific rights attaching immediately afterward. Here's exactly what
            Section 54 CrPC and Article 10 of the Constitution require.
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
                <strong>Section 54 CrPC</strong> lists specific grounds for arrest without a
                warrant — reasonable suspicion of involvement in a cognizable offence, suspected
                stolen property, being a proclaimed offender, and others. The power is{" "}
                <strong>discretionary, not automatic</strong>. Immediately after arrest,{" "}
                <strong>Article 10</strong> of the Constitution requires the person be informed of
                the grounds and produced before a magistrate within <strong>24 hours</strong>.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educate: grounds */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>The grounds under Section 54 CrPC</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {grounds.map((g) => (
              <Card key={g.title} className={cardBase}>
                <CardHeader>
                  <ShieldAlert className="h-7 w-7 text-primary" />
                  <CardTitle className="text-lg">{g.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{g.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reveal: safeguards */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className={sectionHeading}>What must happen right after arrest</h2>
          </div>
          <Card className={cardBase}>
            <CardContent className="p-6">
              <ul className="space-y-3">
                {safeguards.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
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
                  Explaining what Section 54 CrPC and Article 10 require, in plain English or Urdu,
                  and helping organize facts and questions for a lawyer.
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
                  It cannot secure release, file a habeas corpus petition, or represent anyone — for
                  an actual arrest, contact a licensed criminal lawyer immediately.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel to explain your rights — free
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
              { label: "Code of Criminal Procedure, 1898 — Pakistan Code (Ministry of Law and Justice)", href: "https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apaUY2Npa5lp-sg-jjjjjjjjjjjjj" },
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
            <Link href="/journal/article/how-to-get-bail-in-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Bail in Pakistan: How to Get Bail in a Criminal Case</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/false-fir-pakistan-legal-remedies" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">False FIR in Pakistan: Legal Remedies and Consequences</p>
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
          <h2 className={sectionHeading}>Dealing with an arrest situation?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel to explain what the law requires — then get a licensed criminal lawyer
            involved immediately.
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
