import React from 'react';

const IntroCard = () => {
  return (
    <div className="flex items-start p-4 gap-5 max-w-3xl">
      <div className="w-[150px] h-[100px] bg-gray-200 rounded-lg"></div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold mb-1">1. Introduction</h3>
        <p className="text-sm text-gray-700 leading-relaxed">
          Learn the basics of AI, its core concepts, and real-world applications, including machine learning and natural language processing, to prepare for the AI-driven future.
        </p>
      </div>
    </div>
  );
};

export default IntroCard;