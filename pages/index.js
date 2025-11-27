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
      <section className="py-16 sm:py-20 bg-background">
        <Values />
      </section>
      
      {/* Features/Services Section */}
      <Features />
      
      {/* Call to Action Section with Email Subscription */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter text-foreground">
              Ready to Transform Your Legal Practice?
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of legal professionals who trust Wakeel.org for their legal technology needs.
            </p>
          </div>

          <EmailSubscription />
        </div>
      </section>
    </Layout>
  );
} 