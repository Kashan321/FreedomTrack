import React, { useState } from 'react';
import Form from '../Form/Form';
import { IoIosAddCircleOutline, IoIosRemoveCircleOutline } from 'react-icons/io';
import Sale from '../sale/Sale';
import Refund from '../refund/Refund';
import { useTranslation } from 'react-i18next';

function ClickBank() {
  const { t } = useTranslation();
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (accordion) => {
    setOpenAccordion(openAccordion === accordion ? null : accordion);
  };

  return (
    <div className="p-6 bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center">ClickBank</h1>
        <p className="text-gray-700 mb-4">
        {t('bankstate')}
        </p>
        <div className="flex space-x-4 mb-6">
          <div className="flex-1 transition-transform transform hover:scale-105 shadow-lg hover:shadow-2xl rounded-lg p-4 border border-gray-300 cursor-pointer" onClick={() => toggleAccordion('apiKey')}>
            <div className="flex items-center justify-between">
              <button className="w-full text-left">Click to enter API key</button>
              {openAccordion === 'apiKey' ? <IoIosRemoveCircleOutline size={20} /> : <IoIosAddCircleOutline size={20} />}
            </div>
          </div>
          <div className="flex-1 transition-transform transform hover:scale-105 shadow-lg hover:shadow-2xl rounded-lg p-4 border border-gray-300 cursor-pointer" onClick={() => toggleAccordion('sale')}>
            <div className="flex items-center justify-between">
              <button className="w-full text-left">Sale</button>
              {openAccordion === 'sale' ? <IoIosRemoveCircleOutline size={20} /> : <IoIosAddCircleOutline size={20} />}
            </div>
          </div>
          <div className="flex-1 transition-transform transform hover:scale-105 shadow-lg hover:shadow-2xl rounded-lg p-4 border border-gray-300 cursor-pointer" onClick={() => toggleAccordion('refund')}>
            <div className="flex items-center justify-between">
              <button className="w-full text-left">Refunds</button>
              {openAccordion === 'refund' ? <IoIosRemoveCircleOutline size={20} /> : <IoIosAddCircleOutline size={20} />}
            </div>
          </div>
        </div>
        <div className={`transition-all duration-1200 ease-in-out overflow-hidden ${openAccordion === 'apiKey' ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
          {openAccordion === 'apiKey' && <Form />}
        </div>
        <div className={`transition-all duration-1200 ease-in-out overflow-hidden ${openAccordion === 'sale' ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
          {openAccordion === 'sale' && <Sale />}
        </div>
        <div className={`transition-all duration-1200 ease-in-out overflow-hidden ${openAccordion === 'refund' ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
          {openAccordion === 'refund' && <Refund />}
        </div>
      </div>
    </div>
  );
}

export default ClickBank;