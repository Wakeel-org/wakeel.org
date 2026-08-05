import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Users,
  Heart,
  Shield,
  Building,
  DollarSign,
  FileText,
  Gavel,
  Globe,
  AlertCircle,
  BookOpen,
  ExternalLink,
} from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site, guides, getGuidePath } from "../../../src/data/marketing";
import { cardBase, headingGradient, sectionHeading } from "../../../src/data/theme";

const gccCategories = [
  {
    title: "Employment & Labour",
    icon: Briefcase,
    description: "Employment rights, labor law, kafala system, and worker protections",
    guides: [
      "labor-law-gcc",
      "workers-rights-gcc",
      "visa-residency-gcc",
      "contract-review-gcc",
    ],
  },
  {
    title: "Family & Personal",
    icon: Heart,
    description: "Family law, marriage, divorce, custody under Islamic/Sharia law",
    guides: [
      "family-law-gcc",
      "women-rights-gcc",
      "inheritance-gcc",
    ],
  },
  {
    title: "Business & Commerce",
    icon: Briefcase,
    description: "Business setup, commercial law, contracts, and regulations",
    guides: [
      "commercial-law-gcc",
      "business-setup-gcc",
      "real-estate-gcc",
      "taxation-gcc",
    ],
  },
  {
    title: "Consumer & Financial",
    icon: DollarSign,
    description: "Consumer rights, product protection, financial regulations",
    guides: [
      "consumer-rights-gcc",
      "taxation-gcc",
    ],
  },
  {
    title: "Legal Procedures",
    icon: FileText,
    description: "Criminal law, court procedures, legal documents, and rights",
    guides: [
      "criminal-law-gcc",
      "contract-review-gcc",
    ],
  },
  {
    title: "Expat & Residency",
    icon: Globe,
    description: "Visas, residency, immigration, and expat legal issues",
    guides: [
      "visa-residency-gcc",
      "expat-legal-resources-gcc",
      "embassy-help-gcc",
    ],
  },
  {
    title: "Country-Specific",
    icon: Shield,
    description: "Legal guidance for Saudi Arabia, UAE, Kuwait, Qatar, Bahrain, Oman",
    guides: [
      "saudi-arabia-legal-guide",
      "uae-legal-guide",
      "kuwait-legal-guide",
      "qatar-bahrain-oman-legal-guide",
    ],
  },
  {
    title: "General GCC Legal Help",
    icon: AlertCircle,
    description: "Overview of GCC legal systems and comprehensive legal guidance",
    guides: [
      "gcc-legal-help",
    ],
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "GCC Legal Issues & Guidance",
    description:
      "Comprehensive guides for GCC legal issues covering labor law, family law, business law, and more for Saudi Arabia, UAE, Kuwait, and Gulf countries.",
    url: `${site.url}/journal/legal-issues-gcc`,
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
        name: "GCC Legal Issues",
        item: `${site.url}/journal/legal-issues-gcc`,
      },
    ],
  },
];

export default function GCCLegalIssuesPage() {

  const keywords = [
    "GCC legal help",
    "Saudi Arabia legal guidance",
    "UAE legal help",
    "Kuwait legal guidance",
    "GCC labor law",
    "kafala system",
    "expat legal rights",
    "GCC family law",
    "Sharia law guidance",
    "GCC business law",
    "immigration GCC",
    "worker rights GCC",
    "contract review GCC",
  ].join(", ");

  return (
    <Layout>
      <MarketingSEO
        title="GCC Legal Issues & Guidance | Wakeel"
        description="Comprehensive guides for GCC legal issues including labor law, family law, business law, expat rights, and immigration for Saudi Arabia, UAE, Kuwait, Qatar, Bahrain, and Oman."
        path="/journal/legal-issues-gcc"
        schema={schema}
        keywords={keywords}
        region="sa"
        language="en"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Legal Guidance for GCC
            </p>
            <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
              GCC Legal Issues & Guidance
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive legal guides for living and working in Saudi Arabia, UAE, Kuwait, Qatar,
              Bahrain, and Oman. Understand labor law, family law, business regulations, expat rights,
              and more.
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

      {/* Why GCC law needs careful, country-specific navigation */}
      <section className="bg-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="space-y-3">
            <h2 className={sectionHeading}>Why GCC legal systems need careful, country-specific navigation</h2>
            <p className="text-muted-foreground leading-relaxed">
              Two structural features set the GCC apart from most legal systems covered on this journal, and
              both cut across every category below. First, Islamic law (Sharia) functions as an actual source
              of binding legal rules — not just a moral backdrop — most visibly in family and personal status
              law, though the degree of codification differs sharply by country and by year: Qatar codified
              its Family Law in 2006, while Saudi Arabia only codified its first Personal Status Law in 2022,
              having relied on uncodified Sharia principles and judicial discretion before that. Second, the
              kafala (sponsorship) system ties a foreign worker's legal right to live and work in most GCC
              countries to a specific employer — a genuinely different structure than residency systems where
              legal status is independent of any one job.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Neither feature is static. Qatar dismantled its exit-permit and No Objection Certificate
              requirements in 2020; the UAE introduced a federal corporate tax in 2023 and a separate civil
              personal-status framework for non-Muslim expats in 2022; and Saudi Arabia opened real estate
              ownership to non-Saudis in specially designated zones under a law taking effect in 2026. Because
              each of the six GCC countries — Saudi Arabia, UAE, Kuwait, Qatar, Bahrain, and Oman — legislates
              independently and reforms at its own pace, a rule that's accurate for one country is often wrong
              for its neighbor, even within the same guide category.
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
                  { label: "Saudi Personal Status Law, 2022 — Family Affairs Council overview", url: "https://fac.gov.sa/en/legislations-posts/personal-status-system/" },
                  { label: "Landmark labour reforms signal end of kafala system in Qatar — ILO", url: "https://www.ilo.org/resource/news/landmark-labour-reforms-signal-end-kafala-system-qatar" },
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
            {gccCategories.map((category) => {
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

      {/* GCC Countries Overview */}
      <section className="bg-muted/40 py-16 sm:py-20 lg:py-24">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={sectionHeading}>Country-Specific Legal Guides</h2>
            <p className="text-muted-foreground mt-4">
              Find legal guidance tailored to each GCC country
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Saudi Arabia",
                href: "/journal/legal-issues-gcc/saudi-arabia-legal-guide",
                description: "Islamic law system with specific rules for residents and workers",
              },
              {
                name: "UAE",
                href: "/journal/legal-issues-gcc/uae-legal-guide",
                description: "Islamic law combined with civil law, varies by emirate",
              },
              {
                name: "Kuwait",
                href: "/journal/legal-issues-gcc/kuwait-legal-guide",
                description: "Islamic and constitutional law framework",
              },
              {
                name: "Qatar, Bahrain & Oman",
                href: "/journal/legal-issues-gcc/qatar-bahrain-oman-legal-guide",
                description: "Unique legal systems for these three countries",
              },
              {
                name: "Expat Resources",
                href: "/journal/legal-issues-gcc/expat-legal-resources-gcc",
                description: "Legal help, support organizations, and embassy assistance",
              },
              {
                name: "General GCC Legal Help",
                href: "/journal/legal-issues-gcc/gcc-legal-help",
                description: "Overview of GCC legal systems and comprehensive guidance",
              },
            ].map((country) => (
              <Link
                key={country.href}
                href={country.href}
                className={`group ${cardBase} hover:shadow-md hover:border-primary/50 transition-all`}
              >
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {country.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {country.description}
                  </p>
                  <div className="flex items-center text-primary text-sm font-semibold">
                    Learn more <ArrowRight className="h-4 w-4 ml-2" />
                  </div>
                </CardContent>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-primary">20+</p>
              <p className="text-sm text-muted-foreground mt-2">
                GCC Legal Guides
              </p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-primary">6</p>
              <p className="text-sm text-muted-foreground mt-2">
                GCC Countries Covered
              </p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-primary">8</p>
              <p className="text-sm text-muted-foreground mt-2">
                Legal Categories
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/40 py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className={cardBase}>
            <CardContent className="p-8 sm:p-12 space-y-6">
              <div>
                <h2 className={sectionHeading}>Ready to understand GCC legal issues?</h2>
                <p className="text-muted-foreground mt-2">
                  Upload a document, ask a legal question in English or Arabic, and get
                  clear guidance from Wakeel.org for your GCC country.
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
