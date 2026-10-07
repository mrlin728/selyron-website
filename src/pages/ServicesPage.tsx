import React from 'react';
import { useApp } from '../context/LanguageContext';
import { RoiCalculator } from '../components/RoiCalculator';
import { soundFx } from '../utils/sound';
import { 
  Workflow, Bot, Database, Wrench, Search, 
  ArrowRight, ShieldCheck, CheckCircle2, Terminal 
} from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const { lang, t, setPage } = useApp();

  const serviceIcons = [Workflow, Bot, Database, Wrench, Search];

  return (
    <div className="pt-28 pb-20 space-y-24">
      
      {/* 1. Services Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight mt-4 text-balance">
          {lang === 'zh' ? "锁定具体工作。我来构建系统。" : "Choose the work. I'll build the system."}
        </h1>
        <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-sans text-balance">
          {t.services.subtitle}
        </p>
      </section>

      {/* 2. Detailed 5 Services Offerings */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {t.services.list.map((item, idx) => {
          const IconComp = serviceIcons[idx] || Workflow;
          return (
            <div
              key={item.id}
              id={item.id}
              className="glass-panel glass-panel-hover rounded-2xl border border-white/[0.08] p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start spotlight-card"
            >
              {/* Left Column: Number & Title */}
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0e131f] border border-white/[0.08] flex items-center justify-center text-indigo-400">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    SERVICE {item.num}
                  </span>
                </div>

                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {item.title}
                </h2>

                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  {item.desc}
                </p>

                <div className="pt-2">
                  <button
                    onClick={() => {
                      soundFx.playClick();
                      setPage('contact');
                    }}
                    className="inline-flex items-center space-x-2 text-xs font-mono font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    <span>{t.services.discuss}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Right Column: Breakdown Cards */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
                {/* Where it fits */}
                <div className="p-4 bg-[#090c13]/80 rounded-xl border border-white/[0.06] space-y-2">
                  <span className="text-slate-400 uppercase tracking-wider block font-semibold">
                    {lang === 'zh' ? "适用业务场景" : "Where it fits"}
                  </span>
                  <p className="text-slate-200 leading-relaxed font-sans text-xs">
                    {item.fits}
                  </p>
                </div>

                {/* What I implement */}
                <div className="p-4 bg-[#090c13]/80 rounded-xl border border-white/[0.06] space-y-2">
                  <span className="text-emerald-400 uppercase tracking-wider block font-semibold">
                    {lang === 'zh' ? "我所交付的内容" : "What I implement"}
                  </span>
                  <p className="text-slate-200 leading-relaxed font-sans text-xs">
                    {item.delivers}
                  </p>
                </div>

                {/* A useful starting point */}
                <div className="p-4 bg-[#090c13]/80 rounded-xl border border-white/[0.06] space-y-2">
                  <span className="text-indigo-400 uppercase tracking-wider block font-semibold">
                    {lang === 'zh' ? "建议的起始切入点" : "Useful starting point"}
                  </span>
                  <p className="text-slate-200 leading-relaxed font-sans text-xs">
                    {item.start}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* 3. Governance & Quality Floor */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-2xl border border-white/[0.08] p-8 sm:p-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-display text-lg font-bold text-white">
              {lang === 'zh' ? "关键环节人工复核" : "Human-in-the-Loop"}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
              {lang === 'zh'
                ? "所有可能产生不可逆业务后果的动作（外部发送邮件、大额款项变更、合同提交），均强制保留人类审核把关卡点。"
                : "Any irreversible business consequence (external dispatch, financial commitment, binding agreement) is strictly gated by human verification."}
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="font-display text-lg font-bold text-white">
              {lang === 'zh' ? "结构化校验与容灾重试" : "Schema Validation & Retries"}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
              {lang === 'zh'
                ? "所有 AI 产出均经过 Zod / TypeScript 严格类型约束与幂等性保障。遭遇 API 抖动时自动进入有界退避重试或 Dead-Letter 告警队列。"
                : "All AI model outputs are enforced with strict Zod typing and idempotency keys, with bounded retries and dead-letter queue routing on network jitter."}
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <Terminal className="w-5 h-5" />
            </div>
            <h3 className="font-display text-lg font-bold text-white">
              {lang === 'zh' ? "数据隐私与零留存" : "Zero Data Retention"}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
              {lang === 'zh'
                ? "严守商业机密。全链路使用企业级零数据留存 (ZDR) API 接口，杜绝任何客户私域业务数据被用于公开大模型预训练。"
                : "Guaranteed business privacy. All model integrations leverage Tier-1 enterprise zero-retention endpoints to prevent proprietary data leakage."}
            </p>
          </div>
        </div>
      </section>

      {/* 4. ROI Calculator */}
      <RoiCalculator />

      {/* 5. Final CTA */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-display text-3xl font-bold text-white tracking-tight">
          {lang === 'zh' ? "准备好将重复工作变成自动化系统了吗？" : "Ready to automate your recurring workflows?"}
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
