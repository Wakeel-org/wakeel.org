import Link from "next/link";
import {
  CheckCircle2,
  Heart,
  Gavel,
  Baby,
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
  { icon: Gavel, title: "One statute governs almost every custody case", detail: "The Guardian and Wards Act 1890 is the primary law used for child custody disputes in Pakistan — both for deciding who has physical custody (hizanat) and who acts as legal guardian (wilayat), which are treated as related but separate questions." },
  { icon: Heart, title: "Welfare of the child overrides everyone's individual right", detail: "Section 17 of the 1890 Act makes the welfare of the minor the paramount consideration in any custody decision — courts weigh the child's health, education, and emotional and moral wellbeing above either parent's personal claim, including the mother's hizanat right and the father's status as natural guardian." },
  { icon: Baby, title: "Hizanat gives mothers a strong, age-based claim", detail: "Under Islamic law as applied in Pakistan, a mother generally has the right of hizanat (physical custody) for sons until around age seven and for daughters until puberty, on the basis that early childhood is best spent with the mother — though this is a strong presumption, not an absolute rule the court can't depart from." },
  { icon: AlertTriangle, title: "Guardianship and custody often split between parents", detail: "Even where a mother holds physical custody under hizanat, the father is typically recognised as the natural legal guardian responsible for the child's property and major decisions — meaning custody arrangements in Pakistan frequently divide day-to-day care and legal guardianship between both parents rather than awarding both to one." },
];

const faqs = [
  {
    question: "What law governs child custody in Pakistan?",
    answer:
      "The Guardian and Wards Act 1890 is the primary law, with Section 17 establishing the welfare of the minor as the paramount consideration and Section 25 addressing a guardian's rights over a minor's custody.",
  },
  {
    question: "Until what age does a mother get custody of children in Pakistan?",
    answer:
      "Under the principle of hizanat as generally applied, a mother has a strong claim to physical custody of sons until around age seven and daughters until puberty — though courts can depart from this age-based presumption if the child's welfare requires it.",
  },
  {
    question: "Can a father get custody of a young child in Pakistan?",
    answer:
      "Yes, though it's harder while the child is within the mother's hizanat age range. Courts can still award custody to the father — or another relative — where the mother's conduct or circumstances are found to work against the child's welfare, since welfare, not the age rule alone, is the paramount legal standard.",
  },
  {
    question: "Does remarriage affect a mother's custody rights in Pakistan?",
    answer:
      "It can be a factor courts consider, but it isn't automatically disqualifying — the outcome depends on how the circumstances are found to affect the child's welfare, which is the standard courts are legally required to apply above any single factor.",
  },
  {
    question: "Can Wakeel.org tell me who will get custody in my case?",
    answer:
      "Wakeel.org can explain how the Guardian and Wards Act 1890 and the hizanat principle generally work. It cannot predict how a specific Family Court judge will weigh the welfare of your specific child or represent you in proceedings — a licensed family law advocate should handle that.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Child Custody Laws in Pakistan",
    description:
      "How child custody works in Pakistan under the Guardian and Wards Act 1890 — the welfare-of-the-minor standard, the hizanat principle, and how guardianship and custody can split between parents.",
    author: { "@type": "Organization", name: "Wakeel.org" },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-09-27",
    dateModified: "2026-09-27",
    mainEntityOfPage: `${site.url}/journal/article/child-custody-laws-pakistan`,
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
        name: "Child Custody Laws in Pakistan",
        item: `${site.url}/journal/article/child-custody-laws-pakistan`,
      },
    ],
  },
];

const keywords = [
  "child custody law pakistan",
  "guardian and wards act 1890",
  "hizanat custody rights mother",
  "welfare of minor pakistan custody",
  "child custody age limit pakistan",
  "father guardianship rights pakistan",
].join(", ");

export default function ChildCustodyLawsPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Child Custody Laws in Pakistan"
        description="How child custody works in Pakistan under the Guardian and Wards Act 1890 — the welfare-of-the-minor standard, the hizanat principle, and how guardianship and custody can split between parents."
        path="/journal/article/child-custody-laws-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>Legal Help · Published September 27, 2026</p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Child Custody Laws in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Custody, guardianship, and hizanat are not the same thing under Pakistani law — and
            confusing them changes how a case is fought.
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
                Child custody in Pakistan is decided under the{" "}
                <strong>Guardian and Wards Act 1890</strong>, whose Section 17 makes the{" "}
                <strong>welfare of the minor</strong> the paramount consideration — above either
                parent's individual claim. In practice, mothers generally hold physical custody
                (<strong>hizanat</strong>) of sons until around age seven and daughters until
                puberty, while fathers are typically recognised as the natural legal guardian —
                meaning custody and guardianship frequently split between both parents rather than
                going entirely to one.
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
          <h2 className={sectionHeading}>Why "welfare" is a standard, not a rubber stamp for the age rule</h2>
          <p className="text-muted-foreground leading-relaxed">
            Legal analysis published by{" "}
            <a href="https://sahsol.lums.edu.pk/node/12832" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
              LUMS SAHSOL
            </a>{" "}
            traces how Pakistani courts have applied the hizanat age presumption alongside, not
            instead of, the welfare standard — the age rule is a strong starting point, not a fixed
            outcome the court is bound to. Courts look at a child's health, education, physical and
            psychological development, comfort, and moral and religious upbringing as the actual
            factors that decide a case, which is why custody outcomes can genuinely differ even
            between children of similar ages in similar family situations.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            This is also why a parent's conduct — not just their relationship to the child — can
            affect the outcome: courts have departed from the standard hizanat age presumption
            where a mother's circumstances were found to work against the child's welfare, and
            similarly can limit a father's guardianship where his conduct raises welfare concerns.
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
                  Explaining how the Guardian and Wards Act 1890, hizanat, and the welfare standard
                  generally work, in plain English or Urdu.
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
                  It cannot predict how a specific judge will weigh your child's welfare or
                  represent you in a custody proceeding — a licensed family law advocate should
                  handle that.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel about child custody — free
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
          <h2 className="text-lg font-semibold text-foreground mb-4">Sources and further reading</h2>
          <ul className="space-y-2">
            {[
              { label: "Law on the Custody of Children in Pakistan: Past, Present and Future — LUMS SAHSOL", href: "https://sahsol.lums.edu.pk/node/12832" },
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
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`${sectionHeading} text-center mb-8`}>Related reading</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/journal/article/divorce-in-pakistan-procedure-rights" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Divorce in Pakistan: Procedure and Rights</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/khula-in-pakistan-procedure-rights" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Khula in Pakistan: Procedure and Rights</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/maintenance-nafaqah-rights-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Maintenance (Nafaqah) Rights in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/family-law-rights-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Family Law Rights in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Facing a custody question?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel how the law generally works — then verify with a licensed family law
            advocate before you act.
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
