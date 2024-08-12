import React, { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';
import styles from './ThemeSwitcher.module.css';

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className={styles.themeSwitcher}>
            <input
                type="checkbox"
                id="themeToggle"
                className={styles.toggle}
                checked={theme === 'dark'}
                onChange={toggleTheme}
            />
            <label htmlFor="themeToggle" className={styles.toggleTrack}>
                <span className={styles.toggleIndicator}>
                    {theme === 'dark' ? '🌙' : '☀️'}
                </span>
            </label>
        </div>
    );
};

export default ThemeSwitcher;
