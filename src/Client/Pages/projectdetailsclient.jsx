import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// --- SidebarApplyJob and icons (from prompt) ---
const ArrowRightIcon = ({ className = "" }) => (
  <svg className={className} width="18" height="18" fill="none" stroke="#000" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const BookmarkIcon = ({ filled, className = "" }) => (
  <svg className={className} width="18" height="18" fill={filled ? "#000" : "none"} stroke="#000" strokeWidth="2" viewBox="0 0 24 24">
    <path
      d="M6 4a2 2 0 0 0-2 2v14l8-5.333L20 20V6a2 2 0 0 0-2-2H6z"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
  </svg>
);

const LocationIcon = ({ className = "" }) => (
  <svg className={className} width="16" height="16" fill="none" stroke="#000" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M12 21s-6-5.686-6-10A6 6 0 0 1 18 11c0 4.314-6 10-6 10z" />
    <circle cx="12" cy="11" r="2.5" fill="#000" />
  </svg>
);

const CalendarIcon = ({ className = "" }) => (
  <svg className={className} width="16" height="16" fill="none" stroke="#000" strokeWidth="2" viewBox="0 0 24 24">
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M16 3v4M8 3v4M3 9h18" />
  </svg>
);

const BriefcaseIcon = ({ className = "" }) => (
  <svg className={className} width="16" height="16" fill="none" stroke="#000" strokeWidth="2" viewBox="0 0 24 24">
    <rect x="2" y="7" width="20" height="13" rx="2" />
    <path d="M16 7V5a4 4 0 0 0-8 0v2" />
  </svg>
);

const StarIcon = ({ className = "", filled = true }) => (
  <svg className={className} width="16" height="16" fill={filled ? "#000" : "none"} stroke="#000" strokeWidth="1" viewBox="0 0 24 24">
    <polygon points="12,2 15,9 22,9.2 17,14 18.5,21 12,17.5 5.5,21 7,14 2,9.2 9,9" />
  </svg>
);

const FiveStars = () => (
  <span className="flex items-center gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <StarIcon key={i} className="w-4 h-4" />
    ))}
  </span>
);

const JobDetailItem = ({ label, value, children }) =>
  value ? (
    <li>
      <span className="font-semibold">{label}:</span> {children || value}
    </li>
  ) : null;

const SidebarApplyJob = ({
  onApplyClick,
  onSaveClick,
  isSaved,
  client = {},
  project = {},
  disabled = false,
}) => (
  <aside className="w-full max-w-xs bg-white shadow-lg rounded-2xl p-6 sm:p-8 flex flex-col gap-8">
    <div className="flex flex-col gap-3">
      <button
        onClick={onApplyClick}
        disabled={disabled}
        className={`w-full px-6 py-2 rounded-lg font-semibold text-white bg-black hover:bg-gray-900 transition flex items-center justify-center gap-2 ${disabled ? "opacity-60 cursor-not-allowed" : ""}`}
      >
        <ArrowRightIcon className="inline-block" />
        Apply to Job
      </button>
      <button
        onClick={onSaveClick}
        disabled={disabled}
        className={`w-full px-6 py-2 rounded-lg font-semibold border border-black text-black bg-white hover:bg-black hover:text-white transition flex items-center justify-center gap-2 ${isSaved ? "bg-gray-200" : ""} ${disabled ? "opacity-60 cursor-not-allowed" : ""}`}
      >
        <BookmarkIcon filled={isSaved} className="inline-block" />
        {isSaved ? "Saved" : "Save Job"}
      </button>
    </div>
    <div className="border-t border-black pt-6">
      <h3 className="font-semibold text-base text-black mb-2 flex items-center gap-2">
        <BriefcaseIcon /> Job Details
      </h3>
      <ul className="text-xs text-black space-y-2">
        <JobDetailItem label="Hourly Rate" value={project.hourly_rate && `$${project.hourly_rate}`} />
        <JobDetailItem label="Budget" value={project.budget && `$${project.budget}`} />
        <JobDetailItem label="Project Type" value={project.project_type} />
        <JobDetailItem label="Duration" value={project.duration} />
        <JobDetailItem label="Category" value={project.category} />
        {project.proposals !== undefined && (
          <JobDetailItem label="Proposals" value={project.proposals} />
        )}
        {project.description && (
          <JobDetailItem label="Description">
            <span className="text-black">
              {project.description.length > 80
                ? project.description.slice(0, 80) + "..."
                : project.description}
            </span>
          </JobDetailItem>
        )}
        <JobDetailItem label="Posted by" value={project.created_by} />
        <JobDetailItem label="Status" value={project.status} />
        <JobDetailItem label="Location" value={project.location} />
        {project.skills && Array.isArray(project.skills) && project.skills.length > 0 && (
          <li>
            <span className="font-semibold">Skills:</span>{" "}
            <span className="flex flex-wrap gap-1">
              {project.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-black text-white px-2 py-0.5 rounded text-[11px]"
                >
                  {skill}
                </span>
              ))}
            </span>
          </li>
        )}
      </ul>
    </div>
    <div className="border-t border-black pt-6">
      <h3 className="font-semibold text-base text-black mb-2 flex items-center gap-2">
        About the Client
      </h3>
      <ul className="text-xs text-black space-y-2">
        {client.location && (
          <li className="flex items-center gap-1">
            <LocationIcon />
            <span className="font-semibold">Location:</span> {client.location}
          </li>
        )}
        {client.memberSince && (
          <li className="flex items-center gap-1">
            <CalendarIcon />
            <span className="font-semibold">Member since:</span> {client.memberSince}
          </li>
        )}
        {client.jobsPosted !== undefined && (
          <li>
            <span className="font-semibold">Jobs posted:</span> {client.jobsPosted}
          </li>
        )}
        {client.hireRate !== undefined && (
          <li>
            <span className="font-semibold">Hire rate:</span> {client.hireRate}%
          </li>
        )}
        <li className="flex items-center gap-1">
          <span className="font-semibold">Review:</span>
          <FiveStars />
        </li>
      </ul>
    </div>
  </aside>
);

// --- Loader ---
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

// Helper to get user role from localStorage or cookie
function getUserRole() {
  // Try localStorage first
  let role = null;
  try {
    role = localStorage.getItem("role");
  } catch (e) {}
  if (role) return role;
  // Try cookies as fallback
  const value = `; ${document.cookie}`;
  const parts = value.split(`; role=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}

const JobPostPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [isSaved, setIsSaved] = useState(false);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    setUserRole(getUserRole());
  }, []);

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

  // Sidebar project info
  const projectInfo = {
    hourly_rate: job?.hourly_rate,
    budget: job?.budget_range,
    project_type: job?.project_type || job?.category,
    duration: job?.duration,
    category: job?.category,
    proposals: job?.proposals,
    description: job?.description,
    created_by: job?.created_by,
    status: job?.is_disabled ? "Disabled" : "Active",
    location: job?.location_type || job?.location,
    skills: (job?.skills && Array.isArray(job.skills) && job.skills.length > 0)
      ? job.skills.map(tag =>
          typeof tag === "string"
            ? tag.replace(/^"+|"+$/g, '').replace(/^'+|'+$/g, '')
            : tag
        )
      : (job?.key_skills && Array.isArray(job.key_skills) && job.key_skills.length > 0
        ? job.key_skills
        : []),
  };

  const handleApplyClick = () => {
    window.location.href = "/talent/apply";
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
            <span className="text-gray-700 font-medium">Hourly Rate:</span>
            <span className="text-gray-900">
              {job.hourly_rate !== null && job.hourly_rate !== undefined
                ? `$${job.hourly_rate}${job.payment_type === "Hourly" ? "/hr" : ""}`
                : (job.budget_range ? `$${job.budget_range}` : "N/A")}
            </span>
          </div>
          <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2">
            <span className="text-gray-700 font-medium">Project Type:</span>
            <span className="text-gray-900">{job.project_type || job.category || "N/A"}</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2">
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
      {userRole !== "CUSTOMER_SUPPORT" && (
        <div className="w-full lg:w-1/4 mt-8 lg:mt-0 lg:ml-8 flex-shrink-0">
          <div className="sticky top-24">
            <SidebarApplyJob
              onApplyClick={handleApplyClick}
              onSaveClick={handleSaveClick}
              isSaved={isSaved}
              client={clientInfo}
              project={projectInfo}
              disabled={job.is_disabled}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default JobPostPage;