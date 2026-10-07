export const zh = {
  nav: {
    brandBadge: "[INFRASTRUCTURE // CORE]",
    home: "全景概览",
    runtime: "运行时",
    architecture: "技术架构",
    solutions: "业务方案",
    scenarios: "客户场景",
    security: "安全合规",
    specs: "技术规格与文档",
    guarantee: "SLA 与确定性保证",
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
  pages: {
    backToOverview: "← 返回平台全景概览",
    architecture: {
      eyebrow: "01 // 技术架构深度解析 // 运行时 v2.4",
      title: "确定性状态机与引擎核心架构",
      subtitle: "深入解析 Selyron 四层执行内核：从多协议事件接入、预写日志分布式共识到高可靠密码学审计输出的全流程架构。",
      ingressTitle: "第一层：多协议事件接入与幂等防护",
      ingressDesc: "接入来自 Kafka、RabbitMQ、Webhooks、gRPC 及传统 ERP RFC/BAPI 轮询器的异步事件。毫秒级生成确定性幂等指纹，杜绝重复触发与数据脏读。",
      engineTitle: "第二层：有状态 DAG 引擎与分布式 WAL",
      engineDesc: "基于 SQLite/Raft 分布式共识机制的高吞吐有限状态机。支持原子级事务补偿与回滚、亚毫秒级状态检查点，确保系统零隐性故障。",
      gatewayTitle: "第三层：主权多模型智能网关",
      gatewayDesc: "混合大模型调度层。在本地完成高敏感 PII 数据脱敏后，严格基于预设 JSON Schema 在本地私有模型（vLLM/Ollama）与云端前沿模型（Claude/GPT）间智能路由。",
      egressTitle: "第四层：事务级执行与密码学审计账本",
      egressDesc: "对外部异构系统（SAP、Salesforce、核心账务系统）执行两阶段提交。每次状态转移均生成 SHA-256 HMAC 密码学数字封签，确保审计链路不可篡改。",
      topologyTitle: "驻场工程师交付拓扑与高可用保障",
      topologyDesc: "专为数据零出境、亚秒级区域故障转移和绝对主权隔离而设计。",
      vpcTitle: "主权私有 VPC 对等互联",
      vpcDesc: "完全部署在客户自己的 AWS、Azure 或阿里云/腾讯云私有云内，零公网暴露，绑定客户专用 KMS 密钥加密。",
      airgapTitle: "物理隔离本地部署（Air-Gapped）",
      airgapDesc: "面向金融、医疗和军工级别的纯内网裸机部署，集成嵌入式私有模型推理引擎与本地数据库集群。",
      failoverTitle: "<500ms 跨可用区热备秒切",
      failoverDesc: "跨多可用区同步 Raft WAL 预写日志复制，达成 RPO=0 与零脑裂秒级故障切换。",
      metricsTitle: "硬件基准与运行时性能分析",
      m1Label: "吞吐峰值容量",
      m1Val: "50,000+ 笔/秒",
      m1Sub: "基于 8 核 c6i.2xlarge 标准基准压测",
      m2Label: "状态转移 P99 延迟",
      m2Val: "<42 毫秒",
      m2Sub: "包含磁盘 WAL 预写持久化同步",
      m3Label: "常驻内存占用",
      m3Val: "<180 MB",
      m3Sub: "30 天全压测无任何内存泄漏",
      m4Label: "恢复点目标 (RPO)",
      m4Val: "RPO = 0",
      m4Sub: "无任何未提交事务数据丢失",
      ctaTitle: "与资深架构团队面对面评估您的基础设施",
      ctaDesc: "获取针对您现有系统的完整技术可行性报告、威胁建模分析与定制化拓扑方案。",
      ctaButton: "预约架构诊断评估"
    },
    solutions: {
      eyebrow: "02 // 生产级落地案例与解决方案",
      title: "企业级解决方案与关键业务场景实践",
      subtitle: "全球财富 2000 强企业如何利用 Selyron 基础设施，彻底替换脆弱的自定义脚本与不可控的 AI Agent 框架。",
      cs1Tag: "汽车制造与大型供应链",
      cs1Title: "跨国跨境 ERP 与第三方物流 (3PL) 供应链实时对齐",
      cs1Challenge: "每日超过 140,000 张采购单分散在老旧 SAP ECC 6.0、Oracle NetSuite 与异构 3PL 仓储系统，每月导致超过 240 万美元的库存数据漂移。",
      cs1Solution: "部署 Selyron 接入层去重器并建立横跨 SAP 与 NetSuite 的两阶段事务性提交机制，实现采购单亚秒级对账与全自动状态回滚保护。",
      cs1Result1: "消除 99.98% 的跨系统库存数据漂移",
      cs1Result2: "对账处理耗时由 4 小时骤降至 120 毫秒",
      cs1Result3: "每年节省运营成本逾 320 万美元",
      cs2Tag: "金融科技与跨国银行",
      cs2Title: "高频资金异常熔断与双人复核门控 (HITL)",
      cs2Challenge: "每日跨境电汇清算额逾 4500 万美元。严格的反洗钱 (AML) 监管要求对异常交易进行人工复核，导致结算周期长达 6 小时以上。",
      cs2Solution: "利用 Selyron 实时异常启发式评分在毫秒级挂起可疑交易，强制执行双人密码学签名授权门控，确认无误后再下发至 Swift/SEPA 支付管道。",
      cs2Result1: "实现零未经授权支付下发",
      cs2Result2: "可疑交易复核审批耗时减少 85%",
      cs2Result3: "成功拦截 380 万美元恶意欺诈资金",
      cs3Tag: "医疗健康与受监管生物制药",
      cs3Title: "主权多模型调度网关与患者隐私数据脱敏",
      cs3Challenge: "需要自动化处理临床试验数据入库，同时严格遵守 HIPAA、GDPR 及医疗数据本地化法规，严禁将未脱敏数据传输至公共云端大模型。",
      cs3Solution: "采用内外双环拓扑架构：在本地私有环境中由内嵌 LLM 提取并清洗 PHI/PII 隐私信息，清洗后的结构化数据才路由至云端大模型，全流程生成 SHA-256 审计链。",
      cs3Result1: "100% 通过 HIPAA 与 GDPR 严苛合规审计",
      cs3Result2: "患者隐私数据零对外暴露风险",
      cs3Result3: "临床入组文档处理效率提升 70%",
      methodologyTitle: "Forward-Deployed 驻场工程交付方法论",
      methodologyDesc: "由资深现场工程师深入企业现场，审计、搭建并基准压测自动化关键管线。",
      phase1Title: "第一阶段：架构审计与威胁建模",
      phase1Desc: "深入分析既有 ERP、CRM 与数据库接口规范，划定幂等事务边界与人工门控授权策略。",
      phase2Title: "第二阶段：主权 VPC 部署与连接器连通",
      phase2Desc: "在企业专属云或私有网络内搭建主权运行时，配置双向 mTLS 与硬件安全模块 (HSM) 密钥托管。",
      phase3Title: "第三阶段：影子运行与双向一致性对齐",
      phase3Desc: "在真实业务中以影子双读模式并行测试，在生产割接前验证系统状态与原有系统达到 100% 对齐。",
      phase4Title: "第四阶段：生产环境正式割接与 7x24 SLA",
      phase4Desc: "无感平滑切换至正式生产环境，配套专属驻场工程团队保障与承诺 <15 分钟应急响应机制。",
      roiTitle: "企业级自动化架构横向对比",
      roiScript: "传统胶水脚本：极高维护成本、无监控隐性故障频发、零状态回滚能力。",
      roiN8n: "消费级云工作流：脆弱的轮询机制、高并发下易内存泄漏、公网数据合规泄露风险。",
      roiSelyron: "Selyron 确定性底座：有限状态机数学收敛、Raft 预写日志、主权私有化隔离、密码学可信证明。",
      ctaButton: "启动系统架构诊断评估"
    },
    specsPage: {
      eyebrow: "03 // 开发者与技术协议参考手册",
      title: "Selyron 核心协议与 SDK 技术规格",
      subtitle: "声明式状态机 DSL、企业级认证连接器矩阵、REST/gRPC API 参考规范及开发者命令行工具体系。",
      apiTitle: "REST 与 gRPC 核心 API 技术规范",
      apiDesc: "支持 Mutual TLS 与 HMAC 签名保护的高性能状态机触发与查询接口。",
      dslTitle: "声明式状态机工作流 DSL (YAML / JSON)",
      dslDesc: "以代码化方式定义具备确定性状态转移、幂等约束与故障事务补偿的企业级管线。",
      connectorsTitle: "企业级预置认证连接器生态",
      connectorsDesc: "专为企业核心业务系统打造的具备两阶段提交保障的原生驱动程序。",
      cliTitle: "开发者命令行工具 (CLI) 指南",
      cliDesc: "支持本地离线仿真、DSL 静态代码检查与 CI/CD 自动化验证流程。",
      codeTabTs: "TypeScript SDK",
      codeTabPy: "Python SDK",
      codeTabGo: "Go SDK",
      copyCode: "复制代码",
      copiedCode: "已复制！"
    },
    securityPage: {
      eyebrow: "04 // 安全合规与可信架构",
      title: "企业安全、数据主权与密码学审计门户",
      subtitle: "数据零模型训练承诺、主权私有 VPC 隔离、密码学状态链条验证与深度纵深防御体系。",
      toolTitle: "实时密码学审计哈希在线验证工具",
      toolDesc: "在线模拟企业状态转移事件，在浏览器内实时计算并校验不可篡改的 SHA-256 HMAC 状态链数字封签。",
      toolSimulate: "生成模拟转移事件",
      toolVerify: "校验 HMAC 完整性",
      toolStatusVerified: "密码学哈希校验通过 · 状态链条完整无篡改",
      toolTxId: "事务流水号 (TxID)",
      toolPrevHash: "前序状态指纹 (Previous Hash)",
      toolPayload: "状态转移载荷 (JSON Payload)",
      toolComputedHash: "计算得出的 SHA-256 HMAC 封签",
      toolSignatureValid: "密码学证明签名有效",
      slaTitle: "安全事件响应与修复 SLA 承诺",
      slaDesc: "受企业法律合同保护的漏洞发现、止血与修复响应时效承诺。",
      p0Title: "P0 极高危安全漏洞",
      p0Time: "< 15 分钟响应",
      p0Desc: "4 小时内完成补丁发布与热修；首席安全架构师 7x24 小时进入作战室协同处理。",
      p1Title: "P1 高危安全漏洞",
      p1Time: "< 1 小时响应",
      p1Desc: "24 小时内完成补丁研发与全网验证，提供专属安全公告与证明报告。",
      p2Title: "P2 中危安全风险",
      p2Time: "< 4 小时响应",
      p2Desc: "在下一个迭代敏捷周期内完成修复并排期发布。",
      whitepaperTitle: "企业合规资质与安全白皮书下载",
      whitepaperDesc: "获取包含 SOC 2 Type II 审计报告摘要、ISO 27001 认证证书及金融级安全白皮书在内的完整合规资料包。",
      whitepaperBtn: "申请完整合规资料包"
    },
    guarantee: {
      eyebrow: "05 // 法律承诺与 SLA 可用性保障体系",
      title: "主服务协议 (SLA) 与确定性执行法律保证",
      subtitle: "面向企业核心业务的确定性执行、故障阻断与高可用响应保障体系。",
      guaranteeTitle: "核心确定性执行法律保证",
      guaranteeBody: "Selyron 在主服务合同中明确承诺：任何被标记为人机协同门控（HITL）或具备强依赖的自动化转移，在未获得带有效密码学签名的操作员授权前，系统从数学层面坚决阻断任何外部不可逆操作，彻底杜绝非受控副作用与状态漂移。",
      termsTitle: "核心法律与技术承诺条款",
      term1Title: "零非授权下发保证 (Zero Un-Gated Execution)",
      term1Desc: "数学证明的有限状态机收敛机制。在未提交受信任签名令牌前，系统坚决拒绝触发外部下游副作用。",
      term2Title: "99.992% 月度可用性服务等级协议 (SLA)",
      term2Desc: "以秒为单位对所有主权节点进行全天候可用性拨测，实时监控并自动触发运维升级响应机制。",
      term3Title: "P99 <42ms 状态转移延迟承诺",
      term3Desc: "全链路分布式追踪监控。若全月 P99 状态持久化延迟超过 50ms，自动触发首席架构师专项排查机制。",
      term4Title: "零数据训练法定契约 (Zero Data Training)",
      term4Desc: "具备法律约束力的严格承诺：客户业务载荷绝不离地留存、绝不写入外部日志、绝不用于任何模型调优。",
      creditTiersTitle: "SLA 服务可用性与运维响应升级阶梯",
      tier1Uptime: "< 99.99% 至 99.90%",
      tier1Credit: "一级根因分析与专项架构审查（24小时内交付）",
      tier2Uptime: "< 99.90% 至 99.00%",
      tier2Credit: "首席架构师介入排查与优先热修保障",
      tier3Uptime: "< 99.00%",
      tier3Credit: "高管层升级介入与 7x24 专项攻坚组联合攻坚",
      supportTitle: "企业技术支持与响应等级",
      supportDesc: "通过企业专属 Slack / 飞书 VIP 群组，直接连线 Forward-Deployed 资深工程师与架构师。",
      tier1Name: "一级故障 (业务完全中断)",
      tier1Time: "15 分钟响应 · 7x24 作战室",
      tier2Name: "二级故障 (部分功能受损)",
      tier2Time: "1 小时响应 · 当日发布补丁",
      tier3Name: "三级问题 (技术咨询与优化)",
      tier3Time: "4 小时响应 · 专人跟进"
    },
    diagnosticPage: {
      eyebrow: "06 // 预检架构评估",
      title: "企业自动化就绪度与系统架构评估",
      subtitle: "评估您的系统规模、集成痛点与安全合规要求，即刻生成量身定制的技术架构蓝图与部署建议。"
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
