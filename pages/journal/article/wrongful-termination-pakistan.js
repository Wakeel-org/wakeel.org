import Link from "next/link";
import {
  CheckCircle2,
  Briefcase,
  FileText,
  Scale,
  Clock,
  HelpCircle,
  AlertTriangle,
  Gavel,
  Users,
} from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Button } from "../../../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { site } from "../../../src/data/marketing";
import { cardBase, eyebrow, headingGradient, sectionHeading } from "../../../src/data/theme";

const grounds = [
  {
    icon: FileText,
    title: "Termination requires notice, or pay in lieu of notice",
    detail:
      "Under the Industrial and Commercial Employment (Standing Orders) Ordinance 1968 — which governs 'workmen' in industrial and commercial establishments employing 20 or more people — an employer generally cannot simply stop calling you in. Ending employment without misconduct usually requires written notice (or salary in lieu of that notice) plus any dues owed, such as gratuity. Being told to leave 'today, no notice, no reason' is exactly the kind of fact pattern worth documenting immediately.",
  },
  {
    icon: Scale,
    title: "Dismissal for misconduct needs a fair inquiry",
    detail:
      "If an employer alleges misconduct — theft, fraud, habitual absence, insubordination — the Standing Orders framework expects a charge sheet, a genuine opportunity for you to respond, and a proper inquiry before dismissal, not a verbal accusation followed by an immediate firing. A dismissal that skips this process is a strong candidate for a wrongful termination claim.",
  },
  {
    icon: Users,
    title: "Retrenchment must follow 'last in, first out' and pay dues",
    detail:
      "Genuine redundancy (retrenchment) isn't a free pass to let anyone go. It generally requires selecting among comparable workers by seniority (last hired, first let go, subject to some exceptions), notice or pay in lieu, and retrenchment compensation — not a pretext to remove a specific employee the employer wants gone.",
  },
  {
    icon: Briefcase,
    title: "Managerial and contract staff rely more on their employment contract",
    detail:
      "The Standing Orders Ordinance protects 'workmen' — broadly, non-managerial staff. If you're in a managerial, supervisory, or highly-paid executive role, your protection against wrongful termination comes more from your written employment contract and the general Contract Act 1872 than from the Standing Orders. Read your contract's termination and notice clauses closely — this is precisely where a lawyer or a careful AI-assisted read-through earns its keep.",
  },
  {
    icon: Scale,
    title: "A grievance and dispute-resolution route exists",
    detail:
      "Under the Industrial Relations Act 2012 (for Islamabad Capital Territory and trans-provincial establishments) and the parallel provincial Industrial Relations Acts, an aggrieved worker can raise a written grievance with the employer and, if it isn't resolved, escalate the matter to the relevant Labour Court or the National Industrial Relations Commission (NIRC). Deadlines apply at each stage, and they are strict — this is not a process to start weeks after the fact.",
  },
  {
    icon: Gavel,
    title: "Unpaid wages and dues are a separate, faster track",
    detail:
      "If a termination leaves wages, overtime, or gratuity unpaid, the Payment of Wages Act 1936 and related provincial rules give you a distinct route to recover what you're owed — often faster than contesting the termination itself. The two claims (wrongful termination and unpaid dues) can run side by side.",
  },
];

const steps = [
  "Do not sign anything — a resignation letter, a 'full and final settlement' release, or an acknowledgment of misconduct — until you've read it fully and understand what you're giving up.",
  "Request the termination in writing if it wasn't already, and keep every message, email, and HR letter related to your employment and dismissal.",
  "Write down the timeline while it's fresh: what you were told, by whom, and when — including any verbal warnings or performance conversations before the termination.",
  "Check your employment contract and any HR policy or employee handbook for the notice period, severance terms, and grievance procedure that were supposed to apply.",
  "Raise a written grievance with your employer promptly — this is usually a required first step before a Labour Court will hear your case, and delay can work against you.",
  "For a claim of real value, or if the employer ignores your grievance, consult a labour lawyer about filing before the relevant Labour Court or the NIRC within the applicable limitation period.",
];

const faqs = [
  {
    question: "What counts as wrongful termination in Pakistan?",
    answer:
      "Broadly, termination that skips the process the law requires: no notice or pay in lieu without a lawful reason, dismissal for alleged misconduct without a fair inquiry, retrenchment that ignores seniority rules, or termination that's really retaliation for union activity or a protected complaint. The exact standard depends on whether you're a 'workman' under the Standing Orders Ordinance 1968 or covered mainly by your individual employment contract.",
  },
  {
    question: "Which law protects employees from wrongful termination in Pakistan?",
    answer:
      "The Industrial and Commercial Employment (Standing Orders) Ordinance 1968 sets the substantive rules on notice, misconduct inquiries, and retrenchment for workmen in qualifying establishments. The Industrial Relations Act 2012 (federal) and the provincial Industrial Relations Acts (Punjab, Sindh, Khyber Pakhtunkhwa, Balochistan) set out the grievance procedure and Labour Court process for enforcing those rights. Managerial staff typically rely more heavily on their individual employment contract.",
  },
  {
    question: "How long do I have to challenge a wrongful termination in Pakistan?",
    answer:
      "There are limitation periods at both the grievance stage and the Labour Court filing stage under the applicable Industrial Relations Act, and they are counted in weeks, not months. Because the exact deadline depends on your province and the specific Act that applies to your employer, treat this as urgent — start your written grievance immediately and get a lawyer's read on your filing deadline rather than assuming you have time.",
  },
  {
    question: "Can I get compensation for wrongful termination in Pakistan?",
    answer:
      "If a Labour Court or the NIRC finds a termination unlawful, remedies can include reinstatement, back wages, or compensation in lieu of reinstatement, depending on the case and the forum. Separately, unpaid notice pay, gratuity, and other dues can usually be pursued as a wage claim regardless of how the termination dispute itself is resolved.",
  },
  {
    question: "Does the Standing Orders Ordinance apply to every employee?",
    answer:
      "No. It applies to 'workmen' in industrial and commercial establishments that employ 20 or more people (with some provincial variation in coverage and thresholds). Smaller establishments, and employees in purely managerial or supervisory roles, often sit outside its direct protection and depend more on their individual employment contract and general contract law.",
  },
  {
    question: "Can Wakeel.org help if I've been wrongfully terminated?",
    answer:
      "Wakeel.org can help you read your employment contract and termination letter in plain English or Urdu, explain what the Standing Orders Ordinance and Industrial Relations Act generally require, and help you organize a timeline and document checklist before you see a lawyer. It cannot file your grievance, represent you before a Labour Court, calculate your exact entitlement, or confirm case-specific deadlines — those steps need a licensed labour lawyer.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Wrongful Termination in Pakistan: Know Your Rights",
    description:
      "A practical guide to wrongful termination in Pakistan under the Standing Orders Ordinance 1968 and the Industrial Relations Act 2012 — notice, misconduct inquiries, retrenchment rules, and how to challenge an unlawful dismissal.",
    author: { "@type": "Organization", name: "Wakeel.org" },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-05-15",
    dateModified: "2026-05-15",
    mainEntityOfPage: `${site.url}/journal/article/wrongful-termination-pakistan`,
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
        name: "Wrongful Termination in Pakistan: Know Your Rights",
        item: `${site.url}/journal/article/wrongful-termination-pakistan`,
      },
    ],
  },
];

const keywords = [
  "wrongful termination pakistan",
  "employee rights pakistan",
  "labour law pakistan",
  "labour law rights for employees",
  "industrial relations act 2012",
  "standing orders ordinance 1968",
  "unfair dismissal pakistan",
  "labour court pakistan",
  "employment termination notice pakistan",
].join(", ");

export default function WrongfulTerminationPakistan() {
  return (
    <Layout>
      <MarketingSEO
        title="Wrongful Termination in Pakistan: Know Your Rights"
        description="What counts as wrongful termination under Pakistan's Standing Orders Ordinance 1968 and Industrial Relations Act 2012 — notice, misconduct inquiries, retrenchment rules, and how to challenge an unlawful dismissal."
        path="/journal/article/wrongful-termination-pakistan"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>
            Legal Help · Published May 15, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Wrongful Termination in Pakistan: Know Your Rights
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Being let go without warning, without notice, and without a clear reason feels
            arbitrary — and under Pakistani labour law, in many cases it also isn't lawful. Here's
            what the law actually requires before an employer can end your job.
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
                For most non-managerial employees, the{" "}
                <strong>Industrial and Commercial Employment (Standing Orders) Ordinance 1968</strong>{" "}
                requires notice (or pay in lieu), a fair inquiry before dismissal for misconduct,
                and seniority-based selection for genuine retrenchment. If your employer skipped
                these steps, you generally have the right to raise a written grievance and, if
                unresolved, take the matter to a <strong>Labour Court</strong> or the{" "}
                <strong>NIRC</strong> under the Industrial Relations Act 2012 or your province's
                equivalent Act. Managerial staff should look first at their employment contract.
                Deadlines are short — document everything and move quickly.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Grounds */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>What the law generally requires before a termination</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Coverage and detail depend on your role, your employer's size, and your province —
              but these are the recurring principles across Pakistan's labour law framework.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {grounds.map((r) => {
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

      {/* Steps */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className={sectionHeading}>If you've just been terminated</h2>
          </div>
          <Card className={cardBase}>
            <CardContent className="p-6">
              <ol className="space-y-3">
                {steps.map((step, i) => (
                  <li key={step} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center justify-center h-5 w-5 rounded-full bg-primary/10 text-primary text-xs font-semibold shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-5 flex items-start gap-3 rounded-md bg-primary/5 p-4 text-sm text-muted-foreground">
                <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>
                  Grievance and Labour Court filing windows under the Industrial Relations Acts are
                  measured in days and weeks, not months. Treat the first two weeks after
                  termination as the period that matters most.
                </span>
              </div>
            </CardContent>
          </Card>
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
                  Reading your employment contract and termination letter and explaining the notice,
                  severance, and grievance clauses in plain English or Urdu. Explaining what the
                  Standing Orders Ordinance and Industrial Relations Act generally require, and
                  helping you build a timeline and document checklist before you see a lawyer.
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
                  It cannot file your grievance or Labour Court petition, represent you in
                  proceedings, calculate your exact monetary entitlement, or confirm the precise
                  filing deadline for your case — deadlines and procedure vary by province and
                  change over time, so verify them with a licensed labour lawyer.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Review your termination letter with Wakeel Free
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
            General educational information, not legal advice. Labour law coverage and procedure
            vary by employer size, role, and province, and change over time — verify current rules
            with a licensed labour lawyer or your provincial Labour Department before acting. See
            our <Link href="/disclaimer" className="text-primary hover:underline">full disclaimer</Link>.
          </p>
        </div>
      </section>

      {/* Sources */}
      <section className="bg-background py-14 sm:py-16">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-semibold text-foreground mb-4">Sources and further reading</h2>
          <ul className="space-y-2">
            {[
              {
                label: "Industrial and Commercial Employment (Standing Orders) Ordinance, 1968 — Pakistan Code (Ministry of Law and Justice)",
                href: "https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apaUY2Npa5tmaQ==-sg-jjjjjjjjjjjjj",
              },
              {
                label: "Industrial Relations Act, 2012 — Pakistan Code (Ministry of Law and Justice)",
                href: "https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apaUY2FqaZk=-sg-jjjjjjjjjjjjj",
              },
              {
                label: "NATLEX — ILO database entry for the Standing Orders Ordinance, 1968",
                href: "https://www.ilo.org/dyn/natlex/natlex4.detail?p_lang=en&p_isn=86160",
              },
              {
                label: "NATLEX — ILO database entry for the Industrial Relations Act, 2012",
                href: "https://www.ilo.org/dyn/natlex/natlex4.detail?p_lang=en&p_isn=91438",
              },
            ].map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-sm text-primary hover:underline"
                >
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
            <Link
              href="/journal/article/understanding-legal-notices-pakistan"
              className={`group ${cardBase} block rounded-lg p-5`}
            >
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                Understanding Legal Notices in Pakistan
              </p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link
              href="/journal/article/consumer-complaint-pakistan"
              className={`group ${cardBase} block rounded-lg p-5`}
            >
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                How to File a Consumer Complaint in Pakistan
              </p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link
              href="/journal/article/draft-legal-contract-pakistan"
              className={`group ${cardBase} block rounded-lg p-5`}
            >
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                How to Draft a Legal Contract in Pakistan
              </p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/legal-sources" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                Our Approach to Legal Sources
              </p>
              <p className="text-xs text-muted-foreground mt-1">How Wakeel grounds answers in Pakistani law</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Was your firing handled unlawfully?</h2>
          <p className="text-muted-foreground">
            Upload your employment contract or termination letter and Wakeel will help you
            understand it in plain language — then verify next steps with a licensed labour lawyer.
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
