import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  MapPinIcon,
  ClockIcon,
  CalendarIcon,
  TagIcon,
  BadgeCheckIcon,
  ClipboardIcon,
  ArrowLeftIcon,
} from 'lucide-react';
import Sidebar from '../../components/cfsidebar';
import NewMatches from './newmatches';

const JobDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { match } = location.state || {};

  if (!match) {
    return (
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 p-8">
          <p className="text-black">No job data found.</p>
        </div>
      </div>
    );
  }

  const renderSection = (title, content) => (
    <section className="mb-8">
      <h2 className="text-lg font-semibold text-black mb-4">{title}</h2>
      {Array.isArray(content) ? (
        <ul className="list-disc list-inside space-y-2 text-black">
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className="text-black">{content}</p>
      )}
    </section>
  );

  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />
      <div className="flex-1 p-8 w-[500px]">
        <button
          onClick={() => navigate('consultingfirm/home')}
          className="inline-flex items-center text-sm mb-8 hover:text-black"
        >
          <ArrowLeftIcon className="w-4 h-4 mr-2" />
          Back to Home
        </button>

        <div className="bg-white rounded-lg p-3 mb-6">
          <div className="flex items-start gap-4 mb-6">
            <img src={match.logo} alt={match.company} className="w-12 h-12 object-contain" />
            <div className="flex-1">
              <div className="flex items-center gap-2 text-black text-sm mb-1">
                <span>{match.company}</span>
                <span>|</span>
                <span>Posted 25 Days Ago</span>
              </div>
              <h1 className="text-2xl font-semibold text-black mb-1">{match.role}</h1>
              <p className="text-black">{match.projectLocation}</p>
            </div>
          </div>
          <div className="flex items-center gap-8 text-sm text-black">
            {[{ icon: MapPinIcon, text: match.location }, { icon: ClockIcon, text: match.hours }, { icon: CalendarIcon, text: match.projectType }, { icon: TagIcon, text: match.rate }].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <item.icon className="w-4 h-4" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-3 ml-5 max-w-full">
          <div className="prose">
            <hr className="my-3 border-black" />
            {match.responsibilities && renderSection('Responsibilities', match.responsibilities)}
            {match.requirements && renderSection('Requirements', match.requirements)}
            {match.offer && renderSection('What We Offer', match.offer)}
            {match.apply && renderSection('To Apply', match.apply)}
            <hr className="my-3 border-black" />
            {renderSection('Project Type', match.projectType)}
            <hr className="my-3 border-black" />
            {renderSection('Skills and Expertise', match.skills.map(skill => (
              <span key={skill} className="bg-gray-100 px-3 py-1 rounded-full text-sm text-black">
                {skill}
              </span>
            )))}
            <hr className="my-3 border-black" />
            <section className="mb-8 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-lg font-semibold text-black">Status:</span>
                <span className="text-green-500 flex items-center gap-1">
                  Accepting Applications
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </span>
              </div>
              <button className="bg-[#0D0C22] hover:bg-blue-600 text-white font-md py-2 px-4 rounded-lg">
                Apply
              </button>
            </section>
            <hr className="my-3 border-black" />
          </div>
        </div>

        <div className="bg-white rounded-lg p-3 mb-6 w-full">
          <div className="prose">
            {renderSection("Client's Recent History", (
              <>
                WordPress Website Development for Consulting Company <br />
                <span className="text-gray-600">Oct 2004 - Present</span>
              </>
            ))}
            {renderSection('Other Open Jobs by this Client', (
              <ul className="list-disc list-inside space-y-2 text-black">
                {['Go High Level Automation Expert', 'WordPress Expert for Mobile', 'IG Reels Editor', 'AI Model Trainer'].map((job, index) => (
                  <li key={index}>
                    <a href="#" className="text-blue-500 hover:text-blue-600">{job}</a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <NewMatches />
      </div>

      <div className="w-[350px] h-[2056q0px] bg-white rounded-lg p-6">
        <button
          onClick={() => navigate('/apply', { state: { match } })}
          className="bg-[#0D0C22] text-white w-full py-3 rounded-xl text-sm font-medium mb-4"
        >
          Apply for this job
        </button>

        <button className="bg-white text-black border w-full py-3 rounded-xl text-sm font-medium flex items-center justify-center mb-4">
          <img src="/assets/bookmark.png" alt="Bookmark" className="w-5 h-5 mr-2" />
          Save this job
        </button>
        <h2 className="text-lg font-semibold text-black mb-4">About the Client</h2>
        <div className="space-y-4">
          {match.client.verifiedPayment && (
            <div className="flex items-center text-sm text-black">
              <BadgeCheckIcon className="w-4 h-4 text-blue-500 mr-2" />
              Payment Method Verified
            </div>
          )}
          {match.client.verifiedPhone && (
            <div className="flex items-center text-sm text-black">
              <BadgeCheckIcon className="w-4 h-4 text-blue-500 mr-2" />
              Phone Number Verified
            </div>
          )}
          <div className="space-y-3 pt-4 text-sm">
            {['country', 'location', 'jobsPosted', 'openJobs', 'totalSpent', 'memberSince'].map((field, index) => (
              <p key={index} className="flex justify-between text-black">
                <span className="font-medium text-black">
                  {field === 'jobsPosted' ? `${match.client[field]} Jobs Posted` : field === 'openJobs' ? `${match.client[field]} Open Jobs` : field === 'memberSince' ? `Member Since ${match.client[field]}` : match.client[field]}
                </span>
              </p>
            ))}
          </div>
          <div className="pt-4">
            <h3 className="text-sm font-medium text-black mb-2">Job Link</h3>
            <div className="flex items-center gap-2">
              <input type="text" readOnly value={match.client.jobLink} className="flex-1 text-sm border rounded px-2 py-1" />
              <button className="text-blue-500 hover:text-blue-600">
                <ClipboardIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;