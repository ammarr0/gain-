import React, { useState } from "react";
import Sidebar from "../components/cfsidebar";
import Tabs from "./tabs";

const jobOffers = [
  { status: "Pending Approval" },
  { status: "Job Filled" },
  { status: "Closed" },
  { status: "Denied" },
  { status: "Closed" },
];

const JobOffers = () => {
  const [activeTab, setActiveTab] = useState("Job Offers");
  const offer = jobOffers[0];

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-[80%] mt-6 mx-auto">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="w-full bg-gray-100 rounded-lg border border-gray-300 p-16 shadow-sm">
          <div
            className="bg-white border rounded-lg p-4 mb-4 shadow flex justify-between items-center"
          >
            <div className="flex items-center">
              <img
                src={process.env.PUBLIC_URL + "/assets/reddit.png"}
                alt="Job Offer"
                className="w-16 h-16 rounded-lg mr-4"
              />
              <div className="text-left">
                <h3 className="font-bold text-lg">Business Development Manager for IT Projects in Middle East</h3>
                <p className="text-sm text-gray-500">UAE | United States • 25 hrs/wk • Anytime</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-gray-500">{offer.status}</p>
              <p className="font-semibold">$350/hr</p>
              <div className="flex space-x-2 mt-2">
                <button className="bg-gray-200 px-3 py-1 rounded-full flex items-center">
                  View Job
                  <span className="ml-2">→</span>
                </button>
                <button className="bg-green-500 text-white px-3 py-1 rounded-full flex items-center">
                  Accept Offer
                  <span className="ml-2">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobOffers;