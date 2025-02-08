import React from 'react'
import { CiDollar, CiMenuKebab } from 'react-icons/ci'
import { FiShoppingCart } from "react-icons/fi";
import { Gauge } from '@mui/x-charts/Gauge';
import { IoPhonePortraitOutline } from "react-icons/io5";
import { IoShirtOutline } from "react-icons/io5";
import { MdOutlineSportsSoccer } from "react-icons/md";
function OrderStat() {
  return (
    <div className='border rounded-2xl border-gray-300 p-2 h-96'>
      <div className='justify-between flex '>
              <div className='p-2 flex gap-3'>
                <div className='w-8 h-8 rounded-full bg-gray-400 flex justify-center items-center'>
                  <FiShoppingCart  />
                </div>
                <div  className='text-sm'>
                  <h1>Order Statistics</h1>
                  <p className='text-gray-500'>51.04 Total Sales</p>
                </div>
              </div>
              
            </div>
            <div className='flex justify-between mt-4'>
                <div>
                <Gauge width={80} height={80} value={50} />
                </div>
                <div className='mt-4'>
                    <h1>8,258</h1>
                    <p className='text-gray-600'>Total Orders</p>
                </div>
            </div>
            <div className='flex justify-between mt-4  text-sm'>
                <div className='flex gap-4'>
                    <div className='mt-4'>
                    <IoPhonePortraitOutline />
                    </div>
                    <div>
                        <h1>Electronics</h1>
                        <p>Mobile, EarBuds, TV</p>
                    </div>
                </div>
                <div>
                  <h1>82.5K</h1>
                </div>
            </div>
            <div className='flex justify-between mt-4 text-sm'>
                <div className='flex gap-4'>
                    <div className='mt-4'>
                    <IoShirtOutline /> 
                    </div>
                    <div>
                        <h1>Fashion</h1>
                        <p>T-shirt, Jeans, Shoes</p>
                    </div>
                </div>
                <div>
                  <h1>82.5K</h1>
                </div>
            </div>
            <div className='flex justify-between mt-4 text-sm'>
                <div className='flex gap-4'>
                    <div className='mt-4'>
                    <MdOutlineSportsSoccer />
                    </div>
                    <div>
                        <h1>Sports</h1>
                        <p>Football, cricket Kit</p>
                    </div>
                </div>
                <div>
                  <h1>82.5K</h1>
                </div>
            </div>
    </div>
  )
}

export default OrderStat
