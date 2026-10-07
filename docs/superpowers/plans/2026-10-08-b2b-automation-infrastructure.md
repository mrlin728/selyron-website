# Selyron B2B Automation Infrastructure Platform Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a minimalist, restrained, pure-white B2B enterprise automation infrastructure flagship website for Selyron with an interactive state-machine DAG runner, 4-tier architectural breakdown, and an interactive diagnostic lead-generation engine.

**Architecture:** A high-performance single-page React 18 architecture utilizing a strict monochrome design token system, localized state management for dual-language parity (EN/ZH), and an interactive deterministic state-machine simulation core with real-time telemetry counters, step execution, and human-in-the-loop (HITL) approval gates.

**Tech Stack:** React 18, TypeScript, Vite, Tailwind CSS, Lucide React, Vitest.

**Spec:** `docs/superpowers/specs/2026-10-08-b2b-automation-infrastructure-design.md`

## Global Constraints

- Primary background must be pure white `#FFFFFF` across all sections; no obsidian dark surfaces or colorful background gradients.
- Hairline borders must consistently use 1px solid `#E2E8F0` / `#E5E7EB`.
- Typography strictly paired between sans-serif (Inter/Geist/system) for display/body and monospace (`JetBrains Mono`, `ui-monospace`) for telemetry, code, and badges.
- Strict dual-language parity: every label, badge, scenario, and button must exist in both English (`src/locales/en.ts`) and Simplified Chinese (`src/locales/zh.ts`).
- Zero heavy 3D WebGL bloat or CPU-draining audio oscillators in production bundle.
- All tests must pass via `pnpm test` and build must complete cleanly via `pnpm run build`.

## Review Focus

1. **State Machine Execution Lockups**: If a pipeline reaches a human-in-the-loop (HITL) node, the execution loop must cleanly suspend without hanging the browser UI, and resume deterministically upon user approval.
2. **Missing Translation Keys**: Every UI component reading from `t.*` must have a defined string in both `en.ts` and `zh.ts`, preventing undefined rendering or key leakages.
3. **Mobile Viewport Frustration**: High-density DAG nodes and telemetry data tables must be horizontally scrollable or cleanly stacked on mobile screens (< 640px) without breaking horizontal viewport boundaries.
4. **Diagnostic Form Validation & Step Progression**: Interactive diagnostic modal must enforce non-empty selections before proceeding to subsequent steps and provide an actionable summary upon completion.
5. **Zero Silent Build / Type Regressions**: TypeScript compilation with `tsc -b` must pass with zero type errors and zero unused variable warnings.

---

### Task 1: Design Tokens & Pure-White Minimalist CSS Foundations

**Files:**
- Modify: `tailwind.config.js`
- Modify: `src/index.css`

**Interfaces:**
- Consumes: Tailwind CSS base configuration
- Produces: CSS utility tokens for hairline borders (`border-border`), canvas (`bg-canvas`), elevated sub-surface (`bg-subsurface`), mono badges, and status indicator animations.

- [ ] **Step 1: Update `tailwind.config.js` with pure-white B2B design tokens**
  Define `colors`:
  - `canvas`: `#FFFFFF`
  - `subsurface`: `#F8FAFC`
  - `surface-elevated`: `#FFFFFF`
  - `border-hairline`: `#E2E8F0`
  - `border-dark`: `#09090B`
  - `text-primary`: `#09090B`
  - `text-secondary`: `#52525B`
  - `text-muted`: `#A1A1AA`
  - `accent-emerald`: `#10B981`
  - `accent-amber`: `#F59E0B`
  - `accent-rose`: `#EF4444`

- [ ] **Step 2: Update `src/index.css` to eliminate obsidian dark theme**
  Replace dark mode CSS resets with clean white canvas defaults:
  - Base body: `background: #FFFFFF`, `color: #09090B`, font antialiased.
  - Custom scrollbar styling (slender 6px grey scrollbars).
  - Subtle status pulse utility: `@keyframes status-pulse`.

- [ ] **Step 3: Verify build with updated CSS tokens**
  Run: `pnpm run build`
  Expected: Build completes successfully without CSS compilation errors.

- [ ] **Step 4: Commit**
  ```bash
  git add tailwind.config.js src/index.css
  git commit -m "style: configure pure-white B2B design tokens and hairline border utilities"
  ```

---

### Task 2: Comprehensive Bilingual Locales & Translation Parity Test

**Files:**
- Create: `tests/locales.test.ts`
- Modify: `src/locales/en.ts`
- Modify: `src/locales/zh.ts`
- Modify: `src/types/index.ts` (if needed for locale interfaces)

**Interfaces:**
- Consumes: Spec narrative dictionaries
- Produces: `en` and `zh` translation dictionaries with strict key parity for `nav`, `hero`, `telemetry`, `dag`, `tiers`, `scenarios`, `security`, `diagnostic`, and `footer`.

- [ ] **Step 1: Write the failing locale parity test in `tests/locales.test.ts`**
  Write a Vitest test that imports `en` and `zh` and asserts recursive key symmetry and non-empty string values.

- [ ] **Step 2: Run test to verify it fails**
  Run: `pnpm test`
  Expected: FAIL (missing new B2B infrastructure keys).

- [ ] **Step 3: Implement complete B2B infrastructure dictionaries in `en.ts` and `zh.ts`**
  Cover:
  - `nav`: Brand tags, navigation links, review CTA button.
  - `hero`: Title, subtitle, CTA actions, telemetry metrics.
  - `dag`: Scenarios (01 Ingestion & Reconciliation, 02 Event Ingress & HITL, 03 Model Gateway & Audit), node titles, descriptions, status badges, telemetry labels.
  - `tiers`: 4-Tier infrastructure labels and detailed architectural highlights.
  - `scenarios`: Quantitative ROI and enterprise business case studies.
  - `security`: VPC deployment, zero-retention policy, SOC2/auditability.
  - `diagnostic`: 3-step questions, options, contact inputs, and summary results.
  - `footer`: Operational status, legal, copyright.

- [ ] **Step 4: Run test to verify it passes**
  Run: `pnpm test`
  Expected: PASS (all keys symmetric and populated).

- [ ] **Step 5: Commit**
  ```bash
  git add tests/locales.test.ts src/locales/en.ts src/locales/zh.ts
  git commit -m "feat: implement comprehensive bilingual B2B dictionary with parity tests"
  ```

---

### Task 3: DAG Engine Data Model & State Machine Logic

**Files:**
- Create: `tests/dagScenarios.test.ts`
- Create: `src/data/dagScenarios.ts`
- Modify: `src/types/index.ts`

**Interfaces:**
- Consumes: Locale dictionaries
- Produces: `ScenarioData`, `DagNode`, `ExecutionStep` types, helper functions `getScenario(id: string)`, and state transition logic.

- [ ] **Step 1: Define TypeScript types in `src/types/index.ts`**
  Define `NodeStatus = 'idle' | 'running' | 'completed' | 'awaiting_approval' | 'error'`.
  Define `DagNode`: `id`, `labelKey`, `typeKey`, `durationMs`, `isHitl`, `payloadPreview`.
  Define `DagScenario`: `id`, `nameKey`, `descriptionKey`, `nodes`, `initialPayload`, `finalPayload`.

- [ ] **Step 2: Write failing unit test in `tests/dagScenarios.test.ts`**
  Test scenario catalog integrity: 3 distinct scenarios exist, each has at least 4 ordered nodes, Scenario 2 includes an `isHitl: true` approval node, and payload previews are valid JSON objects.

- [ ] **Step 3: Implement `src/data/dagScenarios.ts`**
  Implement:
  1. `SCENARIO 01: Multimodal PO & Invoice Reconciliation`
  2. `SCENARIO 02: Cross-System Event Ingress & Human-in-the-Loop Gate`
  3. `SCENARIO 03: Multi-Model Gateway & Immutable Audit Ledger`

- [ ] **Step 4: Run test to verify it passes**
  Run: `pnpm test`
  Expected: PASS.

- [ ] **Step 5: Commit**
  ```bash
  git add src/types/index.ts src/data/dagScenarios.ts tests/dagScenarios.test.ts
  git commit -m "feat: define DAG scenario data models and test verification"
  ```

---

### Task 4: Interactive DAG & State Machine Runner Component

**Files:**
- Create: `src/components/InteractiveDagRunner.tsx`
- Modify: `src/types/index.ts` (if needed)

**Interfaces:**
- Consumes: `src/data/dagScenarios.ts`, `useLanguage` context.
- Produces: `<InteractiveDagRunner />` component displaying scenario tabs, node visualizer with status badges, execution control buttons, latency telemetry panel, and payload inspector.

- [ ] **Step 1: Implement state machine execution controller in `InteractiveDagRunner.tsx`**
  Features:
  - Tab switching between Scenarios 1, 2, and 3.
  - `runPipeline()` function with auto-stepping timer.
  - When reaching an `isHitl: true` node, status sets to `'awaiting_approval'`, auto-step pauses, and "Authorize Sign-off" CTA flashes.
  - Clicking "Authorize" transitions node to `'completed'` and resumes pipeline to finish.
  - "Step Forward" and "Reset" controls.

- [ ] **Step 2: Implement precision light UI presentation**
  - Node cards with 1px hairline border, mono telemetry labels (latency, step status).
  - Active execution node highlighted with emerald status light.
  - Collapsible JSON payload viewer displaying input and real-time output data.

- [ ] **Step 3: Verify TypeScript compilation**
  Run: `pnpm run build`
  Expected: Zero type errors.

- [ ] **Step 4: Commit**
  ```bash
  git add src/components/InteractiveDagRunner.tsx
  git commit -m "feat: build light-theme interactive DAG state machine runner with HITL gate"
  ```

---

### Task 5: Minimalist Header Navigation & Hero Section with Telemetry Strip

**Files:**
- Create: `src/components/Navbar.tsx`
- Create: `src/components/HeroSection.tsx`

**Interfaces:**
- Consumes: `useLanguage` context, callback `onOpenDiagnostic: () => void`.
- Produces: `<Navbar />` and `<HeroSection />`.

- [ ] **Step 1: Implement `src/components/Navbar.tsx`**
  - Left: Selyron brand mark + monospaced tag `[INFRASTRUCTURE]`.
  - Center: Smooth scroll anchors (`#runtime`, `#architecture`, `#scenarios`, `#security`).
  - Right: `EN / 中` language switcher + `Schedule Review` button triggering diagnostic.
  - Visual: Sticky top, `bg-white/95 backdrop-blur-sm`, 1px bottom border `border-slate-200`.

- [ ] **Step 2: Implement `src/components/HeroSection.tsx`**
  - Monospaced version pill: `v2.4 DETERMINISTIC EXECUTION RUNTIME`.
  - High-impact title: "Deterministic Automation for the Enterprise Core" (or Chinese translation).
  - Restrained descriptive paragraph (< 72ch) highlighting state persistence and ERP orchestration.
  - Action buttons: "Start Architecture Assessment" (primary black) + "Explore Live Runtime" (secondary border).
  - Telemetry strip: 4-metric grid (`99.99% Determinism`, `<120ms Gateway`, `Zero Silent Failures`, `Private VPC Ready`).

- [ ] **Step 3: Verify TypeScript compilation**
  Run: `pnpm run build`
  Expected: Clean compile.

- [ ] **Step 4: Commit**
  ```bash
  git add src/components/Navbar.tsx src/components/HeroSection.tsx
  git commit -m "feat: implement minimal header and hero section with telemetry strip"
  ```

---

### Task 6: 4-Tier Infrastructure Stack & Enterprise Solutions Sections

**Files:**
- Create: `src/components/InfrastructureStack.tsx`
- Create: `src/components/EnterpriseScenarios.tsx`

**Interfaces:**
- Consumes: `useLanguage` context.
- Produces: `<InfrastructureStack />` and `<EnterpriseScenarios />`.

- [ ] **Step 1: Implement `src/components/InfrastructureStack.tsx`**
  - Section header: `02 // ARCHITECTURE BLUEPRINT`.
  - 4-Tier layout:
    - Tier 1: Ingestion & Event Ingress (Kafka, SFTP, Webhooks, OCR).
    - Tier 2: Deterministic Orchestration (Stateful DAG, idempotency, backoff retries).
    - Tier 3: Adaptive Intelligence (Multi-model routing, PII redaction, token cache).
    - Tier 4: Enterprise Egress & Ledger (SAP/ERP 2-phase commit, immutable SHA-256 logs).
  - High-density cards with 1px border and monospaced protocol tags.

- [ ] **Step 2: Implement `src/components/EnterpriseScenarios.tsx`**
  - Section header: `03 // ENTERPRISE PRODUCTION SOLUTIONS`.
  - 3 concrete enterprise solution archetypes:
    1. Financial & Cross-Border Supply Chain Reconciliation (99.8% match rate, <4min invoice cycle).
    2. Intelligent Incident Triage & Human-in-the-Loop Operations (85% manual burden removed).
    3. Global Compliance & Multi-Jurisdiction Policy Gate (100% auditable log trace).
  - Quantitative outcome badges and technical capability breakdown.

- [ ] **Step 3: Verify TypeScript compilation**
  Run: `pnpm run build`
  Expected: Clean compile.

- [ ] **Step 4: Commit**
  ```bash
  git add src/components/InfrastructureStack.tsx src/components/EnterpriseScenarios.tsx
  git commit -m "feat: create 4-tier infrastructure stack and enterprise solution showcases"
  ```

---

### Task 7: Trust, Security & Swiss Minimalist Footer

**Files:**
- Create: `src/components/SecurityCompliance.tsx`
- Create: `src/components/Footer.tsx`

**Interfaces:**
- Consumes: `useLanguage` context.
- Produces: `<SecurityCompliance />` and `<Footer />`.

- [ ] **Step 1: Implement `src/components/SecurityCompliance.tsx`**
  - Section header: `04 // TRUST, SECURITY & ENTERPRISE GOVERNANCE`.
  - 4 core security pillars:
    - Dedicated Private VPC & Air-Gapped deployment options.
    - Zero Customer Data Retention for AI training.
    - Enterprise SLA & 99.99% Availability Guarantee.
    - SOC2 / ISO 27001 readiness & Cryptographic Audit Trails.

- [ ] **Step 2: Implement `src/components/Footer.tsx`**
  - Live system status pill: `● Selyron Core Runtime: All Systems Operational`.
  - Monospaced metadata, sitemap links, and copyright notice.
  - Pure white background with 1px hairline top border.

- [ ] **Step 3: Verify TypeScript compilation**
  Run: `pnpm run build`
  Expected: Clean compile.

- [ ] **Step 4: Commit**
  ```bash
  git add src/components/SecurityCompliance.tsx src/components/Footer.tsx
  git commit -m "feat: implement trust & security grid and Swiss minimalist footer"
  ```

---

### Task 8: 3-Step Interactive Architecture Diagnostic Modal & App Assembly

**Files:**
- Create: `src/components/ArchitectureDiagnosticModal.tsx`
- Modify: `src/App.tsx`

**Interfaces:**
- Consumes: `useLanguage` context, modal open state.
- Produces: `<ArchitectureDiagnosticModal />` and updated `<App />` single-page assembly.

- [ ] **Step 1: Implement `ArchitectureDiagnosticModal.tsx`**
  - Step 1: Select primary technical bottleneck (Unstructured docs, Cross-system handoffs, LLM non-determinism, Legacy ERP sync).
  - Step 2: Select deployment topology & volume (Cloud VPC, On-Premises, Air-gapped / <10k, 10k-100k, >100k daily events).
  - Step 3: Company profile & contact input (Work email, company name, role).
  - Submission state: Generates customized "Pre-Flight Architecture Summary" with instant next-steps confirmation.

- [ ] **Step 2: Assemble all sections in `src/App.tsx`**
  - Integrate `Navbar`, `HeroSection`, `InteractiveDagRunner`, `InfrastructureStack`, `EnterpriseScenarios`, `SecurityCompliance`, `Footer`, and `ArchitectureDiagnosticModal`.
  - Remove legacy 3D synaptic canvas and sound engine triggers from main render loop to ensure pure-white, zero-latency experience.

- [ ] **Step 3: Verify TypeScript compilation**
  Run: `pnpm run build`
  Expected: Clean compile.

- [ ] **Step 4: Commit**
  ```bash
  git add src/components/ArchitectureDiagnosticModal.tsx src/App.tsx
  git commit -m "feat: implement architecture diagnostic modal and assemble single-page application"
  ```

---

### Task 9: End-to-End Verification, Performance & Quality Audit

**Files:**
- Modify: Any files requiring edge-case refinement.

**Interfaces:**
- Consumes: Full codebase.
- Produces: Production-ready build artifacts and verified test suite.

- [ ] **Step 1: Run complete test suite**
  Run: `pnpm test`
  Expected: All unit tests pass.

- [ ] **Step 2: Run production build and bundle audit**
  Run: `pnpm run build`
  Expected: Zero warnings, build succeeds, bundle size is optimized.

- [ ] **Step 3: Mobile and responsive verification**
  Ensure clean rendering across all breakpoints (375px, 768px, 1280px).

- [ ] **Step 4: Final commit**
  ```bash
  git commit --allow-empty -m "chore: complete B2B automation infrastructure platform audit"
  ```
