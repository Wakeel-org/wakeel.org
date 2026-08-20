import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Search,
  ShieldCheck,
  Scale,
  HelpCircle,
  AlertTriangle,
  FileText,
  MessageSquare,
} from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site } from "../../../src/data/marketing";
import { cardBase, headingGradient, sectionHeading } from "../../../src/data/theme";

const vettingCriteria = [
  {
    icon: ShieldCheck,
    title: "Verify bar council enrollment",
    detail:
      "Every practicing advocate in Pakistan is enrolled with a Provincial Bar Council (and, for Supreme Court practice, the Pakistan Bar Council). Ask directly for their bar council registration and, if in doubt, verify it — this is the single most basic check before trusting anyone with a property dispute.",
  },
  {
    icon: Scale,
    title: "Confirm specific property law experience",
    detail:
      "Property disputes span very different sub-areas — title disputes, possession suits, boundary disputes, fraud in registration, inheritance-related property conflicts. Ask for examples of matters similar to yours, not just general litigation experience.",
  },
  {
    icon: FileText,
    title: "Ask how they'll handle document verification",
    detail:
      "A property dispute lawyer worth hiring should want to see your fard/registry, sale deed, mutation records, and any prior court orders early, and should be able to explain what each shows and what's missing — vague reassurance without asking for documents is a red flag.",
  },
  {
    icon: MessageSquare,
    title: "Get a clear fee and timeline conversation upfront",
    detail:
      "Ask how fees are structured (flat fee, per-hearing, percentage of recovery where applicable) and get a realistic sense of how long a case like yours typically takes in the relevant court. A lawyer who promises a fast, guaranteed win is a bigger red flag than one who gives you a cautious, honest timeline.",
  },
  {
    icon: Search,
    title: "Cross-check reputation through more than one source",
    detail:
      "Ask the local bar association, other advocates, or people who've used the lawyer for a similar matter. A lawyer's online presence or claimed reviews are not a substitute for direct verification through people who've actually worked with them.",
  },
];

const redFlags = [
  "Guarantees a specific outcome or timeline before reviewing your documents.",
  "Avoids giving a clear, written fee structure or asks for large cash payments with no receipt.",
  "Can't or won't confirm their bar council enrollment when asked directly.",
  "Shows little interest in your actual property documents before quoting a fee.",
  "Pressures you to sign a retainer or power of attorney on the first meeting, before you've had time to think it over.",
];

const faqs = [
  {
    question: "How do I find a verified lawyer in Pakistan?",
    answer:
      "Ask directly for the lawyer's bar council enrollment (Provincial Bar Council, or Pakistan Bar Council for Supreme Court practice) and verify it if you have any doubt. Beyond that, cross-check their reputation through the local bar association or people who've actually used them for a similar matter — a polished website or claimed reviews aren't a substitute for that direct verification. Wakeel.org does not operate a lawyer directory or marketplace, so we can't refer you to a specific advocate, but the vetting steps above apply regardless of how you found them.",
  },
  {
    question: "What should I look for in a property dispute lawyer?",
    answer:
      "Specific experience with the type of property dispute you have (title, possession, boundary, fraud in registration, or inheritance-related), a genuine interest in reviewing your actual documents (fard, sale deed, mutation records) before quoting a fee, a clear and honest fee and timeline conversation, and verifiable bar council enrollment.",
  },
  {
    question: "How much does a property dispute lawyer cost in Pakistan?",
    answer:
      "Fees vary widely by city, the lawyer's experience, and the complexity and value of the dispute — there's no fixed national rate. Ask for a clear fee structure upfront (flat fee, per-hearing, or another arrangement) rather than a vague estimate, and be cautious of unusually low quotes for a complex case, which sometimes signal limited attention to your matter.",
  },
  {
    question: "What are red flags when hiring a property lawyer in Pakistan?",
    answer:
      "Guaranteed outcomes before reviewing your documents, no clear or written fee structure, reluctance to confirm bar council enrollment, little interest in your actual property records, and pressure to sign documents (especially a power of attorney) at the first meeting are all worth pausing over.",
  },
  {
    question: "Can Wakeel.org help me prepare before hiring a property lawyer?",
    answer:
      "Yes — Wakeel.org can summarize your property documents, explain terms like mutation, fard, or registry in plain English or Urdu, and help you build a clear timeline and question list before your first consultation. It does not operate a lawyer directory or referral service, cannot verify a specific lawyer's credentials for you, and cannot represent you or predict how your dispute will be resolved.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Finding a Property Dispute Lawyer in Pakistan",
    description:
      "How to vet and hire a property dispute lawyer in Pakistan — bar council verification, experience checks, fee conversations, and red flags to watch for.",
    author: { "@type": "Organization", name: "Wakeel.org" },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-08-02",
    dateModified: "2026-08-02",
    mainEntityOfPage: `${site.url}/journal/article/property-dispute-lawyer-pakistan`,
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
        name: "Finding a Property Dispute Lawyer in Pakistan",
        item: `${site.url}/journal/article/property-dispute-lawyer-pakistan`,
      },
    ],
  },
];

const keywords = [
  "find verified lawyer pakistan",
  "best advocate property dispute",
  "property lawyer pakistan",
  "how to hire a lawyer pakistan",
  "property dispute advocate pakistan",
  "bar council verification pakistan",
].join(", ");

export default function PropertyDisputeLawyerPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Finding a Property Dispute Lawyer in Pakistan"
        description="How to vet and hire a property dispute lawyer in Pakistan — bar council verification, experience checks, and red flags to walk away from."
        path="/journal/article/property-dispute-lawyer-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Legal Help · Published August 2, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Finding a Property Dispute Lawyer in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Property disputes in Pakistan can drag on for years when the wrong lawyer is handling
            them — and the "best" advocate for someone else's case isn't automatically the right
            one for yours. Here's how to actually vet one.
          </p>
        </div>
      </section>

      {/* Honest disclosure box */}
      <section className="bg-background pt-10">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className={`${cardBase} border-primary/30`}>
            <CardContent className="p-6 space-y-3">
              <p className="text-sm font-semibold text-primary">Straight answer, upfront</p>
              <p className="text-muted-foreground leading-relaxed">
                Wakeel.org does not run a lawyer directory or referral marketplace — we can't tell
                you "the best" property lawyer in your city, and you should be skeptical of any
                site that claims to rank lawyers without disclosing how. What we can do is walk
                you through exactly how to vet one yourself, and help you prepare your documents
                and questions before that first consultation.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Vetting criteria */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>How to actually vet a property lawyer</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {vettingCriteria.map((c) => {
              const Icon = c.icon;
              return (
                <Card key={c.title} className={cardBase}>
                  <CardHeader>
                    <Icon className="h-7 w-7 text-primary" />
                    <CardTitle className="text-lg">{c.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{c.detail}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Red flags */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className={sectionHeading}>Red flags worth walking away from</h2>
          </div>
          <Card className={cardBase}>
            <CardContent className="p-6">
              <ul className="space-y-3">
                {redFlags.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <AlertTriangle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{r}</span>
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
                  Summarizing your property documents, explaining terms like mutation, fard, or
                  registry in plain English or Urdu, and helping you build a clear timeline and
                  question list before you meet a lawyer.
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
                  It does not operate a lawyer directory, cannot verify a specific lawyer's
                  credentials for you, and cannot represent you or predict how your dispute will
                  be resolved.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Prepare your documents with Wakeel Free
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
            General educational information, not legal advice and not a lawyer referral service.
            Always independently verify any advocate's credentials before engaging them. See our{" "}
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
              href="/journal/article/property-transfer-mutation-pakistan"
              className={`group ${cardBase} block rounded-lg p-5`}
            >
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                Property Transfer and Mutation Process in Pakistan
              </p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link
              href="/journal/legal-issues-pakistan/property-disputes-pakistan"
              className={`group ${cardBase} block rounded-lg p-5`}
            >
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                Property Disputes in Pakistan
              </p>
              <p className="text-xs text-muted-foreground mt-1">Guide · Wakeel Journal</p>
            </Link>
            <Link
              href="/journal/legal-issues-pakistan/property-document-check-pakistan"
              className={`group ${cardBase} block rounded-lg p-5`}
            >
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                Property Document Check Support in Pakistan
              </p>
              <p className="text-xs text-muted-foreground mt-1">Guide · Wakeel Journal</p>
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
          <h2 className={sectionHeading}>Get your documents organized first</h2>
          <p className="text-muted-foreground">
            Walk into your first consultation with a clear summary of your property documents and
            a list of the right questions to ask.
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
