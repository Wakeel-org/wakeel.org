import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Layout from "../../../src/components/Layout";
import MarketingSEO from "../../../src/components/MarketingSEO";
import { Card, CardContent, CardHeader, CardTitle } from "../../../src/components/ui/card";
import { comparisons, site } from "../../../src/data/marketing";
import { eyebrow } from "../../../src/data/theme";

const evaluationCriteria = [
  {
    title: "Grounded in Pakistani law",
    detail:
      "General-purpose chatbots default to US or Indian legal frameworks unless specifically built otherwise. This matters because a plausible-sounding answer citing the wrong country's statute is worse than no answer — it's confidently wrong.",
  },
  {
    title: "Genuine Urdu support",
    detail:
      "Most people describing a legal problem are more comfortable doing it in Urdu than translating it into English first. A tool that only understands English loses the nuance of how the problem was actually described.",
  },
  {
    title: "Long-document analysis",
    detail:
      "Legal notices, FIRs, judgments, and agreements are exactly where people get stuck — and exactly where a chat-only tool (no PDF upload, or a strict page limit) stops being useful.",
  },
  {
    title: "Source-aware, verify-first answers",
    detail:
      "Does the tool show what it's citing, and does it tell you when to double-check with a human? A tool that never flags uncertainty is a bigger red flag than one that regularly reminds you to verify.",
  },
  {
    title: "A genuinely usable free tier",
    detail:
      "The gap between marketing ('free plan available') and reality (a three-message trial before a paywall) is one of the most common disappointments with AI legal tools in Pakistan — worth checking directly, for any tool, including ours.",
  },
  {
    title: "Platform availability",
    detail:
      "Android, iOS, and web coverage determines whether you can actually reach the tool when you need it — mid-commute on a phone, or at a desk reviewing a document.",
  },
];

export default function ComparisonsPage() {
  return (
    <Layout>
      <MarketingSEO
        title="Wakeel.org Comparisons"
        description="Professional comparison pages for Wakeel.org and other legal AI tools, based on publicly available information."
        path="/journal/comparisons"
        schema={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Wakeel.org Comparisons",
          description:
            "Professional comparison pages for Wakeel.org and other legal AI tools, based on publicly available information.",
          url: `${site.url}/journal/comparisons`,
        }}
      />

      <section className="bg-background">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
          <div className="max-w-4xl space-y-5">
            <p className={eyebrow}>
              Comparisons
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Compare legal AI tools responsibly.
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              These pages use a factual, professional framework. Information may change over time, so users should verify current product details directly.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-10 sm:py-12 lg:py-14">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              How we evaluate every tool on this list
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Every comparison page below is scored against the same six criteria — not because any one
              of them is decisive on its own, but because together they're what actually separates a
              genuinely useful AI legal tool for Pakistan from a general chatbot with a Pakistani-sounding
              name. We list our own capabilities as verified facts; for each competitor, we list the
              specific question worth asking rather than an unverified claim about a product we don't
              operate.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {evaluationCriteria.map((item) => (
              <Card key={item.title} className="border-muted/60 bg-card/80">
                <CardContent className="p-5 space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <h3 className="font-semibold text-sm">{item.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-10 sm:py-12 lg:py-14">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {comparisons.map((comparison) => (
            <Card key={comparison.slug} className="border-muted/60 bg-card/80">
              <CardHeader>
                <CardTitle className="text-xl">{comparison.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Link
                  href={`/journal/article/${comparison.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                >
                  View comparison <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </Layout>
  );
}
