import React from 'react';
import arrow from "../../assets/arrow-up-right.png";

const JobsSection = () => {
    return (
        <div className="bg-white rounded-lg mt-4">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-semibold text-gray-800">Your Project</h1>
                    <p className="text-gray-600">Track progress, deadlines, and deliverables for all ongoing projects.</p>
                </div>
                <div className="bg-white border-2 border-[#B0D0F7] rounded-xl p-4 flex justify-between items-center" style={{
                    width: '35%',
                    height: '162px',
                    borderRadius: '20px',
                    padding: '32px',
                }}>
                    <div>
                        <h2 className="text-3xl font-semibold text-black">Post a New Project</h2>
                        <p className="text-[#7A8A9C] text-base">Create a new job and get the best AI Talent</p>
                    </div>
                    <div>
                        <img src={arrow} alt="" style={{ width: '49px', height: '49px', transform: 'rotate(-0deg)' }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobsSection;