import { randomInt, createHmac, randomBytes, timingSafeEqual } from 'crypto';
export function generateOtpCode(digits = 6): string {
  const max = 10 ** digits;
  const n = randomInt(0, max); // CSPRNG
  return n.toString().padStart(digits, '0');
}
export function hmacSha256Hex(pepper: string, data: string): string {
  return createHmac('sha256', pepper).update(data).digest('hex');
}
export function makeSalt(bytes = 16): string {
  return randomBytes(bytes).toString('hex');
}

export function hashOtp(params: {
  pepper: string;
  purpose: string;
  subject: string;
  code: string;
  salt: string;
}) {
  const { pepper, purpose, subject, code, salt } = params;
  return hmacSha256Hex(pepper, `otp|v1|${purpose}|${subject}|${code}|${salt}`);
}
export function stableBindString(bind?: Record<string, any>): string {
  if (!bind) return '';
  const keys = Object.keys(bind).sort();
  return keys.map((k) => `${k}=${String(bind[k] ?? '')}`).join('&');
}
export function hashBind(pepper: string, bind?: Record<string, any>) {
  if (!bind) return undefined;
  const str = stableBindString(bind);
  return hmacSha256Hex(pepper, `bind|v1|${str}`);
}

export function safeEqualHex(a: string, b: string): boolean {
  const ba = Buffer.from(a, 'hex');
  const bb = Buffer.from(b, 'hex');
  if (ba.length !== bb.length) return false;
  return timingSafeEqual(ba, bb);
}
