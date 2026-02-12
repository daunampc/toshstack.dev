// src/utils/formatNumber.ts
export function formatNumber(value: number | string): string {
  if (value === null || value === undefined) return '';
  const num = Number(value);
  if (isNaN(num)) return value.toString();
  return num.toLocaleString('vi-VN');
}
