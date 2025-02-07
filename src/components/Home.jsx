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
import BuyGoods from './dashboard/dashboardSidebar/dashboardComponents/trafic/buyGoods/BuyGoods';
import ClickBank from './dashboard/dashboardSidebar/dashboardComponents/trafic/clickBank/ClickBank';
import MaxWeb from './dashboard/dashboardSidebar/dashboardComponents/trafic/maxWeb/MaxWeb';
import Digistore24 from './dashboard/dashboardSidebar/dashboardComponents/trafic/Digistore24/Digistore24';
import SellHealth from './dashboard/dashboardSidebar/dashboardComponents/trafic/sellHealth/SellHealth';
import DrCash from './dashboard/dashboardSidebar/dashboardComponents/trafic/DrCash/DrCash';
import SmartADV from './dashboard/dashboardSidebar/dashboardComponents/trafic/SmartADV/SmartADV';
import GuruMedia from './dashboard/dashboardSidebar/dashboardComponents/trafic/GuruMedia/GuruMedia';
import ClickDealer from './dashboard/dashboardSidebar/dashboardComponents/trafic/ClickDealer/ClickDealer';
import Adcombo from './dashboard/dashboardSidebar/dashboardComponents/trafic/Adcombo/Adcombo';
import Leadrock from './dashboard/dashboardSidebar/dashboardComponents/trafic/Leadrock/Leadrock';

function Home() {
  const { t } = useTranslation();
  const [selectedContent, setSelectedContent] = useState('Welcome to the Dashboard');
  const [breadcrumbs, setBreadcrumbs] = useState(['Dashboard']);

  const handleMenuItemClick = (mainItem, subItem) => {
    setSelectedContent(`${mainItem} - ${subItem}`);
    setBreadcrumbs([mainItem, subItem]);
  };

  const renderContent = () => {
    if (selectedContent.startsWith('Sales')) {
      return <Sales />;
    } else if (selectedContent.startsWith('Traffic - ClickBank')) {
      return <ClickBank />;
    } else if (selectedContent.startsWith('Traffic - BuyGoods')) {
      return <BuyGoods />;
    } else if (selectedContent.startsWith('Traffic - MaxWeb')) {
      return <MaxWeb />;
    } else if (selectedContent.startsWith('Traffic - Digistore24')) {
      return <Digistore24 />;
    } else if (selectedContent.startsWith('Traffic - SellHealth.com')) {
      return <SellHealth />;
    } else if (selectedContent.startsWith('Traffic - Dr. Cash')) {
      return <DrCash />;
    } else if (selectedContent.startsWith('Traffic - Smart ADV')) {
      return <SmartADV />;
    } else if (selectedContent.startsWith('Traffic - GuruMedia')) {
      return <GuruMedia />;
    } else if (selectedContent.startsWith('Traffic - ClickDealer')) {
      return <ClickDealer />;
    } else if (selectedContent.startsWith('Traffic - Adcombo')) {
      return <Adcombo />;
    } else if (selectedContent.startsWith('Traffic - Leadrock')) {
      return <Leadrock />;
    } else if (selectedContent.startsWith('Google Ads - CPC')) {
      return <Cpc />;
    } else if (selectedContent.startsWith('Google Ads - ROI')) {
      return <Roi />;
    } else if (selectedContent.startsWith('Google Ads - CTR')) {
      return <Ctr />;
    } else if (selectedContent.startsWith('Dashboard')) {
      return <Dashboard />;
    }

    // Add other conditions here for different components
    return <h1 className="text-2xl font-bold">{t(selectedContent)}</h1>;
  };

  return (
    <div className="h-screen flex flex-col bg-gray-200">
      <Navbar breadcrumbs={breadcrumbs} />
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