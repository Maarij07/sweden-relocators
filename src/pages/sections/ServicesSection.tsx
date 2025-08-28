'use client';

import { motion } from 'framer-motion';
import { ServiceCard } from '@/components/ui/ServiceCard';

export function ServicesSection() {
  return (
    <section className="py-12 lg:py-20 px-4 sm:px-6 bg-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-10 -left-10 w-72 h-72 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -bottom-10 -right-10 w-96 h-96 bg-gradient-to-r from-green-100 to-blue-100 rounded-full opacity-15"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full opacity-10"
          animate={{
            scale: [1, 1.3, 1],
            x: [-20, 20, -20],
            y: [-10, 10, -10],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <motion.div 
        className="max-w-7xl mx-auto text-center relative z-10"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Header */}
        <div className="mb-16">
          <motion.p 
            className="text-gray-500 font-medium text-sm tracking-wide uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            WE EMPOWER YOUR SKILLS TO SUCCEED IN SWEDEN!
          </motion.p>
          <motion.h2 
            className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Legal Relocation Solutions For Worldwide Clients
          </motion.h2>
        </div>
        
        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          <ServiceCard
            title="Family Reunification"
            description="Family reunification is a recognized reason for the immigration of family members to a country where one or more family members already have legal status. If a person or an EU citizen has a permanent residence permit or is an EU long-term resident in Sweden with special protection, then they may have the right to invite their family to that country."
            iconColor="bg-gradient-to-br from-blue-400 to-blue-600"
            hoverColor="rgba(59, 130, 246, 0.3)"
            delay={0.1}
            icon={
              <svg 
                className="w-10 h-10 text-white" 
                fill="currentColor" 
                stroke="black"
                strokeWidth="1"
                viewBox="0 0 48 48"
              >
                <path
                  opacity="0.48"
                  d="M24 4C17.373 4 12 9.373 12 16C12 22.627 17.373 28 24 28C30.627 28 36 22.627 36 16C36 9.373 30.627 4 24 4ZM24 24C19.589 24 16 20.411 16 16C16 11.589 19.589 8 24 8C28.411 8 32 11.589 32 16C32 20.411 28.411 24 24 24Z"
                  fill="currentColor"
                />
                <path
                  d="M42 36C42 31.027 38.418 26.987 33.6 26.185C32.8 25.453 31.827 24.8 30.75 24.3C29.673 23.8 28.5 23.55 27.3 23.55H20.7C19.5 23.55 18.327 23.8 17.25 24.3C16.173 24.8 15.2 25.453 14.4 26.185C9.582 26.987 6 31.027 6 36V40C6 41.105 6.895 42 8 42H40C41.105 42 42 41.105 42 40V36ZM10 38V36C10 32.691 12.691 30 16 30C17.657 30 19.657 30.343 20.7 30.45C22.443 30.155 23.222 30 24 30C24.778 30 25.557 30.155 27.3 30.45C28.343 30.343 30.343 30 32 30C35.309 30 38 32.691 38 36V38H10Z"
                  fill="currentColor"
                />
                <path
                  d="M16 18C16 20.209 17.791 22 20 22C22.209 22 24 20.209 24 18C24 15.791 22.209 14 20 14C17.791 14 16 15.791 16 18ZM20 18C20 18.552 19.552 18 20 18C20.448 18 20 18.552 20 18Z"
                  fill="currentColor"
                />
                <path
                  d="M28 18C28 20.209 29.791 22 32 22C34.209 22 36 20.209 36 18C36 15.791 34.209 14 32 14C29.791 14 28 15.791 28 18ZM32 18C32 18.552 31.552 18 32 18C32.448 18 32 18.552 32 18Z"
                  fill="currentColor"
                />
              </svg>
            }
          />

          <ServiceCard
            title="Visitor Visa"
            description="For visiting Sweden for a short period you will need a visit visa. Visiting for a short tour, meeting your relatives, visiting friends, or business meetings. You need to consider a short visit to Sweden, which is called the Schengen agreement. Sweden is part of the Schengen agreement. Some non-EU countries because it is also part of the Schengen agreement."
            iconColor="bg-gradient-to-br from-purple-400 to-pink-600"
            hoverColor="rgba(168, 85, 247, 0.3)"
            delay={0.2}
            icon={
              <svg 
                className="w-10 h-10 text-white" 
                fill="currentColor" 
                stroke="black"
                strokeWidth="1"
                viewBox="0 0 48 48"
              >
                <path
                  opacity="0.48"
                  d="M40 8H8C6.895 8 6 8.895 6 10V38C6 39.105 6.895 40 8 40H40C41.105 40 42 39.105 42 38V10C42 8.895 41.105 8 40 8ZM38 36H10V12H38V36Z"
                  fill="currentColor"
                />
                <path
                  d="M8 4C5.791 4 4 5.791 4 8V40C4 42.209 5.791 44 8 44H40C42.209 44 44 42.209 44 40V8C44 5.791 42.209 4 40 4H8ZM8 40V8H40V40H8Z"
                  fill="currentColor"
                />
                <path
                  d="M36 16H30V12C30 10.895 29.105 10 28 10H20C18.895 10 18 10.895 18 12V16H12C10.895 16 10 16.895 10 18V32C10 33.105 10.895 34 12 34H36C37.105 34 38 33.105 38 32V18C38 16.895 37.105 16 36 16ZM22 14H26V16H22V14ZM34 30H14V20H34V30Z"
                  fill="currentColor"
                />
                <path
                  d="M24 22C22.343 22 21 23.343 21 25C21 26.657 22.343 28 24 28C25.657 28 27 26.657 27 25C27 23.343 25.657 22 24 22Z"
                  fill="currentColor"
                />
                <path
                  d="M16 24H20V26H16V24ZM28 24H32V26H28V24Z"
                  fill="currentColor"
                />
              </svg>
            }
          />

          <ServiceCard
            title="Work Permit"
            description="Currently, every EU country has a different process for issuing work permits to nationals of non-EU countries. Addressing this issue, the European Commission began work in 1999 on developing an EU-wide process for the issuance of work permits. If you are searching for work in Sweden for a work permit, you must have received an official offer of employment from a Swedish employer."
            iconColor="bg-gradient-to-br from-green-400 to-teal-600"
            hoverColor="rgba(34, 197, 94, 0.3)"
            delay={0.3}
            icon={
              <svg 
                className="w-10 h-10 text-white" 
                fill="currentColor" 
                stroke="black"
                strokeWidth="1"
                viewBox="0 0 48 48"
              >
                <path
                  opacity="0.48"
                  d="M38 12H34V8C34 6.895 33.105 6 32 6H16C14.895 6 14 6.895 14 8V12H10C8.895 12 8 12.895 8 14V38C8 39.105 8.895 40 10 40H38C39.105 40 40 39.105 40 38V14C40 12.895 39.105 12 38 12ZM18 10H30V12H18V10Z"
                  fill="currentColor"
                />
                <path
                  d="M38 8H36V6C36 4.895 35.105 4 34 4H14C12.895 4 12 4.895 12 6V8H10C7.791 8 6 9.791 6 12V40C6 42.209 7.791 44 10 44H38C40.209 44 42 42.209 42 40V12C42 9.791 40.209 8 38 8ZM16 8H32V10H16V8ZM38 40H10V12H14V14C14 15.105 14.895 16 16 16H32C33.105 16 34 15.105 34 14V12H38V40Z"
                  fill="currentColor"
                />
                <path
                  d="M24 18C21.791 18 20 19.791 20 22C20 24.209 21.791 26 24 26C26.209 26 28 24.209 28 22C28 19.791 26.209 18 24 18Z"
                  fill="currentColor"
                />
                <path
                  d="M24 28C20.686 28 18 30.686 18 34V36H30V34C30 30.686 27.314 28 24 28Z"
                  fill="currentColor"
                />
                <path
                  d="M12 20H16V22H12V20ZM12 24H16V26H12V24ZM12 28H16V30H12V28ZM32 20H36V22H32V20ZM32 24H36V26H32V24ZM32 28H36V30H32V28Z"
                  fill="currentColor"
                />
              </svg>
            }
          />
        </div>
      </motion.div>
    </section>
  );
}
