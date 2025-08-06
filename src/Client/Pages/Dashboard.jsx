import React from 'react';
import HeroSection from '../Components/dashboard_hero';
import Cards from '../Components/dashboard_cards';
import ActiveJobs from '../Components/activejobs';
import ActiveProject from '../Components/activeprojects';
import Projects from '../Components/projects_cards';
import Posted from "../Components/postedjobs";
import JobTabs from "../Components/job_tabs";

const Dashboard = () => {
    return (
        <div className="px-10 w-[80%]" >
            <HeroSection />
            <Cards/>
            <Projects/>
            <Posted/>
        </div>
    );
};

export default Dashboard;