# Wakeel.org - Development Tracker

**Project:** Legal Technology Platform Marketing Website  
**Repository:** wakeel.org  
**Last Updated:** December 19, 2025  
**Status:** Active Development

---

## Table of Contents
- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Development Timeline](#development-timeline)
- [Phase 1: Auth & AI Removal](#phase-1-auth--ai-removal)
- [Phase 2: Home Page Design Enhancement](#phase-2-home-page-design-enhancement)
- [Phase 3: New Sections Addition](#phase-3-new-sections-addition)
- [Phase 4: Professional Refinements](#phase-4-professional-refinements)
- [Current Features](#current-features)
- [Component Structure](#component-structure)
- [Future Roadmap](#future-roadmap)

---

## Project Overview

Wakeel.org is a marketing and landing website for a legal technology platform that serves the entire legal ecosystem - from individuals seeking to understand their rights to institutions shaping legal frameworks.

**Mission:** Empowering Justice Through Reliable Solutions

**Target Audience:**
- Individuals & Citizens (understanding law from palm of their hand)
- Law Students
- Lawyers & Advocates
- Judges & Senior Legal Professionals
- Policymakers
- Legal Institutions & Organizations

---

## Tech Stack

### Frontend
- **Framework:** Next.js 14.0.4 (Pages Router)
- **UI Library:** React 18.2.0
- **Language:** JavaScript/TypeScript 5.7.2
- **Styling:** Tailwind CSS 3.3.6
- **Icons:** Lucide React, React Icons
- **UI Components:** Radix UI (shadcn/ui pattern)

### Backend Services
- **Database:** Firebase Firestore
- **Collections:**
  - `team_members` - Team profiles
  - `company_timeline` - Company history
  - `website_faqs` - FAQ items
  - `website_queries` - Contact form submissions
  - `subscribed_users` - Email newsletter

### Utilities
- **HTTP Client:** Axios 1.6.2
- **Utilities:** Lodash 4.17.21
- **Markdown:** React Markdown 10.1.0
- **IDs:** UUID 11.1.0
- **Debouncing:** use-debounce 10.0.4

---

## Development Timeline

### Phase 1: Auth & AI Removal ✅
**Date:** December 19, 2025  
**Objective:** Convert platform from full SaaS to marketing website

#### Files Deleted
1. `pages/auth.js` - Authentication page
2. `pages/forgot-password.js` - Password reset
3. `src/services/geminiService.js` - Google Gemini AI integration
4. `src/services/testPdfExtraction.js` - PDF processing
5. `src/lib/auth.js` - Authentication helpers

#### Files Modified
1. **src/components/Navigation.js**
   - Removed user auth state management
   - Removed profile display & dropdown
   - Removed sign-out functionality
   - Simplified to "Get Started" button only

2. **src/components/PricingModal.js**
   - Changed plan selection from auth route to external app
   - All plans now open `wakeel.web.app`

3. **src/config/firebase.js**
   - Removed Firebase Auth initialization
   - Removed Firebase Storage
   - Kept only Firestore

4. **src/firebase/firebaseConfig.js**
   - Removed auth and storage exports
   - Database-only configuration

5. **package.json**
   - Removed `pdfjs-dist` dependency

#### Impact
- ✅ Cleaner codebase focused on marketing
- ✅ Faster load times (removed unused dependencies)
- ✅ All CTAs route to main app (wakeel.web.app)
- ✅ Maintained contact forms, FAQs, email subscriptions

---

### Phase 2: Home Page Design Enhancement ✅
**Date:** December 19, 2025  
**Objective:** Improve landing page aesthetics and remove redundant CTAs

#### Changes Made

1. **Hero Section Enhancement**
   - ✨ Larger typography (text-7xl main heading)
   - 🎨 Enhanced gradient backgrounds
   - 💫 Improved shadow effects (shadow-2xl)
   - 📏 Better spacing (min-height: 500px)
   - 🔘 Larger buttons with enhanced hover effects
   - ✅ Kept "Learn More" button beside "Get Started"

2. **Vision & Mission Card**
   - ✨ Enhanced backdrop blur and transparency
   - 💫 Better shadow and hover effects
   - ❌ Removed "Learn More" links
   - 📝 Cleaner content presentation

3. **Values Section (6 Core Values)**
   - 📐 Larger icons (w-14 h-14) with gradients
   - 🔄 Added rotation animation on hover
   - 📊 Increased card spacing (gap-8)
   - ✨ Enhanced hover effects (scale + shadow)
   - ❌ Removed all "Learn More" buttons
   - 📝 Better typography and spacing

4. **Features Section (4 Key Features)**
   - 📐 Larger icons with gradient backgrounds
   - 🎭 Enhanced hover animations (scale + shadow)
   - 📊 Improved spacing between cards
   - 🌫️ Better backdrop blur effects
   - ❌ Removed all "Learn More" buttons

5. **CTA Section**
   - 📏 Larger heading (text-6xl)
   - 🎨 Gradient background
   - 📊 Increased padding and spacing

#### Files Modified
- `src/components/Hero.js`
- `src/components/Values.js`
- `src/components/Features.js`
- `pages/index.js`

#### Design Improvements
- 🎨 Consistent gradient backgrounds
- 💫 Enhanced shadows for depth
- 🎭 Smooth hover animations
- 📊 Better spacing and breathing room
- 📝 Improved typography hierarchy
- 🌫️ Backdrop blur effects

---

### Phase 3: New Sections Addition ✅
**Date:** December 19, 2025  
**Objective:** Add "Who Is This For" and "Pricing" sections

#### New Components Created

1. **WhoIsThisFor.js** (`src/components/WhoIsThisFor.js`)
   - **Purpose:** Showcase target audiences
   - **Layout:** 3-column responsive grid
   - **Target Audiences:**
     - Law Students
     - Lawyers & Advocates
     - Judges
     - Law Firms
     - Policymakers
     - Legal Institutions
   - **Features:**
     - Gradient icon backgrounds
     - Hover animations (scale + rotate)
     - Staggered fade-in animations
     - Feature bullets for each audience

2. **Pricing.js** (`src/components/Pricing.js`)
   - **Purpose:** Display pricing tiers
   - **Layout:** 3-column responsive grid
   - **Original Plans:**
     - Basic: $5/mo
     - Professional: $12.5/mo (Popular)
     - Enterprise: $20/mo
   - **Features:**
     - "Popular" badge with pulse
     - Gradient backgrounds
     - Icon animations
     - Checkmark features with fade-in
     - Links to wakeel.web.app

#### Animation System
**File:** `styles/globals.css`

```css
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
```

#### Section Order (Optimized)
1. Hero
2. **Who Is This For** ⭐ NEW
3. Values
4. Features
5. **Pricing** ⭐ NEW
6. CTA + Email Subscription

---

### Phase 4: Professional Refinements ✅
**Date:** December 19, 2025 (Current)  
**Objective:** Professional title, add individuals as target, implement 4-tier Indian pricing

#### Changes Made

1. **"Who Is This For" Section Refinement**
   
   **New Title:** "Empowering Every Mind"
   
   **Updated Description:**
   > "From individuals seeking to understand their rights to institutions shaping legal frameworks — our platform serves everyone in the legal ecosystem with tailored solutions for every need."
   
   **Added Audience:**
   - 📱 **Individuals & Citizens** (Priority #1)
     - Description: "Understand complex legal matters from the palm of your hand"
     - Features: Legal Rights Guide, Document Templates, Legal Q&A
     - Icon: Smartphone
   
   **Reordered Audiences:**
   1. Individuals & Citizens 🆕
   2. Law Students
   3. Lawyers & Advocates
   4. Judges
   5. Policymakers
   6. Legal Institutions

2. **Pricing Tier Restructure**
   
   **New 4-Tier System:**
   
   | Tier | Monthly | Yearly | Target Audience | Savings |
   |------|---------|--------|-----------------|---------|
   | **Free** | PKR 0 | PKR 0 | Individuals & Beginners | - |
   | **Students** | PKR 199 | PKR 1,999 | Law Students & Learners | 16% |
   | **Professionals** | PKR 4,999 | PKR 49,000 | Lawyers, Judges & Advocates | 18% |
   | **Organizations** | Starting from PKR 9,999 | Custom | Firms & Institutions | Custom |

   **Pricing Features:**
   
   ✨ **Free Tier**
   - 5 Legal Document Templates
   - Basic Legal Information
   - Know Your Rights Guide
   - Community Support
   - 2 GB Storage
   - Mobile Access
   
   🎓 **Students Tier (Popular)**
   - 50 Legal Document Templates
   - Advanced Legal Research
   - Study Resources & Guides
   - Case Analysis Tools
   - Email Support
   - 25 GB Storage
   - Mobile & Web Access
   - Research Database Access
   
   ⚖️ **Professionals Tier**
   - Unlimited Document Templates
   - Premium Legal Research
   - Case Management Tools
   - Advanced Case Analytics
   - Client Portal Access
   - Priority Support
   - 200 GB Storage
   - API Access
   - Document Automation
   - Precedent Database
   
   🏢 **Organizations Tier**
   - Everything in Professionals Plan
   - Unlimited Team Members
   - White-label Options
   - Dedicated Account Manager
   - Unlimited Storage
   - Custom Workflows
   - Advanced Analytics Dashboard
   - On-premise Deployment Option
   - SLA Guarantee
   - 24/7 Phone Support
   - **Button:** "Contact Sales" (custom pricing)

3. **Billing Cycle Toggle**
   - Monthly/Yearly switcher
   - "Save 18%" badge on yearly option (maximum savings)
   - Smooth transition animation
   - State management with React hooks
   - Removed "/month" and "/year" suffixes (clear from toggle)

#### Files Modified
- `src/components/WhoIsThisFor.js`
- `src/components/Pricing.js`

#### Key Improvements
- 🌍 Professional and engaging title
- 👥 Emphasis on common citizens (layman)
- 💰 Pakistani pricing in PKR (Rupees)
- 🆓 Free tier for accessibility
- 💼 Professional tiers aligned with user roles (Students, Professionals, Organizations)
- 📊 Monthly/Yearly billing flexibility
- 💎 Up to 18% savings on annual plans
- 🤝 "Contact Sales" option for Organizations tier

---

## Current Features

### ✅ Implemented

**Pages:**
- ✅ Home (Landing page with all sections)
- ✅ About (Team, Timeline)
- ✅ Services (Service overview)
- ✅ Contact (Form + FAQs)
- ✅ Privacy Policy
- ✅ Terms of Service
- ✅ Custom 404

**Home Page Sections:**
1. ✅ Hero - Main introduction with CTAs
2. ✅ Who Is This For - Target audience showcase
3. ✅ Core Values - 6 principle cards
4. ✅ Features - 4 main capabilities
5. ✅ Pricing - 4-tier pricing with monthly/yearly toggle
6. ✅ CTA + Email Subscription

**Components:**
- ✅ Navigation with theme toggle
- ✅ Responsive mobile menu
- ✅ Pricing modal
- ✅ Email subscription form
- ✅ Contact form with Firestore integration
- ✅ Theme context (dark/light mode)
- ✅ Loading states and spinners

**Features:**
- ✅ Dark/Light mode with localStorage persistence
- ✅ Responsive design (mobile-first)
- ✅ Smooth animations and transitions
- ✅ Form validation and sanitization
- ✅ Firebase Firestore integration
- ✅ External app linking (wakeel.web.app)

---

## Component Structure

```
src/
├── components/
│   ├── EmailSubscription.js      # Newsletter signup
│   ├── Features.js                # 4 main features grid
│   ├── Hero.js                    # Landing hero section
│   ├── Layout.js                  # Page wrapper with nav/footer
│   ├── Loading.js                 # Loading screen
│   ├── LoadingSpinner.js          # Spinner component
│   ├── Navigation.js              # Header navigation
│   ├── Pricing.js                 # Pricing section with toggle ⭐
│   ├── PricingModal.js            # Pricing modal popup
│   ├── ThemeToggle.js             # Dark/Light mode switcher
│   ├── Values.js                  # 6 core values grid
│   ├── WhoIsThisFor.js            # Target audiences ⭐
│   └── ui/
│       ├── button.js              # Button component
│       ├── card.js                # Card component
│       └── input.js               # Input component
│
├── config/
│   └── firebase.js                # Firebase configuration
│
├── context/
│   └── ThemeContext.js            # Theme state management
│
├── firebase/
│   ├── firebaseConfig.js          # Firebase setup
│   └── collections.js             # Firestore helpers
│
├── hooks/
│   └── useFirebaseContent.js      # Firebase data hooks
│
└── lib/
    ├── firebase.js                # Firebase utilities
    └── utils.js                   # Helper functions

pages/
├── _app.js                        # App wrapper
├── _document.js                   # HTML document
├── index.js                       # Home page ⭐
├── about.js                       # About page
├── contact.js                     # Contact page
├── services.js                    # Services page
├── privacy.js                     # Privacy policy
├── terms.js                       # Terms of service
└── 404.js                         # 404 page
```

⭐ = Recently added or significantly modified

---

## Firebase Collections

### Firestore Database Structure

#### `team_members`
```javascript
{
  id: string,
  name: string,
  role: string,
  bio: string,
  image: string,
  order: number
}
```

#### `company_timeline`
```javascript
{
  id: string,
  year: string,
  title: string,
  description: string,
  order: number
}
```

#### `website_faqs`
```javascript
{
  id: string,
  question: string,
  answer: string,
  category: string,
  order: number
}
```

#### `website_queries`
```javascript
{
  id: string,
  name: string,
  email: string,
  subject: string,
  message: string,
  timestamp: timestamp,
  status: string // 'new', 'replied', 'closed'
}
```

#### `subscribed_users`
```javascript
{
  id: string,
  email: string,
  timestamp: timestamp,
  source: string // 'homepage', 'footer', etc.
}
```

---

## Future Roadmap

### Short-term (Next Sprint)
- [ ] Add testimonials section
- [ ] Implement blog/news section
- [ ] Add case studies page
- [ ] Create resources/downloads section
- [ ] Add FAQ accordion on home page
- [ ] Implement search functionality
- [ ] Add live chat widget integration
- [ ] Create onboarding flow for new users

### Medium-term (Next Quarter)
- [ ] Multi-language support (Hindi, English)
- [ ] Regional pricing for different states
- [ ] Partner/Integration showcase
- [ ] Video testimonials
- [ ] Interactive demo/tour
- [ ] Comparison table with competitors
- [ ] Trust badges and certifications
- [ ] Performance analytics dashboard

### Long-term (6+ Months)
- [ ] A/B testing framework
- [ ] Advanced SEO optimization
- [ ] Progressive Web App (PWA)
- [ ] Referral program page
- [ ] Affiliate program portal
- [ ] White-label solution showcase
- [ ] API documentation portal
- [ ] Developer resources

---

## Performance Metrics

### Target Benchmarks
- **Lighthouse Score:** 90+
- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3.5s
- **Total Bundle Size:** < 500KB

### Current Status
- ✅ No TypeScript errors
- ✅ No ESLint errors
- ✅ Responsive across all devices
- ✅ Accessible (WCAG 2.1 Level AA compliant)

---

## Design System

### Color Palette
- **Primary:** Custom theme-based (light/dark mode)
- **Background:** Dynamic (white/dark gray)
- **Foreground:** Dynamic text color
- **Muted:** Secondary text and backgrounds
- **Accent:** Interactive elements

### Typography
- **Headings:** Bold, tracking-tighter
- **Body:** Regular, leading-relaxed
- **CTAs:** Medium weight, uppercase tracking

### Spacing Scale
- **Sections:** py-20 to py-32
- **Cards:** p-6 to p-10
- **Grid Gaps:** gap-6 to gap-8

### Animation Duration
- **Hover:** 300ms
- **Fade In:** 600ms
- **Transitions:** ease-out

---

## Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Deploy to Firebase
npm run deploy
```

---

## Environment Variables

```env
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=
```

---

## Browser Support

- ✅ Chrome (latest 2 versions)
- ✅ Firefox (latest 2 versions)
- ✅ Safari (latest 2 versions)
- ✅ Edge (latest 2 versions)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## Notes & Best Practices

### Code Quality
- Use TypeScript types where possible
- Follow React best practices (hooks, composition)
- Maintain component modularity
- Keep components under 300 lines
- Use meaningful variable names

### Performance
- Lazy load images
- Code split by route
- Minimize bundle size
- Use React.memo for expensive renders
- Debounce search/filter inputs

### Accessibility
- Semantic HTML elements
- ARIA labels where needed
- Keyboard navigation support
- Focus management
- Screen reader friendly

### Security
- Sanitize all user inputs
- Validate form data server-side
- Use environment variables for secrets
- Implement rate limiting on forms
- Follow OWASP guidelines

---

## Contact & Support

**Project Lead:** Development Team  
**Repository:** github.com/[username]/wakeel.org  
**Production URL:** wakeel.org  
**Main Application:** wakeel.web.app

---

**Last Updated:** December 19, 2025  
**Document Version:** 1.0  
**Next Review:** January 19, 2026
