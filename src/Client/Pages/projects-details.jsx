import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleJobHero from "../Components/singlejob_hero";

const iconMap = {
  "location.png": require("../../assets/location.png"),
  "calendar.png": require("../../assets/calendar.png"),
  "clock.png": require("../../assets/clock.png"),
};

const ProjectDetailsPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch project details from API
    const fetchProject = async () => {
      try {
        const accessToken = document.cookie
          .split("; ")
          .find((row) => row.startsWith("access_token="))
          ?.split("=")[1];
        const response = await fetch(
          `https://gain-b7ea8e7de810.herokuapp.com/projects/${id}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          setProject(data.data);
        } else {
          setProject(null);
        }
      } catch (error) {
        setProject(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!project) return <div>Project not found</div>;

  return (
    <div className="flex flex-col gap-4">
      <SingleJobHero job={project} />
      <div className="p-4 md:p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 text-gray-700 mb-4">
          <h1 className="text-2xl font-bold">{project.title}</h1>
          <span className="hidden md:inline">•</span>
          <p>{project.clientName || project.userName}</p>
          <span className="hidden md:inline">•</span>
          <p>{project.location}</p>
        </div>
        <div className="flex items-center gap-4 mb-4">
          {project.rating && <span>⭐ {project.rating}</span>}
          {project.jobs && <span>Jobs: {project.jobs}</span>}
        </div>
        {/* Info Items */}
        <div className="flex gap-4 mb-4">
          {project.infoItems &&
            project.infoItems.map((item, idx) => (
              <div className="flex items-center gap-1" key={idx}>
                <img
                  src={iconMap[item.imgSrc]}
                  alt={item.altText}
                  className="h-4 w-4"
                />
                <span>{item.text}</span>
              </div>
            ))}
        </div>
        {/* Tags and Due Date */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags &&
            project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-gray-200 px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          {project.dueDate && (
            <span className="ml-auto text-red-800">
              Due on: {new Date(project.dueDate).toLocaleDateString()}
            </span>
          )}
        </div>
        {/* Extended Details */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 text-gray-700 mb-4">
          {project.rate && (
            <p className="text-xl md:text-2xl">{project.rate}</p>
          )}
          <span className="hidden md:inline">•</span>
          {project.level && <p>{project.level}</p>}
          <span className="hidden md:inline">•</span>
          {project.experience && <p>{project.experience}</p>}
        </div>
        <div className="mb-4">
          {project.status && (
            <p className="text-gray-600">{project.status}</p>
          )}
          {project.timeZone && (
            <p className="text-gray-600">{project.timeZone}</p>
          )}
        </div>
        <div className="mb-6">
          {Array.isArray(project.description) ? (
            project.description.map((desc, index) => <p key={index}>{desc}</p>)
          ) : (
            <p>{project.description}</p>
          )}
        </div>
        <div className="mb-6">
          <h2 className="text-lg md:text-xl font-semibold mb-2">
            Responsibilities:
          </h2>
          <ul className="list-disc list-inside space-y-1">
            {project.responsibilities &&
              project.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
          </ul>
        </div>
        <div className="mb-6">
          <h2 className="text-lg md:text-xl font-semibold mb-2">
            Requirements:
          </h2>
          <ul className="list-disc list-inside space-y-1">
            {project.requirements &&
              project.requirements.map((requirement, index) => (
                <li key={index}>{requirement}</li>
              ))}
          </ul>
        </div>
        <div className="mb-6">
          {project.applicationInstructions && (
            <p>{project.applicationInstructions}</p>
          )}
        </div>
        <div className="mb-4 text-sm text-gray-600">
          Project Type: {project.projectType}
        </div>
        <div className="mb-6">
          <h2 className="text-lg md:text-xl font-semibold mb-2">
            Skills and Expertise
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.skills &&
              project.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-gray-200 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
          </div>
        </div>
        {project.applicationStatus && (
          <div className="text-green-600 font-semibold">
            Status: {project.applicationStatus}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetailsPage;