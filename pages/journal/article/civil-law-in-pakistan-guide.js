import Link from "next/link";
import {
  CheckCircle2,
  FileText,
  Scale,
  Home,
  Handshake,
  Clock,
  HelpCircle,
  AlertTriangle,
  Gavel,
} from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site } from "../../../src/data/marketing";
import { cardBase, eyebrow, headingGradient, sectionHeading } from "../../../src/data/theme";

const statutes = [
  { icon: Handshake, title: "Contract Act, 1872", detail: "The foundation of contract law — offer, acceptance, consideration, capacity, and what makes an agreement enforceable (or void or voidable) in Pakistan." },
  { icon: Home, title: "Transfer of Property Act, 1882", detail: "Governs how property is legally sold, mortgaged, leased, or gifted — the substantive rules behind most property disputes, alongside provincial registration and stamp requirements." },
  { icon: FileText, title: "Code of Civil Procedure, 1908", detail: "The procedural rulebook for every civil case — how a suit is filed, which court has jurisdiction, how evidence is led, and how a decree is executed once a case is won." },
  { icon: Scale, title: "Specific Relief Act, 1877", detail: "Governs remedies beyond money — specific performance of a contract, injunctions, declaratory decrees, and cancellation of documents, where damages alone wouldn't fix the harm." },
  { icon: Clock, title: "Limitation Act, 1908", detail: "Sets the deadlines within which a civil suit must be filed — miss the limitation period on most claims and the right to sue can be lost regardless of how strong the case is on the merits." },
  { icon: Gavel, title: "Qanun-e-Shahadat Order, 1984", detail: "Pakistan's evidence law — what counts as admissible evidence, the burden of proof, and how documents and witness testimony are weighed in civil (and criminal) proceedings." },
];

const suitStages = [
  "Filing the plaint — the written statement of your claim, filed in the civil court with the right pecuniary and territorial jurisdiction under the CPC.",
  "Service of summons and the defendant's written statement, responding to each allegation.",
  "Framing of issues — the court identifies the specific factual and legal questions that actually need to be decided.",
  "Evidence — both sides present witnesses and documents; cross-examination happens at this stage.",
  "Final arguments and judgment, followed by a formal decree that the winning party can execute (enforce) if the losing party doesn't comply voluntarily.",
  "Appeal — a first appeal typically goes to the District Court or High Court depending on the original forum, with a further appeal possible up to the Supreme Court on questions of law.",
];

const faqs = [
  {
    question: "What is civil law in Pakistan?",
    answer:
      "Civil law covers disputes between private parties (or between a party and the state acting in a private capacity) over rights and obligations — property, contracts, family matters, torts (civil wrongs), and commercial disputes — as distinct from criminal law, which deals with offences against the state. Civil cases proceed under the Code of Civil Procedure, 1908, and typically end in a decree (a court order) rather than a punishment.",
  },
  {
    question: "How long does a civil case take in Pakistan?",
    answer:
      "There's no fixed timeline, and realistically it can take years, particularly given the scale of Pakistan's civil case backlog — district-level courts alone were carrying roughly 1.86 million pending cases as of 2025, with civil litigation making up a large share. Simpler, well-documented claims with fewer contested facts generally move faster than disputes with extensive evidence or repeated adjournments.",
  },
  {
    question: "What's the difference between a civil suit and a criminal case?",
    answer:
      "A civil suit is filed by one private party against another to enforce a right or claim compensation, and is governed by the CPC 1908. A criminal case is brought (in the state's name) for an offence against the law itself, governed by the CrPC 1898, and can result in punishment such as fine or imprisonment. The same set of facts — a bounced cheque, for instance — can sometimes give rise to both a civil claim and a criminal charge in parallel.",
  },
  {
    question: "What happens if I win a civil case but the other party doesn't pay?",
    answer:
      "A decree isn't automatically enforced — you generally need to file separate execution proceedings under the CPC 1908 to actually recover what the court awarded, which can include attaching the other party's property or bank accounts. This is a distinct legal step people are often surprised to learn is necessary even after winning.",
  },
  {
    question: "Can Wakeel.org help me understand my civil case?",
    answer:
      "Wakeel.org can explain the stage your case is at, summarize documents like a plaint or written statement, and help you understand the relevant statute in plain English or Urdu. It cannot draft your pleadings, appear in court, or predict how a judge will rule on your specific facts — that requires a licensed advocate.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Civil Law in Pakistan: Complete Guide",
    description:
      "How civil law works in Pakistan — the key statutes (Contract Act, CPC 1908, Transfer of Property Act, Limitation Act), the stages of a civil suit, and how it differs from criminal law.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-03-30",
    dateModified: "2026-03-30",
    mainEntityOfPage: `${site.url}/journal/article/civil-law-in-pakistan-guide`,
    citation: [
      { "@type": "CreativeWork", name: "Code of Civil Procedure, 1908 — Pakistan Code (Ministry of Law and Justice)", url: "https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apeb-sg-jjjjjjjjjjjjj" },
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
        name: "Civil Law in Pakistan: Complete Guide",
        item: `${site.url}/journal/article/civil-law-in-pakistan-guide`,
      },
    ],
  },
];

const keywords = [
  "civil law in pakistan",
  "code of civil procedure 1908",
  "civil suit process pakistan",
  "contract act 1872 pakistan",
  "limitation act pakistan",
  "specific relief act pakistan",
  "civil vs criminal law pakistan",
].join(", ");

export default function CivilLawInPakistanGuide() {
  return (
    <Layout>
      <MarketingSEO
        title="Civil Law in Pakistan: Complete Guide"
        description="How civil law works in Pakistan — the key statutes, the stages of a civil suit under the CPC 1908, and how civil law differs from criminal law."
        path="/journal/article/civil-law-in-pakistan-guide"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>
            Law Study & Research · Published March 30, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Civil Law in Pakistan: Complete Guide
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Property disputes, unpaid contracts, family matters, and business disagreements all run
            through the same procedural spine — the Code of Civil Procedure, 1908. Here's how it
            actually works, statute by statute and stage by stage.
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
                Civil law in Pakistan governs disputes between private parties — property,
                contracts, family, and commercial matters — and runs on the{" "}
                <strong>Code of Civil Procedure, 1908</strong> for process, plus substantive
                statutes like the <strong>Contract Act 1872</strong>, the{" "}
                <strong>Transfer of Property Act 1882</strong>, and the{" "}
                <strong>Limitation Act 1908</strong>. A civil case ends in a{" "}
                <strong>decree</strong> — not a punishment — and generally needs separate{" "}
                <strong>execution proceedings</strong> to actually be enforced.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educate: statutes */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>The statutes that make up civil law</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {statutes.map((r) => {
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

      {/* Reveal: stages */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className={sectionHeading}>How a civil suit actually moves through the system</h2>
          </div>
          <Card className={cardBase}>
            <CardContent className="p-6">
              <ol className="space-y-3">
                {suitStages.map((step, i) => (
                  <li key={step} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center justify-center h-5 w-5 rounded-full bg-primary/10 text-primary text-xs font-semibold shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-5 flex items-start gap-3 rounded-md bg-primary/5 p-4 text-sm text-muted-foreground">
                <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>
                  Pakistan's district-level civil backlog runs into the millions of pending cases —
                  which is exactly why the Limitation Act's filing deadlines and clean documentation
                  from day one matter more than most people expect.
                </span>
              </div>
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
                  Explaining which civil statute applies to your situation, summarizing documents
                  like a plaint, written statement, or contract, and walking you through what stage
                  of a civil suit typically comes next.
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
                  It cannot draft or file your pleadings, calculate your limitation deadline with
                  certainty, or represent you in court — engage a licensed advocate for anything
                  you intend to actually file.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel about your civil matter — free
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
              { label: "Code of Civil Procedure, 1908 — Pakistan Code (Ministry of Law and Justice)", href: "https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apeb-sg-jjjjjjjjjjjjj" },
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
            <Link href="/journal/article/civil-suit-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to File a Civil Suit in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/draft-legal-contract-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to Draft a Legal Contract in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/how-courts-work-in-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How Courts Work in Pakistan</p>
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
          <h2 className={sectionHeading}>Facing a civil dispute?</h2>
          <p className="text-muted-foreground">
            Describe your situation and Wakeel will help you understand which law applies and what
            stage typically comes next — then verify with a licensed advocate.
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
