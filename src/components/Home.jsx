import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './navbar/Navbar';
import Sidebar from './dashboard/dashboardSidebar/Sidebar';

function Home() {
    const { t } = useTranslation();
    return (
        <div className="h-screen flex flex-col">
            <Navbar />
            <div className="flex flex-1">
                <Sidebar />
                <div className="flex-1 p-4">
                    {/* Main content goes here */}
                    <h1 className="text-2xl font-bold">{t('Welcome to the Dashboard')}</h1>
                </div>
            </div>
        </div>
    );
}

export default Home;