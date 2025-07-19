import React, { useState } from "react";
import Tabs from "./tabs";

const applications = [
  { status: "Pending Approval" },
  { status: "Job Filled" },
  { status: "Closed" },
  { status: "Denied" },
  { status: "Closed" },
];

const Applications = () => {
  const [activeTab, setActiveTab] = useState("Applications");

  return (
    <div className="flex flex-col min-h-screen bg-white w-full px-2 sm:px-4 py-4 items-center">
      <div className="w-full max-w-3xl flex flex-col items-center mx-auto mt-4 sm:mt-8">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="w-full bg-gray-100 rounded-lg border border-gray-300 p-4 sm:p-8 md:p-12 shadow-sm min-h-[300px] flex flex-col items-center">
          {applications.map((app, idx) => (
            <div
              key={idx}
              className="bg-white border rounded-lg p-4 mb-4 shadow flex flex-col md:flex-row md:justify-between md:items-center gap-4 w-full max-w-2xl mx-auto"
            >
              <div className="flex flex-col md:flex-row items-center md:items-center w-full md:w-auto text-center md:text-left">
                <img
                  src={process.env.PUBLIC_URL + "/assets/reddit.png"}
                  alt="Application"
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg mb-2 md:mb-0 md:mr-4 flex-shrink-0 mx-auto md:mx-0"
                />
                <div className="w-full">
                  <h3 className="font-bold text-base sm:text-lg break-words">
                    Business Development Manager for IT Projects in Middle East
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 break-words">
                    UAE | United States • 25 hrs/wk • Anytime
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center md:items-end w-full md:w-auto">
                <p className="text-gray-500 text-xs sm:text-sm">{app.status}</p>
                <p className="font-semibold text-sm sm:text-base">$350/hr</p>
                <div className="flex flex-col md:flex-row gap-2 mt-2 w-full md:w-auto">
                  <button className="bg-gray-200 px-3 py-1 rounded-full flex items-center justify-center text-xs sm:text-sm w-full md:w-auto whitespace-nowrap">
                    View Application
                    <span className="ml-2">→</span>
                  </button>
                  <button className="bg-gray-800 text-white px-3 py-1 rounded-full flex items-center justify-center text-xs sm:text-sm w-full md:w-auto whitespace-nowrap">
                    View Job
                    <span className="ml-2">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Applications;