export const en = {
  nav: {
    home: "Home",
    services: "Services",
    projects: "Projects & Blueprints",
    about: "About",
    contact: "Contact",
    discussWorkflow: "Discuss Your Workflow",
    systemActive: "AI Core Online · v2.6",
    menu: "Menu"
  },
  hero: {
    eyebrow: "AI Implementation & Automation Specialist",
    titleLine1: "Turn manual workflows into",
    titleLine2: "autonomous AI systems.",
    description: "I design and build production-grade AI workflows, multi-agent systems, and API integrations that eliminate repetitive toil while keeping humans in control of critical approvals.",
    ctaPrimary: "Discuss Your Workflow",
    ctaSecondary: "Explore Live Systems",
    identityBadge: "Practical AI Architecture & System Integration",
    stats: [
      { value: "85%+", label: "Reduction in manual handoffs" },
      { value: "<1.2s", label: "Autonomous triage latency" },
      { value: "100%", label: "Human-verified checkpoints" },
      { value: "12+", label: "Global foundation models orchestrated" }
    ]
  },
  simulator: {
    eyebrow: "Interactive Pipeline Sandbox",
    title: "Experience a Live AI Workflow",
    subtitle: "Click 'Run Workflow' to trace the lifecycle of a raw business event turning into an approved transaction.",
    runButton: "Run Workflow Simulation",
    runningButton: "Executing Autonomous Pipeline...",
    resetButton: "Reset Simulation",
    approvalRequired: "Action Paused: Human Approval Required",
    approveAction: "Approve & Push to CRM",
    rejectAction: "Request Re-evaluation",
    scenarios: {
      sales: {
        tab: "01. B2B Inbound Lead Triage",
        inputLabel: "Raw Event: Unstructured Customer Email",
        from: "From: sourcing@apexmanufacturing.com",
        subject: "RFQ: Custom High-Precision Components (5,000 units/mo)",
        body: "\"Hi team, could you share specifications, bulk pricing tiers, and delivery lead times for precision batch 09-C? Attached is our CAD tolerance spec.\"",
        file: "RFQ_Batch_09C_Specs.pdf (2.4 MB)",
        stages: [
          { name: "Parser & Validator", role: "Extraction", desc: "Extract entity names, intent, order size, and urgency." },
          { name: "Deep Research Agent", role: "Enrichment", desc: "Query company registry, Serper web data, and tech fit." },
          { name: "Reasoning Gate", role: "Qualification", desc: "Score deal size ($120k ARR) and flag margin compliance." },
          { name: "Draft & Record Builder", role: "Synthesis", desc: "Prepare personalized response draft and structured CRM payload." }
        ],
        outputTitle: "Ready for Human Review & CRM Sync",
        checks: [
          "Corporate identity verified (Apex Manufacturing, Series B)",
          "Margin threshold met (+34% gross margin compliance)",
          "Technical spec matched with inventory tolerance catalog",
          "Custom executive reply draft generated with lead time estimate"
        ],
        crmStatus: "Staged in HubSpot · Awaiting Sales Director Confirmation"
      },
      document: {
        tab: "02. Purchase Order & Invoice Extraction",
        inputLabel: "Raw Event: Scanned Commercial Invoice PDF",
        from: "From: billing@global-logistics-intl.com",
        subject: "Commercial Invoice #GLI-2026-8812",
        body: "\"Please process the attached customs clearing and freight forwarding invoice for container cargo #4092-B.\"",
        file: "Invoice_GLI_8812_Scanned.pdf (4.1 MB)",
        stages: [
          { name: "OCR & Multimodal Vision", role: "Extraction", desc: "Segment multi-column tables, line items, and tax numbers." },
          { name: "Schema Normalizer", role: "Structuring", desc: "Convert noisy text into strict Zod/JSON schema with zero hallucination." },
          { name: "ERP Cross-Reconciliation", role: "Validation", desc: "Cross-check against PO #PO-8812 in PostgreSQL database." },
          { name: "Accounting Dispatcher", role: "Staging", desc: "Flag 1.2% rate discrepancy for finance review before ERP commit." }
        ],
        outputTitle: "Invoice Reconciled & Staged",
        checks: [
          "Line items extracted (24 unique SKUs parsed with 99.9% confidence)",
          "Tax ID and foreign currency exchange rate verified via FX API",
          "Pre-approved variance matched within tolerances",
          "Automated ledger entry prepared for NetSuite ERP"
        ],
        crmStatus: "Staged for NetSuite Sync · Discrepancy under $50 auto-cleared"
      },
      knowledge: {
        tab: "03. Enterprise Policy Knowledge Copilot",
        inputLabel: "Raw Event: Operations Query via Slack / Webhook",
        from: "Channel: #ops-support-desk",
        subject: "Warehouse Exception Query",
        body: "\"A supplier shipped batch X-12 with minor packaging moisture seals broken, but internal sensor readings are normal. Can we accept receipt?\"",
        file: "Warehouse_SOP_2026.3.pdf",
        stages: [
          { name: "Access & Query Parser", role: "Security Check", desc: "Verify requester clearance (Tier 2 Logistics Supervisor)." },
          { name: "Hybrid Vector + BM25 RAG", role: "Retrieval", desc: "Retrieve SOP §4.2 (Moisture Protocol) and Warranty Policy §12." },
          { name: "Source Citation Engine", role: "Groundedness", desc: "Strictly cite sections with paragraph links, refusing unsupported claims." },
          { name: "Escalation Checkpoint", role: "Handoff", desc: "Draft SOP answer and attach formal QA sign-off ticket for Plant Manager." }
        ],
        outputTitle: "Grounded Answer with Source Traceability",
        checks: [
          "Grounding verified against Warehouse Ops Manual v2026.3",
          "Citation §4.2: Secondary moisture seal failure mandates QA sign-off",
          "Zero hallucinated guidance; fallback to designated escalation path",
          "Pre-filled incident ticket created in Jira Service Desk"
        ],
        crmStatus: "Answer generated with 2 verifiable citations · Ticket #QA-412 staged"
      }
    }
  },
  services: {
    eyebrow: "Core Implementation Pillars",
    title: "Practical Systems. Defined Jobs.",
    subtitle: "I engineer purpose-built systems that eliminate manual bottlenecks, integrate into existing tools, and yield immediate operational leverage.",
    learnMore: "Explore details",
    discuss: "Discuss this service",
    list: [
      {
        id: "workflow-automation",
        num: "01",
        title: "AI Workflow Automation",
        desc: "Automate repetitive, high-frequency operational pipelines across your team's existing email, spreadsheets, and databases.",
        fits: "Inbound triage, document translation, multi-step routing, data entry.",
        delivers: "Robust queues, deterministic validation, automatic fallback, zero manual re-typing.",
        start: "Bring one painful recurring process and 5 representative sample inputs."
      },
      {
        id: "ai-agents",
        num: "02",
        title: "Task-Focused AI Agents",
        desc: "Build autonomous agents equipped with web search, code execution, and database tools to research, analyze, and draft complex work.",
        fits: "Competitive intelligence, lead enrichment, contract summarization, policy audits.",
        delivers: "Bounded autonomous actions, strict tool permissions, verifiable audit logs.",
        start: "Define the objective, allowed tool boundaries, and what constitutes a successful output."
      },
      {
        id: "system-integration",
        num: "03",
        title: "API & System Integration",
        desc: "Bridge modern AI models with your CRM (HubSpot/Salesforce), databases (PostgreSQL/Supabase), messaging (Slack/Feishu), and legacy software.",
        fits: "Isolated SaaS apps, duplicated records, manual CSV exports, asynchronous job triggers.",
        delivers: "Reliable webhooks, bi-directional sync, bounded retries, alerting on schema drifts.",
        start: "List the platforms involved and what data records need to travel between them."
      },
      {
        id: "internal-tools",
        num: "04",
        title: "Internal AI Applications",
        desc: "Build clean, bespoke web interfaces designed for your internal operators, consolidating fragmented prompts and spreadsheets.",
        fits: "Customer service copilot, quote generators, content review portals, executive dashboards.",
        delivers: "Role-based access control, curated prompt engineering, intuitive UX, rapid deployment.",
        start: "Show how your operators complete the task today through screen sharing or recording."
      },
      {
        id: "automation-audit",
        num: "05",
        title: "System & Automation Audit",
        desc: "A surgical technical review of your existing operations to identify high-ROI automation targets and steer clear of brittle hype.",
        fits: "Teams overwhelmed by AI hype, uncertain where to start, or struggling with failed prototypes.",
        delivers: "Workflow dependency map, feasibility scoring, data security risks, scoped roadmap.",
        start: "A 60-minute process walk-through of your current operational bottlenecks."
      }
    ]
  },
  problems: {
    eyebrow: "The Pain Points Solved",
    title: "Less copying. Zero blind handoffs.",
    subtitle: "When skilled staff spend 40% of their week copy-pasting text, data rots and operations stall. Selyron transforms fragmented manual tasks into unified engines.",
    items: [
      { before: "Manual copy-pasting between ERP, email, and CRM", after: "Instant API-driven background sync with schema validation" },
      { before: "Hours spent combing company websites to qualify sales leads", after: "Autonomous web intelligence agent enriches company records in seconds" },
      { before: "Invoices and specifications manually typed into spreadsheets", after: "Multimodal extraction pipeline with human review on exceptions" },
      { before: "Fragmented knowledge stored in PDFs with conflicting versions", after: "Strictly cited, access-controlled knowledge copilot with verified sources" },
      { before: "Inconsistent prompt outputs and unpredictable AI hallucinations", after: "Deterministic policy guards, test evaluation sets, and strict structured outputs" }
    ]
  },
  projects: {
    eyebrow: "Selected Systems & Case Studies",
    title: "Real Work. Working Systems.",
    subtitle: "Battle-tested systems implemented for real business operations, featuring observable queues, bounded retries, and high-trust human handoffs.",
    deliveredTitle: "Delivered Implementations",
    blueprintsTitle: "Solution Design Studies (Blueprints)",
    items: [
      {
        id: "b2b-lead-research",
        title: "B2B Lead Research & Outreach Automation",
        category: "Internal System / Stardots Pipeline",
        description: "An automated research engine that discovers target enterprise companies, crawls their domain footprints, evaluates ICP fit against 14 criteria, and crafts customized outreach briefs for sales executives.",
        tech: ["DeepSeek", "Serper API", "TypeScript", "Supabase", "PostgreSQL"],
        flow: ["Discover Domain", "Crawl & Cleanse", "ICP Scoring", "Contact Discovery", "Draft Brief", "CRM Staging"],
        metrics: [
          { label: "Research Time", value: "35m → 45s" },
          { label: "Enrichment Accuracy", value: "98.4%" },
          { label: "Weekly Capacity", value: "2,000+ Accounts" }
        ]
      },
      {
        id: "stardots-bags",
        title: "Stardots Bags Global Digital Platform",
        category: "Client System / Global B2B Commerce",
        description: "A high-performance B2B commercial platform engineered for global buyers. Features structured product catalogs, bilingual SEO foundations, automated inquiry routing, and frictionless quotation funnels.",
        tech: ["React", "Vite", "Tailwind CSS", "Vercel", "Structured Data"],
        flow: ["Product Catalog", "Multilingual Indexing", "Inquiry Capturing", "Webhook Routing", "Sales Dispatch"],
        metrics: [
          { label: "Core Web Vitals", value: "100 / 100" },
          { label: "Inquiry Conversion", value: "+42%" },
          { label: "Global Latency", value: "<80ms" }
        ]
      },
      {
        id: "automation-infrastructure",
        title: "AI Queue & Orchestration Infrastructure",
        category: "Infrastructure / Reliability Architecture",
        description: "The resilient job queue and orchestration engine powering multi-agent pipelines. Features checkpoint resumes, exponential backoff retries, dead-letter alerts, and a lightweight admin console.",
        tech: ["PostgreSQL", "pg_cron", "Supabase", "TypeScript", "Vercel Functions"],
        flow: ["Task Queue", "Worker Execution", "Rate Limit Handler", "Dead Letter Queue", "Audit Logging"],
        metrics: [
          { label: "Uptime SLA", value: "99.95%" },
          { label: "Crash Recovery", value: "Zero Data Loss" },
          { label: "Concurrency", value: "50+ Parallel Agents" }
        ]
      }
    ],
    blueprints: [
      {
        id: "knowledge-copilot",
        code: "KB / 01",
        title: "Enterprise Knowledge Copilot",
        subtitle: "Access-aware assistant grounded in verified corporate repositories with strict source tracing.",
        tags: ["Vector Search", "Source Citations", "RBAC Access Controls"],
        desc: "Designed for distributed teams struggling with out-of-date documentation. Verifies clearance, retrieves exact paragraphs, and refuses to guess when documentation is incomplete."
      },
      {
        id: "document-intelligence",
        code: "DOC / 02",
        title: "Document Intelligence Pipeline",
        subtitle: "Review-first data pipeline converting noisy orders, invoices, and spec sheets into strict database records.",
        tags: ["Multimodal OCR", "Zod Validation", "ERP Connector"],
        desc: "Processes multi-format business documents, extracts tabular figures, flags statistical anomalies, and queues low-confidence entries for operator confirmation."
      },
      {
        id: "model-gateway",
        code: "AI / 03",
        title: "Multi-Model Agent Gateway",
        subtitle: "Policy-led orchestration layer for model routing, cost management, and observability.",
        tags: ["Smart Routing", "Budget Guardrails", "Telemetry & Tracing"],
        desc: "Routes routine tasks to ultra-fast, cheap models while delegating deep multi-step reasoning to frontier models, reducing token costs by over 70%."
      }
    ]
  },
  calculator: {
    eyebrow: "Interactive Value Estimator",
    title: "Calculate Your Automation Impact",
    subtitle: "Estimate the operational hours recovered and annual cost saved by converting manual handoffs into Selyron systems.",
    teamSizeLabel: "Team Members in Operations / Sales",
    hoursLabel: "Repetitive Hours Spent per Person / Week",
    hourlyRateLabel: "Average Loaded Cost per Hour ($)",
    annualHoursSaved: "Annual Hours Saved",
    annualCostSaved: "Annual Cost Recovered",
    roiMessage: "Estimated 4-6 week payback period on custom workflow implementations."
  },
  models: {
    eyebrow: "Technology & Model Ecosystem",
    title: "Global Intelligence. Practical Systems.",
    subtitle: "We select the optimal foundation model for each specialized sub-task based on latency, reasoning depth, privacy, and token economics.",
    filters: {
      all: "All Models",
      reasoning: "Deep Reasoning",
      speed: "High Speed & Low Cost",
      multimodal: "Vision & Multimodal",
      opensource: "Self-Hosted & Open Weights"
    }
  },
  methodology: {
    eyebrow: "Engineering Methodology",
    title: "From a Single Bottleneck to a Resilient System",
    subtitle: "A disciplined, transparent 6-stage engineering process ensuring stability, security, and effortless operator handover.",
    steps: [
      { num: "01", title: "Map the Workflow", desc: "Deconstruct inputs, data dependencies, human operators, and operational exceptions." },
      { num: "02", title: "Scope High-Impact Nodes", desc: "Isolate high-friction repetitive steps while deliberately preserving human oversight on high-stakes judgments." },
      { num: "03", title: "System & Policy Design", desc: "Establish strict JSON schemas, permission boundaries, model routing, and error-fallback procedures." },
      { num: "04", title: "Implement Integrations", desc: "Connect models, webhooks, databases, and third-party APIs with production-grade queuing and logging." },
      { num: "05", title: "Adversarial & Stress Testing", desc: "Test against corrupted payloads, rate limit spikes, edge cases, and unexpected token outputs." },
      { num: "06", title: "Deployment & Clean Handover", desc: "Deliver documentation, runtime monitoring, operational guidelines, and post-launch refinement." }
    ]
  },
  about: {
    eyebrow: "About Selyron",
    title: "Practical AI Architecture. Purposeful Engineering.",
    subtitle: "AI Implementation & Automation Specialist",
    lead: "I engineer practical AI workflows, agent orchestrations, and software integrations for businesses looking for real operational velocity, not experimental novelties.",
    paragraphs: [
      "I believe AI delivers the greatest enterprise value when focused on unglamorous, high-frequency operational bottlenecks: research tasks that take 12 manual steps, data constantly copied between disconnected SaaS platforms, or documents stranded in unsearchable inboxes.",
      "My engineering philosophy is simple: start with the human problem, treat LLM outputs as untrusted data until validated, keep critical checkpoints human-reviewable, and always build systems with complete documentation so your internal team can operate them with confidence."
    ],
    principles: [
      { title: "Start With The Work", desc: "We never shoehorn AI for the sake of marketing. If a simple SQL query or deterministic script solves the problem better, we use it." },
      { title: "Reviewable Behavior", desc: "No opaque black-box automations. Every decision is logged, every citation is traceable, and every irreversible action requires human confirmation." },
      { title: "Engineered for Handover", desc: "Clean code, typed interfaces, bounded error handling, and crystal-clear operating runbooks. You own and control your systems." }
    ],
    email: "mrlin728@gmail.com"
  },
  contact: {
    eyebrow: "Initiate Consultation",
    title: "What workflow would you like to automate?",
    subtitle: "Tell me about your repetitive processes, the tools currently involved, and where your team gets stuck. I will review your workflow and propose an actionable technical architecture.",
    formTitle: "Interactive Workflow Scoping",
    nameLabel: "Your Name",
    emailLabel: "Work Email",
    companyLabel: "Company / Organization",
    serviceLabel: "Area of Interest",
    serviceOptions: [
      "AI Workflow Automation",
      "AI Agent Implementation",
      "API & System Integration",
      "Internal AI Tools",
      "Comprehensive Automation Audit"
    ],
    toolsLabel: "Tools Currently Used (e.g., Gmail, HubSpot, PostgreSQL, Notion, Slack)",
    workflowDescLabel: "Describe the Current Workflow & Pain Points",
    workflowDescPlaceholder: "What happens today? How many hours does it take? Where does information get lost or delayed?",
    submitButton: "Send Inquiry Directly",
    submitting: "Transmitting Request...",
    successTitle: "Inquiry Received",
    successMsg: "Thank you for reaching out. I personally review every technical workflow submission and will respond within 24 hours with scoping questions and next steps.",
    emailAlternative: "Prefer direct email?",
    emailLink: "mrlin728@gmail.com"
  },
  footer: {
    tagline: "Practical AI workflows, multi-agent systems, and API integrations engineered around the way your enterprise operates.",
    servicesTitle: "Services",
    exploreTitle: "Explore",
    contactTitle: "Contact & Headquarters",
    rights: "© 2026 Selyron. All rights reserved.",
    privacy: "Privacy Notice",
    builtWith: "Engineered with React, TypeScript & Vite."
  }
};
