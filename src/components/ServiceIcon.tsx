import React from 'react';
import {
  HomeIcon,
  UsersIcon,
  BuildingOfficeIcon,
  DocumentTextIcon,
  BriefcaseIcon,
  BuildingOffice2Icon,
  ChartBarIcon,
  UserGroupIcon,
  AcademicCapIcon,
  GlobeAltIcon,
  TruckIcon,
  BuildingStorefrontIcon,
  CalculatorIcon,
  ScaleIcon,
  StarIcon,
  CalendarIcon,
  ClockIcon,
  MagnifyingGlassIcon,
  SpeakerWaveIcon,
  ChatBubbleLeftRightIcon,
  BoltIcon
} from '@heroicons/react/24/outline';

interface ServiceIconProps {
  iconName: string;
  className?: string;
}

const iconMap = {
  'home': HomeIcon,
  'users': UsersIcon,
  'building-office': BuildingOfficeIcon,
  'document-text': DocumentTextIcon,
  'briefcase': BriefcaseIcon,
  'building-office-2': BuildingOffice2Icon,
  'chart-bar': ChartBarIcon,
  'user-group': UserGroupIcon,
  'academic-cap': AcademicCapIcon,
  'globe-alt': GlobeAltIcon,
  'truck': TruckIcon,
  'building-storefront': BuildingStorefrontIcon,
  'calculator': CalculatorIcon,
  'scale': ScaleIcon,
  'star': StarIcon,
  'calendar': CalendarIcon,
  'clock': ClockIcon,
  'magnifying-glass': MagnifyingGlassIcon,
  'megaphone': SpeakerWaveIcon,
  'chat-bubble-left-right': ChatBubbleLeftRightIcon,
  'bolt': BoltIcon
};

const ServiceIcon: React.FC<ServiceIconProps> = ({ iconName, className = "w-6 h-6" }) => {
  const IconComponent = iconMap[iconName as keyof typeof iconMap];
  
  if (!IconComponent) {
    // Fallback to a default icon if the specified icon is not found
    return <BuildingOfficeIcon className={`${className} text-yellow-400`} />;
  }

  return <IconComponent className={`${className} text-yellow-400`} />;
};

export default ServiceIcon;
