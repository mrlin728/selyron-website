import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { PageId } from '../types';

interface RouterContextType {
  currentPage: PageId;
  navigate: (page: PageId, hash?: string) => void;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

const pathToPage: Record<string, PageId> = {
  '/': 'home',
  '/architecture': 'architecture',
  '/solutions': 'solutions',
  '/scenarios': 'solutions',
  '/specs': 'specs',
  '/docs': 'specs',
  '/security': 'security',
  '/guarantee': 'guarantee',
  '/sla': 'guarantee',
  '/diagnostic': 'diagnostic',
};

const pageToPath: Record<PageId, string> = {
  home: '/',
  architecture: '/architecture',
  solutions: '/solutions',
  specs: '/specs',
  security: '/security',
  guarantee: '/guarantee',
  diagnostic: '/diagnostic',
};

function getPageFromPath(pathname: string): PageId {
  const normalized = pathname.endsWith('/') && pathname.length > 1 ? pathname.slice(0, -1) : pathname;
  return pathToPage[normalized] || 'home';
}

export const RouterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<PageId>(() => {
    if (typeof window !== 'undefined') {
      return getPageFromPath(window.location.pathname);
    }
    return 'home';
  });

  useEffect(() => {
    const handlePopState = () => {
      const page = getPageFromPath(window.location.pathname);
      setCurrentPage(page);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (page: PageId, hash?: string) => {
    setCurrentPage(page);
    const targetPath = pageToPath[page] || '/';
    const fullUrl = hash ? `${targetPath}${hash}` : targetPath;

    if (window.location.pathname !== targetPath || window.location.hash !== (hash || '')) {
      window.history.pushState(null, '', fullUrl);
    }

    if (hash) {
      setTimeout(() => {
        const id = hash.replace(/^#/, '');
        const elem = document.getElementById(id);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  return (
    <RouterContext.Provider value={{ currentPage, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = (): RouterContextType => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
};
