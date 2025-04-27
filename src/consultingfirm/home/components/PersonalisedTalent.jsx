import React, { useRef } from 'react';
import { CheckCircleIcon, StarIcon, MessageSquareIcon } from 'lucide-react';

const candidates = [
  {
    name: 'Abdullah Ahmad',
    country: 'Pakistan',
    title: 'Senior Product Designer',
    rate: '$100.00/hr',
    rating: '4.9',
    reviews: '32',
    available: true
  },
  {
    name: 'John Doe',
    country: 'USA',
    title: 'Software Engineer',
    rate: '$120.00/hr',
    rating: '4.8',
    reviews: '45',
    available: true
  },
  {
    name: 'Jane Smith',
    country: 'UK',
    title: 'Data Scientist',
    rate: '$110.00/hr',
    rating: '4.7',
    reviews: '38',
    available: true
  },
  {
    name: 'Carlos Rodriguez',
    country: 'Spain',
    title: 'UI/UX Designer',
    rate: '$105.00/hr',
    rating: '4.6',
    reviews: '41',
    available: true
  },
  {
    name: 'Li Mei',
    country: 'China',
    title: 'Backend Developer',
    rate: '$115.00/hr',
    rating: '4.9',
    reviews: '50',
    available: true
  },
  {
    name: 'Sophie Martin',
    country: 'France',
    title: 'Frontend Developer',
    rate: '$100.00/hr',
    rating: '4.8',
    reviews: '35',
    available: true
  },
];

const PersonalisedTalent = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="p-1 bg-white rounded-2xl max-w-7xl mx-auto">
      {/* Header + Arrows */}
      <div className="flex items-center justify-between mb-4 px-4">
        <h2 className="text-3xl font-lg">Personalised Talent</h2>
        <div className="space-x-2">
          <button
            onClick={scrollLeft}
            className="p-2 bg-white text-gray-600 rounded-full hover:bg-gray-300 focus:outline-none"
          >
            <img src="/assets/back.png" alt="Back" className="w-8 h-8" />
          </button>
          <button
            onClick={scrollRight}
            className="p-2 bg-white text-gray-600 rounded-full hover:bg-gray-300 focus:outline-none"
          >
            <img src="/assets/next.png" alt="Next" className="w-8 h-8" />
          </button>
        </div>
          <p className="underline">View All</p>
        </div>
          <p className="underline">View All</p>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div
        ref={scrollRef}
        className="flex space-x-6 overflow-hidden"
      >
        {candidates.map((candidate, idx) => (
          <div
            key={idx}
            className="border rounded-3xl p-8 min-w-[330px] min-h-[360px] flex flex-col items-start relative"
          >
            {/* Profile Picture */}
            <div className="w-16 h-16 rounded-full overflow-hidden mb-3">
              <img src="/assets/user.png" alt="Profile" className="w-full h-full object-cover" />
            </div>

            {/* Candidate Info */}
            <h3 className="text-xl font-bold">{candidate.name}</h3>
            <p className="text-black">{candidate.country}</p>
            <p className="text-[#007DF0] font-medium mt-1">{candidate.title}</p>

            {/* Rate, Rating, Reviews */}
            <div className="flex items-center space-x-2 text-gray-600 mt-3">
              <img src="/assets/dollar.png" alt="Dollar" className="w-4 h-4 mr-1" />
              <span>{candidate.rate}</span>
              <StarIcon className="w-4 h-4 text-black-500" />
              <span>{candidate.rating}</span>
              <span>({candidate.reviews})</span>
            </div>

            {/* Availability */}
            {candidate.available && (
              <div className="flex items-center mt-2 text-black">
                <CheckCircleIcon className="w-4 h-4 mr-1" /> <span>Available Now</span>
              </div>
            )}

            {/* Buttons Section */}
            <div className="w-full flex justify-between items-center mt-auto pt-4">
              <button className="w-[75%] bg-white text-gray-900 border border-gray-900 py-2  rounded-2xl hover:bg-gray-100 transition-all">
                View Profile
              </button>
              <button className="p-2 border border-black mr-4 rounded-xl hover:bg-gray-100">
                <MessageSquareIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PersonalisedTalent;
