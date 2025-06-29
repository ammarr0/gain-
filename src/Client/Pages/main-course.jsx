import React from "react";
import { Star } from "lucide-react";
import List from "../../consultingfirm/components/mainpage"

const CoursePreviewCard = ({ course }) => {
    const demoData = {
        title: "Introduction to Artificial Intelligence (AI)",
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
        <>
            <div className="flex">
                <div className="max-w-4xl mx-auto p-4 bg-white">
                    <div className="w-full h-60 bg-gray-100 rounded-lg mb-4"></div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        {displayCourse.title}
                    </h2>
                    <div className="flex items-center gap-2 mb-2">
                        <img
                            src={displayCourse.instructor.avatar}
                            alt={displayCourse.instructor.name}
                            className="w-8 h-8 rounded-full"
                        />
                        <div className="text-sm text-gray-700">
                            {displayCourse.instructor.name}
                            <span className="block text-xs text-gray-500">{displayCourse.instructor.location}</span>
                        </div>
                    </div>
                    <p className="text-gray-600 mb-4">{displayCourse.description}</p>
                    <div className="flex items-center text-sm text-gray-600">
                        <Star className="text-yellow-500 fill-yellow-500 w-4 h-4 mr-1" />
                        <span className="font-semibold mr-1">{displayCourse.rating}</span>
                        <span className="mr-3 text-gray-500">({displayCourse.reviews} Reviews)</span>
                        <span className="text-gray-500">
                            | {displayCourse.level} · {displayCourse.duration}
                        </span>
                    </div>

                    <List />
                </div>
            </div>
        </>
    );
};

export default CoursePreviewCard;