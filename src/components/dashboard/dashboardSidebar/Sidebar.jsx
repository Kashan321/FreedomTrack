import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaChevronDown, FaBars, FaTimes, FaChartLine, FaTrafficLight, FaUndo, FaDollarSign, FaChartPie, FaPercentage, FaEllipsisH, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


function Sidebar({ onMenuItemClick }) {
  const { t } = useTranslation();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
 const navigate = useNavigate();
  const handleDropdownClick = (index, mainItem) => {
    setOpenDropdown(openDropdown === index ? null : index);
    onMenuItemClick(mainItem, '');
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  // const logout = () => {
  //  alert('logout')
  // }

  return (
    <div className="flex h-screen">
      {!sidebarOpen && (
        <div className="text-white p-4 md:hidden">
          <button onClick={toggleSidebar} className="text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <FaBars />
          </button>
        </div>
      )}

      {sidebarOpen && (
        <div className={`bg-gray-800 text-white w-64 overflow-y-auto transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <nav className="mt-4">
            <div className="text-white p-4 w-full md:hidden flex justify-between items-center">
              <button onClick={toggleSidebar} className="text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <FaTimes />
              </button>
            </div>
            <ul>
              <li className="mb-2">
                <div className="flex items-center p-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer" onClick={() => handleDropdownClick(0, 'Sales')}>
                  <FaChartLine className="mr-2" />
                  <button className="w-full text-left">{t('Sales')}</button>
                  <FaChevronDown className={`ml-auto transition-transform ${openDropdown === 0 ? 'transform rotate-180' : ''}`} />
                </div>
              </li>
              <li className="mb-2">
                <div className="flex items-center p-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer" onClick={() => handleDropdownClick(1, 'Traffic')}>
                  <FaTrafficLight className="mr-2" />
                  <button className="w-full text-left">{t('Traffic')}</button>
                  <FaChevronDown className={`ml-auto transition-transform ${openDropdown === 1 ? 'transform rotate-180' : ''}`} />
                </div>
                {openDropdown === 1 && (
                  <ul className="mt-2">
                    <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                      <button className="w-full text-left" onClick={() => onMenuItemClick('Traffic', 'Sub-item 1')}>Sub-item 1</button>
                    </li>
                    <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                      <button className="w-full text-left" onClick={() => onMenuItemClick('Traffic', 'Sub-item 2')}>Sub-item 2</button>
                    </li>
                    <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                      <button className="w-full text-left" onClick={() => onMenuItemClick('Traffic', 'Sub-item 3')}>Sub-item 3</button>
                    </li>
                  </ul>
                )}
              </li>
              <li className="mb-2">
                <div className="flex items-center p-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer" onClick={() => handleDropdownClick(2, 'Refunds')}>
                  <FaUndo className="mr-2" />
                  <button className="w-full text-left">{t('Refunds')}</button>
                  <FaChevronDown className={`ml-auto transition-transform ${openDropdown === 2 ? 'transform rotate-180' : ''}`} />
                </div>
                {openDropdown === 2 && (
                  <ul className="mt-2">
                    <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                      <button className="w-full text-left" onClick={() => onMenuItemClick('Refunds', 'Sub-item 1')}>Sub-item 1</button>
                    </li>
                    <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                      <button className="w-full text-left" onClick={() => onMenuItemClick('Refunds', 'Sub-item 2')}>Sub-item 2</button>
                    </li>
                    <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                      <button className="w-full text-left" onClick={() => onMenuItemClick('Refunds', 'Sub-item 3')}>Sub-item 3</button>
                    </li>
                  </ul>
                )}
              </li>
              <li className="mb-2">
                <div className="flex items-center p-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer" onClick={() => handleDropdownClick(3, 'CPC')}>
                  <FaDollarSign className="mr-2" />
                  <button className="w-full text-left">{t('CPC')}</button>
                  <FaChevronDown className={`ml-auto transition-transform ${openDropdown === 3 ? 'transform rotate-180' : ''}`} />
                </div>
                {openDropdown === 3 && (
                  <ul className="mt-2">
                    <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                      <button className="w-full text-left" onClick={() => onMenuItemClick('CPC', 'Sub-item 1')}>Sub-item 1</button>
                    </li>
                    <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                      <button className="w-full text-left" onClick={() => onMenuItemClick('CPC', 'Sub-item 2')}>Sub-item 2</button>
                    </li>
                    <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                      <button className="w-full text-left" onClick={() => onMenuItemClick('CPC', 'Sub-item 3')}>Sub-item 3</button>
                    </li>
                  </ul>
                )}
              </li>
              <li className="mb-2">
                <div className="flex items-center p-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer" onClick={() => handleDropdownClick(4, 'ROI')}>
                  <FaChartPie className="mr-2" />
                  <button className="w-full text-left">{t('ROI')}</button>
                  <FaChevronDown className={`ml-auto transition-transform ${openDropdown === 4 ? 'transform rotate-180' : ''}`} />
                </div>
                {openDropdown === 4 && (
                  <ul className="mt-2">
                    <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                      <button className="w-full text-left" onClick={() => onMenuItemClick('ROI', 'Sub-item 1')}>Sub-item 1</button>
                    </li>
                    <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                      <button className="w-full text-left" onClick={() => onMenuItemClick('ROI', 'Sub-item 2')}>Sub-item 2</button>
                    </li>
                    <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                      <button className="w-full text-left" onClick={() => onMenuItemClick('ROI', 'Sub-item 3')}>Sub-item 3</button>
                    </li>
                  </ul>
                )}
              </li>
              <li className="mb-2">
                <div className="flex items-center p-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer" onClick={() => handleDropdownClick(5, 'CTR')}>
                  <FaPercentage className="mr-2" />
                  <button className="w-full text-left">{t('CTR')}</button>
                  <FaChevronDown className={`ml-auto transition-transform ${openDropdown === 5 ? 'transform rotate-180' : ''}`} />
                </div>
                {openDropdown === 5 && (
                  <ul className="mt-2">
                    <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                      <button className="w-full text-left" onClick={() => onMenuItemClick('CTR', 'Sub-item 1')}>Sub-item 1</button>
                    </li>
                    <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                      <button className="w-full text-left" onClick={() => onMenuItemClick('CTR', 'Sub-item 2')}>Sub-item 2</button>
                    </li>
                    <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                      <button className="w-full text-left" onClick={() => onMenuItemClick('CTR', 'Sub-item 3')}>Sub-item 3</button>
                    </li>
                  </ul>
                )}
              </li>
              <li className="mb-2">
                <div className="flex items-center p-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer" onClick={() => handleDropdownClick(6, 'Others')}>
                  <FaEllipsisH className="mr-2" />
                  <button className="w-full text-left">{t('Others')}</button>
                  <FaChevronDown className={`ml-auto transition-transform ${openDropdown === 6 ? 'transform rotate-180' : ''}`} />
                </div>
                {openDropdown === 6 && (
                  <ul className="mt-2">
                    <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                      <button className="w-full text-left" onClick={() => onMenuItemClick('Others', 'Sub-item 1')}>Sub-item 1</button>
                    </li>
                    <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                      <button className="w-full text-left" onClick={() => onMenuItemClick('Others', 'Sub-item 2')}>Sub-item 2</button>
                    </li>
                    <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                      <button className="w-full text-left" onClick={() => onMenuItemClick('Others', 'Sub-item 3')}>Sub-item 3</button>
                    </li>
                  </ul>
                )}
              </li>
              <li className="mb-2">
                <div className="flex items-center p-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer" >
                  <FaSignOutAlt className="mr-2" />
                  <button  className="w-full text-left">{t('Logout')}</button>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      )}

      <div className={`bg-gray-800 text-white w-64 overflow-y-auto transition-transform duration-300 hidden md:translate-x-0 md:block fixed md:relative`}>
        <nav className="mt-4">
          <ul>
            <li className="mb-2">
              <div className="flex items-center p-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer" onClick={() => handleDropdownClick(0, 'Sales')}>
                <FaChartLine className="mr-2" />
                <button className="w-full text-left">{t('Sales')}</button>
                <FaChevronDown className={`ml-auto transition-transform ${openDropdown === 0 ? 'transform rotate-180' : ''}`} />
              </div>
              {openDropdown === 0 && (
                <ul className="mt-2">
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer" onClick={() => onMenuItemClick('Sales', 'Sub-item 1')}>
                    <button className="w-full text-left">Sub-item 1</button>
                  </li>
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer" onClick={() => onMenuItemClick('Sales', 'Sub-item 2')}>
                    <button className="w-full text-left">Sub-item 2</button>
                  </li>
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer" onClick={() => onMenuItemClick('Sales', 'Sub-item 3')}>
                    <button className="w-full text-left">Sub-item 3</button>
                  </li>
                </ul>
              )}
            </li>
            <li className="mb-2">
              <div className="flex items-center p-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer" onClick={() => handleDropdownClick(1, 'Traffic')}>
                <FaTrafficLight className="mr-2" />
                <button className="w-full text-left">{t('Traffic')}</button>
                <FaChevronDown className={`ml-auto transition-transform ${openDropdown === 1 ? 'transform rotate-180' : ''}`} />
              </div>
              {openDropdown === 1 && (
                <ul className="mt-2">
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer" onClick={() => onMenuItemClick('Traffic', 'Sub-item 1')}>
                    <button className="w-full text-left">Sub-item 1</button>
                  </li>
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer" onClick={() => onMenuItemClick('Traffic', 'Sub-item 2')}>
                    <button className="w-full text-left">Sub-item 2</button>
                  </li>
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer" onClick={() => onMenuItemClick('Traffic', 'Sub-item 3')}>
                    <button className="w-full text-left">Sub-item 3</button>
                  </li>
                </ul>
              )}
            </li>
            <li className="mb-2">
              <div className="flex items-center p-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer" onClick={() => handleDropdownClick(2, 'Refunds')}>
                <FaUndo className="mr-2" />
                <button className="w-full text-left">{t('Refunds')}</button>
                <FaChevronDown className={`ml-auto transition-transform ${openDropdown === 2 ? 'transform rotate-180' : ''}`} />
              </div>
              {openDropdown === 2 && (
                <ul className="mt-2">
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer" onClick={() => onMenuItemClick('Refunds', 'Sub-item 1')}>
                    <button className="w-full text-left">Sub-item 1</button>
                  </li>
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer" onClick={() => onMenuItemClick('Refunds', 'Sub-item 2')}>
                    <button className="w-full text-left">Sub-item 2</button>
                  </li>
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer" onClick={() => onMenuItemClick('Refunds', 'Sub-item 3')}>
                    <button className="w-full text-left">Sub-item 3</button>
                  </li>
                </ul>
              )}
            </li>
            <li className="mb-2">
              <div className="flex items-center p-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer" onClick={() => handleDropdownClick(3)}>
                <FaDollarSign className="mr-2" />
                <button className="w-full text-left">{t('CPC')}</button>
                <FaChevronDown className={`ml-auto transition-transform ${openDropdown === 3 ? 'transform rotate-180' : ''}`} />
              </div>
              {openDropdown === 3 && (
                <ul className="mt-2">
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer" onClick={() => onMenuItemClick('CPC', 'Sub-item 1')}>
                    <button className="w-full text-left">Sub-item 1</button>
                  </li>
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer" onClick={() => onMenuItemClick('CPC', 'Sub-item 2')}>
                    <button className="w-full text-left">Sub-item 2</button>
                  </li>
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer" onClick={() => onMenuItemClick('CPC', 'Sub-item 3')}>
                    <button className="w-full text-left">Sub-item 3</button>
                  </li>
                </ul>
              )}
            </li>
            <li className="mb-2">
              <div className="flex items-center p-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer" onClick={() => handleDropdownClick(4)}>
                <FaChartPie className="mr-2" />
                <button className="w-full text-left">{t('ROI')}</button>
                <FaChevronDown className={`ml-auto transition-transform ${openDropdown === 4 ? 'transform rotate-180' : ''}`} />
              </div>
              {openDropdown === 4 && (
                <ul className="mt-2">
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer" onClick={() => onMenuItemClick('ROI', 'Sub-item 1')}>
                    <button className="w-full text-left">Sub-item 1</button>
                  </li>
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer" onClick={() => onMenuItemClick('ROI', 'Sub-item 2')}>
                    <button className="w-full text-left">Sub-item 2</button>
                  </li>
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer" onClick={() => onMenuItemClick('ROI', 'Sub-item 3')}>
                    <button className="w-full text-left">Sub-item 3</button>
                  </li>
                </ul>
              )}
            </li>
            <li className="mb-2">
              <div className="flex items-center p-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer" onClick={() => handleDropdownClick(5)}>
                <FaPercentage className="mr-2" />
                <button className="w-full text-left">{t('CTR')}</button>
                <FaChevronDown className={`ml-auto transition-transform ${openDropdown === 5 ? 'transform rotate-180' : ''}`} />
              </div>
              {openDropdown === 5 && (
                <ul className="mt-2">
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer" onClick={() => onMenuItemClick('CTR', 'Sub-item 1')}>
                    <button className="w-full text-left">Sub-item 1</button>
                  </li>
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer" onClick={() => onMenuItemClick('CTR', 'Sub-item 2')}>
                    <button className="w-full text-left">Sub-item 2</button>
                  </li>
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer" onClick={() => onMenuItemClick('CTR', 'Sub-item 3')}>
                    <button className="w-full text-left">Sub-item 3</button>
                  </li>
                </ul>
              )}
            </li>
            <li className="mb-2">
              <div className="flex items-center p-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer" onClick={() => handleDropdownClick(6)}>
                <FaEllipsisH className="mr-2" />
                <button className="w-full text-left">{t('Others')}</button>
                <FaChevronDown className={`ml-auto transition-transform ${openDropdown === 6 ? 'transform rotate-180' : ''}`} />
              </div>
              {openDropdown === 6 && (
                <ul className="mt-2">
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer" onClick={() => onMenuItemClick('Others', 'Sub-item 1')}>
                    <button className="w-full text-left">Sub-item 1</button>
                  </li>
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer" onClick={() => onMenuItemClick('Others', 'Sub-item 2')}>
                    <button className="w-full text-left">Sub-item 2</button>
                  </li>
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer" onClick={() => onMenuItemClick('Others', 'Sub-item 3')}>
                    <button className="w-full text-left">Sub-item 3</button>
                  </li>
                </ul>
              )}
            </li>
            <li className="mb-2">
              <div className="flex items-center p-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                <FaSignOutAlt className="mr-2" />
                <button className="w-full text-left">{t('Logout')}</button>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;