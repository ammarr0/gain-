import React from 'react';

const cardData = [
  {
    title: '1. Consultations and Workshops',
    desc: 'Gain insights into pressing challenges or engage top-tier AI talent for pivotal meetings.',
  },
  {
    title: '2. Project Placements',
    desc: 'Incorporate AI experts and consultants into your short-term or long-term projects seamlessly.',
  },
  {
    title: '3. Full-Time Recruitment',
    desc: 'Hire AI specialists on a full-time basis to drive all your initiatives.',
  },
  {
    title: '4. Advisory Boards and Expert Panels',
    desc: 'Assemble world-class advisory boards and panels to support and guide your organization.',
  },
  {
    title: '5. Conferences and Trainings',
    desc: 'Engage esteemed speakers or facilitators for your AI-focused conferences and training sessions.',
  },
  {
    title: '6. Structured Research and Studies',
    desc: 'Commission tailored research, analyses, or reports executed by seasoned AI consultants.',
  },
];

const outerStyle = {
  background: 'linear-gradient(to bottom, #9FE1FF, #007AFF)',
  borderRadius: '1.5rem',
  padding: '1px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
};

const innerStyle = {
  borderRadius: '1.5rem',
  backgroundColor: '#F3F9FF',
  padding: '2rem',
  color: '#000',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
};

const Corporate = () => {
  return (
    <section>
      {/* Top Heading (white background) */}
      <div className="bg-white py-8 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-left text-gray-900 mb-3">
          GAIN Projects Across Corporate Functions
        </h1>
        <p className="max-w-4xl text-left text-gray-600 text-base sm:text-lg">
          GAIN offers a comprehensive suite of services designed to empower your organization, enhance client value,
          <br className="hidden sm:block" /> and boost profitability.
        </p>
      </div>

      {/* Section heading */}
      <div className="bg-white py-8 px-4">
        <div className="w-full max-w-6xl mx-auto text-center mb-8 flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#007DF0] mb-2">
            GAIN’s Comprehensive 360° Solutions for <br className="hidden sm:block" />Corporations
          </h2>
          <p className="text-black text-base sm:text-lg mt-6 mx-auto max-w-2xl">
            Partner with GAIN to drive more projects, enhance client value, and boost profitability.
          </p>
        </div>

        {/* Cards Grid: Responsive */}
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6">
          {cardData.map((card, idx) => (
            <div key={idx} style={outerStyle}>
              <div style={innerStyle}>
                <h3 className="text-lg sm:text-xl font-semibold text-black mb-2">{card.title}</h3>
                <p className="text-sm sm:text-base text-black">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional text below the cards */}
        <div className="w-full max-w-4xl mx-auto text-center mt-12 flex flex-col items-center">
          <p className="text-black text-lg sm:text-xl max-w-2xl">
            <span className="text-[#007DF0] font-semibold">Experience our services risk-free:</span> initiate a request today, and benefit from our offerings without charge until the proposed talent delivers tangible value to your organization.
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
        <div className="flex-1 flex justify-center w-full max-w-xl">
          <div className="w-full h-40 sm:h-56 md:h-72 bg-gray-300 rounded-3xl p-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Corporate;
