import React, { useState, useEffect } from 'react';
import { useApp } from '../context/LanguageContext';
import { soundFx } from '../utils/sound';
import { 
  Play, RotateCcw, CheckCircle2, Clock, 
  FileText, Database, Cpu, Code2, 
  UserCheck, AlertCircle, Check
} from 'lucide-react';

type ScenarioKey = 'sales' | 'document' | 'knowledge';

export const InteractiveWorkflowRunner: React.FC = () => {
  const { t } = useApp();
  const [activeScenario, setActiveScenario] = useState<ScenarioKey>('sales');
  const [currentStep, setCurrentStep] = useState<number>(-1); // -1 = idle, 0..3 = stages running, 4 = paused at human approval, 5 = approved & done
  const [latency, setLatency] = useState<number>(0);
  const [showJson, setShowJson] = useState<boolean>(false);

  const scenarioData = t.simulator.scenarios[activeScenario];

  // Run animation
  useEffect(() => {
    let timer: any;
    if (currentStep >= 0 && currentStep < 4) {
      soundFx.playNodeStep();
      timer = setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
        setLatency((prev) => prev + Math.floor(Math.random() * 250) + 180);
      }, 700);
    }
    return () => clearTimeout(timer);
  }, [currentStep]);

  const handleStart = () => {
    soundFx.playClick();
    setCurrentStep(0);
    setLatency(120);
  };

  const handleReset = () => {
    soundFx.playClick();
    setCurrentStep(-1);
    setLatency(0);
  };

  const handleApprove = () => {
    soundFx.playSuccess();
    setCurrentStep(5);
  };

  const handleTabChange = (key: ScenarioKey) => {
    soundFx.playClick();
    setActiveScenario(key);
    setCurrentStep(-1);
    setLatency(0);
  };

  const mockPayload = {
    event_id: `evt_2026_${activeScenario}_99`,
    timestamp: new Date().toISOString(),
    status: currentStep === 5 ? "SYNCED_CRM" : currentStep === 4 ? "PENDING_HUMAN_APPROVAL" : "PROCESSING",
    pipeline_latency_ms: latency,
    confidence_score: 0.994,
    metadata: {
      input_source: scenarioData.from,
      subject: scenarioData.subject,
    },
    extracted_payload: {
      intent: "Commercial Inquiry",
      qualification: "Passed (+34% Margin)",
      crm_destination: "HubSpot Enterprise",
      human_reviewer: "Director of Operations"
    }
  };

  return (
    <section className="relative py-12">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-cyber-blue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
            {t.simulator.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 font-sans">
            {t.simulator.subtitle}
          </p>
        </div>

        {/* Outer Dashboard Shell */}
        <div className="glass-panel rounded-2xl border border-obsidian-750 shadow-2xl overflow-hidden bg-obsidian-950/80 backdrop-blur-xl">
          
          {/* Top Bar: Scenarios & Controls */}
          <div className="p-4 sm:p-5 border-b border-obsidian-800 bg-obsidian-900/60 flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Scenario Tabs */}
            <div className="flex flex-wrap gap-2">
              {(['sales', 'document', 'knowledge'] as ScenarioKey[]).map((key) => {
                const isTabActive = activeScenario === key;
                return (
                  <button
                    key={key}
                    onClick={() => handleTabChange(key)}
                    className={`px-3.5 py-2 rounded-lg text-xs font-mono font-medium transition-all flex items-center space-x-2 ${
                      isTabActive
                        ? 'bg-cyber-blue text-white shadow-md shadow-blue-500/20 border border-blue-400/40'
                        : 'bg-obsidian-850 text-slate-400 hover:text-slate-200 hover:bg-obsidian-800 border border-obsidian-800'
                    }`}
                  >
                    <span>{t.simulator.scenarios[key].tab}</span>
                  </button>
                );
              })}
            </div>

            {/* Simulation Action Controls */}
            <div className="flex items-center space-x-3 self-end md:self-auto">
              <button
                onClick={() => setShowJson(!showJson)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition-all flex items-center space-x-1.5 ${
                  showJson
                    ? 'bg-obsidian-800 border-cyber-blue text-cyber-blue'
                    : 'bg-obsidian-900 border-obsidian-800 text-slate-400 hover:text-slate-300'
                }`}
                title="Toggle JSON Payload"
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>JSON</span>
              </button>

              {currentStep === -1 ? (
                <button
                  onClick={handleStart}
                  className="px-4 py-2 rounded-lg text-xs font-medium text-white bg-emerald-600 hover:bg-emerald-500 shadow-md shadow-emerald-500/20 flex items-center space-x-2 active:scale-95 transition-all"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{t.simulator.runButton}</span>
                </button>
              ) : (
                <button
                  onClick={handleReset}
                  className="px-4 py-2 rounded-lg text-xs font-medium text-slate-300 bg-obsidian-800 hover:bg-obsidian-700 border border-obsidian-700 flex items-center space-x-2 transition-all"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{t.simulator.resetButton}</span>
                </button>
              )}
            </div>
          </div>

          {/* Telemetry Bar */}
          <div className="px-5 py-2.5 bg-obsidian-900/90 border-b border-obsidian-800/80 flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-400 gap-2">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1.5">
                <span className={`w-2 h-2 rounded-full ${currentStep === -1 ? 'bg-slate-500' : currentStep >= 4 ? 'bg-emerald-400' : 'bg-amber-400 animate-ping'}`} />
                <span className="text-slate-300">
                  {currentStep === -1
                    ? "STANDBY"
                    : currentStep < 4
                    ? `STAGE ${currentStep + 1}/4 RUNNING`
                    : currentStep === 4
                    ? "HUMAN_APPROVAL_GATE"
                    : "COMPLETED"}
                </span>
              </div>
              <span className="text-obsidian-700">|</span>
              <div className="flex items-center space-x-1">
                <Clock className="w-3 h-3 text-slate-500" />
                <span>Latency: <strong className="text-slate-200">{latency}ms</strong></span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <span>Fidelity: <strong className="text-emerald-400">99.9%</strong></span>
              <span className="text-obsidian-700">|</span>
              <span>Guardrails: <strong className="text-cyber-blue">Active</strong></span>
            </div>
          </div>

          {/* Main Simulation Viewport */}
          <div className="p-5 sm:p-7 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Left Column: Raw Input Event Card */}
            <div className="lg:col-span-4 bg-obsidian-900/70 border border-obsidian-800 rounded-xl p-4 sm:p-5 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                  <span className="text-cyber-blue flex items-center space-x-1">
                    <MailIcon className="w-3.5 h-3.5" />
                    <span>INPUT_EVENT</span>
                  </span>
                  <span className="text-[10px] bg-obsidian-800 px-2 py-0.5 rounded text-slate-400">Raw</span>
                </div>
                <h4 className="text-sm font-semibold text-white tracking-tight">
                  {scenarioData.inputLabel}
                </h4>
                
                <div className="mt-3 p-3 bg-obsidian-950/80 rounded-lg border border-obsidian-800/80 text-xs font-mono space-y-1.5 text-slate-300">
                  <div className="text-slate-400 truncate">{scenarioData.from}</div>
                  <div className="font-semibold text-slate-200">{scenarioData.subject}</div>
                  <div className="text-slate-400 italic pt-1 leading-relaxed">{scenarioData.body}</div>
                  {scenarioData.file && (
                    <div className="mt-2 pt-2 border-t border-obsidian-800 flex items-center text-[11px] text-cyber-blue">
                      <FileText className="w-3.5 h-3.5 mr-1.5 flex-shrink-0" />
                      <span className="truncate">{scenarioData.file}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="text-[11px] text-slate-400 font-mono flex items-center justify-between pt-2 border-t border-obsidian-800">
                <span>Ingestion: Webhook / REST</span>
                <span className="text-emerald-400 font-bold">Verified</span>
              </div>
            </div>

            {/* Middle Column: 4 Autonomous Pipeline Stages */}
            <div className="lg:col-span-8 flex flex-col space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center justify-between">
                <span>Autonomous Agent Pipeline</span>
                <span>4 Execution Nodes</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {scenarioData.stages.map((stage, idx) => {
                  const isDone = currentStep > idx;
                  const isCurrent = currentStep === idx;

                  return (
                    <div
                      key={idx}
                      className={`relative p-3.5 rounded-xl border transition-all duration-300 ${
                        isDone
                          ? 'bg-obsidian-900/90 border-emerald-500/40 shadow-sm'
                          : isCurrent
                          ? 'bg-obsidian-850 border-cyber-blue shadow-lg shadow-blue-500/10 ring-1 ring-cyber-blue/30'
                          : 'bg-obsidian-900/40 border-obsidian-800/60 opacity-60'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-obsidian-950 text-slate-400">
                          NODE 0{idx + 1} · {stage.role}
                        </span>
                        
                        {isDone ? (
                          <span className="flex items-center text-emerald-400 text-xs font-mono">
                            <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                            <span>Done</span>
                          </span>
                        ) : isCurrent ? (
                          <span className="flex items-center text-cyber-blue text-xs font-mono">
                            <Cpu className="w-3.5 h-3.5 mr-1 animate-spin" />
                            <span>Active</span>
                          </span>
                        ) : (
                          <span className="text-slate-400 text-xs font-mono">Queued</span>
                        )}
                      </div>

                      <h5 className="text-xs sm:text-sm font-semibold text-white">
                        {stage.name}
                      </h5>
                      <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                        {stage.desc}
                      </p>

                      {/* Animated bottom progress line if current */}
                      {isCurrent && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyber-blue to-emerald-400 animate-pulse" />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Checkpoint Gate or Output Box */}
              {currentStep >= 4 && (
                <div className={`mt-2 p-4 rounded-xl border transition-all animate-fadeIn ${
                  currentStep === 4 
                    ? 'bg-amber-950/20 border-amber-500/40 ring-1 ring-amber-500/20' 
                    : 'bg-emerald-950/20 border-emerald-500/40'
                }`}>
                  
                  {currentStep === 4 ? (
                    /* Human Approval Gate */
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-amber-400 text-xs font-mono font-semibold">
                          <AlertCircle className="w-4 h-4 animate-bounce" />
                          <span>{t.simulator.approvalRequired}</span>
                        </div>
                        <span className="text-[10px] font-mono bg-amber-900/40 text-amber-300 px-2 py-0.5 rounded">
                          Human-in-the-Loop Gate
                        </span>
                      </div>

                      <p className="text-xs text-slate-300">
                        {scenarioData.outputTitle}: All preconditions met. Approval required before dispatching external email and committing record to CRM.
                      </p>

                      <ul className="space-y-1 text-xs text-slate-300 bg-obsidian-950/60 p-3 rounded-lg border border-obsidian-800">
                        {scenarioData.checks.map((chk, i) => (
                          <li key={i} className="flex items-start space-x-2">
                            <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                            <span>{chk}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex items-center space-x-3 pt-1">
                        <button
                          onClick={handleApprove}
                          className="px-4 py-2 rounded-lg text-xs font-medium text-white bg-emerald-600 hover:bg-emerald-500 shadow-md flex items-center space-x-1.5 transition-all active:scale-95"
                        >
                          <UserCheck className="w-3.5 h-3.5" />
                          <span>{t.simulator.approveAction}</span>
                        </button>
                        <button
                          onClick={handleReset}
                          className="px-3 py-2 rounded-lg text-xs text-slate-400 hover:text-white bg-obsidian-900 border border-obsidian-800 transition-all"
                        >
                          {t.simulator.rejectAction}
                        </button>
                      </div>
                    </div>
                  ) : (
                    /* Approved and Completed State */
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                          <CheckCircle2 className="w-5 h-5" />
                        </div>
                        <div>
                          <h6 className="text-xs font-semibold text-white">
                            Autonomous Pipeline Execution Complete
                          </h6>
                          <p className="text-[11px] text-emerald-400 font-mono">
                            {scenarioData.crmStatus}
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={handleReset}
                        className="text-xs px-3 py-1.5 rounded-lg bg-obsidian-800 text-slate-300 hover:text-white border border-obsidian-700"
                      >
                        {t.simulator.resetButton}
                      </button>
                    </div>
                  )}

                </div>
              )}

            </div>
          </div>

          {/* Raw JSON Inspector Accordion */}
          {showJson && (
            <div className="border-t border-obsidian-800 bg-obsidian-950 p-4 animate-fadeIn">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                <span className="flex items-center space-x-1.5 text-cyber-blue">
                  <Database className="w-3.5 h-3.5" />
                  <span>PAYLOAD_INSPECTION_BUFFER</span>
                </span>
                <span>application/json</span>
              </div>
              <pre className="text-[11px] font-mono text-emerald-300 bg-obsidian-900/90 p-4 rounded-xl border border-obsidian-800 overflow-x-auto max-h-60 leading-relaxed">
                {JSON.stringify(mockPayload, null, 2)}
              </pre>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};

// Internal icon helper
const MailIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
