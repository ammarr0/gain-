import React from 'react';

function Success() {
  return (
    <div className="flex justify-center w-full" >
      <div className="text-center" style={{ paddingTop: "170px" }}>
        <svg
          className="w-24 h-24 mx-auto text-blue-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
        <h2 className="text-2xl font-semibold text-gray-900 mt-4">
          Your Job Post Is Live
        </h2>
        <p className="text-gray-600 mt-2">
          Applicants can now preview your job. You can also see all your job
          postings on your homepage.
        </p>
      </div>
    </div>
  );
}

export default Success;