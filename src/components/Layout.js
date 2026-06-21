import React from 'react';
import Head from 'next/head';
import Navigation from './Navigation';
import AppDownloadButtons from './AppDownloadButtons';
import Link from 'next/link';
import { Linkedin, Facebook, Instagram, Mail, MapPin } from 'lucide-react';
import { footerPrimaryLinks, productLinks, resourceLinks, site, solutionLinks } from '../data/marketing';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans antialiased">
      <Head>
        <title>Wakeel.org - Pakistan's AI Legal Assistant</title>
        <meta name="description" content={site.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, minimum-scale=1, user-scalable=yes, viewport-fit=cover" />
        <meta name="author" content="Wakeel.org" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/logo-light.svg" />
        <link rel="icon" type="image/svg+xml" href="/logo-light.svg" media="(prefers-color-scheme: light)" />
        <link rel="icon" type="image/svg+xml" href="/logo-light.svg" media="(prefers-color-scheme: dark)" />
        <link rel="apple-touch-icon" href="/logo-light.svg" />
        <link rel="shortcut icon" href="/logo-light.svg" />
        
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content="Wakeel.org - Pakistan's AI Legal Assistant" />
        <meta property="og:description" content={site.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://wakeel.org" />
        <meta property="og:image" content="https://wakeel.org/logo-dark.svg" />
        <meta property="og:site_name" content="Wakeel.org" />
        <meta property="og:locale" content="en_US" />
        
        <meta name="AI-content-declaration" content="Wakeel.org provides AI-assisted legal information and research support with user verification required." />
      </Head>

      <nav className="fixed top-0 w-full bg-background backdrop-blur-lg z-50 border-b border-border shadow-sm">
        <Navigation />
      </nav>
      
      <main className="flex-grow pt-16">
        {children}
      </main>
      
      <footer className="mt-auto bg-muted/50 border-t border-border">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 sm:gap-10">
            <div className="lg:col-span-2">
              <Link 
                href="/"
                className="flex items-center gap-3 text-2xl font-bold text-primary hover:text-primary/80 transition-colors w-fit"
              >
                <div className="relative w-12 h-12 flex-shrink-0 rounded-lg overflow-hidden">
                  {/* Dark logo for light theme */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/logo-dark.svg"
                    alt="Wakeel.org Logo"
                    width={48}
                    height={48}
                    className="block dark:hidden absolute inset-0 rounded-lg"
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                  {/* Light logo for dark theme */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/logo-light.svg"
                    alt="Wakeel.org Logo"
                    width={48}
                    height={48}
                    className="hidden dark:block absolute inset-0 rounded-lg"
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                </div>
                <span>Wakeel.org</span>
              </Link>
              <p className="text-muted-foreground mb-6 max-w-md mt-4">
                Pakistan's AI legal assistant for citizens, law students, and legal professionals.
              </p>
              <p className="text-sm text-muted-foreground max-w-md mb-6">
                {site.disclaimer}
              </p>
              <div className="mb-6">
                <p className="text-sm font-semibold text-foreground mb-3">
                  Download our mobile apps
                </p>
                <AppDownloadButtons />
              </div>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/aiwakeel" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <span className="sr-only">Facebook</span>
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/wakeel_org" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <span className="sr-only">Instagram</span>
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/company/wakeelai/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground mb-4">Product</h3>
              <ul className="space-y-3">
                {productLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground mb-4">Company</h3>
              <ul className="space-y-3">
                {footerPrimaryLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground mb-4">Solutions</h3>
              <ul className="space-y-3">
                {solutionLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground mb-4">Resources</h3>
              <ul className="space-y-3">
                {resourceLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 mt-8 border-t border-border">
            <div className="flex flex-col gap-4 lg:flex-row justify-between lg:items-center">
              <p className="text-muted-foreground text-sm text-center sm:text-left">
                © {new Date().getFullYear()} Wakeel.org. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
                <span className="inline-flex items-center text-sm text-muted-foreground">
                  <Mail className="w-4 h-4 mr-2 text-primary" />
                  <a href={`mailto:${site.contactEmail}`} className="hover:text-primary transition-colors">
                    {site.contactEmail}
                  </a>
                </span>
                <span className="inline-flex items-center text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-2 text-primary" />
                  Lahore, Pakistan
                </span>
                <Link 
                  href="/privacy" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link 
                  href="/terms" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
