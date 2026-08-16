# Graph Report - .  (2026-08-17)

## Corpus Check
- 88 files · ~221,052 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 745 nodes · 1458 edges · 77 communities (69 shown, 8 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 26 edges (avg confidence: 0.87)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Article Pages & Guide System|Article Pages & Guide System]]
- [[_COMMUNITY_Beta Waitlist & Firebase Integration|Beta Waitlist & Firebase Integration]]
- [[_COMMUNITY_Project Dependencies|Project Dependencies]]
- [[_COMMUNITY_AI vs Lawyer Pakistan Articles|AI vs Lawyer Pakistan Articles]]
- [[_COMMUNITY_Marketing Audit & CRO Docs|Marketing Audit & CRO Docs]]
- [[_COMMUNITY_Deployment & SEO Documentation|Deployment & SEO Documentation]]
- [[_COMMUNITY_Trust Strip & Demo Components|Trust Strip & Demo Components]]
- [[_COMMUNITY_Comparison & Pricing Features|Comparison & Pricing Features]]
- [[_COMMUNITY_Navigation & Landing UI|Navigation & Landing UI]]
- [[_COMMUNITY_Marketing Pages & Core Content|Marketing Pages & Core Content]]
- [[_COMMUNITY_Competitor Comparison Articles|Competitor Comparison Articles]]
- [[_COMMUNITY_TypeScript Configuration|TypeScript Configuration]]
- [[_COMMUNITY_PWA Web App Manifest|PWA Web App Manifest]]
- [[_COMMUNITY_Layout & Navigation Components|Layout & Navigation Components]]
- [[_COMMUNITY_Pricing & Disclaimer Pages|Pricing & Disclaimer Pages]]
- [[_COMMUNITY_Brand Identity & Logos|Brand Identity & Logos]]
- [[_COMMUNITY_Best AI Legal Apps Article|Best AI Legal Apps Article]]
- [[_COMMUNITY_AI Document Review Article|AI Document Review Article]]
- [[_COMMUNITY_Legal Sections (Dafaat) Article|Legal Sections (Dafaat) Article]]
- [[_COMMUNITY_Free Legal Advice Article|Free Legal Advice Article]]
- [[_COMMUNITY_AI vs Lawyer Decision Article|AI vs Lawyer Decision Article]]
- [[_COMMUNITY_AI Assistant vs Lawyer Guide|AI Assistant vs Lawyer Guide]]
- [[_COMMUNITY_AI Contract Review Article|AI Contract Review Article]]
- [[_COMMUNITY_AI Help vs Real Lawyer Article|AI Help vs Real Lawyer Article]]
- [[_COMMUNITY_AI Legal Research Tools Article|AI Legal Research Tools Article]]
- [[_COMMUNITY_AI vs Lawyer Choice Article|AI vs Lawyer Choice Article]]
- [[_COMMUNITY_Best Legal Apps Citizens Article|Best Legal Apps Citizens Article]]
- [[_COMMUNITY_Can AI Replace Lawyer Article|Can AI Replace Lawyer Article]]
- [[_COMMUNITY_Civil Law Pakistan Guide|Civil Law Pakistan Guide]]
- [[_COMMUNITY_Civil Suit Pakistan Article|Civil Suit Pakistan Article]]
- [[_COMMUNITY_Constitution Fundamental Rights Article|Constitution Fundamental Rights Article]]
- [[_COMMUNITY_Consumer Complaint Pakistan Article|Consumer Complaint Pakistan Article]]
- [[_COMMUNITY_Criminal Law Pakistan Guide|Criminal Law Pakistan Guide]]
- [[_COMMUNITY_Draft Legal Contract Article|Draft Legal Contract Article]]
- [[_COMMUNITY_Family Law Rights Article|Family Law Rights Article]]
- [[_COMMUNITY_FIR Registration Step-by-Step|FIR Registration Step-by-Step]]
- [[_COMMUNITY_How Courts Work Pakistan|How Courts Work Pakistan]]
- [[_COMMUNITY_Complete FIR Registration Article|Complete FIR Registration Article]]
- [[_COMMUNITY_How to Register FIR Article|How to Register FIR Article]]
- [[_COMMUNITY_NADRA Biometric Verification|NADRA Biometric Verification]]
- [[_COMMUNITY_NCCIA Cyber Crime Complaint|NCCIA Cyber Crime Complaint]]
- [[_COMMUNITY_Nikah Nama Registration Article|Nikah Nama Registration Article]]
- [[_COMMUNITY_Pakistan Legal System Guide|Pakistan Legal System Guide]]
- [[_COMMUNITY_Pakistani vs Common Law Article|Pakistani vs Common Law Article]]
- [[_COMMUNITY_Property Dispute Lawyer Article|Property Dispute Lawyer Article]]
- [[_COMMUNITY_Property Transfer Mutation Article|Property Transfer Mutation Article]]
- [[_COMMUNITY_Section 420 PPC Fraud Article|Section 420 PPC Fraud Article]]
- [[_COMMUNITY_Tenant Rights Rent Law Article|Tenant Rights Rent Law Article]]
- [[_COMMUNITY_Understand Legal Document Article|Understand Legal Document Article]]
- [[_COMMUNITY_Legal Notices Pakistan Article|Legal Notices Pakistan Article]]
- [[_COMMUNITY_Wakeel AI for Law Students|Wakeel AI for Law Students]]
- [[_COMMUNITY_FIR Rights & Myths Article|FIR Rights & Myths Article]]
- [[_COMMUNITY_Writ Jurisdiction High Courts|Writ Jurisdiction High Courts]]
- [[_COMMUNITY_Wrongful Termination Pakistan|Wrongful Termination Pakistan]]
- [[_COMMUNITY_Exit Control List (ECL) Article|Exit Control List (ECL) Article]]
- [[_COMMUNITY_Contact Page|Contact Page]]
- [[_COMMUNITY_Design System Docs|Design System Docs]]
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
1. `Button` - 67 edges
2. `Card` - 67 edges
3. `CardContent` - 67 edges
4. `CardHeader` - 63 edges
5. `CardTitle` - 63 edges
6. `site` - 61 edges
7. `Layout()` - 60 edges
8. `compilerOptions` - 16 edges
9. `MarketingPage()` - 12 edges
10. `corePages` - 12 edges

## Surprising Connections (you probably didn't know these)
- `Social Proof Section (CRO Score 3/10)` --semantically_similar_to--> `Social Proof Gap — Zero Testimonials, App Ratings, User Counts, or Press Mentions Site-Wide`  [INFERRED] [semantically similar]
  LANDING-CRO.md → docs/MARKETING-AUDIT.md
- `CTA Platform Routing Issue — Android Play Store Hardcoded for All Visitors` --semantically_similar_to--> `No-Install Web Trial Recommendation — In-Browser Question Box Bypassing App-Store`  [INFERRED] [semantically similar]
  LANDING-CRO.md → docs/MARKETING-AUDIT.md
- `NAZ Assist — Free NGO-Backed Multilingual Legal Chatbot (Legal Aid Society)` --conceptually_related_to--> `Wakeel.org — AI-Powered Bilingual (English/Urdu) Legal Assistant`  [INFERRED]
  docs/MARKETING-AUDIT.md → public/llms.txt
- `Brand Naming Collision Risk — Near-Identical Rival Product in Same Category` --conceptually_related_to--> `Wakeel.org — AI-Powered Bilingual (English/Urdu) Legal Assistant`  [INFERRED]
  docs/MARKETING-AUDIT.md → public/llms.txt
- `getStaticProps()` --calls--> `getBlogPostsServer()`  [EXTRACTED]
  pages/journal.js → src/lib/firebase/admin-collections.js

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **AI Discoverability Contradiction — Site Invites AI Crawlers but Journal Content is Invisible to Them** — docs_marketing_audit_journal_ssr_issue, docs_marketing_audit_robots_txt_ai_crawlers, public_llms_txt_journal_articles [EXTRACTED 1.00]
- **App-Store Conversion Friction — Hardcoded Android Link Blocks iOS/Desktop Visitors** — landing_cro_cta_routing_issue, landing_cro_site_app_url, docs_marketing_audit_no_install_web_trial [INFERRED 0.95]
- **Trust Infrastructure Deficit — Single Advocate Credential Cannot Carry Entire Trust Burden for Legal AI** — landing_cro_advocate_credential, landing_cro_social_proof_section, docs_marketing_audit_social_proof_gap [INFERRED 0.95]

## Communities (77 total, 8 thin omitted)

### Community 0 - "Article Pages & Guide System"
Cohesion: 0.06
Nodes (32): ArticlePage(), calculateReadTime(), formatDate(), getStaticPaths(), getStaticProps(), getRelatedTitle(), GuidePage(), makeFaqs() (+24 more)

### Community 1 - "Beta Waitlist & Firebase Integration"
Cohesion: 0.08
Nodes (28): BetaLaunchPopup(), BetaWhitelistSection(), ContactSalesModal(), EmailSubscription(), apps, db, firebaseConfig, clearCollections() (+20 more)

### Community 2 - "Project Dependencies"
Cohesion: 0.05
Nodes (38): dependencies, axios, class-variance-authority, classnames, clsx, firebase, @heroicons/react, lodash (+30 more)

### Community 3 - "AI vs Lawyer Pakistan Articles"
Cohesion: 0.08
Nodes (19): aiDoesWell, comparisonRows, faqs, keywords, onlyLawyerCan, schema, useAiWhen, useLawyerWhen (+11 more)

### Community 4 - "Marketing Audit & CRO Docs"
Cohesion: 0.09
Nodes (30): Brand Naming Collision Risk — Near-Identical Rival Product in Same Category, Disclaimer Language Overuse — Full Block Repeated Near-Verbatim on Every Page Near CTAs, Marketing Audit — Wakeel.org (Overall Score 53/100, Grade D), Journal Page SSR Issue — Client-Render Only Shell, Invisible to Non-JS Crawlers, JSON-LD Structured Data Recommendation — Organization, SoftwareApplication, FAQPage Schemas, NAZ Assist — Free NGO-Backed Multilingual Legal Chatbot (Legal Aid Society), No-Install Web Trial Recommendation — In-Browser Question Box Bypassing App-Store, Pricing Gap — ~25x Jump from Student (PKR 199) to Professional (PKR 4,999) with No Middle Tier (+22 more)

### Community 5 - "Deployment & SEO Documentation"
Cohesion: 0.08
Nodes (29): Component Structure (Navigation/Layout/Pricing/Hero/BetaComponents), Wakeel.org Development Tracker, Firestore Database Collections, Tech Stack (Next.js 14 / Firebase / Tailwind / Radix UI), Beta Features (Commented-Out, Preserved), Wakeel.org Production Deployment Guide v2.1.0, Firebase Hosting Deployment (asia-east1), Geographic Meta Tags (GEO Targeting) (+21 more)

### Community 6 - "Trust Strip & Demo Components"
Cohesion: 0.11
Nodes (22): advocate, TrustStrip(), WebTrialDemo(), audiences, demoQA, examplePrompts, featureCards, footerPrimaryLinks (+14 more)

### Community 7 - "Comparison & Pricing Features"
Cohesion: 0.20
Nodes (13): evaluationCriteria, features, pricingPlans, values, audiences, schema, services, Card (+5 more)

### Community 8 - "Navigation & Landing UI"
Cohesion: 0.13
Nodes (15): AppDownloadButtons(), Hero(), Pricing(), PricingModal(), ThemeToggle(), ThemeContext, ThemeProvider(), useTheme() (+7 more)

### Community 9 - "Marketing Pages & Core Content"
Cohesion: 0.16
Nodes (3): makePageSchema(), MarketingPage(), corePages

### Community 10 - "Competitor Comparison Articles"
Cohesion: 0.17
Nodes (6): ComparisonPage(), makeFaqs(), makeSchemas(), rows, wakeelStrengths, comparisons

### Community 11 - "TypeScript Configuration"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 12 - "PWA Web App Manifest"
Cohesion: 0.11
Nodes (17): background_color, categories, description, dir, display, icons, lang, name (+9 more)

### Community 13 - "Layout & Navigation Components"
Cohesion: 0.23
Nodes (4): footerColumns, Layout(), Navigation(), navLinks

### Community 14 - "Pricing & Disclaimer Pages"
Cohesion: 0.22
Nodes (7): Disclaimer(), pricingFaqs, pricingPlans, billingNotes, comparisonRows, planGuidance, schema

### Community 15 - "Brand Identity & Logos"
Cohesion: 0.33
Nodes (9): Arabic Calligraphy - Al-Wakeel, Arabic Calligraphy Typography Style, Dark Ink on Light Background Color Scheme, Wakeel.org Light Logo, Wakeel.org OG Logo Image, Tagline: The Trustee, The Disposer of Affairs, Tagline: The Trustee, The Disposer of Affairs, Wakeel Brand Identity (+1 more)

### Community 16 - "Best AI Legal Apps Article"
Cohesion: 0.25
Nodes (6): apps, comparisonRows, criteria, faqs, keywords, schema

### Community 17 - "AI Document Review Article"
Cohesion: 0.25
Nodes (6): canDo, cannotDo, checklist, faqs, keywords, schema

### Community 18 - "Legal Sections (Dafaat) Article"
Cohesion: 0.25
Nodes (6): crpcSections, faqs, keywords, ppcSections, schema, useNotes

### Community 19 - "Free Legal Advice Article"
Cohesion: 0.25
Nodes (6): commonIssues, faqs, freeHelpSources, freeWithWakeel, keywords, schema

### Community 20 - "AI vs Lawyer Decision Article"
Cohesion: 0.25
Nodes (6): faqs, keywords, questions, schema, useAiWhen, useLawyerWhen

### Community 21 - "AI Assistant vs Lawyer Guide"
Cohesion: 0.25
Nodes (6): decisionChecklist, faqs, goodFitScenarios, keywords, lawyerFirstScenarios, schema

### Community 22 - "AI Contract Review Article"
Cohesion: 0.29
Nodes (5): faqs, keywords, limits, schema, whatItDoes

### Community 23 - "AI Help vs Real Lawyer Article"
Cohesion: 0.29
Nodes (5): faqs, keywords, schema, whyBoth, workflow

### Community 24 - "AI Legal Research Tools Article"
Cohesion: 0.29
Nodes (5): criteria, faqs, keywords, schema, useCases

### Community 25 - "AI vs Lawyer Choice Article"
Cohesion: 0.29
Nodes (5): costFactors, faqs, keywords, rightForYouIf, schema

### Community 26 - "Best Legal Apps Citizens Article"
Cohesion: 0.29
Nodes (5): categories, criteria, faqs, keywords, schema

### Community 27 - "Can AI Replace Lawyer Article"
Cohesion: 0.29
Nodes (5): faqs, keywords, schema, whatAiCanDoToday, whyNotReasons

### Community 28 - "Civil Law Pakistan Guide"
Cohesion: 0.29
Nodes (5): faqs, keywords, schema, statutes, suitStages

### Community 29 - "Civil Suit Pakistan Article"
Cohesion: 0.29
Nodes (5): beforeFiling, faqs, keywords, schema, steps

### Community 30 - "Constitution Fundamental Rights Article"
Cohesion: 0.29
Nodes (5): enforcement, faqs, keywords, rights, schema

### Community 31 - "Consumer Complaint Pakistan Article"
Cohesion: 0.29
Nodes (5): faqs, keywords, schema, steps, whoCanFile

### Community 32 - "Criminal Law Pakistan Guide"
Cohesion: 0.29
Nodes (5): distinctions, faqs, keywords, schema, statutes

### Community 33 - "Draft Legal Contract Article"
Cohesion: 0.29
Nodes (5): essentials, faqs, keywords, schema, templateRisks

### Community 34 - "Family Law Rights Article"
Cohesion: 0.29
Nodes (5): beforeCourt, faqs, keywords, schema, topics

### Community 35 - "FIR Registration Step-by-Step"
Cohesion: 0.29
Nodes (5): commonMistakes, faqs, keywords, schema, steps

### Community 36 - "How Courts Work Pakistan"
Cohesion: 0.29
Nodes (5): faqs, filingBasics, hierarchy, keywords, schema

### Community 37 - "Complete FIR Registration Article"
Cohesion: 0.29
Nodes (5): beforeYouLeave, faqs, keywords, mustHave, schema

### Community 38 - "How to Register FIR Article"
Cohesion: 0.29
Nodes (5): commonMistakes, faqs, keywords, schema, steps

### Community 39 - "NADRA Biometric Verification"
Cohesion: 0.29
Nodes (5): commonCauses, faqs, keywords, resolutionSteps, schema

### Community 40 - "NCCIA Cyber Crime Complaint"
Cohesion: 0.29
Nodes (5): evidenceChecklist, faqs, keywords, schema, steps

### Community 41 - "Nikah Nama Registration Article"
Cohesion: 0.29
Nodes (5): beforeSigning, essentials, faqs, keywords, schema

### Community 42 - "Pakistan Legal System Guide"
Cohesion: 0.29
Nodes (5): faqs, keywords, misconceptions, pillars, schema

### Community 43 - "Pakistani vs Common Law Article"
Cohesion: 0.29
Nodes (5): faqs, foundations, keywords, quickCompare, schema

### Community 44 - "Property Dispute Lawyer Article"
Cohesion: 0.29
Nodes (5): faqs, keywords, redFlags, schema, vettingCriteria

### Community 45 - "Property Transfer Mutation Article"
Cohesion: 0.29
Nodes (5): beforeBuying, faqs, keywords, schema, steps

### Community 46 - "Section 420 PPC Fraud Article"
Cohesion: 0.29
Nodes (5): commonScenarios, elements, faqs, keywords, schema

### Community 47 - "Tenant Rights Rent Law Article"
Cohesion: 0.29
Nodes (5): disputeSteps, faqs, keywords, rights, schema

### Community 48 - "Understand Legal Document Article"
Cohesion: 0.29
Nodes (5): faqs, keywords, readingApproach, redFlags, schema

### Community 49 - "Legal Notices Pakistan Article"
Cohesion: 0.29
Nodes (5): faqs, keywords, meaning, responseSteps, schema

### Community 50 - "Wakeel AI for Law Students"
Cohesion: 0.29
Nodes (5): faqs, keywords, limits, schema, useCases

### Community 51 - "FIR Rights & Myths Article"
Cohesion: 0.29
Nodes (5): faqs, keywords, mustKnowRights, myths, schema

### Community 52 - "Writ Jurisdiction High Courts"
Cohesion: 0.29
Nodes (5): conditions, faqs, keywords, schema, writs

### Community 53 - "Wrongful Termination Pakistan"
Cohesion: 0.29
Nodes (5): faqs, grounds, keywords, schema, steps

### Community 54 - "Exit Control List (ECL) Article"
Cohesion: 0.33
Nodes (4): facts, faqs, keywords, schema

### Community 55 - "Contact Page"
Cohesion: 0.33
Nodes (4): contactTopics, infoCards, initialForm, schema

### Community 56 - "Design System Docs"
Cohesion: 0.40
Nodes (6): Wakeel.org Brand Identity, Design System Color System (HSL CSS Variables), Lucide React Icon Library, Space Grotesk Typography, Theme Context Pattern (Dark/Light Mode), Wakeel.org Design System

### Community 57 - "Platform Detection"
Cohesion: 1.00
Nodes (3): detectPlatform() Utility, openPlatformAppStore() Utility, Platform-Aware App Store Implementation

### Community 58 - "UI Icon Assets"
Cohesion: 0.67
Nodes (3): File/Document Icon, Globe/World Icon, Browser Window / Desktop App Icon

### Community 59 - "Dark Theme Logo"
Cohesion: 1.00
Nodes (3): Arabic Calligraphy - Al-Wakeel, Wakeel.org Dark Theme Logo, Tagline - The Trustee, The Disposer of Affairs

## Knowledge Gaps
- **365 isolated node(s):** `extends`, `nextConfig`, `nextConfig`, `schema`, `config` (+360 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Button` connect `Navigation & Landing UI` to `Article Pages & Guide System`, `Beta Waitlist & Firebase Integration`, `AI vs Lawyer Pakistan Articles`, `Trust Strip & Demo Components`, `Comparison & Pricing Features`, `Marketing Pages & Core Content`, `Competitor Comparison Articles`, `Layout & Navigation Components`, `Pricing & Disclaimer Pages`, `Best AI Legal Apps Article`, `AI Document Review Article`, `Legal Sections (Dafaat) Article`, `Free Legal Advice Article`, `AI vs Lawyer Decision Article`, `AI Assistant vs Lawyer Guide`, `AI Contract Review Article`, `AI Help vs Real Lawyer Article`, `AI Legal Research Tools Article`, `AI vs Lawyer Choice Article`, `Best Legal Apps Citizens Article`, `Can AI Replace Lawyer Article`, `Civil Law Pakistan Guide`, `Civil Suit Pakistan Article`, `Constitution Fundamental Rights Article`, `Consumer Complaint Pakistan Article`, `Criminal Law Pakistan Guide`, `Draft Legal Contract Article`, `Family Law Rights Article`, `FIR Registration Step-by-Step`, `How Courts Work Pakistan`, `Complete FIR Registration Article`, `How to Register FIR Article`, `NADRA Biometric Verification`, `NCCIA Cyber Crime Complaint`, `Nikah Nama Registration Article`, `Pakistan Legal System Guide`, `Pakistani vs Common Law Article`, `Property Dispute Lawyer Article`, `Property Transfer Mutation Article`, `Section 420 PPC Fraud Article`, `Tenant Rights Rent Law Article`, `Understand Legal Document Article`, `Legal Notices Pakistan Article`, `Wakeel AI for Law Students`, `FIR Rights & Myths Article`, `Writ Jurisdiction High Courts`, `Wrongful Termination Pakistan`, `Exit Control List (ECL) Article`, `Contact Page`?**
  _High betweenness centrality (0.088) - this node is a cross-community bridge._
- **Why does `dependencies` connect `Project Dependencies` to `Article Pages & Guide System`?**
  _High betweenness centrality (0.079) - this node is a cross-community bridge._
- **Why does `firebase-admin` connect `Article Pages & Guide System` to `Project Dependencies`?**
  _High betweenness centrality (0.079) - this node is a cross-community bridge._
- **What connects `extends`, `nextConfig`, `nextConfig` to the rest of the system?**
  _366 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Article Pages & Guide System` be split into smaller, more focused modules?**
  _Cohesion score 0.059506531204644414 - nodes in this community are weakly interconnected._
- **Should `Beta Waitlist & Firebase Integration` be split into smaller, more focused modules?**
  _Cohesion score 0.08383838383838384 - nodes in this community are weakly interconnected._
- **Should `Project Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.05128205128205128 - nodes in this community are weakly interconnected._