import React from "react";
import { Star } from "lucide-react";
import List from "../../consultingfirm/components/mainpage"

const CoursePreviewCard = ({ course }) => {
    const demoData = {
        title: "Introduction to Artificial Intelligence (AIL)",
        description:
            "Learn the basics of AI, its core concepts, and real-world applications, including machine learning and natural language processing, to prepare for the AI-driven future.",
        instructor: {
            name: "Tyrion Lannister",
            location: "King's Landing",
            avatar: "https://i.pravatar.cc/40?img=12",
        },
        rating: 4.8,
        reviews: 15,
        level: "Beginner",
        duration: "1 - 4 Weeks",
    };

    const displayCourse = course || demoData;

    return (
        <div className="flex justify-center items-start w-full min-h-screen bg-white px-4 sm:px-8 py-8" style={{border:"4px solid black"}}>
            <div className="section-container p-6 sm:p-8 md:p-10 bg-white rounded-lg shadow-lg">
                <div className="w-full h-60 sm:h-80 bg-gray-100 rounded-lg mb-6"></div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 text-left">
                    {displayCourse.title}
                </h2>
                <div className="flex items-center gap-4 mb-4">
                    <img
                        src={displayCourse.instructor.avatar}
                        alt={displayCourse.instructor.name}
                        className="w-10 h-10 rounded-full"
                    />
                    <div className="text-base text-gray-700 text-left">
                        {displayCourse.instructor.name}
                        <span className="block text-sm text-gray-500">{displayCourse.instructor.location}</span>
                    </div>
                </div>
                <p className="text-lg text-gray-600 mb-6 text-left">{displayCourse.description}</p>
                <div className="flex flex-wrap items-center text-base text-gray-600 mb-6 text-left">
                    <Star className="text-yellow-500 fill-yellow-500 w-5 h-5 mr-2" />
                    <span className="font-semibold mr-2">{displayCourse.rating}</span>
                    <span className="mr-4 text-gray-500">({displayCourse.reviews} Reviews)</span>
                    <span className="text-gray-500">
                        | {displayCourse.level} · {displayCourse.duration}
                    </span>
                </div>
                <div className="text-left">
                    <List />
                </div>
            </div>
        </div>
    );
};

export default CoursePreviewCard;