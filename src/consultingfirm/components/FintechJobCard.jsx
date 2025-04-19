import React from "react";
import { useNavigate } from "react-router-dom";

const FintechJobCard = ({ jobData }) => {
  const navigate = useNavigate();

  const handleCardClick = (jobData) => {
    navigate(`/job/${jobData.company}`, { state: { jobData } });
  };

  return (
    <div className="w-full bg-white rounded-2xl shadow-lg p-6 space-y-4 cursor-pointer" onClick={() => handleCardClick(jobData)}>
      <div className="flex items-start space-x-4">
        <img
          src={jobData.logo}
          alt={jobData.company}
          className={jobData.logoSize}
        />
        <div>
          <h2 className="text-xl font-semibold">{jobData.role}</h2>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            {jobData.responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="text-sm text-gray-600 flex flex-wrap gap-3">
        <span>📍 {jobData.location}</span>
        <span>🕐 {jobData.hours}</span>
        <span>🗓️ {jobData.time}</span>
      </div>
      <div className="flex flex-wrap gap-2 mt-2">
        {jobData.skills.map((skill, index) => (
          <span
            key={index}
            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="ml-auto text-right mt-0">
        <div className="text-lg font-semibold">{jobData.rate}</div>
        <a
          href={jobData.client.jobLink}
          className="text-white bg-black rounded-md px-4 py-1 mt-1 inline-block text-sm"
        >
          View Job
        </a>
      </div>
    </div>
  );
};

const FintechJobCards = () => {
  const jobs = [
    {
      company: "Juxtapose",
      role: "Product Designer",
      rate: "$80/hr",
      hours: "25 hrs/wk",
      location: "Work from anywhere",
      time: "Anytime",
      logo: "/assets/juxtapose.png",
      logoSize: "w-16 h-16",
      responsibilities: [
        "Develop user-centered product designs that improve customer experience.",
        "Collaborate with engineering and product teams for implementation.",
        "Lead design sessions and present design concepts to stakeholders."
      ],
      skills: [
        "Business Development",
        "Market Knowledge",
        "Technical Acumen"
      ],
      client: {
        jobLink: "https://www.gain.com/job1345763432"
      }
    },
    {
      company: "Reddit",
      role: "Product Designer",
      rate: "$80/hr",
      hours: "25 hrs/wk",
      location: "United States | Canada",
      time: "Anytime",
      logo: "/assets/reddit.png",
      logoSize: "w-16 h-16",
      responsibilities: [
        "Design engaging user experiences for Reddit's platforms.",
        "Collaborate with cross-functional teams to define product design strategy.",
        "Conduct user research to identify pain points and opportunities."
      ],
      skills: [
        "Business Development",
        "Market Knowledge",
        "Analytical Skills"
      ],
      client: {
        jobLink: "https://www.gain.com/job1345763445"
      }
    },
    {
      company: "Bank of America",
      role: "Sr. UX Researcher",
      rate: "$100 - 120/hr",
      hours: "25 hrs/wk",
      location: "United States only",
      time: "Anytime",
      logo: "/assets/bankofamerica.png",
      logoSize: "w-16 h-16",
      responsibilities: [
        "Plan and conduct user research to inform design decisions.",
        "Analyze research data to generate actionable insights.",
        "Collaborate with design, product, and engineering teams to improve UX."
      ],
      skills: [
        "Market Knowledge",
        "Technical Acumen",
        "Analytical Skills"
      ],
      client: {
        jobLink: "https://www.gain.com/job1345763489"
      }
    }
  ];

  return (
    <div className="space-y-8">
      {jobs.map((job, index) => (
        <FintechJobCard key={index} jobData={job} />
      ))}
    </div>
  );
};

export default FintechJobCards;