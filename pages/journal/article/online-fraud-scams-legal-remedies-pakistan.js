import Link from "next/link";
import {
  CheckCircle2,
  ShieldAlert,
  Landmark,
  Clock,
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
  { icon: Clock, title: "The first hour matters more than the complaint", detail: "If money moved from a bank account or mobile wallet, call your bank's helpline immediately to freeze the transaction and block the card — banks can sometimes reverse a transfer in the first hour that becomes unrecoverable a day later. File the cybercrime complaint after, not instead of, this call." },
  { icon: ShieldAlert, title: "PECA Section 14 — electronic fraud", detail: "Section 14 covers using a fake identity, website, or electronic misrepresentation to cheat someone out of money or property online, carrying up to two years' imprisonment and a fine of up to PKR 10 million. Section 13 (electronic forgery) often applies alongside it when fake documents or accounts were used." },
  { icon: Landmark, title: "Report to the NCCIA — and to your bank's regulator", detail: "Cybercrime complaints go to the National Cyber Crime Investigation Agency (NCCIA) at complaint.nccia.gov.pk, by emailing helpdesk@nccia.gov.pk, or by calling the 1799 helpline. For bank or mobile-wallet fraud specifically, a parallel complaint to the Banking Mohtasib or the State Bank of Pakistan's Consumer Protection Department can force your bank to investigate its own security lapses." },
  { icon: AlertTriangle, title: "Evidence quality decides how fast this moves", detail: "Vague screenshots slow an investigation down. Preserve the full unshortened URL of the fraudulent site or profile, the 12-digit transaction ID (UTR) and bank/wallet name, exported transaction logs, and timestamped screenshots showing the sender's name or number — not cropped images." },
];

const faqs = [
  {
    question: "What law covers online fraud and scams in Pakistan?",
    answer:
      "Section 14 of PECA 2016 covers electronic fraud — using a fake identity, website, or misrepresentation to cheat someone online — punishable with up to two years' imprisonment and a fine of up to PKR 10 million. Section 420 of the Pakistan Penal Code can also apply to the underlying cheating, and Section 13 (electronic forgery) often applies if fake documents were involved.",
  },
  {
    question: "How do I report an online scam in Pakistan?",
    answer:
      "File a complaint with the National Cyber Crime Investigation Agency (NCCIA) at complaint.nccia.gov.pk, by emailing helpdesk@nccia.gov.pk, or by calling the 1799 helpline. Bring your CNIC, transaction records, and screenshots — the NCCIA does not act on anonymous complaints.",
  },
  {
    question: "Can I get my money back after a bank fraud or scam?",
    answer:
      "It depends on how quickly you act and who was at fault. Call your bank immediately to attempt a freeze or reversal, then file a formal complaint. Under the State Bank of Pakistan's Electronic Fund Transfers Regulations 2018, banks bear the burden of proving a transfer was authorised — if they can't, they may be required to refund it. The Banking Mohtasib can order a refund where the bank showed security negligence.",
  },
  {
    question: "What evidence should I collect before filing a complaint?",
    answer:
      "The full, un-shortened URL of the fraudulent site or profile, the transaction ID (UTR) and bank or wallet name, exported transaction logs (PDF or CSV) from your banking app, and uncropped, timestamped screenshots showing the other party's name, number, or account details.",
  },
  {
    question: "Can Wakeel.org help me report an online scam?",
    answer:
      "Wakeel.org can explain which PECA sections likely apply and help you organise your evidence before you file with the NCCIA or your bank. It cannot submit the complaint, freeze a transaction, or represent you — those steps require your bank, the NCCIA, and, where needed, a licensed advocate.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Online Fraud and Scams: Legal Remedies in Pakistan",
    description:
      "What to do in the first hour after an online scam or bank fraud in Pakistan, the PECA sections that apply, and how to file with the NCCIA and the Banking Mohtasib.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-08-12",
    dateModified: "2026-08-12",
    mainEntityOfPage: `${site.url}/journal/article/online-fraud-scams-legal-remedies-pakistan`,
    citation: [
      { "@type": "CreativeWork", name: "The Prevention of Electronic Crimes Act, 2016 — Pakistan Code (Ministry of Law and Justice)", url: "https://www.pakistancode.gov.pk/pdffiles/administrator6a061efe0ed5bd153fa8b79b8eb4cba7.pdf" },
      { "@type": "CreativeWork", name: "NCCIA — Financial Frauds reporting page", url: "https://www.nccia.gov.pk/financial-frauds.php" },
      { "@type": "CreativeWork", name: "State Bank of Pakistan — Consumer Protection Department complaint mechanism", url: "https://www.sbp.org.pk/cpd/cpd-mech.asp" },
      { "@type": "CreativeWork", name: "State Bank of Pakistan — Complaint channels", url: "https://www.sbp.org.pk/ecib/complaint.htm" },
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
        name: "Online Fraud and Scams: Legal Remedies in Pakistan",
        item: `${site.url}/journal/article/online-fraud-scams-legal-remedies-pakistan`,
      },
    ],
  },
];

const keywords = [
  "online fraud pakistan",
  "online scam legal remedy pakistan",
  "peca section 14 electronic fraud",
  "nccia complaint online fraud",
  "banking mohtasib unauthorized transaction",
  "how to report online scam pakistan",
].join(", ");

export default function OnlineFraudScamsLegalRemediesPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Online Fraud and Scams: Legal Remedies in Pakistan"
        description="What to do after an online scam or bank fraud in Pakistan — the PECA sections that apply, how to freeze a transaction, and how to file with the NCCIA and the Banking Mohtasib."
        path="/journal/article/online-fraud-scams-legal-remedies-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>Legal Help · Published August 12, 2026</p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Online Fraud and Scams: Legal Remedies in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            What to do in the first hour, which law applies, and where to actually file — for
            a fake online seller, a phishing link, or unauthorized bank activity.
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
                Call your bank immediately to try to freeze the transaction, then file with the{" "}
                <a href="https://www.nccia.gov.pk/financial-frauds.php" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
                  National Cyber Crime Investigation Agency (NCCIA)
                </a>{" "}
                at complaint.nccia.gov.pk, via the 1799 helpline, or by emailing
                helpdesk@nccia.gov.pk. Online fraud generally falls under{" "}
                <strong>Section 14 (electronic fraud)</strong> and{" "}
                <strong>Section 13 (electronic forgery)</strong> of PECA 2016. For bank or wallet
                fraud specifically, the{" "}
                <a href="https://www.sbp.org.pk/cpd/cpd-mech.asp" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
                  Banking Mohtasib and State Bank of Pakistan
                </a>{" "}
                can order your bank to refund losses caused by its own security lapses.
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
          <h2 className={sectionHeading}>The fact most victims don't know: the burden of proof shifts to the bank</h2>
          <p className="text-muted-foreground leading-relaxed">
            Under the{" "}
            <strong>State Bank of Pakistan's Electronic Fund Transfers Regulations 2018</strong>,
            it's the bank — not the customer — that has to prove an electronic transfer was
            properly authorised. If your bank can't demonstrate that, it can be required to
            reimburse the loss. In practice this means an unauthorised transaction complaint is
            not just a criminal matter for the NCCIA; it's also a regulatory complaint your bank is
            legally obliged to investigate and resolve within a defined timeframe.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            If your bank's initial response is unsatisfactory, the{" "}
            <a href="https://www.sbp.org.pk/cpd/cpd-mech.asp" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
              Banking Mohtasib of Pakistan
            </a>{" "}
            has statutory power to order a refund where the bank showed negligence or a security
            lapse — a route many fraud victims never use because they assume the NCCIA complaint is
            their only option. Running both in parallel, with a lawyer's help lining up the
            paperwork, generally gets better results than either alone.
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
                  Explaining which PECA sections likely apply and what evidence to gather before you
                  file with the NCCIA, your bank, or the Banking Mohtasib.
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
                  It cannot freeze a transaction, file the complaint on your behalf, or represent
                  you — that requires your bank, the NCCIA, and possibly a licensed advocate.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel about an online scam — free
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
              { label: "NCCIA — Financial Frauds reporting page", href: "https://www.nccia.gov.pk/financial-frauds.php" },
              { label: "State Bank of Pakistan — Consumer Protection Department complaint mechanism", href: "https://www.sbp.org.pk/cpd/cpd-mech.asp" },
              { label: "State Bank of Pakistan — Complaint channels", href: "https://www.sbp.org.pk/ecib/complaint.htm" },
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
            <Link href="/journal/article/section-420-ppc-fraud-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Section 420 PPC: Fraud and Cheating in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/nccia-cyber-crime-complaint-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to File a Cyber Crime Complaint in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/peca-act-pakistan-complete-guide-cybercrime-laws" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">PECA Act Pakistan: Complete Guide to Cybercrime Laws</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/consumer-complaint-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to File a Consumer Complaint in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Just been scammed online?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel what to do first — then verify with a licensed advocate before you act.
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
