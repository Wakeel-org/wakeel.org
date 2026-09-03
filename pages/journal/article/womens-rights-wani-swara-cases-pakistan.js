import Link from "next/link";
import {
  CheckCircle2,
  Gavel,
  ShieldAlert,
  Scale,
  Users,
  HelpCircle,
  AlertTriangle,
} from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site } from "../../../src/data/marketing";
import { cardBase, eyebrow, headingGradient, sectionHeading } from "../../../src/data/theme";

const facts = [
  { icon: ShieldAlert, title: "What Vani and Swara actually are", detail: "Both are customary practices where a girl or woman is given in marriage — often to a rival family — to settle a civil dispute or resolve criminal liability (such as a murder or feud), effectively using her marriage as compensation rather than treating her as a party with her own consent." },
  { icon: Gavel, title: "Section 310-A PPC makes this a specific crime", detail: "Added by the Prevention of Anti-Women Practices Act 2011, Section 310-A of the Pakistan Penal Code criminalises giving a female in marriage, or compelling her into one, as badal-i-sulh, Vani, Swara, or any similar custom used to settle a dispute — punishable by three to seven years' imprisonment and a fine of up to five hundred thousand rupees." },
  { icon: Scale, title: "The marriage itself doesn't erase the crime", detail: "Even where a Vani or Swara marriage has already taken place, the underlying act of compelling it remains a prosecutable offence — going through with the marriage isn't a legal defence to having arranged it this way." },
  { icon: Users, title: "Jirga or panchayat 'approval' has no legal weight", detail: "A decision reached by an informal jirga or panchayat to resolve a dispute through Vani or Swara doesn't override the criminal law — those bodies have no authority to sanction what Section 310-A specifically prohibits, and participants can themselves face liability." },
];

const faqs = [
  {
    question: "Is Vani or Swara legal in Pakistan?",
    answer:
      "No — both are specifically criminalised under Section 310-A of the Pakistan Penal Code, added by the Prevention of Anti-Women Practices Act 2011. Giving or compelling a woman into marriage to settle a civil or criminal dispute carries three to seven years' imprisonment and a fine.",
  },
  {
    question: "Can a jirga or panchayat legally order Vani or Swara?",
    answer:
      "No informal body has legal authority to sanction it. A jirga or panchayat decision doesn't override Section 310-A PPC, and those involved in arranging or compelling such a marriage can face criminal liability regardless of any informal 'approval.'",
  },
  {
    question: "What can a woman do if she's being forced into a Vani or Swara marriage?",
    answer:
      "This is a criminal matter — reporting it to the police so an FIR can be registered under Section 310-A PPC is the appropriate first step, alongside seeking help from a lawyer or a women's rights organisation as quickly as possible given the urgency involved.",
  },
  {
    question: "Does marrying under Vani or Swara invalidate the marriage itself?",
    answer:
      "This is a genuinely complex legal question distinct from the criminal liability question, and can depend on the specific facts — including whether free consent was ever validly given. It's worth discussing directly with a lawyer rather than assuming either way.",
  },
  {
    question: "Can Wakeel.org help in a Vani or Swara situation?",
    answer:
      "Wakeel.org can explain the relevant law and what reporting it generally involves, in plain English or Urdu. It cannot file a report, intervene directly, or represent anyone — for anything urgent, contact the police or a lawyer immediately.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Women's Rights in Wani and Swara Cases",
    description:
      "What Vani and Swara are, why they're criminal offences under Section 310-A of the Pakistan Penal Code, and what a woman's legal options are if she's being compelled into one.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-01-31",
    dateModified: "2026-01-31",
    mainEntityOfPage: `${site.url}/journal/article/womens-rights-wani-swara-cases-pakistan`,
    citation: [
      { "@type": "CreativeWork", name: "Prevention of Anti-Women Practices Act, 2011 — Punjab Commission on the Status of Women", url: "https://pcsw.punjab.gov.pk/prevention_of_anti_women_practices" },
      { "@type": "CreativeWork", name: "The Criminal Law (Third Amendment) Act, 2011 — National Assembly of Pakistan", url: "https://na.gov.pk/uploads/documents/1329729400_262.pdf" },
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
        name: "Women's Rights in Wani and Swara Cases",
        item: `${site.url}/journal/article/womens-rights-wani-swara-cases-pakistan`,
      },
    ],
  },
];

const keywords = [
  "vani swara law pakistan",
  "section 310a ppc",
  "prevention of anti-women practices act 2011",
  "forced marriage law pakistan",
  "badal-i-sulh pakistan",
  "wani custom pakistan law",
].join(", ");

export default function WomensRightsWaniSwaraCasesPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Women's Rights in Wani and Swara Cases"
        description="What Vani and Swara are, why they're criminal offences under Section 310-A PPC, and what a woman's legal options are if she's being compelled into one."
        path="/journal/article/womens-rights-wani-swara-cases-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>
            Legal Help · Published January 31, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Women's Rights in Wani and Swara Cases
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vani and Swara are still sometimes described as "settling a matter the old way." Under
            Pakistani law, they're a specific criminal offence — here's what the statute actually
            says.
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
                <strong>Vani and Swara</strong> — giving a woman in marriage to settle a dispute —
                are criminalised under <strong>Section 310-A of the Pakistan Penal Code</strong>,
                added by the{" "}
                <a href="https://pcsw.punjab.gov.pk/prevention_of_anti_women_practices" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
                  Prevention of Anti-Women Practices Act 2011
                </a>
                . Punishment is <strong>three to seven years' imprisonment</strong> and a fine. No
                jirga or panchayat decision overrides this, and the crime doesn't disappear just
                because the marriage went ahead.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educate: facts */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>What the law actually says</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {facts.map((r) => {
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
          <h2 className={sectionHeading}>Why this needed a dedicated criminal provision</h2>
          <p className="text-muted-foreground leading-relaxed">
            Before the{" "}
            <a href="https://pcsw.punjab.gov.pk/prevention_of_anti_women_practices" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
              Prevention of Anti-Women Practices Act 2011
            </a>{" "}
            added Section 310-A, prosecuting Vani and Swara relied on general provisions that
            weren't written with this specific harm in mind — treating a woman's marriage as
            compensation for someone else's dispute. The 2011 Act named the practice directly and
            attached a mandatory minimum sentence, which matters because it removes the option of
            an unusually lenient outcome for what courts and legislators have recognised as a
            serious violation of a woman's autonomy.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The same Act also addressed related practices — forced marriage generally, and marriage
            to the Quran as a means of preventing a woman from inheriting or remarrying — reflecting
            a broader legislative recognition that customary "resolutions" of disputes were, in
            several specific and recurring forms, actually crimes against the women used to
            resolve them.
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
                  Explaining the relevant law and what reporting it generally involves, in plain
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
                  It cannot file a report, intervene directly, or represent anyone — for anything
                  urgent, contact the police or a lawyer immediately.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel about your rights — free
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
              { label: "Prevention of Anti-Women Practices Act, 2011 — Punjab Commission on the Status of Women", href: "https://pcsw.punjab.gov.pk/prevention_of_anti_women_practices" },
              { label: "The Criminal Law (Third Amendment) Act, 2011 — National Assembly of Pakistan", href: "https://na.gov.pk/uploads/documents/1329729400_262.pdf" },
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
            <Link href="/journal/article/womens-legal-rights-pakistan-complete-guide" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Women's Legal Rights in Pakistan: Complete Guide</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/child-marriage-laws-pakistan-punjab" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Child Marriage Laws in Pakistan and Punjab</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/how-to-register-fir-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to Register an FIR in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/legal-sources" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Our Approach to Legal Sources</p>
              <p className="text-xs text-muted-foreground mt-1">How Wakeel grounds answers in Pakistani law</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Facing a Vani or Swara situation?</h2>
          <p className="text-muted-foreground">
            This needs urgent, real-world help — contact the police or a lawyer immediately. Wakeel
            can help you understand the legal position while you do.
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
