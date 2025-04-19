import React, { useState } from "react";
import Sidebar from "../components/cfsidebar";
import Tabs from "./tabs";

const JobOffers = () => {
  const [activeTab, setActiveTab] = useState("Job Offers");

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full mt-6 max-w-5xl mx-auto">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="w-full bg-gray-100 rounded-lg border border-gray-300 p-16 text-center shadow-sm">
          <div className="bg-white border rounded-lg p-4 shadow flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg">Business Development Manager for IT Projects in Middle East</h3>
              <p className="text-sm text-gray-500">UAE | United States • 25 hrs/wk • Anytime</p>
            </div>
            <div className="text-right">
              <p className="text-gray-500">Pending Approval</p>
              <p className="font-semibold">$350/hr</p>
              <div className="mt-2 space-x-2">
                <button className="bg-gray-200 px-3 py-1 rounded">View Job</button>
                <button className="bg-green-500 text-white px-3 py-1 rounded">Accept Offer</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobOffers;