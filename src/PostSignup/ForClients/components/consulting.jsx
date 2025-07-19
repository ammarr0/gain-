import React from 'react';

const cardData = [
  {
    title: '1. Proposals',
    desc: 'Improve your proposal process with AI-driven insights to win more clients and deliver better solutions.',
  },
  {
    title: '2. Pitches & Workshops',
    desc: 'Design compelling presentations, prototypes, and client workshops powered by data and analytics.',
  },
  {
    title: '3. Project Placements',
    desc: 'Scale your team with specialized consultants to execute projects seamlessly and on time.',
  },
  {
    title: '4. Structured Research',
    desc: 'Access top-tier research professionals for market analysis, competitor intel, and strategic guidance.',
  },
  {
    title: '5. Institution Building',
    desc: 'Empower your organization with frameworks, training, and systems for long-term success.',
  },
  {
    title: '6. Full-time Placements',
    desc: 'Find and hire full-time consultants to grow your capabilities and serve clients more effectively.',
  },
];

const ConsultingSection = () => {
  return (
    <section className="w-full">
      {/* Top Heading (white background) */}
      <div className="bg-white w-full flex flex-col items-center py-10 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
        <div className="w-full max-w-6xl flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 text-center">
            Connect With Top Talent Across The Consulting <br className="hidden sm:block" /> Value Chain
          </h1>
          <p className="max-w-3xl text-gray-600 text-base sm:text-lg md:text-xl text-center">
            Overcome capacity constraints, expand into new verticals,
            and scale effortlessly to meet client demands.
          </p>
        </div>
      </div>

      {/* Dark Container + Cards */}
      <div className="bg-[#030923] w-full py-10 px-4 flex flex-col items-center">
        {/* Section heading */}
        <div className="w-full max-w-6xl text-center mb-8 flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
            GAIN's Comprehensive 360° Solutions for <br className="hidden sm:block" />Consulting
          </h2>
          <p className="text-[#AED8FF] text-base sm:text-lg max-w-3xl mt-5 mx-auto">
            Partner with GAIN to drive more projects, enhance client value, and boost profitability.
          </p>
        </div>

        {/* Cards Grid: Responsive */}
        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6">
          {cardData.map((card, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-[2px] bg-gradient-to-b from-[#AED8FF] to-[#030923] flex"
            >
              <div className="rounded-2xl bg-[#030923] flex flex-col justify-between h-full w-full p-6 sm:p-8 min-h-[180px]">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">{card.title}</h3>
                <p className="text-sm sm:text-base text-gray-300">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional text below the cards */}
        <div className="w-full max-w-4xl mx-auto text-center mt-12 flex flex-col items-center">
          <p className="text-gray-300 text-lg sm:text-xl">
            Send us a request to try us out. It’s free of charge until the talent we propose
            delivers real value in your organization.
          </p>
        </div>
      </div>

      {/* Bottom CTA Section (white background) */}
      <div className="bg-white w-full flex flex-col md:flex-row items-center justify-center py-10 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 gap-8">
        <div className="flex-1 flex flex-col items-center md:items-start w-full max-w-xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#007DF0] mb-6 text-center md:text-left">
            Embark on your journey with GAIN <br className="hidden sm:block" />today and elevate your <br className="hidden sm:block" />organization's AI capabilities
          </h2>
          <a href="/join-us" className="w-full flex justify-center md:justify-start">
            <button className="bg-[#4E96F7] text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors font-semibold">
              Find Top Talent
            </button>
          </a>
        </div>
        <div className="flex-1 flex justify-center w-full">
          <div className="w-full max-w-[400px] h-[160px] sm:h-[200px] md:h-[220px] lg:h-[240px] bg-gray-300 rounded-3xl p-6"></div>
        </div>
      </div>
    </section>
  );
};

export default ConsultingSection;
