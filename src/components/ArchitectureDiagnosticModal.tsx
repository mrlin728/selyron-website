import React, { useState } from 'react';
import { useApp } from '../context/LanguageContext';
import { DiagnosticFormData } from '../types';
import { X, CheckCircle2, ArrowRight, ArrowLeft, Send } from 'lucide-react';

interface DiagnosticModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ArchitectureDiagnosticModal: React.FC<DiagnosticModalProps> = ({ isOpen, onClose }) => {
  const { t } = useApp();
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState<DiagnosticFormData>({
    friction: 'friction1',
    deploymentEnv: 'env1',
    volume: 'vol2',
    workEmail: '',
    companyName: '',
    role: '',
    notes: '',
  });

  if (!isOpen) return null;

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.workEmail || !formData.companyName) return;
    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setCurrentStep(1);
    onClose();
  };

  const frictionOptions = [
    { id: 'friction1', text: t.diagnostic.options.friction1 },
    { id: 'friction2', text: t.diagnostic.options.friction2 },
    { id: 'friction3', text: t.diagnostic.options.friction3 },
    { id: 'friction4', text: t.diagnostic.options.friction4 },
  ];

  const envOptions = [
    { id: 'env1', text: t.diagnostic.options.env1 },
    { id: 'env2', text: t.diagnostic.options.env2 },
    { id: 'env3', text: t.diagnostic.options.env3 },
  ];

  const volOptions = [
    { id: 'vol1', text: t.diagnostic.options.vol1 },
    { id: 'vol2', text: t.diagnostic.options.vol2 },
    { id: 'vol3', text: t.diagnostic.options.vol3 },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      
      {/* Modal Surface */}
      <div className="relative w-full max-w-2xl bg-white rounded-xl border border-slate-200 shadow-2xl overflow-hidden">
        
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50/70">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-status-pulse"></span>
            <span className="font-mono text-xs uppercase tracking-wider text-slate-700 font-semibold">
              {t.diagnostic.title}
            </span>
          </div>

          <button
            onClick={handleResetAndClose}
            className="p-1 rounded text-slate-400 hover:text-slate-900 hover:bg-slate-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          
          {!isSubmitted ? (
            <>
              {/* Step Tracker Indicator */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                    currentStep >= 1 ? 'bg-slate-950 text-white' : 'bg-slate-200 text-slate-600'
                  }`}>
                    1
                  </span>
                  <span className={currentStep === 1 ? 'font-semibold text-slate-950' : 'text-slate-500'}>
                    Bottleneck
                  </span>
                </div>
                <div className="h-[1px] w-8 bg-slate-200"></div>
                <div className="flex items-center gap-2">
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                    currentStep >= 2 ? 'bg-slate-950 text-white' : 'bg-slate-200 text-slate-600'
                  }`}>
                    2
                  </span>
                  <span className={currentStep === 2 ? 'font-semibold text-slate-950' : 'text-slate-500'}>
                    Environment
                  </span>
                </div>
                <div className="h-[1px] w-8 bg-slate-200"></div>
                <div className="flex items-center gap-2">
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                    currentStep >= 3 ? 'bg-slate-950 text-white' : 'bg-slate-200 text-slate-600'
                  }`}>
                    3
                  </span>
                  <span className={currentStep === 3 ? 'font-semibold text-slate-950' : 'text-slate-500'}>
                    Dispatch
                  </span>
                </div>
              </div>

              {/* Step 1: Bottleneck Friction Selection */}
              {currentStep === 1 && (
                <div>
                  <h3 className="text-lg font-semibold text-slate-950 mb-1">
                    {t.diagnostic.step1Title}
                  </h3>
                  <p className="text-xs text-slate-600 mb-6">
                    {t.diagnostic.step1Desc}
                  </p>

                  <div className="space-y-2.5">
                    {frictionOptions.map(opt => (
                      <label
                        key={opt.id}
                        onClick={() => setFormData({ ...formData, friction: opt.id })}
                        className={`block p-3.5 rounded-lg border cursor-pointer transition-all ${
                          formData.friction === opt.id
                            ? 'bg-slate-50 border-slate-950 ring-1 ring-slate-950'
                            : 'bg-white border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <input
                            type="radio"
                            name="friction"
                            checked={formData.friction === opt.id}
                            onChange={() => setFormData({ ...formData, friction: opt.id })}
                            className="mt-0.5 accent-slate-950"
                          />
                          <span className="text-xs text-slate-800 leading-relaxed font-medium">
                            {opt.text}
                          </span>
                        </div>
                      </label>
                    ))}
                  </div>

                  <div className="mt-8 flex justify-end">
                    <button
                      type="button"
                      onClick={handleNext}
                      className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium bg-slate-950 text-white rounded-md hover:bg-slate-800 transition-all shadow-sm"
                    >
                      <span>{t.diagnostic.next}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Environment & Volume */}
              {currentStep === 2 && (
                <div>
                  <h3 className="text-lg font-semibold text-slate-950 mb-1">
                    {t.diagnostic.step2Title}
                  </h3>
                  <p className="text-xs text-slate-600 mb-6">
                    {t.diagnostic.step2Desc}
                  </p>

                  {/* Target Environment */}
                  <div className="mb-6">
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-semibold mb-2">
                      Target Deployment Topology:
                    </label>
                    <div className="space-y-2">
                      {envOptions.map(env => (
                        <label
                          key={env.id}
                          onClick={() => setFormData({ ...formData, deploymentEnv: env.id })}
                          className={`block p-3 rounded-md border cursor-pointer text-xs ${
                            formData.deploymentEnv === env.id
                              ? 'bg-slate-50 border-slate-950 font-medium'
                              : 'border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          <input
                            type="radio"
                            name="deploymentEnv"
                            checked={formData.deploymentEnv === env.id}
                            onChange={() => setFormData({ ...formData, deploymentEnv: env.id })}
                            className="mr-2 accent-slate-950"
                          />
                          {env.text}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Target Volume */}
                  <div className="mb-6">
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-semibold mb-2">
                      Projected Daily Ingress Volume:
                    </label>
                    <div className="space-y-2">
                      {volOptions.map(vol => (
                        <label
                          key={vol.id}
                          onClick={() => setFormData({ ...formData, volume: vol.id })}
                          className={`block p-3 rounded-md border cursor-pointer text-xs ${
                            formData.volume === vol.id
                              ? 'bg-slate-50 border-slate-950 font-medium'
                              : 'border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          <input
                            type="radio"
                            name="volume"
                            checked={formData.volume === vol.id}
                            onChange={() => setFormData({ ...formData, volume: vol.id })}
                            className="mr-2 accent-slate-950"
                          />
                          {vol.text}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex justify-between">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="inline-flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-600 hover:text-slate-950 border border-slate-200 rounded-md"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>{t.diagnostic.back}</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleNext}
                      className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium bg-slate-950 text-white rounded-md hover:bg-slate-800 transition-all shadow-sm"
                    >
                      <span>{t.diagnostic.next}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Enterprise Contact & Dispatch */}
              {currentStep === 3 && (
                <form onSubmit={handleSubmit}>
                  <h3 className="text-lg font-semibold text-slate-950 mb-1">
                    {t.diagnostic.step3Title}
                  </h3>
                  <p className="text-xs text-slate-600 mb-6">
                    {t.diagnostic.step3Desc}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        {t.diagnostic.fields.workEmail} <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.workEmail}
                        onChange={e => setFormData({ ...formData, workEmail: e.target.value })}
                        placeholder="vp.eng@enterprise.com"
                        className="w-full px-3 py-2 text-xs border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-950 font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        {t.diagnostic.fields.companyName} <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={e => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="Acme Global Logistics Corp"
                        className="w-full px-3 py-2 text-xs border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-950"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        {t.diagnostic.fields.role}
                      </label>
                      <input
                        type="text"
                        value={formData.role}
                        onChange={e => setFormData({ ...formData, role: e.target.value })}
                        placeholder="VP of Engineering / Lead Architect"
                        className="w-full px-3 py-2 text-xs border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-950"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        {t.diagnostic.fields.notes}
                      </label>
                      <textarea
                        rows={2}
                        value={formData.notes}
                        onChange={e => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="Current ERP: SAP S/4HANA on-premise; high compliance security isolation..."
                        className="w-full px-3 py-2 text-xs border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-950"
                      />
                    </div>
                  </div>

                  <div className="mt-8 flex justify-between items-center">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="inline-flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-600 hover:text-slate-950 border border-slate-200 rounded-md"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>{t.diagnostic.back}</span>
                    </button>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium bg-slate-950 text-white rounded-md hover:bg-slate-800 transition-all shadow-sm"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{t.diagnostic.submit}</span>
                    </button>
                  </div>
                </form>
              )}
            </>
          ) : (
            /* Submission Summary View */
            <div className="py-4 text-center">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                <CheckCircle2 className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-display font-semibold text-slate-950 mb-2">
                {t.diagnostic.summaryTitle}
              </h3>

              <p className="text-xs text-slate-600 max-w-md mx-auto mb-6 leading-relaxed">
                {t.diagnostic.summaryDesc}
              </p>

              {/* Tailored Preliminary Architecture Summary */}
              <div className="text-left bg-slate-50 border border-slate-200 rounded-lg p-5 mb-6 text-xs font-mono space-y-2">
                <p className="text-slate-900 font-bold border-b border-slate-200 pb-2">
                  {t.diagnostic.recommendationTitle}
                </p>
                <p className="text-slate-700 leading-relaxed font-sans pt-1">
                  {t.diagnostic.recommendationBody}
                </p>
                <div className="pt-2 text-[11px] text-slate-500 space-y-1">
                  <div>DISPATCH_TAG: SELYRON_CORE_V2.4</div>
                  <div>TARGET_TENANT: {formData.companyName}</div>
                  <div>DISPATCH_CONTACT: {formData.workEmail}</div>
                </div>
              </div>

              <button
                type="button"
                onClick={handleResetAndClose}
                className="px-6 py-2.5 text-xs font-medium bg-slate-950 text-white rounded-md hover:bg-slate-800 transition-all shadow-sm"
              >
                {t.diagnostic.close}
              </button>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
