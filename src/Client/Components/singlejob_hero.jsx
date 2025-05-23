import React from 'react';
import more from "../../assets/more-vertical.png"

const SingleJobHero = () => {
    return (
        <div className="bg-white border border-[#C7C7C7] rounded-[10px] mt-4 p-6 flex justify-between items-center">
            <div>
                <h1 className="text-3xl font-medium text-gray-800">Recruitment App Development</h1>
                <h6 className="font-medium text-gray-800">Posted 2 days ago</h6>
            </div>
            <div className="flex gap-2">
                <button className="border border-black text-black py-2 px-4 rounded-[10px] bg-transparent">Project  Visiblity</button>
                <button className="border border-black text-black py-2 px-4 rounded-[10px] bg-transparent">Edit Project</button>
                <button className="border border-black text-black py-2 px-4 rounded-[10px] bg-transparent">View Project</button>
                <img src={more} alt="edit" />
            </div>
        </div>
    );
};

export default SingleJobHero;