import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { InteractiveDagRunner } from '../components/InteractiveDagRunner';
import { InfrastructureStack } from '../components/InfrastructureStack';
import { EnterpriseScenarios } from '../components/EnterpriseScenarios';
import { ProtocolSpecs } from '../components/ProtocolSpecs';
import { SecurityCompliance } from '../components/SecurityCompliance';
import { FaqSection } from '../components/FaqSection';
import { useRouter } from '../context/RouterContext';
import { ArrowRight, ShieldCheck, Cpu, Code2, Scale } from 'lucide-react';

interface HomePageProps {
  onOpenDiagnostic: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenDiagnostic }) => {
  const { navigate } = useRouter();

  return (
    <div>
      <HeroSection onOpenDiagnostic={onOpenDiagnostic} />
      <InteractiveDagRunner />
      
      {/* Architecture Section with Deep Link */}
      <div>
        <InfrastructureStack />
        <div className="bg-slate-50 border-y border-slate-200 py-6 text-center">
          <button
            onClick={() => navigate('architecture')}
            className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-slate-800 hover:text-slate-950 px-4 py-2 bg-white border border-slate-200 rounded-md hover:border-slate-300 shadow-2xs transition-all"
          >
            <Cpu className="w-3.5 h-3.5 text-slate-500" />
            <span>Explore Complete Architecture Specification & Topology →</span>
          </button>
        </div>
      </div>

      {/* Enterprise Scenarios with Deep Link */}
      <div>
        <EnterpriseScenarios />
        <div className="bg-slate-50 border-y border-slate-200 py-6 text-center">
          <button
            onClick={() => navigate('solutions')}
            className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-slate-800 hover:text-slate-950 px-4 py-2 bg-white border border-slate-200 rounded-md hover:border-slate-300 shadow-2xs transition-all"
          >
            <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
            <span>View All Enterprise Case Studies & Delivery Methodology →</span>
          </button>
        </div>
      </div>

      {/* Protocol Specs with Deep Link */}
      <div>
        <ProtocolSpecs />
        <div className="bg-slate-50 border-y border-slate-200 py-6 text-center">
          <button
            onClick={() => navigate('specs')}
            className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-slate-800 hover:text-slate-950 px-4 py-2 bg-white border border-slate-200 rounded-md hover:border-slate-300 shadow-2xs transition-all"
          >
            <Code2 className="w-3.5 h-3.5 text-slate-500" />
            <span>Open Complete Protocol & SDK Reference Manual →</span>
          </button>
        </div>
      </div>

      {/* Security & Compliance with Deep Link */}
      <div>
        <SecurityCompliance />
        <div className="bg-slate-50 border-y border-slate-200 py-6 text-center">
          <button
            onClick={() => navigate('security')}
            className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-slate-800 hover:text-slate-950 px-4 py-2 bg-white border border-slate-200 rounded-md hover:border-slate-300 shadow-2xs transition-all"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Access Sovereign Security Portal & Live Audit Hash Verifier →</span>
          </button>
        </div>
      </div>

      {/* FAQ Section */}
      <FaqSection onOpenDiagnostic={onOpenDiagnostic} />

      {/* Bottom Legal & Guarantee Banner */}
      <div className="border-t border-slate-200 bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 p-1.5 px-3 bg-slate-50 border border-slate-200 rounded-full font-mono text-xs text-slate-600 mb-4">
            <Scale className="w-3.5 h-3.5 text-slate-800" />
            <span>Contractually Backed By The Selyron Master SLA</span>
          </div>
          <p className="text-xs text-slate-500 max-w-xl mx-auto mb-4">
            Every pipeline run on Selyron is mathematically verified against un-gated execution, backed by strict 99.992% uptime SLA and forward-deployed incident response.
          </p>
          <button
            onClick={() => navigate('guarantee')}
            className="font-mono text-xs text-slate-950 font-semibold underline underline-offset-4 hover:text-slate-700"
          >
            Read The Deterministic Execution Guarantee Terms →
          </button>
        </div>
      </div>
    </div>
  );
};
