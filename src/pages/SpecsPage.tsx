import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { useApp } from '../context/LanguageContext';
import { 
  Terminal, 
  Copy, 
  Check
} from 'lucide-react';

export const SpecsPage: React.FC = () => {
  const { t } = useApp();
  const [activeLang, setActiveLang] = useState<'ts' | 'py' | 'go'>('ts');
  const [copiedCode, setCopiedCode] = useState(false);
  const [activeApiTab, setActiveApiTab] = useState<'dispatch' | 'state' | 'hitl' | 'audit'>('dispatch');

  const codeSnippets: Record<'ts' | 'py' | 'go', string> = {
    ts: `import { SelyronRuntime, WorkflowDefinition, HitlGate } from '@selyron/sdk';

// 1. Initialize Selyron Client within sovereign VPC
const client = new SelyronRuntime({
  endpoint: process.env.SELYRON_VPC_ENDPOINT,
  mutualTls: {
    clientCert: process.env.SELYRON_CLIENT_CERT,
    privateKey: process.env.SELYRON_CLIENT_KEY,
  },
  timeoutMs: 3000,
  maxRetries: 3,
});

// 2. Define deterministic state-machine workflow
export const sapPaymentPipeline = new WorkflowDefinition({
  name: 'finance-reconciliation-v2',
  idempotencyKey: (ctx) => \`\${ctx.poNumber}_\${ctx.fiscalYear}\`,
  steps: [
    {
      id: 'ingress-ocr-validation',
      handler: async (ctx) => await client.extractInvoice({ uri: ctx.documentUri }),
      retryPolicy: { maxAttempts: 3, backoffMultiplier: 1.5 },
    },
    {
      id: 'hitl-dual-custody-gate',
      gate: HitlGate.requireSignature({
        role: 'compliance_officer',
        condition: (ctx) => ctx.invoiceAmount > 50000,
        timeoutMinutes: 60,
      }),
    },
    {
      id: 'sap-commit-two-phase',
      handler: async (ctx) => await client.connectors.sap.commitGlEntry(ctx),
      compensate: async (ctx) => await client.connectors.sap.rollbackGlEntry(ctx),
    },
  ],
});`,

    py: `from selyron import SelyronClient, WorkflowDefinition, HitlGate, RetryPolicy
import os

# 1. Connect to local sovereign cluster
client = SelyronClient(
    endpoint=os.getenv("SELYRON_VPC_ENDPOINT"),
    client_cert=os.getenv("SELYRON_CLIENT_CERT"),
    private_key=os.getenv("SELYRON_CLIENT_KEY"),
    max_retries=3,
)

# 2. Define state machine with dual-custody approval
@client.workflow(name="healthcare-phi-gateway", idempotency_field="patient_mrn")
async def process_clinical_intake(ctx):
    # Step 1: Air-gapped PHI Scrubbing
    sanitized = await client.local_llm.sanitize_phi(
        raw_text=ctx.clinical_notes,
        preserves=["trial_id", "dosage_mg"]
    )
    
    # Step 2: HITL Checkpoint for high-risk protocols
    if sanitized.requires_oversight:
        await HitlGate.require_dual_signoff(
            roles=["irb_lead", "chief_medical_officer"],
            timeout_hours=24
        )
        
    # Step 3: Atomic Egress to Clinical Data Warehouse
    return await client.connectors.snowflake.append_audit_record(sanitized)`,

    go: `package main

import (
	"context"
	"time"
	"github.com/selyron/selyron-go/runtime"
	"github.com/selyron/selyron-go/connectors/sap"
)

func main() {
	// Initialize Selyron Client with Mutual TLS
	client, err := runtime.NewClient(runtime.Config{
		Endpoint: "https://selyron.corp.internal:9443",
		CertFile: "/etc/ssl/certs/selyron.crt",
		KeyFile:  "/etc/ssl/private/selyron.key",
		Timeout:  3 * time.Second,
	})
	if err != nil {
		panic(err)
	}

	// Dispatch state machine with cryptographic idempotency key
	resp, err := client.Dispatch(context.Background(), runtime.DispatchOpts{
		WorkflowName:   "cross-border-erp-sync",
		IdempotencyKey: "po_99281_2026_q3",
		Payload: map[string]interface{}{
			"erp_source": "sap_ecc6",
			"batch_id":   "b_88194",
			"entries":    1420,
		},
	})
	if err != nil {
		panic(err)
	}

	println("Workflow Dispatched:", resp.ExecutionID, "WAL Checkpoint:", resp.WALIndex)
}`
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeLang]);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const apiEndpoints = {
    dispatch: {
      method: "POST",
      path: "/v1/workflows/dispatch",
      desc: "Triggers deterministic execution with mandatory idempotency key.",
      payload: `{
  "workflow": "erp-payment-sync",
  "idempotency_key": "po_99281_2026",
  "payload": {
    "po_number": "PO-99281",
    "amount": 128450.00,
    "currency": "USD"
  }
}`,
      response: `{
  "execution_id": "wf_77218bf",
  "status": "RUNNING",
  "current_node": "ocr_extraction",
  "wal_index": 448291,
  "committed_at": "2026-10-08T02:50:00.128Z"
}`
    },
    state: {
      method: "GET",
      path: "/v1/workflows/:execution_id/state",
      desc: "Fetches real-time node transitions and runtime state.",
      payload: `/* No request body for GET endpoint */`,
      response: `{
  "execution_id": "wf_77218bf",
  "status": "SUSPENDED_HITL",
  "active_gate": {
    "role_required": "compliance_officer",
    "gate_id": "gate_finance_dual_signoff",
    "suspended_at": "2026-10-08T02:50:01.400Z"
  },
  "wal_index": 448293
}`
    },
    hitl: {
      method: "POST",
      path: "/v1/workflows/:execution_id/approve",
      desc: "Submits cryptographic operator sign-off to resume execution.",
      payload: `{
  "operator_id": "usr_compliance_lead_09",
  "decision": "APPROVED",
  "signature_token": "sig_ed25519_99af2810e7ca...",
  "audit_reason": "Manual PO audit confirmed with treasury"
}`,
      response: `{
  "execution_id": "wf_77218bf",
  "status": "RESUMED",
  "next_node": "sap_gl_commit",
  "audit_receipt_id": "rcpt_991823"
}`
    },
    audit: {
      method: "GET",
      path: "/v1/audit/proof/:tx_id",
      desc: "Returns cryptographic SHA-256 HMAC state chain verification proof.",
      payload: `/* No request body for GET endpoint */`,
      response: `{
  "tx_id": "tx_881920",
  "execution_id": "wf_77218bf",
  "prev_state_hash": "a1b2c3d4e5f60718...",
  "current_state_hash": "8f3d99e012ac412b...",
  "hmac_seal": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
  "sealed_at": "2026-10-08T02:50:02.012Z"
}`
    }
  };

  const connectors = [
    { name: "SAP ECC 6.0 / S/4HANA", proto: "RFC / BAPI / OData", auth: "Mutual TLS / SNC", p99: "< 14 ms", commit: "2-Phase Commit" },
    { name: "Salesforce Core", proto: "REST Composite / PubSub", auth: "OAuth 2.0 JWT", p99: "< 38 ms", commit: "Compensating Tx" },
    { name: "Oracle NetSuite", proto: "SuiteTalk REST / SOAP", auth: "Token-Based (TBA)", p99: "< 42 ms", commit: "Compensating Tx" },
    { name: "Kingdee Cloud (金蝶)", proto: "Kingdee WebAPI", auth: "AppKey / Token", p99: "< 28 ms", commit: "Atomic Rollback" },
    { name: "Apache Kafka", proto: "Kafka Wire Protocol", auth: "SASL / SCRAM-512", p99: "< 1.2 ms", commit: "Exact-Once Semantics" },
    { name: "Snowflake Warehouse", proto: "Snowflake SQL API", auth: "Keypair Auth", p99: "< 65 ms", commit: "Transactional Merge" }
  ];

  return (
    <div className="bg-white text-slate-950 pb-20">
      <PageHeader
        eyebrow={t.pages.specsPage.eyebrow}
        title={t.pages.specsPage.title}
        subtitle={t.pages.specsPage.subtitle}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        
        {/* Multi-Language SDK Code Section */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4 pb-3 border-b border-slate-200">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-slate-500 font-semibold">
                SDK IMPLEMENTATION
              </span>
              <h2 className="text-xl font-display font-bold text-slate-950 mt-0.5">
                Multi-Language Enterprise SDKs
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex p-0.5 bg-slate-100 rounded-lg border border-slate-200">
                {(['ts', 'py', 'go'] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setActiveLang(lang)}
                    className={`px-3 py-1 font-mono text-xs rounded transition-all ${
                      activeLang === lang
                        ? 'bg-white text-slate-950 font-bold shadow-2xs'
                        : 'text-slate-600 hover:text-slate-950'
                    }`}
                  >
                    {lang === 'ts' ? t.pages.specsPage.codeTabTs : lang === 'py' ? t.pages.specsPage.codeTabPy : t.pages.specsPage.codeTabGo}
                  </button>
                ))}
              </div>

              <button
                onClick={handleCopyCode}
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-200 hover:border-slate-300 rounded font-mono text-xs text-slate-700 shadow-2xs"
              >
                {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedCode ? t.pages.specsPage.copiedCode : t.pages.specsPage.copyCode}</span>
              </button>
            </div>
          </div>

          <div className="bg-slate-950 rounded-xl p-5 overflow-x-auto text-slate-200 font-mono text-xs leading-relaxed border border-slate-800 shadow-inner">
            <pre>{codeSnippets[activeLang]}</pre>
          </div>
        </div>

        {/* REST & gRPC API Reference */}
        <div className="mb-20">
          <div className="mb-6">
            <span className="font-mono text-xs text-slate-500 uppercase tracking-wider font-semibold">
              INTERFACE SPECIFICATION
            </span>
            <h2 className="text-2xl font-display font-bold text-slate-950 mt-1">
              {t.pages.specsPage.apiTitle}
            </h2>
            <p className="text-xs text-slate-600 mt-1">
              {t.pages.specsPage.apiDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Endpoint Selector Tabs */}
            <div className="lg:col-span-4 space-y-2">
              {(['dispatch', 'state', 'hitl', 'audit'] as const).map((key) => {
                const ep = apiEndpoints[key];
                const isActive = activeApiTab === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveApiTab(key)}
                    className={`w-full text-left p-3.5 rounded-lg border transition-all ${
                      isActive
                        ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`px-1.5 py-0.5 rounded text-[10px] font-mono font-bold ${
                        ep.method === 'POST' ? 'bg-emerald-800 text-white' : 'bg-blue-800 text-white'
                      }`}>
                        {ep.method}
                      </span>
                      <span className="font-mono text-xs font-semibold truncate">
                        {ep.path}
                      </span>
                    </div>
                    <div className={`text-[11px] truncate ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>
                      {ep.desc}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Request & Response Viewer */}
            <div className="lg:col-span-8 bg-slate-50 border border-slate-200 rounded-xl p-6">
              <div className="flex items-center gap-2 font-mono text-xs text-slate-900 font-bold mb-4 pb-3 border-b border-slate-200">
                <span className="px-2 py-0.5 bg-slate-900 text-white rounded text-[10px]">
                  {apiEndpoints[activeApiTab].method}
                </span>
                <span>{apiEndpoints[activeApiTab].path}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="font-mono text-[11px] text-slate-500 uppercase tracking-wider mb-2 font-semibold">
                    Request Payload
                  </div>
                  <pre className="p-3 bg-white border border-slate-200 rounded text-[11px] font-mono text-slate-800 overflow-x-auto">
                    {apiEndpoints[activeApiTab].payload}
                  </pre>
                </div>

                <div>
                  <div className="font-mono text-[11px] text-slate-500 uppercase tracking-wider mb-2 font-semibold">
                    Response JSON (200 OK)
                  </div>
                  <pre className="p-3 bg-slate-900 border border-slate-800 rounded text-[11px] font-mono text-emerald-400 overflow-x-auto">
                    {apiEndpoints[activeApiTab].response}
                  </pre>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Certified Connectors Ecosystem */}
        <div className="mb-20">
          <div className="mb-6">
            <span className="font-mono text-xs text-slate-500 uppercase tracking-wider font-semibold">
              CONNECTOR CATALOG
            </span>
            <h2 className="text-2xl font-display font-bold text-slate-950 mt-1">
              {t.pages.specsPage.connectorsTitle}
            </h2>
            <p className="text-xs text-slate-600 mt-1">
              {t.pages.specsPage.connectorsDesc}
            </p>
          </div>

          <div className="border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
            <table className="w-full text-left font-mono text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-500">
                <tr>
                  <th className="py-3 px-4 font-semibold">Target System</th>
                  <th className="py-3 px-4 font-semibold">Protocol / Standard</th>
                  <th className="py-3 px-4 font-semibold">Authentication</th>
                  <th className="py-3 px-4 font-semibold">P99 Latency</th>
                  <th className="py-3 px-4 font-semibold">Transactional Guarantee</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {connectors.map((c, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3 px-4 font-medium text-slate-950">{c.name}</td>
                    <td className="py-3 px-4 text-slate-600">{c.proto}</td>
                    <td className="py-3 px-4 text-slate-600">{c.auth}</td>
                    <td className="py-3 px-4 text-emerald-600 font-semibold">{c.p99}</td>
                    <td className="py-3 px-4 text-slate-700">{c.commit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Developer CLI Reference */}
        <div className="p-8 bg-slate-950 text-white rounded-xl">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
            <div>
              <span className="font-mono text-xs text-emerald-400 font-semibold uppercase">
                CLI TOOLING
              </span>
              <h3 className="font-display text-xl font-bold text-white mt-1">
                {t.pages.specsPage.cliTitle}
              </h3>
            </div>
            <Terminal className="w-5 h-5 text-slate-500" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
            <div className="p-4 bg-slate-900 border border-slate-800 rounded">
              <div className="text-emerald-400 font-bold mb-1">selyron init [template]</div>
              <p className="text-slate-400 text-[11px]">
                Scaffolds a new deterministic pipeline workspace with TypeScript/Python types, CI checks, and mock connectors.
              </p>
            </div>

            <div className="p-4 bg-slate-900 border border-slate-800 rounded">
              <div className="text-emerald-400 font-bold mb-1">selyron lint &lt;workflow.yml&gt;</div>
              <p className="text-slate-400 text-[11px]">
                Performs static AST validation, detects non-deterministic loops, and confirms idempotency keys.
              </p>
            </div>

            <div className="p-4 bg-slate-900 border border-slate-800 rounded">
              <div className="text-emerald-400 font-bold mb-1">selyron deploy --vpc=&lt;id&gt;</div>
              <p className="text-slate-400 text-[11px]">
                Packages and deploys workflow definition to the private sovereign cluster with zero-downtime hot reload.
              </p>
            </div>

            <div className="p-4 bg-slate-900 border border-slate-800 rounded">
              <div className="text-emerald-400 font-bold mb-1">selyron audit verify &lt;txId&gt;</div>
              <p className="text-slate-400 text-[11px]">
                Cryptographically audits state transitions against the immutable SHA-256 HMAC ledger proof.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
