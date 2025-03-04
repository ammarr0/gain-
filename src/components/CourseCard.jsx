import { FaStar } from 'react-icons/fa';

const CourseCard = ({ title, rating, reviews, level, duration }) => {
  return (
    <div

      className="w-[300px] h-[450px] bg-white shadow-md rounded-2xl p-4
                 hover:shadow-xl hover:scale-105 hover:-translate-y-1
                 transition-all duration-300 ease-in-out cursor-pointer
                 flex flex-col relative"
    >
      {/* Image placeholder (increased height) */}
      <div className="w-full h-[240px] bg-gray-200 rounded-xl mb-4" />

      {/* Title (fixed position) */}
      <h2 className="text-2xl font-semibold text-gray-800 absolute top-[270px]">
        {title}
      </h2>

      {/* Rating & Reviews (fixed position) */}
      <div className="flex items-center space-x-2 text-yellow-500 absolute bottom-[50px]">
        <FaStar />
        <span className="text-gray-700 text-xl font-bold">{rating}</span>
        <span className="text-md text-gray-500">{reviews} Reviews</span>
      </div>

      {/* Level & Exact Duration (fixed position) */}
      <p className="text-md font-sm text-gray-500 absolute bottom-[20px]">
        {level} &middot; Course &middot;  {duration} Weeks
      </p>
    </div>
  );
};

export default CourseCard;
