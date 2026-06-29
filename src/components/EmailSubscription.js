import React, { useState, useRef, useEffect } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Loader2 } from 'lucide-react';
import { validateEmail, isHoneypotFilled, isTooFast, isRateLimited, normalizeEmailForDedup } from '../utils/spamProtection';
import { getRecaptchaToken } from '../utils/recaptcha';

const EmailSubscription = () => {
  const [email, setEmail] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formStartTime = useRef(Date.now());

  useEffect(() => {
    formStartTime.current = Date.now();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot: silently discard bot submissions
    if (isHoneypotFilled(honeypot)) return;

    // Timing: reject submissions under 3 seconds
    if (isTooFast(formStartTime.current)) {
      setStatus({ type: 'error', message: 'Please try again.' });
      return;
    }

    // Rate limiting
    if (isRateLimited('newsletter')) {
      setStatus({ type: 'error', message: 'Too many attempts. Please try again later.' });
      return;
    }

    const emailError = validateEmail(email);
    if (emailError) {
      setStatus({ type: 'error', message: emailError });
      return;
    }

    try {
      setIsSubmitting(true);
      setStatus({ type: '', message: '' });

      // Load Firebase only on submit so it stays out of the initial page bundle.
      const [{ db }, { collection, addDoc, Timestamp, query, where, getDocs }] = await Promise.all([
        import('../lib/firebase'),
        import('firebase/firestore'),
      ]);

      const recaptchaToken = await getRecaptchaToken('newsletter_subscribe');
      const normalizedEmail = normalizeEmailForDedup(email);
      const ref = collection(db, 'subscribed_users');
      const existing = await getDocs(query(ref, where('email', '==', normalizedEmail)));
      if (!existing.empty) {
        setStatus({ type: 'error', message: 'This email is already subscribed.' });
        return;
      }

      await addDoc(ref, {
        email: normalizedEmail,
        subscribedAt: Timestamp.now(),
        status: 'active',
        email_sent: false,
        source: 'homepage_newsletter',
        recaptchaToken: recaptchaToken || null,
      });

      setEmail('');
      setStatus({ type: 'success', message: 'Thank you for subscribing!' });
    } catch (error) {
      console.error('Error adding subscriber:', error);
      setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
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

      <div className="flex flex-col sm:flex-row gap-2">
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          disabled={isSubmitting}
          className="flex-grow"
        />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Subscribing...
            </>
          ) : (
            'Subscribe'
          )}
        </Button>
      </div>

      {status.message && (
        <div className={`text-sm ${status.type === 'error' ? 'text-destructive' : 'text-green-600 dark:text-green-500'}`}>
          {status.message}
        </div>
      )}

      <p className="text-sm text-muted-foreground">
        Get updates about new features and legal tech insights. No spam, ever.
      </p>
    </form>
  );
};

export default EmailSubscription;
