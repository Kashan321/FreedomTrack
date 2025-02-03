import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaChevronDown, FaBars, FaTimes, FaChartLine, FaTrafficLight, FaUndo, FaDollarSign, FaChartPie, FaPercentage, FaEllipsisH, FaSignOutAlt } from 'react-icons/fa';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { PiChartDonutLight } from "react-icons/pi";


function Sidebar({ onMenuItemClick }) {
  const { t } = useTranslation();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();

  const handleDropdownClick = (index, mainItem) => {
    setOpenDropdown(openDropdown === index ? null : index);
    setSelectedItem(index); // Set the selected item
    onMenuItemClick(mainItem, '');
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex p-6 items-center">
      <div
        className={`bg-gray-800 text-white rounded-3xl  transition-all duration-300 ${hovered ? 'w-64 p-2' : 'w-16 pl-1'}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <nav className="mt-4 mx-auto">
          <ul>
          <li className="mb-2">
              <div
                className={`flex items-center p-2  border-gray-600 rounded hover:bg-gray-700 cursor-pointer ${selectedItem === 0 && hovered ? 'bg-[#82f822f8]' : ''}`}
                onClick={() => handleDropdownClick(0, 'Dashboard')}
              >
                <PiChartDonutLight className={`mr-2   rounded-2xl ${selectedItem === 0 && !hovered ? 'bg-[#82f822f8] text-black' : ''}`} size={30}  />
                {hovered && <button className="w-full text-left">{t('Dashboard')}</button>}
                {hovered && <IoIosAddCircleOutline size={30} />}
              </div>
            </li>
            <li className="mb-2">
              <div
                className={`flex items-center p-2  border-gray-600 rounded hover:bg-gray-700 cursor-pointer  ${selectedItem === 1 && hovered ? 'bg-[#82f822f8]' : ''}`}
                onClick={() => handleDropdownClick(1, 'Sales')}
              >
                <FaChartLine className={`mr-2  rounded-2xl    ${selectedItem === 1 && !hovered ? 'bg-[#82f822f8] text-black' : ' '}`} size={30} />
                {hovered && <button className="w-full text-left">{t('Sales')}</button>}
                {hovered && <IoIosAddCircleOutline size={30} />}
              </div>
            </li>
            <li className="mb-2">
              <div
                className={`flex items-center p-2  border-gray-600 rounded hover:bg-gray-700 cursor-pointer${selectedItem === 2 && hovered ? 'bg-[#82f822f8]' : ''}`}
                onClick={() => handleDropdownClick(2, 'Traffic')}
              >
                <FaTrafficLight className={`mr-2  rounded-2xl  ${selectedItem === 2 && !hovered ? 'bg-[#82f822f8] text-black' : ' '}`} size={30}  />
                {hovered && <button className="w-full text-left">{t('Traffic')}</button>}
                {hovered && <IoIosAddCircleOutline size={30} />}
              </div>
            </li>
            <li className="mb-2">
              <div
                className={`flex items-center p-2 border-gray-600 rounded hover:bg-gray-700 cursor-pointer${selectedItem === 3 && hovered ? 'bg-[#82f822f8]' : ''}`}
                onClick={() => handleDropdownClick(3, 'Refunds')}
              >
                <FaUndo className={`mr-2  rounded-2xl  ${selectedItem === 3 && !hovered ? 'bg-[#82f822f8] text-black' : ' '}`} size={30} />
                {hovered && <button className="w-full text-left">{t('Refunds')}</button>}
                {hovered && <IoIosAddCircleOutline size={30} />}
              </div>
            </li>
            <li className="mb-2">
              <div
                className={`flex items-center p-2  border-gray-600 rounded hover:bg-gray-700 cursor-pointer ${selectedItem === 4 && hovered ? 'bg-[#82f822f8]' : ''}`}
                onClick={() => handleDropdownClick(4, 'CPC')}
              >
                <FaDollarSign className={`mr-2  rounded-2xl  ${selectedItem === 4 && !hovered ? 'bg-[#82f822f8] text-black' : ' '}`} size={30}  />
                {hovered && <button className="w-full text-left">{t('CPC')}</button>}
                {hovered && <IoIosAddCircleOutline size={30} />}
              </div>
            </li>
            <li className="mb-2">
              <div
                className={`flex items-center p-2  border-gray-600 rounded hover:bg-gray-700 cursor-pointer${selectedItem === 5 && hovered ? 'bg-[#82f822f8]' : ''}`}
                onClick={() => handleDropdownClick(5, 'ROI')}
              >
                <FaChartPie className={`mr-2  rounded-2xl  ${selectedItem === 5 && !hovered ? 'bg-[#82f822f8] text-black' : ' '}`} size={30}  />
                {hovered && <button className="w-full text-left">{t('ROI')}</button>}
                {hovered && <IoIosAddCircleOutline size={30} />}
              </div>
            </li>
            <li className="mb-2">
              <div
                className={`flex items-center p-2  border-gray-600 rounded hover:bg-gray-700 cursor-pointer ${selectedItem === 6 && hovered ? 'bg-[#82f822f8]' : ''}`}
                onClick={() => handleDropdownClick(6, 'CTR')}
              >
                <FaPercentage className={`mr-2  rounded-2xl  ${selectedItem === 5 && !hovered ? 'bg-[#82f822f8] text-black' : ' '}`} size={30}  />
                {hovered && <button className="w-full text-left">{t('CTR')}</button>}
                {hovered && <IoIosAddCircleOutline size={30} />}
              </div>
            </li>
            <li className="mb-2">
              <div
                className={`flex items-center p-2  border-gray-600 rounded hover:bg-gray-700 cursor-pointer ${selectedItem === 7 && hovered ? 'bg-[#82f822f8]' : ''}`}
                onClick={() => handleDropdownClick(7, 'Others')}
              >
                <FaEllipsisH className={`mr-2  rounded-2xl  ${selectedItem === 6 && !hovered ? 'bg-[#82f822f8] text-black' : ' '}`} size={30} />
                {hovered && <button className="w-full text-left">{t('Others')}</button>}
                {hovered && <IoIosAddCircleOutline size={30} />}
              </div>
            </li>
            <li className="mb-2">
              <div
                className={`flex items-center p-2  border-gray-600 rounded hover:bg-gray-700 cursor-pointer ${selectedItem === 8 && hovered ? 'bg-[#82f822f8]' : ''}`}
                onClick={() => handleDropdownClick(8, 'Logout')}
              >
                <FaSignOutAlt className={`mr-2  rounded-2xl  ${selectedItem === 8 && !hovered ? 'bg-[#82f822f8] text-black' : ' '}`} size={30} />
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