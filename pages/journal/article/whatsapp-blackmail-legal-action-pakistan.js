import Link from "next/link";
import {
  CheckCircle2,
  ShieldAlert,
  Archive,
  MessageCircle,
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
  { icon: ShieldAlert, title: "PECA Section 21 — the strongest provision against sextortion", detail: "If someone is threatening to share or is sharing intimate photos or videos without your consent, Section 21 (offences against modesty) applies — punishable with up to 7 years' imprisonment and a fine of up to PKR 5 million." },
  { icon: MessageCircle, title: "PECA Section 24 covers ongoing, repeated harassment", detail: "If the blackmailer keeps contacting you, monitoring your online activity, or repeatedly threatening you, that's cyberstalking under Section 24 — a separate, applicable offence alongside Section 21 if intimate content is also involved." },
  { icon: Archive, title: "Your relationship to the blackmailer doesn't matter", detail: "PECA applies regardless of who the blackmailer is — a stranger, an ex-partner, or someone you sent images to in confidence. Consenting to share something with one person is not the same as consenting for it to be shared further, and the law treats it that way." },
  { icon: AlertTriangle, title: "Do not pay, and do not delete anything", detail: "Paying a blackmailer rarely ends the threats — it often invites more. Instead, preserve every message, screenshot, and number involved, since that evidence is what the NCCIA needs to act." },
];

const faqs = [
  {
    question: "What should I do if someone is blackmailing me on WhatsApp?",
    answer:
      "Don't pay and don't delete anything. Take screenshots of every message and threat, save the blackmailer's phone number, and report it to the National Cyber Crime Investigation Agency (NCCIA) — via complaint.nccia.gov.pk, the 1799 helpline, or your nearest Cybercrime Reporting Centre.",
  },
  {
    question: "What law applies to WhatsApp blackmail in Pakistan?",
    answer:
      "Section 21 of PECA 2016 applies if intimate images or videos are involved (up to 7 years' imprisonment and a fine up to PKR 5 million). Section 24 (cyberstalking) applies if the blackmailer is repeatedly contacting or monitoring you, and can apply alongside Section 21.",
  },
  {
    question: "Can I report blackmail even if I originally sent the photos willingly?",
    answer:
      "Yes. Sending an image to one person in confidence does not mean you consented to it being shared further or used to threaten you — Pakistani law treats non-consensual sharing or threatened sharing as an offence regardless of how the content was originally obtained.",
  },
  {
    question: "Should I block the person blackmailing me on WhatsApp?",
    answer:
      "Take screenshots of all the threats first — before blocking. Once you block someone, you may lose access to the evidence of what they said, which makes reporting harder. Preserve everything, then block and report.",
  },
  {
    question: "Can Wakeel.org help me deal with WhatsApp blackmail?",
    answer:
      "Wakeel.org can explain which PECA sections apply and what evidence to gather before you report to the NCCIA. It cannot file the complaint on your behalf, contact the blackmailer, or represent you — that requires the NCCIA and, where needed, a licensed advocate.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Blackmail on WhatsApp: Legal Action in Pakistan",
    description:
      "What to do if someone is blackmailing you on WhatsApp in Pakistan — the PECA sections that apply, what evidence to preserve, and how to report it to the NCCIA.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-09-03",
    dateModified: "2026-09-03",
    mainEntityOfPage: `${site.url}/journal/article/whatsapp-blackmail-legal-action-pakistan`,
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
        name: "Blackmail on WhatsApp: Legal Action in Pakistan",
        item: `${site.url}/journal/article/whatsapp-blackmail-legal-action-pakistan`,
      },
    ],
  },
];

const keywords = [
  "whatsapp blackmail pakistan",
  "someone blackmailing me pakistan legal action",
  "sextortion law pakistan peca section 21",
  "video blackmail pakistan",
  "nccia report blackmail",
  "cyberstalking peca section 24",
].join(", ");

export default function WhatsappBlackmailLegalActionPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Blackmail on WhatsApp: Legal Action in Pakistan"
        description="What to do if someone is blackmailing you on WhatsApp in Pakistan — the PECA sections that apply, what evidence to preserve, and how to report it to the NCCIA."
        path="/journal/article/whatsapp-blackmail-legal-action-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>Legal Help · Published September 3, 2026</p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Blackmail on WhatsApp: Legal Action in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            If someone is threatening you on WhatsApp, this is a crime in Pakistan, and there's a
            clear process to fight back — don't pay, don't panic, preserve everything.
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
                WhatsApp blackmail is a criminal offence in Pakistan. If intimate images or videos
                are involved, it falls under <strong>Section 21 of PECA 2016</strong> (up to 7
                years' imprisonment and a fine up to PKR 5 million). Repeated threats or monitoring
                also fall under <strong>Section 24 (cyberstalking)</strong>. Do not pay the
                blackmailer. Take clear screenshots of every message, save the number, and report
                to the{" "}
                <a href="https://www.nccia.gov.pk/" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
                  NCCIA
                </a>{" "}
                at complaint.nccia.gov.pk or the 1799 helpline.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educate: framework */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>What the law actually says, in plain terms</h2>
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
          <h2 className={sectionHeading}>The one thing that changes an investigation's speed: your screenshots</h2>
          <p className="text-muted-foreground leading-relaxed">
            Legal guidance from organizations working with blackmail victims in Pakistan —
            including{" "}
            <a href="https://stopharassmentnow.org/photos-blackmailing-in-pakistan/" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
              Stop Harassment Now
            </a>{" "}
            — consistently emphasizes the same point: the NCCIA can act far faster when a victim
            comes in with clear, dated evidence, rather than a vague description of what happened.
            Screenshot the full conversation (not just the threat itself), including the number or
            profile the messages came from, and note the dates and times if WhatsApp doesn't show
            them clearly in your screenshot.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            It's also worth knowing this isn't a matter you have to be embarrassed about reporting.
            PECA was written specifically to protect people in this situation, and the law does not
            care whether the images were originally sent willingly to the blackmailer — what
            matters legally is that they're now being used without your consent to threaten you.
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
                  Explaining which PECA sections apply, what evidence to collect, and how the
                  NCCIA reporting process works, in plain English or Urdu — privately and without
                  judgment.
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
                  It cannot contact the blackmailer, file the complaint for you, or represent
                  you — that requires the NCCIA and possibly a licensed advocate.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel what to do — free
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
              { label: "The Prevention of Electronic Crimes Act, 2016 — Pakistan Code (Ministry of Law and Justice)", href: "https://www.pakistancode.gov.pk/pdffiles/administrator6a061efe0ed5bd153fa8b79b8eb4cba7.pdf" },
              { label: "National Cyber Crime Investigation Agency (NCCIA) — official site", href: "https://www.nccia.gov.pk/" },
              { label: "What to Do If Someone Is Blackmailing You With Photos in Pakistan — Stop Harassment Now", href: "https://stopharassmentnow.org/photos-blackmailing-in-pakistan/" },
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
            <Link href="/journal/article/cyberbullying-online-harassment-laws-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Cyberbullying and Online Harassment Laws in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/nccia-cyber-crime-complaint-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to File a Cyber Crime Complaint in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/privacy-recording-without-consent-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Privacy and Recording Someone Without Consent in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/whatsapp-messages-evidence-pakistani-courts" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">WhatsApp Messages as Evidence in Pakistani Courts</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Being blackmailed right now?</h2>
          <p className="text-muted-foreground">
            Don't pay. Ask Wakeel what to do first — then report to the NCCIA and involve a
            licensed advocate.
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
