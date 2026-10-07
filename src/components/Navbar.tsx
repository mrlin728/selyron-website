import React, { useState, useEffect } from 'react';
import { useApp } from '../context/LanguageContext';
import { PageId } from '../types';
import { soundFx } from '../utils/sound';
import { 
  ArrowRight, Menu, X, Volume2, VolumeX 
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { lang, setLang, t, page, setPage } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(soundFx.isSoundEnabled());
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const unsub = soundFx.subscribe(setSoundEnabled);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      unsub();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: t.nav.home },
    { id: 'services', label: t.nav.services },
    { id: 'projects', label: t.nav.projects },
    { id: 'about', label: t.nav.about },
    { id: 'contact', label: t.nav.contact },
  ];

  const handleNavClick = (id: PageId) => {
    soundFx.playClick();
    setPage(id);
    setMobileMenuOpen(false);
  };

  const handleToggleSound = () => {
    const nextState = soundFx.toggle();
    setSoundEnabled(nextState);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 pt-3 pointer-events-none transition-all duration-300">
      <div className={`max-w-7xl mx-auto rounded-2xl pointer-events-auto transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0b0f17]/85 backdrop-blur-xl border border-white/[0.08] shadow-[0_16px_40px_-12px_rgba(0,0,0,0.8)] py-3 px-4 sm:px-6' 
          : 'bg-[#07090e]/60 backdrop-blur-md border border-white/[0.04] py-4 px-4 sm:px-6'
      }`}>
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Studio Mark */}
          <div className="flex items-center space-x-4 sm:space-x-5">
            <button 
              onClick={() => handleNavClick('home')}
              className="flex items-center space-x-3 group text-left focus:outline-none"
              aria-label="Selyron Home"
            >
              <div className="relative w-9 h-9 rounded-xl bg-[#0e131f] border border-white/[0.08] flex items-center justify-center group-hover:border-indigo-500/50 transition-all shadow-inner">
                <div className="absolute inset-0 bg-indigo-500/10 rounded-xl blur-[8px] group-hover:bg-indigo-500/25 transition-all" />
                <span className="relative font-display font-black text-sm tracking-tighter text-white group-hover:text-indigo-300 transition-colors">
                  S
                </span>
                <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-[#07080b] animate-pulse" />
              </div>
              
              <div className="flex flex-col">
                <span className="font-display text-lg font-bold tracking-tight text-white flex items-center leading-tight">
                  selyron<span className="text-indigo-400">.</span>
                </span>
                <span className="text-[10px] text-slate-400 font-mono tracking-wider uppercase -mt-0.5 hidden sm:inline-block">
                  systems studio
                </span>
              </div>
            </button>

            {/* Live Telemetry Ping */}
            <div className="hidden lg:flex items-center space-x-2 px-3 py-1 rounded-full bg-[#0e131f]/90 border border-white/[0.06] text-xs font-mono text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-slate-300">CORE v2.8</span>
              <span className="text-white/20">/</span>
              <span className="text-emerald-400 font-semibold">ONLINE</span>
            </div>
          </div>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-1.5 bg-[#0a0d14]/70 p-1 rounded-xl border border-white/[0.04]">
            {navItems.map((item) => {
              const isActive = page === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  onMouseEnter={() => soundFx.playHover()}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium tracking-wide transition-all ${
                    isActive
                      ? 'text-white bg-[#151c2a] border border-white/[0.1] shadow-sm font-semibold'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Tools: Sound, Language, Contact CTA */}
          <div className="hidden md:flex items-center space-x-3">
            
            {/* Audio Toggle (Awwwards / FWA feature) */}
            <button
              onClick={handleToggleSound}
              title={soundEnabled ? "Mute interactive acoustic FX" : "Enable tactile sound FX"}
              aria-label="Sound effects toggle"
              className={`p-2 rounded-xl text-xs font-mono border transition-all flex items-center space-x-1.5 ${
                soundEnabled 
                  ? 'bg-indigo-950/50 border-indigo-500/40 text-indigo-300 shadow-sm shadow-indigo-500/10' 
                  : 'bg-[#0e131f] border-white/[0.06] text-slate-400 hover:text-slate-200'
              }`}
            >
              {soundEnabled ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-indigo-400" />
                  <div className="flex items-center space-x-0.5 h-3">
                    <span className="w-0.5 h-3 bg-indigo-400 animate-pulse rounded-full" />
                    <span className="w-0.5 h-2 bg-indigo-400 animate-pulse delay-75 rounded-full" />
                    <span className="w-0.5 h-2.5 bg-indigo-400 animate-pulse delay-150 rounded-full" />
                  </div>
                </>
              ) : (
                <VolumeX className="w-3.5 h-3.5 text-slate-500" />
              )}
            </button>

            {/* Language Switcher */}
            <div className="flex items-center bg-[#0e131f] border border-white/[0.06] rounded-xl p-0.5 text-xs font-mono">
              <button
                onClick={() => {
                  soundFx.playClick();
                  setLang('en');
                }}
                className={`px-2.5 py-1.5 rounded-lg transition-all ${
                  lang === 'en'
                    ? 'bg-indigo-600 text-white font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => {
                  soundFx.playClick();
                  setLang('zh');
                }}
                className={`px-2.5 py-1.5 rounded-lg transition-all ${
                  lang === 'zh'
                    ? 'bg-indigo-600 text-white font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                中文
              </button>
            </div>

            {/* Primary Action Button */}
            <button
              onClick={() => handleNavClick('contact')}
              onMouseEnter={() => soundFx.playHover()}
              className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-blue-600 hover:from-indigo-500 hover:to-blue-500 border border-indigo-400/30 transition-all shadow-md shadow-indigo-600/20 flex items-center space-x-1.5 group active:scale-95"
            >
              <span>{t.nav.discussWorkflow}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={handleToggleSound}
              className="p-2 rounded-lg bg-[#0e131f] border border-white/[0.06] text-slate-400"
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-indigo-400" /> : <VolumeX className="w-4 h-4" />}
            </button>
            
            <button
              onClick={() => {
                soundFx.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="p-2 rounded-lg bg-[#0e131f] border border-white/[0.06] text-slate-300 hover:text-white"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 rounded-2xl bg-[#0b0f17]/95 backdrop-blur-2xl border border-white/[0.08] p-5 shadow-2xl pointer-events-auto animate-in fade-in duration-200">
          <nav className="flex flex-col space-y-2 mb-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-3 rounded-xl text-sm font-medium text-left transition-all ${
                  page === item.id
                    ? 'text-white bg-indigo-600/20 border border-indigo-500/30 font-semibold'
                    : 'text-slate-300 hover:bg-white/[0.04]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
            <div className="flex items-center space-x-1 bg-[#0e131f] border border-white/[0.06] rounded-xl p-0.5 text-xs font-mono">
              <button
                onClick={() => {
                  soundFx.playClick();
                  setLang('en');
                }}
                className={`px-3 py-1.5 rounded-lg ${lang === 'en' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-400'}`}
              >
                EN
              </button>
              <button
                onClick={() => {
                  soundFx.playClick();
                  setLang('zh');
                }}
                className={`px-3 py-1.5 rounded-lg ${lang === 'zh' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-400'}`}
              >
                中文
              </button>
            </div>

            <button
              onClick={() => handleNavClick('contact')}
              className="px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 flex items-center space-x-1.5"
            >
              <span>{t.nav.discussWorkflow}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
