'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      
      style={{ backgroundColor: '#2F4231', color: '#E3DFD3' }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          className="text-lg md:text-xl font-semibold tracking-tight"
          style={{ color: '#E3DFD3' }}
        >
          7 Creations
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          <Link href="/about" className="text-lg hover:opacity-90 text-[#E3DFD3]">
            About
          </Link>
          <Link href="/portfolio" className="text-lg hover:opacity-90 text-[#E3DFD3]">
            Portfolio
          </Link>
          <Link href="/services" className="text-lg hover:opacity-90 text-[#E3DFD3]">
            Services
          </Link>
          <Link href="/packages" className="text-lg hover:opacity-90 text-[#E3DFD3]">
            Packages
          </Link>
          <Link href="/contact-us" className="text-lg hover:opacity-90 text-[#E3DFD3]">
            Contact Us
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-white/10"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">Open main menu</span>
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-6 transition-all`}
              style={{ backgroundColor: '#E3DFD3', transform: open ? 'translateY(6px) rotate(45deg)' : 'none' }}
            />
            <span
              className={`block h-0.5 w-6 transition-all`}
              style={{ backgroundColor: '#E3DFD3', opacity: open ? 0 : 1 }}
            />
            <span
              className={`block h-0.5 w-6 transition-all`}
              style={{ backgroundColor: '#E3DFD3', transform: open ? 'translateY(-6px) rotate(-45deg)' : 'none' }}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300`}
        style={{
          backgroundColor: '#2F4231',
          color: '#E3DFD3',
          maxHeight: open ? 260 : 0,
        }}
      >
        <nav className="px-4 pb-4 pt-2 flex flex-col gap-2">
          <Link href="/about" className="py-2 px-2 rounded hover:bg-white/10" onClick={() => setOpen(false)} style={{ color: '#E3DFD3' }}>
            About
          </Link>
          <Link href="/portfolio" className="py-2 px-2 rounded hover:bg-white/10" onClick={() => setOpen(false)} style={{ color: '#E3DFD3' }}>
            Portfolio
          </Link>
          <Link href="/services" className="py-2 px-2 rounded hover:bg-white/10" onClick={() => setOpen(false)} style={{ color: '#E3DFD3' }}>
            Services
          </Link>
          <Link href="/packages" className="py-2 px-2 rounded hover:bg-white/10" onClick={() => setOpen(false)} style={{ color: '#E3DFD3' }}>
            Packages
          </Link>
          <Link href="/contact-us" className="py-2 px-2 rounded hover:bg-white/10" onClick={() => setOpen(false)} style={{ color: '#E3DFD3' }}>
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
