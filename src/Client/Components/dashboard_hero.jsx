import React from 'react';
import arrow from "../../assets/arrow-right.png"

const ExploreTalentsSection = () => {
  return (
    <>
      <section className="py-12 bg-white flex flex-col lg:flex-row justify-between items-center lg:items-stretch">
        <div className="bg-gradient-to-b from-white to-[#70B8FF9E] rounded-2xl p-6 md:p-10 flex flex-col justify-center gap-5 w-full lg:w-[48%] h-auto lg:h-[336px] mb-6 lg:mb-0">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 leading-snug text-center lg:text-left">
            Ready to discover top AI talent and manage your projects?
          </h2>
          <p className="text-gray-600 text-base md:text-lg text-center lg:text-left">
            Empower your vision with expert AI solutions – recruit, train, and innovate seamlessly!
          </p>
        </div>

        <div className='w-full lg:w-[50%]'>
          <div className="flex flex-col gap-4">
            <div className="bg-white border-2 border-[#B0D0F7] rounded-xl p-4 md:p-6 flex justify-between items-center h-auto lg:h-[162px]">
              <div>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-black text-center lg:text-left">Post a new job</h2>
                <p className="text-[#7A8A9C] text-sm md:text-base text-center lg:text-left">Create a new job and get the best AI Talent</p>
              </div>
              <div>
                <img src={arrow} alt="" className="w-10 h-10 md:w-12 md:h-12" />
              </div>
            </div>

            <div className="bg-white border-2 border-[#B0D0F7] rounded-xl p-4 md:p-6 flex justify-between items-center h-auto lg:h-[162px]">
              <div>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-black text-center lg:text-left">Hire a new talent</h2>
                <p className="text-[#7A8A9C] text-sm md:text-base text-center lg:text-left">Explore the right person for your next AI project</p>
              </div>
              <div>
                <img src={arrow} alt="" className="w-10 h-10 md:w-12 md:h-12" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExploreTalentsSection;