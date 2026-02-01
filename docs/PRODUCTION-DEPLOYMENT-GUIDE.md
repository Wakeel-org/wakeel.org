# Wakeel.org - Production Deployment Guide

**Version:** 2.1.0  
**Last Updated:** February 2, 2026  
**Status:** Production Live

---

## Table of Contents

1. [Overview](#overview)
2. [Pre-Deployment Checklist](#pre-deployment-checklist)
3. [Environment Configuration](#environment-configuration)
4. [Build Process](#build-process)
5. [Firebase Deployment](#firebase-deployment)
6. [Post-Deployment Verification](#post-deployment-verification)
7. [Monitoring & Analytics](#monitoring--analytics)
8. [Rollback Procedures](#rollback-procedures)
9. [Beta Features (Commented Out)](#beta-features-commented-out)
10. [Troubleshooting](#troubleshooting)

---

## Overview

Wakeel.org is a Next.js marketing website deployed to Firebase Hosting. This guide covers the complete production deployment process.

### Tech Stack Summary
- **Framework:** Next.js 14.0.4 (Static Export)
- **Hosting:** Firebase Hosting
- **Database:** Firebase Firestore
- **Region:** asia-east1

### Production URLs
- **Website:** https://wakeel.org
- **Web App:** https://wakeel.web.app
- **Android App:** https://play.google.com/store/apps/details?id=pk.digit.aiwakeel
- **iOS App:** https://apps.apple.com/app/wakeel

---

## Pre-Deployment Checklist

### Code Quality
- [x] All TypeScript/JavaScript errors resolved
- [x] ESLint passes with no errors (Note: ESLint config updated for flat config)
- [x] No console.log statements in production code (only in seedData.js dev utility)
- [x] All imports are valid and used

### Content Verification
- [x] All text content reviewed for accuracy
- [x] Contact information is correct (info@wakeel.org)
- [x] Social media links are valid (Facebook, Instagram, LinkedIn)
- [x] Pricing information is up-to-date (PKR pricing with 4 tiers)

### SEO Verification
- [x] Meta titles and descriptions are optimized
- [x] Open Graph images configured (using logo-dark.svg)
- [x] Canonical URLs are correct
- [x] sitemap.xml is up-to-date with current dates (2026-02-02)
- [x] robots.txt allows search engines and AI crawlers

### Security
- [x] Environment variables are properly configured
- [x] Firebase security rules are production-ready
- [x] No sensitive data in client-side code
- [x] Form validation is working

### Beta Features Status
- [x] Beta popup is commented out (not deleted)
- [x] Beta whitelist section is commented out
- [x] TestFlight links replaced with App Store links
- [x] "Beta" labels removed from UI

### App Download Buttons (New)
- [x] AppDownloadButtons component created
- [x] Google Play button links to correct URL
- [x] App Store button links to correct URL
- [x] Buttons displayed in Hero section
- [x] Buttons displayed in footer CTA section

---

## Environment Configuration

### Required Environment Variables

Create a `.env.local` file (not committed to git):

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=wakeel-org.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=wakeel-org
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=wakeel-org.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Firebase Project Configuration

Ensure `firebase.json` is configured correctly:

```json
{
  "hosting": {
    "source": ".",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "frameworksBackend": {
      "region": "asia-east1"
    }
  }
}
```

---

## Build Process

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Run Linting

```bash
npm run lint
```

Fix any errors before proceeding.

### Step 3: Build for Production

```bash
npm run build
```

This creates a static export in the `out` directory.

### Step 4: Test Locally (Optional)

```bash
npm run start
```

Visit http://localhost:3000 to verify the build.

---

## Firebase Deployment

### One-Command Deployment

```bash
npm run deploy
```

This runs `npm run export && firebase deploy`.

### Manual Deployment Steps

```bash
# Step 1: Build the project
npm run build

# Step 2: Login to Firebase (if not already)
firebase login

# Step 3: Deploy to Firebase Hosting
firebase deploy --only hosting
```

### Deploy with Preview Channel (Recommended for Testing)

```bash
# Create a preview channel
firebase hosting:channel:deploy preview-v2-0

# This gives you a preview URL like:
# https://wakeel-org--preview-v2-0-xxxxxxxx.web.app
```

### Promote Preview to Production

```bash
firebase hosting:clone wakeel-org:preview-v2-0 wakeel-org:live
```

---

## Post-Deployment Verification

### Immediate Checks (Within 5 Minutes)

1. **Homepage Loading**
   - Visit https://wakeel.org
   - Verify all sections load correctly
   - Check hero, pricing, features sections

2. **Navigation**
   - Test all navigation links
   - Verify smooth scrolling to sections
   - Test mobile menu functionality

3. **Forms**
   - Test contact form submission
   - Test email subscription
   - Verify Firebase writes are working

4. **Responsive Design**
   - Test on mobile (375px width)
   - Test on tablet (768px width)
   - Test on desktop (1440px width)

5. **Theme Toggle**
   - Verify dark/light mode switching
   - Check logo visibility in both modes

### SEO Verification (Within 24 Hours)

```bash
# Check robots.txt
curl https://wakeel.org/robots.txt

# Check sitemap
curl https://wakeel.org/sitemap.xml

# Test meta tags
curl -s https://wakeel.org | grep -i "og:title"
```

### Performance Testing

Use Google PageSpeed Insights:
- URL: https://pagespeed.web.dev/
- Target Score: 90+ on both Mobile and Desktop

### Search Console Submission

1. Go to Google Search Console
2. Submit sitemap: https://wakeel.org/sitemap.xml
3. Request indexing for main pages

---

## Monitoring & Analytics

### Firebase Console

- **Hosting:** Monitor traffic and bandwidth
- **Firestore:** Monitor database reads/writes
- **Performance:** Track Core Web Vitals

### Recommended Monitoring Setup

```javascript
// Add to Layout.js or _app.js for analytics
// Google Analytics 4 integration (if needed)
```

### Key Metrics to Monitor

| Metric | Target | Tool |
|--------|--------|------|
| First Contentful Paint | < 1.5s | PageSpeed |
| Largest Contentful Paint | < 2.5s | PageSpeed |
| Time to Interactive | < 3.5s | PageSpeed |
| Cumulative Layout Shift | < 0.1 | PageSpeed |
| Uptime | 99.9% | Firebase |

---

## Rollback Procedures

### Quick Rollback (Last Known Good)

```bash
# List deployment history
firebase hosting:releases:list --limit 5

# Rollback to previous version
firebase hosting:rollback
```

### Rollback to Specific Version

```bash
# Get version ID from releases list
firebase hosting:clone wakeel-org:VERSION_ID wakeel-org:live
```

### Emergency Maintenance Mode

If critical issues arise, deploy a maintenance page:

```bash
# Create a simple maintenance index.html
# Deploy only that file
firebase deploy --only hosting
```

---

## Beta Features (Commented Out)

The following beta features have been **commented out** (not deleted) for potential future use:

### 1. Beta Launch Popup

**File:** `pages/index.js`

```javascript
// Beta components - commented out for production, can be re-enabled for future beta launches
// import BetaLaunchPopup from '../src/components/BetaLaunchPopup';
// import BetaWhitelistSection from '../src/components/BetaWhitelistSection';

// Usage (also commented):
// {/* Beta Launch Popup - Commented out for production, can be re-enabled for future beta campaigns */}
// {/* <BetaLaunchPopup /> */}
```

### 2. Beta Whitelist Section

**File:** `pages/index.js`

```javascript
// Already commented in the file:
// {/* Beta Whitelist Section - Hidden, using popup instead */}
// {/* <BetaWhitelistSection /> */}
```

### 3. Beta Component Files (Preserved)

The following files are preserved for future use:
- `src/components/BetaLaunchPopup.js`
- `src/components/BetaWhitelistSection.js`

### 4. Firebase Collection for Beta

The `beta_whitelist` collection in Firestore contains beta signup data and is preserved for future campaigns.

### Re-enabling Beta Features

To re-enable beta features for a future launch:

1. **Uncomment imports in `pages/index.js`:**
   ```javascript
   import BetaLaunchPopup from '../src/components/BetaLaunchPopup';
   import BetaWhitelistSection from '../src/components/BetaWhitelistSection';
   ```

2. **Uncomment component usage:**
   ```javascript
   <BetaLaunchPopup />
   // or
   <BetaWhitelistSection />
   ```

3. **Update beta links** in the components if needed (TestFlight URL, etc.)

4. **Update meta tags** in `index.js` to reflect beta status

---

## Troubleshooting

### Common Issues

#### Build Fails

```bash
# Clear Next.js cache
rm -rf .next

# Clear node_modules and reinstall
rm -rf node_modules
npm install

# Rebuild
npm run build
```

#### Firebase Deploy Fails

```bash
# Check Firebase login status
firebase login --reauth

# Verify project
firebase use --add
```

#### Images Not Loading

- Ensure images are in `/public` directory
- Check image paths are absolute (`/image.jpg` not `image.jpg`)
- Verify `next.config.js` has `images: { unoptimized: true }`

#### Firestore Connection Issues

- Verify environment variables are set
- Check Firebase project configuration
- Review Firestore security rules

### Support Resources

- **Firebase Documentation:** https://firebase.google.com/docs
- **Next.js Documentation:** https://nextjs.org/docs
- **Project Repository:** [Internal Link]
- **Team Contact:** info@wakeel.org

---

## Deployment Log Template

Use this template for each deployment:

```
## Deployment: [Date] [Version]

**Deployed By:** [Name]
**Time:** [HH:MM UTC]
**Type:** [Major/Minor/Patch/Hotfix]

### Changes
- [Change 1]
- [Change 2]

### Verification
- [ ] Homepage loads
- [ ] Forms working
- [ ] Mobile responsive
- [ ] SEO tags correct

### Notes
[Any additional notes]
```

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 2.1.0 | Feb 2, 2026 | Added App Store download buttons (Google Play & Apple), OG image fix |
| 2.0.0 | Feb 2, 2026 | Production release - Beta features disabled |
| 1.5.0 | Dec 25, 2025 | Beta launch campaign |
| 1.0.0 | Dec 19, 2025 | Initial marketing site launch |

---

**Document Maintained By:** Development Team  
**Next Review:** March 2, 2026
