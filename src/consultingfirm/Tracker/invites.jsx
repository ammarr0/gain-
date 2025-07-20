import React, { useState } from "react";
//import Sidebar from "../components/cfsidebar";
import Tabs from "./tabs";

const Invites = () => {
  const [activeTab, setActiveTab] = useState("Invites");

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-white">
      {/* <Sidebar /> */}
      <div className="w-full md:w-[80%] mt-6 mx-auto px-4 sm:px-6 md:px-8 flex flex-col">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="w-full bg-gray-100 rounded-lg border border-gray-300 p-6 sm:p-10 md:p-16 text-center shadow-sm min-h-[300px] sm:min-h-[350px] md:h-96 flex items-center justify-center mt-4">
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