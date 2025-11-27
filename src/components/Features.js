import React from 'react';
import { Search, Briefcase, FileText, GraduationCap, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

const features = [
  {
    title: 'Legal Research & Analysis',
    description: 'Advanced legal research platform powered by AI, providing comprehensive case analysis, precedent tracking, and regulatory insights for informed decision-making.',
    span: 'md:col-span-2',
    icon: Search
  },
  {
    title: 'Case Management',
    description: 'Streamline your legal practice with our intuitive case management system, featuring automated workflows, document management, and deadline tracking.',
    span: '',
    icon: Briefcase
  },
  {
    title: 'Policy Development',
    description: 'Data-driven policy analysis and development tools to support evidence-based decision-making and regulatory compliance.',
    span: '',
    icon: FileText
  },
  {
    title: 'Professional Development',
    description: 'Comprehensive training programs and resources designed to enhance legal expertise and keep professionals updated with industry best practices.',
    span: 'md:col-span-2',
    icon: GraduationCap
  }
];

const Features = () => {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Comprehensive Legal Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-[800px] mx-auto">
            Empowering legal professionals with innovative tools and services designed to enhance 
            efficiency, accuracy, and excellence in legal practice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`${feature.span} hover:shadow-lg transition-all duration-300 border-muted`}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <feature.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col h-[calc(100%-88px)] justify-between">
                <p className="text-muted-foreground mb-6">
                  {feature.description}
                </p>
                
                <div>
                  <Button variant="link" className="p-0 h-auto text-primary group" asChild>
                    <a href="#" className="flex items-center gap-1">
                      Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 