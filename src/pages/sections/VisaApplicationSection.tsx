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
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <ProcessCard
            title="Sign Up"
            description="You can signup on our website and book an appointment or write us in Message section on My Page!"
            backgroundColor="bg-green-200"
            iconColor="bg-green-600"
            hoverColor="#059669"
            delay={0.1}
            icon={
              <svg 
                className="w-6 h-6 text-white" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            }
          />

          <ProcessCard
            title="Upload Documents"
            description="In next step go to My Page and upload all necessary documents."
            backgroundColor="bg-pink-200"
            iconColor="bg-pink-600"
            hoverColor="#be185d"
            delay={0.2}
            icon={
              <svg 
                className="w-6 h-6 text-white" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
              </svg>
            }
          />

          <ProcessCard
            title="File Preparation Process"
            description="One of our experienced Consultant will contact you and prepare your visa file and book your appointment at embassy or Garry's/FedEx office."
            backgroundColor="bg-yellow-200"
            iconColor="bg-yellow-600"
            hoverColor="#ca8a04"
            delay={0.3}
            icon={
              <svg 
                className="w-6 h-6 text-white" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z"/>
              </svg>
            }
          />

          <ProcessCard
            title="Download or DHL"
            description="Once file is completed we will upload on your portal and send you via DHL. All you need to do is to submit to closest Embassy or Garry's Visa Services office."
            backgroundColor="bg-blue-200"
            iconColor="bg-blue-600"
            hoverColor="#1d4ed8"
            delay={0.4}
            icon={
              <svg 
                className="w-6 h-6 text-white" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M5,20H19V18H5M19,9H15L13,7H9V9H19M19,3H5C3.89,3 3,3.89 3,5V15A2,2 0 0,0 5,17H19A2,2 0 0,0 21,15V5C21,3.89 20.1,3 19,3Z"/>
              </svg>
            }
          />
        </div>
        
        {/* Apply Now Button with Animations */}
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button 
            className="bg-gray-900 text-white px-8 py-3 rounded-lg font-medium text-sm transition-all duration-300 inline-flex items-center relative overflow-hidden group"
            whileHover={{ 
              scale: 1.05,
              y: -3,
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)"
            }}
            whileTap={{ 
              scale: 0.95,
              y: 0
            }}
            animate={{
              boxShadow: [
                "0 4px 15px rgba(0, 0, 0, 0.1)",
                "0 6px 20px rgba(0, 0, 0, 0.15)",
                "0 4px 15px rgba(0, 0, 0, 0.1)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* Gradient overlay animation */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Button text with relative z-index */}
            <motion.span 
              className="relative z-10"
              whileHover={{ scale: 1.05 }}
            >
              Apply Now
            </motion.span>
            
            {/* Animated arrow icon */}
            <motion.svg 
              className="w-4 h-4 ml-2 relative z-10" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              whileHover={{ 
                x: 3,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              animate={{
                x: [0, 2, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </motion.svg>
            
            {/* Pulse effect */}
            <motion.div
              className="absolute inset-0 rounded-lg bg-white opacity-0"
              animate={{
                opacity: [0, 0.1, 0],
                scale: [1, 1.02, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
