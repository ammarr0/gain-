// AITrainings.jsx

import CourseCard from '../components/CourseCard';
import HeroSection from '../components/HeroSection';

// Export the courses array
export const courses = [
  { title: "Introduction to Artificial Intelligence (AI)", rating: 4.8, reviews: 29, level: "Beginner", duration: "1-4" },
  { title: "Artificial Intelligence for Business", rating: 4.5, reviews: 15, level: "Intermediate", duration: "2-5"  },
  { title: "Artificial Intelligence in Marketing", rating: 5.0, reviews: 140, level: "Beginner", duration: "1-5" },
  { title: "Artificial Intelligence for Cyber Security", rating: 4.7, reviews: 25, level: "Beginner", duration: "2-4" },
  { title: "Artificial Intelligence for Business", rating: 4.6, reviews: 33, level: "Intermediate", duration: "1-3" },
  { title: "Artificial Intelligence in Marketing", rating: 5.0, reviews: 140, level: "Beginner", duration: "1-5" },
  { title: "Artificial Intelligence for Cyber Security", rating: 4.7, reviews: 25, level: "Beginner", duration: "2-4" },
  { title: "Artificial Intelligence for Business", rating: 4.6, reviews: 33, level: "Intermediate", duration: "1-3" },
  { title: "Artificial Intelligence in Marketing", rating: 5.0, reviews: 140, level: "Beginner", duration: "1-5" },
];

const AITrainings = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-white py-10 px-24 ml-8 text-center">
       <h1 className="text-4xl md:text-5xl font-2xl  text-left text-gray-900 mb-3">
          Artificial Intelligence (AI) Courses
        </h1>
        <p className="max-w-4xl text-left  text-gray-600" style={{fontSize: '18px'}}>
          AI courses focus on simulating human intelligence through machines. Exploring AI is essential for creating
          intelligent systems and applications, making it valuable for developers, researchers, and anyone passionate
          about cutting-edge technology.
        </p>
        </div>
      <main className=" max-w-5xl mx-auto  ">
       

        <h2 className="text-2xl font-semibold text-gray-800 mb-6 mx-auto text-center">Featured AI Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>

        <HeroSection />
      </main>
    </div>
  );
};

export default AITrainings;
