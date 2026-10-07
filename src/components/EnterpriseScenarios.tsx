import React from 'react';
import { useApp } from '../context/LanguageContext';
import { TrendingUp, Clock, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

export const EnterpriseScenarios: React.FC = () => {
  const { t } = useApp();

  const cases = [
    {
      data: t.scenarios.case1,
      icon: Clock,
      statHighlight: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    },
    {
      data: t.scenarios.case2,
      icon: TrendingUp,
      statHighlight: 'bg-blue-50 text-blue-800 border-blue-200',
    },
    {
      data: t.scenarios.case3,
      icon: ShieldCheck,
      statHighlight: 'bg-purple-50 text-purple-800 border-purple-200',
    },
  ];

  return (
    <section id="scenarios" className="py-20 border-b border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-slate-900"></span>
            <p className="font-mono text-xs uppercase tracking-wider text-slate-500">
              {t.scenarios.eyebrow}
            </p>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-semibold text-slate-950 tracking-tight">
            {t.scenarios.title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            {t.scenarios.subtitle}
          </p>
        </div>

        {/* 3 Case Study Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cases.map((c, idx) => {
            const Icon = c.icon;
            return (
              <div
                key={idx}
                className="hairline-card p-6 sm:p-8 rounded-lg bg-white flex flex-col justify-between border border-slate-200 hover:border-slate-300 transition-all shadow-sm"
              >
                <div>
                  {/* Category Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 bg-slate-100 text-slate-700 rounded border border-slate-200">
                      {c.data.tag}
                    </span>
                    <Icon className="w-4 h-4 text-slate-400" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-slate-950 mb-4 leading-snug">
                    {c.data.title}
                  </h3>

                  {/* Challenge Statement */}
                  <div className="mb-4 p-3 bg-slate-50 rounded border border-slate-100 text-xs text-slate-600 leading-relaxed">
                    <strong className="text-slate-900 block mb-1 font-mono uppercase text-[10px] tracking-wider">
                      OPERATIONAL BOTTLENECK:
                    </strong>
                    {c.data.challenge}
                  </div>

                  {/* Outcome Statement */}
                  <div className="mb-6 text-xs text-slate-700 leading-relaxed flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{c.data.outcome}</span>
                  </div>
                </div>

                {/* Quantitative Metric Callout */}
                <div className={`mt-auto p-4 rounded-lg border ${c.statHighlight} flex items-center justify-between`}>
                  <div>
                    <p className="font-mono text-2xl font-bold tracking-tight">
                      {c.data.metricValue}
                    </p>
                    <p className="font-mono text-[11px] opacity-80 uppercase tracking-wider mt-0.5">
                      {c.data.metricLabel}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 opacity-40" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
