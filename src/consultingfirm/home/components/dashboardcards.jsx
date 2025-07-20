import React from 'react';

const DashboardCards = ({ userName }) => {
  const displayName = userName || ' Firm ';

  const cards = [
    { text: 'Collab with other experts on your next project', button: 'Browse Projects', color: 'bg-[#D8FBAB]' },
    { text: 'Find your next job', button: 'Browse Jobs', color: 'bg-[#C7E1FF]' },
    { text: 'Hire your next talent', button: 'Browse Projects', color: 'bg-[#D8FBAB]' },
    { text: 'Learn or teach AI Course', button: 'Browse Courses', color: 'bg-[#CACDFF]' },
  ];

  return (
    <div className="px-2 sm:px-4 py-2 w-full">
      <h1 className="text-2xl sm:text-3xl font-semibold mb-4 text-center sm:text-left">Hi, {displayName}!</h1>
      <div className="flex justify-center w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full max-w-7xl">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`rounded-xl p-4 h-[220px] sm:h-[240px] md:h-[268px] w-full min-w-0 flex flex-col items-center justify-between ${card.color} shadow-[3px_3px_9px_0px_#0000001A,10px_12px_16px_0px_#00000017,24px_26px_21px_0px_#0000000D,42px_46px_25px_0px_#00000003,66px_72px_27px_0px_#00000000] transition-all`}
              style={{
                maxWidth: '340px',
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '100%',
              }}
            >
              <p className="font-semibold text-lg sm:text-xl md:text-2xl text-left mb-2 w-full">{card.text}</p>
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