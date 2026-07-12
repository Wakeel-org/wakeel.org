# Graph Report - .  (2026-06-27)

## Corpus Check
- 109 files · ~76,941 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 371 nodes · 777 edges · 32 communities (22 shown, 10 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 17 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_UI Pages & Components|UI Pages & Components]]
- [[_COMMUNITY_Marketing Content & Data|Marketing Content & Data]]
- [[_COMMUNITY_Beta Waitlist & Firebase Integration|Beta Waitlist & Firebase Integration]]
- [[_COMMUNITY_Project Dependencies|Project Dependencies]]
- [[_COMMUNITY_Navigation & Landing UI|Navigation & Landing UI]]
- [[_COMMUNITY_Design System & SEO Docs|Design System & SEO Docs]]
- [[_COMMUNITY_TypeScript Configuration|TypeScript Configuration]]
- [[_COMMUNITY_Deployment & SEO Docs|Deployment & SEO Docs]]
- [[_COMMUNITY_PWA Web App Manifest|PWA Web App Manifest]]
- [[_COMMUNITY_Competitor Comparison Pages|Competitor Comparison Pages]]
- [[_COMMUNITY_Dynamic Legal Guide System|Dynamic Legal Guide System]]
- [[_COMMUNITY_Brand Identity & Logos|Brand Identity & Logos]]
- [[_COMMUNITY_Journal & Firebase Data|Journal & Firebase Data]]
- [[_COMMUNITY_Platform Detection|Platform Detection]]
- [[_COMMUNITY_UI Icon Assets|UI Icon Assets]]
- [[_COMMUNITY_Dark Theme Logo|Dark Theme Logo]]
- [[_COMMUNITY_API Service Layer|API Service Layer]]
- [[_COMMUNITY_ESLint Config|ESLint Config]]
- [[_COMMUNITY_Firebase Config Module|Firebase Config Module]]
- [[_COMMUNITY_Next.js Config JS|Next.js Config JS]]
- [[_COMMUNITY_Next.js Config TS|Next.js Config TS]]
- [[_COMMUNITY_PostCSS Config|PostCSS Config]]
- [[_COMMUNITY_Framework Brand Assets|Framework Brand Assets]]
- [[_COMMUNITY_Project README|Project README]]

## God Nodes (most connected - your core abstractions)
1. `Button` - 25 edges
2. `Card` - 25 edges
3. `CardContent` - 25 edges
4. `CardHeader` - 22 edges
5. `CardTitle` - 22 edges
6. `Layout()` - 18 edges
7. `site` - 17 edges
8. `compilerOptions` - 16 edges
9. `MarketingSEO()` - 13 edges
10. `MarketingPage()` - 12 edges

## Surprising Connections (you probably didn't know these)
- `Firebase Hosting Merge Deploy Job` --references--> `Firebase Hosting Deployment (asia-east1)`  [INFERRED]
  .github/workflows/firebase-hosting-merge.yml → docs/PRODUCTION-DEPLOYMENT-GUIDE.md
- `Firebase Hosting PR Preview Job` --references--> `Firebase Hosting Deployment (asia-east1)`  [INFERRED]
  .github/workflows/firebase-hosting-pull-request.yml → docs/PRODUCTION-DEPLOYMENT-GUIDE.md
- `Wakeel AI Legal Assistant Service` --conceptually_related_to--> `Wakeel.org Brand Identity`  [INFERRED]
  public/llms.txt → docs/DESIGN-SYSTEM.md
- `Geographic Meta Tags (GEO Targeting)` --semantically_similar_to--> `Hreflang Tags for Pakistan (en-PK, ur-PK)`  [INFERRED] [semantically similar]
  docs/RESPONSIVE-SEO-IMPLEMENTATION.md → docs/SEO-OPTIMIZATION-PHASE-1.md
- `llms.txt AI Context File` --references--> `Legal Issues Hub Pakistan (/legal-issues-pakistan)`  [EXTRACTED]
  public/llms.txt → docs/SEO-OPTIMIZATION-PHASE-1.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Three-Phase Global Legal Content Expansion (Pakistan → GCC → Global)** — docs_seo_optimization_phase_1_phase1_pakistan, docs_seo_optimization_phase_2_phase2_gcc, docs_seo_optimization_phase_3_phase3_global [EXTRACTED 1.00]
- **Three Legal Issue Hub Pages (Pakistan + GCC + Global)** — docs_seo_optimization_phase_1_legal_issues_hub_pakistan, docs_seo_optimization_phase_2_legal_issues_hub_gcc, docs_seo_optimization_phase_3_legal_issues_hub_global [EXTRACTED 1.00]
- **SEO/GEO/AI Discoverability Stack (robots.txt + geo tags + schema + llms.txt)** — public_robots_txt_robots_txt, docs_responsive_seo_implementation_geo_tags, docs_responsive_seo_implementation_schema_org, llms_llms_txt_llms_txt [INFERRED 0.85]

## Communities (32 total, 10 thin omitted)

### Community 0 - "UI Pages & Components"
Cohesion: 0.09
Nodes (36): focusAreas, features, footerColumns, Layout(), MarketingSEO(), pricingPlans, values, audiences (+28 more)

### Community 1 - "Marketing Content & Data"
Cohesion: 0.07
Nodes (23): AboutPage(), makePageSchema(), makePageSchema(), MarketingPage(), audiences, corePages, examplePrompts, featureCards (+15 more)

### Community 2 - "Beta Waitlist & Firebase Integration"
Cohesion: 0.13
Nodes (27): BetaLaunchPopup(), BetaWhitelistSection(), ContactSalesModal(), EmailSubscription(), apps, db, firebaseConfig, clearCollections() (+19 more)

### Community 3 - "Project Dependencies"
Cohesion: 0.05
Nodes (38): dependencies, axios, class-variance-authority, classnames, clsx, firebase, @heroicons/react, lodash (+30 more)

### Community 4 - "Navigation & Landing UI"
Cohesion: 0.15
Nodes (13): AppDownloadButtons(), Hero(), Navigation(), navLinks, Pricing(), PricingModal(), ThemeToggle(), ThemeContext (+5 more)

### Community 5 - "Design System & SEO Docs"
Cohesion: 0.12
Nodes (21): Wakeel.org Brand Identity, Design System Color System (HSL CSS Variables), Lucide React Icon Library, Space Grotesk Typography, Theme Context Pattern (Dark/Light Mode), Wakeel.org Design System, Hreflang Tags for Pakistan (en-PK, ur-PK), Legal Issues Hub Pakistan (/legal-issues-pakistan) (+13 more)

### Community 6 - "TypeScript Configuration"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 7 - "Deployment & SEO Docs"
Cohesion: 0.13
Nodes (19): Component Structure (Navigation/Layout/Pricing/Hero/BetaComponents), Wakeel.org Development Tracker, Firestore Database Collections, Tech Stack (Next.js 14 / Firebase / Tailwind / Radix UI), Beta Features (Commented-Out, Preserved), Wakeel.org Production Deployment Guide v2.1.0, Firebase Hosting Deployment (asia-east1), Geographic Meta Tags (GEO Targeting) (+11 more)

### Community 8 - "PWA Web App Manifest"
Cohesion: 0.11
Nodes (17): background_color, categories, description, dir, display, icons, lang, name (+9 more)

### Community 10 - "Dynamic Legal Guide System"
Cohesion: 0.29
Nodes (5): GuidePage(), makeFaqs(), makeKeywords(), makeSchemas(), HeroSafetyNote()

### Community 11 - "Brand Identity & Logos"
Cohesion: 0.33
Nodes (9): Arabic Calligraphy - Al-Wakeel, Arabic Calligraphy Typography Style, Dark Ink on Light Background Color Scheme, Wakeel.org Light Logo, Wakeel.org OG Logo Image, Tagline: The Trustee, The Disposer of Affairs, Tagline: The Trustee, The Disposer of Affairs, Wakeel Brand Identity (+1 more)

### Community 13 - "Platform Detection"
Cohesion: 1.00
Nodes (3): detectPlatform() Utility, openPlatformAppStore() Utility, Platform-Aware App Store Implementation

### Community 14 - "UI Icon Assets"
Cohesion: 0.67
Nodes (3): File/Document Icon, Globe/World Icon, Browser Window / Desktop App Icon

### Community 15 - "Dark Theme Logo"
Cohesion: 1.00
Nodes (3): Arabic Calligraphy - Al-Wakeel, Wakeel.org Dark Theme Logo, Tagline - The Trustee, The Disposer of Affairs

## Knowledge Gaps
- **136 isolated node(s):** `extends`, `nextConfig`, `nextConfig`, `name`, `version` (+131 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **10 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Button` connect `UI Pages & Components` to `Marketing Content & Data`, `Beta Waitlist & Firebase Integration`, `Dynamic Legal Guide System`, `Navigation & Landing UI`?**
  _High betweenness centrality (0.026) - this node is a cross-community bridge._
- **Why does `Card` connect `UI Pages & Components` to `Marketing Content & Data`, `Beta Waitlist & Firebase Integration`, `Dynamic Legal Guide System`, `Navigation & Landing UI`?**
  _High betweenness centrality (0.017) - this node is a cross-community bridge._
- **Why does `CardContent` connect `UI Pages & Components` to `Marketing Content & Data`, `Beta Waitlist & Firebase Integration`, `Dynamic Legal Guide System`, `Navigation & Landing UI`?**
  _High betweenness centrality (0.017) - this node is a cross-community bridge._
- **What connects `extends`, `nextConfig`, `nextConfig` to the rest of the system?**
  _136 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `UI Pages & Components` be split into smaller, more focused modules?**
  _Cohesion score 0.08811551277304702 - nodes in this community are weakly interconnected._
- **Should `Marketing Content & Data` be split into smaller, more focused modules?**
  _Cohesion score 0.07397959183673469 - nodes in this community are weakly interconnected._
- **Should `Beta Waitlist & Firebase Integration` be split into smaller, more focused modules?**
  _Cohesion score 0.12685560053981107 - nodes in this community are weakly interconnected._