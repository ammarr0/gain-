import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const CourseCard = ({ title, rating, reviews, level, duration }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/join-us');
  };

  return (
    <div
      onClick={handleCardClick}
      className="w-[300px] h-[450px] bg-white shadow-md rounded-2xl p-4
        hover:shadow-xl hover:scale-105 hover:-translate-y-1
        transition-all duration-300 ease-in-out cursor-pointer
        flex flex-col border-2 border-[#030923] border-opacity-50 relative"
    >
      {/* Image placeholder */}
      <div className="w-full h-[240px] bg-gray-200 rounded-xl mb-4" />

      {/* Title */}
      <h2 className="text-2xl font-semibold text-gray-800 mt-2 mb-3">
        {title}
      </h2>

      {/* Rating & Reviews */}
      <div className="flex items-center space-x-2 text-yellow-500 mb-2">
        <FaStar />
        <span className="text-gray-700 text-xl font-bold">{rating}</span>
        <span className="text-md text-gray-500">{reviews} Reviews</span>
      </div>

      {/* Level & Duration */}
      <div className="mt-auto">
        <p className="text-md text-gray-500">
          {level} &middot; Course &middot; {duration} Weeks
        </p>
      </div>
    </div>
  );
};

export default CourseCard;
