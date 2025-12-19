import { useState, useEffect } from 'react';
import Layout from '../src/components/Layout';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../src/lib/firebase';
import { getFaqs } from '../src/lib/firebase/collections';
import { Card, CardContent, CardHeader, CardTitle } from '../src/components/ui/card';
import { Input } from '../src/components/ui/input';
import { Button } from '../src/components/ui/button';
import { Mail, Phone, MapPin, ChevronDown, ChevronUp, Facebook, Instagram, Linkedin } from 'lucide-react';
import { cn } from '../src/lib/utils';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [faqs, setFaqs] = useState([]);
  const [faqsLoading, setFaqsLoading] = useState(true);

  useEffect(() => {
    const loadFaqs = async () => {
      try {
        const faqsData = await getFaqs();
        setFaqs(faqsData);
      } catch (error) {
        console.error('Error loading FAQs:', error);
      } finally {
        setFaqsLoading(false);
      }
    };

    loadFaqs();
  }, []);

  // Validation rules
  const validations = {
    name: {
      pattern: /^[a-zA-Z\s]{2,50}$/,
      message: 'Name should only contain letters and spaces (2-50 characters)'
    },
    email: {
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Please enter a valid email address'
    },
    subject: {
      pattern: /^[a-zA-Z0-9\s]{2,100}$/,
      message: 'Subject should only contain letters, numbers and spaces (2-100 characters)'
    },
    message: {
      pattern: /^[a-zA-Z0-9\s.,!?()-]{10,1000}$/,
      message: 'Message should only contain letters, numbers, and basic punctuation (10-1000 characters)'
    }
  };

  const validateField = (name, value) => {
    if (!value) return 'This field is required';
    if (!validations[name].pattern.test(value)) return validations[name].message;
    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Remove any special characters as they're typed
    let sanitizedValue = value;
    if (name === 'message') {
      sanitizedValue = value.replace(/[^a-zA-Z0-9\s.,!?()-]/g, '');
    } else if (name === 'name') {
      sanitizedValue = value.replace(/[^a-zA-Z\s]/g, '');
    } else if (name === 'subject') {
      sanitizedValue = value.replace(/[^a-zA-Z0-9\s]/g, '');
    }

    setFormData(prev => ({
      ...prev,
      [name]: sanitizedValue
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach(field => {
      const error = validateField(field, formData[field]);
      if (error) newErrors[field] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: '', message: '' });

    if (!validateForm()) {
      setStatus({
        type: 'error',
        message: 'Please correct the errors in the form'
      });
      return;
    }

    setLoading(true);

    try {
      // Additional security check before submission
      const sanitizedData = {
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
        createdAt: serverTimestamp(),
        status: 'new',
        source: 'website_contact_form'
      };

      // Final validation check
      if (Object.keys(sanitizedData).some(key => !sanitizedData[key])) {
        throw new Error('All fields are required');
      }

      await addDoc(collection(db, 'website_queries'), sanitizedData);

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      setStatus({
        type: 'success',
        message: 'Thank you for your message. We will get back to you soon!'
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try again later.'
      });
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      title: 'Email',
      value: 'info@wakeel.org',
      icon: Mail,
      link: 'mailto:info@wakeel.org'
    },
    {
      title: 'Location',
      value: 'Lahore, Pakistan',
      icon: MapPin,
      link: null
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-16 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Contact Form */}
            <div className="lg:col-span-7">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name
                      </label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={errors.name ? 'border-destructive' : ''}
                        placeholder="Your name"
                        maxLength={50}
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-destructive">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? 'border-destructive' : ''}
                        placeholder="Your email"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-destructive">
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject
                      </label>
                      <Input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={errors.subject ? 'border-destructive' : ''}
                        placeholder="Subject"
                        maxLength={100}
                      />
                      {errors.subject && (
                        <p className="mt-1 text-sm text-destructive">
                          {errors.subject}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className={cn(
                          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none",
                          errors.message ? 'border-destructive' : ''
                        )}
                        placeholder="Your message"
                        maxLength={1000}
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-destructive">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full"
                      size="lg"
                    >
                      {loading ? 'Sending...' : 'Send Message'}
                    </Button>

                    {status.message && (
                      <div className={`text-sm ${
                        status.type === 'error' 
                          ? 'text-destructive' 
                          : 'text-green-600 dark:text-green-400'
                      }`}>
                        {status.message}
                      </div>
                    )}
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Right Side Content */}
            <div className="lg:col-span-5 space-y-6">
              {/* Contact Information Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} 
                      className="flex items-center space-x-3 p-3 rounded-xl hover:bg-muted/50 transition-colors">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                        <info.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-sm font-semibold text-foreground">
                          {info.title}
                        </h3>
                        {info.link ? (
                          <a href={info.link} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-sm text-muted-foreground">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                  
                  {/* Social Media Links */}
                  <div className="pt-2">
                    <div className="flex items-center space-x-3 p-3">
                      <div className="flex gap-4">
                        <a href="https://www.facebook.com/aiwakeel" target="_blank" rel="noopener noreferrer" 
                          className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                          <Facebook className="w-5 h-5" />
                        </a>
                        <a href="https://www.instagram.com/wakeel_org" target="_blank" rel="noopener noreferrer" 
                          className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                          <Instagram className="w-5 h-5" />
                        </a>
                        <a href="https://www.linkedin.com/company/wakeelai/" target="_blank" rel="noopener noreferrer" 
                          className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                          <Linkedin className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ Section */}
              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent>
                  {faqsLoading ? (
                    // FAQ Loading Skeleton
                    <div className="space-y-3">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="animate-pulse">
                          <div className="h-5 bg-muted rounded w-3/4 mb-2" />
                          <div className="h-4 bg-muted/50 rounded w-full" />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {faqs.map((faq, index) => (
                        <div key={faq.id} 
                          className="border-b border-border last:border-0">
                          <button
                            className="w-full py-3 flex justify-between items-center text-left hover:text-primary transition-colors"
                            onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                          >
                            <span className="text-base font-semibold flex-grow pr-4 text-foreground">
                              {faq.question}
                            </span>
                            {openFaqIndex === index ? (
                              <ChevronUp className="w-5 h-5 flex-shrink-0" />
                            ) : (
                              <ChevronDown className="w-5 h-5 flex-shrink-0" />
                            )}
                          </button>
                          <div className={`overflow-hidden transition-all duration-300 
                            ${openFaqIndex === index ? 'max-h-96 pb-3' : 'max-h-0'}`}>
                            <p className="text-sm text-muted-foreground prose dark:prose-invert">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage; 