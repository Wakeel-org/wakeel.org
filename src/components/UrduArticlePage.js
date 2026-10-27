import Head from "next/head";
import Link from "next/link";
import { HelpCircle } from "lucide-react";
import Layout from "./Layout";
import MarketingSEO from "./MarketingSEO";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { site, reviewerSchema } from "../data/marketing";
import { cardBase, eyebrow, headingGradient, sectionHeading } from "../data/theme";

// Renders a real Urdu translation of an existing English article. Each page is
// paired with its English counterpart through hreflang (see MarketingSEO), so
// only add a page here when the Urdu text is a genuine translation.
const urduFont = {
  fontFamily: "'Noto Nastaliq Urdu', 'Jameel Noori Nastaleeq', serif",
  lineHeight: 2.2,
};

export default function UrduArticlePage({
  slug,
  enPath,
  title,
  description,
  keywords,
  published,
  modified,
  publishedLabel,
  modifiedLabel,
  quick,
  sections,
  faqs,
  sources,
  related,
}) {
  const path = `/journal/ur/article/${slug}`;
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      inLanguage: "ur-PK",
      headline: title,
      description,
      author: { "@type": "Organization", name: "Wakeel.org Legal Team", url: site.url },
      reviewedBy: reviewerSchema,
      publisher: { "@type": "Organization", name: "Wakeel.org", url: site.url },
      datePublished: published,
      dateModified: modified,
      mainEntityOfPage: `${site.url}${path}`,
      translationOfWork: `${site.url}${enPath}`,
      citation: sources.map((s) => ({ "@type": "CreativeWork", name: s.label, url: s.href })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      inLanguage: "ur-PK",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "Journal", item: `${site.url}/journal` },
        { "@type": "ListItem", position: 3, name: title, item: `${site.url}${path}` },
      ],
    },
  ];

  return (
    <Layout>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;600&display=swap"
        />
      </Head>
      <MarketingSEO
        title={title}
        description={description}
        path={path}
        englishPath={enPath}
        schema={schema}
        keywords={keywords}
        language="ur"
        region="pk"
      />

      <div dir="rtl" lang="ur" style={urduFont}>
        <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20">
          <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <p className={eyebrow} style={{ letterSpacing: "normal" }}>
              {publishedLabel} · {modifiedLabel} · نظرِ ثانی: Legal Team DIGIT
            </p>
            <h1 className={`text-3xl sm:text-4xl font-bold ${headingGradient}`} style={urduFont}>
              {title}
            </h1>
            <p className="text-muted-foreground">
              <Link href={enPath} className="text-primary hover:underline" lang="en" dir="ltr">
                Read this article in English
              </Link>
            </p>
          </div>
        </section>

        <section className="bg-background pt-10">
          <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className={`${cardBase} border-primary/30`}>
              <CardContent className="p-6 space-y-3">
                <p className="text-sm font-semibold text-primary">مختصر جواب</p>
                <p className="text-muted-foreground">{quick}</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="bg-background py-14">
          <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            {sections.map((sec) => (
              <div key={sec.h} className="space-y-3">
                <h2 className={`${sectionHeading} !text-2xl sm:!text-3xl`} style={urduFont}>
                  {sec.h}
                </h2>
                {sec.p.map((para) => (
                  <p key={para} className="text-muted-foreground">
                    {para}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section className="bg-muted/40 py-14">
          <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={`${sectionHeading} !text-2xl sm:!text-3xl text-center mb-8`} style={urduFont}>
              اکثر پوچھے جانے والے سوالات
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details key={faq.q} className="group rounded-lg border border-border bg-card p-5">
                  <summary className="flex cursor-pointer items-center gap-3 font-semibold">
                    <HelpCircle className="h-5 w-5 text-primary shrink-0" />
                    {faq.q}
                  </summary>
                  <p className="mt-4 text-sm text-muted-foreground">{faq.a}</p>
                </details>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-6 text-center">
              یہ عمومی قانونی معلومات ہیں، قانونی مشورہ نہیں۔ اپنے کیس کے لیے کسی لائسنس یافتہ وکیل سے رجوع کریں۔{" "}
              <Link href="/disclaimer" className="text-primary hover:underline">
                مکمل ڈسکلیمر
              </Link>
            </p>
          </div>
        </section>

        <section className="bg-background py-12">
          <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg font-semibold mb-4">ماخذ (خود تصدیق کریں)</h2>
            <ul className="space-y-2" dir="ltr">
              {sources.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer nofollow" className="text-sm text-primary hover:underline">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
            {related && related.length > 0 && (
              <>
                <h2 className="text-lg font-semibold mt-8 mb-4">متعلقہ مضامین</h2>
                <ul className="space-y-2">
                  {related.map((r) => (
                    <li key={r.href}>
                      <Link href={r.href} className="text-sm text-primary hover:underline">
                        {r.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </section>

        <section className="bg-muted/40 py-14">
          <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <p className="text-muted-foreground">
              Wakeel اردو اور انگریزی میں پاکستانی قانون سمجھنے میں مدد کرتا ہے۔
            </p>
            <Button asChild size="lg" className="cta-try-free">
              <a href={site.appUrl} target="_blank" rel="noopener noreferrer">
                Wakeel آزما کر دیکھیں
              </a>
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
}
