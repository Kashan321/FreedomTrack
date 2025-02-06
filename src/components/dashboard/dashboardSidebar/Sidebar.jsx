import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaChevronDown, FaBars, FaTimes, FaChartLine, FaTrafficLight, FaUndo, FaDollarSign, FaChartPie, FaPercentage, FaEllipsisH, FaSignOutAlt } from 'react-icons/fa';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { PiChartDonutLight } from "react-icons/pi";
import { SiGoogleads, SiGooglemarketingplatform } from "react-icons/si";

function Sidebar({ onMenuItemClick }) {
  const { t } = useTranslation();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleDropdownClick = (index, mainItem) => {
    setOpenDropdown(openDropdown === index ? null : index);
    setSelectedItem(index); // Set the selected item
    onMenuItemClick(mainItem, '');
  };

  const handleDropdownAfiliateMarketing = (index, mainItem) => {
    setOpenDropdown(openDropdown === index ? null : index);
    setSelectedItem(index); // Set the selected item
  };

  return (
    <div className="flex p-6 items-center">
      <div
        className={`bg-gray-800 text-white rounded-3xl  h-15/16 transition-all duration-300 ${hovered ? 'w-64 p-2 overflow-y-scroll no_scroll' : 'w-16 pl-1'}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <nav className="mt-4 mx-auto">
          <ul>
            <li className="mb-2">
              <div
                className={`flex items-center p-2 border-gray-600 rounded hover:bg-gray-700 cursor-pointer ${selectedItem === 0 && hovered ? 'bg-[#82f822f8]' : ''}`}
                onClick={() => handleDropdownClick(0, 'Dashboard')}
              >
                <PiChartDonutLight className={`mr-2 rounded-2xl ${selectedItem === 0 && !hovered ? 'bg-[#82f822f8] text-black' : ''}`} size={30} />
                {hovered && <button className="w-full text-left">{t('Dashboard')}</button>}
                {hovered && <IoIosAddCircleOutline size={30} />}
              </div>
            </li>
            <li className="mb-2">
              <div
                className={`flex items-center p-2 border-gray-600 rounded hover:bg-gray-700 cursor-pointer ${selectedItem === 1 && hovered ? 'bg-[#82f822f8]' : ''}`}
                onClick={() => handleDropdownClick(1, 'Sales')}
              >
                <FaChartLine className={`mr-2 rounded-2xl ${selectedItem === 1 && !hovered ? 'bg-[#82f822f8] text-black' : ' '}`} size={30} />
                {hovered && <button className="w-full text-left">{t('Sales')}</button>}
                {hovered && <IoIosAddCircleOutline size={30} />}
              </div>
            </li>
            <li className="mb-2">
              <div
                className={`flex items-center p-2 border-gray-600 rounded hover:bg-gray-700 cursor-pointer ${selectedItem === 2 && hovered ? 'bg-[#82f822f8]' : ''}`}
                onClick={() => handleDropdownAfiliateMarketing(2, 'Traffic')}
              >
              <SiGooglemarketingplatform  className={`mr-2 rounded-2xl ${selectedItem === 2 && !hovered ? 'bg-[#82f822f8] text-black' : ' '}`} size={30} />
                {hovered && <button className="w-full text-left">{t('AFFILIATE TRACKING')}</button>}
                {hovered && <FaChevronDown className={`ml-auto transition-transform ${openDropdown === 2 ? 'transform rotate-180' : ''}`} />}
              </div>
              {hovered && openDropdown === 2 && (
                <ul className="mt-2">
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer" onClick={() => onMenuItemClick('Traffic', 'ClickBank')}>
                    <button className="w-full text-left">ClickBank</button>
                  </li>
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer" onClick={() => onMenuItemClick('Traffic', 'BuyGoods')}>
                    <button className="w-full text-left">BuyGoods</button>
                  </li>
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer" onClick={() => onMenuItemClick('Traffic', 'MaxWeb')}>
                    <button className="w-full text-left">MaxWeb</button>
                  </li>
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer" onClick={() => onMenuItemClick('Traffic', 'Digistore24')}>
                    <button className="w-full text-left">Digistore24</button>
                  </li>
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer" onClick={() => onMenuItemClick('Traffic', 'SellHealth.com')}>
                    <button className="w-full text-left">SellHealth.com</button>
                  </li>
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer" onClick={() => onMenuItemClick('Traffic', 'Dr. Cash')}>
                    <button className="w-full text-left">Dr. Cash</button>
                  </li>
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer" onClick={() => onMenuItemClick('Traffic', 'Smart ADV')}>
                    <button className="w-full text-left">Smart ADV</button>
                  </li>
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer" onClick={() => onMenuItemClick('Traffic', 'GuruMedia')}>
                    <button className="w-full text-left">GuruMedia</button>
                  </li>
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer" onClick={() => onMenuItemClick('Traffic', 'ClickDealer')}>
                    <button className="w-full text-left">ClickDealer</button>
                  </li>
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer" onClick={() => onMenuItemClick('Traffic', 'Adcombo')}>
                    <button className="w-full text-left">Adcombo</button>
                  </li>
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer" onClick={() => onMenuItemClick('Traffic', 'Leadrock')}>
                    <button className="w-full text-left">Leadrock</button>
                  </li>
                </ul>
              )}
            </li>
            <li className="mb-2">
              <div
                className={`flex items-center p-2 border-gray-600 rounded hover:bg-gray-700 cursor-pointer ${selectedItem === 3 && hovered ? 'bg-[#82f822f8]' : ''}`}
                onClick={() => handleDropdownClick(3, 'Refunds')}
              >
                <FaUndo className={`mr-2 rounded-2xl ${selectedItem === 3 && !hovered ? 'bg-[#82f822f8] text-black' : ' '}`} size={30} />
                {hovered && <button className="w-full text-left">{t('Refunds')}</button>}
                {hovered && <IoIosAddCircleOutline size={30} />}
              </div>
            </li>
            <li className="mb-2">
              <div
                className={`flex items-center p-2 border-gray-600 rounded hover:bg-gray-700 cursor-pointer ${selectedItem === 4 && hovered ? 'bg-[#82f822f8]' : ''}`}
                onClick={() => handleDropdownAfiliateMarketing(4, 'CPC')}
              >
                <SiGoogleads  className={`mr-2 rounded-2xl ${selectedItem === 4 && !hovered ? 'bg-[#82f822f8] text-black' : ' '}`} size={30} />
                {hovered && <button className="w-full text-left">{t('Google Ads')}</button>}
                {hovered && <FaChevronDown className={`ml-auto transition-transform ${openDropdown === 4 ? 'transform rotate-180' : ''}`} />}
              </div>
              {hovered && openDropdown === 4 && (
                <ul className="mt-2">
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer" onClick={() => onMenuItemClick('CPC', 'CPC')}>
                    <button className="w-full text-left">CPC</button>
                  </li>
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer" onClick={() => onMenuItemClick('CPC', 'CTR')}>
                    <button className="w-full text-left">CTR</button>
                  </li>
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer" onClick={() => onMenuItemClick('CPC', 'ROI')}>
                    <button className="w-full text-left">ROI</button>
                  </li>
                  
                </ul>
              )}
            </li>
            
           
            <li className="mb-2">
              <div
                className={`flex items-center p-2 border-gray-600 rounded hover:bg-gray-700 cursor-pointer ${selectedItem === 7 && hovered ? 'bg-[#82f822f8]' : ''}`}
                onClick={() => handleDropdownClick(7, 'Others')}
              >
                <FaEllipsisH className={`mr-2 rounded-2xl ${selectedItem === 7 && !hovered ? 'bg-[#82f822f8] text-black' : ' '}`} size={30} />
                {hovered && <button className="w-full text-left">{t('Others')}</button>}
                {hovered && <IoIosAddCircleOutline size={30} />}
              </div>
            </li>
            <li className="mb-2">
              <div
                className={`flex items-center p-2 border-gray-600 rounded hover:bg-gray-700 cursor-pointer ${selectedItem === 8 && hovered ? 'bg-[#82f822f8]' : ''}`}
                onClick={() => handleDropdownClick(8, 'Logout')}
              >
                <FaSignOutAlt className={`mr-2 rounded-2xl ${selectedItem === 8 && !hovered ? 'bg-[#82f822f8] text-black' : ' '}`} size={30} />
                {hovered && <button className="w-full text-left">{t('Logout')}</button>}
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;