import React, { useEffect, useState } from 'react';

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}

const accessToken = getCookie('access_token');

const NewestMatches = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  // For demo, show only the first 3 jobs as "newest matches"
  const matches = jobs.slice(0, 3);

  // Fallback for logo (since API doesn't provide one)
  const getLogo = (idx) => {
    const logos = [
      "/assets/juxtapose.png",
      "/assets/reddit.png",
      "/assets/bankofamerica.png"
    ];
    return logos[idx % logos.length];
  };

  // Fallback for logo size
  const logoSize = "w-16 h-16";

  // Fallback for "hours" and "time" (not in API)
  const getHours = (job) => job.hourly_rate ? `${job.hourly_rate} hrs/wk` : "N/A";
  const getTime = () => "Anytime";

  // Positions = skills array from API
  const getPositions = (job) => Array.isArray(job.skills) && job.skills.length > 0 ? job.skills : ["N/A"];

  return (
    <div className="max-w-7xl mx-auto w-full">
      <div className="p-4 max-w-full">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
          <h2 className="text-xl sm:text-2xl font-medium text-[#34A853]">Your newest matches</h2>
          <button className="text-sm font-semibold text-[#34A853] underline hover:underline sm:mr-12 mt-2 sm:mt-0">
            View All Jobs
          </button>
        </div>
        {loading ? (
          <div className="text-center py-8">Loading...</div>
        ) : error ? (
          <div className="text-center text-red-500 py-8">{error}</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 items-stretch justify-items-center">
            {matches.map((job, idx) => (
              <div
                key={job._id || idx}
                className="rounded-xl border-2 border-[#34A853] p-4 shadow-sm hover:shadow-lg transition bg-white w-full max-w-xs sm:max-w-sm md:max-w-md flex flex-col mx-auto h-full"
                style={{ minHeight: 0 }}
              >
                <div className="flex justify-between items-start">
                  <img
                    src={getLogo(idx)}
                    alt={job.title}
                    className={`${logoSize} rounded-md mb-2`}
                  />
                  <div className="flex gap-2">
                    <button>
                      <img src="/assets/share.png" alt="Share" className="w-5 h-5" />
                    </button>
                    <button>
                      <img src="/assets/bookmark.png" alt="Bookmark" className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-semibold text-[#030923]">{job.title}</h3>
                <p className="text-gray-600 text-xl sm:text-2xl mt-2">{job.project_type || "Role"}</p>
                <p className="text-sm font-md mt-2">Skills</p>
                <ul className="mt-3 list-disc list-inside">
                  {getPositions(job).map((position, posIdx) => (
                    <ul key={posIdx} className="list-disc list-inside mb-1">
                      <li className="text-base sm:text-lg ml-2">{position}</li>
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