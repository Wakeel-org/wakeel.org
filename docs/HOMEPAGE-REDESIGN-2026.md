# Homepage Redesign 2026 — Progress Tracker

**Project:** Wakeel.org homepage ("Case File" concept)
**Status:** Shipped — design system consistency complete sitewide, plus a pre-production QA pass that found and fixed real (non-design) bugs along the way. Homepage fully redesigned, header/footer restyled, brand color + eyebrow typography consistent across all ~195 pages, and a region-mislabeling SEO bug cluster fixed for the GCC/global guide pages.
**Last Updated:** August 22, 2026 (Phase 12 — pre-production QA fixes)
**Design reference:** Concept mockup built and iterated as a standalone Artifact preview before any code changes (see "Design source" below).

---

## Table of Contents
- [Why this doc exists](#why-this-doc-exists)
- [Design source](#design-source)
- [Locked design decisions](#locked-design-decisions)
- [Phase checklist](#phase-checklist)
- [File-level change log](#file-level-change-log)
- [Open questions / things to confirm before shipping](#open-questions--things-to-confirm-before-shipping)

---

## Why this doc exists

The homepage redesign is being ported into the real codebase **gradually**, one section/phase at a time, instead of one large rewrite of `pages/index.js`. This file is the single place to check:
- what's already shipped in code vs. still only in the concept mockup,
- the design decisions that were already made (so they don't get re-litigated every session),
- what's left to do next.

Update the [Phase checklist](#phase-checklist) and [File-level change log](#file-level-change-log) at the end of every session that touches this work.

## Design source

The full visual concept was designed and refined as a self-contained HTML mockup (published as a private Claude Artifact) before touching any real code, so it could be reviewed in both light and dark mode first. It is **not** a live page — it's the reference to build from. Key mockup decisions carried into the phases below:

- Evolves the existing **Kitab Edition v1.0** design system (`src/data/theme.js`, `src/data/designSystem.js`) rather than replacing it — same fonts (Space Grotesk / Inter / JetBrains Mono), same flat 2px-border cards, same 7-portal color system.
- Leads the hero with the **live consultation demo** (already exists as `WebTrialDemo`) instead of an app-store link as the primary above-the-fold action, per the findings in `LANDING-CRO.md`.
- Positions Wakeel as **agentic, not a single-turn chatbot** — plans → researches against Pakistani statutes → verifies → answers, rather than one guessed reply.

## Locked design decisions

These were explicitly confirmed with the user during the design pass — treat as settled unless they say otherwise:

1. **Design system:** evolve Kitab Edition, don't replace it.
2. **Hero CTA:** the in-page live demo is the centerpiece, not an app-store button.
3. **Placeholder proof content:** testimonials, star ratings, and usage stats in the mockup are clearly marked illustrative (`[Placeholder name]`, dashed "placeholder" badges) — **do not ship them as real** until real quotes/numbers exist.
4. **Logo:** ~~replaced by a flat "W" mark~~ — **reverted.** The original `logo-dark.png` / `logo-light.png` photographic logo stays in the header and footer. The mockup's flat mark was tried in Phase 1 and explicitly rejected by the user; do not reintroduce it without being asked again.
5. **FAQ:** two-column layout on desktop, single column on mobile; 6 questions (added "Is Wakeel a chatbot, or does it do more?" to balance the grid and reinforce the agentic positioning).
6. **Final CTA band:** deliberately stays in a dark "ink & stamp" treatment regardless of the page's own light/dark toggle (like the closing/attestation page of a case file) — a rotating circular seal graphic, amber as the single accent against navy, app-store badges alongside the primary CTA.
7. **Docket rail** (the desktop-only vertical section-index ribbon on the left edge): a mockup-only structural device inspired by binder tabs on a physical case file. **Not yet approved for the live site** — flagged as optional in the phase checklist below; confirm with the user before shipping it, since it changes the page's left-edge layout on every viewport ≥1180px.

## Phase checklist

| Phase | Scope | Status | Notes |
|---|---|---|---|
| 0 | Set up this tracking doc | ✅ Done | |
| 1 | Replace header/footer logo image with the "W" mark | ↩️ Reverted | Tried in `src/components/Navigation.js` / `src/components/Layout.js`, then rolled back same day at the user's request — original photographic logo is back. See locked decision #4. |
| 2 | Hero rebuild — agentic copy, proof pills, App Store/Google Play badges filling the space below the demo input | ✅ Done | `pages/index.js`: eyebrow → "Agentic legal AI for Pakistani People", new agentic sentence in the hero body, new "Agentic — plans & verifies" proof pill next to `TrustStrip`, `SHOW_HERO_GET_APP` flipped on (reuses the existing `AppDownloadButtons` component — no new SVGs hand-rolled). `src/components/WebTrialDemo.js`: added a one-line agentic explainer under the demo's eyebrow. Verified via `next dev` + browser preview: compiles clean, `eslint` clean, no console errors, real Play Store/App Store links render where the mockup's void space used to be. |
| 3 | New "Why not a generic chatbot?" differentiation section | ✅ Done | New section between the hero trust-chip strip and "Our vision & mission" in `pages/index.js`. Copy inlined directly (not moved into `src/data/marketing.js` yet — worth doing in a later cleanup pass if this section proves stable). |
| 4 | FAQ section (two-column, 6 questions) | ✅ Done | New `id="faq"` section in `pages/index.js`, placed after Pricing and before the final CTA. Built with native `<details>/<summary>` (no JS/accordion library needed) in a `md:grid-cols-2` grid. Copy inlined directly, same note as Phase 3 re: `marketing.js`. |
| 5 | Final CTA redesign (dark ink/stamp band) | ✅ Done | Replaced the flat `bg-primary` band in `pages/index.js` with the literal-hex dark navy gradient + rotating SVG seal + two-column layout (pitch/CTAs/store badges left, email-capture card right), matching the mockup. Colors are inline styles (not Tailwind/theme tokens) on purpose — this band is meant to look the same in light or dark site theme. Reuses `AppDownloadButtons` and `EmailSubscription` (wrapped in a div with Tailwind arbitrary-child selectors for the dark-panel input/button styling, since neither component accepts a `className` prop). |
| 6 | Full "ditto" port — replace Phases 2–5's Tailwind-approximation with the artifact's actual design system (its own CSS, docket rail included) | ✅ Done | See below — this superseded the incremental Tailwind port. The user explicitly asked for a pixel-level match of the mockup, not a utility-class approximation. Docket rail decision #7 is resolved: shipped. |
| 7 | Testimonials section | ⬜ Placeholder shipped | The 3-card layout is live with clearly-marked `[Placeholder name]` content (same as the mockup) — swap in real quotes when available, no layout change needed |
| 8 | Header + footer restyle to match the Kitab design system | ✅ Done | **Sitewide** — `src/components/Navigation.js` and `src/components/Layout.js` now use the same token system as the homepage, so they read as one consistent design everywhere, not just on `/`. Logo image was left untouched (decision #4 stands). |
| 9 | Sitewide color consistency — retint the global `--primary` CSS variable to brand blue | ✅ Done | **Sitewide, ~90 pages, one file.** See "Sitewide rollout" section below for the architecture discovery that made this possible. |
| 10 | Sitewide eyebrow typography — replace the ad-hoc sans-serif eyebrow pattern with the homepage's mono-tracked one, on every **non-journal** page | ✅ Done | New `eyebrow` export in `src/data/theme.js`. Applied to `RolePage.js` (7 role pages), `MarketingPage.js` (disclaimer, legal-sources, values), `AboutPage.js` (×2 — hero + "Team"), `WebTrialDemo.js`, `pages/pricing.js`, `pages/features.js`, `pages/contact.js`, `pages/services.js` (which had no eyebrow at all — added one). `pages/privacy.js` / `pages/terms.js` reviewed and left as-is: they don't use the theme.js token system at all, but their headings already render in Space Grotesk automatically via the global `h1,h2,h3 { font-family: var(--font-space-grotesk) }` base rule in `globals.css`, and as dense legal-text utility pages an eyebrow badge didn't seem worth adding. |
| 11 | Journal — the deferred section, now done | ✅ Done | See "Journal rollout" section below. Covers `GuidePage.js`, `ComparisonPage.js`, the journal index, the 3 regional hub pages, the comparisons hub, and all 83 static journal article files that carried their own inline hero markup. |

## File-level change log

- **2026-08-22** — Phase 1 (reverted same day): `src/components/Navigation.js`, `src/components/Layout.js` — tried swapping the `logo-dark.png` / `logo-light.png` `<img>` pair for a bordered "W" mark div, then reverted both files back to the original image logo at the user's request.
- **2026-08-22** — Phase 2: `pages/index.js` (hero eyebrow/body copy, new agentic proof pill, `SHOW_HERO_GET_APP` toggle flipped to `true`, added `Sparkles` to the lucide-react import list), `src/components/WebTrialDemo.js` (added a one-line agentic explainer). No new files, no new dependencies — reused the existing `AppDownloadButtons` component instead of building new download-badge markup.
- **2026-08-22** — Phases 3–5: `pages/index.js` — added the differentiation section, the FAQ section, and redesigned the final CTA band using Tailwind utility classes layered onto the site's existing neutral tokens. **Superseded by Phase 6 same day** — this approximation didn't visually read as "the redesign" (no docket rail, no custom type/color system, everything still routed through the site's neutral `--primary` ink instead of the mockup's blue/amber palette), so the user asked for an exact port instead.
- **2026-08-22** — Phase 6 (full redesign, current state): added `styles/HomeKitab.module.css` — a CSS Module carrying the mockup's entire custom design system (color tokens, docket rail, hero/demo-card chrome, differentiation table, portal/value/feature/testimonial/price cards, FAQ grid, the dark ink-and-stamp final CTA with the rotating SVG seal) scoped under one `.page` class so it cannot leak into any other route. Rewrote `pages/index.js` to render the exact same section structure and copy as the approved artifact, wired to real data (`src/data/marketing.js`, `src/data/designSystem.js`) instead of hardcoded mockup content. Key implementation notes:
  - Dark mode uses the site's real `useTheme()` `darkMode` boolean (`.page` vs `.page.dark`), **not** `prefers-color-scheme`/`[data-theme]` like the standalone mockup — the real header `ThemeToggle` now drives this design system directly. Verified live: toggling dark mode flips the whole custom palette correctly.
  - The shared `WebTrialDemo` component is reused as-is (not rebuilt) inside the mockup's blue-bordered "docket" card chrome; its Tailwind `primary`-token classes (`.text-primary`, `.bg-primary`, etc.) are retinted to the design system's `--brand` blue via scoped `:global()` overrides in `.demoBody` only — the component itself is untouched and still looks normal everywhere else it's used.
  - `EmailSubscription` (no `className` prop) is styled for the dark CTA card the same way — scoped `:global()` overrides in `.finalSide`, not a component change.
  - Verified with `eslint` (clean), `next dev` (compiles clean, no console errors), and real screenshots (hero, differentiation table, portal cards, FAQ, final CTA, and the dark-mode toggle) confirming a match against the artifact.
  - Logo is still the original image logo (decision #4 stands — not touched by this pass).
- **2026-08-22** — Phase 8: extended the same `styles/HomeKitab.module.css` token system to `src/components/Navigation.js` (header) and `src/components/Layout.js` (footer) — **this is sitewide, not homepage-only**, since Navigation/Layout render on every route. Notes:
  - The header nav and footer are DOM *siblings* of the homepage's own `.page` div (Layout renders `<nav>…</nav><main>{children}</main><footer>…</footer>`), not descendants of it, so CSS custom properties don't cascade from one to the other — each of the three (`nav`, homepage `main` content, `footer`) carries its own `${styles.page} ${darkMode ? styles.dark : ''}` token class independently. `Layout.js` now calls `useTheme()` directly to drive this.
  - Real functional links/columns/content in the footer (Product/Solutions/Resources/Company columns, social links, download buttons, disclaimer) and nav (existing `navLinks`, `cta-try-free` / `cta-download-android` analytics-hook class names used by ~140 CTA buttons sitewide) were preserved exactly — only colors/typography/spacing were reskinned, not the information architecture or link targets. The mockup's own nav links and footer columns were intentionally **not** copied over, since the real site's are the actual live navigation and changing them was out of scope for a visual restyle.
  - Verified with `eslint` (clean), `next dev` (compiles clean), and screenshots confirming nav (incl. the "Try Free" button now brand-blue) and footer (mono-uppercase column labels, flat-bordered social icons, sunk-gray background) in both light and dark mode via the real header theme toggle.

## Sitewide rollout (Phase 9+)

The user asked to bring the new design system to the rest of the site, not just the homepage. Before making changes, here's the architecture that shapes how that should happen:

**The site already has a shared token system.** `src/data/theme.js` exports `cardBase`, `sectionHeading`, `heroHeading`, `monoLabel`, `iconTile` — Tailwind class strings imported by roughly 90 pages (every journal article, all 7 role pages via `RolePage.js`, `ComparisonPage.js`, `MarketingPage.js`, `AboutPage.js`, `pricing.js`, `features.js`, `contact.js`). This is the *original* "Kitab Edition v1.0" — flat 2px borders, Space Grotesk headings, mono-label eyebrows — and it's structurally already close to the new homepage's language. The gap was color: the old system used neutral ink (`--primary` = near-black/white) everywhere except portal-identity chips, with no general "brand" accent.

**What Phase 9 did:** retinted the global `--primary` / `--primary-foreground` CSS custom properties in `styles/globals.css` (light and dark) to the exact same blue used as `--brand` in `styles/HomeKitab.module.css`. Because ~90 pages already consume `text-primary` / `bg-primary` / `border-primary` through the shared theme.js tokens, this one file change instantly retinted buttons, links, icons, active states, and borders across the entire site — verified live on `/citizens` (role page), `/pricing`, and a journal article, in both light and dark mode, no regressions.

**What Phase 9 did NOT do — still open:** the *structural* elements unique to the new homepage — the docket rail, the case-file demo-card chrome, the dark ink-and-stamp final CTA band — only exist in `styles/HomeKitab.module.css`, scoped to `pages/index.js`. These were judged homepage-specific flourishes (a "grand finale" CTA and a long-scroll section index) rather than patterns every page needs; they were **not** ported to the shared templates, and that was a deliberate call, not an oversight — repeating the dark stamp band on all ~90 pages would read as heavy-handed rather than consistent.

**Phase 10** went further on typography: audited every non-journal page for the ad-hoc `text-sm font-semibold uppercase tracking-wide text-primary` eyebrow pattern (found via grep, not guessed) and replaced it with a new shared `eyebrow` token in `theme.js` — the same mono/tracked/blue treatment the homepage hero uses. Combined with Phase 9's color change, every role page, `about`, `values`, `disclaimer`, `legal-sources`, `pricing`, `features`, `contact`, and `services` now reads as visually consistent with the homepage: same brand blue, same flat 2px borders (already existing via `cardBase`), same mono eyebrow signature. `RolePage.js` in particular was already using portal colors extensively (stamp chips, numbered step badges, per-role CTA tinting) — that groundwork made this pass mostly a typography/color unification rather than a rebuild.

## Journal rollout (Phase 11 — final phase)

**Correction to the Phase 9/10 assumption:** none of the 91 files in `pages/journal/article/` actually render through `GuidePage.js` — each is a fully bespoke, individually-written page file (its own hero, its own copy, its own inline JSX), importing `cardBase`/`headingGradient`/`sectionHeading` directly from `theme.js` rather than going through a shared component. `GuidePage.js`'s real leverage turned out to be the **dynamic `[slug]` routes** — `pages/journal/legal-issues-pakistan/[slug].js`, `-gcc/[slug].js`, `-global/[slug].js` — which together generate roughly 70 more guide pages (`/journal/legal-issues-pakistan/fir-refused-pakistan`, `/journal/legal-issues-gcc/labor-law-gcc`, etc.) not visible as individual files in the repo tree. `ComparisonPage.js` was correctly scoped in Phase 10 — it powers exactly the 7 `wakeel-vs-*` files.

**What shipped:**
- `src/components/GuidePage.js`, `src/components/ComparisonPage.js` — same `eyebrow` token swap as every other template, now covering the ~70 dynamic guide pages + 7 comparison pages.
- `pages/journal.js` — the journal landing page's "Wakeel Journal" pill badge retyped to the mono/tracked signature (kept the pill/icon container, since that's a nice treatment the other pages don't have — just fixed the inner text).
- `pages/journal/legal-issues-pakistan/index.js`, `-gcc/index.js`, `-global/index.js`, `pages/journal/comparisons/index.js` — the 4 regional/comparisons hub pages, same eyebrow fix.
- **All 83 static journal article files** (`pages/journal/article/*.js`, excluding the 7 comparison files and the `[slug].js` catch-all) — audited with `grep -c` first to confirm every one of them used the *exact* same ad-hoc eyebrow className and the *exact* same `theme.js` import line (verified 1:1, zero variants), then fixed with two `sed` passes across all 83 files at once rather than 83 individual edits. Verified afterward: `git diff --stat` showed precisely 166 changed lines (83 files × 2 lines), confirming nothing extra was touched.

**Verification for this phase:** `eslint` across every touched file (0 errors — the 47 warnings that showed up are all *pre-existing* unused-icon-import warnings unrelated to this change, confirmed by spot-checking they weren't things I introduced). A full **production build** (`npm run build`) — not just dev mode — completed successfully: "Compiled successfully", 195/195 static pages generated, zero errors. Live-checked in the browser: a static article page, a dynamic `[slug]` guide page, a `wakeel-vs-*` comparison page, and the journal index — all show the mono brand-blue eyebrow correctly.

This closes out the full sitewide design consistency rollout — homepage, header, footer, all non-journal pages, and now every journal page all share the same color and typography system.

## Re-verification pass (post-Phase 11)

Ran a systematic re-check across the whole site rather than trusting the per-phase spot checks alone. Found and fixed one gap; everything else confirmed clean.

**Found:** `pages/features.js` had two more instances of the ad-hoc eyebrow pattern the earlier exact-string grep missed — a `text-xs` size variant on the "What it does" / "Who it helps" field labels (the earlier grep only matched the `text-sm` variant). Fixed with the same `eyebrow` token. A follow-up regex sweep (`text-(xs|sm|base).*font-semibold uppercase tracking.*text-primary`) confirmed zero remaining variants anywhere in `pages/` or `src/`.

**Static checks:**
- Full repo grep: zero remaining instances of the old ad-hoc eyebrow pattern, in any size variant, anywhere.
- Zero stray `text-blue-*` / `bg-blue-*` / `border-blue-*` Tailwind classes anywhere — confirms every accent color goes through the token system, nothing hardcoded outside it.
- `HomeKitab.module.css` confirmed imported only by the 3 files that should use it (`pages/index.js`, `Layout.js`, `Navigation.js`) — no leakage.
- `eslint` across `pages` + `src`: 0 errors. `npm run build` (full production build, not dev mode): "Compiled successfully", 195/195 static pages generated, 0 errors.

**Live checks (computed styles, not just visual):** sampled 12+ pages across every category (homepage, role pages, marketing pages, journal index, hub pages, static articles, dynamic `[slug]` guide pages, comparison pages) and read the actual `getComputedStyle().color` of each page's eyebrow element via JS — confirmed pixel-exact `rgb(20, 70, 122)` in light mode and `rgb(126, 179, 232)` in dark mode everywhere, matching the homepage's `--brand` token exactly. Also confirmed portal-identity colors (citizen blue, student purple, lawyer amber, judge neutral-black, etc.) render correctly alongside the new eyebrow color without conflict.

**Responsive/interactive checks:** explicitly verified the docket rail's breakpoint (`display:none` below 1180px width, `display:flex` at ≥1180px — checked both, not assumed), confirmed dark mode toggling works correctly at both mobile and desktop widths, and confirmed the restyled mobile nav menu opens correctly with the new Kitab styling (brand-blue "Try Free" button, dark panel background). Zero console errors across every page checked.

**Found, but out of scope — flagged not fixed:** the GCC/global dynamic guide pages (e.g. `/journal/legal-issues-gcc/labor-law-gcc`) show the eyebrow text "Pakistan legal guide" regardless of region — that's a hardcoded string in `GuidePage.js`, a **content** bug, not a design-consistency one. Left as-is since it wasn't part of this task; worth a follow-up if the user wants it fixed.

## Pre-production QA fixes (Phase 12)

The user asked to fix the region-mislabeling bug found during re-verification, "and the other one you find," until production ready. Pulling that thread surfaced a small cluster of related, genuine (non-design) bugs — all fixed and verified, not just found:

1. **`GuidePage.js` region mislabeling (the originally-reported bug).** The hero eyebrow always read "Pakistan legal guide" and every generated SEO keyword always said "Pakistan," regardless of the guide's actual region — so the ~40 GCC and global dynamic guide pages (`/journal/legal-issues-gcc/*`, `/journal/legal-issues-global/*`) advertised themselves as Pakistan content. Fixed: new `REGION_EYEBROW_LABELS` / `REGION_KEYWORD_TERMS` maps keyed off the guide's real region (`getGuideRegion`), and the category-keyword list (23 hardcoded "X Pakistan" phrases) now swaps the region term in dynamically instead of leaving a false "Pakistan" claim on non-Pakistan guides.

2. **`MarketingSEO.js` had the same root bug at the meta-tag level**, independent of GuidePage — `geo.region` was hardcoded as `PK-${region}` (producing nonsense like `PK-SA` and `PK-GLOBAL`), `hrefLang` was hardcoded to `en-PK` regardless of the `region` prop, `og:locale` was hardcoded to `en_PK`/`ur_PK`, and `<meta name="country">` was hardcoded to `"PK"` unconditionally on every single page site-wide. Fixed: all four now derive from the actual `region` prop, and correctly **omit** geo/country claims entirely for global content rather than inventing one. Verified this doesn't affect the 87 pages that legitimately are Pakistan-scoped (features, pricing, role pages, etc.) — confirmed via a full-repo scan that every `MarketingSEO` call site without an explicit `region=` prop is a genuinely Pakistan-focused page, so the `"pk"` default is correct there, not a bug.

3. **Found while verifying fix #2 — a real duplicate-meta-tag bug, sitewide, pre-existing:** `Layout.js` renders its own static Open Graph fallback block (`og:title`, `og:locale`, etc., hardcoded to the generic site defaults) on *every* page, and `MarketingSEO.js` renders a second, page-specific set of the same properties. Next.js's `<Head>` only auto-dedupes tags by `name` (and explicit `key`) — never by `property` — so any page using both components was silently emitting two conflicting `og:*` tags. This was invisible before (both copies usually said the same thing), but became a real correctness bug the moment region-specific values started differing. Fixed by giving matching `key` props to both components' OG tags so Next's dedup collapses them to the page-specific version; the 5 pages that render `Layout` without `MarketingSEO` (404, privacy, terms, journal index, the `[slug]` catch-all) correctly keep the generic fallback. Verified empirically, not assumed: confirmed exactly one `og:*` tag per property on both page types, with the correct value each.

4. **Minor redundant markup**, found in the same file: `MarketingSEO` was emitting `<link rel="alternate" hrefLang="en">` twice for global content (once as the "region-specific" tag, which for global equals plain `"en"`, then again as the explicit generic line). Fixed to only emit the region-specific line when it actually differs.

5. **Two pre-existing lint *errors*** (not warnings, `react-hooks/purity`) in `EmailSubscription.js` and `BetaWhitelistSection.js` — both called `Date.now()` directly inside a `useRef()` initializer, which runs during render and violates React's render-purity rule. Fixed by initializing the ref to `null` and relying on the existing `useEffect` (already present in both files) to set the real timestamp on mount — the standard idiomatic fix, and the effect fires well before a user could realistically submit either form. Confirmed via `git diff` before touching them that these predate this session's work.

**Verification for this phase:** `eslint` across the whole repo went from 2 errors / ~54 warnings to **0 errors** / 54 warnings (all remaining warnings are pre-existing unused-import notices, unrelated to any of this). Full production build (`npm run build`) succeeded cleanly, 195/195 pages. Live-checked actual rendered `<head>` output (not just source code) for a Pakistan guide, a GCC guide, and a global guide — confirmed `geo.region`, `hrefLang`, `og:locale`, `country`, and the visible eyebrow text are all now correct and non-duplicated for all three, with global content correctly claiming no specific place.

## Open questions / things to confirm before shipping

- Docket rail: ship it or drop it? (see decision #7)
- Final CTA: keep it permanently dark regardless of site theme, or should it follow the page's light/dark toggle like every other section?
- Testimonials: who's sourcing the real quotes, and by when — so Phase 7 has an unblock date?
- Play Store rating shown in the mockup hero (`4.6★`) is a placeholder — needs the real current rating before Phase 2 ships.
