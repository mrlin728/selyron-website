import { en } from './en';

export const zh: typeof en = {
  nav: {
    home: "首页",
    services: "实施服务",
    projects: "实战项目与方案蓝图",
    about: "关于专家",
    contact: "定制咨询",
    discussWorkflow: "讨论你的工作流程",
    systemActive: "AI 核心在线 · v2.6",
    menu: "导航菜单"
  },
  hero: {
    eyebrow: "AI 实施与自动化专家",
    titleLine1: "把重复的手动工作，变成",
    titleLine2: "自主可控的 AI 运行系统。",
    description: "我为企业设计并实施高可用、工业级的 AI 工作流、多智能体协同系统与底层系统集成，消除机械重复的琐碎劳动，并在关键决策点保留严格的人工审核。",
    ctaPrimary: "讨论你的工作流程",
    ctaSecondary: "体验实时运行系统",
    identityBadge: "务实的 AI 系统架构设计与企业集成",
    stats: [
      { value: "85%+", label: "减少跨系统人工交接" },
      { value: "<1.2s", label: "自主智能分流平均延迟" },
      { value: "100%", label: "关键不可逆操作人工把关" },
      { value: "12+", label: "统一调度全球主流大模型" }
    ]
  },
  simulator: {
    eyebrow: "交互式流转沙盒",
    title: "亲身体验企业级 AI 工作流",
    subtitle: "点击「运行工作流模拟」，实时观察业务事件从原始输入、智能清洗到触发人工审批的完整流转过程。",
    runButton: "运行工作流模拟",
    runningButton: "正在执行自主流水线...",
    resetButton: "重置模拟",
    approvalRequired: "流水线挂起：等待人工审核把关",
    approveAction: "审核通过并写入 CRM",
    rejectAction: "退回并要求重新评估",
    scenarios: {
      sales: {
        tab: "01. B2B 销售线索自动调研与分流",
        inputLabel: "原始业务输入：未结构化客户询盘邮件",
        from: "发件人: sourcing@apexmanufacturing.com",
        subject: "询盘: 定制高精度工业构件 (月需求量 5,000 件)",
        body: "“你好，请提供 09-C 批次精密构件的技术规格书、阶梯报价方案与交货周期。随信附上我们的 CAD 公差技术图纸。”",
        file: "RFQ_Batch_09C_规格书.pdf (2.4 MB)",
        stages: [
          { name: "文本解析与实体提取", role: "信息提取", desc: "提取公司名、订单规模、核心诉求及紧急程度。" },
          { name: "深度背景调研智能体", role: "数据补全", desc: "调用 Serper 搜索与企业公开工商信息，评估业务契合度。" },
          { name: "资格判定与风控网关", role: "智能审核", desc: "测算商机价值 (预估 $120k ARR)，校验毛利与产能红线。" },
          { name: "回复草稿与结构化入库", role: "内容生成", desc: "生成个性化高管回复草稿，并格式化写入客户管理系统。" }
        ],
        outputTitle: "准备就绪：等待人工确认并同步",
        checks: [
          "企业工商资质已通过验证 (Apex Manufacturing, B轮制造企业)",
          "订单规模符合最低毛利阈值 (+34% 毛利红线合规)",
          "技术公差已匹配内部库存工艺库",
          "个性化回复邮件草稿已生成，包含准确交期预估"
        ],
        crmStatus: "已暂存至 HubSpot · 等待销售总监一键确认发送"
      },
      document: {
        tab: "02. 采购订单与商业发票智能抽取",
        inputLabel: "原始业务输入：多源商业发票扫描件",
        from: "发件人: billing@global-logistics-intl.com",
        subject: "商业清关账单 #GLI-2026-8812",
        body: "“请尽快处理附随集装箱货物 #4092-B 的海运与港杂清关费用账单，需在周五前完成对账核销。”",
        file: "商业发票_GLI_8812_扫描件.pdf (4.1 MB)",
        stages: [
          { name: "OCR 与多模态视觉定位", role: "多模态识别", desc: "分割多栏复杂表格、品名明细、税号与印章区域。" },
          { name: "结构化数据校验引擎", role: "格式清洗", desc: "通过严格 Zod/JSON Schema 输出，杜绝大模型数字幻觉。" },
          { name: "ERP 对账与采购单匹配", role: "交叉复核", desc: "与 PostgreSQL 中的历史 PO #PO-8812 逐条校验单价与数量。" },
          { name: "会计科目调度器", role: "财务暂存", desc: "发现 1.2% 汇率浮动差额，标注并提交财务专员一键确认。" }
        ],
        outputTitle: "账单核对完毕，准备入账",
        checks: [
          "已准确提取 24 项明细行项目 (置信度 99.9%)",
          "税号与境外实时汇率经由官方 API 验证无误",
          "差异金额在预设的容差允许范围之内",
          "NetSuite ERP 凭证数据包已组装完毕"
        ],
        crmStatus: "已生成 NetSuite 凭证草稿 · 小额差异已标记高亮"
      },
      knowledge: {
        tab: "03. 企业制度与知识库合规问答",
        inputLabel: "原始业务输入：即时通讯 / Webhook 运营提问",
        from: "来源频道: #仓储运营技术支持群",
        subject: "仓储收货异常判定",
        body: "“供应商送达的 X-12 批次货物外包装防潮贴轻微破损，但箱内温湿度传感器读数正常。请问可以收货入库吗？”",
        file: "仓储操作规范手册_v2026.3.pdf",
        stages: [
          { name: "权限验证与意图解析", role: "权限审查", desc: "核验提问人员权限级别 (二级物流主管)。" },
          { name: "混合向量 + BM25 检索", role: "精准召回", desc: "召回《仓储操作 SOP §4.2》与《供应商质保协议 §12》。" },
          { name: "原文佐证与溯源引擎", role: "事实校验", desc: "强制标注文档章节出处，缺乏依据时明确拒答并转人工。" },
          { name: "工单派发与审批触发", role: "异常处理", desc: "根据 SOP 规定，自动为质检负责人创建特批确认工单。" }
        ],
        outputTitle: "附带明确来源出处的事实回答",
        checks: [
          "回答已严格锚定《2026年度仓储操作规范手册》",
          "依据第 §4.2 条：防潮贴破损必须由质检主管会签方可入库",
          "杜绝未经证实的猜测，主动触发安全升级流程",
          "已在 Jira 自动生成预填好的特批申请单"
        ],
        crmStatus: "已生成带引用条款的回答 · 工单 #QA-412 已挂起"
      }
    }
  },
  services: {
    eyebrow: "核心实施服务",
    title: "务实的系统，明确的任务。",
    subtitle: "我专注于构建解决实际运营瓶颈的落地系统，无缝接入企业现有工具链，带来清晰可见的效率杠杆与投资回报。",
    learnMore: "了解详细方案",
    discuss: "讨论此项服务",
    list: [
      {
        id: "workflow-automation",
        num: "01",
        title: "AI 工作流自动化",
        desc: "连接团队现有的邮箱、表格、CRM 与数据库，自动执行高频、机械的端到端运营流程。",
        fits: "询盘邮件自动分流、多源数据录入清洗、定期报表生成、跨系统信息流转。",
        delivers: "稳定高可用的任务队列、严密的数据校验规则、异常降级路径，告别人工二次录入。",
        start: "挑选一项最消耗团队精力的重复流程，并提供 5 份代表性业务样例。"
      },
      {
        id: "ai-agents",
        num: "02",
        title: "特定任务 AI 智能体",
        desc: "构建具备联网搜索、代码解释、文档研读与数据库查询能力的专业智能体，自主调研并产出深度工作结果。",
        fits: "商业竞争对手情报搜集、潜客官网深度背调、长篇合同要点比对、合规审查。",
        delivers: "限定的自主行动边界、严格的工具调用权限、全链路可追溯的操作审计日志。",
        start: "明确智能体的具体目标、允许使用的外部工具，以及合格输出的判定标准。"
      },
      {
        id: "system-integration",
        num: "03",
        title: "API 与底层系统集成",
        desc: "将最先进的 AI 大模型连接到企业 CRM（如 HubSpot/Salesforce）、数据库（PostgreSQL/Supabase）、办公通讯（飞书/企业微信/Slack）及传统系统。",
        fits: "各系统数据孤岛、重复手工搬运录入、繁琐的 CSV 导入导出、异步任务调度。",
        delivers: "高可靠 Webhook 接收端、双向数据实时同步、指数退避重试、字段漂移告警。",
        start: "梳理涉及的系统清单，以及需要在各系统间流转的核心数据字段。"
      },
      {
        id: "internal-tools",
        num: "04",
        title: "内部定制 AI 工具",
        desc: "围绕企业实际业务流定制简洁易用的内部轻量 Web 应用，终结散落在不同聊天窗口的零散提示词与凌乱表格。",
        fits: "销售话术与报价智能助手、客服工单辅助诊断平台、业务内容快速质检面板。",
        delivers: "基于角色的权限控制、精细打磨的内置提示工程、人性化操作界面、极速交付。",
        start: "录屏或现场演示当前团队成员是如何手动完成这套操作的。"
      },
      {
        id: "automation-audit",
        num: "05",
        title: "系统与自动化审查",
        desc: "对企业现有业务流程进行全方位技术梳理，找出真正具备高 ROI 的自动化环节，避开华而不实的技术陷阱。",
        fits: "对 AI 概念感到困惑、不知从何下手，或曾遭遇原型项目失败的企业团队。",
        delivers: "业务流依赖拓扑图、技术可行性与成本评分、数据安全边界评估、可执行的落地路线图。",
        start: "一次 60 分钟的深入梳理，复盘当前阻碍效率的关键堵点。"
      }
    ]
  },
  problems: {
    eyebrow: "直击业务痛点",
    title: "少一些机械复制，多一些确定性。",
    subtitle: "当专业骨干每周把 40% 的精力花在跨系统搬运信息上，企业效率必然停滞。Selyron 将孤立的手动操作，串联成可运行、有保障的流水线。",
    items: [
      { before: "在邮箱、表格与销售系统之间反复手工复制粘贴", after: "基于 API 的后台实时双向同步，配合严格的数据格式校验" },
      { before: "花费数小时逐个浏览客户官网，手动整理客户背景与评分", after: "智能体自主扫描网络足迹，几十秒内输出全面详尽的调研简报" },
      { before: "商业发票与技术参数需要人工逐字录入进内部表格", after: "多模态视觉抽取流水线，仅在置信度不足或异常时唤醒人工复核" },
      { before: "内部制度分散在多份不同版本的 PDF 中，难以查证最新依据", after: "严格附带条款出处的企业知识助手，确保回答真实可查、绝不凭空捏造" },
      { before: "AI 提示词输出结果忽好忽坏，经常出现莫名其妙的幻觉", after: "确定性策略防护网、标准测试评估集与强类型结构化格式约束" }
    ]
  },
  projects: {
    eyebrow: "精选系统与实战案例",
    title: "真实业务。落地运行。",
    subtitle: "以下系统均已在实际企业业务中投入运行，具备清晰的监控队列、有限重试机制以及极高可信度的人机审核交接点。",
    deliveredTitle: "已落地的真实系统",
    blueprintsTitle: "原创方案设计蓝图",
    items: [
      {
        id: "b2b-lead-research",
        title: "B2B 销售线索调研与外联自动化系统",
        category: "内部系统 / Stardots 自动化流程",
        description: "一套自动化的潜客调研与触达引擎：自主发现潜在企业客户，抓取其官网信息，依据 14 项维度评估 ICP 契合度，并为销售总监准备量身定制的跟进简报与邮件草稿。",
        tech: ["DeepSeek", "Serper API", "TypeScript", "Supabase", "PostgreSQL"],
        flow: ["域名发现", "抓取与清洗", "ICP 契合打分", "关键人挖掘", "生成跟进草稿", "CRM 暂存待审"],
        metrics: [
          { label: "单客户调研耗时", value: "35分钟 → 45秒" },
          { label: "数据字段补全率", value: "98.4%" },
          { label: "每周处理通量", value: "2,000+ 家企业" }
        ]
      },
      {
        id: "stardots-bags",
        title: "Stardots Bags 品牌全球商业数字平台",
        category: "客户交付项目 / 国际 B2B 贸易",
        description: "为全球采购商打造的高性能商业展示与询盘平台。具备结构化产品数据库、多语种 SEO 底座、自动化询盘捕获与智能派发链路。",
        tech: ["React", "Vite", "Tailwind CSS", "Vercel", "结构化数据引擎"],
        flow: ["产品目录矩阵", "多语种语义索引", "询盘即时捕获", "Webhook 智能分流", "销售跟进派发"],
        metrics: [
          { label: "Core Web Vitals 评分", value: "100 / 100" },
          { label: "询盘有效转化率", value: "+42%" },
          { label: "全球首屏响应", value: "<80ms" }
        ]
      },
      {
        id: "automation-infrastructure",
        title: "AI 任务调度与高可用队列基础设施",
        category: "系统底座 / 容灾调度架构",
        description: "支撑多智能体复杂业务的后台高可用调度引擎。包含状态检查点恢复、指数退避重试、死信队列智能报警与极轻量的可视化监控面板。",
        tech: ["PostgreSQL", "pg_cron", "Supabase", "TypeScript", "Vercel Functions"],
        flow: ["任务队列入栈", "工作节点并发消费", "速率限制平滑控制", "异常死信拦截", "审计回溯日志"],
        metrics: [
          { label: "系统可用性 SLA", value: "99.95%" },
          { label: "异常崩溃恢复", value: "零数据丢失" },
          { label: "并发调度能力", value: "50+ 智能体并行" }
        ]
      }
    ],
    blueprints: [
      {
        id: "knowledge-copilot",
        code: "KB / 01",
        title: "企业知识库合规助手",
        subtitle: "深度锚定企业权威知识库、具备权限边界与严格原文引用的智能问答助手。",
        tags: ["向量语义检索", "原文条款精准引用", "RBAC 权限隔离"],
        desc: "针对异地多团队文档陈旧、版本冲突的难题而设计。基于提问者权限仅检索有权查看的资料，精准标注对应段落，信息不足时主动拒绝瞎猜。"
      },
      {
        id: "document-intelligence",
        code: "DOC / 02",
        title: "智能文档处理流水线",
        subtitle: "以人工审核为优先，将杂乱订单、发票与规格表转换为严谨数据库记录。",
        tags: ["多模态 OCR 视觉", "Zod 强类型校验", "ERP 连接器"],
        desc: "处理各类非标准版式业务文件，精准提取表格行列，计算异常值，并对低置信度数据主动提示人工复核，确保进账数据百分之百精确。"
      },
      {
        id: "model-gateway",
        code: "AI / 03",
        title: "多模型智能体网关",
        subtitle: "基于统一策略的模型智能路由、成本控制与调用监控基础设施。",
        tags: ["智能模型分流", "预算与配额围栏", "全链路耗时追踪"],
        desc: "将简单日常任务路由至极速低成本模型，仅将需要深度逻辑推理的任务分发给顶尖前沿模型，帮助企业在保证品质的同时降低 70%+ 的 Token 成本。"
      }
    ]
  },
  calculator: {
    eyebrow: "效益测算工具",
    title: "测算你的流程自动化价值",
    subtitle: "输入团队规模与每周机械耗时，即刻预估通过 Selyron 自动化系统可释放的人力工时与直接经济效益。",
    teamSizeLabel: "运营 / 销售 / 采购团队人数",
    hoursLabel: "人均每周用于重复搬运与录入的工时 (小时)",
    hourlyRateLabel: "综合人均时薪成本 (元 / 小时)",
    annualHoursSaved: "每年累计节省工时",
    annualCostSaved: "每年释放的直接人工成本",
    roiMessage: "根据实操经验，定制化自动化系统通常在上线后 4-6 周内即可完全收回研发投入。"
  },
  models: {
    eyebrow: "全球模型与技术生态",
    title: "连接全球智慧，打造务实系统。",
    subtitle: "我们不迷信单一模型，而是根据延迟、推理深度、隐私安全性以及综合成本，为流水线中的各个子任务精准匹配最适合的基座模型。",
    filters: {
      all: "全部模型",
      reasoning: "深度逻辑推理",
      speed: "极速响应与低成本",
      multimodal: "视觉多模态",
      opensource: "开源与本地私有化"
    }
  },
  methodology: {
    eyebrow: "工程实施方法论",
    title: "从一个业务卡点，到可长期自运行的健壮系统",
    subtitle: "严谨透明的六步工程化交付流程，确保系统稳定性、数据安全性以及内部团队的顺畅交接。",
    steps: [
      { num: "01", title: "梳理实际业务流", desc: "深入剖析输入数据、系统依赖、人工干预环节及各类业务异常情况。" },
      { num: "02", title: "锁定高价值自动化节点", desc: "剥离出耗时最高的高频重复步骤，同时在重大业务决策点主动保留人工判断。" },
      { num: "03", title: "系统架构与策略设计", desc: "确立严格的 JSON Schema 数据结构、访问权限围栏、模型分流策略与异常回退方案。" },
      { num: "04", title: "实施系统与接口打通", desc: "连接各模型、Webhook、数据库及业务软件，构建生产级别的调度队列与日志体系。" },
      { num: "05", title: "边界压力与对抗测试", desc: "针对格式损坏的输入、高并发尖峰、网络波动以及未知极端场景进行系统性测试。" },
      { num: "06", title: "部署上线与透明交接", desc: "交付完整的技术架构文档、运行监控面板、运维排错指南，并在上线后持续调优。" }
    ]
  },
  about: {
    eyebrow: "关于 Selyron",
    title: "务实的 AI 系统架构。纯粹的工程落地。",
    subtitle: "AI 实施与自动化专家",
    lead: "我为追求真正运营提效的企业设计并构建务实的 AI 工作流、智能体协同网络与底层软件集成，不搞概念炒作，只解决真实业务难题。",
    paragraphs: [
      "我认为，AI 只有深入到那些繁琐、枯燥但高频的关键运营卡点时，才能发挥真正的杠杆价值：例如需要经历 12 个手动步骤的客户背调、各孤立 SaaS 系统间无休止的数据搬运，或是深埋在邮箱附件中无法检索的合同单据。",
      "我的工程原则非常纯粹：从人的具体困境出发；在未经验证前将大语言模型的输出一律视为不可信数据；在不可逆操作前保留人工审核确认；并且永远为系统提供详尽的代码与运行手册，确保企业团队能够自主掌控与长期运维。"
    ],
    principles: [
      { title: "始于真实工作", desc: "绝不为了追求噱头而强行套用 AI。如果一条简单的 SQL 或确定性脚本能更好地解决问题，我们就用最简单稳健的方式。" },
      { title: "过程全透明可查", desc: "拒绝黑盒自动化。系统每一次决策均有迹可循，每一次引用均可追溯原文，重大操作必须经由人工批准授权。" },
      { title: "交付即掌控", desc: "规范整洁的代码结构、强类型数据契约、完善的容错处理与清晰的交接文档，让系统真正归属于你的团队。" }
    ],
    email: "mrlin728@gmail.com"
  },
  contact: {
    eyebrow: "发起技术咨询",
    title: "你想让哪项重复工作自动运行起来？",
    subtitle: "告诉我你目前的手动操作流程、涉及的软件工具，以及效率卡在哪里。我将评估你的流程，并提供一份清晰可行的系统架构与实施方案。",
    formTitle: "定制工作流需求评估",
    nameLabel: "你的姓名",
    emailLabel: "工作邮箱",
    companyLabel: "公司 / 团队名称",
    serviceLabel: "意向实施领域",
    serviceOptions: [
      "AI 工作流自动化",
      "特定任务 AI 智能体开发",
      "API 与底层业务系统集成",
      "内部定制轻量 AI 应用",
      "企业自动化机会深度审查"
    ],
    toolsLabel: "目前正在使用的工具 (如: 邮箱、飞书、HubSpot、PostgreSQL、Notion、钉钉等)",
    workflowDescLabel: "描述当前的手动工作流程与痛点",
    workflowDescPlaceholder: "目前的流程是怎样的？通常耗费多少时间？在哪个环节容易出错或延误？希望达到什么预期？",
    submitButton: "提交需求提案",
    submitting: "正在发送请求...",
    successTitle: "需求已成功提交",
    successMsg: "非常感谢你的联系。我会亲自梳理每一份工作流提案，并在 24 小时内通过邮件回复初步技术建议与后续安排。",
    emailAlternative: "偏好直接发邮件沟通？",
    emailLink: "mrlin728@gmail.com"
  },
  footer: {
    tagline: "实用的 AI 工作流、智能体网络与 API 底层集成。围绕你的真实业务场景而构建。",
    servicesTitle: "核心服务",
    exploreTitle: "探索 Selyron",
    contactTitle: "联系与沟通",
    rights: "© 2026 Selyron. 保留所有权利。",
    privacy: "隐私声明",
    builtWith: "基于 React、TypeScript 与 Vite 精心构建。"
  }
};
