// src/pages/home/components/Pricing.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  // Toggle for Yearly vs. Monthly
  const [isYearly, setIsYearly] = useState(true);

  // Example plan data
  const plans = [
    {
      name: 'Basic',
      monthlyPrice: '$99',
      yearlyPrice: '$49',
      seatPrice: '+$49 per seat',
      features: [
        'Unlimited hirings',
        '3 job ads',
        '25 InMails per Job ad',
        'AI Matching',
      ],
    },
    {
      name: 'Plus',
      monthlyPrice: '$199',
      yearlyPrice: '$99',
      seatPrice: '+$49 per seat',
      mostPopular: true,
      features: [
        'Unlimited hirings',
        'Unlimited job ads',
        '25 InMails per Job ad',
        'Access to GAIN talent pool',
        'AI Matching',
      ],
    },
    {
      name: 'Prime',
      monthlyPrice: '$295',
      yearlyPrice: '$149',
      seatPrice: '+$49 per seat',
      features: [
        'Unlimited hirings',
        'Unlimited job ads',
        '25 InMails per Job ad',
        '1 placement guaranteed',
        'Dedicated account manager',
        'Access to GAIN talent pool',
        'AI Matching',
      ],
    },
  ];

  // Helper for billing text
  const getBillingText = () => (isYearly ? 'Billed Yearly' : 'Billed Monthly');

  return (
    <section className="py-12 w-full flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl mx-auto px-2 sm:px-4 md:px-8 flex flex-col items-center">
        {/* Pricing Heading */}
        <h3 className="text-3xl font-sm mb-8 text-black text-center w-full">Pricing</h3>

        {/* Title + subtitle */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center w-full">
          Choose a plan that suits you best!
        </h2>
        <p className="text-gray-600 mb-8 text-center w-full">
          As each company has unique recruitment needs, we have crafted
          multiple offers tailored to align with your specific objectives.
        </p>

        {/* Toggle: Yearly / Monthly */}
        <div className="flex justify-center w-full mb-12">
          <div className="relative w-44 h-10 bg-[#E0EEFF] rounded-full p-1 flex items-center">
            {/* Sliding dark pill */}
            <div
              className={`
                absolute top-1 h-8 w-[50%] bg-[#030923] rounded-full
                transform transition-all duration-300
                ${isYearly ? 'left-1' : 'left-[calc(50%+0.25rem)]'}
              `}
            />
            <button
              onClick={() => setIsYearly(true)}
              className={`relative z-10 w-1/2 text-sm font-semibold ${
                isYearly ? 'text-white' : 'text-[#030923]'
              }`}
            >
              Yearly
            </button>
            <button
              onClick={() => setIsYearly(false)}
              className={`relative z-10 w-1/2 text-sm font-semibold ${
                !isYearly ? 'text-white' : 'text-[#030923]'
              }`}
            >
              Monthly
            </button>
          </div>
        </div>

        {/* Pricing Plan Cards */}
        <div className="w-full flex flex-col items-center">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-center items-stretch">
            {plans.map((plan, index) => {
              // Middle card uses gradient, 530px tall
              // First/last cards use #AED8FF, 550px tall
              const isMiddle = index === 1;
              const cardBgClass = isMiddle
                ? 'bg-gradient-to-b from-[#030923] to-[#0C2389] text-white h-auto sm:h-[570px] w-full max-w-[355px]'
                : 'bg-[#AED8FF] text-gray-900 h-auto sm:h-[550px] w-full max-w-[340px]';

              return (
                <div
                  key={index}
                  className={`relative rounded-3xl p-8 flex flex-col shadow-md ${cardBgClass} mx-auto items-center justify-between`}
                  style={{ minHeight: '100%' }}
                >
                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold mb-2 text-center w-full">{plan.name}</h3>

                  {/* "Most Popular" pill with star icon */}
                  {plan.mostPopular && (
                    <div className="inline-flex items-center justify-center bg-[#AED8FF] text-[#030923] px-2 py-1 rounded-full text-sm font-semibold mb-4 mx-auto">
                      {/* Star Icon */}
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927a.75.75 0 011.902 0l1.06 3.265a.75.75 0 00.713.52h3.465a.75.75 0 01.441 1.349l-2.8 2.035a.75.75 0 00-.272.84l1.06 3.265a.75.75 0 01-1.157.84L10 14.347l-2.96 2.198a.75.75 0 01-1.157-.84l1.06-3.265a.75.75 0 00-.272-.84l-2.8-2.035a.75.75 0 01.441-1.35h3.465a.75.75 0 00.713-.52L9.05 2.927z" />
                      </svg>
                      Most Popular
                    </div>
                  )}

                  {/* Price */}
                  <p className="text-4xl font-extrabold mb-1 text-center w-full">
                    {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </p>
                  <p className="mb-1 font-medium text-center w-full">{plan.seatPrice}</p>
                  <p className="text-center w-full">{getBillingText()}</p>

                  {/* Divider line below the billing text */}
                  <div
                    className={`w-full h-[1px] mt-2 mb-6 ${
                      isMiddle ? 'bg-white/50' : 'bg-gray-300'
                    }`}
                  />

                  {/* Feature List */}
                  <ul className="space-y-2 mb-8 flex-1 w-full">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center justify-center">
                        <svg
                          className={`w-5 h-5 flex-shrink-0 mr-2 ${
                            isMiddle ? 'text-white' : 'text-gray-800'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414L9.414 
                            14l-3.707-3.707a1 1 0 00-1.414 1.414l4.414 4.414a1 1 0 001.414 
                            0l8-8a1 1 0 00-1.414-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button: wide and rounded-xl */}
                  <button
                    className={`
                      w-full py-3 rounded-xl font-semibold transition-colors
                      bg-white text-[#030923] hover:bg-gray-100
                    `}
                  >
                    Get Started
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Banner: pill-shaped with a border */}
        <div className="mt-12 border border-[#4E96F7] rounded-2xl py-6 px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between shadow-sm shadow-[#4E96F7] w-full max-w-3xl mx-auto">
          <div className="mb-4 md:mb-0 text-center md:text-left w-full md:w-auto">
            <h4 className="text-2xl font-bold text-[#030923] mb-1">
              Start 30 Day Free Trial
            </h4>
            <p className="text-sm text-gray-600">
              Try first and decide later, no credit card required!
            </p>
          </div>
          <div className="w-full md:w-auto flex justify-center md:justify-end">
            <button
              type="button"
              className="bg-[#377DFF] text-white font-semibold py-3 px-6 rounded-full hover:bg-[#2663dc] transition-colors w-full md:w-auto mt-4 md:mt-0"
            >
              Start Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}