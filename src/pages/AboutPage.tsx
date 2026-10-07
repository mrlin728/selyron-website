import React from 'react';
import { useApp } from '../context/LanguageContext';
import { soundFx } from '../utils/sound';
import { Mail, ArrowRight } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { lang, t, setPage } = useApp();

  const techStack = [
    {
      category: lang === 'zh' ? "AI 接口与模型工程" : "AI Integrations & Models",
      items: ["DeepSeek R1 / V3", "Claude 3.7", "Gemini 2.5 / 3.8", "OpenAI GPT-4o", "Qwen 2.5", "Structured Zod Schemas"]
    },
    {
      category: lang === 'zh' ? "自动化与任务队列" : "Automation & Queues",
      items: ["Workflow Orchestration", "PostgreSQL Job Queues", "pg_cron", "Bounded Retries", "Dead Letter Queues"]
    },
    {
      category: lang === 'zh' ? "数据底座与后端" : "Data & Backend",
      items: ["Supabase", "PostgreSQL", "Edge Functions", "Vector Embeddings", "RBAC Auth"]
    },
    {
      category: lang === 'zh' ? "企业系统与集成" : "Enterprise Integrations",
      items: ["REST APIs & Webhooks", "HubSpot / CRM", "Email Services", "Serper Web Scraping", "Custom Tool Calling"]
    },
    {
      category: lang === 'zh' ? "现代工程底座" : "Development Stack",
      items: ["TypeScript", "React", "Python", "Vite", "Tailwind CSS", "Vercel / Cloudflare"]
    }
  ];

  return (
    <div className="pt-28 pb-20 space-y-24">
      
      {/* 1. Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight mt-4 text-balance">
          {t.about.title}
        </h1>
        <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-sans text-balance">
          {t.about.subtitle}
        </p>
      </section>

      {/* 2. Story & Specialist Perspective */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-2xl border border-white/[0.08] p-8 sm:p-12 space-y-6 spotlight-card">
          <p className="font-display text-lg sm:text-2xl text-white font-bold leading-relaxed text-balance">
            {t.about.lead}
          </p>
          <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed pt-2 border-t border-white/[0.06] font-sans">
            {t.about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="pt-4 flex items-center space-x-3 text-xs font-mono text-slate-400">
            <Mail className="w-4 h-4 text-indigo-400" />
            <span>Direct Channel:</span>
            <a href="mailto:mrlin728@gmail.com" className="text-indigo-400 hover:text-indigo-300 underline font-semibold">
              mrlin728@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* 3. Three Core Engineering Principles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 block mb-2">
            {lang === 'zh' ? "核心工程信条" : "Engineering Principles"}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {lang === 'zh' ? "如何打造高可用、可持续的系统" : "How Systems Are Built To Last"}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.about.principles.map((p, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/[0.08] space-y-4 spotlight-card"
            >
              <div className="text-xs font-mono text-indigo-400 font-bold">
                PRINCIPLE 0{idx + 1}
              </div>
              <h3 className="font-display text-xl font-bold text-white">
                {p.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Inside the Implemented Tech Stack */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 block mb-2">
            {lang === 'zh' ? "技术底座" : "Infrastructure"}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {lang === 'zh' ? "实际交付所使用的工程栈" : "The Technologies Behind Implementations"}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {techStack.map((col, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-[#0e131f]/80 border border-white/[0.06] space-y-3">
              <h4 className="font-display text-xs font-bold text-slate-300">
                {col.category}
              </h4>
              <ul className="space-y-1.5 text-xs font-mono text-slate-400">
                {col.items.map((item, i) => (
                  <li key={i} className="flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/60" />
                    <span className="truncate">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Contact CTA */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-display text-3xl font-bold text-white tracking-tight">
          {lang === 'zh' ? "探讨你的自动化规划" : "Discuss Your Automation Roadmap"}
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
