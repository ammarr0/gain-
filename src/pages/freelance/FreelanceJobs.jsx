import React, { useState } from 'react';

// Local icons
const icons = {
  fullstack: '/assets/fullstack.svg',
  uidesigner: '/assets/uidesigner.svg',
  projectmanager: '/assets/projectmanager.svg',
  solutionanalyst: '/assets/solutionanalyst.svg',
  financialanalyst: '/assets/financialanalyst.svg',
  hrspecialist: '/assets/hrspecialist.svg'
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
    skills: ['JavaScript', 'React', 'Node.js', 'SQL', 'REST APIs', 'Version control (Git)', 'Agile methodologies'],
    jobType: 'Contract',
    deadline: 'May 15, 2025'
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
    deadline: 'Apr 30, 2025'
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
    deadline: 'Mar 31, 2025'
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
    deadline: 'May 1, 2025'
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
    deadline: 'Jun 30, 2025'
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
    deadline: 'May 15, 2025'
  }
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
  const itemsPerPage = 6;

  const totalPages = Math.ceil(initialJobs.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedJobs = initialJobs.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section className="min-h-screen bg-white px-4">
      {/* Top Heading */}
      <div className="max-w-7xl mx-auto py-8 md:py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          Freelance Projects
        </h1>
        <p className="text-gray-500 mt-2 mb-6">
          Find the right opportunities, and apply directly on the GAIN Platform.
        </p>
      </div>

      {/* Cards Container */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2">
          {displayedJobs.map((job) => (
            <div
              key={job.id}
              className="border-2 border-gray-300 rounded-2xl shadow-md p-6 flex flex-col transition-all transform hover:scale-105 hover:shadow-lg w-10/12 mx-auto"
            >
              {/* Icon */}
              <img
                src={job.icon}
                alt="Job Icon"
                className="w-16 h-16 mb-4 object-contain"
              />

              {/* Title + Description */}
              <div className="mb-4">
                <h2 className="text-lg font-semibold text-gray-800">{job.title}</h2>
                <p className="text-sm text-gray-500 mt-1">{truncateTextByWords(job.description, 30)}</p>
              </div>

              {/* Button Row */}
              <div className="pt-4 mb-4">
                <button className="bg-[#030923] text-white px-6 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition-colors w-full">
                  More Info &amp; Apply
                </button>
              </div>

              {/* Stats Row */}
              <div className="text-sm text-gray-600 space-y-1 mb-4">
                <div className="flex items-center">
                  <span className="font-semibold mr-1">Experience:</span>
                  {job.experience}
                </div>
                <hr className="my-2 border-black" />
                <div className="flex items-center">
                  <span className="font-semibold mr-1">Location:</span>
                  {job.location}
                </div>
                <div className="flex items-center">
                  <span className="font-semibold mr-1">Est. Start:</span>
                  {job.start}
                </div>
                <div className="flex items-center">
                  <span className="font-semibold mr-1">Duration:</span>
                  {job.duration}
                </div>
              </div>

              {/* Divider above Skills */}
              <hr className="my-2 border-black" />

              {/* Skills Section */}
              <div className="mt-4 text-sm text-gray-600">
                <span className="font-semibold">Skills:</span>
                <ul className="flex flex-wrap gap-2 mt-2">
                  {job.skills.map((skill, idx) => (
                    <li
                      key={idx}
                      className="bg-gray-200 text-gray-700 py-1 px-3 text-xs rounded-full"
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
        <div className="flex items-center justify-center mt-8 space-x-2">
          {/* Prev Button */}
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold 
              ${currentPage === 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white border border-gray-300 text-gray-700 hover:bg-blue-50'}`}
          >
            &laquo;
          </button>

          {/* Page numbers */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
            <button
              key={pageNum}
              onClick={() => setCurrentPage(pageNum)}
              className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold 
                ${currentPage === pageNum ? 'bg-blue-600 text-white' : 'bg-white border border-gray-300 text-gray-700 hover:bg-blue-50'}`}
            >
              {pageNum}
            </button>
          ))}

          {/* Next Button */}
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold 
              ${currentPage === totalPages ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white border border-gray-300 text-gray-700 hover:bg-blue-50'}`}
          >
            &raquo;
          </button>
        </div>
      </div>
    </section>
  );
};

export default FreelanceJobs;
