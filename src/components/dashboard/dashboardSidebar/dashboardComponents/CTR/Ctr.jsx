import React, { useState } from 'react';

function Ctr() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    adGroup: '',
    clicks: '',
    impressions: '',
    ctr: ''
  });
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const ctrDetails = [
    { adGroup: 'Ad Group 1', clicks: 150, impressions: 3000, ctr: '5%' },
    { adGroup: 'Ad Group 2', clicks: 200, impressions: 4000, ctr: '5%' },
    { adGroup: 'Ad Group 3', clicks: 100, impressions: 2500, ctr: '4%' },
    { adGroup: 'Ad Group 4', clicks: 250, impressions: 5000, ctr: '5%' },
    { adGroup: 'Ad Group 5', clicks: 180, impressions: 3600, ctr: '5%' },
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

  const filteredDetails = ctrDetails.filter(item => {
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
      {/* Search Bar */}
      

      {/* CTR Details */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">CTR Details by Ad Group</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs border border-gray-400 uppercase bg-white">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Ad Group
                  <input
                    type="text"
                    name="adGroup"
                    value={filters.adGroup}
                    onChange={handleFilterChange}
                    className="p-1 ml-2 border border-gray-400 rounded"
                    placeholder='Search...'
                  />
                </th>
                <th scope="col" className="px-6 py-3">
                  Clicks
                  <input
                    type="text"
                    name="clicks"
                    value={filters.clicks}
                    onChange={handleFilterChange}
                    className="p-1 ml-2 border border-gray-400 rounded"
                     placeholder='Search...'
                  />
                </th>
                <th scope="col" className="px-6 py-3">
                  Impressions
                  <input
                    type="text"
                    name="impressions"
                    value={filters.impressions}
                    onChange={handleFilterChange}
                    className="p-1 ml-2 border border-gray-400 rounded"
                     placeholder='Search...'
                  />
                </th>
                <th scope="col" className="px-6 py-3">
                  CTR
                  <input
                    type="text"
                    name="ctr"
                    value={filters.ctr}
                    onChange={handleFilterChange}
                    className="p-1 ml-2 border border-gray-400 rounded"
                     placeholder='Search...'
                  />
                </th>
              </tr>
            </thead>
            <tbody>
              {currentRows.map((item, index) => (
                <tr key={index} className="bg-white border border-gray-400">
                  <td className="px-6 py-4">{item.adGroup}</td>
                  <td className="px-6 py-4">{item.clicks}</td>
                  <td className="px-6 py-4">{item.impressions}</td>
                  <td className="px-6 py-4">{item.ctr}</td>
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
        {/* heat map */}
      </div>
    </div>
  );
}

export default Ctr;