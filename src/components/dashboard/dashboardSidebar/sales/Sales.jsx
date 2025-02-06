import React from 'react';
import { MdOutlineAlarm } from "react-icons/md";
import { FaCheckDouble } from "react-icons/fa6";
import { RiShareForwardLine } from "react-icons/ri";
import { PiSmileySadDuotone } from "react-icons/pi";




function Sales() {
 

 

 

  return (
    <div className="p-4 flex flex-col gap-4">
      <div className='flex gap-4 justify-between'>
     <div className='h-32  w-72 border rounded-2xl  border-gray-300 p-2 flex justify-between'>
      <div className='mt-10'>
        <h1>65</h1>
        <p>pending payment</p>
      </div>
      <div className='h-9 w-9 rounded-xl border border-gray-500 flex justify-center items-center'>
      <MdOutlineAlarm />
      </div>
     </div>
     <div className='h-32 w-72 border rounded-2xl  border-gray-300 p-2 flex justify-between'>
      <div className='mt-10'>
        <h1>65</h1>
        <p>Completd</p>
      </div>
      <div className='h-9 w-9 rounded-xl border border-gray-500 flex justify-center items-center'>
      <FaCheckDouble />
      </div>
     </div>
     <div className='h-32 w-72 border rounded-2xl  border-gray-300 p-2 flex justify-between'>
      <div className='mt-10'>
        <h1>65</h1>
        <p>Refunds</p>
      </div>
      <div className='h-9 w-9 rounded-xl border border-gray-500 flex justify-center items-center'>
      <RiShareForwardLine />
      </div>
     </div>
     <div className='h-32 w-72 border rounded-2xl  border-gray-300 p-2 flex justify-between'>
      <div className='mt-10'>
        <h1>65</h1>
        <p>Failed</p>
      </div>
      <div className='h-9 w-9 rounded-xl border border-gray-500 flex justify-center items-center'>
      <PiSmileySadDuotone />
      </div>
     </div>
      </div>

      
     
    </div>
  );
}

export default Sales;