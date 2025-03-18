// src/pages/home/components/HeroSection.jsx

import React from 'react';

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="relative">
        <video
          src="/Assets/landing.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-[950px] h-[500px] object-cover -mt-16"
        >
          <source src="/Assets/landing.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Button Section */}
        <a href="/freelance-jobs">
          <button
            className="absolute bottom-10 left-1/2 -translate-x-1/2 px-5 py-3 -ml-96 bg-[#030923] 
                       text-white font-semibold rounded-2xl hover:bg-blue-700 transition duration-300"
          >
            Browse Jobs
          </button>
        </a>
      </div>
    </div>
  );
}
