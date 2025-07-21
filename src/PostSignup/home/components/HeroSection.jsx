import React from 'react';

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4" >
      <div className="block md:hidden mb-[100px]">
          <div className="bg-white/90 rounded-2xl shadow-lg py-4 px-3 text-center max-w-xs mx-auto">
            <h1 className="text-2xl font-bold mb-3 text-[#030923]">Welcome to GAIN</h1>
            <p className="text-gray-700 text-base">
              Discover top AI jobs, freelance projects, and upskill with industry-leading courses. 
              Start your journey in the world of AI today!
            </p>
          </div>
        </div>
      <div className="relative w-full max-w-screen-md" >
        
        <video
          src="/assets/landing.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-auto object-cover -mt-16"
        >
          <source src="/assets/landing.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Button Section */}
        <a href="/freelance-jobs" className="hidden md:block">
          <button
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-[#030923] 
                       text-white font-semibold rounded-xl hover:bg-blue-700 transition duration-300
                       md:bottom-8 md:left-1/2 md:transform md:-translate-x-1/2 md:-ml-80"
          >
            Browse Jobs
          </button>
        </a>
      </div>
    </div>
  );
}