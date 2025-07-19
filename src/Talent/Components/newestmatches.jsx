
import React from 'react';

const NewestMatches = () => {
  const matches = [
    {
      company: "Juxtapose",
      role: "Product Designer",
      hours: "25 hrs/wk",
      location: "Work from anywhere",
      time: "Anytime",
      logo: "/assets/juxtapose.png",
      logoSize: "w-16 h-16",
      positions: ["UI Designer", "UX Researcher", "Backend Developer", "Machine Learner"]
    },
    {
      company: "Reddit",
      role: "Product Designer",
      hours: "25 hrs/wk",
      location: "United States | Canada",
      time: "Anytime",
      logo: "/assets/reddit.png",
      logoSize: "w-16 h-16",
      positions: ["UI Designer", "UX Researcher", "Backend Developer", "Machine Learner"]
    },
    {
      company: "Bank of America",
      role: "Sr. UX Researcher",
      hours: "25 hrs/wk",
      location: "United States only",
      time: "Anytime",
      logo: "/assets/bankofamerica.png",
      logoSize: "w-16 h-16",
      positions: ["UI Designer", "UX Researcher", "Backend Developer", "Machine Learner"]
    },
  ];

  return (
    <div className="max-w-7xl mx-auto w-full">
      <div className="p-4 max-w-full">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
          <h2 className="text-xl sm:text-2xl font-medium text-[#34A853]">Your newest matches</h2>
          <button className="text-sm font-semibold text-[#34A853] underline hover:underline sm:mr-12 mt-2 sm:mt-0">
            View All Jobs
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 items-stretch justify-items-center">
          {matches.map((match, idx) => (
            <div
              key={idx}
              className="rounded-xl border-2 border-[#34A853] p-4 shadow-sm hover:shadow-lg transition bg-white w-full max-w-xs sm:max-w-sm md:max-w-md flex flex-col mx-auto h-full"
              style={{ minHeight: 0 }}
            >
              <div className="flex justify-between items-start">
                <img
                  src={match.logo}
                  alt={match.company}
                  className={`${match.logoSize} rounded-md mb-2`}
                />
                <div className="flex gap-2">
                  <button>
                    <img src="/assets/share.png" alt="Share" className="w-5 h-5" />
                  </button>
                  <button>
                    <img src="/assets/bookmark.png" alt="Bookmark" className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-[#030923]">{match.company}</h3>
              <p className="text-gray-600 text-xl sm:text-2xl mt-2">{match.role}</p>
              <p className="text-sm font-md mt-2">Open Positions</p>
              <ul className="mt-3 list-disc list-inside">
                {match.positions.map((position, posIdx) => (
                  <li key={posIdx} className="text-base sm:text-lg ml-2">{position}</li>
                ))}
              </ul>

              <hr className="my-3 border-black" />

              <div className="text-sm text-gray-600 space-y-4 mt-4 sm:mt-8">
                <p className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  <span className="flex items-center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/3239/3239948.png"
                      alt="Hours"
                      className="inline w-4 h-4 mr-1"
                    />
                    {match.hours}
                  </span>
                  <span className="flex items-center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/927/927667.png"
                      alt="Location"
                      className="inline w-4 h-4 mr-1"
                    />
                    {match.location}
                  </span>
                </p>
                <p className="flex items-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2088/2088617.png"
                    alt="Clock"
                    className="inline w-4 h-4 mr-1"
                  />
                  {match.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewestMatches;