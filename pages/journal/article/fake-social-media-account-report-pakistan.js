import Link from "next/link";
import {
  CheckCircle2,
  ShieldAlert,
  Smartphone,
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
  { icon: ShieldAlert, title: "This is Section 16 territory — identity theft", detail: "PECA Section 16 covers someone obtaining, using, or transmitting your identity information without authorization — which specifically includes a fake Facebook, Instagram, or WhatsApp profile using your name, photos, or details. Punishment is up to 3 years' imprisonment, a fine up to PKR 5 million, or both." },
  { icon: Smartphone, title: "There's a faster route than a criminal case: the PTA takedown", detail: "Under Section 16(2), you can apply directly to the Pakistan Telecommunication Authority to have the impersonating identity information secured, blocked, or destroyed — separately from, and generally faster than, waiting for a criminal case to resolve." },
  { icon: Gavel, title: "Section 20 often applies alongside it", detail: "If the fake account is also being used to post false, harmful information about you — not just use your identity — Section 20 (offences against dignity) can apply in addition to Section 16, especially where the account is defaming you or damaging your reputation." },
  { icon: AlertTriangle, title: "Report to the platform and the NCCIA, not just one or the other", detail: "Reporting the fake account directly to Facebook/Instagram/Meta for impersonation removes it fastest in many cases, but a formal NCCIA complaint is what creates a legal record and opens the door to further action against whoever created it." },
];

const faqs = [
  {
    question: "What law covers a fake Facebook or Instagram account impersonating me?",
    answer:
      "Section 16 of PECA 2016 covers unauthorized use of someone's identity information, which includes fake social media profiles using your name or photos — punishable with up to 3 years' imprisonment and a fine up to PKR 5 million. Section 20 can apply additionally if the account is also spreading false, harmful information.",
  },
  {
    question: "How do I get a fake account impersonating me taken down quickly?",
    answer:
      "Report it directly to the platform (Facebook, Instagram, etc.) as impersonation for the fastest removal, and separately apply to the Pakistan Telecommunication Authority (PTA) under Section 16(2) of PECA to have the identity information blocked — this can happen independently of a criminal case.",
  },
  {
    question: "Should I also report a fake account to the NCCIA?",
    answer:
      "Yes, if you want a formal legal record and the possibility of action against whoever created it — platform reporting and PTA takedown remove the account quickly, but an NCCIA complaint is what pursues the person behind it.",
  },
  {
    question: "What evidence should I collect about a fake account?",
    answer:
      "Screenshots of the fake profile (photos, bio, posts), its exact URL or username, any messages sent from it, and screenshots of anyone who mistook it for the real you or was deceived by it — the more specific and dated the evidence, the stronger the report.",
  },
  {
    question: "Can Wakeel.org help me report a fake account?",
    answer:
      "Wakeel.org can explain which PECA sections apply and how the PTA takedown and NCCIA complaint routes generally work. It cannot file the report or contact the platform on your behalf — you'd do that directly, or with a licensed advocate's help for the legal side.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Fake Facebook/Instagram Account: How to Report It Legally",
    description:
      "What to do about a fake social media account impersonating you in Pakistan — the PECA Section 16 identity theft provision, the PTA takedown route, and how to report to the NCCIA.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-07-07",
    dateModified: "2026-07-07",
    mainEntityOfPage: `${site.url}/journal/article/fake-social-media-account-report-pakistan`,
    citation: [
      { "@type": "CreativeWork", name: "PECA 2016 Explained: Cyber Harassment Rights in Pakistan — Stop Harassment Now", url: "https://stopharassmentnow.org/peca-2016-explained/" },
      { "@type": "CreativeWork", name: "The Prevention of Electronic Crimes Act, 2016 — Pakistan Code", url: "https://www.pakistancode.gov.pk/pdffiles/administrator6a061efe0ed5bd153fa8b79b8eb4cba7.pdf" },
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
        name: "Fake Facebook/Instagram Account: How to Report It Legally",
        item: `${site.url}/journal/article/fake-social-media-account-report-pakistan`,
      },
    ],
  },
];

const keywords = [
  "fake facebook account report pakistan",
  "fake instagram account legal action pakistan",
  "identity theft peca section 16",
  "impersonation social media pakistan law",
  "pta takedown fake account",
  "how to report impersonation pakistan",
].join(", ");

export default function FakeSocialMediaAccountReportPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Fake Facebook/Instagram Account: How to Report It Legally"
        description="What to do about a fake social media account impersonating you in Pakistan — the PECA Section 16 identity theft provision, the PTA takedown route, and how to report to the NCCIA."
        path="/journal/article/fake-social-media-account-report-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>Legal Help · Published July 7, 2026</p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Fake Facebook/Instagram Account: How to Report It Legally
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Someone impersonating you online isn't just annoying — it's a specific crime with a
            specific, fast takedown route.
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
                A fake account using your identity falls under{" "}
                <strong>Section 16 of PECA 2016</strong> (identity theft) — up to 3 years'
                imprisonment and a fine up to PKR 5 million. Report the account to the{" "}
                <strong>platform</strong> directly for the fastest removal, apply to the{" "}
                <strong>PTA</strong> under Section 16(2) for a formal takedown, and file with the{" "}
                <a href="https://www.nccia.gov.pk/" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
                  NCCIA
                </a>{" "}
                if you want action taken against whoever created it.
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
          <h2 className={sectionHeading}>Why running both routes together beats picking just one</h2>
          <p className="text-muted-foreground leading-relaxed">
            Guidance on PECA's identity and dignity provisions, summarized by{" "}
            <a href="https://stopharassmentnow.org/peca-2016-explained/" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
              Stop Harassment Now
            </a>
            , points to a documented real-world case where a fake Facebook profile was used to
            extort money by impersonating a news anchor — illustrating that identity theft cases
            aren't always about reputation alone; they're frequently the setup for a further scam.
            This is exactly why speed matters: reporting to the platform stops the immediate
            damage (people being deceived right now), while the PTA and NCCIA routes address the
            legal accountability, and running them in parallel rather than sequentially gets both
            outcomes faster.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            It's also worth telling people in your network directly that the account is fake, once
            you've confirmed it — since a fake profile's real damage often comes from people who
            trust it enough to share information or send money before the takedown completes.
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
                  Explaining which PECA sections apply and how the PTA and NCCIA routes generally
                  work, in plain English or Urdu.
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
                  It cannot report the account to the platform, file with the PTA or NCCIA, or
                  represent you — those steps require you directly, or a licensed advocate.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel about a fake account — free
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
          <h2 className="text-lg font-semibold text-foreground mb-4">Sources — check these directly to verify</h2>
          <ul className="space-y-2">
            {[
              { label: "PECA 2016 Explained: Cyber Harassment Rights in Pakistan — Stop Harassment Now", href: "https://stopharassmentnow.org/peca-2016-explained/" },
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
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`${sectionHeading} text-center mb-8`}>Related reading</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/journal/article/whatsapp-blackmail-legal-action-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Blackmail on WhatsApp: Legal Action in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/online-defamation-law-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Online Defamation Law in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/cyberbullying-online-harassment-laws-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Cyberbullying and Online Harassment Laws in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/nccia-cyber-crime-complaint-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to File a Cyber Crime Complaint in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Found a fake account impersonating you?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel what to do first — then report to the platform, the PTA, and the NCCIA.
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
