import Link from "next/link";
import {
  CheckCircle2,
  Landmark,
  Gavel,
  Globe,
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
  { icon: Gavel, title: "A federal agency, created by a specific statute", detail: "The Federal Investigation Agency was established under the FIA Act 1974 (notified in 1975), following recommendations for a federal police-style organization to handle smuggling, currency offences, and enforcement of immigration and passport laws — its jurisdiction runs across all of Pakistan, not just one province." },
  { icon: Globe, title: "Immigration, passports, and human smuggling are its core lane today", detail: "The FIA operates an Immigration Wing with offices in Pakistani embassies and consulates worldwide, and is the lead agency for anti-human-smuggling enforcement, alongside counterfeit currency and federal crimes generally." },
  { icon: Landmark, title: "Anti-corruption moved to NAB; cybercrime moved to the NCCIA", detail: "The FIA's role has narrowed over time by design: anti-corruption and economic crime functions were transferred to the National Accountability Bureau (NAB) in 2004, and cybercrime investigation authority — previously the FIA Cybercrime Wing's job — was transferred to the newly created National Cyber Crime Investigation Agency (NCCIA) following the PECA 2025 amendment." },
  { icon: AlertTriangle, title: "Know which agency to actually approach", detail: "This narrowing matters practically: a cybercrime complaint today generally goes to the NCCIA, not the FIA, even though older guides and search results still point to the FIA Cybercrime Wing. For immigration, passport, human trafficking, or counterfeit currency matters, the FIA remains the right agency." },
];

const faqs = [
  {
    question: "What does the FIA do in Pakistan?",
    answer:
      "The Federal Investigation Agency handles immigration and passport enforcement, anti-human-smuggling operations, counterfeit currency, and other federal crimes across Pakistan. Its role has narrowed over time — anti-corruption moved to NAB in 2004, and cybercrime investigation moved to the NCCIA after the PECA 2025 amendment.",
  },
  {
    question: "Is the FIA still responsible for cybercrime complaints?",
    answer:
      "No, not primarily. Since the PECA Amendment Act 2025, the National Cyber Crime Investigation Agency (NCCIA) has exclusive investigative authority over PECA cybercrime cases. The FIA's older Cybercrime Wing channels are being superseded by the NCCIA's own complaint system.",
  },
  {
    question: "How do I contact the FIA for an immigration or passport issue?",
    answer:
      "The FIA's Immigration Wing operates offices in major Pakistani cities and in Pakistani embassies and consulates abroad — the FIA's official website (fia.gov.pk) lists current contact points and complaint procedures for immigration, passport, and human-smuggling matters.",
  },
  {
    question: "What law created the FIA?",
    answer:
      "The Federal Investigation Agency Act, 1974 (Act VIII of 1975), which established the agency under the federal Ministry of Interior with nationwide investigative jurisdiction.",
  },
  {
    question: "Can Wakeel.org tell me whether to file with the FIA or the NCCIA?",
    answer:
      "Wakeel.org can explain the general division of responsibility between the FIA and the NCCIA based on the type of issue you're describing. It cannot file a complaint on your behalf or guarantee which agency will take up a specific case — a licensed advocate can confirm the right forum for your facts.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "FIA Pakistan: Role, Jurisdiction, and How to File a Complaint",
    description:
      "What the Federal Investigation Agency actually handles in Pakistan today — immigration, human smuggling, and federal crimes — and why cybercrime complaints now go to the NCCIA instead.",
    author: { "@type": "Organization", name: "Wakeel.org" },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-10-15",
    dateModified: "2026-10-15",
    mainEntityOfPage: `${site.url}/journal/article/fia-pakistan-role-jurisdiction-complaints`,
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
        name: "FIA Pakistan: Role, Jurisdiction, and How to File a Complaint",
        item: `${site.url}/journal/article/fia-pakistan-role-jurisdiction-complaints`,
      },
    ],
  },
];

const keywords = [
  "fia pakistan",
  "federal investigation agency role",
  "fia act 1974",
  "fia jurisdiction pakistan",
  "fia vs nccia cybercrime",
  "fia immigration complaint pakistan",
].join(", ");

export default function FiaPakistanRoleJurisdictionComplaints() {
  return (
    <Layout>
      <MarketingSEO
        title="FIA Pakistan: Role, Jurisdiction, and How to File a Complaint"
        description="What the Federal Investigation Agency actually handles in Pakistan today, and why cybercrime complaints now go to the NCCIA instead of the FIA Cybercrime Wing."
        path="/journal/article/fia-pakistan-role-jurisdiction-complaints"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>Legal Help · Published October 15, 2026</p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            FIA Pakistan: Role, Jurisdiction, and How to File a Complaint
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The FIA's job has changed significantly over the years — here's what it actually
            handles today, and where to go if it's the wrong agency.
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
                The{" "}
                <a href="https://www.fia.gov.pk/" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
                  Federal Investigation Agency (FIA)
                </a>
                , created under the{" "}
                <a href="https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-bpuUY2Zr-sg-jjjjjjjjjjjjj" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
                  FIA Act 1974
                </a>
                , now primarily handles <strong>immigration and passport enforcement, human
                smuggling, and counterfeit currency</strong> across Pakistan. Two functions have
                moved elsewhere: <strong>anti-corruption</strong> went to NAB in 2004, and{" "}
                <strong>cybercrime investigation</strong> moved to the National Cyber Crime
                Investigation Agency (NCCIA) after the PECA 2025 amendment. If your issue is a
                cybercrime complaint, file with the NCCIA, not the FIA.
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
          <h2 className={sectionHeading}>Why so much outdated advice still points to the FIA</h2>
          <p className="text-muted-foreground leading-relaxed">
            For years, the FIA Cybercrime Wing was the default answer to "who do I report a
            cybercrime to in Pakistan" — which is why a large amount of older content, and even
            some current search results, still direct cybercrime victims to fia.gov.pk or the old
            complaint.fia.gov.pk portal. Since the PECA Amendment Act 2025 created the{" "}
            <strong>National Cyber Crime Investigation Agency (NCCIA)</strong> with exclusive
            investigative authority under Section 29(1) of PECA, that's no longer accurate for
            cybercrime specifically — the right first stop is complaint.nccia.gov.pk or the 1799
            helpline.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            For everything outside cybercrime — a lost or fraudulently obtained passport, a
            suspected human-trafficking case, currency counterfeiting, or an immigration-related
            complaint — the FIA remains the correct agency, and its international Immigration Wing
            offices are specifically built for cases involving overseas Pakistanis.
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
                  Explaining the FIA's current role and helping you figure out whether the FIA,
                  the NCCIA, or another agency is the right place to file.
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
                  It cannot file a complaint with the FIA on your behalf or represent you — the
                  agency itself, or a licensed advocate, should handle that.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel which agency to contact — free
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
              { label: "Federal Investigation Agency — official site", href: "https://www.fia.gov.pk/" },
              { label: "Federal Investigation Agency Act, 1974 — Pakistan Code (Ministry of Law and Justice)", href: "https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-bpuUY2Zr-sg-jjjjjjjjjjjjj" },
              { label: "National Cyber Crime Investigation Agency (NCCIA) — official site", href: "https://www.nccia.gov.pk/" },
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
            <Link href="/journal/article/nccia-cyber-crime-complaint-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to File a Cyber Crime Complaint in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/peca-act-pakistan-complete-guide-cybercrime-laws" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">PECA Act Pakistan: Complete Guide to Cybercrime Laws</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/exit-control-list-ecl-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">The Exit Control List (ECL) in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/police-complaint-against-police-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to File a Complaint Against the Police in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Not sure whether to approach the FIA or another agency?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel to help you identify the right forum — then verify with a licensed advocate
            before you file.
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
