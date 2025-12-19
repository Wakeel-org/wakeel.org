import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { X, Building, Mail, User, Phone, MessageSquare, Loader2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { db } from '../config/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const ContactSalesModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [validationErrors, setValidationErrors] = useState({});

  // Handle escape key press
  React.useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear status when user starts typing
    if (submitStatus) setSubmitStatus(null);
  };

  const validateForm = () => {
    const errors = {};

    // Name validation: min 2 characters, max 100, no numbers only
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters';
    } else if (formData.name.trim().length > 100) {
      errors.name = 'Name must be less than 100 characters';
    } else if (/^[0-9]+$/.test(formData.name.trim())) {
      errors.name = 'Name cannot contain only numbers';
    }

    // Email validation: proper format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email.trim())) {
      errors.email = 'Please enter a valid email address';
    } else if (formData.email.trim().length > 100) {
      errors.email = 'Email must be less than 100 characters';
    }

    // Phone validation: min 10 digits
    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (phoneDigits.length < 10) {
      errors.phone = 'Phone number must be at least 10 digits';
    } else if (phoneDigits.length > 15) {
      errors.phone = 'Phone number must be less than 15 digits';
    }

    // Company validation: min 2 characters
    if (!formData.company.trim() || formData.company.trim().length < 2) {
      errors.company = 'Company name must be at least 2 characters';
    } else if (formData.company.trim().length > 100) {
      errors.company = 'Company name must be less than 100 characters';
    }

    // Message validation: min 10 characters, max 1000
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    } else if (formData.message.trim().length > 1000) {
      errors.message = 'Message must be less than 1000 characters';
    }

    // Check for spam patterns
    const spamPatterns = [
      /http:\/\//gi,
      /https:\/\//gi,
      /<a\s+href/gi,
      /\[url=/gi,
      /viagra|cialis|casino|lottery|prize/gi
    ];

    const allText = `${formData.name} ${formData.email} ${formData.company} ${formData.message}`;
    if (spamPatterns.some(pattern => pattern.test(allText))) {
      errors.spam = 'Your submission contains prohibited content';
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValidationErrors({});
    setSubmitStatus(null);

    // Validate form
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);

    try {
      // Add to Firestore with trimmed values
      await addDoc(collection(db, 'web_sales_query'), {
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        phone: formData.phone.trim(),
        company: formData.company.trim(),
        message: formData.message.trim(),
        timestamp: serverTimestamp(),
        status: 'new',
        source: 'pricing_page'
      });

      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });

      // Close modal after 2 seconds
      setTimeout(() => {
        onClose();
        setSubmitStatus(null);
      }, 2000);

    } catch (error) {
      console.error('Error submitting sales query:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  const modalContent = (
    <div 
      className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 overflow-y-auto animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <Card className="w-full max-w-2xl bg-card shadow-2xl border-border animate-fadeIn my-8">
        <CardHeader className="border-b border-border pb-6">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-primary">
                <Building className="w-6 h-6" />
              </div>
              <div>
                <CardTitle className="text-2xl sm:text-3xl">Contact Sales</CardTitle>
                <CardDescription className="mt-2">
                  Get in touch with our team to discuss enterprise solutions
                </CardDescription>
              </div>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={onClose}
              aria-label="Close modal"
              className="shrink-0"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
                <User className="w-4 h-4 text-primary" />
                Full Name <span className="text-destructive">*</span>
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                Email Address <span className="text-destructive">*</span>
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@company.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                Phone Number <span className="text-destructive">*</span>
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+92 300 1234567"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>

            {/* Company */}
            <div className="space-y-2">
              <label htmlFor="company" className="text-sm font-medium flex items-center gap-2">
                <Building className="w-4 h-4 text-primary" />
                Company/Organization <span className="text-destructive">*</span>
              </label>
              <Input
                id="company"
                name="company"
                type="text"
                placeholder="Your Company Name"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-primary" />
                Message <span className="text-destructive">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Tell us about your requirements..."
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-background border border-input rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              />
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-700 dark:text-green-400 text-sm animate-fadeIn">
                ✓ Thank you! Our sales team will contact you shortly.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm animate-fadeIn space-y-1">
                {Object.keys(validationErrors).length > 0 ? (
                  <>
                    <div className="font-medium">✗ Please fix the following errors:</div>
                    <ul className="list-disc list-inside space-y-0.5 ml-2">
                      {Object.values(validationErrors).map((error, idx) => (
                        <li key={idx}>{error}</li>
                      ))}
                    </ul>
                  </>
                ) : (
                  '✗ Something went wrong. Please try again or email us directly.'
                )}
              </div>
            )}

            {/* Submit Button */}
            <div className="flex gap-3 pt-2">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Submit Inquiry'
                )}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );

  return typeof document !== 'undefined' ? createPortal(modalContent, document.body) : null;
};

export default ContactSalesModal;
