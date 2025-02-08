import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaBars, FaTimes, FaChartLine, FaSignOutAlt } from 'react-icons/fa';
import { IoIosAddCircleOutline, IoIosRemoveCircleOutline } from 'react-icons/io';
import { PiChartDonutLight } from "react-icons/pi";
import { SiGoogleads, SiGooglemarketingplatform } from "react-icons/si";

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
      <div className={`bg-gray-800 text-white rounded-3xl h-15/16 transition-all duration-300 ${sidebarOpen ? 'w-64 p-2 overflow-y-scroll no_scroll' : 'w-16 pl-1'}`}>
        <div className={`flex ${sidebarOpen ? 'justify-end' : 'justify-center'} p-2`}>
          <button className="text-white" onClick={toggleSidebar}>
            {sidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
        <nav className="mt-4 mx-auto">
          <ul>
            <li className="mb-2">
              <div className={`flex items-center justify-center p-2 border-gray-600 rounded hover:bg-[#82f822f8] cursor-pointer ${selectedItem === 0 && sidebarOpen ? 'bg-[#82f822f8]' : ''}`} onClick={() => handleDropdownClick(0, 'Dashboard')}>
                <PiChartDonutLight className={`mr-2 rounded-2xl ${selectedItem === 0 && !sidebarOpen ? 'bg-[#82f822f8] text-black' : ''}`} size={30} />
                {sidebarOpen && <button className="w-full text-left">{t('Dashboard')}</button>}
              </div>
            </li>
            <li className="mb-2">
              <div className={`flex items-center justify-center p-2 border-gray-600 rounded hover:bg-[#82f822f8] cursor-pointer ${selectedItem === 1 && sidebarOpen ? 'bg-[#82f822f8]' : ''}`} onClick={() => handleDropdownClick(1, 'Sales')}>
                <FaChartLine className={`mr-2 rounded-2xl ${selectedItem === 1 && !sidebarOpen ? 'bg-[#82f822f8] text-black' : ''}`} size={30} />
                {sidebarOpen && <button className="w-full text-left">{t('Sales')}</button>}
              </div>
            </li>
            <li className="mb-2">
              <div className={`flex items-center justify-center p-2 border-gray-600 rounded hover:bg-[#82f822f8] cursor-pointer ${selectedItem === 2 && sidebarOpen ? 'bg-[#82f822f8]' : ''}`} onClick={() => handleDropdownAfiliateMarketing(2, 'Traffic')}>
                <SiGooglemarketingplatform className={`mr-2 rounded-2xl ${selectedItem === 2 && !sidebarOpen ? 'bg-[#82f822f8] text-black' : ''}`} size={30} />
                {sidebarOpen && <button className="w-full text-left">{t('AFFILIATE TRACKING')}</button>}
                {sidebarOpen && (openDropdown === 2 ? <IoIosRemoveCircleOutline size={30} className="ml-auto transition-transform" /> : <IoIosAddCircleOutline size={30} className="ml-auto transition-transform" />)}
              </div>
              {sidebarOpen && openDropdown === 2 && (
                <ul className="mt-2">
                  <li className={`flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-[#82f822f8] cursor-pointer ${selectedSubItem === 'ClickBank' ? 'bg-[#82f822f8]' : ''}`} onClick={() => handleSubItemClick('Traffic', 'ClickBank')}>
                    <button className="w-full text-left">ClickBank</button>
                  </li>
                  <li className={`flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-[#82f822f8] cursor-pointer ${selectedSubItem === 'BuyGoods' ? 'bg-[#82f822f8]' : ''}`} onClick={() => handleSubItemClick('Traffic', 'BuyGoods')}>
                    <button className="w-full text-left">BuyGoods</button>
                  </li>
                  <li className={`flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-[#82f822f8] cursor-pointer ${selectedSubItem === 'MaxWeb' ? 'bg-[#82f822f8]' : ''}`} onClick={() => handleSubItemClick('Traffic', 'MaxWeb')}>
                    <button className="w-full text-left">MaxWeb</button>
                  </li>
                  <li className={`flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-[#82f822f8] cursor-pointer ${selectedSubItem === 'Digistore24' ? 'bg-[#82f822f8]' : ''}`} onClick={() => handleSubItemClick('Traffic', 'Digistore24')}>
                    <button className="w-full text-left">Digistore24</button>
                  </li>
                  <li className={`flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-[#82f822f8] cursor-pointer ${selectedSubItem === 'SellHealth.com' ? 'bg-[#82f822f8]' : ''}`} onClick={() => handleSubItemClick('Traffic', 'SellHealth.com')}>
                    <button className="w-full text-left">SellHealth.com</button>
                  </li>
                  <li className={`flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-[#82f822f8] cursor-pointer ${selectedSubItem === 'Dr. Cash' ? 'bg-[#82f822f8]' : ''}`} onClick={() => handleSubItemClick('Traffic', 'Dr. Cash')}>
                    <button className="w-full text-left">Dr. Cash</button>
                  </li>
                  <li className={`flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-[#82f822f8] cursor-pointer ${selectedSubItem === 'Smart ADV' ? 'bg-[#82f822f8]' : ''}`} onClick={() => handleSubItemClick('Traffic', 'Smart ADV')}>
                    <button className="w-full text-left">Smart ADV</button>
                  </li>
                  <li className={`flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-[#82f822f8] cursor-pointer ${selectedSubItem === 'GuruMedia' ? 'bg-[#82f822f8]' : ''}`} onClick={() => handleSubItemClick('Traffic', 'GuruMedia')}>
                    <button className="w-full text-left">GuruMedia</button>
                  </li>
                  <li className={`flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-[#82f822f8] cursor-pointer ${selectedSubItem === 'ClickDealer' ? 'bg-[#82f822f8]' : ''}`} onClick={() => handleSubItemClick('Traffic', 'ClickDealer')}>
                    <button className="w-full text-left">ClickDealer</button>
                  </li>
                  <li className={`flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-[#82f822f8] cursor-pointer ${selectedSubItem === 'Adcombo' ? 'bg-[#82f822f8]' : ''}`} onClick={() => handleSubItemClick('Traffic', 'Adcombo')}>
                    <button className="w-full text-left">Adcombo</button>
                  </li>
                  <li className={`flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-[#82f822f8] cursor-pointer ${selectedSubItem === 'Leadrock' ? 'bg-[#82f822f8]' : ''}`} onClick={() => handleSubItemClick('Traffic', 'Leadrock')}>
                    <button className="w-full text-left">Leadrock</button>
                  </li>
                </ul>
              )}
            </li>
            <li className="mb-2">
              <div className={`flex items-center justify-center p-2 border-gray-600 rounded hover:bg-[#82f822f8] cursor-pointer ${selectedItem === 4 && sidebarOpen ? 'bg-[#82f822f8]' : ''}`} onClick={() => handleDropdownAfiliateMarketing(4, 'CPC')}>
                <SiGoogleads className={`mr-2 rounded-2xl ${selectedItem === 4 && !sidebarOpen ? 'bg-[#82f822f8] text-black' : ''}`} size={30} />
                {sidebarOpen && <button className="w-full text-left">{t('Google Ads')}</button>}
                {sidebarOpen && (openDropdown === 4 ? <IoIosRemoveCircleOutline size={30} className="ml-auto transition-transform" /> : <IoIosAddCircleOutline size={30} className="ml-auto transition-transform" />)}
              </div>
              {sidebarOpen && openDropdown === 4 && (
                <ul className="mt-2">
                  <li className={`flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-[#82f822f8] cursor-pointer ${selectedSubItem === 'CPC' ? 'bg-[#82f822f8]' : ''}`} onClick={() => handleSubItemClick('Google Ads', 'CPC')}>
                    <button className="w-full text-left">CPC</button>
                  </li>
                  <li className={`flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-[#82f822f8] cursor-pointer ${selectedSubItem === 'CTR' ? 'bg-[#82f822f8]' : ''}`} onClick={() => handleSubItemClick('Google Ads', 'CTR')}>
                    <button className="w-full text-left">CTR</button>
                  </li>
                  <li className={`flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-[#82f822f8] cursor-pointer ${selectedSubItem === 'ROI' ? 'bg-[#82f822f8]' : ''}`} onClick={() => handleSubItemClick('Google Ads', 'ROI')}>
                    <button className="w-full text-left">ROI</button>
                  </li>
                </ul>
              )}
            </li>
            <li className="mb-2">
              <div className={`flex items-center justify-center p-2 border-gray-600 rounded hover:bg-[#82f822f8] cursor-pointer ${selectedItem === 8 && sidebarOpen ? 'bg-[#82f822f8]' : ''}`} onClick={() => handleDropdownClick(8, 'Logout')}>
                <FaSignOutAlt className={`mr-2 rounded-2xl ${selectedItem === 8 && !sidebarOpen ? 'bg-[#82f822f8] text-black' : ''}`} size={30} />
                {sidebarOpen && <button className="w-full text-left">{t('Logout')}</button>}
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;