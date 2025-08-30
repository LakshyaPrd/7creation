'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const ServicesPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Replace current history entry instead of pushing new one
    router.replace('/#expertise');
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#2F4231]">
      <div className="text-center">
        <p className="text-lg text-[#E3DFD3] mb-6">Taking you to our expertise section...</p>
        
        {/* Custom Loader */}
        <div className="flex justify-center items-center space-x-2">
          <div className="w-3 h-3 bg-[#E3DFD3] rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
          <div className="w-3 h-3 bg-[#E3DFD3] rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
          <div className="w-3 h-3 bg-[#E3DFD3] rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;