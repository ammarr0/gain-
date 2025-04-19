// src/pages/home/components/FAQSection.jsx

import React, { useState } from 'react';

const FAQSection = () => {
  // Example FAQ data (question + answer)
  const faqData = [
    {
      question: 'What is GAIN FYI?',
      answer: 'GAIN FYI is a platform specializing in Artificial Intelligence (AI) services, including AI Training, AI Recruiting, Freelancing for AI Projects, and AI Product solutions.'
    },
    {
      question: 'What industries does GAIN FYI serve?',
      answer: 'We serve industries ranging from healthcare, finance, retail, and more—anywhere AI can be applied for data insights and automation.'
    },
    {
      question: 'How do I find the right talent for my project?',
      answer: 'Use our advanced search and filtering tools, or post a job requirement. Our system matches you with top-rated AI professionals.'
    },
    {
      question: 'Can I hire entire teams through GAIN FYI?',
      answer: 'Yes, you can assemble complete AI teams that include data scientists, developers, UX researchers, and machine learning engineers.'
    },
    {
      question: 'How do I showcase my AI expertise?',
      answer: 'Create a profile detailing your AI skills, certifications, and portfolio. Engage with community projects and get rated by clients.'
    },
    {
      question: 'Are there remote work opportunities?',
      answer: 'Absolutely. Many of our AI projects are fully remote, allowing talent and businesses to collaborate from anywhere in the world.'
    }
  ];

  // Track which FAQ item is open (null = none)
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle open/close for a given index
  const handleToggle = (index) => {
    // If clicking the same item, close it; else open the new item
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-2xl text-center mb-8">
        Frequently Asked Questions
      </h2>

      <div className="space-y-2">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`border rounded-lg shadow-sm ${
              openIndex === index ? 'bg-gray-50' : 'bg-white'
            }`}
          >
            {/* Question Row */}
            <button
              type="button"
              onClick={() => handleToggle(index)}
              className="w-full flex items-center justify-between text-left px-4 py-3 focus:outline-none"
            >
              <span className="font-semibold text-gray-900">
                {faq.question}
              </span>
              <span className="text-xl font-bold text-gray-500">
                {openIndex === index ? '–' : '+'}
              </span>
            </button>

            {/* Answer (shown if openIndex === index) */}
            {openIndex === index && (
              <div className="px-4 pb-4 text-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
