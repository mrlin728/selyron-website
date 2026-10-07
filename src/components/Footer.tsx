import React, { useState, useEffect } from 'react';
import { useApp } from '../context/LanguageContext';
import { PageId } from '../types';
import { soundFx } from '../utils/sound';
import { Mail, ArrowUpRight, ShieldCheck, Terminal, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  const { lang, setLang, t, setPage } = useApp();
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toUTCString().slice(17, 25) + ' UTC');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleLinkClick = (id: PageId) => {
    soundFx.playClick();
    setPage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07080b] border-t border-white/[0.08] text-slate-400 font-sans pt-16 pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-10 lg:gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="md:col-span-2 lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-xl bg-[#0e131f] border border-white/[0.08] flex items-center justify-center">
                <span className="font-display font-black text-sm text-white">S</span>
              </div>
              <span className="font-display text-xl font-bold tracking-tight text-white">
                selyron<span className="text-indigo-400">.</span>
              </span>
            </div>
            
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed font-sans">
              {t.footer.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400 pt-2">
              <div className="flex items-center space-x-1.5 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Deterministic Fallbacks Active</span>
              </div>
              <span className="text-white/20">|</span>
              <div className="flex items-center space-x-1 text-indigo-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Human-in-the-Loop</span>
              </div>
              <span className="text-white/20">|</span>
              <div className="flex items-center space-x-1 text-slate-400">
                <Clock className="w-3 h-3" />
                <span>{time}</span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
              {t.footer.servicesTitle}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {t.services.list.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => handleLinkClick('services')}
                    className="hover:text-white transition-colors text-left"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
              {t.footer.exploreTitle}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleLinkClick('projects')}
                  className="hover:text-white transition-colors text-left"
                >
                  {t.projects.deliveredTitle}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('projects')}
                  className="hover:text-white transition-colors text-left"
                >
                  {t.projects.blueprintsTitle}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('about')}
                  className="hover:text-white transition-colors text-left"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <a
                  href="https://app.selyron.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center"
                >
                  <span>Client Workspace</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 text-slate-400" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
              {t.footer.contactTitle}
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              {lang === 'zh'
                ? "有想改进的流程？直接联系我探讨可行性与系统架构。"
                : "Have a workflow in mind? Let's discuss constraints and system architecture directly."}
            </p>
            <a
              href="mailto:mrlin728@gmail.com"
              className="inline-flex items-center space-x-2 text-sm text-indigo-400 hover:text-indigo-300 font-mono transition-colors pt-1"
            >
              <Mail className="w-4 h-4" />
              <span>mrlin728@gmail.com</span>
            </a>
            <div className="pt-2">
              <button
                onClick={() => handleLinkClick('contact')}
                className="text-xs px-3 py-1.5 rounded-xl bg-[#0e131f] border border-white/[0.08] text-slate-300 hover:text-white hover:border-white/[0.2] transition-all font-mono"
              >
                {t.nav.discussWorkflow} →
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 space-y-4 sm:space-y-0 font-mono">
          <div className="flex items-center space-x-2">
            <Terminal className="w-3.5 h-3.5 text-indigo-400" />
            <span>{t.footer.rights}</span>
          </div>

          <div className="flex items-center space-x-6">
            <span>{t.footer.builtWith}</span>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => {
                  soundFx.playClick();
                  setLang('en');
                }}
                className={`hover:text-white transition-colors ${lang === 'en' ? 'text-indigo-400 font-semibold' : ''}`}
              >
                English
              </button>
              <span>/</span>
              <button
                onClick={() => {
                  soundFx.playClick();
                  setLang('zh');
                }}
                className={`hover:text-white transition-colors ${lang === 'zh' ? 'text-indigo-400 font-semibold' : ''}`}
              >
                简体中文
              </button>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
