import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, PageId } from '../types';
import { en } from '../locales/en';
import { zh } from '../locales/zh';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: typeof en;
  page: PageId;
  setPage: (page: PageId) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    // Default to 'en' or browser preference or query param
    const saved = localStorage.getItem('selyron_lang');
    if (saved === 'zh' || saved === 'en') return saved;
    const navLang = navigator.language.toLowerCase();
    return navLang.startsWith('zh') ? 'zh' : 'en';
  });

  const [page, setPageState] = useState<PageId>(() => {
    const hash = window.location.hash.replace('#', '') as PageId;
    if (['home', 'services', 'projects', 'about', 'contact'].includes(hash)) {
      return hash;
    }
    return 'home';
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('selyron_lang', newLang);
    document.documentElement.lang = newLang === 'zh' ? 'zh-CN' : 'en';
  };

  const setPage = (newPage: PageId) => {
    setPageState(newPage);
    window.location.hash = newPage === 'home' ? '' : newPage;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (['home', 'services', 'projects', 'about', 'contact'].includes(hash)) {
        setPageState(hash);
      } else if (!hash) {
        setPageState('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const t = lang === 'zh' ? zh : en;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, page, setPage }}>
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
