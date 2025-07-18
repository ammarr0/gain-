import React from 'react';
import { useNavigate } from 'react-router-dom';

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
      "Business Development",
      "Market Knowledge",
      "Technical Acumen"
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
      "Business Development",
      "Market Knowledge",
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
      "Market Knowledge",
      "Technical Acumen",
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

const Jobs = () => {
  const navigate = useNavigate();

  const renderJobStatus = (status) => {
    const statusClasses = {
      "Accepting Applications": 'bg-green-200 text-green-700',
      "Closed": 'bg-red-200 text-red-700',
      "Pending": 'bg-yellow-200 text-yellow-700'
    };
    return <span className={`text-sm px-3 py-2 rounded-lg ${statusClasses[status]}`}>{status}</span>;
  };

  const handleCardClick = (match) => {
    navigate(`/job/${match.company}`, { state: { match } });
  };

  return (
    <div className="w-full min-h-screen flex bg-white">
      <div className="flex-1 flex" >
        <div className="w-3/4 p-8">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="bg-[#C7E1FF] rounded-2xl p-8 md:w-1/2 h-72" >
                <h1 className="text-5xl font-semibold text-gray-900 mb-2">
                  Discover <br />
                  Your Next <span className="font-bold">Opportunity</span> <br />
                  as a Firm
                </h1>
              </div>
              <div className="rounded-2xl border-2 border-blue-200 p-8 md:w-1/2 flex items-center justify-center text-left">
                <p className="text-gray-700 text-3xl leading-relaxed">
                  Browse opportunities and take the next step in your firm’s journey.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-6 border-b border-gray-200 mb-8">
              {['Project Management Jobs', 'All Jobs', 'Saved Jobs'].map((tab, index) => (
                <button key={index} className={`pb-2 ${index === 0 ? 'text-gray-900 font-semibold border-b-4 border-blue-500' : 'text-gray-500 hover:text-gray-700'}`}>
                  {tab}
                </button>
              ))}
            </div>
            <div className="space-y-12">
              {matches.map((job, idx) => (
                <div key={idx} className="bg-white shadow-lg  rounded-xl p-10 flex justify-between items-center h-44 cursor-pointer" onClick={() => handleCardClick(job)}>
                  <div className="flex gap-4 items-center">
                    <div className="w-10 h-10 rounded-full">
                      <img src={job.logo} alt="" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-[#030923]">{job.company}</h3>
                      <p className="text-xs text-gray-600 mt-2 mb-4 flex items-center w-[300px]">
                        <span className="mr-2"><i className="fas fa-map-marker-alt"></i></span>
                        {job.location} | 
                        <span className="mx-2"><i className="fas fa-calendar-alt"></i></span>
                        {job.hours} | 
                        <span className="ml-2"><i className="fas fa-clock"></i></span>
                        Anytime
                      </p>
                      <div className="border-b border-gray-300 mb-4"></div>
                      {renderJobStatus(job.status)}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-gray-800">{job.rate}</p>
                    <div className="mt-2">
                      <button 
                        className="text-blue-600 hover:text-blue-700 border-b-2 border-blue-600 pb-1"
                        onClick={() => navigate(`/job/${job.company}`)}
                      >
                        View Job
                      </button>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      {job.skills.map((skill, index) => (
                        <span key={index} className="text-sm border border-gray-300 px-2 py-1 rounded-lg">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-1/4 p-6 ml-auto rounded-lg">
          <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col gap-4 mb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xl text-white">
                <span className="font-semibold">C</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#030923]">Clay</h3>
                <p className="text-sm text-gray-600">Consulting Firm</p>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400">★</span>
                  <span>4.5</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold text-xs text-[#007DF0]">Complete your profile</h4>
              {["Profile", "Portfolio", "Experience", "Education", "Certifications"].map((item, idx) => (
                <div key={idx} className="flex items-center">
                  <span className="text-[10px] w-1/3">{item}</span>
                  <div className="flex items-center gap-2 w-2/3">
                    <div className="w-full bg-gray-200 h-2 rounded-full">
                      <div className="h-2 rounded-full " style={{ width: '50%', backgroundColor: '#030923' }}></div>
                    </div>
                    <span className="text-[10px]">50%</span>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <h4 className="font-semibold">Active Jobs</h4>
              <p className="text-[#007DF0]">3</p>
            </div>
            <div>
              <h4 className="font-semibold">Availability Badge</h4>
              <p className="text-[#007DF0]">On</p>
            </div>
            <div>
              <h4 className="font-semibold">Promotion with GAIN</h4>
              <p className="text-[#007DF0]">On</p>
            </div>
            <div>
              <h4 className="font-semibold">Promotion with Ads</h4>
              <p className="text-gray-600">Off</p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col gap-4 mb-6">
            <h4 className="font-semibold text-xl">Preferences</h4>
            <div className="flex justify-between">
              <div className="flex flex-col">
                <span className="text-sm">Hours Per Week</span>
                <span className="text-sm">As per needed - Open to offers</span>
              </div>
            </div>
            <div className="flex justify-between mt-2">
              <div className="flex flex-col">
                <span className="text-sm">Profile Visibility</span>
                <span className="text-sm">Public</span>
              </div>
            </div>
            <div className="flex flex-col mt-2">
              <span className="text-sm">Job Preference</span>
              <span className="text-sm">Open to job offers</span>
            </div>
            <div className="flex flex-col mt-2">
              <span className="text-sm">My Categories</span>
              <span className="text-sm">Project Management</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;