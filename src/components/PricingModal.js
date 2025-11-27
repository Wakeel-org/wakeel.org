import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { createPortal } from 'react-dom';
import { Check, X, User, Briefcase, Building } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from './ui/card';
import { Button } from './ui/button';

const PricingModal = ({ isOpen, onClose }) => {
  const router = useRouter();
  
  // Handle escape key press
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
      // Prevent scrolling on the body when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      // Restore scrolling when modal is closed
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);
  
  const handleSelectPlan = (planId) => {
    // Close the modal
    onClose();
    // Navigate to auth page with the selected plan as a query parameter
    router.push(`/auth?plan=${planId}`);
  };
  
  if (!isOpen) return null;
  
  // Use Portal to render the modal at the root level
  const modalContent = (
    <div 
      className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 overflow-y-auto"
      onClick={(e) => {
        // Close when clicking the backdrop
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="bg-card rounded-xl shadow-2xl max-w-5xl w-full my-8 mx-auto relative overflow-hidden animate-fadeIn border border-border">
        {/* Header */}
        <div className="relative p-6 sm:p-8 border-b border-border">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Choose Your Plan</h2>
              <p className="mt-2 text-muted-foreground">Select the perfect plan for your legal needs</p>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close pricing modal">
              <X className="w-6 h-6" />
            </Button>
          </div>
        </div>
        
        <div className="p-6 sm:p-8 bg-muted/30">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Basic Plan */}
            <Card className="flex flex-col">
              <CardHeader className="text-center">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                  <User className="w-6 h-6" />
                </div>
                <CardTitle>Basic</CardTitle>
                <CardDescription>Perfect for individuals</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">$5</span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {[
                    '10 Legal Document Templates',
                    'Basic Legal Research',
                    'Email Support'
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-primary mr-2 mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" onClick={() => handleSelectPlan('basic')}>
                  Select Plan
                </Button>
              </CardFooter>
            </Card>
            
            {/* Pro Plan */}
            <Card className="flex flex-col border-primary shadow-lg relative scale-105 z-10">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                POPULAR
              </div>
              <CardHeader className="text-center">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                  <Briefcase className="w-6 h-6" />
                </div>
                <CardTitle>Professional</CardTitle>
                <CardDescription>For small law firms</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">$12.5</span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {[
                    '50 Legal Document Templates',
                    'Advanced Legal Research',
                    'Case Management Tools',
                    'Priority Support'
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-primary mr-2 mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" onClick={() => handleSelectPlan('pro')}>
                  Select Plan
                </Button>
              </CardFooter>
            </Card>
            
            {/* Enterprise Plan */}
            <Card className="flex flex-col">
              <CardHeader className="text-center">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                  <Building className="w-6 h-6" />
                </div>
                <CardTitle>Enterprise</CardTitle>
                <CardDescription>For large organizations</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">$20</span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {[
                    'Unlimited Templates',
                    'Premium Legal Research',
                    'Advanced Case Management',
                    'Policy Database Access',
                    'Dedicated Account Manager'
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-primary mr-2 mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" onClick={() => handleSelectPlan('enterprise')}>
                  Select Plan
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          <div className="text-center text-sm text-muted-foreground bg-muted rounded-xl p-4">
            <p className="font-medium text-foreground mb-1">All plans include:</p>
            <p>14-day free trial • No credit card required • Cancel anytime</p>
          </div>
        </div>
      </div>
    </div>
  );

  // Use createPortal to render the modal at the document body level
  return typeof document !== 'undefined' ? createPortal(modalContent, document.body) : null;
};

export default PricingModal; 