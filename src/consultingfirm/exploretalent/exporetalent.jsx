import React from 'react';
import Hero from "./herosection";
import TalentProfileCard from './talentcards';
import Sidebar from '../components/cfsidebar';

const ExporeTalent = () => {
    return (
        <>
            <div className='flex'>
                <Sidebar />
                <div className='w-[90%]'>
                    <Hero />
                    <TalentProfileCard />
                </div>
            </div>

        </>
    );
};

export default ExporeTalent;