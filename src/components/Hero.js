import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-24 
      bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Main Hero Cell */}
          <div className="col-span-1 lg:col-span-2 bg-white dark:bg-gray-800 rounded-3xl 
            p-6 sm:p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-shadow duration-300 
            relative overflow-hidden">
            <div className="relative z-10">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 
                bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                Wakeel.org
              </h1>
              <p className="text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4 
                text-gray-900 dark:text-white">
                Trusted Guardians of Legal Excellence
              </p>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 
                mb-8 sm:mb-12 max-w-2xl">
                Empowering Justice Through Reliable Solutions. We provide comprehensive legal research, 
                case management, and policy development solutions for legal professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <button className="w-full sm:w-auto bg-blue-600 text-white px-6 sm:px-8 
                  py-3 sm:py-4 rounded-xl sm:rounded-2xl hover:bg-blue-700 
                  transition transform hover:scale-105 hover:shadow-lg 
                  text-base sm:text-lg font-medium">
                  Get Started
                </button>
                <button className="w-full sm:w-auto bg-white dark:bg-gray-800 
                  text-blue-600 dark:text-blue-400 px-6 sm:px-8 py-3 sm:py-4 
                  rounded-xl sm:rounded-2xl border-2 border-blue-200 dark:border-blue-800 
                  hover:border-blue-600 transition transform hover:scale-105 
                  hover:shadow-lg text-base sm:text-lg font-medium">
                  Learn More
                </button>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute right-0 bottom-0 opacity-10 transform 
              translate-x-1/4 translate-y-1/4 pointer-events-none">
              <svg className="w-64 sm:w-96 h-64 sm:h-96" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 2.18l7 3.12v5.7c0 4.67-2.98 8.95-7 10.05-4.02-1.1-7-5.38-7-10.05V6.3l7-3.12z"/>
              </svg>
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 sm:p-8 
            shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="space-y-8">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400">Our Vision</h3>
                </div>
                <div className="pl-16">
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    To be the foremost partner in the legal and policy-making sectors, delivering innovative solutions that empower legal professionals and institutions to uphold justice and integrity.
                  </p>
                  <div className="mt-4 flex items-center text-xs text-blue-600 dark:text-blue-400">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Learn More
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-100 dark:border-gray-700 pt-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">Our Mission</h3>
                </div>
                <div className="pl-16">
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    Providing exceptional solutions tailored to the unique needs of legal professionals, advocates, policymakers, and judges. By prioritizing trust, innovation, and excellence, we aim to support and enhance the legal process.
                  </p>
                  <div className="mt-4 flex items-center text-xs text-indigo-600 dark:text-indigo-400">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Learn More
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 