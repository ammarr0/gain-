import React from 'react';
import HeroSection from '../Components/dashboard_hero';
import Cards from '../Components/dashboard_cards';
import ActiveJobs from '../Components/activejobs';
import ActiveProject from '../Components/activeprojects';
import Projects from '../Components/projects_cards';
import Talent from "../Components/Personalisedtalent";
import Posted from "../Components/postedjobs";

const Main = () => {
    return (
        <div className="px-10">
            <HeroSection />
            <ActiveJobs/>
            <Cards/>
            <Talent/>
            <ActiveProject/>
            <Projects/>
            <Talent/>
            <Posted/>
        </div>
    );
};

export default Main;