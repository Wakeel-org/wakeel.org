import Layout from '../src/components/Layout';
import Hero from '../src/components/Hero';
import WhoIsThisFor from '../src/components/WhoIsThisFor';
import Values from '../src/components/Values';
import Features from '../src/components/Features';
import Pricing from '../src/components/Pricing';
import EmailSubscription from '../src/components/EmailSubscription';

export default function Home() {
  return (
    <Layout>
      <Hero />
      
      {/* Who Is This For Section */}
      <WhoIsThisFor />
      
      {/* Values Section */}
      <section className="py-20 sm:py-24 bg-background">
        <Values />
      </section>
      
      {/* Features/Services Section */}
      <Features />
      
      {/* Pricing Section */}
      <Pricing />
      
      {/* Call to Action Section with Email Subscription */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/50 via-muted/30 to-background">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground">
              Ready to Transform Your Legal Practice?
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Join thousands of legal professionals who trust Wakeel.org for their legal technology needs.
            </p>
          </div>

          <EmailSubscription />
        </div>
      </section>
    </Layout>
  );
} 