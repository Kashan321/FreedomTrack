import React from 'react';
import { CiDollar, CiMenuKebab } from 'react-icons/ci';
import { LuWallet } from "react-icons/lu";
import { PiPaypalLogo } from "react-icons/pi";
import { Line } from 'react-chartjs-2';
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import {
  LinePlot,
  MarkPlot,
  lineElementClasses,
  markElementClasses,
} from '@mui/x-charts/LineChart';   

function Balance() {
  // Sample data for the line chart
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Wallet Balance',
        data: [12000, 19000, 3000, 5000, 2000, 3000],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        fill: true,
        tension: 0.4, // Adds the curve to the line
      },
      {
        label: 'Paypal Balance',
        data: [15000, 23000, 4000, 6000, 2500, 3500],
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: '#82f822f8',
        borderWidth: 1,
        fill: true,
        tension: 0.4, // Adds the curve to the line
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
  const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

  return (
    <div className='rounded-2xl border border-gray-300 h-96 '>
      <div className='justify-between flex'>
        <div className='p-2 flex gap-3'>
          <div>
            <CiDollar size={30} />
          </div>
          <div>
            <h1>Balance</h1>
          </div>
        </div>
        
      </div>

      <div className='p-4 flex gap-4 justify-center bg-gray-300 border-2 border-dotted m-6 rounded-full border-black'>
        <div className='flex gap-2 text-sm'>
          <div>
            <LuWallet size={30} />
          </div>
          <div>
            <h1>39,852</h1>
            <p>Wallet</p>
          </div>
        </div>
        <div className='flex gap-2 text-sm'>
          <div>
            <PiPaypalLogo size={30} />
          </div>
          <div>
            <h1>39,852</h1>
            <p>Paypal</p>
          </div>
        </div>
      </div>
      <div className='px-4'>
      <ChartContainer
      width={300}
      height={250}
      series={[{ type: 'line', data: pData }]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
      sx={{
        [`& .${lineElementClasses.root}`]: {
          stroke: '#8884d8',
          strokeWidth: 2,
        },
        [`& .${markElementClasses.root}`]: {
          stroke: '#8884d8',
          scale: '0.6',
          fill: '#fff',
          strokeWidth: 2,
        },
      }}
      disableAxisListener
    >
      <LinePlot />
      <MarkPlot />
    </ChartContainer>
      </div>
    </div>
  );
}

export default Balance;