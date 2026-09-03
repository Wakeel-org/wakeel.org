import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  Building2,
  CheckCircle2,
  Eye,
  FileText,
  Gavel,
  Landmark,
  MessageSquareText,
  Scale,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  UsersRound,
  Workflow,
} from "lucide-react";
import Layout from "../src/components/Layout";
import MarketingSEO from "../src/components/MarketingSEO";
import AppDownloadButtons from "../src/components/AppDownloadButtons";
import EmailSubscription from "../src/components/EmailSubscription";
import Disclaimer from "../src/components/Disclaimer";
import WebTrialDemo from "../src/components/WebTrialDemo";
import {
  audiences,
  featureCards,
  pricingPlans,
  site,
  team,
  trustFramework,
  values,
  visionMission,
} from "../src/data/marketing";
import { portals, portalByPath, planPortals, resolvePortalColors } from "../src/data/designSystem";
import { useTheme } from "../src/context/ThemeContext";
import styles from "../styles/HomeKitab.module.css";

// Core Values cycle through the same 6 portal colors used everywhere else
// on the site — decorative here rather than identity-bearing.
const VALUE_ACCENTS = [
  portals.citizen,
  portals.student,
  portals.lawyer,
  portals.lawFirm,
  portals.policymaker,
  portals.institution,
];

const homeSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Wakeel.org",
    alternateName: ["Wakeel AI", "AI Wakeel"],
    url: site.url,
    logo: `${site.url}/logo-og.png`,
    founder: {
      "@type": "Person",
      name: "Majid Hussain Malik",
      jobTitle: "Co-Founder",
      sameAs: ["https://www.linkedin.com/in/majidhussainmalik/"],
    },
    sameAs: [
      "https://www.facebook.com/aiwakeel",
      "https://www.instagram.com/wakeel_org",
      "https://www.linkedin.com/company/wakeelai/",
      site.androidUrl,
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: site.contactEmail,
      contactType: "customer support",
      areaServed: "PK",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Wakeel.org",
    alternateName: "Wakeel AI",
    applicationCategory: "LegalApplication",
    operatingSystem: "Web, Android, iOS",
    description: site.description,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "PKR",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Wakeel.org",
    alternateName: "Wakeel AI",
    url: site.url,
    description: site.description,
  },
];

const audienceIcons = {
  Citizens: Smartphone,
  "Law Students": BookOpen,
  Lawyers: Scale,
  "Law Firms": Briefcase,
  Judges: Gavel,
  Policymakers: Landmark,
  "Legal Institutions": Building2,
};

const featureIcons = [MessageSquareText, FileText, ShieldCheck, Scale, Sparkles];

// The homepage feature grid is trimmed to the 5 highest-intent items (see
// docs/HOMEPAGE-REDESIGN-2026.md / LANDING-CRO.md) — the rest live on
// /features behind the "Explore all features" link below.
const homeFeatureCards = featureCards.slice(0, 5);

const differentiationRows = [
  ["Single-turn reply, best guess", "Agentic — plans, researches & verifies in steps"],
  ["General web knowledge", "Pakistan-specific statutes & procedure"],
  ["English only, usually", "Plain English or Urdu"],
  ["No source discipline", "Source-aware, verify-first answers"],
  ["No legal review", "Reviewed by a practicing advocate"],
  ["Struggles past a few pages", "Analyzes documents 100+ pages long"],
];

// Illustrative only — clearly marked in the UI. Replace with real
// testimonials before this section ships (see docs/HOMEPAGE-REDESIGN-2026.md,
// Phase 7 — currently blocked on real quotes).
const testimonials = [
  {
    quote:
      "I used it to understand a legal notice at 11pm before deciding whether to reply. It broke the deadlines down clearly.",
    name: "[Placeholder name]",
    role: "Citizen, Lahore",
  },
  {
    quote: "Explaining PPC sections in Urdu made revision so much faster before my exam.",
    name: "[Placeholder name]",
    role: "Law student, Karachi",
  },
  {
    quote:
      "Useful for a first pass on client agreements — I still verify everything, but it saves an hour of reading.",
    name: "[Placeholder name]",
    role: "Advocate, Islamabad",
  },
];

const faqItems = [
  {
    q: "Is my document data safe when I upload it?",
    a: "Document processing is encrypted, and Wakeel is built to remind users to avoid uploading unnecessary sensitive data. Full detail lives in the Privacy Policy — worth a read before uploading anything you wouldn't want stored.",
  },
  {
    q: "What if Wakeel's answer is wrong?",
    a: "Every answer is source-aware and framed as legal information, not final advice. Wakeel builds in reminders to verify citations and consult a licensed advocate before filing, signing, paying, or appearing in court.",
  },
  {
    q: "Do I need to pay to get real value?",
    a: "No — the Free plan includes a daily legal-question allowance, Know Your Rights guidance, and basic document handling with no payment required. Paid tiers add document depth, drafting, and team workflows for heavier use.",
  },
  {
    q: "How is this different from ChatGPT or Google?",
    a: "Wakeel is grounded specifically in Pakistani statutes and procedure, answers in English or Urdu, and has its legal accuracy reviewed by a practicing advocate — rather than drawing generically from the open web.",
  },
  {
    q: "Does Wakeel replace a lawyer?",
    a: "No. Wakeel provides legal information and research support. It does not provide final legal advice, does not guarantee outcomes, and does not replace consultation with a licensed advocate.",
  },
  {
    q: "Is Wakeel a chatbot, or does it do more?",
    a: "More. Wakeel works agentically — it breaks your question into research steps, checks it against Pakistani statutes and case law, and only then composes an answer, instead of generating a single guessed reply the way a plain chatbot does.",
  },
];

export default function Home() {
  const { darkMode } = useTheme();
  const advocate = team.find((member) => member.role.includes("Advocate"));
  const pageClass = `${styles.page} ${darkMode ? styles.dark : ""}`;

  const homeKeywords = [
    "Wakeel AI",
    "AI Wakeel",
    "Wakeel AI app",
    "AI wakeel app Pakistan",
    "AI legal assistant Pakistan",
    "AI lawyer",
    "AI lawyer free",
    "lawyer AI",
    "free AI lawyer",
    "Pakistani law",
    "legal help Pakistan",
    "Wakeel",
    "Wakeel.org",
    "property law Pakistan",
    "family law Pakistan",
    "employment law Pakistan",
    "FIR Pakistan",
    "Pakistan legal information",
    "court procedures Pakistan",
  ].join(", ");

  const homeDescription =
    "Wakeel.org — also known as Wakeel AI — is Pakistan's AI lawyer and legal assistant. Ask legal questions in simple English or Urdu, understand legal documents, explore Pakistani laws, and get source-aware legal guidance on Android, iOS, and web.";

  return (
    <Layout>
      <MarketingSEO
        title="Wakeel AI — Pakistan's AI Lawyer & Legal Assistant | Wakeel.org"
        description={homeDescription}
        path="/"
        schema={homeSchema}
        keywords={homeKeywords}
        region="pk"
      />

      <div className={pageClass}>
        {/* Docket rail — desktop-only vertical section index, styled like
            binder tabs on a physical case file. Starts below the site's
            real sticky nav so the two never overlap. */}
        <nav className={styles.docketRail} aria-label="Section index">
          <span className={styles.docketMark}>CASE FILE</span>
          <div className={styles.docketScroll}>
            <div className={styles.docketList}>
              <a href="#hero">Cover</a>
              <a href="#demo">Consultation</a>
              <a href="#portals">Portals</a>
              <a href="#values">Values</a>
              <a href="#features">Capabilities</a>
              <a href="#pricing">Pricing</a>
              <a href="#faq">FAQ</a>
            </div>
          </div>
          <span className={styles.docketNum}>PK · EN/UR</span>
        </nav>

        {/* ================= HERO ================= */}
        <section id="hero" className={styles.hero}>
          <div className={`${styles.container} ${styles.railOffset}`}>
            <div className={styles.heroGrid}>
              <div>
                <span className={`${styles.heroStamp} ${styles.eyebrow}`}>
                  Wakeel.org · Agentic legal AI for Pakistan
                </span>
                <h1>Your AI lawyer and legal assistant, in your pocket.</h1>
                <p className={styles.heroSub}>
                  For citizens, law students, lawyers, and institutions — ask in English or Urdu.
                </p>
                <p className={styles.heroBody}>
                  Wakeel doesn&apos;t just reply — it works agentically: planning a research path,
                  checking it against Pakistani statutes and case law, and only then composing an
                  answer. Understand legal documents, explore Pakistani laws, and get source-aware
                  legal guidance built around Pakistan&apos;s legal system.
                </p>

                <div className={styles.heroProof}>
                  {advocate && (
                    <div className={styles.proofPill}>
                      <span className={styles.proofAvatar}>{advocate.initials}</span>
                      <span>
                        Legal accuracy reviewed by <strong>{advocate.name}</strong>, {advocate.role}
                      </span>
                    </div>
                  )}
                  <div className={styles.proofPill}>
                    <Workflow className="h-4 w-4" style={{ color: "var(--verified)" }} />
                    <span>
                      <strong>Agentic</strong> — plans &amp; verifies, not single-turn chat
                    </span>
                  </div>
                </div>

                <div className={styles.heroCta}>
                  <a href="#demo" className={styles.btnPrimary}>
                    Ask Wakeel — try it free below
                  </a>
                  <Link href="/legal-sources" className={styles.btnGhost}>
                    View Legal Sources →
                  </Link>
                </div>
                <p className={styles.heroMicro}>
                  Free to start — no signup needed for a sample question.
                </p>

                <div className={styles.heroDisclaimer}>
                  <Disclaimer />
                </div>
              </div>

              <div className={styles.demoShell} id="demo">
                <div className={styles.demoHead}>
                  <span>Sample consultation · Not legal advice</span>
                  <span>Docket #EN-UR-01</span>
                </div>
                <div className={styles.demoBody}>
                  <WebTrialDemo embedded />
                  <div className={styles.demoGetApp}>
                    <span className={styles.demoGetAppLabel}>Get the full agentic experience</span>
                    <AppDownloadButtons />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= TRUST STRIP ================= */}
        <section className={styles.trustStrip}>
          <div className={`${styles.container} ${styles.railOffset} ${styles.trustGrid}`}>
            {[
              { icon: ShieldCheck, label: "Built in Pakistan" },
              { icon: FileText, label: "Official legal sources" },
              { icon: ShieldCheck, label: "Encrypted document processing" },
              { icon: CheckCircle2, label: "Legal info, not a lawyer replacement" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className={styles.trustChip}>
                <Icon className="h-4 w-4" />
                {label}
              </div>
            ))}
          </div>
        </section>

        {/* ================= DIFFERENTIATION ================= */}
        <section className={styles.section}>
          <div className={`${styles.container} ${styles.railOffset} ${styles.diff}`}>
            <div>
              <p className={styles.eyebrow}>Why not just ask a generic chatbot?</p>
              <h2 style={{ marginTop: "0.6rem", fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
                Grounded in Pakistan&apos;s legal system, not the whole internet.
              </h2>
              <p className={styles.lede} style={{ marginTop: "1rem" }}>
                Generic AI chatbots answer from wherever the internet points them, in one shot.
                Wakeel works agentically — it plans a research path, checks it against Pakistani
                statutes and procedure, and only then composes an answer — so the gap between
                &ldquo;an answer&rdquo; and &ldquo;a usable answer&rdquo; is smaller.
              </p>
            </div>
            <div className={styles.diffTable}>
              <div className={styles.diffRow}>
                <div className={styles.diffCell}>Generic AI chatbot</div>
                <div className={styles.diffCell}>Wakeel.org</div>
              </div>
              {differentiationRows.map(([left, right]) => (
                <div key={left} className={styles.diffRow}>
                  <div className={styles.diffCell}>{left}</div>
                  <div className={styles.diffCell}>
                    <CheckCircle2 className="h-4 w-4" style={{ color: "var(--verified)", flexShrink: 0 }} />
                    {right}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= PORTALS / AUDIENCES ================= */}
        <section id="portals" className={styles.sectionSunk}>
          <div className={`${styles.container} ${styles.railOffset}`}>
            <div className={styles.sectionHead}>
              <p className={styles.eyebrowNeutral}>Seven portals, one legal system</p>
              <h2>Built for the people who use Pakistani law every day.</h2>
            </div>
            <div className={`${styles.grid} ${styles.grid4}`}>
              {audiences.map((audience) => {
                const Icon = audienceIcons[audience.title] || UsersRound;
                const portal = portals[portalByPath[audience.href]];
                const panelColors = resolvePortalColors(portal, darkMode);
                return (
                  <article
                    key={audience.href}
                    className={`${styles.card} ${styles.cardLift} ${styles.portalCard}`}
                    style={portal ? { borderTopColor: panelColors.primary } : undefined}
                  >
                    <div className={styles.portalHead}>
                      <div
                        className={styles.portalIcon}
                        style={
                          portal
                            ? { borderColor: panelColors.primary, background: panelColors.surface, color: panelColors.primary }
                            : undefined
                        }
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      {portal && (
                        <span
                          className={styles.portalStamp}
                          style={{ borderColor: panelColors.primary, color: panelColors.primary }}
                        >
                          {portal.label}
                        </span>
                      )}
                    </div>
                    <h3>{audience.title}</h3>
                    <p>{audience.description}</p>
                    <ul>
                      {audience.useCases.map((useCase) => (
                        <li key={useCase}>
                          <CheckCircle2 className="h-3.5 w-3.5" style={{ color: portal ? panelColors.primary : undefined }} />
                          {useCase}
                        </li>
                      ))}
                    </ul>
                    <Link href={audience.href} style={{ color: portal ? panelColors.primary : undefined }}>
                      Wakeel for {audience.title} <ArrowRight className="h-3.5 w-3.5" style={{ display: "inline" }} />
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= VISION & MISSION ================= */}
        <section className={styles.section}>
          <div className={`${styles.container} ${styles.railOffset}`}>
            <div className={styles.sectionHead} style={{ textAlign: "center", marginInline: "auto" }}>
              <p className={styles.eyebrow}>Why we exist</p>
              <h2>Our vision &amp; mission</h2>
            </div>
            <div className={`${styles.grid} ${styles.grid2}`}>
              {visionMission.map((item) => {
                const Icon = item.title === "Vision" ? Eye : Target;
                return (
                  <div key={item.title} className={`${styles.card} ${styles.cardLift}`} style={{ padding: "2rem" }}>
                    <div className={styles.portalIcon} style={{ borderColor: "var(--brand)", background: "var(--brand-tint)", color: "var(--brand)", width: "3.5rem", height: "3.5rem", marginBottom: "1.1rem" }}>
                      <Icon className="h-7 w-7" />
                    </div>
                    <p className={styles.eyebrow} style={{ marginBottom: "0.6rem" }}>{item.title}</p>
                    <p style={{ fontSize: "1.3rem", fontWeight: 600, lineHeight: 1.4, color: "var(--ink)" }}>{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= CORE VALUES ================= */}
        <section id="values" className={styles.sectionSunk}>
          <div className={`${styles.container} ${styles.railOffset}`}>
            <div className={styles.sectionHead} style={{ textAlign: "center", marginInline: "auto" }}>
              <p className={styles.eyebrowNeutral}>What guides the product</p>
              <h2>Core values for responsible legal AI.</h2>
            </div>
            <div className={`${styles.grid} ${styles.grid3}`}>
              {values.slice(0, 6).map((value, index) => {
                const accent = VALUE_ACCENTS[index % VALUE_ACCENTS.length];
                return (
                  <div
                    key={value.title}
                    className={`${styles.card} ${styles.cardLift} ${styles.valueCard}`}
                    style={{ borderTopColor: accent.primary }}
                  >
                    <span className={styles.dot} style={{ background: accent.primary }} aria-hidden="true" />
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </div>
                );
              })}
            </div>
            <div style={{ textAlign: "center", marginTop: "2.4rem" }}>
              <Link href="/values" className={styles.btnOutline}>View all values</Link>
            </div>
          </div>
        </section>

        {/* ================= FEATURES ================= */}
        <section id="features" className={styles.section}>
          <div className={`${styles.container} ${styles.railOffset}`}>
            <div className={styles.sectionHead} style={{ textAlign: "center", marginInline: "auto" }}>
              <p className={styles.eyebrow}>The highest-intent workflows</p>
              <h2>Legal information and research, in five moves.</h2>
            </div>
            <div className={`${styles.grid} ${styles.grid5}`}>
              {homeFeatureCards.map((feature, index) => {
                const Icon = featureIcons[index] || CheckCircle2;
                return (
                  <div key={feature.title} className={`${styles.card} ${styles.cardLift} ${styles.featureCard}`}>
                    <div className={styles.iconTile}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                );
              })}
            </div>
            <div style={{ textAlign: "center", marginTop: "2.4rem" }}>
              <Link href="/features" className={styles.btnOutline}>Explore all features →</Link>
            </div>
          </div>
        </section>

        {/* ================= TRUST & SAFETY ================= */}
        <section className={styles.sectionSunk}>
          <div className={`${styles.container} ${styles.railOffset}`}>
            <div style={{ maxWidth: "34rem", marginBottom: "2.5rem" }}>
              <p className={styles.eyebrowNeutral}>Trust and safety</p>
              <h2 style={{ fontSize: "clamp(1.75rem,3vw,2.5rem)", marginTop: "0.6rem" }}>
                Designed for careful legal understanding.
              </h2>
              <p className={styles.lede} style={{ marginTop: "1rem" }}>
                Wakeel is useful when it helps people ask better questions, read documents more
                clearly, and verify sources before acting.
              </p>
            </div>
            <div className={`${styles.grid} ${styles.grid2}`}>
              {trustFramework.map((point) => (
                <div key={point} className={styles.card} style={{ padding: "1.1rem", display: "flex", gap: "0.7rem", alignItems: "flex-start" }}>
                  <CheckCircle2 className="h-5 w-5" style={{ color: "var(--verified)", flexShrink: 0, marginTop: "0.15rem" }} />
                  <p style={{ fontSize: "0.87rem", color: "var(--ink-soft)" }}>{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= TESTIMONIALS (PLACEHOLDER) ================= */}
        <section className={styles.section}>
          <div className={`${styles.container} ${styles.railOffset}`}>
            <div className={styles.sectionHead}>
              <p className={styles.eyebrow}>
                Word from early users <span className={styles.placeholderBadge}>Illustrative — replace with real quotes</span>
              </p>
              <h2>What people are asking Wakeel.</h2>
            </div>
            <div className={`${styles.grid} ${styles.grid3}`}>
              {testimonials.map((t) => (
                <div key={t.quote} className={`${styles.card} ${styles.cardLift} ${styles.testiCard}`}>
                  <p className={styles.testiQuote}>&ldquo;{t.quote}&rdquo;</p>
                  <div className={styles.testiWho}>
                    <span className={styles.testiAvatar}>[N]</span>
                    <div>
                      <p className={styles.testiName}>{t.name}</p>
                      <p className={styles.testiRole}>{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= PRICING ================= */}
        <section id="pricing" className={styles.sectionSunk}>
          <div className={`${styles.container} ${styles.railOffset}`}>
            <div className={styles.sectionHead} style={{ textAlign: "center", marginInline: "auto", maxWidth: "42rem" }}>
              <p className={styles.eyebrowNeutral}>Simple, role-based pricing</p>
              <h2>Plans for learning, practice, and teams.</h2>
              <p className={styles.lede} style={{ marginTop: "1rem" }}>
                Start free and choose the workflow that fits your role. Exact paid access may be
                confirmed inside the app or during organization onboarding.
              </p>
            </div>
            <div className={`${styles.grid} ${styles.grid5}`}>
              {pricingPlans.map((plan) => {
                const portal = planPortals[plan.name];
                const panelColors = resolvePortalColors(portal, darkMode);
                return (
                  <div
                    key={plan.name}
                    className={`${styles.card} ${styles.cardLift} ${styles.priceCard}`}
                    style={portal ? { borderTopColor: panelColors.primary } : undefined}
                  >
                    {portal && (
                      <span className={styles.portalStamp} style={{ borderColor: panelColors.primary, color: panelColors.primary, width: "fit-content" }}>
                        {portal.label}
                      </span>
                    )}
                    <p className={styles.priceAmount}>{plan.monthlyPrice}</p>
                    <p className={styles.priceNote}>{plan.priceNote}</p>
                    <h3 style={{ fontSize: "1.2rem", color: "var(--ink)" }}>{plan.name}</h3>
                    <p style={{ fontSize: "0.83rem", color: "var(--ink-soft)" }}>{plan.description}</p>
                    <ul>
                      {plan.features.map((feature) => (
                        <li key={feature}>
                          <CheckCircle2 className="h-3.5 w-3.5" style={{ color: portal ? panelColors.primary : "var(--brand)", flexShrink: 0 }} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    {plan.href.startsWith("http") ? (
                      <a
                        href={plan.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.btnOutline} ${styles.btnSm} ${styles.btnBlock}`}
                        style={portal ? { borderColor: panelColors.primary, color: panelColors.primary } : undefined}
                      >
                        {plan.cta}
                      </a>
                    ) : (
                      <Link
                        href={plan.href}
                        className={`${styles.btnOutline} ${styles.btnSm} ${styles.btnBlock}`}
                        style={portal ? { borderColor: panelColors.primary, color: panelColors.primary } : undefined}
                      >
                        {plan.cta}
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
            <div style={{ textAlign: "center", marginTop: "2.4rem" }}>
              <Link href="/pricing" className={styles.btnGhost}>Compare plans →</Link>
            </div>
          </div>
        </section>

        {/* ================= FAQ ================= */}
        <section id="faq" className={styles.section}>
          <div className={`${styles.container} ${styles.railOffset}`}>
            <div className={styles.sectionHead}>
              <p className={styles.eyebrow}>Before you ask</p>
              <h2>Frequently asked questions.</h2>
            </div>
            <div className={styles.faq}>
              {faqItems.map((item) => (
                <details key={item.q} className={styles.faqItem}>
                  <summary>
                    {item.q}
                    <span className={styles.faqIcon}>+</span>
                  </summary>
                  <p className={styles.faqAnswer}>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className={styles.finalCta}>
          <svg className={styles.finalStamp} viewBox="0 0 200 200" aria-hidden="true">
            <circle cx="100" cy="100" r="92" fill="none" stroke="#e8b563" strokeWidth="1.5" />
            <circle cx="100" cy="100" r="76" fill="none" stroke="#e8b563" strokeWidth="1" />
            <path id="homeCtaSealPath" d="M100,24 a76,76 0 1 1 -0.1,0" fill="none" />
            <text fontFamily="monospace" fontSize="8.5" fontWeight="700" letterSpacing="3" fill="#e8b563">
              <textPath href="#homeCtaSealPath" startOffset="0%">
                WAKEEL.ORG · AGENTIC LEGAL AI · VERIFIED · SOURCE-AWARE ·{" "}
              </textPath>
            </text>
            <path d="M78 100l14 14 30-30" fill="none" stroke="#e8b563" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          <div className={`${styles.container} ${styles.railOffset} ${styles.finalGrid}`} style={{ paddingBlock: "clamp(3.5rem, 7vw, 6.5rem)" }}>
            <div>
              <p className={styles.eyebrow} style={{ color: "#e8b563" }}>Get started free</p>
              <h2 style={{ marginTop: "0.6rem", fontSize: "clamp(1.9rem, 3.6vw, 2.9rem)", color: "#f4f7fb" }}>
                Start understanding Pakistani law with Wakeel.org.
              </h2>
              <p style={{ marginTop: "1rem", maxWidth: "32rem", color: "rgba(244,247,251,0.78)" }}>
                Ask legal questions in English or Urdu, understand documents up to 100+ pages, and
                verify sources before taking important legal steps.
              </p>

              <div className={styles.finalBadges}>
                <span className={styles.finalPill}>
                  <Workflow className="h-3.5 w-3.5" style={{ color: "#e8b563" }} />
                  Agentic — plans &amp; verifies, not single-turn chat
                </span>
                {advocate && (
                  <span className={styles.finalPill}>
                    <CheckCircle2 className="h-3.5 w-3.5" style={{ color: "#e8b563" }} />
                    Reviewed by {advocate.name}, {advocate.role}
                  </span>
                )}
              </div>

              <div className={styles.finalActions}>
                <a
                  href={site.appUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.btnPrimary}
                  style={{ background: "#e8b563", borderColor: "#e8b563", color: "#1a1206" }}
                >
                  Try Wakeel Free
                </a>
                <AppDownloadButtons className="[&_button]:bg-white/5 [&_button]:border-white/25 [&_button]:text-white [&_button:hover]:bg-white/10 [&_svg]:text-white" />
              </div>
            </div>

            <div className={styles.finalSide}>
              <p className={styles.eyebrow} style={{ color: "#e8b563", marginBottom: "0.8rem" }}>Stay in the loop</p>
              <p style={{ fontSize: "1.125rem", fontWeight: 600, marginBottom: "0.25rem", color: "#f4f7fb" }}>No spam, ever.</p>
              <p style={{ fontSize: "0.85rem", marginBottom: "1.15rem", color: "rgba(244,247,251,0.72)" }}>
                One email when Wakeel ships something worth knowing about — new legal guides, features, or portals.
              </p>
              <EmailSubscription />
              <p style={{ marginTop: "1rem", fontSize: "0.72rem", color: "rgba(244,247,251,0.55)" }}>
                Legal information, not a lawyer replacement.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
