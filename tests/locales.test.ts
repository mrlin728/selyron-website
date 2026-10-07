import { describe, it, expect } from 'vitest';
import { en } from '../src/locales/en';
import { zh } from '../src/locales/zh';

function getKeys(obj: Record<string, any>, prefix = ''): string[] {
  let keys: string[] = [];
  for (const key of Object.keys(obj)) {
    const fullPath = prefix ? `${prefix}.${key}` : key;
    if (obj[key] !== null && typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      keys = keys.concat(getKeys(obj[key], fullPath));
    } else {
      keys.push(fullPath);
    }
  }
  return keys;
}

describe('Locale Parity and B2B Infrastructure Content', () => {
  it('should include all required B2B infrastructure top-level sections including specs and faq', () => {
    const requiredSections = [
      'nav',
      'hero',
      'telemetry',
      'dag',
      'tiers',
      'scenarios',
      'security',
      'specs',
      'faq',
      'diagnostic',
      'footer'
    ];

    for (const section of requiredSections) {
      expect((en as any)[section], `en missing section: ${section}`).toBeDefined();
      expect((zh as any)[section], `zh missing section: ${section}`).toBeDefined();
    }
  });

  it('should have exact key parity between en and zh dictionaries', () => {
    const enKeys = getKeys(en).sort();
    const zhKeys = getKeys(zh).sort();

    const missingInZh = enKeys.filter(k => !zhKeys.includes(k));
    const missingInEn = zhKeys.filter(k => !enKeys.includes(k));

    expect(missingInZh, 'Keys present in EN but missing in ZH').toEqual([]);
    expect(missingInEn, 'Keys present in ZH but missing in EN').toEqual([]);
  });

  it('should not contain empty string translations', () => {
    const enKeys = getKeys(en);
    for (const k of enKeys) {
      const parts = k.split('.');
      let val: any = en;
      for (const p of parts) val = val[p];
      if (typeof val === 'string') {
        expect(val.trim().length, `en.${k} should not be empty`).toBeGreaterThan(0);
      }
    }
  });
});
