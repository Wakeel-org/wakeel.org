import React from 'react';
import { Shield, Lightbulb, Star, Users, Briefcase, Scale } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

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
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
          Our Core Values
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground max-w-[900px] mx-auto leading-relaxed">
          The principles that guide our commitment to excellence in legal services
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {values.map((value, index) => (
          <Card key={index} className="group hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border-muted/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <value.icon className="w-7 h-7" />
              </div>
              <CardTitle className="text-xl sm:text-2xl">{value.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Values; 