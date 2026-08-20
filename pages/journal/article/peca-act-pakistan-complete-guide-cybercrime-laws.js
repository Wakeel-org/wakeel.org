import Link from "next/link";
import {
  CheckCircle2,
  ShieldAlert,
  Gavel,
  Users,
  ScrollText,
  HelpCircle,
  AlertTriangle,
} from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site } from "../../../src/data/marketing";
import { cardBase, headingGradient, sectionHeading } from "../../../src/data/theme";

const framework = [
  { icon: ShieldAlert, title: "Unauthorized access and interference (Sections 3–10)", detail: "Cover hacking, unauthorized data access, interference with information systems, and identity theft — the technical backbone of the Act, aimed at the systems side of cybercrime." },
  { icon: Users, title: "Offences against individuals (Sections 20, 21, 24)", detail: "Section 20 covers offences against a person's dignity (including online defamation), Section 21 covers offences against modesty (including non-consensual sharing of sexually explicit images), and Section 24 defines cyberstalking — the sections most citizens actually interact with." },
  { icon: ScrollText, title: "The 2025 amendment reshaped enforcement", detail: "The PECA Amendment Act 2025 gave the newly created National Cyber Crime Investigation Agency (NCCIA) exclusive investigative powers over cybercrime — previously shared with police and the FIA — and added Section 26-A, criminalising the spread of information likely to cause fear, panic, or unrest online." },
  { icon: Gavel, title: "Special courts and admissible digital evidence", detail: "PECA cases are tried before designated courts, and the Act works alongside the Qanun-e-Shahadat Order 1984's electronic evidence provisions, plus the NCCIA's own forensic lab reports, which the 2025 amendment made directly admissible in court." },
];

const faqs = [
  {
    question: "What is PECA in Pakistan?",
    answer:
      "The Prevention of Electronic Crimes Act 2016 (PECA) is Pakistan's primary cybercrime statute — covering hacking and unauthorized access, offences against a person's dignity and modesty, cyberstalking, and other electronic crimes, with a 2025 amendment that reshaped enforcement and added new offences.",
  },
  {
    question: "What changed in PECA's 2025 amendment?",
    answer:
      "It created the National Cyber Crime Investigation Agency (NCCIA) with exclusive investigative authority over cybercrime cases, gave the NCCIA its own forensic lab whose reports are admissible in court, and added Section 26-A, criminalising online dissemination of information likely to cause fear, panic, or unrest.",
  },
  {
    question: "What are the most commonly used PECA sections?",
    answer:
      "Section 20 (offences against dignity, including online defamation), Section 21 (offences against modesty, including non-consensual sharing of intimate images), and Section 24 (cyberstalking) are the provisions most citizens actually encounter, alongside the unauthorized-access sections used in hacking and fraud cases.",
  },
  {
    question: "Who investigates cybercrime under PECA now?",
    answer:
      "Since the 2025 amendment, the National Cyber Crime Investigation Agency (NCCIA) has exclusive investigative authority, replacing the earlier shared arrangement between police and the FIA's Cyber Crime Wing.",
  },
  {
    question: "Can Wakeel.org explain a PECA provision to me?",
    answer:
      "Wakeel.org can explain what a specific PECA section covers and how it generally applies, in plain English or Urdu, and help you organize facts before filing a complaint or seeing a lawyer. It cannot file a complaint with the NCCIA, assess digital evidence, or represent you — a licensed advocate should handle that.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "PECA Act Pakistan: Complete Guide to Cybercrime Laws",
    description:
      "How the Prevention of Electronic Crimes Act 2016 works in Pakistan — unauthorized access, offences against dignity and modesty, cyberstalking, and the 2025 amendment that created the NCCIA.",
    author: { "@type": "Organization", name: "Wakeel.org" },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-02-24",
    dateModified: "2026-02-24",
    mainEntityOfPage: `${site.url}/journal/article/peca-act-pakistan-complete-guide-cybercrime-laws`,
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
        name: "PECA Act Pakistan: Complete Guide to Cybercrime Laws",
        item: `${site.url}/journal/article/peca-act-pakistan-complete-guide-cybercrime-laws`,
      },
    ],
  },
];

const keywords = [
  "peca act pakistan",
  "prevention of electronic crimes act 2016",
  "peca amendment 2025",
  "nccia pakistan",
  "cybercrime law pakistan",
  "section 20 21 24 peca",
].join(", ");

export default function PecaActPakistanCompleteGuideCybercrimeLaws() {
  return (
    <Layout>
      <MarketingSEO
        title="PECA Act Pakistan: Complete Guide to Cybercrime Laws"
        description="How the Prevention of Electronic Crimes Act 2016 works — unauthorized access, offences against dignity and modesty, cyberstalking, and the 2025 amendment that created the NCCIA."
        path="/journal/article/peca-act-pakistan-complete-guide-cybercrime-laws"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Legal Help · Published February 24, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            PECA Act Pakistan: Complete Guide to Cybercrime Laws
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            PECA is the single statute behind almost every cybercrime case in Pakistan — and it
            changed significantly in 2025. Here's the framework, start to finish.
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
                <a href="https://www.pakistancode.gov.pk/pdffiles/administrator6a061efe0ed5bd153fa8b79b8eb4cba7.pdf" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
                  Prevention of Electronic Crimes Act 2016
                </a>{" "}
                covers unauthorized access and hacking, offences against a person's{" "}
                <strong>dignity</strong> (Section 20) and <strong>modesty</strong> (Section 21), and{" "}
                <strong>cyberstalking</strong> (Section 24). The{" "}
                <strong>2025 amendment</strong> gave the new{" "}
                <strong>National Cyber Crime Investigation Agency (NCCIA)</strong> exclusive
                investigative powers and added Section 26-A criminalising online content that
                causes fear or unrest.
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
          <h2 className={sectionHeading}>What the 2025 amendment actually changed, and why it's contested</h2>
          <p className="text-muted-foreground leading-relaxed">
            Independent analysis from{" "}
            <a href="https://sahsol.lums.edu.pk/node/25604" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
              LUMS SAHSOL
            </a>{" "}
            and Pakistan's own{" "}
            <a href="https://nchr.gov.pk/wp-content/uploads/2026/02/NCHR-Report-on-PECA-and-the-2025-Amendments-Act.pdf" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
              National Commission for Human Rights
            </a>{" "}
            have both examined the 2025 amendment closely, and both flag the same tension: the new
            Section 26-A's broad language around content causing "fear, panic or disorder" gives
            the NCCIA significant discretion over what counts as an offence, which rights groups
            argue creates real risk for legitimate online speech alongside its intended targets.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Practically, this means the same conduct — a strongly worded post, a viral rumor, a
            piece of commentary — can land very differently depending on how it's characterised,
            which is exactly why getting a lawyer's read on anything that risks touching Section
            26-A matters more than trying to self-assess based on a general summary.
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
                  Explaining what a specific PECA section covers and how it generally applies, in
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
                  It cannot file a complaint with the NCCIA, assess digital evidence, or represent
                  you — a licensed advocate should handle that.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel about a PECA section — free
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
              { label: "NCHR Report on PECA and the 2025 Amendments Act — National Commission for Human Rights", href: "https://nchr.gov.pk/wp-content/uploads/2026/02/NCHR-Report-on-PECA-and-the-2025-Amendments-Act.pdf" },
              { label: "The PECA Amendment 2025: A Critical Analysis — LUMS SAHSOL", href: "https://sahsol.lums.edu.pk/node/25604" },
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
            <Link href="/journal/article/cybercrime-in-pakistan-types-punishments-remedies" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Cybercrime in Pakistan: Types, Punishments and Legal Remedies</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/how-to-file-cybercrime-complaint-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to File a Cybercrime Complaint in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/nccia-cyber-crime-complaint-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to File a Cyber Crime Complaint in Pakistan</p>
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
          <h2 className={sectionHeading}>Dealing with a cybercrime issue?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel to explain which PECA section applies — then verify with a licensed advocate
            before you act.
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
