import React, { useState } from 'react';
import { useApp } from '../context/LanguageContext';
import { soundFx } from '../utils/sound';
import { 
  FileSearch, FileSpreadsheet, Network, ShieldCheck, 
  Search, Check, AlertTriangle, Cpu
} from 'lucide-react';

export const BlueprintShowcase: React.FC = () => {
  const { lang, t } = useApp();
  const [activeTab, setActiveTab] = useState<'knowledge' | 'document' | 'gateway'>('knowledge');

  // Knowledge Copilot State
  const [selectedKbQuery, setSelectedKbQuery] = useState(0);
  const kbQueries = [
    {
      q: lang === 'zh' ? "遇到仓储包装破损异常该如何处理？" : "How should packaging moisture seal exceptions be handled?",
      ans: lang === 'zh' 
        ? "根据《仓储操作 SOP 2026.3》第 4.2 条，外包装破损即使传感器读数正常，亦严禁直接入库。须在 30 分钟内创建二次质检特批工单，由厂区 QA 主管签署放行意见。" 
        : "According to SOP §4.2 (Warehouse Protocol 2026.3), moisture seal breaches must NOT be admitted directly regardless of sensor state. A Secondary QA exception ticket must be signed off by the Plant QA Director within 30 minutes.",
      sources: [
        { doc: "Warehouse SOP Manual v2026.3", section: "§ 4.2 Moisture & Integrity", confidence: "99.8%" },
        { doc: "Supplier Warranty Master Agreement", section: "§ 12.1 Defect Protocols", confidence: "97.4%" }
      ]
    },
    {
      q: lang === 'zh' ? "大额客户信用额度超期审批流程是怎样的？" : "What is the authorization protocol for client credit limit extensions?",
      ans: lang === 'zh'
        ? "根据《财务风险控制规范》第 8 条：超额 5 万美元以上且账期逾期超过 14 天的客户，冻结自动发货接口。须经由财务总监与区域业务副总裁双重数字签名解锁。"
        : "Per Financial Risk Guidelines §8: Credit extensions exceeding $50,000 with >14 days past-due trigger automated shipping hold. Release requires dual cryptographic approval from CFO and Regional VP.",
      sources: [
        { doc: "Financial Risk & Credit Policy v4", section: "§ 8.3 Dual-Authorization", confidence: "99.5%" }
      ]
    }
  ];

  // Gateway Simulation State
  const [gatewayPriority, setGatewayPriority] = useState<'balanced' | 'speed' | 'deep'>('balanced');

  return (
    <section className="py-20 bg-obsidian-900/50 border-t border-b border-obsidian-850 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 block mb-2">
            {t.projects.blueprintsTitle}
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
            {lang === 'zh' ? "方案设计蓝图与交互沙盒" : "Solution Architecture Blueprints"}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed font-sans">
            {lang === 'zh' 
              ? "三套原创架构方案。交互探索真实业务场景下的系统架构设计、数据流向与边界控制。" 
              : "Three original enterprise architecture studies. Explore the interactive sandbox, data flows, and safety boundaries."}
          </p>
        </div>

        {/* Blueprint Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button
            onClick={() => {
              soundFx.playClick();
              setActiveTab('knowledge');
            }}
            className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center space-x-2.5 ${
              activeTab === 'knowledge'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/25 border border-indigo-400/40'
                : 'bg-[#0e131f] text-slate-400 hover:text-white border border-white/[0.08]'
            }`}
          >
            <FileSearch className="w-4 h-4" />
            <span className="font-mono">KB / 01 · {t.projects.blueprints[0].title}</span>
          </button>

          <button
            onClick={() => {
              soundFx.playClick();
              setActiveTab('document');
            }}
            className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center space-x-2.5 ${
              activeTab === 'document'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/25 border border-indigo-400/40'
                : 'bg-[#0e131f] text-slate-400 hover:text-white border border-white/[0.08]'
            }`}
          >
            <FileSpreadsheet className="w-4 h-4" />
            <span className="font-mono">DOC / 02 · {t.projects.blueprints[1].title}</span>
          </button>

          <button
            onClick={() => {
              soundFx.playClick();
              setActiveTab('gateway');
            }}
            className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center space-x-2.5 ${
              activeTab === 'gateway'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/25 border border-indigo-400/40'
                : 'bg-[#0e131f] text-slate-400 hover:text-white border border-white/[0.08]'
            }`}
          >
            <Network className="w-4 h-4" />
            <span className="font-mono">AI / 03 · {t.projects.blueprints[2].title}</span>
          </button>
        </div>

        {/* Tab 1: Knowledge Copilot Sandbox */}
        {activeTab === 'knowledge' && (
          <div className="glass-panel rounded-2xl border border-obsidian-750 p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 animate-fadeIn">
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center space-x-2 text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-3 py-1 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Zero Hallucination · Strict Grounding</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                {t.projects.blueprints[0].title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {t.projects.blueprints[0].desc}
              </p>

              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono uppercase text-slate-400">
                  {lang === 'zh' ? "尝试选择测试查询：" : "Select Sample Query to Test:"}
                </span>
                <div className="space-y-2">
                  {kbQueries.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedKbQuery(idx)}
                      className={`w-full text-left p-3 rounded-lg text-xs font-mono transition-all border ${
                        selectedKbQuery === idx
                          ? 'bg-obsidian-800 text-cyber-blue border-cyber-blue/50 shadow-sm'
                          : 'bg-obsidian-950/60 text-slate-400 hover:text-slate-200 border-obsidian-800'
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <Search className="w-3.5 h-3.5 flex-shrink-0" />
                        <span className="truncate">{item.q}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {t.projects.blueprints[0].tags.map((tag, i) => (
                  <span key={i} className="text-xs px-2.5 py-1 rounded bg-obsidian-800 text-slate-300 border border-obsidian-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Simulated Copilot Output Screen */}
            <div className="lg:col-span-7 bg-obsidian-950 rounded-xl border border-obsidian-800 p-5 sm:p-6 flex flex-col justify-between space-y-4 shadow-inner">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-obsidian-850 pb-3">
                  <span className="text-cyber-blue">RAG_INFERENCE_TERMINAL</span>
                  <span className="text-emerald-400 flex items-center">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse mr-1.5" />
                    Verified Grounded
                  </span>
                </div>

                <div className="p-3 bg-obsidian-900 rounded-lg border border-obsidian-800 text-xs text-slate-300">
                  <span className="text-slate-400 block text-[11px] font-mono mb-1">
                    {lang === 'zh' ? "用户提问:" : "Query:"}
                  </span>
                  <strong className="text-white text-sm">{kbQueries[selectedKbQuery].q}</strong>
                </div>

                <div className="p-4 bg-obsidian-900/90 rounded-lg border border-cyber-blue/30 space-y-2">
                  <span className="text-cyber-blue block text-[11px] font-mono font-semibold">
                    {lang === 'zh' ? "智能助手合成答复:" : "Synthesized Answer with Exact Citations:"}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {kbQueries[selectedKbQuery].ans}
                  </p>
                </div>
              </div>

              {/* Citations list */}
              <div className="pt-3 border-t border-obsidian-850 space-y-2">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                  {lang === 'zh' ? "可追溯权威文档来源：" : "Grounded Document Passages Cited:"}
                </span>
                <div className="space-y-1.5">
                  {kbQueries[selectedKbQuery].sources.map((src, i) => (
                    <div key={i} className="flex items-center justify-between p-2 rounded bg-obsidian-900/60 border border-obsidian-800 text-xs font-mono text-slate-300">
                      <div className="flex items-center space-x-2">
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{src.doc} <span className="text-cyber-blue">({src.section})</span></span>
                      </div>
                      <span className="text-emerald-400 text-[11px] font-semibold">{src.confidence}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Document Intelligence Pipeline Sandbox */}
        {activeTab === 'document' && (
          <div className="glass-panel rounded-2xl border border-obsidian-750 p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 animate-fadeIn">
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center space-x-2 text-xs font-mono text-cyber-blue bg-blue-950/40 border border-blue-500/30 px-3 py-1 rounded-full">
                <Cpu className="w-3.5 h-3.5" />
                <span>Multimodal Vision & Schema Extraction</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                {t.projects.blueprints[1].title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {t.projects.blueprints[1].desc}
              </p>

              <div className="p-4 bg-obsidian-950/80 rounded-xl border border-obsidian-800 space-y-2 text-xs font-mono">
                <div className="text-slate-400 font-semibold mb-2">
                  {lang === 'zh' ? "核心校验流水线规则：" : "Validation Ruleset:"}
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>Mathematical Checksum</span>
                  <span className="text-emerald-400">PASSED (Qty × Price = Total)</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>Tax ID Format (VIES / IRS)</span>
                  <span className="text-emerald-400">VALIDATED</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>ERP Duplicate Check</span>
                  <span className="text-emerald-400">UNIQUE_RECORD</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {t.projects.blueprints[1].tags.map((tag, i) => (
                  <span key={i} className="text-xs px-2.5 py-1 rounded bg-obsidian-800 text-slate-300 border border-obsidian-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Extracted Schema Preview */}
            <div className="lg:col-span-7 bg-obsidian-950 rounded-xl border border-obsidian-800 p-5 sm:p-6 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-obsidian-850 pb-3">
                <span className="text-cyber-blue">STRUCTURED_SCHEMA_VIEWER</span>
                <span className="text-xs px-2 py-0.5 rounded bg-amber-950/60 border border-amber-500/30 text-amber-300 flex items-center">
                  <AlertTriangle className="w-3 h-3 mr-1" />
                  1 Field Needs Review
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono">
                  <thead>
                    <tr className="border-b border-obsidian-800 text-slate-400">
                      <th className="pb-2">Field</th>
                      <th className="pb-2">Extracted Value</th>
                      <th className="pb-2">Confidence</th>
                      <th className="pb-2 text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-obsidian-850 text-slate-200">
                    <tr>
                      <td className="py-2.5 text-slate-400">Invoice ID</td>
                      <td className="py-2.5 font-bold">INV-2026-9041</td>
                      <td className="py-2.5 text-emerald-400">99.9%</td>
                      <td className="py-2.5 text-right text-emerald-400">Auto-Pass</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 text-slate-400">Vendor</td>
                      <td className="py-2.5">Global Precision Logistics GmbH</td>
                      <td className="py-2.5 text-emerald-400">99.7%</td>
                      <td className="py-2.5 text-right text-emerald-400">Auto-Pass</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 text-slate-400">Net Amount</td>
                      <td className="py-2.5">EUR 42,850.00</td>
                      <td className="py-2.5 text-emerald-400">99.9%</td>
                      <td className="py-2.5 text-right text-emerald-400">Auto-Pass</td>
                    </tr>
                    <tr className="bg-amber-950/20">
                      <td className="py-2.5 text-amber-300">Payment Term</td>
                      <td className="py-2.5 font-bold text-amber-200">Net 45 (PO states Net 30)</td>
                      <td className="py-2.5 text-amber-400">92.1%</td>
                      <td className="py-2.5 text-right text-amber-400 font-bold">Review Flag</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-3 bg-obsidian-900 rounded-lg border border-obsidian-800 text-xs font-mono text-slate-300 flex items-center justify-between">
                <span>Direct Commit to ERP:</span>
                <span className="text-amber-400">PAUSED until Net 45 variance confirmed by buyer</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Multi-Model Agent Gateway Sandbox */}
        {activeTab === 'gateway' && (
          <div className="glass-panel rounded-2xl border border-obsidian-750 p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 animate-fadeIn">
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center space-x-2 text-xs font-mono text-violet-400 bg-violet-950/40 border border-violet-500/30 px-3 py-1 rounded-full">
                <Network className="w-3.5 h-3.5" />
                <span>Dynamic Policy Router & Telemetry</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                {t.projects.blueprints[2].title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {t.projects.blueprints[2].desc}
              </p>

              {/* Priority Selector */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono uppercase text-slate-400">
                  {lang === 'zh' ? "选择调度策略模式：" : "Select Gateway Routing Policy:"}
                </span>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setGatewayPriority('speed')}
                    className={`p-2.5 rounded-lg text-xs font-mono text-center border transition-all ${
                      gatewayPriority === 'speed'
                        ? 'bg-cyber-blue text-white border-blue-400'
                        : 'bg-obsidian-900 text-slate-400 hover:text-white border-obsidian-800'
                    }`}
                  >
                    {lang === 'zh' ? "成本与极速" : "Cost & Speed"}
                  </button>
                  <button
                    onClick={() => setGatewayPriority('balanced')}
                    className={`p-2.5 rounded-lg text-xs font-mono text-center border transition-all ${
                      gatewayPriority === 'balanced'
                        ? 'bg-cyber-blue text-white border-blue-400'
                        : 'bg-obsidian-900 text-slate-400 hover:text-white border-obsidian-800'
                    }`}
                  >
                    {lang === 'zh' ? "智能平衡" : "Balanced"}
                  </button>
                  <button
                    onClick={() => setGatewayPriority('deep')}
                    className={`p-2.5 rounded-lg text-xs font-mono text-center border transition-all ${
                      gatewayPriority === 'deep'
                        ? 'bg-cyber-blue text-white border-blue-400'
                        : 'bg-obsidian-900 text-slate-400 hover:text-white border-obsidian-800'
                    }`}
                  >
                    {lang === 'zh' ? "深度推理" : "Deep Logic"}
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {t.projects.blueprints[2].tags.map((tag, i) => (
                  <span key={i} className="text-xs px-2.5 py-1 rounded bg-obsidian-800 text-slate-300 border border-obsidian-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Simulated Gateway Routing Logic */}
            <div className="lg:col-span-7 bg-obsidian-950 rounded-xl border border-obsidian-800 p-5 sm:p-6 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-obsidian-850 pb-3">
                <span className="text-violet-400">TELEMETRY_ROUTER_ACTIVE</span>
                <span>Policy: {gatewayPriority.toUpperCase()}</span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3 bg-obsidian-900 rounded-lg border border-obsidian-800">
                  <span className="text-slate-400 block text-[10px]">Routed Engine:</span>
                  <strong className="text-white text-sm block mt-1">
                    {gatewayPriority === 'speed' 
                      ? "Gemini 2.5 Flash / Grok" 
                      : gatewayPriority === 'deep'
                      ? "Claude 3.7 / DeepSeek R1"
                      : "DeepSeek V3 + Claude Check"}
                  </strong>
                </div>

                <div className="p-3 bg-obsidian-900 rounded-lg border border-obsidian-800">
                  <span className="text-slate-400 block text-[10px]">Estimated Latency:</span>
                  <strong className="text-emerald-400 text-sm block mt-1">
                    {gatewayPriority === 'speed' ? "280ms" : gatewayPriority === 'deep' ? "1,150ms" : "480ms"}
                  </strong>
                </div>
              </div>

              {/* Routing Path */}
              <div className="p-4 bg-obsidian-900/80 rounded-xl border border-obsidian-800 space-y-2.5 text-xs font-mono">
                <div className="text-slate-400 font-semibold">
                  {lang === 'zh' ? "策略决策链路：" : "Policy Execution Pipeline:"}
                </div>
                <div className="space-y-2 text-slate-300">
                  <div className="flex items-center space-x-2">
                    <span className="w-5 h-5 rounded bg-obsidian-950 flex items-center justify-center text-cyber-blue font-bold">1</span>
                    <span>Triage Request Token Complexity & Domain Sensitivity</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-5 h-5 rounded bg-obsidian-950 flex items-center justify-center text-cyber-blue font-bold">2</span>
                    <span>Enforce Budget Guardrail (Max $0.02 / transaction)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-5 h-5 rounded bg-obsidian-950 flex items-center justify-center text-emerald-400 font-bold">3</span>
                    <span>Dispatch Payload with Zero Data Retention Flag</span>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-emerald-950/20 border border-emerald-500/30 rounded-lg text-xs font-mono text-emerald-400 flex items-center justify-between">
                <span>Enterprise Token Optimization:</span>
                <span className="font-bold">~74% Savings vs Static Opus Routing</span>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
