import React, { useState } from 'react';
import { db } from '../lib/firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Loader2 } from 'lucide-react';

const EmailSubscription = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      setStatus({
        type: 'error',
        message: 'Please enter your email address'
      });
      return;
    }

    try {
      setIsSubmitting(true);
      setStatus({ type: '', message: '' });

      // Add email to Firestore
      await addDoc(collection(db, 'subscribed_users'), {
        email,
        subscribedAt: Timestamp.now(),
        status: 'active'
      });

      setEmail('');
      setStatus({
        type: 'success',
        message: 'Thank you for subscribing!'
      });
    } catch (error) {
      console.error('Error adding subscriber:', error);
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      <div className="flex flex-col sm:flex-row gap-2">
        <Input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address" 
          disabled={isSubmitting}
          className="flex-grow"
        />
        <Button 
          type="submit"
          disabled={isSubmitting}
        >
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

      {/* Status Messages */}
      {status.message && (
        <div className={`text-sm ${
          status.type === 'error' ? 'text-destructive' : 'text-green-600 dark:text-green-500'
        }`}>
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