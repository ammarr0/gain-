import React, { useState } from "react";
import Tabs from "./tabs";

const Invoices = () => {
  const [activeTab, setActiveTab] = useState("Invoices");

  return (
    <div className="flex">
              <div className="page-content">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="w-full bg-gray-100 rounded-lg border border-gray-300 p-16 text-center shadow-sm h-96 flex items-center justify-center">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">No Invoices yet.</h2>
            <p className="text-gray-600">
              When invoices are generated, they will appear here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoices;