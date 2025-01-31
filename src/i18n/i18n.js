import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from '../utils/language/english.json';
import ptTranslation from '../utils/language/port.json';

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: {
            en: {
                translation: enTranslation
            },
            pt: {
                translation: ptTranslation
            }
        },
        lng: navigator.language.split('-')[0] || 'en', // default language
        fallbackLng: 'en', // fallback language
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;