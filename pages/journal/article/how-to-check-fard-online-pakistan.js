import Link from "next/link";
import {
  CheckCircle2,
  Landmark,
  Smartphone,
  FileSearch,
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
  { icon: Landmark, title: "Punjab has the most complete online system", detail: "The Punjab Land Records Authority (PLRA) runs a digital portal that lets you search ownership, download a Fard, and track mutations online, replacing much of the manual Patwar Khana visit for basic checks." },
  { icon: Smartphone, title: "What you actually need to search", detail: "You'll generally select your district, tehsil, and mouza (village/revenue estate), then search by Khewat or Khasra number, or by owner name, to pull up the current record." },
  { icon: FileSearch, title: "A free basic search vs. a certified copy", detail: "Basic ownership verification through the portal is typically free, but if you need a certified fard extract for a legal transaction, that usually involves a nominal fee and, in some cases, a visit to confirm identity." },
  { icon: AlertTriangle, title: "Other provinces are still catching up", detail: "Sindh, Khyber Pakhtunkhwa, and Balochistan have their own land record digitization efforts, but with varying levels of completeness — for property outside Punjab, always confirm with the local revenue office (Patwar Khana) whether an online fard check is actually available for that district yet." },
];

const faqs = [
  {
    question: "How do I check a fard online in Pakistan?",
    answer:
      "In Punjab, use the official PLRA portal, select your district, tehsil, and mouza, then search by Khewat/Khasra number or owner name to view or download the fard. Other provinces have their own, less uniformly digitized, land record systems — check with the local Patwar Khana if the online option isn't clear for your area.",
  },
  {
    question: "Is checking a fard online free in Pakistan?",
    answer:
      "Basic ownership verification searches are typically free through the official portal. A certified copy of the fard, needed for most legal transactions, usually comes with a small fee.",
  },
  {
    question: "Can I rely on an online fard for a property purchase?",
    answer:
      "An online fard is a good first check, but for an actual purchase, get a fresh, certified fard close to the transaction date, and have a lawyer confirm there's no pending litigation or encumbrance noted against the property — an online search alone doesn't replace full due diligence.",
  },
  {
    question: "What information do I need to search for a fard?",
    answer:
      "Generally the property's location (district, tehsil, mouza) and either the Khewat/Khasra number or the registered owner's name — having the exact revenue details from an existing document makes the search much faster.",
  },
  {
    question: "Can Wakeel.org check a specific fard for me?",
    answer:
      "Wakeel.org can explain how the online fard-checking process generally works and what to look for. It cannot access land record databases or verify a specific property on your behalf — that requires the official portal, the Patwar Khana, or a lawyer.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Check Fard Online in Pakistan",
    description:
      "How to search and download a fard (land record extract) online in Pakistan — the PLRA portal for Punjab, what information you need, and its limits.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-06-26",
    dateModified: "2026-06-26",
    mainEntityOfPage: `${site.url}/journal/article/how-to-check-fard-online-pakistan`,
    citation: [
      { "@type": "CreativeWork", name: "How to Check Land Record Online in Punjab — Daily Capital", url: "https://dailycapital.pk/land-record-online-punjab/" },
      { "@type": "CreativeWork", name: "What Is Fard & How to Get It Online via PLRA Step-by-Step", url: "https://abs-developers.com/blogs/news/what-is-fard-plra-online-guide" },
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
        name: "How to Check Fard Online in Pakistan",
        item: `${site.url}/journal/article/how-to-check-fard-online-pakistan`,
      },
    ],
  },
];

const keywords = [
  "check fard online pakistan",
  "plra portal fard",
  "punjab land records authority online",
  "khewat khasra number search online",
  "fard verification online punjab",
  "land record check online pakistan",
].join(", ");

export default function HowToCheckFardOnlinePakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="How to Check Fard Online in Pakistan"
        description="How to search and download a fard (land record extract) online in Pakistan — the PLRA portal for Punjab, what information you need, and its limits."
        path="/journal/article/how-to-check-fard-online-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>Legal Help · Published June 26, 2026</p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            How to Check Fard Online in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            You no longer always need a Patwar Khana visit for a basic ownership check — here's
            how the digital system actually works.
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
                In Punjab, visit the official{" "}
                <a href="https://www.punjab-zameen.gov.pk/" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
                  Punjab Land Records Authority (PLRA) portal
                </a>
                , select your <strong>district, tehsil, and mouza</strong>, then search by{" "}
                <strong>Khewat/Khasra number</strong> or owner name to view or download the fard.
                Basic searches are generally free; a certified extract for a legal transaction
                usually costs a small fee. Other provinces have their own systems with varying
                levels of digitization — confirm with the local Patwar Khana if you're unsure.
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
          <h2 className={sectionHeading}>An online check is a starting point, not the final word</h2>
          <p className="text-muted-foreground leading-relaxed">
            Practical guidance on using the PLRA system, including a step-by-step walkthrough from{" "}
            <a href="https://abs-developers.com/blogs/news/what-is-fard-plra-online-guide" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
              ABS Developers
            </a>
            , is genuinely useful for a fast first look — confirming a name matches, or that a
            property exists where you think it does. But an online fard reflects the record as of
            whenever it was last updated in the system, and a pending mutation, a dispute filed
            just before your search, or a district with incomplete digitization can all mean the
            online copy doesn't tell the whole story.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            For anything beyond casual curiosity — especially before you pay money for a property —
            treat the online fard as step one, and get a fresh, certified copy plus a lawyer's
            check for pending litigation before you commit to anything.
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
                  Explaining how the online fard-checking process generally works, in plain
                  English or Urdu.
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
                  It cannot access land record databases or check a specific property for you —
                  that requires the official portal, the Patwar Khana, or a lawyer.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel about checking a fard — free
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
          <h2 className="text-lg font-semibold text-foreground mb-4">Sources — check these directly to verify</h2>
          <ul className="space-y-2">
            {[
              { label: "How to Check Land Record Online in Punjab — Daily Capital", href: "https://dailycapital.pk/land-record-online-punjab/" },
              { label: "What Is Fard & How to Get It Online via PLRA Step-by-Step — ABS Developers", href: "https://abs-developers.com/blogs/news/what-is-fard-plra-online-guide" },
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
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`${sectionHeading} text-center mb-8`}>Related reading</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/journal/article/fard-vs-intiqal-vs-registry-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Fard vs Intiqal vs Registry: The Difference Explained</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/how-to-verify-property-before-buying-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to Verify Property Before Buying in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/property-transfer-mutation-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Property Transfer and Mutation Process in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/property-power-of-attorney-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Property Power of Attorney in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Need to verify a property record?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel how the process works — then confirm with the official portal or a
            licensed advocate before you rely on it.
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
