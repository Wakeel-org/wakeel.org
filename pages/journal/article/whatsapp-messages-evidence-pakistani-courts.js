import Link from "next/link";
import {
  CheckCircle2,
  MessageSquare,
  Gavel,
  ShieldCheck,
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
  { icon: Gavel, title: "Yes, WhatsApp messages can be used as evidence", detail: "Under Article 164 of the Qanun-e-Shahadat Order 1984, Pakistani courts have discretion to admit evidence that has become available because of modern devices — which covers WhatsApp chats, voice notes, and shared media." },
  { icon: MessageSquare, title: "A plain screenshot is the weakest version of this evidence", detail: "A standalone screenshot is just an image file — it doesn't, on its own, prove who sent it, when, or that it wasn't edited. Courts routinely see this challenged, especially where the outcome of a case depends heavily on the chat's authenticity." },
  { icon: ShieldCheck, title: "What actually strengthens WhatsApp evidence", detail: "Keeping the original device with the chat intact (not just a screenshot), noting the sender's number and the date/time shown in the app itself, and — for serious matters — getting a forensic extraction with a documented chain of custody, all significantly improve the odds a court accepts the evidence as genuine." },
  { icon: AlertTriangle, title: "The other side can, and often will, dispute it", detail: "Expect the opposing party to argue a screenshot was edited, taken out of context, or sent by someone else using the same number. Being ready to show the original chat on the original device — not just a printed screenshot — is your strongest response to that challenge." },
];

const faqs = [
  {
    question: "Can WhatsApp screenshots be used as evidence in a Pakistani court?",
    answer:
      "Yes, courts have discretion to admit them under Article 164 of the Qanun-e-Shahadat Order 1984. However, a plain screenshot is the weakest form of this evidence and can be challenged as edited or out of context — showing the original chat on the original device, or getting a forensic extraction, makes it much stronger.",
  },
  {
    question: "How do I make my WhatsApp evidence stronger for a court case?",
    answer:
      "Keep the original device and chat intact rather than deleting the app or switching phones. Take clear, uncropped screenshots showing the date, time, and sender's number. For serious cases, consider a professional forensic extraction, which documents the chain of custody and is much harder to challenge than a screenshot alone.",
  },
  {
    question: "Can the other side argue my WhatsApp screenshots were faked?",
    answer:
      "Yes, this is a common challenge, and screenshots alone are relatively easy to dispute. If authenticity becomes contested, being able to produce the original device and chat, or a forensic report, is what typically resolves the dispute in court.",
  },
  {
    question: "Do I need a forensic expert for WhatsApp evidence in every case?",
    answer:
      "Not necessarily — for many everyday disputes, clear screenshots plus the original device may be enough. Forensic extraction becomes more important in serious or heavily contested cases, such as criminal matters or where the other party is likely to challenge the evidence's authenticity.",
  },
  {
    question: "Can Wakeel.org tell me if my WhatsApp chats will be accepted as evidence?",
    answer:
      "Wakeel.org can explain how the admissibility rules generally work and how to preserve WhatsApp evidence properly. It cannot predict how a specific judge will rule on your specific chats or represent you in court — a licensed advocate should handle that.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "WhatsApp Messages as Evidence in Pakistani Courts",
    description:
      "Can WhatsApp chats be used as evidence in Pakistan? A plain-language explanation of Article 164 of the Qanun-e-Shahadat Order 1984 and how to preserve chat evidence properly.",
    author: { "@type": "Organization", name: "Wakeel.org" },
    publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
    datePublished: "2026-09-03",
    dateModified: "2026-09-03",
    mainEntityOfPage: `${site.url}/journal/article/whatsapp-messages-evidence-pakistani-courts`,
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
        name: "WhatsApp Messages as Evidence in Pakistani Courts",
        item: `${site.url}/journal/article/whatsapp-messages-evidence-pakistani-courts`,
      },
    ],
  },
];

const keywords = [
  "whatsapp messages evidence pakistan",
  "whatsapp screenshot court pakistan",
  "are whatsapp chats admissible pakistan",
  "digital evidence whatsapp pakistan",
  "article 164 qanun-e-shahadat whatsapp",
  "forensic whatsapp extraction pakistan",
].join(", ");

export default function WhatsappMessagesEvidencePakistaniCourts() {
  return (
    <Layout>
      <MarketingSEO
        title="WhatsApp Messages as Evidence in Pakistani Courts"
        description="Can WhatsApp chats be used as evidence in Pakistan? A plain-language explanation of Article 164 of the Qanun-e-Shahadat Order 1984 and how to preserve chat evidence properly."
        path="/journal/article/whatsapp-messages-evidence-pakistani-courts"
        schema={schema}
        keywords={keywords}
        region="pk"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className={eyebrow}>Legal Help · Published September 3, 2026</p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${headingGradient}`}>
            WhatsApp Messages as Evidence in Pakistani Courts
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A screenshot can be evidence — but it's also the easiest kind of evidence to challenge.
            Here's how to make yours count.
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
                Yes — WhatsApp messages, voice notes, and shared media can be used as evidence in
                Pakistani courts under{" "}
                <a href="https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apaUY2Npa5plaw==-sg-jjjjjjjjjjjjj" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">
                  Article 164 of the Qanun-e-Shahadat Order 1984
                </a>
                . But a plain screenshot is the weakest form of this evidence — it can be argued to
                be edited or out of context. Keep the <strong>original device and chat intact</strong>,
                take clear screenshots showing the date/time and sender's number, and for serious
                cases consider a <strong>forensic extraction</strong> to make the evidence far
                harder to dispute.
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

      {/* Reveal: prose */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <h2 className={sectionHeading}>Why "just a screenshot" is a phrase lawyers hear constantly</h2>
          <p className="text-muted-foreground leading-relaxed">
            A common mistake is treating a screenshot as self-explanatory proof — but a screenshot
            is just an image, and anyone can edit an image. What actually convinces a court is
            context around it: does the number match the person you're accusing? Does the timeline
            make sense with other evidence in the case? Can you show the original conversation on
            the actual device it was sent to, not just a printed page? Courts weigh all of this
            together, not the screenshot in isolation.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The most practical habit worth building: the moment a WhatsApp conversation becomes
            relevant to a legal issue — a threat, a fraud, an admission, a harassment case — stop
            deleting anything, back up the chat, and if the stakes are high, talk to a lawyer about
            whether a forensic copy is worth getting before you do anything else with that phone.
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
                  Explaining how the admissibility rules generally work and how to preserve
                  WhatsApp evidence properly before you see a lawyer.
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
                  It cannot perform forensic analysis or predict whether a specific judge will
                  admit your specific chats — a licensed advocate should handle that.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Ask Wakeel about WhatsApp evidence — free
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
          <h2 className="text-lg font-semibold text-foreground mb-4">Sources — check these directly to verify</h2>
          <ul className="space-y-2">
            {[
              { label: "The Qanun-e-Shahadat Order, 1984 — Pakistan Code (Ministry of Law and Justice)", href: "https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apaUY2Npa5plaw==-sg-jjjjjjjjjjjjj" },
              { label: "Admissibility and Evidentiary Value of Electronic Evidence — Bahria University Islamabad Law Journal", href: "https://archive.bahria.edu.pk/buic/law/wp-content/uploads/2024/05/Article-2-of-2022.pdf" },
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
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`${sectionHeading} text-center mb-8`}>Related reading</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/journal/article/digital-evidence-pakistani-courts" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Digital Evidence in Pakistani Courts</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/whatsapp-blackmail-legal-action-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">Blackmail on WhatsApp: Legal Action in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/civil-suit-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to File a Civil Suit in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
            <Link href="/journal/article/nccia-cyber-crime-complaint-pakistan" className={`group ${cardBase} block rounded-lg p-5`}>
              <p className="font-semibold text-sm group-hover:text-primary transition-colors">How to File a Cyber Crime Complaint in Pakistan</p>
              <p className="text-xs text-muted-foreground mt-1">Article · Wakeel Journal</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className={sectionHeading}>Building a case around WhatsApp chats?</h2>
          <p className="text-muted-foreground">
            Ask Wakeel how to preserve them properly — then verify with a licensed advocate before
            you rely on them in court.
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
