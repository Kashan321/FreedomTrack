import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

function Traffic() {
  // Sample traffic data
  const trafficData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Traffic 2024',
        data: [1200, 1900, 3000, 5000, 2300, 3200, 4100],
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
      {
        label: 'Traffic 2025',
        data: [1500, 2500, 2800, 4500, 2200, 3400, 3800],
        fill: false,
        backgroundColor: 'rgba(153,102,255,0.2)',
        borderColor: 'rgba(153,102,255,1)',
      },
    ],
  };

  const trafficSummary = [
    { month: 'January', views: 1500 },
    { month: 'February', views: 2500 },
    { month: 'March', views: 2800 },
    { month: 'April', views: 4500 },
    { month: 'May', views: 2200 },
    { month: 'June', views: 3400 },
    { month: 'July', views: 3800 },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Traffic Analysis</h1>

      {/* Line Chart */}
      <div className="mb-8">
        <Line data={trafficData} />
      </div>

      {/* Traffic Summary Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200">
            <tr>
              <th scope="col" className="px-6 py-3">Month</th>
              <th scope="col" className="px-6 py-3">Views</th>
            </tr>
          </thead>
          <tbody>
            {trafficSummary.map((item, index) => (
              <tr key={index} className="bg-white border-b">
                <td className="px-6 py-4">{item.month}</td>
                <td className="px-6 py-4">{item.views}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Traffic;