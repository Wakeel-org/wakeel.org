import { useEffect, useState, useRef } from 'react';
import Layout from '../src/components/Layout';
import Image from 'next/image';
import { getTeamMembers, getCompanyTimeline } from '../src/lib/firebase/collections';
import { Card, CardContent } from '../src/components/ui/card';
import { 
  Globe, 
  Users, 
  Award, 
  Clock, 
  ChevronLeft, 
  ChevronRight, 
  Linkedin,
  Calendar,
  Briefcase
} from 'lucide-react';

const AboutPage = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [timeline, setTimeline] = useState([]);
  const [loading, setLoading] = useState(true);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [members, timelineData] = await Promise.all([
          getTeamMembers(),
          getCompanyTimeline()
        ]);
        setTeamMembers(members);
        setTimeline(timelineData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const companyStats = [
    { number: '50+', label: 'Countries Served', icon: Globe },
    { number: '10K+', label: 'Legal Professionals', icon: Users },
    { number: '95%', label: 'Client Satisfaction', icon: Award },
    { number: '24/7', label: 'Support Available', icon: Clock }
  ];

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = 350; // Adjust this value to control scroll distance
      const currentScroll = container.scrollLeft;
      
      container.scrollTo({
        left: currentScroll + (direction === 'left' ? -scrollAmount : scrollAmount),
        behavior: 'smooth'
      });
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-20 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-foreground">
              About Wakeel.org
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transforming legal practice through innovative technology and unwavering commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
                Pioneering Legal Technology Solutions
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Founded in 2020, Wakeel.org has rapidly emerged as a leading innovator in the legal technology sector. 
                Our platform combines cutting-edge AI technology with deep legal expertise to provide comprehensive 
                solutions for legal professionals worldwide.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {companyStats.map((stat, index) => (
                  <Card key={index} className="border-none shadow-md bg-card hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6 text-center relative overflow-hidden">
                      <div className="relative z-10">
                        <div className="text-3xl font-bold text-primary mb-2">
                          {stat.number}
                        </div>
                        <div className="text-sm font-medium text-muted-foreground">
                          {stat.label}
                        </div>
                      </div>
                      <div className="absolute -right-4 -top-4 opacity-5">
                        <stat.icon className="w-24 h-24" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?auto=format&fit=crop&q=80"
                alt="Wakeel.org office"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
              Meet Our Leadership Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our diverse team brings together expertise in law, technology, and innovation 
              to deliver exceptional solutions for the legal community.
            </p>
          </div>

          {/* Horizontal Scrollable Team Section */}
          <div className="relative group">
            {/* Scroll Arrows */}
            <button 
              onClick={() => handleScroll('left')}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 
                bg-background/80 backdrop-blur-sm border border-border rounded-full p-2 shadow-lg opacity-0 
                group-hover:opacity-100 transition-opacity hover:bg-accent"
            >
              <ChevronLeft className="w-6 h-6 text-foreground" />
            </button>
            <button 
              onClick={() => handleScroll('right')}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 
                bg-background/80 backdrop-blur-sm border border-border rounded-full p-2 shadow-lg opacity-0 
                group-hover:opacity-100 transition-opacity hover:bg-accent"
            >
              <ChevronRight className="w-6 h-6 text-foreground" />
            </button>

            {/* Scrollable Container */}
            <div ref={scrollContainerRef} className="overflow-x-auto scrollbar-hide pb-8">
              <div className="flex space-x-6 px-4 min-w-max">
                {loading ? (
                  // Loading skeletons
                  Array(3).fill(0).map((_, i) => (
                    <div key={i} className="w-[300px] h-[400px] bg-muted rounded-xl animate-pulse" />
                  ))
                ) : (
                  teamMembers.map((member, index) => (
                    <Card 
                      key={member.id}
                      className="w-[300px] flex-shrink-0 hover:shadow-lg transition-all duration-300"
                    >
                      <CardContent className="p-8">
                        <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-muted">
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover"
                            priority={index === 0}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                        <div className="text-center">
                          <h3 className="text-xl font-semibold mb-2 text-foreground">
                            {member.name}
                          </h3>
                          <p className="text-primary mb-4 font-medium">
                            {member.role}
                          </p>
                          <p className="text-muted-foreground text-sm mb-4">
                            {member.bio}
                          </p>
                          {member.linkedin && (
                            <a 
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                            >
                              <Linkedin className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From our founding to today, we've been committed to innovation and excellence 
              in legal technology.
            </p>
          </div>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-border" />
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {loading ? (
                // Loading skeletons
                Array(4).fill(0).map((_, i) => (
                  <div key={i} className="h-32 bg-muted rounded-xl animate-pulse" />
                ))
              ) : (
                timeline.map((item, index) => (
                  <div key={index} className="relative">
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center ring-8 ring-background text-primary-foreground">
                        <Calendar className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`flex items-center justify-between w-full ${
                      index % 2 === 0 ? 'flex-row-reverse' : ''
                    }`}>
                      <div className="w-5/12" /> {/* Spacer */}
                      <div className="w-5/12">
                        <Card>
                          <CardContent className="p-6">
                            <div className="text-primary text-xl font-bold mb-2">
                              {item.year}
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-foreground">
                              {item.title}
                            </h3>
                            <p className="text-muted-foreground">
                              {item.description}
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage; 