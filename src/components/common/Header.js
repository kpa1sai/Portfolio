import React, {useState} from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import LanguageSwitcher from './LanguageSwitcher';
import styles from './Header.module.css';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t } = useTranslation();
    const pages = ['home', 'experiences', 'projects', 'whatIDo', 'contactMe'];
    const [isNavOpen, setIsNavOpen] = useState(false);
    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <header className={styles.header}>
            <div className={styles.hamburger} onClick={toggleNav}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav className={`${styles.nav} ${isNavOpen ? styles.open : ''}`}>
                <ul>
                    {pages.map((page) => (
                        <li key={page} onClick={() => setIsNavOpen(false)}>
                            {t(`navigation.${page}`)}
                        </li>
                    ))}
                </ul>
            </nav>
            <div className={styles.controls}>
                <div className={styles.switch}>
                    <LanguageSwitcher />
                </div>
                <div className={styles.switch}>
                    <ThemeSwitcher />
                </div>
            </div>
        </header>
    );
};

export default Header;
