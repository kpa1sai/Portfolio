import React, { useContext } from 'react';
import LanguageContext from '../../context/LanguageContext';
import styles from './Header.module.css';

const LanguageSwitcher = () => {
    const { lang, switchLanguage } = useContext(LanguageContext);

    const handleChange = (event) => {
        switchLanguage(event.target.value);
    };

    return (
        <select onChange={handleChange} value={lang} className={styles.languageSwitcher}>
            <option value="en">EN</option>
            <option value="es">ES</option>
            <option value="fr">FR</option>
        </select>
    );
};

export default LanguageSwitcher;
