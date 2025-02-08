import React from 'react'
import { BsLightningCharge } from "react-icons/bs";
import { CiMenuKebab } from "react-icons/ci";

function Bestseller() {
   return (
      <div className='bg-gray-200 border border-gray-300 rounded-2xl h-96 '>
        <div className='justify-between flex'>
          <div className='p-2 flex gap-3'>
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
            
          </div>
        </div>
        <div className='p-4 overflow-y-auto h-64'>
            <table className='w-full border-collapse overflow-y-scroll h-60'>
                <thead>
                    <tr className='border-b border-dotted'>
                        <th className='text-left pb-2'>Items</th>
                        <th className='text-left pb-2'>Price</th>
                        <th className='text-left pb-2'>Orders</th>
                        <th className='text-left pb-2'>Stock</th>
                        <th className='text-left pb-2'>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='border-b'>
                        <td className='py-2'>
                            <div className='flex items-center'>
                                {/* <img src="image_url" alt="product" className='w-8 h-8 mr-2' /> */}
                                <span>Product Name</span>
                            </div>
                        </td>
                        <td className='py-2'>$100</td>
                        <td className='py-2'>50</td>
                        <td className='py-2'>20</td>
                        <td className='py-2'>$2000</td>
                    </tr>
                    <tr className='border-b'>
                        <td className='py-2'>
                            <div className='flex items-center'>
                                {/* <img src="image_url" alt="product" className='w-8 h-8 mr-2' /> */}
                                <span>Product Name</span>
                            </div>
                        </td>
                        <td className='py-2'>$100</td>
                        <td className='py-2'>50</td>
                        <td className='py-2'>20</td>
                        <td className='py-2'>$2000</td>
                    </tr>
                    <tr className='border-b'>
                        <td className='py-2'>
                            <div className='flex items-center'>
                                {/* <img src="image_url" alt="product" className='w-8 h-8 mr-2' /> */}
                                <span>Product Name</span>
                            </div>
                        </td>
                        <td className='py-2'>$100</td>
                        <td className='py-2'>50</td>
                        <td className='py-2'>20</td>
                        <td className='py-2'>$2000</td>
                    </tr>
                    <tr className='border-b'>
                        <td className='py-2'>
                            <div className='flex items-center'>
                                {/* <img src="image_url" alt="product" className='w-8 h-8 mr-2' /> */}
                                <span>Product Name</span>
                            </div>
                        </td>
                        <td className='py-2'>$100</td>
                        <td className='py-2'>50</td>
                        <td className='py-2'>20</td>
                        <td className='py-2'>$2000</td>
                    </tr>
                    <tr className='border-b'>
                        <td className='py-2'>
                            <div className='flex items-center'>
                                {/* <img src="image_url" alt="product" className='w-8 h-8 mr-2' /> */}
                                <span>Product Name</span>
                            </div>
                        </td>
                        <td className='py-2'>$100</td>
                        <td className='py-2'>50</td>
                        <td className='py-2'>20</td>
                        <td className='py-2'>$2000</td>
                    </tr>
                    <tr className='border-b'>
                        <td className='py-2'>
                            <div className='flex items-center'>
                                {/* <img src="image_url" alt="product" className='w-8 h-8 mr-2' /> */}
                                <span>Product Name</span>
                            </div>
                        </td>
                        <td className='py-2'>$100</td>
                        <td className='py-2'>50</td>
                        <td className='py-2'>20</td>
                        <td className='py-2'>$2000</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
      </div>
    );
}

export default Bestseller