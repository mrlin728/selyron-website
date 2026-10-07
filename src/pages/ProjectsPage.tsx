import React from 'react';
import { useApp } from '../context/LanguageContext';
import { BlueprintShowcase } from '../components/BlueprintShowcase';
import { soundFx } from '../utils/sound';
import { CheckCircle2, Activity, ArrowRight } from 'lucide-react';

export const ProjectsPage: React.FC = () => {
  const { lang, t, setPage } = useApp();

  return (
    <div className="pt-28 pb-20 space-y-24">
      
      {/* 1. Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight mt-4 text-balance">
          {lang === 'zh' ? "围绕真实业务，落地运行系统" : "Built Around Real Work."}
        </h1>
        <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-sans text-balance">
          {t.projects.subtitle}
        </p>
      </section>

      {/* 2. Delivered Systems In-Depth */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex items-center space-x-3 text-xs font-mono text-emerald-400">
          <Activity className="w-4 h-4" />
          <span className="uppercase tracking-widest">{t.projects.deliveredTitle}</span>
        </div>

        <div className="space-y-12">
          {t.projects.items.map((proj) => (
            <div
              key={proj.id}
              className="glass-panel glass-panel-hover rounded-2xl border border-white/[0.08] p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start spotlight-card"
            >
              {/* Left Column: Context, Scope, Description */}
              <div className="lg:col-span-6 space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-indigo-400 px-2.5 py-0.5 rounded bg-[#090c13] border border-white/[0.06]">
                    {proj.category}
                  </span>
                  <span className="text-xs font-mono text-emerald-400 flex items-center">
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                    Production Deployed
                  </span>
                </div>

                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {proj.title}
                </h2>

                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  {proj.description}
                </p>

                {/* Tech Badges */}
                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-mono uppercase text-slate-400 block">
                    {lang === 'zh' ? "核心技术栈" : "Integrated Stack"}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {proj.tech.map((tech, i) => (
                      <span key={i} className="text-xs font-mono px-2.5 py-1 rounded bg-[#090c13] text-slate-200 border border-white/[0.06]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Execution Flow & Quantified Metrics */}
              <div className="lg:col-span-6 bg-[#090c13]/90 rounded-2xl border border-white/[0.06] p-6 space-y-6">
                {/* Pipeline Flow Steps */}
                <div>
                  <span className="text-xs font-mono uppercase text-slate-400 block mb-3">
                    {lang === 'zh' ? "工作流处理阶段" : "Workflow Pipeline Stages"}
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {proj.flow.map((step, i) => (
                      <div
                        key={i}
                        className="p-2.5 rounded-xl bg-[#0e131f] border border-white/[0.06] text-xs font-mono text-slate-300 flex items-center space-x-2"
                      >
                        <span className="text-indigo-400 font-bold">0{i+1}</span>
                        <span className="truncate">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Impact Metrics */}
                <div className="pt-4 border-t border-white/[0.06]">
                  <span className="text-xs font-mono uppercase text-slate-400 block mb-3">
                    {lang === 'zh' ? "量化交付成果" : "Measured Impact"}
                  </span>
                  <div className="grid grid-cols-3 gap-3">
                    {proj.metrics.map((m, i) => (
                      <div key={i} className="p-3 rounded-xl bg-[#0e131f]/90 border border-white/[0.06] text-center">
                        <div className="text-base sm:text-lg font-mono font-bold text-white tracking-tight">
                          {m.value}
                        </div>
                        <div className="text-[10px] text-slate-400 mt-0.5 leading-tight font-sans">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Original Solution Architecture Studies (Blueprints Sandbox) */}
      <BlueprintShowcase />

      {/* 4. Contact Footer CTA */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-display text-3xl font-bold text-white tracking-tight">
          {lang === 'zh' ? "有定制工作流或集成需求？" : "Have a Custom Workflow or Integration?"}
        </h2>
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => {
              soundFx.playClick();
              setPage('contact');
            }}
            className="px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-500 shadow-xl shadow-indigo-600/25 flex items-center space-x-2"
          >
            <span>{t.hero.ctaPrimary}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
};
