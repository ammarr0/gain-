import React, { useState } from "react";
import Tabs from "./tabs";

const MyJobs = () => {
  const [activeTab, setActiveTab] = useState("My Jobs");

  // Responsive: Hide sidebar on small screens by rendering only main content
  // Ensure no horizontal scroll on mobile by using overflowX: "hidden" and responsive widths

  return (
    <div
      className="w-full min-h-screen bg-white"
      style={{ overflowX: "hidden" }}
    >
      <div className="w-full max-w-5xl mt-6 mx-auto px-2 sm:px-4 md:px-8">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="w-full bg-gray-100 rounded-lg border border-gray-300 p-4 sm:p-8 md:p-16 text-center shadow-sm min-h-[300px] sm:min-h-[350px] md:h-96 flex items-center justify-center mt-4">
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">No Jobs yet.</h2>
            <p className="text-gray-600 text-sm sm:text-base">
              When you have jobs, they will appear here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyJobs;