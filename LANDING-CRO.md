# Landing Page CRO Analysis
## https://wakeel.org
### Analysis Date: 2026-07-12

---

## Overall CRO Score: 63/100

## Page Type: SaaS Signup (Free trial / freemium signup), with a Lead Capture (email) secondary goal
## Current Estimated Conversion Rate: ~1.5-3% (below the 3-7% SaaS benchmark — mainly because the primary CTA routes to a Google Play listing, not a frictionless in-browser trial)
## Target Conversion Rate: 5-8% with the fixes below

---

## Section-by-Section Analysis

### 1. Hero Section [Score: 7/10]
**Findings:**
- Headline "Your AI lawyer and legal assistant, in your pocket." is benefit-oriented and under 10 words. Good.
- Subheadline ("For citizens, law students, lawyers, and institutions — ask in English or Urdu.") tries to serve 4 audiences at once. Broad-audience headlines depress conversion vs. a segmented approach because no single visitor feels "this is built for me."
- Primary CTA "Try Wakeel Free" (`pages/index.js:201-205`) links to the Google Play Store, not an in-page or in-app experience. On desktop this dead-ends non-Android visitors (no iOS/desktop path is offered above the fold), and on mobile it forces an app-install detour before the visitor has felt any value.
- Trust element (TrustStrip, "Legal accuracy reviewed by Sikandar Azam, Advocate High Court") is a strong, unusual, credible trust signal for a legal-AI product — keep this, it's rare to see a named credentialed reviewer this high on a legal SaaS page.
- No hero visual/screenshot of the actual product UI — the "sample question" card substitutes for it and does real work (see below), but there's no image of the mobile app itself, so visitors can't preview what they're installing.
- Nav nas a hamburger menu even on desktop competing with the CTA — reduces focus for a single dedicated conversion page.
- Page weight is light (small JS chunks, two PNG logos, system fonts via woff2) — load speed is not a concern here.

**Fixes (Priority: HIGH):**
- Change the primary CTA target based on device: keep Play Store link for Android UA, but show "Try on iOS (TestFlight)" or a "Continue on web" option for desktop/iOS visitors — `site.appUrl` currently hardcodes the Android Play Store link (`src/data/marketing.js:16`) for everyone regardless of platform. Losing 100% of iOS/desktop visitors to a broken CTA is a bigger lever than any copy tweak.
- Add a small app screenshot or 10-second product GIF next to/below the hero card so visitors can see the interface before installing.
- Consider a single primary segmented headline variant per audience via UTM/referrer (e.g., swap subheadline for law-student traffic vs. citizen traffic) instead of listing 4 audiences in one sentence.

### 2. Value Proposition [Score: 7/10]
**Findings:**
- 4U check: Useful (yes — real legal-info need), Urgent (weak — no reason to act today vs. next week), Unique (moderate — "Pakistan-specific" + bilingual + source-aware is a real differentiator but not stated as "vs. generic ChatGPT/ Google"), Ultra-specific (good — "documents up to 100+ pages" is concrete).
- The live "sample question" demo (FIR / PPC 420 / rent deposit tabs) is the standout element of the page — it lets visitors experience the actual value (a real legal answer) with zero signup. This is doing more conversion work than the CTA button itself.
- Value prop text is scannable, short paragraphs, no walls of text.

**Fixes (Priority: MEDIUM):**
- Add one explicit differentiation line near the hero or value section: e.g. "Unlike general AI chatbots, Wakeel is grounded in Pakistani statutes and case law, reviewed by a practicing advocate." This directly answers "why not just ask ChatGPT?" which is the most likely silent objection for this product category.
- Add urgency/timeliness hook for citizens specifically (e.g., "Legal deadlines don't wait — get an answer in under a minute") since legal problems (FIR, notices) are often time-sensitive in reality, and this page currently has zero urgency language.

### 3. Social Proof [Score: 3/10]
**Findings:**
- Only one proof element exists: the named-advocate review credential in the hero. That is a genuine and valuable trust signal, but it is a single data point.
- No user count, no testimonials from actual citizens/students/lawyers who use the product, no star rating from the Play Store/App Store (even though the app is presumably already listed there and could have a rating to show), no "as seen in" media mentions, no usage/answer-count metric.
- For a legal-AI product this gap matters more than usual — legal topics carry higher risk perception, so an absence of "other people trust this" signals will suppress the already-cautious segment (citizens worried about relying on AI for legal matters).

**Fixes (Priority: HIGH):**
- Pull the current Play Store star rating and review count into the page (e.g., "4.6★ · 1,200+ downloads") once available — this is a near-zero-effort addition if the listing already has ratings.
- Add 2-3 short testimonials with name/role (a law student, a citizen, a lawyer) near the pricing or features section — even anonymized as "Law student, Lahore" if full names aren't available yet, this beats nothing.
- Surface a simple usage metric if available internally (e.g., "X,XXX legal questions answered" or "XX legal guides covered") — specific numbers outperform vague ones per the framework's "11,847 beats 10,000+" principle.

### 4. Features and Benefits [Score: 7/10]
**Findings:**
- 8 feature cards (`featureCards` in `src/data/marketing.js`) is at the upper edge of the "3-7 key features" best practice — borders on overwhelming, though icons and short descriptions keep it scannable.
- Copy already leans benefit-first in places ("Break down what a notice says, what it may require, what deadlines matter") — good feature-to-benefit translation.
- Visual hierarchy relies entirely on icon + heading + 1-2 line description; no screenshots/mockups accompany any feature, which is a missed chance to show, not just tell, especially for "Analyze legal PDFs and documents."

**Fixes (Priority: MEDIUM):**
- Trim the homepage feature grid to the 4-5 highest-intent features (Ask questions, Analyze documents, Understand notices, Research law) and move the rest to `/features` (already exists) behind the "Explore all features" link — reduces cognitive load on the conversion path.
- Add one real product screenshot (e.g., a document-analysis result) to break up the icon-only grid.

### 5. Objection Handling [Score: 6/10]
**Findings:**
- The page proactively handles the biggest objection for legal AI — "is this actually legal advice / can I trust it?" — via the disclaimer, the "Legal info, not a lawyer replacement" trust chip, and the advocate-reviewed badge. This is well done and appropriate for the risk profile of the product.
- No visible FAQ section on the homepage addressing objections like "Is my document data safe/private?", "What if the answer is wrong?", "Do I need to pay to get real value?", or "How is this different from just Googling / asking ChatGPT?"
- No money-back guarantee framing needed (product has a genuine free tier), but the free-tier limits ("Daily legal question allowance") are vague — visitors can't tell if free means "1 question/day" or "20 questions/day," which itself becomes a silent objection ("is free actually usable?").
- Security/privacy claim ("Encrypted document processing") is stated but not backed by any certification, badge, or link to the privacy policy from that specific chip.

**Fixes (Priority: MEDIUM):**
- Add a 4-5 item FAQ section before pricing, targeting: data privacy on document uploads, accuracy/liability, free-tier limits, and "AI vs. real lawyer" positioning.
- Quantify the free tier's daily question allowance with an actual number if possible — vague limits reduce perceived value of "free."
- Link the "Encrypted document processing" trust chip directly to the privacy policy page.

### 6. Call-to-Action [Score: 6/10]
**Findings:**
- CTA copy is strong: "Try Wakeel Free" and "Get my answer free" (first-person, value-forward, matches framework's "strong" tier) — good work already, consistent with the recent "Improve homepage conversion" commit.
- CTA appears multiple times (hero, mid-page demo, final CTA band) — good repetition per best practice.
- Weakness is the destination, not the copy: the primary CTA routes 100% of clicks (regardless of platform) to the Android Play Store (`site.appUrl`, `src/data/marketing.js:16`), which is a dead end for iOS and desktop visitors and adds app-install friction for everyone before they've created an account or seen more than the one demo answer.
- Secondary CTA "View Legal Sources" is a reasonable soft option for not-ready-to-commit visitors — good to have this.
- No supporting microcopy under the button itself (e.g., "No credit card required" / "Free forever, no signup to try a question") right at the CTA — this exists at the bottom under the free-text input instead, not next to the button.

**Fixes (Priority: HIGH):**
- Route the primary CTA intelligently by platform: Android → Play Store, iOS → TestFlight link (`site.iosUrl` already exists in the data file but isn't used in the hero CTA), desktop → either the web app when live or a clearer "scan QR to get the app" pattern rather than silently sending desktop users to a Play Store page they can't install from.
- Add microcopy directly under/beside the "Try Wakeel Free" button: "Free to start — no credit card required."

### 7. Footer and Secondary Elements [Score: 8/10]
**Findings:**
- Footer (`src/components/Layout.js`) has structured columns (Product, Solutions, Resources, company links), privacy/terms/disclaimer all linked, and a final CTA band with email capture — this is solid and above the bar for a homepage footer.
- Final CTA band repeats "Try Wakeel Free" + "Download App" + an email subscription form — good redundancy and a legitimate lead-capture fallback for visitors not ready for the app.
- No trust badges (advocate review, "Legal info not advice") repeated near this final CTA — the strongest trust signal on the page (advocate credential) lives only in the hero and isn't reinforced at the bottom where hesitant visitors make their final decision.

**Fixes (Priority: LOW):**
- Repeat the advocate-reviewed badge or the "Legal information, not a lawyer replacement" line directly above the final CTA band, since this is the last thing a still-undecided visitor sees before leaving.

---

## Copy Score: 78/100
| Dimension | Score | Notes |
|---|---|---|
| Clarity | 9/10 | Offer is understandable within 5 seconds; audience list in subheadline is the only minor drag |
| Urgency | 4/10 | No urgency language anywhere on the page — legal problems are often time-sensitive in real life but the copy doesn't leverage that |
| Specificity | 8/10 | "100+ page documents," named advocate, specific pricing tiers in PKR are all concrete |
| Proof | 6/10 | Docked for having only one proof point (advocate credential) and no testimonials, ratings, or usage numbers |
| Action Orientation | 8/10 | CTA copy is first-person and value-forward; docked only because the destination undercuts the strong copy |

---

## Form Audit
- The homepage itself has one lightweight form: the "Have your own question?" free-text input (1 field) feeding into "Get my answer free," and the footer email-subscription form (1 field, presumably email only). Both are already minimal (1 field each) — no changes needed on field count.
- Neither form's submit behavior/error states were inspectable from the rendered homepage in this pass; if the question-input silently redirects to the Play Store on submit (same as the main CTA), that's the same platform-routing issue flagged in the Hero/CTA sections above, just via a different entry point.
- Recommend inline validation and a clear success state on the email subscription form if not already present — verify in-browser before shipping any copy changes.

---

## Mobile Audit
- Not directly load-tested in this pass (browser tooling limitation), but the codebase uses responsive Tailwind classes throughout (`sm:`, `lg:` breakpoints on grids, font sizes, spacing) consistently across the homepage — layout is built mobile-first.
- Given 60%+ of traffic is typically mobile, and the primary CTA is an app-store link, mobile is actually the best-served path today (Android users tap "Try Wakeel Free" and land exactly where they'd expect). The friction identified above is concentrated on desktop/iOS visitors, not mobile Android visitors.
- Recommend a live mobile-viewport pass (Chrome device toolbar or a mobile CRO skill run) to confirm tap target sizing on the pricing grid's 5-column layout, which likely stacks to 1-2 columns on small screens per the `sm:grid-cols-2 lg:grid-cols-5` class — verify this doesn't create excessive scroll depth before the CTA choice is visible.

---

## Page Speed Impact Assessment
- Network trace shows a lean payload: core Next.js chunks (~10 small JS files), one CSS file, one webfont, two small logo PNGs. No large hero images, no heavy third-party scripts, no render-blocking resources observed.
- This page is very likely in the 0-2 second "baseline optimal" bucket — page speed is not a conversion blocker here and does not need remediation. This is a genuine strength versus most SaaS landing pages the framework benchmarks against.

---

## A/B Test Recommendations
1. If we route the primary "Try Wakeel Free" CTA by platform (Play Store on Android, TestFlight on iOS, a waitlist/QR fallback on desktop) instead of hardcoding the Android Play Store link for all visitors, then overall CTA completion rate will increase because non-Android visitors currently hit a dead end.
2. If we add a quantified free-tier limit (e.g., "5 free questions/day") to the pricing card copy, then Free-plan signup intent will increase because visitors can gauge real usability before committing to the app install.
3. If we add 2-3 named testimonials (student/citizen/lawyer) directly above the pricing section, then scroll-to-CTA conversion will increase because the page currently has only one proof point for a trust-sensitive legal product category.
4. If we add a "Wakeel vs. ChatGPT/Google" differentiation line near the value proposition, then time-on-page and CTA clicks will increase because it pre-empts the most likely objection ("why not just ask a generic AI chatbot?").
5. If we surface the Play Store star rating/review count near the hero trust strip, then hero-to-CTA click-through will increase because social proof density in the first viewport is currently thin (a single named-reviewer badge).
6. If we reduce the homepage feature grid from 8 to 5 cards and move the rest behind "Explore all features," then feature-section engagement will increase because fewer, more relevant items reduce decision fatigue on the primary conversion path.
7. If we add microcopy ("Free to start — no credit card required") directly beneath the primary CTA button, then click-through will increase because it removes a common friction assumption before the click, not after scrolling further down.

---

## Heat Map Interpretation Guidance
- **Expected attention zone:** F-pattern in the hero — eyes land on the eyebrow label, sweep the H1, drop to the subheadline, then jump to the CTA button (standard for this two-column card layout).
- **High click-probability zone:** the sample-question tabs (FIR / PPC 420 / rent deposit) — these are novel, interactive, and sit directly beside the primary CTA; expect a meaningful share of first clicks to land here rather than on "Try Wakeel Free," which is a good sign for engagement but means the *demo* is currently doing more conversion work than the CTA itself (reinforces Fix #1 above — make sure whatever the demo leads to is not a dead end either).
- **Likely dead zone:** the 4-chip trust strip ("Built in Pakistan," "Official legal sources," etc.) immediately below the hero — plain text chips with no icons or visual weight tend to get skimmed past; consider whether this space is better used for the testimonial/rating proof recommended above.
- **Scroll depth prediction:** given the page's length (hero → trust strip → vision/mission → audiences → values → features → trust/safety → example prompts → guides → pricing → final CTA), expect steep drop-off after the features section for visitors who haven't clicked a CTA yet — the pricing section arrives quite late. Consider whether a lighter/shorter path to pricing exists for visitors who scroll past the hero without converting.
- **Rage-click risk:** the "Try Wakeel Free" button looks like a standard in-page action but opens an external Play Store tab — desktop users unfamiliar with this pattern may click it multiple times expecting an in-page result before realizing a new tab opened.

---

## Prioritized Fix List

### Quick Wins (implement this week)
1. Add CTA microcopy ("Free to start — no credit card required") beneath the primary button — near-zero engineering effort, removes friction at the exact decision point.
2. Surface Play Store star rating/review count in the hero trust strip if the listing already has ratings — likely a copy-only change.
3. Quantify the free-tier daily question limit in the pricing card instead of "Daily legal question allowance."

### Medium-Term (implement this month)
1. Platform-aware CTA routing (Android → Play Store, iOS → TestFlight via existing `site.iosUrl`, desktop → appropriate fallback) — the single highest-leverage fix on the page since it currently sends 100% of non-Android clicks to a dead end.
2. Add 2-3 real or realistic testimonials near pricing.
3. Add a 4-5 item FAQ section covering privacy, accuracy/liability, free-tier limits, and "why not ChatGPT."
4. Trim homepage feature grid from 8 to 5 cards.

### Strategic (implement this quarter)
1. Ship the in-browser web app (`site.appUrl` comment notes it's "temporarily disabled") so the primary CTA can be a zero-friction in-page trial instead of an app-store redirect — this single change would likely move conversion rate more than any copy or layout fix on this list.
2. Build a lightweight in-house testimonial/case-study pipeline (collect real user quotes with permission) to replace placeholder-style proof over time.
3. Add usage-based social proof (questions answered, documents analyzed) once volume is meaningful, refreshed periodically.

---

## Before/After Wireframe Suggestions

**Current Hero (as built):**
```
[Eyebrow badge]
[H1: Your AI lawyer...]
[Subheadline: 4 audiences]
[Body paragraph]
[Advocate trust card]
[Try Wakeel Free →Play Store] [View Legal Sources]
[Disclaimer]
                              | [Sample question demo: FIR/PPC/Rent tabs]
                              | [Free-text question input → Get my answer free]
```

**Recommended Hero:**
```
[Eyebrow badge]
[H1: Your AI lawyer...]
[Subheadline: 4 audiences]
[Body paragraph]
[Advocate trust card] + [★ 4.x rating · N reviews]   <- add proof density
[Try Wakeel Free →platform-aware] [View Legal Sources]
[Free to start — no credit card required]              <- add microcopy
[Disclaimer]
                              | [Sample question demo: FIR/PPC/Rent tabs]
                              | [Free-text question input → Get my answer free]
                              | [small product screenshot/GIF]  <- add visual
```
