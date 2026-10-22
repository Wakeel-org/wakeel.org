import Link from "next/link";
import {
  CheckCircle2,
  Languages,
  FileSearch,
  ShieldCheck,
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
  { icon: AlertTriangle, title: "No AI tool is actually a lawyer — start here", detail: "None of the AI tools marketed in Pakistan, including Wakeel.org, are licensed to practice law, appear in court, or take on the professional liability a real advocate carries. \"Best AI lawyer\" really means \"best AI legal assistant\" — the honest framing matters because it changes what you should expect from any of these tools." },
  { icon: Languages, title: "Urdu support and Pakistan-specific grounding are the real filters", detail: "A general AI chatbot like ChatGPT or Gemini can discuss law fluently but isn't grounded in Pakistani statutes and can confidently cite the wrong section or wrong country's law. The tools worth comparing are the Pakistan-specific ones — evaluate them on whether they work in Urdu, and whether their answers are actually sourced to Pakistani law rather than generic legal knowledge." },
  { icon: FileSearch, title: "Document handling separates a Q&A bot from a genuine assistant", detail: "Being able to explain a section of the PPC is table stakes. Being able to read a 100-page lease, sale deed, or contract you upload and explain what it actually says is a much bigger practical use case — and far fewer tools genuinely do this well." },
  { icon: ShieldCheck, title: "The best tools build in verification, not overconfidence", detail: "A tool that reminds you to verify with a licensed advocate before acting is more trustworthy than one that answers every question with total confidence — legal AI is prone to hallucinating case citations and sections, and a tool's honesty about its own limits is itself a quality signal." },
];

const criteria = [
  {
    "name": "Explain a law or section",
    "detail": "Yes. A Pakistan-grounded assistant can explain what a statute or section says in plain English or Urdu."
  },
  {
    "name": "Read a notice, contract or lease",
    "detail": "Yes, as a first read. It can summarise and flag clauses to ask about. A lawyer should confirm anything you'll act on."
  },
  {
    "name": "Prepare you for a consultation",
    "detail": "Yes. It can organise facts into a timeline and list questions and documents to bring."
  },
  {
    "name": "Give advice on your specific case",
    "detail": "No. Advice that you rely on should come from an advocate who has reviewed your facts and carries professional responsibility."
  },
  {
    "name": "File, sign or appear in court",
    "detail": "No. Only advocates enrolled with a Bar Council under the Legal Practitioners and Bar Councils Act, 1973 can represent you."
  },
  {
    "name": "Negotiate or send legal notices on your behalf",
    "detail": "No. A lawyer, or you yourself, has to do this."
  }
];

const faqs = [
  {
    "question": "Is there a real AI lawyer in Pakistan?",
    "answer": "No. In Pakistan only advocates enrolled with a Bar Council can practise law and represent clients. Tools sold as 'AI lawyers' are AI legal assistants that explain law and help you prepare."
  },
  {
    "question": "Is it legal to use an AI legal assistant in Pakistan?",
    "answer": "Yes. Using an AI tool to understand law or prepare documents for yourself is lawful. The tool cannot give you representation or professional legal services."
  },
  {
    "question": "Who is responsible if an AI legal answer is wrong?",
    "answer": "Generally you are, which is why AI answers should be verified. An advocate owes professional duties to a client; an AI tool does not."
  },
  {
    "question": "What is the closest thing to an AI lawyer I can use?",
    "answer": "A Pakistan-grounded AI legal assistant that cites statutes and works in Urdu, used alongside an advocate for anything consequential. To compare specific apps, see our best AI legal apps guide."
  },
  {
    "question": "Is Wakeel.org free to use?",
    "answer": "Wakeel.org has a free plan, alongside paid Student, Professional and Organization tiers, and is available on Android, iOS and web."
  }
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Is There an AI Lawyer in Pakistan? What 'AI Lawyer' Really Means (2026)",
    description:
      "What people actually mean by \"AI lawyer,\" the criteria that separate a genuinely useful Pakistan-specific legal AI assistant from a generic chatbot, and how to evaluate your options.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-08-26",
    dateModified: "2026-08-26",
    mainEntityOfPage: `${site.url}/journal/article/best-ai-lawyer-pakistan`,
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
        name: "Is There an AI Lawyer in Pakistan? What 'AI Lawyer' Really Means (2026)",
        item: `${site.url}/journal/article/best-ai-lawyer-pakistan`,
      },
    ],
  },
];

const keywords = [
  "ai lawyer pakistan",
  "is there an ai lawyer in pakistan",
  "can ai be a lawyer pakistan",
  "ai lawyer urdu",
  "what can ai lawyer do",
  "online ai lawyer pakistan"
].join(", ");

export default function BestAiLawyerPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Is There an AI Lawyer in Pakistan? What 'AI Lawyer' Really Means (2026)"
        description="Searching for an 'AI lawyer' in Pakistan? No AI can practise law. Here's what an AI legal assistant can and can't legally do for you, task by task, and how it fits alongside an advocate."
        path="/journal/article/best-ai-lawyer-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>AI & the Law · Published August 26, 2026</p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Is There an AI Lawyer in Pakistan?
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No AI tool is actually a lawyer — here's what "AI lawyer" really means, what to look
            for, and how the Pakistan-specific options compare.
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
                No. There is no AI lawyer in Pakistan. Only advocates enrolled with a <strong>Bar
                Council</strong> can practise law, sign filings or appear in court. What exists are{" "}
                <strong>AI legal assistants</strong>, which can explain Pakistani law, read documents and
                help you prepare, but cannot represent you or take responsibility for advice. Use one to
                understand and prepare, and use an advocate to act.
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

      {/* Criteria table */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className={sectionHeading}>What an 'AI lawyer' can and can't do for you</h2>
          </div>
          <div className="overflow-x-auto rounded-lg border-2 border-foreground/15 bg-card">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-foreground/15 bg-muted/60 text-left">
                  <th className="px-4 py-3 font-semibold">Task</th>
                  <th className="px-4 py-3 font-semibold">Can an AI assistant do it?</th>
                </tr>
              </thead>
              <tbody>
                {criteria.map((c, i) => (
                  <tr key={c.name} className={i % 2 === 0 ? "border-b border-foreground/10" : "border-b border-foreground/10 bg-muted/30"}>
                    <td className="px-4 py-3 font-semibold whitespace-nowrap align-top">{c.name}</td>
                    <td className="px-4 py-3 text-muted-foreground align-top">{c.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Reveal: honest positioning */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <h2 className={sectionHeading}>Where Wakeel.org fits — and where Pakistan's other AI legal tools fit</h2>
          <p className="text-muted-foreground leading-relaxed">
            Pakistan's legal-tech space now includes several Pakistan-specific options worth
            knowing about: <strong>PakistanLawBot</strong> and <strong>QanoonAI</strong> lean
            toward Q&A and case-brief generation; <strong>DigiLawyer</strong> and{" "}
            <strong>Draftify</strong> focus on AI drafting for lawyers rather than citizen-facing
            explanation; <strong>LawGPT.pk</strong> targets legal practice and research (worth
            distinguishing from unrelated global "LawGPT" projects); and{" "}
            <strong>YourMunshi</strong> combines AI with paperwork assistance. General-purpose AI
            like ChatGPT, Claude, and Gemini are capable but not grounded in Pakistani law
            specifically, which is exactly where hallucinated sections and wrong-jurisdiction
            answers tend to creep in.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Wakeel.org is built around the six criteria above specifically: Pakistani-law grounding,
            genuine English and Urdu support, analysis of documents up to 100+ pages, source-aware
            answers, and built-in reminders to verify with a licensed advocate — with a free plan
            plus Student, Professional, and Organization tiers on Android, iOS, and web. Whichever
            tool you choose, apply the same six-point checklist rather than taking any marketing
            claim, including ours, at face value.
          </p>
        </div>
      </section>

      {/* How Wakeel helps / can't do */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-6">
            <Card className={cardBase}>
              <CardHeader>
                <CheckCircle2 className="h-6 w-6 text-primary" />
                <CardTitle className="text-lg">What Wakeel.org can help with</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Explaining Pakistani law in English or Urdu, analyzing legal documents you
                  upload, and helping you prepare before you see a lawyer.
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
                  It cannot represent you, appear in court, or replace a licensed advocate's
                  professional judgment on your specific case.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Try Wakeel — free
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
            General educational information, not legal advice. See our{" "}
            <Link href="/disclaimer" className="text-primary hover:underline">full disclaimer</Link>.
          </p>
        </div>
      </section>

      {/* Related reading */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`${sectionHeading} text-center mb-8`}>Related guides</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/journal/article/best-ai-legal-apps-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Best AI Legal Apps in Pakistan (2026)</p>
              <p className="text-xs text-muted-foreground mt-1">Named apps compared side by side</p>
            </Link>
            <Link href="/journal/article/best-ai-legal-assistant-pakistan-complete-guide" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to Choose an AI Legal Assistant</p>
              <p className="text-xs text-muted-foreground mt-1">A test-it-yourself evaluation checklist</p>
            </Link>
            <Link href="/journal/article/ai-vs-lawyer-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">AI vs Hiring a Lawyer: What Each Can and Can't Do</p>
              <p className="text-xs text-muted-foreground mt-1">A capability comparison</p>
            </Link>
            <Link href="/journal/article/best-ai-tools-for-lawyers-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">AI Tools for Lawyers in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">For advocates and law firms</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Want to see how a Pakistan-grounded AI assistant works?</h2>
          <p className="text-muted-foreground">
            Try Wakeel free — then verify anything important with a licensed advocate.
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
