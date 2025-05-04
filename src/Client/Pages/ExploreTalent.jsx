import React from 'react';
import Hero from "../../consultingfirm/exploretalent/herosection";
import TalentProfileCard from '../../consultingfirm/exploretalent/talentcards';

const ExporeTalent = () => {
    return (
        <>
            <div className='w-full'>
                    <Hero />
                    <TalentProfileCard />

            </div>
        </>
    );
};

export default ExporeTalent;