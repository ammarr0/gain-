import React from 'react';

const invoices = [
  { id: 'inv-004', date: 'Apr 11, 2025', service: 'AI Project', talentFirm: 'Lumen', amount: 6000, status: 'Paid' },
  { id: 'inv-0035', date: 'Apr 01, 2025', service: 'AI Training', talentFirm: 'Nexi Shark', amount: 10000, status: 'Pending' },
  { id: 'inv-0056', date: 'Mar 21, 2025', service: 'AI Product', talentFirm: 'Kio Stars', amount: 2000, status: 'Paid' },
  { id: 'inv-0037', date: 'Mar 02, 2025', service: 'Research', talentFirm: 'Arya Stark', amount: 500, status: 'Paid' },
  { id: 'inv-0058', date: 'Feb 14, 2025', service: 'AI Mosaic Training', talentFirm: 'Pamela Burton', amount: 1200, status: 'Paid' },
];

function formatCurrency(amount) {
  return amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

function getTotalSpent(invoices) {
  return invoices.reduce((sum, inv) => sum + inv.amount, 0);
}

function getLastPaymentDate(invoices) {
  // Only consider 'Paid' invoices
  const paidInvoices = invoices.filter(inv => inv.status === 'Paid');
  if (paidInvoices.length === 0) return 'N/A';
  // Parse dates and get the latest
  const latest = paidInvoices.reduce((latest, inv) => {
    const invDate = new Date(inv.date);
    return invDate > latest ? invDate : latest;
  }, new Date('1900-01-01'));
  return latest.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

const App = () => {
  return (
    <div className="container mx-auto p-4 bg-white min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h1 className="text-2xl font-bold mb-4 md:mb-0">My Invoices</h1>
        <button
          onClick={() => window.location.href = '/talent/make-invoices'}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Make new invoice
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row justify-between text-lg font-semibold mb-4">
          <span>Total Spent</span>
          <span>Invoices Count</span>
          <span>Last Payment Date</span>
        </div>
        <div className="flex flex-col md:flex-row justify-between text-2xl font-bold text-gray-800 mb-6">
          <span>{formatCurrency(getTotalSpent(invoices))}</span>
          <span>{invoices.length}</span>
          <span>{getLastPaymentDate(invoices)}</span>
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
              {invoices.map((invoice) => (
                <tr key={invoice.id} className="border-t bg-white">
                  <td className="p-2"><span className="text-blue-500" role="img" aria-label="Invoice">📄</span></td>
                  <td className="p-2">{invoice.id}</td>
                  <td className="p-2">{invoice.date}</td>
                  <td className="p-2">{invoice.service}</td>
                  <td className="p-2">{invoice.talentFirm}</td>
                  <td className="p-2">{formatCurrency(invoice.amount)}</td>
                  <td className="p-2">
                    <span
                      className={`px-2 py-1 rounded ${
                        invoice.status === 'Paid'
                          ? 'bg-green-200 text-green-800'
                          : invoice.status === 'Pending'
                          ? 'bg-yellow-200 text-yellow-800'
                          : 'bg-red-200 text-red-800'
                      }`}
                    >
                      {invoice.status}
                    </span>
                  </td>
                  <td className="p-2">
                    <a href="#" className="text-blue-500 hover:underline">View</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-gray-500">
          Need help with paying? Contact Support or email <a href="mailto:billing@x.com" className="underline">billing@x.com</a>
        </p>
      </div>
    </div>
  );
};

export default App;