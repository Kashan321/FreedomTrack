import React from 'react';
import { MdOutlineSignalCellularAlt } from "react-icons/md";
import { CiDollar, CiMenuKebab } from 'react-icons/ci';
import { FiShoppingCart } from "react-icons/fi";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Acquisition() {
  const pData = [12000, 19000, 3000, 5000, 2000, 3000];
  const uData = [15000, 23000, 4000, 6000, 2500, 3500];
  const xLabels = ['January', 'February', 'March', 'April', 'May', 'June'];

  const data = xLabels.map((label, index) => ({
    name: label,
    pv: pData[index],
    uv: uData[index],
  }));

  return (
    <div className='border rounded-2xl border-gray-300 p-2 h-96'>
      <div className='justify-between flex '>
        <div className='p-2 flex gap-3'>
          <div className='w-8 h-8 rounded-full bg-gray-400 flex justify-center items-center'>
            <FiShoppingCart />
          </div>
          <div  className='text-sm'>
            <h1>Order Statistics</h1>
            <p className='text-gray-500'>51.04 Total Sales</p>
          </div>
        </div>
      </div>
      <div className='flex justify-between mt-4'>
        <div className='flex gap-2'>
          <div className='mt-4'>
            <MdOutlineSignalCellularAlt size={25} />
          </div>
          <div>
            <h1>13.89%</h1>
            <p>Bounce Rate</p>
          </div>
        </div>
        <div className='flex gap-2'>
          <div className='mt-4'>
            <MdOutlineSignalCellularAlt size={25} />
          </div>
          <div>
            <h1>13.89%</h1>
            <p>Bounce Rate</p>
          </div>
        </div>
      </div>
      <div className='px-4 pt-3.5'>
        <ResponsiveContainer width="80%" height={200}>
          <LineChart
            width={250}
            height={250}
            data={data}
            margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Acquisition;