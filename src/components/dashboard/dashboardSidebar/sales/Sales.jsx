import React, { useState } from 'react';
import { MdOutlineAlarm } from "react-icons/md";
import { FaCheckDouble } from "react-icons/fa6";
import { RiDeleteBin6Line, RiShareForwardLine } from "react-icons/ri";
import { PiSmileySadDuotone } from "react-icons/pi";
import { CiMenuKebab } from "react-icons/ci";
import { useTranslation } from 'react-i18next';

const data = [
  { number: 1, date: '2023-01-01', customer: 'John Doe', payment: '$100', status: 'Pending', method: 'Credit Card' },
  { number: 2, date: '2023-01-02', customer: 'Jane Smith', payment: '$200', status: 'Completed', method: 'PayPal' },
  { number: 3, date: '2023-01-03', customer: 'Mike Johnson', payment: '$150', status: 'Refunded', method: 'Credit Card' },
  { number: 4, date: '2023-01-04', customer: 'Emily Davis', payment: '$50', status: 'Failed', method: 'Credit Card' },
  { number: 5, date: '2023-01-05', customer: 'Chris Lee', payment: '$300', status: 'Pending', method: 'Bank Transfer' },
  { number: 6, date: '2023-01-06', customer: 'Anna Kim', payment: '$400', status: 'Completed', method: 'Credit Card' },
  { number: 7, date: '2023-01-07', customer: 'David Brown', payment: '$250', status: 'Refunded', method: 'PayPal' },
  { number: 8, date: '2023-01-08', customer: 'Sophia Wilson', payment: '$100', status: 'Failed', method: 'Bank Transfer' },
  { number: 9, date: '2023-01-09', customer: 'James Taylor', payment: '$200', status: 'Pending', method: 'Credit Card' },
  { number: 10, date: '2023-01-10', customer: 'Linda Martinez', payment: '$350', status: 'Completed', method: 'PayPal' },
];

function Sales() {
   const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(7);
  const [searchTerm, setSearchTerm] = useState('');

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const filteredData = data.filter(item => 
    item.customer.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const getStatusClass = (status) => {
    switch(status) {
      case 'Completed':
        return 'text-green-700';
      case 'Pending':
        return 'text-orange-600';
      case 'Failed':
        return 'text-red-700';
      case 'Refunded':
        return 'text-indigo-500';
      default:
        return '';
    }
  };

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  return (
    <div className="p-4 flex flex-col gap-4">
      <div className='flex gap-4 justify-between'>
        <div className='h-32 w-72 border rounded-2xl border-gray-300 p-2 flex justify-between'>
          <div className='mt-10'>
            <h1 className='text-4xl font-bold'>65</h1>
            <p>{t('Pending Payment')}</p>
          </div>
          <div className='h-9 w-9 rounded-xl border border-gray-500 flex justify-center items-center'>
            <MdOutlineAlarm />
          </div>
        </div>
        <div className='h-32 w-72 border rounded-2xl border-gray-300 p-2 flex justify-between'>
          <div className='mt-10'>
            <h1 className='text-4xl font-bold'>65</h1>
            <p>{t('Completed')}</p>
          </div>
          <div className='h-9 w-9 rounded-xl border border-gray-500 flex justify-center items-center'>
            <FaCheckDouble />
          </div>
        </div>
        <div className='h-32 w-72 border rounded-2xl border-gray-300 p-2 flex justify-between'>
          <div className='mt-10'>
            <h1 className='text-4xl font-bold'>65</h1>
            <p>{t('Refunds')}</p>
          </div>
          <div className='h-9 w-9 rounded-xl border border-gray-500 flex justify-center items-center'>
            <RiShareForwardLine />
          </div>
        </div>
        <div className='h-32 w-72 border rounded-2xl border-gray-300 p-2 flex justify-between'>
          <div className='mt-10'>
            <h1 className='text-4xl font-bold'>65</h1>
            <p>{t('Failed')}</p>
          </div>
          <div className='h-9 w-9 rounded-xl border border-gray-500 flex justify-center items-center'>
            <PiSmileySadDuotone />
          </div>
        </div>
      </div>
      <div className="mt-8 border rounded-2xl border-gray-300 p-4">
        <div className="flex justify-between mb-4">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 border rounded-full border-gray-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            value={rowsPerPage}
            onChange={handleRowsPerPageChange}
            className="p-2 border rounded-full border-gray-400"
          >
            {[5, 7, 10].map(rows => (
              <option key={rows} value={rows}>{rows} </option>
            ))}
          </select>
        </div>
        <table className="min-w-full bg-white rounded-lg overflow-hidden shadow">
          <thead className="bg-gray-200 border-b border-dotted">
            <tr>
              <th className='py-2 px-4'><input type="checkbox" /></th>
              <th className="py-2 px-4">{t('Number')}</th>
              <th className="py-2 px-4">{t('Date')}</th>
              <th className="py-2 px-4">{t('Customer')}</th>
              <th className="py-2 px-4">{t('payment')}</th>
              <th className="py-2 px-4">{t('Status')}</th>
              <th className="py-2 px-4">{t('Method')}</th>
              <th className="py-2 px-4">{t('Action')}</th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((row, index) => (
              <tr key={index} className="border-b bg-gray-200 text-center">
                <td className="py-2 px-4"><input type="checkbox" /></td>
                <td className="py-2 px-4">{row.number}</td>
                <td className="py-2 px-4">{row.date}</td>
                <td className="py-2 px-4">{row.customer}</td>
                <td className="py-2 px-4">{row.payment}</td>
                <td className={`py-2 px-4 ${getStatusClass(row.status)}`}>{row.status}</td>
                <td className="py-2 px-4">{row.method}</td>
                <td className="py-2 px-2 flex gap-2">
                  <button className="  p-2 rounded"><RiDeleteBin6Line /></button>
                  <button className="bg-gray-500 text-white p-2 rounded-full"><CiMenuKebab /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between mt-4">
          <div>
            Showing {indexOfFirstRow + 1} to {Math.min(indexOfLastRow, filteredData.length)} of {filteredData.length} entries
          </div>
          <div>
            <button
              className={`px-4 py-2 mx-1 ${currentPage === 1 ? 'bg-gray-300' : 'bg-blue-500 text-white'}`}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            {[...Array(totalPages).keys()].map(page => (
              <button
                key={page + 1}
                className={`px-4 py-2 mx-1 ${currentPage === page + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                onClick={() => handlePageChange(page + 1)}
              >
                {page + 1}
              </button>
            ))}
            <button
              className={`px-4 py-2 mx-1 ${currentPage === totalPages ? 'bg-gray-300' : 'bg-blue-500 text-white'}`}
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sales;