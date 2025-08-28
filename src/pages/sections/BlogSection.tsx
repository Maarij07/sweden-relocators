'use client';

import { motion } from 'framer-motion';

interface NewsItemProps {
  title: string;
  description: string;
  date: string;
  gradient: string;
  hoverGradient: string;
  hoverColor: string;
  iconAnimation: any;
  delay: number;
}

function NewsItem({ title, description, date, gradient, hoverGradient, hoverColor, iconAnimation, delay }: NewsItemProps) {
  return (
    <motion.div 
      className="flex items-start gap-4 group cursor-pointer py-6 first:pt-0 relative"
      initial={{ opacity: 0, scale: 0.9, rotateY: delay % 2 === 0 ? -10 : 10 }}
      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ duration: 0.7, delay, type: "spring", stiffness: 120 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.02,
        rotateY: delay % 2 === 0 ? 3 : -3,
        x: 8,
        transition: { duration: 0.3, type: "spring", stiffness: 300 }
      }}
    >
      <motion.div 
        className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0"
        whileHover={{ 
          scale: 1.1,
          rotate: delay % 2 === 0 ? 5 : -5,
          transition: { duration: 0.3 }
        }}
      >
        <motion.div 
          className={`w-full h-full ${gradient} flex items-center justify-center relative`}
          whileHover={{
            background: hoverGradient
          }}
        >
          <motion.svg 
            className="w-8 h-8 text-white" 
            fill="currentColor" 
            viewBox="0 0 24 24"
            {...iconAnimation}
            whileHover={{ 
              scale: 1.2,
              rotate: 360,
              transition: { duration: 0.5 }
            }}
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </motion.svg>
        </motion.div>
      </motion.div>
      <motion.div 
        className="flex-1 min-w-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.3 }}
        viewport={{ once: true }}
      >
        <div className="flex justify-between items-start mb-2">
          <motion.h4 
            className="text-base font-semibold text-gray-900 group-hover:text-gray-700 transition-colors line-clamp-2"
            whileHover={{ color: hoverColor }}
          >
            {title}
          </motion.h4>
          <motion.span 
            className="text-xs text-gray-500 whitespace-nowrap ml-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: delay + 0.5 }}
          >
            {date}
          </motion.span>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">
          {description}
        </p>
      </motion.div>
    </motion.div>
  );
}

export function BlogSection() {
  const newsItems = [
    {
      title: "The Future of Renewable Energy: Innovations and Challenges Ahead",
      description: "The sun slowly set over the horizon, painting the sky in vibrant hues of orange and pink.",
      date: "12 Jun 2022",
      gradient: "bg-gradient-to-br from-orange-400 to-red-500",
      hoverGradient: "linear-gradient(135deg, #f97316, #dc2626, #ea580c)",
      hoverColor: "#f97316",
      iconAnimation: {
        animate: { rotate: [0, 5, -5, 0] },
        transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
      },
      delay: 0.1
    },
    {
      title: "Exploring the Impact of Artificial Intelligence on Modern Healthcare",
      description: "The aroma of freshly brewed coffee filled the air, awakening my senses.",
      date: "11 Feb 2022",
      gradient: "bg-gradient-to-br from-purple-400 to-blue-500",
      hoverGradient: "linear-gradient(135deg, #a855f7, #3b82f6, #8b5cf6)",
      hoverColor: "#8b5cf6",
      iconAnimation: {
        animate: { scale: [1, 1.1, 1] },
        transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
      },
      delay: 0.2
    },
    {
      title: "Climate Change and Its Effects on Global Food Security",
      description: "She eagerly opened the gift, her eyes sparkling with excitement.",
      date: "10 Sep 2022",
      gradient: "bg-gradient-to-br from-yellow-400 to-orange-500",
      hoverGradient: "linear-gradient(135deg, #fbbf24, #f97316, #fb923c)",
      hoverColor: "#f97316",
      iconAnimation: {
        animate: { rotate: [0, -5, 5, 0] },
        transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
      },
      delay: 0.3
    },
    {
      title: "The Rise of Remote Work: Benefits Challenges and Future Trends",
      description: "The old oak tree stood tall and majestic, its branches swaying gently in the breeze.",
      date: "09 Aug 2022",
      gradient: "bg-gradient-to-br from-green-400 to-blue-500",
      hoverGradient: "linear-gradient(135deg, #10b981, #3b82f6, #06b6d4)",
      hoverColor: "#10b981",
      iconAnimation: {
        animate: { y: [0, -3, 0, 3, 0] },
        transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
      },
      delay: 0.4
    },
    {
      title: "Understanding Blockchain Technology: Beyond Cryptocurrency",
      description: "The children giggled with joy as they ran through the sprinklers on a hot summer day.",
      date: "05 Apr 2022",
      gradient: "bg-gradient-to-br from-indigo-400 to-purple-500",
      hoverGradient: "linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7)",
      hoverColor: "#8b5cf6",
      iconAnimation: {
        animate: { scale: [1, 0.9, 1.1, 1] },
        transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
      },
      delay: 0.5
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            BLOG CORNER
          </motion.p>
          <motion.h2 
            className="text-3xl lg:text-4xl font-bold text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            In Your Inbox News
          </motion.h2>
        </motion.div>
        
        {/* News Section */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-lg font-semibold text-gray-900 mb-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            News
          </motion.h3>
          
          {/* Animated News Items */}
          <div className="divide-y divide-gray-100">
            {newsItems.map((item, index) => (
              <NewsItem key={index} {...item} />
            ))}
          </div>
        </motion.div>
        
        {/* Animated View All Link */}
        <motion.div 
          className="text-right"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button 
            className="inline-flex items-center text-gray-900 font-bold text-sm hover:text-gray-700 transition-colors group relative"
            whileHover={{ 
              scale: 1.05,
              x: 5
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">View all</span>
            <motion.svg 
              className="w-4 h-4 ml-2 relative z-10" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              animate={{
                x: [0, 3, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{
                x: 8,
                transition: { duration: 0.2 }
              }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </motion.svg>
            
            {/* Animated underline */}
            <motion.div
              className="absolute bottom-0 left-0 h-0.5 bg-gray-900"
              initial={{ width: 0 }}
              whileHover={{ width: "70%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
