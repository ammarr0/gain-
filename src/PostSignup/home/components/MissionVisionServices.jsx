// src/pages/home/components/MissionVisionServices.jsx
import React from 'react';

const MissionVisionServices = () => {
  return (
    <section className="py-8">
      <div
        className="
          w-full
          max-w-9xl
          min-h-[200px]
          mx-auto
          grid grid-cols-1 md:grid-cols-3
          border-y border-gray-300
          shadow-md
          divide-y md:divide-y-0 md:divide-x divide-gray-300
        "
      >
        {/* Mission */}
        <div className="flex flex-col items-center justify-center p-8 text-center">
          <h3 className="text-2xl font-lg mb-4">Mission</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* Vision */}
        <div className="flex flex-col items-center justify-center p-8 text-center">
          <h3 className="text-2xl font-lg mb-4">Vision</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>

        {/* Services */}
        <div className="flex flex-col items-center justify-center p-12 text-center">
          <h3 className="text-2xl font-lg mb-4">Services</h3>
          <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionServices;
