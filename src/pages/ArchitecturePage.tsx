import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { useApp } from '../context/LanguageContext';
import { 
  Layers, 
  Cpu, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Server, 
  Lock, 
  RefreshCw, 
  Network, 
  Activity
} from 'lucide-react';

interface ArchitecturePageProps {
  onOpenDiagnostic: () => void;
}

export const ArchitecturePage: React.FC<ArchitecturePageProps> = ({ onOpenDiagnostic }) => {
  const { t } = useApp();
  const [activeTier, setActiveTier] = useState<number>(0);

  const tiers = [
    {
      index: "01",
      title: t.pages.architecture.ingressTitle,
      desc: t.pages.architecture.ingressDesc,
      protocols: ["Kafka 3.6+", "RabbitMQ", "gRPC 1.6+", "HTTP/2 Webhooks", "SAP RFC / BAPI Poller"],
      specs: [
        { label: "Idempotency Window", val: "72 hours configurable" },
        { label: "Ingress Dedup Latency", val: "< 1.8 ms" },
        { label: "Payload Max Size", val: "64 MB streaming" }
      ],
      icon: Network
    },
    {
      index: "02",
      title: t.pages.architecture.engineTitle,
      desc: t.pages.architecture.engineDesc,
      protocols: ["SQLite WAL", "Raft Consensus", "Finite State Machine", "Atomic Compensation Log"],
      specs: [
        { label: "State Transition P99", val: "< 4.2 ms" },
        { label: "Concurrency Model", val: "Actor-based isolation" },
        { label: "Durability Guarantee", val: "fsync on state boundary" }
      ],
      icon: Cpu
    },
    {
      index: "03",
      title: t.pages.architecture.gatewayTitle,
      desc: t.pages.architecture.gatewayDesc,
      protocols: ["vLLM Local Engine", "Ollama Host", "Anthropic Claude SDK", "OpenAI API", "HuggingFace TGI"],
      specs: [
        { label: "PII Token Redaction", val: "100% regex + NER local" },
        { label: "Schema Strictness", val: "Strict JSON Schema AST" },
        { label: "Fallback Latency", val: "< 45 ms switchover" }
      ],
      icon: ShieldCheck
    },
    {
      index: "04",
      title: t.pages.architecture.egressTitle,
      desc: t.pages.architecture.egressDesc,
      protocols: ["Two-Phase Commit (2PC)", "SHA-256 HMAC Sealer", "Kafka Producer", "Enterprise REST/SOAP"],
      specs: [
        { label: "Audit Hash Algorithm", val: "HMAC-SHA256 (FIPS 140-2)" },
        { label: "Egress Rollback Guard", val: "Automatic compensating tx" },
        { label: "External Connectors", val: "SAP, SFDC, Oracle, NetSuite" }
      ],
      icon: Layers
    }
  ];

  return (
    <div className="bg-white text-slate-950 pb-20">
      <PageHeader
        eyebrow={t.pages.architecture.eyebrow}
        title={t.pages.architecture.title}
        subtitle={t.pages.architecture.subtitle}
      />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        
        {/* Tier Selector & Inspector */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-200">
            <h2 className="font-mono text-xs uppercase tracking-wider text-slate-900 font-semibold flex items-center gap-2">
              <Activity className="w-4 h-4 text-emerald-600" />
              <span>4-Tier Execution Pipeline Inspector</span>
            </h2>
            <span className="font-mono text-xs text-slate-500">RUNTIME SPECIFICATION v2.4</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Tier Sidebar Tabs */}
            <div className="lg:col-span-4 space-y-2">
              {tiers.map((tier, idx) => {
                const Icon = tier.icon;
                const isActive = activeTier === idx;
                return (
                  <button
                    key={tier.index}
                    onClick={() => setActiveTier(idx)}
                    className={`w-full text-left p-4 rounded-lg border transition-all flex items-start gap-3.5 ${
                      isActive
                        ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className={`p-2 rounded ${isActive ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-700'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`font-mono text-[11px] font-semibold ${isActive ? 'text-emerald-400' : 'text-slate-400'}`}>
                          TIER {tier.index}
                        </span>
                      </div>
                      <div className={`font-medium text-xs mt-0.5 ${isActive ? 'text-white' : 'text-slate-900'}`}>
                        {tier.title}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Tier Technical Deep Dive */}
            <div className="lg:col-span-8 p-6 sm:p-8 bg-slate-50/70 border border-slate-200 rounded-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6">
                <div>
                  <span className="font-mono text-xs text-emerald-600 font-semibold">
                    TIER {tiers[activeTier].index} SPECIFICATION
                  </span>
                  <h3 className="text-xl font-bold font-display text-slate-950 mt-1">
                    {tiers[activeTier].title}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed mb-6">
                {tiers[activeTier].desc}
              </p>

              {/* Supported Protocols */}
              <div className="mb-6">
                <h4 className="font-mono text-xs uppercase tracking-wider text-slate-500 font-semibold mb-3">
                  Supported Protocols & Drivers
                </h4>
                <div className="flex flex-wrap gap-2">
                  {tiers[activeTier].protocols.map((proto) => (
                    <span
                      key={proto}
                      className="px-2.5 py-1 text-xs font-mono bg-white border border-slate-200 text-slate-800 rounded"
                    >
                      {proto}
                    </span>
                  ))}
                </div>
              </div>

              {/* Technical Performance Specs */}
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-slate-500 font-semibold mb-3">
                  Kernel Benchmarks & Thresholds
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {tiers[activeTier].specs.map((spec) => (
                    <div key={spec.label} className="p-3 bg-white border border-slate-200 rounded">
                      <div className="font-mono text-[11px] text-slate-500">{spec.label}</div>
                      <div className="font-mono text-xs font-bold text-slate-950 mt-1">{spec.val}</div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Forward-Deployed Topology & Resilience */}
        <div className="mb-16">
          <div className="mb-8">
            <span className="font-mono text-xs text-slate-500 uppercase tracking-wider font-semibold">
              02 // TOPOLOGY & AVAILABILITY
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-950 mt-1">
              {t.pages.architecture.topologyTitle}
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-2xl">
              {t.pages.architecture.topologyDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Sovereign VPC */}
            <div className="p-6 bg-white border border-slate-200 rounded-lg shadow-2xs hover:border-slate-300 transition-all">
              <div className="w-9 h-9 rounded bg-slate-100 flex items-center justify-center text-slate-800 mb-4">
                <Server className="w-4 h-4" />
              </div>
              <h3 className="font-display font-bold text-base text-slate-950 mb-2">
                {t.pages.architecture.vpcTitle}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {t.pages.architecture.vpcDesc}
              </p>
              <ul className="space-y-1.5 font-mono text-[11px] text-slate-500 border-t border-slate-100 pt-3">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span>Zero Public Ingress IP</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span>AWS PrivateLink / Azure ExpressRoute</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span>Customer Managed Keys (CMK)</span>
                </li>
              </ul>
            </div>

            {/* Air-Gapped On-Premises */}
            <div className="p-6 bg-white border border-slate-200 rounded-lg shadow-2xs hover:border-slate-300 transition-all">
              <div className="w-9 h-9 rounded bg-slate-100 flex items-center justify-center text-slate-800 mb-4">
                <Lock className="w-4 h-4" />
              </div>
              <h3 className="font-display font-bold text-base text-slate-950 mb-2">
                {t.pages.architecture.airgapTitle}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {t.pages.architecture.airgapDesc}
              </p>
              <ul className="space-y-1.5 font-mono text-[11px] text-slate-500 border-t border-slate-100 pt-3">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span>100% Offline Air-Gap Certified</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span>Embedded vLLM / Ollama Runtime</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span>Local SQLite WAL Cluster</span>
                </li>
              </ul>
            </div>

            {/* <500ms Regional Failover */}
            <div className="p-6 bg-white border border-slate-200 rounded-lg shadow-2xs hover:border-slate-300 transition-all">
              <div className="w-9 h-9 rounded bg-slate-100 flex items-center justify-center text-slate-800 mb-4">
                <RefreshCw className="w-4 h-4" />
              </div>
              <h3 className="font-display font-bold text-base text-slate-950 mb-2">
                {t.pages.architecture.failoverTitle}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {t.pages.architecture.failoverDesc}
              </p>
              <ul className="space-y-1.5 font-mono text-[11px] text-slate-500 border-t border-slate-100 pt-3">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span>Synchronous Raft WAL Replication</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span>Zero Split-Brain Consensus</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span>Automated Traffic Drain</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Hardware & Runtime Benchmark Profile */}
        <div className="mb-16 p-8 bg-slate-950 text-white rounded-xl">
          <div className="mb-8">
            <span className="font-mono text-xs text-emerald-400 uppercase tracking-wider font-semibold">
              03 // BENCHMARK PROFILE
            </span>
            <h2 className="text-xl sm:text-2xl font-display font-bold text-white mt-1">
              {t.pages.architecture.metricsTitle}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-4 bg-slate-900 border border-slate-800 rounded">
              <div className="font-mono text-xs text-slate-400">{t.pages.architecture.m1Label}</div>
              <div className="font-mono text-2xl font-bold text-emerald-400 mt-2">{t.pages.architecture.m1Val}</div>
              <div className="font-mono text-[11px] text-slate-500 mt-1">{t.pages.architecture.m1Sub}</div>
            </div>

            <div className="p-4 bg-slate-900 border border-slate-800 rounded">
              <div className="font-mono text-xs text-slate-400">{t.pages.architecture.m2Label}</div>
              <div className="font-mono text-2xl font-bold text-white mt-2">{t.pages.architecture.m2Val}</div>
              <div className="font-mono text-[11px] text-slate-500 mt-1">{t.pages.architecture.m2Sub}</div>
            </div>

            <div className="p-4 bg-slate-900 border border-slate-800 rounded">
              <div className="font-mono text-xs text-slate-400">{t.pages.architecture.m3Label}</div>
              <div className="font-mono text-2xl font-bold text-white mt-2">{t.pages.architecture.m3Val}</div>
              <div className="font-mono text-[11px] text-slate-500 mt-1">{t.pages.architecture.m3Sub}</div>
            </div>

            <div className="p-4 bg-slate-900 border border-slate-800 rounded">
              <div className="font-mono text-xs text-slate-400">{t.pages.architecture.m4Label}</div>
              <div className="font-mono text-2xl font-bold text-emerald-400 mt-2">{t.pages.architecture.m4Val}</div>
              <div className="font-mono text-[11px] text-slate-500 mt-1">{t.pages.architecture.m4Sub}</div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="p-8 sm:p-12 bg-slate-50 border border-slate-200 rounded-xl text-center">
          <h3 className="font-display text-2xl font-bold text-slate-950 mb-3">
            {t.pages.architecture.ctaTitle}
          </h3>
          <p className="text-sm text-slate-600 max-w-xl mx-auto mb-6">
            {t.pages.architecture.ctaDesc}
          </p>
          <button
            onClick={onOpenDiagnostic}
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-950 text-white font-medium text-xs rounded-md hover:bg-slate-800 transition-all shadow-sm"
          >
            <span>{t.pages.architecture.ctaButton}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
