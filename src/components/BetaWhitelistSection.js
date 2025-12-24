import React, { useState } from 'react';
import { Smartphone, Apple, Sparkles, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { db } from '../lib/firebase';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';

const BetaWhitelistSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic email validation
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    // Check for common disposable/spam email patterns
    const emailLower = email.toLowerCase();
    const disposableDomains = ['tempmail', 'throwaway', '10minutemail', 'guerrillamail', 'mailinator'];
    if (disposableDomains.some(domain => emailLower.includes(domain))) {
      setError('Please use a valid personal or business email address');
      return;
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      // Check if email already exists
      const betaWhitelistRef = collection(db, 'beta_whitelist');
      const q = query(betaWhitelistRef, where('email', '==', email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        setError('This email is already on the beta whitelist!');
        setIsSubmitting(false);
        return;
      }

      // Add email to beta_whitelist collection
      await addDoc(betaWhitelistRef, {
        email,
        timestamp: new Date(),
        source: 'homepage_beta_whitelist'
      });

      setIsSuccess(true);
      setEmail('');
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (err) {
      console.error('Error adding to beta whitelist:', err);
      setError('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Info */}
          <div className="space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-muted border border-border">
              <Sparkles className="h-4 w-4 mr-2" />
              <span className="text-sm font-semibold text-foreground">Exclusive Beta Access</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Join the Beta Whitelist
            </h2>
            
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Get early access to our mobile apps and be part of shaping the future of legal technology. 
              Limited spots available for beta testers.
            </p>

            {/* App Download Links */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
                onClick={() => window.open('https://play.google.com/store/apps/details?id=pk.digit.aiwakeel', '_blank')}
                variant="outline"
                className="border-2 transition-all"
              >
                <Smartphone className="mr-2 h-5 w-5" />
                <span className="text-foreground">Android Beta</span>
              </Button>
              
              <Button
                onClick={() => window.open('https://testflight.apple.com/join/ZVgHgqF7', '_blank')}
                variant="outline"
                className="border-2 transition-all"
              >
                <Apple className="mr-2 h-5 w-5" />
                <span className="text-foreground">iOS Beta</span>
              </Button>
            </div>
          </div>

          {/* Right Side - Whitelist Form */}
          <Card className="border-2 border-muted shadow-xl bg-gradient-to-br from-background to-muted/20">
            <CardContent className="p-6 sm:p-8">
              {isSuccess ? (
                <div className="text-center space-y-4 py-8">
                  <div className="flex justify-center">
                    <div className="rounded-full bg-muted p-3">
                      <CheckCircle2 className="h-12 w-12" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    You're on the list!
                  </h3>
                  <p className="text-muted-foreground">
                    We'll notify you as soon as beta spots become available.
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    📧 Please check your spam/junk folder if you don't see our confirmation email.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold tracking-tight">
                      Reserve Your Spot
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Enter your email to join the exclusive beta whitelist
                    </p>
                  </div>

                  <div className="space-y-3">
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setError('');
                      }}
                      disabled={isSubmitting}
                      className="h-12 text-base border-2 transition-colors"
                      required
                    />
                    
                    {error && (
                      <p className="text-sm text-red-500 font-medium">
                        {error}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 text-base font-semibold shadow-lg hover:shadow-xl transition-all"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-pulse">Joining...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="mr-2 h-5 w-5" />
                        Join Beta Whitelist
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    No spam, ever. We'll only contact you about beta access.
                  </p>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BetaWhitelistSection;
