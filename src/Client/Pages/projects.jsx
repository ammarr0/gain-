import React from 'react';
import Hero from '../Components/project-hero';
import ActiveJobs from '../Components/activeprojects';
import Cards from '../Components/projects_cards';
import JobTabs from '../Components/project-tabs';
import Posted from "../Components/postedjobs";

const Projects = () => (
    <div className="px-10 w-full">
        <Hero />
        <ActiveJobs />
        <Cards />
        <JobTabs />
        <Posted />
    </div>
);

export default Projects;