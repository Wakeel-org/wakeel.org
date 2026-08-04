import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Mail,
  Scale,
  Clock,
  HelpCircle,
  AlertTriangle,
  Languages,
  Search,
} from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site } from "../../../src/data/marketing";
import { cardBase, headingGradient, sectionHeading } from "../../../src/data/theme";

const meaning = [
  {
    icon: FileText,
    title: "What a legal notice actually is",
    detail:
      "A legal notice (Urdu: 'قانونی نوٹس') is a formal written communication — usually sent through a lawyer — informing you of a grievance, demanding an action (payment, vacating property, ceasing conduct), and often warning of legal proceedings if you don't respond within a stated time. It is a warning and a paper trail, not a court order.",
  },
  {
    icon: Scale,
    title: "It is not a summons or a verdict",
    detail:
      "Receiving a legal notice does not mean a case has been filed against you, and it doesn't mean the sender is automatically right. It's frequently a required or strategic step before filing a civil suit — under Section 80 of the Civil Procedure Code 1908, for instance, a notice is mandatory before suing the government. In many private disputes, a notice is sent to create a documented record and give one last chance to resolve things.",
  },
  {
    icon: Clock,
    title: "Deadlines in the notice matter, but aren't always absolute",
    detail:
      "Most notices state a response window — commonly 7, 14, 15, or 30 days. Missing it doesn't automatically mean you lose, but it can weaken your position or speed up the other side's next step (usually filing suit). Treat the deadline as real, but don't panic into a hasty, undrafted reply.",
  },
  {
    icon: Search,
    title: "Read it for facts, not just tone",
    detail:
      "Legal notices are often written to sound alarming. Strip out the intimidating language and identify: who sent it, under what capacity, what exactly they're alleging, what they're demanding, and what deadline is stated. That factual skeleton is what actually matters for your response.",
  },
];

const responseSteps = [
  "Note the date you received it — this starts your response clock, and proof of delivery/receipt date matters later.",
  "Identify the sender's advocate, their client, and the exact relief demanded — read the notice twice before reacting.",
  "Gather your own documents relevant to the dispute (agreements, receipts, messages) before deciding how to respond.",
  "Decide whether to respond yourself (for very minor, low-risk matters) or through a lawyer — most notices with real financial or legal stakes deserve a lawyer-drafted reply.",
  "Never ignore a legal notice hoping it goes away — silence is sometimes read as an admission, and it removes your chance to put your side on record early.",
  "Keep a copy of the notice and your reply, and proof of how and when you sent it (registered post, courier receipt, or email).",
];

const faqs = [
  {
    question: "What does a legal notice mean in Urdu?",
    answer:
      "A legal notice is called 'قانونی نوٹس' in Urdu — a formal written warning, typically sent by a lawyer on behalf of a client, stating a grievance, a demand, and a deadline to respond before legal action such as filing a civil suit or criminal complaint. It is a step in the dispute process, not a court judgment.",
  },
  {
    question: "How do I respond to a legal notice in Pakistan?",
    answer:
      "First, read it carefully and note the deadline. Gather your own relevant documents and write down your version of events. For anything beyond a minor, low-stakes matter, have a lawyer draft your reply — a poorly worded response can weaken your position more than staying silent for a day or two while you get proper advice. Never simply ignore it.",
  },
  {
    question: "Is a legal notice the same as being sued?",
    answer:
      "No. A legal notice usually comes before a lawsuit is filed — it's often a required or strategic pre-litigation step (for example, Section 80 CPC requires notice before suing the government). Being formally sued means a plaint has actually been filed in court and you've been served with court process, which is a separate and later stage.",
  },
  {
    question: "What happens if I ignore a legal notice?",
    answer:
      "Ignoring it doesn't make the underlying dispute disappear. The sender may proceed to file a civil suit, criminal complaint, or other legal action, and your silence can sometimes be used against you as a missed opportunity to explain your side. It's almost always better to respond — even a brief, lawyer-reviewed acknowledgment — than to say nothing.",
  },
  {
    question: "Can Wakeel.org help me understand a legal notice?",
    answer:
      "Yes — this is one of the things Wakeel.org is built for. Upload or paste the notice and Wakeel can summarize it in plain English or Urdu, extract the key demand and deadline, explain confusing legal terms, and help you list questions and documents to bring to a lawyer. Wakeel cannot tell you whether the notice's claims are valid, draft your official reply, or send anything on your behalf — for that, a licensed advocate needs to be involved.",
  },
  {
    question: "What does a legal notice mean in Pakistan?",
    answer:
      "In Pakistan, a legal notice is a formal written communication — usually drafted and sent by a lawyer on a client's behalf — that states a grievance, demands a specific action or remedy, and sets a deadline before the sender takes further legal steps such as filing a civil suit, a criminal complaint, or (for employment or tenancy matters) approaching the relevant tribunal. It puts the dispute on record and gives the recipient a final chance to resolve it without litigation.",
  },
  {
    question: "What should I do after receiving a legal notice in Pakistan?",
    answer:
      "Note the exact date you received it and calculate the response deadline stated inside. Read it twice — once for the tone, once purely for facts: who sent it, what they're alleging, and what they want. Collect your own supporting documents and write a plain account of your side of events. Then decide whether to reply yourself (only for very minor matters) or have a lawyer draft the response — and either way, reply before the deadline rather than staying silent.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Understanding Legal Notices in Pakistan",
    description:
      "What a legal notice in Pakistan actually means, why you receive one, how to read it without panicking, and how to respond properly and on time.",
    author: { "@type": "Organization", name: "Wakeel.org" },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-06-14",
    dateModified: "2026-06-14",
    mainEntityOfPage: `${site.url}/journal/article/understanding-legal-notices-pakistan`,
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
        name: "Understanding Legal Notices in Pakistan",
        item: `${site.url}/journal/article/understanding-legal-notices-pakistan`,
      },
    ],
  },
];

const keywords = [
  "legal notice pakistan",
  "how to respond to legal notice",
  "legal notice meaning urdu",
  "legal notice reply pakistan",
  "section 80 cpc pakistan",
  "legal notice format pakistan",
  "what does a legal notice mean in pakistan",
  "what should i do after receiving a legal notice in pakistan",
].join(", ");

export default function UnderstandingLegalNoticesPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Understanding Legal Notices in Pakistan"
        description="Received a legal notice in Pakistan? What it actually means, why lawyers send them, what your deadline requires, and how to respond properly."
        path="/journal/article/understanding-legal-notices-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Legal Help · Published June 14, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Understanding Legal Notices in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            An envelope with a lawyer's letterhead can make your stomach drop before you've even
            opened it. Take a breath — a legal notice is a warning shot, not a verdict. Here's how
            to actually read one.
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
                A legal notice is a formal, usually lawyer-drafted, written warning about a
                grievance and a demand, with a deadline to respond before further legal action.
                It is <strong>not</strong> a lawsuit or a court order. Read it for the actual facts
                (sender, allegation, demand, deadline), don't ignore it, and get a lawyer involved
                for anything with real financial or legal weight — a rushed, undrafted reply can
                do more damage than a short, well-considered delay.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Meaning */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>What you're actually looking at</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {meaning.map((m) => {
              const Icon = m.icon;
              return (
                <Card key={m.title} className={cardBase}>
                  <CardHeader>
                    <Icon className="h-7 w-7 text-primary" />
                    <CardTitle className="text-lg">{m.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{m.detail}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Response steps */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className={sectionHeading}>How to respond, step by step</h2>
          </div>
          <Card className={cardBase}>
            <CardContent className="p-6">
              <ol className="space-y-3">
                {responseSteps.map((step, i) => (
                  <li key={step} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center justify-center h-5 w-5 rounded-full bg-primary/10 text-primary text-xs font-semibold shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
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
                  Summarizing a legal notice in seconds, pulling out the sender, the demand, and
                  the deadline. Translating dense legal English or Urdu into plain language.
                  Helping you prepare the questions and documents you'll want ready before calling
                  a lawyer.
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
                  It cannot tell you whether the notice's legal claims are valid, draft or send
                  your official reply, or represent you if the matter proceeds to court. Notices
                  with real financial or legal exposure need a licensed advocate's review.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Summarize your notice with Wakeel Free
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
            General educational information, not legal advice. Every notice and dispute is
            different — verify your specific situation with a licensed advocate before you reply
            or take action. See our{" "}
            <Link href="/disclaimer" className="text-primary hover:underline">full disclaimer</Link>.
          </p>
        </div>
      </section>

      {/* Related reading */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`${sectionHeading} text-center mb-8`}>Related reading</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/journal/legal-issues-pakistan/legal-notice-pakistan"
              className={`group ${cardBase} block rounded-lg p-5`}
            >
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                Understand a Legal Notice in Pakistan
              </p>
              <p className="text-xs text-muted-foreground mt-1">Guide · Wakeel Journal</p>
            </Link>
            <Link
              href="/journal/article/understand-legal-document-without-lawyer-pakistan"
              className={`group ${cardBase} block rounded-lg p-5`}
            >
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                How to Understand a Legal Document Without a Lawyer
              </p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link
              href="/journal/article/tenant-rights-rent-law-pakistan"
              className={`group ${cardBase} block rounded-lg p-5`}
            >
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                Tenant Rights Under Pakistan's Rent Laws
              </p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/citizens" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                Wakeel.org for Citizens
              </p>
              <p className="text-xs text-muted-foreground mt-1">How Wakeel helps everyday legal problems</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Just received a notice?</h2>
          <p className="text-muted-foreground">
            Don't sit with it unread. Paste the text or upload the document and get a clear
            summary in minutes — then bring it to a lawyer before your deadline.
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
