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
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            <motion.div variants={varFade('inUp', { distance: 24 })}>
              <ServiceCard
                title="Family Reunification"
                description="Family reunification is a recognized reason for the immigration of family members to a country where one or more family members already have legal status. If a person or an EU citizen has a permanent residence permit or is an EU long-term resident in Sweden with special protection, then they may have the right to invite their family to that country."
                hoverColor="rgba(59, 130, 246, 0.3)"
                icon={
                  <svg 
                    className="w-10 h-10" 
                    viewBox="0 0 24 24" 
                    fill="#000000"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                }
              />
            </motion.div>

            <motion.div variants={varFade('inUp', { distance: 24 })}>
              <ServiceCard
                title="Visitor Visa"
                description="For visiting Sweden for a short period you will need a visit visa. Visiting for a short tour, meeting your relatives, visiting friends, or business meetings. You need to consider a short visit to Sweden, which is called the Schengen agreement. Sweden is part of the Schengen agreement. Some non-EU countries because it is also part of the Schengen agreement."
                hoverColor="rgba(59, 130, 246, 0.3)"
                icon={
                  <svg 
                    className="w-10 h-10" 
                    viewBox="0 0 24 24" 
                    fill="#000000"
                  >
                    <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>
                  </svg>
                }
              />
            </motion.div>

            <motion.div variants={varFade('inUp', { distance: 24 })}>
              <ServiceCard
                title="Work Permit"
                description="Currently, every EU country has a different process for issuing work permits to nationals of non-EU countries. Addressing this issue, the European Commission began work in 1999 on developing an EU-wide process for the issuance of work permits. If you are searching for work in Sweden for a work permit, you must have received an official offer of employment from a Swedish employer."
                hoverColor="rgba(59, 130, 246, 0.3)"
                icon={
                  <svg 
                    className="w-10 h-10" 
                    viewBox="0 0 24 24" 
                    fill="#000000"
                  >
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                  </svg>
                }
              />
            </motion.div>
          </div>
        </div>
      </MotionViewport>
    </section>
  );
}
