import { ModelInfo } from '../types';

export const modelsData: ModelInfo[] = [
  {
    name: "Claude 3.7 Sonnet / Opus",
    provider: "Anthropic",
    category: "reasoning",
    bestFor: "Complex multi-step workflow logic, hybrid extended thinking, code refactoring",
    latency: "~800ms",
    costTier: "$$$",
    docUrl: "https://platform.claude.com/docs/en/models/overview"
  },
  {
    name: "DeepSeek R1 & V3",
    provider: "DeepSeek",
    category: "reasoning",
    bestFor: "High-reasoning data extraction, mathematical logic, cost-effective chain-of-thought",
    latency: "~950ms",
    costTier: "$",
    docUrl: "https://api-docs.deepseek.com/quick_start/pricing"
  },
  {
    name: "Gemini 2.5 & 3.8 Flash",
    provider: "Google",
    category: "multimodal",
    bestFor: "Massive context audio/video/document OCR, ultra-fast agent tool-calling",
    latency: "~280ms",
    costTier: "$",
    docUrl: "https://ai.google.dev/gemini-api/docs/models"
  },
  {
    name: "GPT-4o & o3-mini",
    provider: "OpenAI",
    category: "reasoning",
    bestFor: "General enterprise tool orchestration, high-speed structured JSON validation",
    latency: "~450ms",
    costTier: "$$",
    docUrl: "https://developers.openai.com/api/docs/models"
  },
  {
    name: "Qwen 2.5 (72B / Coder)",
    provider: "Alibaba Cloud",
    category: "opensource",
    bestFor: "Bilingual Asian enterprise workflows, robust local code synthesis",
    latency: "~520ms",
    costTier: "$",
    docUrl: "https://qwenlm.github.io/"
  },
  {
    name: "Llama 3.3 (70B)",
    provider: "Meta",
    category: "opensource",
    bestFor: "On-premises private infrastructure, zero data leak compliance deployments",
    latency: "~600ms",
    costTier: "$",
    docUrl: "https://github.com/meta-llama/llama-models"
  },
  {
    name: "Mistral Large & Pixtral",
    provider: "Mistral AI",
    category: "multimodal",
    bestFor: "European GDPR-compliant multimodal document analysis and multilingual extraction",
    latency: "~420ms",
    costTier: "$$",
    docUrl: "https://docs.mistral.ai/models"
  },
  {
    name: "Grok 2 / Grok 3",
    provider: "xAI",
    category: "speed",
    bestFor: "Real-time web trend discovery and dynamic contextual synthesis",
    latency: "~380ms",
    costTier: "$$",
    docUrl: "https://docs.x.ai/developers/models"
  },
  {
    name: "Moonshot Kimi K1.5",
    provider: "Moonshot AI",
    category: "reasoning",
    bestFor: "Ultra-long Chinese corporate contract indexing and long-tail context analysis",
    latency: "~750ms",
    costTier: "$$",
    docUrl: "https://platform.kimi.ai/docs/overview"
  },
  {
    name: "GLM-4 / Z.ai",
    provider: "Zhipu AI",
    category: "speed",
    bestFor: "Domestic enterprise agent tool calling and structured function calling",
    latency: "~310ms",
    costTier: "$",
    docUrl: "https://docs.z.ai/guides/overview/quick-start"
  },
  {
    name: "MiniMax M6 / Text-01",
    provider: "MiniMax",
    category: "speed",
    bestFor: "Extreme token throughput and conversational voice synthesis orchestration",
    latency: "~300ms",
    costTier: "$",
    docUrl: "https://platform.minimax.io/docs/guides/models-intro"
  },
  {
    name: "Command R+ / Cohere",
    provider: "Cohere",
    category: "reasoning",
    bestFor: "Enterprise RAG reranking and verifiable business source citation",
    latency: "~500ms",
    costTier: "$$",
    docUrl: "https://docs.cohere.com/docs/models"
  }
];
