import React from 'react'
import Navbar from './navbar'
import Footer from './footer'

const Portfolio = () => {
  return (
    <div className='min-h-screen'>
      <div className="w-full bg-[#2F4231]">
        <Navbar />
        <div className="w-full flex flex-col lg:flex-row relative">
          {/* Left scrolling content */}
          <div className="bg-[#2F4231] w-full lg:w-1/2 relative">
            {/* Hero Section */}
            <div className="h-auto lg:h-screen flex flex-col justify-start pt-8  lg:pb-0">
              <div className="px-4 sm:px-6 lg:px-12 xl:px-36">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl 2xl:text-8xl font-serif text-[#E3DFD3] leading-tight mb-4">
                  Featured
                </h1>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl 2xl:text-8xl font-serif text-[#E3DFD3] leading-tight">
                  Weddings
                </h1>
              </div>
              
              {/* Bottom Light Section */}
              <div className="mt-10 lg:mt-auto bg-[#E3DFD3] px-4 sm:px-6 lg:px-12 xl:px-36 py-8 sm:py-10 lg:py-12 xl:py-32">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#2F4231] font-light mb-4 sm:mb-6">
                  Fulfilling Your Dream Is Our Passion
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-[#2F4231] max-w-lg leading-relaxed">
                  This is a space to share more about the business: who's behind it, 
                  what it does and what this site has to offer. It's an opportunity 
                  to tell the story behind the business or describe a special service 
                  or product it offers.
                </p>
              </div>
            </div>

            {/* Mobile/Tablet Image Section */}
            <div className="block lg:hidden relative">
              <video 
                src="/portfolio.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover" 
              />
            </div>

            {/* Mobile Cards Section */}
            <div className="block md:hidden bg-[#E3DFD3] py-12">
              <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-4 overflow-x-auto">
                {/* Card 1 */}
                <div className="flex justify-center flex-shrink-0">
                  <div className="bg-white text-left px-6 py-8 w-80 sm:w-72 shadow-2xl rounded-lg">
                    <img
                      src="/nature.avif"
                      alt="Nature Inspired Wedding"
                      className="w-full h-48 object-cover mb-6 rounded"
                    />
                    <h3 className="text-2xl text-[#2F4231] mb-2 font-serif">Nature Inspired</h3>
                    <p className="text-lg text-[#2F4231] opacity-90 mb-2">Jia & Heng's</p>
                    <p className="text-sm text-[#2F4231] opacity-70 mb-2">
                      Venue: Pradhan Vatika
                    </p>
                    <p className="text-sm text-[#2F4231] opacity-80 leading-relaxed">
                      Guest: 500
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="flex justify-center flex-shrink-0">
                  <div className="bg-white text-left px-6 py-8 w-80 sm:w-72 shadow-2xl rounded-lg">
                    <img
                      src="/floral.avif"
                      alt="Floral Setting Wedding"
                      className="w-full h-48 object-cover mb-6 rounded"
                    />
                    <h3 className="text-2xl text-[#2F4231] mb-2 font-serif">Floral Setting</h3>
                    <p className="text-lg text-[#2F4231] opacity-90 mb-2">Brianna & Amir's</p>
                    <p className="text-sm text-[#2F4231] opacity-70 mb-2">
                      Venue: All Sons Regency
                    </p>
                    <p className="text-sm text-[#2F4231] opacity-80 leading-relaxed">
                      Guests: 150
                    </p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="flex justify-center flex-shrink-0">
                  <div className="bg-white text-left px-6 py-8 w-80 sm:w-72 shadow-2xl rounded-lg">
                    <img
                      src="/ocean.avif"
                      alt="Ocean Grace Wedding"
                      className="w-full h-48 object-cover mb-6 rounded"
                    />
                    <h3 className="text-2xl text-[#2F4231] mb-2 font-serif">Ocean Grace</h3>
                    <p className="text-lg text-[#2F4231] opacity-90 mb-2">Megan & Gill's</p>
                    <p className="text-sm text-[#2F4231] opacity-70 mb-2">
                      Venue: Ocean View Resort
                    </p>
                    <p className="text-sm text-[#2F4231] opacity-80 leading-relaxed">
                      Guests: 200
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ✅ Tablet Horizontal Layout - Fixed */}
            <div className="hidden md:flex lg:hidden bg-[#E3DFD3] py-12 px-6 gap-4 md:gap-6 justify-center flex-wrap">
              {/* Card 1 */}
              <div className="bg-white text-left px-6 py-8 w-full md:w-80 max-w-sm shadow-2xl rounded-lg">
                <img
                  src="/nature.avif"
                  alt="Nature Inspired Wedding"
                  className="w-full h-48 object-cover mb-6 rounded"
                />
                <h3 className="text-xl md:text-2xl text-[#2F4231] mb-2 font-serif">Nature Inspired</h3>
                <p className="text-base md:text-lg text-[#2F4231] opacity-90 mb-2">Jia & Heng's</p>
                <p className="text-sm text-[#2F4231] opacity-70 mb-2">Venue: Pradhan Vatika</p>
                <p className="text-sm text-[#2F4231] opacity-80 leading-relaxed">Guests: 500</p>
              </div>

              {/* Card 2 */}
              <div className="bg-white text-left px-6 py-8 w-full md:w-80 max-w-sm shadow-2xl rounded-lg">
                <img
                  src="/floral.avif"
                  alt="Floral Setting Wedding"
                  className="w-full h-48 object-cover mb-6 rounded"
                />
                <h3 className="text-xl md:text-2xl text-[#2F4231] mb-2 font-serif">Floral Setting</h3>
                <p className="text-base md:text-lg text-[#2F4231] opacity-90 mb-2">Brianna & Amir's</p>
                <p className="text-sm text-[#2F4231] opacity-70 mb-2">Venue: All Sons Regency</p>
                <p className="text-sm text-[#2F4231] opacity-80 leading-relaxed">Guests: 150</p>
              </div>

              {/* Card 3 */}
              <div className="bg-white text-left px-6 py-8 w-full md:w-80 max-w-sm shadow-2xl rounded-lg">
                <img
                  src="/ocean.avif"
                  alt="Ocean Grace Wedding"
                  className="w-full h-48 object-cover mb-6 rounded"
                />
                <h3 className="text-xl md:text-2xl text-[#2F4231] mb-2 font-serif">Ocean Grace</h3>
                <p className="text-base md:text-lg text-[#2F4231] opacity-90 mb-2">Megan & Gill's</p>
                <p className="text-sm text-[#2F4231] opacity-70 mb-2">Venue: Ocean View Resort</p>
                <p className="text-sm text-[#2F4231] opacity-80 leading-relaxed">Guests: 200</p>
              </div>
            </div>

            {/* Desktop - Add scrolling content for timing */}
            <div className="hidden lg:block bg-[#E3DFD3] relative z-10">
              <div className="h-screen"></div>
              <div className="h-32 lg:h-40 xl:h-48"></div>
              <div className="h-screen"></div>
              <div className="h-32 lg:h-40 xl:h-48"></div>
              <div className="h-screen"></div>
              <div className="h-32 lg:h-40 xl:h-48"></div>
            </div>
          </div>

          {/* Right fixed video - Desktop only */}
          <div className="hidden lg:block w-1/2 sticky top-0 h-screen">
            <video 
              src="/portfolio.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Desktop Sticky Cards - UPDATED WITH RESPONSIVE SPACERS */}
        <div className="hidden lg:block absolute top-0 left-0 w-full pointer-events-none z-50 lg:h-[450vh] xl:h-[480vh] 2xl:h-[500vh]">
          <div className="relative lg:h-[450vh] xl:h-[480vh] 2xl:h-[500vh]">
            {/* Responsive Spacer */}
            <div className="lg:h-[120vh] xl:h-[125vh] 2xl:h-[130vh]"></div>
            
            {/* Card 1 - Left aligned with margin */}
            <div className="sticky top-0 z-10 flex justify-start items-center pointer-events-none" style={{height: '100vh'}}>
              <div className="bg-white text-left px-6 lg:px-8 w-[300px] md:w-[350px] lg:w-[420px] xl:w-[430px] h-[550px] lg:h-[600px] xl:h-[650px] pointer-events-auto ml-4 lg:ml-8 xl:ml-12">  
                <div className='flex items-start gap-4'>
                  <img
                    src="/nature.avif"
                    alt="Nature Inspired"
                    className="w-[250px] lg:w-[280px] xl:w-[320px] h-[250px] lg:h-[280px] xl:h-[320px] object-cover"
                  />
                  <h3 className='text-2xl lg:text-3xl xl:text-4xl font-light text-[#2F4231] pt-2'>01</h3>
                </div>
                
                <div className="mt-6 lg:mt-8 px-2">
                  <h3 className="text-2xl lg:text-3xl xl:text-4xl text-[#2F4231] mb-4 lg:mb-6 font-serif leading-tight">Nature Inspired</h3>
                  <p className="text-lg lg:text-xl xl:text-2xl text-[#2F4231] mb-3 lg:mb-4 font-light">Jia & Heng's</p>
                  <p className="text-sm lg:text-base xl:text-lg text-[#2F4231] mb-2 lg:mb-3 opacity-70">Venue: Sierra Gardens</p>
                  <p className="text-sm lg:text-base xl:text-lg text-[#2F4231] leading-relaxed mb-4 lg:mb-6 opacity-80">Guests: 250</p>
                  
                  <div className="mt-auto">
                    <a href="#" className="text-[#2F4231] underline text-sm lg:text-base xl:text-lg font-medium hover:opacity-70 transition-opacity">
                      View Event
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - Centered with horizontal margins */}
            <div className="sticky top-0 z-20 flex justify-center items-center pointer-events-none" style={{height: '100vh'}}>
              <div className="bg-white text-left px-6 lg:px-8 w-[350px] lg:w-[420px] xl:w-[420px] h-[550px] lg:h-[600px] xl:h-[650px] pointer-events-auto mx-4 lg:mx-8 xl:mx-12">
                <div className='flex items-start gap-4'>
                  <img
                    src="/floral.avif"
                    alt="Floral Setting"
                    className="w-[250px] lg:w-[280px] xl:w-[320px] h-[250px] lg:h-[280px] xl:h-[320px] object-cover"
                  />
                  <h3 className='text-2xl lg:text-3xl xl:text-4xl font-light text-[#2F4231] pt-2'>02</h3>
                </div>
                
                <div className="mt-6 lg:mt-8 px-2">
                  <h3 className="text-2xl lg:text-3xl xl:text-4xl text-[#2F4231] mb-4 lg:mb-6 font-serif leading-tight">Floral Setting</h3>
                  <p className="text-lg lg:text-xl xl:text-2xl text-[#2F4231] mb-3 lg:mb-4 font-light">Brianna & Amir's</p>
                  <p className="text-sm lg:text-base xl:text-lg text-[#2F4231] mb-2 lg:mb-3 opacity-70">Venue: All Sons Regency</p>
                  <p className="text-sm lg:text-base xl:text-lg text-[#2F4231] leading-relaxed mb-4 lg:mb-6 opacity-80">Guests: 150</p>
                  
                  <div className="mt-auto">
                    <a href="#" className="text-[#2F4231] underline text-sm lg:text-base xl:text-lg font-medium hover:opacity-70 transition-opacity">
                      View Event
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 - Right aligned with margin */}
            <div className="sticky top-0 z-30 flex justify-end items-center pointer-events-none" style={{height: '100vh'}}>
              <div className="bg-white text-left px-6 lg:px-8 w-[350px] lg:w-[420px] xl:w-[430px] h-[550px] lg:h-[600px] xl:h-[650px] pointer-events-auto mr-4 lg:mr-8 xl:mr-12">
                <div className='flex items-start gap-4'>
                  <img
                    src="/ocean.avif"
                    alt="Ocean Grace"
                    className="w-[250px] lg:w-[280px] xl:w-[320px] h-[250px] lg:h-[280px] xl:h-[320px] object-cover"
                  />
                  <h3 className='text-2xl lg:text-3xl xl:text-4xl font-light text-[#2F4231] pt-2'>03</h3>
                </div>
                
                <div className="mt-6 lg:mt-8 px-2">
                  <h3 className="text-2xl lg:text-3xl xl:text-4xl text-[#2F4231] mb-4 lg:mb-6 font-serif leading-tight">Ocean Grace</h3>
                  <p className="text-lg lg:text-xl xl:text-2xl text-[#2F4231] mb-3 lg:mb-4 font-light">Megan & Gill's</p>
                  <p className="text-sm lg:text-base xl:text-lg text-[#2F4231] mb-2 lg:mb-3 opacity-70">Venue: Ocean View Resort</p>
                  <p className="text-sm lg:text-base xl:text-lg text-[#2F4231] leading-relaxed mb-4 lg:mb-6 opacity-80">Guests: 200</p>
                  
                  <div className="mt-auto">
                    <a href="#" className="text-[#2F4231] underline text-sm lg:text-base xl:text-lg font-medium hover:opacity-70 transition-opacity">
                      View Event
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Responsive Bottom Spacer - UPDATED */}
            <div className="lg:h-24 xl:h-32 2xl:h-40"></div>
          </div>
        </div>
      </div>
      
      <div className='bg-[#E3DFD3] py-20'>
        <div className="max-w-7xl mx-auto px-4"></div>
      </div>
      
      <Footer />
    </div>
  )
}

export default Portfolio
