import React from 'react'

function Reviews() {
  return (
    <div className="w-full bg-[#e2dfd2] relative">
        <div className="sticky top-0 z-0 pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-16 sm:pb-20 md:pb-24 lg:pb-32 bg-[#e2dfd2]">
          <div className='px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 sticky top-8 z-10'>
            <h4 className="text-xs sm:text-lg md:text-2xl lg:text-2xl xl:text-2xl font-serif text-[#2f4330]/90 leading-tight mb-2">
              What Our Clients Say
            </h4>
            <p className="text-base sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-serif text-[#2f4330] leading-tight mb-4 sm:mb-6">
              Letters From
              <br />
              Our Happy Clients
            </p>
          </div>

          
        </div>
        <div className="flex flex-col items-center lg:items-end lg:pr-8 xl:pr-16 2xl:pr-24 mt-8 sm:mt-10 space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-24 xl:space-y-36">
          {/* First Review */}
          <div className="w-[85%] max-w-[280px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[480px] xl:max-w-[500px] bg-white overflow-hidden px-6 sm:px-7 md:px-8 pt-8 sm:pt-9 md:pt-10 pb-6 sm:pb-7 md:pb-8 sticky top-4 sm:top-6 md:top-8 z-20 shadow-md">
            {/* Image Section */}
            <div className="h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 overflow-hidden">
              <img 
                src="/review-2.avif"
                alt="Review 1"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Content Section */}
            <div className="py-4 sm:py-6 md:py-8">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#2f4330] leading-relaxed italic">
                "Very professional and attentive to detail. They made our wedding day truly special and stress-free. Highly recommend!,Very professional and attentive to detail. They made our wedding day truly special and stress-free. Highly recommend!"
              </p>
            </div>
          </div>

          {/* Second Review */}
          <div className="w-[85%] max-w-[280px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[480px] xl:max-w-[500px] bg-[#2f4330] overflow-hidden px-6 sm:px-7 md:px-8 pt-8 sm:pt-9 md:pt-10 pb-6 sm:pb-7 md:pb-8 sticky top-4 sm:top-6 md:top-8 z-30 shadow-lg">
            {/* Image Section */}
            <div className="h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 overflow-hidden">
              <img 
                src="/review-3.avif"
                alt="Review 1"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Content Section */}
            <div className="py-4 sm:py-6 md:py-8">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#e2dfd2] leading-relaxed italic">
                "Very professional and attentive to detail. They made our wedding day truly special and stress-free. Highly recommend!,Very professional and attentive to detail. They made our wedding day truly special and stress-free. Highly recommend!"
              </p>
            </div>
          </div>

          {/* Third Review */}
          <div className="w-[85%] max-w-[280px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[480px] xl:max-w-[500px] bg-white overflow-hidden px-6 sm:px-7 md:px-8 pt-8 sm:pt-9 md:pt-10 pb-6 sm:pb-7 md:pb-8 sticky top-4 sm:top-6 md:top-8 z-40 shadow-md mb-16 sm:mb-20 md:mb-24">
            {/* Image Section */}
            <div className="h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 overflow-hidden">
              <img 
                src="/review-4.avif"
                alt="Review 1"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Content Section */}
            <div className="py-4 sm:py-6 md:py-8">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#2f4330] leading-relaxed italic">
                "Very professional and attentive to detail. They made our wedding day truly special and stress-free. Highly recommend!,Very professional and attentive to detail. They made our wedding day truly special and stress-free. Highly recommend!"
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Reviews