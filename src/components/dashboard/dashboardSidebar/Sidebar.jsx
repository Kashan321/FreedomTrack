import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaBars, FaTimes, FaChartLine, FaSignOutAlt } from 'react-icons/fa';
import { IoIosAddCircleOutline, IoIosRemoveCircleOutline } from 'react-icons/io';
import { PiChartDonutLight } from "react-icons/pi";
import { SiGoogleads, SiGooglemarketingplatform } from "react-icons/si";
import { FaMeta } from "react-icons/fa6";
import { MdOutlineCurrencyExchange } from "react-icons/md";

function Sidebar({ onMenuItemClick }) {
  const { t } = useTranslation();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedSubItem, setSelectedSubItem] = useState(null);

  const handleDropdownClick = (index, mainItem) => {
    setOpenDropdown(openDropdown === index ? null : index);
    setSelectedItem(index); // Set the selected item
    onMenuItemClick(mainItem, '');
  };

  const handleDropdownAfiliateMarketing = (index, mainItem) => {
    setOpenDropdown(openDropdown === index ? null : index);
    setSelectedItem(index); // Set the selected item
  };

  const handleSubItemClick = (mainItem, subItem) => {
    setSelectedSubItem(subItem);
    onMenuItemClick(mainItem, subItem);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex p-6 items-center">
      <div className={`bg-gray-800 text-white rounded-3xl h-15/16 transition-all duration-300 ${sidebarOpen ? 'w-64 p-2 ' : 'w-16 '}`}>
        <div className={`flex ${sidebarOpen ? 'justify-end' : 'justify-center'} p-2 h-6`}>
          <button className="text-white fixed" onClick={toggleSidebar}>
            {sidebarOpen ? <FaTimes size={20} className='cursor-pointer ' /> : <FaBars size={20}  className='cursor-pointer'/>}
          </button>
        </div>
        <nav className="mt-4 mx-auto overflow-y-scroll no_scroll h-96">
          <ul>
            <li className="mb-2">
              <div className={`flex items-center justify-center p-2 border-gray-600 rounded hover:bg-[#82f822f8] cursor-pointer ${selectedItem === 0 && sidebarOpen ? 'bg-[#82f822f8]' : ''}`} onClick={() => handleDropdownClick(0, 'Dashboard')}>
                <PiChartDonutLight className={` rounded-2xl ${selectedItem === 0 && !sidebarOpen ? 'bg-[#82f822f8] text-black' : ''}`} size={30} />
                {sidebarOpen && <button className="w-full text-left cursor-pointer">{t('Dashboard')}</button>}
              </div>
            </li>
            <li className="mb-2">
              <div className={`flex items-center justify-center p-2 border-gray-600 rounded hover:bg-[#82f822f8] cursor-pointer ${selectedItem === 2 && sidebarOpen ? 'bg-[#82f822f8]' : ''}`} onClick={() => handleDropdownAfiliateMarketing(2, 'Traffic')}>
                <SiGooglemarketingplatform className={` rounded-2xl ${selectedItem === 2 && !sidebarOpen ? 'bg-[#82f822f8] text-black' : ''}`} size={30} />
                {sidebarOpen && <button className="w-full text-left cursor-pointer">{t('AFFILIATE TRACKING')}</button>}
                {sidebarOpen && (openDropdown === 2 ? <IoIosRemoveCircleOutline size={30} className="ml-auto transition-transform cursor-pointer" /> : <IoIosAddCircleOutline size={30} className="ml-auto transition-transform cursor-pointer" />)}
              </div>
              {sidebarOpen && openDropdown === 2 && (
                <ul className="mt-2">
                  <li className={`flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-[#82f822f8] cursor-pointer ${selectedSubItem === 'ClickBank' ? 'bg-[#82f822f8]' : ''}`} onClick={() => handleSubItemClick('Traffic', 'ClickBank')}>
                    <button className="w-full text-left cursor-pointer">ClickBank</button>
                  </li>
                  <li className={`flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-[#82f822f8] cursor-pointer ${selectedSubItem === 'BuyGoods' ? 'bg-[#82f822f8]' : ''}`} onClick={() => handleSubItemClick('Traffic', 'BuyGoods')}>
                    <button className="w-full text-left cursor-pointer">BuyGoods</button>
                  </li>
                  <li className={`flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-[#82f822f8] cursor-pointer ${selectedSubItem === 'MaxWeb' ? 'bg-[#82f822f8]' : ''}`} onClick={() => handleSubItemClick('Traffic', 'MaxWeb')}>
                    <button className="w-full text-left cursor-pointer">MaxWeb</button>
                  </li>
                  <li className={`flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-[#82f822f8] cursor-pointer ${selectedSubItem === 'Digistore24' ? 'bg-[#82f822f8]' : ''}`} onClick={() => handleSubItemClick('Traffic', 'Digistore24')}>
                    <button className="w-full text-left cursor-pointer">Digistore24</button>
                  </li>
                  <li className={`flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-[#82f822f8] cursor-pointer ${selectedSubItem === 'SellHealth.com' ? 'bg-[#82f822f8]' : ''}`} onClick={() => handleSubItemClick('Traffic', 'SellHealth.com')}>
                    <button className="w-full text-left cursor-pointer">SellHealth.com</button>
                  </li>
                  <li className={`flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-[#82f822f8] cursor-pointer ${selectedSubItem === 'Dr. Cash' ? 'bg-[#82f822f8]' : ''}`} onClick={() => handleSubItemClick('Traffic', 'Dr. Cash')}>
                    <button className="w-full text-left cursor-pointer">Dr. Cash</button>
                  </li>
                  <li className={`flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-[#82f822f8] cursor-pointer ${selectedSubItem === 'Smart ADV' ? 'bg-[#82f822f8]' : ''}`} onClick={() => handleSubItemClick('Traffic', 'Smart ADV')}>
                    <button className="w-full text-left cursor-pointer">Smart ADV</button>
                  </li>
                  <li className={`flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-[#82f822f8] cursor-pointer ${selectedSubItem === 'GuruMedia' ? 'bg-[#82f822f8]' : ''}`} onClick={() => handleSubItemClick('Traffic', 'GuruMedia')}>
                    <button className="w-full text-left cursor-pointer">GuruMedia</button>
                  </li>
                  <li className={`flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-[#82f822f8] cursor-pointer ${selectedSubItem === 'ClickDealer' ? 'bg-[#82f822f8]' : ''}`} onClick={() => handleSubItemClick('Traffic', 'ClickDealer')}>
                    <button className="w-full text-left cursor-pointer">ClickDealer</button>
                  </li>
                  <li className={`flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-[#82f822f8] cursor-pointer ${selectedSubItem === 'Adcombo' ? 'bg-[#82f822f8]' : ''}`} onClick={() => handleSubItemClick('Traffic', 'Adcombo')}>
                    <button className="w-full text-left cursor-pointer">Adcombo</button>
                  </li>
                  <li className={`flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-[#82f822f8] cursor-pointer ${selectedSubItem === 'Leadrock' ? 'bg-[#82f822f8]' : ''}`} onClick={() => handleSubItemClick('Traffic', 'Leadrock')}>
                    <button className="w-full text-left cursor-pointer">Leadrock</button>
                  </li>
                </ul>
              )}
            </li>
            <li className="mb-2">
              <div className={`flex items-center justify-center p-2 border-gray-600 rounded hover:bg-[#82f822f8] cursor-pointer ${selectedItem === 4 && sidebarOpen ? 'bg-[#82f822f8]' : ''}`} onClick={() => handleDropdownAfiliateMarketing(4, 'CPC')}>
                <SiGoogleads className={` rounded-2xl ${selectedItem === 4 && !sidebarOpen ? 'bg-[#82f822f8] text-black' : ''}`} size={30} />
                {sidebarOpen && <button className="w-full text-left cursor-pointer">{t('Google Ads')}</button>}
                {sidebarOpen && (openDropdown === 4 ? <IoIosRemoveCircleOutline size={30} className="ml-auto transition-transform cursor-pointer" /> : <IoIosAddCircleOutline size={30} className="ml-auto transition-transform cursor-pointer" />)}
              </div>
              {sidebarOpen && openDropdown === 4 && (
                <ul className="mt-2">
                  <li className={`flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-[#82f822f8] cursor-pointer ${selectedSubItem === 'CPC' ? 'bg-[#82f822f8]' : ''}`} onClick={() => handleSubItemClick('Google Ads', 'CPC')}>
                    <button className="w-full text-left cursor-pointer">CPC</button>
                  </li>
                  <li className={`flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-[#82f822f8] cursor-pointer ${selectedSubItem === 'CTR' ? 'bg-[#82f822f8]' : ''}`} onClick={() => handleSubItemClick('Google Ads', 'CTR')}>
                    <button className="w-full text-left cursor-pointer">CTR</button>
                  </li>
                  <li className={`flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-[#82f822f8] cursor-pointer ${selectedSubItem === 'ROI' ? 'bg-[#82f822f8]' : ''}`} onClick={() => handleSubItemClick('Google Ads', 'ROI')}>
                    <button className="w-full text-left cursor-pointer">ROI</button>
                  </li>
                </ul>
              )}
            </li>
            <li className="mb-2">
              <div className={`flex items-center justify-center p-2 border-gray-600 rounded hover:bg-[#82f822f8] cursor-pointer ${selectedItem === 5 && sidebarOpen ? 'bg-[#82f822f8]' : ''}`} onClick={() => handleDropdownAfiliateMarketing(5, 'CPC')}>
              <FaMeta  className={` rounded-2xl ${selectedItem === 5 && !sidebarOpen ? 'bg-[#82f822f8] text-black' : ''}`} size={30} />
                {sidebarOpen && <button className="w-full text-left cursor-pointer">{t('Meta Ads')}</button>}
                {sidebarOpen && (openDropdown === 5 ? <IoIosRemoveCircleOutline size={30} className="ml-auto transition-transform cursor-pointer" /> : <IoIosAddCircleOutline size={30} className="ml-auto transition-transform cursor-pointer" />)}
              </div>
              {sidebarOpen && openDropdown === 5 && (
                <ul className="mt-2">
                  <li className={`flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-[#82f822f8] cursor-pointer ${selectedSubItem === 'CPC' ? 'bg-[#82f822f8]' : ''}`} onClick={() => handleSubItemClick('Meta Ads', 'CPC')}>
                    <button className="w-full text-left cursor-pointer">CPC</button>
                  </li>
                  <li className={`flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-[#82f822f8] cursor-pointer ${selectedSubItem === 'CTR' ? 'bg-[#82f822f8]' : ''}`} onClick={() => handleSubItemClick('Meta Ads', 'CTR')}>
                    <button className="w-full text-left cursor-pointer">CTR</button>
                  </li>
                  <li className={`flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-[#82f822f8] cursor-pointer ${selectedSubItem === 'ROI' ? 'bg-[#82f822f8]' : ''}`} onClick={() => handleSubItemClick('Meta Ads', 'ROI')}>
                    <button className="w-full text-left cursor-pointer">ROI</button>
                  </li>
                </ul>
              )}
            </li>
            <li className="mb-2">
              <div className={`flex items-center justify-center p-2 border-gray-600 rounded hover:bg-[#82f822f8] cursor-pointer ${selectedItem === 6 && sidebarOpen ? 'bg-[#82f822f8]' : ''}`} onClick={() => handleDropdownClick(6, 'Currency Changer')}>
              <MdOutlineCurrencyExchange className={` rounded-2xl ${selectedItem === 6 && !sidebarOpen ? 'bg-[#82f822f8] text-black' : ''}`} size={30} />
                {sidebarOpen && <button className="w-full text-left cursor-pointer">{t('Currency Changer')}</button>}
              </div>
            </li>
            <li className="mb-2">
              <div className={`flex items-center justify-center p-2 border-gray-600 rounded hover:bg-[#82f822f8] cursor-pointer ${selectedItem === 8 && sidebarOpen ? 'bg-[#82f822f8]' : ''}`} onClick={() => handleDropdownClick(8, 'Logout')}>
                <FaSignOutAlt className={` rounded-2xl ${selectedItem === 8 && !sidebarOpen ? 'bg-[#82f822f8] text-black' : ''}`} size={30} />
                {sidebarOpen && <button className="w-full text-left cursor-pointer">{t('Logout')}</button>}
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;