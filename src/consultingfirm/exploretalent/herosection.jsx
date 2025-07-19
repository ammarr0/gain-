import React from 'react';

const ExploreTalentsSection = () => {
  return (
    <section className="px-4 py-8 md:px-6 md:py-12 bg-white">
      <div className="text-xs md:text-sm text-gray-500 mb-2">
        Home &gt; Explore Talents
      </div>
      <h2 className="text-lg md:text-xl font-semibold text-gray-700 mb-4">Explore Talents</h2>
      <div className="bg-gradient-to-r from-white to-blue-100 rounded-2xl p-6 md:p-10">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2 leading-snug">
          Discover Top Talent and Consulting Firms <br className="hidden md:block" />
          for Your Projects
        </h1>
        <p className="text-gray-600 text-base md:text-lg">
          Browse and connect with skilled professionals and Firms to bring your AI vision to life.
        </p>
      </div>
    </section>
  );
};

export default ExploreTalentsSection;