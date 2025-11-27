import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';
import PricingModal from './PricingModal';
import { getCurrentUser, signOutUser } from '../lib/auth';
import { Button } from './ui/button';
import { Menu, X, User } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const router = useRouter();
  
  // Check if user is logged in
  useEffect(() => {
    const checkAuth = async () => {
      const currentUser = await getCurrentUser();
      setUser(currentUser);
    };
    
    checkAuth();
  }, []);
  
  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    // { label: 'Services', href: '/services' }, // Commented out for now
    { label: 'Pricing', onClick: () => setIsPricingModalOpen(true) },
    { label: 'Contact', href: '/contact' }
  ];

  const handleGetStarted = () => {
    // router.push('/auth');
    window.open('https://wakeel.web.app', '_blank');
  };
  
  const handleSignOut = async () => {
    try {
      await signOutUser();
      setUser(null);
      setIsUserMenuOpen(false);
      router.push('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };
  
  const handleNavigate = (path) => {
    router.push(path);
    setIsUserMenuOpen(false);
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
              item.href ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.label}
                  onClick={item.onClick}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              )
            ))}
            
            {user ? (
              <div className="relative">
                <button 
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center focus:outline-none"
                  aria-label="Open user menu"
                >
                  {user.photoURL ? (
                    <img 
                      src={user.photoURL} 
                      alt="Profile" 
                      className="w-8 h-8 rounded-full object-cover border border-border"
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-foreground font-semibold">
                      {user.displayName ? user.displayName.charAt(0).toUpperCase() : user.email.charAt(0).toUpperCase()}
                    </div>
                  )}
                </button>
                
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-popover rounded-md shadow-md py-1 z-50 border border-border">
                    <div className="px-4 py-2 border-b border-border">
                      <p className="text-sm font-medium text-foreground truncate">
                        {user.displayName || user.email}
                      </p>
                      <p className="text-xs text-muted-foreground truncate">
                        {user.email}
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        handleNavigate('/');
                        setIsUserMenuOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-foreground hover:bg-muted"
                    >
                      Home
                    </button>
                    <button
                      onClick={handleSignOut}
                      className="block w-full text-left px-4 py-2 text-sm text-destructive hover:bg-muted border-t border-border"
                    >
                      Log Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Button onClick={handleGetStarted}>
                Get Started
              </Button>
            )}

            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-4">
            <ThemeToggle />
            
            {user && (
              <button 
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center focus:outline-none"
                aria-label="Open user menu"
              >
                {user.photoURL ? (
                  <img 
                    src={user.photoURL} 
                    alt="Profile" 
                    className="w-8 h-8 rounded-full object-cover border border-border"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-foreground font-semibold">
                    {user.displayName ? user.displayName.charAt(0).toUpperCase() : user.email.charAt(0).toUpperCase()}
                  </div>
                )}
              </button>
            )}
            
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
              
              {!user && (
                <Button 
                  className="w-full"
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleGetStarted();
                  }}
                >
                  Get Started
                </Button>
              )}
              
              {user && (
                <>
                  <button
                    onClick={() => {
                      handleNavigate('/');
                      setIsMenuOpen(false);
                    }}
                    className="text-left text-foreground hover:text-primary transition-colors font-medium text-lg"
                  >
                    Home
                  </button>
                  <button
                    onClick={() => {
                      handleSignOut();
                      setIsMenuOpen(false);
                    }}
                    className="text-left text-destructive hover:text-destructive/80 transition-colors font-medium text-lg"
                  >
                    Log Out
                  </button>
                </>
              )}
            </div>
          </nav>
        )}
        
        {/* Mobile User Menu */}
        {isUserMenuOpen && user && (
          <div className="md:hidden absolute top-16 right-0 mt-2 mr-4 w-64 bg-popover rounded-md shadow-lg py-1 z-50 border border-border">
            <div className="px-4 py-3 border-b border-border">
              <p className="text-sm font-medium text-foreground truncate">
                {user.displayName || user.email}
              </p>
              <p className="text-xs text-muted-foreground truncate">
                {user.email}
              </p>
            </div>
            <button
              onClick={() => {
                handleNavigate('/');
                setIsUserMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-3 text-sm text-foreground hover:bg-muted"
            >
              Home
            </button>
            <button
              onClick={handleSignOut}
              className="block w-full text-left px-4 py-3 text-sm text-destructive hover:bg-muted border-t border-border"
            >
              Log Out
            </button>
          </div>
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