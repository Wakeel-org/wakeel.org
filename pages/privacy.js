import React from 'react';
import Layout from '../src/components/Layout';

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="pt-16 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 
            bg-gradient-to-r from-light-accent to-light-accent-light bg-clip-text text-transparent
            dark:from-dark-accent dark:to-dark-accent-light">
            Privacy Policy
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            At Wakeel.org, we take your privacy seriously. This policy outlines how we collect, use, and protect your information.
          </p>
        </div>
        
        <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto text-gray-700 dark:text-gray-300">
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 dark:text-white">Last Updated: {new Date().toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'})}</h2>
            <p>
              Thank you for choosing Wakeel.org for your legal technology needs. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </div>
          
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 dark:text-white">Information We Collect</h2>
            <p>We may collect information about you in various ways, including:</p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800 dark:text-white">Personal Data</h3>
            <p>
              When you register for an account, subscribe to our newsletter, or use our services, we may collect personally identifiable information, such as:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
              <li>Name, email address, and contact information</li>
              <li>Billing information and payment details</li>
              <li>Professional information and credentials</li>
              <li>User preferences and settings</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800 dark:text-white">Usage Data</h3>
            <p>
              We automatically collect certain information when you visit, use, or navigate our platform. This information may include:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
              <li>IP address and device information</li>
              <li>Browser type and version</li>
              <li>Pages visited and features used</li>
              <li>Time spent on pages and interaction data</li>
              <li>Referring website addresses</li>
            </ul>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 dark:text-white">How We Use Your Information</h2>
            <p>We may use the information we collect for various purposes, including:</p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
              <li>Providing, maintaining, and improving our services</li>
              <li>Processing transactions and managing your account</li>
              <li>Responding to your inquiries and support requests</li>
              <li>Sending administrative information and updates</li>
              <li>Delivering personalized content and recommendations</li>
              <li>Analyzing usage patterns to enhance user experience</li>
              <li>Protecting against fraud and unauthorized access</li>
              <li>Complying with legal obligations</li>
            </ul>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 dark:text-white">Information Sharing and Disclosure</h2>
            <p>
              We may share your information in the following situations:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
              <li><strong>With Service Providers:</strong> We may share your information with third-party vendors, service providers, and contractors who perform services for us.</li>
              <li><strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.</li>
              <li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities.</li>
              <li><strong>With Your Consent:</strong> We may share your information with other parties with your consent or at your direction.</li>
            </ul>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 dark:text-white">Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect the security of your personal information. However, please be aware that no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 dark:text-white">Your Privacy Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
              <li>The right to access and receive a copy of your personal information</li>
              <li>The right to rectify or update your personal information</li>
              <li>The right to request deletion of your personal information</li>
              <li>The right to restrict or object to our processing of your personal information</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent where we rely on consent to process your information</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the information provided at the end of this policy.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 dark:text-white">Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our platform and hold certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 dark:text-white">Children's Privacy</h2>
            <p>
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personally identifiable information from children under 18. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we can take necessary actions.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 dark:text-white">Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 dark:text-white">Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="mt-4">
              <p><strong>Email:</strong> privacy@wakeel.org</p>
              <p><strong>Address:</strong> Wakeel.org Headquarters, 123 Legal Avenue, Suite 500, San Francisco, CA 94105</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy; 