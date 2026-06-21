# Wakeel.org Design System

A comprehensive guide to replicate the design and branding of Wakeel.org across all platforms.

---

## Brand Identity

### Brand Name
- **Full Name:** Wakeel.org
- **Tagline:** "Pakistan's AI Legal Assistant — in your pocket"
- **Secondary Tagline:** "Ask in English or Urdu, analyze documents, and research Pakistani law on Android, iOS, and web"

### Logos
| Logo | File | Usage |
|------|------|-------|
| Dark Logo | `/public/logo-dark.svg` | Light theme/backgrounds |
| Light Logo | `/public/logo-light.svg` | Dark theme/backgrounds |

### Brand Positioning
- Mobile-first, Pakistan-focused AI legal assistant (Android, iOS & web)
- Categories: Legal, Productivity, Business
- Target: Citizens, law students, lawyers, law firms, judges, policymakers, and legal institutions

---

## Typography

### Primary Font
```css
font-family: 'Space Grotesk', sans-serif;
```

**Google Fonts Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
```

### Font Weights
| Weight | Value | Usage |
|--------|-------|-------|
| Light | 300 | Subtle text, captions |
| Regular | 400 | Body text, descriptions |
| Medium | 500 | Navigation, labels |
| Semi-bold | 600 | Subheadings, emphasis |
| Bold | 700 | Headings, titles, brand name |

### Typography Scale
| Element | Classes | Size (Desktop) |
|---------|---------|----------------|
| H1 (Hero) | `text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter` | 72px |
| H2 (Section) | `text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl` | 48px |
| H3 (Card Title) | `text-xl sm:text-2xl font-semibold` | 24px |
| Body Large | `text-base sm:text-lg leading-relaxed` | 18px |
| Body | `text-sm sm:text-base` | 16px |
| Small | `text-xs sm:text-sm` | 14px |
| Caption | `text-[10px] uppercase font-medium` | 10px |

---

## Color System

### CSS Variables (HSL Format)

#### Light Theme (`:root`)
```css
:root {
  --background: 0 0% 100%;           /* #ffffff - White */
  --foreground: 222.2 84% 4.9%;      /* #030712 - Near Black */
  
  --card: 0 0% 100%;                 /* #ffffff */
  --card-foreground: 222.2 84% 4.9%; /* #030712 */
  
  --popover: 0 0% 100%;              /* #ffffff */
  --popover-foreground: 222.2 84% 4.9%; /* #030712 */
  
  --primary: 222.2 47.4% 11.2%;      /* #1a202c - Dark Blue/Black */
  --primary-foreground: 210 40% 98%; /* #f8fafc - Light */
  
  --secondary: 210 40% 96.1%;        /* #f1f5f9 - Light Gray */
  --secondary-foreground: 222.2 47.4% 11.2%; /* #1a202c */
  
  --muted: 210 40% 96.1%;            /* #f1f5f9 - Light Gray */
  --muted-foreground: 215.4 16.3% 46.9%; /* #64748b - Gray */
  
  --accent: 210 40% 96.1%;           /* #f1f5f9 */
  --accent-foreground: 222.2 47.4% 11.2%; /* #1a202c */
  
  --destructive: 0 84.2% 60.2%;      /* #ef4444 - Red */
  --destructive-foreground: 210 40% 98%; /* #f8fafc */
  
  --border: 214.3 31.8% 91.4%;       /* #e2e8f0 - Light Border */
  --input: 214.3 31.8% 91.4%;        /* #e2e8f0 */
  --ring: 222.2 84% 4.9%;            /* #030712 - Focus Ring */
  
  --radius: 0.5rem;                  /* 8px - Border Radius */
}
```

#### Dark Theme (`.dark`)
```css
.dark {
  --background: 222.2 84% 4.9%;      /* #030712 - Near Black */
  --foreground: 210 40% 98%;         /* #f8fafc - White */
  
  --card: 222.2 84% 4.9%;            /* #030712 */
  --card-foreground: 210 40% 98%;    /* #f8fafc */
  
  --popover: 222.2 84% 4.9%;         /* #030712 */
  --popover-foreground: 210 40% 98%; /* #f8fafc */
  
  --primary: 210 40% 98%;            /* #f8fafc - Light */
  --primary-foreground: 222.2 47.4% 11.2%; /* #1a202c */
  
  --secondary: 217.2 32.6% 17.5%;    /* #1e293b - Dark Gray */
  --secondary-foreground: 210 40% 98%; /* #f8fafc */
  
  --muted: 217.2 32.6% 17.5%;        /* #1e293b */
  --muted-foreground: 215 20.2% 65.1%; /* #94a3b8 - Light Gray */
  
  --accent: 217.2 32.6% 17.5%;       /* #1e293b */
  --accent-foreground: 210 40% 98%;  /* #f8fafc */
  
  --destructive: 0 62.8% 30.6%;      /* #7f1d1d - Dark Red */
  --destructive-foreground: 210 40% 98%; /* #f8fafc */
  
  --border: 217.2 32.6% 17.5%;       /* #1e293b */
  --input: 217.2 32.6% 17.5%;        /* #1e293b */
  --ring: 212.7 26.8% 83.9%;         /* #c4cdd9 - Light Ring */
}
```

### Brand Color (Theme Color)
```css
theme_color: #3b82f6  /* Blue - Used in PWA manifest */
```

### Quick Reference HEX Values
| Token | Light Mode | Dark Mode |
|-------|------------|-----------|
| Background | `#ffffff` | `#030712` |
| Foreground | `#030712` | `#f8fafc` |
| Primary | `#1a202c` | `#f8fafc` |
| Muted | `#f1f5f9` | `#1e293b` |
| Muted Foreground | `#64748b` | `#94a3b8` |
| Border | `#e2e8f0` | `#1e293b` |
| Destructive | `#ef4444` | `#7f1d1d` |

---

## Spacing & Layout

### Container
```css
.container {
  max-width: 1280px; /* max-w-7xl */
  margin: 0 auto;
  padding: 0 1rem;   /* px-4 */
}

/* Responsive padding */
sm: padding: 0 1.5rem; /* sm:px-6 */
lg: padding: 0 2rem;   /* lg:px-8 */
```

### Section Spacing
```css
/* Standard section */
padding: 3rem 0;      /* py-12 */
sm: padding: 4rem 0;  /* sm:py-16 */

/* Large section */
padding: 5rem 0;      /* py-20 */
sm: padding: 6rem 0;  /* sm:py-24 */
```

### Grid System
```css
/* 3-column grid */
grid-cols-1 md:grid-cols-3 gap-8

/* 2-column grid */
grid-cols-1 md:grid-cols-2 gap-8

/* 4-column footer */
grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8
```

### Border Radius
```css
--radius: 0.5rem;  /* 8px - Default */

/* Usage */
rounded-md:  6px
rounded-lg:  8px  (default cards)
rounded-xl:  12px (icons, badges)
rounded-full: 9999px (pills, avatars)
```

---

## Components

### Button Variants

```jsx
// Default (Primary)
className="bg-primary text-primary-foreground hover:bg-primary/90"

// Destructive
className="bg-destructive text-destructive-foreground hover:bg-destructive/90"

// Outline
className="border border-input bg-background hover:bg-accent hover:text-accent-foreground"

// Secondary
className="bg-secondary text-secondary-foreground hover:bg-secondary/80"

// Ghost
className="hover:bg-accent hover:text-accent-foreground"

// Link
className="text-primary underline-offset-4 hover:underline"
```

### Button Sizes
```jsx
// Default
className="h-10 px-4 py-2"

// Small
className="h-9 rounded-md px-3"

// Large
className="h-11 rounded-md px-8"

// Icon
className="h-10 w-10"

// Extra Large (Hero)
className="py-5 sm:py-6 px-6 sm:px-8"
```

### Card Component
```jsx
// Base Card
className="rounded-lg border bg-card text-card-foreground shadow-sm"

// Feature Card (with hover)
className="hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border-muted/50 bg-card/50 backdrop-blur-sm"

// Hero Card
className="border-none shadow-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-background"

// Vision Card
className="border-none shadow-2xl bg-card/80 backdrop-blur-md hover:shadow-3xl transition-shadow duration-300"
```

### Input Component
```jsx
className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
```

### Icon Container
```jsx
// Icon wrapper for feature cards
className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-primary"

// Icon with hover
className="group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
```

---

## Effects & Animations

### Shadows
```css
shadow-sm     /* Subtle - Navigation bar */
shadow-lg     /* Buttons hover */
shadow-xl     /* Cards hover */
shadow-2xl    /* Hero cards */
shadow-3xl    /* Featured cards hover */
```

### Backdrop Blur
```css
backdrop-blur-sm   /* Subtle blur */
backdrop-blur-md   /* Medium blur */
backdrop-blur-lg   /* Navigation bar */
backdrop-blur-xl   /* Mobile menu */
```

### Transitions
```css
/* Standard transition */
transition-colors

/* All properties */
transition-all duration-300

/* Shadow transition */
transition-shadow duration-300
```

### Custom Animations

```css
/* Fade In Animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.6s ease-out forwards;
  opacity: 0;
}

/* Pulse (Tailwind built-in) */
animate-pulse /* Used for promotional badges */
```

### Hover Effects
```css
/* Card scale */
hover:scale-[1.02]

/* Icon effects */
group-hover:scale-110
group-hover:rotate-3

/* Color transitions */
hover:text-primary
hover:bg-primary/5
hover:bg-muted/50
```

---

## Icon Library

**Package:** `lucide-react`

### Commonly Used Icons
```jsx
import { 
  Shield,        // Vision, Integrity, Security
  Target,        // Mission
  Search,        // Legal Research
  Briefcase,     // Case Management, Professionalism
  FileText,      // Policy, Documents
  GraduationCap, // Professional Development, Students
  Scale,         // Justice, Legal
  Building,      // Organizations
  Lightbulb,     // Innovation
  Star,          // Excellence
  Users,         // Dependability, Community
  Check,         // Checkmarks, Features
  Sparkles,      // Promotional highlights
  Menu,          // Mobile menu open
  X,             // Mobile menu close
  Sun,           // Light theme
  Moon,          // Dark theme
  Mail,          // Email/Contact
  MapPin,        // Location
  Smartphone,    // Mobile/Free plan
} from 'lucide-react';
```

### Social Icons
**Package:** `react-icons/fa`
```jsx
import { 
  FaGooglePlay, 
  FaApple,
  FaFacebook,    // Also available as Facebook from lucide
  FaInstagram,   // Also available as Instagram from lucide
  FaLinkedin,    // Also available as Linkedin from lucide
} from 'react-icons/fa';
```

---

## Gradients

### Text Gradient (Hero Title)
```jsx
className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-primary/70"
```

### Background Gradient (Hero Card)
```jsx
className="bg-gradient-to-br from-primary/10 via-primary/5 to-background"
// Dark variant
dark:from-primary/20 dark:via-primary/10 dark:to-background
```

### Icon Background Gradient
```jsx
className="bg-gradient-to-br from-primary/20 to-primary/10"
```

---

## Responsive Breakpoints

| Breakpoint | Min Width | Usage |
|------------|-----------|-------|
| `sm` | 640px | Small devices |
| `md` | 768px | Tablets, Show desktop nav |
| `lg` | 1024px | Laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Large screens |

---

## Navigation Pattern

### Desktop
- Horizontal navigation with logo on left
- Menu items center-right
- "Get Started" CTA button
- Theme toggle (Sun/Moon icons)

### Mobile
- Logo and brand name
- Theme toggle visible
- Hamburger menu (Menu/X icons)
- Full-width dropdown menu
- Stacked navigation links
- Full-width CTA button

---

## Social Media Links

| Platform | URL |
|----------|-----|
| Facebook | https://www.facebook.com/aiwakeel |
| Instagram | https://www.instagram.com/wakeel_org |
| LinkedIn | https://www.linkedin.com/company/wakeelai/ |

---

## App Store Links

| Store | URL |
|-------|-----|
| Google Play | https://play.google.com/store/apps/details?id=pk.digit.aiwakeel |
| App Store (TestFlight) | https://testflight.apple.com/join/ZVgHgqF7 |
| Web App | https://app.wakeel.org |

---

## Dependencies

```json
{
  "dependencies": {
    "@radix-ui/react-slot": "^x.x.x",
    "class-variance-authority": "^x.x.x",
    "clsx": "^x.x.x",
    "lucide-react": "^x.x.x",
    "react-icons": "^x.x.x",
    "tailwind-merge": "^x.x.x",
    "tailwindcss": "^x.x.x"
  }
}
```

### Utility Function
```js
// src/lib/utils.js
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
```

---

## Theme Implementation

### ThemeContext Pattern
```jsx
// Wrap app with ThemeProvider
// Use useTheme() hook to access darkMode and setDarkMode
// Toggle dark class on document.documentElement
// Persist preference in localStorage
// Respect system preference (prefers-color-scheme)
```

### HTML Implementation
```html
<html class="dark"> <!-- Add/remove for theme switching -->
```

---

## SEO & Meta

```html
<title>Wakeel.org - Trusted Guardians of Legal Excellence</title>
<meta name="description" content="Empowering Justice Through Reliable Solutions - Wakeel.org provides comprehensive legal research, case management, and policy development solutions." />
<meta property="og:title" content="Wakeel.org - Trusted Guardians of Legal Excellence" />
<meta property="og:description" content="Empowering Justice Through Reliable Solutions" />
<meta property="og:url" content="https://wakeel.org" />
<meta property="og:site_name" content="Wakeel.org" />
```

---

## Quick Start Checklist

To replicate Wakeel.org design:

1. **Install Space Grotesk font**
2. **Set up CSS variables** (copy light/dark theme values)
3. **Configure Tailwind** with CSS variable colors
4. **Install icon libraries** (lucide-react, react-icons)
5. **Implement theme toggle** with localStorage persistence
6. **Use provided component patterns** for buttons, cards, inputs
7. **Apply consistent spacing** (container max-w-7xl, standard padding)
8. **Follow responsive patterns** (mobile-first with sm/md/lg breakpoints)
9. **Add hover effects** (scale, shadow, color transitions)
10. **Use logos appropriately** (dark logo for light theme, vice versa)

---

*Last updated: Generated from codebase analysis*
