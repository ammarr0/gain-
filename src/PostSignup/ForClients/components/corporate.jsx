// src/components/ConsultingSection.jsx

import React from 'react';

const corporate = () => {
  // Inline styles for the gradient border approach
  // Outer div: gradient background + rounding
  const outerStyle = {
    // Create a vertical gradient from #9FE1FF (top) to #007AFF (bottom)
    background: 'linear-gradient(to bottom, #9FE1FF, #007AFF)',
    borderRadius: '1.5rem',    // big rounded corners
    padding: '1px',           // thickness of the gradient border
  };

  // Inner div: same rounding, dark background
  const innerStyle = {
    borderRadius: '1.5rem',
    backgroundColor: '#030923',
    padding: '3rem',
    color: '#ffffff',
    height: '200px',
  };

  return (
    <section>
      {/* Top Heading (white background) */}
      <div className="bg-white py-10 px-24 text-center">
        <h1 className="text-4xl md:text-5xl font-2xl  text-left text-gray-900 mb-3">
          GAIN Projects Across Corporate Functions
        </h1>
        <p className="max-w-6xl text-left text-gray-600 text-lg">
          GAIN offers a comprehensive suite of services designed to empower your organization, enhance client value, <br /> and boost profitability.
        </p>
      </div>

      {/* Dark Container + Cards */}
      <div className="bg-white py-10 px-4">
        {/* Section heading */}
        <div className="max-w-6xl mx-auto text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-xl text-[#007DF0] mb-2">
            GAIN’s Comprehensive 360° Solutions for <br /> Corporations
          </h2>
          <p className="text-black text-lg mt-6 mx-auto">
            Partner with GAIN to drive more projects, enhance client value, and boost profitability.
          </p>
        </div>

        {/* Cards Grid: 2 columns x 3 rows */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 gap-y-20 gap-x-10">
          {/* Card 1 */}
          <div style={outerStyle}>
            <div style={{ ...innerStyle, backgroundColor: '#F3F9FF' }}>
              <h3 className="text-2xl font-semibold text-black mb-2">1. Consultations and Workshops</h3>
              <p className="text-md text-black">
                Gain insights into pressing challenges or engage top-tier AI talent for pivotal meetings.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div style={outerStyle}>
            <div style={{ ...innerStyle, backgroundColor: '#F3F9FF' }}>
              <h3 className="text-2xl font-semibold text-black mb-2">2. Project Placements</h3>
              <p className="text-md text-black">
                Incorporate AI experts and consultants into your short-term or long-term projects seamlessly.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div style={outerStyle}>
            <div style={{ ...innerStyle, backgroundColor: '#F3F9FF' }}>
              <h3 className="text-2xl font-semibold text-black mb-2">3. Full-Time Recruitment</h3>
              <p className="text-md text-black">
                Hire AI specialists on a full-time basis to drive all your initiatives.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div style={outerStyle}>
            <div style={{ ...innerStyle, backgroundColor: '#F3F9FF' }}>
              <h3 className="text-2xl font-semibold text-black mb-2">4. Advisory Boards and Expert Panels</h3>
              <p className="text-md text-black">
                Assemble world-class advisory boards and panels to support and guide your organization.
              </p>
            </div>
          </div>

          {/* Card 5 */}
          <div style={outerStyle}>
            <div style={{ ...innerStyle, backgroundColor: '#F3F9FF' }}>
              <h3 className="text-2xl font-semibold text-black mb-2">5. Conferences and Trainings</h3>
              <p className="text-md text-black">
                Engage esteemed speakers or facilitators for your AI-focused conferences and training sessions.
              </p>
            </div>
          </div>

          {/* Card 6 */}
          <div style={outerStyle}>
            <div style={{ ...innerStyle, backgroundColor: '#F3F9FF' }}>
              <h3 className="text-2xl font-semibold text-black mb-2">6. Structured Research and Studies</h3>
              <p className="text-md text-black">
                Commission tailored research, analyses, or reports executed by seasoned AI consultants.
              </p>
            </div>
          </div>
        </div>

        {/* Additional text below the cards */}
        <div className="max-w-8xl mx-auto text-center mt-12">
          <p className="text-black max-w-6xl text-xl mx-auto">
          <p className="text-black max-w-6xl text-xl mx-auto font-lg text-[#007DF0]">
            Experience our services risk-free <span className="text-[#007DF0] font-semibold">initiate a request today</span>, and benefit from our offerings without charge until the proposed talent delivers tangible value to your organization
          </p>
          </p>
        </div>
      </div>

      {/* Bottom CTA Section (white background) */}
      <div className="bg-white py-10 px-24 flex justify-between items-center">
        <div className="text-left p-4">
          <h2 className="text-2xl md:text-3xl  mb-32 ml-12 font-xl text-[#007DF0] mb-3">
            Embark on your journey with GAIN <br />today and elevate your <br />organization's AI capabilities
          </h2>
          <a href="/join-us">
            <button className="bg-[#4E96F7] ml-12 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors mb-5">
              Find Top Talent
            </button>
          </a>
        </div>
        <div className="w-[600px] h-[200px] md:h-72 bg-gray-300 rounded-3xl p-10 mr-55 mb-8"></div>
      </div>
    </section>
  );
};

export default corporate;
