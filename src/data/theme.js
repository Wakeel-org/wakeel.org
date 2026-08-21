// Shared Tailwind class tokens for the Wakeel.org marketing surface.
//
// Kitab Edition v1.0 — a flat, document-grade interface where structure
// comes from hairline/2px borders and a strict type hierarchy, not shadows
// or gradients. Space Grotesk carries display/heading weight; Inter carries
// body copy; color is spent on legal meaning (verified/status/portal
// identity), never on decoration. These tokens are imported by ~90 pages
// (marketing pages + every journal article), so changes here are sitewide.

// Hero H1 — large, tight tracking, Space Grotesk display weight.
export const heroHeading =
  "font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter";

// Section H2 — one step down from the hero.
export const sectionHeading =
  "font-display text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl";

// Solid heading treatment — flat ink color, no gradient fill. Kept as a
// named export so existing `${heroHeading} ${headingGradient}` call sites
// don't need touching; it now resolves to the flat foreground tone.
export const headingGradient = "text-foreground";

// Section vertical rhythm.
export const sectionPad = "py-16 sm:py-20 lg:py-24";

// Standard content card — flat elevation (2px ink border, no shadow). Motion
// is a small lift + border-to-primary shift instead of shadow/scale, mirroring
// the Kitab portal card spec (`transform: translateY(-3px)` on hover).
// Includes `group` so nested icon tiles animate on card hover.
export const cardBase =
  "group border-2 border-foreground/15 hover:border-foreground/60 hover:-translate-y-0.5 transition-all duration-300 bg-card shadow-none";

// Flat icon tile that lives inside a `cardBase` (group) card — bordered
// square, not a gradient fill.
export const iconTile =
  "w-14 h-14 rounded-lg border-2 border-primary/30 bg-primary/5 flex items-center justify-center text-primary mb-4 group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300";

// JetBrains-Mono label treatment — uppercase, wide-tracked, bold. Use for
// eyebrows, stamps, and metadata rows.
export const monoLabel =
  "font-mono text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground";
