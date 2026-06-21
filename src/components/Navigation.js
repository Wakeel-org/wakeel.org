import React, { useState } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { openPlatformAppStore } from '../utils/platformDetection';
import { productLinks, resourceLinks, site, solutionLinks } from '../data/marketing';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Product', href: '/features' },
    { label: 'Solutions', href: '/#solutions' },
    { label: 'Resources', href: '/legal-sources' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

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
            <span className="hidden sm:inline text-foreground">Wakeel.org</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}

            <Button asChild variant="outline" className="cta-download-android">
              <a href={site.androidUrl} target="_blank" rel="noopener noreferrer">
                Download App
              </a>
            </Button>
            
            <Button onClick={handleGetStarted} className="cta-try-free">
              Try Free
            </Button>

            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden space-x-4">
            <ThemeToggle />
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden py-6 absolute top-16 left-0 right-0 bg-background backdrop-blur-xl border-b border-border z-40 shadow-xl">
            <div className="flex flex-col space-y-2 px-4 sm:px-6 max-h-[calc(100vh-5rem)] overflow-y-auto">
              <Link
                href="/"
                className="text-foreground hover:text-primary hover:bg-muted/50 transition-colors font-medium text-base py-3 px-4 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>

              <p className="px-4 pt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Product
              </p>
              {productLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-foreground hover:text-primary hover:bg-muted/50 transition-colors font-medium text-base py-3 px-4 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <p className="px-4 pt-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Solutions
              </p>
              {solutionLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-foreground hover:text-primary hover:bg-muted/50 transition-colors font-medium text-base py-3 px-4 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <p className="px-4 pt-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Resources
              </p>
              {resourceLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-foreground hover:text-primary hover:bg-muted/50 transition-colors font-medium text-base py-3 px-4 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/pricing"
                className="text-foreground hover:text-primary hover:bg-muted/50 transition-colors font-medium text-base py-3 px-4 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/about"
                className="text-foreground hover:text-primary hover:bg-muted/50 transition-colors font-medium text-base py-3 px-4 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-foreground hover:text-primary hover:bg-muted/50 transition-colors font-medium text-base py-3 px-4 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

              <Button asChild variant="outline" className="w-full mt-4 cta-download-android">
                <a href={site.androidUrl} target="_blank" rel="noopener noreferrer">
                  Download App
                </a>
              </Button>
              
              <Button 
                className="w-full cta-try-free"
                onClick={() => {
                  setIsMenuOpen(false);
                  handleGetStarted();
                }}
              >
                Try Free
              </Button>
            </div>
          </nav>
        )}
      </div>
    </>
  );
};

export default Navigation; 
