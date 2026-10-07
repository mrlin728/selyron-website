export const en = {
  nav: {
    brandBadge: "[INFRASTRUCTURE // CORE]",
    runtime: "Runtime",
    architecture: "Architecture",
    scenarios: "Use Cases",
    security: "Trust & Security",
    specs: "Specs",
    scheduleReview: "Schedule Architecture Review",
    langToggle: "中文",
    systemActive: "Core Operational · v2.4"
  },
  hero: {
    versionBadge: "v2.4 DETERMINISTIC EXECUTION RUNTIME",
    title: "Deterministic Automation for the Enterprise Core",
    subtitle: "High-reliability, auditable, state-persistent automation infrastructure. Unifying legacy ERPs, multi-model gateways, and distributed operations with zero silent failures.",
    startAssessment: "Start Architecture Assessment",
    inspectRuntime: "Inspect Live DAG Engine"
  },
  telemetry: {
    determinism: "99.99% Execution Determinism",
    determinismSub: "Zero unhandled state drift",
    latency: "<120ms Gateway Latency",
    latencySub: "P99 model routing & token cache",
    reliability: "Zero Silent Failures",
    reliabilitySub: "Idempotency locks & atomic rollbacks",
    deployment: "Private VPC & Air-Gap Ready",
    deploymentSub: "100% on-prem data sovereignty"
  },
  dag: {
    eyebrow: "01 // REAL-TIME EXECUTION ENGINE",
    title: "Deterministic State Machine & DAG Simulator",
    subtitle: "Step through enterprise pipelines. Inspect real-time state transitions, micro-latency telemetry, automated retries, and cryptographic human-in-the-loop (HITL) checkpoints.",
    run: "Run Pipeline",
    running: "Executing Step...",
    stepForward: "Step Forward",
    reset: "Reset DAG",
    hitlRequired: "Pipeline Suspended: Human Authorization Gate",
    hitlDesc: "Critical state transition requires cryptographic operator sign-off before committing to the enterprise ledger.",
    authorize: "Authorize Sign-Off",
    telemetryTitle: "Runtime Telemetry",
    payloadTitle: "State Payload Inspector",
    nodeId: "Node ID",
    status: "Status",
    latencyMs: "Latency",
    retryCount: "Retries",
    nodes: "Nodes",
    scenarioCompleted: "Pipeline Succeeded · All Nodes Committed",
    scenarios: {
      s1: {
        tab: "01. Document Ingestion & ERP Sync",
        title: "Multimodal Document Ingestion & Cross-ERP Reconciliation",
        desc: "Ingesting non-standard commercial invoices, running multi-pass OCR parsing, validating against ERP inventory purchase orders, and committing atomic financial entries."
      },
      s2: {
        tab: "02. Event Ingress & HITL Gate",
        title: "Cross-System Event Ingress & Human-in-the-Loop Gate",
        desc: "Processing asynchronous anomaly webhooks, calculating financial exposure, pausing execution for operator cryptographic sign-off, and executing synchronized rollback guards."
      },
      s3: {
        tab: "03. Multi-Model Gateway & Audit",
        title: "Adaptive Multi-Model Gateway & Immutable Audit Ledger",
        desc: "Routing requests across foundation models based on SLA/cost constraints, enforcing strict PII redaction, and generating cryptographically verifiable SHA-256 audit trails."
      }
    }
  },
  tiers: {
    eyebrow: "02 // ARCHITECTURAL BLUEPRINT",
    title: "The 4-Tier Infrastructure Stack",
    subtitle: "Decoupled, modular, and resilient. Engineered to embed into existing enterprise environments without displacing core transaction systems.",
    tier1: {
      number: "TIER 01",
      name: "Event Ingress & Ingestion Layer",
      desc: "High-throughput ingress handling webhooks, asynchronous message queues, SFTP batch feeds, and non-standard scanned documents with deterministic deduplication.",
      protocols: "Kafka · RabbitMQ · gRPC · S3 / SFTP Feeds"
    },
    tier2: {
      number: "TIER 02",
      name: "Deterministic Orchestration Core",
      desc: "Stateful Directed Acyclic Graph (DAG) runtime with distributed state persistence, distributed locks, exponential backoff retries, and human-in-the-loop suspension.",
      protocols: "State Persistence · Idempotency Locks · Atomic Rollback"
    },
    tier3: {
      number: "TIER 03",
      name: "Adaptive Intelligence Gateway",
      desc: "Dynamic multi-model routing layer optimizing for latency, inference cost, and data compliance. Real-time token caching and automatic PII sanitization.",
      protocols: "DeepSeek-R1 · Claude 3.7 · GPT-4o · Private Local Weights"
    },
    tier4: {
      number: "TIER 04",
      name: "Enterprise Egress & Audit Ledger",
      desc: "Two-phase commits into legacy systems (SAP, Oracle, Kingdee, Salesforce) paired with immutable append-only execution logs for institutional compliance.",
      protocols: "SAP RFC / OData · Salesforce REST · SHA-256 Audit Ledger"
    }
  },
  scenarios: {
    eyebrow: "03 // ENTERPRISE PRODUCTION SOLUTIONS",
    title: "Engineered for High-Stakes Operations",
    subtitle: "Where consumer automation tools fail: handling millions in transactions, strict regulatory boundaries, and non-negotiable SLAs.",
    case1: {
      tag: "FINANCIAL & SUPPLY CHAIN",
      title: "Three-Way Invoice & Customs Reconciliation",
      challenge: "Global manufacturing conglomerate struggling with 45,000 monthly multi-currency invoices with varying tax codes, causing 14-day settlement delays.",
      outcome: "Autonomous 3-way matching between PO, customs declarations, and warehouse slips with exception routing directly to finance controllers.",
      metricValue: "< 3 min",
      metricLabel: "Average End-to-End Cycle Time"
    },
    case2: {
      tag: "CRITICAL OPERATIONS",
      title: "Automated Incident Escalation with HITL Authorization",
      challenge: "High-volume logistics provider losing thousands per hour during fulfillment anomalies due to manual triage and delayed supervisor sign-offs.",
      outcome: "Automated root-cause telemetry isolation with instant Slack/Feishu approval hooks, allowing managers to authorize multi-system rollbacks in 1 tap.",
      metricValue: "88%",
      metricLabel: "Reduction in Mean Time to Resolve"
    },
    case3: {
      tag: "GOVERNANCE & COMPLIANCE",
      title: "Institutional Policy Verification & Audit Trailing",
      challenge: "Cross-border fintech handling multi-jurisdiction compliance screening across fragmented data silos with high audit risk.",
      outcome: "Zero-retention routing gateway sanitizing sensitive data before foundation model classification, appending cryptographic audit proofs to every decision.",
      metricValue: "100%",
      metricLabel: "Tamper-Evident Audit Parity"
    }
  },
  security: {
    eyebrow: "04 // TRUST, SECURITY & GOVERNANCE",
    title: "Sovereign Infrastructure by Design",
    subtitle: "Your proprietary operational data never leaves your perimeter, is never used for third-party model training, and adheres to institutional governance standards.",
    pillar1: {
      title: "Dedicated Private VPC & On-Premises",
      desc: "Deployable entirely within your AWS/GCP/Azure tenant or bare-metal air-gapped data centers with zero external egress dependencies.",
      tag: "DEPLOYMENT SOVEREIGNTY"
    },
    pillar2: {
      title: "Zero Model Training Retention",
      desc: "Strict contractual and architectural guarantees: customer transaction payloads and intellectual property are never retained or used to train public models.",
      tag: "DATA PRIVACY GUARANTEE"
    },
    pillar3: {
      title: "Cryptographic Tamper-Proof Audit",
      desc: "Every node execution, human authorization, and system egress call generates an immutable cryptographic hash for regulatory compliance.",
      tag: "CHAIN OF CUSTODY"
    },
    pillar4: {
      title: "Enterprise SLA & Disaster Recovery",
      desc: "99.99% availability SLA with multi-region state machine failover, deterministic replay capability, and 24/7 dedicated engineering support.",
      tag: "INSTITUTIONAL GRADE"
    }
  },
  diagnostic: {
    title: "Pre-Flight Architecture Assessment",
    subtitle: "Evaluate your enterprise automation readiness across system integration, data volume, and security posture.",
    step1Title: "Step 1: Primary Architectural Friction",
    step1Desc: "Select the primary bottleneck currently slowing down your operational flow.",
    step2Title: "Step 2: Deployment Environment & Throughput",
    step2Desc: "Choose your target deployment topology and expected daily transaction volume.",
    step3Title: "Step 3: Enterprise Contact & Dispatch",
    step3Desc: "Receive an instant pre-flight engineering brief tailored to your requirements.",
    next: "Next Step",
    back: "Back",
    submit: "Generate Engineering Brief & Request Review",
    submitting: "Generating Architecture Profile...",
    summaryTitle: "Pre-Flight Architecture Profile Ready",
    summaryDesc: "Our Forward-Deployed Engineering team will review your system parameters within 24 business hours.",
    close: "Close Assessment",
    recommendationTitle: "Preliminary Architecture Recommendation",
    recommendationBody: "Recommended Architecture: Hybrid Sovereign VPC with Selyron Deterministic Orchestration Core and Dedicated Model Routing Gateway.",
    options: {
      friction1: "Unstructured Document Extraction & Reconciliation (Invoices, Contracts, Scans)",
      friction2: "Cross-System Synchronization & Legacy ERP Fragility (SAP, Kingdee, Salesforce)",
      friction3: "Non-Deterministic AI Drift & Hallucination in Mission-Critical Decisions",
      friction4: "Complex Multi-Party Approvals with Lacking Auditability",
      env1: "Dedicated Cloud VPC (AWS / Azure / GCP)",
      env2: "On-Premises / Sovereign Private Data Center",
      env3: "Air-Gapped Hybrid Network",
      vol1: "< 10,000 Transactions / Day",
      vol2: "10,000 - 100,000 Transactions / Day",
      vol3: "> 100,000 Transactions / Day (High Throughput)"
    },
    fields: {
      workEmail: "Work Email",
      companyName: "Company / Organization Name",
      role: "Your Technical / Operational Role",
      notes: "Specific System Constraints (Optional)"
    }
  },
  footer: {
    systemOperational: "All Systems Operational · Selyron Core Runtime v2.4",
    brandSummary: "Deterministic automation infrastructure and forward-deployed engineering for mission-critical enterprise workflows.",
    navigation: "Navigation",
    securityTitle: "Security & Trust",
    legal: "Legal & Compliance",
    copyright: "© 2026 Selyron Systems Inc. All rights reserved."
  }
};
