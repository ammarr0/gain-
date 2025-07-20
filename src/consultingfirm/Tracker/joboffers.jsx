import React, { useState } from "react";
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
    <div
      className="w-full min-h-screen bg-white"
      style={{ overflowX: "hidden" }}
    >
      <div className="w-full max-w-5xl mt-6 mx-auto px-2 sm:px-4 md:px-8">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="w-full bg-gray-100 rounded-lg border border-gray-300 p-4 sm:p-8 md:p-12 shadow-sm mt-4">
          <div
            className="bg-white border rounded-lg p-4 mb-4 shadow flex flex-col md:flex-row md:justify-between md:items-center"
          >
            <div className="flex items-center mb-4 md:mb-0">
              <img
                src={process.env.PUBLIC_URL + "/assets/reddit.png"}
                alt="Job Offer"
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg mr-3 sm:mr-4"
              />
              <div className="text-left">
                <h3 className="font-bold text-base sm:text-lg">
                  Business Development Manager for IT Projects in Middle East
                </h3>
                <p className="text-xs sm:text-sm text-gray-500">
                  UAE | United States • 25 hrs/wk • Anytime
                </p>
              </div>
            </div>
            <div className="text-left md:text-right">
              <p className="text-gray-500 text-xs sm:text-sm">{offer.status}</p>
              <p className="font-semibold text-base sm:text-lg">$350/hr</p>
              <div className="flex flex-col sm:flex-row sm:space-x-2 mt-2 space-y-2 sm:space-y-0">
                <button className="bg-gray-200 px-3 py-1 rounded-full flex items-center justify-center text-sm">
                  View Job
                  <span className="ml-2">→</span>
                </button>
                <button className="bg-green-500 text-white px-3 py-1 rounded-full flex items-center justify-center text-sm">
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