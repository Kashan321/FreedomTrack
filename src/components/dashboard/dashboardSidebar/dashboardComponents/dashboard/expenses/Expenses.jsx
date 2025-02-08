import React from 'react';
import { CiDollar, CiMenuKebab } from 'react-icons/ci';
import { Gauge } from '@mui/x-charts/Gauge';

function Expenses() {
  return (
    <div className='rounded-2xl border border-gray-300 h-96'>
      <div className='justify-between flex'>
        <div className='p-2 flex gap-3'>
          <div>
            <CiDollar size={30} />
          </div>
          <div>
            <h1>Expenses</h1>
          </div>
        </div>
        <div className='p-4 flex gap-3'>
          
        </div>
      </div>

      <div className=' items-center flex mt-6 justify-center '>
      <Gauge width={250} height={250} value={50} />
      </div>
    </div>
  );
}

export default Expenses;