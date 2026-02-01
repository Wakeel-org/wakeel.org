import Head from 'next/head';
import Layout from '../src/components/Layout';
import Hero from '../src/components/Hero';
import WhoIsThisFor from '../src/components/WhoIsThisFor';
import Values from '../src/components/Values';
import Features from '../src/components/Features';
import Pricing from '../src/components/Pricing';
import EmailSubscription from '../src/components/EmailSubscription';
// Beta components - commented out for production, can be re-enabled for future beta launches
// import BetaLaunchPopup from '../src/components/BetaLaunchPopup';
// import BetaWhitelistSection from '../src/components/BetaWhitelistSection';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Wakeel.org - AI-Powered Legal Technology Solutions | Case Management & Research</title>
        <meta name="description" content="Transform your legal practice with Wakeel.org's AI-powered legal research, case management, and policy development solutions. Trusted by 10,000+ legal professionals in 50+ countries." />
        <meta name="keywords" content="legal technology, AI legal research, case management software, legal AI tools, legal practice management, legal research platform, AI lawyer assistant, legal document automation, law firm software, Wakeel mobile app, legal tech app, Android legal app, iOS legal app" />
        
        {/* Mobile App Links */}
        <meta property="al:android:url" content="https://play.google.com/store/apps/details?id=pk.digit.aiwakeel" />
        <meta property="al:android:package" content="pk.digit.aiwakeel" />
        <meta property="al:android:app_name" content="Wakeel" />
        <meta property="al:ios:url" content="https://apps.apple.com/app/wakeel" />
        <meta property="al:ios:app_name" content="Wakeel" />
        
        {/* PWA Support */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Geo Tags */}
        <meta name="geo.region" content="PK-PB" />
        <meta name="geo.placename" content="Lahore" />
        <meta name="geo.position" content="31.5204;74.3587" />
        <meta name="ICBM" content="31.5204, 74.3587" />
        
        {/* Mobile Optimization */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Wakeel.org" />
        
        {/* Theme Color for different devices */}
        <meta name="theme-color" content="#3b82f6" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#1e40af" media="(prefers-color-scheme: dark)" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://wakeel.org" />
        <meta property="og:title" content="Wakeel.org - AI-Powered Legal Technology Solutions | Available on Web & Mobile" />
        <meta property="og:description" content="Transform your legal practice with AI-powered legal research, case management, and policy development solutions. Available on Web, Android & iOS. Trusted by 10,000+ legal professionals in 50+ countries." />
        <meta property="og:image" content="https://wakeel.org/og-image.jpg" />
        <meta property="og:see_also" content="https://play.google.com/store/apps/details?id=pk.digit.aiwakeel" />
        <meta property="og:see_also" content="https://apps.apple.com/app/wakeel" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://wakeel.org" />
        <meta name="twitter:title" content="Wakeel.org - AI-Powered Legal Technology Solutions" />
        <meta name="twitter:description" content="Transform your legal practice with AI-powered legal research and case management solutions." />
        <meta name="twitter:image" content="https://wakeel.org/og-image.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://wakeel.org" />
        
        {/* Structured Data for Website & Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Wakeel.org",
              "url": "https://wakeel.org",
              "description": "AI-powered legal technology platform for legal research, case management, and policy development",
              "publisher": {
                "@type": "Organization",
                "name": "Wakeel.org",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://wakeel.org/logo-dark.svg"
                },
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Lahore",
                  "addressRegion": "Punjab",
                  "addressCountry": "PK"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": "31.5204",
                  "longitude": "74.3587"
                },
                "areaServed": {
                  "@type": "GeoCircle",
                  "geoMidpoint": {
                    "@type": "GeoCoordinates",
                    "latitude": "31.5204",
                    "longitude": "74.3587"
                  },
                  "geoRadius": "20000000"
                }
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://wakeel.org/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Wakeel.org Legal Technology Platform",
              "applicationCategory": "BusinessApplication",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "validFrom": "2020-01-01"
              },
              "operatingSystem": "Web, iOS, Android, Windows, MacOS, Linux",
              "browserRequirements": "Requires JavaScript. Requires HTML5.",
              "description": "Comprehensive legal technology solution offering AI-powered legal research, case management, and policy development tools",
              "featureList": "Legal Research, Case Management, Document Automation, Policy Development, AI-Powered Analysis",
              "screenshot": "https://wakeel.org/og-image.jpg",
              "provider": {
                "@type": "Organization",
                "name": "Wakeel.org",
                "url": "https://wakeel.org"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1500",
                "bestRating": "5",
                "worstRating": "1"
              },
              "applicationSubCategory": "Legal Technology, Practice Management, Legal Research",
              "downloadUrl": "https://wakeel.web.app",
              "softwareVersion": "2.0",
              "releaseNotes": "Enhanced AI capabilities, improved case management, and expanded legal research database"
            })
          }}
        />
      </Head>
      
      {/* Beta Launch Popup - Commented out for production, can be re-enabled for future beta campaigns */}
      {/* <BetaLaunchPopup /> */}
      
      <Hero />
      
      {/* Beta Whitelist Section - Hidden, using popup instead */}
      {/* <BetaWhitelistSection /> */}
      
      {/* Who Is This For Section */}
      <div id="who-is-this-for">
        <WhoIsThisFor />
      </div>
      
      {/* Values Section */}
      <section id="values" className="py-20 sm:py-24 bg-background">
        <Values />
      </section>
      
      {/* Features/Services Section */}
      <div id="features">
        <Features />
      </div>
      
      {/* Pricing Section */}
      <div id="pricing">
        <Pricing />
      </div>
      
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