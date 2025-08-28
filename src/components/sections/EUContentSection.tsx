'use client';

import { ContentSection } from '@/components/ui/ContentSection';

export function EUContentSection() {
  return (
    <section className="py-12 lg:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <ContentSection
          subtitle="EU RESIDENCE CARD"
          title="Family Reunification"
          imagePosition="left"
          content={[
            "In the European Union (EU), the right to family reunification is protected by the EU's Charter of Fundamental Rights. The EU has established a common set of rules for family reunification for third-country nationals (non-EU citizens) who are living in an EU Member State. These rules are set out in the Family Reunification Directive (2003/86/EC).",
            "According to the Directive, the EU Member States must facilitate the reunification of third-country nationals with their spouse and minor children in their territory. The EU Member States have some discretion in determining the conditions for family reunification, but in general, the process must be efficient, transparent, and non-discriminatory."
          ]}
        />
        
        <ContentSection
          subtitle="SOFTWARE BASE SOLUTION"
          title="Apply Online Now"
          imagePosition="right"
          content={[
            "In the European Union (EU), the right to family reunification is protected by the EU's Charter of Fundamental Rights. The EU has established a common set of rules for family reunification for third-country nationals (non-EU citizens) who are living in an EU Member State. These rules are set out in the Family Reunification Directive (2003/86/EC).",
            "According to the Directive, the EU Member States must facilitate the reunification of third-country nationals with their spouse and minor children in their territory. The EU Member States have some discretion in determining the conditions for family reunification, but in general, the process must be efficient, transparent, and non-discriminatory.",
            "The third-country national must be legally resident in an EU Member State and must be able to support his or her family members financially and provide them with adequate accommodation. The family members must also not be a threat to public security or public health."
          ]}
        />
      </div>
    </section>
  );
}
