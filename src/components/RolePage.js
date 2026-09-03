import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
  MessageSquareQuote,
  Smartphone,
  GraduationCap,
  Scale,
  Building2,
  Gavel,
  Landmark,
  BookOpen,
} from "lucide-react";
import Layout from "./Layout";
import MarketingSEO from "./MarketingSEO";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { PortalStamp } from "./ui/chip";
import { site, solutionLinks } from "../data/marketing";
import { cardBase, eyebrow, headingGradient, heroHeading, iconTile, sectionHeading } from "../data/theme";
import { portals, resolvePortalColors } from "../data/designSystem";
import { useTheme } from "../context/ThemeContext";

const HERO_ICONS = { Smartphone, GraduationCap, Scale, Building2, Gavel, Landmark, BookOpen };

const makePageSchema = (page, path) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: page.title,
  description: page.description,
  url: `${site.url}${path}`,
  about: {
    "@type": "SoftwareApplication",
    name: "Wakeel.org",
    applicationCategory: "LegalApplication",
    operatingSystem: "Web, Android",
  },
});

// Sections are rendered differently based on what they're for — detected
// from the section title so the underlying marketing data can stay plain
// title/items pairs. "Example prompts" becomes a quote-style citation strip;
// "limitation"/"strong" becomes a warning callout (esp. for Judges); anything
// else renders as a bordered capability grid.
const isPromptSection = (title) => /prompt/i.test(title);
const isLimitationSection = (title) => /limitation|strong/i.test(title);

const RolePage = ({ page, path }) => {
  const { darkMode } = useTheme();
  const portal = page.portal ? portals[page.portal] : null;
  // Large fills (the decorative panel, the CTA band) need the dark-tuned
  // surface/primary pair so they read as part of the dark canvas instead of
  // a glaring light pastel box; small accents (borders, icons, the solid
  // CTA button) stay on the light-mode primary in both themes since those
  // are isolated blocks with their own contrast, not page-sized fills.
  const panelColors = resolvePortalColors(portal, darkMode);
  const HeroIcon = HERO_ICONS[page.heroIcon] || Scale;
  const ctaStyle = portal
    ? { backgroundColor: portal.primary, borderColor: portal.primary, color: "#FFFFFF" }
    : undefined;

  const otherRoles = solutionLinks.filter((l) => l.href !== path);

  return (
    <Layout>
      <MarketingSEO
        title={page.title}
        description={page.description}
        path={path}
        schema={makePageSchema(page, path)}
      />

      {/* HERO — 3px portal accent rule, stamp chip, decorative bordered icon panel */}
      <section
        className="bg-background"
        style={portal ? { borderTop: `3px solid ${portal.primary}` } : undefined}
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-8 lg:gap-10 items-center">
            <div className="space-y-5">
              {portal && <PortalStamp portal={portal} />}
              <p className={eyebrow}>
                {page.eyebrow}
              </p>
              <h1 className={`${heroHeading} ${headingGradient}`}>
                {page.heading}
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                {page.intro}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <Button asChild size="lg" className="cta-try-free" style={ctaStyle}>
                  {page.ctaHref?.startsWith("/") ? (
                    <Link href={page.ctaHref}>{page.cta || "Try Wakeel Free"}</Link>
                  ) : (
                    <a href={page.ctaHref || site.appUrl} target="_blank" rel="noopener noreferrer">
                      {page.cta || "Try Wakeel Free"}
                    </a>
                  )}
                </Button>
                {page.ctaHref !== "/legal-sources" && (
                  <Button asChild variant="outline" size="lg" className="cta-view-legal-sources">
                    <Link href="/legal-sources">View Legal Sources</Link>
                  </Button>
                )}
              </div>
            </div>

            {/* Decorative portal-colored icon panel — the one place besides the
                stamp/accent/CTA that portal color is allowed to appear. */}
            <div
              className="hidden lg:flex items-center justify-center rounded-2xl border-2 aspect-square"
              style={{
                borderColor: portal ? panelColors.primary : "hsl(var(--foreground) / 0.15)",
                backgroundColor: portal ? panelColors.surface : "hsl(var(--muted))",
              }}
            >
              <HeroIcon
                className="w-24 h-24"
                style={{ color: portal ? panelColors.primary : "hsl(var(--foreground))" }}
                strokeWidth={1.5}
              />
            </div>
          </div>
        </div>
      </section>

      {/* WORKFLOW — "How it works" strip, numbered steps, portal-colored index */}
      {page.workflow && page.workflow.length > 0 && (
        <section className="bg-muted/30 py-14 sm:py-16 border-y-2 border-foreground/10">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={`${sectionHeading} mb-10`}>How it works</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {page.workflow.map((step, i) => (
                <div key={step.title} className="space-y-3">
                  <div
                    className="w-9 h-9 rounded-lg border-2 flex items-center justify-center font-mono text-sm font-bold"
                    style={{
                      borderColor: portal ? portal.primary : "hsl(var(--foreground))",
                      color: portal ? portal.primary : "hsl(var(--foreground))",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-display font-bold text-base">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTIONS — capability grids, quote strips, or warning callouts */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {page.sections.map((section) => {
            if (isPromptSection(section.title)) {
              return (
                <div key={section.title}>
                  <h2 className={`${sectionHeading} mb-8`}>{section.title}</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {section.items.map((item) => (
                      <div
                        key={item}
                        className="border-l-4 rounded bg-muted/40 p-5"
                        style={{ borderLeftColor: portal ? portal.primary : "hsl(var(--foreground))" }}
                      >
                        <MessageSquareQuote
                          className="w-4 h-4 mb-2"
                          style={{ color: portal ? portal.primary : "hsl(var(--foreground))" }}
                        />
                        <p className="text-sm text-foreground/90 italic leading-relaxed">&ldquo;{item}&rdquo;</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            }

            if (isLimitationSection(section.title)) {
              return (
                <div
                  key={section.title}
                  className="rounded-2xl border-2 border-kitab-warning/40 bg-kitab-warning-surface p-6 sm:p-8"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <ShieldAlert className="w-5 h-5 text-kitab-warning" />
                    <h2 className="font-display text-xl sm:text-2xl font-bold text-kitab-warning">
                      {section.title}
                    </h2>
                  </div>
                  <ul className="space-y-3">
                    {section.items.map((item) => (
                      <li key={item} className="flex gap-3 text-sm sm:text-base text-foreground/90 leading-relaxed">
                        <ShieldAlert className="h-5 w-5 text-kitab-warning shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            }

            return (
              <div key={section.title}>
                <h2 className={`${sectionHeading} mb-8`}>{section.title}</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {section.items.map((item) => (
                    <Card key={item} className={cardBase}>
                      <CardContent className="p-5 flex items-start gap-3">
                        <CheckCircle2
                          className="h-5 w-5 shrink-0 mt-0.5"
                          style={{ color: portal ? portal.primary : "hsl(var(--primary))" }}
                        />
                        <span className="text-sm sm:text-base text-foreground/90 leading-relaxed">{item}</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA band */}
      <section
        className="py-16 border-t-2 border-foreground/10"
        style={{ backgroundColor: portal ? panelColors.surface : "hsl(var(--muted))" }}
      >
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          {portal && <PortalStamp portal={portal} className="mx-auto" />}
          <h2 className="font-display text-2xl sm:text-3xl font-bold" style={{ color: portal ? panelColors.primary : undefined }}>
            {page.heading}
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" style={ctaStyle}>
              {page.ctaHref?.startsWith("/") ? (
                <Link href={page.ctaHref}>{page.cta || "Try Wakeel Free"}</Link>
              ) : (
                <a href={page.ctaHref || site.appUrl} target="_blank" rel="noopener noreferrer">
                  {page.cta || "Try Wakeel Free"}
                </a>
              )}
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Talk to Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Cross-links to the other portals */}
      <section className="py-12 border-t-2 border-foreground/10">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
            Wakeel for other roles
          </p>
          <div className="flex flex-wrap gap-2">
            {otherRoles.map((role) => (
              <Link
                key={role.href}
                href={role.href}
                className="inline-flex items-center gap-1 text-sm font-medium border-2 border-foreground/15 rounded px-3 py-1.5 hover:border-foreground/50 transition-colors"
              >
                {role.label}
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RolePage;
