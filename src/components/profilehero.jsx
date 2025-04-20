import React from 'react';

const demoProfile = {
  name: "John Doe",
  role: "Software Engineer",
  location: "San Francisco, CA",
  availability: "Full-time",
  rating: 4.5
};

const ProfileCard = ({ name, role, location, availability, rating }) => (
  <div className="bg-gradient-to-b from-white to-blue-100 p-6 rounded-3xl shadow-xl w-full mx-auto relative my-4">
    <div className="flex items-center mb-4">
      <img
        className="w-20 h-20 rounded-full mr-6"
        src="https://via.placeholder.com/150"
        alt={`${name}'s profile`}
      />
      <div className="flex flex-col ml-6">
        <h2 className="text-3xl font-semibold text-gray-800">{name}</h2>
        <div className="flex items-center text-yellow-400">
          {'★'.repeat(Math.floor(rating))}{'☆'.repeat(5 - Math.floor(rating))}
        </div>
        <p className="text-lg text-gray-500">{role}</p>
      </div>
    </div>
    <div className="mb-4">
      <p className="text-lg text-gray-500">{location}</p>
      <p className="text-lg text-gray-500">{availability}</p>
    </div>
    <button className="bg-blue-500 text-white py-3 px-6 rounded-full w-1/10 hover:bg-blue-600">
      Available Now
    </button>
    <div className="absolute bottom-4 right-4 text-blue-500">
      Share
    </div>
  </div>
);

const ProfileHero = () => <ProfileCard {...demoProfile} />;

export default ProfileHero;