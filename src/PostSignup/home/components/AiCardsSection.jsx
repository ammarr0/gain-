// src/pages/home/components/AiCardsSection.jsx
import React from 'react';

const AiCardsSection = () => {
  return (
    <div className="bg-[#4E96F733] py-12 px-4 -mt-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Card 1 */}
        <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center max-w-full sm:max-w-[300px] lg:max-w-[350px] h-auto sm:h-[400px] lg:h-[430px] mx-auto">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            Unlock AI <br className="hidden sm:block" /> Opportunities <br className="hidden sm:block" /> with Global Leaders
          </h2>
          <p className="text-gray-600 mb-auto">
            Explore top AI job listings and connect with leading companies. 
            Take the next step in your career and shape the future of AI.
          </p>
          <div className="flex flex-col space-y-3 w-full mt-8">
            <a href="/freelance-jobs">
              <button className="w-full px-4 py-2.5 bg-[#4E96F7] text-white rounded-full hover:bg-blue-700 transition duration-300">
                Browse Jobs
              </button>
            </a>
            <a href="/join-us">
              <button className="w-full px-4 py-2.5 border border-[#4E96F733] bg-[#4E96F733] text-black rounded-full hover:bg-blue-50 transition duration-300">
                Post Jobs &amp; Projects
              </button>
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center max-w-full sm:max-w-[300px] lg:max-w-[350px] h-auto sm:h-[400px] lg:h-[430px] mx-auto">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            Freelance on <br className="hidden sm:block" /> High-Impact <br className="hidden sm:block" /> AI Projects
          </h2>
          <p className="text-gray-600 mb-auto">
            Work with businesses seeking AI experts. 
            Apply your skills to real-world challenges, collaborate with top minds, 
            and earn from cutting-edge AI innovations.
          </p>
          <div className="flex flex-col space-y-3 w-full mt-8">
            <a href="/join-us">
              <button className="w-full px-4 py-2.5 bg-[#4E96F7] text-white rounded-full hover:bg-blue-700 transition duration-300">
                Hire Freelancers
              </button>
            </a>
            <a href="/freelance-jobs">
              <button className="w-full px-4 py-2.5 border border-[#4E96F733] bg-[#4E96F733] text-black rounded-full hover:bg-blue-50 transition duration-300">
                Find Freelance Projects
              </button>
            </a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center max-w-full sm:max-w-[300px] lg:max-w-[350px] h-auto sm:h-[400px] lg:h-[430px] mx-auto">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            Master AI &amp; <br className="hidden sm:block" /> Future-Proof <br className="hidden sm:block" /> Your Career
          </h2>
          <p className="text-gray-600 mb-auto">
            Gain access to industry-leading AI training designed for 
            students and professionals. Learn with practical courses, and join 
            the AI revolution shaping tomorrow.
          </p>
          <div className="flex flex-col space-y-3 w-full mt-8">
            <a href="/join-us">
              <button className="w-full px-4 py-2.5 bg-[#4E96F7] text-white rounded-full hover:bg-blue-700 transition duration-300">
                Start Learning Today
              </button>
            </a>
            <a href="/ai-trainings">
              <button className="w-full px-4 py-2.5 border border-[#4E96F733] text-black bg-[#4E96F733] rounded-full hover:bg-blue-50 transition duration-300">
                Explore Training Programs
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiCardsSection;
