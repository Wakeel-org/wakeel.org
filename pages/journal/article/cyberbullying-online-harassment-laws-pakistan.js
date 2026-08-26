import Link from "next/link";
import {
  CheckCircle2,
  ShieldAlert,
  Users,
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

const provisions = [
  { icon: Users, title: "Section 24 PECA — cyberstalking", detail: "Covers repeated, unwanted contact intended to coerce, intimidate, or harass someone, or monitoring their online activity, despite a clear indication of disinterest — the core provision behind most cyberbullying and online harassment cases." },
  { icon: ShieldAlert, title: "Section 20 PECA — offences against dignity", detail: "Covers publishing or transmitting false information intended to harm someone's reputation — relevant where bullying takes the form of spreading false claims rather than direct contact." },
  { icon: Gavel, title: "Section 21 PECA — offences against modesty", detail: "Covers non-consensual sharing of sexually explicit or intimate material, and superimposing someone's image — a specific and serious category of online harassment with its own, more severe treatment." },
  { icon: ShieldAlert, title: "Blocking and removal requests", detail: "An aggrieved person (or their guardian, for a minor) can apply for removal, destruction, or blocking of harmful content — a remedy that can work alongside, not instead of, a criminal complaint." },
];

const faqs = [
  {
    question: "Is cyberbullying illegal in Pakistan?",
    answer:
      "Yes — depending on its form, cyberbullying can fall under Section 24 PECA (cyberstalking), Section 20 PECA (offences against dignity, for false or defamatory content), or Section 21 PECA (offences against modesty, for non-consensual images), each with its own punishment.",
  },
  {
    question: "What can a minor's guardian do about online harassment in Pakistan?",
    answer:
      "A guardian can apply on a minor's behalf for removal, destruction, or blocking of harmful content, alongside filing a criminal complaint with the NCCIA where the conduct meets the threshold for a PECA offence.",
  },
  {
    question: "What evidence is needed for an online harassment complaint?",
    answer:
      "Screenshots with visible timestamps and URLs, saved messages, the harasser's account details where known, and a clear timeline of the repeated contact or content — preserved before it can be deleted.",
  },
  {
    question: "Can someone be prosecuted for harassment even if they used a fake account?",
    answer:
      "Yes — investigation can trace activity back to a real person regardless of the account name used, though this depends on the evidence available and cooperation from platforms, which is one reason prompt reporting and evidence preservation matter.",
  },
  {
    question: "Can Wakeel.org help with a cyberbullying situation?",
    answer:
      "Wakeel.org can explain which PECA provision may apply and help you organize evidence, in plain English or Urdu. It cannot file a complaint or removal request, or represent anyone — a licensed advocate or the NCCIA directly should handle that.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Cyberbullying and Online Harassment Laws in Pakistan",
    description:
      "The PECA provisions that cover cyberbullying and online harassment in Pakistan — cyberstalking, dignity, and modesty offences — and the removal and complaint remedies available.",
    author: { "@type": "Organization", name: "Wakeel.org" },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-03-29",
    dateModified: "2026-03-29",
    mainEntityOfPage: `${site.url}/journal/article/cyberbullying-online-harassment-laws-pakistan`,
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
        name: "Cyberbullying and Online Harassment Laws in Pakistan",
        item: `${site.url}/journal/article/cyberbullying-online-harassment-laws-pakistan`,
      },
    ],
  },
];

const keywords = [
  "cyberbullying law pakistan",
  "online harassment law pakistan",
  "cyberstalking section 24 peca",
  "online harassment complaint pakistan",
  "content removal peca pakistan",
].join(", ");

export default function CyberbullyingOnlineHarassmentLawsPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Cyberbullying and Online Harassment Laws in Pakistan"
        description="The PECA provisions that cover cyberbullying and online harassment in Pakistan — cyberstalking, dignity, and modesty offences — and the remedies available."
        path="/journal/article/cyberbullying-online-harassment-laws-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>
            Legal Help · Published March 29, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Cyberbullying and Online Harassment Laws in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            "It's just online" is not how Pakistani law treats repeated harassment, threats, or
            false claims made through a screen. Here's the specific legal provisions that apply.
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
                Cyberbullying and online harassment are covered under{" "}
                <a href="https://www.pakistancode.gov.pk/pdffiles/administrator6a061efe0ed5bd153fa8b79b8eb4cba7.pdf" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
                  PECA 2016
                </a>{" "}
                — <strong>Section 24</strong> (cyberstalking), <strong>Section 20</strong>{" "}
                (dignity/defamation), and <strong>Section 21</strong> (modesty, non-consensual
                images). Victims (or a minor's guardian) can request content{" "}
                <strong>removal or blocking</strong> and file a criminal complaint with the{" "}
                <strong>NCCIA</strong> in parallel.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educate: provisions */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>The provisions that apply</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {provisions.map((r) => {
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
                  Explaining which PECA provision may apply and helping you organize evidence, in
                  plain English or Urdu.
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
                  It cannot file a complaint or removal request, or represent anyone — a licensed
                  advocate or the NCCIA directly should handle that.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel about your situation — free
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
            General educational information, not legal advice. See our{" "}
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
            <Link href="/journal/article/how-to-file-cybercrime-complaint-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to File a Cybercrime Complaint in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/social-media-laws-pakistan-what-you-can-post" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Social Media Laws in Pakistan: What You Can and Cannot Post</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/deepfakes-in-pakistan-legal-risks-punishment" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Deepfakes in Pakistan: Legal Risks and Punishment</p>
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
          <h2 className={sectionHeading}>Being harassed online?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel to help you understand your options and preserve evidence — then report it
            promptly.
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
