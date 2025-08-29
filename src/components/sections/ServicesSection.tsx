'use client';

import { motion } from 'framer-motion';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { varFade, MotionViewport } from '@/components/animate';

export function ServicesSection() {
  return (
    <section className="py-12 lg:py-20 px-4 sm:px-6 bg-white relative overflow-hidden">
      <MotionViewport>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          {/* Header */}
          <div className="mb-16">
            <motion.p 
              variants={varFade('inUp', { distance: 24 })}
              className="text-gray-500 font-medium text-sm tracking-wide uppercase mb-4"
            >
              WE EMPOWER YOUR SKILLS TO SUCCEED IN SWEDEN!
            </motion.p>
            <motion.h2 
              variants={varFade('inUp', { distance: 24 })}
              className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4"
            >
              Legal Relocation Solutions For Worldwide Clients
            </motion.h2>
          </div>
          
          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            <motion.div variants={varFade('inUp', { distance: 24 })}>
              <ServiceCard
                title="Family Reunification"
                description="Family reunification is a recognized reason for the immigration of family members to a country where one or more family members already have legal status. If a person or an EU citizen has a permanent residence permit or is an EU long-term resident in Sweden with special protection, then they may have the right to invite their family to that country."
                hoverColor="#3B82F6"
                icon={
                  <img 
                    src="/icons/3d/family-reunification.png" 
                    alt="Family Reunification" 
                    className="w-14 h-14 object-contain"
                    style={{ 
                      filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
                    }}
                  />
                }
              />
            </motion.div>

            <motion.div variants={varFade('inUp', { distance: 24 })}>
              <ServiceCard
                title="Visitor Visa"
                description="For visiting Sweden for a short period you will need a visit visa. Visiting for a short tour, meeting your relatives, visiting friends, or business meetings. You need to consider a short visit to Sweden, which is called the Schengen agreement. Sweden is part of the Schengen agreement. Some non-EU countries because it is also part of the Schengen agreement."
                hoverColor="#00A76F"
                icon={
                  <img 
                    src="/icons/3d/visitor-visa.png" 
                    alt="Visitor Visa" 
                    className="w-14 h-14 object-contain"
                    style={{ 
                      filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
                    }}
                  />
                }
              />
            </motion.div>

            <motion.div variants={varFade('inUp', { distance: 24 })}>
              <ServiceCard
                title="Work Permit"
                description="Currently, every EU country has a different process for issuing work permits to nationals of non-EU countries. Addressing this issue, the European Commission began work in 1999 on developing an EU-wide process for the issuance of work permits. If you are searching for work in Sweden for a work permit, you must have received an official offer of employment from a Swedish employer."
                hoverColor="#6366F1"
                icon={
                  <img 
                    src="/icons/3d/work-permit.png" 
                    alt="Work Permit" 
                    className="w-14 h-14 object-contain"
                    style={{ 
                      filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
                    }}
                  />
                }
              />
            </motion.div>
          </div>
        </div>
      </MotionViewport>
    </section>
  );
}
