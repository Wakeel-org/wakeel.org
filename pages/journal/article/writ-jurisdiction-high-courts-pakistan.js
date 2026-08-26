import Link from "next/link";
import {
  CheckCircle2,
  Gavel,
  Scale,
  ShieldCheck,
  UserCheck,
  Ban,
  Search,
  HelpCircle,
  AlertTriangle,
} from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site } from "../../../src/data/marketing";
import { cardBase, eyebrow, headingGradient, sectionHeading } from "../../../src/data/theme";

const writs = [
  { icon: Gavel, title: "Mandamus", detail: "Directs a public functionary to do something they're legally required to do but have failed or refused to do — for example, directing a government department to process an application it's been sitting on." },
  { icon: Ban, title: "Prohibition", detail: "Stops a lower court, tribunal, or authority from proceeding with a matter it has no legal authority to hear, before it acts further." },
  { icon: Search, title: "Certiorari", detail: "Quashes a decision or order already made by a lower court, tribunal, or authority that acted without or in excess of its jurisdiction, or in violation of the law." },
  { icon: UserCheck, title: "Quo warranto", detail: "Challenges a person's claim to hold a public office, asking the court to inquire by what authority they hold it — used when someone occupies a position without legal entitlement to it." },
  { icon: ShieldCheck, title: "Habeas corpus", detail: "Challenges the lawfulness of a person's detention, directing that they be produced before the court — the writ most associated with unlawful arrest or disappearance cases." },
];

const conditions = [
  "A writ petition under Article 199 is generally maintainable only where no adequate alternate remedy exists — if a specific statute already provides you an appeal or forum for the same grievance, courts often expect you to use that route first.",
  "The mere existence of an alternate remedy doesn't automatically bar a writ petition — the High Court retains discretion, and exercises it where the alternate remedy is illusory, where there's a clear jurisdictional defect, or where fundamental rights are directly at stake.",
  "You generally need to show you're an \"aggrieved person\" for most writs under Article 199, though quo warranto and habeas corpus petitions can be brought by any person acting in the public interest, not only someone personally affected.",
  "Article 199 (High Court) is distinct from Article 184(3) (Supreme Court) — the Supreme Court's original jurisdiction is reserved for matters of genuine public importance involving fundamental rights, not a parallel route for ordinary individual grievances.",
];

const faqs = [
  {
    question: "What is writ jurisdiction under Article 199 of the Constitution of Pakistan?",
    answer:
      "Article 199 empowers each High Court to issue orders against public authorities and certain other persons — commonly described using the common law writ names: mandamus, prohibition, certiorari, quo warranto, and habeas corpus — where a public functionary has acted beyond legal authority, without lawful authority, or where a fundamental right has been violated, provided no adequate alternate remedy exists.",
  },
  {
    question: "What's the difference between mandamus and certiorari?",
    answer:
      "Mandamus compels a public authority to do something it's legally required to do but hasn't. Certiorari does the opposite in direction — it quashes a decision or order the authority has already made without proper jurisdiction. One pushes action forward; the other undoes action already taken unlawfully.",
  },
  {
    question: "Can anyone file a writ petition in Pakistan, or only the affected person?",
    answer:
      "For most writs you generally need to be an \"aggrieved person\" — someone directly affected by the act or decision in question. Quo warranto and habeas corpus are exceptions where courts have historically allowed petitions in the public interest, not limited strictly to someone personally harmed.",
  },
  {
    question: "What's the difference between Article 199 and Article 184(3)?",
    answer:
      "Article 199 is the High Court's writ jurisdiction, available at the provincial level for a wide range of grievances against public authorities and for fundamental rights enforcement. Article 184(3) is the Supreme Court's original jurisdiction, reserved specifically for matters of \"public importance\" tied to fundamental rights — it isn't meant to be a routine substitute for Article 199 or for ordinary appeals.",
  },
  {
    question: "Can Wakeel.org help me file a writ petition?",
    answer:
      "Wakeel.org can explain what writ jurisdiction covers, which type of writ might be relevant to a situation, and the general conditions courts look for. It cannot draft or file a writ petition, assess whether your specific facts meet the \"no adequate alternate remedy\" test, or represent you — this needs a licensed advocate experienced in constitutional practice.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Writ Jurisdiction of High Courts in Pakistan Explained",
    description:
      "What Article 199 of Pakistan's Constitution actually covers — the five writs (mandamus, prohibition, certiorari, quo warranto, habeas corpus), when they apply, and how they differ from the Supreme Court's Article 184(3) jurisdiction.",
    author: { "@type": "Organization", name: "Wakeel.org" },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-04-25",
    dateModified: "2026-04-25",
    mainEntityOfPage: `${site.url}/journal/article/writ-jurisdiction-high-courts-pakistan`,
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
        name: "Writ Jurisdiction of High Courts in Pakistan Explained",
        item: `${site.url}/journal/article/writ-jurisdiction-high-courts-pakistan`,
      },
    ],
  },
];

const keywords = [
  "writ jurisdiction pakistan",
  "article 199 constitution of pakistan",
  "mandamus pakistan",
  "certiorari pakistan",
  "habeas corpus pakistan",
  "quo warranto pakistan",
  "high court writ petition pakistan",
  "article 184(3) pakistan",
].join(", ");

export default function WritJurisdictionHighCourtsPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Writ Jurisdiction of High Courts in Pakistan Explained"
        description="What Article 199 of Pakistan's Constitution covers — the five writs, when they apply, and how they differ from the Supreme Court's Article 184(3) jurisdiction."
        path="/journal/article/writ-jurisdiction-high-courts-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>
            Law Study & Research · Published April 25, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Writ Jurisdiction of High Courts in Pakistan Explained
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            "File a writ petition" gets said often and explained rarely. Article 199 of the
            Constitution is one of the most powerful tools a citizen has against an overreaching or
            inactive public authority — here's exactly what it does.
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
                <strong>Article 199</strong> gives each <strong>High Court</strong> the power to
                issue orders against public authorities in five broad situations — commonly mapped
                to the writs of <strong>mandamus</strong>, <strong>prohibition</strong>,{" "}
                <strong>certiorari</strong>, <strong>quo warranto</strong>, and{" "}
                <strong>habeas corpus</strong>. It generally applies only where{" "}
                <strong>no adequate alternate remedy</strong> exists. It's distinct from the{" "}
                <strong>Supreme Court's Article 184(3)</strong> original jurisdiction, which is
                reserved for genuine matters of public importance tied to fundamental rights.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educate: writs */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>The five writs, in plain terms</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {writs.map((r) => {
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

      {/* Reveal: conditions */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className={sectionHeading}>Why a writ petition isn't always the right first move</h2>
          </div>
          <Card className={cardBase}>
            <CardContent className="p-6">
              <ul className="space-y-3">
                {conditions.map((item) => (
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
                  Explaining what writ jurisdiction covers, which of the five writs might fit a
                  situation you describe, and the general conditions courts look for — in plain
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
                  It cannot draft or file a writ petition, assess whether your specific facts meet
                  the "no adequate alternate remedy" threshold, or predict how a High Court will
                  rule — this needs a licensed constitutional lawyer.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel if a writ petition might fit — free
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
            <Link href="/journal/article/constitution-of-pakistan-1973-fundamental-rights" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Constitution of Pakistan 1973: Fundamental Rights</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/how-courts-work-in-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How Courts Work in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/legal-issues-pakistan/fir-refused-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">What to Do if Police Refuse to Register an FIR</p>
              <p className="text-xs text-muted-foreground mt-1">Guide · Wakeel Journal</p>
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
          <h2 className={sectionHeading}>Facing an unresponsive or overreaching authority?</h2>
          <p className="text-muted-foreground">
            Describe the situation and Wakeel will help you understand whether writ jurisdiction
            might apply — then verify with a licensed constitutional lawyer.
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
