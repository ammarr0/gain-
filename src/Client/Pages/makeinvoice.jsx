import React, { useState } from 'react';

const MakeInvoices = () => {
  const [invoiceData, setInvoiceData] = useState({
    brand: '',
    billTo: {
      taxId: '',
      companyName: '',
      address: '',
      email: '',
      phone: '',
      taxNumber: '',
    },
    invoiceInfo: {
      invoiceNumber: '',
      issueDate: '',
      dueDate: '',
      poNumber: '',
      terms: '',
    },
    companyInfo: {
      web: '',
      email: '',
      phone: '',
      address: '',
      termsConditions: '',
    },
    description: [
      { item: '', description: '', qty: '', rate: '', amount: '' },
    ],
    currency: '',
    total: '',
  });

  const [showInvoice, setShowInvoice] = useState(false);

  const handleGenerateInvoice = () => {
    setShowInvoice(true);
  };

  return (
    <div className="container mx-auto p-4 bg-white min-h-screen">
      {!showInvoice ? (
        <div>
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Make Invoice</h1>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="bg-blue-100 p-4 rounded-lg mb-4">
                <h2 className="text-xl font-semibold">Brand</h2>
                <div className="flex items-center gap-2">
                  <span className="text-4xl font-bold text-blue-600">{invoiceData.brand}</span>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h2 className="text-lg font-semibold mb-2">Bill To</h2>
                <input type="text" value={invoiceData.billTo.taxId} className="w-full mt-1 p-2 border border-gray-300 rounded" placeholder="Tax ID" />
                <input type="text" value={invoiceData.billTo.companyName} className="w-full mt-1 p-2 border border-gray-300 rounded" placeholder="Company Name" />
                <input type="text" value={invoiceData.billTo.address} className="w-full mt-1 p-2 border border-gray-300 rounded" placeholder="Address" />
                <input type="email" value={invoiceData.billTo.email} className="w-full mt-1 p-2 border border-gray-300 rounded" placeholder="Email" />
                <input type="text" value={invoiceData.billTo.phone} className="w-full mt-1 p-2 border border-gray-300 rounded" placeholder="Phone" />
                <input type="text" value={invoiceData.billTo.taxNumber} className="w-full mt-1 p-2 border border-gray-300 rounded" placeholder="Tax Number" />
                <div className="mt-2">
                  <img src="/profile-placeholder.jpg" alt="Profile" className="w-16 h-16 rounded-full object-cover" />
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white p-4 rounded-lg mb-4">
                <h2 className="text-lg font-semibold mb-2">Invoice Information</h2>
                <input type="text" value={invoiceData.invoiceInfo.invoiceNumber} className="w-full mt-1 p-2 border border-gray-300 rounded" placeholder="Invoice #" />
                <input type="text" value={invoiceData.invoiceInfo.issueDate} className="w-full mt-1 p-2 border border-gray-300 rounded" placeholder="Issue Date" />
                <input type="text" value={invoiceData.invoiceInfo.dueDate} className="w-full mt-1 p-2 border border-gray-300 rounded" placeholder="Due Date" />
                <input type="text" value={invoiceData.invoiceInfo.poNumber} className="w-full mt-1 p-2 border border-gray-300 rounded" placeholder="PO Number" />
                <input type="text" value={invoiceData.invoiceInfo.terms} className="w-full mt-1 p-2 border border-gray-300 rounded" placeholder="Terms" />
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h2 className="text-lg font-semibold mb-2">Company Information</h2>
                <input type="text" value={invoiceData.companyInfo.web} className="w-full mt-1 p-2 border border-gray-300 rounded" placeholder="Web" />
                <input type="email" value={invoiceData.companyInfo.email} className="w-full mt-1 p-2 border border-gray-300 rounded" placeholder="Email" />
                <input type="text" value={invoiceData.companyInfo.phone} className="w-full mt-1 p-2 border border-gray-300 rounded" placeholder="Phone" />
                <input type="text" value={invoiceData.companyInfo.address} className="w-full mt-1 p-2 border border-gray-300 rounded" placeholder="Address" />
                <input type="text" value={invoiceData.companyInfo.termsConditions} className="w-full mt-1 p-2 border border-gray-300 rounded" placeholder="Terms & Conditions" />
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="bg-white p-4 rounded-lg mb-4">
                <h2 className="text-lg font-semibold mb-2">Description</h2>
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="p-2">Item</th>
                      <th className="p-2">Description</th>
                      <th className="p-2">Qty</th>
                      <th className="p-2">Rate</th>
                      <th className="p-2">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoiceData.description.map((desc, index) => (
                      <tr className="border-t" key={index}>
                        <td className="p-2">{desc.item}</td>
                        <td className="p-2">{desc.description}</td>
                        <td className="p-2">{desc.qty}</td>
                        <td className="p-2">{desc.rate}</td>
                        <td className="p-2">{desc.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-white p-4 rounded-lg flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-semibold mb-2">Currency of Invoice</h2>
                  <input type="text" value={invoiceData.currency} className="w-full mt-1 p-2 border border-gray-300 rounded" placeholder="Currency" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold mb-2">Total</h2>
                  <input type="text" value={invoiceData.total} className="w-full mt-1 p-2 border border-gray-300 rounded text-2xl font-bold" placeholder="Total" />
                </div>
                <button onClick={handleGenerateInvoice} className="bg-blue-500 text-white px-4 py-2 rounded">Generate Invoice</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container mx-auto p-4 bg-white min-h-screen flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-2xl font-bold">Invoice by</h1>
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-blue-600">GAIN</span>
                  <span className="text-sm text-gray-500">Invoice #</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold">Total Amount</p>
                <p className="text-2xl font-bold text-blue-600">$19,570.00</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <h2 className="text-lg font-semibold mb-2">Bill To</h2>
                <p>Tax ID: TaxFree</p>
                <p>Company Name: Your Company</p>
                <p>Address: 123 Main St, Suite 100, San Francisco, CA 94105, United States</p>
                <p>Email: email@example.com</p>
                <p>Phone: +1 234 5678901</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2">Invoice Details</h2>
                <p>Invoice #: INV-001</p>
                <p>Issue Date: Jul 12, 2025</p>
                <p>Due Date: Jul 27, 2025</p>
                <p>PO Number: 12345</p>
              </div>
            </div>

            <table className="w-full text-left mb-6">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2">Description</th>
                  <th className="p-2">Qty</th>
                  <th className="p-2">Rate</th>
                  <th className="p-2">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-2">Consulting Services</td>
                  <td className="p-2">10</td>
                  <td className="p-2">$150.00</td>
                  <td className="p-2">$1,500.00</td>
                </tr>
                <tr className="border-t">
                  <td className="p-2">Development Work</td>
                  <td className="p-2">5</td>
                  <td className="p-2">$200.00</td>
                  <td className="p-2">$1,000.00</td>
                </tr>
                <tr className="border-t">
                  <td className="p-2">Design Work</td>
                  <td className="p-2">8</td>
                  <td className="p-2">$175.00</td>
                  <td className="p-2">$1,400.00</td>
                </tr>
                <tr className="border-t">
                  <td className="p-2">Support Services</td>
                  <td className="p-2">3</td>
                  <td className="p-2">$300.00</td>
                  <td className="p-2">$900.00</td>
                </tr>
                <tr className="border-t font-semibold">
                  <td className="p-2" colSpan="3">Total</td>
                  <td className="p-2">$19,570.00</td>
                </tr>
              </tbody>
            </table>

            <div className="flex justify-between mt-6">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Share Invoice</button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Save Invoice</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MakeInvoices;