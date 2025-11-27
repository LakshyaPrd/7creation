'use client';

import React from 'react';
import { ExpandableCardDemo } from './grid-test';

const Services = () => {
  return (
    <div className="bg-[#E3DFD3] text-[#2F4231] min-h-screen">
      {/* HERO SECTION */}
      <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
        <img
          src="/partial-wedding.avif"
          alt="Events"
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-[#2F4231]/50"></div>
        <h1 className="absolute bottom-12 left-12 text-[#E3DFD3] text-4xl sm:text-5xl lg:text-7xl font-serif tracking-wide z-10">
          WHAT WE DO
        </h1>
      </section>

      {/* INTRO SECTION */}
      <section className="py-20 px-6 md:px-16 lg:px-32 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-6">
          OUR SERVICES
        </h2>
        <div className="max-w-3xl mx-auto text-base sm:text-lg leading-relaxed space-y-4">
          <p>
            At 7 Creation, we believe in quality over quantity. We take on a select number of events each year to ensure every client receives a personalized, high-touch planning experience. Each celebration is uniquely curated to reflect your vision, style, and story.
          </p>
          <p>
            Based in Jaipur, we proudly plan and execute events across Rajasthan and major destinations across India — from royal weddings and corporate galas to intimate social gatherings. We also specialize in destination events, crafting unforgettable experiences wherever your dream celebration takes you.
          </p>
        </div>
      </section>

      {/* Services SECTION */}
      <section className="px-6 md:px-16 lg:px-32 pb-20">
        <ExpandableCardDemo />
      </section>
    </div>
  );
};

export default Services;