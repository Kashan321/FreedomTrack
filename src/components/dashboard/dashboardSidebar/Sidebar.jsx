import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaUser, FaLink, FaAd, FaCog, FaShieldAlt, FaMobileAlt, FaRobot, FaPalette, FaSignOutAlt, FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';

function Sidebar() {
  const { t } = useTranslation();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleDropdownClick = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Navbar with Burger Menu */}
      {!sidebarOpen && (

      <div className="text-white p-4  md:hidden">
        <button onClick={toggleSidebar} className="text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <FaBars />
        </button>
      </div>
      )}

      {/* Sidebar */}
      {sidebarOpen &&(

      <div className={`bg-gray-800 text-white w-64 overflow-y-auto transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}  `}>
        <nav className="mt-4">
        <div className="text-white p-4 w-full md:hidden flex justify-between items-center">
        <button onClick={toggleSidebar} className="text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
        <FaTimes />
        </button>
      </div>
        
          <ul>
            <li className="mb-2">
              <div className="flex items-center p-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer" onClick={() => handleDropdownClick(0)}>
                <FaUser className="mr-2" />
                <button className="w-full text-left">{t('User Management')}</button>
                <FaChevronDown className={`ml-auto transition-transform ${openDropdown === 0 ? 'transform rotate-180' : ''}`} />
              </div>
              {openDropdown === 0 && (
                <ul className="mt-2">
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                    <button className="w-full text-left">Sub-item 1</button>
                  </li>
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                    <button className="w-full text-left">Sub-item 2</button>
                  </li>
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                    <button className="w-full text-left">Sub-item 3</button>
                  </li>
                </ul>
              )}
            </li>
            <li className="mb-2">
              <div className="flex items-center p-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer" onClick={() => handleDropdownClick(1)}>
                <FaLink className="mr-2" />
                <button className="w-full text-left">{t('Affiliate Tracking')}</button>
                <FaChevronDown className={`ml-auto transition-transform ${openDropdown === 1 ? 'transform rotate-180' : ''}`} />
              </div>
              {openDropdown === 1 && (
                <ul className="mt-2">
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                    <button className="w-full text-left">Sub-item 1</button>
                  </li>
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                    <button className="w-full text-left">Sub-item 2</button>
                  </li>
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                    <button className="w-full text-left">Sub-item 3</button>
                  </li>
                </ul>
              )}
            </li>
            <li className="mb-2">
              <div className="flex items-center p-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer" onClick={() => handleDropdownClick(2)}>
                <FaAd className="mr-2" />
                <button className="w-full text-left">{t('Ad Platform Integration')}</button>
                <FaChevronDown className={`ml-auto transition-transform ${openDropdown === 2 ? 'transform rotate-180' : ''}`} />
              </div>
              {openDropdown === 2 && (
                <ul className="mt-2">
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                    <button className="w-full text-left">Sub-item 1</button>
                  </li>
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                    <button className="w-full text-left">Sub-item 2</button>
                  </li>
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                    <button className="w-full text-left">Sub-item 3</button>
                  </li>
                </ul>
              )}
            </li>
            <li className="mb-2">
              <div className="flex items-center p-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer" onClick={() => handleDropdownClick(3)}>
                <FaCog className="mr-2" />
                <button className="w-full text-left">{t('Subscription Management')}</button>
                <FaChevronDown className={`ml-auto transition-transform ${openDropdown === 3 ? 'transform rotate-180' : ''}`} />
              </div>
              {openDropdown === 3 && (
                <ul className="mt-2">
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                    <button className="w-full text-left">Sub-item 1</button>
                  </li>
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                    <button className="w-full text-left">Sub-item 2</button>
                  </li>
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                    <button className="w-full text-left">Sub-item 3</button>
                  </li>
                </ul>
              )}
            </li>
            <li className="mb-2">
              <div className="flex items-center p-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer" onClick={() => handleDropdownClick(4)}>
                <FaShieldAlt className="mr-2" />
                <button className="w-full text-left">{t('Security and Fraud Prevention')}</button>
                <FaChevronDown className={`ml-auto transition-transform ${openDropdown === 4 ? 'transform rotate-180' : ''}`} />
              </div>
              {openDropdown === 4 && (
                <ul className="mt-2">
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                    <button className="w-full text-left">Sub-item 1</button>
                  </li>
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                    <button className="w-full text-left">Sub-item 2</button>
                  </li>
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                    <button className="w-full text-left">Sub-item 3</button>
                  </li>
                </ul>
              )}
            </li>
            <li className="mb-2">
              <div className="flex items-center p-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer" onClick={() => handleDropdownClick(5)}>
                <FaMobileAlt className="mr-2" />
                <button className="w-full text-left">{t('Conversion Tracking on iOS')}</button>
                <FaChevronDown className={`ml-auto transition-transform ${openDropdown === 5 ? 'transform rotate-180' : ''}`} />
              </div>
              {openDropdown === 5 && (
                <ul className="mt-2">
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                    <button className="w-full text-left">Sub-item 1</button>
                  </li>
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                    <button className="w-full text-left">Sub-item 2</button>
                  </li>
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                    <button className="w-full text-left">Sub-item 3</button>
                  </li>
                </ul>
              )}
            </li>
            <li className="mb-2">
              <div className="flex items-center p-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer" onClick={() => handleDropdownClick(6)}>
                <FaRobot className="mr-2" />
                <button className="w-full text-left">{t('API Integration')}</button>
                <FaChevronDown className={`ml-auto transition-transform ${openDropdown === 6 ? 'transform rotate-180' : ''}`} />
              </div>
              {openDropdown === 6 && (
                <ul className="mt-2">
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                    <button className="w-full text-left">Sub-item 1</button>
                  </li>
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                    <button className="w-full text-left">Sub-item 2</button>
                  </li>
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                    <button className="w-full text-left">Sub-item 3</button>
                  </li>
                </ul>
              )}
            </li>
            <li className="mb-2">
              <div className="flex items-center p-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer" onClick={() => handleDropdownClick(7)}>
                <FaRobot className="mr-2" />
                <button className="w-full text-left">{t('Page Analyzer AI')}</button>
                <FaChevronDown className={`ml-auto transition-transform ${openDropdown === 7 ? 'transform rotate-180' : ''}`} />
              </div>
              {openDropdown === 7 && (
                <ul className="mt-2">
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                    <button className="w-full text-left">Sub-item 1</button>
                  </li>
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                    <button className="w-full text-left">Sub-item 2</button>
                  </li>
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                    <button className="w-full text-left">Sub-item 3</button>
                  </li>
                </ul>
              )}
            </li>
            <li className="mb-2">
              <div className="flex items-center p-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer" onClick={() => handleDropdownClick(8)}>
                <FaPalette className="mr-2" />
                <button className="w-full text-left">{t('Interface Customization')}</button>
                <FaChevronDown className={`ml-auto transition-transform ${openDropdown === 8 ? 'transform rotate-180' : ''}`} />
              </div>
              {openDropdown === 8 && (
                <ul className="mt-2">
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                    <button className="w-full text-left">Sub-item 1</button>
                  </li>
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                    <button className="w-full text-left">Sub-item 2</button>
                  </li>
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                    <button className="w-full text-left">Sub-item 3</button>
                  </li>
                </ul>
              )}
            </li>
            <li className="mb-2">
              <div className="flex items-center p-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer" >
                <FaSignOutAlt className="mr-2" />
                <button className="w-full text-left">{t('Logout')}</button>
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
              <div className="flex items-center p-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer" onClick={() => handleDropdownClick(0)}>
                <FaUser className="mr-2" />
                <button className="w-full text-left">{t('User Management')}</button>
                <FaChevronDown className={`ml-auto transition-transform ${openDropdown === 0 ? 'transform rotate-180' : ''}`} />
              </div>
              {openDropdown === 0 && (
                <ul className="mt-2">
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                    <button className="w-full text-left">Sub-item 1</button>
                  </li>
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                    <button className="w-full text-left">Sub-item 2</button>
                  </li>
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                    <button className="w-full text-left">Sub-item 3</button>
                  </li>
                </ul>
              )}
            </li>
            <li className="mb-2">
              <div className="flex items-center p-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer" onClick={() => handleDropdownClick(1)}>
                <FaLink className="mr-2" />
                <button className="w-full text-left">{t('Affiliate Tracking')}</button>
                <FaChevronDown className={`ml-auto transition-transform ${openDropdown === 1 ? 'transform rotate-180' : ''}`} />
              </div>
              {openDropdown === 1 && (
                <ul className="mt-2">
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                    <button className="w-full text-left">Sub-item 1</button>
                  </li>
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                    <button className="w-full text-left">Sub-item 2</button>
                  </li>
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                    <button className="w-full text-left">Sub-item 3</button>
                  </li>
                </ul>
              )}
            </li>
            <li className="mb-2">
              <div className="flex items-center p-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer" onClick={() => handleDropdownClick(2)}>
                <FaAd className="mr-2" />
                <button className="w-full text-left">{t('Ad Platform Integration')}</button>
                <FaChevronDown className={`ml-auto transition-transform ${openDropdown === 2 ? 'transform rotate-180' : ''}`} />
              </div>
              {openDropdown === 2 && (
                <ul className="mt-2">
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                    <button className="w-full text-left">Sub-item 1</button>
                  </li>
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                    <button className="w-full text-left">Sub-item 2</button>
                  </li>
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                    <button className="w-full text-left">Sub-item 3</button>
                  </li>
                </ul>
              )}
            </li>
            <li className="mb-2">
              <div className="flex items-center p-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer" onClick={() => handleDropdownClick(3)}>
                <FaCog className="mr-2" />
                <button className="w-full text-left">{t('Subscription Management')}</button>
                <FaChevronDown className={`ml-auto transition-transform ${openDropdown === 3 ? 'transform rotate-180' : ''}`} />
              </div>
              {openDropdown === 3 && (
                <ul className="mt-2">
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                    <button className="w-full text-left">Sub-item 1</button>
                  </li>
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                    <button className="w-full text-left">Sub-item 2</button>
                  </li>
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                    <button className="w-full text-left">Sub-item 3</button>
                  </li>
                </ul>
              )}
            </li>
            <li className="mb-2">
              <div className="flex items-center p-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer" onClick={() => handleDropdownClick(4)}>
                <FaShieldAlt className="mr-2" />
                <button className="w-full text-left">{t('Security and Fraud Prevention')}</button>
                <FaChevronDown className={`ml-auto transition-transform ${openDropdown === 4 ? 'transform rotate-180' : ''}`} />
              </div>
              {openDropdown === 4 && (
                <ul className="mt-2">
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                    <button className="w-full text-left">Sub-item 1</button>
                  </li>
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                    <button className="w-full text-left">Sub-item 2</button>
                  </li>
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                    <button className="w-full text-left">Sub-item 3</button>
                  </li>
                </ul>
              )}
            </li>
            <li className="mb-2">
              <div className="flex items-center p-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer" onClick={() => handleDropdownClick(5)}>
                <FaMobileAlt className="mr-2" />
                <button className="w-full text-left">{t('Conversion Tracking on iOS')}</button>
                <FaChevronDown className={`ml-auto transition-transform ${openDropdown === 5 ? 'transform rotate-180' : ''}`} />
              </div>
              {openDropdown === 5 && (
                <ul className="mt-2">
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                    <button className="w-full text-left">Sub-item 1</button>
                  </li>
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                    <button className="w-full text-left">Sub-item 2</button>
                  </li>
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                    <button className="w-full text-left">Sub-item 3</button>
                  </li>
                </ul>
              )}
            </li>
            <li className="mb-2">
              <div className="flex items-center p-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer" onClick={() => handleDropdownClick(6)}>
                <FaRobot className="mr-2" />
                <button className="w-full text-left">{t('API Integration')}</button>
                <FaChevronDown className={`ml-auto transition-transform ${openDropdown === 6 ? 'transform rotate-180' : ''}`} />
              </div>
              {openDropdown === 6 && (
                <ul className="mt-2">
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                    <button className="w-full text-left">Sub-item 1</button>
                  </li>
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                    <button className="w-full text-left">Sub-item 2</button>
                  </li>
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                    <button className="w-full text-left">Sub-item 3</button>
                  </li>
                </ul>
              )}
            </li>
            <li className="mb-2">
              <div className="flex items-center p-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer" onClick={() => handleDropdownClick(7)}>
                <FaRobot className="mr-2" />
                <button className="w-full text-left">{t('Page Analyzer AI')}</button>
                <FaChevronDown className={`ml-auto transition-transform ${openDropdown === 7 ? 'transform rotate-180' : ''}`} />
              </div>
              {openDropdown === 7 && (
                <ul className="mt-2">
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                    <button className="w-full text-left">Sub-item 1</button>
                  </li>
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                    <button className="w-full text-left">Sub-item 2</button>
                  </li>
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                    <button className="w-full text-left">Sub-item 3</button>
                  </li>
                </ul>
              )}
            </li>
            <li className="mb-2">
              <div className="flex items-center p-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer" onClick={() => handleDropdownClick(8)}>
                <FaPalette className="mr-2" />
                <button className="w-full text-left">{t('Interface Customization')}</button>
                <FaChevronDown className={`ml-auto transition-transform ${openDropdown === 8 ? 'transform rotate-180' : ''}`} />
              </div>
              {openDropdown === 8 && (
                <ul className="mt-2">
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                    <button className="w-full text-left">Sub-item 1</button>
                  </li>
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                    <button className="w-full text-left">Sub-item 2</button>
                  </li>
                  <li className="flex items-center p-2 mb-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer">
                    <button className="w-full text-left">Sub-item 3</button>
                  </li>
                </ul>
              )}
            </li>
            <li className="mb-2">
              <div className="flex items-center p-2 border-b border-gray-600 rounded hover:bg-gray-700 cursor-pointer" >
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