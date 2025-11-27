import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ArrowRight, Shield, Target } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

const Hero = () => {
  const router = useRouter();

  const handleGetStarted = () => {
    window.open('https://wakeel.web.app', '_blank');
  };

  return (
    <section className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Main Hero Cell */}
        <Card className="col-span-1 lg:col-span-2 overflow-hidden border-none shadow-lg bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20">
          <CardContent className="p-6 sm:p-10 lg:p-14 flex flex-col justify-center h-full relative">
            <div className="relative z-10 space-y-6">
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                  Wakeel.org
                </h1>
                <p className="text-2xl sm:text-3xl font-semibold text-foreground/80">
                  Trusted Guardians of Legal Excellence
                </p>
              </div>
              <p className="text-lg text-muted-foreground max-w-[600px]">
                Empowering Justice Through Reliable Solutions. We provide comprehensive legal research, 
                case management, and policy development solutions for legal professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={handleGetStarted}
                  className="text-lg px-8"
                >
                  Get Started
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  asChild
                  className="text-lg px-8"
                >
                  <Link href="/about">
                    Learn More
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute right-0 bottom-0 opacity-5 transform translate-x-1/4 translate-y-1/4 pointer-events-none">
              <Shield className="w-96 h-96" />
            </div>
          </CardContent>
        </Card>

        {/* Vision & Mission */}
        <Card className="border-none shadow-lg bg-card/50 backdrop-blur-sm">
          <CardContent className="p-6 sm:p-8 space-y-8 h-full flex flex-col justify-center">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">Our Vision</h3>
              </div>
              <div className="pl-16 space-y-3">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  To be the foremost partner in the legal and policy-making sectors, delivering innovative solutions that empower legal professionals and institutions to uphold justice and integrity.
                </p>
                <Button variant="link" className="p-0 h-auto text-primary" asChild>
                  <Link href="/about" className="flex items-center gap-1">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="border-t border-border pt-8 space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">Our Mission</h3>
              </div>
              <div className="pl-16 space-y-3">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Providing exceptional solutions tailored to the unique needs of legal professionals, advocates, policymakers, and judges. By prioritizing trust, innovation, and excellence, we aim to support and enhance the legal process.
                </p>
                <Button variant="link" className="p-0 h-auto text-primary" asChild>
                  <Link href="/about" className="flex items-center gap-1">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Hero; 