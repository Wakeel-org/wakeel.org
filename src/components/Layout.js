import React from 'react';
import Head from 'next/head';
import Navigation from './Navigation';
import AppDownloadButtons from './AppDownloadButtons';
import Link from 'next/link';
import { Linkedin, Facebook, Instagram, Mail, MapPin } from 'lucide-react';
import { site } from '../data/marketing';
import { useTheme } from '../context/ThemeContext';
import kitab from '../../styles/HomeKitab.module.css';

const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "AI Legal Chat", href: "/features#ai-legal-chat" },
      { label: "Document Analysis", href: "/features#document-analysis" },
      { label: "Legal Research", href: "/features#legal-research" },
      { label: "Drafting Support", href: "/features#drafting-support" },
      { label: "All Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Who it's for", href: "/#solutions" },
      { label: "Citizens", href: "/citizens" },
      { label: "Law Students", href: "/law-students" },
      { label: "Lawyers", href: "/lawyers" },
      { label: "Law Firms", href: "/law-firms" },
      { label: "Judges", href: "/judges" },
      { label: "Policymakers", href: "/policymakers" },
      { label: "Legal Institutions", href: "/legal-institutions" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Free Legal Advice", href: "/journal/article/free-legal-advice-pakistan" },
      { label: "Legal Sources", href: "/legal-sources" },
      { label: "Pakistan Legal Issues", href: "/journal/legal-issues-pakistan" },
      { label: "GCC Legal Issues", href: "/journal/legal-issues-gcc" },
      { label: "Best AI Legal Apps", href: "/journal/article/best-ai-legal-apps-pakistan" },
      { label: "AI vs a Lawyer", href: "/journal/article/ai-vs-lawyer-pakistan" },
      { label: "Journal", href: "/journal" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Values", href: "/values" },
      { label: "Contact", href: "/contact" },
      { label: "Legal Disclaimer", href: "/disclaimer" },
    ],
  },
];

const Layout = ({ children }) => {
  const { darkMode } = useTheme();
  const kitabTokens = `${kitab.page} ${darkMode ? kitab.dark : ""}`;

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans antialiased">
      <Head>
        <title>Wakeel.org - Pakistan's AI Lawyer & Legal Assistant</title>
        <meta name="description" content={site.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, minimum-scale=1, user-scalable=yes, viewport-fit=cover" />
        <meta name="author" content="Wakeel.org" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Favicon */}
        <link rel="icon" type="image/png" href="/logo-light.png" />
        <link rel="apple-touch-icon" href="/logo-light.png" />
        <link rel="shortcut icon" href="/logo-light.png" />
        
        {/* Open Graph / Social Media Meta Tags — sitewide fallback for the
            handful of pages that don't render <MarketingSEO> (404, privacy,
            terms, the journal index). Every `property="og:..."` tag here
            carries a `key` matching the one MarketingSEO uses on its own
            equivalent tag: Next's <Head> only auto-dedupes tags by `name`
            (and `key`), never by `property` alone, so without matching
            keys a page using both components emits two conflicting og:*
            tags — real bug this fixed, caught while correcting the
            region-aware SEO metadata (see docs/HOMEPAGE-REDESIGN-2026.md,
            "Pre-production QA fixes"). */}
        <meta key="og:title" property="og:title" content="Wakeel.org - Pakistan's AI Lawyer & Legal Assistant" />
        <meta key="og:description" property="og:description" content={site.description} />
        <meta key="og:type" property="og:type" content="website" />
        <meta key="og:url" property="og:url" content="https://wakeel.org" />
        <meta key="og:image" property="og:image" content="https://wakeel.org/logo-og.png" />
        <meta key="og:site_name" property="og:site_name" content="Wakeel.org" />
        <meta key="og:locale" property="og:locale" content="en_US" />
        
        <meta name="AI-content-declaration" content="Wakeel.org provides AI-assisted legal information and research support with user verification required." />
      </Head>

      <nav className={`fixed top-0 w-full z-50 ${kitabTokens} ${kitab.navBar}`}>
        <Navigation />
      </nav>

      <main className="flex-grow pt-16">
        {children}
      </main>

      <footer className={`mt-auto ${kitabTokens} ${kitab.footerRoot}`}>
        <div className={`${kitab.container} ${kitab.railOffset}`} style={{ paddingBlock: "2.5rem" }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 sm:gap-10">
            <div className="lg:col-span-2">
              <Link href="/" className={kitab.navBrand} style={{ width: "fit-content" }}>
                <div className="relative w-12 h-12 flex-shrink-0 rounded-lg overflow-hidden">
                  {/* Dark logo for light theme */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/logo-dark.png"
                    alt="Wakeel.org Logo"
                    width={48}
                    height={48}
                    className="block dark:hidden absolute inset-0 rounded-lg"
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                  {/* Light logo for dark theme */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/logo-light.png"
                    alt="Wakeel.org Logo"
                    width={48}
                    height={48}
                    className="hidden dark:block absolute inset-0 rounded-lg"
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                </div>
                <span style={{ fontSize: "1.25rem" }}>Wakeel.org</span>
              </Link>
              <p style={{ color: "var(--ink-soft)", maxWidth: "28rem", marginTop: "1rem", marginBottom: "1.5rem" }}>
                Pakistan&apos;s AI legal assistant for citizens, law students, and legal professionals.
              </p>
              <p style={{ fontSize: "0.85rem", color: "var(--ink-faint)", maxWidth: "28rem", marginBottom: "1.5rem" }}>
                {site.disclaimer}
              </p>
              <div className="mb-6">
                <p className={kitab.footerColTitle} style={{ marginBottom: "0.75rem" }}>
                  Download our mobile apps
                </p>
                <AppDownloadButtons />
              </div>
              <div className="flex gap-3">
                <a href="https://www.facebook.com/aiwakeel" target="_blank" rel="noopener noreferrer" className={kitab.footerSocial}>
                  <span className="sr-only">Facebook</span>
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://www.instagram.com/wakeel_org" target="_blank" rel="noopener noreferrer" className={kitab.footerSocial}>
                  <span className="sr-only">Instagram</span>
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://www.linkedin.com/company/wakeelai/" target="_blank" rel="noopener noreferrer" className={kitab.footerSocial}>
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {footerColumns.map((col) => (
              <div key={col.title} className="space-y-4">
                <h3 className={kitab.footerColTitle}>{col.title}</h3>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className={kitab.footerLink}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className={kitab.footerBottom} style={{ paddingTop: "2rem", marginTop: "2rem" }}>
            <div className="flex flex-col gap-4 lg:flex-row justify-between lg:items-center">
              <p className={kitab.footerMeta} style={{ textAlign: "center" }}>
                © {new Date().getFullYear()} Wakeel.org. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
                <span className={kitab.footerMeta} style={{ display: "inline-flex", alignItems: "center" }}>
                  <Mail className="w-4 h-4 mr-2" style={{ color: "var(--brand)" }} />
                  <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
                </span>
                <span className={kitab.footerMeta} style={{ display: "inline-flex", alignItems: "center" }}>
                  <MapPin className="w-4 h-4 mr-2" style={{ color: "var(--brand)" }} />
                  Lahore, Pakistan
                </span>
                <Link href="/privacy" className={kitab.footerLink}>Privacy Policy</Link>
                <Link href="/terms" className={kitab.footerLink}>Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
