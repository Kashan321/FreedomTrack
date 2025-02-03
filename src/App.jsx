import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import { I18nProvider } from './context/i18Context/I18nContext';
import Login from './components/login/Login';
import Layout from './components/Layout';
import { ToastContainer } from 'react-toastify';
import Sales from './components/dashboard/dashboardSidebar/sales/Sales';
import Signup from './components/Signup/Signup';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <I18nProvider>
      <Router>
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/*" element={isAuthenticated ? <Layout /> : <Navigate to="/login" />} />
        </Routes>
      </Router>
      <ToastContainer />
    </I18nProvider>
  );
}

export default App;