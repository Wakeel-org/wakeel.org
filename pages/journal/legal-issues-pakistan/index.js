import Link from "next/link";
import {
  ArrowRight,
  FileText,
  Home,
  Briefcase,
  Heart,
  Scale,
  Shield,
  Smartphone,
  Gavel,
  Landmark,
  AlertCircle,
  DollarSign,
  Building,
  Zap,
  BookOpen,
  ExternalLink,
} from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { CategoryChip } from "../../../src/components/ui/chip";
import { site, guides, getGuidePath } from "../../../src/data/marketing";
import { getGuideCategory } from "../../../src/data/designSystem";
import { cardBase, eyebrow, headingGradient, sectionHeading } from "../../../src/data/theme";

const legalCategories = [
  {
    title: "Rights & Safety",
    icon: Shield,
    description: "Know your fundamental rights and get help if they're violated",
    guides: [
      "know-your-rights-pakistan",
      "harassment-violence-pakistan",
      "online-fraud-complaint-pakistan",
      "cybercrime-online-safety-pakistan",
    ],
  },
  {
    title: "Property & Housing",
    icon: Home,
    description: "Understand property law, rent issues, and boundary disputes",
    guides: [
      "tenant-rights-pakistan",
      "property-document-check-pakistan",
      "property-disputes-pakistan",
      "registration-documentation-pakistan",
    ],
  },
  {
    title: "Family Matters",
    icon: Heart,
    description: "Guidance on marriage, divorce, custody, and maintenance",
    guides: [
      "family-law-guidance-pakistan",
      "divorce-separation-pakistan",
      "inheritance-succession-pakistan",
    ],
  },
  {
    title: "Work & Business",
    icon: Briefcase,
    description: "Employment rights and business law guidance",
    guides: [
      "employment-law-pakistan",
      "business-commercial-law-pakistan",
      "tax-law-pakistan",
    ],
  },
  {
    title: "Legal Documents & Courts",
    icon: FileText,
    description: "Understand notices, documents, and court procedures",
    guides: [
      "legal-notice-pakistan",
      "legal-document-review-ai-pakistan",
      "court-procedures-pakistan",
    ],
  },
  {
    title: "Consumer & Financial",
    icon: DollarSign,
    description: "Consumer rights, loans, debt, and insurance guidance",
    guides: [
      "consumer-rights-pakistan",
      "loan-debt-pakistan",
      "insurance-claims-pakistan",
    ],
  },
  {
    title: "Criminal & Public Safety",
    icon: AlertCircle,
    description: "FIR registration, crime procedures, and police guidance",
    guides: [
      "fir-refused-pakistan",
      "cybercrime-online-safety-pakistan",
    ],
  },
  {
    title: "Vehicle & Traffic",
    icon: Zap,
    description: "Traffic laws, accidents, and motor vehicle issues",
    guides: [
      "vehicle-traffic-law-pakistan",
    ],
  },
  {
    title: "Education & Rights",
    icon: Building,
    description: "Student rights and educational law guidance",
    guides: [
      "education-rights-pakistan",
    ],
  },
  {
    title: "Law Study & Research",
    icon: Gavel,
    description: "Study materials for law students and legal researchers",
    guides: [
      "ppc-sections-explained",
      "crpc-sections-explained",
      "constitution-of-pakistan-notes",
      "lgat-preparation-pakistan",
      "case-law-research-pakistan",
    ],
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Pakistani Legal Issues & Guidance",
    description:
      "Comprehensive guides for Pakistani legal issues covering property, family law, employment, consumer rights, and more.",
    url: `${site.url}/journal/legal-issues-pakistan`,
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
        name: "Legal Issues",
        item: `${site.url}/journal/legal-issues-pakistan`,
      },
    ],
  },
];

export default function LegalIssuesPage() {
  const keywords = [
    "Pakistani law",
    "legal help Pakistan",
    "legal issues Pakistan",
    "property law Pakistan",
    "family law Pakistan",
    "employment law Pakistan",
    "consumer rights Pakistan",
    "tenant rights Pakistan",
    "legal guidance",
    "Wakeel legal guides",
    "FIR Pakistan",
    "legal notice Pakistan",
  ].join(", ");

  return (
    <Layout>
      <MarketingSEO
        title="Pakistani Legal Issues & Guidance | Wakeel"
        description="Comprehensive guides for Pakistani legal issues including property, family law, employment, consumer rights, court procedures, and more. Get clear legal information for all common legal situations."
        path="/journal/legal-issues-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero Section */}
      <section className="bg-background border-b-2 border-foreground/10 py-16 sm:py-20 lg:py-24">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <p className={eyebrow}>
              Legal Guidance
            </p>
            <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
              Pakistani Legal Issues & Guidance
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore comprehensive guides on Pakistani law covering property, family matters,
              employment, consumer rights, criminal procedures, and much more. Find answers to
              your legal questions in simple English and Urdu.
            </p>
            <div className="pt-4">
              <Button asChild size="lg" className="cta-try-free">
                <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                  Try Wakeel Free
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Pakistani law is layered, not singular */}
      <section className="bg-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="space-y-3">
            <h2 className={sectionHeading}>Why Pakistani law is layered, not singular</h2>
            <p className="text-muted-foreground leading-relaxed">
              Pakistan's legal system runs on colonial-era procedural codes that are still, genuinely, the
              law today — the Pakistan Penal Code, 1860 (PPC), the Code of Criminal Procedure, 1898 (CrPC),
              and the Code of Civil Procedure, 1908 (CPC) remain the backbone of criminal and civil practice,
              alongside the Constitution of Pakistan, 1973, which is itself a much newer, home-grown document
              built around fundamental rights (Chapter II, Articles 8–28) and the High Courts' writ
              jurisdiction under Article 199. On top of this base, Islamic law applies directly in specific
              areas — most clearly family law and inheritance, governed for Muslims through the West Pakistan
              Muslim Personal Law (Shariat) Application Act, 1962 — while everyday criminal and civil practice
              runs on the older common-law-derived codes.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This layering is also actively changing. The 18th Amendment (2010) devolved subjects like
              consumer protection, education, and labor regulation to the provinces, meaning the applicable
              statute for a rent dispute or a workplace complaint now depends on which province you're in, not
              a single federal law. And criminal procedure itself keeps evolving — the 2002 introduction of
              Sections 22-A/22-B CrPC gave citizens a direct remedy against police inaction, and 2025
              amendments handed the National Cyber Crime Investigation Agency exclusive authority over
              cybercrime cases under PECA 2016. None of this is static, which is exactly why each guide below
              names its specific statute and year rather than describing "Pakistani law" as one fixed thing.
            </p>
          </div>

          <Card className={cardBase}>
            <CardHeader>
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                <CardTitle className="text-xl">Sources and further reading</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {[
                  { label: "The Constitution of Pakistan, 1973 — Article 199 writ jurisdiction overview", url: "https://en.wikipedia.org/wiki/Article_199_of_the_Constitution_of_Pakistan" },
                  { label: "Section 22-A & 22-B CrPC — Punjab Advocate General's Office explainer", url: "https://advocategeneral.punjab.gov.pk/22A_22B" },
                ].map((source) => (
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
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {legalCategories.map((category) => {
              const Icon = category.icon;
              const categoryGuides = guides.filter((g) =>
                category.guides.includes(g.slug)
              );

              return (
                <div key={category.title}>
                  <div className="flex items-center gap-3 mb-6">
                    <Icon className="h-7 w-7 text-primary" />
                    <div>
                      <h2 className={sectionHeading}>{category.title}</h2>
                      <p className="text-sm text-muted-foreground">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {categoryGuides.map((guide) => (
                      <Link
                        key={guide.slug}
                        href={getGuidePath(guide.slug)}
                        className={`group ${cardBase} hover:border-primary/60 transition-all`}
                      >
                        <CardContent className="p-4 sm:p-5">
                          <div className="flex items-start justify-between gap-3">
                            <div className="space-y-2 flex-1">
                              <h3 className="font-semibold text-sm sm:text-base leading-tight group-hover:text-primary transition-colors">
                                {guide.title}
                              </h3>
                              <CategoryChip category={getGuideCategory(guide)} showIcon={false} className="px-2 py-0.5 text-[10px]" />
                              <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
                                {guide.description}
                              </p>
                            </div>
                            <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-1" />
                          </div>
                        </CardContent>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-muted/40 py-16 sm:py-20 lg:py-24">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-primary">27+</p>
              <p className="text-sm text-muted-foreground mt-2">
                Comprehensive Legal Guides
              </p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-primary">10+</p>
              <p className="text-sm text-muted-foreground mt-2">
                Legal Categories Covered
              </p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-primary">100%</p>
              <p className="text-sm text-muted-foreground mt-2">
                Pakistan-Focused Content
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className={cardBase}>
            <CardContent className="p-8 sm:p-12 space-y-6">
              <div>
                <h2 className={sectionHeading}>Ready to understand your legal situation?</h2>
                <p className="text-muted-foreground mt-2">
                  Upload a document, ask a legal question in English or Urdu, and get
                  clear guidance from Wakeel.org.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild size="lg" className="cta-try-free">
                  <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                    Try Wakeel Free
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/legal-sources">Learn About Our Approach</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
