import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SidebarApplyJob from "../../components/Apply";

const iconMap = {
  "location.png": require("../../assets/location.png"),
  "calendar.png": require("../../assets/calendar.png"),
  "clock.png": require("../../assets/clock.png"),
};

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

  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const fetchJob = async () => {
      setLoading(true);
      setError(null);
      try {
        const accessToken = getCookie('access_token');
        const response = await fetch(`https://gain-b7ea8e7de810.herokuapp.com/jobs/detail/${id}`, {
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
  }, [id]);

  function formatDate(dateStr) {
    if (!dateStr) return "";
    const d = new Date(dateStr);
    return d.toLocaleString();
  }

  // Sidebar client info (using job data if available)
  const clientInfo = {
    location: job?.location || "Unknown",
    memberSince: job?.created_at ? new Date(job.created_at).getFullYear() : "N/A",
    jobsPosted: job?.jobs_posted || 12,
    hireRate: job?.hire_rate || 80,
    rating: job?.rating || 4.7
  };

  const handleApplyClick = () => {
    alert("Apply clicked!");
  };
  const handleSaveClick = () => {
    setIsSaved((prev) => !prev);
  };

  if (loading) return  <div className="p-8 text-center text-gray-600 w-full" ><PrimaryCircleLoader /></div>;
  if (error) return <div className="p-8 text-center text-red-600">{error}</div>;
  if (!job) return <div className="p-8 text-center text-gray-600">Job not found</div>;

  return (
    <div className="flex flex-col lg:flex-row items-start min-h-screen bg-white py-8 w-full">
      {/* Main Content */}
      <div className="w-full lg:w-3/4 bg-white shadow-lg rounded-2xl p-6 md:p-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 border-b pb-4">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-2 tracking-tight leading-tight">
              {job.title}
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-gray-500 text-sm mt-1">
              <span className="flex items-center gap-1 bg-gray-100 rounded-full px-2 py-1">
                <span className="text-gray-500">Posted by:</span>
                <span className="font-semibold text-gray-700">{job.created_by ? job.created_by : "N/A"}</span>
              </span>
              <span className="flex items-center gap-1 bg-gray-100 rounded-full px-2 py-1">
                <span className="text-gray-500">Created:</span>
                <span className="font-semibold">{formatDate(job.created_at)}</span>
              </span>
              <span className="flex items-center gap-1 bg-gray-100 rounded-full px-2 py-1">
                <span className="text-gray-500">Updated:</span>
                <span className="font-semibold">{formatDate(job.updated_at)}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Info Items */}
        <div className="flex flex-wrap gap-6 mb-6">
          <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2">
            <img src={iconMap["clock.png"]} alt="Hourly Rate" className="h-4 w-4" />
            <span className="text-gray-700 font-medium">Hourly Rate:</span>
            <span className="text-gray-900">
              {job.hourly_rate !== null && job.hourly_rate !== undefined
                ? `$${job.hourly_rate}${job.payment_type === "Hourly" ? "/hr" : ""}`
                : (job.budget_range ? `$${job.budget_range}` : "N/A")}
            </span>
          </div>
          <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2">
            <img src={iconMap["calendar.png"]} alt="Project Type" className="h-4 w-4" />
            <span className="text-gray-700 font-medium">Project Type:</span>
            <span className="text-gray-900">{job.project_type || job.category || "N/A"}</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2">
            <img src={iconMap["location.png"]} alt="Location Type" className="h-4 w-4" />
            <span className="text-gray-700 font-medium">Location Type:</span>
            <span className="text-gray-900">{job.location_type || job.location || "N/A"}</span>
          </div>
        </div>

        {/* Skills */}
        {(job.skills && Array.isArray(job.skills) && job.skills.length > 0) ||
         (job.key_skills && Array.isArray(job.key_skills) && job.key_skills.length > 0) ? (
          <div className="mb-6">
            <h3 className="text-md font-semibold text-gray-800 mb-2">Skills Required:</h3>
            <div className="flex flex-wrap gap-2">
              {job.skills && Array.isArray(job.skills) && job.skills.map((tag, idx) => (
                <span key={idx} className="bg-gray-200 px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                  {typeof tag === "string" ? tag.replace(/^"+|"+$/g, '').replace(/^'+|'+$/g, '') : tag}
                </span>
              ))}
              {job.key_skills && Array.isArray(job.key_skills) && job.key_skills.map((tag, idx) => (
                <span key={`keyskill-${idx}`} className="bg-gray-200 px-3 py-1 rounded-full text-sm font-medium text-gray-700">{tag}</span>
              ))}
            </div>
          </div>
        ) : null}

        {/* Open Roles */}
        {job.open_roles && Array.isArray(job.open_roles) && job.open_roles.length > 0 && (
          <div className="mb-6">
            <h3 className="text-md font-semibold text-gray-800 mb-2">Open Roles:</h3>
            <ul className="list-disc ml-6">
              {job.open_roles.map((role, idx) => (
                <li key={idx} className="text-gray-700">{role}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Role Descriptions */}
        {job.role_descriptions && Array.isArray(job.role_descriptions) && job.role_descriptions.length > 0 && (
          <div className="mb-6">
            <h3 className="text-md font-semibold text-gray-800 mb-2">Role Descriptions:</h3>
            <ul className="list-disc ml-6">
              {job.role_descriptions.map((desc, idx) => (
                <li key={idx} className="text-gray-700">{desc}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Project Details */}
        <div className="mb-6">
          <h3 className="text-md font-semibold text-gray-800 mb-2">Project Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <span className="font-medium text-gray-700">Start Date: </span>
              <span className="text-gray-900">{job.start_date ? formatDate(job.start_date) : "N/A"}</span>
            </div>
            <div>
              <span className="font-medium text-gray-700">Duration: </span>
              <span className="text-gray-900">{job.duration || "N/A"}</span>
            </div>
            <div>
              <span className="font-medium text-gray-700">Payment Type: </span>
              <span className="text-gray-900">{job.payment_type || "N/A"}</span>
            </div>
            <div>
              <span className="font-medium text-gray-700">Preferred Location: </span>
              <span className="text-gray-900">{job.preferred_location || "N/A"}</span>
            </div>
            <div>
              <span className="font-medium text-gray-700">Preferred Location Talent Requirements: </span>
              <span className="text-gray-900">{job.preferred_location_talent_requirements || "N/A"}</span>
            </div>
            <div>
              <span className="font-medium text-gray-700">Experience Level: </span>
              <span className="text-gray-900">{job.experience_level || "N/A"}</span>
            </div>
            <div>
              <span className="font-medium text-gray-700">Status: </span>
              <span className="text-gray-900">{job.is_disabled ? "Disabled" : "Active"}</span>
            </div>
            <div>
              <span className="font-medium text-gray-700">Category: </span>
              <span className="text-gray-900">{job.category || "N/A"}</span>
            </div>
            <div>
              <span className="font-medium text-gray-700">Budget Range: </span>
              <span className="text-gray-900">{job.budget_range || "N/A"}</span>
            </div>
          </div>
        </div>

        {/* Questions for Candidates */}
        {job.questions_for_candidates && Array.isArray(job.questions_for_candidates) && job.questions_for_candidates.length > 0 && (
          <div className="mb-6">
            <h3 className="text-md font-semibold text-gray-800 mb-2">Questions for Candidates:</h3>
            <ul className="list-disc ml-6">
              {job.questions_for_candidates.map((q, idx) => (
                <li key={idx} className="text-gray-700">{q}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Additional Questions */}
        {job.additional_questions && Array.isArray(job.additional_questions) && job.additional_questions.filter(q => q && q.trim()).length > 0 && (
          <div className="mb-6">
            <h3 className="text-md font-semibold text-gray-800 mb-2">Additional Questions:</h3>
            <ul className="list-disc ml-6">
              {job.additional_questions.filter(q => q && q.trim()).map((q, idx) => (
                <li key={idx} className="text-gray-700">{q}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Description */}
        <div className="mb-6">
          <h2 className="text-lg md:text-xl font-semibold mb-2 text-gray-900">Description</h2>
          <p className="text-gray-700 leading-relaxed" style={{ whiteSpace: "pre-line" }}>{job.description}</p>
        </div>

        {/* Files (if any) */}
        {job.files && Array.isArray(job.files) && job.files.length > 0 && (
          <div className="mb-6">
            <h3 className="text-md font-semibold text-gray-800 mb-2">Attached Files:</h3>
            <ul className="list-disc ml-6">
              {job.files.map((file, idx) => (
                <li key={idx}>
                  <a href={file.url || file} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                    {file.name || (typeof file === "string" ? file : `File ${idx + 1}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {/* Right Sidebar */}
      <div className="w-full lg:w-1/4 px-0 lg:pr-8 mt-8 lg:mt-0 ml-2">
        <SidebarApplyJob
          onApplyClick={handleApplyClick}
          onSaveClick={handleSaveClick}
          isSaved={isSaved}
          client={clientInfo}
          disabled={!!job.is_disabled}
        />
      </div>
    </div>
  );
};

export default JobPostPage;