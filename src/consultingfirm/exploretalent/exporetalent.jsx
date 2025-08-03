import React from 'react';
import Hero from "./herosection";
import TalentProfileCard from './talentcards';

const ExporeTalent = () => {
    return (
        <>
            <div className='flex w-full '>
                <div className='w-full'>
                    <Hero />
                    <TalentProfileCard />
                </div>
            </div>

        </>
    );
};

export default ExporeTalent;