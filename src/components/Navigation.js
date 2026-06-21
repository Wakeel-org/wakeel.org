import React, { useState } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { openPlatformAppStore } from '../utils/platformDetection';
import { site } from '../data/marketing';

const navLinks = [
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleGetStarted = () => {
    openPlatformAppStore();
  };

  return (
    <>
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3 text-xl font-bold text-primary hover:text-primary/80 transition-colors"
          >
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-lg overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo-dark.png"
                alt="Wakeel.org Logo"
                width={48}
                height={48}
                className="block dark:hidden absolute inset-0 rounded-lg"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
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
            <span className="hidden sm:inline text-foreground">Wakeel.org</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-2 ml-2">
              <Button asChild variant="outline" size="sm" className="cta-download-android">
                <a href={site.androidUrl} target="_blank" rel="noopener noreferrer">
                  Download App
                </a>
              </Button>
              <Button size="sm" onClick={handleGetStarted} className="cta-try-free">
                Try Free
              </Button>
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden absolute top-16 left-0 right-0 bg-background border-b border-border z-40 shadow-lg">
            <div className="flex flex-col px-4 sm:px-6 py-4 gap-1">
              {[{ label: 'Home', href: '/' }, ...navLinks].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-foreground hover:text-primary hover:bg-muted/50 transition-colors py-2.5 px-3 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-3 mt-2 border-t border-border">
                <Button asChild variant="outline" className="w-full cta-download-android">
                  <a href={site.androidUrl} target="_blank" rel="noopener noreferrer">
                    Download App
                  </a>
                </Button>
                <Button
                  className="w-full cta-try-free"
                  onClick={() => { setIsMenuOpen(false); handleGetStarted(); }}
                >
                  Try Free
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </>
  );
};

export default Navigation; 
