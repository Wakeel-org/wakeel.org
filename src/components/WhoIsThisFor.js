import React from 'react';
import { GraduationCap, Scale, Briefcase, Building, Users, Smartphone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';

const audiences = [
  {
    title: 'Individuals & Citizens',
    description: 'Understand complex legal matters from the palm of your hand. Access simplified legal information, your rights, and basic legal guidance.',
    icon: Smartphone,
    features: ['Legal Rights Guide', 'Document Templates', 'Legal Q&A']
  },
  {
    title: 'Law Students',
    description: 'Access comprehensive legal research tools and resources to excel in your studies and prepare for your legal career.',
    icon: GraduationCap,
    features: ['Legal Research', 'Study Resources', 'Case Analysis']
  },
  {
    title: 'Lawyers & Advocates',
    description: 'Streamline your practice with advanced case management, document automation, and powerful research capabilities.',
    icon: Scale,
    features: ['Case Management', 'Document Automation', 'Client Portal']
  },
  {
    title: 'Judges',
    description: 'Access comprehensive case databases, precedent tracking, and analytical tools for informed judicial decisions.',
    icon: Briefcase,
    features: ['Precedent Tracking', 'Case Analytics', 'Legal Database']
  },
  {
    title: 'Policymakers',
    description: 'Data-driven policy analysis, regulatory compliance tools, and comprehensive legal research for evidence-based decisions.',
    icon: Users,
    features: ['Policy Analysis', 'Regulatory Tools', 'Data Insights']
  },
  {
    title: 'Legal Institutions',
    description: 'Scalable solutions for universities, courts, and legal organizations with training and research capabilities.',
    icon: Building,
    features: ['Institutional Access', 'Training Programs', 'Research Tools']
  }
];

const WhoIsThisFor = () => {
  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
            Empowering Every Mind
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-[900px] mx-auto leading-relaxed">
            From individuals seeking to understand their rights to institutions shaping legal frameworks — 
            our platform serves everyone in the legal ecosystem with tailored solutions for every need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border-muted/50 bg-card/50 backdrop-blur-sm animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">
                  <audience.icon className="w-7 h-7" />
                </div>
                <CardTitle className="text-xl sm:text-2xl">{audience.title}</CardTitle>
                <CardDescription className="text-sm">{audience.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Key Features:</p>
                  <ul className="space-y-1">
                    {audience.features.map((feature, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisFor;
