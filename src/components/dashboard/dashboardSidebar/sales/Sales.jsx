import React, { useRef, useEffect } from 'react';
import { Chart as ChartJS, registerables } from 'chart.js';
import { MatrixElement, MatrixController } from 'chartjs-chart-matrix';
import { Chart } from 'react-chartjs-2';
import 'chart.js/auto';

// Register necessary Chart.js components
ChartJS.register(...registerables, MatrixElement, MatrixController);

function Sales() {
  const chartRef = useRef(null);

  // Sample sales data for heat map
  const heatMapData = {
    datasets: [{
      label: 'Sales Heat Map',
      data: [
        { x: 0, y: 0, v: 65 },
        { x: 1, y: 0, v: 59 },
        { x: 2, y: 0, v: 80 },
        { x: 3, y: 0, v: 81 },
        { x: 4, y: 0, v: 56 },
        { x: 5, y: 0, v: 55 },
        { x: 6, y: 0, v: 40 },
        { x: 0, y: 1, v: 75 },
        { x: 1, y: 1, v: 69 },
        { x: 2, y: 1, v: 90 },
        { x: 3, y: 1, v: 91 },
        { x: 4, y: 1, v: 66 },
        { x: 5, y: 1, v: 65 },
        { x: 6, y: 1, v: 50 },
      ],
      backgroundColor: (context) => {
        const value = context.dataset.data[context.dataIndex].v;
        const alpha = (value - 40) / 50; // Normalize value for alpha channel
        return `rgba(75, 192, 192, ${alpha})`;
      },
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
      width: (context) => context.chart.chartArea ? context.chart.chartArea.width / 7 - 1 : 0,
      height: (context) => context.chart.chartArea ? context.chart.chartArea.height / 2 - 1 : 0,
    }],
  };

  const heatMapOptions = {
    scales: {
      x: {
        type: 'category',
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        offset: true,
        grid: {
          display: false,
        },
      },
      y: {
        type: 'category',
        labels: ['2024', '2025'],
        offset: true,
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const salesSummary = [
    { month: 'January', sales: 75 },
    { month: 'February', sales: 69 },
    { month: 'March', sales: 90 },
    { month: 'April', sales: 91 },
    { month: 'May', sales: 66 },
    { month: 'June', sales: 65 },
    { month: 'July', sales: 50 },
  ];

  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Sales Analysis</h1>

      {/* Heat Map Chart */}
      <div className="mb-8">
        <Chart ref={chartRef} type="matrix" data={heatMapData} options={heatMapOptions} />
      </div>

      {/* Sales Summary Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200">
            <tr>
              <th scope="col" className="px-6 py-3">Month</th>
              <th scope="col" className="px-6 py-3">Sales</th>
            </tr>
          </thead>
          <tbody>
            {salesSummary.map((item, index) => (
              <tr key={index} className="bg-white border-b">
                <td className="px-6 py-4">{item.month}</td>
                <td className="px-6 py-4">{item.sales}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Sales;