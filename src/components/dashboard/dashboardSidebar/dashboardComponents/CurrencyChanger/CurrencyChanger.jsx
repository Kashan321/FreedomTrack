import React, { useState } from 'react';
import { FaDollarSign, FaEuroSign, FaPoundSign } from 'react-icons/fa';

function CurrencyChanger() {
  const [selectedCurrency, setSelectedCurrency] = useState('USD');

  const currencies = [
    { code: 'USD', name: 'US Dollar', icon: <FaDollarSign /> },
    { code: 'EUR', name: 'Euro', icon: <FaEuroSign /> },
    { code: 'GBP', name: 'British Pound', icon: <FaPoundSign /> },
  ];

  const handleCurrencyChange = (currencyCode) => {
    setSelectedCurrency(currencyCode);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4 text-center">Select Currency</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {currencies.map((currency) => (
          <div
            key={currency.code}
            className={`p-6 border rounded-lg shadow-sm cursor-pointer transition-transform transform hover:scale-105 ${
              selectedCurrency === currency.code ? 'bg-blue-100 border-blue-500' : 'bg-white border-gray-300'
            }`}
            onClick={() => handleCurrencyChange(currency.code)}
          >
            <div className="flex items-center justify-center text-4xl mb-2">
              {currency.icon}
            </div>
            <h3 className="text-lg font-semibold text-center">{currency.name}</h3>
            <p className="text-sm text-center">{currency.code}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <h3 className="text-lg font-semibold">Selected Currency: {selectedCurrency}</h3>
      </div>
    </div>
  );
}

export default CurrencyChanger;