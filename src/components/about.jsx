import React from 'react'
import Navbar from './navbar'
import Footer from './footer'

const About = () => {
  return (
    <div className='min-h-screen'>
      
      <div className="w-full bg-[#2F4231]">
        <Navbar />
        <div className="w-full flex flex-col lg:flex-row relative">
          {/* Left scrolling content */}
          <div className="bg-[#2F4231] w-full lg:w-7/12 relative">
            {/* Hero Section */}
            <div className="h-auto lg:h-screen flex flex-col justify-start pt-8 lg:pb-0">
              <div className="px-4 sm:px-6 lg:px-12 xl:px-36">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl 2xl:text-9xl font-serif text-[#E3DFD3] leading-tight mb-4">
                  We Are
                </h1>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl 2xl:text-9xl font-serif text-[#E3DFD3] leading-tight">
                  7 Creation
                </h1>
              </div>
              
              {/* Bottom Light Section */}
              <div className="mt-8 lg:mt-auto bg-[#E3DFD3] px-4 sm:px-6 lg:px-12 xl:px-36 py-8 sm:py-10 lg:py-12 xl:py-16">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#2F4231] font-light mb-4 sm:mb-6">
                  Fulfilling Your Dream Is Our Passion
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-[#2F4231] max-w-lg leading-relaxed">
                  This is a space to share more about the business: who&apos;s behind it, 
                  what it does and what this site has to offer. It&apos;s an opportunity 
                  to tell the story behind the business or describe a special service 
                  or product it offers.
                </p>
              </div>
            </div>

            {/* Mobile/Tablet Image Section - Shows below paragraph on smaller screens */}
            <div className="block lg:hidden relative">
              <img 
                src="/about1.avif" 
                alt="Wedding Decoration" 
                className="w-full h-[400px] sm:h-[500px] md:h-[600px] object-cover" 
              />
            </div>

            {/* Scrolling content that goes under the fixed image - Desktop only */}
            <div className="hidden lg:block bg-[#E3DFD3] relative z-10">
              {/* Spacer sections for card scroll duration */}
              <div className="h-screen"></div>
              <div className="h-screen"></div>
              <div className="h-screen"></div>
              <div className="h-screen"></div>
            </div>
          </div>

          {/* Right fixed image - Only visible on large screens */}
          <div className="hidden lg:block w-5/12 sticky top-0 h-screen">
            <img 
              src="/about1.avif" 
              alt="Wedding Decoration" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>

        {/* Mobile Team Cards Section - Simple layout without sticky effect */}
        <div className="block lg:hidden bg-[#E3DFD3] py-12">
          <div className="space-y-8 px-4">
            {/* Card 1 - CEO */}
            <div className="flex justify-center">
              <div className="bg-[#2F4231] text-center px-6 py-8 w-80 shadow-2xl rounded-lg">
                <img
                  src="/ceo.jpg"
                  alt="CEO"
                  className="w-full h-44 object-cover mb-6 rounded"
                />
                <h3 className="text-2xl text-[#E3DFD3] mb-2 font-serif">Rohit Sharma</h3>
                <p className="text-lg text-[#E3DFD3] opacity-90 mb-2">CEO & Founder</p>
                <p className="text-sm text-[#E3DFD3] opacity-70 mb-4">
                  ceo@mysite.com
                </p>
                <p className="text-sm text-[#E3DFD3] opacity-80 leading-relaxed">
                  Visionary leader with 5+ years in event management and creative design.
                </p>
              </div>
            </div>

            {/* Card 2 - Creative Director */}
            <div className="flex justify-center">
              <div className="bg-white text-center px-6 py-8 w-80 ">
                <img
                  src="/creative.png"
                  alt="Creative Director"
                  className="w-full h-[250px] object-cover mb-6 rounded"
                />
                <h3 className="text-2xl text-[#2F4231] mb-2 font-serif">Rahul Sharma</h3>
                <p className="text-lg text-[#2F4231] opacity-90 mb-2">Creative Director</p>
                <p className="text-sm text-[#2F4231] opacity-70 mb-4">
                  jane@mysite.com
                </p>
                <p className="text-sm text-[#2F4231] opacity-80 leading-relaxed">
                  Award-winning designer specializing in luxury weddings and corporate events.
                </p>
              </div>
            </div>

            {/* Card 3 - Operations Manager */}
            <div className="flex justify-center">
              <div className="bg-[#2F4231] text-center px-6 py-8 w-80 shadow-2xl rounded-lg">
                <img
                  src="/operation.jpg"
                  alt="Operations Manager"
                  className="w-full h-[250px] object-cover mb-6 rounded"
                />
                <h3 className="text-2xl text-[#E3DFD3] mb-2 font-serif">Lakshya Pradhan</h3>
                <p className="text-lg text-[#E3DFD3] opacity-90 mb-2">Operations Manager</p>
                <p className="text-sm text-[#E3DFD3] opacity-70 mb-4">
                  mike@mysite.com
                </p>
                <p className="text-sm text-[#E3DFD3] opacity-80 leading-relaxed">
                  Expert in logistics and project management, ensuring flawless event execution.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Sticky Cards Section - Only on large screens */}
        <div className="hidden lg:block absolute top-0 left-0 w-full pointer-events-none z-50" style={{height: 'calc(500vh)'}}>
          {/* Container with top padding to start cards after hero section */}
          <div className="relative" style={{height: 'calc(500vh)'}}>
            {/* Desktop padding: original spacing */}
            <div style={{height: '150vh'}}></div>
            
            {/* Card 1 - CEO */}
            <div className="sticky top-20 z-10 flex justify-center items-center pointer-events-none" style={{height: '100vh'}}>
              <div className="bg-[#2F4231] text-center px-10 py-10 h-[550px] w-[400px] pointer-events-auto mx-4">
                <img
                  src="/ceo.jpg"
                  alt="CEO"
                  className="w-full h-48 object-cover mb-6 rounded"
                />
                <h3 className="text-2xl text-[#E3DFD3] mb-2 font-serif">Rohit Sharma</h3>
                <p className="text-lg text-[#E3DFD3] opacity-90 mb-2">CEO & Founder</p>
                <p className="text-sm text-[#E3DFD3] opacity-70 mb-4">
                  ceo@mysite.com
                </p>
                <p className="text-sm text-[#E3DFD3] opacity-80 leading-relaxed">
                  Visionary leader with 5+ years in event management and creative design.
                </p>
              </div>
            </div>

            {/* Card 2 - Creative Director */}
            <div className="sticky top-20 z-20 flex justify-center items-center pointer-events-none" style={{height: '100vh'}}>
              <div className="bg-white text-center px-10 py-10 h-[550px] w-[400px] pointer-events-auto mx-4">
                <img
                  src="/creative.png"
                  alt="Creative Director"
                  className="w-full h-[250px] object-cover mb-6 rounded"
                />
                <h3 className="text-2xl text-[#2F4231] mb-2 font-serif">Rahul Sharma</h3>
                <p className="text-lg text-[#2F4231] opacity-90 mb-2">Creative Director</p>
                <p className="text-sm text-[#2F4231] opacity-70 mb-4">
                  jane@mysite.com
                </p>
                <p className="text-sm text-[#2F4231] opacity-80 leading-relaxed">
                  Award-winning designer specializing in luxury weddings and corporate events.
                </p>
              </div>
            </div>

            {/* Card 3 - Operations Manager */}
            <div className="sticky top-20 z-30 flex justify-center items-center pointer-events-none" style={{height: '100vh'}}>
              <div className="bg-[#2F4231] text-center px-10 py-10 h-[550px] w-[400px] pointer-events-auto mx-4">
                <img
                  src="/operation.jpg"
                  alt="Operations Manager"
                  className="w-full h-48 object-cover mb-6 rounded"
                />
                <h3 className="text-2xl text-[#E3DFD3] mb-2 font-serif">Lakshya Pradhan</h3>
                <p className="text-lg text-[#E3DFD3] opacity-90 mb-2">Operations Manager</p>
                <p className="text-sm text-[#E3DFD3] opacity-70 mb-4">
                  mike@mysite.com
                </p>
                <p className="text-sm text-[#E3DFD3] opacity-80 leading-relaxed">
                  Expert in logistics and project management, ensuring flawless event execution.
                </p>
              </div>
            </div>
            
          </div>
        </div>

      </div>

      {/* Packages Section */}
      <section id="packages" className="w-full bg-[#E3DFD3] py-20">
        <div className="max-w-7xl mx-auto px-8">
          {/* Section Header */}
          <div className="mb-16">
            <p className="text-[#2F4231] text-3xl mb-4">Packages</p>
            <h2 className="text-5xl md:text-6xl lg:text-8xl font-serif text-[#2F4231] leading-tight">
              Choose the Plan That
            </h2>
            <h2 className="text-5xl md:text-6xl lg:text-8xl font-serif text-[#2F4231] leading-tight">
              Suits You the Best
            </h2>
          </div>

          {/* Service Cards - Alternating Layout */}
          <div className="space-y-22">
            
            {/* Package 1 - Full Wedding Planning (Image Left, Text Right) */}
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="lg:w-1/2">
                <div className="h-80 lg:h-[650px] bg-gray-200 overflow-hidden">
                  <img 
                    src="/full-wedding.avif" 
                    alt="Full Wedding Planning"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="mb-4">
                  <span className="text-2xl text-[#2F4231]">01</span>
                </div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#2F4231] mb-4 leading-tight">
                  Full Wedding Planning
                </h3>
                <p className="text-xl text-[#2F4231] opacity-90 mb-6">
                  Leave it to us
                </p>
                <p className="text-base text-[#2F4231] opacity-90 leading-relaxed">
                  Describe the service and how customers or clients can benefit from it. This is the place to add a short description with relevant details, like pricing, duration and how to book.
                </p>
              </div>
            </div>

            {/* Package 2 - Partial Wedding Planning (Image Right, Text Left) */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12">
              <div className="lg:w-1/2">
                <div className="h-80 lg:h-[650px] bg-gray-200 overflow-hidden">
                  <img 
                    src="/partial-wedding.avif" 
                    alt="Partial Wedding Planning"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="mb-4">
                  <span className="text-2xl text-[#2F4231]">02</span>
                </div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#2F4231] mb-4 leading-tight">
                  Partial Wedding Planning
                </h3>
                <p className="text-xl text-[#2F4231] opacity-90 mb-6">
                  We'll help you along the way
                </p>
                <p className="text-base text-[#2F4231] opacity-90 leading-relaxed">
                  Describe the service and how customers or clients can benefit from it. This is the place to add a short description with relevant details, like pricing, duration and how to book.
                </p>
              </div>
            </div>

            {/* Package 3 - Day-of Coordination (Image Left, Text Right) */}
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="lg:w-1/2">
                <div className="h-80 lg:h-[650px] bg-gray-200 overflow-hidden">
                  <img 
                    src="/customized-event.avif" 
                    alt="Day-of Coordination"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="mb-4">
                  <span className="text-2xl text-[#2F4231]">03</span>
                </div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#2F4231] mb-4 leading-tight">
                  Customized Event
                </h3>
                <p className="text-xl text-[#2F4231] opacity-90 mb-6">
                  Perfect execution on your big day
                </p>
                <p className="text-base text-[#2F4231] opacity-90 leading-relaxed">
                  Describe the service and how customers or clients can benefit from it. This is the place to add a short description with relevant details, like pricing, duration and how to book.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <div className="w-full flex flex-col lg:flex-row h-auto lg:h-full relative bg-[#2f4330] min-h-[600px] sm:min-h-[700px] md:min-h-[800px] lg:min-h-[950px]">
        {/* Left Green Section - smaller width */}
        <div className="bg-[#2f4330] w-full lg:w-4/12 relative z-10 h-32 lg:h-auto"></div>

        {/* Right Image Section - wider width with reduced opacity */}
        <div className="w-full lg:w-8/12 relative z-10 order-first lg:order-last">
          <img
            src="/special.avif"
            alt="Wedding Decoration"
            className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55"></div>
        </div>
        

        {/* Text Positioned Over Both */}
        <div className="absolute top-1/2 lg:top-1/2 transform -translate-y-1/2 z-20 w-full max-w-none lg:max-w-6xl px-4 sm:px-6 md:px-8 lg:px-28">
          <p className='text-[#e2dfd2] text-lg sm:text-xl md:text-2xl lg:text-3xl text-medium mb-2'>Share your vision with us</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl font-serif text-[#e2dfd2] leading-tight">
            We'll Create the
          </h1>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl font-serif text-[#e2dfd2] leading-tight">
            Best Plan For
          </h1>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl font-serif text-[#e2dfd2] leading-tight">
            Your Special
          </h1>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl font-serif text-[#e2dfd2] leading-tight">
            Day
          </h1>
          
          {/* Get Started Button */}
          <div className="mt-6 sm:mt-8 md:mt-12 lg:mt-16 flex justify-center lg:justify-center">
            <button className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full bg-[#2f4330] text-[#e2dfd2] text-base sm:text-lg md:text-xl lg:text-2xl font-medium border-2 border-[#e2dfd2] transition-all duration-300 hover:bg-[#e2dfd2] hover:text-[#2f4330] flex items-center justify-center shadow-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default About
