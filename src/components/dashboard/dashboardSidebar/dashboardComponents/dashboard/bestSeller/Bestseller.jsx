import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BsLightningCharge } from "react-icons/bs";

function Bestseller() {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    items: '',
    price: '',
    orders: '',
    stock: '',
    amount: ''
  });
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const bestsellerDetails = [
    { items: 'Product 1', price: '$100', orders: 50, stock: 20, amount: '$2000' },
    { items: 'Product 2', price: '$150', orders: 30, stock: 15, amount: '$4500' },
    { items: 'Product 3', price: '$200', orders: 20, stock: 10, amount: '$4000' },
    { items: 'Product 4', price: '$250', orders: 25, stock: 5, amount: '$6250' },
    
  ];

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset to first page on search
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters({
      ...filters,
      [name]: value
    });
    setCurrentPage(1); // Reset to first page on filter change
  };

  const filteredDetails = bestsellerDetails.filter(item => {
    return Object.keys(filters).every(key => {
      return String(item[key]).toLowerCase().includes(filters[key].toLowerCase());
    });
  }).filter(item => {
    return Object.values(item).some(val =>
      String(val).toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  // Pagination logic
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredDetails.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(filteredDetails.length / rowsPerPage);

  const handleClick = (event, number) => {
    setCurrentPage(number);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={(event) => handleClick(event, i)}
          className={`px-3 py-1 border ${i === currentPage ? 'bg-gray-300' : 'bg-white'}`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className='bg-gray-200 border border-gray-300 rounded-2xl h-96 p-4'>
      <div className='justify-between flex mb-4'>
        <div className='flex gap-3'>
          <div className='h-8 w-8 border rounded-full justify-center items-center flex '>
            <BsLightningCharge />
          </div>
          <div>
            <h1>{t('Best Seller')}</h1>
          </div>
        </div>
        <div className='flex gap-3'>
          <div className='h-8 w-24 rounded-full justify-center items-center flex bg-gray-200'>
            <select className='border-none'>
              <option>Year</option>
              <option>2021</option>
              <option>Last year</option>
            </select>
          </div>
        </div>
      </div>

      <div className='overflow-x-auto rounded-3xl'>
        <table className=' text-sm text-left '>
          <thead className='text-xs border rounded-2xl border-gray-400 uppercase bg-white'>
            <tr>
              <th className='px-2 py-3'>
                Items
                <input
                  type="text"
                  name="items"
                  value={filters.items}
                  onChange={handleFilterChange}
                  className="p-1 ml-2 border border-gray-400 rounded w-24"
                  placeholder='Search...'
                />
              </th>
              <th className='px-2 py-3'>
                Price
                <input
                  type="text"
                  name="price"
                  value={filters.price}
                  onChange={handleFilterChange}
                  className="p-1 ml-2 border border-gray-400 rounded w-24"
                  placeholder='Search...'
                />
              </th>
              <th className='px-2 py-3'>
                Orders
                <input
                  type="text"
                  name="orders"
                  value={filters.orders}
                  onChange={handleFilterChange}
                  className="p-1 ml-2 border border-gray-400 rounded w-24"
                  placeholder='Search...'
                />
              </th>
              <th className='px-2 py-3'>
                Stock
                <input
                  type="text"
                  name="stock"
                  value={filters.stock}
                  onChange={handleFilterChange}
                  className="p-1 ml-2 border border-gray-400 rounded w-24 "
                  placeholder='Search...'
                />
              </th>
              <th className='px-2 py-3'>
                Amount
                <input
                  type="text"
                  name="amount"
                  value={filters.amount}
                  onChange={handleFilterChange}
                  className="p-1 ml-2 border border-gray-400 rounded w-24"
                  placeholder='Search...'
                />
              </th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((item, index) => (
              <tr key={index} className="bg-white border border-gray-400">
                <td className="px-2 py-4">{item.items}</td>
                <td className="px-2 py-4">{item.price}</td>
                <td className="px-2 py-4">{item.orders}</td>
                <td className="px-2 py-4">{item.stock}</td>
                <td className="px-2 py-4">{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        {renderPageNumbers()}
      </div>
    </div>
  );
}

export default Bestseller;