import React, { useState } from 'react';

function ActiveProjects() {
    const [activeTab, setActiveTab] = useState('in-progress');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="w-full pt-5">
            <div className="mb-4">
                <h2 className="text-xl md:text-2xl font-semibold text-black">Active Projects</h2>
                <p className="text-sm md:text-base text-black mt-1">Track progress, deadlines, and deliverables for all ongoing projects.</p>
            </div>

            <div className="flex flex-wrap gap-2 md:gap-4 mb-6">
                <button
                    onClick={() => handleTabClick('in-progress')}
                    className={`px-4 md:px-6 py-2 rounded-md text-xs md:text-sm font-medium ${activeTab === 'in-progress' ? 'bg-black text-white' : 'bg-white text-black border border-black'
                        }`}
                >
                    In Progress
                </button>
                <button
                    disabled
                    className="px-4 md:px-6 py-2 rounded-md text-xs md:text-sm font-medium bg-gray-300 text-gray-500 cursor-not-allowed"
                >
                    On Hold
                </button>
                <button
                    disabled
                    className="px-4 md:px-6 py-2 rounded-md text-xs md:text-sm font-medium bg-gray-300 text-gray-500 cursor-not-allowed"
                >
                    Completed
                </button>
            </div>
        </div>
    );
}

export default ActiveProjects;