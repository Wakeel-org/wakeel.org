import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';
import PricingModal from './PricingModal';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false);
  const router = useRouter();
  const isHomePage = router.pathname === '/';
  
  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: isHomePage ? '#who-is-this-for' : '/#who-is-this-for' },
    { label: 'Values', href: isHomePage ? '#values' : '/#values' },
    { label: 'Features', href: isHomePage ? '#features' : '/#features' },
    { label: 'Pricing', href: isHomePage ? '#pricing' : '/#pricing' },
    { label: 'Contact', href: '/contact' }
  ];

  const handleGetStarted = () => {
    window.open('https://wakeel.web.app', '_blank');
  };

  return (
    <>
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link 
            href="/" 
            className="text-xl font-bold text-primary hover:text-primary/80 transition-colors"
          >
            Wakeel.org
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
            
            <Button onClick={handleGetStarted}>
              Get Started
            </Button>

            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-4">
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
          <nav className="md:hidden py-4 absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border z-40">
            <div className="flex flex-col space-y-4 px-4 sm:px-6">
              {menuItems.map((item) => (
                item.href ? (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors font-medium text-lg"
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
                    className="text-foreground hover:text-primary transition-colors font-medium text-lg text-left"
                  >
                    {item.label}
                  </button>
                )
              ))}
              
              <Button 
                className="w-full"
                onClick={() => {
                  setIsMenuOpen(false);
                  handleGetStarted();
                }}
              >
                Get Started
              </Button>
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