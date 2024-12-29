import Layout from '../src/components/Layout';
import Hero from '../src/components/Hero';
import Values from '../src/components/Values';
import Features from '../src/components/Features';
import EmailSubscription from '../src/components/EmailSubscription';

export default function Home() {
  return (
    <Layout>
      <Hero />
      
      {/* Values Section */}
      <section className="py-16 sm:py-20 px-6 bg-white dark:bg-gray-900">
        <Values />
      </section>
      
      {/* Features/Services Section */}
      <Features />
      
      {/* Call to Action Section with Email Subscription */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Ready to Transform Your Legal Practice?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto">
            Join thousands of legal professionals who trust Wakeel.org for their legal technology needs.
          </p>

          <EmailSubscription />
        </div>
      </section>
    </Layout>
  );
} 