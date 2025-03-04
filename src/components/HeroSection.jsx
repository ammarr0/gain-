import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-white py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
        {}
        <div className="max-w-md">
          <p className="text-gray-700 text-sm font-medium mb-2">Tagline</p>
          <h1 className="text-4xl font-medium text-[#007DF0] leading-snug mb-4">
            A Long Headline to turn <br /> visitors into users
          </h1>
          <button className="bg-[#007DF0] text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-300">
            Get Started
          </button>
        </div>

        {}
        <div className="w-full md:w-1/2 h-56 md:h-64 bg-gray-300 rounded-xl"></div>
      </div>
    </section>
  );
};

export default HeroSection;
