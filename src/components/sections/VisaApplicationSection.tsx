'use client';

import { motion } from 'framer-motion';
import { ProcessCard } from '@/components/ui/ProcessCard';
import { AnimateText } from '@/components/animate-text';

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
              <img 
                src="/icons/3d-user-signup.png" 
                alt="Sign Up Icon" 
                className="w-20 h-20 object-contain"
                style={{ 
                  filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.15))'
                }}
              />
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
              <img 
                src="/icons/3d-document-upload.png" 
                alt="Upload Documents Icon" 
                className="w-20 h-20 object-contain"
                style={{ 
                  filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.15))'
                }}
              />
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
              <img 
                src="/icons/3d-file-process.png" 
                alt="File Preparation Icon" 
                className="w-20 h-20 object-contain"
                style={{ 
                  filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.15))'
                }}
              />
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
              <img 
                src="/icons/3d-download-dhl.png" 
                alt="Download/DHL Icon" 
                className="w-20 h-20 object-contain"
                style={{ 
                  filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.15))'
                }}
              />
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
          <button 
            className="bg-black text-white px-3.5 py-1.5 border rounded-lg font-medium text-xs transition-colors duration-200 hover:bg-gray-700 cursor-pointer h-9"
            style={{
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'black'
            }}
          >
            Apply Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}
