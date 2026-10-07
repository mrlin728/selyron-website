export const en = {
  nav: {
    brandBadge: "[INFRASTRUCTURE // CORE]",
    home: "Overview",
    runtime: "Runtime",
    architecture: "Architecture",
    solutions: "Solutions",
    scenarios: "Use Cases",
    security: "Trust & Security",
    specs: "Specs & Docs",
    guarantee: "SLA & Guarantee",
    faq: "FAQ",
    scheduleReview: "Schedule Architecture Review",
    langToggle: "中文",
    systemActive: "Core Operational · v2.4"
  },
  hero: {
    versionBadge: "v2.4 DETERMINISTIC EXECUTION RUNTIME",
    title: "Deterministic Automation for the Enterprise Core",
    subtitle: "High-reliability, auditable, state-persistent automation infrastructure. Unifying legacy ERPs, multi-model gateways, and distributed operations with zero silent failures.",
    startAssessment: "Start Architecture Assessment",
    inspectRuntime: "Inspect Live DAG Engine",
    cliPill: "CLI PREVIEW",
    copyCommand: "curl -fsSL https://get.selyron.com/eval | sh",
    copiedCommand: "Command copied to clipboard!"
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
    viewVisual: "Visual DAG Graph",
    viewCode: "Workflow Definition Code",
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
  specs: {
    eyebrow: "05 // SYSTEM SPECIFICATIONS & CONNECTORS",
    title: "Protocol Matrix & Runtime Specifications",
    subtitle: "Hard engineering bounds, deterministic replay guarantees, and certified enterprise integration connectors.",
    connectorsTitle: "Certified Enterprise Connectors",
    benchmarksTitle: "Deterministic Runtime Benchmarks",
    codeTitle: "Declarative Workflow Definition",
    copyCode: "Copy Snippet",
    copied: "Copied to Clipboard!",
    b1: {
      label: "P99 State Transition",
      value: "< 42 ms",
      desc: "In-memory distributed WAL checkpointing"
    },
    b2: {
      label: "Throughput Scalability",
      value: "50,000+ req/s",
      desc: "Stateless distributed execution clusters"
    },
    b3: {
      label: "Token Cache Hit Rate",
      value: "84.2%",
      desc: "Semantic KV cache on recurring inputs"
    },
    b4: {
      label: "Memory Footprint",
      value: "< 14 MB",
      desc: "Lightweight isolated worker sandbox"
    }
  },
  faq: {
    eyebrow: "06 // FREQUENTLY ASKED QUESTIONS",
    title: "Enterprise Architecture Inquiries",
    subtitle: "Transparent technical answers to core questions asked by CTOs, compliance officers, and forward-deployed engineers.",
    q1: {
      q: "How does Selyron eliminate non-deterministic LLM hallucinations in critical pipelines?",
      a: "Selyron separates reasoning from state transition: LLMs only produce structured JSON proposals that must pass strict schema validation, deterministic invariant assertions, and business rule gates before state changes are committed."
    },
    q2: {
      q: "Can Selyron run in a fully air-gapped sovereign VPC without internet access?",
      a: "Yes. Selyron can be deployed 100% on-premises or in an isolated VPC. In air-gapped mode, intelligence routing targets local private foundation model weights (DeepSeek-R1, Qwen 2.5, Llama 3.3) running via vLLM or Ollama on internal GPU clusters."
    },
    q3: {
      q: "How does Human-in-the-Loop (HITL) integrate with our existing enterprise permissions?",
      a: "Selyron maps approval nodes to existing enterprise identity systems via SAML 2.0 / OIDC, Feishu / Slack webhook bots, or custom HSM cryptographic keys. When suspended, state is frozen in the database until an authenticated operator signs off."
    },
    q4: {
      q: "How does Selyron interface with legacy ERPs like SAP or Kingdee that lack modern webhooks?",
      a: "Selyron includes native RFC/BAPI connectors for SAP, ODBC/JDBC transactional adapters, and secure SFTP file drop listeners, executing two-phase commits with idempotency locks."
    },
    q5: {
      q: "What is the difference between Selyron and consumer tools like Zapier or Make?",
      a: "Consumer tools rely on linear best-effort scripts that fail silently during transient network errors. Selyron provides a stateful DAG orchestrator with distributed locking, exponential backoff with jitter, cryptographic audit trails, and zero-data retention security."
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
  pages: {
    backToOverview: "← Back to Platform Overview",
    architecture: {
      eyebrow: "01 // SYSTEM ARCHITECTURE & ENGINE SPEC",
      title: "Deterministic State Machine & Engine Architecture",
      subtitle: "Comprehensive architectural blueprint of Selyron's four-tier runtime: from multi-protocol event ingress to write-ahead consensus and cryptographic audit egress.",
      ingressTitle: "Tier 1: Multi-Protocol Ingress & Idempotency",
      ingressDesc: "Ingests asynchronous events from Kafka, RabbitMQ, Webhooks, gRPC, and legacy ERP RFC/BAPI pollers. Calculates deterministic idempotency keys to eliminate duplicate triggers at wire speed.",
      engineTitle: "Tier 2: Stateful DAG Engine & Distributed WAL",
      engineDesc: "High-throughput finite state machine powered by SQLite/Raft distributed consensus. Enforces atomic rollback compensation, sub-millisecond state checkpoints, and zero silent failures.",
      gatewayTitle: "Tier 3: Sovereign Multi-Model Intelligence Gateway",
      gatewayDesc: "Hybrid model orchestration layer. Performs local PII token redaction before routing tasks between air-gapped on-premise models (vLLM/Ollama) and frontier cloud models (Claude/GPT) under strict JSON schema enforcement.",
      egressTitle: "Tier 4: Transactional Egress & Cryptographic Ledger",
      egressDesc: "Executes two-phase commits across external systems (SAP, Salesforce, Banking Rails). Every state transition is cryptographically sealed with SHA-256 HMAC for immutable audit verification.",
      topologyTitle: "Forward-Deployed Topology & High Availability",
      topologyDesc: "Engineered for zero data egress, sub-second regional failover, and sovereign isolation.",
      vpcTitle: "Sovereign VPC Peering",
      vpcDesc: "Deploys entirely within customer AWS, Azure, or GCP virtual private networks with zero public IP exposure and dedicated KMS encryption.",
      airgapTitle: "Air-Gapped On-Premises",
      airgapDesc: "Fully isolated bare-metal runtime with embedded model inference engines and local database clusters for defense and healthcare.",
      failoverTitle: "<500ms Regional Hot Standby",
      failoverDesc: "Synchronous Raft WAL replication across availability zones guarantees RPO=0 and instant state handover with zero split-brain execution.",
      metricsTitle: "Hardware & Runtime Performance Profile",
      m1Label: "Throughput Capacity",
      m1Val: "50,000+ tx/sec",
      m1Sub: "Benchmarked on 8-core c6i.2xlarge",
      m2Label: "State Transition P99",
      m2Val: "<42 ms",
      m2Sub: "Including disk WAL sync",
      m3Label: "Memory Footprint",
      m3Val: "<180 MB",
      m3Sub: "Zero memory leaks in 30-day soak",
      m4Label: "Recovery Point Objective",
      m4Val: "RPO = 0",
      m4Sub: "Zero uncommitted data loss",
      ctaTitle: "Review Your System Architecture with Staff Engineers",
      ctaDesc: "Get a complete technical feasibility assessment, threat model, and topology proposal tailored to your enterprise infrastructure.",
      ctaButton: "Schedule Architecture Review"
    },
    solutions: {
      eyebrow: "02 // PRODUCTION DEPLOYMENTS & CASE STUDIES",
      title: "Enterprise Solutions & Mission-Critical Case Studies",
      subtitle: "How Global 2000 enterprises replace fragile custom scripts and non-deterministic agent frameworks with Selyron infrastructure.",
      cs1Tag: "Automotive & Manufacturing",
      cs1Title: "Cross-Border ERP & 3PL Supply Chain Synchronization",
      cs1Challenge: "140,000+ daily purchase orders fragmented across legacy SAP ECC 6.0, Oracle NetSuite, and third-party logistics warehouses causing $2.4M in monthly inventory drift.",
      cs1Solution: "Deployed Selyron Ingress deduplicators with 2-phase transactional commit across SAP and NetSuite, processing purchase orders with sub-second reconciliations and automated rollback guards.",
      cs1Result1: "99.98% inventory drift eliminated",
      cs1Result2: "Reconciliation runtime cut from 4 hours to 120ms",
      cs1Result3: "$3.2M annual operational cost savings",
      cs2Tag: "FinTech & Banking",
      cs2Title: "High-Velocity Payment Anomaly Mitigation & Dual-Custody HITL",
      cs2Challenge: "Over $45M daily cross-border wire transfers. Strict AML regulations required manual review of anomalous transactions, creating 6-hour settlement bottlenecks.",
      cs2Solution: "Selyron real-time heuristic fraud scoring suspends suspicious executions at millisecond precision, enforcing cryptographic dual-operator authorization before dispatching to Swift/SEPA rails.",
      cs2Result1: "Zero unauthorized payouts committed",
      cs2Result2: "Suspicious transaction clearance time reduced by 85%",
      cs2Result3: "$3.8M in malicious fraud intercepted",
      cs3Tag: "Healthcare & Life Sciences",
      cs3Title: "Sovereign Multi-Model Gateway & Patient Record De-identification",
      cs3Challenge: "Need to automate clinical trial intake while strictly complying with HIPAA, GDPR, and regional health data residency laws prohibiting public LLM transmission.",
      cs3Solution: "Dual-ring architecture: local air-gapped LLMs extract and scrub PHI/PII data on-premise; sanitized structured tokens route to frontier cloud models with immutable SHA-256 audit logs.",
      cs3Result1: "100% HIPAA/GDPR audit compliance",
      cs3Result2: "Zero PHI data exposure to third-party model providers",
      cs3Result3: "70% reduction in trial processing time",
      methodologyTitle: "Forward-Deployed Delivery Methodology",
      methodologyDesc: "Staff engineers deploy on-site to audit, implement, and benchmark your automation pipelines.",
      phase1Title: "Phase 1: Architecture Review & Threat Model",
      phase1Desc: "Analyze existing ERP, CRM, and DB interfaces. Define idempotency boundaries and HITL authorization policies.",
      phase2Title: "Phase 2: VPC Isolation & Connector Wiring",
      phase2Desc: "Provision sovereign runtime within customer cloud or on-prem perimeter with mutual TLS and hardware security module (HSM) keys.",
      phase3Title: "Phase 3: Shadow Execution & Parity Validation",
      phase3Desc: "Run live workflows in dual-read shadow mode. Verify 100% state matching against legacy outputs before cutover.",
      phase4Title: "Phase 4: Production Cutover & 24/7 SLA",
      phase4Desc: "Seamless production cutover backed by dedicated forward-deployed engineers and guaranteed <15min incident response.",
      roiTitle: "Enterprise Architecture Comparison",
      roiScript: "Fragmented Scripts: High maintenance, unmonitored silent failures, zero state rollback.",
      roiN8n: "Consumer Automation: Fragile cloud polling, memory leaks at scale, public data leakage risks.",
      roiSelyron: "Selyron Infrastructure: Deterministic state engine, Raft WAL, sovereign VPC isolation, cryptographic proof.",
      ctaButton: "Schedule Architecture Assessment"
    },
    specsPage: {
      eyebrow: "03 // DEVELOPER & PROTOCOL REFERENCE",
      title: "Selyron Protocol & SDK Specifications",
      subtitle: "Declarative state-machine DSL, certified enterprise connector matrix, REST/gRPC API reference, and developer CLI tooling.",
      apiTitle: "REST & gRPC Core API Specification",
      apiDesc: "State-machine dispatch and query endpoints protected with Mutual TLS and HMAC signatures.",
      dslTitle: "Declarative State Machine DSL (YAML / JSON)",
      dslDesc: "Define pipelines as code with deterministic state transitions, idempotency constraints, and rollback compensation.",
      connectorsTitle: "Certified Enterprise Connectors",
      connectorsDesc: "Native two-phase commit drivers for enterprise core systems.",
      cliTitle: "Developer CLI Reference",
      cliDesc: "Local simulation, linting, and automated CI/CD pipeline verification.",
      codeTabTs: "TypeScript SDK",
      codeTabPy: "Python SDK",
      codeTabGo: "Go SDK",
      copyCode: "Copy Code",
      copiedCode: "Copied!"
    },
    securityPage: {
      eyebrow: "04 // TRUST, SECURITY & COMPLIANCE",
      title: "Enterprise Security & Cryptographic Audit Portal",
      subtitle: "Zero data training, sovereign VPC isolation, cryptographic state chain verification, and defense-in-depth architecture.",
      toolTitle: "Live Cryptographic Audit Hash Verification Tool",
      toolDesc: "Simulate an enterprise state transition and calculate its immutable SHA-256 HMAC cryptographic chain proof live in browser.",
      toolSimulate: "Generate Sample Transition",
      toolVerify: "Verify HMAC Integrity",
      toolStatusVerified: "Cryptographic Hash Verified · Chain Unbroken",
      toolTxId: "Transaction ID",
      toolPrevHash: "Previous State Hash",
      toolPayload: "State Transition Payload (JSON)",
      toolComputedHash: "Computed SHA-256 HMAC Seal",
      toolSignatureValid: "Proof Signature Valid",
      slaTitle: "Security Incident Response SLA",
      slaDesc: "Guaranteed response times and remediation protocols backed by enterprise SLAs.",
      p0Title: "P0 Critical Vulnerability",
      p0Time: "< 15 minutes",
      p0Desc: "Hotfix deployment within 4 hours; 24/7 war room bridge with Principal Security Engineers.",
      p1Title: "P1 High Severity",
      p1Time: "< 1 hour",
      p1Desc: "Patch deployment within 24 hours with dedicated patch notes and verification proof.",
      p2Title: "P2 Moderate Severity",
      p2Time: "< 4 hours",
      p2Desc: "Remediation scheduled in next sprint cycle with regular updates.",
      whitepaperTitle: "Enterprise Compliance & Security Documentation",
      whitepaperDesc: "Download our SOC 2 Type II attestation report, ISO 27001 certificate, and enterprise security whitepaper.",
      whitepaperBtn: "Request Compliance Package"
    },
    guarantee: {
      eyebrow: "05 // LEGAL & COMMITMENT MATRIX",
      title: "Master SLA & Deterministic Execution Guarantee",
      subtitle: "The industry's first contractually enforceable guarantee against un-gated execution, silent failures, and state drift.",
      guaranteeTitle: "The Deterministic Execution Guarantee",
      guaranteeBody: "Selyron warrants by contract that any workflow transition gated by a Human-in-the-Loop (HITL) authorization checkpoint will strictly halt execution until a cryptographic sign-off is submitted. Selyron legally indemnifies the enterprise against un-gated execution with a 100% service fee refund plus up to $1,000,000 in liquidated damages.",
      termsTitle: "Key Legal & Technical Commitments",
      term1Title: "Zero Un-Gated Execution Warranty",
      term1Desc: "Mathematical proof of finite state halting. No external side-effects trigger without signed validation token.",
      term2Title: "99.992% Monthly Availability SLA",
      term2Desc: "Measured on continuous per-second health checks across all sovereign endpoints with tiered SLA credits.",
      term3Title: "P99 <42ms State Latency Commitment",
      term3Desc: "State transition latency tracked via distributed tracing. Credits applied if monthly P99 exceeds 50ms.",
      term4Title: "Zero Data Training Covenant",
      term4Desc: "Binding legal covenant that enterprise payloads are never retained, logged off-site, or utilized for model training.",
      creditTiersTitle: "SLA Service Credit Schedule",
      tier1Uptime: "< 99.99% to 99.90%",
      tier1Credit: "10% Monthly Service Credit",
      tier2Uptime: "< 99.90% to 99.00%",
      tier2Credit: "25% Monthly Service Credit",
      tier3Uptime: "< 99.00%",
      tier3Credit: "50% Monthly Service Credit + Breach Review",
      supportTitle: "Enterprise Support & Incident Response Tiers",
      supportDesc: "Direct 24/7 access to Forward-Deployed Staff Engineers via dedicated enterprise Slack/Teams channels.",
      tier1Name: "Severity 1 (Critical Outage)",
      tier1Time: "15 min response · 24/7 War Room",
      tier2Name: "Severity 2 (Degraded Operations)",
      tier2Time: "1 hour response · Same-day Patch",
      tier3Name: "Severity 3 (Technical Inquiries)",
      tier3Time: "4 hours response · Assigned Engineer"
    },
    diagnosticPage: {
      eyebrow: "06 // PRE-FLIGHT DIAGNOSTIC",
      title: "Enterprise Architecture Readiness Assessment",
      subtitle: "Evaluate your system scale, integration friction, and compliance posture to receive a customized architecture brief."
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
