import React from 'react';
import arrow from "../../assets/arrow-up-right.png";

const JobsSection = () => {
    return (
        <div className="bg-white rounded-lg mt-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                <div className="mb-4 md:mb-0">
                    <h1 className="text-2xl font-semibold text-gray-800">Your Project</h1>
                    <p className="text-gray-600">Track progress, deadlines, and deliverables for all ongoing projects.</p>
                </div>
                <div className="bg-white border-2 border-[#B0D0F7] rounded-xl p-4 flex flex-col md:flex-row justify-between items-center w-full md:w-1/2" style={{
                    height: 'auto',
                    borderRadius: '20px',
                    padding: '32px',
                }}>
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-2xl md:text-3xl font-semibold text-black">Post a New Project</h2>
                        <p className="text-[#7A8A9C] text-sm md:text-base">Create a new job and get the best AI Talent</p>
                    </div>
                    <div>
                        <img src={arrow} alt="" className="w-12 h-12 md:w-14 md:h-14" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobsSection;