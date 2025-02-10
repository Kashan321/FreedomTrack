import React, { useState } from 'react';

function MetaRoi() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    campaign: '',
    cost: '',
    revenue: '',
    roi: ''
  });
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const roiDetails = [
    { campaign: 'Campaign 1', cost: '$500', revenue: '$1500', roi: '200%' },
    { campaign: 'Campaign 2', cost: '$300', revenue: '$900', roi: '200%' },
    { campaign: 'Campaign 3', cost: '$700', revenue: '$1400', roi: '100%' },
    { campaign: 'Campaign 4', cost: '$400', revenue: '$800', roi: '100%' },
    { campaign: 'Campaign 5', cost: '$600', revenue: '$1800', roi: '200%' },
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

  const filteredDetails = roiDetails.filter(item => {
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
      {/* ROI Details */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">ROI Details by Campaign</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs border border-gray-400 uppercase bg-white">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Campaign
                  <input
                    type="text"
                    name="campaign"
                    value={filters.campaign}
                    onChange={handleFilterChange}
                    className="p-1 ml-2 border border-gray-400 rounded"
                    placeholder='Search...'
                  />
                </th>
                <th scope="col" className="px-6 py-3">
                  Cost
                  <input
                    type="text"
                    name="cost"
                    value={filters.cost}
                    onChange={handleFilterChange}
                    className="p-1 ml-2 border border-gray-400 rounded"
                    placeholder='Search...'
                  />
                </th>
                <th scope="col" className="px-6 py-3">
                  Revenue
                  <input
                    type="text"
                    name="revenue"
                    value={filters.revenue}
                    onChange={handleFilterChange}
                    className="p-1 ml-2 border border-gray-400 rounded"
                    placeholder='Search...'
                  />
                </th>
                <th scope="col" className="px-6 py-3">
                  ROI
                  <input
                    type="text"
                    name="roi"
                    value={filters.roi}
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
                  <td className="px-6 py-4">{item.campaign}</td>
                  <td className="px-6 py-4">{item.cost}</td>
                  <td className="px-6 py-4">{item.revenue}</td>
                  <td className="px-6 py-4">{item.roi}</td>
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

export default MetaRoi;