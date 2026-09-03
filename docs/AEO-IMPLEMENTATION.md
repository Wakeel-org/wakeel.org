# Wakeel.org AEO (Answer Engine Optimization) Implementation

**Date**: September 3, 2026
**Status**: ✅ Completed (initial pass)
**Focus**: AI-answer-engine citability — Google AI Overviews, ChatGPT, Perplexity, Gemini
**Related docs**: [SEO-OPTIMIZATION-PHASE-1.md](SEO-OPTIMIZATION-PHASE-1.md), [SEO-OPTIMIZATION-PHASE-2.md](SEO-OPTIMIZATION-PHASE-2.md), [SEO-OPTIMIZATION-PHASE-3.md](SEO-OPTIMIZATION-PHASE-3.md)

---

## Overview

This pass audited and strengthened how wakeel.org presents itself to AI answer engines — the systems that read a page once, extract an answer, and cite (or don't cite) the source. Unlike traditional SEO, an answer engine has no ranking page to climb; it either finds a passage clean enough to lift, structured data clean enough to trust, and a source credible enough to name — or it doesn't.

The site's foundation going in was already unusually strong: `robots.txt` explicitly allows every major AI crawler (GPTBot, ChatGPT-User, Google-Extended, PerplexityBot, anthropic-ai, CCBot), a comprehensive `llms.txt` links ~140 pages with real descriptions, `next.config.js` builds as fully static HTML (`output: 'export'`), and 102 of 113 Journal articles already carried `Article` + `FAQPage` + `BreadcrumbList` JSON-LD. This work closed the remaining gaps rather than starting from zero.

---

## 1. Comparison Page Content (7 pages)

**Problem found**: 3 of the 7 `wakeel-vs-*` comparison pages (`wakeel-vs-yourmunshi`, `wakeel-vs-digilawyer`, `wakeel-vs-qanoonai`) had no body content at all — just a one-line positioning statement — and all 7 fell back to a shared, templated FAQ (only the competitor's name substituted), giving AI engines near-duplicate content across pages.

**Fix**:
- Researched each of the 3 thin competitors (public site content, press coverage) and wrote real, sourced body sections + FAQs, matching the fact-checked, hedge-appropriately tone already used elsewhere on the site.
- Added differentiated, competitor-specific FAQs to the other 4 pages, replacing reliance on the generic template.
- All 7 comparisons now carry real `body`, `sources`, and `faqs` in [`src/data/marketing.js`](../src/data/marketing.js) (`comparisons` array).

## 2. Date Integrity (21 articles + sitemap)

**Problem found**: 21 already-live, already-indexed Journal articles carried `datePublished`/`dateModified` staggered into the future (up to December 2026) — a deliberate earlier drip-schedule commit meant to simulate steady publishing, with `sitemap.xml` `lastmod` synced to match. A future-dated freshness signal on a page that's already crawlable is incoherent to any crawler visiting today, and is the kind of date-metadata mismatch Google's spam guidance and AI engines specifically distrust.

**Fix**:
- Reset `datePublished`/`dateModified` on all 21 article schema blocks to the actual date.
- Fixed the matching `publishedAt` fields in `src/data/marketing.js` (used by the Journal index listing).
- Fixed `sitemap.xml` `lastmod` for the same 21 URLs.
- Caught and fixed a second, separate leftover: the human-visible "Published [date]" hero text on all 21 pages still showed the old future date after the schema fix — corrected to match.

## 3. HowTo Structured Data (8 → 13 articles)

**Problem found**: Only 8 Journal articles carried genuine `HowTo` schema, despite many more describing an inherently procedural sequence (filing an application, escalating a complaint, checking a status).

**Fix**:
- Wired `HowTo` schema into 2 articles that already had real, visible, ordered step content in the UI but had never been connected to structured data (`police-refuse-fir-what-to-do-pakistan`, `divorce-in-pakistan-procedure-rights`).
- Authored new step-by-step content — both a visible numbered section and matching `HowTo` schema — for 3 more genuinely procedural articles, grounded in facts already established elsewhere on each page (`section-22a-22b-crpc-pakistan`, `illegal-property-occupation-pakistan`, `fir-status-check-pakistan`).
- Deliberately **did not** apply `HowTo` to articles whose content is explanatory/categorical rather than a real ordered procedure (e.g. `khula-in-pakistan-procedure-rights`, `police-complaint-against-police-pakistan`) — misapplying `HowTo` to non-procedural content risks structured-data quality flags and misrepresents the page.

Remaining "framework-only" articles that could become genuine how-tos with new authored procedural content are a candidate for a future pass.

## 4. Person / Author Schema

**Problem found**: Every article attributed authorship to a bare `Organization: "Wakeel.org"` — the weakest possible E-E-A-T signal, with no named entity behind it anywhere on the site.

**Fix** (identities used are real and already public — none fabricated):
- **101 Journal legal-content articles** + the dynamic `[slug].js` CMS template's no-author fallback now attribute to `"Wakeel.org Legal Team"` (Organization-type) — stronger editorial-ownership signal without claiming individual legal credentials nobody has confirmed for that specific content.
- **Homepage `Organization` schema** now includes a real `founder`: Majid Hussain Malik, Co-Founder, with his actual public LinkedIn as `sameAs` — pulled from the site's own already-published `team` data in `marketing.js`.
- **Comparison pages** (`wakeel-vs-*`) attribute to Majid Hussain Malik as author — founder-voice product/market commentary, kept distinct from legal-substance content.
- **`/about` page** schema restructured to expose the full public team (already visible on the page with photos and LinkedIn links) as structured `Person` entities — founders and employees — including Sikandar Azam, Advocate High Court & Legal Researcher, *without* a fabricated `sameAs` since his LinkedIn entry in the data is a placeholder (`"#"`).

## 5. Citation / Source Structured Data (78 articles, 164 citations)

**Problem found**: 78 Journal articles already had a visible "Sources and further reading" section linking real external statute texts, government pages, and studies — but none of it was exposed as structured data, so AI engines had no machine-readable signal of what the article actually drew on.

**Fix**:
- Added a `citation` array (`schema.org` `CreativeWork` entries) to the `Article`/`WebPage` schema block on all 78 articles, extracted directly from each page's own existing Sources section.
- 164 citation entries total, cross-verified by script against each page's actual rendered Sources list to confirm no under-extraction.
- Explicitly filtered to `http(s)://` URLs only — an early extraction pass briefly conflated internal "Related reading" links with genuine external sources on 3 files; this was caught, fully reverted, and redone correctly before anything was committed. Final result has zero internal links leaking into `citation`.

---

## Verification

Every change in this pass was verified against the actual build output, not just source:

- `npm run build` (static export) run clean after each stage.
- Generated `out/**/*.html` spot-checked for the resulting JSON-LD (schema present, correctly shaped, no `undefined`/placeholder values).
- Script-based cross-checks: date-fix coverage (no future dates left anywhere in `pages/`, `src/`, or `public/sitemap.xml`), citation-count parity (expected vs. written per file), and a `#`-placeholder-`sameAs` check to confirm no fabricated social links.
- `git diff` reviewed file-by-file before each commit.

## Current State (verified counts)

| Signal | Count |
|---|---|
| Journal articles with `Article` schema | 102 / 113 |
| Journal articles with `FAQPage` schema | 106 / 113 |
| Journal articles with `HowTo` schema | 13 / 113 |
| Journal articles with `citation` (164 entries total) | 78 / 113 |
| Journal articles attributed to `Wakeel.org Legal Team` | 102 / 113 |
| Comparison pages with real body + sourced FAQs | 7 / 7 |
| `robots.txt` AI-crawler allowances | GPTBot, ChatGPT-User, Google-Extended, CCBot, anthropic-ai, Claude-Web, PerplexityBot |
| `llms.txt` | present, ~140 pages linked |

## Deferred / Not Done in This Pass

- Expanding `HowTo` beyond the current 13 to the remaining procedural-but-framework-only articles — needs newly authored step content, not mechanical schema wiring.
- `speakable` schema for voice/answer-engine extraction on top-traffic articles.
- `Dataset`/statistics schema, if original data is ever published.
- Tying `llms.txt` regeneration into the article-publishing process so it can't drift from what's actually live.

---

## Commits

1. `AEO: enrich thin comparison pages, differentiate FAQs, fix future dates`
2. `AEO: add HowTo coverage to 5 procedural articles, fix stale hero dates`
3. `AEO: add Person/author schema across the site`
4. `AEO: wire cited sources into Article schema as structured citations`

---

**Prepared by**: Claude Code
**Date**: September 3, 2026
**Status**: ✅ Verified against build output, ready for deployment
