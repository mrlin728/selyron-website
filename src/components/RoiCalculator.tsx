import React, { useState } from 'react';
import { useApp } from '../context/LanguageContext';
import { soundFx } from '../utils/sound';
import { TrendingUp, Clock, DollarSign, Users } from 'lucide-react';

export const RoiCalculator: React.FC = () => {
  const { lang, t } = useApp();
  const [teamSize, setTeamSize] = useState<number>(8);
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(10);
  const [hourlyRate, setHourlyRate] = useState<number>(45);

  // 85% of repetitive manual tasks can be automated
  const annualHoursAutomated = Math.round(teamSize * hoursPerWeek * 50 * 0.85);
  const annualCostSaved = Math.round(annualHoursAutomated * hourlyRate);

  return (
    <section className="py-20 bg-obsidian-950 border-t border-obsidian-850 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
            {t.calculator.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 font-sans">
            {t.calculator.subtitle}
          </p>
        </div>

        {/* Calculator Body */}
        <div className="max-w-4xl mx-auto glass-panel rounded-2xl border border-obsidian-800 p-6 sm:p-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Sliders Input Column */}
          <div className="md:col-span-7 space-y-6">
            
            {/* Slider 1: Team Size */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs sm:text-sm font-medium text-slate-300">
                <span className="flex items-center space-x-1.5">
                  <Users className="w-4 h-4 text-cyber-blue" />
                  <span>{t.calculator.teamSizeLabel}</span>
                </span>
                <span className="font-mono text-white font-bold bg-obsidian-900 px-2.5 py-0.5 rounded border border-obsidian-800">
                  {teamSize} {lang === 'zh' ? "人" : "members"}
                </span>
              </div>
              <input
                type="range"
                min="2"
                max="50"
                step="1"
                value={teamSize}
                onChange={(e) => {
                  soundFx.playHover();
                  setTeamSize(Number(e.target.value));
                }}
                className="w-full accent-indigo-500 bg-[#0e131f] h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-400">
                <span>2</span>
                <span>25</span>
                <span>50</span>
              </div>
            </div>

            {/* Slider 2: Hours Per Week */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs sm:text-sm font-medium text-slate-300">
                <span className="flex items-center space-x-1.5">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span>{t.calculator.hoursLabel}</span>
                </span>
                <span className="font-mono text-white font-bold bg-[#0e131f] px-2.5 py-0.5 rounded border border-white/[0.08]">
                  {hoursPerWeek} {lang === 'zh' ? "小时 / 周" : "hrs / wk"}
                </span>
              </div>
              <input
                type="range"
                min="2"
                max="25"
                step="1"
                value={hoursPerWeek}
                onChange={(e) => {
                  soundFx.playHover();
                  setHoursPerWeek(Number(e.target.value));
                }}
                className="w-full accent-emerald-500 bg-[#0e131f] h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-400">
                <span>2 hrs</span>
                <span>12 hrs</span>
                <span>25 hrs</span>
              </div>
            </div>

            {/* Slider 3: Hourly Rate */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs sm:text-sm font-medium text-slate-300">
                <span className="flex items-center space-x-1.5">
                  <DollarSign className="w-4 h-4 text-amber-400" />
                  <span>{t.calculator.hourlyRateLabel}</span>
                </span>
                <span className="font-mono text-white font-bold bg-[#0e131f] px-2.5 py-0.5 rounded border border-white/[0.08]">
                  ${hourlyRate}/hr
                </span>
              </div>
              <input
                type="range"
                min="20"
                max="120"
                step="5"
                value={hourlyRate}
                onChange={(e) => {
                  soundFx.playHover();
                  setHourlyRate(Number(e.target.value));
                }}
                className="w-full accent-amber-500 bg-[#0e131f] h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-400">
                <span>$20/hr</span>
                <span>$70/hr</span>
                <span>$120/hr</span>
              </div>
            </div>

          </div>

          {/* Results Display Column */}
          <div className="md:col-span-5 bg-obsidian-900/90 rounded-xl border border-obsidian-800 p-6 flex flex-col justify-between space-y-6 text-center">
            
            <div className="space-y-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
                  {t.calculator.annualHoursSaved}
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex items-center justify-center space-x-1">
                  <span>{annualHoursAutomated.toLocaleString()}</span>
                  <span className="text-sm font-normal text-slate-400">hrs/yr</span>
                </div>
              </div>

              <div className="pt-4 border-t border-obsidian-800">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
                  {t.calculator.annualCostSaved}
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 tracking-tight">
                  ${annualCostSaved.toLocaleString()}
                </div>
              </div>
            </div>

            <div className="p-3 bg-obsidian-950/70 rounded-lg border border-obsidian-800/80 text-[11px] font-mono text-slate-400">
              <TrendingUp className="w-4 h-4 text-emerald-400 inline mr-1" />
              <span>{t.calculator.roiMessage}</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
