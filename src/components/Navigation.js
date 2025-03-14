import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';
import PricingModal from './PricingModal';
import { getCurrentUser, signOutUser } from '../lib/auth';

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
    router.push('/auth');
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
                      className="w-8 h-8 rounded-full object-cover border-2 border-light-accent dark:border-dark-accent"
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-light-accent dark:bg-dark-accent flex items-center justify-center text-white dark:text-black font-semibold">
                      {user.displayName ? user.displayName.charAt(0).toUpperCase() : user.email.charAt(0).toUpperCase()}
                    </div>
                  )}
                </button>
                
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-1 z-50 border border-gray-200 dark:border-gray-700">
                    <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                      <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                        {user.displayName || user.email}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                        {user.email}
                      </p>
                    </div>
                    <button
                      onClick={() => handleNavigate('/dashboard')}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Dashboard
                    </button>
                    <button
                      onClick={() => {
                        handleNavigate('/dashboard');
                        setIsUserMenuOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Settings
                    </button>
                    <button
                      onClick={handleSignOut}
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700 border-t border-gray-200 dark:border-gray-700"
                    >
                      Log Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
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
                    className="w-8 h-8 rounded-full object-cover border-2 border-light-accent dark:border-dark-accent"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-light-accent dark:bg-dark-accent flex items-center justify-center text-white dark:text-black font-semibold">
                    {user.displayName ? user.displayName.charAt(0).toUpperCase() : user.email.charAt(0).toUpperCase()}
                  </div>
                )}
              </button>
            )}
            
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
            backdrop-blur-lg border-b border-light-border dark:border-dark-border z-40">
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
              
              {!user && (
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
              )}
              
              {user && (
                <>
                  <button
                    onClick={() => {
                      handleNavigate('/dashboard');
                      setIsMenuOpen(false);
                    }}
                    className="text-left text-light-secondary dark:text-dark-secondary
                      hover:text-light-accent dark:hover:text-dark-accent
                      transition-colors font-medium text-lg"
                  >
                    Dashboard
                  </button>
                  <button
                    onClick={() => {
                      handleNavigate('/dashboard');
                      setIsMenuOpen(false);
                    }}
                    className="text-left text-light-secondary dark:text-dark-secondary
                      hover:text-light-accent dark:hover:text-dark-accent
                      transition-colors font-medium text-lg"
                  >
                    Settings
                  </button>
                  <button
                    onClick={() => {
                      handleSignOut();
                      setIsMenuOpen(false);
                    }}
                    className="text-left text-red-600 dark:text-red-400
                      hover:text-red-700 dark:hover:text-red-300
                      transition-colors font-medium text-lg"
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
          <div className="md:hidden absolute top-full right-0 mt-2 mr-4 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-1 z-50 border border-gray-200 dark:border-gray-700">
            <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
              <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                {user.displayName || user.email}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                {user.email}
              </p>
            </div>
            <button
              onClick={() => handleNavigate('/dashboard')}
              className="block w-full text-left px-4 py-3 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Dashboard
            </button>
            <button
              onClick={() => {
                handleNavigate('/dashboard');
                setIsUserMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-3 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Settings
            </button>
            <button
              onClick={handleSignOut}
              className="block w-full text-left px-4 py-3 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700 border-t border-gray-200 dark:border-gray-700"
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