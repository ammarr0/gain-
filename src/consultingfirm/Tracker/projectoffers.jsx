import React, { useState } from "react";
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
    <div
      className="w-full min-h-screen bg-white"
      style={{ overflowX: "hidden" }}
    >
      <div className="w-full max-w-5xl mt-6 mx-auto px-2 sm:px-4 md:px-8">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="w-full bg-gray-100 rounded-lg border border-gray-300 p-4 sm:p-8 md:p-12 shadow-sm mt-4">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="bg-white border rounded-lg p-4 mb-4 shadow flex flex-col"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <div className="flex items-center">
                  <img
                    src={offer.companyLogo}
                    alt={offer.companyName}
                    className="w-12 h-12 object-contain mr-3"
                  />
                  <div>
                    <h2 className="font-semibold text-base sm:text-lg text-gray-800">
                      {offer.projectTitle}
                    </h2>
                    <p className="mt-1 text-xs sm:text-sm text-gray-600">
                      <strong className="text-black">Position Offered:</strong>{" "}
                      <span className="text-black font-semibold">{offer.positionOffered}</span>
                    </p>
                  </div>
                </div>
                <span className="text-xs sm:text-sm text-gray-500 mt-2 sm:mt-0">{offer.status}</span>
              </div>

              <div className="mt-4 sm:pl-16">
                <p className="text-xs sm:text-sm text-gray-600 mb-1 font-medium">Open Positions:</p>
                <ul className="list-disc list-inside text-xs sm:text-sm text-gray-700 space-y-1">
                  {offer.openPositions.map((position, idx) => (
                    <li key={idx}>{position}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row sm:justify-between sm:items-center sm:pl-16 gap-4">
                <div className="flex flex-wrap text-xs sm:text-sm text-gray-500 gap-x-6 gap-y-2">
                  <span>{offer.location}</span>
                  <span>{offer.hours}</span>
                  <span>{offer.timing}</span>
                  <span>{offer.teamSize}</span>
                </div>

                <div className="flex space-x-2">
                  <button className="px-4 py-1.5 border border-gray-300 text-xs sm:text-sm rounded-md hover:bg-gray-200">
                    View Job
                  </button>
                  <button className="px-4 py-1.5 bg-gray-800 text-white text-xs sm:text-sm rounded-md hover:bg-gray-900">
                    Accept Offer
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

export default ProjectOffers;