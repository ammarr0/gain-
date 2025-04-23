import React from 'react';

const ExploreTalentsSection = () => {
  return (
    <section className="px-6 py-12 bg-white">
      <div className="text-sm text-gray-500 mb-2">
        Home &gt; Explore Talents
      </div>
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Explore Talents</h2>
      <div style={{ background: 'linear-gradient(to right, white, #e0f7ff)', borderRadius: '20px', padding: '40px' }}>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 leading-snug">
          Discover Top Talent and Consulting Firms <br />
          for Your Projects
        </h1>
        <p className="text-gray-600 text-lg">
          Browse and connect with skilled professionals and Firms to bring your AI vision to life.
        </p>
      </div>
    </section>
  );
};

export default ExploreTalentsSection;