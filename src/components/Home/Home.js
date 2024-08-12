import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useContext, useEffect } from 'react';
import ThemeContext from '../../context/ThemeContext';
import { useTranslation } from 'react-i18next';

const Home = () => {
    const languageContext = useLanguage();
    const themeContext = useContext(ThemeContext);
    const { t, i18n } = useTranslation();

    useEffect(() => {
        console.log('Language changed to:', languageContext.language);
        i18n.changeLanguage(languageContext.language);
    }, [languageContext.language, i18n]);

    if (!languageContext || !themeContext) {
        console.error('Language or Theme context is undefined');
        return null;
    }

    return (
        <div style={{ padding: '20px' }}>
            <h1>{t('Greetings')}</h1>
            <p>Current Language: {languageContext.language}</p>
            <p>Current Theme: {themeContext.theme}</p>
        </div>
    );
};

export default Home;