import React, { useState } from "react";
import Sidebar from "../components/cfsidebar";
import Tabs from "./tabs";

const MyJobs = () => {
  const [activeTab, setActiveTab] = useState("My Jobs");

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-[80%] mt-6 mx-auto">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="w-full bg-gray-100 rounded-lg border border-gray-300 p-16 text-center shadow-sm h-96 flex items-center justify-center">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">No Jobs yet.</h2>
            <p className="text-gray-600">
              When you have jobs, they will appear here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyJobs;