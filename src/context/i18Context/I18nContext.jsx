import React, { createContext, useState } from 'react';
import i18n from '../../i18n/i18n';

export const I18nContext = createContext();

export const I18nProvider = ({ children }) => {
    const [language, setLanguage] = useState(i18n.language);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setLanguage(lng);
    };

    return (
        <I18nContext.Provider value={{ language, changeLanguage }}>
            {children}
        </I18nContext.Provider>
    );
};