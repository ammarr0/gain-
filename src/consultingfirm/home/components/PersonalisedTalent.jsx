import React, { useRef, useEffect, useState } from 'react';
import { CheckCircleIcon, MessageSquareIcon } from 'lucide-react';

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}

const PersonalisedTalent = () => {
  const scrollRef = useRef(null);
  const [talentData, setTalentData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTalentData = async () => {
      setLoading(true);
      setError('');
      try {
        const accessToken = getCookie('access_token');
        if (!accessToken) {
          setError('No access token found.');
          setLoading(false);
          return;
        }
        const response = await fetch('https://gain-b7ea8e7de810.herokuapp.com/users/list', {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error('Failed to load talent data.');
        }
        const data = await response.json();
        if (data && data.status && Array.isArray(data.data)) {
          setTalentData(data.data);
        } else {
          setError('Failed to load talent data.');
        }
      } catch (err) {
        setError('Failed to load talent data.');
      } finally {
        setLoading(false);
      }
    };

    fetchTalentData();
  }, []);

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

  // Only show INDIVIDUAL_TALENT
  const candidates = talentData.filter(t => t.role === 'INDIVIDUAL_TALENT');

  return (
    <section className="p-1 bg-white rounded-2xl main-container">
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
        {loading ? (
          <div className="text-center w-full py-10 text-lg text-gray-600">Loading talent data...</div>
        ) : error ? (
          <div className="text-center w-full py-10 text-lg text-red-600">{error}</div>
        ) : candidates.length === 0 ? (
          <div className="text-center w-full py-10 text-lg text-gray-600">No talent found.</div>
        ) : (
          candidates.map((candidate, idx) => (
            <div
              key={candidate._id || idx}
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
                <img
                  src={
                    candidate.image && candidate.image.startsWith('http')
                      ? candidate.image
                      : "/assets/user.png"
                  }
                  alt="Profile"
                  className="w-full h-full object-cover"
                  onError={e => { e.target.onerror = null; e.target.src = "/assets/user.png"; }}
                />
              </div>

              <h3 className="text-lg sm:text-xl font-bold">
                {candidate.first_name} {candidate.last_name}
              </h3>
              <p className="text-black text-sm sm:text-base">{candidate.country || candidate.city || 'Unknown'}</p>
              {/* Email removed */}
              {/* Static data removed: rate, rating, reviews */}
              {/* <p className="text-[#007DF0] font-medium mt-1 text-sm sm:text-base">{candidate.email}</p> */}
              {/* <div className="flex items-center flex-wrap gap-x-2 text-gray-600 mt-3 text-sm">
                <img src="/assets/dollar.png" alt="Dollar" className="w-4 h-4 mr-1" />
                <span>{"$100.00/hr"}</span>
                <StarIcon className="w-4 h-4 text-black-500" />
                <span>{"4.9"}</span>
                <span>{"(32)"}</span>
              </div> */}

              <div className="flex items-center mt-2 text-black text-sm">
                <CheckCircleIcon className="w-4 h-4 mr-1" /> <span>Available Now</span>
              </div>

              <div className="w-full flex justify-between items-center mt-auto pt-4 gap-2">
                <button className="w-[70%] sm:w-[75%] bg-white text-gray-900 border border-gray-900 py-2 rounded-2xl hover:bg-gray-100 transition-all text-sm sm:text-base">
                  View Profile
                </button>
                <button className="p-2 border border-black rounded-xl hover:bg-gray-100">
                  <MessageSquareIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default PersonalisedTalent;
