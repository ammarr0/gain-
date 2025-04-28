import React from 'react';
import ActiveJobs from '../Components/activejobs';
import ActiveProject from '../Components/activeprojects';
import Posted from "../Components/postedjobs";
import JobTabs from "../Components/job_tabs";
import Cards from '../Components/dashboard_cards';
import Talent from "../Components/Personalisedtalent";
import Projects from '../Components/projects_cards';

const MyJobs = () => {
    return (
        <div className="px-10 w-full">
            <ActiveJobs/>
            <Cards/>
            <JobTabs/>
            <Posted/>
        </div>
    );
};

export default MyJobs;