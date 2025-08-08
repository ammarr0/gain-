import React from 'react';

const JobPosting = () => {
  const tabs = ['Active', 'Draft', 'Closed'];
  const activeTab = 'Active';
  const skills = ['Project Management Tools', 'Jira', 'Hubspot'];

  return (
    <div className="main-container">
      {/* ====== Card-like Container for Everything ====== */}
      <div className="p-4 sm:p-6 bg-white rounded-xl w-full">

        {/* MOVE JOB POSTING TEXT OUTSIDE */}
        <h1 className="text-2xl sm:text-3xl font-lg">Job Posting</h1>

        {/* ====== Original Job Posting Section ====== */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mt-2">
          <div>
            <p className="text-lg sm:text-xl font-lg mt-1 sm:mt-2">
              Manage and track all your active, closed, and draft job posts.
            </p>
          </div>
          <a href="#" className="text-blue-700 font-medium mt-1 sm:mt-0">
            View all
          </a>
        </div>

        <div className="flex flex-wrap gap-2 my-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`py-1 px-4 rounded-md text-sm font-medium ${
                tab === activeTab
                  ? 'bg-[#CEF8C4] text-[#313131]'
                  : 'bg-gray-100 text-gray-400'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Added w-full here to stretch the container */}
        <div className="border rounded-lg p-3 sm:p-4 shadow-sm w-full">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
            <h2 className="font-semibold text-lg sm:text-xl">
              Business Development Manager for IT Projects in Middle East
            </h2>
            <div className="flex gap-2 sm:gap-3 text-gray-500 cursor-pointer mt-2 sm:mt-0">
              <div className="flex items-center">
                <span className="mr-2">Edit</span>
                <img src="/assets/edit.png" alt="Edit" width="22" height="22" className="w-5 h-5" />
              </div>
              <img src="/assets/share.png" alt="Share" width="22" height="22" className="w-5 h-5" />
            </div>
          </div>

          <div className="flex flex-wrap gap-4 sm:gap-6 text-gray-600 text-xs sm:text-sm my-3">
            <span className="flex items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/927/927667.png"
                alt="Location"
                className="inline w-4 h-4 mr-1"
              />
              UAE | United States
            </span>
            <span className="flex items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3239/3239948.png"
                alt="Hours"
                className="inline w-4 h-4 mr-1"
              />
              25 hrs/wk
            </span>
            <span className="flex items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2088/2088617.png"
                alt="Clock"
                className="inline w-4 h-4 mr-1"
              />
              Anytime
            </span>
          </div>

          <div className="border-t pt-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
            <div className="flex flex-wrap gap-2 mb-2 sm:mb-0">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="border border-[#333333] border-opacity-30 px-4 py-1.5 rounded-xl text-xs sm:text-sm text-gray-600"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex flex-col xs:flex-row gap-2">
              <button className="border rounded-full px-4 py-1 text-xs sm:text-sm hover:bg-gray-100 w-full xs:w-auto">
                View Applications ↗
              </button>
              <button className="bg-black text-white rounded-full px-4 py-1 text-xs sm:text-sm hover:bg-gray-800 w-full xs:w-auto">
                View Job ↗
              </button>
            </div>
          </div>
        </div>
        {/* ====== End of Original Job Posting Section ====== */}

        {/* ====== New Green & Two-Box Section (No Extra Wrapper) ====== */}
        <div className="flex flex-col md:flex-row gap-6 mt-10">
          {/* Left half (green box) */}
          <div className="md:w-1/2 bg-[#D8FBAB] h-64 sm:h-80 p-4 sm:p-6 md:p-10 rounded-xl flex flex-col justify-between">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#030923] mb-2 sm:mb-3">
                Ready to discover top AI talent and manage your projects?
              </h2>
              <p className="text-[#030923] text-base sm:text-lg md:text-xl leading-snug mt-6 sm:mt-12">
                Empower your vision with expert AI solutions – recruit, train, and innovate seamlessly!
              </p>
            </div>
          </div>

          {/* Right half (two boxes) */}
          <div className="md:w-1/2 flex flex-col gap-4">
            {/* Box 1: Post a new job */}
            <div
              className="border-2 border-blue-500 rounded-xl p-4 sm:p-6 md:p-8 hover:shadow-md transition cursor-pointer h-auto md:h-[151px] flex flex-col justify-center"
              onClick={() => window.location.href = "/client/post-job"}
              role="button"
              tabIndex={0}
              onKeyPress={e => {
                if (e.key === "Enter" || e.key === " ") {
                  window.location.href = "/client/post-job";
                }
              }}
            >
              <div className="flex items-center justify-between gap-2">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-black">Post a new job</h3>
                  <p className="text-[#313131] text-base sm:text-lg mt-1">
                    Create a new job and get the best AI Talent
                  </p>
                </div>
                <div className="text-2xl text-blue-600 hidden sm:block">→</div>
                <div className="text-2xl text-blue-600 sm:hidden mt-2">→</div>
              </div>
            </div>

            {/* Box 2: Hire a new talent */}
            <div className="border-2 border-blue-500 rounded-xl p-4 sm:p-6 md:p-8 hover:shadow-md transition cursor-pointer h-auto md:h-[151px] flex flex-col justify-center">
              <div
                className="flex items-center justify-between gap-2"
                onClick={() => window.location.href = "/talent/home"}
                role="button"
                tabIndex={0}
                onKeyPress={e => {
                  if (e.key === "Enter" || e.key === " ") {
                    window.location.href = "/talent/home";
                  }
                }}
              >
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-black">Hire a new talent</h3>
                  <p className="text-[#313131] text-base sm:text-lg mt-1">
                    Explore the right person for your next AI project
                  </p>
                </div>
                <div className="text-2xl text-blue-600 hidden sm:block">→</div>
                <div className="text-2xl text-blue-600 sm:hidden mt-2">→</div>
              </div>
            </div>
          </div>
        </div>
        {/* ====== End of New Section ====== */}
      </div>
    </div>
  );
};

export default JobPosting;
