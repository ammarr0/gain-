import React, { useState } from "react";
import Sidebar from "../components/cfsidebar";
import Tabs from "./tabs";

const Invoice = () => {
  const [activeTab, setActiveTab] = useState("Invoices");

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full mt-6 max-w-5xl mx-auto">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="w-full bg-gray-100 rounded-lg border border-gray-300 p-16 text-center shadow-sm">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">No Invoices yet.</h2>
          <p className="text-gray-600">
            When you have invoices, they will appear here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Invoice;