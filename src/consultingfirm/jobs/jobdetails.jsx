import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SingleJobHero from "../../Client/Components/singlejob_hero";

const iconMap = {
  "location.png": require("../../assets/location.png"),
  "calendar.png": require("../../assets/calendar.png"),
  "clock.png": require("../../assets/clock.png"),
};

// Helper to get cookie value by name
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}

const JobPostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch job details from API with access_token from cookies
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
        console.log("Fetched job data:", jobData);
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

  if (loading) return <div className="p-8 text-center text-gray-600">Loading...</div>;
  if (error) return <div className="p-8 text-center text-red-600">{error}</div>;
  if (!job) return <div className="p-8 text-center text-gray-600">Job not found</div>;

  return (
    <div className="flex flex-col gap-4">
      <SingleJobHero job={job} />
      <div className="p-4 md:p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 text-gray-700 mb-4">
          <h1 className="text-2xl font-bold">{job.title}</h1>
          <span className="hidden md:inline">•</span>
          <p>{job.userName || job.clientName || job.companyName || ""}</p>
          <span className="hidden md:inline">•</span>
          <p>{job.location}</p>
        </div>
        <div className="flex items-center gap-4 mb-4">
          <span>⭐ {job.rating || job.stars || ""}</span>
          <span>Jobs: {job.jobs || job.totalJobs || ""}</span>
        </div>
        {/* Info Items */}
        <div className="flex gap-4 mb-4">
          {job.infoItems && Array.isArray(job.infoItems) && job.infoItems.map((item, idx) => (
            <div className="flex items-center gap-1" key={idx}>
              <img src={iconMap[item.imgSrc]} alt={item.altText} className="h-4 w-4" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
        {/* Tags and Due Date */}
        <div className="flex flex-wrap gap-2 mb-4">
          {job.tags && Array.isArray(job.tags) && job.tags.map((tag, idx) => (
            <span key={idx} className="bg-gray-200 px-3 py-1 rounded-full text-sm">{tag}</span>
          ))}
          {job.dueDate && (
            <span className="ml-auto text-red-800">Due on: {job.dueDate}</span>
          )}
        </div>
        {/* Extended Details */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 text-gray-700 mb-4">
          <p className="text-xl md:text-2xl">{job.rate || job.salary || ""}</p>
          <span className="hidden md:inline">•</span>
          <p>{job.level || job.seniority || ""}</p>
          <span className="hidden md:inline">•</span>
          <p>{job.experience || ""}</p>
        </div>
        <div className="mb-4">
          <p className="text-gray-600">{job.status || ""}</p>
          <p className="text-gray-600">{job.timeZone || job.timezone || ""}</p>
        </div>
        <div className="mb-6">
          {Array.isArray(job.description)
            ? job.description.map((desc, index) => <p key={index}>{desc}</p>)
            : <p>{job.description}</p>
          }
        </div>
        <div className="mb-6">
          <h2 className="text-lg md:text-xl font-semibold mb-2">Responsibilities:</h2>
          <ul className="list-disc list-inside space-y-1">
            {job.responsibilities && job.responsibilities.length > 0
              ? job.responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))
              : <li>No responsibilities listed.</li>
            }
          </ul>
        </div>
        <div className="mb-6">
          <h2 className="text-lg md:text-xl font-semibold mb-2">Requirements:</h2>
          <ul className="list-disc list-inside space-y-1">
            {job.requirements && job.requirements.length > 0
              ? job.requirements.map((requirement, index) => (
                  <li key={index}>{requirement}</li>
                ))
              : <li>No requirements listed.</li>
            }
          </ul>
        </div>
        <div className="mb-6">
          <p>{job.applicationInstructions || job.instructions || ""}</p>
        </div>
        <div className="mb-4 text-sm text-gray-600">Project Type: {job.projectType || job.type || ""}</div>
        <div className="mb-6">
          <h2 className="text-lg md:text-xl font-semibold mb-2">Skills and Expertise</h2>
          <div className="flex flex-wrap gap-2">
            {job.skills && job.skills.length > 0
              ? job.skills.map(skill => (
                  <span key={skill} className="bg-gray-200 px-3 py-1 rounded-full text-sm">{skill}</span>
                ))
              : <span>No skills listed.</span>
            }
          </div>
        </div>
        <div className="text-green-600 font-semibold">Status: {job.applicationStatus || job.status || ""}</div>
      </div>
    </div>
  );
};

export default JobPostPage;