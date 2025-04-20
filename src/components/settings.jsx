import React, { useState } from 'react';

const Settings = () => {
  const [promotionStatus, setPromotionStatus] = useState('On');
  const [profileBoostStatus, setProfileBoostStatus] = useState('Off');
  const accounts = ['LinkedIn', "Github" , "Google" , "Behance" , "StackOverflow"];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <span className="font-semibold">Promotion with GAIN</span>
          <span className="ml-2 text-gray-500">{promotionStatus}</span>
        </div>
        <button
          className="text-blue-500"
          onClick={() => setPromotionStatus(promotionStatus === 'On' ? 'Off' : 'On')}
        >
          Edit
        </button>
      </div>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <span className="font-semibold">Boost your profile</span>
          <span className="ml-2 text-gray-500">{profileBoostStatus}</span>
        </div>
        <button
          className="text-blue-500"
          onClick={() => setProfileBoostStatus(profileBoostStatus === 'On' ? 'Off' : 'On')}
        >
          Edit
        </button>
      </div>
      <div className="flex justify-between items-center mb-6">
        <span className="font-semibold">Video Introduction</span>
        <button className="text-blue-500">+</button>
      </div>
      <div className="flex justify-between items-center mb-6">
        <span className="font-semibold">Team members</span>
        <button className="text-blue-500">Edit</button>
      </div>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <span className="font-semibold">Hours per week</span>
          <span className="ml-2 text-gray-500">As needed - Open to offers</span>
        </div>
        <button className="text-blue-500">Edit</button>
      </div>

      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <span className="font-semibold">Languages</span>
          <span className="ml-2 text-gray-500">English: Native or Bilingual</span>
        </div>
        <button className="text-blue-500">Edit</button>
      </div>

      <div className="mb-6">
        <span className="font-semibold">Linked Accounts</span>
        <div className="mt-2">
          {accounts.map((account, index) => (
            <button
              key={index}
              className="w-full text-left py-2 px-4 mb-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50"
            >
              {account}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-end">
        <button className="text-red-500">Delete</button>
      </div>
    </div>
  );
};

export default Settings;