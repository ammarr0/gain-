import React, { useState } from "react";
import Tabs from "./tabs";

const Invites = () => {
  const [activeTab, setActiveTab] = useState("Invites");

  return (
    <div className="flex flex-col min-h-screen bg-white px-2 sm:px-4 py-4">
      <div className="w-full max-w-3xl mx-auto mt-4 sm:mt-8">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="w-full bg-gray-100 rounded-lg border border-gray-300 p-6 sm:p-10 md:p-16 text-center shadow-sm min-h-[300px] flex items-center justify-center">
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">No Invites yet.</h2>
            <p className="text-gray-600 text-sm sm:text-base">
              When you are invited to submit an application for jobs they will appear here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invites;