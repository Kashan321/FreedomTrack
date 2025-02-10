import React, { useState } from 'react';
import Heatmap from '../../CPC/Heatmap';


function MetaCPC() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    keyword: '',
    cpc: ''
  });
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const cpcDetails = [
    { keyword: 'Digital Marketing', cpc: '$2.50' },
    { keyword: 'SEO Services', cpc: '$1.75' },
    { keyword: 'PPC Management', cpc: '$3.00' },
    { keyword: 'Content Marketing', cpc: '$2.20' },
    { keyword: 'Social Media Marketing', cpc: '$1.80' },
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

  const filteredDetails = cpcDetails.filter(item => {
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
    <div className="p-4">
      {/* CPC Pricing Details */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">CPC Pricing Details</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left bg-white">
            <thead className="text-xs text-gray-700 uppercase border border-gray-400">
              <tr>
                <th className="px-6 py-3">
                  Keyword
                  <input
                    type="text"
                    name="keyword"
                    value={filters.keyword}
                    onChange={handleFilterChange}
                    className="p-1 ml-2 border border-gray-400 rounded"
                    placeholder='Search...'
                  />
                </th>
                <th className="px-6 py-3">
                  CPC
                  <input
                    type="text"
                    name="cpc"
                    value={filters.cpc}
                    onChange={handleFilterChange}
                    className="p-1 ml-2 border border-gray-400 rounded"
                    placeholder='Search...'
                  />
                </th>
              </tr>
            </thead>
            <tbody>
              {currentRows.map((item, index) => (
                <tr key={index} className="border border-gray-400">
                  <td className="px-6 py-4">{item.keyword}</td>
                  <td className="px-6 py-4">{item.cpc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        {renderPageNumbers()}
      </div>

      <div>
        <Heatmap />
      </div>
    </div>
  );
}

export default MetaCPC;