import { useContext, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { I18nProvider, I18nContext } from './context/i18Context/I18nContext';
import { useTranslation } from 'react-i18next'; // Use the `useTranslation` hook
import Home from './components/Home';

function App() {
  // const { t } = useTranslation(); // Use the `useTranslation` hook
  return (
    <I18nProvider>
      <Home />
    </I18nProvider>
  );
}

export default App;