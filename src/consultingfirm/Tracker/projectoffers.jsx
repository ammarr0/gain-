import React, { useState } from "react";
import Sidebar from "../components/cfsidebar";
import Tabs from "./tabs";

const ProjectOffers = () => {
  const [activeTab, setActiveTab] = useState("Project Offers");

  const offers = [
    {
      companyLogo: "https://1000logos.net/wp-content/uploads/2017/06/Bank-of-America-logo.png",
      companyName: "Bank of America",
      projectTitle: "Fintech Product Development",
      positionOffered: "UI Designer",
      openPositions: ["UI Designer", "UX Researcher", "Backend Developer", "Machine Learner"],
      location: "🇺🇸 UAE | United States",
      hours: "25 hrs/wk",
      timing: "Anytime",
      teamSize: "30–40 Persons",
      status: "Pending Approval"
    },
    {
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png",
      companyName: "Microsoft",
      projectTitle: "Cloud Infrastructure Enhancement",
      positionOffered: "Cloud Engineer",
      openPositions: ["Cloud Engineer", "DevOps Specialist", "Security Analyst"],
      location: "🇺🇸 USA",
      hours: "40 hrs/wk",
      timing: "Flexible",
      teamSize: "50–60 Persons",
      status: "Pending Approval"
    },
    {
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1200px-IBM_logo.svg.png",
      companyName: "IBM",
      projectTitle: "AI Research and Development",
      positionOffered: "Data Scientist",
      openPositions: ["Data Scientist", "AI Engineer", "Research Analyst"],
      location: "🇬🇧 UK",
      hours: "30 hrs/wk",
      timing: "Anytime",
      teamSize: "20–30 Persons",
      status: "Pending Approval"
    }
  ];

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full mt-6 max-w-5xl mx-auto">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        {offers.map((offer, index) => (
          <div key={index} className="max-w-5xl mx-auto bg-gray-100 border border-gray-300 rounded-xl shadow-sm p-6 mb-4">
            <div className="flex justify-between items-start">
              <div className="flex gap-4">
                <img
                  src={offer.companyLogo}
                  alt={offer.companyName}
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <h2 className="font-semibold text-lg text-gray-800">
                    {offer.projectTitle}
                  </h2>
                  <p className="mt-1 text-sm text-gray-600">
                    <strong className="text-black">Position Offered:</strong>{" "}
                    <span className="text-black font-semibold">{offer.positionOffered}</span>
                  </p>
                </div>
              </div>
              <span className="text-sm text-gray-500">{offer.status}</span>
            </div>

            <div className="mt-4 pl-16">
              <p className="text-sm text-gray-600 mb-1 font-medium">Open Positions:</p>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                {offer.openPositions.map((position, idx) => (
                  <li key={idx}>{position}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex justify-between items-center pl-16">
              <div className="flex text-sm text-gray-500 gap-6">
                <span>{offer.location}</span>
                <span>{offer.hours}</span>
                <span>{offer.timing}</span>
                <span>{offer.teamSize}</span>
              </div>

              <div className="space-x-2">
                <button className="px-4 py-1.5 border border-gray-300 text-sm rounded-md hover:bg-gray-200">
                  View Job
                </button>
                <button className="px-4 py-1.5 bg-gray-800 text-white text-sm rounded-md hover:bg-gray-900">
                  Accept Offer
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectOffers;