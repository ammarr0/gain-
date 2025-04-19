// src/components/ConsultingSection.jsx

import React from 'react';

const ConsultingSection = () => {
  // Inline styles for the gradient border approach
  // Outer div: gradient background + rounding
  const outerStyle = {
    // Create a vertical gradient from #AED8FF (top) to #030923 (bottom)
    background: 'linear-gradient(to bottom, #AED8FF, #030923)',
    borderRadius: '1.5rem',    // big rounded corners
    padding: '3px',           // thickness of the gradient border
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
          Connect With Top Talent Across The Consulting <br /> Value Chain
        </h1>
        <p className="max-w-4xl -ml-8 text-gray-600" style={{fontSize: '18px'}}>
          Overcome capacity constraints, expand into new verticals,
          and scale effortlessly to meet client demands.
        </p>
      </div>

      {/* Dark Container + Cards */}
      <div className="bg-[#030923] py-10 px-4">
        {/* Section heading */}
        <div className="max-w-6xl mx-auto text-center mb-8">
          <h2 className="text-4xl md:text-5xl max-w-6xl font-2xl text-white mb-2">
            GAIN's Comprehensive 360° Solutions for <br />Consulting
          </h2>
          <p className="text-[#AED8FF] text-lg max-w-5xl mt-5 mx-auto">
            Partner with GAIN to drive more projects, enhance client value, and boost profitability.
          </p>
        </div>

        {/* Cards Grid: 2 columns x 3 rows */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 gap-y-20 gap-x-8">
          {/* Card 1 */}
          <div style={outerStyle}>
            <div style={innerStyle}>
              <h3 className="text-xl font-semibold mb-2">1. Proposals</h3>
              <p className="text-sm text-gray-300">
                Improve your proposal process with AI-driven insights to win more clients
                and deliver better solutions.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div style={outerStyle}>
            <div style={innerStyle}>
              <h3 className="text-xl font-semibold mb-2">2. Pitches &amp; Workshops</h3>
              <p className="text-sm text-gray-300">
                Design compelling presentations, prototypes, and client workshops
                powered by data and analytics.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div style={outerStyle}>
            <div style={innerStyle}>
              <h3 className="text-xl font-semibold mb-2">3. Project Placements</h3>
              <p className="text-sm text-gray-300">
                Scale your team with specialized consultants to execute projects seamlessly and on time.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div style={outerStyle}>
            <div style={innerStyle}>
              <h3 className="text-xl font-semibold mb-2">4. Structured Research</h3>
              <p className="text-sm text-gray-300">
                Access top-tier research professionals for market analysis,
                competitor intel, and strategic guidance.
              </p>
            </div>
          </div>

          {/* Card 5 */}
          <div style={outerStyle}>
            <div style={innerStyle}>
              <h3 className="text-xl font-semibold mb-2">5. Institution Building</h3>
              <p className="text-sm text-gray-300">
                Empower your organization with frameworks, training,
                and systems for long-term success.
              </p>
            </div>
          </div>

          {/* Card 6 */}
          <div style={outerStyle}>
            <div style={innerStyle}>
              <h3 className="text-xl font-semibold mb-2">6. Full-time Placements</h3>
              <p className="text-sm text-gray-300">
                Find and hire full-time consultants to grow your capabilities
                and serve clients more effectively.
              </p>
            </div>
          </div>
        </div>

        {/* Additional text below the cards */}
        <div className="max-w-8xl mx-auto text-center mt-12">
          <p className="text-gray-300 max-w-8xl text-xl mx-auto">
            Send us a request to try us out. It’s free of charge until the talent we propose
            delivers real value in your organization.
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

export default ConsultingSection;
