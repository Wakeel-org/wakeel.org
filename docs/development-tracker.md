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
**Date:** December 19, 2025  
**Objective:** Professional title, add individuals as target, implement 4-tier Pakistani pricing

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
   | **Students** | PKR 199 | PKR 1,999 | Law Students & Learners | 17% |
   | **Professionals** | PKR 4,999 | PKR 49,999 | Lawyers, Judges & Advocates | 17% |
   | **Organizations** | Starting from PKR 9,999 | Custom | Firms & Institutions | Custom |

   **Pricing Features:**
   
   ✨ **Free Tier**
   - 25 Daily Legal Queries
   - 3 Daily Chats with Legal PDF Documents
   - Basic Legal Information
   - Know Your Rights Guide
   - Community Support
   - Mobile Access
   
   🎓 **Students Tier (Popular)**
   - Includes Free Plan Features
   - 50 Daily Legal Queries
   - 50 Legal Document Templates
   - 10 Daily Chats with Legal PDF Documents
   - Advanced Legal Research
   - Study Resources & Guides
   - Case Analysis Tools
   - Community Support
   - Mobile & Web Access
   
   ⚖️ **Professionals Tier**
   - Includes Students Plan Features
   - Unlimited Document Templates
   - Premium Legal Research
   - Case Management Tools
   - Advanced Case Analytics
   - Client Portal Access
   - Priority Support
   - API Access
   - Document Automation
   - Precedent Database
   
   🏢 **Organizations Tier**
   - Everything in Professionals Plan
   - Unlimited Team Members
   - White-label Options
   - Dedicated Account Manager
   - Custom Workflows
   - Advanced Analytics Dashboard
   - On-premise Deployment Option
   - SLA Guarantee
   - 24/7 Phone Support
   - **Button:** "Contact Sales" (custom pricing)

3. **Billing Cycle Toggle**
   - Monthly/Yearly switcher
   - "Save 17%" badge on yearly option (maximum savings)
   - Smooth transition animation
   - State management with React hooks
   - Removed "/month" and "/year" suffixes (clear from toggle)

4. **Contact Sales Modal** 🆕
   - Created ContactSalesModal.js component
   - Form fields: name, email, phone, company, message
   - Saves to `web_sales_query` Firestore collection
   - Comprehensive validation to prevent spam:
     - Name: min 2 chars, max 100, no numbers only
     - Email: proper format, max 100 chars
     - Phone: min 10 digits, max 15 digits
     - Company: min 2 chars, max 100 chars
     - Message: min 10 chars, max 1000 chars
     - Spam detection: blocks URLs, HTML, keywords
   - Success/error handling with auto-close
   - Loading states with spinner

#### Files Modified
- `src/components/WhoIsThisFor.js`
- `src/components/Pricing.js`
- `src/components/ContactSalesModal.js` 🆕

#### Key Improvements
- 🌍 Professional and engaging title
- 👥 Emphasis on common citizens (layman)
- 💰 Pakistani pricing in PKR (Rupees)
- 🆓 Free tier for accessibility
- 💼 Professional tiers aligned with user roles
- 📊 Monthly/Yearly billing flexibility
- 💎 Up to 17% savings on annual plans
- 🤝 "Contact Sales" option with lead capture

---

### Phase 5: Branding, Navigation & Contact Updates ✅
**Date:** December 19, 2025  
**Objective:** Complete branding overhaul, navigation restructure, contact info updates, responsive design

#### 1. Database & Form Enhancements

**Email Tracking Field:**
- Added `email_sent: false` (boolean) to `subscribed_users` collection
- Enables tracking of newsletter delivery status
- Default value: `false` (not yet sent)

**Updated Collections:**
```javascript
// subscribed_users
{
  email: string,
  subscribedAt: timestamp,
  status: 'active',
  email_sent: boolean // 🆕
}

// web_sales_query (Organizations tier inquiries)
{
  name: string,
  email: string,
  phone: string,
  company: string,
  message: string,
  timestamp: timestamp,
  status: 'new',
  source: 'pricing_page'
}
```

#### 2. Contact Information Updates

**Footer Updates:**
- ✉️ Email: `info@wakeel.org`
- 📍 Location: Lahore, Pakistan
- 🔗 Social Media:
  - Facebook: https://www.facebook.com/aiwakeel
  - Instagram: https://www.instagram.com/wakeel_org
  - LinkedIn: https://www.linkedin.com/company/wakeelai/
- All links open in new tab with proper security attributes

**Contact Page Updates:**
- Same contact information as footer
- Social media icons with hover effects
- Clickable mailto link for email
- MapPin icon for location

**Files Modified:**
- `src/components/Layout.js` (Footer)
- `pages/contact.js`
- `src/components/EmailSubscription.js`

#### 3. Navigation Restructure

**New Navigation Structure:**
- Home → `/`
- About → `#who-is-this-for` (section link)
- Our Values → `#values` (section link) 🆕
- Features → `#features` (section link)
- Pricing → `#pricing` (section link)
- Contact → `/contact` (separate page)

**Smooth Scroll Implementation:**
```css
html {
  scroll-behavior: smooth;
}
```

**Section IDs Added:**
- `#who-is-this-for` - About section
- `#values` - Our Values section
- `#features` - Features section
- `#pricing` - Pricing section

**Smart Navigation:**
- Links adjust based on current page
- Homepage: `#section`
- Other pages: `/#section`
- Smooth slide-to-section instead of jump

**Files Modified:**
- `src/components/Navigation.js`
- `pages/index.js`
- `styles/globals.css`

#### 4. Responsive Design Overhaul

**Mobile Optimizations (< 640px):**
- Enhanced mobile menu with better spacing
- Scrollable menu if content exceeds viewport
- Touch-friendly tap targets (py-3 px-4)
- Full-width buttons
- Reduced padding and font sizes
- Hidden decorative elements
- Compact navigation bar

**Tablet Optimizations (640px - 1024px):**
- 2-column grid layouts
- Medium-sized buttons and text
- Balanced spacing

**Desktop Optimizations (> 1024px):**
- Full 3-4 column layouts
- Maximum spacing and padding
- All visual effects visible

**Component-Specific Improvements:**

**Navigation:**
- Mobile menu: Opaque background, better organization
- Logo: Responsive sizing (32px → 48px)
- Text hidden on very small screens

**Hero Section:**
- Responsive padding: `py-8 md:py-16 lg:py-24`
- Font sizes: `4xl sm:5xl md:6xl lg:7xl`
- Buttons: Full width on mobile
- Min height: 400px (mobile) → 500px (desktop)

**WhoIsThisFor Section:**
- Grid: 1 col (mobile) → 2 cols (tablet) → 3 cols (desktop)
- Optimized card spacing
- Responsive typography

**Pricing Section:**
- Billing toggle: Smaller on mobile
- Grid: 1 col → 2 cols → 4 cols
- Responsive card scaling

**Files Modified:**
- `src/components/Navigation.js`
- `src/components/Hero.js`
- `src/components/WhoIsThisFor.js`
- `src/components/Pricing.js`
- `src/components/Layout.js`

#### 5. Typography & Branding

**Font Family: Space Grotesk**
- Source: Google Fonts
- Weights: 300, 400, 500, 600, 700
- Applied globally via CSS
- Preconnect for faster loading

**Implementation:**
```css
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

* {
  font-family: 'Space Grotesk', sans-serif;
}
```

**Logo Design:**
- **Arabic Text:** "الوكيل" (Al-Wakeel)
- **English Subtitle:** "THE TRUSTEE, THE DISPOSER OF AFFAIRS"
- **Format:** SVG with crisp rendering
- **Variants:**
  - `logo-light.svg` - Light gray background (#f5f5f5), black text
  - `logo-dark.svg` - Dark background (#1a1a1a), white text
- **Styling:** Rounded corners (rx="20", ry="20")
- **Size:** 120x120px viewBox
- **Optimization:** `shape-rendering: crispEdges`, `text-rendering: optimizeLegibility`

**Logo Placement:**

1. **Favicon:**
   - Adaptive: Switches based on color scheme
   - Default: Light version
   - Dark mode: Dark version
   - Apple touch icon support

2. **Navigation:**
   - Position: Before "Wakeel.org" text
   - Size: 40px (mobile) → 48px (desktop)
   - Theme-adaptive (light/dark switch)
   - Text hidden on very small screens

3. **Footer:**
   - Position: Before "Wakeel.org" text
   - Size: 48px fixed
   - Theme-adaptive

**Files Modified:**
- `styles/globals.css`
- `src/components/Layout.js`
- `src/components/Navigation.js`
- `public/logo-light.svg` 🆕
- `public/logo-dark.svg` 🆕

#### 6. FAQs Update

**Updated seedData.js with 7 comprehensive FAQs:**
1. What is Wakeel.org?
2. Who can use Wakeel.org? (lists all 6 audiences)
3. What are your pricing plans? (accurate PKR pricing)
4. How do I get started? (mentions wakeel.web.app)
5. What support do you provide? (tier-specific)
6. How secure is my data?
7. Where are you located? (Lahore, Pakistan + contact info)

**Files Modified:**
- `src/lib/firebase/seedData.js`

#### Summary of Phase 5

**Key Achievements:**
- ✅ Complete branding with custom logos
- ✅ Modern Space Grotesk typography
- ✅ Fully responsive across all devices
- ✅ Enhanced navigation with smooth scrolling
- ✅ Updated contact information (Lahore-based)
- ✅ Comprehensive form validation
- ✅ Lead capture system for enterprise
- ✅ Updated FAQs with current information
- ✅ Theme-adaptive logos
- ✅ Mobile-optimized experience

**Impact:**
- 🎨 Professional, cohesive brand identity
- 📱 Seamless mobile experience
- 🔗 Improved navigation UX
- 📧 Better lead generation
- 🌍 Accurate location and contact info
- ♿ Enhanced accessibility
- ⚡ Faster, smoother interactions

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
  source: string, // 'homepage', 'footer', etc.
  email_sent: boolean // 🆕 Track newsletter delivery status (default: false)
}
```

#### `web_sales_query` 🆕
```javascript
{
  id: string,
  name: string,
  email: string,
  phone: string,
  company: string,
  message: string,
  timestamp: timestamp,
  status: string, // 'new', 'contacted', 'closed'
  source: string // 'pricing_page'
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
**Document Version:** 2.0  
**Next Review:** January 19, 2026
