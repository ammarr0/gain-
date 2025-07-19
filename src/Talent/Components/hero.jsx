import React from 'react';

const GainWelcomeSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-start px-4 sm:px-8 md:px-10 py-6 sm:py-8 md:py-10 gap-6 md:gap-6 font-sans w-full">
      {/* Left Section */}
      <div className="w-full md:w-1/3 mb-6 md:mb-0">
        <h2 className="text-base sm:text-lg text-gray-600 mb-2">Welcome to</h2>
        <div className="text-2xl sm:text-3xl font-bold flex items-center gap-1">
          <span className="text-blue-900">GAIN</span>
          <span className="text-blue-600 text-xl sm:text-2xl font-bold">+</span>
        </div>
        <p className="text-xs sm:text-sm text-gray-600 mt-4">
          You now have complete access to our network of job opportunities and a thriving
          career support community. Where will your career journey begin today?
        </p>
      </div>
      {/* Right Cards */}
      <div className="flex flex-col sm:flex-row gap-4 w-full md:w-4/5">
        {/* Card 1 */}
        <div className="bg-lime-200 p-4 sm:p-5 rounded-xl shadow-md w-full sm:w-56">
          <h3 className="font-semibold text-gray-800 text-sm sm:text-md mb-4">
            Collab with other experts on your next project
          </h3>
          <button className="bg-blue-950 text-white px-4 py-2 rounded-full text-xs sm:text-sm w-full">
            Browse Projects
          </button>
        </div>
        {/* Card 2 */}
        <div className="bg-blue-200 p-4 sm:p-5 rounded-xl shadow-md w-full sm:w-56">
          <h3 className="font-semibold text-gray-800 text-sm sm:text-md mb-4">
            Find your next job
          </h3>
          <button className="bg-blue-950 text-white px-4 py-2 rounded-full text-xs sm:text-sm w-full">
            Browse Jobs
          </button>
        </div>
        {/* Card 3 */}
        <div className="bg-purple-200 p-4 sm:p-5 rounded-xl shadow-md w-full sm:w-56">
          <h3 className="font-semibold text-gray-800 text-sm sm:text-md mb-4">
            Learn or teach AI Course
          </h3>
          <button className="bg-blue-950 text-white px-4 py-2 rounded-full text-xs sm:text-sm w-full">
            Browse Courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default GainWelcomeSection;
