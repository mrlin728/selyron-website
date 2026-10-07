import React from 'react';
import { useApp } from '../context/LanguageContext';
import { Server, Lock, FileKey2, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const SecurityCompliance: React.FC = () => {
  const { t } = useApp();

  const pillars = [
    {
      data: t.security.pillar1,
      icon: Server,
    },
    {
      data: t.security.pillar2,
      icon: Lock,
    },
    {
      data: t.security.pillar3,
      icon: FileKey2,
    },
    {
      data: t.security.pillar4,
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="security" className="py-20 border-b border-slate-200 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-slate-900"></span>
            <p className="font-mono text-xs uppercase tracking-wider text-slate-500">
              {t.security.eyebrow}
            </p>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-semibold text-slate-950 tracking-tight">
            {t.security.title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            {t.security.subtitle}
          </p>
        </div>

        {/* 4 Security Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="hairline-card p-6 sm:p-8 rounded-lg bg-white border border-slate-200 hover:border-slate-300 transition-all shadow-sm"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded border border-slate-200 bg-slate-50 flex items-center justify-center text-slate-900">
                    <Icon className="w-5 h-5 text-slate-700" />
                  </div>
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 bg-slate-100 text-slate-600 rounded border border-slate-200">
                    {p.data.tag}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-slate-950 mb-2">
                  {p.data.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {p.data.desc}
                </p>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-mono text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>SOC2 & ISO 27001 AUDIT READY SPECIFICATION</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
