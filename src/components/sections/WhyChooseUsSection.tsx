'use client';

import { motion } from 'framer-motion';
import { ContentSection } from '@/components/ui/ContentSection';
import { ProgressChart } from '@/components/ui/AnimatedChart';
import { ReadMoreButton } from '@/components/ui/ReadMoreButton';

export function WhyChooseUsSection() {
  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 bg-white select-text">
      <div className="max-w-7xl mx-auto">
        {/* Main Why Choose Us Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-20 lg:mb-28">
          {/* Left Content - Image */}
          <div className="relative lg:order-1">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              {/* Simulated laptop/desktop with video call interface */}
              <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 relative flex items-center justify-center">
                <div className="w-4/5 h-4/5 bg-gray-900 rounded-lg relative overflow-hidden shadow-2xl">
                  {/* Screen content simulation - Zoom/Teams interface */}
                  <div className="w-full h-full bg-blue-50 relative">
                    {/* Top bar */}
                    <div className="absolute top-0 left-0 right-0 h-8 bg-gray-800 flex items-center justify-center">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                    
                    {/* Video call grid */}
                    <div className="absolute inset-8 top-12 grid grid-cols-3 gap-1">
                      {[...Array(9)].map((_, i) => (
                        <div key={i} className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-md flex items-center justify-center relative overflow-hidden">
                          {i === 0 && (
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center">
                              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                                <span className="text-teal-600 font-bold text-sm">S</span>
                              </div>
                            </div>
                          )}
                          {i !== 0 && (
                            <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                              <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                              </svg>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    
                    {/* Bottom toolbar */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/>
                        </svg>
                      </div>
                      <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
                        </svg>
                      </div>
                      <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 9c-1.6 0-3.15.25-4.6.72v3.1c0 .39-.23.74-.56.9-.98.49-1.87 1.12-2.66 1.85-.18.18-.43.28-.68.28-.53 0-.96-.43-.96-.96V9C2.54 9 1.5 7.96 1.5 6.5S2.54 4 4 4s2.5 1.04 2.5 2.5c0 .34-.07.66-.18.96C7.83 6.82 9.86 6.5 12 6.5s4.17.32 5.68.96c-.11-.3-.18-.62-.18-.96C17.5 5.04 18.54 4 20 4s2.5 1.04 2.5 2.5S21.46 9 20 9v5.89c0 .53-.43.96-.96.96-.25 0-.5-.1-.68-.28-.79-.73-1.68-1.36-2.66-1.85-.33-.16-.56-.51-.56-.9V9.72C14.15 9.25 12.6 9 12 9z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative plant element */}
              <div className="absolute -top-4 -right-4 w-20 h-24 bg-green-400 rounded-full opacity-60 blur-sm"></div>
            </div>
          </div>
          
          {/* Right Content */}
          <div className="space-y-6 lg:order-2">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Us?
              </h2>
              <div className="space-y-1 mb-6">
                <h3 className="text-lg font-semibold text-teal-600">
                  Experienced Team Provide
                </h3>
                <h3 className="text-lg font-semibold text-teal-600">
                  Relocation Services
                </h3>
              </div>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                We are here to provide you complete Relocation Services, 
                including Housing, Eira School, Visa Services, Registration 
                Social Benefits, Language School, Integration activities etc.
              </p>
            </div>
            
            {/* Animated Charts */}
            <div className="space-y-4">
              <ProgressChart title="Business Permit" percentage={90} delay={0} />
              <ProgressChart title="Work Permit" percentage={73} delay={1} />
              <ProgressChart title="Family Reunification" percentage={29} delay={2} />
              <ProgressChart title="Study in Sweden" percentage={29} delay={3} />
            </div>
            
            {/* Read More Button */}
            <div className="pt-2">
              <ReadMoreButton onClick={() => {}} />
            </div>
          </div>
        </div>
        
        {/* Additional Content Sections */}
        <ContentSection
          subtitle="INSTANT HOUSING SOLUTIONS"
          title="Home Loans &<br />Secure Home Rental Solutions"
          imagePosition="right"
          content={[
            "The first crucial step when relocating to Sweden is the right home for you and your family. We provide instant housing solutions with our housing partner companies. You can find the apartment or rent out your apartment by providing information on our Housing Solutions page."
          ]}
        />
        
        <ContentSection
          subtitle="PROFESSIONAL LEGAL SERVICES BY LAWYERS"
          title="We Can Provide Lawyers For Legal Issues"
          imagePosition="left"
          content={[
            "The universe in which people live is full of actions and decisions considered as right and wrong. Legal services are defined as services related to government laws or legal issues such as providing legal advice, filing a case, defending against criminal charges, etc., which lawyers provided. We are working with different individuals lawyers and law firms where they can provide you solutions to your ongoing issues."
          ]}
        />
        
        <ContentSection
          subtitle="AU PAIR SERVICES FOR NORDIC FAMILIES"
          title="Solutions For Host Families &<br />AU Pair"
          imagePosition="right"
          content={[
            "An Au Pair is a young person living abroad with a Host Family and taking care of the children for accommodation and pocket money.",
            "The Au Pair program is an international cultural exchange that gives the possibility to young people to spend some time abroad learn more about a different culture improve their skills in a foreign language in exchange for help with duties related to childcare. The term au pair from French means on equal terms signifying that Au Pair and Host Family treat each other as equal."
          ]}
        />
      </div>
    </section>
  );
}
