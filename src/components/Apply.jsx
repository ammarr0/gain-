import React from "react";

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

export default SidebarApplyJob;
