export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
  category: 'visa' | 'business' | 'family' | 'citizenship';
}

export const servicesData: Service[] = [
  // Row 1
  {
    id: 'asylum',
    title: 'Asylum',
    description: 'You have to be in Sweden to apply for asylum',
    icon: 'home',
    href: '/services/asylum',
    category: 'visa'
  },
  {
    id: 'family-reunification',
    title: 'Family Reunification',
    description: 'Family reunification is a legal process',
    icon: 'users',
    href: '/services/family-reunification',
    category: 'family'
  },
  {
    id: 'relocate-sweden',
    title: 'Relocate to Sweden',
    description: 'The personal identification number',
    icon: 'building-office',
    href: '/services/relocate-sweden',
    category: 'visa'
  },
  {
    id: 'relocate-denmark',
    title: 'Relocate to Denmark',
    description: 'CPR stands for Det Centrale Personregister',
    icon: 'document-text',
    href: '/services/relocate-denmark',
    category: 'visa'
  },
  
  // Row 2
  {
    id: 'work-permit',
    title: 'Work Permit',
    description: 'Permit To Work refers to a legal document',
    icon: 'briefcase',
    href: '/services/work-permit',
    category: 'visa'
  },
  {
    id: 'business-permit',
    title: 'Business Permit',
    description: 'Swedish business culture and practices',
    icon: 'building-office-2',
    href: '/services/business-permit',
    category: 'business'
  },
  {
    id: 'business-visit',
    title: 'Business Visit',
    description: 'Foreign people who want to visit Sweden',
    icon: 'chart-bar',
    href: '/services/business-visit',
    category: 'business'
  },
  {
    id: 'citizenship',
    title: 'Citizenship',
    description: 'When you have lived in Sweden for a certain time',
    icon: 'user-group',
    href: '/services/citizenship',
    category: 'citizenship'
  },
  
  // Row 3
  {
    id: 'study-eu',
    title: 'Study in EU',
    description: 'If you are thinking about studying in Europe',
    icon: 'academic-cap',
    href: '/services/study-eu',
    category: 'visa'
  },
  {
    id: 'global-visit-visas',
    title: 'Global Visit Visas',
    description: 'For visiting Sweden for a short period',
    icon: 'globe-alt',
    href: '/services/global-visit-visas',
    category: 'visa'
  },
  {
    id: 'parents-eu-permit',
    title: 'Parents EU Permit',
    description: 'Parents of a child under 18 years of age',
    icon: 'user-group',
    href: '/services/parents-eu-permit',
    category: 'family'
  },
  {
    id: 'logistics',
    title: 'Logistics',
    description: 'Streamline your move with our logistics services',
    icon: 'truck',
    href: '/services/logistics',
    category: 'business'
  },
  
  // Row 4
  {
    id: 'company-registration',
    title: 'Company Registration',
    description: 'If you are planning to register a company',
    icon: 'building-storefront',
    href: '/services/company-registration',
    category: 'business'
  },
  {
    id: 'eor-payroll',
    title: 'EOR & Payroll',
    description: 'We offer you an easy and efficient solution',
    icon: 'calculator',
    href: '/services/eor-payroll',
    category: 'business'
  },
  {
    id: 'appeal-cases',
    title: 'Appeal Cases',
    description: 'Have you been denied? Let us help you appeal',
    icon: 'scale',
    href: '/services/appeal-cases',
    category: 'visa'
  },
  {
    id: 'eu-citizens-relocation',
    title: 'EU Citizens Relocation',
    description: 'Family reunification means that family members',
    icon: 'star',
    href: '/services/eu-citizens-relocation',
    category: 'citizenship'
  }
];

export const getServicesByCategory = (category: Service['category']) => {
  return servicesData.filter(service => service.category === category);
};
