import React from 'react';
import CFNavbar from '../components/cfnavbar.jsx';
import Sidebar from '../components/cfsidebar.jsx';
import DashboardCards from './components/dashboardcards.jsx';
import NewMatches from './components/newmatches.jsx';
import ActiveProjects from './components/activeprojects.jsx';
import NewestMatches from './components/newestmatches.jsx';
import JobPosting from './components/jobposting.jsx';
import PersonalisedTalent from './components/PersonalisedTalent.jsx';
import Footer from '../../components/Footer.jsx';
import MachineLearningPost from './components/MachineLearningPost';

const CFHome = () => {
  return (
    <>
      <CFNavbar />
      <div className="flex w-full p-0">
        <Sidebar />
        <div className="flex-1 overflow-auto p-0 m-0 ">
          <DashboardCards />
          <div className="mt-6 ">
            <NewMatches />
            <div className="flex justify-center">
              <ActiveProjects />
            </div>
            <NewestMatches />
            <div className="flex justify-center  ">
              <JobPosting />
            </div>
            <PersonalisedTalent />
            <MachineLearningPost />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CFHome;