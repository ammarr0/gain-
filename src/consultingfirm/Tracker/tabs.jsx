import React from "react";
import { Link } from "react-router-dom";

const Tabs = ({ activeTab, setActiveTab }) => {
    const tabs = [
        { name: "Invites", path: "/consultingfirm/tracker" },
        { name: "Applications", path: "/consultingfirm/applications" },
        { name: "Job Offers", path: "/consultingfirm/joboffers" },
        { name: "Project Offers", path: "/consultingfirm/projectsoffers" },
        { name: "My Jobs", path: "/consultingfirm/myjobs" },
        { name: "Invoices", path: "/consultingfirm/invoices" }
    ];
    
    return (
        <div className="flex space-x-8 border-b border-gray-300 px-4 pt-4">
            {tabs.map((tab) => (
                <Link
                    key={tab.name}
                    to={tab.path}
                    onClick={() => setActiveTab(tab.name)}
                    className={`pb-2 text-sm font-medium ${activeTab === tab.name
                            ? "border-b-2 border-black text-black"
                            : "text-gray-500"
                        }`}
                >
                    {tab.name}
                </Link>
            ))}
        </div>
    );
};

export default Tabs;