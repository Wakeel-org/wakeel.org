import { useState, useEffect } from 'react';
import Layout from '../src/components/Layout';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../src/lib/firebase';
import { getFaqs } from '../src/lib/firebase/collections';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
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

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      await addDoc(collection(db, 'website_queries'), {
        ...formData,
        createdAt: serverTimestamp(),
        status: 'new',
        source: 'website_contact_form'
      });

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
      value: 'contact@wakeel.org',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Phone',
      value: '+1 (555) 123-4567',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      title: 'Location',
      value: 'San Francisco, CA',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  return (
    <Layout>
      {/* Hero Section - Adjusted spacing */}
      <section className="pt-16 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 
        bg-gradient-to-br from-blue-50 via-indigo-50/50 to-white 
        dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
        relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 
            bg-gradient-to-br from-blue-600/10 to-indigo-600/10 
            rounded-full blur-3xl transform rotate-12" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 
            bg-gradient-to-br from-blue-600/10 to-indigo-600/10 
            rounded-full blur-3xl transform -rotate-12" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 
            bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Section - Adjusted spacing */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 
        bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Contact Form */}
            <div className="lg:col-span-7 bg-white dark:bg-gray-800 rounded-2xl 
              shadow-lg border border-gray-100 dark:border-gray-700
              transform hover:scale-[1.01] transition-all duration-300">
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-6 
                  bg-clip-text text-transparent bg-gradient-to-r 
                  from-blue-600 to-indigo-600">
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 
                        border-2 border-gray-200 dark:border-gray-700 
                        focus:border-blue-600 dark:focus:border-blue-500
                        focus:ring-2 focus:ring-blue-600/20 dark:focus:ring-blue-500/20
                        text-gray-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 
                        border-2 border-gray-200 dark:border-gray-700 
                        focus:border-blue-600 dark:focus:border-blue-500
                        focus:ring-2 focus:ring-blue-600/20 dark:focus:ring-blue-500/20
                        text-gray-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 
                        border-2 border-gray-200 dark:border-gray-700 
                        focus:border-blue-600 dark:focus:border-blue-500
                        focus:ring-2 focus:ring-blue-600/20 dark:focus:ring-blue-500/20
                        text-gray-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 
                        border-2 border-gray-200 dark:border-gray-700 
                        focus:border-blue-600 dark:focus:border-blue-500
                        focus:ring-2 focus:ring-blue-600/20 dark:focus:ring-blue-500/20
                        text-gray-900 dark:text-white resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 text-white px-8 py-4 rounded-xl 
                      hover:bg-blue-700 transition transform hover:scale-105 
                      hover:shadow-lg text-base font-medium
                      disabled:opacity-50 disabled:cursor-not-allowed
                      disabled:hover:transform-none disabled:hover:shadow-none"
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>

                  {status.message && (
                    <div className={`text-sm ${
                      status.type === 'error' ? 'text-red-500' : 'text-green-500'
                    }`}>
                      {status.message}
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Right Side Content - Adjusted spacing */}
            <div className="lg:col-span-5 space-y-6">
              {/* Contact Information Card - Condensed spacing */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 
                shadow-lg border border-gray-100 dark:border-gray-700
                transform hover:scale-[1.01] transition-all duration-300">
                <h2 className="text-xl font-bold mb-4 
                  bg-clip-text text-transparent bg-gradient-to-r 
                  from-blue-600 to-indigo-600">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} 
                      className="flex items-center space-x-3 p-3 rounded-xl
                        hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                      <div className="flex-shrink-0 w-10 h-10 
                        bg-gradient-to-br from-blue-100 to-indigo-100 
                        dark:from-blue-900/30 dark:to-indigo-900/30 
                        rounded-lg flex items-center justify-center 
                        text-blue-600 dark:text-blue-400">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                          {info.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ Section - Condensed spacing */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 
                shadow-lg border border-gray-100 dark:border-gray-700
                transform hover:scale-[1.01] transition-all duration-300">
                <h2 className="text-xl font-bold mb-4 
                  bg-clip-text text-transparent bg-gradient-to-r 
                  from-blue-600 to-indigo-600">
                  Frequently Asked Questions
                </h2>
                
                {faqsLoading ? (
                  // FAQ Loading Skeleton
                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="animate-pulse">
                        <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2" />
                        <div className="h-4 bg-gray-100 dark:bg-gray-800 rounded w-full" />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-2">
                    {faqs.map((faq, index) => (
                      <div key={faq.id} 
                        className="border-b border-gray-200 dark:border-gray-700 last:border-0">
                        <button
                          className="w-full py-3 flex justify-between items-center text-left 
                            hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                          onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                        >
                          <span className="text-base font-semibold flex-grow pr-4">
                            {faq.question}
                          </span>
                          <svg
                            className={`w-5 h-5 flex-shrink-0 transform transition-transform duration-200 
                              ${openFaqIndex === index ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                              d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 
                          ${openFaqIndex === index ? 'max-h-96 pb-3' : 'max-h-0'}`}>
                          <p className="text-sm text-gray-600 dark:text-gray-300 prose dark:prose-invert">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage; 