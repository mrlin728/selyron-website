import React, { useState } from 'react';
import { useApp } from '../context/LanguageContext';
import { 
  Zap, 
  BarChart3, 
  Cpu, 
  Database, 
  Copy, 
  Check, 
  Terminal, 
  ShieldCheck
} from 'lucide-react';

export const ProtocolSpecs: React.FC = () => {
  const { t } = useApp();
  const [activeCodeTab, setActiveCodeTab] = useState<'ts' | 'py'>('ts');
  const [copied, setCopied] = useState<boolean>(false);

  const benchmarks = [
    { data: t.specs.b1, icon: Zap, color: 'text-amber-600' },
    { data: t.specs.b2, icon: BarChart3, color: 'text-emerald-600' },
    { data: t.specs.b3, icon: Cpu, color: 'text-blue-600' },
    { data: t.specs.b4, icon: Database, color: 'text-purple-600' },
  ];

  const connectors = [
    { name: 'SAP S/4HANA', type: 'RFC / OData / BAPI', protocol: 'Two-Phase Commit' },
    { name: 'Salesforce Enterprise', type: 'REST & Pub/Sub API', protocol: 'Real-time Event Ingress' },
    { name: 'Oracle NetSuite', type: 'SuiteTalk Web Services', protocol: 'Ledger Reconciliation' },
    { name: 'Kingdee Cloud (金蝶)', type: 'OpenAPI / K/3 Cloud', protocol: 'Financial Posting' },
    { name: 'Apache Kafka', type: 'Streaming Event Bus', protocol: 'Distributed Partitioning' },
    { name: 'Snowflake / BigQuery', type: 'Analytical Warehouse', protocol: 'Audit Sink Export' },
  ];

  const tsCode = `import { defineWorkflow, step, hitlApproval } from '@selyron/core';

export const ReconcileAndPostWorkflow = defineWorkflow({
  id: 'wf_reconcile_invoice',
  idempotencyKey: (event) => \`inv_\${event.invoiceId}_\${event.vendorId}\`,
  retries: { maxAttempts: 5, backoff: 'exponential' },
  
  async run({ invoiceStream, erpClient, auditLedger }) {
    // Step 1: Ingest and multi-pass OCR parse
    const parsedData = await step('parse_ocr', () => invoiceStream.extract());
    
    // Step 2: 3-way reconciliation against SAP PO
    const matchResult = await step('reconcile_erp', () => 
      erpClient.threeWayMatch(parsedData.poNumber, parsedData.lineItems)
    );
    
    // Step 3: Trigger Human-in-the-Loop if variance detected
    if (matchResult.variance > 0.01) {
      await hitlApproval('operator_sign_off', {
        severity: 'HIGH_VARIANCE',
        variance: matchResult.variance,
        rolesAllowed: ['FINANCE_DIRECTOR']
      });
    }
    
    // Step 4: Atomic journal commitment
    return await step('commit_ledger', () => auditLedger.commit(matchResult));
  }
});`;

  const pyCode = `from selyron import workflow, step, hitl_approval
from selyron.types import WorkflowContext, InvoicePayload

@workflow.defn(
    id="wf_reconcile_invoice",
    idempotency_key=lambda payload: f"inv_{payload.invoice_id}_{payload.vendor_id}",
    max_retries=5,
    backoff_strategy="exponential_jitter"
)
async def reconcile_and_post_workflow(ctx: WorkflowContext, payload: InvoicePayload):
    # Step 1: Multimodal OCR & Field Normalization
    parsed = await step.run("ocr_extraction", lambda: payload.parse_fields())
    
    # Step 2: Cross-ERP Reconciliation (SAP / Kingdee)
    reconciled = await step.run("erp_reconciliation", lambda: ctx.erp.match_po(parsed))
    
    # Step 3: Human-in-the-Loop Gate on Financial Variance
    if reconciled.variance_amount > 0:
        await hitl_approval.wait(
            channel="feishu_finance_ops",
            reason=f"Variance detected: {reconciled.variance_amount}",
            timeout="24h"
        )
        
    # Step 4: Atomic Two-Phase Commit to General Ledger
    return await step.run("commit_entry", lambda: ctx.ledger.post_atomic(reconciled))`;

  const handleCopyCode = () => {
    const code = activeCodeTab === 'ts' ? tsCode : pyCode;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="specs" className="py-20 border-b border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-slate-900"></span>
            <p className="font-mono text-xs uppercase tracking-wider text-slate-500">
              {t.specs.eyebrow}
            </p>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-semibold text-slate-950 tracking-tight">
            {t.specs.title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            {t.specs.subtitle}
          </p>
        </div>

        {/* Runtime Benchmarks 4-Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {benchmarks.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div 
                key={idx}
                className="p-5 bg-slate-50 rounded-lg border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider">
                      {b.data.label}
                    </span>
                    <Icon className={`w-4 h-4 ${b.color}`} />
                  </div>
                  <p className="font-mono text-xl sm:text-2xl font-bold text-slate-950">
                    {b.data.value}
                  </p>
                </div>
                <p className="text-xs text-slate-600 mt-2 pt-2 border-t border-slate-200/60 font-sans">
                  {b.data.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Two-Column: Enterprise Connectors vs. Declarative Code */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Certified Enterprise Connectors */}
          <div className="lg:col-span-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-semibold text-slate-950 font-display">
                {t.specs.connectorsTitle}
              </h3>
              <span className="font-mono text-[11px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                ACTIVE ADAPTERS: 6
              </span>
            </div>

            <div className="space-y-2.5">
              {connectors.map((conn, idx) => (
                <div 
                  key={idx}
                  className="p-3 bg-white rounded-lg border border-slate-200 hover:border-slate-300 transition-colors flex items-center justify-between shadow-sm"
                >
                  <div>
                    <h4 className="text-xs font-semibold text-slate-900">
                      {conn.name}
                    </h4>
                    <p className="font-mono text-[11px] text-slate-500 mt-0.5">
                      {conn.type}
                    </p>
                  </div>
                  <span className="font-mono text-[10px] text-slate-600 bg-slate-50 px-2 py-1 rounded border border-slate-200">
                    {conn.protocol}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-4 p-3 bg-emerald-50/70 border border-emerald-200 rounded-lg flex items-center gap-2 text-xs font-mono text-emerald-800">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Full two-phase commit with rollback isolation on all adapters.</span>
            </div>
          </div>

          {/* Right Column: Declarative Code Definition */}
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-semibold text-slate-950 font-display flex items-center gap-2">
                <Terminal className="w-4 h-4 text-slate-600" />
                <span>{t.specs.codeTitle}</span>
              </h3>

              <div className="flex items-center gap-2">
                {/* Language Switcher */}
                <div className="flex p-0.5 bg-slate-100 rounded border border-slate-200 text-xs font-mono">
                  <button
                    onClick={() => setActiveCodeTab('ts')}
                    className={`px-2 py-0.5 rounded ${
                      activeCodeTab === 'ts' 
                        ? 'bg-white text-slate-950 font-semibold shadow-xs' 
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    TypeScript
                  </button>
                  <button
                    onClick={() => setActiveCodeTab('py')}
                    className={`px-2 py-0.5 rounded ${
                      activeCodeTab === 'py' 
                        ? 'bg-white text-slate-950 font-semibold shadow-xs' 
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    Python
                  </button>
                </div>

                {/* Copy Button */}
                <button
                  onClick={handleCopyCode}
                  className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-mono bg-white text-slate-700 hover:text-slate-950 border border-slate-200 rounded hover:bg-slate-50 transition-colors shadow-xs"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">{t.specs.copied}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{t.specs.copyCode}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Code Box */}
            <div className="rounded-lg border border-slate-200 bg-slate-950 text-slate-200 overflow-hidden shadow-sm">
              <div className="flex items-center justify-between px-4 py-2 border-b border-slate-800 text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>{activeCodeTab === 'ts' ? 'workflow.ts' : 'workflow.py'}</span>
                </span>
                <span>STATEFUL · IDEMPOTENT</span>
              </div>
              <div className="p-4 overflow-x-auto text-xs font-mono leading-relaxed text-slate-300">
                <pre>{activeCodeTab === 'ts' ? tsCode : pyCode}</pre>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
