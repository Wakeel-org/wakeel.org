import Link from "next/link";
import { ArrowRight, Ban, BookOpen, ExternalLink, HelpCircle, Info, Lightbulb } from "lucide-react";
import Layout from "./Layout";
import MarketingSEO from "./MarketingSEO";
import HeroSafetyNote from "./HeroSafetyNote";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { CategoryChip } from "./ui/chip";
import { guides, site, getGuidePath, getGuideBasePath, getGuideRegion } from "../data/marketing";
import { cardBase, eyebrow, headingGradient, heroHeading, iconTile, sectionHeading } from "../data/theme";
import { getGuideCategory } from "../data/designSystem";

const REGION_HUB_LABELS = {
  pakistan: "Pakistan Legal Issues",
  gcc: "GCC Legal Issues",
  global: "Global Legal Issues",
};

// Eyebrow label and keyword-region term per guide region. Previously the
// hero eyebrow and every generated keyword hardcoded "Pakistan legal guide" /
// "Pakistan" regardless of the guide's actual region, so GCC and global
// guide pages (~70 of them, served via the [slug] routes) advertised
// themselves as Pakistan content. Fixed to derive from the real region.
const REGION_EYEBROW_LABELS = {
  pakistan: "Pakistan legal guide",
  gcc: "GCC legal guide",
  global: "Global legal guide",
};
const REGION_KEYWORD_TERMS = {
  pakistan: "Pakistan",
  gcc: "GCC",
  global: "international",
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
    "/journal/article/family-law-rights-pakistan": "Common Family Law Rights in Pakistan",
  };

  return labels[href] || href.replace("/", "").replaceAll("-", " ");
};

const makeKeywords = (guide) => {
  const region = getGuideRegion(guide.slug);
  const regionTerm = REGION_KEYWORD_TERMS[region] || REGION_KEYWORD_TERMS.pakistan;
  const baseKeywords = [
    guide.title,
    `${guide.title} ${regionTerm}`,
    `${regionTerm} ${guide.title.toLowerCase()}`,
    region === "pakistan" ? "Pakistani law" : `${regionTerm} law`,
    `legal help ${regionTerm}`,
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
      // These category keywords are written with a literal "Pakistan" —
      // swap it for the guide's actual region term rather than mislabeling
      // GCC/global guides as Pakistan content.
      const regionWords = region === "pakistan" ? words : words.map((w) => w.replace(/Pakistan/g, regionTerm));
      allKeywords.push(...regionWords);
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
    question: `Should I verify ${guide.title.toLowerCase()} information before acting on it?`,
    answer: `Yes. ${guide.title} depends on your specific facts, current procedure, and the applicable law, which can vary by case and change over time. Before you act, cross-check anything important — especially ${
      guide.questions?.[0]
        ? `something like "${guide.questions[0]}"`
        : "the specifics of your situation"
    } — against a primary source, and confirm your next steps with a licensed advocate.`,
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

// GuidePage's own region vocabulary ("pakistan"/"gcc"/"global") maps onto
// MarketingSEO's country-code `region` prop ("pk"/"sa"/etc). "gcc" isn't a
// single country, so it uses "sa" as the representative code — the same
// convention the GCC hub page (pages/journal/legal-issues-gcc/index.js)
// already uses. "global" is passed through as-is; MarketingSEO has no entry
// for it, which correctly omits geo-specific meta tags for global content.
const SEO_REGION_CODES = { pakistan: "pk", gcc: "sa", global: "global" };

const GuidePage = ({ guide }) => {
  const path = getGuidePath(guide.slug);
  const faqs = guide.faqs?.length ? guide.faqs : makeFaqs(guide);
  const keywords = makeKeywords(guide);
  const region = getGuideRegion(guide.slug);

  return (
    <Layout>
      <MarketingSEO
        title={guide.title}
        description={guide.description}
        path={path}
        schema={makeSchemas(guide, path, faqs)}
        keywords={keywords}
        region={SEO_REGION_CODES[region] || "pk"}
        language="en"
      />

      <section className="bg-background">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-5 lg:gap-6">
            <Card className="border-2 border-foreground/15 shadow-none bg-card">
              <CardContent className="p-5 sm:p-8 lg:p-10 space-y-5">
                <div className="flex flex-wrap items-center gap-3">
                  <p className={eyebrow}>
                    {REGION_EYEBROW_LABELS[region] || REGION_EYEBROW_LABELS.pakistan}
                  </p>
                  <CategoryChip category={getGuideCategory(guide)} />
                </div>
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

      {guide.body?.length ? (
        <section className="bg-background py-16 sm:py-20 lg:py-24">
          <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            {guide.body.map((block) => (
              <div key={block.heading} className="space-y-3">
                <h2 className={sectionHeading}>{block.heading}</h2>
                {block.paragraphs.map((paragraph, idx) => (
                  <p key={idx} className="text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}

            {guide.sources?.length ? (
              <Card className={cardBase}>
                <CardHeader>
                  <div className={iconTile}>
                    <BookOpen className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-xl">Sources and further reading</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {guide.sources.map((source) => (
                      <li key={source.url}>
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          className="inline-flex items-start gap-2 text-sm text-primary hover:underline"
                        >
                          <ExternalLink className="h-4 w-4 mt-0.5 shrink-0" />
                          <span>{source.label}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ) : null}
          </div>
        </section>
      ) : null}

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
                  className="rounded-lg border-2 border-foreground/15 bg-muted/30 p-4 text-sm text-muted-foreground"
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
                  className="flex items-center justify-between rounded-md border-2 border-foreground/15 px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors"
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
                className="group rounded-lg border-2 border-foreground/15 bg-card p-5"
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
