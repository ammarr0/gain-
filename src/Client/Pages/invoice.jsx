import React from 'react';

const App = () => {
  const invoices = [
    { id: 'inv-004', date: 'Apr 11, 2025', service: 'AI Project', talentFirm: 'Lumen', amount: '$6,000', status: 'Paid' },
    { id: 'inv-0034', date: 'Apr 01, 2025', service: 'AI Training', talentFirm: 'Nexi Shark', amount: '$10,000', status: 'Pending' },
    { id: 'inv-0054', date: 'Mar 21, 2025', service: 'AI Product', talentFirm: 'Kio Stars', amount: '$2,000', status: 'Paid' },
    { id: 'inv-0034', date: 'Mar 02, 2025', service: 'Research', talentFirm: 'Arya Stark', amount: '$500', status: 'Paid' },
    { id: 'inv-0054', date: 'Feb 14, 2025', service: 'AI Mosaic Training', talentFirm: 'Pamela Burton', amount: '$1,200', status: 'Paid' },
  ];

  return (
    <div className="container mx-auto p-4 bg-white min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My Invoices</h1>
        <button onClick={() => window.location.href = '/client/make-invoices'} className="bg-blue-500 text-white px-4 py-2 rounded">Make new invoice</button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between text-lg font-semibold mb-4">
          <span>Total Spent</span>
          <span>Invoices Count</span>
          <span>Last Payment Date</span>
        </div>
        <div className="flex justify-between text-2xl font-bold text-gray-800 mb-6">
          <span>$12,400.00</span>
          <span>7</span>
          <span>April 15, 2025</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white">
                <th className="p-2"></th>
                <th className="p-2">Invoice #</th>
                <th className="p-2">Date</th>
                <th className="p-2">Service</th>
                <th className="p-2">Talent/Firm</th>
                <th className="p-2">Amount</th>
                <th className="p-2">Status</th>
                <th className="p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice, index) => (
                <tr key={index} className="border-t bg-white">
                  <td className="p-2"><span className="text-blue-500">📄</span></td>
                  <td className="p-2">{invoice.id}</td>
                  <td className="p-2">{invoice.date}</td>
                  <td className="p-2">{invoice.service}</td>
                  <td className="p-2">{invoice.talentFirm}</td>
                  <td className="p-2">{invoice.amount}</td>
                  <td className="p-2">
                    <span
                      className={`px-2 py-1 rounded ${
                        invoice.status === 'Paid' ? 'bg-green-200 text-green-800' :
                        invoice.status === 'Pending' ? 'bg-red-200 text-red-800' : 'bg-yellow-200 text-yellow-800'
                      }`}
                    >
                      {invoice.status}
                    </span>
                  </td>
                  <td className="p-2"><a href="#" className="text-blue-500 hover:underline">View</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-gray-500">Need help with paying? Contact Support or email billing@x.com</p>
      </div>
    </div>
  );
};

export default App;