import React from 'react';
import { Shield, Lightbulb, Star, Users, Briefcase, Scale, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import Link from 'next/link';

const values = [
  {
    title: 'Integrity',
    description: 'Upholding the highest standards of honesty and ethics in all our dealings.',
    icon: Shield
  },
  {
    title: 'Innovation',
    description: 'Pioneering advanced solutions to address evolving legal challenges.',
    icon: Lightbulb
  },
  {
    title: 'Excellence',
    description: 'Delivering superior quality and exceptional results in every service.',
    icon: Star
  },
  {
    title: 'Dependability',
    description: 'Providing reliable and consistent support that our clients can trust.',
    icon: Users
  },
  {
    title: 'Professionalism',
    description: 'Maintaining the highest standards of professional conduct and expertise.',
    icon: Briefcase
  },
  {
    title: 'Justice',
    description: 'Promoting fair and equitable legal solutions for all stakeholders.',
    icon: Scale
  }
];

const Values = () => {
  return (
    <div className="container px-4 md:px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
          Our Core Values
        </h2>
        <p className="text-lg text-muted-foreground max-w-[800px] mx-auto">
          The principles that guide our commitment to excellence in legal services
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {values.map((value, index) => (
          <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-muted">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-6 h-6" />
              </div>
              <CardTitle className="text-xl">{value.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                {value.description}
              </p>
              <Button variant="link" className="p-0 h-auto group-hover:translate-x-1 transition-transform" asChild>
                <Link href="/about" className="flex items-center gap-1">
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Values; 