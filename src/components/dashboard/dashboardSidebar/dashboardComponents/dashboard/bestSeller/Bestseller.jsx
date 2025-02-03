import React from 'react'
import { BsLightningCharge } from "react-icons/bs";
import { CiMenuKebab } from "react-icons/ci";

function Bestseller() {
   return (
      <div className='bg-gray-200 border border-gray-300 rounded-2xl h-96 '>
        <div className='justify-between flex'>
          <div className='p-4 flex gap-3'>
            <div className='h-8 w-8 border rounded-full justify-center items-center flex '>
              <BsLightningCharge />
            </div>
            <div>
              <h1>Best Seller</h1>
            
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
        <div>
            {/* table */}
        </div>
        
      </div>
    );
}

export default Bestseller
