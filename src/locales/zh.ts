export const zh = {
  nav: {
    brandBadge: "[INFRASTRUCTURE // CORE]",
    runtime: "运行时",
    architecture: "技术架构",
    scenarios: "客户场景",
    security: "安全合规",
    specs: "技术规格",
    faq: "常见问题",
    scheduleReview: "预约架构诊断",
    langToggle: "EN",
    systemActive: "核心运行就绪 · v2.4"
  },
  hero: {
    versionBadge: "v2.4 确定性自动化执行运行时",
    title: "企业核心业务的确定性自动化基础设施",
    subtitle: "高可靠、可审计、状态持久化的企业级自动化基础设施。统一跨遗留 ERP、多模型决策网关与分布式业务系统的复杂流转，实现零隐性故障。",
    startAssessment: "启动架构评估",
    inspectRuntime: "查看 DAG 实时演练",
    cliPill: "CLI 评估命令",
    copyCommand: "curl -fsSL https://get.selyron.com/eval | sh",
    copiedCommand: "命令已复制到剪贴板！"
  },
  telemetry: {
    determinism: "99.99% 执行确定性",
    determinismSub: "零未捕获状态漂移",
    latency: "<120ms 路由延迟",
    latencySub: "P99 模型调度与 Token 缓存",
    reliability: "零隐性失败保障",
    reliabilitySub: "分布式幂等锁与原子回滚",
    deployment: "私有 VPC 与物理隔离支持",
    deploymentSub: "100% 本地数据主权"
  },
  dag: {
    eyebrow: "01 // 实时执行引擎",
    title: "确定性状态机与 DAG 演练器",
    subtitle: "单步追踪企业级管线运行。实时观测节点状态流转、微秒级遥测延迟、异常自愈重试与带加密签名的专家人工审批 (HITL) 门禁。",
    run: "运行流水线",
    running: "正在执行步骤...",
    stepForward: "单步前进",
    reset: "重置 DAG",
    hitlRequired: "流水线挂起：人工授权门禁",
    hitlDesc: "核心业务状态转移需要操作员进行加密签名确认，方可提交至企业账本与核心系统。",
    authorize: "授权签署并继续",
    telemetryTitle: "运行遥测数据",
    payloadTitle: "状态 Payload 检查器",
    nodeId: "节点 ID",
    status: "运行状态",
    latencyMs: "耗时",
    retryCount: "重试次数",
    nodes: "节点列表",
    scenarioCompleted: "流水线成功执行 · 全部节点原子提交",
    viewVisual: "可视化有向图 (DAG)",
    viewCode: "声明式工作流源码",
    scenarios: {
      s1: {
        tab: "01. 单据摄入与 ERP 核对",
        title: "多模态非标单据摄入与跨 ERP 自动化核对",
        desc: "摄取商业发票与多源单据，运行多阶段校验解析，与 ERP 库存采购订单自动比对，生成原子级财务入账记录。"
      },
      s2: {
        tab: "02. 事件触发与 HITL 审批",
        title: "跨系统异常事件摄取与人工审批 (HITL) 门禁",
        desc: "摄取异步异常 Webhook 事件，计算财务风险敞口，暂停执行并推送带签名的操作员审批流，执行回滚同步保障。"
      },
      s3: {
        tab: "03. 多模型网关与合规审计",
        title: "自适应多模型路由网关与不可篡改审计账本",
        desc: "基于延迟与成本约束在主流大模型间动态路由，执行敏感信息严格脱敏，并写入符合合规要求的 SHA-256 审计链。"
      }
    }
  },
  tiers: {
    eyebrow: "02 // 架构蓝图",
    title: "4-Tier 分层基础设施架构",
    subtitle: "解耦、模块化且高韧性。专为无缝嵌入企业现有 IT 资产而设计，无需推倒或替换现有交易系统。",
    tier1: {
      number: "TIER 01",
      name: "事件接入与数据摄入层 (Ingress)",
      desc: "高吞吐接入支持 Webhooks、异步消息队列、SFTP 批量文件以及非标扫描文档，具备确定性去重能力。",
      protocols: "Kafka · RabbitMQ · gRPC · S3 / SFTP 订阅"
    },
    tier2: {
      number: "TIER 02",
      name: "确定性调度与状态机核心 (Orchestration)",
      desc: "有向无环图 (DAG) 状态机，具备分布式状态持久化、分布式锁、指数退避重试与人工挂起安全机制。",
      protocols: "状态持久化 · 幂等性锁 · 原子级回滚"
    },
    tier3: {
      number: "TIER 03",
      name: "自适应模型与决策网关 (Intelligence)",
      desc: "动态多模型路由调度，优化推理延迟与综合成本。具备实时 Token 缓存与全流程 PII 隐私脱敏。",
      protocols: "DeepSeek-R1 · Claude 3.7 · GPT-4o · 本地私有权重"
    },
    tier4: {
      number: "TIER 04",
      name: "企业系统出向与审计账本 (Egress)",
      desc: "向传统核心系统（SAP、Oracle、金蝶、Salesforce）执行两阶段提交，生成符合法规的只追加执行证据。",
      protocols: "SAP RFC / OData · Salesforce REST · SHA-256 审计链"
    }
  },
  scenarios: {
    eyebrow: "03 // 企业生产级解决方案",
    title: "专为高风险复杂业务场景打造",
    subtitle: "在消费级自动化工具失效的地方建立秩序：处理百万级交易、严格数据合规要求与不可妥协的 SLA。",
    case1: {
      tag: "财务与供应链对账",
      title: "三单匹配与海关报关自动化对齐",
      challenge: "跨国制造集团月处理 45,000 份多币种、多税率发票，跨系统手工录入导致结算周期长达 14 天。",
      outcome: "采购单、海关单据与入库单自动三单匹配核对，异常差异毫秒级路由至财务主管专席审批。",
      metricValue: "< 3 分钟",
      metricLabel: "端到端平均处理周期"
    },
    case2: {
      tag: "关键业务运维与审批",
      title: "异常事故自动升级与一键授权介入",
      challenge: "高并发物流企业在履约异常时，人工工单流转慢导致大额滞留损失，缺乏标准化回滚手段。",
      outcome: "遥测指标异常秒级隔离，一键触发飞书/钉钉企业安全签名授权，管理人员单点审批触发系统自动回滚。",
      metricValue: "88%",
      metricLabel: "平均恢复时间 (MTTR) 降幅"
    },
    case3: {
      tag: "制度与合规治理",
      title: "机构级合规策略校验与不可篡改审计跟踪",
      challenge: "跨境金融服务面临多司法管辖区反洗钱与交易筛查，数据分散在各孤岛，合规审计风险高。",
      outcome: "零数据留存网关在送模前实施去标识化脱敏，每一次推理决策自动打上时间戳并存入密码学审计账本。",
      metricValue: "100%",
      metricLabel: "不可篡改审计追踪达成率"
    }
  },
  security: {
    eyebrow: "04 // 安全、信任与企业合规",
    title: "原生主权级企业安全基础设施",
    subtitle: "您的专属业务数据绝不离开合规边界，绝不被任何第三方用于模型训练，完全符合机构级安全审查规范。",
    pillar1: {
      title: "专属私有 VPC 与物理隔离部署",
      desc: "可完全部署在您的阿里云/腾讯云/AWS/华为云 VPC 或本地机房物理隔离网络中，无外部出向依赖。",
      tag: "部署主权保障"
    },
    pillar2: {
      title: "零模型训练数据留存保障",
      desc: "具备严格的法律与架构双重隔离：所有客户交易流转 Payload 与商业机密绝不用于任何公共模型训练。",
      tag: "数据隐私承诺"
    },
    pillar3: {
      title: "密码学防篡改审计轨迹",
      desc: "每个节点运行、人工签名操作与外部系统写调用均生成哈希指纹，提供满足外部监管审计的完整链条。",
      tag: "不可篡改溯源"
    },
    pillar4: {
      title: "企业级 SLA 与容灾机制",
      desc: "提供 99.99% 可用性 SLA，支持跨可用区状态机热备故障切换、确定性事件重放与专属高级工程师支持。",
      tag: "机构级可靠性"
    }
  },
  specs: {
    eyebrow: "05 // 系统技术规格与连接器",
    title: "协议拓扑矩阵与运行时指标",
    subtitle: "硬核工程边界指标、确定性事件重放保证，以及经认证的企业级生产连接器。",
    connectorsTitle: "认证企业级连接器矩阵",
    benchmarksTitle: "确定性运行时基准指标",
    codeTitle: "声明式自动化工作流代码定义",
    copyCode: "复制代码片段",
    copied: "已复制到剪贴板！",
    b1: {
      label: "P99 状态转移延迟",
      value: "< 42 ms",
      desc: "内存级分布式预写日志 (WAL) 快照"
    },
    b2: {
      label: "吞吐水平伸缩能力",
      value: "50,000+ req/s",
      desc: "无状态分布式 Worker 执行集群"
    },
    b3: {
      label: "Token 缓存命中率",
      value: "84.2%",
      desc: "高频重复请求的语义 KV 缓存"
    },
    b4: {
      label: "单个 Worker 内存占用",
      value: "< 14 MB",
      desc: "轻量级沙箱化容器隔离"
    }
  },
  faq: {
    eyebrow: "06 // 常见架构与商务问答",
    title: "企业架构与工程深度解答",
    subtitle: "面向 CTO、合规总监与前向部署工程师的常见核心技术与落地解答。",
    q1: {
      q: "Selyron 如何在关键业务中消除大模型的不确定性与幻觉？",
      a: "Selyron 将“智能推理”与“状态转移”严格解耦：大语言模型仅输出结构化 JSON 提案，必须通过严格的 Schema 模式校验、确定性不变量断言与预置业务规则门禁后，状态方可提交至核心系统。"
    },
    q2: {
      q: "Selyron 是否支持在完全断网的涉密物理隔离或私有云中部署？",
      a: "完全支持。Selyron 可 100% 部署在企业专属机房或私有 VPC。在物理隔离模式下，智能网关将流量自动调度至内部 GPU 集群上通过 vLLM 或 Ollama 运行的开源模型（如 DeepSeek-R1、Qwen 2.5、Llama 3.3）。"
    },
    q3: {
      q: "人工审批介入 (HITL) 如何与企业现有的权限与身份系统打通？",
      a: "Selyron 审批节点可无缝挂接企业 SAML 2.0 / OIDC 身份认证体系，或通过飞书/钉钉/企业微信机器人安全签名卡片推送。在审批未完成前，事务状态安全冻结在数据库中，直到授权人员完成签署。"
    },
    q4: {
      q: "如何对接没有现代 Webhook 接口的传统 SAP、金蝶等老旧 ERP？",
      a: "Selyron 内置针对 SAP 的原生 RFC/BAPI 协议适配器、ODBC/JDBC 事务连接器以及安全 SFTP 批处理监听器，在传统协议上封装分布式幂等锁与两阶段提交。"
    },
    q5: {
      q: "Selyron 与消费级工具（如 Zapier、Make）的本质区别是什么？",
      a: "消费级工具基于线性“尽力而为”脚本，在遇到偶发网络故障或跨系统不一致时容易发生隐性静默失败。Selyron 是分布式有向无环图 (DAG) 状态机，具备事务持久化、指数退避重试、密码学审计链与企业级零数据留存保障。"
    }
  },
  diagnostic: {
    title: "企业自动化架构预审诊断",
    subtitle: "从系统集成复杂度、数据吞吐规模与安全架构要求三个维度，评估您企业自动化的落地成熟度。",
    step1Title: "步骤 1：主要架构瓶颈",
    step1Desc: "选择当前制约您业务效率与自动化落地的核心技术堵点。",
    step2Title: "步骤 2：部署环境与业务吞吐量",
    step2Desc: "选择目标部署形态以及预期的日均事务处理规模。",
    step3Title: "步骤 3：企业信息与诊断派发",
    step3Desc: "即时生成定制版架构评估简报，并获取专家团队进一步深入评审。",
    next: "下一步",
    back: "返回",
    submit: "生成架构简报并预约专家评审",
    submitting: "正在生成架构分析概要...",
    summaryTitle: "预审架构简报已生成",
    summaryDesc: "我们的前向部署工程团队将在 24 个工作小时内分析您的系统参数并与您对接。",
    close: "关闭窗口",
    recommendationTitle: "初步工程架构建议",
    recommendationBody: "推荐架构方案：专属主权 VPC 混合部署模式 + Selyron 确定性调度核心 + 自适应模型网关。",
    options: {
      friction1: "非标格式单据自动提取与对齐（商业发票、合同、各类扫描件）",
      friction2: "跨系统流转困难与遗留 ERP 脆弱性（SAP、金蝶、用友、Salesforce）",
      friction3: "生成式 AI 不确定性与幻觉，难以胜任关键核心交易决策",
      friction4: "复杂多部门流程缺乏清晰审批链条与合规审计证据",
      env1: "企业专属公有云 VPC (阿里云 / 腾讯云 / AWS)",
      env2: "本地机房专有私有化部署 (On-Premises)",
      env3: "物理隔离涉密网络环境 (Air-Gapped)",
      vol1: "< 10,000 笔事务 / 天",
      vol2: "10,000 - 100,000 笔事务 / 天",
      vol3: "> 100,000 笔事务 / 天 (高并发级)"
    },
    fields: {
      workEmail: "企业工作邮箱",
      companyName: "企业 / 机构全称",
      role: "您的技术 / 业务职责角色",
      notes: "特定系统与接口约束（可选）"
    }
  },
  footer: {
    systemOperational: "全系统稳定运行中 · Selyron Core 运行时 v2.4",
    brandSummary: "面向企业核心关键任务的确定性自动化基础设施与前向工程交付体系。",
    navigation: "快速导航",
    securityTitle: "安全与信任",
    legal: "法律与合规",
    copyright: "© 2026 Selyron Systems Inc. 保留所有权利。"
  }
};
