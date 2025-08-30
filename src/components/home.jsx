import React from 'react'
import Navbar from './navbar'
import Footer from './footer'

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="w-full bg-[#2F4231]">
        <Navbar />
        <div className="max-w-7xl px-4 sm:px-6 md:px-6 mx-auto text-[#E3DFD3] py-8 sm:py-10 md:py-12">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mt-2 font-sans font-medium leading-tight">Bespoke Weddings</h1>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mt-2 font-sans font-medium leading-tight">Planned to Perfection</h1>
        </div>
      </div>

      {/* Combined section with overlapping video */}
      <section className="w-full bg-[#2F4231] text-[#E3DFD3] relative">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="w-full ">
            <div className="max-w-6xl px-4 sm:px-6 md:px-8 ml-4 sm:ml-6 md:ml-8 lg:ml-28 mx-auto py-8 sm:py-10 md:py-12">
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-xl sm:text-2xl md:text-2xl text-[#E3DFD3]/80 font-serif leading-tight">
                  Full-Service Event Planning & Design Company
                </h2>
              </div>
            </div>
          </div>

          <div className="relative h-[400px] xs:h-[450px] sm:h-[520px] md:h-[600px] lg:h-[800px] xl:h-[800px] 2xl:h-[800px] z-50 lg:col-span-2">
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
            <div className="mx-auto text-left ">
              <h4 className="text-lg sm:text-xl md:text-3xl font-medium mb-6 sm:mb-8 md:mb-12 text-[#2F4231]/80 mt-10">
                We are 7 Creation
              </h4>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif leading-tight text-[#2F4231]">
                We Focus on Every
              </h2>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif leading-tight text-[#2F4231] mt-2">
                Little Detail
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
              We are an award-winning event planning company based in sunny Jaipur.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-[#2F4231]/90 mb-6 sm:mb-7 md:mb-8 lg:mb-10 leading-relaxed">
              From initial concept to the big day, we are here to bring your dream event to life, always keeping your wishes and vision in mind.
            </p>
            
            {/* Learn More Button */}
            <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12">
              <a 
                href="/about"
                className="hover:underline text-base sm:text-lg md:text-xl text-[#2F4231]/90"
              >
                Learn More
              </a>
            </div>
            
            {/* Small image positioned at bottom right */}
            <div className='flex justify-end py-2 sm:py-3 md:py-4 lg:py-6'>
              <img 
                src="/girl.avif" 
                alt="" 
                className="w-32 sm:w-40 md:w-48 lg:w-60 h-40 sm:h-50 md:h-60 lg:h-70 object-cover rounded-md"
              />
            </div>
          </div>


          

          {/* Our Expertise Section */}
          <section className="w-full bg-[#2F4231] py-10 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <h3 className="text-lg sm:text-xl font-serif font-light text-[#E3DFD3]/80 text-left mb-3 sm:mb-4">
              Our Expertise
            </h3>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-sans font-medium leading-tight text-[#E3DFD3]">
              Moments Fused with
            </h1>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-sans font-medium leading-tight text-[#E3DFD3] mb-8 sm:mb-12 lg:mb-16">
              Elegance & Charm
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
                      Planning
                    </h2>
                    <p className="text-sm sm:text-base lg:text-lg text-[#E3DFD3]/80 leading-relaxed">
                      This is the space to describe the service and explain how customers or clients can 
                      benefit from it. It's an opportunity to add a short description that includes relevant 
                      details, like pricing, duration, location and how to book the service.
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
                    className="w-full lg:w-[650px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[750px] object-cover"
                  />
                </div>
                
                {/* Text */}
                <div className="lg:col-span-3 bg-[#2F4231] flex flex-col justify-start text-left">
                  <div className="max-w-md px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 lg:py-16">
                    <p className="text-base sm:text-lg md:text-xl text-[#E3DFD3]/90 tracking-wider uppercase">02</p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-serif text-[#E3DFD3] mb-4 sm:mb-6 md:mb-8 leading-tight">
                      Design
                    </h2>
                    <p className="text-sm sm:text-base lg:text-lg text-[#E3DFD3]/80 leading-relaxed">
                      This is the space to describe the service and explain how customers or clients can 
                      benefit from it. It's an opportunity to add a short description that includes relevant 
                      details, like pricing, duration, location and how to book the service.
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
                    src="/logistic.avif" 
                    alt="Wedding Logistics" 
                    className="w-full lg:w-[800px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[750px] object-cover"
                  />
                </div>
                
                {/* Text */}
                <div className="lg:col-span-3 bg-[#2F4231] flex flex-col justify-start text-left">
                  <div className="max-w-md px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 lg:py-16">
                    <p className="text-base sm:text-lg md:text-xl text-[#E3DFD3]/90 tracking-wider uppercase">03</p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-serif text-[#E3DFD3] mb-4 sm:mb-6 md:mb-8 leading-tight">
                      Logistics
                    </h2>
                    <p className="text-sm sm:text-base lg:text-lg text-[#E3DFD3]/80 leading-relaxed">
                      This is the space to describe the service and explain how customers or clients can 
                      benefit from it. It's an opportunity to add a short description that includes relevant 
                      details, like pricing, duration, location and how to book the service.
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
      <div className="w-full bg-[#0c2724] relative py-16 sm:py-20 lg:py-36 overflow-hidden">
        {/* Left decorative image - behind text */}
        <div className="absolute left-2 sm:left-6 md:left-10 top-1/4 transform -translate-y-1/2 z-10 opacity-30 sm:opacity-40 md:opacity-50 lg:opacity-60">
          <img 
            src="/rose.avif" 
            alt="Rose Decoration" 
            className="w-32 sm:w-48 md:w-64 lg:w-72 h-auto object-cover"
          />
        </div>
        
        {/* Right decorative image - behind text */}
        <div className="absolute right-2 sm:right-6 md:right-10 top-1/2 transform -translate-y-1/2 z-10 opacity-30 sm:opacity-40 md:opacity-50 lg:opacity-60">
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
      <div className="w-full bg-[#e2dfd2] relative ">
        <div className="flex items-center justify-between sticky top-0 mb-32">
          <div className='px-4 sm:px-6 md:px-8 sticky top-8 z-10'>
            <h4 className="text-xs sm:text-lg md:text-2xl lg:text-2xl xl:text-2xl font-serif text-[#2f4330]/90 leading-tight mb-2">
              What Our Clients Say
            </h4>
            <p className="text-base sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-serif text-[#2f4330] leading-tight mb-4 sm:mb-6">
              Letters From
              <br />
              Our Happy Clients
            </p>
          </div>

          <div className="flex-shrink-0 z-10 ">
            <img 
              src="/review-1.avif" 
              alt="Client Review" 
              className="object-cover h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]"
            />
          </div>
        </div>
        <div className="flex flex-col items-center mt-10 space-y-16 sticky top-0">
          {/* First Review */}
          <div className="w-[350px] sm:w-[550px] lg:w-[700px] bg-white overflow-hidden pr-28 pt-10 pl-8 sticky z-20 top-36 mb-16 pb-32">
            {/* Image Section */}
            <div className="h-64 sm:h-72 lg:h-80 overflow-hidden">
              <img 
                src="/review-2.avif"
                alt="Review 1"
                className="w-lg h-full object-cover"
              />
            </div>
            {/* Content Section */}
            <div className="py-8 w-lg">
              <p className="text-base sm:text-lg text-[#2f4330] leading-relaxed mb-6 italic">
                "Very professional and attentive to detail. They made our wedding day truly special and stress-free. Highly recommend!"
              </p>
              <div className="border-t border-[#e2dfd2] pt-4">
                <h5 className="font-serif font-semibold text-[#2f4330] text-lg sm:text-xl">
                  7 Creation Client
                </h5>
                <p className="text-sm sm:text-base text-[#2f4330]/70 mt-2">
                  Wedding Event
                </p>
              </div>
            </div>
          </div>

          {/* Second Review */}
          <div className="w-[350px] sm:w-[550px] lg:w-[700px] bg-[#2f4330] overflow-hidden pr-28 pt-10 pl-8 sticky z-30 top-36 mb-16 py-32">
            {/* Image Section */}
            <div className="h-64 sm:h-72 lg:h-80 overflow-hidden">
              <img 
                src="/review-3.avif"
                alt="Review 1"
                className="w-lg h-full object-cover"
              />
            </div>
            {/* Content Section */}
            <div className="py-8 w-lg">
              <p className="text-base sm:text-lg text-[#e2dfd2] leading-relaxed mb-6 italic">
                "Very professional and attentive to detail. They made our wedding day truly special and stress-free. Highly recommend!"
              </p>
              <div className="border-t border-[#e2dfd2] pt-4">
                <h5 className="font-serif font-semibold text-[#e2dfd2] text-lg sm:text-xl">
                  7 Creation Client
                </h5>
                <p className="text-sm sm:text-base text-[#e2dfd2]/70 mt-2">
                  Wedding Event
                </p>
              </div>
            </div>
          </div>

          {/* Third Review */}
          <div className="w-[350px] sm:w-[550px] lg:w-[700px] bg-white overflow-hidden pr-28 pt-10 pl-8 sticky z-40 top-36 mb-16 py-32">
            {/* Image Section */}
            <div className="h-64 sm:h-72 lg:h-80 overflow-hidden">
              <img 
                src="/review-4.avif"
                alt="Review 1"
                className="w-lg h-full object-cover"
              />
            </div>
            {/* Content Section */}
            <div className="py-8 w-lg">
              <p className="text-base sm:text-lg text-[#2f4330] leading-relaxed mb-6 italic">
                "Very professional and attentive to detail. They made our wedding day truly special and stress-free. Highly recommend!"
              </p>
              <div className="border-t border-[#e2dfd2] pt-4">
                <h5 className="font-serif font-semibold text-[#2f4330] text-lg sm:text-xl">
                  7 Creation Client
                </h5>
                <p className="text-sm sm:text-base text-[#2f4330]/70 mt-2">
                  Wedding Event
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*planning*/}
      <div className="w-full flex h-screen relative pt-16 bg-[#2f4330]">
        {/* Left Green Section - smaller width */}
        <div className="bg-[#2f4330] w-4/12 relative z-10"></div>

        {/* Right Image Section - wider width with reduced opacity */}
        <div className="w-8/12 relative z-10">
          <img
            src="/last.avif"
            alt="Wedding Decoration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        

        {/* Text Positioned Over Both */}
        <div className="absolute top-1/3 left-12 transform -translate-y-1/2 z-20 max-w-7xl px-28 mt-8">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl font-serif text-[#e2dfd2] leading-tight">
            Let's Start Planning the
          </h1>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl font-serif text-[#e2dfd2] leading-tight">
            Best Day of Your Life
          </h1>
        </div>
      </div>



      <Footer />
    </div>
  )
}

export default Home
