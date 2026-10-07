import { describe, it, expect } from 'vitest';
import { dagScenarios, getScenario } from '../src/data/dagScenarios';

describe('DAG Engine Scenarios and State Machine Definitions', () => {
  it('should define exactly 3 production-grade enterprise scenarios', () => {
    expect(dagScenarios).toHaveLength(3);
    const keys = dagScenarios.map(s => s.key);
    expect(keys).toEqual(['s1', 's2', 's3']);
  });

  it('should ensure each scenario has at least 4 sequential nodes with valid metadata', () => {
    for (const scenario of dagScenarios) {
      expect(scenario.nodes.length).toBeGreaterThanOrEqual(4);
      for (const node of scenario.nodes) {
        expect(node.id).toBeTruthy();
        expect(node.nameEn).toBeTruthy();
        expect(node.nameZh).toBeTruthy();
        expect(node.durationMs).toBeGreaterThan(0);
        expect(typeof node.payloadPreview).toBe('object');
      }
    }
  });

  it('should include a human-in-the-loop (HITL) gate in Scenario 2', () => {
    const s2 = getScenario('s2');
    expect(s2).toBeDefined();
    const hitlNodes = s2!.nodes.filter(n => n.isHitl);
    expect(hitlNodes.length).toBeGreaterThan(0);
    expect(hitlNodes[0].nameEn.toLowerCase()).toContain('approval');
  });

  it('should provide initial and final payloads with structured business attributes', () => {
    for (const scenario of dagScenarios) {
      expect(Object.keys(scenario.initialPayload).length).toBeGreaterThan(0);
      expect(Object.keys(scenario.finalPayload).length).toBeGreaterThan(0);
    }
  });

  it('should return undefined for non-existent scenario id', () => {
    expect(getScenario('non-existent')).toBeUndefined();
  });
});
