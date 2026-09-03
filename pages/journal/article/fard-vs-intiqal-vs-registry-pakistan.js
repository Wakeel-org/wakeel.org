import Link from "next/link";
import {
  CheckCircle2,
  FileText,
  Landmark,
  Layers,
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
  { icon: FileText, title: "Registry — proves the sale happened", detail: "The registry (registered sale deed) is the document that legally records a sale — buyer, seller, property details, and the price — signed and stamped by the Sub-Registrar. It proves a transaction took place." },
  { icon: Layers, title: "Intiqal — updates who the government thinks owns it", detail: "Intiqal (also called mutation, or fard badar) is the separate step of updating the government's own land revenue record to reflect the new owner. A registry alone doesn't do this automatically — you have to apply for intiqal after the sale." },
  { icon: Landmark, title: "Fard — the government's answer to 'who owns this today?'", detail: "The fard (also called Fard Malkiat, Record of Rights, or Jamabandi) is simply an extract from the government's land record showing who currently owns the property, according to that record. It's only updated once intiqal has been completed." },
  { icon: AlertTriangle, title: "You genuinely need all three, not just one", detail: "Having a registry without completing intiqal means you own the property legally through the sale, but the government's own records still show the old owner's name — which is exactly the gap fraudulent sellers exploit." },
];

const faqs = [
  {
    question: "What is the difference between fard and registry?",
    answer:
      "A registry is the registered document that proves a sale took place between buyer and seller. A fard is a government record extract showing who currently owns the property according to official land records — it's only updated after intiqal (mutation) is completed following the sale.",
  },
  {
    question: "Do I need intiqal if I already have a registry?",
    answer:
      "Yes. A registry proves the sale happened, but it doesn't automatically update the government's ownership record. Without completing intiqal, your name doesn't appear in official land records even though you legally own the property — which can create real problems later.",
  },
  {
    question: "Which document proves I actually own a property in Pakistan?",
    answer:
      "In practice, courts and buyers look at all three together: the registry (proof of the transaction), the intiqal record (proof the ownership change was officially recorded), and a current fard (proof of who the government's record shows as the owner today).",
  },
  {
    question: "Can someone sell property they don't legally own using an old fard?",
    answer:
      "Yes, and this is a documented type of property fraud in Pakistan — a dishonest seller can obtain a fard that still shows their name (because a previous sale's intiqal was never completed) and sell the same property again to someone else. This is exactly why verifying a current fard, not an old copy, matters before buying.",
  },
  {
    question: "Can Wakeel.org explain my specific fard or registry document?",
    answer:
      "Wakeel.org can explain what these documents generally mean and what to check for. It cannot verify a specific property's ownership record for you or confirm a document's authenticity — that requires checking directly with the relevant land revenue office (Patwar Khana) or a lawyer.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Fard vs Intiqal vs Registry: The Difference Explained",
    description:
      "A plain-language explanation of fard, intiqal, and registry in Pakistan — three different property documents that prove three different things, and why you need all of them.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-09-03",
    dateModified: "2026-09-03",
    mainEntityOfPage: `${site.url}/journal/article/fard-vs-intiqal-vs-registry-pakistan`,
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
        name: "Fard vs Intiqal vs Registry: The Difference Explained",
        item: `${site.url}/journal/article/fard-vs-intiqal-vs-registry-pakistan`,
      },
    ],
  },
];

const keywords = [
  "fard vs intiqal vs registry",
  "difference between fard and registry pakistan",
  "intiqal mutation pakistan explained",
  "fard malkiat jamabandi pakistan",
  "property documents pakistan explained",
  "what is intiqal pakistan",
].join(", ");

export default function FardVsIntiqalVsRegistryPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Fard vs Intiqal vs Registry: The Difference Explained"
        description="A plain-language explanation of fard, intiqal, and registry in Pakistan — three different property documents that prove three different things, and why you need all of them."
        path="/journal/article/fard-vs-intiqal-vs-registry-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>Legal Help · Published September 3, 2026</p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Fard vs Intiqal vs Registry: Difference Explained
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three property words Pakistanis hear constantly, and confuse constantly. Here's what
            each one actually proves.
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
                Think of it in three simple steps. The <strong>registry</strong> proves a sale
                happened. <strong>Intiqal</strong> (mutation) is the process of telling the
                government to update its own record to reflect that sale. The{" "}
                <strong>fard</strong> is simply the government's record — proof of who it
                currently believes owns the property. A registry without a completed intiqal
                means your name still isn't on the government's fard, even though you legally
                bought the property. All three matter, together.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educate: framework */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>The three documents, one at a time</h2>
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

      {/* Reveal: real-world example */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <h2 className={sectionHeading}>A real example of how the gap between these gets exploited</h2>
          <p className="text-muted-foreground leading-relaxed">
            Here's a scenario documented in Pakistani property-law guidance: a person, "Mr. A,"
            sells land to "Mr. B" through a proper registry. But Mr. B never completes intiqal —
            so the patwari's record (the fard) still shows Mr. A as the owner. Later, Mr. A —
            dishonestly — obtains a fresh fard using that outdated record, which still shows his
            name, and sells the same land again, this time to "Mr. C," through another registry.
            Legally, courts often side with whoever holds the completed intiqal and possession,
            not simply whoever has the most recent registry — which is exactly why skipping the
            intiqal step is such a costly mistake.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The practical lesson: if you've bought property, completing intiqal isn't optional
            paperwork you can leave for later — it's the step that actually protects you from this
            exact kind of fraud. And if you're buying, always request a <strong>fresh</strong> fard
            from the Patwar Khana, not an old copy the seller hands you.
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
                  Explaining what each of these documents means and why the difference matters, in
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
                  It cannot verify a specific fard or property record for you — that requires
                  checking directly with the Patwar Khana or a lawyer.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel about property documents — free
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

      {/* Related reading */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`${sectionHeading} text-center mb-8`}>Related reading</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/journal/article/how-to-verify-property-before-buying-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to Verify Property Before Buying in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/property-transfer-mutation-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Property Transfer and Mutation Process in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/property-ownership-transfer-laws-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Property Ownership Transfer Laws in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/illegal-property-occupation-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Illegal Property Occupation in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Confused about your property documents?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel to explain them in plain terms — then verify with the Patwar Khana or a
            licensed advocate.
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
