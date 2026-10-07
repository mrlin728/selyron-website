import React from 'react';
import { useApp } from '../context/LanguageContext';
import { WorkflowInquiryBuilder } from '../components/WorkflowInquiryBuilder';
import { Mail, Clock, ShieldCheck } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { lang, t } = useApp();

  const faqs = [
    {
      q: lang === 'zh' ? "首次咨询通常如何开展？" : "How does the initial scoping call work?",
      a: lang === 'zh'
        ? "我们通过一次 30-45 分钟的线上沟通，梳理你当前的人工操作步骤、涉及的软件 API 接口及数据流向。我会在沟通后提供一份包含范围界定、可行性评估及预算建议的架构草案。"
        : "We conduct a 30-45 minute technical review to map your manual steps, involved APIs, and exceptions. Following the session, I provide a clear architecture scoping document with feasibility and pricing."
    },
    {
      q: lang === 'zh' ? "企业商业数据与隐私如何得到保障？" : "How is our business data protected?",
      a: lang === 'zh'
        ? "所有生产级系统均支持签署商业保密协议 (NDA)。大模型接入采用零数据留存 (Zero Data Retention) 的企业级 API 方案，绝不使用你的企业数据进行公开训练。"
        : "All engagements include formal NDAs. We utilize enterprise Tier-1 API endpoints with zero data retention policies, guaranteeing your business data is never used to train public models."
    },
    {
      q: lang === 'zh' ? "一般的系统实施周期是多久？" : "What is the typical implementation timeline?",
      a: lang === 'zh'
        ? "针对单一明确的工作流自动化，通常在 2-3 周内即可完成开发、边界压力测试并上线交付；复杂的多智能体协同网络通常在 4-6 周内完成端到端交接。"
        : "A single, well-scoped workflow automation typically ships within 2-3 weeks including validation. Multi-agent distributed pipelines ship in 4-6 weeks with complete operator handover."
    }
  ];

  return (
    <div className="pt-28 pb-20 space-y-20">
      
      {/* 1. Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight mt-4 text-balance">
          {t.contact.title}
        </h1>
        <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-sans text-balance">
          {t.contact.subtitle}
        </p>
      </section>

      {/* 2. Interactive Form & Quick Direct Contact */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <WorkflowInquiryBuilder />

        {/* Quick Email Alternative Banner */}
        <div className="mt-8 p-6 rounded-2xl bg-[#0e131f]/80 border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center space-x-3 text-slate-300">
            <Mail className="w-5 h-5 text-indigo-400" />
            <div>
              <span className="text-slate-400 block font-sans">{t.contact.emailAlternative}</span>
              <a href="mailto:mrlin728@gmail.com" className="text-white hover:text-indigo-400 text-sm font-bold">
                mrlin728@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4 text-slate-400">
            <div className="flex items-center space-x-1.5 text-emerald-400">
              <Clock className="w-4 h-4" />
              <span>Response within 24h</span>
            </div>
            <div className="flex items-center space-x-1.5 text-indigo-400">
              <ShieldCheck className="w-4 h-4" />
              <span>NDA Protected</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
            {lang === 'zh' ? "常见问题" : "Frequently Asked Questions"}
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight mt-2">
            {lang === 'zh' ? "关于实施与合作方式" : "What To Expect"}
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-6 border border-white/[0.08] space-y-2 spotlight-card"
            >
              <h3 className="font-display text-base font-bold text-white flex items-center space-x-2">
                <span className="text-indigo-400 font-mono">Q:</span>
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pl-6 font-sans">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
