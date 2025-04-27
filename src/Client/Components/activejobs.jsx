import React, { useState } from 'react';

function ActiveJobs() {
    const [activeTab, setActiveTab] = useState('in-progress');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="w-full pb-5">
            <div className="mb-4">
                <h2 className="text-2xl font-semibold text-[#0A3D6B]">Active Jobs</h2>
                <p className="text-gray-600 mt-1">Track progress, deadlines, and deliverables for all ongoing projects.</p>
            </div>

            <div className="flex gap-4 mb-6">
                <button
                    onClick={() => handleTabClick('in-progress')}
                    className={`px-6 py-2 rounded-md text-sm font-medium ${activeTab === 'in-progress' ? 'bg-[#1D3557] text-white' : 'bg-white text-[#1D3557] border border-[#1D3557]'
                        }`}
                >
                    In Progress
                </button>
                <button
                    onClick={() => handleTabClick('on-hold')}
                    className={`px-6 py-2 rounded-md text-sm font-medium ${activeTab === 'on-hold' ? 'bg-[#1D3557] text-white' : 'bg-white text-[#1D3557] border border-[#1D3557]'
                        }`}
                >
                    On Hold
                </button>
                <button
                    onClick={() => handleTabClick('completed')}
                    className={`px-6 py-2 rounded-md text-sm font-medium ${activeTab === 'completed' ? 'bg-[#1D3557] text-white' : 'bg-white text-[#1D3557] border border-[#1D3557]'
                        }`}
                >
                    Completed
                </button>
            </div>
        </div>
    );
}

export default ActiveJobs;