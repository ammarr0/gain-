import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { FiMessageCircle, FiBookmark, FiShare2 } from 'react-icons/fi';
import menu from "../../assets/menu.svg";
import linkedinIcon from "../../assets/linkedin.png";
import calendarIcon from "../../assets/calender.png";
import websiteIcon from "../../assets/website.png";
import msg from "../../assets/msg.png";

// Helper function to truncate description to 30 words
function truncateWords(text, wordLimit) {
  if (!text) return '';
  const words = text.split(/\s+/);
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(' ') + '...';
}

// Helper to get cookie by name
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}

const INDIVIDUAL_TALENT = "INDIVIDUAL_TALENT";

const TalentProfileCard = () => {
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

  if (loading) {
    return (
      <div className="w-full px-4">
        <div className="text-center py-10 text-lg text-gray-600">Loading talent data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full px-4">
        <div className="text-center py-10 text-lg text-red-600">{error}</div>
      </div>
    );
  }

  // Filter to only show INDIVIDUAL_TALENT roles
  const filteredTalent = talentData.filter(
    (talent) => talent.role === INDIVIDUAL_TALENT
  );

  return (
    <div className="w-full px-4">
      {filteredTalent.length === 0 ? (
        <div className="text-center py-10 text-lg text-gray-600">No talent found.</div>
      ) : (
        <div className="flex flex-col gap-8 w-full">
          {filteredTalent.map((talent, index) => (
            <div
              key={talent._id || index}
              className="border rounded-2xl p-7 shadow-lg bg-white w-full mx-auto mb-6"
              style={{
                minHeight: 420,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Removed Decorative top bar */}
              <div className="flex flex-col md:flex-row justify-between gap-4 mt-2">
                <div className="flex gap-5 items-center">
                  <div className="relative">
                    <img
                      src={talent.image && talent.image.startsWith('http') ? talent.image : "https://via.placeholder.com/80"}
                      className="w-24 h-24 rounded-full object-cover border-4 border-blue-100 shadow"
                      onError={e => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/80"; }}
                    />
                    <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full"></span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                      {talent.first_name} {talent.last_name}
                      {talent.linkedin && (
                        <a href={talent.linkedin} target="_blank" rel="noopener noreferrer">
                          <img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5 ml-1 inline-block" />
                        </a>
                      )}
                    </h2>
                    <p className="text-gray-500 text-base md:text-lg mt-1">{talent.role}</p>
                    <div className="flex items-center text-yellow-400 text-base md:text-lg mt-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-between gap-2">
                  <div className="flex items-center gap-3 text-lg md:text-xl text-black">
                    <span className="font-semibold">{talent.experience || 'N/A'} yrs</span>
                    <span className="text-gray-400">|</span>
                    <span>{talent.rate ? `₹${talent.rate}/hr` : ''}</span>
                    <img src={calendarIcon} alt="Calendar" className="w-5 h-5 md:w-6 md:h-6" />
                    {talent.website && (
                      <a href={talent.website} target="_blank" rel="noopener noreferrer">
                        <img src={websiteIcon} alt="Website" className="w-5 h-5 md:w-6 md:h-6" />
                      </a>
                    )}
                  </div>
                  <div className="flex gap-2 mt-2">
                    <button className="rounded-full bg-blue-50 p-2 hover:bg-blue-100 transition">
                      <FiMessageCircle className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                    </button>
                    <button className="rounded-full bg-blue-50 p-2 hover:bg-blue-100 transition">
                      <FiBookmark className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                    </button>
                    <button className="rounded-full bg-blue-50 p-2 hover:bg-blue-100 transition">
                      <FiShare2 className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-base md:text-lg text-gray-500 flex items-center gap-2">
                  <span role="img" aria-label="location"></span>
                  {talent.city || talent.country || 'Unknown Location'}
                  <span className="text-gray-400">–</span>
                  <span className="text-sm">5:30 pm local time</span>
                </p>
                <span className="inline-block bg-blue-600 text-white text-xs md:text-sm px-3 py-1 rounded-full mt-2 shadow">
                 {talent.availability || 'Available Now'}
                </span>
              </div>
              <hr className="my-4" />
              <p className="text-gray-700 text-base md:text-lg mt-2 min-h-[60px]">
                {truncateWords(
                  talent.description ||
                    talent.email ||
                    talent.website ||
                    'No description available.',
                  30
                )}
              </p>
              <hr className="my-4" />
              <div className="flex justify-between items-center mt-4">
                <button className="border border-blue-600 text-blue-600 p-2 rounded-lg text-sm md:text-base font-semibold hover:bg-blue-50 transition px-5">
                  View Profile
                </button>
                <div className="flex items-center gap-2">
                  <img src={menu} alt="menu" className="w-5 h-5 md:w-6 md:h-6" />
                  <img src={msg} alt="message" className='border border-blue-600 p-1 rounded-[10px] w-5 h-5 md:w-6 md:h-6' />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TalentProfileCard;