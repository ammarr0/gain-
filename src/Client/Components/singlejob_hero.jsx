import React from 'react';
import more from "../../assets/more-vertical.png"

const SingleJobHero = () => {
    return (
        <div className="w-full bg-white border border-[#C7C7C7] rounded-[10px] mt-4 p-6 flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-4 md:mb-0">
                <h1 className="text-2xl md:text-3xl font-medium text-gray-800">Recruitment App Development</h1>
                <h6 className="font-medium text-gray-800">Posted 2 days ago</h6>
            </div>
            <div className="flex flex-wrap gap-2">
                <button className="border border-black text-black py-2 px-4 rounded-[10px] bg-transparent">Project Visibility</button>
                <button className="border border-black text-black py-2 px-4 rounded-[10px] bg-transparent">Edit Project</button>
                <button className="border border-black text-black py-2 px-4 rounded-[10px] bg-transparent">View Project</button>
                <img src={more} alt="edit" className="mt-2 md:mt-0" />
            </div>
        </div>
    );
};

export default SingleJobHero;