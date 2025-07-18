import React from 'react';

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="relative w-full max-w-screen-lg">
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
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 px-5 py-3 bg-[#030923] 
                       text-white font-semibold rounded-2xl hover:bg-blue-700 transition duration-300
                       md:bottom-10 md:left-1/2 md:transform md:-translate-x-1/2 md:-ml-96"
          >
            Browse Jobs
          </button>
        </a>
      </div>
    </div>
  );
}