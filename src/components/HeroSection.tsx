import React from 'react';
import { useApp } from '../context/LanguageContext';
import { ArrowRight, Terminal, Shield, Cpu, Activity, Database } from 'lucide-react';

interface HeroSectionProps {
  onOpenDiagnostic: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDiagnostic }) => {
  const { t } = useApp();

  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 border-b border-slate-200 bg-white overflow-hidden">
      
      {/* Background Micro-Grid */}
      <div className="absolute inset-0 bg-subtle-grid opacity-60 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Version & Architecture Tag */}
        <div className="flex items-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-slate-200 bg-slate-50 text-[11px] font-mono text-slate-700 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-status-pulse"></span>
            <span>{t.hero.versionBadge}</span>
          </div>
        </div>

        {/* Hero Main Headline */}
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-slate-950 tracking-tight leading-[1.08]">
            {t.hero.title}
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
            {t.hero.subtitle}
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              onClick={onOpenDiagnostic}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium bg-slate-950 text-white hover:bg-slate-800 rounded-md shadow-sm transition-all"
            >
              <span>{t.hero.startAssessment}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#runtime"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium bg-white text-slate-700 hover:text-slate-950 border border-slate-200 hover:border-slate-300 rounded-md transition-all shadow-sm"
            >
              <Terminal className="w-4 h-4 text-slate-500" />
              <span>{t.hero.inspectRuntime}</span>
            </a>
          </div>
        </div>

        {/* Telemetry Strip - 4 High-Density Engineering Metrics */}
        <div className="mt-16 pt-10 border-t border-slate-200 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          
          {/* Metric 1 */}
          <div className="p-4 bg-slate-50/70 rounded-lg border border-slate-200/90">
            <div className="flex items-center gap-2 text-slate-500 mb-1">
              <Activity className="w-3.5 h-3.5 text-emerald-600" />
              <span className="font-mono text-xs uppercase tracking-wider text-slate-500">Determinism</span>
            </div>
            <p className="font-mono text-lg sm:text-xl font-bold text-slate-950 tracking-tight">
              {t.telemetry.determinism.split(' ')[0]}
            </p>
            <p className="text-xs text-slate-600 mt-0.5">
              {t.telemetry.determinismSub}
            </p>
          </div>

          {/* Metric 2 */}
          <div className="p-4 bg-slate-50/70 rounded-lg border border-slate-200/90">
            <div className="flex items-center gap-2 text-slate-500 mb-1">
              <Cpu className="w-3.5 h-3.5 text-blue-600" />
              <span className="font-mono text-xs uppercase tracking-wider text-slate-500">Gateway Speed</span>
            </div>
            <p className="font-mono text-lg sm:text-xl font-bold text-slate-950 tracking-tight">
              {t.telemetry.latency.split(' ')[0]}
            </p>
            <p className="text-xs text-slate-600 mt-0.5">
              {t.telemetry.latencySub}
            </p>
          </div>

          {/* Metric 3 */}
          <div className="p-4 bg-slate-50/70 rounded-lg border border-slate-200/90">
            <div className="flex items-center gap-2 text-slate-500 mb-1">
              <Shield className="w-3.5 h-3.5 text-emerald-600" />
              <span className="font-mono text-xs uppercase tracking-wider text-slate-500">Fault Tolerance</span>
            </div>
            <p className="font-mono text-lg sm:text-xl font-bold text-slate-950 tracking-tight">
              {t.telemetry.reliability}
            </p>
            <p className="text-xs text-slate-600 mt-0.5">
              {t.telemetry.reliabilitySub}
            </p>
          </div>

          {/* Metric 4 */}
          <div className="p-4 bg-slate-50/70 rounded-lg border border-slate-200/90">
            <div className="flex items-center gap-2 text-slate-500 mb-1">
              <Database className="w-3.5 h-3.5 text-purple-600" />
              <span className="font-mono text-xs uppercase tracking-wider text-slate-500">Sovereignty</span>
            </div>
            <p className="font-mono text-lg sm:text-xl font-bold text-slate-950 tracking-tight">
              Private VPC Ready
            </p>
            <p className="text-xs text-slate-600 mt-0.5">
              {t.telemetry.deploymentSub}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
