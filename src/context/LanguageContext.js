import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

// List of supported languages
const languages = ['en', 'es', 'fr']; // Example: English, Spanish, French

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(languages[0]); // Default to the first language in the list

  const switchLanguage = (lang) => {
    if (languages.includes(lang)) {
      setLanguage(lang);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => useContext(LanguageContext);

export default LanguageContext;