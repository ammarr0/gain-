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
    <div className="flex flex-col min-h-screen bg-white w-full px-2 sm:px-4 py-4 items-center">
      <div className="w-full max-w-3xl flex flex-col items-center mx-auto mt-4 sm:mt-8">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="w-full bg-gray-100 rounded-lg border border-gray-300 p-4 sm:p-8 md:p-12 shadow-sm min-h-[300px] flex flex-col items-center">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="bg-white border rounded-lg p-4 mb-4 shadow flex flex-col md:flex-row md:justify-between md:items-center gap-4 w-full max-w-2xl mx-auto"
            >
              <div className="flex flex-col md:flex-row items-center md:items-center w-full md:w-auto text-center md:text-left">
                <img
                  src={offer.companyLogo}
                  alt={offer.companyName}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg mb-2 md:mb-0 md:mr-4 flex-shrink-0 mx-auto md:mx-0 object-contain bg-white"
                />
                <div className="w-full">
                  <h3 className="font-bold text-base sm:text-lg break-words">
                    {offer.projectTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 break-words">
                    <span className="font-semibold text-black">Position Offered:</span>{" "}
                    <span className="text-black font-semibold">{offer.positionOffered}</span>
                  </p>
                  <div className="mt-2">
                    <p className="text-xs sm:text-sm text-gray-600 font-medium mb-1">Open Positions:</p>
                    <ul className="list-disc list-inside text-xs sm:text-sm text-gray-700 space-y-1">
                      {offer.openPositions.map((position, idx) => (
                        <li key={idx}>{position}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center md:items-end w-full md:w-auto">
                <span className="text-gray-500 text-xs sm:text-sm mb-1">{offer.status}</span>
                <div className="flex flex-wrap gap-2 text-xs sm:text-sm text-gray-500 mb-2 mt-1 md:justify-end">
                  <span>{offer.location}</span>
                  <span>{offer.hours}</span>
                  <span>{offer.timing}</span>
                  <span>{offer.teamSize}</span>
                </div>
                <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto">
                  <button className="bg-gray-200 px-3 py-1 rounded-full flex items-center justify-center text-xs sm:text-sm w-full md:w-auto whitespace-nowrap">
                    View Job
                    <span className="ml-2">→</span>
                  </button>
                  <button className="bg-green-500 text-white px-3 py-1 rounded-full flex items-center justify-center text-xs sm:text-sm w-full md:w-auto whitespace-nowrap">
                    Accept Offer
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

export default ProjectOffers;