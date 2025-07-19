import React from 'react';
import Hero from "./herosection";
import TalentProfileCard from './talentcards';

const ExporeTalent = () => {
    return (
        <>
            <div className='flex'>
                <div className='w-[90%]'>
                    <Hero />
                    <TalentProfileCard />
                </div>
            </div>

        </>
    );
};

export default ExporeTalent;