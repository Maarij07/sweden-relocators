export interface AssessmentService {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
  category: 'visa' | 'permit' | 'status' | 'general';
}

export const assessmentData: AssessmentService[] = [
  // Visa Categories
  {
    id: 'business-visa',
    title: 'Business Visa',
    description: 'A business visa allows individuals to travel for business purposes',
    icon: 'briefcase',
    href: '/assessment/business-visa',
    category: 'visa'
  },
  {
    id: 'visit-visa',
    title: 'Visit Visa',
    description: 'A visit visa permits short-term visits for tourism or family meetings',
    icon: 'document-text',
    href: '/assessment/visit-visa',
    category: 'visa'
  },
  {
    id: 'student-visa',
    title: 'Student Visa',
    description: 'A student visa allows individuals to study in Sweden',
    icon: 'academic-cap',
    href: '/assessment/student-visa',
    category: 'visa'
  },

  // Permits and Status
  {
    id: 'family-reunification',
    title: 'Family Reunification',
    description: 'A family reunification visa allows family members to join',
    icon: 'users',
    href: '/assessment/family-reunification',
    category: 'permit'
  },
  {
    id: 'work-permit',
    title: 'Work Permit',
    description: 'A work permit authorizes employment in Sweden',
    icon: 'briefcase',
    href: '/assessment/work-permit',
    category: 'permit'
  },
  {
    id: 'long-term-eu-status',
    title: 'Long Term EU Status',
    description: 'A Long-Term EU Residence status for long-term residents',
    icon: 'star',
    href: '/assessment/long-term-eu-status',
    category: 'status'
  },

  // General
  {
    id: 'all-assessments',
    title: 'All Assessments',
    description: 'View all available assessment options and services',
    icon: 'list-bullet',
    href: '/assessment',
    category: 'general'
  }
];

export const getAssessmentsByCategory = (category: AssessmentService['category']) => {
  return assessmentData.filter(service => service.category === category);
};
