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

  // Helper to update nested state
  const handleInputChange = (section, field, value) => {
    setInvoiceData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  // For description table
  const handleDescriptionChange = (index, field, value) => {
    setInvoiceData(prev => ({
      ...prev,
      description: prev.description.map((desc, i) =>
        i === index ? { ...desc, [field]: value } : desc
      ),
    }));
  };

  // Add a new row to description
  const handleAddDescriptionRow = () => {
    setInvoiceData(prev => ({
      ...prev,
      description: [
        ...prev.description,
        { item: '', description: '', qty: '', rate: '', amount: '' },
      ],
    }));
  };

  // Remove a row from description
  const handleRemoveDescriptionRow = (index) => {
    setInvoiceData(prev => ({
      ...prev,
      description: prev.description.filter((_, i) => i !== index),
    }));
  };

  // For top-level fields
  const handleTopLevelChange = (field, value) => {
    setInvoiceData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleGenerateInvoice = () => {
    setShowInvoice(true);
  };

  return (
    <div className="container mx-auto p-4 bg-white min-h-screen">
      {!showInvoice ? (
        <div>
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Make Invoice</h1>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="bg-blue-100 p-4 rounded-lg mb-4">
                <h2 className="text-xl font-semibold">Brand</h2>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={invoiceData.brand}
                    onChange={e => handleTopLevelChange('brand', e.target.value)}
                    className="text-black text-base font-normal bg-transparent border-none outline-none"
                    placeholder="Brand"
                  />
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h2 className="text-lg font-semibold mb-2">Bill To</h2>
                <input
                  type="text"
                  value={invoiceData.billTo.taxId}
                  onChange={e => handleInputChange('billTo', 'taxId', e.target.value)}
                  className="w-full mt-1 p-2 border border-gray-300 rounded"
                  placeholder="Tax ID"
                />
                <input
                  type="text"
                  value={invoiceData.billTo.companyName}
                  onChange={e => handleInputChange('billTo', 'companyName', e.target.value)}
                  className="w-full mt-1 p-2 border border-gray-300 rounded"
                  placeholder="Company Name"
                />
                <input
                  type="text"
                  value={invoiceData.billTo.address}
                  onChange={e => handleInputChange('billTo', 'address', e.target.value)}
                  className="w-full mt-1 p-2 border border-gray-300 rounded"
                  placeholder="Address"
                />
                <input
                  type="email"
                  value={invoiceData.billTo.email}
                  onChange={e => handleInputChange('billTo', 'email', e.target.value)}
                  className="w-full mt-1 p-2 border border-gray-300 rounded"
                  placeholder="Email"
                />
                <input
                  type="text"
                  value={invoiceData.billTo.phone}
                  onChange={e => handleInputChange('billTo', 'phone', e.target.value)}
                  className="w-full mt-1 p-2 border border-gray-300 rounded"
                  placeholder="Phone"
                />
                <input
                  type="text"
                  value={invoiceData.billTo.taxNumber}
                  onChange={e => handleInputChange('billTo', 'taxNumber', e.target.value)}
                  className="w-full mt-1 p-2 border border-gray-300 rounded"
                  placeholder="Tax Number"
                />
                <div className="mt-2">
                  <img src="/profile-placeholder.jpg" alt="Profile" className="w-16 h-16 rounded-full object-cover" />
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white p-4 rounded-lg mb-4">
                <h2 className="text-lg font-semibold mb-2">Invoice Information</h2>
                <input
                  type="text"
                  value={invoiceData.invoiceInfo.invoiceNumber}
                  onChange={e => handleInputChange('invoiceInfo', 'invoiceNumber', e.target.value)}
                  className="w-full mt-1 p-2 border border-gray-300 rounded"
                  placeholder="Invoice #"
                />
                <input
                  type="text"
                  value={invoiceData.invoiceInfo.issueDate}
                  onChange={e => handleInputChange('invoiceInfo', 'issueDate', e.target.value)}
                  className="w-full mt-1 p-2 border border-gray-300 rounded"
                  placeholder="Issue Date"
                />
                <input
                  type="text"
                  value={invoiceData.invoiceInfo.dueDate}
                  onChange={e => handleInputChange('invoiceInfo', 'dueDate', e.target.value)}
                  className="w-full mt-1 p-2 border border-gray-300 rounded"
                  placeholder="Due Date"
                />
                <input
                  type="text"
                  value={invoiceData.invoiceInfo.poNumber}
                  onChange={e => handleInputChange('invoiceInfo', 'poNumber', e.target.value)}
                  className="w-full mt-1 p-2 border border-gray-300 rounded"
                  placeholder="PO Number"
                />
                <input
                  type="text"
                  value={invoiceData.invoiceInfo.terms}
                  onChange={e => handleInputChange('invoiceInfo', 'terms', e.target.value)}
                  className="w-full mt-1 p-2 border border-gray-300 rounded"
                  placeholder="Terms"
                />
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h2 className="text-lg font-semibold mb-2">Company Information</h2>
                <input
                  type="text"
                  value={invoiceData.companyInfo.web}
                  onChange={e => handleInputChange('companyInfo', 'web', e.target.value)}
                  className="w-full mt-1 p-2 border border-gray-300 rounded"
                  placeholder="Web"
                />
                <input
                  type="email"
                  value={invoiceData.companyInfo.email}
                  onChange={e => handleInputChange('companyInfo', 'email', e.target.value)}
                  className="w-full mt-1 p-2 border border-gray-300 rounded"
                  placeholder="Email"
                />
                <input
                  type="text"
                  value={invoiceData.companyInfo.phone}
                  onChange={e => handleInputChange('companyInfo', 'phone', e.target.value)}
                  className="w-full mt-1 p-2 border border-gray-300 rounded"
                  placeholder="Phone"
                />
                <input
                  type="text"
                  value={invoiceData.companyInfo.address}
                  onChange={e => handleInputChange('companyInfo', 'address', e.target.value)}
                  className="w-full mt-1 p-2 border border-gray-300 rounded"
                  placeholder="Address"
                />
                <input
                  type="text"
                  value={invoiceData.companyInfo.termsConditions}
                  onChange={e => handleInputChange('companyInfo', 'termsConditions', e.target.value)}
                  className="w-full mt-1 p-2 border border-gray-300 rounded"
                  placeholder="Terms & Conditions"
                />
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
                      <th className="p-2"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoiceData.description.map((desc, index) => (
                      <tr className="border-t" key={index}>
                        <td className="p-2">
                          <input
                            type="text"
                            value={desc.item}
                            onChange={e => handleDescriptionChange(index, 'item', e.target.value)}
                            className="w-full p-1 border border-gray-200 rounded"
                            placeholder="Item"
                          />
                        </td>
                        <td className="p-2">
                          <input
                            type="text"
                            value={desc.description}
                            onChange={e => handleDescriptionChange(index, 'description', e.target.value)}
                            className="w-full p-1 border border-gray-200 rounded"
                            placeholder="Description"
                          />
                        </td>
                        <td className="p-2">
                          <input
                            type="text"
                            value={desc.qty}
                            onChange={e => handleDescriptionChange(index, 'qty', e.target.value)}
                            className="w-full p-1 border border-gray-200 rounded"
                            placeholder="Qty"
                          />
                        </td>
                        <td className="p-2">
                          <input
                            type="text"
                            value={desc.rate}
                            onChange={e => handleDescriptionChange(index, 'rate', e.target.value)}
                            className="w-full p-1 border border-gray-200 rounded"
                            placeholder="Rate"
                          />
                        </td>
                        <td className="p-2">
                          <input
                            type="text"
                            value={desc.amount}
                            onChange={e => handleDescriptionChange(index, 'amount', e.target.value)}
                            className="w-full p-1 border border-gray-200 rounded"
                            placeholder="Amount"
                          />
                        </td>
                        <td className="p-2">
                          {invoiceData.description.length > 1 && (
                            <button
                              type="button"
                              onClick={() => handleRemoveDescriptionRow(index)}
                              className="text-red-500 hover:underline"
                              title="Remove row"
                            >
                              &times;
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <button
                  type="button"
                  onClick={handleAddDescriptionRow}
                  className="mt-2 bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300"
                >
                  + Add Row
                </button>
              </div>

              <div className="bg-white p-4 rounded-lg flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                  <h2 className="text-lg font-semibold mb-2">Currency of Invoice</h2>
                  <input
                    type="text"
                    value={invoiceData.currency}
                    onChange={e => handleTopLevelChange('currency', e.target.value)}
                    className="w-full mt-1 p-2 border border-gray-300 rounded"
                    placeholder="Currency"
                  />
                </div>
                <div className="mb-4 md:mb-0">
                  <h2 className="text-lg font-semibold mb-2">Total</h2>
                  <input
                    type="text"
                    value={invoiceData.total}
                    onChange={e => handleTopLevelChange('total', e.target.value)}
                    className="w-full mt-1 p-2 border border-gray-300 rounded text-2xl font-bold"
                    placeholder="Total"
                  />
                </div>
                <button onClick={handleGenerateInvoice} className="bg-blue-500 text-white px-4 py-2 rounded">Generate Invoice</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container mx-auto p-4 bg-white min-h-screen flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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

            <div className="flex flex-col md:flex-row justify-between mt-6">
              <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4 md:mb-0">Share Invoice</button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Save Invoice</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MakeInvoices;