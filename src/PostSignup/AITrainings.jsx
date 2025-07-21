// AITrainings.jsx
import React from 'react';

import CourseCard from '../components/CourseCard';
import HeroSection from '../components/HeroSection';

// Export the courses array
export const courses = [
  { title: "Advanced Machine Learning", rating: 4.9, reviews: 25, level: "Advanced", duration: "6-10" },
  { title: "Data Science Essentials", rating: 4.7, reviews: 20, level: "Intermediate", duration: "2-6" },
  { title: "Web Development Bootcamp", rating: 4.9, reviews: 30, level: "Beginner to Advanced", duration: "4-12" },
  { title: "Cybersecurity Fundamentals", rating: 4.6, reviews: 10, level: "Beginner", duration: "3-8" },
  { title: "Cloud Computing Basics", rating: 4.5, reviews: 18, level: "Beginner", duration: "1-4" },
  { title: "Introduction to Artificial Intelligence (AI)", rating: 4.8, reviews: 29, level: "Beginner", duration: "1-4" },
  { title: "Artificial Intelligence for Business", rating: 4.5, reviews: 15, level: "Intermediate", duration: "2-5" },
  { title: "Artificial Intelligence in Marketing", rating: 5.0, reviews: 140, level: "Beginner", duration: "1-5" },
  { title: "Artificial Intelligence for Cyber Security", rating: 4.7, reviews: 25, level: "Beginner", duration: "2-4" },
  { title: "Artificial Intelligence for Business", rating: 4.6, reviews: 33, level: "Intermediate", duration: "1-3" },
  { title: "Artificial Intelligence in Marketing", rating: 5.0, reviews: 140, level: "Beginner", duration: "1-5" },
  { title: "Artificial Intelligence for Cyber Security", rating: 4.7, reviews: 25, level: "Beginner", duration: "2-4" }
];

const AITrainings = () => {
  return (
    <div className="bg-white min-h-screen">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Onest:wght@400;700&display=swap');
          .onest-regular {
            font-family: "Onest", sans-serif;
            font-optical-sizing: auto;
            font-weight: 400;
            font-style: normal;
          }
          .onest-bold {
            font-family: "Onest", sans-serif;
            font-optical-sizing: auto;
            font-weight: 700;
            font-style: normal;
          }
        `}
      </style>
      <div className="bg-white py-8 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 text-center sm:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-2xl text-left text-gray-900 mb-3 onest-bold">
          Artificial Intelligence (AI) Courses
        </h1>
        <p
          className="max-w-4xl text-left text-gray-600 onest-regular"
          style={{ fontSize: '16px' }}
        >
          AI courses focus on simulating human intelligence through machines. Exploring AI is essential for creating
          intelligent systems and applications, making it valuable for developers, researchers, and anyone passionate
          about cutting-edge technology.
        </p>
      </div>
      <main className="max-w-7xl mx-auto px-2 sm:px-4 md:px-8 lg:px-12 xl:px-0">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-6 mx-auto text-center onest-bold">
          Featured AI Courses
        </h2>
        {/* 3 cards per row, cards wider */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="rounded-2xl w-auto h-full flex flex-col"
            >
              <div className="w-[350px]">
                <CourseCard {...course} />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 sm:mt-12">
          <HeroSection />
        </div>
      </main>
    </div>
  );
};

export default AITrainings;