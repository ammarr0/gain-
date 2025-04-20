import React from 'react';

const LinkedAccounts = () => {
  const accounts = ['LinkedIn', 'Behance', 'Dribbble'];

  return (
    <div className="max-w-sm p-6">
      <h2 className="text-xl font-semibold mb-4">Linked Accounts</h2>
      <div>
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
  );
};

export default LinkedAccounts;