'use client';

import { motion } from 'framer-motion';
import { ProcessCard } from '@/components/ui/ProcessCard';
import { AnimateText } from '@/components/animate-text';
import { ApplyNowButton } from '@/components/ui/ApplyNowButton';

export function VisaApplicationSection() {
  return (
    <section className="py-12 lg:py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header with Animated Text */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-500 font-medium text-xs lg:text-sm tracking-wide uppercase mb-3">
              YOUR NEXT VISA APPLICATION IS ONLINE CLICK!
            </p>
          </motion.div>
          
          <AnimateText
            text="We Prepare Visa Applications & Send Worldwide Via DHL"
            component="h2"
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
            variant="character"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600 text-base">
              Submit to Embassy or Nearest FedEx Office
            </p>
          </motion.div>
        </div>
        
        {/* Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <ProcessCard
            title="Sign Up"
            description="You can signup on our website and book an appointment or write us in Message section on My Page!"
            backgroundColor="bg-gradient-to-br from-slate-50 to-gray-100"
            iconColor="bg-gradient-to-br from-slate-600 to-gray-700"
            hoverColor="#475569"
            delay={0.1}
            icon={
              <svg className="w-10 h-10 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            }
          />

          <ProcessCard
            title="Upload Documents"
            description="In next step go to My Page and upload all necessary documents."
            backgroundColor="bg-gradient-to-br from-slate-50 to-gray-100"
            iconColor="bg-gradient-to-br from-slate-600 to-gray-700"
            hoverColor="#475569"
            delay={0.2}
            icon={
              <svg className="w-10 h-10 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            }
          />

          <ProcessCard
            title="File Preparation Process"
            description="One of our experienced Consultant will contact you and prepare your visa file and book your appointment at embassy or Garry's/FedEx office."
            backgroundColor="bg-gradient-to-br from-slate-50 to-gray-100"
            iconColor="bg-gradient-to-br from-slate-600 to-gray-700"
            hoverColor="#475569"
            delay={0.3}
            icon={
              <svg className="w-10 h-10 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            }
          />

          <ProcessCard
            title="Download or DHL"
            description="Once file is completed we will upload on your portal and send you via DHL. All you need to do is to submit to closest Embassy or Garry's Visa Services office."
            backgroundColor="bg-gradient-to-br from-slate-50 to-gray-100"
            iconColor="bg-gradient-to-br from-slate-600 to-gray-700"
            hoverColor="#475569"
            delay={0.4}
            icon={
              <svg className="w-10 h-10 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            }
          />
        </div>
        
        {/* Apply Now Button */}
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <ApplyNowButton onClick={() => {}} />
        </motion.div>
      </div>
    </section>
  );
}
