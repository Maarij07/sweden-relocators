'use client';

import Image from "next/image";
import Navbar from "@/components/Navbar";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Home() {
  const servicesRef = useScrollAnimation();
  const featuresRef = useScrollAnimation();
  const footerRef = useScrollAnimation();
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Main content with top padding for fixed navbar */}
      <main className="pt-16">
        {/* Hero Section */}
        <section className="min-h-screen relative overflow-hidden">
          {/* Background with aesthetic pattern */}
          <div className="absolute inset-0">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
            
            {/* Geometric Shapes */}
            <div className="absolute top-0 right-0 w-96 h-96 transform translate-x-32 -translate-y-32">
              <div className="w-full h-full bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full blur-3xl"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-80 h-80 transform -translate-x-32 translate-y-32">
              <div className="w-full h-full bg-gradient-to-tr from-purple-200/30 to-blue-200/30 rounded-full blur-3xl"></div>
            </div>
            
            {/* Abstract geometric elements */}
            <div className="absolute top-20 left-10 w-4 h-4 bg-blue-300/40 rotate-45 rounded-sm"></div>
            <div className="absolute top-40 right-20 w-6 h-6 bg-indigo-300/40 rotate-12 rounded-sm"></div>
            <div className="absolute bottom-32 right-32 w-8 h-8 bg-purple-300/40 rotate-45 rounded-full"></div>
            <div className="absolute bottom-20 left-20 w-3 h-3 bg-blue-400/40 rotate-45"></div>
            
            {/* Floating triangles */}
            <div className="absolute top-32 right-1/4">
              <svg width="60" height="60" viewBox="0 0 60 60" className="text-blue-300/20">
                <polygon points="30,5 55,45 5,45" fill="currentColor" transform="rotate(15 30 30)"/>
              </svg>
            </div>
            <div className="absolute bottom-40 left-1/4">
              <svg width="40" height="40" viewBox="0 0 40 40" className="text-indigo-300/20">
                <polygon points="20,3 37,33 3,33" fill="currentColor" transform="rotate(-25 20 20)"/>
              </svg>
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 flex items-center min-h-[80vh]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
              <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
                {/* Left Content */}
                <div className="space-y-4 lg:space-y-5 text-center lg:text-left">
                  <div className="space-y-3">
                    <p className="text-blue-600 font-medium text-xs lg:text-sm tracking-wide uppercase">
                      — RELOCATION & IMMIGRATION SOLUTIONS FOR INDIVIDUALS, FAMILIES,
                      <br className="hidden sm:block" />EMPLOYEES, AND COMPANIES
                    </p>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                      Relocate To <span className="text-blue-600">Sweden</span>
                      <br />
                      <span className="text-gray-700">With an Expert Advise</span>
                    </h1>
                    <p className="text-sm lg:text-base text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                      We offer complete relocation services to our worldwide clients including residence & 
                      work permits, home finding, school pre-search, integration, and setting-in services.
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
                    <button className="bg-gray-900 text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-gray-800 transition-all duration-300 shadow-lg">
                      Our Services
                    </button>
                    <button className="border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-full font-semibold text-sm hover:bg-gray-900 hover:text-white transition-all duration-300">
                      Book An Appointment!
                    </button>
                  </div>
                </div>

                {/* Right Content - Video Placeholder */}
                <div className="lg:pl-8 mt-8 lg:mt-0">
                  <div className="relative max-w-md mx-auto lg:max-w-none">
                    <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl lg:rounded-2xl shadow-2xl overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-500">
                      <div className="aspect-video bg-gradient-to-br from-blue-500/90 to-indigo-600/90 flex items-center justify-center">
                        <div className="text-center space-y-2 sm:space-y-3 p-3 sm:p-4 lg:p-6">
                          <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white">SWEDEN RELOCATORS AB</h3>
                          <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 mx-auto bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                            <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </div>
                          <div className="text-white/80 text-xs">Click to play video</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Floating elements around video - hidden on mobile */}
                    <div className="hidden sm:block absolute -top-4 -right-4 lg:-top-6 lg:-right-6 w-8 h-8 lg:w-12 lg:h-12 bg-yellow-400 rounded-full opacity-80 animate-bounce"></div>
                    <div className="hidden sm:block absolute -bottom-3 -left-3 lg:-bottom-4 lg:-left-4 w-6 h-6 lg:w-8 lg:h-8 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services section similar to second image */}
        <section className="py-12 lg:py-16 px-4 sm:px-6 transform translate-y-0 transition-transform duration-1000 ease-out">
          <div className="max-w-6xl mx-auto text-center">
            <div className="transform translate-y-8 opacity-0 transition-all duration-1000 delay-200 animate-slideUp">
              <p className="text-blue-600 font-medium text-sm tracking-wide uppercase mb-4">
                WE EMPOWER YOUR SKILLS TO SUCCEED IN SWEDEN!
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-12">
                Legal Relocation <span className="text-blue-600">Solutions For Worldwide Clients</span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mt-16">
              {/* Family Reunification */}
              <div className="text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-6h3v7c0 .55.45 1 1 1h9c.55 0 1-.45 1-1v-7h3v6h4v-8c0-1.11-.89-2-2-2h-2l-3.2-2.64c-.31-.26-.7-.36-1.09-.36H10.09c-.39 0-.78.1-1.09.36L6 8H4c-1.11 0-2 .89-2 2v8h4z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Family Reunification</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Family reunification is a recognized reason for the immigration of family members to a country where one or more family members already have legal status.
                </p>
              </div>

              {/* Visitor Visa */}
              <div className="text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Visitor Visa</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  For visiting Sweden for a short period you will need a visit visa. Visiting for a short tour, meeting your relatives, or business purposes requires proper documentation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content sections to test scroll effect */}
        <section ref={servicesRef} className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 scroll-animate">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-8 lg:mb-12">Our Services</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="p-6 lg:p-8 bg-white rounded-xl shadow-lg border border-gray-200">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-500 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-lg lg:text-xl">{i}</span>
                  </div>
                  <h3 className="text-lg lg:text-xl font-semibold mb-3 lg:mb-4 text-gray-900">Service {i}</h3>
                  <p className="text-sm lg:text-base text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 lg:mb-8">Why Choose Us?</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 lg:mb-12 max-w-2xl mx-auto">
              We have helped thousands of people successfully relocate to Sweden with our comprehensive support and expert guidance.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {['Expert Guidance', 'Housing Support', 'Legal Assistance', 'Cultural Integration'].map((item) => (
                <div key={item} className="text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-yellow-400 rounded-full mx-auto mb-3 lg:mb-4 flex items-center justify-center">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-sm sm:text-base text-gray-900">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8 sm:py-10 lg:py-12 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              {/* EU Stars Circle */}
              <div className="relative w-8 h-8 sm:w-10 sm:h-10">
                <div className="absolute inset-0 border-2 border-yellow-400 rounded-full"></div>
                {/* Stars around the circle */}
                <div className="absolute inset-1 flex items-center justify-center">
                  <div className="text-yellow-400 text-xs">★★★</div>
                </div>
              </div>
              <div className="text-base sm:text-lg font-bold">
                SWEDEN <span className="text-yellow-400">RELOCATORS</span>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-400 mb-6 lg:mb-8">
              Your trusted partner for a successful relocation to Sweden.
            </p>
            <div className="text-gray-500 text-xs sm:text-sm">
              © 2024 Sweden Relocators. All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
