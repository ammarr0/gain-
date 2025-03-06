import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import ClientSignUpModal from './Client/ClientSignUp';
import FirmSignUpModal from './Firm/FirmSignup';
import TalentSignUpModal from './Talent/TalentSignup';

const JoinUs = () => {
  const navigate = useNavigate();
  const [isClientModalOpen, setIsClientModalOpen] = useState(false);
  const [isFirmModalOpen, setIsFirmModalOpen] = useState(false);
  const [isTalentModalOpen, setIsTalentModalOpen] = useState(false);

  const handleJoinClick = (path) => {
    if (path === '/client/signup') {
      setIsClientModalOpen(true);
    } else if (path === '/firm/signup') {
      setIsFirmModalOpen(true);
    } else if (path === '/talent/signup') {
      setIsTalentModalOpen(true);
    } else {
      navigate(path);
    }
  };

  const cards = [
    {
      title: 'Client',
      description:
        `Sign up as a client if you're an enterprise or consulting firm seeking 
        independent consultants, skilled contractors, or subject-matter experts 
        with execution skills to drive your projects or fill contract roles.`,
      path: '/client/signup',
    },
    {
      title: 'Consulting Firm',
      description:
        `Register here if you're a specialist consulting firm looking to deploy your 
        consultants on project opportunities with GAIN's clients, boosting your 
        staff's utilization rates and your firm's earning potential.`,
      path: '/firm/signup',
    },
    {
      title: 'Independent Talent',
      description:
        `Apply here if you're an independent consultant, contractor, or subject-matter 
        expert looking for project or contract opportunities with leading enterprises 
        and global consulting firms.`,
      path: '/talent/signup',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white">
      <Breadcrumb />

      <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
        Join Us
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`bg-white rounded-lg p-6 flex flex-col justify-between ${index === 0 ? 'ml-4' : ''} ${index === cards.length - 1 ? 'mr-4' : ''}`}
            style={{ height: 'auto' }}
          >
            <div>
              {/* Increased height placeholder image with fully rounded corners */}
              <div className="w-full h-60 bg-gray-300 rounded-3xl mb-4"></div>

              <h3 className="text-lg font-semibold text-gray-900">
                {card.title}
              </h3>
              <p className="text-gray-600 mt-2">
                {card.description}
              </p>
            </div>

            <button
              onClick={() => handleJoinClick(card.path)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-2xl hover:bg-blue-600 transition self-start"
            >
              Join Us
            </button>
          </div>
        ))}
      </div>

      <ClientSignUpModal 
        isOpen={isClientModalOpen}
        onClose={() => setIsClientModalOpen(false)}
      />

      <FirmSignUpModal
        isOpen={isFirmModalOpen}
        onClose={() => setIsFirmModalOpen(false)}
      />

      <TalentSignUpModal
        isOpen={isTalentModalOpen}
        onClose={() => setIsTalentModalOpen(false)}
      />
    </div>
  );
};

export default JoinUs;
