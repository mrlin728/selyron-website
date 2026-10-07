export type Language = 'en' | 'zh';

export type PageId = 'home' | 'services' | 'projects' | 'about' | 'contact';

export interface WorkflowStage {
  id: string;
  name: string;
  role: string;
  description: string;
  status: 'idle' | 'running' | 'completed' | 'waiting_approval';
  metrics?: string;
  outputPreview?: string;
}

export interface WorkflowScenario {
  id: string;
  title: string;
  description: string;
  input: {
    title: string;
    source: string;
    preview: string;
    file?: string;
  };
  stages: WorkflowStage[];
  result: {
    title: string;
    summary: string;
    checklist: string[];
    crmAction: string;
  };
}

export interface ModelInfo {
  name: string;
  provider: string;
  category: 'reasoning' | 'speed' | 'multimodal' | 'opensource';
  bestFor: string;
  latency: string;
  costTier: '$' | '$$' | '$$$';
  docUrl: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  type: string;
  client: string;
  description: string;
  tags: string[];
  flowSteps: string[];
  results: string[];
  metrics: { label: string; value: string }[];
}

export interface BlueprintItem {
  id: string;
  code: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  inputs: string;
  outputs: string;
  architectureSteps: string[];
  decisions: { title: string; content: string }[];
  acceptanceCriteria: string[];
}
