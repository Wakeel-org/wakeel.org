import React, { useState, useEffect, useRef } from 'react';
import { X, Smartphone, Apple, Sparkles, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { db } from '../lib/firebase';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { APP_STORE_LINKS } from '../utils/platformDetection';
import { validateEmail, isHoneypotFilled, isTooFast, isRateLimited, normalizeEmailForDedup } from '../utils/spamProtection';

const BetaLaunchPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const formStartTime = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      formStartTime.current = Date.now();
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot: silently discard bot submissions
    if (isHoneypotFilled(honeypot)) return;

    // Timing: reject submissions under 3 seconds from popup open
    if (formStartTime.current && isTooFast(formStartTime.current)) {
      setError('Please try again.');
      return;
    }

    // Rate limiting
    if (isRateLimited('beta_popup')) {
      setError('Too many attempts. Please try again later.');
      return;
    }

    const emailError = validateEmail(email);
    if (emailError) {
      setError(emailError);
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const normalizedEmail = normalizeEmailForDedup(email);
      const betaWhitelistRef = collection(db, 'beta_whitelist');
      const q = query(betaWhitelistRef, where('email', '==', normalizedEmail));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        setError('This email is already on the beta whitelist!');
        setIsSubmitting(false);
        return;
      }

      await addDoc(betaWhitelistRef, {
        email: normalizedEmail,
        timestamp: new Date(),
        source: 'homepage_beta_popup',
        status: 'active',
        sent: false,
      });

      setIsSuccess(true);
      setEmail('');

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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <Card className="relative max-w-6xl w-full bg-background border-2 shadow-2xl animate-in zoom-in duration-300">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors z-10"
          aria-label="Close popup"
        >
          <X className="h-5 w-5 text-muted-foreground" />
        </button>

        <CardContent className="p-6 sm:p-8">
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
                  onClick={() => window.open(APP_STORE_LINKS.android, '_blank')}
                  variant="outline"
                  className="border-2 transition-all"
                >
                  <Smartphone className="mr-2 h-5 w-5" />
                  <span className="text-foreground">Android Beta</span>
                </Button>
                
                <Button
                  onClick={() => window.open(APP_STORE_LINKS.ios, '_blank')}
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
                    <p className="text-sm text-muted-foreground mt-2 px-4">
                      📧 Please check your spam/junk folder if you don't see our confirmation email.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Honeypot — hidden from humans, filled by bots */}
                    <div style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }} aria-hidden="true">
                      <input
                        type="text"
                        name="website"
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>

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
        </CardContent>
      </Card>
    </div>
  );
};

export default BetaLaunchPopup;
