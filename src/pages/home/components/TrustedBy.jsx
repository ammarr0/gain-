
import React from 'react';

export default function TrustedBy() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-lg font-semibold text-[gray-800] mb-6">
          Trusted By
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-8">
          <div className="flex flex-col items-center">
            <img
              src="/assets/adobe.png"
              alt="Adobe"
              className="h-8 mb-2"
            />
            <p className="text-sm text-gray-600">Adobe</p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="/assets/salesforce.png"
              alt="Salesforce"
              className="h-8 mb-2"
            />
            <p className="text-sm text-gray-600">Salesforce</p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="/assets/medium.png"
              alt="Medium"
              className="h-8 mb-2"
            />
            <p className="text-sm text-gray-600">Medium</p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="/assets/workday.png"
              alt="Workday"
              className="h-8 mb-2"
            />
            <p className="text-sm text-gray-600">Workday</p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="/assets/clickup.png"
              alt="ClickUp"
              className="h-8 mb-2"
            />
            <p className="text-sm text-gray-600">ClickUp</p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="/assets/bubble.png"
              alt="Bubble"
              className="h-8 mb-2"
            />
            <p className="text-sm text-gray-600">Bubble</p>
          </div>
        </div>
      </div>
    </section>
  );
}

