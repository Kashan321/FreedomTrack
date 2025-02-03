import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './navbar/Navbar';
import Sidebar from './dashboard/dashboardSidebar/Sidebar';
import Sales from './dashboard/dashboardSidebar/sales/Sales';
import Traffic from './dashboard/dashboardSidebar/dashboardComponents/trafic/Trafic';
import Cpc from './dashboard/dashboardSidebar/dashboardComponents/CPC/Cpc';
import Roi from './dashboard/dashboardSidebar/dashboardComponents/ROI/Roi';
import Ctr from './dashboard/dashboardSidebar/dashboardComponents/CTR/Ctr';
import Dashboard from './dashboard/dashboardSidebar/dashboardComponents/dashboard/Dashboard';

function Home() {
  const { t } = useTranslation();
  const [selectedContent, setSelectedContent] = useState('Welcome to the Dashboard');

  const handleMenuItemClick = (mainItem, subItem) => {
    setSelectedContent(`${mainItem} - ${subItem}`);
  };

  const renderContent = () => {
    if (selectedContent.startsWith('Sales')) {
      return <Sales />;
    }else if (selectedContent.startsWith('Traffic')) {
      return <Traffic />;
    }else if (selectedContent.startsWith('CPC')) {
        return <Cpc />;
      }else if (selectedContent.startsWith('ROI')) {
        return <Roi />;
      }else if (selectedContent.startsWith('CTR')) {
        return <Ctr />;
      }
      else if (selectedContent.startsWith('Dashboard')) {
        return <Dashboard />;
      }


    // Add other conditions here for different components
    return <h1 className="text-2xl font-bold">{t(selectedContent)}</h1>;
  };

  return (
    <div className="h-screen flex flex-col bg-gray-200">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar onMenuItemClick={handleMenuItemClick} />
        <div className="flex-1 p-4 overflow-y-auto">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default Home;