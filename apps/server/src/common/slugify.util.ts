import slugify from 'slugify';

function detectScript(text: string): 'latin' | 'cjk' {
  if (!text) return 'latin';

  // Japanese (Hiragana, Katakana)
  if (/[\u3040-\u30ff]/.test(text)) return 'cjk';

  // Chinese Han
  if (/[\u4e00-\u9fff]/.test(text)) return 'cjk';

  // Korean Hangul
  if (/[\uac00-\ud7af]/.test(text)) return 'cjk';

  return 'latin';
}
export function createSlug(value: string): string {
  const script = detectScript(value);

  return slugify(value, {
    replacement: '-',
    lower: true,
    strict: script === 'latin',
    trim: true,
  });
}
