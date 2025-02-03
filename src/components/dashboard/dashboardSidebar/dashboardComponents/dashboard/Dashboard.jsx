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
        <div className='flex gap-4'>

        <div className='w-1/2 '>
     <Earningreport/>
    
        </div>
        <div className='w-1/4'>
        <Balance/>
        </div>
        <div className='w-1/4'>
            <Expenses/>
        </div>
        </div>
        <div className='flex gap-4 mt-4'>
          <div className='w-1/4'>
            <OrderStat/>
          </div>
          <div className='w-1/4'>
            <Acquisition/> 
          </div>
          <div className='w-1/2'>
            <Bestseller/>
          </div>
        </div>
    </div>
  )
}

export default Dashboard
