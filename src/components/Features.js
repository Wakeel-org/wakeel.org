import React from 'react';
import { Search, Briefcase, FileText, GraduationCap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { cardBase, iconTile, sectionHeading } from '../data/theme';

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
        <div className="text-center mb-16">
          <h2 className={`${sectionHeading} mb-6`}>
            Comprehensive Legal Solutions
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-[900px] mx-auto leading-relaxed">
            Empowering legal professionals with innovative tools and services designed to enhance
            efficiency, accuracy, and excellence in legal practice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`${feature.span} ${cardBase}`}
            >
              <CardHeader>
                <div className={iconTile}>
                  <feature.icon className="w-7 h-7" />
                </div>
                <CardTitle className="text-xl sm:text-2xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 