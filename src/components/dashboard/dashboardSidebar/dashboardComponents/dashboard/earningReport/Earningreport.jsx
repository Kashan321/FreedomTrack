import React from 'react';
import { GrLineChart } from "react-icons/gr";
import { CiMenuKebab } from "react-icons/ci";
import { Bar } from 'react-chartjs-2';

function Earningreport() {
  // Sample data for the bar chart
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Earnings',
        data: [12000, 19000, 3000, 5000, 2000, 3000],
        backgroundColor: '#82f822f8',
        borderColor: '#82f822f8',
        borderWidth: 1,
        borderRadius: 60,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className='bg-white rounded-2xl h-96 '>
      <div className='justify-between flex'>
        <div className='p-4 flex gap-3'>
          <div className='h-8 w-8 border rounded-full justify-center items-center flex '>
            <GrLineChart />
          </div>
          <div>
            <h1>Earning Reports</h1>
            <p className='text-gray-300'>Yearly earning overview</p>
          </div>
        </div>
        <div className='p-4 flex gap-3'>
          <div className='h-8 w-24 rounded-full justify-center items-center flex bg-gray-200'>
            <select className='border-none'>
              <option>Year</option>
              <option>2021</option>
              <option>Last year</option>
            </select>
          </div>
          <div className='h-8 w-8 rounded-full justify-center items-center flex bg-gray-200'>
            <CiMenuKebab />
          </div>
        </div>
      </div>
      <div className='p-4 '>
        <Bar data={data} options={options}/>
      </div>
    </div>
  );
}

export default Earningreport;