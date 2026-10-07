import React, { useState } from 'react';
import { useApp } from '../context/LanguageContext';
import { Send, CheckCircle2, Copy, Check, Mail, Sparkles } from 'lucide-react';

export const WorkflowInquiryBuilder: React.FC = () => {
  const { lang, t } = useApp();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [selectedService, setSelectedService] = useState(t.contact.serviceOptions[0]);
  const [selectedTools, setSelectedTools] = useState<string[]>([]);
  const [workflowDesc, setWorkflowDesc] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const availableTools = [
    "Gmail / Outlook",
    "Slack",
    "Feishu / 飞书",
    "HubSpot",
    "Salesforce",
    "PostgreSQL",
    "Supabase",
    "Notion",
    "Airtable",
    "Excel / Sheets",
    "REST APIs / Webhooks"
  ];

  const handleToolToggle = (tool: string) => {
    setSelectedTools(prev => 
      prev.includes(tool) ? prev.filter(t => t !== tool) : [...prev, tool]
    );
  };

  const generatedBrief = `
[Selyron Workflow Consultation Request]
- Client: ${name || 'N/A'} (${company || 'Individual / Startup'})
- Contact Email: ${email || 'N/A'}
- Service Focus: ${selectedService}
- Current Tools: ${selectedTools.length > 0 ? selectedTools.join(', ') : 'Not specified'}
- Current Bottleneck:
${workflowDesc || 'General exploration of AI automation capabilities.'}
  `.trim();

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedBrief);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="glass-panel rounded-2xl border border-obsidian-750 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      
      {/* Header */}
      <div className="flex items-center space-x-2 text-xs font-mono text-cyber-blue mb-4">
        <Sparkles className="w-4 h-4" />
        <span>{t.contact.formTitle}</span>
      </div>

      {submitted ? (
        /* Success Confirmation */
        <div className="py-12 text-center space-y-4 animate-fadeIn">
          <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-white">
            {t.contact.successTitle}
          </h3>
          <p className="text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
            {t.contact.successMsg}
          </p>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`mailto:mrlin728@gmail.com?subject=Workflow Scoping Inquiry - ${encodeURIComponent(company || name)}&body=${encodeURIComponent(generatedBrief)}`}
              className="px-5 py-2.5 rounded-lg bg-cyber-blue text-white text-xs font-medium flex items-center space-x-2 hover:bg-blue-600 transition-all shadow-md"
            >
              <Mail className="w-4 h-4" />
              <span>{lang === 'zh' ? "以邮件客户端发送备份" : "Send Backup via Email Client"}</span>
            </a>

            <button
              onClick={() => setSubmitted(false)}
              className="px-4 py-2.5 rounded-lg bg-obsidian-850 text-slate-300 text-xs font-medium hover:text-white border border-obsidian-750"
            >
              {lang === 'zh' ? "提交另一份工作流" : "Submit Another Workflow"}
            </button>
          </div>
        </div>
      ) : (
        /* Form inputs */
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Row 1: Name, Email, Company */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1.5">
                {t.contact.nameLabel} *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Michael Chen"
                className="w-full px-3.5 py-2.5 rounded-lg bg-obsidian-900 border border-obsidian-800 text-white text-sm focus:border-cyber-blue focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1.5">
                {t.contact.emailLabel} *
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="michael@company.com"
                className="w-full px-3.5 py-2.5 rounded-lg bg-obsidian-900 border border-obsidian-800 text-white text-sm focus:border-cyber-blue focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1.5">
                {t.contact.companyLabel}
              </label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Apex Logistics Ltd"
                className="w-full px-3.5 py-2.5 rounded-lg bg-obsidian-900 border border-obsidian-800 text-white text-sm focus:border-cyber-blue focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Row 2: Service Focus Selector */}
          <div>
            <label className="block text-xs font-mono text-slate-400 mb-2">
              {t.contact.serviceLabel}
            </label>
            <div className="flex flex-wrap gap-2">
              {t.contact.serviceOptions.map((s, idx) => (
                <button
                  type="button"
                  key={idx}
                  onClick={() => setSelectedService(s)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all border ${
                    selectedService === s
                      ? 'bg-cyber-blue text-white border-blue-400 shadow-sm'
                      : 'bg-obsidian-900 text-slate-400 hover:text-slate-200 border-obsidian-800'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Row 3: Current Tools Chip Selection */}
          <div>
            <label className="block text-xs font-mono text-slate-400 mb-2">
              {t.contact.toolsLabel}
            </label>
            <div className="flex flex-wrap gap-2">
              {availableTools.map((tool, idx) => {
                const isSelected = selectedTools.includes(tool);
                return (
                  <button
                    type="button"
                    key={idx}
                    onClick={() => handleToolToggle(tool)}
                    className={`px-2.5 py-1 rounded-md text-xs font-mono transition-all border flex items-center space-x-1.5 ${
                      isSelected
                        ? 'bg-emerald-950/60 border-emerald-500/50 text-emerald-300'
                        : 'bg-obsidian-900/60 border-obsidian-800 text-slate-400 hover:text-slate-300'
                    }`}
                  >
                    {isSelected && <Check className="w-3 h-3 text-emerald-400" />}
                    <span>{tool}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Row 4: Workflow Description */}
          <div>
            <label className="block text-xs font-mono text-slate-400 mb-1.5">
              {t.contact.workflowDescLabel} *
            </label>
            <textarea
              required
              rows={4}
              value={workflowDesc}
              onChange={(e) => setWorkflowDesc(e.target.value)}
              placeholder={t.contact.workflowDescPlaceholder}
              className="w-full px-3.5 py-3 rounded-lg bg-obsidian-900 border border-obsidian-800 text-white text-sm focus:border-cyber-blue focus:outline-none transition-colors leading-relaxed"
            />
          </div>

          {/* Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-obsidian-850">
            <div className="flex items-center space-x-2 text-xs text-slate-400">
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center space-x-1 text-slate-400 hover:text-slate-200 font-mono"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? (lang === 'zh' ? "已复制到剪贴板" : "Copied Brief!") : (lang === 'zh' ? "复制需求草稿" : "Copy Brief")}</span>
              </button>
            </div>

            <div className="flex items-center space-x-3 w-full sm:w-auto">
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 rounded-lg text-sm font-semibold text-white bg-cyber-blue hover:bg-blue-600 shadow-lg shadow-blue-500/20 flex items-center justify-center space-x-2 transition-all active:scale-95"
              >
                <Send className="w-4 h-4" />
                <span>{t.contact.submitButton}</span>
              </button>
            </div>
          </div>

        </form>
      )}

    </div>
  );
};
