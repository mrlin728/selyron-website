export type Language = 'en' | 'zh';
export type PageId = 'home' | 'runtime' | 'architecture' | 'scenarios' | 'security';

export type NodeStatus = 'idle' | 'running' | 'completed' | 'awaiting_approval' | 'error';

export interface DagNode {
  id: string;
  nameEn: string;
  nameZh: string;
  roleEn: string;
  roleZh: string;
  descEn: string;
  descZh: string;
  durationMs: number;
  isHitl?: boolean;
  payloadPreview: Record<string, any>;
}

export interface DagScenario {
  id: string;
  key: 's1' | 's2' | 's3';
  nodes: DagNode[];
  initialPayload: Record<string, any>;
  finalPayload: Record<string, any>;
}

export interface DiagnosticFormData {
  friction: string;
  deploymentEnv: string;
  volume: string;
  workEmail: string;
  companyName: string;
  role: string;
  notes?: string;
}
