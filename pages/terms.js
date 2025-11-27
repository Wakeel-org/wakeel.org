import React from 'react';
import Layout from '../src/components/Layout';

const TermsOfService = () => {
  return (
    <Layout>
      <div className="pt-16 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Terms of Service
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Please read these terms carefully before using our platform and services.
          </p>
        </div>
        
        <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto text-muted-foreground">
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">Last Updated: {new Date().toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'})}</h2>
            <p>
              These Terms of Service ("Terms") govern your access to and use of Wakeel.org's website, products, and services. By accessing or using our services, you agree to be bound by these Terms and our Privacy Policy.
            </p>
          </div>
          
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">1. Acceptance of Terms</h2>
            <p>
              By registering for an account or using any part of our services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use our services.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">2. Services Description</h2>
            <p>
              Wakeel.org provides legal technology solutions, including legal research tools, case management software, document automation, and related services designed for legal professionals ("Services"). We reserve the right to modify, suspend, or discontinue any part of our Services at any time without prior notice.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">3. Account Registration</h2>
            <p>
              To access certain features of our Services, you must register for an account. When registering, you agree to provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
            </p>
            <p className="mt-4">
              You must be at least 18 years old and have the legal capacity to enter into binding contracts to create an account and use our Services.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">4. Subscription and Payment Terms</h2>
            <p>
              Some of our Services require payment of fees on a subscription basis ("Subscription Services"). By subscribing to such Services, you agree to pay all applicable fees as specified at the time of purchase.
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
              <li><strong>Billing Cycle:</strong> Subscription fees are billed in advance on either a monthly or annual basis, depending on the subscription plan you select.</li>
              <li><strong>Automatic Renewal:</strong> Your subscription will automatically renew at the end of each billing period unless you cancel it prior to the renewal date.</li>
              <li><strong>Cancellation:</strong> You may cancel your subscription at any time through your account settings. Cancellations will take effect at the end of the current billing period.</li>
              <li><strong>Refunds:</strong> Except as required by law, subscription fees are non-refundable, and we do not provide refunds or credits for partial subscription periods.</li>
              <li><strong>Price Changes:</strong> We reserve the right to change our subscription fees at any time. Any price changes will take effect at the start of the next subscription period after notice of the change has been provided.</li>
            </ul>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">5. User Conduct</h2>
            <p>
              When using our Services, you agree not to:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
              <li>Violate any applicable law, regulation, or these Terms</li>
              <li>Infringe upon the rights of others, including intellectual property rights</li>
              <li>Upload, transmit, or distribute any content that is unlawful, harmful, threatening, abusive, harassing, defamatory, or otherwise objectionable</li>
              <li>Attempt to gain unauthorized access to any portion of the Services or any systems or networks connected to the Services</li>
              <li>Use the Services for any illegal purpose or in any manner that could damage, disable, overburden, or impair the functioning of the Services</li>
              <li>Use any automated means to access the Services or collect any information from the Services</li>
              <li>Impersonate any person or entity or falsely state or otherwise misrepresent your affiliation with a person or entity</li>
            </ul>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">6. Intellectual Property Rights</h2>
            <p>
              The Services and their original content, features, and functionality are owned by Wakeel.org and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>
            <p className="mt-4">
              You may not copy, modify, create derivative works from, publicly display, publicly perform, republish, download, or distribute any portion of the Services without our prior written consent. This includes any text, graphics, logos, images, audio, video, software, code, and other materials contained on the Services.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">7. User Content</h2>
            <p>
              You retain ownership of any content you submit, post, or display on or through the Services ("User Content"). By providing User Content, you grant us a worldwide, non-exclusive, royalty-free license to use, copy, modify, create derivative works from, distribute, publicly display, and publicly perform your User Content in connection with providing and improving the Services.
            </p>
            <p className="mt-4">
              You represent and warrant that: (i) you own the User Content or have the right to use and license it to us, and (ii) the User Content does not violate the rights of any third party, including intellectual property rights and rights of privacy or publicity.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">8. Confidentiality and Data Security</h2>
            <p>
              We take appropriate measures to protect the confidentiality and security of any information you provide to us. However, you acknowledge that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security.
            </p>
            <p className="mt-4">
              For more information on how we collect, use, and protect your data, please refer to our Privacy Policy.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">9. Disclaimer of Warranties</h2>
            <p>
              THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT THE SERVICES OR THE SERVERS THAT MAKE THEM AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">10. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, WAKEEL.ORG AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, PARTNERS, AND SUPPLIERS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM (I) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICES; (II) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICES; (III) ANY CONTENT OBTAINED FROM THE SERVICES; AND (IV) UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), OR ANY OTHER LEGAL THEORY, WHETHER OR NOT WE HAVE BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">11. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless Wakeel.org and its officers, directors, employees, agents, and affiliates from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including but not limited to attorney's fees) arising from: (i) your use of and access to the Services; (ii) your violation of any term of these Terms; (iii) your violation of any third-party right, including without limitation any copyright, property, or privacy right; or (iv) any claim that your User Content caused damage to a third party.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">12. Governing Law and Jurisdiction</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. You agree to submit to the personal and exclusive jurisdiction of the courts located in San Francisco County, California for the resolution of any disputes arising out of or relating to these Terms or the Services.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">13. Changes to Terms</h2>
            <p>
              We reserve the right to modify or replace these Terms at any time at our sole discretion. The most current version will be posted on our website with the "Last Updated" date at the top. By continuing to access or use our Services after any revisions become effective, you agree to be bound by the revised Terms.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">14. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <div className="mt-4">
              <p><strong>Email:</strong> legal@wakeel.org</p>
              <p><strong>Address:</strong> Wakeel.org Headquarters, 123 Legal Avenue, Suite 500, San Francisco, CA 94105</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default TermsOfService; 