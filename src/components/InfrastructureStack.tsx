import React from 'react';
import { useApp } from '../context/LanguageContext';
import { ArrowDownToLine, GitMerge, Cpu, Database, Check, Layers } from 'lucide-react';

export const InfrastructureStack: React.FC = () => {
  const { t } = useApp();

  const tiers = [
    {
      data: t.tiers.tier1,
      icon: ArrowDownToLine,
      badgeColor: 'text-blue-700 bg-blue-50 border-blue-200',
    },
    {
      data: t.tiers.tier2,
      icon: GitMerge,
      badgeColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    },
    {
      data: t.tiers.tier3,
      icon: Cpu,
      badgeColor: 'text-purple-700 bg-purple-50 border-purple-200',
    },
    {
      data: t.tiers.tier4,
      icon: Database,
      badgeColor: 'text-slate-800 bg-slate-100 border-slate-300',
    },
  ];

  return (
    <section id="architecture" className="py-20 border-b border-slate-200 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-slate-900"></span>
            <p className="font-mono text-xs uppercase tracking-wider text-slate-500">
              {t.tiers.eyebrow}
            </p>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-semibold text-slate-950 tracking-tight">
            {t.tiers.title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            {t.tiers.subtitle}
          </p>
        </div>

        {/* 4-Tier Stack Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {tiers.map((tier, idx) => {
            const Icon = tier.icon;
            return (
              <div
                key={idx}
                className="hairline-card p-6 rounded-lg bg-white flex flex-col justify-between hover:border-slate-300 transition-all shadow-sm"
              >
                <div>
                  {/* Tier Number Pill */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-semibold text-slate-500">
                      {tier.data.number}
                    </span>
                    <div className="w-8 h-8 rounded border border-slate-200 bg-slate-50 flex items-center justify-center text-slate-700">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Tier Name */}
                  <h3 className="text-base font-semibold text-slate-900 mb-2 leading-snug">
                    {tier.data.name}
                  </h3>

                  {/* Tier Description */}
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {tier.data.desc}
                  </p>
                </div>

                {/* Protocols & Integrations Tag */}
                <div className="pt-4 border-t border-slate-100 mt-auto">
                  <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block mb-1">
                    ENGINEERED PROTOCOLS
                  </span>
                  <p className="font-mono text-[11px] text-slate-700 font-medium leading-relaxed bg-slate-50 p-2 rounded border border-slate-200/70">
                    {tier.data.protocols}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Architectural Principle Guarantee Strip */}
        <div className="mt-8 p-4 bg-white border border-slate-200 rounded-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <Layers className="w-4 h-4 text-slate-700" />
            <span className="font-mono text-slate-600">
              Zero In-Place Rewrites: Non-invasive sidecar and gateway hooks designed to preserve existing ERP stability.
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-500 font-mono text-[11px]">
            <span className="flex items-center gap-1">
              <Check className="w-3.5 h-3.5 text-emerald-600" /> State Isolation
            </span>
            <span className="flex items-center gap-1">
              <Check className="w-3.5 h-3.5 text-emerald-600" /> Distributed Locking
            </span>
            <span className="flex items-center gap-1">
              <Check className="w-3.5 h-3.5 text-emerald-600" /> Audit Parity
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
