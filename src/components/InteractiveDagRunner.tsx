import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/LanguageContext';
import { dagScenarios, getScenario } from '../data/dagScenarios';
import { NodeStatus } from '../types';
import { 
  Play, 
  RotateCcw, 
  StepForward, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldCheck, 
  Terminal, 
  Clock, 
  Layers, 
  Lock,
  ChevronRight,
  Code2
} from 'lucide-react';

export const InteractiveDagRunner: React.FC = () => {
  const { lang, t } = useApp();
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>('s2'); // Default to HITL scenario for maximum impact
  const [activeNodeIndex, setActiveNodeIndex] = useState<number>(-1);
  const [nodeStatuses, setNodeStatuses] = useState<Record<string, NodeStatus>>({});
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isHitlPaused, setIsHitlPaused] = useState<boolean>(false);
  const [cumulativeLatency, setCumulativeLatency] = useState<number>(0);
  const [showJsonInspector, setShowJsonInspector] = useState<boolean>(true);
  const [payloadTab, setPayloadTab] = useState<'ingress' | 'egress'>('ingress');

  const scenario = getScenario(selectedScenarioId) || dagScenarios[0];
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize or reset state when scenario changes
  const resetDag = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setIsRunning(false);
    setIsHitlPaused(false);
    setActiveNodeIndex(-1);
    setCumulativeLatency(0);

    const initialStatuses: Record<string, NodeStatus> = {};
    scenario.nodes.forEach(node => {
      initialStatuses[node.id] = 'idle';
    });
    setNodeStatuses(initialStatuses);
  };

  useEffect(() => {
    resetDag();
  }, [selectedScenarioId]);

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  // Step to a specific node index
  const executeStep = (stepIndex: number, autoContinue: boolean) => {
    if (stepIndex >= scenario.nodes.length) {
      setIsRunning(false);
      return;
    }

    const currentNode = scenario.nodes[stepIndex];
    setActiveNodeIndex(stepIndex);

    // If this node is HITL gate, suspend execution
    if (currentNode.isHitl) {
      setNodeStatuses(prev => ({
        ...prev,
        [currentNode.id]: 'awaiting_approval'
      }));
      setIsRunning(false);
      setIsHitlPaused(true);
      setPayloadTab('egress');
      return;
    }

    // Regular node: set to running, then completed after delay
    setNodeStatuses(prev => ({
      ...prev,
      [currentNode.id]: 'running'
    }));

    const stepDuration = Math.max(300, currentNode.durationMs);

    timerRef.current = setTimeout(() => {
      setNodeStatuses(prev => ({
        ...prev,
        [currentNode.id]: 'completed'
      }));
      setCumulativeLatency(prev => prev + currentNode.durationMs);

      if (autoContinue && stepIndex + 1 < scenario.nodes.length) {
        executeStep(stepIndex + 1, true);
      } else if (stepIndex + 1 >= scenario.nodes.length) {
        setIsRunning(false);
        setPayloadTab('egress');
      }
    }, stepDuration);
  };

  const handleRunPipeline = () => {
    if (isRunning) return;
    resetDag();
    setIsRunning(true);
    // Begin from step 0
    setTimeout(() => {
      executeStep(0, true);
    }, 100);
  };

  const handleStepForward = () => {
    if (isRunning || isHitlPaused) return;
    const nextIndex = activeNodeIndex + 1;
    if (nextIndex < scenario.nodes.length) {
      executeStep(nextIndex, false);
    }
  };

  const handleAuthorizeHitl = () => {
    if (!isHitlPaused) return;
    const hitlNode = scenario.nodes[activeNodeIndex];
    if (!hitlNode) return;

    setNodeStatuses(prev => ({
      ...prev,
      [hitlNode.id]: 'completed'
    }));
    setCumulativeLatency(prev => prev + hitlNode.durationMs);
    setIsHitlPaused(false);
    setIsRunning(true);

    // Resume execution for next node
    const nextIndex = activeNodeIndex + 1;
    if (nextIndex < scenario.nodes.length) {
      timerRef.current = setTimeout(() => {
        executeStep(nextIndex, true);
      }, 300);
    } else {
      setIsRunning(false);
    }
  };

  const allCompleted = scenario.nodes.every(n => nodeStatuses[n.id] === 'completed');

  return (
    <section id="runtime" className="py-20 border-b border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-status-pulse"></span>
              <p className="font-mono text-xs uppercase tracking-wider text-slate-500">
                {t.dag.eyebrow}
              </p>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-semibold text-slate-950 tracking-tight">
              {t.dag.title}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
              {t.dag.subtitle}
            </p>
          </div>

          {/* Scenario Tabs */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-1 p-1 bg-slate-100 rounded-lg border border-slate-200/80">
            {dagScenarios.map(sc => (
              <button
                key={sc.id}
                onClick={() => setSelectedScenarioId(sc.id)}
                className={`px-3 py-1.5 text-xs font-mono rounded-md transition-all ${
                  selectedScenarioId === sc.id
                    ? 'bg-white text-slate-950 font-medium shadow-sm border border-slate-200'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-slate-200/60'
                }`}
              >
                {t.dag.scenarios[sc.key].tab}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Scenario Context Bar */}
        <div className="mb-6 p-4 bg-slate-50 border border-slate-200 rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-slate-500 uppercase tracking-wider">Active Pipeline:</span>
              <span className="font-mono text-xs font-semibold text-slate-900 bg-white px-2 py-0.5 border border-slate-200 rounded">
                {scenario.id.toUpperCase()} // DETERMINISTIC
              </span>
            </div>
            <h3 className="mt-1 text-base font-semibold text-slate-900">
              {t.dag.scenarios[scenario.key].title}
            </h3>
            <p className="text-xs text-slate-600 mt-0.5 max-w-4xl">
              {t.dag.scenarios[scenario.key].desc}
            </p>
          </div>

          {/* Interactive Controls */}
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={handleRunPipeline}
              disabled={isRunning || isHitlPaused}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-md transition-all ${
                isRunning
                  ? 'bg-emerald-50 border border-emerald-300 text-emerald-700'
                  : 'bg-slate-950 text-white hover:bg-slate-800 shadow-sm'
              }`}
            >
              <Play className={`w-3.5 h-3.5 ${isRunning ? 'animate-spin' : ''}`} />
              <span>{isRunning ? t.dag.running : t.dag.run}</span>
            </button>

            <button
              onClick={handleStepForward}
              disabled={isRunning || isHitlPaused || allCompleted}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium bg-white text-slate-700 border border-slate-200 rounded-md hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <StepForward className="w-3.5 h-3.5" />
              <span>{t.dag.stepForward}</span>
            </button>

            <button
              onClick={resetDag}
              className="inline-flex items-center gap-1.5 px-2.5 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-all"
              title={t.dag.reset}
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* HITL Suspension Banner */}
        {isHitlPaused && (
          <div className="mb-6 p-4 bg-amber-50/90 border border-amber-300 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-fadeIn">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-amber-100 text-amber-800 rounded border border-amber-200 shrink-0">
                <AlertTriangle className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-900">
                  {t.dag.hitlRequired}
                </p>
                <p className="text-xs text-amber-800 mt-0.5 max-w-2xl">
                  {t.dag.hitlDesc}
                </p>
              </div>
            </div>

            <button
              onClick={handleAuthorizeHitl}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-semibold bg-amber-600 text-white rounded-md hover:bg-amber-700 shadow-sm transition-all whitespace-nowrap"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>{t.dag.authorize}</span>
            </button>
          </div>
        )}

        {/* All Completed Notice */}
        {allCompleted && !isRunning && (
          <div className="mb-6 p-3 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center gap-2 text-emerald-800 text-xs font-mono">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>{t.dag.scenarioCompleted} ({cumulativeLatency}ms total)</span>
          </div>
        )}

        {/* DAG Nodes Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {scenario.nodes.map((node, index) => {
            const status = nodeStatuses[node.id] || 'idle';
            const isActive = index === activeNodeIndex;

            return (
              <div
                key={node.id}
                className={`relative p-4 rounded-lg border transition-all ${
                  status === 'running'
                    ? 'bg-emerald-50/40 border-emerald-400 ring-1 ring-emerald-400/30'
                    : status === 'awaiting_approval'
                    ? 'bg-amber-50/50 border-amber-400 ring-1 ring-amber-400/30'
                    : status === 'completed'
                    ? 'bg-white border-slate-300'
                    : 'bg-slate-50/60 border-slate-200'
                }`}
              >
                {/* Node Top Meta */}
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-mono text-[10px] text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">
                    STEP 0{index + 1}
                  </span>
                  
                  {/* Status Indicator */}
                  <div className="flex items-center gap-1.5">
                    {status === 'idle' && (
                      <span className="flex items-center gap-1 text-[11px] font-mono text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                        Idle
                      </span>
                    )}
                    {status === 'running' && (
                      <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-600 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-status-pulse"></span>
                        Executing
                      </span>
                    )}
                    {status === 'awaiting_approval' && (
                      <span className="flex items-center gap-1 text-[11px] font-mono text-amber-700 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping"></span>
                        Awaiting HITL
                      </span>
                    )}
                    {status === 'completed' && (
                      <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        Committed
                      </span>
                    )}
                  </div>
                </div>

                {/* Role Badge */}
                <p className="font-mono text-[11px] uppercase tracking-wider text-slate-500 mb-1">
                  {lang === 'zh' ? node.roleZh : node.roleEn}
                </p>

                {/* Node Name */}
                <h4 className="text-sm font-semibold text-slate-900 leading-snug">
                  {lang === 'zh' ? node.nameZh : node.nameEn}
                </h4>

                {/* Node Description */}
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  {lang === 'zh' ? node.descZh : node.descEn}
                </p>

                {/* Telemetry Footer */}
                <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" />
                    {status === 'completed' ? `${node.durationMs}ms` : `~${node.durationMs}ms`}
                  </span>
                  {node.isHitl && (
                    <span className="text-amber-700 font-semibold bg-amber-100/80 px-1 rounded text-[10px]">
                      HITL GATE
                    </span>
                  )}
                </div>

                {/* Step Connector Arrow (for desktop) */}
                {index < scenario.nodes.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-slate-300">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Telemetry Strip & JSON Payload Inspector Panel */}
        <div className="border border-slate-200 rounded-lg overflow-hidden bg-slate-900 text-slate-200 shadow-sm">
          {/* Panel Top Bar */}
          <div className="flex flex-wrap items-center justify-between px-4 py-2.5 bg-slate-950 border-b border-slate-800 text-xs font-mono">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <Terminal className="w-3.5 h-3.5" />
                <span>STATE TELEMETRY BUS</span>
              </span>
              <span className="text-slate-500 hidden sm:inline">|</span>
              <span className="text-slate-400 hidden sm:inline">
                LATENCY: <strong className="text-white">{cumulativeLatency} ms</strong>
              </span>
              <span className="text-slate-500 hidden sm:inline">|</span>
              <span className="text-slate-400 hidden sm:inline">
                IDEMPOTENCY: <strong className="text-emerald-400">VERIFIED</strong>
              </span>
            </div>

            <div className="flex items-center gap-2 mt-2 sm:mt-0">
              <button
                onClick={() => setPayloadTab('ingress')}
                className={`px-2 py-1 rounded text-[11px] transition-all ${
                  payloadTab === 'ingress'
                    ? 'bg-slate-800 text-white font-medium'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Ingress Payload
              </button>
              <button
                onClick={() => setPayloadTab('egress')}
                className={`px-2 py-1 rounded text-[11px] transition-all ${
                  payloadTab === 'egress'
                    ? 'bg-slate-800 text-emerald-300 font-medium'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Ledger State
              </button>
              <button
                onClick={() => setShowJsonInspector(!showJsonInspector)}
                className="text-slate-400 hover:text-white ml-2 text-[11px]"
              >
                {showJsonInspector ? 'Collapse' : 'Expand'}
              </button>
            </div>
          </div>

          {/* JSON Inspector View */}
          {showJsonInspector && (
            <div className="p-4 overflow-x-auto font-mono text-xs leading-relaxed text-slate-300 bg-slate-900/90">
              <pre className="text-slate-300 selection:bg-slate-700">
                {JSON.stringify(
                  payloadTab === 'ingress' ? scenario.initialPayload : scenario.finalPayload,
                  null,
                  2
                )}
              </pre>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
