import Link from "next/link";
import {
  CheckCircle2,
  ShieldAlert,
  Scale,
  ScrollText,
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
  { icon: ScrollText, title: "Two separate tracks, not one law", detail: "Online defamation in Pakistan isn't a single offence — a civil claim for damages runs under the Defamation Ordinance 2002, while a criminal complaint over the same post can run under Section 20 of PECA 2016 (and, in some cases, Sections 499/500 PPC). The two are not mutually exclusive, and which one applies changes your entire strategy." },
  { icon: ShieldAlert, title: "PECA Section 20 — the provision actually used online", detail: "Section 20 criminalises intentionally and publicly transmitting information a person knows to be false that intimidates or harms someone's reputation or privacy, with punishment of up to three years' imprisonment, a fine of up to PKR 1 million, or both. This is the section behind almost every social-media defamation FIR filed in Pakistan today." },
  { icon: Scale, title: "The civil route: proving damages, not intent", detail: "A defamation suit under the 2002 Ordinance seeks compensation for injury to reputation caused by a false, published statement — it doesn't require proving the poster knew the statement was false, which is a lower bar than PECA's criminal standard, but the payoff is money damages, not a criminal conviction." },
  { icon: AlertTriangle, title: "A documented misuse pattern worth knowing about", detail: "Independent legal analysis has flagged that Pakistan's defamation and PECA Section 20 provisions have also been used against journalists and sexual-harassment complainants to pressure them into silence — a pattern worth knowing whether you're the one posting, the one considering a complaint, or the one facing one." },
];

const faqs = [
  {
    question: "Is online defamation a criminal or civil matter in Pakistan?",
    answer:
      "Both, depending on the route you take. You can file a civil suit for damages under the Defamation Ordinance 2002, and separately (or instead) file a criminal complaint under Section 20 of PECA 2016, which can lead to imprisonment and a fine. The two remedies are not mutually exclusive.",
  },
  {
    question: "What does Section 20 of PECA actually cover?",
    answer:
      "Section 20 covers intentionally and publicly displaying, transmitting, or publishing information online that a person knows to be false and that intimidates or harms another person's reputation or privacy — punishable with up to three years' imprisonment, a fine of up to PKR 1 million, or both.",
  },
  {
    question: "Where do I file a defamation complaint in Pakistan?",
    answer:
      "A criminal complaint under PECA Section 20 is reported to the National Cyber Crime Investigation Agency (NCCIA), the agency now handling PECA cases. A civil defamation suit for damages is filed in the appropriate civil court under the Defamation Ordinance 2002 — a lawyer should confirm current jurisdiction, since defamation-forum rules have shifted since the Ordinance was first enacted.",
  },
  {
    question: "Can criticism or a negative opinion count as defamation?",
    answer:
      "Generally no — genuine opinion, fair comment on a matter of public interest, and true statements are recognised defences in defamation law. The core requirement is a false statement of fact that damages reputation, not simply an unflattering or critical one.",
  },
  {
    question: "Can Wakeel.org tell me if a specific post is defamatory?",
    answer:
      "Wakeel.org can explain how Section 20 of PECA and the Defamation Ordinance 2002 generally work and help you organise the facts and screenshots before you see a lawyer. It cannot assess whether a specific statement meets the legal threshold for defamation or file a complaint on your behalf — that judgment call belongs to a licensed advocate.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Online Defamation Law in Pakistan",
    description:
      "How online defamation actually works in Pakistan — the civil route under the Defamation Ordinance 2002, the criminal route under PECA Section 20, and where each one applies.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-08-29",
    dateModified: "2026-08-29",
    mainEntityOfPage: `${site.url}/journal/article/online-defamation-law-pakistan`,
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
        name: "Online Defamation Law in Pakistan",
        item: `${site.url}/journal/article/online-defamation-law-pakistan`,
      },
    ],
  },
];

const keywords = [
  "online defamation law pakistan",
  "peca section 20",
  "defamation ordinance 2002",
  "cyber defamation pakistan",
  "how to file defamation case pakistan",
  "section 499 500 ppc defamation",
].join(", ");

export default function OnlineDefamationLawPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Online Defamation Law in Pakistan"
        description="How online defamation works in Pakistan — the civil route under the Defamation Ordinance 2002, the criminal route under PECA Section 20, and how the two interact."
        path="/journal/article/online-defamation-law-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>Legal Help · Published August 29, 2026</p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Online Defamation Law in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A false post that damages someone's reputation can trigger a civil suit, a criminal
            complaint, or both — here's how the two systems actually work, and how they interact.
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
                Pakistan handles online defamation through two separate systems: a{" "}
                <strong>civil suit for damages</strong> under the{" "}
                <a href="http://punjablaws.gov.pk/laws/2219a.html" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
                  Defamation Ordinance 2002
                </a>
                , and a <strong>criminal complaint</strong> under{" "}
                <a href="https://www.pakistancode.gov.pk/pdffiles/administrator6a061efe0ed5bd153fa8b79b8eb4cba7.pdf" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
                  Section 20 of PECA 2016
                </a>
                , punishable with up to three years' imprisonment and a fine of up to PKR 1 million.
                The two can run side by side, and choosing the right one (or both) depends on
                whether you want compensation, a criminal record against the poster, or both.
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
          <h2 className={sectionHeading}>Why this area of law is contested, not just technical</h2>
          <p className="text-muted-foreground leading-relaxed">
            Research from{" "}
            <a href="https://sahsol.lums.edu.pk/node/11446" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
              LUMS SAHSOL
            </a>{" "}
            documents a specific misuse pattern: criminal defamation provisions being used against
            people who publicly allege sexual harassment or abuse, effectively turning a defamation
            complaint into a pressure tool against the original complainant. Separately, the{" "}
            <a href="https://cfj.org/wp-content/uploads/2023/10/Pakistan_PECA-Report_September-2023.pdf" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
              Clooney Foundation for Justice
            </a>{" "}
            has published a detailed legal analysis arguing that PECA Section 20's broad wording —
            especially around "harm to reputation" — creates real risk for journalists and
            commentators, and cites a Freedom Network report finding that at least 23 Pakistani
            journalists were targeted under the Act over a two-year period.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            None of this means the law shouldn't be used — genuine defamation causes real harm, and
            the remedies exist for a reason. It means the same provision can look very different
            depending on which side of a complaint you're on, which is exactly why getting a
            lawyer's read on the specific post, not just the general law, matters before you file
            anything or respond to anything.
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
                  Explaining how PECA Section 20 and the Defamation Ordinance 2002 generally work,
                  and helping you organise screenshots, dates, and facts before you see a lawyer.
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
                  It cannot judge whether a specific post meets the legal threshold for defamation,
                  file a complaint, or represent you — a licensed advocate should handle that.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel about a defamation issue — free
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
              { label: "The Prevention of Electronic Crimes Act, 2016 — Pakistan Code (Ministry of Law and Justice)", href: "https://www.pakistancode.gov.pk/pdffiles/administrator6a061efe0ed5bd153fa8b79b8eb4cba7.pdf" },
              { label: "The Defamation Ordinance, 2002 — Punjab Laws", href: "http://punjablaws.gov.pk/laws/2219a.html" },
              { label: "Section 20 of Pakistan's Prevention of Electronic Crimes Act: Urgent Reforms — Clooney Foundation for Justice", href: "https://cfj.org/wp-content/uploads/2023/10/Pakistan_PECA-Report_September-2023.pdf" },
              { label: "Criminal Defamation Laws in Pakistan and Their Use to Silence Victims — LUMS SAHSOL", href: "https://sahsol.lums.edu.pk/node/11446" },
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
            <Link href="/journal/article/social-media-laws-pakistan-what-you-can-post" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Social Media Laws in Pakistan: What You Can and Cannot Post</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/cyberbullying-online-harassment-laws-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Cyberbullying and Online Harassment Laws in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/understanding-legal-notices-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Understanding Legal Notices in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Dealing with an online defamation issue?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel to explain your options — then verify with a licensed advocate before you file
            or respond.
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
