import React from 'react';
import Link from 'next/link';
import { GraduationCap, Scale, Briefcase, Building, Users, Smartphone, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { PortalStamp } from './ui/chip';
import { portals } from '../data/designSystem';
import { sectionHeading } from '../data/theme';

// Each audience card is themed with its portal identity color — the same
// accent used on that role's dedicated page (icon tile border, bullet dots,
// "Explore" link). Cards themselves stay on the shared neutral surface.
const audiences = [
  {
    title: 'Individuals & Citizens',
    description: 'Understand complex legal matters from the palm of your hand. Access simplified legal information, your rights, and basic legal guidance.',
    icon: Smartphone,
    features: ['Legal Rights Guide', 'Document Templates', 'Legal Q&A'],
    href: '/citizens',
    portal: portals.citizen,
  },
  {
    title: 'Law Students',
    description: 'Access comprehensive legal research tools and resources to excel in your studies and prepare for your legal career.',
    icon: GraduationCap,
    features: ['Legal Research', 'Study Resources', 'Case Analysis'],
    href: '/law-students',
    portal: portals.student,
  },
  {
    title: 'Lawyers & Advocates',
    description: 'Streamline your practice with advanced case management, document automation, and powerful research capabilities.',
    icon: Scale,
    features: ['Case Management', 'Document Automation', 'Client Portal'],
    href: '/lawyers',
    portal: portals.lawyer,
  },
  {
    title: 'Law Firms',
    description: 'Shared dashboards, team accounts, admin controls and firm-wide research workflows for multi-member practices.',
    icon: Briefcase,
    features: ['Team Dashboard', 'Shared Research', 'Admin Controls'],
    href: '/law-firms',
    portal: portals.lawFirm,
  },
  {
    title: 'Judges',
    description: 'Access comprehensive case databases, precedent tracking, and analytical tools for informed judicial research — neutral by design.',
    icon: Briefcase,
    features: ['Precedent Tracking', 'Case Analytics', 'Legal Database'],
    href: '/judges',
    portal: portals.judge,
  },
  {
    title: 'Policymakers & Institutions',
    description: 'Data-driven policy analysis, regulatory compliance tools, and comprehensive legal research for evidence-based decisions.',
    icon: Users,
    features: ['Policy Analysis', 'Regulatory Tools', 'Data Insights'],
    href: '/policymakers',
    portal: portals.institution,
  },
];

const WhoIsThisFor = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className={`${sectionHeading} mb-4 sm:mb-6`}>
            Empowering Every Mind
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-[900px] mx-auto leading-relaxed px-4">
            From individuals seeking to understand their rights to institutions shaping legal frameworks —
            our platform serves everyone in the legal ecosystem with tailored solutions for every need.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {audiences.map((audience, index) => (
            <Link key={audience.title} href={audience.href} className="block h-full">
              <Card
                className="group h-full border-2 border-foreground/15 bg-card shadow-none hover:-translate-y-0.5 transition-all duration-300 animate-fadeIn"
                style={{
                  animationDelay: `${index * 100}ms`,
                  borderTopColor: audience.portal.primary,
                  borderTopWidth: '3px',
                }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-14 h-14 rounded-lg border-2 flex items-center justify-center transition-all duration-300"
                      style={{
                        borderColor: audience.portal.primary,
                        backgroundColor: audience.portal.surface,
                        color: audience.portal.primary,
                      }}
                    >
                      <audience.icon className="w-7 h-7" />
                    </div>
                    <PortalStamp portal={audience.portal} />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl">{audience.title}</CardTitle>
                  <CardDescription className="text-sm">{audience.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-mono text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Key Features</p>
                    <ul className="space-y-1 mb-4">
                      {audience.features.map((feature, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-center">
                          <span
                            className="w-1.5 h-1.5 rounded-full mr-2 flex-shrink-0"
                            style={{ backgroundColor: audience.portal.primary }}
                          ></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <span
                      className="inline-flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all"
                      style={{ color: audience.portal.primary }}
                    >
                      Explore <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisFor;
