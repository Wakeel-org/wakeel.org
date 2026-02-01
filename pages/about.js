import Head from 'next/head';
import Layout from '../src/components/Layout';
import { Card, CardContent } from '../src/components/ui/card';
import { 
  Scale, 
  Shield, 
  Target, 
  Users, 
  Globe2, 
  Award, 
  Briefcase,
  BookOpen,
  Lightbulb,
  Heart,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Zap,
  MessageCircle
} from 'lucide-react';

const AboutPage = () => {
  const coreValues = [
    {
      icon: Scale,
      title: 'Integrity',
      description: 'Upholding the highest standards of honesty and ethics in all our dealings.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Continuously seeking innovative solutions that address the evolving challenges of the legal profession.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committing to superior quality in every service and product we offer.'
    },
    {
      icon: Shield,
      title: 'Dependability',
      description: 'Ensuring our clients can rely on us for consistent, trustworthy support.'
    },
    {
      icon: Briefcase,
      title: 'Professionalism',
      description: 'Maintaining a professional approach in every interaction and service delivery.'
    },
    {
      icon: Heart,
      title: 'Justice',
      description: 'Supporting the fair administration of law and justice through our services and solutions.'
    }
  ];

  const services = [
    {
      icon: BookOpen,
      title: 'Legal Research and Analysis',
      description: 'Providing comprehensive and reliable legal research services to support case preparation and policy formulation.'
    },
    {
      icon: Briefcase,
      title: 'Case Management Solutions',
      description: 'Offering advanced case management systems to streamline legal processes and improve efficiency.'
    },
    {
      icon: Target,
      title: 'Policy Development Support',
      description: 'Assisting policymakers with data-driven insights and innovative solutions for effective policy development.'
    },
    {
      icon: Users,
      title: 'Training and Development',
      description: 'Conducting workshops and training sessions to keep legal professionals updated with the latest trends and best practices.'
    },
    {
      icon: Sparkles,
      title: 'Consultation Services',
      description: 'Providing expert consultation for complex legal issues and strategic planning.'
    }
  ];

  const strategicGoals = [
    {
      title: 'Client Satisfaction',
      description: 'Achieve unparalleled client satisfaction by understanding and meeting the unique needs of legal professionals.'
    },
    {
      title: 'Thought Leadership',
      description: 'Establish Wakeel as a thought leader in legal innovation and dependable support.'
    },
    {
      title: 'Sustainable Growth',
      description: 'Drive sustainable growth by continuously enhancing our offerings and expanding our reach.'
    },
    {
      title: 'Employee Expertise',
      description: 'Develop a team of experts who are leaders in their fields, ensuring we provide top-notch solutions.'
    },
    {
      title: 'Community Impact',
      description: 'Positively impact the legal community by supporting initiatives that uphold justice and integrity.'
    }
  ];

  const stats = [
    { value: '10,000+', label: 'Legal Professionals' },
    { value: 'Pakistan', label: 'Proudly Serving' },
    { value: 'Since 2024', label: 'For the People' },
    { value: '24/7', label: 'Local Support' }
  ];

  return (
    <Layout>
      <Head>
        <title>About Wakeel - Trusted Guardians of Legal Excellence in Pakistan | Since 2024</title>
        <meta name="description" content="Wakeel: For the People, By the People of Pakistan. Since 2024, we've been delivering innovative legal technology solutions with integrity, excellence, and dependability. Serving 10,000+ Pakistani legal professionals." />
        <meta name="keywords" content="Wakeel Pakistan, Pakistani legal technology, legal solutions Pakistan, legal research Pakistan, case management Pakistan, legal services Pakistan, Pakistani lawyers, legal innovation Pakistan, Wakeel.org, legal platform Pakistan, since 2024" />
        
        {/* Viewport for responsive design */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://wakeel.org/about" />
        <meta property="og:site_name" content="Wakeel - Legal Excellence in Pakistan" />
        <meta property="og:title" content="About Wakeel - Trusted Guardians of Legal Excellence in Pakistan" />
        <meta property="og:description" content="For the People, By the People of Pakistan. Since 2024, delivering innovative legal solutions to 10,000+ Pakistani legal professionals." />
        <meta property="og:image" content="https://wakeel.org/og-about.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_PK" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://wakeel.org/about" />
        <meta name="twitter:title" content="About Wakeel - Trusted Guardians of Legal Excellence in Pakistan" />
        <meta name="twitter:description" content="For the People, By the People of Pakistan. Since 2024, delivering innovative legal solutions." />
        <meta name="twitter:image" content="https://wakeel.org/og-about.jpg" />
        <meta name="twitter:site" content="@wakeelorg" />
        <meta name="twitter:creator" content="@wakeelorg" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="author" content="Wakeel - Legal Technology Pakistan" />
        <meta name="geo.region" content="PK" />
        <meta name="geo.placename" content="Pakistan" />
        <meta name="language" content="English" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://wakeel.org/about" />
        <link rel="alternate" hreflang="en-pk" href="https://wakeel.org/about" />
        <link rel="alternate" hreflang="en" href="https://wakeel.org/about" />
        
        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              "name": "Wakeel",
              "alternateName": "Wakeel.org",
              "description": "Trusted Guardians of Legal Excellence - For the People, By the People of Pakistan. Empowering Pakistani legal professionals with innovative technology solutions since 2024.",
              "url": "https://wakeel.org",
              "logo": "https://wakeel.org/logo-dark.svg",
              "image": "https://wakeel.org/og-about.jpg",
              "foundingDate": "2024",
              "slogan": "Trusted Guardians of Legal Excellence",
              "motto": "For the People, By the People of Pakistan",
              "founder": {
                "@type": "Organization",
                "name": "Wakeel Pakistan"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Lahore",
                "addressRegion": "Punjab",
                "addressCountry": "PK"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "info@wakeel.org",
                "contactType": "Customer Service",
                "areaServed": "PK",
                "availableLanguage": ["English", "Urdu"]
              },
              "areaServed": {
                "@type": "Country",
                "name": "Pakistan"
              },
              "serviceType": [
                "Legal Research and Analysis",
                "Case Management Solutions",
                "Policy Development Support",
                "Legal Training and Development",
                "Expert Legal Consultation"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "1250",
                "bestRating": "5",
                "worstRating": "1"
              },
              "priceRange": "$$"
            })
          }}
        />
        
        {/* BreadcrumbList Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://wakeel.org"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "About",
                  "item": "https://wakeel.org/about"
                }
              ]
            })
          }}
        />
      </Head>

      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-24 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-muted/50 via-muted/20 to-background" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
        
        <div className="relative max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 mb-6 sm:mb-8 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-sm hover:shadow-md transition-shadow">
            <Scale className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-primary animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold">Established 2024</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 tracking-tight leading-tight px-4">
            <span className="block mb-2">Trusted Guardians of</span>
            <span className="block bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              Legal Excellence
            </span>
          </h1>
          
          {/* Tagline */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-semibold mb-3 sm:mb-4 px-4">
            For the People, By the People of Pakistan
          </p>
          
          {/* Since Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            <span className="text-sm sm:text-base text-primary font-medium">Since 2024</span>
          </div>
          
          {/* Description */}
          <p className="mt-6 sm:mt-8 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
            Empowering Pakistani legal professionals with innovative technology solutions built on integrity, excellence, and dependability.
          </p>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-white dark:from-gray-900 to-transparent pointer-events-none" />
      </section>

      {/* Vision & Mission Statement */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
          {/* Vision */}
          <Card className="border-2 shadow-2xl bg-gradient-to-br from-background to-muted/20 overflow-hidden hover:shadow-3xl transition-all duration-500">
            <CardContent className="p-8 sm:p-12 lg:p-16 relative">
              <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-primary/5 rounded-full blur-3xl" />
              <div className="relative text-center space-y-4 sm:space-y-6">
                <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 mb-4 group-hover:scale-110 transition-transform">
                  <Target className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Our Vision</h2>
                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  To be Pakistan's leading platform for legal innovation, recognized for our unwavering commitment to 
                  integrity, excellence, and reliable support. We envision a future where technology and law 
                  converge seamlessly to empower justice and efficiency for the people of Pakistan.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Mission */}
          <Card className="border-2 shadow-2xl bg-gradient-to-br from-background to-muted/20 overflow-hidden hover:shadow-3xl transition-all duration-500">
            <CardContent className="p-8 sm:p-12 lg:p-16 relative">
              <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-primary/5 rounded-full blur-3xl" />
              <div className="relative text-center space-y-4 sm:space-y-6">
                <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 mb-4 group-hover:scale-110 transition-transform">
                  <Briefcase className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Our Mission</h2>
                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  Wakeel is dedicated to delivering innovative and dependable legal solutions that enhance the 
                  practice of law in Pakistan. We strive to be the trusted partner for legal professionals, policymakers, 
                  and institutions by providing tools and services that promote justice, uphold integrity, and 
                  foster excellence in the legal field for the people of Pakistan.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Core Values - Enhanced Bento Grid */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20">
              <Heart className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Our Foundation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4">Our Core Values</h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              The principles that guide everything we do
            </p>
          </div>
          
          {/* Enhanced Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Integrity - Featured */}
            <Card className="group sm:col-span-2 lg:col-span-2 border-2 hover:shadow-2xl hover:border-primary/50 transition-all duration-500 bg-gradient-to-br from-primary/5 via-background to-background overflow-hidden relative">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-2xl" />
              <CardContent className="p-6 sm:p-8 lg:p-10 relative">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Scale className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3">Integrity</h3>
                    <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                      Upholding the highest standards of honesty and ethics in all our dealings, ensuring trust and transparency.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Innovation */}
            <Card className="group border-2 hover:shadow-2xl hover:border-primary/50 transition-all duration-500 hover:scale-[1.02]">
              <CardContent className="p-6 sm:p-8 h-full flex flex-col">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-5">
                  <Lightbulb className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3">Innovation</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  Continuously seeking innovative solutions for the legal profession.
                </p>
              </CardContent>
            </Card>

            {/* Excellence */}
            <Card className="group border-2 hover:shadow-2xl hover:border-primary/50 transition-all duration-500 hover:scale-[1.02]">
              <CardContent className="p-6 sm:p-8 h-full flex flex-col">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-5">
                  <Award className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3">Excellence</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  Superior quality in every service we offer.
                </p>
              </CardContent>
            </Card>

            {/* Dependability */}
            <Card className="group border-2 hover:shadow-2xl hover:border-primary/50 transition-all duration-500 hover:scale-[1.02]">
              <CardContent className="p-6 sm:p-8 h-full flex flex-col">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-5">
                  <Shield className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3">Dependability</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  Consistent, trustworthy support you can rely on.
                </p>
              </CardContent>
            </Card>

            {/* Professionalism */}
            <Card className="group border-2 hover:shadow-2xl hover:border-primary/50 transition-all duration-500 hover:scale-[1.02]">
              <CardContent className="p-6 sm:p-8 h-full flex flex-col">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-5">
                  <Briefcase className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3">Professionalism</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  Professional approach in every interaction.
                </p>
              </CardContent>
            </Card>

            {/* Justice - Featured */}
            <Card className="group sm:col-span-2 lg:col-span-2 border-2 hover:shadow-2xl hover:border-primary/50 transition-all duration-500 bg-gradient-to-br from-primary/5 via-background to-background overflow-hidden relative">
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/10 rounded-full blur-2xl" />
              <CardContent className="p-6 sm:p-8 lg:p-10 relative">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3">Justice</h3>
                    <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                      Supporting the fair administration of law and justice through our services and solutions for all Pakistanis.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Strategic Goals - Bento Grid */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/30 via-muted/20 to-background relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Our Goals</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4">Strategic Goals</h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Our roadmap to excellence and innovation
            </p>
          </div>
          
          {/* Redesigned Goals Grid - 2 Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {/* Goal 1 - Featured */}
            <Card className="group border-2 hover:shadow-2xl hover:border-primary/50 transition-all duration-500 bg-gradient-to-br from-primary/5 via-background to-background overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              <CardContent className="p-6 sm:p-8 lg:p-10 relative h-full">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-primary font-bold text-2xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                    01
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold mb-3">Client Satisfaction</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      Achieve unparalleled client satisfaction by understanding and meeting the unique needs of legal professionals across Pakistan.
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                      <span>Our Priority</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Goal 2 */}
            <Card className="group border-2 hover:shadow-2xl hover:border-primary/50 transition-all duration-500 bg-gradient-to-br from-background to-muted/10 overflow-hidden relative">
              <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
              <CardContent className="p-6 sm:p-8 lg:p-10 relative h-full">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-primary font-bold text-2xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                    02
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold mb-3">Thought Leadership</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      Establish Wakeel as a thought leader in legal innovation and dependable support across Pakistan.
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                      <span>Our Vision</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Goal 3 */}
            <Card className="group border-2 hover:shadow-2xl hover:border-primary/50 transition-all duration-500 bg-gradient-to-br from-background to-muted/10 overflow-hidden relative">
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
              <CardContent className="p-6 sm:p-8 lg:p-10 relative h-full">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-primary font-bold text-2xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                    03
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold mb-3">Sustainable Growth</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      Drive sustainable growth by continuously enhancing our offerings and expanding reach.
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                      <span>Our Strategy</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Goal 4 */}
            <Card className="group border-2 hover:shadow-2xl hover:border-primary/50 transition-all duration-500 bg-gradient-to-br from-background to-muted/10 overflow-hidden relative">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
              <CardContent className="p-6 sm:p-8 lg:p-10 relative h-full">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-primary font-bold text-2xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                    04
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold mb-3">Employee Expertise</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      Develop a team of experts who are leaders in their fields and drive innovation.
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                      <span>Our Team</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Goal 5 - Featured Full Width */}
            <Card className="group lg:col-span-2 border-2 hover:shadow-2xl hover:border-primary/50 transition-all duration-500 bg-gradient-to-br from-primary/5 via-background to-background overflow-hidden relative">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-primary/10 rounded-full blur-2xl" />
              <CardContent className="p-6 sm:p-8 lg:p-10 relative">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 lg:justify-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-primary font-bold text-2xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                    05
                  </div>
                  <div className="flex-1 lg:flex-none lg:max-w-2xl">
                    <h3 className="text-xl sm:text-2xl font-bold mb-3">Community Impact</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      Positively impact the legal community by supporting initiatives that uphold justice and integrity throughout Pakistan.
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                      <span>Our Mission</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services and Solutions - Enhanced Grid */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-background relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">What We Offer</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4">Services and Solutions</h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Comprehensive legal technology solutions for Pakistan
            </p>
          </div>
          
          {/* Featured Service */}
          <Card className="group border-2 hover:shadow-2xl hover:border-primary/50 transition-all duration-500 bg-gradient-to-br from-primary/5 via-background to-muted/10 mb-6 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
            <CardContent className="p-6 sm:p-8 lg:p-12 relative">
              <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shrink-0">
                  <BookOpen className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full bg-primary/10 text-xs font-semibold text-primary">
                    <Sparkles className="w-3 h-3" />
                    Featured Service
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4">Legal Research and Analysis</h3>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
                    Providing comprehensive and reliable legal research services to support case preparation 
                    and policy formulation across Pakistan. Access thousands of case laws, statutes, and legal precedents.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <span className="px-3 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground">Case Law Database</span>
                    <span className="px-3 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground">AI-Powered Search</span>
                    <span className="px-3 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground">Citation Analysis</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Other Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <Card className="group border-2 hover:shadow-2xl hover:border-primary/50 transition-all duration-500 hover:scale-[1.02]">
              <CardContent className="p-6 sm:p-8 h-full flex flex-col">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-5">
                  <Briefcase className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3">Case Management</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  Advanced case management systems to streamline legal processes and improve efficiency.
                </p>
                <div className="mt-4 pt-4 border-t border-border">
                  <span className="text-xs text-muted-foreground">Track • Organize • Manage</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group border-2 hover:shadow-2xl hover:border-primary/50 transition-all duration-500 hover:scale-[1.02]">
              <CardContent className="p-6 sm:p-8 h-full flex flex-col">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-5">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3">Policy Development</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  Assisting policymakers with data-driven insights for effective policy development.
                </p>
                <div className="mt-4 pt-4 border-t border-border">
                  <span className="text-xs text-muted-foreground">Research • Analyze • Implement</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group border-2 hover:shadow-2xl hover:border-primary/50 transition-all duration-500 hover:scale-[1.02]">
              <CardContent className="p-6 sm:p-8 h-full flex flex-col">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-5">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3">Training & Development</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  Workshops and training for Pakistani legal professionals to enhance skills.
                </p>
                <div className="mt-4 pt-4 border-t border-border">
                  <span className="text-xs text-muted-foreground">Learn • Grow • Excel</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group border-2 hover:shadow-2xl hover:border-primary/50 transition-all duration-500 hover:scale-[1.02]">
              <CardContent className="p-6 sm:p-8 h-full flex flex-col">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-5">
                  <MessageCircle className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3">Expert Consultation</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  Expert consultation for complex legal issues and strategic planning.
                </p>
                <div className="mt-4 pt-4 border-t border-border">
                  <span className="text-xs text-muted-foreground">Advise • Strategize • Succeed</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Our Platform */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-8 sm:space-y-12">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-primary/10 backdrop-blur-sm">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Our Story</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 px-4">Our Commitment to Excellence</h2>
            </div>
            
            <Card className="border-2 hover:shadow-2xl transition-all duration-500 group">
              <CardContent className="p-6 sm:p-8 lg:p-12 space-y-6 sm:space-y-8 text-muted-foreground">
                <p className="text-base sm:text-lg lg:text-xl leading-relaxed group-hover:text-foreground/90 transition-colors">
                  Since 2024, Wakeel has been dedicated to serving the legal community of Pakistan. 
                  We understand the unique complexities and demands of legal practice in Pakistan, which is why we've developed 
                  comprehensive solutions that combine innovative technology with deep understanding of local legal systems.
                </p>
                
                <p className="text-base sm:text-lg lg:text-xl leading-relaxed group-hover:text-foreground/90 transition-colors">
                  Built by Pakistanis for Pakistanis, our platform serves legal professionals across the country, providing 
                  them with the tools and resources they need to deliver exceptional legal services. From comprehensive 
                  legal research to streamlined case management, every feature is designed with Pakistani practitioners in mind.
                </p>
                
                <p className="text-base sm:text-lg lg:text-xl leading-relaxed group-hover:text-foreground/90 transition-colors">
                  We believe that technology should empower legal professionals in Pakistan to work more efficiently while 
                  maintaining the highest standards of integrity and excellence. Our solutions are built for the people, by the people—
                  enhancing productivity, improving access to justice, and supporting lawyers in serving their communities 
                  with distinction.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Proudly Pakistani */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-muted mb-6 sm:mb-8 group-hover:scale-110 transition-transform">
            <Globe2 className="w-8 h-8 sm:w-10 sm:h-10 text-foreground" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 px-4">Proudly Pakistani</h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
            Built in Pakistan, for Pakistan. We combine innovative technology with a deep understanding 
            of Pakistani legal practices and requirements. Our platform is designed to serve the unique needs 
            of the Pakistani legal system while maintaining the highest standards of service and support.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-12">
            <div className="flex flex-col items-center gap-2 sm:gap-3 group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-all duration-300 group-hover:scale-110">
                <Award className="w-7 h-7 sm:w-8 sm:h-8 text-foreground group-hover:text-primary transition-colors" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">Certified</span>
            </div>
            <div className="flex flex-col items-center gap-2 sm:gap-3 group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-all duration-300 group-hover:scale-110">
                <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-foreground group-hover:text-primary transition-colors" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">Secure</span>
            </div>
            <div className="flex flex-col items-center gap-2 sm:gap-3 group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-all duration-300 group-hover:scale-110">
                <Scale className="w-7 h-7 sm:w-8 sm:h-8 text-foreground group-hover:text-primary transition-colors" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">Trusted</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
 