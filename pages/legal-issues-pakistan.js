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
} from "lucide-react";
import Layout from "../src/components/Layout";
import MarketingSEO from "../src/components/MarketingSEO";
import { Button } from "../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../src/components/ui/card";
import { site, guides } from "../src/data/marketing";
import { cardBase, headingGradient, sectionHeading } from "../src/data/theme";

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
    url: `${site.url}/legal-issues-pakistan`,
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
        name: "Legal Issues",
        item: `${site.url}/legal-issues-pakistan`,
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
        path="/legal-issues-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
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
                        href={`/${guide.slug}`}
                        className={`group ${cardBase} hover:shadow-md hover:border-primary/50 transition-all`}
                      >
                        <CardContent className="p-4 sm:p-5">
                          <div className="flex items-start justify-between gap-3">
                            <div className="space-y-2 flex-1">
                              <h3 className="font-semibold text-sm sm:text-base leading-tight group-hover:text-primary transition-colors">
                                {guide.title}
                              </h3>
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
