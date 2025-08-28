'use client';

export function Footer() {
  return (
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
  );
}
