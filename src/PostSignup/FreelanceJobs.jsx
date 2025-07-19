import React, { useState } from 'react';

// Local icons
const icons = {
  fullstack: '/assets/fullstack.svg',
  uidesigner: '/assets/uidesigner.svg',
  projectmanager: '/assets/projectmanager.svg',
  solutionanalyst: '/assets/solutionanalyst.svg',
  financialanalyst: '/assets/financialanalyst.svg',
  hrspecialist: '/assets/hrspecialist.svg',
};

// Sample job data (replace or fetch from an API)
const initialJobs = [
  {
    id: 1,
    icon: icons.fullstack,
    title: 'Full-Stack Developer',
    description:
      'Join a fast-paced team to design and develop robust web applications using modern frameworks. Collaborate with cross-functional teams to deliver high-quality solutions. Proficiency in JavaScript, React, and Node.js preferred. Work in a dynamic environment with opportunities for growth...',
    experience: 'Mid-Level, 3+ years',
    location: 'Dubai - UAE',
    start: 'Jan 15, 2025',
    duration: '8 Months',
    skills: [
      'JavaScript',
      'React',
      'Node.js',
      'SQL',
      'REST APIs',
      'Version control (Git)',
      'Agile methodologies',
    ],
    jobType: 'Contract',
    deadline: 'May 15, 2025',
  },
  {
    id: 2,
    icon: icons.uidesigner,
    title: 'UI Designer',
    description:
      'Create visually stunning and user-friendly interfaces for web and mobile platforms. Collaborate closely with developers and product managers to design intuitive user journeys and ensure pixel-perfect execution. Proficiency in design tools is essential. Join a creative team and innovate...',
    experience: 'Entry-level, 1-2 years',
    location: 'San Francisco, CA',
    start: 'Feb 1, 2025',
    duration: 'Permanent',
    skills: ['Adobe XD', 'Sketch', 'Figma', 'Responsive Design', 'Prototyping'],
    jobType: 'Permanent',
    deadline: 'Apr 30, 2025',
  },
  {
    id: 3,
    icon: icons.projectmanager,
    title: 'Project Manager (PM)',
    description:
      'Lead and manage projects from inception to delivery, ensuring timelines, budgets, and quality standards are met. Drive collaboration among teams and stakeholders to achieve project objectives. Strong leadership skills required. Be part of a team that values innovation and efficiency...',
    experience: 'Senior-level, 6+ years',
    location: 'Hybrid (London, UK)',
    start: 'Feb 28, 2025',
    duration: 'Permanent',
    skills: ['Project Management', 'Agile', 'Scrum', 'Leadership', 'Communication'],
    jobType: 'Permanent',
    deadline: 'Mar 31, 2025',
  },
  {
    id: 4,
    icon: icons.solutionanalyst,
    title: 'Fintech Solutions Analyst',
    description:
      'Analyze financial data, identify trends, and streamline processes to enhance business performance. Prepare detailed reports and presentations. Experience in financial modeling is a plus. Work with a team of experts to drive business success and innovation...',
    experience: 'Mid-Level, 2-4 years',
    location: 'Singapore',
    start: 'Mar 15, 2025',
    duration: '12 Months',
    skills: ['Data Analysis', 'SQL', 'Excel', 'Financial Modeling', 'Problem Solving'],
    jobType: 'Contract',
    deadline: 'May 1, 2025',
  },
  {
    id: 5,
    icon: icons.financialanalyst,
    title: 'Financial Analyst',
    description:
      'Analyze financial data, prepare reports, and provide insights to support decision-making. Collaborate with cross-functional teams to achieve financial goals. Strong analytical skills required. Join a team that values precision and strategic thinking...',
    experience: 'Entry-level, 4+ years',
    location: 'Chicago, IL',
    start: 'Jun 1, 2025',
    duration: '24 Months',
    skills: ['Financial Analysis', 'Excel', 'Data Visualization', 'Budgeting', 'Forecasting'],
    jobType: 'Contract',
    deadline: 'Jun 30, 2025',
  },
  {
    id: 6,
    icon: icons.hrspecialist,
    title: 'HR Specialist',
    description:
      'Manage recruitment, onboarding, and employee relations. Ensure compliance with labor laws and company policies. Support HR initiatives and programs. Excellent communication skills are essential. Be part of a team that values employee growth and satisfaction...',
    experience: 'Entry-level, 3-6 years',
    location: 'Austin, TX',
    start: 'Apr 15, 2025',
    duration: 'Permanent',
    skills: ['Recruitment', 'Employee Relations', 'HRIS', 'Compliance', 'Communication'],
    jobType: 'Permanent',
    deadline: 'May 15, 2025',
  },
];

// Function to truncate text by words
const truncateTextByWords = (text, limit = 30) => {
  const words = text.split(' ');
  if (words.length <= limit) {
    return text;
  }
  return words.slice(0, limit).join(' ') + '...';
};

const FreelanceJobs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [region, setRegion] = useState('');
  const [location, setLocation] = useState('');
  const [industry, setIndustry] = useState('');
  const [jobType, setJobType] = useState('');

  const itemsPerPage = 6;

  const filteredJobs = initialJobs.filter((job) => {
    return (
      (region === '' || job.location.includes(region)) &&
      (location === '' || job.location === location) &&
      (industry === '' || job.skills.includes(industry)) &&
      (jobType === '' || job.jobType === jobType)
    );
  });

  const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedJobs = filteredJobs.slice(startIndex, endIndex);

  return (
    <section className="min-h-screen bg-white">
      {/* Top Heading */}
      <div className="max-w-7xl mx-auto py-8 md:py-10 px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-2xl text-gray-800 text-left ml-0 sm:ml-8">
          Freelance Projects
        </h1>
        <p className="text-gray-600 text-base sm:text-lg mb-6 w-full text-left ml-0 sm:ml-8 leading-relaxed mt-4">
          Find the right opportunities, and apply directly on the GAIN Platform.
        </p>
      </div>

      {/* Dropdowns */}
      <div className="max-w-7xl mx-auto mb-8 px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row flex-wrap gap-2 justify-center">
          <select
            className="w-full sm:w-[290px] bg-white text-gray-700 text-sm rounded-xl px-4 py-3 border-2 border-black outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
            onChange={(e) => setRegion(e.target.value)}
          >
            <option value="">Select Region</option>
            <option value="North America">North America</option>
            <option value="Europe">Europe</option>
            <option value="Asia">Asia</option>
          </select>

          <select
            className="w-full sm:w-[290px] bg-white text-gray-700 text-sm rounded-xl px-4 py-3 border-2 border-black outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">Select Location</option>
            <option value="Dubai - UAE">Dubai - UAE</option>
            <option value="San Francisco, CA">San Francisco, CA</option>
            <option value="London, UK">London, UK</option>
          </select>

          <select
            className="w-full sm:w-[290px] bg-white text-gray-700 text-sm rounded-xl px-4 py-3 border-2 border-black outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
            onChange={(e) => setIndustry(e.target.value)}
          >
            <option value="">Select Industry</option>
            <option value="Technology">Technology</option>
            <option value="Finance">Finance</option>
            <option value="Healthcare">Healthcare</option>
          </select>

          <select
            className="w-full sm:w-[290px] bg-white text-gray-700 text-sm rounded-xl px-4 py-3 border-2 border-black outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
            onChange={(e) => setJobType(e.target.value)}
          >
            <option value="">Select Job Type</option>
            <option value="Contract">Contract</option>
            <option value="Permanent">Permanent</option>
            <option value="Part-Time">Part-Time</option>
          </select>
        </div>
      </div>

      {/* Cards Container */}
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4">
          {displayedJobs.map((job) => (
            <div
              key={job.id}
              className="border-2 border-black rounded-2xl shadow-md p-4 sm:p-6 flex flex-col transition-all transform hover:scale-[1.02] hover:shadow-lg w-full"
            >
              {/* Icon */}
              <img
                src={job.icon}
                alt="Job Icon"
                className="w-14 h-14 sm:w-16 sm:h-16 mb-4 object-contain mx-auto sm:mx-0"
              />

              {/* Title + Description */}
              <div className="mb-4">
                <h2 className="text-base sm:text-lg font-semibold text-gray-800">{job.title}</h2>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  {truncateTextByWords(job.description, 28)}
                </p>
              </div>

              {/* Button Row */}
              <div className="pt-2 sm:pt-4 mb-4">
                <a href="/join-us">
                  <button className="bg-[#030923] text-white px-4 sm:px-6 py-2 rounded-xl h-10 sm:h-12 text-xs sm:text-sm font-semibold hover:bg-blue-700 transition-colors w-full">
                    More Info &amp; Apply
                  </button>
                </a>
              </div>

              {/* Stats Row */}
              <div className="text-xs sm:text-sm text-gray-600 space-y-1 mt-3 mb-4">
                <span className="text-base sm:text-lg font-2xl mr-1">Experience</span>
                <span className="flex items-center mt-2 font-semibold text-base sm:text-lg">
                  {job.experience}
                </span>
                <hr className="my-2 border-black" />
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                  <span className="text-base sm:text-lg font-2xl mr-1 mt-2">Location</span>
                  <span className="text-left sm:text-right mt-1 sm:mt-2 font-semibold text-base sm:text-lg">
                    {job.location}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                  <span className="text-base sm:text-lg font-2xl mr-1">Est. Start</span>
                  <span className="text-left sm:text-right font-semibold text-base sm:text-lg">
                    {job.start}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                  <span className="text-base sm:text-lg font-2xl mr-1">Duration</span>
                  <span className="text-left sm:text-right font-semibold text-base sm:text-lg">
                    {job.duration}
                  </span>
                </div>
              </div>

              {/* Divider above Skills */}
              <hr className="my-2 border-black" />

              {/* Skills Section */}
              <div className="mt-4 text-xs sm:text-sm text-gray-600">
                <span className="font-semibold">Skills:</span>
                <ul className="flex flex-wrap gap-2 mt-2">
                  {job.skills.map((skill, idx) => (
                    <li
                      key={idx}
                      className="text-gray-700 py-1 px-3 sm:px-4 text-xs rounded-full border border-black"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex flex-wrap items-center justify-center sm:justify-end mt-8 space-x-2">
          {/* Page numbers */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
            <button
              key={pageNum}
              onClick={() => setCurrentPage(pageNum)}
              className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold mb-2 sm:mb-0
                ${
                  currentPage === pageNum
                    ? 'bg-[#313131] text-white'
                    : 'bg-white border border-gray-300 text-gray-700 hover:bg-blue-50'
                }`}
            >
              {pageNum}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreelanceJobs;
