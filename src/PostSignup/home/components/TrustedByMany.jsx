// src/pages/home/components/TrustedByMany.jsx

import React from 'react';

export default function TrustedByMany() {
  // Example data for each testimonial card
  const testimonials = [
    {
      quote:
        '“All base UI elements are made using Nested Symbols and shared styles that are logically connected. Gorgeous, high-quality video sharing on desktop, mobile, tablet. All base UI elements are made using Nested Symbols.”',
      name: 'John Smith',
      description: 'Software Engineer at TechCorp',
      social: {
        facebook: 'https://facebook.com',
        twitter: 'https://twitter.com',
      },
    },
    {
      quote:
        '“All base UI elements are made using Nested Symbols and shared styles that are logically connected. Gorgeous, high-quality video sharing on desktop, mobile, tablet. All base UI elements are made using Nested Symbols.”',
      name: 'Jane Johnson',
      description: 'Product Manager at Innovate Inc.',
      social: {
        facebook: 'https://facebook.com',
        twitter: 'https://twitter.com',
      },
    },
    {
      quote:
        '“All base UI elements are made using Nested Symbols and shared styles that are logically connected. Gorgeous, high-quality video sharing on desktop, mobile, tablet. All base UI elements are made using Nested Symbols.”',
      name: 'Alice Doe',
      description: 'UX Designer at Creative Solutions',
      social: {
        facebook: 'https://facebook.com',
        twitter: 'https://twitter.com',
      },
    },
  ];

  // A single user icon for all cards (from Freepik link)
  const userIconUrl =
    'https://img.freepik.com/free-icon/user_318-159711.jpg';

  return (
    <section className="py-12 bg-white">
      <div className="section-container">
        {/* Section title */}
        <h2 className="text-2xl md:text-3xl font-2xl text-center mb-8">
          Trusted by Many
        </h2>

        {/* Grid of testimonial cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white border rounded-xl shadow-sm p-8 flex flex-col justify-between h-auto"
            >
              {/* Quote */}
              <p className="text-gray-700 mb-6">{item.quote}</p>

              {/* Bottom row: user icon + name/description + social icons */}
              <div className="flex flex-col sm:flex-row items-center justify-between mt-auto space-y-4 sm:space-y-0">
                {/* Icon + name/description */}
                <div className="flex flex-col items-center sm:items-start space-y-3">
                  <img
                    src={userIconUrl}
                    alt={`User Icon of ${item.name}`}
                    className="w-12 h-12 object-cover rounded-full"
                  />
                  <div className="text-center sm:text-left">
                    <p className="font-semibold text-gray-800">
                      {item.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Social icons */}
                <div className="flex space-x-3">
                  <a
                    href={item.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"
                      alt={`${item.name}'s Facebook Icon`}
                      className="w-5 h-5"
                    />
                  </a>
                  <a
                    href={item.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg"
                      alt={`${item.name}'s Twitter Icon`}
                      className="w-5 h-5"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
