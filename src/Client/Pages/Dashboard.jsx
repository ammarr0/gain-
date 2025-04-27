import React from 'react';
import HeroSection from '../Components/dashboard_hero';
import Cards from '../Components/dashboard_cards';
import ActiveJobs from '../Components/activejobs';
import Talent from "../Components/Personalisedtalent"

const Main = () => {
    return (
        <div className="px-10">
            <HeroSection />
            <ActiveJobs/>
            <Cards/>
            <Talent/>
        </div>
    );
};

export default Main;