import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { useApp } from '../context/LanguageContext';
import { 
  Scale, 
  ShieldAlert, 
  Clock, 
  CheckCircle2, 
  Zap, 
  Lock, 
  Check, 
  Download
} from 'lucide-react';

interface GuaranteePageProps {
  onOpenDiagnostic: () => void;
}

export const GuaranteePage: React.FC<GuaranteePageProps> = ({ onOpenDiagnostic }) => {
  const { t } = useApp();
  const [downloadMsa, setDownloadMsa] = useState(false);

  const commitments = [
    {
      icon: ShieldAlert,
      title: t.pages.guarantee.term1Title,
      desc: t.pages.guarantee.term1Desc,
      tag: "CORE WARRANTY"
    },
    {
      icon: Clock,
      title: t.pages.guarantee.term2Title,
      desc: t.pages.guarantee.term2Desc,
      tag: "UPTIME SLA"
    },
    {
      icon: Zap,
      title: t.pages.guarantee.term3Title,
      desc: t.pages.guarantee.term3Desc,
      tag: "PERFORMANCE SLA"
    },
    {
      icon: Lock,
      title: t.pages.guarantee.term4Title,
      desc: t.pages.guarantee.term4Desc,
      tag: "LEGAL COVENANT"
    }
  ];

  const creditTiers = [
    { uptime: t.pages.guarantee.tier1Uptime, credit: t.pages.guarantee.tier1Credit, action: "Automatic invoice credit applied next billing cycle" },
    { uptime: t.pages.guarantee.tier2Uptime, credit: t.pages.guarantee.tier2Credit, action: "Expedited executive review and operational root-cause analysis" },
    { uptime: t.pages.guarantee.tier3Uptime, credit: t.pages.guarantee.tier3Credit, action: "Customer option for immediate contract termination with zero penalty" }
  ];

  const supportTiers = [
    {
      name: t.pages.guarantee.tier1Name,
      time: t.pages.guarantee.tier1Time,
      channel: "24/7 Dedicated War Room Bridge + SMS Pager",
      personnel: "Forward-Deployed Staff Engineer & VP Engineering"
    },
    {
      name: t.pages.guarantee.tier2Name,
      time: t.pages.guarantee.tier2Time,
      channel: "Enterprise Slack / Teams Priority Channel",
      personnel: "Designated Technical Account Lead"
    },
    {
      name: t.pages.guarantee.tier3Name,
      time: t.pages.guarantee.tier3Time,
      channel: "Enterprise Support Desk Portal",
      personnel: "Tier-2 Operations Engineering"
    }
  ];

  return (
    <div className="bg-white text-slate-950 pb-20">
      <PageHeader
        eyebrow={t.pages.guarantee.eyebrow}
        title={t.pages.guarantee.title}
        subtitle={t.pages.guarantee.subtitle}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        
        {/* The Formal Guarantee Hero Callout */}
        <div className="mb-16 p-8 sm:p-10 bg-slate-900 text-white rounded-xl border border-slate-800 shadow-md">
          <div className="flex items-center gap-2.5 font-mono text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-4">
            <Scale className="w-4 h-4" />
            <span>CONTRACTUAL INDEMNIFICATION CLAUSE</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
            {t.pages.guarantee.guaranteeTitle}
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-4xl mb-6">
            {t.pages.guarantee.guaranteeBody}
          </p>

          <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center gap-6 font-mono text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>100% Service Fee Refund</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Up to $1,000,000 Liquidated Damages</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Direct Enterprise MSA Incorporation</span>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Commitments */}
        <div className="mb-20">
          <div className="mb-6">
            <span className="font-mono text-xs text-slate-500 uppercase tracking-wider font-semibold">
              PILLARS OF TRUST
            </span>
            <h2 className="text-2xl font-display font-bold text-slate-950 mt-1">
              {t.pages.guarantee.termsTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commitments.map((c, idx) => {
              const Icon = c.icon;
              return (
                <div key={idx} className="p-6 bg-slate-50/70 border border-slate-200 rounded-lg shadow-2xs">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-wider px-2 py-0.5 bg-white border border-slate-200 rounded">
                      {c.tag}
                    </span>
                    <Icon className="w-4 h-4 text-slate-700" />
                  </div>
                  <h3 className="font-display font-bold text-base text-slate-950 mb-2">
                    {c.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Service Credit Schedule Table */}
        <div className="mb-20">
          <div className="mb-6">
            <span className="font-mono text-xs text-slate-500 uppercase tracking-wider font-semibold">
              FINANCIAL REMEDIES
            </span>
            <h2 className="text-2xl font-display font-bold text-slate-950 mt-1">
              {t.pages.guarantee.creditTiersTitle}
            </h2>
          </div>

          <div className="border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
            <table className="w-full text-left font-mono text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-500">
                <tr>
                  <th className="py-3 px-4 font-semibold">Monthly Availability Interval</th>
                  <th className="py-3 px-4 font-semibold">Credit Entitlement</th>
                  <th className="py-3 px-4 font-semibold">Operational Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {creditTiers.map((tier, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70">
                    <td className="py-3.5 px-4 font-bold text-slate-950">{tier.uptime}</td>
                    <td className="py-3.5 px-4 font-semibold text-emerald-600">{tier.credit}</td>
                    <td className="py-3.5 px-4 text-slate-600">{tier.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Enterprise Support Tiers */}
        <div className="mb-20">
          <div className="mb-6">
            <span className="font-mono text-xs text-slate-500 uppercase tracking-wider font-semibold">
              INCIDENT RESPONSE
            </span>
            <h2 className="text-2xl font-display font-bold text-slate-950 mt-1">
              {t.pages.guarantee.supportTitle}
            </h2>
            <p className="text-xs text-slate-600 mt-1">
              {t.pages.guarantee.supportDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportTiers.map((st, idx) => (
              <div key={idx} className="p-6 bg-white border border-slate-200 rounded-lg shadow-2xs">
                <span className="font-mono text-[11px] font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded">
                  {st.time}
                </span>
                <h3 className="font-display font-bold text-base text-slate-950 mt-3 mb-2">
                  {st.name}
                </h3>
                <div className="space-y-2 font-mono text-[11px] text-slate-500 border-t border-slate-100 pt-3">
                  <div>
                    <span className="text-slate-400 block">Bridge:</span>
                    <span className="text-slate-800">{st.channel}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Lead Responder:</span>
                    <span className="text-slate-800">{st.personnel}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Download MSA & Review CTA */}
        <div className="p-8 sm:p-12 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-xl font-bold text-slate-950 mb-1">
              Request Master Services Agreement (MSA) Template
            </h3>
            <p className="text-xs text-slate-600 max-w-xl">
              Includes complete legal terms, formal mathematical proof of state convergence, and custom enterprise liability schedules.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setDownloadMsa(true);
                setTimeout(() => setDownloadMsa(false), 3000);
              }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-800 font-mono text-xs rounded hover:border-slate-300 shadow-2xs"
            >
              {downloadMsa ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Download className="w-3.5 h-3.5" />}
              <span>{downloadMsa ? "MSA Dispatched to Legal" : "Download Sample MSA"}</span>
            </button>

            <button
              onClick={onOpenDiagnostic}
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-950 text-white font-medium text-xs rounded hover:bg-slate-800 shadow-sm"
            >
              <span>Schedule Architecture Review</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
