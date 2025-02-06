import React from 'react'
import Earningreport from './earningReport/Earningreport'
import Balance from './balance/Balance'
import Expenses from './expenses/Expenses'
import OrderStat from './orderStatistics/OrderStat'
import Acquisition from './acquisition/Acquisition'
import Bestseller from './bestSeller/Bestseller'

function Dashboard() {
  return (
    <div>
        <div className='flex flex-col lg:flex-row gap-4'>

        <div className='lg:w-1/2  w-full '>
     <Earningreport/>
    
        </div>
        <div>
          
        </div>
        <div className='lg:w-1/4 w-full'>
        <Balance/>
        </div>
        <div className='lg:w-1/4 w-full'>
            <Expenses/>
        </div>
        </div>
        <div className='flex flex-col lg:flex-row gap-4 mt-4'>
        <div className='lg:w-1/4  w-full '>
            <OrderStat/>
          </div>
          <div className='lg:w-1/4 w-full'>
            <Acquisition/> 
          </div>
          <div className='lg:w-1/2 w-full'>
            <Bestseller/>
          </div>
        </div>
    </div>
  )
}

export default Dashboard
