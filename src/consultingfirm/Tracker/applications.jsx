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

  // Responsive: Hide sidebar on small screens by rendering only main content
  // Assume sidebar is outside this component, but ensure main content is full width on mobile

  return (
    <div
      className="w-full min-h-screen bg-white"
      style={{ overflowX: "hidden" }}
    >
      <div className="w-full max-w-5xl mt-6 mx-auto px-2 sm:px-4 md:px-8">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="w-full bg-gray-100 rounded-lg border border-gray-300 p-4 sm:p-8 md:p-12 shadow-sm mt-4">
          {applications.map((app, idx) => (
            <div
              key={idx}
              className="bg-white border rounded-lg p-4 mb-4 shadow flex flex-col md:flex-row md:justify-between md:items-center"
            >
              <div className="flex items-center mb-4 md:mb-0">
                <img
                  src={process.env.PUBLIC_URL + "/assets/reddit.png"}
                  alt="Application"
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
                <p className="text-gray-500 text-xs sm:text-sm">{app.status}</p>
                <p className="font-semibold text-base sm:text-lg">$350/hr</p>
                <div className="flex flex-col sm:flex-row sm:space-x-2 mt-2 space-y-2 sm:space-y-0">
                  <button className="bg-gray-200 px-3 py-1 rounded-full flex items-center justify-center text-sm">
                    View Application
                    <span className="ml-2">→</span>
                  </button>
                  <button className="bg-gray-800 text-white px-3 py-1 rounded-full flex items-center justify-center text-sm">
                    View Job
                    <span className="ml-2">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Hide sidebar on small screens: 
          If sidebar is rendered outside, ensure parent container uses flex-col on mobile.
          If sidebar is inside, use hidden or conditional rendering based on screen size.
          Here, we assume sidebar is outside and main content is always full width on mobile.
      */}
    </div>
  );
};

export default Applications;