import React from 'react';
import arrow from "../../assets/arrow-right.png"

const ExploreTalentsSection = () => {
  return (
    <>
      <section className="px-6 py-12 bg-white flex justify-between">
        <div style={{
          background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(112, 184, 255, 0.62) 100%)',
          borderRadius: '20px',
          padding: '40px',
          width: '48%',
          height: '336px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '20px'
        }}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 leading-snug">
            Ready to discover top AI talent and manage your projects?
          </h2>
          <p className="text-gray-600 text-lg">
            Empower your vision with expert AI solutions – recruit, train, and innovate seamlessly!
          </p>
        </div>

        <div className='w-[50%]'>
          <div className="flex flex-col gap-4">
            <div className="bg-white border-2 border-[#B0D0F7] rounded-xl p-4 flex justify-between items-center" style={{
              width: '100%',
              height: '162px',
              borderRadius: '20px',
              padding: '32px',
            }}>
              <div>
                <h2 className="text-3xl font-semibold text-black">Post a new job</h2>
                <p className="text-[#7A8A9C] text-base">Create a new job and get the best AI Talent</p>
              </div>
              <div>
                <img src={arrow} alt="" style={{ width: '49px', height: '49px', transform: 'rotate(-0deg)' }} />
              </div>
            </div>

            <div className="bg-white border-2 border-[#B0D0F7] rounded-xl p-4 flex justify-between items-center" style={{
              width: '100%',
              height: '162px',
              borderRadius: '20px',
              padding: '32px',
            }}>
              <div>
                <h2 className="text-3xl font-semibold text-black">Hire a new talent</h2>
                <p className="text-[#7A8A9C] text-base">Explore the right person for your next AI project</p>
              </div>
              <div>
                <img src={arrow} alt="" style={{ width: '49px', height: '49px', transform: 'rotate(-0deg)' }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExploreTalentsSection;