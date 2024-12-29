import { useEffect, useState, useRef } from 'react';
import Layout from '../src/components/Layout';
import Image from 'next/image';
import { getTeamMembers, getCompanyTimeline } from '../src/lib/firebase/collections';

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
    { number: '50+', label: 'Countries Served' },
    { number: '10K+', label: 'Legal Professionals' },
    { number: '95%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' }
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
      {/* Hero Section - Enhanced Light Mode */}
      <section className="pt-20 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 
        bg-gradient-to-b from-blue-50 via-white to-white 
        dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 
              bg-clip-text text-transparent bg-gradient-to-r 
              from-blue-600 to-indigo-600">
              About Wakeel.org
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Transforming legal practice through innovative technology and unwavering commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview - Enhanced Light Mode */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 
        bg-white shadow-sm dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 
                bg-clip-text text-transparent bg-gradient-to-r 
                from-gray-900 to-gray-700 dark:from-white dark:to-gray-200">
                Pioneering Legal Technology Solutions
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                Founded in 2020, Wakeel.org has rapidly emerged as a leading innovator in the legal technology sector. 
                Our platform combines cutting-edge AI technology with deep legal expertise to provide comprehensive 
                solutions for legal professionals worldwide.
              </p>
              <div className="grid grid-cols-2 gap-8">
                {companyStats.map((stat, index) => (
                  <div key={index} 
                    className="text-center p-6 rounded-xl 
                      bg-gradient-to-br from-blue-600/5 via-indigo-600/5 to-purple-600/5
                      hover:from-blue-600/10 hover:via-indigo-600/10 hover:to-purple-600/10
                      dark:from-blue-600/10 dark:via-indigo-600/10 dark:to-purple-600/10
                      dark:hover:from-blue-600/20 dark:hover:via-indigo-600/20 dark:hover:to-purple-600/20
                      backdrop-blur-sm border border-blue-100/20 dark:border-blue-800/20
                      transform hover:scale-105 transition-all duration-300
                      shadow-[0_0_15px_rgba(59,130,246,0.1)] hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]
                      dark:shadow-[0_0_15px_rgba(59,130,246,0.05)] dark:hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]"
                  >
                    <div className="relative">
                      <div className="text-4xl font-bold bg-clip-text text-transparent 
                        bg-gradient-to-r from-blue-600 to-indigo-600 
                        dark:from-blue-400 dark:to-indigo-400 mb-3">
                        {stat.number}
                      </div>
                      <div className="text-sm font-medium text-gray-800 dark:text-gray-200">
                        {stat.label}
                      </div>
                      {/* Decorative Icon */}
                      <div className="absolute -right-2 -top-2 opacity-10">
                        {index === 0 && (
                          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                          </svg>
                        )}
                        {index === 1 && (
                          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                          </svg>
                        )}
                        {index === 2 && (
                          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                          </svg>
                        )}
                        {index === 3 && (
                          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14H8c-1.66 0-3-1.34-3-3s1.34-3 3-3l.14.01C8.58 8.28 10.13 7 12 7c2.21 0 4 1.79 4 4h.5c1.38 0 2.5 1.12 2.5 2.5S17.88 16 16.5 16z"/>
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 relative h-[400px] rounded-3xl overflow-hidden 
              shadow-xl hover:shadow-2xl transition-shadow duration-300 
              transform hover:-translate-y-1">
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

      {/* Team Section - Horizontal Scroll */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 
        bg-gradient-to-b from-gray-50 via-white to-white 
        dark:from-gray-800 dark:via-gray-900 dark:to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 
              bg-clip-text text-transparent bg-gradient-to-r 
              from-gray-900 to-gray-700 dark:from-white dark:to-gray-200">
              Meet Our Leadership Team
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Our diverse team brings together expertise in law, technology, and innovation 
              to deliver exceptional solutions for the legal community.
            </p>
          </div>

          {/* Enhanced Horizontal Scrollable Team Section */}
          <div className="relative group">
            {/* Scroll Indicators */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white via-white to-transparent 
              dark:from-gray-900 dark:via-gray-900 dark:to-transparent opacity-75 z-10 pointer-events-none
              group-hover:opacity-100 transition-opacity" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white via-white to-transparent 
              dark:from-gray-900 dark:via-gray-900 dark:to-transparent opacity-75 z-10 pointer-events-none
              group-hover:opacity-100 transition-opacity" />
            
            {/* Scroll Arrows */}
            <div 
              onClick={() => handleScroll('left')}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 
                bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg opacity-0 
                group-hover:opacity-100 transition-opacity cursor-pointer
                hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            <div 
              onClick={() => handleScroll('right')}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 
                bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg opacity-0 
                group-hover:opacity-100 transition-opacity cursor-pointer
                hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>

            {/* Scrollable Container */}
            <div ref={scrollContainerRef} className="overflow-x-auto scrollbar-hide">
              <div className="flex space-x-6 py-4 px-4 min-w-max">
                {loading ? (
                  // Loading skeletons
                  Array(3).fill(0).map((_, i) => (
                    <div key={i} className="w-[300px] h-[400px] bg-gray-100 
                      dark:bg-gray-800 rounded-2xl animate-pulse" />
                  ))
                ) : (
                  teamMembers.map((member, index) => (
                    <div 
                      key={member.id}
                      className="w-[300px] flex-shrink-0 bg-white dark:bg-gray-800 
                        rounded-2xl p-8 shadow-lg hover:shadow-xl 
                        transition-all duration-300 transform hover:-translate-y-1 
                        border border-gray-100 dark:border-gray-700"
                    >
                      <div className="relative">
                        <div className="relative w-32 h-32 mx-auto mb-6 rounded-full 
                          overflow-hidden ring-4 ring-blue-100 dark:ring-blue-900">
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover"
                            priority={index === 0}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                        {member.linkedin && (
                          <a 
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute bottom-0 right-1/2 translate-x-16 
                              translate-y-2 bg-blue-600 p-2 rounded-full 
                              hover:bg-blue-700 transition-colors"
                          >
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                          </a>
                        )}
                      </div>
                      <div className="text-center">
                        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                          {member.name}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 mb-4 font-medium">
                          {member.role}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300">
                          {member.bio}
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section - Now using Firebase data */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From our founding to today, we've been committed to innovation and excellence 
              in legal technology.
            </p>
          </div>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200 dark:bg-blue-900" />
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {loading ? (
                // Loading skeletons
                Array(4).fill(0).map((_, i) => (
                  <div key={i} className="h-32 bg-gray-100 dark:bg-gray-800 
                    rounded-2xl animate-pulse" />
                ))
              ) : (
                timeline.map((item, index) => (
                  <div key={index} className="relative">
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center 
                        ring-8 ring-white dark:ring-gray-900 text-white">
                        <svg 
                          className="w-6 h-6" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d={item.icon}
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`flex items-center justify-between w-full ${
                      index % 2 === 0 ? 'flex-row-reverse' : ''
                    }`}>
                      <div className="w-5/12" /> {/* Spacer */}
                      <div className="w-5/12 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
                        <div className="text-blue-600 dark:text-blue-400 text-xl font-bold mb-2">
                          {item.year}
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {item.description}
                        </p>
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