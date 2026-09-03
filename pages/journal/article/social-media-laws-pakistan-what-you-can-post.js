import Link from "next/link";
import {
  CheckCircle2,
  ShieldAlert,
  Scale,
  Gavel,
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

const restrictions = [
  { icon: Scale, title: "Article 19 sets the constitutional baseline", detail: "Freedom of speech is protected, but subject to \"reasonable restrictions\" for reasons including the glory of Islam, security of Pakistan, public order, decency, and morality — this is the framework every specific statute below operates within." },
  { icon: ShieldAlert, title: "Defamatory or false content (Section 20 PECA)", detail: "Publishing or transmitting false information intended to harm someone's reputation is a specific offence, separate from any parallel civil defamation claim." },
  { icon: Users, title: "Non-consensual or explicit content (Section 21 PECA)", detail: "Sharing sexually explicit or intimate material without consent, or content that superimposes someone's image, carries some of PECA's more serious penalties." },
  { icon: Gavel, title: "Content causing fear, panic, or unrest (Section 26-A PECA, 2025)", detail: "The newest and most debated provision — added by the 2025 amendment, it criminalises spreading information likely to cause a sense of fear, panic, disorder, or unrest, with up to three years' imprisonment and a fine reaching two million rupees." },
  { icon: ShieldAlert, title: "Removal, blocking, and platform obligations", detail: "PECA allows an aggrieved person to seek removal or blocking of unlawful content, and platforms can be directed to act on such orders — a route that exists alongside, not instead of, a criminal complaint." },
];

const faqs = [
  {
    question: "What can't you legally post on social media in Pakistan?",
    answer:
      "False or defamatory content (Section 20 PECA), non-consensual intimate images (Section 21 PECA), repeated harassing contact (Section 24, cyberstalking), and, since 2025, content likely to cause fear, panic, or unrest online (Section 26-A) — all sit outside Article 19's speech protection once they cross these specific lines.",
  },
  {
    question: "Is criticizing the government illegal on social media in Pakistan?",
    answer:
      "General political criticism is protected speech under Article 19, but the boundary between legitimate criticism and content that could be characterised as causing \"fear, panic or disorder\" under Section 26-A is genuinely contested and actively debated by human rights organisations — this is an area where legal advice matters before posting anything that could be read either way.",
  },
  {
    question: "Can I be prosecuted for sharing someone else's post?",
    answer:
      "Potentially — PECA's offences generally cover transmitting or disseminating content, not only originally creating it, so sharing something that violates the Act can itself create liability.",
  },
  {
    question: "Can content be removed from social media platforms in Pakistan?",
    answer:
      "Yes — an aggrieved person can seek removal or blocking of unlawful content under PECA, and platforms can be directed to comply, as a remedy that can run alongside a criminal complaint.",
  },
  {
    question: "Can Wakeel.org tell me if a specific post is legally risky?",
    answer:
      "Wakeel.org can explain the general legal framework and which PECA provisions commonly apply to different types of content, in plain English or Urdu. It cannot assess a specific post's legal risk with certainty or represent you — for anything genuinely uncertain, a licensed advocate should review it before you post.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Social Media Laws in Pakistan: What You Can and Cannot Post",
    description:
      "What Pakistani law actually restricts on social media — defamation, non-consensual content, cyberstalking, and the debated new Section 26-A offence for content causing fear or unrest.",
    author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-05-18",
    dateModified: "2026-05-18",
    mainEntityOfPage: `${site.url}/journal/article/social-media-laws-pakistan-what-you-can-post`,
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
        name: "Social Media Laws in Pakistan: What You Can and Cannot Post",
        item: `${site.url}/journal/article/social-media-laws-pakistan-what-you-can-post`,
      },
    ],
  },
];

const keywords = [
  "social media laws pakistan",
  "what can you post pakistan law",
  "section 26a peca",
  "social media defamation pakistan",
  "content removal pakistan law",
  "article 19 freedom of speech pakistan",
].join(", ");

export default function SocialMediaLawsPakistanWhatYouCanPost() {
  return (
    <Layout>
      <MarketingSEO
        title="Social Media Laws in Pakistan: What You Can and Cannot Post"
        description="What Pakistani law actually restricts on social media — defamation, non-consensual content, cyberstalking, and the debated new Section 26-A offence."
        path="/journal/article/social-media-laws-pakistan-what-you-can-post"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>
            Legal Help · Published May 18, 2026
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            Social Media Laws in Pakistan: What You Can and Cannot Post
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Article 19 protects free expression — but a specific, growing list of exceptions sits
            on top of it. Here's exactly where that line currently runs.
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
                <strong>Article 19</strong> protects speech subject to "reasonable restrictions."
                Under{" "}
                <a href="https://www.pakistancode.gov.pk/pdffiles/administrator6a061efe0ed5bd153fa8b79b8eb4cba7.pdf" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
                  PECA
                </a>
                , that means avoiding <strong>false/defamatory content</strong> (Section 20),{" "}
                <strong>non-consensual intimate content</strong> (Section 21),{" "}
                <strong>harassing contact</strong> (Section 24), and, since 2025, content likely to
                cause <strong>fear, panic, or unrest</strong> (Section 26-A) — the last one is
                genuinely contested and worth extra caution around.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educate: restrictions */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionHeading}>Where the legal line actually sits</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {restrictions.map((r) => {
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
          <h2 className={sectionHeading}>Why Section 26-A deserves extra caution</h2>
          <p className="text-muted-foreground leading-relaxed">
            Both{" "}
            <a href="https://nchr.gov.pk/wp-content/uploads/2026/02/NCHR-Report-on-PECA-and-the-2025-Amendments-Act.pdf" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
              Pakistan's National Commission for Human Rights
            </a>{" "}
            and independent academic analysis from{" "}
            <a href="https://sahsol.lums.edu.pk/node/25604" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
              LUMS SAHSOL
            </a>{" "}
            have flagged the same concern about Section 26-A: its wording around content causing
            "fear, panic or disorder" is broad enough to potentially cover commentary, rumor, or
            criticism that wasn't intended to threaten anyone, giving significant interpretive
            discretion to whoever is enforcing it.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The practical takeaway isn't to stop posting — it's to recognise that this specific
            provision is newer and less settled than PECA's older sections, so content that pushes
            close to it (strongly worded claims about unrest, security, or public order) deserves a
            second read, and ideally a lawyer's opinion, before you publish it.
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
                  Explaining the general legal framework and which PECA provisions commonly apply
                  to different types of content, in plain English or Urdu.
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
                  It cannot assess a specific post's legal risk with certainty or represent you —
                  for anything genuinely uncertain, a licensed advocate should review it before
                  you post.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel about a post — free
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
              { label: "The Prevention of Electronic Crimes Act, 2016 — Pakistan Code (Ministry of Law and Justice)", href: "https://www.pakistancode.gov.pk/pdffiles/administrator6a061efe0ed5bd153fa8b79b8eb4cba7.pdf" },
              { label: "NCHR Report on PECA and the 2025 Amendments Act — National Commission for Human Rights", href: "https://nchr.gov.pk/wp-content/uploads/2026/02/NCHR-Report-on-PECA-and-the-2025-Amendments-Act.pdf" },
              { label: "The PECA Amendment 2025: A Critical Analysis — LUMS SAHSOL", href: "https://sahsol.lums.edu.pk/node/25604" },
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
            <Link href="/journal/article/peca-act-pakistan-complete-guide-cybercrime-laws" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">PECA Act Pakistan: Complete Guide to Cybercrime Laws</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/cyberbullying-online-harassment-laws-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Cyberbullying and Online Harassment Laws in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/deepfakes-in-pakistan-legal-risks-punishment" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Deepfakes in Pakistan: Legal Risks and Punishment</p>
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
          <h2 className={sectionHeading}>Unsure if a post crosses a legal line?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel to explain the general framework — then get a licensed advocate to review
            anything genuinely uncertain before you post.
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
