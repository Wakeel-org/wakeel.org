import React, { useState } from 'react';
import { db } from '../lib/firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

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
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        <div className="flex-grow">
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address" 
            className="w-full px-5 py-3 rounded-xl bg-white dark:bg-gray-800 
              border-2 border-gray-200 dark:border-gray-700 
              focus:border-blue-600 dark:focus:border-blue-500
              focus:ring-2 focus:ring-blue-600/20 dark:focus:ring-blue-500/20
              text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400
              transition-all duration-300 outline-none
              disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          />
        </div>
        <button 
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl 
            hover:bg-blue-700 transition transform hover:scale-105 
            hover:shadow-lg text-base font-medium
            whitespace-nowrap flex-shrink-0
            disabled:opacity-50 disabled:cursor-not-allowed
            disabled:hover:transform-none disabled:hover:shadow-none"
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </button>
      </div>

      {/* Status Messages */}
      {status.message && (
        <div className={`mt-3 text-sm ${
          status.type === 'error' ? 'text-red-500' : 'text-green-500'
        }`}>
          {status.message}
        </div>
      )}

      <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
        Get updates about new features and legal tech insights. No spam, ever.
      </p>
    </form>
  );
};

export default EmailSubscription; 