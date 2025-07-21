import React, { useEffect, useState } from 'react';
import DashboardCards from './components/dashboardcards.jsx';
import NewMatches from './components/newmatches.jsx';
import ActiveProjects from './components/activeprojects.jsx';
import NewestMatches from './components/newestmatches.jsx';
import JobPosting from './components/jobposting.jsx';
import PersonalisedTalent from './components/PersonalisedTalent.jsx';
import MachineLearningPost from './components/MachineLearningPost';

const CFHome = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const event = new CustomEvent('cfhome-responsive', { detail: { hideSidebar: isMobile } });
    window.dispatchEvent(event);
  }, [isMobile]);

  return (
    <div
      className="w-full min-h-screen bg-white"
      style={{
        overflowX: 'hidden',
      }}
    >
      <div className="flex flex-col w-full p-0 m-0">
        <div className="flex-1 p-0 m-0">
          <DashboardCards />
          <div className="mt-6">
           <NewMatches /> 
            <div className="flex justify-center">
              <ActiveProjects />
            </div>
            <NewestMatches />
            <div className="flex justify-center">
              <JobPosting />
            </div>
            <PersonalisedTalent />
            <MachineLearningPost />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CFHome;