import React from 'react';
import Link from 'next/link';
import { Shield, Target } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import AppDownloadButtons from './AppDownloadButtons';

const Hero = () => {
  const handleGetStarted = () => {
    window.open('https://wakeel.web.app', '_blank');
  };

  return (
    <section className="container px-4 md:px-6 py-8 md:py-16 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {/* Main Hero Cell */}
        <Card className="col-span-1 lg:col-span-2 overflow-hidden border-none shadow-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-background dark:from-primary/20 dark:via-primary/10 dark:to-background">
          <CardContent className="p-6 sm:p-10 lg:p-16 flex flex-col justify-center h-full relative min-h-[400px] sm:min-h-[500px]">
            <div className="relative z-10 space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-primary/70">
                  Wakeel.org
                </h1>
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground/90">
                  Trusted Guardians of Legal Excellence
                </p>
              </div>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-[650px] leading-relaxed">
                Empowering Justice Through Reliable Solutions. We provide comprehensive legal research, 
                case management, and policy development solutions for legal professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                <Button 
                  size="lg" 
                  onClick={handleGetStarted}
                  className="text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-5 sm:py-6 shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
                >
                  Get Started
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  asChild
                  className="text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-5 sm:py-6 border-2 hover:bg-primary/5 transition-all w-full sm:w-auto"
                >
                  <Link href="/about">
                    Learn More
                  </Link>
                </Button>
              </div>

              {/* Mobile App Download */}
              <div className="pt-6 border-t border-primary/10">
                <p className="text-sm font-medium text-muted-foreground mb-4">Also available on mobile</p>
                <AppDownloadButtons className="justify-start" />
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute right-0 bottom-0 opacity-5 transform translate-x-1/4 translate-y-1/4 pointer-events-none hidden lg:block">
              <Shield className="w-96 h-96" />
            </div>
          </CardContent>
        </Card>

        {/* Vision & Mission */}
        <Card className="border-none shadow-2xl bg-card/80 backdrop-blur-md hover:shadow-3xl transition-shadow duration-300">
          <CardContent className="p-6 sm:p-8 lg:p-10 space-y-8 sm:space-y-10 h-full flex flex-col justify-center min-h-[400px] sm:min-h-[500px]">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 rounded-xl bg-primary/10 text-primary">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold">Our Vision</h3>
              </div>
              <div className="sm:pl-16">
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  To be the foremost partner in the legal and policy-making sectors, delivering innovative solutions that empower legal professionals and institutions to uphold justice and integrity.
                </p>
              </div>
            </div>

            <div className="border-t border-border pt-6 sm:pt-8 space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 rounded-xl bg-primary/10 text-primary">
                  <Target className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold">Our Mission</h3>
              </div>
              <div className="sm:pl-16">
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Providing exceptional solutions tailored to the unique needs of legal professionals, advocates, policymakers, and judges. By prioritizing trust, innovation, and excellence, we aim to support and enhance the legal process.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Hero; 