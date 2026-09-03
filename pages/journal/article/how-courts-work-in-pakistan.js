import Link from "next/link";
import {
  CheckCircle2,
  Landmark,
  Gavel,
  Scale,
  Building2,
  Users,
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

const hierarchy = [
  { icon: Landmark, title: "Supreme Court of Pakistan", detail: "The apex court (Article 175). It hears appeals from the High Courts (Article 185) and has original jurisdiction under Article 184(3) for matters of public importance involving fundamental rights." },
  { icon: Building2, title: "High Courts (one per province, plus Islamabad)", detail: "Each has appellate jurisdiction over cases from the district judiciary in its territory, plus the writ jurisdiction under Article 199 covered in our companion guide." },
  { icon: Scale, title: "Federal Shariat Court", detail: "Established under Article 203, it examines whether any law is repugnant to the injunctions of Islam, and has separate criminal appellate jurisdiction over Hudood-related offences." },
  { icon: Gavel, title: "District & Sessions Courts", detail: "The backbone of the subordinate judiciary. Sessions Courts handle serious criminal trials; District Courts (through Additional District Judges and Civil Judges) handle the bulk of civil litigation." },
  { icon: Users, title: "Judicial Magistrates", detail: "Handle less serious criminal matters, remand and bail applications at the first stage, and much of the day-to-day criminal process that begins right after an FIR." },
  { icon: Scale, title: "Special tribunals and courts", detail: "Labour Courts, Banking Courts, Anti-Terrorism Courts, Consumer Courts, and the National Industrial Relations Commission (NIRC) exist because some disputes need faster or more specialised handling than the general court system provides." },
];

const filingBasics = [
  "Jurisdiction comes first: filing in the wrong court (wrong pecuniary value, wrong district, wrong subject-matter forum) can get a case returned or dismissed before it's even heard on the merits.",
  "Court fees, governed by the Court Fees Act 1870, are calculated based on the nature and value of the claim — an unpaid or underpaid court fee is a common, entirely avoidable reason for delay.",
  "Adjournments are routine, not exceptional, in Pakistani court practice — realistic timeline expectations matter as much as the legal merits of a case.",
  "A first appeal generally goes to the next tier up (District Court to High Court, for example); a further appeal on a question of law can reach the Supreme Court, but not every case has an automatic right to be heard there.",
];

const faqs = [
  {
    question: "What is the highest court in Pakistan?",
    answer:
      "The Supreme Court of Pakistan, established under Article 175 of the Constitution. It's the final court of appeal for civil and criminal matters from the High Courts and has original jurisdiction under Article 184(3) for cases of public importance involving fundamental rights.",
  },
  {
    question: "What's the difference between the Supreme Court and a High Court in Pakistan?",
    answer:
      "The Supreme Court is the apex court with nationwide jurisdiction and the final say on appeals. Each High Court (Punjab, Sindh, Khyber Pakhtunkhwa, Balochistan, and Islamabad) has jurisdiction limited to its own territory, hearing appeals from the district judiciary within it and exercising writ jurisdiction under Article 199.",
  },
  {
    question: "What does the Federal Shariat Court do?",
    answer:
      "Established under Article 203 of the Constitution, it examines whether any law or provision is repugnant to the injunctions of Islam as laid down in the Quran and Sunnah, and separately hears criminal appeals in Hudood-related cases. Its decisions on Islamic-law questions can be appealed to the Shariat Appellate Bench of the Supreme Court.",
  },
  {
    question: "Why do civil and criminal cases take so long in Pakistani courts?",
    answer:
      "There's no single cause, but the scale of the problem is real: pending civil and criminal cases in the district judiciary alone were estimated at roughly 1.86 million as of 2025, against around 0.39 million at the higher court levels. Judicial vacancies, frequent adjournments, and case complexity all contribute — which is exactly why realistic timeline expectations and clean documentation from the start matter.",
  },
  {
    question: "Can Wakeel.org tell me which court to file in?",
    answer:
      "Wakeel.org can explain which type of court or forum generally handles a matter like yours — civil, criminal, labour, consumer, or constitutional — in plain English or Urdu. It cannot confirm the exact court with jurisdiction over your specific case or file anything for you; a licensed advocate should verify jurisdiction before you file.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How Courts Work in Pakistan: Complete Guide to Court Procedures",
    description:
      "Pakistan's court hierarchy explained — the Supreme Court, High Courts, the Federal Shariat Court, the district judiciary, and special tribunals — plus the basics of filing and appeals.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-04-17",
    dateModified: "2026-04-17",
    mainEntityOfPage: `${site.url}/journal/article/how-courts-work-in-pakistan`,
    citation: [
      { "@type": "CreativeWork", name: "The Constitution of the Islamic Republic of Pakistan, 1973 (up to date, official) — National Assembly of Pakistan", url: "https://www.na.gov.pk/uploads/documents/1549886415_632.pdf" },
      { "@type": "CreativeWork", name: "The Endless Wait: Crisis of Backlog in Pakistan's District Judiciary (2025 case-pendency figures) — Daily Pakistan", url: "https://en.dailypakistan.com.pk/25-Nov-2025/the-endless-wait-crisis-of-backlog-in-pakistans-district-judiciary" },
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
        name: "How Courts Work in Pakistan",
        item: `${site.url}/journal/article/how-courts-work-in-pakistan`,
      },
    ],
  },
];

const keywords = [
  "how courts work in pakistan",
  "court hierarchy pakistan",
  "supreme court of pakistan jurisdiction",
  "high court pakistan jurisdiction",
  "district and sessions court pakistan",
  "federal shariat court pakistan",
  "court procedures pakistan",
].join(", ");

export default function HowCourtsWorkInPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="How Courts Work in Pakistan: Complete Guide to Court Procedures"
        description="Pakistan's court hierarchy explained — the Supreme Court, High Courts, Federal Shariat Court, district judiciary, and special tribunals — plus the basics of filing and appeals."
        path="/journal/article/how-courts-work-in-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>
            Law Study & Research · Published April 17, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            How Courts Work in Pakistan: Complete Guide to Court Procedures
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            "Which court do I even go to?" is often the first real obstacle in a legal problem —
            before merits, before evidence. Here's the actual structure, from the Supreme Court
            down to the magistrate's court that handles most day-to-day cases.
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
                Pakistan runs a two-tier court system: the <strong>superior judiciary</strong> — the{" "}
                <strong>Supreme Court</strong>, the <strong>High Courts</strong>, and the{" "}
                <strong>Federal Shariat Court</strong> — with constitutional powers and broad
                appellate jurisdiction, and the <strong>subordinate (district) judiciary</strong> —
                District & Sessions Courts and Judicial Magistrates — which handles the vast
                majority of cases filed. Specialised tribunals (Labour, Banking, Consumer,
                Anti-Terrorism Courts) exist for specific subject matter. Jurisdiction and court
                fees matter as much as the merits when you're deciding where to file.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educate: hierarchy */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>The hierarchy, top to bottom</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {hierarchy.map((r) => {
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

      {/* Reveal: filing basics */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className={sectionHeading}>What actually slows a case down</h2>
          </div>
          <Card className={cardBase}>
            <CardContent className="p-6">
              <ul className="space-y-3">
                {filingBasics.map((item) => (
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
                  Explaining which type of court or forum generally handles a matter like yours,
                  and what a typical filing and appeal path looks like — in plain English or Urdu.
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
                  It cannot confirm the exact court with jurisdiction over your specific case,
                  calculate your court fee, or file anything on your behalf — verify jurisdiction
                  with a licensed advocate before filing.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel which forum fits your case — free
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
              { label: "The Endless Wait: Crisis of Backlog in Pakistan's District Judiciary (2025 case-pendency figures) — Daily Pakistan", href: "https://en.dailypakistan.com.pk/25-Nov-2025/the-endless-wait-crisis-of-backlog-in-pakistans-district-judiciary" },
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
            <Link href="/journal/article/writ-jurisdiction-high-courts-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Writ Jurisdiction of High Courts in Pakistan Explained</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/civil-suit-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to File a Civil Suit in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/pakistan-legal-system-guide" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Pakistan Law: Complete Guide to the Legal System</p>
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
          <h2 className={sectionHeading}>Not sure which court applies to your matter?</h2>
          <p className="text-muted-foreground">
            Describe your situation and Wakeel will help you understand which forum typically
            handles it — then confirm jurisdiction with a licensed advocate.
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
