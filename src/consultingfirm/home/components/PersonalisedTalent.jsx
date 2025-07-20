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
    <section className="p-1 bg-white rounded-2xl max-w-7xl mx-auto w-full">
      {/* Header + Arrows */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3">
        <div>
          <h2 className="text-2xl sm:text-3xl font-lg">Personalised Talent</h2>
          <p className="text-base sm:text-lg">Based on your recent postings and requirements, here are some candidates.</p>
        </div>
        <div className="flex flex-row sm:flex-col items-center sm:items-end gap-2 sm:gap-1">
          <div className="flex flex-row gap-2 mb-0 sm:mb-2">
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
          <p className="underline cursor-pointer text-sm sm:text-base">View All</p>
        </div>
      </div>

      {/* Responsive Cards Container */}
      <div
        ref={scrollRef}
        className="
          flex 
          gap-4
          sm:gap-6
          overflow-x-auto
          overflow-y-visible
          pb-2
          w-full
          snap-x
          snap-mandatory
          "
        style={{
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {candidates.map((candidate, idx) => (
          <div
            key={idx}
            className="
              border 
              rounded-3xl 
              p-5 
              sm:p-8 
              min-w-[85vw] 
              max-w-[95vw]
              sm:min-w-[330px] 
              sm:max-w-[340px]
              min-h-[340px] 
              flex 
              flex-col 
              items-start 
              relative
              bg-white
              snap-start
              "
            style={{
              flex: '0 0 auto',
            }}
          >
            <div className="w-16 h-16 rounded-full overflow-hidden mb-3 mx-auto">
              <img src="/assets/user.png" alt="Profile" className="w-full h-full object-cover" />
            </div>

            <h3 className="text-lg sm:text-xl font-bold">{candidate.name}</h3>
            <p className="text-black text-sm sm:text-base">{candidate.country}</p>
            <p className="text-[#007DF0] font-medium mt-1 text-sm sm:text-base">{candidate.title}</p>

            <div className="flex items-center flex-wrap gap-x-2 text-gray-600 mt-3 text-sm">
              <img src="/assets/dollar.png" alt="Dollar" className="w-4 h-4 mr-1" />
              <span>{candidate.rate}</span>
              <StarIcon className="w-4 h-4 text-black-500" />
              <span>{candidate.rating}</span>
              <span>({candidate.reviews})</span>
            </div>

            {candidate.available && (
              <div className="flex items-center mt-2 text-black text-sm">
                <CheckCircleIcon className="w-4 h-4 mr-1" /> <span>Available Now</span>
              </div>
            )}

            <div className="w-full flex justify-between items-center mt-auto pt-4 gap-2">
              <button className="w-[70%] sm:w-[75%] bg-white text-gray-900 border border-gray-900 py-2 rounded-2xl hover:bg-gray-100 transition-all text-sm sm:text-base">
                View Profile
              </button>
              <button className="p-2 border border-black rounded-xl hover:bg-gray-100">
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
