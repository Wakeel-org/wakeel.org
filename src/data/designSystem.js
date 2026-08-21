// Wakeel Design System — "Kitab Edition v1.0"
//
// Central source of truth for the two color systems layered on top of the
// site's neutral (shadcn) foundation:
//
//  1. Portal identity — one accent color per audience/role page (citizens,
//     law students, lawyers, judges, law firms, policymakers/institutions).
//     Applied ONLY to that page's stamp chip, accent rule, and primary CTA —
//     never to page background, cards, or body text (see the Portal Identity
//     System spec: judges intentionally get no tint — neutrality is the
//     Judge portal's identity).
//
//  2. Law category taxonomy — a fixed 10-color palette for legal subject
//     tags shown on journal/blog posts. These are semantic, not portal-tinted,
//     and stay identical no matter which portal is viewing them.
//
// Source: wakeel_design_system_specimen.html (Kitab Edition v1.0) and
// wakeel_portal_identity_system.html.

// ─────────────────────────────────────────────────────────────────────────
// Portal identity — keyed by the role/portal slug used across marketing
// pages (see `corePages[...].portal` in src/data/marketing.js).
// ─────────────────────────────────────────────────────────────────────────
// Each portal carries a light-mode pair (`primary`/`surface`, used as
// text-and-border / chip-fill) plus a dark-mode pair (`darkPrimary`/
// `darkSurface`) — the light pastel `surface` tints read as glaring, out-of-
// place panels on a near-black canvas, so dark mode gets its own low-
// luminance surface and a brightened primary for contrast, mirroring the
// Kitab dark-token pattern (e.g. `--verified-dark: #4CAF72`).
export const portals = {
  citizen: {
    label: "Citizen",
    primary: "#14467A",
    surface: "#DCEAFB",
    dark: "#0E3560",
    darkPrimary: "#7EB3E8",
    darkSurface: "#122A42",
  },
  student: {
    label: "Student",
    primary: "#4B2585",
    surface: "#EBDCFB",
    dark: "#331A5E",
    darkPrimary: "#C79EF2",
    darkSurface: "#241536",
  },
  lawyer: {
    label: "Lawyer",
    primary: "#8A5A12",
    surface: "#FBE9D2",
    dark: "#5E3C0A",
    darkPrimary: "#E8B563",
    darkSurface: "#3A2A10",
  },
  judge: {
    // Neutrality IS the identity — no color tint, ever. Rendered with the
    // shared border-strong ink tone and a 2px outline instead of a fill, in
    // both themes (dark mode uses the shared near-white/near-black ink
    // tones instead of a brightened "accent").
    label: "Judge",
    primary: "#1A1C1D",
    surface: "#F3F3F4",
    dark: "#000000",
    darkPrimary: "#F3F3F4",
    darkSurface: "#2A2C2D",
    neutral: true,
  },
  lawFirm: {
    label: "Law Firm",
    primary: "#0E5A7A",
    surface: "#D2EEFB",
    dark: "#083C52",
    darkPrimary: "#6FCBEF",
    darkSurface: "#0C2733",
  },
  // Pakistan flag green — reserved for the Policymakers portal specifically
  // (public-institution/state-facing audience). This intentionally reuses
  // the same "Pakistan Green" value as the sitewide --verified token; it's
  // the one deliberate exception to "portal color never overrides verified
  // green" in the base Kitab spec.
  policymaker: {
    label: "Policymaker",
    primary: "#01411C",
    surface: "#DCF3DC",
    dark: "#012B12",
    darkPrimary: "#4CAF72",
    darkSurface: "#15301C",
  },
  institution: {
    // Legal Institutions — left as originally set (unchanged), separate
    // from Policymakers' Pakistan-green identity.
    label: "Institution",
    primary: "#8A1F1F",
    surface: "#FBDCDC",
    dark: "#5E1414",
    darkPrimary: "#E58080",
    darkSurface: "#351212",
  },
};

// Maps each marketing page path to its portal identity key.
export const portalByPath = {
  "/citizens": "citizen",
  "/law-students": "student",
  "/lawyers": "lawyer",
  "/law-firms": "lawFirm",
  "/judges": "judge",
  "/policymakers": "policymaker",
  "/legal-institutions": "institution",
};

export const getPortal = (path) => portals[portalByPath[path]] || null;

// Maps each pricing tier (`src/data/marketing.js` → `pricingPlans[].name`) to
// the portal it's tinted with — shared by the full pricing page and the
// homepage pricing preview so the two never drift apart.
//   Free          → Citizen  (everyday individuals)
//   Student       → Student
//   Practitioner  → Lawyer   (solo/junior lawyer tier)
//   Professional  → Judge    (senior practice/judicial-adjacent research tier)
//   Organization  → Institution (teams, firms, colleges, institutions — red)
export const planPortals = {
  Free: portals.citizen,
  Student: portals.student,
  Practitioner: portals.lawyer,
  Professional: portals.judge,
  Organization: portals.institution,
};

// Resolves the theme-correct {primary, surface} pair for a portal. Pass the
// current `darkMode` boolean (from `useTheme()`) so components render the
// dark-tuned tokens instead of blindly reusing light-mode pastels.
export const resolvePortalColors = (portal, darkMode) => {
  if (!portal) return null;
  return darkMode
    ? { primary: portal.darkPrimary, surface: portal.darkSurface }
    : { primary: portal.primary, surface: portal.surface };
};

// ─────────────────────────────────────────────────────────────────────────
// Law category taxonomy — fixed, semantic, never portal-tinted.
// Includes the canonical 10-category legal taxonomy plus the editorial
// categories actually used on Wakeel's journal (Legal Help, AI & the Law,
// Law Study & Research) mapped onto the same palette family.
// ─────────────────────────────────────────────────────────────────────────
export const categoryColors = {
  Criminal: { bg: "#FBDCDC", text: "#8A1F1F" },
  Constitutional: { bg: "#FBDCE8", text: "#8A1F4B" },
  Family: { bg: "#EBDCFB", text: "#4B2585" },
  Property: { bg: "#FBEBD2", text: "#8A5A12" },
  Labour: { bg: "#DCF3DC", text: "#1F6B2C" },
  Finance: { bg: "#D2F3EF", text: "#0E5A54" },
  Cyber: { bg: "#DCE0FB", text: "#1F2585" },
  Civil: { bg: "#DCE6FB", text: "#1A3D8A" },
  Tax: { bg: "#FBF6D2", text: "#7A6A0E" },
  Corporate: { bg: "#D2EEFB", text: "#0E5A7A" },
  // Editorial categories used on the Wakeel journal today.
  "Legal Help": { bg: "#DCEAFB", text: "#14467A" },
  "AI & the Law": { bg: "#DCE0FB", text: "#1F2585" },
  "Law Study & Research": { bg: "#EBDCFB", text: "#4B2585" },
};

const FALLBACK_PALETTE = Object.values(categoryColors);

// Deterministic fallback so any category coming from the CMS (not in the
// fixed taxonomy above) still gets a stable, distinct chip color instead of
// falling back to a single generic gray for everything.
const hashString = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i += 1) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
};

export const getCategoryStyle = (category) => {
  if (!category) return null;
  if (categoryColors[category]) return categoryColors[category];
  const idx = hashString(category) % FALLBACK_PALETTE.length;
  return FALLBACK_PALETTE[idx];
};

// ─────────────────────────────────────────────────────────────────────────
// Guide → law-category classification. The `guides` entries in marketing.js
// (Pakistan/GCC/Global legal guides — 80+ pages) don't carry an explicit
// category field, so this derives one from the guide's title/slug against
// the taxonomy above. Order matters: more specific keywords are checked
// before general ones (e.g. "constitution" before generic "rights").
// ─────────────────────────────────────────────────────────────────────────
const GUIDE_CATEGORY_KEYWORDS = [
  ["Constitutional", ["constitution", "fundamental right", "writ", "article 199", "human right", "minority right", "high court jurisdiction"]],
  ["Family", ["marriage", "divorce", "talaq", "custody", "nikah", "inheritance", "daughter", "wani", "swara", "haq mehr", "family law", "guardianship", "domestic"]],
  ["Cyber", ["cyber", "online fraud", "hacking", "nccia", "peca", "deepfake", "social media law", "biometric", "nadra", "privacy recording", "harassment online"]],
  ["Criminal", ["fir", "arrest", "bail", "murder", "rape", "theft", "robbery", "dacoity", "criminal law", "ppc", "crpc", "police", "kidnap", "extortion", "assault", "drug law", "false fir", "section 302", "section 377", "section 420", "section 375", "section 376"]],
  ["Tax", ["tax"]],
  ["Finance", ["loan", "debt", "bank", "finance"]],
  ["Property", ["property", "rent", "tenant", "landlord", "mutation", "real estate", "land dispute", "buying"]],
  ["Labour", ["employment", "labor", "labour", "wrongful termination", "workplace"]],
  ["Corporate", ["business law", "company", "corporate", "commercial law"]],
  ["Civil", ["civil suit", "civil law", "consumer complaint", "legal notice", "contract", "legal document", "dispute"]],
];

export const getGuideCategory = (guide) => {
  if (!guide) return null;
  const haystack = `${guide.title || ""} ${guide.slug || ""}`.toLowerCase();
  for (const [category, keywords] of GUIDE_CATEGORY_KEYWORDS) {
    if (keywords.some((kw) => haystack.includes(kw))) return category;
  }
  return "Civil";
};
