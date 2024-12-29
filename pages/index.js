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
      <section className="pt-20 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 
        bg-gradient-to-br from-light-background via-light-surface to-light-surface-mixed 
        dark:from-dark-background dark:via-dark-surface dark:to-dark-surface-mixed">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 
            bg-gradient-to-r from-light-accent to-light-accent-light bg-clip-text text-transparent
            dark:from-dark-accent dark:to-dark-accent-light">
            Ready to Transform Your Legal Practice?
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto">
            Join thousands of legal professionals who trust Wakeel.org for their legal technology needs.
          </p>

          <EmailSubscription />
        </div>
      </section>
    </Layout>
  );
} 