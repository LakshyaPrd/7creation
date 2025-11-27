"use client"
import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import Reviews from './Reviews'
// REMOVE import { motion, ... } from 'framer-motion'; and related Framer Motion hooks
import { useRef } from 'react';

const Home = () => {
  const sectionRef = useRef(null);
  // const { scrollY } = useViewportScroll(); // This line is removed as per the edit hint
  // const [sectionTop, setSectionTop] = React.useState(0); // This line is removed as per the edit hint
  // const [sectionHeight, setSectionHeight] = React.useState(0); // This line is removed as per the edit hint
  React.useEffect(() => {
    if (sectionRef.current) {
      // setSectionTop(sectionRef.current.offsetTop); // This line is removed as per the edit hint
      // setSectionHeight(sectionRef.current.offsetHeight); // This line is removed as per the edit hint
    }
  }, []);
  // const start = sectionTop - window.innerHeight; // This line is removed as per the edit hint
  // const end = sectionTop + sectionHeight; // This line is removed as per the edit hint
  // const imageTranslateY = useTransform(scrollY, [start, end], [0, -40]); // up to 40px upward // This line is removed as per the edit hint

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="w-full bg-[#2F4231]">
        <Navbar />
        <div className="max-w-7xl px-4 sm:px-6 md:px-6 mx-auto text-[#E3DFD3] py-8 sm:py-10 md:py-12">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl mt-2 font-sans font-medium leading-tight">
            Crafting Every Celebration
          </h1>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl mt-2 font-sans font-medium leading-tight">
            To Perfection
          </h1>
        </div>
      </div>

      {/* Combined section with overlapping video */}
      <section className="w-full bg-[#2F4231] text-[#E3DFD3] relative">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="w-full">
            <div className="max-w-7xl px-4 sm:px-6 md:px-6 lg:ml-32 mx-auto py-8 sm:py-10 md:py-12">
              <h2 className="text-xl sm:text-2xl md:text-2xl text-[#E3DFD3]/80 font-serif leading-tight">
                Full-Service Event Planning & Production Company 
              </h2>
            </div>
          </div>

          <div className="relative h-[400px] sm:h-[520px] md:h-[600px] lg:h-[800px] xl:h-[800px] 2xl:h-[800px] z-50 lg:col-span-2">
            <video
              src="/landing.mp4"
              poster="/video-poster.jpg"
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 relative -mt-32 sm:-mt-40 md:-mt-48 lg:-mt-64 xl:-mt-80 z-10">
          <div className="hidden lg:block bg-[#E3DFD3] px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 lg:py-32 pt-32 sm:pt-40 md:pt-48 lg:pt-64 xl:pt-80" />

          <div className="bg-[#E3DFD3] text-[#2F4231] px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 lg:py-32 pt-32 sm:pt-40 md:pt-48 lg:pt-64 xl:pt-80 lg:col-span-3 flex flex-col justify-center">
            <div className="mx-auto text-left lg:ml-24">
              <h4 className="text-lg sm:text-xl md:text-3xl font-medium mb-6 sm:mb-8 md:mb-12 text-[#2F4231]/80 mt-10">
                We are 7 Creation
              </h4>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-serif leading-tight text-[#2F4231]">
                We Focus on Every
              </h2>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-serif leading-tight text-[#2F4231] ">
                Little Detail & Passion in Every Celebration
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Image and overlapping content */}
      <div className="relative">
        <img src="/table.avif" alt="" className="w-full h-screen object-cover sticky top-0" />
        
        <div className="relative z-10  min-h-screen">
          <div className="bg-white rounded-t-xl sm:rounded-t-2xl lg:rounded-t-3xl mx-auto max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-10 lg:py-12 mb-16 sm:mb-18 md:mb-20 lg:mb-22 relative">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-[#2F4231]/90 mb-4 sm:mb-6 md:mb-7 lg:mb-8 leading-relaxed">
              We are an award-winning event planning company based in Jaipur.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-[#2F4231]/90 mb-6 sm:mb-7 md:mb-8 lg:mb-10 leading-relaxed">
              From initial concept to the big day, we are here to bring your dream event to life, always keeping your wishes and vision in mind.
            </p>
            
            
            
            {/* Small image positioned at bottom right */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 w-full py-2 sm:py-3 md:py-4 lg:py-6">
              <div className="relative group w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64">
                <img
                  src="/award.avif"
                  alt="Award"
                  className="w-full h-full object-cover rounded-md transition duration-300 group-hover:blur-xs group-focus:blur-xs"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 group-focus:opacity-100 bg-black/25 flex items-end justify-center rounded-md transition-opacity duration-300 pb-3 sm:pb-5">
                  <span className="text-white font-semibold text-xs sm:text-base md:text-lg xl:text-xl text-center px-2 mb-1 sm:mb-2 drop-shadow-lg">Best Event Award</span>
                </div>
              </div>
              <div className="relative group w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64">
                <img
                  src="/ranked.avif"
                  alt="Ranked"
                  className="w-full h-full object-cover rounded-md transition duration-300 group-hover:blur-xs group-focus:blur-xs"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 group-focus:opacity-100 bg-black/25 flex items-end justify-center rounded-md transition-opacity duration-300 pb-3 sm:pb-5">
                  <span className="text-white font-semibold text-xs sm:text-base md:text-lg xl:text-xl text-center px-2 mb-1 sm:mb-2 drop-shadow-lg">Top Ranked Event</span>
                </div>
              </div>
            </div>
            
          </div>


          

          {/* Our Expertise Section */}
          <section id="expertise" className="w-full bg-[#2F4231] py-10 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <h3 className="text-lg sm:text-xl font-serif font-light text-[#E3DFD3]/80 text-left mb-3 sm:mb-4">
              Our Expertise
            </h3>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-sans font-medium leading-tight text-[#E3DFD3] mb-8 sm:mb-12 lg:mb-16">
              How We Work
            </h1>
          </div>

          {/* Full-width container */}
          <div className="w-full lg:relative">
            
            {/* Planning Section */}
            <div className="lg:sticky lg:top-0 lg:z-10">
              <div className="grid grid-cols-1 lg:grid-cols-8 gap-0">
                
                {/* Image */}
                <div className="lg:col-span-5 relative">
                  <img 
                    src="/planning.avif" 
                    alt="Wedding Planning" 
                    className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[750px] object-cover"
                  />
                </div>
                
                {/* Text */}
                <div className="lg:col-span-3 bg-[#2F4231] flex flex-col justify-start text-left">
                  <div className="max-w-md px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 lg:py-16">
                    <p className="text-base sm:text-lg md:text-xl text-[#E3DFD3]/90 tracking-wider uppercase">01</p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-serif text-[#E3DFD3] mb-4 sm:mb-6 md:mb-8 leading-tight">
                      Consultation & Concept
                    </h2>
                    <p className="text-sm sm:text-base lg:text-lg text-[#E3DFD3]/80 leading-relaxed">
                    It starts with understanding your vision, theme, and ultimate goals. 
                    Our team then transforms those ideas into a clear, comprehensive, and custom-tailored event concept.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Design Section */}
            <div className="lg:sticky lg:top-0 lg:z-20">
              <div className="grid grid-cols-1 lg:grid-cols-8 gap-0">
                
                {/* Image */}
                <div className="lg:col-span-5 relative flex justify-end">
                  <img 
                    src="/design.avif" 
                    alt="Wedding Design" 
                    className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[750px] object-cover"
                  />
                </div>
                
                {/* Text */}
                <div className="lg:col-span-3 bg-[#2F4231] flex flex-col justify-start text-left">
                  <div className="max-w-md px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 lg:py-16">
                    <p className="text-base sm:text-lg md:text-xl text-[#E3DFD3]/90 tracking-wider uppercase">02</p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-serif text-[#E3DFD3] mb-4 sm:mb-6 md:mb-8 leading-tight">
                      Design & Planning
                    </h2>
                    <p className="text-sm sm:text-base lg:text-lg text-[#E3DFD3]/80 leading-relaxed">
                    With the concept finalized, we dive into the details. We plan every component, establishing detailed timelines, layouts, and aesthetics. 
                    This step creates a flawless blueprint for your event, ensuring every decision supports the final execution.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Logistics Section */}
            <div className="lg:sticky lg:top-0 lg:z-30">
              <div className="grid grid-cols-1 lg:grid-cols-8 gap-0">
                
                {/* Image */}
                <div className="lg:col-span-5 relative flex justify-end">
                  <img 
                    src="/tent-2.avif" 
                    alt="Wedding Logistics" 
                    className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[750px] object-cover"
                  />
                </div>
                
                {/* Text */}
                <div className="lg:col-span-3 bg-[#2F4231] flex flex-col justify-start text-left">
                  <div className="max-w-md px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 lg:py-16">
                    <p className="text-base sm:text-lg md:text-xl text-[#E3DFD3]/90 tracking-wider uppercase">03</p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-serif text-[#E3DFD3] mb-4 sm:mb-6 md:mb-8 leading-tight">
                      Tentage & Production Setup
                    </h2>
                    <p className="text-sm sm:text-base lg:text-lg text-[#E3DFD3]/80 leading-relaxed">
                    With our in-house production unit, we bring your event design to life.
                    From structures to styling, every setup is crafted for precision and impact.

                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        </div>
      </div>
      
      {/*portfolio*/}
      <div ref={sectionRef} className="w-full bg-[#0c2724] relative py-16 sm:py-20 lg:py-36 overflow-hidden">
        {/* Left decorative image - behind text */}
        {/* REMOVE motion.div and Framer Motion hooks - keep as regular div */}
        <div
          className="absolute mt-18 left-2 sm:left-6 md:left-10 top-1/4 transform -translate-y-1/2 z-10 opacity-30 sm:opacity-40 md:opacity-50 lg:opacity-60"
          // style={{ y: imageTranslateY }} // This line is removed as per the edit hint
        >
          <img 
            src="/rose.avif" 
            alt="Rose Decoration" 
            className="w-32 sm:w-48 md:w-64 lg:w-72 h-auto object-cover"
          />
        </div>
        
        {/* Right decorative image - behind text */}
        {/* REMOVE motion.div and Framer Motion hooks - keep as regular div */}
        <div
          className="absolute mt-32 right-2 sm:right-6 md:right-10 top-1/2 transform -translate-y-1/2 z-10 opacity-30 sm:opacity-40 md:opacity-50 lg:opacity-60"
          // style={{ y: imageTranslateY }} // This line is removed as per the edit hint
        >
          <img 
            src="/lantern.avif" 
            alt="Lantern Decoration" 
            className="w-32 sm:w-48 md:w-64 lg:w-80 h-auto object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center relative z-20">
          <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-light text-[#E3DFD3]/90 mb-6 sm:mb-8 md:mb-12">
            Featured Weddings
          </h3>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-serif text-[#E3DFD3] leading-tight mb-4 sm:mb-6">
            Get inspired by our
          </h1>
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-serif text-[#E3DFD3] leading-tight mb-4 sm:mb-6">
            designs and see how we
          </p>
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-serif text-[#E3DFD3] leading-tight mb-10 sm:mb-12">
            make dreams come true
          </p>

          {/* View Our Portfolio Button */}
          <div>
            <a 
              href="/portfolio"
              className="text-lg sm:text-xl md:text-2xl text-[#E3DFD3] hover:text-[#E3DFD3]/80 underline underline-offset-4 decoration-2 hover:decoration-1 transition-all duration-300"
            >
              View Our Portfolio
            </a>
          </div>
        </div>
      </div>



      {/*reviews*/}
      <Reviews/>

      {/*planning*/}
      <div className="w-full flex flex-col lg:flex-row items-center h-screen bg-[#2f4330]">
        {/* Left Side: Text */}
        <div className="w-full lg:w-1/2 flex justify-center items-center py-12">
          <div className="max-w-xl px-6">
            <h1 className="text-4xl md:text-5xl font-serif text-[#e2dfd2] mb-3">
              Let's Start Planning the
            </h1>
            <h1 className="text-4xl md:text-5xl font-serif text-[#e2dfd2]">
              Best Day of Your Life
            </h1>
            <a
              href="/contact-us"
              className="inline-block mt-8 w-32 h-32 rounded-full px-5 py-12 bg-[#E3DFD3] text-[#2f4330] font-semibold text-lg shadow hover:bg-[#c4bfae] transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
        {/* Right Side: Image */}
        <div className="w-full lg:w-1/2 flex items-center justify-center h-72 lg:h-full">
          <img
            src="/last.avif"
            alt="Wedding Decoration"
            className="w-full h-full object-cover"
          />
        </div>
      </div>



      <Footer />
    </div>
  )
}

export default Home
