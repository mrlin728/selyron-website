import React from 'react';
import { useRouter } from '../context/RouterContext';
import { useApp } from '../context/LanguageContext';
import { ArrowLeft } from 'lucide-react';

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  subtitle: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ eyebrow, title, subtitle }) => {
  const { navigate } = useRouter();
  const { t } = useApp();

  return (
    <div className="border-b border-slate-200 bg-slate-50/50 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Back button */}
        <button
          onClick={() => navigate('home')}
          className="inline-flex items-center gap-1.5 font-mono text-xs text-slate-500 hover:text-slate-900 transition-colors mb-6 group"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
          <span>{t.pages.backToOverview}</span>
        </button>

        {/* Eyebrow */}
        <div className="inline-block font-mono text-xs font-semibold text-slate-500 tracking-wider uppercase mb-3">
          {eyebrow}
        </div>

        {/* Title */}
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight max-w-4xl mb-4">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          {subtitle}
        </p>

      </div>
    </div>
  );
};
