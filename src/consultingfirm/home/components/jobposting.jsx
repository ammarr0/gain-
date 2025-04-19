import React from 'react';

const JobPosting = () => {
  const tabs = ['Active', 'Draft', 'Closed'];
  const activeTab = 'Active';
  const skills = ['Project Management Tools', 'Jira', 'Hubspot'];

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* ====== Card-like Container for Everything ====== */}
      <div className="p-6 bg-white rounded-xl w-full ">

        {/* MOVE JOB POSTING TEXT OUTSIDE */}
        <h1 className="text-3xl font-lg">Job Posting</h1>

        {/* ====== Original Job Posting Section ====== */}
        
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xl font-lg mt-2">
                Manage and track all your active, closed, and draft job posts.
              </p>
            </div>
            <a href="#" className="text-blue-700 font-medium">
              View all
            </a>
          </div>

          <div className="flex gap-2 my-4 ">
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
          <div className="border rounded-lg p-4 shadow-sm w-full">
            <div className="flex justify-between items-start">
              <h2 className="font-semibold text-xl">
                Business Development Manager for IT Projects in Middle East
              </h2>
              <div className="flex gap-3 text-gray-500 cursor-pointer">
                <div className="flex items-center">
                  <span className="mr-2">Edit</span>
                  <img src="/assets/edit.png" alt="Edit" width="25" height="25" />
                </div>
                <img src="/assets/share.png" alt="Share" width="25" height="25" />
              </div>
            </div>

            <div className="flex gap-6 text-gray-600 text-sm my-3">
              <span>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/927/927667.png"
                  alt="Location"
                  className="inline w-4 h-4 mr-1"
                />
                UAE | United States
              </span>
              <span>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3239/3239948.png"
                  alt="Hours"
                  className="inline w-4 h-4 mr-1"
                />
                25 hrs/wk
              </span>
              <span>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2088/2088617.png"
                  alt="Clock"
                  className="inline w-4 h-4 mr-1"
                />
                Anytime
              </span>
            </div>

            <div className="border-t pt-4 flex justify-between items-center">
              <div className="flex gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="border border-[#333333] border-opacity-30 px-5 py-2 rounded-xl text-xm text-gray-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex gap-2">
                <button className="border rounded-full px-4 py-1 text-sm hover:bg-gray-100">
                  View Applications ↗
                </button>
                <button className="bg-black text-white rounded-full px-4 py-1 text-sm hover:bg-gray-800">
                  View Job ↗
                </button>
              </div>
            </div>
          </div>
        
        {/* ====== End of Original Job Posting Section ====== */}

        {/* ====== New Green & Two-Box Section (No Extra Wrapper) ====== */}
        <div className="flex flex-col md:flex-row gap-6 mt-10">
          {/* Left half (green box) */}
          <div className="md:w-1/2 bg-[#D8FBAB] h-80 p-6 md:p-10 rounded-xl">
            <h2 className="text-4xl md:text-4xl font-semibold text-[#030923] mb-3">
              Ready to discover top AI talent and manage your projects?
            </h2>
            <p className="text-[#030923] text-base md:text-xl  leading-snug mt-12">
              Empower your vision with expert AI solutions – recruit, train, and innovate seamlessly!
            </p>
          </div>

          {/* Right half (two boxes) */}
          <div className="md:w-1/2 flex flex-col gap-4">
            {/* Box 1: Post a new job */}
            <div className="border-2 border-blue-500 rounded-xl p-5 sm:p-8 hover:shadow-md transition cursor-pointer h-auto md:h-[151px]">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-4xl font-semibold text-black">Post a new job</h3>
                  <p className="text-[#313131] text-lg mt-1">
                    Create a new job and get the best AI Talent
                  </p>
                </div>
                <div className="text-2xl text-blue-600">→</div>
              </div>
            </div>

            {/* Box 2: Hire a new talent */}
            <div className="border-2 border-blue-500 rounded-xl p-5 sm:p-8 hover:shadow-md transition cursor-pointer h-auto md:h-[151px]">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-3xl font-semibold text-black">Hire a new talent</h3>
                  <p className="text-[#313131] text-lg mt-1">
                    Explore the right person for your next AI project
                  </p>
                </div>
                <div className="text-2xl text-blue-600">→</div>
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
