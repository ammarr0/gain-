import React, { useEffect, useState } from 'react';
import User from "../../assets/user.png";
import location from "../../assets/location.png";
import arrowup from "../../assets/arrow-up-right-white.png";
import arrowupblack from "../../assets/arrow-up-right-black.png";
import { useNavigate } from 'react-router-dom';

// Helper to get cookie
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}

const accessToken = getCookie('access_token');

const Jobs = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 10;

  useEffect(() => {
    setLoading(true);
    fetch('https://gain-b7ea8e7de810.herokuapp.com/jobs/list', {
      headers: {
        'Authorization': accessToken ? `Bearer ${accessToken}` : ''
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data && data.status && Array.isArray(data.data)) {
          setJobs(data.data);
        } else {
          setJobs([]);
        }
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching jobs');
        setLoading(false);
      });
  }, []);

  const renderButton = (bgColor, textColor, text, imgSrc, onClick) => (
    <button
      className={`w-[135px] h-[28px] rounded-[16px] ${bgColor} text-sm ${textColor} flex items-center justify-center`}
      onClick={e => {
        e.stopPropagation();
        onClick();
      }}
    >
      {text} <img src={imgSrc} alt="" className="ml-1" />
    </button>
  );

  const renderInfoItem = (icon, label, value) => (
    <div className="flex items-center gap-1" key={label + value}>
      <img src={icon} alt={label} className="h-4 w-4" />
      <span className="text-sm text-gray-700">{value}</span>
    </div>
  );

  // Pagination logic
  const totalPages = Math.ceil(jobs.length / jobsPerPage);
  const startIdx = (currentPage - 1) * jobsPerPage;
  const endIdx = startIdx + jobsPerPage;
  const jobsToDisplay = jobs.slice(startIdx, endIdx);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      <div className="flex-1 flex flex-col lg:flex-row">
        {/* Main Content */}
        <div className="w-full lg:w-3/4 p-4 sm:p-6 md:p-8">
          <div className="mx-auto max-w-6xl">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="bg-[#C7E1FF] rounded-2xl p-6 sm:p-8 md:w-1/2 h-48 sm:h-60 md:h-72 flex items-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-2 leading-tight">
                  Discover <br />
                  Your Next <span className="font-bold">Opportunity</span> <br />
                  as a Firm
                </h1>
              </div>
              <div className="rounded-2xl border-2 border-blue-200 p-6 sm:p-8 md:w-1/2 flex items-center justify-center text-left">
                <p className="text-gray-700 text-xl sm:text-2xl md:text-3xl leading-relaxed">
                  Browse opportunities and take the next step in your firm’s journey.
                </p>
              </div>
            </div>
            {/* Tabs */}
            <div className="flex flex-wrap items-center space-x-0 sm:space-x-6 border-b border-gray-200 mb-8">
              {['Project Management Jobs', 'All Jobs', 'Saved Jobs'].map((tab, index) => (
                <button
                  key={index}
                  className={`pb-2 mr-4 sm:mr-0 mb-2 sm:mb-0 ${index === 0 ? 'text-gray-900 font-semibold border-b-4 border-blue-500' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
            {/* Job Cards */}
            <div className="space-y-6">
              {loading && (
                <div className="text-center py-8">Loading jobs...</div>
              )}
              {error && (
                <div className="text-center text-red-600 py-8">{error}</div>
              )}
              {!loading && !error && jobsToDisplay.length === 0 && (
                <div className="text-center py-8 text-gray-500">No jobs found.</div>
              )}
              {!loading && !error && jobsToDisplay.map((job, index) => (
                <div
                  key={job._id || index}
                  className="bg-white border border-gray-300 rounded-xl w-full mx-auto p-6 flex flex-col min-h-[200px] justify-between cursor-pointer"
                  onClick={() => navigate(`/consultingfirm/jobs/${job._id}`)}
                >
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <h2 className="text-xl md:text-2xl font-bold text-black">{job.title}</h2>
                    <div className="flex flex-wrap gap-2 md:gap-4 mt-2 md:mt-0">
                      {renderButton("bg-white border border-[#030923]", "text-[#030923]", "Manage Job", arrowupblack, () => navigate(`/consultingfirm/jobs/${job._id}`))}
                      {renderButton("bg-[#030923]", "text-white", "View Job", arrowup, () => navigate(`/consultingfirm/jobs/${job._id}`))}
                    </div>
                  </div>

                  <p className="text-black mt-2">{job.description}</p>

                  <div className="mt-4 flex flex-col md:flex-row items-start md:items-center justify-start gap-3">
                    <img src={User} alt="User" className="h-8 w-8 rounded-full object-cover cursor-pointer" />
                    <div>
                      <h3 className="font-semibold text-black">{job.project_type || "N/A"}</h3>
                      <hr className="border-black" />
                      <p className="text-xs text-black">{job.location}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {renderInfoItem(location, "Location", job.location)}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-700 font-semibold">Hourly Rate:</span>
                      <span className="text-lg text-gray-700">{job.hourly_rate}</span>
                    </div>
                  </div>
                  <div className='flex flex-col md:flex-row gap-4 mt-2'>
                    {job.skills && job.skills.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill, idx) => (
                          <span key={idx} className="bg-white border border-gray-200 text-sm text-black rounded px-3 py-1">{skill}</span>
                        ))}
                      </div>
                    )}
                  </div>

                  {job.files && job.files.length > 0 && (
                    <div className="mt-2 flex flex-col gap-1">
                      <span className="text-xs font-semibold text-gray-700">Files:</span>
                      {job.files.map((file, idx) => (
                        <a
                          key={idx}
                          href={file}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline text-xs break-all"
                        >
                          {file}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            {/* Pagination Controls */}
            {!loading && !error && totalPages > 1 && (
              <div className="flex justify-center items-center mt-8 gap-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`px-3 py-1 rounded-md border ${currentPage === 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white text-black border-black hover:bg-gray-100'}`}
                >
                  Prev
                </button>
                {Array.from({ length: totalPages }, (_, idx) => (
                  <button
                    key={idx + 1}
                    onClick={() => handlePageChange(idx + 1)}
                    className={`px-3 py-1 rounded-md border ${currentPage === idx + 1 ? 'bg-black text-white border-black' : 'bg-white text-black border-black hover:bg-gray-100'}`}
                  >
                    {idx + 1}
                  </button>
                ))}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`px-3 py-1 rounded-md border ${currentPage === totalPages ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white text-black border-black hover:bg-gray-100'}`}
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
        {/* Sidebar */}
        <div className="w-full lg:w-1/4 p-4 sm:p-6 md:p-6 lg:p-6 ml-0 lg:ml-auto rounded-lg">
          <div className="bg-white shadow-md rounded-2xl p-4 sm:p-6 flex flex-col gap-4 mb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xl text-white">
                <span className="font-semibold">C</span>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-[#030923]">Clay</h3>
                <p className="text-xs sm:text-sm text-gray-600">Consulting Firm</p>
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
              <h4 className="font-semibold text-xs sm:text-base">Active Jobs</h4>
              <p className="text-[#007DF0] text-xs sm:text-base">3</p>
            </div>
            <div>
              <h4 className="font-semibold text-xs sm:text-base">Availability Badge</h4>
              <p className="text-[#007DF0] text-xs sm:text-base">On</p>
            </div>
            <div>
              <h4 className="font-semibold text-xs sm:text-base">Promotion with GAIN</h4>
              <p className="text-[#007DF0] text-xs sm:text-base">On</p>
            </div>
            <div>
              <h4 className="font-semibold text-xs sm:text-base">Promotion with Ads</h4>
              <p className="text-gray-600 text-xs sm:text-base">Off</p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-2xl p-4 sm:p-6 flex flex-col gap-4 mb-6">
            <h4 className="font-semibold text-lg sm:text-xl">Preferences</h4>
            <div className="flex justify-between">
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm">Hours Per Week</span>
                <span className="text-xs sm:text-sm">As per needed - Open to offers</span>
              </div>
            </div>
            <div className="flex justify-between mt-2">
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm">Profile Visibility</span>
                <span className="text-xs sm:text-sm">Public</span>
              </div>
            </div>
            <div className="flex flex-col mt-2">
              <span className="text-xs sm:text-sm">Job Preference</span>
              <span className="text-xs sm:text-sm">Open to job offers</span>
            </div>
            <div className="flex flex-col mt-2">
              <span className="text-xs sm:text-sm">My Categories</span>
              <span className="text-xs sm:text-sm">Project Management</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;