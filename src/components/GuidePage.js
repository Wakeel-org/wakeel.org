import Link from "next/link";
import { ArrowRight, Ban, HelpCircle, Info, Lightbulb } from "lucide-react";
import Layout from "./Layout";
import MarketingSEO from "./MarketingSEO";
import HeroSafetyNote from "./HeroSafetyNote";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { guides, site, getGuidePath, getGuideBasePath, getGuideRegion } from "../data/marketing";
import { cardBase, headingGradient, heroHeading, iconTile, sectionHeading } from "../data/theme";

const REGION_HUB_LABELS = {
  pakistan: "Pakistan Legal Issues",
  gcc: "GCC Legal Issues",
  global: "Global Legal Issues",
};

const getRelatedTitle = (href) => {
  const guide = guides.find((item) => getGuidePath(item.slug) === href);
  if (guide) return guide.title;

  const labels = {
    "/citizens": "Wakeel for Citizens",
    "/law-students": "Wakeel for Law Students",
    "/lawyers": "Wakeel for Lawyers",
    "/law-firms": "Wakeel for Law Firms",
    "/legal-sources": "Legal Sources",
    "/disclaimer": "Legal Disclaimer",
  };

  return labels[href] || href.replace("/", "").replaceAll("-", " ");
};

const makeKeywords = (guide) => {
  const titleWords = guide.title.toLowerCase().split(" ");
  const baseKeywords = [
    guide.title,
    `${guide.title} Pakistan`,
    `Pakistan ${guide.title.toLowerCase()}`,
    "Pakistani law",
    "legal help Pakistan",
    "Wakeel",
  ];

  const categoryKeywords = {
    "fir": ["FIR Pakistan", "police complaint", "complaint registration"],
    "legal notice": ["legal notice Pakistan", "notice reply", "legal notice response"],
    "tenant": ["tenant rights Pakistan", "rent issues", "eviction", "landlord tenant"],
    "rent agreement": ["rent agreement Pakistan", "tenancy agreement", "landlord tenant"],
    "power of attorney": ["power of attorney Pakistan", "general power of attorney", "special power of attorney"],
    "custody": ["child custody Pakistan", "guardianship", "family court"],
    "wrongful termination": ["wrongful termination Pakistan", "labor law", "employee rights"],
    "overseas": ["overseas Pakistanis", "diaspora legal help", "Pakistan property abroad"],
    "online fraud": ["online fraud Pakistan", "cyber complaint", "scam Pakistan"],
    "property": ["property law Pakistan", "land disputes", "property documents"],
    "family law": ["family law Pakistan", "divorce Pakistan", "marriage law"],
    "employment": ["employment law Pakistan", "labor law", "workplace rights"],
    "consumer": ["consumer rights Pakistan", "consumer protection", "product complaint"],
    "loan": ["loan agreement Pakistan", "debt recovery", "credit"],
    "harassment": ["harassment Pakistan", "violence", "protective order"],
    "business": ["business law Pakistan", "commercial law", "contract"],
    "inheritance": ["inheritance law Pakistan", "will", "succession"],
    "divorce": ["divorce Pakistan", "separation", "custody", "maintenance"],
    "dispute": ["property dispute", "court procedure", "litigation"],
    "traffic": ["traffic law Pakistan", "motor vehicle", "accident"],
    "cybercrime": ["cybercrime Pakistan", "online safety", "hacking"],
    "court": ["court procedure Pakistan", "civil court", "criminal court"],
    "education": ["education rights Pakistan", "student rights"],
    "tax": ["tax law Pakistan", "tax assessment"],
  };

  let allKeywords = [...baseKeywords];
  Object.entries(categoryKeywords).forEach(([keyword, words]) => {
    if (guide.title.toLowerCase().includes(keyword)) {
      allKeywords.push(...words);
    }
  });

  return allKeywords.slice(0, 15).join(", ");
};

const makeFaqs = (guide) => [
  {
    question: `How can Wakeel.org help with ${guide.title}?`,
    answer: guide.help,
  },
  {
    question: "Can Wakeel.org replace a lawyer?",
    answer: guide.cannot,
  },
  {
    question: "Should I verify the information before acting?",
    answer:
      "Yes. Legal outcomes depend on facts, jurisdiction, current law, procedure, and evidence. Verify sources and consult a licensed advocate before taking action.",
  },
];

const makeSchemas = (guide, path, faqs) => {
  const region = getGuideRegion(guide.slug);
  const basePath = getGuideBasePath(guide.slug);

  return [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: guide.title,
      description: guide.description,
      url: `${site.url}${path}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: site.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Journal",
          item: `${site.url}/journal`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: REGION_HUB_LABELS[region],
          item: `${site.url}${basePath}`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: guide.title,
          item: `${site.url}${path}`,
        },
      ],
    },
  ];
};

const GuidePage = ({ guide }) => {
  const path = getGuidePath(guide.slug);
  const faqs = makeFaqs(guide);
  const keywords = makeKeywords(guide);

  return (
    <Layout>
      <MarketingSEO
        title={guide.title}
        description={guide.description}
        path={path}
        schema={makeSchemas(guide, path, faqs)}
        keywords={keywords}
        region="pk"
        language="en"
      />

      <section className="bg-background">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-5 lg:gap-6">
            <Card className="border-muted/60 shadow-xl bg-gradient-to-br from-card via-card to-muted/40">
              <CardContent className="p-5 sm:p-8 lg:p-10 space-y-5">
                <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                  Pakistan legal guide
                </p>
                <h1 className={`${heroHeading} ${headingGradient}`}>
                  {guide.title}
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
                  {guide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild size="lg" className="cta-try-free">
                    <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                      Try Wakeel Free
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/legal-sources">View Legal Sources</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <HeroSafetyNote />
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-16 sm:py-20 lg:py-24">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-4">
            <Card className={cardBase}>
              <CardHeader>
                <div className={iconTile}>
                  <Info className="h-7 w-7" />
                </div>
                <CardTitle className="text-xl">The problem</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {guide.problem}
                </p>
              </CardContent>
            </Card>
            <Card className={cardBase}>
              <CardHeader>
                <div className={iconTile}>
                  <Lightbulb className="h-7 w-7" />
                </div>
                <CardTitle className="text-xl">How Wakeel can help</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {guide.help}
                </p>
              </CardContent>
            </Card>
            <Card className={cardBase}>
              <CardHeader>
                <div className={iconTile}>
                  <Ban className="h-7 w-7" />
                </div>
                <CardTitle className="text-xl">What Wakeel cannot do</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {guide.cannot}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1fr_0.8fr] gap-4">
          <Card className={cardBase}>
            <CardHeader>
              <CardTitle>Example questions to ask Wakeel</CardTitle>
            </CardHeader>
            <CardContent className="grid sm:grid-cols-2 gap-3">
              {guide.questions.map((question) => (
                <div
                  key={question}
                  className="rounded-lg border border-border bg-muted/30 p-4 text-sm text-muted-foreground"
                >
                  "{question}"
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className={cardBase}>
            <CardHeader>
              <CardTitle>Related pages</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {guide.related.map((href) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center justify-between rounded-md border border-border px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                >
                  {getRelatedTitle(href)}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-muted/40 py-16 sm:py-20 lg:py-24">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className={sectionHeading}>
              Frequently asked questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-lg border border-border bg-card p-5"
              >
                <summary className="flex cursor-pointer items-center gap-3 text-base font-semibold">
                  <HelpCircle className="h-5 w-5 text-primary" />
                  {faq.question}
                </summary>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GuidePage;
