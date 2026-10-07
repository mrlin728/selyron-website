import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { useApp } from '../context/LanguageContext';
import { 
  CheckCircle2, 
  ArrowRight, 
  Truck, 
  CreditCard, 
  HeartPulse, 
  Clock, 
  Workflow, 
  FileCheck2, 
  TerminalSquare,
  ShieldAlert,
  Flame,
  Award
} from 'lucide-react';

interface SolutionsPageProps {
  onOpenDiagnostic: () => void;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({ onOpenDiagnostic }) => {
  const { t } = useApp();

  const caseStudies = [
    {
      icon: Truck,
      tag: t.pages.solutions.cs1Tag,
      title: t.pages.solutions.cs1Title,
      challenge: t.pages.solutions.cs1Challenge,
      solution: t.pages.solutions.cs1Solution,
      results: [
        t.pages.solutions.cs1Result1,
        t.pages.solutions.cs1Result2,
        t.pages.solutions.cs1Result3
      ],
      stack: ["SAP ECC 6.0", "Oracle NetSuite", "Apache Kafka", "Selyron 2PC Connector"]
    },
    {
      icon: CreditCard,
      tag: t.pages.solutions.cs2Tag,
      title: t.pages.solutions.cs2Title,
      challenge: t.pages.solutions.cs2Challenge,
      solution: t.pages.solutions.cs2Solution,
      results: [
        t.pages.solutions.cs2Result1,
        t.pages.solutions.cs2Result2,
        t.pages.solutions.cs2Result3
      ],
      stack: ["Swift Alliance", "SEPA Core", "Dual-Custody HSM Gate", "SHA-256 HMAC Ledger"]
    },
    {
      icon: HeartPulse,
      tag: t.pages.solutions.cs3Tag,
      title: t.pages.solutions.cs3Title,
      challenge: t.pages.solutions.cs3Challenge,
      solution: t.pages.solutions.cs3Solution,
      results: [
        t.pages.solutions.cs3Result1,
        t.pages.solutions.cs3Result2,
        t.pages.solutions.cs3Result3
      ],
      stack: ["Local vLLM Cluster", "Claude 3.5 Sonnet", "HIPAA Vault", "PII Redaction Engine"]
    }
  ];

  const methodologyPhases = [
    {
      phase: "PHASE 01",
      duration: "WEEK 1",
      title: t.pages.solutions.phase1Title,
      desc: t.pages.solutions.phase1Desc,
      icon: FileCheck2
    },
    {
      phase: "PHASE 02",
      duration: "WEEK 2-3",
      title: t.pages.solutions.phase2Title,
      desc: t.pages.solutions.phase2Desc,
      icon: TerminalSquare
    },
    {
      phase: "PHASE 03",
      duration: "WEEK 4",
      title: t.pages.solutions.phase3Title,
      desc: t.pages.solutions.phase3Desc,
      icon: Workflow
    },
    {
      phase: "PHASE 04",
      duration: "ONGOING",
      title: t.pages.solutions.phase4Title,
      desc: t.pages.solutions.phase4Desc,
      icon: Award
    }
  ];

  return (
    <div className="bg-white text-slate-950 pb-20">
      <PageHeader
        eyebrow={t.pages.solutions.eyebrow}
        title={t.pages.solutions.title}
        subtitle={t.pages.solutions.subtitle}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        
        {/* Case Studies Grid */}
        <div className="space-y-12 mb-20">
          <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-wider text-slate-900 font-semibold">
              Production Validated Implementations
            </span>
            <span className="font-mono text-xs text-slate-500">FORTUNE 500 WORKLOADS</span>
          </div>

          {caseStudies.map((cs, idx) => {
            const Icon = cs.icon;
            return (
              <div 
                key={idx}
                className="p-6 sm:p-8 bg-white border border-slate-200 rounded-xl shadow-2xs hover:border-slate-300 transition-all"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-slate-100 rounded-lg text-slate-900">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-mono text-[11px] text-emerald-600 font-semibold uppercase tracking-wider">
                        {cs.tag}
                      </span>
                      <h3 className="text-xl font-display font-bold text-slate-950 mt-0.5">
                        {cs.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {cs.stack.map((item) => (
                      <span key={item} className="px-2 py-0.5 text-[11px] font-mono bg-slate-50 border border-slate-200 text-slate-600 rounded">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="p-4 bg-slate-50/60 border border-slate-200/80 rounded-lg">
                    <div className="font-mono text-[11px] uppercase tracking-wider text-slate-500 font-semibold mb-2">
                      Operational Challenge & Friction
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {cs.challenge}
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50/60 border border-slate-200/80 rounded-lg">
                    <div className="font-mono text-[11px] uppercase tracking-wider text-slate-500 font-semibold mb-2">
                      Selyron Deterministic Implementation
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {cs.solution}
                    </p>
                  </div>
                </div>

                {/* Quantitative Outcomes */}
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-wider text-slate-500 font-semibold mb-3">
                    Verified Production Impact
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {cs.results.map((res, rIdx) => (
                      <div key={rIdx} className="p-3 bg-emerald-50/50 border border-emerald-200/60 rounded flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span className="font-mono text-xs font-medium text-emerald-950">
                          {res}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Forward-Deployed Delivery Methodology */}
        <div className="mb-20">
          <div className="mb-8">
            <span className="font-mono text-xs text-slate-500 uppercase tracking-wider font-semibold">
              FORWARD-DEPLOYED DELIVERY
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-950 mt-1">
              {t.pages.solutions.methodologyTitle}
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-2xl">
              {t.pages.solutions.methodologyDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodologyPhases.map((phase, idx) => {
              const PhaseIcon = phase.icon;
              return (
                <div key={idx} className="p-6 bg-white border border-slate-200 rounded-lg shadow-2xs relative">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[11px] font-bold text-emerald-600">
                      {phase.phase}
                    </span>
                    <span className="font-mono text-[11px] text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {phase.duration}
                    </span>
                  </div>
                  <div className="p-2 bg-slate-100 rounded inline-block text-slate-800 mb-3">
                    <PhaseIcon className="w-4 h-4" />
                  </div>
                  <h3 className="font-display font-bold text-sm text-slate-950 mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {phase.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Enterprise Architecture Comparison Matrix */}
        <div className="mb-20 p-8 bg-slate-50 border border-slate-200 rounded-xl">
          <div className="mb-6">
            <h3 className="font-display text-xl font-bold text-slate-950">
              {t.pages.solutions.roiTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 bg-white border border-slate-200 rounded-lg">
              <div className="flex items-center gap-2 text-rose-600 font-mono text-xs font-semibold mb-2">
                <ShieldAlert className="w-4 h-4" />
                <span>Fragmented Custom Scripts</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t.pages.solutions.roiScript}
              </p>
            </div>

            <div className="p-5 bg-white border border-slate-200 rounded-lg">
              <div className="flex items-center gap-2 text-amber-600 font-mono text-xs font-semibold mb-2">
                <Flame className="w-4 h-4" />
                <span>Consumer Workflow Tools</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t.pages.solutions.roiN8n}
              </p>
            </div>

            <div className="p-5 bg-white border-2 border-emerald-500/80 rounded-lg shadow-sm">
              <div className="flex items-center gap-2 text-emerald-700 font-mono text-xs font-bold mb-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Selyron Deterministic Core</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                {t.pages.solutions.roiSelyron}
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 sm:p-12 bg-slate-950 text-white rounded-xl text-center">
          <h3 className="font-display text-2xl font-bold text-white mb-3">
            Deploy Selyron with Forward-Deployed Staff Engineers
          </h3>
          <p className="text-sm text-slate-400 max-w-xl mx-auto mb-6">
            We partner directly with enterprise IT and operations leadership to conduct on-site threat modeling and shadow validation.
          </p>
          <button
            onClick={onOpenDiagnostic}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-950 font-medium text-xs rounded-md hover:bg-slate-100 transition-all shadow-sm"
          >
            <span>{t.pages.solutions.ctaButton}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
