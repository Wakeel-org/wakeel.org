import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';
import PricingModal from './PricingModal';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false);
  const router = useRouter();
  
  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    // { label: 'Services', href: '/services' }, // Commented out for now
    { label: 'Pricing', onClick: () => setIsPricingModalOpen(true) },
    { label: 'Contact', href: '/contact' }
  ];

  const handleGetStarted = () => {
    router.push('/auth');
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link 
            href="/" 
            className="text-xl font-bold 
              text-light-primary dark:text-dark-primary
              hover:text-light-accent dark:hover:text-dark-accent 
              transition-colors"
          >
            Wakeel.org
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              item.href ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-light-secondary dark:text-dark-secondary
                    hover:text-light-accent dark:hover:text-dark-accent
                    transition-colors font-medium"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.label}
                  onClick={item.onClick}
                  className="text-light-secondary dark:text-dark-secondary
                    hover:text-light-accent dark:hover:text-dark-accent
                    transition-colors font-medium"
                >
                  {item.label}
                </button>
              )
            ))}
            
            <button 
              className="bg-light-accent text-white dark:bg-dark-accent dark:text-black 
                px-4 lg:px-6 py-2 rounded-xl 
                hover:bg-light-accent-light dark:hover:bg-dark-accent-light 
                transition transform hover:scale-105 hover:shadow-md
                text-sm lg:text-base font-medium whitespace-nowrap"
              onClick={handleGetStarted}
            >
              Get Started
            </button>

            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-4">
            <ThemeToggle />
            
            <button
              className="p-2 rounded-xl hover:bg-light-surface-mixed dark:hover:bg-dark-surface-mixed transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 absolute top-full left-0 right-0 
            bg-light-surface/95 dark:bg-dark-surface/95 
            backdrop-blur-lg border-b border-light-border dark:border-dark-border">
            <div className="flex flex-col space-y-4 px-4 sm:px-6">
              {menuItems.map((item) => (
                item.href ? (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-light-secondary dark:text-dark-secondary
                      hover:text-light-accent dark:hover:text-dark-accent
                      transition-colors font-medium text-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.label}
                    onClick={() => {
                      setIsMenuOpen(false);
                      item.onClick();
                    }}
                    className="text-light-secondary dark:text-dark-secondary
                      hover:text-light-accent dark:hover:text-dark-accent
                      transition-colors font-medium text-lg text-left"
                  >
                    {item.label}
                  </button>
                )
              ))}
              <button 
                className="bg-light-accent dark:bg-dark-accent text-white 
                  px-6 py-3 rounded-xl 
                  hover:bg-light-accent/90 dark:hover:bg-dark-accent/90 
                  transition transform hover:scale-105 hover:shadow-md
                  text-base font-medium w-full"
                onClick={() => {
                  setIsMenuOpen(false);
                  handleGetStarted();
                }}
              >
                Get Started
              </button>
            </div>
          </nav>
        )}
      </div>

      {/* Pricing Modal */}
      <PricingModal 
        isOpen={isPricingModalOpen} 
        onClose={() => setIsPricingModalOpen(false)} 
      />
    </>
  );
};

export default Navigation; 