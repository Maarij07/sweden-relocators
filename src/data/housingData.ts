export interface HousingService {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
  category: 'available' | 'looking' | 'property' | 'support';
}

export const housingData: HousingService[] = [
  // Available Housing
  {
    id: 'available-housing',
    title: 'Available Housing',
    description: 'Go through all the housing options available',
    icon: 'calendar',
    href: '/housing/available',
    category: 'available'
  },
  {
    id: 'rental-apartments',
    title: 'Rental Apartments',
    description: 'Find furnished and unfurnished apartments',
    icon: 'building-office',
    href: '/housing/rental-apartments',
    category: 'available'
  },
  {
    id: 'student-housing',
    title: 'Student Housing',
    description: 'Specialized housing for students and scholars',
    icon: 'academic-cap',
    href: '/housing/student-housing',
    category: 'available'
  },
  {
    id: 'temporary-housing',
    title: 'Temporary Housing',
    description: 'Short-term accommodation solutions',
    icon: 'clock',
    href: '/housing/temporary',
    category: 'available'
  },

  // Looking For Housing
  {
    id: 'looking-for-housing',
    title: 'Looking For Housing',
    description: 'If you are looking for housing assistance',
    icon: 'home',
    href: '/housing/looking',
    category: 'looking'
  },
  {
    id: 'housing-search',
    title: 'Housing Search',
    description: 'Let us help you find the perfect home',
    icon: 'magnifying-glass',
    href: '/housing/search',
    category: 'looking'
  },
  {
    id: 'roommate-matching',
    title: 'Roommate Matching',
    description: 'Find compatible roommates and shared living',
    icon: 'users',
    href: '/housing/roommates',
    category: 'looking'
  },
  {
    id: 'housing-application',
    title: 'Housing Application',
    description: 'Application assistance for housing',
    icon: 'document-text',
    href: '/housing/application',
    category: 'looking'
  },

  // Property Services
  {
    id: 'list-property',
    title: 'List your property',
    description: 'If youre looking to rent out your property',
    icon: 'building-storefront',
    href: '/housing/list-property',
    category: 'property'
  },
  {
    id: 'property-management',
    title: 'Property Management',
    description: 'Professional property management services',
    icon: 'briefcase',
    href: '/housing/management',
    category: 'property'
  },
  {
    id: 'property-valuation',
    title: 'Property Valuation',
    description: 'Get accurate property value assessment',
    icon: 'calculator',
    href: '/housing/valuation',
    category: 'property'
  },
  {
    id: 'property-marketing',
    title: 'Property Marketing',
    description: 'Market your property effectively',
    icon: 'megaphone',
    href: '/housing/marketing',
    category: 'property'
  },

  // Support Services
  {
    id: 'housing-consultation',
    title: 'Housing Consultation',
    description: 'Expert advice on housing matters',
    icon: 'chat-bubble-left-right',
    href: '/housing/consultation',
    category: 'support'
  },
  {
    id: 'legal-support',
    title: 'Legal Support',
    description: 'Legal assistance for housing contracts',
    icon: 'scale',
    href: '/housing/legal',
    category: 'support'
  },
  {
    id: 'moving-services',
    title: 'Moving Services',
    description: 'Complete relocation and moving assistance',
    icon: 'truck',
    href: '/housing/moving',
    category: 'support'
  },
  {
    id: 'utility-setup',
    title: 'Utility Setup',
    description: 'Help with electricity, internet, and utilities',
    icon: 'bolt',
    href: '/housing/utilities',
    category: 'support'
  }
];

export const getHousingByCategory = (category: HousingService['category']) => {
  return housingData.filter(service => service.category === category);
};
