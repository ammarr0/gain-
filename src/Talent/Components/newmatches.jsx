import React from "react";
import { useNavigate } from "react-router-dom";

const NewMatches = () => {
  const navigate = useNavigate();

  const matches = [
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
      requirements: [
        "3+ years experience in product design.",
        "Proficiency with Figma, Sketch, and prototyping tools.",
        "Strong portfolio demonstrating UX/UI expertise."
      ],
      offer: [
        "Remote-first company with flexible hours.",
        "Competitive salary and benefits.",
        "Opportunities for career growth and development."
      ],
      apply: "Please share your resume and a design portfolio that demonstrates your work and design thinking process.",
      skills: [
        "Business Development and Sales Expertise",
        "Market Knowledge",
        "Technical Acumen",
        "CRM",
        "HubSpot",
        "Salesforce",
        "Analytical Skills"
      ],
      projectType: "Full Time",
      status: "Accepting Applications",
      client: {
        verifiedPayment: true,
        verifiedPhone: true,
        country: "USA",
        location: "New York 3:52 AM",
        jobsPosted: 10,
        openJobs: 4,
        totalSpent: "$25,000",
        hires: 10,
        activeJobs: 4,
        memberSince: "January, 2025",
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
      requirements: [
        "5+ years of product design experience.",
        "Experience with responsive and mobile-first designs.",
        "Ability to collaborate in a fast-paced team environment."
      ],
      offer: [
        "Flexible working arrangements including remote options.",
        "Stock options and comprehensive health benefits.",
        "Creative and inclusive company culture."
      ],
      apply: "Submit your portfolio and resume detailing relevant product design experience.",
      skills: [
        "Business Development and Sales Expertise",
        "Market Knowledge",
        "Technical Acumen",
        "CRM",
        "HubSpot",
        "Salesforce",
        "Analytical Skills"
      ],
      projectType: "Full Time",
      status: "Accepting Applications",
      client: {
        verifiedPayment: true,
        verifiedPhone: true,
        country: "USA",
        location: "New York 3:52 AM",
        jobsPosted: 15,
        openJobs: 5,
        totalSpent: "$30,000",
        hires: 12,
        activeJobs: 5,
        memberSince: "February, 2025",
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
      requirements: [
        "5+ years of UX research experience, preferably in finance.",
        "Proficiency in both qualitative and quantitative research methods.",
        "Strong communication and presentation skills."
      ],
      offer: [
        "Remote work flexibility.",
        "Competitive compensation and benefits.",
        "Professional development opportunities."
      ],
      apply: "Please attach your resume and a statement about your UX research philosophy and experience.",
      skills: [
        "Business Development and Sales Expertise",
        "Market Knowledge",
        "Technical Acumen",
        "CRM",
        "HubSpot",
        "Salesforce",
        "Analytical Skills"
      ],
      projectType: "Full Time",
      status: "Accepting Applications",
      client: {
        verifiedPayment: true,
        verifiedPhone: true,
        country: "USA",
        location: "New York 3:52 AM",
        jobsPosted: 20,
        openJobs: 8,
        totalSpent: "$50,000",
        hires: 18,
        activeJobs: 8,
        memberSince: "March, 2025",
        jobLink: "https://www.gain.com/job1345763489"
      }
    }
  ];
  const handleCardClick = (match) => {
    navigate(`/job/${match.company}`, { state: { match } });
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="p-4 max-w-full">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
          <h2 className="text-2xl font-medium">Your newest matches</h2>
          <button className="text-sm font-semibold underline hover:underline sm:mr-12">
            View All Jobs
          </button>
        </div>

        {/* Responsive grid: 1 col on mobile, 2 on sm, 3 on md+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {matches.map((match, idx) => (
            <div
              key={idx}
              onClick={() => handleCardClick(match)}
              className="rounded-xl border-2 border-[#B9DAFF] p-4 shadow-sm hover:shadow-lg transition bg-white h-[371px] cursor-pointer flex flex-col"
            >
              <div className="flex justify-between items-start">
                <img
                  src={match.logo}
                  alt={match.company}
                  className={`${match.logoSize} rounded-md mb-2`}
                />
                <div className="flex gap-2">
                  <button><img src="/assets/share.png" alt="Share" className="w-5 h-5" /></button>
                  <button><img src="/assets/bookmark.png" alt="Bookmark" className="w-5 h-5" /></button>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-[#030923]">{match.company}</h3>
              <p className="text-gray-600 text-2xl mt-2">{match.role}</p>
              <p className="text-2xl font-semibold mt-4">{match.rate}</p>

              <hr className="my-3 border-black" />

              <div className="text-sm text-gray-600 space-y-4 mt-8">
                <p className="flex flex-wrap items-center">
                  <img src="https://cdn-icons-png.flaticon.com/512/3239/3239948.png" alt="Hours" className="inline w-4 h-4 mr-1" />
                  {match.hours}
                  <span className="hidden xs:inline">&nbsp;&nbsp;</span>
                  <img src="https://cdn-icons-png.flaticon.com/512/927/927667.png" alt="Location" className="inline w-4 h-4 ml-4 sm:ml-8" />
                  {match.location}
                </p>
                <p>
                  <img src="https://cdn-icons-png.flaticon.com/512/2088/2088617.png" alt="Clock" className="inline w-4 h-4 mr-1" />
                  {match.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};

export default NewMatches;