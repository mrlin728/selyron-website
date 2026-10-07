import React, { useState } from 'react';
import { useApp } from '../context/LanguageContext';
import { modelsData } from '../data/modelsData';
import { soundFx } from '../utils/sound';
import { ArrowUpRight, Clock, Layers } from 'lucide-react';

export const ModelGatewayMatrix: React.FC = () => {
  const { lang, t } = useApp();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { key: 'all', label: t.models.filters.all },
    { key: 'reasoning', label: t.models.filters.reasoning },
    { key: 'speed', label: t.models.filters.speed },
    { key: 'multimodal', label: t.models.filters.multimodal },
    { key: 'opensource', label: t.models.filters.opensource },
  ];

  const filteredModels = activeCategory === 'all'
    ? modelsData
    : modelsData.filter(m => m.category === activeCategory);

  return (
    <section className="py-20 bg-[#07080b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 block mb-2">
            {t.models.eyebrow}
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
            {t.models.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed font-sans">
            {t.models.subtitle}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => {
                soundFx.playClick();
                setActiveCategory(cat.key);
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono transition-all ${
                activeCategory === cat.key
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/25 font-semibold'
                  : 'bg-[#0e131f] text-slate-400 hover:text-white hover:bg-[#151c2a] border border-white/[0.08]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredModels.map((model, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover rounded-xl p-5 border border-obsidian-800 flex flex-col justify-between space-y-4 group"
            >
              <div>
                {/* Header: Provider & Category */}
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className="text-cyber-blue font-semibold uppercase tracking-wider">
                    {model.provider}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-obsidian-850 text-slate-400 text-[10px] border border-obsidian-800">
                    {model.category}
                  </span>
                </div>

                {/* Model Name */}
                <h3 className="text-base font-bold text-white group-hover:text-cyber-blue transition-colors flex items-center justify-between">
                  <span>{model.name}</span>
                  <a
                    href={model.docUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors p-1"
                    title="Official Docs"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </h3>

                {/* Best For Description */}
                <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                  {model.bestFor}
                </p>
              </div>

              {/* Bottom Metrics: Latency & Cost */}
              <div className="pt-3 border-t border-obsidian-850 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <div className="flex items-center space-x-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>Latency: <strong className="text-slate-200">{model.latency}</strong></span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-slate-400">Cost:</span>
                  <span className="text-emerald-400 font-bold">{model.costTier}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Context Banner */}
        <div className="mt-12 p-4 rounded-xl bg-obsidian-900 border border-obsidian-800 text-center text-xs font-mono text-slate-400 max-w-2xl mx-auto flex items-center justify-center space-x-2">
          <Layers className="w-4 h-4 text-cyber-blue flex-shrink-0" />
          <span>
            {lang === 'zh'
              ? "选择 → 评测 → 权限围栏 → 持续可观测。模型接入完全取决于企业实际业务场景与合规需求。"
              : "Selection → Evaluation → Permission Enclosure → Observability. Actual deployment tailored to enterprise security."}
          </span>
        </div>

      </div>
    </section>
  );
};
