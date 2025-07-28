import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Avactor = ({ name = "", image, size = 64 }) => {
  const initials = name
    ? name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : "AV";
  const gradient =
    "linear-gradient(135deg, #3B82F6 0%, #60A5FA 50%, #2563EB 100%)";
  return image ? (
    <div
      className="relative flex items-center justify-center"
      style={{
        width: size,
        height: size,
      }}
    >
      <img
        src={image}
        alt={name}
        className="rounded-full object-cover border-2 border-blue-300 shadow-md"
        style={{
          width: size,
          height: size,
          background: "#f3f4f6",
        }}
      />
      <span
        className="absolute bottom-0 right-0 block w-4 h-4 rounded-full border-2 border-white bg-green-400 shadow"
        title="Verified"
        style={{
          boxShadow: "0 0 0 2px #fff",
        }}
      ></span>
    </div>
  ) : (
    <div
      className="rounded-full flex items-center justify-center font-bold text-white shadow-md border-2 border-blue-200"
      style={{
        width: size,
        height: size,
        fontSize: size / 2.2,
        background: gradient,
        userSelect: "none",
        letterSpacing: "1px",
        position: "relative",
      }}
    >
      {initials}
      <span
        className="absolute bottom-0 right-0 block w-4 h-4 rounded-full border-2 border-white bg-green-400 shadow"
        title="Verified"
        style={{
          boxShadow: "0 0 0 2px #fff",
        }}
      ></span>
    </div>
  );
};

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
}

const BlueCircleLoader = () => (
  <div className="flex justify-center items-center py-8">
    <span className="loader-blue-circle" />
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
  </div>
);

const BookmarkIcon = ({
  filled,
  borderColor = "#B9DAFF",
  bgColor = "transparent",
  size = 20,
}) => (
  <span
    style={{
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "50%",
      background: bgColor,
      width: size + 8,
      height: size + 8,
      transition: "background 0.2s",
    }}
  >
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      stroke={borderColor}
      strokeWidth="1.5"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      <path
        d="M5 3C4.44772 3 4 3.44772 4 4V17.382C4 18.1356 4.8516 18.6012 5.5145 18.2111L10 15.5298L14.4855 18.2111C15.1484 18.6012 16 18.1356 16 17.382V4C16 3.44772 15.5523 3 15 3H5Z"
        fill={filled ? "#FFF9E3" : "none"}
      />
    </svg>
  </span>
);

const NewestMatches = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [savedJobs, setSavedJobs] = useState(() => {
    const saved = localStorage.getItem("savedTalentJobs");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    setLoading(true);
    setError(null);
    const accessToken = getCookie("access_token");
    fetch("https://gain-b7ea8e7de810.herokuapp.com/jobs/list", {
      headers: {
        Authorization: accessToken ? `Bearer ${accessToken}` : "",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data && data.status && Array.isArray(data.data)) {
          setJobs(data.data);
        } else {
          setJobs([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching jobs");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("savedTalentJobs", JSON.stringify(savedJobs));
  }, [savedJobs]);

  // For demo, show only the first 3 jobs as "newest matches"
  const matches = jobs.slice(0, 3);

  // Fallback for logo (since API doesn't provide one)
  const getLogo = (idx) => {
    const logos = [
      "/assets/juxtapose.png",
      "/assets/reddit.png",
      "/assets/bankofamerica.png",
    ];
    return logos[idx % logos.length];
  };

  // Fallback for logo size
  const logoSize = "w-16 h-16";

  // Fallback for "hours" and "time" (not in API)
  const getHours = (job) =>
    job.hourly_rate ? `${job.hourly_rate} hrs/wk` : "N/A";
  const getTime = () => "Anytime";

  // Positions = skills array from API
  const getPositions = (job) =>
    Array.isArray(job.skills) && job.skills.length > 0
      ? job.skills
      : ["N/A"];

  const handleShare = (job) => {
    const jobUrl = `${window.location.origin}/job/${job._id || ""}`;
    if (navigator.share) {
      navigator
        .share({
          title: job.title,
          text: `Check out this job: ${job.title}`,
          url: jobUrl,
        })
        .catch(() => {});
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(jobUrl).then(
        () => {
          alert("Job link copied to clipboard!");
        },
        () => {
          alert("Failed to copy link.");
        }
      );
    } else {
      window.prompt("Copy to clipboard: Ctrl+C, Enter", jobUrl);
    }
  };

  const handleSave = (job) => {
    setSavedJobs((prev) => {
      if (!job._id) return prev;
      if (prev.includes(job._id)) {
        return prev.filter((id) => id !== job._id);
      } else {
        return [...prev, job._id];
      }
    });
  };

  const darkYellow = "#FFD600";
  const darkYellowBg = "#FFF9E3";

  return (
    <div className="max-w-7xl mx-auto w-full">
      <div className="p-4 max-w-full">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
          <h2 className="text-xl sm:text-2xl font-medium text-[#34A853]">
            Your newest matches
          </h2>
          <button
            className="text-sm font-semibold underline hover:underline sm:mr-12"
            onClick={() => navigate('/talent/jobs/')}
          >
            View All Jobs
          </button>
        </div>
        {loading ? (
          <BlueCircleLoader />
        ) : error ? (
          <div className="text-center text-red-500 py-8">{error}</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 items-stretch justify-items-center">
            {matches.map((job, idx) => (
              <div
                key={job._id || idx}
                className="rounded-xl border-2 border-[#34A853] p-4 shadow-sm hover:shadow-lg transition bg-white w-full max-w-xs sm:max-w-sm md:max-w-md flex flex-col mx-auto h-full cursor-pointer"
                style={{ minHeight: 0 }}
                onClick={() => navigate(`/talent/jobs/${job._id}`)}
              >
                <div className="flex justify-between items-start">
                  <Avactor
                    name={job.title}
                    image={null}
                    size={64}
                  />
                  <div
                    className="flex gap-2 flex-shrink-0"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={() => handleShare(job)}
                      title="Share"
                      type="button"
                    >
                      <img
                        src="/assets/share.png"
                        alt="Share"
                        className="w-5 h-5"
                      />
                    </button>
                    <button
                      onClick={() => handleSave(job)}
                      title={
                        savedJobs.includes(job._id) ? "Unsave" : "Save"
                      }
                      type="button"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: savedJobs.includes(job._id)
                          ? darkYellowBg
                          : "transparent",
                        borderRadius: "50%",
                        transition: "background 0.2s",
                      }}
                    >
                      <BookmarkIcon
                        filled={savedJobs.includes(job._id)}
                        borderColor={
                          savedJobs.includes(job._id)
                            ? darkYellow
                            : "#3B82F6"
                        }
                        bgColor="transparent"
                        size={20}
                      />
                    </button>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-semibold text-[#030923]">
                  {job.title}
                </h3>
                <p className="text-gray-600 text-xl sm:text-2xl mt-2">
                  {job.project_type || "Role"}
                </p>
                <p className="text-sm font-md mt-2">Skills</p>
                <ul className="mt-3 list-disc list-inside">
                  {getPositions(job).map((position, posIdx) => (
                    <ul key={posIdx} className="list-disc list-inside mb-1">
                      <li className="text-base sm:text-lg ml-2">
                        {position}
                      </li>
                    </ul>
                  ))}
                </ul>

                <hr className="my-3 border-black" />

                <div className="text-sm text-gray-600 space-y-4 mt-4 sm:mt-8">
                  <p className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <span className="flex items-center">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/3239/3239948.png"
                        alt="Hours"
                        className="inline w-4 h-4 mr-1"
                      />
                      {getHours(job)}
                    </span>
                    <span className="flex items-center">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/927/927667.png"
                        alt="Location"
                        className="inline w-4 h-4 mr-1"
                      />
                      {job.location || "N/A"}
                    </span>
                  </p>
                  <p className="flex items-center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/2088/2088617.png"
                      alt="Clock"
                      className="inline w-4 h-4 mr-1"
                    />
                    {getTime()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewestMatches;