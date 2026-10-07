import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '../types';
import { en } from '../locales/en';
import { zh } from '../locales/zh';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: typeof en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem('selyron_lang');
    if (saved === 'zh' || saved === 'en') return saved;
    const navLang = navigator.language.toLowerCase();
    return navLang.startsWith('zh') ? 'zh' : 'en';
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('selyron_lang', newLang);
    document.documentElement.lang = newLang === 'zh' ? 'zh-CN' : 'en';
  };

  useEffect(() => {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  }, [lang]);

  const t = lang === 'zh' ? zh : en;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useApp must be used within a LanguageProvider');
  }
  return context;
};
