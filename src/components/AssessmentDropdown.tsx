'use client';

import React from 'react';
import Link from 'next/link';
import { assessmentData } from '@/data/assessmentData';
import colors from '@/styles/colors.json';

interface AssessmentDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const AssessmentDropdown: React.FC<AssessmentDropdownProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // Group assessment services by category for cleaner organization
  const groupedAssessments = {
    'VISA ASSESSMENTS': assessmentData.filter(a => a.category === 'visa'),
    'PERMITS & STATUS': assessmentData.filter(a => a.category === 'permit' || a.category === 'status')
  };

  return (
    <div 
      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-50 shadow-xl rounded-lg overflow-hidden border"
      style={{
        backgroundColor: '#ffffff',
        borderColor: '#d1d5db',
        width: '85vw',
        maxWidth: '60rem'
      }}
    >
        {/* Assessment Grid */}
        <div className="p-3 sm:p-4 lg:p-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-5">
            {Object.entries(groupedAssessments).map(([category, assessments]) => (
              <div key={category} className="space-y-2">
                {/* Category Header */}
                <h3 
                  className="text-xs font-semibold uppercase tracking-wider mb-2 sm:mb-3"
                  style={{ color: '#6b7280' }}
                >
                  {category}
                </h3>
                
                {/* Assessment List */}
                <div className="space-y-1">
                  {assessments.map((service) => (
                    <Link
                      key={service.id}
                      href={service.href}
                      onClick={onClose}
                      className="block py-1.5 px-2 rounded-md transition-all duration-200 group"
                      style={{
                        color: '#374151'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#f3f4f6';
                        e.currentTarget.style.color = '#000000';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = '#374151';
                      }}
                    >
                      <div className="text-xs sm:text-sm font-medium mb-0.5">
                        {service.title}
                      </div>
                      <div 
                        className="text-xs leading-snug opacity-75 group-hover:opacity-90 transition-opacity line-clamp-2"
                        style={{ color: '#6b7280' }}
                      >
                        {service.description.length > 45 ? service.description.substring(0, 45) + '...' : service.description}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div 
          className="px-4 sm:px-5 lg:px-6 py-2.5 sm:py-3 border-t text-center"
          style={{
            borderTopColor: colors.colors.grey[300],
            backgroundColor: colors.colors.background.neutral
          }}
        >
          <Link
            href="/assessment"
            onClick={onClose}
            className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-md font-medium text-xs transition-all duration-200 cursor-pointer"
            style={{
              backgroundColor: '#000000',
              color: '#ffffff'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#374151';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#000000';
            }}
          >
            View All Assessments →
          </Link>
        </div>
    </div>
  );
};

export default AssessmentDropdown;
