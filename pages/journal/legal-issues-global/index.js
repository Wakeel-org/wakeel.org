import Link from "next/link";
import {
  ArrowRight,
  Globe,
  Briefcase,
  Users,
  Building,
  Heart,
  FileText,
  MapPin,
  Gavel,
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

const globalCategories = [
  {
    title: "International Legal Systems",
    icon: Globe,
    description: "Compare and understand different legal systems worldwide",
    guides: [
      "legal-systems-comparison",
    ],
  },
  {
    title: "Common Law Countries",
    icon: Gavel,
    description: "UK, USA, Canada, Australia, India, Singapore, Hong Kong",
    guides: [
      "uk-legal-guide",
      "us-legal-guide",
      "canada-legal-guide",
      "australia-legal-guide",
      "india-legal-guide",
      "singapore-legal-guide",
      "hong-kong-legal-guide",
    ],
  },
  {
    title: "Civil Law Countries",
    icon: Building,
    description: "Germany, France, Netherlands, Scandinavia, Spain, Southern Europe",
    guides: [
      "germany-legal-guide",
      "france-legal-guide",
      "netherlands-scandinavia-legal-guide",
      "spain-southern-europe-legal-guide",
      "european-legal-guide",
    ],
  },
  {
    title: "Asia-Pacific Region",
    icon: MapPin,
    description: "Malaysia, Indonesia, Thailand, Southeast Asia",
    guides: [
      "malaysia-legal-guide",
      "indonesia-legal-guide",
      "thailand-southeast-asia-legal-guide",
    ],
  },
  {
    title: "Middle East & Africa",
    icon: MapPin,
    description: "Turkey, Egypt, South Africa, Nigeria, West Africa",
    guides: [
      "turkey-middle-east-legal-guide",
      "egypt-legal-guide",
      "south-africa-legal-guide",
      "nigeria-legal-guide",
    ],
  },
  {
    title: "Americas & Latin America",
    icon: MapPin,
    description: "Brazil, Mexico, and Latin American countries",
    guides: [
      "brazil-legal-guide",
      "mexico-latin-america-legal-guide",
    ],
  },
  {
    title: "International & Comparative",
    icon: Briefcase,
    description: "Cross-border business, international employment, expat guidance",
    guides: [
      "international-business-law",
      "international-employment-law",
      "expat-legal-guide-global",
    ],
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Global Legal Issues & Guidance",
    description:
      "Comprehensive guides for legal issues across 15+ countries and different legal systems worldwide.",
    url: `${site.url}/journal/legal-issues-global`,
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
        name: "Global Legal Issues",
        item: `${site.url}/journal/legal-issues-global`,
      },
    ],
  },
];

export default function GlobalLegalIssuesPage() {
  const keywords = [
    "international legal help",
    "global legal guidance",
    "expat legal rights",
    "international employment law",
    "cross-border business law",
    "legal systems comparison",
    "international law",
    "legal help worldwide",
    "relocation legal guide",
    "visa and immigration",
  ].join(", ");

  return (
    <Layout>
      <MarketingSEO
        title="Global Legal Issues & Guidance Worldwide | Wakeel"
        description="Legal guidance for 15+ countries across common law, civil law, and Islamic law systems. Expat guides, international business law, employment law, and more."
        path="/journal/legal-issues-global"
        schema={schema}
        keywords={keywords}
        region="global"
        language="en"
      />

      {/* Hero Section */}
      <section className="bg-background border-b-2 border-foreground/10 py-16 sm:py-20 lg:py-24">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <p className={eyebrow}>
              Legal Guidance Worldwide
            </p>
            <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
              Global Legal Issues & Guidance
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive legal guides for living and working in 15+ countries across common law,
              civil law, Islamic law, and mixed legal systems. Find guidance for your country and
              understand how laws differ worldwide.
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

      {/* Why we organize guides by legal family, not just by country */}
      <section className="bg-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="space-y-3">
            <h2 className={sectionHeading}>Why these guides are grouped by legal family, not just geography</h2>
            <p className="text-muted-foreground leading-relaxed">
              Comparative law generally sorts the world's legal systems into five families — common law,
              civil law, religious law, customary law, and mixed systems — and that classification, not
              geography alone, is what actually determines which rules apply to a given situation. It's why
              the categories below group the UK, the US, Canada, Australia, India, Singapore, and Hong Kong
              together as common-law jurisdictions (precedent-driven, adversarial courts) even though they
              span five continents, while Germany, France, the Netherlands, and Spain sit together as civil
              law (codified statutes, judge-applied rather than judge-made). Nordic law is a genuine edge
              case comparative law scholars still debate: often grouped with civil law, but distinct enough —
              no comprehensive codes like France's or Germany's — that some treat it as its own family
              entirely.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Most countries today are mixed systems rather than a pure single family — Nigeria blends common
              law with Sharia and customary law; Malaysia runs parallel civil and Syariah court systems;
              Indonesia layers Dutch-colonial civil law with religious courts and, in Aceh specifically, its
              own Sharia bylaws. This is exactly why a single country's guide can't be assumed to generalize
              to its "family" — the specific statute and its current year matter more than the family label,
              which is why every guide below names its actual governing law rather than just its legal
              tradition.
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
                  { label: "Modern Legal Systems of the World — Business LibreTexts (comparative law overview)", url: "https://biz.libretexts.org/Bookshelves/Civil_Law/Fundamentals_of_Business_Law_(Randall_et_al.)/01%3A_Introduction_to_Law_and_Types_of_Legal_Systems/1.03%3A_Modern_Legal_Systems_of_the_World" },
                  { label: "Scandinavian Law as a distinct legal family — Encyclopedia of Early Modern History Online", url: "https://www.ieg-ego.eu/en/threads/crossroads/legal-families/wilhelm-brauneder-the-scandinavian-legal-system" },
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
            {globalCategories.map((category) => {
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

      {/* Global Coverage Stats */}
      <section className="bg-muted/40 py-16 sm:py-20 lg:py-24">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={sectionHeading}>Global Coverage</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { label: "Countries", value: "15+" },
              { label: "Legal Systems", value: "4+" },
              { label: "Legal Guides", value: "24" },
              { label: "Regions Covered", value: "5" },
              { label: "Millions of Expats", value: "200M+" },
              { label: "Languages", value: "2+" },
            ].map((stat) => (
              <Card key={stat.label} className={cardBase}>
                <CardContent className="p-6 text-center">
                  <p className="text-3xl font-bold text-primary mb-2">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Map */}
      <section className="bg-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={sectionHeading}>Regions Covered</h2>
            <p className="text-muted-foreground mt-4">
              Find legal guidance for your country in any region
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                region: "Europe",
                countries: "UK, Germany, France, Netherlands, Spain",
                guides: 5,
              },
              {
                region: "Asia-Pacific",
                countries: "India, Singapore, Hong Kong, Malaysia, Indonesia, Thailand",
                guides: 7,
              },
              {
                region: "Americas",
                countries: "USA, Canada, Brazil, Mexico",
                guides: 4,
              },
              {
                region: "Middle East & Africa",
                countries: "Turkey, Egypt, South Africa, Nigeria",
                guides: 4,
              },
              {
                region: "International",
                countries: "Global employment, business, expat guides",
                guides: 3,
              },
              {
                region: "Also Available",
                countries: "Pakistan guides, GCC guides, and more",
                guides: 47,
              },
            ].map((region) => (
              <Card key={region.region} className={cardBase}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2 text-primary">
                    {region.region}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {region.countries}
                  </p>
                  <p className="text-xs font-semibold text-primary">
                    {region.guides} guides
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Systems Info */}
      <section className="bg-muted/40 py-16 sm:py-20 lg:py-24">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={sectionHeading}>Understanding Legal Systems</h2>
            <p className="text-muted-foreground mt-4">
              Different countries use different legal systems
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <Card className={cardBase}>
              <CardHeader>
                <CardTitle className="text-lg">Common Law</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Based on case law and legal precedents. Used in UK, USA, Canada, Australia, India, Singapore, Hong Kong.
                </p>
                <p className="text-xs text-primary font-semibold">7 countries covered</p>
              </CardContent>
            </Card>

            <Card className={cardBase}>
              <CardHeader>
                <CardTitle className="text-lg">Civil Law</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Based on comprehensive legal codes. Used in Germany, France, Netherlands, Spain, Brazil, Mexico.
                </p>
                <p className="text-xs text-primary font-semibold">6 countries covered</p>
              </CardContent>
            </Card>

            <Card className={cardBase}>
              <CardHeader>
                <CardTitle className="text-lg">Islamic Law</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Based on Sharia principles. Primary or integrated in GCC, Pakistan, Egypt, Malaysia, Indonesia.
                </p>
                <p className="text-xs text-primary font-semibold">Integrated in 5+ countries</p>
              </CardContent>
            </Card>

            <Card className={cardBase}>
              <CardHeader>
                <CardTitle className="text-lg">Mixed Systems</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Combinations of common law, civil law, Islamic law, and customary law. Found worldwide.
                </p>
                <p className="text-xs text-primary font-semibold">10+ countries covered</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className={cardBase}>
            <CardContent className="p-8 sm:p-12 space-y-6">
              <div>
                <h2 className={sectionHeading}>Legal help for any country</h2>
                <p className="text-muted-foreground mt-2">
                  Upload documents, ask legal questions, and get guidance on laws anywhere in the world.
                  Available for Pakistan, GCC, and 15+ countries globally.
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
