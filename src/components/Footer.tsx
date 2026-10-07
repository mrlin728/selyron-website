import React from 'react';
import { useApp } from '../context/LanguageContext';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenDiagnostic: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDiagnostic }) => {
  const { t } = useApp();

  return (
    <footer className="bg-white border-t border-slate-200 py-16 text-slate-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Operational Status Banner */}
        <div className="mb-12 p-4 bg-slate-50 border border-slate-200 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-status-pulse"></span>
            <span className="font-mono text-slate-800 font-medium">
              {t.footer.systemOperational}
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-500 font-mono text-[11px]">
            <span>UPTIME: 99.992%</span>
            <span>·</span>
            <span>REGION: ASIA-EAST-1 // GLOBAL VPC</span>
          </div>
        </div>

        {/* Links & Brand Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-200">
          
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 bg-slate-950 text-white rounded flex items-center justify-center font-mono font-bold text-xs">
                S
              </div>
              <span className="font-display font-bold text-base text-slate-950 tracking-tight">
                SELYRON
              </span>
            </div>
            <p className="text-slate-600 text-xs leading-relaxed max-w-sm mb-4">
              {t.footer.brandSummary}
            </p>
            <button
              onClick={onOpenDiagnostic}
              className="inline-flex items-center gap-1.5 font-mono text-xs text-slate-950 font-semibold hover:underline"
            >
              <span>{t.nav.scheduleReview}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-slate-950 font-semibold mb-3">
              {t.footer.navigation}
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#runtime" className="hover:text-slate-950 transition-colors">
                  {t.nav.runtime}
                </a>
              </li>
              <li>
                <a href="#architecture" className="hover:text-slate-950 transition-colors">
                  {t.nav.architecture}
                </a>
              </li>
              <li>
                <a href="#scenarios" className="hover:text-slate-950 transition-colors">
                  {t.nav.scenarios}
                </a>
              </li>
              <li>
                <a href="#security" className="hover:text-slate-950 transition-colors">
                  {t.nav.security}
                </a>
              </li>
            </ul>
          </div>

          {/* Trust & Security Column */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-slate-950 font-semibold mb-3">
              {t.footer.securityTitle}
            </h4>
            <ul className="space-y-2 font-mono text-[11px] text-slate-600">
              <li>SOC2 Type II Ready</li>
              <li>ISO / IEC 27001</li>
              <li>Sovereign VPC Deployable</li>
              <li>Zero Data Training Policy</li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-slate-500">
          <p>{t.footer.copyright}</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-800 cursor-pointer">Deterministic Execution Guarantee</span>
            <span className="hover:text-slate-800 cursor-pointer">SLA Terms</span>
            <span className="hover:text-slate-800 cursor-pointer">Security Ledger</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
