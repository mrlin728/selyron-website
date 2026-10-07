import React from 'react';
import { useApp } from '../context/LanguageContext';
import { ThreeHeroCanvas } from '../components/ThreeHeroCanvas';
import { InteractiveWorkflowRunner } from '../components/InteractiveWorkflowRunner';
import { BlueprintShowcase } from '../components/BlueprintShowcase';
import { RoiCalculator } from '../components/RoiCalculator';
import { ModelGatewayMatrix } from '../components/ModelGatewayMatrix';
import { soundFx } from '../utils/sound';
import { 
  ArrowRight, ArrowUpRight, CheckCircle2, 
  Workflow, Database, Bot, Wrench, Terminal
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { lang, t, setPage } = useApp();

  const serviceIcons = [Workflow, Bot, Database, Wrench];

  const handleCtaClick = (target: string) => {
    soundFx.playClick();
    if (target === 'contact') {
      setPage('contact');
    } else if (target === 'projects') {
      setPage('projects');
    } else if (target === 'simulator') {
      const el = document.getElementById('workflow-simulator');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-24 sm:space-y-36 relative">
      
      {/* 1. HERO SECTION WITH THREE.JS CANVAS */}
      <section className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
        
        {/* Interactive 3D WebGL Canvas */}
        <ThreeHeroCanvas />

        {/* Ambient Radial Vignette for Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#07080b]/30 via-transparent to-[#07080b] pointer-events-none z-[1]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
          
          {/* Master Display Headline (Syne Typography) */}
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl xl:text-[5.25rem] font-bold tracking-tight text-white leading-[1.03] max-w-5xl mx-auto text-balance mt-4">
            {t.hero.titleLine1}{' '}
            <span className="text-white relative inline-block">
              {t.hero.titleLine2}
              <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500/80 to-transparent" />
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-8 text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-sans text-balance">
            {t.hero.description}
          </p>

          {/* Magnetic CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button
              onClick={() => handleCtaClick('contact')}
              onMouseEnter={() => soundFx.playHover()}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-blue-600 hover:from-indigo-500 hover:to-blue-500 border border-indigo-400/40 shadow-xl shadow-indigo-600/25 transition-all flex items-center justify-center space-x-2 group active:scale-95"
            >
              <span>{t.hero.ctaPrimary}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </button>

            <button
              onClick={() => handleCtaClick('simulator')}
              onMouseEnter={() => soundFx.playHover()}
              className="w-full sm:w-auto px-7 py-4 rounded-xl text-sm font-semibold text-slate-200 bg-[#0e131f]/90 hover:bg-[#151c2a] hover:text-white border border-white/[0.08] transition-all flex items-center justify-center space-x-2 shadow-sm"
            >
              <span>{t.hero.ctaSecondary}</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400" />
            </button>
          </div>

          {/* Live Telemetry Console (Replaces generic stats) */}
          <div className="mt-20 w-full max-w-5xl mx-auto">
            <div className="glass-panel rounded-2xl border border-white/[0.08] p-4 sm:p-5 shadow-2xl bg-[#090c13]/80 backdrop-blur-xl">
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pb-3 border-b border-white/[0.06] mb-4">
                <div className="flex items-center space-x-2 text-indigo-400">
                  <Terminal className="w-3.5 h-3.5" />
                  <span className="font-semibold uppercase tracking-wider">SYSTEM_TELEMETRY_MONITOR</span>
                </div>
                <div className="flex items-center space-x-3 text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>DETERMINISTIC GUARDRAILS ACTIVE</span>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
                {t.hero.stats.map((stat, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-[#0e131f]/70 border border-white/[0.04]">
                    <div className="font-mono text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-baseline">
                      <span>{stat.value}</span>
                    </div>
                    <div className="text-xs text-slate-400 mt-1 font-sans leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. LIVE INTERACTIVE WORKFLOW SIMULATOR */}
      <div id="workflow-simulator" className="scroll-mt-24">
        <InteractiveWorkflowRunner />
      </div>

      {/* 3. CORE IMPLEMENTATION PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 block mb-2">
              {t.services.eyebrow}
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
              {t.services.title}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-400 max-w-md leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.services.list.slice(0, 4).map((s, idx) => {
            const IconComponent = serviceIcons[idx] || Workflow;
            return (
              <div
                key={s.id}
                className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 border border-white/[0.07] flex flex-col justify-between space-y-6 group spotlight-card"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-[#0e131f] border border-white/[0.08] flex items-center justify-center text-indigo-400 group-hover:scale-110 group-hover:border-indigo-500/50 transition-all">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-slate-500 font-bold">
                      {s.num}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {s.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                    {s.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06]">
                  <button
                    onClick={() => {
                      soundFx.playClick();
                      setPage('services');
                    }}
                    className="text-xs text-indigo-400 group-hover:text-indigo-300 font-mono inline-flex items-center space-x-1"
                  >
                    <span>{t.services.learnMore}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. SOLUTION DESIGN BLUEPRINTS SANDBOX */}
      <BlueprintShowcase />

      {/* 5. THE PAIN POINTS SPECTRUM */}
      <section className="py-20 bg-[#090c13]/60 border-t border-b border-white/[0.06] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 block mb-2">
              {t.problems.eyebrow}
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
              {t.problems.title}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
              {t.problems.subtitle}
            </p>
          </div>

          <div className="space-y-3">
            {t.problems.items.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-2 rounded-xl border border-white/[0.07] overflow-hidden text-xs sm:text-sm"
              >
                {/* Manual Friction */}
                <div className="p-4 sm:p-5 bg-[#090c13]/90 border-b md:border-b-0 md:border-r border-white/[0.06] flex items-start space-x-3 text-slate-400">
                  <span className="text-rose-400 font-mono font-bold flex-shrink-0 mt-0.5">✕</span>
                  <span className="font-sans leading-relaxed">{item.before}</span>
                </div>

                {/* Selyron Automated Architecture */}
                <div className="p-4 sm:p-5 bg-[#0e131f]/90 flex items-start space-x-3 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="font-medium font-sans leading-relaxed">{item.after}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FEATURED DELIVERED PROJECTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 block mb-2">
              {t.projects.eyebrow}
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
              {t.projects.title}
            </h2>
          </div>
          <button
            onClick={() => {
              soundFx.playClick();
              setPage('projects');
            }}
            className="text-xs font-mono text-indigo-400 hover:text-white inline-flex items-center space-x-1"
          >
            <span>{lang === 'zh' ? "查看全部交付系统与架构详析" : "View All Systems & Architecture"}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {t.projects.items.map((p) => (
            <div
              key={p.id}
              className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 border border-white/[0.07] flex flex-col justify-between space-y-6 spotlight-card"
            >
              <div className="space-y-4">
                <span className="text-[11px] font-mono text-indigo-400 uppercase tracking-wider block">
                  {p.category}
                </span>
                
                <h3 className="font-display text-xl font-bold text-white">
                  {p.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {p.description}
                </p>

                {/* Pipeline Flow Stages */}
                <div className="pt-2">
                  <span className="text-[10px] font-mono uppercase text-slate-500 block mb-2">
                    {lang === 'zh' ? "工程流转阶段" : "Pipeline Flow"}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {p.flow.map((step, i) => (
                      <span key={i} className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#090c13] border border-white/[0.06] text-slate-300">
                        {step}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Metrics & Tech Badges */}
              <div className="space-y-4 pt-4 border-t border-white/[0.06]">
                <div className="grid grid-cols-3 gap-2 text-center">
                  {p.metrics.map((m, idx) => (
                    <div key={idx} className="bg-[#090c13]/80 p-2 rounded-lg border border-white/[0.04]">
                      <div className="text-xs font-bold text-white font-mono">{m.value}</div>
                      <div className="text-[9px] text-slate-400 mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {p.tech.map((tItem, idx) => (
                    <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0e131f] text-indigo-300 border border-white/[0.06]">
                      {tItem}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. INTERACTIVE ROI & HOURS SAVED CALCULATOR */}
      <RoiCalculator />

      {/* 8. GLOBAL FOUNDATION MODEL MATRIX */}
      <ModelGatewayMatrix />

      {/* 9. ENGINEERING METHODOLOGY */}
      <section className="py-20 bg-[#090c13]/50 border-t border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 block mb-2">
              {t.methodology.eyebrow}
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
              {t.methodology.title}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
              {t.methodology.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.methodology.steps.map((st) => (
              <div
                key={st.num}
                className="glass-panel rounded-2xl p-6 sm:p-7 border border-white/[0.07] space-y-3"
              >
                <div className="text-xl font-mono font-black text-indigo-400">
                  {st.num}
                </div>
                <h3 className="font-display text-base font-bold text-white">
                  {st.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FINAL CONVERSION CALLOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="relative rounded-3xl glass-panel border border-white/[0.09] p-8 sm:p-16 text-center overflow-hidden bg-gradient-to-b from-[#0e131f] to-[#07090e]">
          <div className="absolute inset-0 bg-radial-vignette opacity-50 pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 px-3 py-1 rounded-full bg-[#090c13] border border-emerald-500/30">
              {lang === 'zh' ? "从单点工作流开始" : "Start With One Workflow"}
            </span>
            
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
              {t.contact.title}
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
              {t.contact.subtitle}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => {
                  soundFx.playClick();
                  setPage('contact');
                }}
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-blue-600 hover:from-indigo-500 hover:to-blue-500 shadow-xl shadow-indigo-600/30 flex items-center justify-center space-x-2 active:scale-95 transition-all"
              >
                <span>{t.hero.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="mailto:mrlin728@gmail.com"
                className="w-full sm:w-auto px-7 py-4 rounded-xl text-sm font-mono text-slate-300 bg-[#090c13] border border-white/[0.08] hover:text-white hover:border-white/[0.2] transition-all flex items-center justify-center"
              >
                mrlin728@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
