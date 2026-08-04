import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  BookOpen,
  Search,
  Languages,
  HelpCircle,
  AlertTriangle,
  FileSearch,
  Notebook,
} from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site } from "../../../src/data/marketing";
import { cardBase, headingGradient, sectionHeading } from "../../../src/data/theme";

const useCases = [
  {
    icon: BookOpen,
    title: "Turning dense statute text into study notes",
    detail:
      "PPC, CrPC, the Contract Act 1872, the Constitution — these texts weren't written for exam revision. Wakeel can restate a section in plain English or Urdu, break down its ingredients or elements, and build a structured outline you can actually revise from the night before a test.",
  },
  {
    icon: FileSearch,
    title: "Case law research support",
    detail:
      "Ask about a doctrine or landmark case (like Khurshid Bibi v. Baboo Khan on khula, or a leading Supreme Court judgment on fundamental rights) and get a plain-language explanation of the holding and its significance — a starting point for reading the full judgment, not a replacement for it.",
  },
  {
    icon: Languages,
    title: "Bilingual explanations for bilingual classrooms",
    detail:
      "Pakistani law is taught and practiced in English, but most students think and discuss in Urdu. Being able to ask a question in Urdu and get a precise legal explanation — or flip a concept into English for an exam answer — removes a real barrier that has nothing to do with how well you understand the law.",
  },
  {
    icon: Notebook,
    title: "Building comparison tables and outlines",
    detail:
      "Comparing FIR vs. complaint vs. private complaint procedure, or bail types under the CrPC, or the grounds for divorce under different family law provisions — Wakeel can lay these out as structured comparisons, which is often exactly the format an exam question is looking for.",
  },
  {
    icon: Search,
    title: "Moot court and assignment prep",
    detail:
      "Drafting research questions, organizing arguments on both sides of an issue, and identifying which sections or cases are relevant to a moot problem — Wakeel can help structure this groundwork so your research time goes further.",
  },
  {
    icon: GraduationCap,
    title: "LGAT and entrance exam preparation",
    detail:
      "For students preparing for the Law Graduate Assessment Test (LGAT) or similar entrance exams, Wakeel can explain testable legal concepts, generate practice questions on a topic, and clarify anything from a past paper that isn't sinking in.",
  },
];

const limits = [
  "Wakeel is a study aid, not a substitute for reading the actual statute, case, or textbook your course assigns.",
  "It cannot guarantee its summary matches exactly what your specific professor or examiner expects — always cross-check with your syllabus.",
  "It cannot write your assignment or moot memorial for you in a way that would violate your institution's academic integrity policy — use it to understand and organize, not to submit unedited output as your own analysis.",
  "For final exam answers, cite primary sources (the actual statute or law report) rather than an AI-generated summary.",
];

const faqs = [
  {
    question: "How can AI help law students in Pakistan?",
    answer:
      "AI legal assistants like Wakeel.org can turn dense statutory text into plain-language study notes, explain case law and doctrines, build comparison outlines for exam revision, and answer questions in English or Urdu at any hour. This speeds up understanding and organization — but it doesn't replace reading the assigned statute, case, or textbook, which remains the actual source for your exams.",
  },
  {
    question: "Is there a good AI tool for LLB study help in Pakistan?",
    answer:
      "Wakeel.org is built specifically around Pakistani statutes and case law, with bilingual English/Urdu support, which makes it more relevant for LLB coursework than a general-purpose AI chatbot that may default to US or UK law. Always verify anything exam-critical against your official course materials.",
  },
  {
    question: "Can Wakeel.org help with legal research for a moot court or assignment?",
    answer:
      "Yes — Wakeel can help you understand relevant sections and cases, organize arguments, and structure your research. It should be used to support your own analysis and research process, not to generate submitted work wholesale — check your institution's academic integrity policy on AI use before submitting anything.",
  },
  {
    question: "Does Wakeel.org explain law in Urdu for students?",
    answer:
      "Yes, Wakeel.org supports both English and Urdu, so you can ask a question in whichever language you think more clearly in, and get an explanation — or a translation of a legal concept — in return.",
  },
  {
    question: "Is Wakeel.org free for law students in Pakistan?",
    answer:
      "Wakeel.org offers a free plan suitable for everyday study questions and document understanding, alongside paid Student, Professional, and Organization tiers for heavier or specialized use. Check the current plans on the pricing page for what's included at each tier.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Wakeel AI for Law Students in Pakistan",
    description:
      "How LLB students in Pakistan can use Wakeel.org for statute explanations, case law research, bilingual study notes, and exam prep — and where it should stop being your only source.",
    author: { "@type": "Organization", name: "Wakeel.org" },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-07-10",
    dateModified: "2026-07-10",
    mainEntityOfPage: `${site.url}/journal/article/wakeel-ai-for-law-students-pakistan`,
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
        name: "Wakeel AI for Law Students in Pakistan",
        item: `${site.url}/journal/article/wakeel-ai-for-law-students-pakistan`,
      },
    ],
  },
];

const keywords = [
  "legal research for students pakistan",
  "llb study help pakistan",
  "law student tools pakistan",
  "ai for law students pakistan",
  "lgat preparation pakistan",
  "case law research pakistan",
].join(", ");

export default function WakeelAiForLawStudentsPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Wakeel AI for Law Students in Pakistan"
        description="How LLB students in Pakistan use Wakeel.org for statute explanations, case law research, bilingual study notes, and LGAT prep — and its honest limits."
        path="/journal/article/wakeel-ai-for-law-students-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Law Study &amp; Research · Published July 10, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Wakeel AI for Law Students in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Between PPC ingredients, CrPC procedure, and a professor who assumes you already read
            the bare act twice — LLB coursework in Pakistan can feel like it's testing your
            patience as much as your understanding. Here's how Wakeel actually fits into that grind.
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
                Wakeel.org is a Pakistan-specific AI legal assistant that can explain statutes and
                case law, build study notes and comparisons, and answer questions in English or
                Urdu — useful for LLB coursework, moot prep, and LGAT revision.{" "}
                <Link href="/law-students" className="text-primary font-semibold hover:underline">
                  See the dedicated law students page
                </Link>{" "}
                for the full feature set. It's a study aid, not a substitute for your textbook,
                the bare act, or your professor's specific expectations.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Use cases */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>Where Wakeel actually helps</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {useCases.map((u) => {
              const Icon = u.icon;
              return (
                <Card key={u.title} className={cardBase}>
                  <CardHeader>
                    <Icon className="h-7 w-7 text-primary" />
                    <CardTitle className="text-lg">{u.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{u.detail}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Limits */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className={sectionHeading}>Where it should stay a supplement</h2>
          </div>
          <Card className={cardBase}>
            <CardContent className="p-6">
              <ul className="space-y-3">
                {limits.map((l) => (
                  <li key={l} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <AlertTriangle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Start studying with Wakeel Free
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background py-16 sm:py-20">
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
            Educational study support, not legal advice. Always verify exam-critical content
            against your official course materials and check your institution's academic
            integrity policy before using AI in submitted coursework. See our{" "}
            <Link href="/disclaimer" className="text-primary hover:underline">full disclaimer</Link>.
          </p>
        </div>
      </section>

      {/* Related reading */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`${sectionHeading} text-center mb-8`}>Related reading</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/journal/legal-issues-pakistan/ppc-sections-explained"
              className={`group ${cardBase} block rounded-lg p-5 bg-card`}
            >
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                PPC Sections Explained in Simple English and Urdu
              </p>
              <p className="text-xs text-muted-foreground mt-1">Guide · Wakeel Journal</p>
            </Link>
            <Link
              href="/journal/legal-issues-pakistan/crpc-sections-explained"
              className={`group ${cardBase} block rounded-lg p-5 bg-card`}
            >
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                CrPC Sections Explained for Pakistan
              </p>
              <p className="text-xs text-muted-foreground mt-1">Guide · Wakeel Journal</p>
            </Link>
            <Link
              href="/journal/article/pakistani-law-vs-common-law"
              className={`group ${cardBase} block rounded-lg p-5 bg-card`}
            >
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                Pakistani Law vs Common Law: What's Actually Different
              </p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/law-students" className={`group ${cardBase} block rounded-lg p-5 bg-card`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                Wakeel.org for Law Students
              </p>
              <p className="text-xs text-muted-foreground mt-1">Full feature overview for LLB students</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Make revision less painful</h2>
          <p className="text-muted-foreground">
            Ask about any section, case, or doctrine in English or Urdu, and build notes you'll
            actually use before the exam.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">Try Wakeel Free</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/law-students">Wakeel for law students</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
