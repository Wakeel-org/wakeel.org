import React from 'react';
import Head from 'next/head';
import Navigation from './Navigation';
import Link from 'next/link';
import { Linkedin, Facebook, Instagram, Mail, MapPin } from 'lucide-react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans antialiased">
      <Head>
        <title>Wakeel.org - Trusted Guardians of Legal Excellence</title>
        <meta name="description" content="Empowering Justice Through Reliable Solutions - Wakeel.org provides comprehensive legal research, case management, and policy development solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content="Wakeel.org - Trusted Guardians of Legal Excellence" />
        <meta property="og:description" content="Empowering Justice Through Reliable Solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://wakeel.org" />
        <meta property="og:image" content="https://wakeel.org/og-image.jpg" />
      </Head>

      <nav className="fixed top-0 w-full bg-background backdrop-blur-lg z-50 border-b border-border shadow-sm">
        <Navigation />
      </nav>
      
      <main className="flex-grow pt-16">
        {children}
      </main>
      
      <footer className="mt-auto bg-muted/50 border-t border-border">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            <div className="col-span-1 sm:col-span-2">
              <Link 
                href="/"
                className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
              >
                Wakeel.org
              </Link>
              <p className="text-muted-foreground mb-6 max-w-md mt-4">
                Empowering legal professionals with innovative solutions and reliable support for a more efficient and just legal system.
              </p>
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
              <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {['About', 'Services', 'Contact', 'Blog'].map((item, index) => (
                  <li key={index}>
                    <Link 
                      href={`/${item.toLowerCase()}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground mb-4">Contact</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-3 text-primary" />
                  <a href="mailto:info@wakeel.org" className="hover:text-primary transition-colors">
                    info@wakeel.org
                  </a>
                </li>
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-3 text-primary" />
                  Lahore, Pakistan
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 mt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <p className="text-muted-foreground text-sm text-center sm:text-left">
                © {new Date().getFullYear()} Wakeel.org. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 sm:mt-0">
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