import React, { useState } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { Menu, X } from 'lucide-react';
import { openPlatformAppStore } from '../utils/platformDetection';
import { site } from '../data/marketing';
import kitab from '../../styles/HomeKitab.module.css';

const navLinks = [
  { label: 'Who it\'s for', href: '/#solutions' },
  { label: 'Features', href: '/#features' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Journal', href: '/#journal' },
  { label: 'About', href: '/#values' },
  { label: 'Contact', href: '/contact' },
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleGetStarted = () => {
    openPlatformAppStore();
  };

  return (
    <>
      <div className={`${kitab.container} ${kitab.railOffset}`}>
        <div className={kitab.navInner}>
          <Link href="/" className={kitab.navBrand}>
            <div className="relative w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden">
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
            <span className="hidden sm:inline">Wakeel.org</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className={kitab.navLinks}>
            {navLinks.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <div className={kitab.navActions}>
              <button type="button" onClick={handleGetStarted} className={`${kitab.btnPrimary} ${kitab.btnSm} cta-try-free`}>
                Try Free
              </button>
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className={kitab.btnOutline}
              style={{ padding: '0.5rem', border: 'none' }}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className={`lg:hidden absolute top-16 left-0 right-0 z-40 ${kitab.navMobilePanel}`}>
          <div className={`${kitab.container} ${kitab.railOffset} flex flex-col py-4 gap-1`}>
            {[{ label: 'Home', href: '/' }, ...navLinks].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={kitab.navMobileLink}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-3 mt-2" style={{ borderTop: '1px solid var(--line)' }}>
              <a
                href={site.androidUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${kitab.btnOutline} ${kitab.btnBlock} cta-download-android`}
              >
                Download App
              </a>
              <button
                type="button"
                className={`${kitab.btnPrimary} ${kitab.btnBlock} cta-try-free`}
                onClick={() => { setIsMenuOpen(false); handleGetStarted(); }}
              >
                Try Free
              </button>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navigation;
