import React from 'react';
import { useNavigate } from 'react-router-dom';
// import Sidebar from '../components/cfsidebar.jsx';
import CourseCard from "../../consultingfirm/explorecourse/courselist.jsx"

const Explore = () => {
  const navigate = useNavigate();

  const renderJobStatus = (status) => {
    const statusClasses = {
      "Accepting Applications": 'bg-green-200 text-green-700',
      "Closed": 'bg-red-200 text-red-700',
      "Pending": 'bg-yellow-200 text-yellow-700'
    };
    return <span className={`text-sm px-3 py-2 rounded-lg ${statusClasses[status]}`}>{status}</span>;
  };

  const handleCardClick = (match) => {
    navigate(`/job/${match.company}`, { state: { match } });
  };

  return (
    <div className="w-full min-h-screen flex bg-white">
      {/* <Sidebar /> */}
      <div className="flex-1 flex" >
        <div className="w-3/4 p-8">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="bg-[#C7E1FF] rounded-2xl p-8 md:w-1/2 h-72" >
                <h1 className="text-5xl font-semibold text-gray-900 mb-2">
                  Discover <br />
                  Your Next <span className="font-bold">Opportunity</span> <br />
                  as a Firm
                </h1>
              </div>
              <div className="rounded-2xl border-2 border-blue-200 p-8 md:w-1/2 flex items-center justify-center text-left">
                <p className="text-gray-700 text-3xl leading-relaxed">
                  Browse opportunities and take the next step in your firm’s journey.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-6 border-b border-gray-200 mb-8">
              {['Project Management Jobs', 'All Jobs', 'Saved Jobs'].map((tab, index) => (
                <button key={index} className={`pb-2 ${index === 0 ? 'text-gray-900 font-semibold border-b-4 border-blue-500' : 'text-gray-500 hover:text-gray-700'}`}>
                  {tab}
                </button>
              ))}
            </div>
            <div >
          <  CourseCard/>
            </div>
          </div>
        </div>
        <div className="w-1/4 p-6 ml-auto rounded-lg">
          <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col gap-4 mb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xl text-white">
                <span className="font-semibold">C</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#030923]">Clay</h3>
                <p className="text-sm text-gray-600">Consulting Firm</p>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400">★</span>
                  <span>4.5</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold text-xs text-[#007DF0]">Complete your profile</h4>
              {["Profile", "Portfolio", "Experience", "Education", "Certifications"].map((item, idx) => (
                <div key={idx} className="flex items-center">
                  <span className="text-[10px] w-1/3">{item}</span>
                  <div className="flex items-center gap-2 w-2/3">
                    <div className="w-full bg-gray-200 h-2 rounded-full">
                      <div className="h-2 rounded-full " style={{ width: '50%', backgroundColor: '#030923' }}></div>
                    </div>
                    <span className="text-[10px]">50%</span>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <h4 className="font-semibold">Active Jobs</h4>
              <p className="text-[#007DF0]">3</p>
            </div>
            <div>
              <h4 className="font-semibold">Availability Badge</h4>
              <p className="text-[#007DF0]">On</p>
            </div>
            <div>
              <h4 className="font-semibold">Promotion with GAIN</h4>
              <p className="text-[#007DF0]">On</p>
            </div>
            <div>
              <h4 className="font-semibold">Promotion with Ads</h4>
              <p className="text-gray-600">Off</p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col gap-4 mb-6">
            <h4 className="font-semibold text-xl">Preferences</h4>
            <div className="flex justify-between">
              <div className="flex flex-col">
                <span className="text-sm">Hours Per Week</span>
                <span className="text-sm">As per needed - Open to offers</span>
              </div>
            </div>
            <div className="flex justify-between mt-2">
              <div className="flex flex-col">
                <span className="text-sm">Profile Visibility</span>
                <span className="text-sm">Public</span>
              </div>
            </div>
            <div className="flex flex-col mt-2">
              <span className="text-sm">Job Preference</span>
              <span className="text-sm">Open to job offers</span>
            </div>
            <div className="flex flex-col mt-2">
              <span className="text-sm">My Categories</span>
              <span className="text-sm">Project Management</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;