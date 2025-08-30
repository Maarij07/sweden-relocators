'use client';

import { motion } from 'framer-motion';
import { ReadMoreButton } from '@/components/ui/ReadMoreButton';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  delay: number;
}

function BlogCard({ title, excerpt, date, readTime, category, delay }: BlogCardProps) {
  return (
    <motion.div 
      className="bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-300 overflow-hidden group hover:shadow-lg h-full flex flex-col"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -4,
        transition: { duration: 0.3 }
      }}
    >
      {/* Image Placeholder */}
      <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden flex-shrink-0">
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
        </div>
        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/90 text-gray-700">
            {category}
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <time>{date}</time>
          <span className="mx-2">•</span>
          <span>{readTime} read</span>
        </div>
        
        {/* Title with fixed 2-line height */}
        <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors" 
            style={{ 
              height: '3.5rem', // Fixed height for exactly 2 lines
              lineHeight: '1.75rem',
              overflow: 'hidden',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical'
            }}>
          {title}
        </h3>
        
        {/* Excerpt with fixed 3-line height */}
        <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1" 
           style={{
             height: '4.5rem', // Fixed height for exactly 3 lines
             lineHeight: '1.5rem',
             overflow: 'hidden',
             display: '-webkit-box',
             WebkitLineClamp: 3,
             WebkitBoxOrient: 'vertical'
           }}>
          {excerpt}
        </p>
        
        {/* Button positioned at bottom */}
        <div className="mt-auto">
          <ReadMoreButton 
            text="Read Article"
            onClick={() => {}}
          />
        </div>
      </div>
    </motion.div>
  );
}

export function BlogSection() {
  const blogPosts = [
    {
      title: "Sweden Work Permit Application Guide 2024",
      excerpt: "Complete guide to applying for work permits in Sweden, including required documents, processing times, and tips for a successful application.",
      date: "Dec 15, 2024",
      readTime: "5 min",
      category: "Immigration",
      delay: 0.1
    },
    {
      title: "Finding Housing in Stockholm: A Complete Guide",
      excerpt: "Navigate Stockholm's competitive housing market with our comprehensive guide covering rental tips, neighborhoods, and housing solutions for newcomers.",
      date: "Dec 10, 2024",
      readTime: "7 min",
      category: "Housing",
      delay: 0.2
    },
    {
      title: "Swedish Language Learning: Resources and Tips",
      excerpt: "Discover the best resources and proven strategies for learning Swedish quickly, from free apps to professional courses and cultural immersion tips.",
      date: "Dec 5, 2024",
      readTime: "4 min",
      category: "Integration",
      delay: 0.3
    }
  ];

  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p 
            className="text-gray-500 font-medium text-xs lg:text-sm tracking-wide uppercase mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            LATEST INSIGHTS
          </motion.p>
          <motion.h2 
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Immigration & Relocation News
          </motion.h2>
          <motion.p
            className="text-gray-600 text-base max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Stay updated with the latest news, guides, and insights about immigrating and relocating to Sweden.
          </motion.p>
        </div>
        
        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
        
        {/* View All Button */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <ReadMoreButton 
              text="View All Articles"
              onClick={() => {}}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
