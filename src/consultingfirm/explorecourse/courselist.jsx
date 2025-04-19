import React from "react";
import { Star } from "lucide-react";
import Data from "../../DB/course.json"

const CourseCard = () => {
  console.log("Data",Data)
  return (
    <>
      {Data.map((course, index) => (
        <div key={index} className="w-full bg-white rounded-2xl shadow-md p-6 flex flex-col sm:flex-row items-start gap-6 border mb-4">
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {course.title}
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              {course.description}
            </p>
            <div className="flex items-center text-sm text-gray-700 gap-2 mb-1">
              <Star className="text-yellow-500 fill-yellow-500 w-4 h-4" />
              <span className="font-semibold">{course.rating}</span>
              <span className="text-gray-500">· {course.reviews} Review{course.reviews > 1 ? 's' : ''}</span>
            </div>
            <div className="text-xs text-gray-500">
              {course.level} · Course · {course.duration}
            </div>
          </div>
          <div className="w-full sm:w-32 h-28 bg-gray-100 rounded-lg flex items-center justify-center relative">
            <div className="absolute top-2 right-2 text-gray-400 text-xl cursor-pointer">♡</div>
            <span className="text-sm text-gray-400">Image</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default CourseCard;