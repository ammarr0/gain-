import React, { useState } from 'react';

function ActiveProjects() {
    const [activeTab, setActiveTab] = useState('active');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="w-full pt-5">
            <div className="mb-4">
                <h2 className="text-2xl">Project Posting</h2>
                <p className="text-black mt-1">Track progress, deadlines, and deliverables for all ongoing projects.</p>
            </div>

            <div className="flex flex-wrap gap-4 mb-6">
                <button
                    onClick={() => handleTabClick('active')}
                    className={`flex-1 min-w-[120px] h-[36px] pr-[16px] pl-[16px] rounded-[8px] text-sm font-medium ${activeTab === 'active' ? 'bg-[#CEF8C4] text-black' : 'bg-white text-[#848484] border border-[#848484]'
                        }`}
                >
                    Active
                </button>
                <button
                    onClick={() => handleTabClick('draft')}
                    className={`flex-1 min-w-[120px] h-[36px] pr-[16px] pl-[16px] rounded-[8px] text-sm font-medium ${activeTab === 'draft' ? 'bg-[#CEF8C4] text-black' : 'bg-white text-[#848484] border border-[#848484]'
                        }`}
                >
                    Draft
                </button>
                <button
                    onClick={() => handleTabClick('close')}
                    className={`flex-1 min-w-[120px] h-[36px] pr-[16px] pl-[16px] rounded-[8px] text-sm font-medium ${activeTab === 'close' ? 'bg-[#CEF8C4] text-black' : 'bg-white text-[#848484] border border-[#848484]'
                        }`}
                >
                    Closed
                </button>
            </div>
        </div>
    );
}

export default ActiveProjects;