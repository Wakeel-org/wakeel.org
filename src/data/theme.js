// Shared Tailwind class tokens for the Wakeel.org marketing surface.
//
// These mirror the signature design idioms used by the original committed
// components (Hero, Features, Values, WhoIsThisFor): large `tracking-tighter`
// gradient headings, generous vertical rhythm, and lively card hover motion.
// Importing these everywhere keeps new marketing pages on-theme and prevents
// the scale/rhythm/motion drift that crept into the redesign.

// Hero H1 — large, tight tracking. Pair with `headingGradient` on the text you
// want to render as the brand gradient (usually a wordmark or key phrase).
// Capped at md:text-6xl because most Wakeel headings are full sentences; the
// original single-word wordmark hero used lg:text-7xl.
export const heroHeading =
  "text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter";

// Section H2 — one step down from the hero.
export const sectionHeading =
  "text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl";

// Brand gradient text treatment (apply to a heading or wordmark).
export const headingGradient =
  "bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-primary/70";

// Section vertical rhythm.
export const sectionPad = "py-16 sm:py-20 lg:py-24";

// Standard content card — includes `group` so nested icon tiles animate on
// card hover. Use on grid/list cards (not full-bleed hero cards).
export const cardBase =
  "group hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border-muted/50 bg-card/50 backdrop-blur-sm";

// Gradient icon tile that lives inside a `cardBase` (group) card.
export const iconTile =
  "w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300";
