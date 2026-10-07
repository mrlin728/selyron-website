import { DagScenario } from '../types';

export const dagScenarios: DagScenario[] = [
  {
    id: 's1',
    key: 's1',
    initialPayload: {
      document_id: 'DOC-2026-88914',
      file_type: 'commercial_invoice_pdf',
      vendor: 'Siemens Precision AG',
      currency: 'EUR',
      raw_amount: 142850.00,
      timestamp: '2026-10-08T01:30:00Z',
      ingress_channel: 'SFTP_SECURE_BATCH'
    },
    finalPayload: {
      status: 'RECONCILED_AND_POSTED',
      sap_po_ref: 'PO-4500918231',
      cleared_amount: 142850.00,
      variance_detected: 0.00,
      journal_entry_hash: '0x8f2a41d9c72e9014b0bfeec9843a',
      audit_trace_id: 'TRC-991204'
    },
    nodes: [
      {
        id: 'n1-ingest',
        nameEn: 'Document Ingestion & Hash Seal',
        nameZh: '单据安全摄取与哈希封签',
        roleEn: 'Ingress Parser',
        roleZh: '接入解析器',
        descEn: 'Validates file integrity, calculates SHA-256 checksum, and normalizes unstructured PDF streams.',
        descZh: '校验文件完整性，计算 SHA-256 校验和并对非标 PDF 数据流进行标准化。',
        durationMs: 420,
        payloadPreview: {
          file_hash: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
          mime_type: 'application/pdf',
          size_kb: 1420
        }
      },
      {
        id: 'n1-extract',
        nameEn: 'Multi-Pass Structured Extraction',
        nameZh: '多阶段多模态字段提取',
        roleEn: 'OCR & Semantic Model',
        roleZh: 'OCR 与语义模型',
        descEn: 'Extracts 38 line items, customs VAT breakdown, and international IBAN bank details with 99.98% confidence.',
        descZh: '提取 38 项物料明细、海关增值税税率与国际银行账户信息，置信度达 99.98%。',
        durationMs: 780,
        payloadPreview: {
          line_items_count: 38,
          vat_code: 'EU-STANDARD-19%',
          iban: 'DE89370400440532013000',
          confidence_score: 0.9998
        }
      },
      {
        id: 'n1-reconcile',
        nameEn: '3-Way ERP Inventory Reconciliation',
        nameZh: '跨 ERP 三单匹配自动对账',
        roleEn: 'SAP Connector Engine',
        roleZh: 'SAP 对账连接引擎',
        descEn: 'Matches line items against SAP PO-4500918231 and warehouse delivery receipts. Zero variance detected.',
        descZh: '自动比对 SAP 采购单与仓库实际入库验收凭证。差异额为 0.00。',
        durationMs: 610,
        payloadPreview: {
          sap_po: 'PO-4500918231',
          gr_slip: 'GR-889104',
          unit_price_variance: 0.00,
          quantity_variance: 0
        }
      },
      {
        id: 'n1-commit',
        nameEn: 'Atomic Journal Commitment',
        nameZh: '原子级财务凭证入账',
        roleEn: 'Ledger Gateway',
        roleZh: '账本网关',
        descEn: 'Executes two-phase transaction commit into general ledger with cryptographic audit trail generation.',
        descZh: '向财务总账执行两阶段事务提交，同时生成可核查的密码学审计追踪证据。',
        durationMs: 340,
        payloadPreview: {
          gl_entry_id: 'GL-2026-9921',
          posted: true,
          audit_block: 'BLOCK_771892'
        }
      }
    ]
  },
  {
    id: 's2',
    key: 's2',
    initialPayload: {
      event_type: 'PAYMENT_ANOMALY_WEBHOOK',
      origin_system: 'Stripe_Connect_Enterprise',
      amount_usd: 250000.00,
      merchant_id: 'acct_1NZ29410A88',
      risk_score: 89,
      timestamp: '2026-10-08T01:31:12Z'
    },
    finalPayload: {
      status: 'AUTHORIZED_AND_REVERSED',
      operator_id: 'OP-CHENG-LEAD-ARCH',
      signature: 'ed25519:9f4a1c72...bd81',
      atomic_rollback_status: 'SUCCESS',
      notified_channels: ['Feishu_Sec_Ops', 'Slack_CFO_Alert']
    },
    nodes: [
      {
        id: 'n2-ingress',
        nameEn: 'Webhook Ingress & Deduplication',
        nameZh: 'Webhook 事件接入与去重校验',
        roleEn: 'Event Ingress Gateway',
        roleZh: '事件接入网关',
        descEn: 'Validates webhook signature, acquires distributed Redis idempotency lock, and captures event snapshot.',
        descZh: '验证 Webhook 安全签名，获取分布式 Redis 幂等性锁，捕获事件只读快照。',
        durationMs: 190,
        payloadPreview: {
          idempotency_key: 'idemp_pay_99214018',
          verified_signature: true,
          queue_delay_ms: 12
        }
      },
      {
        id: 'n2-exposure',
        nameEn: 'Financial Exposure & Risk Scoring',
        nameZh: '财务敞口计算与风险定级',
        roleEn: 'Rules & Risk Engine',
        roleZh: '规则与风险引擎',
        descEn: 'Cross-checks velocity rules and liquidity limits. Flags transaction for mandatory Operator Sign-off.',
        descZh: '交叉核验资金流动速率与流动性红线，将事务标记为必须经过高级操作员授权。',
        durationMs: 410,
        payloadPreview: {
          exposure_limit_usd: 100000.00,
          detected_amount_usd: 250000.00,
          tier: 'CRITICAL_HIGH'
        }
      },
      {
        id: 'n2-hitl',
        nameEn: 'Human-in-the-Loop Approval Gate',
        nameZh: '人工介入审批授权门禁 (HITL)',
        roleEn: 'Operator Gate',
        roleZh: '操作员授权门禁',
        descEn: 'Execution state persists to database. Awaiting operator multi-factor cryptographic signature to proceed.',
        descZh: '执行状态安全持久化至数据库。挂起等待操作员密码学签名确认方可继续。',
        durationMs: 450,
        isHitl: true,
        payloadPreview: {
          state: 'SUSPENDED_AWAITING_AUTH',
          escrow_account: 'ESCROW_HOT_01',
          pending_action: 'REVERSE_AND_HOLD'
        }
      },
      {
        id: 'n2-rollback',
        nameEn: 'Atomic Sync & Multi-System Guard',
        nameZh: '多系统原子同步与回滚防线',
        roleEn: 'Orchestrator Egress',
        roleZh: '调度出向执行器',
        descEn: 'Executes synchronized rollback on payment gateway and logs operator signature to immutable audit ledger.',
        descZh: '在支付网关执行同步回滚动作，并将操作员授权签名不可篡改地记录于合规账本。',
        durationMs: 380,
        payloadPreview: {
          reversal_ref: 'rev_99214a',
          channels_notified: 2,
          rollback_success: true
        }
      }
    ]
  },
  {
    id: 's3',
    key: 's3',
    initialPayload: {
      request_id: 'REQ-POLICY-2026-441',
      tenant_id: 'apac_fintech_sovereign',
      token_budget: 4096,
      sla_latency_max_ms: 1500,
      jurisdiction: 'SG_MAS_COMPLIANT'
    },
    finalPayload: {
      status: 'COMPLETED_AND_AUDITED',
      selected_model: 'DeepSeek-R1-Distill-VPC',
      inference_latency_ms: 384,
      pii_entities_sanitized: 14,
      audit_merkle_root: '0x33b4ef9110...77da'
    },
    nodes: [
      {
        id: 'n3-router',
        nameEn: 'Dynamic SLA & Cost Model Router',
        nameZh: 'SLA 与成本自适应模型路由网关',
        roleEn: 'Model Gateway',
        roleZh: '模型路由网关',
        descEn: 'Evaluates real-time model health, prompt complexity, and token budget. Directs prompt to sovereign local cluster.',
        descZh: '实时评估各基础模型健康度、输入复杂度与 Token 成本，将任务派发至主权私有集群。',
        durationMs: 140,
        payloadPreview: {
          target_cluster: 'SOVEREIGN_VPC_SG',
          projected_cost_usd: 0.0014,
          p99_latency_ms: 410
        }
      },
      {
        id: 'n3-pii',
        nameEn: 'Deterministic PII Stripping',
        nameZh: '确定性敏感隐私数据脱敏 (PII)',
        roleEn: 'Privacy Sandbox',
        roleZh: '隐私沙箱',
        descEn: 'Redacts national IDs, personal names, and balance sheets using zero-leakage regex & cryptographic token vault.',
        descZh: '对身份证件、自然人姓名与财务报表敏感数据进行去标识化，使用加密 Token 映射入库。',
        durationMs: 260,
        payloadPreview: {
          redacted_entities: ['NRIC', 'PERSON_NAME', 'ACC_NUMBER'],
          vault_session_id: 'VAULT_9012A'
        }
      },
      {
        id: 'n3-infer',
        nameEn: 'Sovereign Inference Execution',
        nameZh: '主权私有化模型推理执行',
        roleEn: 'Inference Worker',
        roleZh: '推理执行节点',
        descEn: 'Runs model reasoning inside isolated VPC worker without external API internet exposure.',
        descZh: '在完全隔离的私有 VPC 容器内执行推理运算，全程绝不暴露于公网。',
        durationMs: 520,
        payloadPreview: {
          model_name: 'DeepSeek-R1-Sovereign-Q4',
          tokens_processed: 1248,
          ttft_ms: 82
        }
      },
      {
        id: 'n3-audit',
        nameEn: 'SHA-256 Audit Trail Append',
        nameZh: '不可篡改 SHA-256 审计链归档',
        roleEn: 'Audit Ledger',
        roleZh: '审计账本',
        descEn: 'Hashes input, sanitized prompt, reasoning steps, and final decision into tamper-evident regulatory ledger.',
        descZh: '对原始输入、脱敏提示词、思考链与最终决策进行哈希签名，存入防篡改监管账本。',
        durationMs: 210,
        payloadPreview: {
          sha256_record: '7e2b40a...991e',
          compliance_standard: 'MAS_TRM_2026'
        }
      }
    ]
  }
];

export function getScenario(id: string): DagScenario | undefined {
  return dagScenarios.find(s => s.id === id || s.key === id);
}
