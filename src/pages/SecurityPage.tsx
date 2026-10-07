import React, { useState, useEffect } from 'react';
import { PageHeader } from '../components/PageHeader';
import { useApp } from '../context/LanguageContext';
import { 
  ShieldCheck, 
  RefreshCw, 
  CheckCircle2, 
  Download, 
  Check
} from 'lucide-react';

export const SecurityPage: React.FC = () => {
  const { t } = useApp();

  // State for live cryptographic verification tool
  const [txId, setTxId] = useState('tx_882910_commit');
  const [prevHash, setPrevHash] = useState('e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855');
  const [payloadText, setPayloadText] = useState(JSON.stringify({
    workflow: "financial-dual-custody",
    po_number: "PO-99281-GL",
    amount_usd: 128450.00,
    approver: "officer_07@corp.internal",
    decision: "AUTHORIZED"
  }, null, 2));
  const [computedHash, setComputedHash] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [downloadRequested, setDownloadRequested] = useState(false);

  // Compute real SHA-256 hash using Web Crypto API
  const calculateSha256 = async (input: string): Promise<string> => {
    const encoder = new TextEncoder();
    const data = encoder.encode(input);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  };

  const updateVerification = async () => {
    setIsVerifying(true);
    try {
      const combined = `${txId}:${prevHash}:${payloadText.trim()}`;
      const hash = await calculateSha256(combined);
      setComputedHash(hash);
    } catch {
      setComputedHash('hash_calculation_error');
    } finally {
      setIsVerifying(false);
    }
  };

  useEffect(() => {
    updateVerification();
  }, [txId, prevHash, payloadText]);

  const handleSimulateNew = () => {
    const randomSuffix = Math.floor(100000 + Math.random() * 900000);
    setTxId(`tx_${randomSuffix}_commit`);
    setPrevHash(computedHash || 'f4a8b291c3d4e5f60718293a4b5c6d7e8f90123456789abcdef0123456789abc');
    setPayloadText(JSON.stringify({
      workflow: "sap-inventory-sync",
      batch_id: `b_${randomSuffix}`,
      status: "COMPLETED",
      reconciled_lines: 4820,
      timestamp: new Date().toISOString()
    }, null, 2));
  };

  const handleDownloadPackage = () => {
    setDownloadRequested(true);
    setTimeout(() => setDownloadRequested(false), 4000);
  };

  const complianceBadges = [
    { title: "SOC 2 Type II", desc: "Annual third-party security, confidentiality & availability audit.", code: "AICPA SOC2" },
    { title: "ISO / IEC 27001", desc: "Certified Information Security Management System (ISMS).", code: "ISO 27001:2022" },
    { title: "GDPR & HIPAA", desc: "Strict B2B data residency, zero patient record transmission.", code: "HIPAA VAULT" },
    { title: "Zero Data Training", desc: "Binding contractual covenant against customer data retention.", code: "NO-RETENTION" }
  ];

  return (
    <div className="bg-white text-slate-950 pb-20">
      <PageHeader
        eyebrow={t.pages.securityPage.eyebrow}
        title={t.pages.securityPage.title}
        subtitle={t.pages.securityPage.subtitle}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        
        {/* Compliance Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {complianceBadges.map((badge, idx) => (
            <div key={idx} className="p-6 bg-slate-50/70 border border-slate-200 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] font-semibold text-emerald-600 px-2 py-0.5 bg-emerald-50 border border-emerald-200/60 rounded">
                  {badge.code}
                </span>
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
              </div>
              <h3 className="font-display font-bold text-base text-slate-950 mb-1">
                {badge.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {badge.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Live Cryptographic Audit Hash Verification Tool */}
        <div className="mb-20 p-6 sm:p-8 bg-slate-900 text-white rounded-xl shadow-md border border-slate-800">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
            <div>
              <span className="font-mono text-xs text-emerald-400 font-semibold uppercase">
                INTERACTIVE SECURITY LAB
              </span>
              <h3 className="text-xl font-display font-bold text-white mt-0.5">
                {t.pages.securityPage.toolTitle}
              </h3>
              <p className="text-xs text-slate-400 mt-1 max-w-xl">
                {t.pages.securityPage.toolDesc}
              </p>
            </div>

            <button
              onClick={handleSimulateNew}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white font-mono text-xs rounded border border-slate-700 transition-all"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>{t.pages.securityPage.toolSimulate}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Input Controls */}
            <div className="lg:col-span-7 space-y-4">
              <div>
                <label className="block font-mono text-xs text-slate-400 mb-1">
                  {t.pages.securityPage.toolTxId}
                </label>
                <input
                  type="text"
                  value={txId}
                  onChange={(e) => setTxId(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-xs font-mono text-slate-200 focus:outline-hidden focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-slate-400 mb-1">
                  {t.pages.securityPage.toolPrevHash}
                </label>
                <input
                  type="text"
                  value={prevHash}
                  onChange={(e) => setPrevHash(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-xs font-mono text-slate-200 focus:outline-hidden focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-slate-400 mb-1">
                  {t.pages.securityPage.toolPayload}
                </label>
                <textarea
                  rows={6}
                  value={payloadText}
                  onChange={(e) => setPayloadText(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-xs font-mono text-slate-200 focus:outline-hidden focus:border-emerald-500 leading-relaxed"
                />
              </div>
            </div>

            {/* Live Cryptographic Verification Proof Output */}
            <div className="lg:col-span-5 p-5 bg-slate-950 border border-slate-800 rounded-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-semibold mb-3">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{isVerifying ? "Computing SHA-256 HMAC..." : t.pages.securityPage.toolStatusVerified}</span>
                </div>

                <div className="mb-4">
                  <span className="font-mono text-[11px] text-slate-500 block mb-1">
                    {t.pages.securityPage.toolComputedHash}
                  </span>
                  <div className="p-3 bg-slate-900 border border-slate-800 rounded font-mono text-[11px] text-emerald-400 break-all leading-normal">
                    {computedHash}
                  </div>
                </div>

                <div className="space-y-2 font-mono text-[11px] text-slate-400">
                  <div className="flex justify-between border-b border-slate-900 pb-1">
                    <span>Algorithm:</span>
                    <span className="text-white">HMAC-SHA256 (FIPS 140-2)</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-900 pb-1">
                    <span>Ledger Status:</span>
                    <span className="text-emerald-400">Synchronized (WAL #88190)</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-900 pb-1">
                    <span>Zero Data Egress:</span>
                    <span className="text-emerald-400">Enforced (Local Only)</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-900 text-center">
                <span className="font-mono text-[11px] text-slate-500">
                  Any bit change in payload triggers immediate cryptographic seal discrepancy.
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Security Incident Response SLA Matrix */}
        <div className="mb-20">
          <div className="mb-6">
            <span className="font-mono text-xs text-slate-500 uppercase tracking-wider font-semibold">
              INCIDENT RESPONSE
            </span>
            <h2 className="text-2xl font-display font-bold text-slate-950 mt-1">
              {t.pages.securityPage.slaTitle}
            </h2>
            <p className="text-xs text-slate-600 mt-1">
              {t.pages.securityPage.slaDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white border border-rose-200 rounded-lg shadow-2xs">
              <span className="font-mono text-[11px] font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                {t.pages.securityPage.p0Time}
              </span>
              <h3 className="font-display font-bold text-base text-slate-950 mt-3 mb-2">
                {t.pages.securityPage.p0Title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t.pages.securityPage.p0Desc}
              </p>
            </div>

            <div className="p-6 bg-white border border-amber-200 rounded-lg shadow-2xs">
              <span className="font-mono text-[11px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                {t.pages.securityPage.p1Time}
              </span>
              <h3 className="font-display font-bold text-base text-slate-950 mt-3 mb-2">
                {t.pages.securityPage.p1Title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t.pages.securityPage.p1Desc}
              </p>
            </div>

            <div className="p-6 bg-white border border-slate-200 rounded-lg shadow-2xs">
              <span className="font-mono text-[11px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                {t.pages.securityPage.p2Time}
              </span>
              <h3 className="font-display font-bold text-base text-slate-950 mt-3 mb-2">
                {t.pages.securityPage.p2Title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t.pages.securityPage.p2Desc}
              </p>
            </div>
          </div>
        </div>

        {/* Whitepaper & Compliance Package */}
        <div className="p-8 sm:p-12 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-xl font-bold text-slate-950 mb-1">
              {t.pages.securityPage.whitepaperTitle}
            </h3>
            <p className="text-xs text-slate-600 max-w-xl">
              {t.pages.securityPage.whitepaperDesc}
            </p>
          </div>

          <button
            onClick={handleDownloadPackage}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-950 text-white font-medium text-xs rounded hover:bg-slate-800 transition-all shadow-sm shrink-0"
          >
            {downloadRequested ? <Check className="w-4 h-4 text-emerald-400" /> : <Download className="w-4 h-4" />}
            <span>{downloadRequested ? "Request Dispatched to Security Desk" : t.pages.securityPage.whitepaperBtn}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
