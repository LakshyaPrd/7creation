import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#0F2A24] text-[#E3DFD3]">
      {/* Top content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-serif tracking-wide">
              7 Creation
            </h2>
            <p className="mt-4 text-md">
              HAR EK CELEBRATION ZAROORI HOTA HAI
            </p>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-2xl font-serif mb-6">Menu</h3>
            <ul className="space-y-4 text-lg">
              <li><a href="/about" className="hover:underline">About</a></li>
              <li><a href="/portfolio" className="hover:underline">Portfolio</a></li>
              <li><a href="/services" className="hover:underline">Services</a></li>
              <li><a href="/packages" className="hover:underline">Packages</a></li>
              <li><a href="/contact-us" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>

          {/* Follow */}
          <div>
            <h3 className="text-2xl font-serif mb-6">Follow</h3>
            <ul className="space-y-4 text-lg">
              <li><a href="https://www.instagram.com/eventby_7creation?igsh=MTB0YnhvbTFxYjY1eg==" className="hover:underline">Instagram</a></li>
              
              <li><a href="#" className="hover:underline">Facebook</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-2xl font-serif mb-6">Contact</h3>
            <ul className="space-y-6 text-lg">
              <li><a href="tel:1234567890" className="hover:underline">9660989956</a></li>
              <li><a href="mailto:eventby7creation@gmail.com" className="hover:underline">eventby7creation@gmail.com</a></li>
              <li className="leading-relaxed">
                Jaipur<br />
                
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#E3DFD3]/20 mt-12 pt-6" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-[#E3DFD3]/80">
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
          <p className="md:text-right">
            © 2025 by 7 Creation.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
