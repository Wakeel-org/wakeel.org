import React from 'react';
import Layout from '../src/components/Layout';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../src/components/ui/card';
import { Button } from '../src/components/ui/button';
import { Scale, FileText, Search, Shield, Clock, Zap } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    title: "AI Legal Assistant",
    description: "Get instant answers to complex legal questions powered by advanced AI models trained on vast legal databases.",
    icon: <Scale className="h-10 w-10 text-primary" />,
  },
  {
    title: "Document Analysis",
    description: "Upload legal documents for instant summarization, risk assessment, and key clause extraction.",
    icon: <FileText className="h-10 w-10 text-primary" />,
  },
  {
    title: "Case Research",
    description: "Comprehensive case law research with intelligent citations and relevance scoring.",
    icon: <Search className="h-10 w-10 text-primary" />,
  },
  {
    title: "Compliance Checking",
    description: "Automated compliance verification against current regulations and statutes.",
    icon: <Shield className="h-10 w-10 text-primary" />,
  },
  {
    title: "24/7 Availability",
    description: "Access legal insights and assistance anytime, anywhere, without waiting for office hours.",
    icon: <Clock className="h-10 w-10 text-primary" />,
  },
  {
    title: "Rapid Drafting",
    description: "Generate legal document drafts, letters, and memos in seconds.",
    icon: <Zap className="h-10 w-10 text-primary" />,
  }
];

export default function Services() {
  return (
    <Layout>
      <div className="pt-16 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Our Services
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive legal technology solutions designed to empower professionals and individuals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="border-border/50 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="mb-4 p-3 bg-primary/10 w-fit rounded-xl">
                  {service.icon}
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="bg-muted/30 rounded-3xl p-8 sm:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Ready to get started?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of legal professionals who are transforming their practice with Wakeel.org.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth">
              <Button size="lg" className="w-full sm:w-auto">
                Start Free Trial
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
} 