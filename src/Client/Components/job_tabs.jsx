import React, { useState } from 'react';

function ActiveProjects() {
    const [activeTab, setActiveTab] = useState('active');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="w-full pt-5">
            <div className="mb-4">
                <h2 className="text-xl md:text-2xl">Jobs Posting</h2>
                <p className="text-black mt-1 text-sm md:text-base">Track progress, deadlines, and deliverables for all ongoing projects.</p>
            </div>

            <div className="flex flex-wrap gap-2 md:gap-4 mb-6">
                <button
                    disabled
                    className={`flex-1 min-w-[80px] md:min-w-[100px] h-[32px] md:h-[36px] px-2 md:px-4 rounded-[8px] text-xs md:text-sm font-medium cursor-not-allowed ${activeTab === 'active' ? 'bg-[#CEF8C4] text-black' : 'bg-white text-[#848484] border border-[#848484]'
                        }`}
                >
                    Active
                </button>
                <button
                    disabled
                    className={`flex-1 min-w-[80px] md:min-w-[100px] h-[32px] md:h-[36px] px-2 md:px-4 rounded-[8px] text-xs md:text-sm font-medium cursor-not-allowed ${activeTab === 'draft' ? 'bg-[#CEF8C4] text-black' : 'bg-white text-[#848484] border border-[#848484]'
                        }`}
                >
                    Draft
                </button>
                <button
                    onClick={() => handleTabClick('close')}
                    className={`flex-1 min-w-[80px] md:min-w-[100px] h-[32px] md:h-[36px] px-2 md:px-4 rounded-[8px] text-xs md:text-sm font-medium ${activeTab === 'close' ? 'bg-[#CEF8C4] text-black' : 'bg-white text-[#848484] border border-[#848484]'
                        }`}
                >
                    Closed
                </button>
            </div>
        </div>
    );
}

export default ActiveProjects;