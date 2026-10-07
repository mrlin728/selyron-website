import React, { useState } from 'react';
import { useApp } from '../context/LanguageContext';
import { SelyronLogo } from './SelyronLogo';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenDiagnostic: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDiagnostic }) => {
  const { lang, setLang, t } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'zh' : 'en');
  };

  const navLinks = [
    { label: t.nav.runtime, href: '#runtime' },
    { label: t.nav.architecture, href: '#architecture' },
    { label: t.nav.scenarios, href: '#scenarios' },
    { label: t.nav.specs, href: '#specs' },
    { label: t.nav.security, href: '#security' },
    { label: t.nav.faq, href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Logo & Telemetry Indicator */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-2.5 group">
              <SelyronLogo size={28} />
              <span className="font-display font-bold text-lg text-slate-950 tracking-tight">
                SELYRON
              </span>
            </a>
            
            <div className="hidden sm:flex items-center gap-1.5 pl-3 border-l border-slate-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-status-pulse"></span>
              <span className="font-mono text-[11px] text-slate-500 tracking-wider">
                {t.nav.brandBadge}
              </span>
            </div>
          </div>

          {/* Desktop Navigation Anchors */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-medium text-slate-600 hover:text-slate-950 transition-colors tracking-normal"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="px-2.5 py-1 text-xs font-mono font-medium text-slate-600 hover:text-slate-950 hover:bg-slate-100 rounded border border-slate-200 transition-all"
              title="Toggle Language"
            >
              {t.nav.langToggle}
            </button>

            {/* Primary Review CTA */}
            <button
              onClick={onOpenDiagnostic}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium bg-slate-950 text-white hover:bg-slate-800 rounded-md shadow-sm transition-all"
            >
              <span>{t.nav.scheduleReview}</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleLanguage}
              className="px-2 py-1 text-xs font-mono text-slate-600 border border-slate-200 rounded"
            >
              {t.nav.langToggle}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-slate-600 hover:text-slate-950 rounded hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-4 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-700 py-1.5 hover:text-slate-950"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-slate-200">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDiagnostic();
              }}
              className="w-full text-center px-4 py-2 text-xs font-medium bg-slate-950 text-white rounded-md"
            >
              {t.nav.scheduleReview}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
