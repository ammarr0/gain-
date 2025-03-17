import { useLocation } from 'react-router-dom';
import Sidebar from '../../components/cfsidebar';

const JobDetails = () => {
  const location = useLocation();
  const { match } = location.state || {};

  if (!match) return <p className="p-8">No job data found.</p>;

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="max-w-4xl mx-auto p-8 w-3/4">

        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">{match.role}</h1>
          <p className="text-xl font-semibold">{match.rate}</p>
        </div>

        {/* Company Info */}
        <div className="flex gap-8 items-center mb-8">
          <img src={match.logo} alt={match.company} className="w-24 h-24 rounded-lg" />
          <div>
            <h2 className="text-3xl font-semibold">{match.company}</h2>
            <p className="text-lg text-gray-600">{match.hours} | {match.location} | {match.time}</p>
          </div>
        </div>

        {/* Responsibilities Section */}
        {match.responsibilities && (
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4">Responsibilities</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {match.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Requirements Section */}
        {match.requirements && (
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4">Requirements</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {match.requirements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* What We Offer Section */}
        {match.offer && (
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4">What We Offer</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {match.offer.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* To Apply Section */}
        {match.apply && (
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4">To Apply</h3>
            <p className="text-gray-700">{match.apply}</p>
          </div>
        )}

        {/* Apply Button */}
        <div className="mt-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg">
            Apply for this job
          </button>
        </div>
      </div>

      {/* Client Info */}
      <div className="max-w-1xl mx-auto p-8 w-1/4">
        {match.client && (
          <div className="mt-12 border-t pt-8">
            <h3 className="text-2xl font-semibold mb-4">About the Client</h3>

            <div className="space-y-2 text-gray-700">
              {/* Verified Info */}
              <p>
                {match.client.verifiedPayment && (
                  <span className="inline-flex items-center gap-1">
                    <img src="/assets/verified.png" alt="Verified" className="w-4 h-4" />
                    Payment Method Verified
                  </span>
                )}
              </p>
              <p>
                {match.client.verifiedPhone && (
                  <span className="inline-flex items-center gap-1">
                    <img src="/assets/verified.png" alt="Verified" className="w-4 h-4" />
                    Phone Number Verified
                  </span>
                )}
              </p>

              {/* Location and Meta */}
              <p><strong>Country:</strong> {match.client.country}</p>
              <p><strong>Location:</strong> {match.client.location}</p>
              <p><strong>Jobs Posted:</strong> {match.client.jobsPosted} (Open: {match.client.openJobs})</p>
              <p><strong>Total Spent:</strong> {match.client.totalSpent}</p>
              <p><strong>Hires:</strong> {match.client.hires} (Active: {match.client.activeJobs})</p>
              <p><strong>Member Since:</strong> {match.client.memberSince}</p>

              {/* Job Link */}
              <div className="mt-4">
                <h4 className="font-semibold mb-1">Job Link</h4>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    readOnly
                    value={match.client.jobLink}
                    className="border px-2 py-1 rounded w-full"
                  />
                  <button
                    onClick={() => navigator.clipboard.writeText(match.client.jobLink)}
                    className="text-blue-500 underline"
                  >
                    Copy Link
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
        
       
  );
};

export default JobDetails;
