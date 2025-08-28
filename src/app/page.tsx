'use client';

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import {
  HeroSection,
  ServicesSection,
  EUContentSection,
  RelocationInfoSection,
  WhyChooseUsSection,
  VisaApplicationSection,
  BlogSection,
  Footer
} from '@/pages/sections';


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="bg-white">
        <HeroSection />

        <ServicesSection />

        <EUContentSection />

        <RelocationInfoSection />

        <WhyChooseUsSection />

        <VisaApplicationSection />

        <BlogSection />

        <Footer />
      </main>
    </div>
  );
}
