'use client';

import Image from "next/image";
import Navbar from "@/components/Navbar";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState, useEffect } from 'react';

export default function Home() {
  const servicesRef = useScrollAnimation();
  const featuresRef = useScrollAnimation();
  const footerRef = useScrollAnimation();
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Main content with top padding for fixed navbar */}
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-white py-12 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6 lg:space-y-8">
                <div className="space-y-4 lg:space-y-6">
                  <p className="text-gray-500 font-medium text-xs lg:text-sm tracking-wide uppercase leading-relaxed">
                    RELOCATION & IMMIGRATION SOLUTIONS FOR INDIVIDUALS, FAMILIES,<br />
                    EMPLOYEES, AND COMPANIES
                  </p>
                  <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
                    Relocate To Sweden<br />
                    <span className="text-teal-400">With an Expert Advise</span>
                  </h1>
                  <p className="text-gray-600 text-base lg:text-lg leading-relaxed max-w-lg">
                    We offer complete relocation services to our worldwide clients including residence & 
                    work permits, home finding, school pre-search, integration, and setting-in services.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button className="bg-gray-900 text-white px-6 py-3 rounded-md font-medium text-sm hover:bg-gray-800 transition-all duration-300">
                    Our Services
                  </button>
                  <button className="bg-gray-100 text-gray-900 px-6 py-3 rounded-md font-medium text-sm hover:bg-gray-200 transition-all duration-300 border border-gray-200">
                    Book an Appointment
                  </button>
                </div>
              </div>
              
              {/* Right Content - Image */}
              <div className="relative">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
                  {/* Simulated image background - replace with actual image */}
                  <div className="w-full h-full bg-gradient-to-br from-orange-400 via-red-500 to-purple-600 relative">
                    {/* Overlay to simulate the working people image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-800/30 to-orange-800/40"></div>
                    
                    {/* Play button in center */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-teal-400 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                    
                    {/* Simulated elements that would be in the actual working image */}
                    <div className="absolute inset-0">
                      {/* Top area elements */}
                      <div className="absolute top-6 left-6 w-20 h-4 bg-white/20 rounded"></div>
                      <div className="absolute top-6 right-6 w-16 h-4 bg-white/20 rounded"></div>
                      
                      {/* Bottom area elements representing documents/papers */}
                      <div className="absolute bottom-8 left-8 right-8">
                        <div className="space-y-3">
                          <div className="w-4/5 h-3 bg-white/25 rounded"></div>
                          <div className="w-3/5 h-3 bg-white/25 rounded"></div>
                          <div className="w-2/3 h-3 bg-white/25 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services section */}
        <section className="py-12 lg:py-20 px-4 sm:px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto text-center">
            {/* Header */}
            <div className="mb-16">
              <p className="text-gray-500 font-medium text-sm tracking-wide uppercase mb-4">
                WE EMPOWER YOUR SKILLS TO SUCCEED IN SWEDEN!
              </p>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">
                Legal Relocation Solutions For Worldwide Clients
              </h2>
            </div>
            
            {/* Service Cards with Navigation */}
            <div className="relative">
              {/* Left Navigation Arrow - Hidden on mobile */}
              <button className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 xl:-translate-x-8 z-10 w-12 h-12 bg-white hover:bg-gray-50 rounded-full items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl border border-gray-200">
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Right Navigation Arrow - Hidden on mobile */}
              <button className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 xl:translate-x-8 z-10 w-12 h-12 bg-white hover:bg-gray-50 rounded-full items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl border border-gray-200">
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Service Cards Grid */}
              <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
                {/* Family Reunification Card */}
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full">
                  <div className="p-6 lg:p-8 text-center flex flex-col h-full">
                    {/* Profile Image */}
                    <div className="mb-6">
                      <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-gray-300 to-gray-400 overflow-hidden">
                        {/* Placeholder for actual profile image */}
                        <div className="w-full h-full bg-gradient-to-br from-blue-200 to-blue-300 flex items-center justify-center">
                          <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content that grows */}
                    <div className="flex-grow flex flex-col">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Family Reunification</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                        Family reunification is a recognized reason for the immigration of family members to a country where one or more family members already have legal status. If a person or an EU citizen has a permanent residence permit or is an EU long-term resident in Sweden with special protection, then they may have the right to invite their family to that country.
                      </p>
                    </div>
                    
                    {/* Button always at bottom */}
                    <button className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium text-sm hover:bg-gray-800 transition-all duration-300 w-auto mt-auto">
                      View Details
                    </button>
                  </div>
                </div>

                {/* Visitor Visa Card */}
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full">
                  <div className="p-6 lg:p-8 text-center flex flex-col h-full">
                    {/* Profile Image */}
                    <div className="mb-6">
                      <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-gray-300 to-gray-400 overflow-hidden">
                        {/* Placeholder for actual profile image */}
                        <div className="w-full h-full bg-gradient-to-br from-purple-200 to-purple-300 flex items-center justify-center">
                          <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content that grows */}
                    <div className="flex-grow flex flex-col">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Visitor Visa</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                        For visiting Sweden for a short period you will need a visit visa. Visiting for a short tour, meeting your relatives, visiting friends, or business meetings. You need to consider a short visit to Sweden, which is called the Schengen agreement. Sweden is part of the Schengen agreement. Some non-EU countries because it is also part of the Schengen agreement.
                      </p>
                    </div>
                    
                    {/* Button always at bottom */}
                    <button className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium text-sm hover:bg-gray-800 transition-all duration-300 w-auto mt-auto">
                      View Details
                    </button>
                  </div>
                </div>

                {/* Work Permit Card */}
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full">
                  <div className="p-6 lg:p-8 text-center flex flex-col h-full">
                    {/* Profile Image */}
                    <div className="mb-6">
                      <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-gray-300 to-gray-400 overflow-hidden">
                        {/* Placeholder for actual profile image */}
                        <div className="w-full h-full bg-gradient-to-br from-green-200 to-green-300 flex items-center justify-center">
                          <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content that grows */}
                    <div className="flex-grow flex flex-col">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Work Permit</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                        Currently, every EU country has a different process for issuing work permits to nationals of non-EU countries. Addressing this issue, the European Commission began work in 1999 on developing an EU-wide process for the issuance of work permits. If you are searching for work in Sweden for a work permit, you must have received an official offer of employment from a Swedish employer.
                      </p>
                    </div>
                    
                    {/* Button always at bottom */}
                    <button className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium text-sm hover:bg-gray-800 transition-all duration-300 w-auto mt-auto">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Two-Section Content Layout */}
        <section className="py-12 lg:py-20 px-4 sm:px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            {/* First Section - Image Left, Content Right */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 lg:mb-24">
              {/* Image */}
              <div className="relative">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  {/* Simulated laptop/desktop image */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 relative flex items-center justify-center">
                    <div className="w-4/5 h-4/5 bg-gray-800 rounded-lg relative overflow-hidden">
                      {/* Screen content simulation */}
                      <div className="w-full h-full bg-blue-600 relative">
                        {/* Video call interface simulation */}
                        <div className="absolute inset-4 grid grid-cols-3 gap-2">
                          {[...Array(9)].map((_, i) => (
                            <div key={i} className="bg-gray-300 rounded-md flex items-center justify-center">
                              <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
                            </div>
                          ))}
                        </div>
                        {/* Green notification badge */}
                        <div className="absolute top-6 left-6 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">S</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Decorative plant element */}
                  <div className="absolute -top-4 -right-4 w-16 h-20 bg-green-400 rounded-full opacity-60"></div>
                </div>
              </div>
              
              {/* Content */}
              <div className="space-y-6">
                <div>
                  <p className="text-gray-500 font-medium text-xs lg:text-sm tracking-wide uppercase mb-3">
                    EU RESIDENCE CARD
                  </p>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Family Reunification
                  </h2>
                </div>
                
                <div className="space-y-4 text-gray-600 text-sm lg:text-base leading-relaxed">
                  <p>
                    In the European Union (EU), the right to family reunification is protected by the EU's Charter of Fundamental Rights. The EU has established a common set of rules for family reunification for third-country nationals (non-EU citizens) who are living in an EU Member State. These rules are set out in the Family Reunification Directive (2003/86/EC).
                  </p>
                  <p>
                    According to the Directive, the EU Member States must facilitate the reunification of third-country nationals with their spouse and minor children in their territory. The EU Member States have some discretion in determining the conditions for family reunification, but in general, the process must be efficient, transparent, and non-discriminatory.
                  </p>
                </div>
                
                <button className="inline-flex items-center text-gray-900 font-medium text-sm hover:text-gray-700 transition-colors group">
                  Read More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Second Section - Content Left, Image Right */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Content */}
              <div className="space-y-6 lg:order-1">
                <div>
                  <p className="text-gray-500 font-medium text-xs lg:text-sm tracking-wide uppercase mb-3">
                    SOFTWARE BASE SOLUTION
                  </p>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Apply Online Now
                  </h2>
                </div>
                
                <div className="space-y-4 text-gray-600 text-sm lg:text-base leading-relaxed">
                  <p>
                    In the European Union (EU), the right to family reunification is protected by the EU's Charter of Fundamental Rights. The EU has established a common set of rules for family reunification for third-country nationals (non-EU citizens) who are living in an EU Member State. These rules are set out in the Family Reunification Directive (2003/86/EC).
                  </p>
                  <p>
                    According to the Directive, the EU Member States must facilitate the reunification of third-country nationals with their spouse and minor children in their territory. The EU Member States have some discretion in determining the conditions for family reunification, but in general, the process must be efficient, transparent, and non-discriminatory.
                  </p>
                  <p>
                    The third-country national must be legally resident in an EU Member State and must be able to support his or her family members financially and provide them with adequate accommodation. The family members must also not be a threat to public security or public health.
                  </p>
                </div>
                
                <button className="inline-flex items-center text-gray-900 font-medium text-sm hover:text-gray-700 transition-colors group">
                  Read More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              {/* Image */}
              <div className="relative lg:order-2">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  {/* Simulated laptop/desktop image */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 relative flex items-center justify-center">
                    <div className="w-4/5 h-4/5 bg-gray-800 rounded-lg relative overflow-hidden">
                      {/* Screen content simulation */}
                      <div className="w-full h-full bg-blue-600 relative">
                        {/* Video call interface simulation */}
                        <div className="absolute inset-4 grid grid-cols-3 gap-2">
                          {[...Array(9)].map((_, i) => (
                            <div key={i} className="bg-gray-300 rounded-md flex items-center justify-center">
                              <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
                            </div>
                          ))}
                        </div>
                        {/* Interface elements */}
                        <div className="absolute bottom-4 left-4 right-4 h-8 bg-gray-700 rounded flex items-center justify-center">
                          <div className="w-24 h-2 bg-gray-500 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Decorative plant element */}
                  <div className="absolute -top-4 -right-4 w-16 h-20 bg-green-400 rounded-full opacity-60"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visa Application Process Section */}
        <section className="py-12 lg:py-20 px-4 sm:px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto text-center">
            {/* Header */}
            <div className="mb-12">
              <p className="text-gray-500 font-medium text-xs lg:text-sm tracking-wide uppercase mb-3">
                YOUR NEXT VISA APPLICATION IS ONLINE CLICK!
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                We Prepare Visa Applications &<br />
                Send Worldwide Via DHL
              </h2>
              <p className="text-gray-600 text-base">
                Submit to Embassy or Nearest FedEx Office
              </p>
            </div>
            
            {/* Process Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {/* Sign Up Card */}
              <div className="bg-green-200 rounded-2xl p-6 text-left relative overflow-hidden">
                {/* Green icon badge */}
                <div className="absolute top-6 left-6 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                
                {/* Dotted pattern overlay */}
                <div className="absolute inset-0 opacity-10">
                  <div className="w-full h-full" style={{backgroundImage: 'radial-gradient(circle, #059669 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
                </div>
                
                <div className="pt-16">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Sign Up</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    You can signup on our website and book an appointment or write us in Message section on My Page!
                  </p>
                </div>
              </div>
              
              {/* Upload Documents Card */}
              <div className="bg-pink-200 rounded-2xl p-6 text-left relative overflow-hidden">
                {/* Pink icon badge */}
                <div className="absolute top-6 left-6 w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                  </svg>
                </div>
                
                {/* Dotted pattern overlay */}
                <div className="absolute inset-0 opacity-10">
                  <div className="w-full h-full" style={{backgroundImage: 'radial-gradient(circle, #be185d 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
                </div>
                
                <div className="pt-16">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Upload Documents</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    In next step go to My Page and upload all necessary documents.
                  </p>
                </div>
              </div>
              
              {/* File Preparation Process Card */}
              <div className="bg-yellow-200 rounded-2xl p-6 text-left relative overflow-hidden">
                {/* Yellow icon badge */}
                <div className="absolute top-6 left-6 w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z"/>
                  </svg>
                </div>
                
                {/* Dotted pattern overlay */}
                <div className="absolute inset-0 opacity-10">
                  <div className="w-full h-full" style={{backgroundImage: 'radial-gradient(circle, #ca8a04 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
                </div>
                
                <div className="pt-16">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">File Preparation Process</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    One of our experienced Consultant will contact you and prepare your visa file and book your appointment at embassy or Garry's/FedEx office.
                  </p>
                </div>
              </div>
              
              {/* Download or DHL Card */}
              <div className="bg-blue-200 rounded-2xl p-6 text-left relative overflow-hidden">
                {/* Blue icon badge */}
                <div className="absolute top-6 left-6 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5,20H19V18H5M19,9H15L13,7H9V9H19M19,3H5C3.89,3 3,3.89 3,5V15A2,2 0 0,0 5,17H19A2,2 0 0,0 21,15V5C21,3.89 20.1,3 19,3Z"/>
                  </svg>
                </div>
                
                {/* Dotted pattern overlay */}
                <div className="absolute inset-0 opacity-10">
                  <div className="w-full h-full" style={{backgroundImage: 'radial-gradient(circle, #1d4ed8 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
                </div>
                
                <div className="pt-16">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Download or DHL</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Once file is completed we will upload on your portal and send you via DHL. All you need to do is to submit to closest Embassy or Garry's Visa Services office.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Apply Now Button */}
            <div className="flex justify-center">
              <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-medium text-sm hover:bg-gray-800 transition-all duration-300 inline-flex items-center">
                Apply Now
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Blog News Section */}
        <section className="py-12 lg:py-20 px-4 sm:px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <p className="text-gray-500 font-medium text-xs lg:text-sm tracking-wide uppercase mb-3">
                BLOG CORNER
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                In Your Inbox News
              </h2>
            </div>
            
            {/* News Section */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">News</h3>
              
              {/* News Items */}
              <div className="divide-y divide-gray-100">
                {/* News Item 1 */}
                <div className="flex items-start gap-4 group cursor-pointer py-6 first:pt-0">
                  <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                    <div className="w-full h-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-base font-semibold text-gray-900 group-hover:text-gray-700 transition-colors line-clamp-2">
                        The Future of Renewable Energy: Innovations and Challenges Ahead
                      </h4>
                      <span className="text-xs text-gray-500 whitespace-nowrap ml-4">
                        12 Jun 2022
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      The sun slowly set over the horizon, painting the sky in vibrant hues of orange and pink.
                    </p>
                  </div>
                </div>
                
                {/* News Item 2 */}
                <div className="flex items-start gap-4 group cursor-pointer py-6">
                  <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                    <div className="w-full h-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-base font-semibold text-gray-900 group-hover:text-gray-700 transition-colors line-clamp-2">
                        Exploring the Impact of Artificial Intelligence on Modern Healthcare
                      </h4>
                      <span className="text-xs text-gray-500 whitespace-nowrap ml-4">
                        11 Feb 2022
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      The aroma of freshly brewed coffee filled the air, awakening my senses.
                    </p>
                  </div>
                </div>
                
                {/* News Item 3 */}
                <div className="flex items-start gap-4 group cursor-pointer py-6">
                  <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                    <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-base font-semibold text-gray-900 group-hover:text-gray-700 transition-colors line-clamp-2">
                        Climate Change and Its Effects on Global Food Security
                      </h4>
                      <span className="text-xs text-gray-500 whitespace-nowrap ml-4">
                        10 Sep 2022
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      She eagerly opened the gift, her eyes sparkling with excitement.
                    </p>
                  </div>
                </div>
                
                {/* News Item 4 */}
                <div className="flex items-start gap-4 group cursor-pointer py-6">
                  <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                    <div className="w-full h-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-base font-semibold text-gray-900 group-hover:text-gray-700 transition-colors line-clamp-2">
                        The Rise of Remote Work: Benefits Challenges and Future Trends
                      </h4>
                      <span className="text-xs text-gray-500 whitespace-nowrap ml-4">
                        09 Aug 2022
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      The old oak tree stood tall and majestic, its branches swaying gently in the breeze.
                    </p>
                  </div>
                </div>
                
                {/* News Item 5 */}
                <div className="flex items-start gap-4 group cursor-pointer py-6">
                  <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                    <div className="w-full h-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-base font-semibold text-gray-900 group-hover:text-gray-700 transition-colors line-clamp-2">
                        Understanding Blockchain Technology: Beyond Cryptocurrency
                      </h4>
                      <span className="text-xs text-gray-500 whitespace-nowrap ml-4">
                        05 Apr 2022
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      The children giggled with joy as they ran through the sprinklers on a hot summer day.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* View All Link */}
            <div className="text-right">
              <button className="inline-flex items-center text-gray-900 font-bold text-sm hover:text-gray-700 transition-colors group">
                View all
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 lg:mb-8">Why Choose Us?</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 lg:mb-12 max-w-2xl mx-auto">
              We have helped thousands of people successfully relocate to Sweden with our comprehensive support and expert guidance.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {['Expert Guidance', 'Housing Support', 'Legal Assistance', 'Cultural Integration'].map((item) => (
                <div key={item} className="text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-yellow-400 rounded-full mx-auto mb-3 lg:mb-4 flex items-center justify-center">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-sm sm:text-base text-gray-900">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-12 lg:py-16 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {/* Logo and Description */}
              <div className="lg:col-span-1">
                {/* Logo */}
                <div className="flex items-center space-x-2 mb-4">
                  {/* Green Logo Icon */}
                  <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  We are Relocation Services Provider Company which deals with all sort of legal relocation to Sweden. We offers quality guidance, effective advice and provides information to our clients to settle down to the country.
                </p>
                
                {/* Social Media Icons */}
                <div className="flex space-x-4">
                  <a href="#" className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center hover:bg-blue-700 transition-colors">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-8 h-8 bg-pink-600 rounded flex items-center justify-center hover:bg-pink-700 transition-colors">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-8 h-8 bg-blue-700 rounded flex items-center justify-center hover:bg-blue-800 transition-colors">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center hover:bg-gray-700 transition-colors">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              {/* Useful Links */}
              <div>
                <h3 className="text-white font-semibold text-sm mb-4 tracking-wider">USEFUL LINKS</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">About us</a></li>
                  <li><a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Contact us</a></li>
                  <li><a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Services</a></li>
                  <li><a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Gallery</a></li>
                  <li><a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Careers</a></li>
                  <li><a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Blogs</a></li>
                  <li><a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">FAQS</a></li>
                  <li><a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Testimonials</a></li>
                  <li><a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Terms and Condition</a></li>
                  <li><a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Privacy Policy</a></li>
                </ul>
              </div>
              
              {/* Legal */}
              <div>
                <h3 className="text-white font-semibold text-sm mb-4 tracking-wider">LEGAL</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Terms and condition</a></li>
                  <li><a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Privacy policy</a></li>
                </ul>
              </div>
              
              {/* Contact */}
              <div>
                <h3 className="text-white font-semibold text-sm mb-4 tracking-wider">CONTACT</h3>
                <div className="space-y-3">
                  <p className="text-gray-300 text-sm">info@swedenrelocators.se</p>
                  <p className="text-gray-300 text-sm">+46 723 276 276</p>
                  <div className="text-gray-300 text-sm leading-relaxed">
                    <p className="underline">Amiralsgatan 86E 214 37</p>
                    <p>Malmö, Sweden</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Copyright */}
            <div className="border-t border-gray-700 mt-12 pt-6">
              <p className="text-gray-400 text-sm">© All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
