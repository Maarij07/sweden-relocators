'use client';

import { ContentSection } from '@/components/ui/ContentSection';

export function RelocationInfoSection() {
  return (
    <section className="py-12 lg:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* First Section - Relocating to Sweden */}
        <ContentSection
          subtitle="COMPLETE ONLINE PORTAL & APP BASE SOLUTION"
          title="Relocating To Sweden?"
          imagePosition="left"
          content={[
            "Moving abroad is an exciting yet stressful task. People migrate to different countries because of many reasons. People move to other countries to pursue better job opportunities, better education systems, better living standards, health systems or due to their belief - Faith, Family, Future.",
            "We provide a wide range of services to individuals, families, and companies to relocate their employees to Sweden.",
            "Visa and Immigration services: We can assist with the application process for various types of visas, including work visas, student visas, and family reunification visas. They can also provide guidance on immigration laws and regulations, and help with the documentation required for the application process."
          ]}
        />
        
        {/* Second Section - Departure-Arrival Services */}
        <ContentSection
          subtitle="STEP-BY-STEP ASSISTANCE"
          title="Departure-Arrival Services"
          imagePosition="right"
          content={[
            "<strong>Housing and accommodation services:</strong> We can help find suitable housing for the individual or family, including rental properties or purchasing a home. They can also provide advice on local neighborhoods and the cost of living in the new country.",
            "<strong>School and education services:</strong> For families with children, we assist with the enrollment process for local schools, and provide information on educational systems and curriculums.",
            "<strong>Cultural and language services:</strong> We can provide information and resources on the culture, customs, and language of the new country, and may offer language classes or cultural training.",
            "<strong>Legal services:</strong> We can help with the legal aspects of the move, such as tax and financial advice, and can provide guidance on local laws and regulations."
          ]}
        />
        
        {/* Third Section - Work Permit */}
        <ContentSection
          subtitle="WORK PERMIT & EXTENSIONS"
          title="Applying For Work Permit?"
          imagePosition="left"
          content={[
            "<strong>We will help you with preparing permit applications</strong>",
            "Whether you are a Swedish company or a foreign employer which is facing problems with working permits inside Sweden We have easy solutions for you. You wont be wasting enough time on how to apply for a Swedish work permit. We will do it for you easily and conveniently. You will not have to wait for 12 months in case of incorrect or incomplete applications. Our company will do it for you in good time. Download our app and discuss your case directly with our team."
          ]}
        />
        
        {/* Fourth Section - Business in Sweden */}
        <ContentSection
          subtitle="BUSINESS & INVESTMENT SOLUTIONS"
          title="Business In Sweden"
          imagePosition="right"
          content={[
            "If you are planning to invest in Sweden, you might need to apply for the residence permit",
            "We have a complete solution for all your problems while starting a new business or opening a franchise of your existing business in Sweden. Our company will deliver the service of providing the resident permit that will align with your plan easily. You will need a detailed plan for your business, a bank statement that shows that you have enough capital to invest in your business along with other documents. Our company shall you can support your family and yourself while staying in Sweden during the first two years. Dont forget to use our Assessment tool to find out more."
          ]}
        />
        
        {/* Fifth Section - EOR & Payroll Services */}
        <ContentSection
          subtitle="EOR & PAYROLL SERVICES"
          title="EOR & Payroll Services"
          imagePosition="left"
          content={[
            "Welcome to Sweden Relocators, your reliable partner for seamless global expansion. Our advanced Employer of Record (EOR) services simplify the process of growing your workforce internationally, helping you overcome common challenges with ease.",
            "<strong>How Payroll Services Work:</strong><br />Global Expansion Made Simple: With our EOR solutions, we manage all aspects of employment, including compliance with local laws, employee contracts, and payroll, allowing you to focus on your business operations without the administrative burden.",
            "<strong>Accurate Salary Processing:</strong><br />We ensure timely and precise salary payments for your employees, considering local tax, benefits, and tax obligations, thereby maintaining payroll accuracy.",
            "<strong>Tax Compliance:</strong><br />Our experts are well-versed in the latest tax regulations and ensure that your operations stay compliant, helping you avoid fines and penalties.",
            "<strong>Benefit Administration:</strong><br />We take care of administering employee benefits, from healthcare to retirement plans, ensuring that the process is efficient for both you and your employees."
          ]}
        />
      </div>
    </section>
  );
}
