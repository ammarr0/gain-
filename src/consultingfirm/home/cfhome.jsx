import React, { useEffect, useState } from 'react';
//import CFNavbar from '../components/cfnavbar.jsx';
import DashboardCards from './components/dashboardcards.jsx';
import NewMatches from './components/newmatches.jsx';
import ActiveProjects from './components/activeprojects.jsx';
import NewestMatches from './components/newestmatches.jsx';
import JobPosting from './components/jobposting.jsx';
import PersonalisedTalent from './components/PersonalisedTalent.jsx';
import Footer from '../../components/Footer.jsx';
import MachineLearningPost from './components/MachineLearningPost';

const CFHome = () => {
  // State to track if the screen is mobile
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint (tailwind)
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // On mobile, we want to hide the sidebar (which is outside this component)
  // So we will send a custom event to parent to hide sidebar if needed
  useEffect(() => {
    // This event can be caught by the parent layout to hide sidebar
    const event = new CustomEvent('cfhome-responsive', { detail: { hideSidebar: isMobile } });
    window.dispatchEvent(event);
  }, [isMobile]);

  return (
    <div
      className="w-full min-h-screen bg-white"
      style={{
        overflowX: 'hidden', // Prevent horizontal scroll
      }}
    >
      {/*  <CFNavbar /> */}
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
      {/* <Footer /> */}
    </div>
  );
};

export default CFHome;