import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { useApp } from '../context/LanguageContext';
import { DiagnosticFormData } from '../types';
import { 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Send
} from 'lucide-react';
import { submitInquiryToFormSubmit } from '../utils/formSubmit';

export const DiagnosticPage: React.FC = () => {
  const { t } = useApp();
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [formData, setFormData] = useState<DiagnosticFormData>({
    friction: 'friction1',
    deploymentEnv: 'env1',
    volume: 'vol2',
    workEmail: '',
    companyName: '',
    role: '',
    notes: '',
  });

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.workEmail || !formData.companyName) return;
    setIsSubmitting(true);
    await submitInquiryToFormSubmit({
      source: "Diagnostic Page Full Assessment",
      ...formData,
    });
    setIsSubmitting(false);
    setIsSubmitted(true);
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

  const volumeOptions = [
    { id: 'vol1', text: t.diagnostic.options.vol1 },
    { id: 'vol2', text: t.diagnostic.options.vol2 },
    { id: 'vol3', text: t.diagnostic.options.vol3 },
  ];

  return (
    <div className="bg-white text-slate-950 pb-20">
      <PageHeader
        eyebrow={t.pages.diagnosticPage.eyebrow}
        title={t.pages.diagnosticPage.title}
        subtitle={t.pages.diagnosticPage.subtitle}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="bg-white border border-slate-200 rounded-xl shadow-2xs p-6 sm:p-10">
          
          {/* Multi-step progress bar */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <span className={`w-6 h-6 rounded-full flex items-center justify-center font-mono text-xs ${
                currentStep >= 1 ? 'bg-slate-900 text-white font-bold' : 'bg-slate-100 text-slate-400'
              }`}>
                1
              </span>
              <span className="font-mono text-xs text-slate-700 hidden sm:inline">Friction</span>
            </div>

            <div className="h-px bg-slate-200 flex-grow mx-3"></div>

            <div className="flex items-center gap-2">
              <span className={`w-6 h-6 rounded-full flex items-center justify-center font-mono text-xs ${
                currentStep >= 2 ? 'bg-slate-900 text-white font-bold' : 'bg-slate-100 text-slate-400'
              }`}>
                2
              </span>
              <span className="font-mono text-xs text-slate-700 hidden sm:inline">Topology</span>
            </div>

            <div className="h-px bg-slate-200 flex-grow mx-3"></div>

            <div className="flex items-center gap-2">
              <span className={`w-6 h-6 rounded-full flex items-center justify-center font-mono text-xs ${
                currentStep >= 3 ? 'bg-slate-900 text-white font-bold' : 'bg-slate-100 text-slate-400'
              }`}>
                3
              </span>
              <span className="font-mono text-xs text-slate-700 hidden sm:inline">Dispatch</span>
            </div>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit}>
              {/* Step 1: Architectural Friction */}
              {currentStep === 1 && (
                <div>
                  <h3 className="text-xl font-display font-bold text-slate-950 mb-1">
                    {t.diagnostic.step1Title}
                  </h3>
                  <p className="text-xs text-slate-600 mb-6">
                    {t.diagnostic.step1Desc}
                  </p>

                  <div className="space-y-3 mb-8">
                    {frictionOptions.map((opt) => (
                      <label
                        key={opt.id}
                        className={`flex items-start gap-3 p-4 rounded-lg border cursor-pointer transition-all ${
                          formData.friction === opt.id
                            ? 'bg-slate-50 border-slate-900 shadow-2xs'
                            : 'bg-white border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="friction"
                          checked={formData.friction === opt.id}
                          onChange={() => setFormData({ ...formData, friction: opt.id })}
                          className="mt-1"
                        />
                        <span className="text-xs font-medium text-slate-800 leading-relaxed">
                          {opt.text}
                        </span>
                      </label>
                    ))}
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={handleNext}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-950 text-white text-xs font-medium rounded hover:bg-slate-800 transition-all"
                    >
                      <span>{t.diagnostic.next}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Deployment Environment & Volume */}
              {currentStep === 2 && (
                <div>
                  <h3 className="text-xl font-display font-bold text-slate-950 mb-1">
                    {t.diagnostic.step2Title}
                  </h3>
                  <p className="text-xs text-slate-600 mb-6">
                    {t.diagnostic.step2Desc}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-mono text-xs text-slate-500 uppercase tracking-wider font-semibold mb-3">
                      Target Deployment Environment
                    </h4>
                    <div className="space-y-2.5">
                      {envOptions.map((opt) => (
                        <label
                          key={opt.id}
                          className={`flex items-center gap-3 p-3.5 rounded-lg border cursor-pointer transition-all ${
                            formData.deploymentEnv === opt.id
                              ? 'bg-slate-50 border-slate-900'
                              : 'bg-white border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          <input
                            type="radio"
                            name="deploymentEnv"
                            checked={formData.deploymentEnv === opt.id}
                            onChange={() => setFormData({ ...formData, deploymentEnv: opt.id })}
                          />
                          <span className="text-xs font-medium text-slate-800">{opt.text}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-mono text-xs text-slate-500 uppercase tracking-wider font-semibold mb-3">
                      Daily Transaction Volume
                    </h4>
                    <div className="space-y-2.5">
                      {volumeOptions.map((opt) => (
                        <label
                          key={opt.id}
                          className={`flex items-center gap-3 p-3.5 rounded-lg border cursor-pointer transition-all ${
                            formData.volume === opt.id
                              ? 'bg-slate-50 border-slate-900'
                              : 'bg-white border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          <input
                            type="radio"
                            name="volume"
                            checked={formData.volume === opt.id}
                            onChange={() => setFormData({ ...formData, volume: opt.id })}
                          />
                          <span className="text-xs font-medium text-slate-800">{opt.text}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="inline-flex items-center gap-2 px-4 py-2 border border-slate-200 text-slate-700 text-xs font-medium rounded hover:bg-slate-50"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>{t.diagnostic.back}</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleNext}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-950 text-white text-xs font-medium rounded hover:bg-slate-800"
                    >
                      <span>{t.diagnostic.next}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Enterprise Contact & Dispatch */}
              {currentStep === 3 && (
                <div>
                  <h3 className="text-xl font-display font-bold text-slate-950 mb-1">
                    {t.diagnostic.step3Title}
                  </h3>
                  <p className="text-xs text-slate-600 mb-6">
                    {t.diagnostic.step3Desc}
                  </p>

                  <div className="space-y-4 mb-8">
                    <div>
                      <label className="block font-mono text-xs text-slate-700 mb-1 font-semibold">
                        {t.diagnostic.fields.workEmail} *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.workEmail}
                        onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                        placeholder="vp_infra@enterprise.com"
                        className="w-full px-3 py-2 border border-slate-200 rounded text-xs focus:outline-hidden focus:border-slate-900"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-xs text-slate-700 mb-1 font-semibold">
                        {t.diagnostic.fields.companyName} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="Acme Global Logistics Inc."
                        className="w-full px-3 py-2 border border-slate-200 rounded text-xs focus:outline-hidden focus:border-slate-900"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-xs text-slate-700 mb-1">
                        {t.diagnostic.fields.role}
                      </label>
                      <input
                        type="text"
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        placeholder="Chief Information Officer / Head of Platform"
                        className="w-full px-3 py-2 border border-slate-200 rounded text-xs focus:outline-hidden focus:border-slate-900"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-xs text-slate-700 mb-1">
                        {t.diagnostic.fields.notes}
                      </label>
                      <textarea
                        rows={3}
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="e.g. Existing SAP ECC 6.0 requiring BAPI connectivity within private AWS VPC."
                        className="w-full px-3 py-2 border border-slate-200 rounded text-xs focus:outline-hidden focus:border-slate-900"
                      />
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="inline-flex items-center gap-2 px-4 py-2 border border-slate-200 text-slate-700 text-xs font-medium rounded hover:bg-slate-50"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>{t.diagnostic.back}</span>
                    </button>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-slate-950 text-white text-xs font-semibold rounded hover:bg-slate-800 transition-all shadow-sm disabled:opacity-50"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{isSubmitting ? t.diagnostic.submitting : t.diagnostic.submit}</span>
                    </button>
                  </div>
                </div>
              )}
            </form>
          ) : (
            /* Submission Summary & Recommendations */
            <div className="py-4">
              <div className="flex items-center gap-3 text-emerald-600 mb-3">
                <CheckCircle2 className="w-6 h-6" />
                <h3 className="text-xl font-display font-bold text-slate-950">
                  {t.diagnostic.summaryTitle}
                </h3>
              </div>

              <p className="text-xs text-slate-600 mb-6">
                {t.diagnostic.summaryDesc}
              </p>

              <div className="p-5 bg-slate-50 border border-slate-200 rounded-lg mb-6">
                <h4 className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  {t.diagnostic.recommendationTitle}
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed mb-4">
                  {t.diagnostic.recommendationBody}
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-[11px] text-slate-600 border-t border-slate-200 pt-3">
                  <div>
                    <span className="text-slate-400 block">Organization:</span>
                    <span className="font-bold text-slate-950">{formData.companyName}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">SLA Commitment:</span>
                    <span className="font-bold text-emerald-600">99.992% Uptime</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Forward-Deployed Lead:</span>
                    <span className="font-bold text-slate-950">Assigned</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  setCurrentStep(1);
                }}
                className="px-5 py-2 bg-slate-950 text-white text-xs font-medium rounded hover:bg-slate-800"
              >
                Start New Evaluation
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
