import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SidebarApplyJob from "../../components/Apply";

const iconMap = {
  "location.png": require("../../assets/location.png"),
  "calendar.png": require("../../assets/calendar.png"),
  "clock.png": require("../../assets/clock.png"),
};

// Loader styled like in newmatches.jsx
const PrimaryCircleLoader = () => (
  <>
    <style>
      {`
        .loader-blue-circle {
          display: inline-block;
          width: 48px;
          height: 48px;
          border: 5px solid #3B82F6;
          border-radius: 50%;
          border-top-color: transparent;
          animation: spin-blue 1s linear infinite;
        }
        @keyframes spin-blue {
          to { transform: rotate(360deg); }
        }
      `}
    </style>
    <div className="flex justify-center items-center py-16">
      <span className="loader-blue-circle" aria-label="Loading"></span>
    </div>
  </>
);

// Helper to get cookie value by name
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}

const JobPostPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // For sidebar actions (dummy for now)
  const [isSaved, setIsSaved] = useState(false);

  // Dummy client info for sidebar (replace with real data if available)
  const clientInfo = {
    location: job?.location || "Unknown",
    memberSince: job?.created_at ? new Date(job.created_at).getFullYear() : "N/A",
    jobsPosted: 12,
    hireRate: 80,
  };

  // Dummy handlers for sidebar
  const handleApplyClick = () => {
    alert("Apply clicked!");
  };
  const handleSaveClick = () => {
    setIsSaved((prev) => !prev);
  };

  useEffect(() => {
    const fetchJob = async () => {
      setLoading(true);
      setError(null);
      try {
        const accessToken = getCookie('access_token');
        const response = await fetch(`https://gain-b7ea8e7de810.herokuapp.com/projects/detail/${id}`, {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        });
        if (!response.ok) {
          throw new Error("Failed to fetch job details");
        }
        const data = await response.json();
        const jobData = data.data || data;
        setJob(jobData);
      } catch (err) {
        setError(err.message || "Error fetching job details");
        setJob(null);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchJob();
    }
    // eslint-disable-next-line
  }, [id]);

  if (loading) return  <div className="p-8 text-center text-gray-600 w-full" ><PrimaryCircleLoader /></div>;
  if (error) return <div className="p-8 text-center text-red-600">{error}</div>;
  if (!job) return <div className="p-8 text-center text-gray-600">Job not found</div>;

  function formatDate(dateStr) {
    if (!dateStr) return "";
    const d = new Date(dateStr);
    return d.toLocaleString();
  }

  return (
    <div className="flex flex-col lg:flex-row items-start min-h-screen bg-white py-8 w-full">
      {/* Main Content */}
      <div className="w-full lg:w-3/4 bg-white shadow-lg rounded-2xl p-6 md:p-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 border-b pb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-1">{job.title}</h1>
            <div className="flex flex-wrap items-center gap-2 text-gray-500 text-sm">
              <span className="flex items-center gap-1">
                <img src={iconMap["location.png"]} alt="Location" className="h-4 w-4" />
                {job.location}
              </span>
              <span className="hidden md:inline">•</span>
              <span>
                Posted by: <span className="font-medium text-gray-700">{job.created_by ? job.created_by : "N/A"}</span>
              </span>
              <span className="hidden md:inline">•</span>
              <span>
                Created: <span className="font-medium">{formatDate(job.created_at)}</span>
              </span>
              <span className="hidden md:inline">•</span>
              <span>
                Updated: <span className="font-medium">{formatDate(job.updated_at)}</span>
              </span>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2">
            <span className="text-xl font-semibold text-[#030923]">{job.hourly_rate ? `$${job.hourly_rate}/hr` : ""}</span>
            <span className="text-xs text-gray-500">Project Type: <span className="font-medium text-gray-700">{job.project_type}</span></span>
          </div>
        </div>

        {/* Info Items */}
        <div className="flex flex-wrap gap-6 mb-6">
          <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2">
            <img src={iconMap["clock.png"]} alt="Hourly Rate" className="h-4 w-4" />
            <span className="text-gray-700 font-medium">Hourly Rate:</span>
            <span className="text-gray-900">${job.hourly_rate}</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2">
            <img src={iconMap["calendar.png"]} alt="Project Type" className="h-4 w-4" />
            <span className="text-gray-700 font-medium">Project Type:</span>
            <span className="text-gray-900">{job.project_type}</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2">
            <span className="text-gray-700 font-medium">Is Deleted:</span>
            <span className={`font-semibold ${job.is_deleted ? "text-red-500" : "text-green-600"}`}>{job.is_deleted ? "Yes" : "No"}</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2">
            <span className="text-gray-700 font-medium">Is Disabled:</span>
            <span className={`font-semibold ${job.is_disabled ? "text-red-500" : "text-green-600"}`}>{job.is_disabled ? "Yes" : "No"}</span>
          </div>
        </div>

        {/* Skills */}
        {job.skills && Array.isArray(job.skills) && job.skills.length > 0 && (
          <div className="mb-6">
            <h3 className="text-md font-semibold text-gray-800 mb-2">Skills Required:</h3>
            <div className="flex flex-wrap gap-2">
              {job.skills.map((tag, idx) => (
                <span key={idx} className="bg-gray-200 px-3 py-1 rounded-full text-sm font-medium text-gray-700">{tag}</span>
              ))}
            </div>
          </div>
        )}

        {/* Description */}
        <div className="mb-6">
          <h2 className="text-lg md:text-xl font-semibold mb-2 text-gray-900">Description</h2>
          <p className="text-gray-700 leading-relaxed">{job.description}</p>
        </div>

        {/* Files */}
        <div className="mb-6">
          <h2 className="text-lg md:text-xl font-semibold mb-2 text-gray-900">Files</h2>
          {Array.isArray(job.files) && job.files.length > 0 ? (
            <ul className="list-disc list-inside space-y-1">
              {job.files.map((file, idx) => (
                <li key={idx}>
                  <a href={file} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline break-all">{file}</a>
                </li>
              ))}
            </ul>
          ) : (
            <span className="text-gray-500">No files attached.</span>
          )}
        </div>

        {/* Updated By */}
        <div className="flex justify-end">
          <span className="text-xs text-gray-500">Last updated by: <span className="font-medium text-gray-700">{job.updated_by ? job.updated_by : "N/A"}</span></span>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-full lg:w-1/4 px-0 lg:pr-8 mt-8 lg:mt-0 ml-2">
        <SidebarApplyJob
          onApplyClick={handleApplyClick}
          onSaveClick={handleSaveClick}
          isSaved={isSaved}
          client={clientInfo}
          disabled={false}
        />
      </div>
    </div>
  );
};

export default JobPostPage;