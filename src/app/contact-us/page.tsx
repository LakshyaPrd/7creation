import React from 'react'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'

const Page = () => {
  return (
    <div className="min-h-screen">
      {/* upper section (STATIC) */}
      <div className="w-full bg-[#2F4231]">
        <Navbar />
        <div className="max-w-7xl px-8 mx-auto text-[#E3DFD3] py-10">
          <p className="text-4xl">Contact Us</p>
          <h1 className="text-8xl mt-2 font-sans">Let&apos;s Start Planning</h1>
        </div>
      </div>

      {/* form + right-bleed image */}
      <div className="w-full bg-[#E3DFD3]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left: Form */}
          <div className="w-full">
            <div className="max-w-5xl px-8 mx-auto py-12">
              <form className="space-y-6 p-8 w-full">
                <div>
                  <label htmlFor="name" className="block text-[#2F4231] font-medium mb-2 text-xl">Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    className="w-full border border-[#2F4231]/20 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2F4231]"
                  />
                </div>
                <div>
                  <label htmlFor="mobile" className="block text-[#2F4231] font-medium mb-2 text-xl">Mobile Number</label>
                  <input
                    type="tel"
                    id="mobile"
                    placeholder="Enter your phone number"
                    className="w-full border border-[#2F4231]/20 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2F4231]"
                  />
                </div>
                <div>
                  <label htmlFor="description" className="block text-[#2F4231] font-medium mb-2 text-xl">Share your vision with us</label>
                  <textarea
                    id="description"
                    rows={3}
                    placeholder="Write your message here..."
                    className="w-full border border-[#2F4231]/20 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2F4231]"
                  />
                </div>
                <div>
                  <label htmlFor="vision" className="block text-[#2F4231] font-medium mb-2 text-xl">Tell us a little bit about yourself</label>
                  <textarea
                    id="vision"
                    rows={3}
                    placeholder="Write your message here..."
                    className="w-full border border-[#2F4231]/20 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2F4231]"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 text-[#2F4231] py-2 rounded-3xl hover:bg-[#2F4231] hover:text-white transition border border-[#2F4231]"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>

          {/* Right: Full-bleed image */}
          <div className="relative h-[360px] sm:h-[440px] lg:h-auto lg:min-h-[560px]">
            <img
              src="/candle.avif"
              alt="Candle"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Page
