import Link from "next/link";
import {
  CheckCircle2,
  ShieldAlert,
  FileText,
  Landmark,
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
  { icon: AlertTriangle, title: "Pakistan doesn't have a comprehensive data protection law yet", detail: "As of this writing, the Personal Data Protection Bill 2023 has Cabinet approval but hasn't been enacted by Parliament — meaning there's no single, dedicated statute setting out mandatory privacy policy requirements the way GDPR does in the EU." },
  { icon: ShieldAlert, title: "PECA Section 38 is the real enforcement teeth right now", detail: "It's a criminal offence for a service provider with access to someone's personal or sensitive data to transfer it without consent — up to 3 years' imprisonment or a fine up to PKR 1 million. A website's privacy policy operates in the shadow of this provision, whether it says so explicitly or not." },
  { icon: FileText, title: "A privacy policy is still a smart, and increasingly expected, practice", detail: "Even without a mandatory checklist, a clear privacy policy — what data you collect, why, how it's stored, and who it's shared with — builds user trust, and is often required by payment processors, app stores, and advertising platforms Pakistani businesses actually use." },
  { icon: Landmark, title: "Watch the Personal Data Protection Bill", detail: "Once enacted, the PDPB is expected to introduce more specific, GDPR-influenced requirements for data collection, consent, and cross-border transfer — businesses operating now should expect to need updates once it passes, not treat today's practices as permanent." },
];

const faqs = [
  {
    question: "Is a privacy policy legally required for websites in Pakistan?",
    answer:
      "There's no single comprehensive data protection law that mandates a specific privacy policy format yet. That said, PECA Section 38 criminalises unauthorized transfer of personal data by a service provider, and having a clear privacy policy is both good practice and often required by third-party platforms (payment processors, app stores).",
  },
  {
    question: "What is the Personal Data Protection Bill and has it become law?",
    answer:
      "The Personal Data Protection Bill 2023 is Pakistan's proposed comprehensive data protection statute — it has Cabinet approval but, as of this writing, hasn't been enacted by Parliament. Once passed, it's expected to introduce more specific privacy requirements.",
  },
  {
    question: "What does PECA say about handling user data?",
    answer:
      "Section 38 of PECA 2016 makes it a criminal offence for a service provider with access to someone's personal or sensitive data to transfer that data without their consent, punishable by up to 3 years' imprisonment or a fine up to PKR 1 million.",
  },
  {
    question: "What should a privacy policy for a Pakistani website include?",
    answer:
      "At minimum: what personal data you collect, why you collect it, how it's stored and secured, who it might be shared with, and how users can contact you about their data — even without a specific legal mandate, this is what builds trust and satisfies most third-party platform requirements.",
  },
  {
    question: "Can Wakeel.org draft a privacy policy for my website?",
    answer:
      "Wakeel.org can explain the current legal landscape and what a privacy policy generally should cover. It cannot draft the final policy or confirm compliance for your specific business — a licensed advocate should handle that, especially once the Personal Data Protection Bill is enacted.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Privacy Policy Requirements for Pakistani Websites",
    description:
      "Pakistan's current legal landscape for website privacy policies — the pending Personal Data Protection Bill, PECA Section 38's data provisions, and what a policy should cover today.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-08-05",
    dateModified: "2026-08-05",
    mainEntityOfPage: `${site.url}/journal/article/privacy-policy-requirements-pakistan-websites`,
    citation: [
      { "@type": "CreativeWork", name: "Pakistan | Data Protection Law Guide — The Global Legal Post", url: "https://www.globallegalpost.com/lawoverborders/data-protection-law-guide-1072382791/pakistan-1623790143" },
      { "@type": "CreativeWork", name: "Data Privacy and Protection in Pakistan — International Bar Association", url: "https://www.ibanet.org/data-privacy-and-protection-in-Pakistan" },
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
        name: "Privacy Policy Requirements for Pakistani Websites",
        item: `${site.url}/journal/article/privacy-policy-requirements-pakistan-websites`,
      },
    ],
  },
];

const keywords = [
  "privacy policy requirements pakistan",
  "personal data protection bill pakistan",
  "peca section 38 data transfer",
  "does pakistan have a data protection law",
  "website privacy policy pakistan law",
  "data privacy pakistan 2026",
].join(", ");

export default function PrivacyPolicyRequirementsPakistanWebsites() {
  return (
    <Layout>
      <MarketingSEO
        title="Privacy Policy Requirements for Pakistani Websites"
        description="Pakistan's current legal landscape for website privacy policies — the pending Personal Data Protection Bill, PECA Section 38's data provisions, and what a policy should cover today."
        path="/journal/article/privacy-policy-requirements-pakistan-websites"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>Legal Help · Published August 5, 2026</p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Privacy Policy Requirements for Pakistani Websites
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The comprehensive law is still pending in Parliament — here's what actually governs
            user data today, and why you shouldn't wait for the new law to act.
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
                Pakistan has <strong>no comprehensive data protection law</strong> yet — the{" "}
                <strong>Personal Data Protection Bill 2023</strong> has Cabinet approval but is
                still awaiting Parliament. Right now,{" "}
                <strong>PECA Section 38</strong> is what actually bites: transferring someone's
                personal data without consent is a criminal offence, up to 3 years'
                imprisonment or a PKR 1 million fine. A clear privacy policy — what you collect,
                why, and how it's handled — is still smart practice and often required by the
                platforms you use.
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
          <h2 className={sectionHeading}>Why "there's no law yet" isn't the same as "there's no risk"</h2>
          <p className="text-muted-foreground leading-relaxed">
            International legal reviews of Pakistan's data landscape, including the{" "}
            <a href="https://www.ibanet.org/data-privacy-and-protection-in-Pakistan" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
              International Bar Association's overview
            </a>
            , consistently flag that PECA's criminal provisions already create meaningful exposure
            for businesses handling user data carelessly, even without a dedicated privacy
            statute. A business that treats the absence of a comprehensive law as meaning "no
            rules apply" is misreading the situation — Section 38 alone is a real criminal risk for
            mishandled or unauthorized data transfers, separate from any future civil compliance
            regime.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The practical move for any Pakistani business collecting user data now is to build
            reasonable privacy practices today — clear disclosure, consent for data sharing, and
            secure storage — rather than waiting for the Personal Data Protection Bill to pass
            before taking data handling seriously. Retrofitting good practices after a breach or
            complaint is far more costly than building them in from the start.
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
                  Explaining the current legal landscape and what a privacy policy should
                  generally cover, in plain English or Urdu.
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
                  It cannot draft the final policy or confirm compliance for your specific
                  business — a licensed advocate should handle that.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel about a privacy policy — free
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
              { label: "Pakistan | Data Protection Law Guide — The Global Legal Post", href: "https://www.globallegalpost.com/lawoverborders/data-protection-law-guide-1072382791/pakistan-1623790143" },
              { label: "Data Privacy and Protection in Pakistan — International Bar Association", href: "https://www.ibanet.org/data-privacy-and-protection-in-Pakistan" },
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
            <Link href="/journal/article/website-terms-and-conditions-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Terms and Conditions for Pakistani Websites</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/peca-act-pakistan-complete-guide-cybercrime-laws" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">PECA Act Pakistan: Complete Guide to Cybercrime Laws</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/privacy-recording-without-consent-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Privacy and Recording Someone Without Consent in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/ecommerce-refund-return-laws-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">E-Commerce Refund and Return Laws in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Building a privacy policy for your site or app?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel what to cover today — then get a licensed advocate to finalize it.
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
