import React from 'react';

const DashboardCards = ({ userName }) => {
  const displayName = userName || 'Clay';

  const cards = [
    { text: 'Collab with other experts on your next project', button: 'Browse Projects', color: 'bg-[#D8FBAB]' },
    { text: 'Find your next job', button: 'Browse Jobs', color: 'bg-[#C7E1FF]' },
    { text: 'Hire your next talent', button: 'Browse Projects', color: 'bg-[#D8FBAB]' },
    { text: 'Learn or teach AI Course', button: 'Browse Courses', color: 'bg-[#CACDFF]' },
  ];

  return (
    <div className="p-">
      <h1 className="text-3xl font-semibold mb-4">Hi, {displayName}!</h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`rounded-xl p-4 ml- h-[268px] w-[240px] flex flex-col items-center justify-between ${card.color} shadow-[3px_3px_9px_0px_#0000001A,10px_12px_16px_0px_#00000017,24px_26px_21px_0px_#0000000D,42px_46px_25px_0px_#00000003,66px_72px_27px_0px_#00000000]`}
            >
              <p className=" font-semibold text-2xl text-left mb-2">{card.text}</p>
              <button className="bg-black text-white px-4 py-3 w-48 rounded-xl hover:bg-[#030923] transition">
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
