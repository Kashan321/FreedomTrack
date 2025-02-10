import React from 'react'
import { useTranslation } from 'react-i18next';
import { BsLightningCharge } from "react-icons/bs";
import { CiMenuKebab } from "react-icons/ci";

function Bestseller() {
    const { t } = useTranslation();
   return (
      <div className='bg-gray-200 border border-gray-300 rounded-2xl h-96 '>
        <div className='justify-between flex'>
          <div className='p-2 flex gap-3'>
            <div className='h-8 w-8 border rounded-full justify-center items-center flex '>
              <BsLightningCharge />
            </div>
            <div>
              <h1>{t('Best Seller')}</h1>
            
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
        <div className='p-4 overflow-y-auto h-80'>
            <table className='w-full border-collapse overflow-y-scroll h-72'>
                <thead >
                    <tr className='border border-gray-400 border-dotted bg-white  '>
                        <th className='text-left px-3  py-2 '>Items</th>
                        <th className='text-left px-1 py-2 '>Price</th>
                        <th className='text-left px-1  py-2'>Orders</th>
                        <th className='text-left px-1 py-2'>Stock</th>
                        <th className='text-left px-1 py-2'>Amount</th>
                    </tr>
                </thead>
                <tbody className='bg-white '>
                    <tr className='border border-gray-400'>
                        <td className='py-2 px-1'>
                            <div className='flex items-center'>
                                {/* <img src="image_url" alt="product" className='w-8 h-8 mr-2' /> */}
                                <span>Product Name</span>
                            </div>
                        </td>
                        <td className='py-2  px-1'>$100</td>
                        <td className='py-2 px-1'>50</td>
                        <td className='py-2 px-1'>20</td>
                        <td className='py-2 px-1'>$2000</td>
                    </tr>
                    <tr className='border border-gray-400'>
                        <td className='py-2 px-1'>
                            <div className='flex items-center'>
                                {/* <img src="image_url" alt="product" className='w-8 h-8 mr-2' /> */}
                                <span>Product Name</span>
                            </div>
                        </td>
                        <td className='py-2  px-1'>$100</td>
                        <td className='py-2 px-1'>50</td>
                        <td className='py-2 px-1'>20</td>
                        <td className='py-2 px-1'>$2000</td>
                    </tr>
                    <tr className='border border-gray-400'>
                        <td className='py-2 px-1'>
                            <div className='flex items-center'>
                                {/* <img src="image_url" alt="product" className='w-8 h-8 mr-2' /> */}
                                <span>Product Name</span>
                            </div>
                        </td>
                        <td className='py-2  px-1'>$100</td>
                        <td className='py-2 px-1'>50</td>
                        <td className='py-2 px-1'>20</td>
                        <td className='py-2 px-1'>$2000</td>
                    </tr>
                    <tr className='border border-gray-400'>
                        <td className='py-2 px-1'>
                            <div className='flex items-center'>
                                {/* <img src="image_url" alt="product" className='w-8 h-8 mr-2' /> */}
                                <span>Product Name</span>
                            </div>
                        </td>
                        <td className='py-2  px-1'>$100</td>
                        <td className='py-2 px-1'>50</td>
                        <td className='py-2 px-1'>20</td>
                        <td className='py-2 px-1'>$2000</td>
                    </tr>
                    <tr className='border border-gray-400'>
                        <td className='py-2 px-1'>
                            <div className='flex items-center'>
                                {/* <img src="image_url" alt="product" className='w-8 h-8 mr-2' /> */}
                                <span>Product Name</span>
                            </div>
                        </td>
                        <td className='py-2  px-1'>$100</td>
                        <td className='py-2 px-1'>50</td>
                        <td className='py-2 px-1'>20</td>
                        <td className='py-2 px-1'>$2000</td>
                    </tr>
                    <tr className='border border-gray-400'>
                        <td className='py-2 px-1'>
                            <div className='flex items-center'>
                                {/* <img src="image_url" alt="product" className='w-8 h-8 mr-2' /> */}
                                <span>Product Name</span>
                            </div>
                        </td>
                        <td className='py-2  px-1'>$100</td>
                        <td className='py-2 px-1'>50</td>
                        <td className='py-2 px-1'>20</td>
                        <td className='py-2 px-1'>$2000</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
      </div>
    );
}

export default Bestseller