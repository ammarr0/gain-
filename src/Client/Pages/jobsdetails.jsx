import React from "react";
import { useParams } from "react-router-dom";
import jobs from "../../jobs.json";
import SingleJobHero from "../Components/singlejob_hero";

const iconMap = {
  "location.png": require("../../assets/location.png"),
  "calendar.png": require("../../assets/calendar.png"),
  "clock.png": require("../../assets/clock.png"),
};

const JobPostPage = () => {
  const { id } = useParams();
  const job = jobs.find(j => String(j.id) === String(id));

  if (!job) return <div>Job not found</div>;

  return (
    <div className="flex flex-col gap-4">
      <SingleJobHero job={job} />
      <div className="p-4 md:p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 text-gray-700 mb-4">
          <h1 className="text-2xl font-bold">{job.title}</h1>
          <span className="hidden md:inline">•</span>
          <p>{job.userName}</p>
          <span className="hidden md:inline">•</span>
          <p>{job.location}</p>
        </div>
        <div className="flex items-center gap-4 mb-4">
          <span>⭐ {job.rating}</span>
          <span>Jobs: {job.jobs}</span>
        </div>
        {/* Info Items */}
        <div className="flex gap-4 mb-4">
          {job.infoItems && job.infoItems.map((item, idx) => (
            <div className="flex items-center gap-1" key={idx}>
              <img src={iconMap[item.imgSrc]} alt={item.altText} className="h-4 w-4" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
        {/* Tags and Due Date */}
        <div className="flex flex-wrap gap-2 mb-4">
          {job.tags && job.tags.map((tag, idx) => (
            <span key={idx} className="bg-gray-200 px-3 py-1 rounded-full text-sm">{tag}</span>
          ))}
          <span className="ml-auto text-red-800">Due on: {job.dueDate}</span>
        </div>
        {/* Extended Details */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 text-gray-700 mb-4">
          <p className="text-xl md:text-2xl">{job.rate}</p>
          <span className="hidden md:inline">•</span>
          <p>{job.level}</p>
          <span className="hidden md:inline">•</span>
          <p>{job.experience}</p>
        </div>
        <div className="mb-4">
          <p className="text-gray-600">{job.status}</p>
          <p className="text-gray-600">{job.timeZone}</p>
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
            {job.responsibilities && job.responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </div>
        <div className="mb-6">
          <h2 className="text-lg md:text-xl font-semibold mb-2">Requirements:</h2>
          <ul className="list-disc list-inside space-y-1">
            {job.requirements && job.requirements.map((requirement, index) => (
              <li key={index}>{requirement}</li>
            ))}
          </ul>
        </div>
        <div className="mb-6">
          <p>{job.applicationInstructions}</p>
        </div>
        <div className="mb-4 text-sm text-gray-600">Project Type: {job.projectType}</div>
        <div className="mb-6">
          <h2 className="text-lg md:text-xl font-semibold mb-2">Skills and Expertise</h2>
          <div className="flex flex-wrap gap-2">
            {job.skills && job.skills.map(skill => (
              <span key={skill} className="bg-gray-200 px-3 py-1 rounded-full text-sm">{skill}</span>
            ))}
          </div>
        </div>
        <div className="text-green-600 font-semibold">Status: {job.applicationStatus}</div>
      </div>
    </div>
  );
};

export default JobPostPage;