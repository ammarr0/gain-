import React from "react";
import { Link } from "react-router-dom";

const Tabs = ({ activeTab, setActiveTab }) => {
    const tabs = [
        { name: "Invites", path: "talent/tracker" },
        { name: "Applications", path: "talent/applications" },
        { name: "Job Offers", path: "/talent/joboffers" },
        { name: "Project Offers", path: "/talent/projectsoffers" },
        { name: "My Jobs", path: "/talent/myjobs" },
        { name: "Invoices", path: "/talent/invoices" }
    ];
    
    return (
        <div className="flex space-x-8 px-4 pt-4 mb-2.5">
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