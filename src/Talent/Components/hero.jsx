import React from 'react';
import logo from '../../assets/logo.png'; // Adjust the path as needed

const DashboardCards = ({ userName }) => {
  const displayName = userName || 'Firm';

  const cards = [
    { 
      text: 'Find your next job', 
      subtext: 'Explore a wide range of AI and tech job opportunities tailored to your skills and interests. Apply easily and take the next step in your career journey.', 
      button: 'Browse Jobs', 
      color: 'bg-[#C7E1FF]' 
    },
    { 
      text: 'Hire your next talent', 
      subtext: 'Connect with top AI professionals and build your dream team. Post projects and find the perfect match for your business needs.', 
      button: 'Browse Projects', 
      color: 'bg-[#D8FBAB]' 
    },
    { 
      text: 'Learn or teach AI Course', 
      subtext: 'Upskill yourself with the latest AI courses or share your expertise by teaching others. Join a vibrant learning community.', 
      button: 'Browse Courses', 
      color: 'bg-[#CACDFF]' 
    },
  ];

  return (
    <div className="px-2 sm:px-4 py-2 w-full">
      <div className="flex flex-col sm:flex-row items-center gap-6 w-full max-w-7xl mx-auto">
        {/* Logo on the left */}
        <div className="flex-shrink-0 flex flex-col items-center sm:items-start mb-4 sm:mb-0">
          <img src={logo} alt="Logo" className="h-28 w-auto mb-2" />
        </div>
        {/* Cards in a row */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full justify-center">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`rounded-xl p-4 h-[260px] sm:h-[280px] md:h-[300px] w-full min-w-0 flex flex-col items-center justify-between ${card.color} shadow-[3px_3px_9px_0px_#0000001A,10px_12px_16px_0px_#00000017,24px_26px_21px_0px_#0000000D,42px_46px_25px_0px_#00000003,66px_72px_27px_0px_#00000000] transition-all`}
              style={{
                maxWidth: '340px',
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '100%',
              }}
            >
              <div className="w-full">
                <p className="font-semibold text-lg sm:text-xl md:text-2xl text-left mb-2">{card.text}</p>
                <p className="text-gray-700 text-sm md:text-base text-left mb-4">{card.subtext}</p>
              </div>
              <button className="bg-black text-white px-4 py-2 sm:py-3 w-full sm:w-48 rounded-xl hover:bg-[#030923] transition">
                {card.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardCards;
