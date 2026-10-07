import React, { useState } from 'react';
import { useApp } from '../context/LanguageContext';
import { ChevronDown, MessageSquare } from 'lucide-react';

interface FaqSectionProps {
  onOpenDiagnostic: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenDiagnostic }) => {
  const { t } = useApp();
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const faqs = [
    t.faq.q1,
    t.faq.q2,
    t.faq.q3,
    t.faq.q4,
    t.faq.q5,
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 border-b border-slate-200 bg-slate-50/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-slate-900"></span>
            <p className="font-mono text-xs uppercase tracking-wider text-slate-500">
              {t.faq.eyebrow}
            </p>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-semibold text-slate-950 tracking-tight">
            {t.faq.title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            {t.faq.subtitle}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-lg border border-slate-200 overflow-hidden transition-all shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors"
                >
                  <span className="text-sm font-semibold text-slate-900 leading-snug">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-slate-950' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/30">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Contact Help Callout */}
        <div className="mt-10 p-5 bg-white border border-slate-200 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center text-slate-700">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-900">
                Have specific institutional architecture requirements?
              </p>
              <p className="text-xs text-slate-500">
                Direct consultation with our Forward-Deployed Engineering team.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenDiagnostic}
            className="px-4 py-2 text-xs font-medium bg-slate-950 text-white rounded-md hover:bg-slate-800 transition-colors shadow-xs whitespace-nowrap"
          >
            {t.nav.scheduleReview}
          </button>
        </div>

      </div>
    </section>
  );
};
