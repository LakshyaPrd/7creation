import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

const About = () => {
  return (
    <div className="bg-[#E3DFD3] text-[#2F4231] min-h-screen">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative w-full h-[90vh] overflow-hidden">
        <img
          src="/about1.avif"
          alt="Team"
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-[#2F4231]/30"></div>
        <h1 className="absolute bottom-0 left-0 text-[#E3DFD3] text-4xl sm:text-5xl lg:text-7xl font-serif tracking-wide p-6 md:p-10 lg:p-16 z-10">
          MEET OUR TEAM
        </h1>
      </section>

      {/* EXPERIENCE BRILLIANCE STYLE SECTION */}
      <section className="py-20 px-6 md:px-16 lg:px-32 bg-[#E3DFD3] text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-10 tracking-wide">
          7 CREATION
        </h2>
        <p className="italic text-lg sm:text-xl mb-6">
          Har Ek Celebration Zaroori Hota Hai.
        </p>
        <p className="max-w-5xl mx-auto text-base sm:text-lg leading-relaxed mb-8">
          With over 25 years of experience, <strong>7 Creation</strong> is an
          event management company driven by passion and creativity. We
          specialize in curating unforgettable celebrations — from intimate
          weddings to large-scale events — all crafted with emotion, artistry,
          and precision.
        </p>
        <p className="max-w-5xl mx-auto text-base sm:text-lg leading-relaxed">
          We bring together design, planning, and execution seamlessly — making
          sure every client’s story shines through our work. Our in-house
          tentage and fabrication allow us to manage every detail under one
          roof, ensuring high quality, cohesive experiences, and flawless
          results.
        </p>

        {/* Logos / Partners Section */}
        {/*
        <div className="flex flex-wrap justify-center items-center gap-10 mt-16 opacity-80">
          <img
            src="/partner1.png"
            alt="Partner 1"
            className="h-12 sm:h-16 object-contain grayscale hover:grayscale-0 transition"
          />
          <img
            src="/partner2.png"
            alt="Partner 2"
            className="h-12 sm:h-16 object-contain grayscale hover:grayscale-0 transition"
          />
          <img
            src="/partner3.png"
            alt="Partner 3"
            className="h-12 sm:h-16 object-contain grayscale hover:grayscale-0 transition"
          />
          <img
            src="/partner4.png"
            alt="Partner 4"
            className="h-12 sm:h-16 object-contain grayscale hover:grayscale-0 transition"
          />
        </div>
        */}
      </section>

      {/* TEAM MEMBERS SECTION */}
      <section className="bg-[#E3DFD3] py-20 px-6 md:px-16 lg:px-32">
        <div className="max-w-7xl mx-auto text-center">
          {/* CEO */}
          <div className="mb-24">
          <h3 className="text-3xl sm:text-4xl font-serif mb-6">Suresh Sharma</h3>
            <img
              src="/ceo.jpg"
              alt="Suresh Sharma"
              className="w-full max-h-[650px] object-cover rounded-xl shadow-xl"
            />
            <div className="mt-8 max-w-6xl mx-auto space-y-3">
              
              <p className="text-base leading-relaxed mt-4">
                Suresh Sharma is the visionary Founder of Choudhary Tent House and serves as a guiding mentor at 7Creation. With over 25 years of experience in the event and tentage industry, he has built a strong legacy of trust, craftsmanship, and excellence.
                His deep industry knowledge, operational expertise, and commitment to quality continue to inspire the next generation at 7Creations, shaping the company’s values of integrity, innovation, and perfection in every celebration
                .
              </p>
            </div>
          </div>

          {/* OTHER MEMBERS */}
          <h2 className="text-2xl sm:text-4xl font-serif tracking-wide mb-4">
            MEET ROHIT, RAHUL AND LAKSHYA
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-16 mt-8">
            {/* Member 2 */}
            <div>
              <img
                src="/ceo.jpg"
                alt="Rahul Sharma"
                className="w-full h-[550px] object-cover rounded-xl shadow-lg"
              />
              <div className="mt-6 space-y-2">
                <h3 className="text-2xl sm:text-3xl font-serif">
                  Rohit Sharma
                </h3>
                <p className="text-lg opacity-80">Co- Founder, 7 Creation</p>
                <p className="text-base leading-relaxed mt-3 max-w-xl mx-auto text-justify">
                Rohit Sharma is a certified event planner with over three years of professional experience in the event management industry. His expertise lies in planning, operation and client experience. In addition to his event management background, Rohit also holds a Bachelor of Laws (LLB) degree, 
                which adds a strong foundation in compliance, contracts, and organizational discipline.
                </p>
              </div>
            </div>

            {/* Member 3 */}
            <div>
              <img
                src="/creative.png"
                alt="Lakshya Pradhan"
                className="w-full h-[550px] object-cover rounded-xl shadow-lg"
              />
              <div className="mt-6 space-y-2">
                <h3 className="text-2xl sm:text-3xl font-serif">
                  CA Rahul Sharma
                </h3>
                <p className="text-lg opacity-80">Co- Founder, 7 Creation</p>
                
                <p className="text-base leading-relaxed mt-3 max-w-xl mx-auto text-justify">
                Rahul Sharma is a qualified Chartered Accountant and Co-Founder of 7Creations, bringing strong financial 
                acumen and strategic insight to the company. Passionate about event management and business innovation, Rahul oversees vendor relations, 
                financial planning, compliance, and key strategic decisions that drive the organization’s growth.
                </p>
              </div>
            </div>
            <div className="sm:col-span-2 flex flex-col items-center">
              <img
                src="/operation.jpg"
                alt="Lakshya Pradhan"
                className="w-full max-w-[550px] h-[550px] object-cover rounded-xl shadow-lg"
              />
              <div className="mt-6 space-y-2 text-center">
                <h3 className="text-2xl sm:text-3xl font-serif">
                  Lakshya Pradhan
                </h3>
                <p className="text-lg opacity-80">Head of IT Operations & Marketing</p>
                
                <p className="text-base leading-relaxed mt-3 max-w-xl mx-auto text-justify">
                Lakshya Pradhan, a qualified Computer Science Engineer, leads the IT Operations and Marketing divisions at 7Creations. 
                With a strong technical background and problem-solving mindset, he ensures the company's digital infrastructure and internal systems run seamlessly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative w-full bg-[#2F4231] text-[#E3DFD3] flex flex-col items-center justify-center py-24 text-center overflow-hidden">
        <img
          src="/special.avif"
          alt="Special Event"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 px-6 sm:px-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif mb-6">
            Let's Create Something Extraordinary
          </h2>
          <p className="text-lg sm:text-xl mb-8 opacity-90">
            Share your vision with us — we’ll craft an experience beyond
            imagination.
          </p>
          <button className="px-10 py-4 rounded-full border-2 border-[#E3DFD3] text-[#E3DFD3] hover:bg-[#E3DFD3] hover:text-[#2F4231] transition-all duration-300 font-medium text-lg">
            Get Started
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
